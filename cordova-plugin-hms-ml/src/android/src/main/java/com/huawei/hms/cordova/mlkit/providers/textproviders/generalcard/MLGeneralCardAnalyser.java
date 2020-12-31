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

package com.huawei.hms.cordova.mlkit.providers.textproviders.generalcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCapture;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureConfig;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureFactory;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureResult;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureUIConfig;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class MLGeneralCardAnalyser extends HMSProvider {
    private static final String TAG = MLGeneralCardAnalyser.class.getName();
    private MLGcrCaptureUIConfig mlGcrCaptureUIConfig;
    private CallbackContext cordovaCallBackContext;
    private MLGcrCaptureConfig cardConfig;

    private MLGcrCapture.Callback callback = new MLGcrCapture.Callback() {
        @Override
        public int onResult(MLGcrCaptureResult result, Object object) {
            if (result == null) {
                return MLGcrCaptureResult.CAPTURE_CONTINUE;
            }
            try {
                JSONObject gcrResult = new JSONObject();
                gcrResult.putOpt("text", TextUtils.fromMLTextToJSON(result.text));
                Bitmap image = result.cardBitmap;
                gcrResult.putOpt("cardBitmap", HMSMLUtils.bitmapToBase64(image));
                cordovaCallBackContext.success(gcrResult);
                HMSLogger.getInstance(getContext()).sendSingleEvent("generalcardPluginDetector");

            } catch (JSONException e) {
                Log.e(TAG, "MLGcrCapture.Callback: error ->" + e.getMessage());
            }
            return MLGcrCaptureResult.CAPTURE_STOP;
        }

        @Override
        public void onCanceled() {
            cordovaCallBackContext.error("callback onCanceled");
            HMSLogger.getInstance(getContext()).sendSingleEvent("generalcardPluginDetector", "-1");
            Log.e(TAG, "callback onCanceled");
        }

        @Override
        public void onFailure(int restCode, Bitmap var2) {
            cordovaCallBackContext.error(restCode + " callback onFailure");
            HMSLogger.getInstance(getContext()).sendSingleEvent("generalcardPluginDetector", "-1");
            Log.e(TAG, "callback onFailure");
        }

        @Override
        public void onDenied() {
            cordovaCallBackContext.error("callback onCameraDenied");
            HMSLogger.getInstance(getContext()).sendSingleEvent("generalcardPluginDetector", "-1");
            Log.e(TAG, "callback onCameraDenied");
        }
    };

    public MLGeneralCardAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeGeneralCardAnalyser(final JSONObject params, final CallbackContext callbackContext) {

        cordovaCallBackContext = callbackContext;
        MLGcrCapture ocrManager;
        JSONObject gcrCaptureConfig = params.optJSONObject("gcrCaptureConfig");
        String language;
        if (gcrCaptureConfig != null) {
            language = gcrCaptureConfig.optString("language", "en");
        } else {
            language = "en";
        }
        cardConfig = new MLGcrCaptureConfig.Factory().setLanguage(language).create();
        JSONObject gcrCaptureUIConfig = params.optJSONObject("gcrCaptureUIConfig");
        if (gcrCaptureUIConfig != null) {
            mlGcrCaptureUIConfig = TextUtils.toObject(gcrCaptureUIConfig, MLGcrCaptureUIConfig.class);
            MLGcrCaptureUIConfig uiConfig = new MLGcrCaptureUIConfig.Factory().setTipText(
                mlGcrCaptureUIConfig.getTipText())
                .setTipTextColor(mlGcrCaptureUIConfig.getTipTextColor())
                .setOrientation(mlGcrCaptureUIConfig.getOrientation())
                .create();
            ocrManager = MLGcrCaptureFactory.getInstance().getGcrCapture(cardConfig, uiConfig);

        } else {
            ocrManager = MLGcrCaptureFactory.getInstance().getGcrCapture(cardConfig);
        }
        int captureType = params.optInt("captureType", 0);
        if (captureType == 0) {
            startCaptureActivity(ocrManager, callback);
        } else if (captureType == 1) {
            startCapturePhoto(ocrManager, callback);
        } else if (captureType == 2) {
            startCaptureImage(ocrManager, callback, callbackContext, params);
        }

    }

    private void startCaptureActivity(MLGcrCapture ocrManager, MLGcrCapture.Callback callBack) {
        ocrManager.capturePreview(getContext(), null, callBack);
    }

    private void startCapturePhoto(MLGcrCapture ocrManager, MLGcrCapture.Callback callback) {
        ocrManager.capturePhoto(getContext(), null, callback);
    }

    private void startCaptureImage(MLGcrCapture ocrManager, MLGcrCapture.Callback callback,
        CallbackContext callbackContext, JSONObject params) {
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), callbackContext, "generalcardPluginDetector");
        ocrManager.captureImage(frame.getPreviewBitmap(), null, callback);
    }

    public void getGCRSetting(final CallbackContext callbackContext) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        if (cardConfig != null && mlGcrCaptureUIConfig != null) {
            jsonObject.putOpt("gcrConfigLanguage", cardConfig.getLanguage());
            jsonObject.putOpt("torchOnResId", mlGcrCaptureUIConfig.getTorchOnResId());
            jsonObject.putOpt("tipTextColor", mlGcrCaptureUIConfig.getTipTextColor());
            jsonObject.putOpt("tipText", mlGcrCaptureUIConfig.getTipText());
            jsonObject.putOpt("backButtonResId", mlGcrCaptureUIConfig.getBackButtonResId());
            jsonObject.putOpt("orientation", mlGcrCaptureUIConfig.getOrientation());
            jsonObject.putOpt("photoButtonResId", mlGcrCaptureUIConfig.getPhotoButtonResId());
            jsonObject.putOpt("scanBoxScreenRatio", mlGcrCaptureUIConfig.getScanBoxScreenRatio());
            jsonObject.putOpt("scanBoxCornerColor", mlGcrCaptureUIConfig.getScanBoxCornerColor());
            jsonObject.putOpt("scanBoxAspectRatio", mlGcrCaptureUIConfig.getScanBoxAspectRatio());
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("generalcardPluginDetector");
        } else {
            callbackContext.error(CordovaErrors.ANALYSIS_NULL);
            HMSLogger.getInstance(getContext()).sendSingleEvent("generalcardPluginDetector", "-1");
        }

    }

}
