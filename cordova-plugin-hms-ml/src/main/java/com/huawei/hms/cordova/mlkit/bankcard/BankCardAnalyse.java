/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.mlkit.bankcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import org.json.JSONObject;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCapture;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureConfig;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureFactory;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureResult;
import com.huawei.hms.mlsdk.card.MLCardAnalyzerFactory;
import com.huawei.hms.mlsdk.card.bcr.MLBankCard;
import com.huawei.hms.mlsdk.card.bcr.MLBcrAnalyzer;
import com.huawei.hms.mlsdk.card.bcr.MLBcrAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLFrame;

import java.io.IOException;

public class BankCardAnalyse extends CordovaPlugin {

    private static final String TAG = BankCardAnalyse.class.getName();
    private Context context;
    private CallbackContext cordovaCallBackContext;
    private MLBcrAnalyzer sdkAnalyzer;

    public void initializerCallBack(JSONObject params, Context context, CallbackContext callbackContext) throws IOException, JSONException {
        this.context = context;
        cordovaCallBackContext = callbackContext;
        int detectType = params.optInt("detectType", 0);
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
                callbackContext.error("Detect type should be 0 or 1 ");
                break;
        }
    }

    private void bankCardAnalyser(JSONObject params, CallbackContext callbackContext) throws IOException, JSONException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        Log.i(TAG, "bankCardAnalyserDetector: ");
        JSONObject mLBcrAnalyzerSettingJSON = params.optJSONObject("mLBcrAnalyzerSetting");
        MLBcrAnalyzerSetting mlBcrAnalyzerSetting;
        if (mLBcrAnalyzerSettingJSON != null) {
            String langType = mLBcrAnalyzerSettingJSON.optString("langType", "zh");
            if (!langType.isEmpty()) {
                mlBcrAnalyzerSetting = new MLBcrAnalyzerSetting.Factory()
                        .setLangType(langType)
                        .create();
            } else {
                mlBcrAnalyzerSetting = new MLBcrAnalyzerSetting.Factory()
                        .create();
            }
        } else {
            mlBcrAnalyzerSetting = new MLBcrAnalyzerSetting.Factory()
                    .create();
        }
        Log.i(TAG, "mlBcrAnalyzerSetting: langType: " + mlBcrAnalyzerSetting.getLangType());
        sdkAnalyzer = MLCardAnalyzerFactory.getInstance().getBcrAnalyzer(mlBcrAnalyzerSetting);
        Task<MLBankCard> task = sdkAnalyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(bankCard -> {
            try {
                callbackContext.success(TextUtils.bankCardResultToJSON(bankCard));
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
            }
        }).addOnFailureListener(e ->
                callbackContext.error(e.getMessage()));
    }


    private MLBcrCapture.Callback banCallback = new MLBcrCapture.Callback() {
        @Override
        public void onSuccess(MLBcrCaptureResult bankCardResult) {
            if (bankCardResult == null)
                Log.i(BankCardAnalyse.TAG, "CallBack onRecSuccess idCardResult is null");
            else
                formatIdCardResult(bankCardResult, cordovaCallBackContext);
        }

        @Override
        public void onCanceled() {
            onCanceledCallBack(cordovaCallBackContext);
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
            errorCallBack(jsonObject, cordovaCallBackContext);
        }

        @Override
        public void onDenied() {
            callBackOnDenied(cordovaCallBackContext);
        }
    };

    public void startCaptureActivity(JSONObject params, MLBcrCapture.Callback Callback) {
        JSONObject mLBcrCaptureConfig = params.optJSONObject("mLBcrCaptureConfig");
        int orientation;
        if (mLBcrCaptureConfig != null) {
            orientation = mLBcrCaptureConfig.optInt("orientation", 0);// captureConfig Default Value is 0 MLBcrCaptureConfig.ORIENTATION_AUTO
        } else {
            orientation = 0;
        }
        MLBcrCaptureConfig config = new MLBcrCaptureConfig.Factory()
                .setOrientation(orientation)
                .create();
        MLBcrCapture bcrCapture = MLBcrCaptureFactory.getInstance().getBcrCapture(config);
        bcrCapture.captureFrame(context, Callback);
    }

    private void formatIdCardResult(MLBcrCaptureResult bankCardResult, CallbackContext callbackContext) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.putOpt("number", bankCardResult.getNumber());
            jsonObject.putOpt("expire", bankCardResult.getExpire());
            jsonObject.putOpt("type", bankCardResult.getType());
            jsonObject.putOpt("issuer", bankCardResult.getIssuer());
            Bitmap originalBitmap = bankCardResult.getOriginalBitmap();
            Bitmap numberBitmap = bankCardResult.getNumberBitmap();
            jsonObject.putOpt("originalBitmap", HMSMLUtils.bitmapToBase64(originalBitmap));
            jsonObject.putOpt("numberBitmap", HMSMLUtils.bitmapToBase64(numberBitmap));
            callbackContext.success(jsonObject);
        } catch (JSONException e) {
            callbackContext.error(e.getMessage());
        }
    }

    private void errorCallBack(JSONObject jsonObject, CallbackContext callbackContext) {
        callbackContext.error(jsonObject);
    }

    private void onCanceledCallBack(CallbackContext callbackContext) {
        String result = "Call back on RecCanceled";
        callbackContext.error(result);
    }

    private void callBackOnDenied(CallbackContext callbackContext) {
        String result = "Callback on Camera Denied";
        callbackContext.error(result);
    }

    public void stopBankCardAnalyser(CallbackContext callbackContext) {
        if (sdkAnalyzer == null)
            callbackContext.error("Analyser is not initialized.");
        else {
            sdkAnalyzer.stop();
            sdkAnalyzer = null;
        }
    }
}
