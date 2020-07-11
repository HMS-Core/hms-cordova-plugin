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

package com.huawei.hms.cordova.mlkit.generalcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.HMSMLPlugin;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCapture;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureConfig;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureFactory;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureResult;
import com.huawei.hms.mlplugin.card.gcr.MLGcrCaptureUIConfig;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class GeneralCardAnalyse {
    private static final String TAG = GeneralCardAnalyse.class.getName();
    //gcrCaptureConfig
    private String language;

    //gcrCaptureUIConfig
    private int orientation;
    private int scanBoxCornerColor;
    private String tipText;
    private int tipTextColor;
    private int backButtonResId;
    private int photoButtonResId;
    private int torchOffResId;
    private int torchOnResId;

    //Cordova initialize
    String action;
    private Context context;
    private CallbackContext cordovaCallBackContext;

    private final String GENERALCARD_PLUGIN = HMSMLPlugin.Actions.ACTION_GENERALCARD_PLUGIN_DETECTOR.name();

    public void initializerCallBack(String action, JSONObject params, Context context, CallbackContext callbackContext) throws JSONException, IOException {
        Log.i(TAG, "initializerCallBack: Action: " + action);
        this.context = context;
        this.action = action;
        cordovaCallBackContext = callbackContext;
        if (GENERALCARD_PLUGIN.equals(action)) {
            JSONObject gcrCaptureConfig = params.optJSONObject("gcrCaptureConfig");
            if (gcrCaptureConfig != null) {
                language = gcrCaptureConfig.optString("language", "en");
            } else {
                language = "en";
            }
            JSONObject gcrCaptureUIConfig = params.optJSONObject("gcrCaptureUIConfig");
            if (gcrCaptureUIConfig != null) {
                orientation = gcrCaptureUIConfig.optInt("orientation", 0);
                scanBoxCornerColor = gcrCaptureUIConfig.optInt("scanBoxCornerColor", Color.GREEN);
                tipText = gcrCaptureUIConfig.optString("tipText", "Recognizing, align edges");
                tipTextColor = gcrCaptureUIConfig.optInt("tipTextColor", Color.BLUE);
                backButtonResId = gcrCaptureUIConfig.optInt("backButtonResId", 2131165292);
                photoButtonResId = gcrCaptureUIConfig.optInt("photoButtonResId", 2131165293);

                JSONObject torchResId = gcrCaptureUIConfig.optJSONObject("torchResId");
                if (torchResId != null) {
                    torchOffResId = torchResId.optInt("torchOffResId", 2131165295);
                    torchOnResId = torchResId.optInt("torchOnResId", 2131165296);
                } else {
                    torchOffResId = 2131165295;
                    torchOnResId = 2131165296;
                }
            } else {
                orientation = 0;
                scanBoxCornerColor = Color.GREEN;
                tipText = "Recognizing, align edges";
                tipTextColor = Color.BLUE;
                backButtonResId = 2131165292;
                photoButtonResId = 2131165293;
                torchOffResId = 2131165295;
                torchOnResId = 2131165296;
            }
            startCaptureActivity(null, callback);
        }

    }

    private void callbackSuccess(CallbackContext callbackContext, MLGcrCaptureResult cardResult) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("text", cardResult.text.getStringValue());
        jsonObject.putOpt("cardBitmap", HMSMLUtils.bitmapToBase64(cardResult.cardBitmap));
        callbackContext.success(jsonObject);
    }

    private MLGcrCapture.Callback callback = new MLGcrCapture.Callback() {
        @Override
        public int onResult(MLGcrCaptureResult result, Object object) {
            Log.i(TAG, "onResult: ");
            if ((action.equals(GENERALCARD_PLUGIN)) && result == null) {
                cordovaCallBackContext.error("No card image to recognition.");
                return MLGcrCaptureResult.CAPTURE_STOP;
            }
            if (result == null) {
                return MLGcrCaptureResult.CAPTURE_CONTINUE;
            }
            try {
                callbackSuccess(cordovaCallBackContext, result);
            } catch (JSONException e) {
                Log.e(TAG, "error" + e.getMessage());
            }
            return MLGcrCaptureResult.CAPTURE_STOP;
        }

        @Override
        public void onCanceled() {
            cordovaCallBackContext.error("callback onCanceled");
            Log.e(TAG, "callback onCanceled");
        }

        @Override
        public void onFailure(int restCode, Bitmap var2) {
            cordovaCallBackContext.error(restCode + " callback onFailure");
            Log.e(TAG, "callback onFailure");
        }

        @Override
        public void onDenied() {
            cordovaCallBackContext.error("callback onCameraDenied");
            Log.e(TAG, "callback onCameraDenied");
        }
    };

    private void startCaptureActivity(Object object, MLGcrCapture.Callback callBack) {
        MLGcrCaptureConfig cardConfig = new MLGcrCaptureConfig.Factory().setLanguage(language).create();
        MLGcrCaptureUIConfig uiConfig = new MLGcrCaptureUIConfig.Factory()
                .setTipText(tipText)
                .setTipTextColor(tipTextColor)
                .setOrientation(orientation)
                .setScanBoxCornerColor(scanBoxCornerColor)
                .setTorchResId(torchOffResId, torchOnResId)
                .setBackButtonResId(backButtonResId)
                .setPhotoButtonResId(photoButtonResId)
                .create();

        Log.i(TAG, "startCaptureActivity: " + "getTipText:" + uiConfig.getTipText() + "ScanBoxCornerColor :" + uiConfig.getScanBoxCornerColor()
                + " setOrientation: " + uiConfig.getOrientation() + "ScanBoxAspectRatio: " + uiConfig.getScanBoxAspectRatio() + " ScanBoxScreenRatio: " + uiConfig.getScanBoxScreenRatio()
                + " TipTextColor :" + uiConfig.getTipTextColor()
                + "photoresid :" + uiConfig.getPhotoButtonResId() + " backButtonResID: " + uiConfig.getBackButtonResId() + " getTorchOffResId: " + uiConfig.getTorchOffResId() + " getTorchOnResId: " + uiConfig.getTorchOnResId()
        );
        MLGcrCapture ocrManager = MLGcrCaptureFactory.getInstance().getGcrCapture(cardConfig, uiConfig);
        ocrManager.capturePreview(context, object, callBack);
    }

}
