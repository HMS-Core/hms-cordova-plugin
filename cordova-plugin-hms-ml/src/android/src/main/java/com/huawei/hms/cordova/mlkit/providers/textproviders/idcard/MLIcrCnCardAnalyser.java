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
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCapture;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCaptureConfig;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCaptureFactory;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCaptureResult;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLIcrCnCardAnalyser extends HMSProvider {

    private static final String TAG = MLIcrCnCardAnalyser.class.getName();

    boolean isFront = true;

    private CallbackContext cordovaCallBackContext;

    private MLCnIcrCapture.CallBack idCallBack = new MLCnIcrCapture.CallBack() {
        @Override
        public void onSuccess(MLCnIcrCaptureResult mlCnIcrCaptureResult) {
            Log.i(TAG, "IdCallBack onRecSuccess");

            if (mlCnIcrCaptureResult == null) {
                Log.i(TAG, "IdCallBack onRecSuccess idCardResult is null");
                return;
            }
            try {

                JSONObject icrResult = new JSONObject();
                JSONObject result = new JSONObject();
                if (isFront) {
                    icrResult.put("idNum", mlCnIcrCaptureResult.idNum);
                    icrResult.put("name", mlCnIcrCaptureResult.name);
                    icrResult.put("sex", mlCnIcrCaptureResult.sex);
                    icrResult.put("nation", mlCnIcrCaptureResult.nation);
                    icrResult.put("birthday", mlCnIcrCaptureResult.birthday);
                    icrResult.put("address", mlCnIcrCaptureResult.address);
                } else {
                    icrResult.put("authority", mlCnIcrCaptureResult.authority);
                    icrResult.put("validDate", mlCnIcrCaptureResult.validDate);
                }
                result.putOpt("result", icrResult);
                cordovaCallBackContext.success(result);
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

    public MLIcrCnCardAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeIcrCnCardAnalyser(final JSONObject params, final CallbackContext callbackContext)
            throws JSONException, IOException {
        cordovaCallBackContext = callbackContext;

        int captureType = params.optInt("captureType", 0);
        isFront = params.optBoolean("isFront");

        if (captureType == 0) {
            startCapture(idCallBack, isFront);
        } else if (captureType == 1) {
            startCaptureImage(idCallBack, params);
        }

    }

    private void startCapture(MLCnIcrCapture.CallBack idCallBack, boolean isFlag) {
        MLCnIcrCaptureConfig config = new MLCnIcrCaptureConfig.Factory().setFront(isFlag).create();
        MLCnIcrCapture icrCapture = MLCnIcrCaptureFactory.getInstance().getIcrCapture(config);
        icrCapture.capture(idCallBack, getContext());
    }

    private void startCaptureImage(MLCnIcrCapture.CallBack idCallBack, JSONObject params)
            throws JSONException, IOException {
        Bitmap bitmap = null;
        String filePath = params.getString("filePath");
        Uri uri = Uri.parse(filePath);
        MLCnIcrCaptureConfig config = new MLCnIcrCaptureConfig.Factory().setFront(isFront).create();
        MLCnIcrCapture icrCapture = MLCnIcrCaptureFactory.getInstance().getIcrCapture(config);
        if (!Uri.EMPTY.equals(uri)) {
            bitmap = MediaStore.Images.Media.getBitmap(getContext().getContentResolver(), uri);
        }
        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(frame, getContext(), cordovaCallBackContext, "IcrCnpluginDetector");
        icrCapture.captureImage(bitmap, idCallBack);
    }

    public void create(CallbackContext context) {
        MLCnIcrCaptureConfig config = new MLCnIcrCaptureConfig.Factory().create();
        HMSLogger.getInstance(getContext()).sendSingleEvent("create()");
        context.success(config.toString());
    }

    public void getIcrCnCapture(CallbackContext context) {
        MLCnIcrCaptureConfig config = new MLCnIcrCaptureConfig.Factory().create();
        MLCnIcrCapture icrCapture = MLCnIcrCaptureFactory.getInstance().getIcrCapture(config);
        HMSLogger.getInstance(getContext()).sendSingleEvent("getIcrCnCapture");
        context.success(icrCapture.toString());
    }

    public void getInstance(CallbackContext context) {
        MLCnIcrCaptureFactory icrCapture = MLCnIcrCaptureFactory.getInstance();
        HMSLogger.getInstance(getContext()).sendSingleEvent("getIcrCnInstance");
        context.success(icrCapture.toString());
    }

}
