/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.mlkit.providers.textproviders.bankcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureResult;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCapture;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureConfig;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureFactory;
import com.huawei.hms.mlsdk.card.MLBcrAnalyzerFactory;
import com.huawei.hms.mlsdk.card.bcr.MLBankCard;
import com.huawei.hms.mlsdk.card.bcr.MLBcrAnalyzer;
import com.huawei.hms.mlsdk.card.bcr.MLBcrAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

public class MLBankCardAnalyser extends HMSProvider {
    private static final String TAG = MLBankCardAnalyser.class.getName();
    private MLBcrAnalyzer sdkAnalyzer;
    private CallbackContext callbackContext;
    private int detectType;
    private MLBcrAnalyzerSetting mlBcrAnalyzerSetting;
    private MLBcrCaptureConfig config;

    private MLBcrCapture.Callback banCallback = new MLBcrCapture.Callback() {
        @Override
        public void onSuccess(MLBcrCaptureResult bankCardResult) {
            if (bankCardResult == null) {
                Log.i(MLBankCardAnalyser.TAG, "CallBack onRecSuccess idCardResult is null");
            } else {
                formatIdCardResult(bankCardResult, callbackContext);
            }
        }

        @Override
        public void onCanceled() {
            onCanceledCallBack(callbackContext);
        }

        @Override
        public void onFailure(int recCode, Bitmap bitmap) {
            JSONObject jsonObject = new JSONObject();
            try {
                jsonObject.putOpt("redCode", recCode);
                jsonObject.putOpt("Bitmap", HMSMLUtils.bitmapToBase64(bitmap));
            } catch (JSONException e) {
                Log.e(TAG, "error" + e.getMessage());
            }
            errorCallBack(jsonObject, callbackContext);
        }

        @Override
        public void onDenied() {
            callBackOnDenied(callbackContext);
        }
    };

    public MLBankCardAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializerBCRAnalyser(final JSONObject params, final CallbackContext callbackContext) {
        this.callbackContext = callbackContext;

        detectType = params.optInt("detectType", 0);

        switch (detectType) {
            case 0:
                Log.i(TAG, "initializerCallBack: BankCard Detect on SDK");
                bankCardAnalyser(params, callbackContext);
                break;
            case 1:
                Log.i(TAG, "initializerCallBack: BankCard Detect with Plugin");
                startCaptureActivity(params, this.banCallback);
                break;
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("bankCardDetector", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    private void bankCardAnalyser(final JSONObject params, final CallbackContext callbackContext) {
        HMSMethod method = new HMSMethod("bankCardDetector");
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "bankCardDetector");
        JSONObject mLBcrAnalyzerSettingJSON = params.optJSONObject("mLBcrAnalyzerSetting");

        if (mLBcrAnalyzerSettingJSON != null) {
            String langType = mLBcrAnalyzerSettingJSON.optString("langType", "en");
            int resultType = mLBcrAnalyzerSettingJSON.optInt("resultType", 2);
            if (!langType.isEmpty()) {
                mlBcrAnalyzerSetting = new MLBcrAnalyzerSetting.Factory().setLangType(langType)
                    .setResultType(resultType)
                    .create();
            } else {
                mlBcrAnalyzerSetting = new MLBcrAnalyzerSetting.Factory().create();
            }
        } else {
            mlBcrAnalyzerSetting = new MLBcrAnalyzerSetting.Factory().create();
        }

        sdkAnalyzer = MLBcrAnalyzerFactory.getInstance().getBcrAnalyzer(mlBcrAnalyzerSetting);
        Task<MLBankCard> task = sdkAnalyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(
            PlatformUtils.successListener(method, getActivity(), callbackContext, TextUtils.FROM_BCR_TO_JSON_OBJECT))
            .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
    }

    public void startCaptureActivity(final JSONObject params, final MLBcrCapture.Callback Callback) {
        int resultType = 2;
        int orientation = 0;
        JSONObject mLBcrCaptureConfig = params.optJSONObject("mLBcrCaptureConfig");
        if (mLBcrCaptureConfig != null) {
            resultType = mLBcrCaptureConfig.optInt("resultType", 2);
            orientation = mLBcrCaptureConfig.optInt("orientation", 0);
        }
        config = new MLBcrCaptureConfig.Factory().setOrientation(orientation).setResultType(resultType).create();
        MLBcrCapture bcrCapture = MLBcrCaptureFactory.getInstance().getBcrCapture(config);
        bcrCapture.captureFrame(getContext(), Callback);
    }

    private void formatIdCardResult(final MLBcrCaptureResult bankCardResult, final CallbackContext callbackContext) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.putOpt("number", bankCardResult.getNumber());
            Bitmap originalBitmap = bankCardResult.getOriginalBitmap();
            Bitmap numberBitmap = bankCardResult.getNumberBitmap();
            jsonObject.putOpt("expire", bankCardResult.getExpire());
            jsonObject.putOpt("issuer", bankCardResult.getIssuer());
            jsonObject.putOpt("type", bankCardResult.getType());
            jsonObject.putOpt("organization", bankCardResult.getOrganization());
            jsonObject.putOpt("originalBitmap", HMSMLUtils.bitmapToBase64(originalBitmap));
            jsonObject.putOpt("numberBitmap", HMSMLUtils.bitmapToBase64(numberBitmap));
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetector");
        } catch (JSONException e) {
            callbackContext.error(e.getMessage());
            HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetector", e.getMessage());
        }
    }

    private void errorCallBack(final JSONObject jsonObject, final CallbackContext callbackContext) {
        callbackContext.error(jsonObject);
        HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetector", "-1");
    }

    private void onCanceledCallBack(final CallbackContext callbackContext) {
        String result = "Call back on RecCanceled";
        callbackContext.error(result);
        HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetector", "-1");
    }

    private void callBackOnDenied(final CallbackContext callbackContext) {
        String result = "Callback on Camera Denied";
        callbackContext.error(result);
        HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetector", "-1");
    }

    public void stopBankCardAnalyser(final CallbackContext callbackContext, CordovaInterface cordovaInterface) {
        if (sdkAnalyzer == null) {
            callbackContext.error("Analyser is not initialized.");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("bankCardDetectorStop", "-1");
        } else {
            sdkAnalyzer.stop();
            sdkAnalyzer = null;
            callbackContext.success("Analyser stopped");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("bankCardDetectorStop");
        }
    }

    public void getBCRSetting(final CallbackContext callbackContext) throws JSONException {
        if (sdkAnalyzer == null) {
            callbackContext.error("Analyser is not initialized.");
            HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetectorSetting", "-1");
        } else {
            JSONObject object = new JSONObject();
            if (detectType == 0) {
                object.putOpt("langType", mlBcrAnalyzerSetting.getLangType());
                object.putOpt("recMode", mlBcrAnalyzerSetting.getRecMode());
                object.putOpt("resultType", mlBcrAnalyzerSetting.getResultType());
                object.putOpt("recType", mlBcrAnalyzerSetting.getRecType());
            } else {
                object.putOpt("resultType", config.getResultType());
                object.putOpt("orientation", config.getOrientation());
                object.putOpt("recMode", config.getRecMode());
            }
            callbackContext.success(object);
            HMSLogger.getInstance(getContext()).sendSingleEvent("bankCardDetectorSetting");
        }
    }
}
