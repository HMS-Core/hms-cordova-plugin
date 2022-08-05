/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.mlkit.providers.textproviders.idcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlplugin.card.icr.vn.MLVnIcrCapture;
import com.huawei.hms.mlplugin.card.icr.vn.MLVnIcrCaptureConfig;
import com.huawei.hms.mlplugin.card.icr.vn.MLVnIcrCaptureFactory;
import com.huawei.hms.mlplugin.card.icr.vn.MLVnIcrCaptureResult;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLIcrVnCardAnalyser extends HMSProvider {

    private static final String TAG = MLIcrVnCardAnalyser.class.getName();

    private CallbackContext cordovaCallBackContext;

    private MLVnIcrCapture.CallBack idCallBack = new MLVnIcrCapture.CallBack() {

        @Override
        public void onSuccess(MLVnIcrCaptureResult idCardResult) {
            Log.i(TAG, "IdCallBack onRecSuccess");

            if (idCardResult == null) {
                Log.i(TAG, "IdCallBack onRecSuccess idCardResult is null");
                return;
            }
            try {
                JSONObject icrResult = new JSONObject();
                Bitmap bitmap = idCardResult.getCardBitmap();

                icrResult.putOpt("birthday", idCardResult.getBirthday());
                icrResult.putOpt("idNum", idCardResult.getIdNum());
                icrResult.putOpt("name", idCardResult.getName());
                icrResult.putOpt("sex", idCardResult.getSex());
                icrResult.putOpt("cardBitmap", HMSMLUtils.bitmapToBase64(bitmap));

                cordovaCallBackContext.success(icrResult);
                HMSLogger.getInstance(getContext()).sendSingleEvent("mlIcrVnPluginDetector");

            } catch (JSONException e) {
                Log.e(TAG, "MLVnIcrCapture.Callback: error ->" + e.getMessage());
            }

        }

        @Override
        public void onCanceled() {
            cordovaCallBackContext.error("callback onCanceled");
            HMSLogger.getInstance(getContext()).sendSingleEvent("IcrVnPluginDetector", "-1");
            Log.e(TAG, "callback onCanceled");
        }

        @Override
        public void onFailure(int restCode, Bitmap bitmap) {
            cordovaCallBackContext.error(restCode + " callback onFailure");
            HMSLogger.getInstance(getContext()).sendSingleEvent("IcrVnPluginDetector", "-1");
            Log.e(TAG, "callback onFailure");
        }

        @Override
        public void onDenied() {
            cordovaCallBackContext.error("callback onCameraDenied");
            HMSLogger.getInstance(getContext()).sendSingleEvent("IcrVnPluginDetector", "-1");
            Log.e(TAG, "callback onCameraDenied");
        }

    };

    public MLIcrVnCardAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeIcrVnCardAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException, IOException {

        cordovaCallBackContext = callbackContext;

        int captureType = params.optInt("captureType");
        if (captureType == 0) {
            startCapture(idCallBack);
        } else if (captureType == 1) {
            startCaptureImage(idCallBack, params);
        }
    }

    private void startCapture(MLVnIcrCapture.CallBack idCallBack) {
        MLVnIcrCaptureConfig config = new MLVnIcrCaptureConfig.Factory().create();
        MLVnIcrCapture icrCapture = MLVnIcrCaptureFactory.getInstance().getIcrCapture(config);
        icrCapture.capture(idCallBack, getContext());

    }

    private void startCaptureImage(MLVnIcrCapture.CallBack idCallBack, JSONObject params)
        throws JSONException, IOException {
        Bitmap bitmap = null;
        String filePath = params.getString("filePath");
        Uri uri = Uri.parse(filePath);
        MLVnIcrCaptureConfig config = new MLVnIcrCaptureConfig.Factory().create();
        MLVnIcrCapture icrCapture = MLVnIcrCaptureFactory.getInstance().getIcrCapture(config);
        if (!Uri.EMPTY.equals(uri)) {
            bitmap = MediaStore.Images.Media.getBitmap(getContext().getContentResolver(), uri);
        }
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), cordovaCallBackContext, "IcrVnpluginDetector");
        icrCapture.captureImage(bitmap, idCallBack);
    }

    public void create(CallbackContext context) {
        MLVnIcrCaptureConfig config = new MLVnIcrCaptureConfig.Factory().create();
        HMSLogger.getInstance(getContext()).sendSingleEvent("create()");
        context.success(config.toString());
    }

    public void getIcrVnCapture(CallbackContext context) {
        MLVnIcrCaptureConfig config = new MLVnIcrCaptureConfig.Factory().create();
        MLVnIcrCapture icrCapture = MLVnIcrCaptureFactory.getInstance().getIcrCapture(config);
        HMSLogger.getInstance(getContext()).sendSingleEvent("getIcrVnCapture");
        context.success(icrCapture.toString());
    }

    public void getInstance(CallbackContext context) {
        MLVnIcrCaptureFactory icrCapture = MLVnIcrCaptureFactory.getInstance();
        HMSLogger.getInstance(getContext()).sendSingleEvent("getIcrVnInstance");
        context.success(icrCapture.toString());
    }

}
