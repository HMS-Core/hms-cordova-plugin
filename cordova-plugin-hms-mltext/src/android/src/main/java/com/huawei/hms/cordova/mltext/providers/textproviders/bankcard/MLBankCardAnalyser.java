/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mltext.providers.textproviders.bankcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mltext.helpers.CordovaErrors;
import com.huawei.hms.cordova.mltext.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mltext.interfaces.HMSProvider;
import com.huawei.hms.cordova.mltext.logger.HMSLogger;
import com.huawei.hms.cordova.mltext.logger.HMSMethod;
import com.huawei.hms.cordova.mltext.utils.HMSMLUtils;
import com.huawei.hms.cordova.mltext.utils.PlatformUtils;
import com.huawei.hms.cordova.mltext.utils.TextUtils;
import com.huawei.hms.mlplugin.card.bcr.CustomView;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCapture;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureConfig;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureFactory;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureResult;
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

    CustomView.OnBcrResultCallback onBcrResultCallback = new CustomView.OnBcrResultCallback() {
        @Override
        public void onBcrResult(MLBcrCaptureResult idCardResult) {

            Log.i(TAG, "onBcrResultCallback onBcrResult");
            if (idCardResult.getErrorCode() == 0) {
                try {
                    JSONObject icrResult = new JSONObject();
                    Bitmap bitmap = idCardResult.getOriginalBitmap();
                    icrResult.putOpt("bitmap", bitmap);
                    icrResult.putOpt("number", idCardResult.getNumber());
                    callbackContext.success(icrResult);
                    HMSLogger.getInstance(getContext()).sendSingleEvent("mlBCRPluginDetector");

                } catch (JSONException e) {
                    Log.e(TAG, "MLBcrCapture.Callback: error ->" + e.getMessage());
                }
            } else {
                Log.i(TAG, "onBcrResultCallback onBcrResult idCardResult is null");
                callbackContext.error("idCardResult is null");
            }

        }
    };

    private int detectType;

    private MLBcrAnalyzerSetting mlBcrAnalyzerSetting;

    private MLBcrCaptureConfig config;

    private CustomView.Builder builder = null;

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

    public void startCaptureActivity(final JSONObject params, final MLBcrCapture.Callback callback) {
        int resultType = 2;
        int orientation = 0;
        JSONObject mLBcrCaptureConfig = params.optJSONObject("mLBcrCaptureConfig");
        if (mLBcrCaptureConfig != null) {
            resultType = mLBcrCaptureConfig.optInt("resultType", 2);
            orientation = mLBcrCaptureConfig.optInt("orientation", 0);
        }
        config = new MLBcrCaptureConfig.Factory().setOrientation(orientation).setResultType(resultType).create();
        MLBcrCapture bcrCapture = MLBcrCaptureFactory.getInstance().getBcrCapture(config);
        bcrCapture.captureFrame(getContext(), callback);
    }

    private void formatIdCardResult(final MLBcrCaptureResult bankCardResult, final CallbackContext callbackContext) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.putOpt("number", bankCardResult.getNumber());
            jsonObject.putOpt("errorCode", bankCardResult.getErrorCode());
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

    public void setOnBcrResultCallback(final CallbackContext context) throws JSONException {
        this.builder = new CustomView.Builder().setOnBcrResultCallback(onBcrResultCallback);
        HMSLogger.getInstance(getContext()).sendSingleEvent("setOnBcrResultCallback");
        context.success(builder.toString());
    }

    public void setRecMode(final CallbackContext context, JSONObject params) throws JSONException {
        if (params != null) {
            int recMode = params.getInt("recMode");
            this.builder = new CustomView.Builder().setRecMode(recMode);
            HMSLogger.getInstance(getContext()).sendSingleEvent("setRecMode");
            context.success(builder.toString());
        } else {
            HMSLogger.getInstance(getContext()).sendSingleEvent("setRecMode failure");
            context.error(CordovaErrors.ANALYSIS_FAILURE);
        }

    }

    public void setResultType(final CallbackContext context, JSONObject params) throws JSONException {
        if (params != null) {
            int resultType = params.getInt("resultType");
            this.builder = new CustomView.Builder().setResultType(resultType);

            HMSLogger.getInstance(getContext()).sendSingleEvent("resultType");
            context.success(builder.toString());
        } else {
            HMSLogger.getInstance(getContext()).sendSingleEvent("resultType failure");
            context.error(CordovaErrors.ANALYSIS_FAILURE);
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
