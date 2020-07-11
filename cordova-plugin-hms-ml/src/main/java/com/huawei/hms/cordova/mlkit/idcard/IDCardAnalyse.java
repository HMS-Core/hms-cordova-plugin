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

package com.huawei.hms.cordova.mlkit.idcard;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCapture;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCaptureConfig;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCaptureFactory;
import com.huawei.hms.mlplugin.card.icr.cn.MLCnIcrCaptureResult;
import com.huawei.hms.mlsdk.card.MLCardAnalyzerFactory;
import com.huawei.hms.mlsdk.card.icr.MLIcrAnalyzer;
import com.huawei.hms.mlsdk.card.icr.MLIcrAnalyzerSetting;
import com.huawei.hms.mlsdk.card.icr.MLIdCard;
import com.huawei.hms.mlsdk.card.icr.cloud.MLRemoteIcrAnalyzer;
import com.huawei.hms.mlsdk.card.icr.cloud.MLRemoteIcrAnalyzerSetting;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class IDCardAnalyse {
    private static final String TAG = IDCardAnalyse.class.getSimpleName();
    private Context context;
    private CallbackContext cordovaCallBackContext;

    private boolean isFront;
    private String countryCode;

    public void initializerIDCardAnalyser(String action, JSONObject params, Context context, CallbackContext callbackContext) throws JSONException, IOException {
        this.context = context;
        cordovaCallBackContext = callbackContext;
        if (!params.has("detectType") || params.isNull("detectType")) {
            Log.e(TAG, "Illegal argument. detectType field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. detectType field is mandatory and it must not be null.");
            return;
        }
        if (!params.has("isFront") || params.isNull("isFront")) {
            Log.e(TAG, "Illegal argument. isFront field is mandatory and it must not be null.");
            callbackContext.error("Illegal argument. isFront field is mandatory and it must not be null.");
            return;
        }
        int detectType = params.getInt("detectType");
        boolean isRemote = params.optBoolean("isRemote", false);
        isFront = params.getBoolean("isFront");
        countryCode = params.optString("countryCode", "CN");
        Log.i(TAG, "initializerIDCardAnalyser: isFront" + isFront);
        Log.i(TAG, "initializerIDCardAnalyser: detectType" + detectType);
        switch (detectType) {
            case 0:
                if (isRemote) {
                    Log.i(TAG, "initializerIDCardAnalyser: Remote");
                    remoteAnalyzer(context, params, callbackContext);
                } else {
                    Log.i(TAG, "initializerIDCardAnalyser: Local");
                    localAnalyzer(context, params, callbackContext);
                }
                break;
            case 1:
                Log.i(TAG, "initializerIDCardAnalyser: Plugin");
                this.startCaptureActivity(idCallBack, isFront, isRemote);
                break;
            default:
                callbackContext.error("detectType can only be 0 or 1");
        }
    }

    private void remoteAnalyzer(Context context, JSONObject params, CallbackContext callbackContext) throws IOException, JSONException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        MLRemoteIcrAnalyzerSetting setting =
                new MLRemoteIcrAnalyzerSetting.Factory()
                        .setSideType((isFront) ? MLRemoteIcrAnalyzerSetting.FRONT : MLRemoteIcrAnalyzerSetting.BACK)
                        .setCountryCode(countryCode)
                        .create();
        MLRemoteIcrAnalyzer remoteIcrAnalyzer = MLCardAnalyzerFactory.getInstance().getRemoteIcrAnalyzer(setting);
        Task<MLIdCard> task = remoteIcrAnalyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(mlIdCard -> {
            try {
                callbackContext.success(idCardResultToJSON(mlIdCard, isFront));
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
            }
        }).addOnFailureListener(e -> {
            callbackContext.error(e.getMessage());
        });
    }

    private void localAnalyzer(Context context, JSONObject params, CallbackContext callbackContext) throws IOException, JSONException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        MLIcrAnalyzerSetting setting = new MLIcrAnalyzerSetting.Factory()
                .setSideType((isFront) ? MLIcrAnalyzerSetting.FRONT : MLIcrAnalyzerSetting.BACK)
                .setCountryCode(countryCode)
                .create();
        MLIcrAnalyzer localAnalyzer = MLCardAnalyzerFactory.getInstance().getIcrAnalyzer(setting);
        Task<MLIdCard> task = localAnalyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(mlIdCard -> {
            try {
                if (mlIdCard != null)
                    callbackContext.success(idCardResultToJSON(mlIdCard, isFront));
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
            }
        }).addOnFailureListener(e -> {
            callbackContext.error(e.getMessage());
        });
    }

    private JSONObject idCardResultToJSON(MLIdCard mlIdCard, boolean isFront) throws JSONException {
        JSONObject cardResult = new JSONObject();
        cardResult.putOpt("address", mlIdCard.getAddress());
        cardResult.putOpt("authority", mlIdCard.getAuthority());
        cardResult.putOpt("birthday", mlIdCard.getBirthday());
        cardResult.putOpt("idNum", mlIdCard.getIdNum());
        cardResult.putOpt("name", mlIdCard.getName());
        cardResult.putOpt("nation", mlIdCard.getNation());
        cardResult.putOpt("retCode", mlIdCard.getRetCode());
        cardResult.putOpt("sex", mlIdCard.getSex());
        cardResult.putOpt("sideType", mlIdCard.getSideType());
        cardResult.putOpt("cardBitmap", HMSMLUtils.bitmapToBase64(mlIdCard.getCardBitmap()));
        return cardResult;
    }


    private JSONObject formatIdCardResult(MLCnIcrCaptureResult idCardResult, boolean isFront) throws JSONException {
        JSONObject idCardResultJSON = new JSONObject();
        if (isFront) {
            idCardResultJSON.putOpt("name", idCardResult.name);
            idCardResultJSON.putOpt("address", idCardResult.address);
            idCardResultJSON.putOpt("authority", idCardResult.authority);
            idCardResultJSON.putOpt("birthday", idCardResult.birthday);
            idCardResultJSON.putOpt("idNum", idCardResult.idNum);
            idCardResultJSON.putOpt("nation", idCardResult.nation);
            idCardResultJSON.putOpt("sex", idCardResult.sex);
            idCardResultJSON.putOpt("sideType", idCardResult.sideType);
            idCardResultJSON.putOpt("cardBitmap", HMSMLUtils.bitmapToBase64(idCardResult.cardBitmap));
        } else {
            idCardResultJSON.putOpt("validDate", idCardResult.validDate);
        }
        return idCardResultJSON;
    }

    private MLCnIcrCapture.CallBack idCallBack = new MLCnIcrCapture.CallBack() {
        @Override
        public void onSuccess(MLCnIcrCaptureResult idCardResult) {
            Log.i(TAG, "IdCallBack onRecSuccess");
            if (idCardResult == null) {
                cordovaCallBackContext.error("idCardResult is null");
                return;
            }
            if (isFront) {
                try {
                    cordovaCallBackContext.success(formatIdCardResult(idCardResult, true));
                } catch (JSONException e) {
                    Log.e(TAG, "error" + e.getMessage());
                }
            } else {
                try {
                    cordovaCallBackContext.success(formatIdCardResult(idCardResult, false));
                } catch (JSONException e) {
                    Log.e(TAG, "error" + e.getMessage());
                }
            }
        }

        @Override
        public void onCanceled() {
            cordovaCallBackContext.error("IdCallBackonRecCanceled");
            Log.i(TAG, "IdCallBackonRecCanceled");
        }

        @Override
        public void onFailure(int retCode, Bitmap bitmap) {
            cordovaCallBackContext.error("IdCallBackonRecFailed. " + "retcode is :" + retCode);
            Log.i(TAG, "IdCallBackonRecFailed");
        }

        @Override
        public void onDenied() {
            cordovaCallBackContext.error("IdCallBackonCameraDenied");
            Log.i(TAG, "IdCallBackonCameraDenied");
        }
    };

    private void startCaptureActivity(MLCnIcrCapture.CallBack callback, boolean isFront, boolean isRemote) {
        MLCnIcrCaptureConfig config = new MLCnIcrCaptureConfig.Factory()
                .setFront(isFront)
                .setRemote(isRemote)
                .create();
        MLCnIcrCapture icrCapture = MLCnIcrCaptureFactory.getInstance().getIcrCapture(config);
        icrCapture.capture(callback, context);
    }
}
