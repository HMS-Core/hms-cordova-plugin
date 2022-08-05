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
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.card.MLCardAnalyzerFactory;
import com.huawei.hms.mlsdk.card.icr.MLIcrAnalyzer;
import com.huawei.hms.mlsdk.card.icr.MLIcrAnalyzerSetting;
import com.huawei.hms.mlsdk.card.icr.MLIdCard;
import com.huawei.hms.mlsdk.common.MLApplication;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLIcrCardAnalyser extends HMSProvider {

    private static final String TAG = MLIcrCardAnalyser.class.getName();

    private MLIcrAnalyzer localAnalyzer;

    private MLIcrAnalyzerSetting setting = null;

    public MLIcrCardAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeIcrCardAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException, IOException {

        JSONObject settings = params.optJSONObject("mlIcrAnalyzerSetting");
        if (settings != null) {
            setting = TextUtils.toObject(settings, MLIcrAnalyzerSetting.class);
        } else {
            callbackContext.error(CordovaErrors.ILLEGAL_PARAMETER);
        }

        MLFrame frame = HMSMLUtils.getFrame(getContext(), params);
        localAnalyzer = MLCardAnalyzerFactory.getInstance().getIcrAnalyzer(setting);

        Task<MLIdCard> task = localAnalyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(new OnSuccessListener<MLIdCard>() {
            public void onSuccess(MLIdCard idCard) {
                Log.i(TAG, "IdCallBack onRecSuccess");
                if (idCard == null) {
                    Log.i(TAG, "IdCallBack onRecSuccess idCardResult is null");
                    return;
                }
                try {
                    JSONObject icrResult = new JSONObject();
                    Bitmap bitmap = idCard.getCardBitmap();

                    if (setting.getSideType().equalsIgnoreCase("FRONT")) {
                        icrResult.putOpt("idNum", idCard.getIdNum());
                        icrResult.putOpt("name", idCard.getName());
                        icrResult.putOpt("retCıde", idCard.getRetCode());
                        icrResult.putOpt("sex", idCard.getSex());
                        icrResult.putOpt("sideType", idCard.getSideType());
                        icrResult.putOpt("cardBitmap", HMSMLUtils.bitmapToBase64(bitmap));
                    } else {
                        icrResult.putOpt("validDate", idCard.getValidDate());
                    }

                    callbackContext.success(icrResult);
                    HMSLogger.getInstance(getContext()).sendSingleEvent("mlIcrPluginDetector");

                } catch (JSONException e) {
                    Log.e(TAG, "MLVnIcrCapture.Callback: error ->" + e.getMessage());
                }

            }
        }).addOnFailureListener(new OnFailureListener() {
            public void onFailure(Exception e) {
                callbackContext.error("callback onFailure");
                HMSLogger.getInstance(getContext()).sendSingleEvent("IcrPluginDetector", "-1");
                Log.e(TAG, "callback onCameraDenied");
            }
        });
    }

    public void createIdCard(final JSONObject params, final CallbackContext callbackContext) {
        final MLApplication mlApplication = MLApplication.getInstance();
        JSONObject mlIcrAnalyzerSetting = params.optJSONObject("mlIcrAnalyzerSetting ");
        if (mlIcrAnalyzerSetting != null) {
            setting = TextUtils.toObject(mlIcrAnalyzerSetting, MLIcrAnalyzerSetting.class);
        } else {
            HMSLogger.getInstance(getContext()).sendSingleEvent("IcrPluginDetector", "-1");
            callbackContext.error(CordovaErrors.ILLEGAL_PARAMETER);
        }
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlIcrPlugin Create ");
        MLIcrAnalyzer.create(mlApplication, setting);
        callbackContext.success();
    }

    public void stopIcrCard(CallbackContext context) throws IOException {
        this.localAnalyzer.stop();
        HMSLogger.getInstance(getContext()).sendSingleEvent("mlIcrPlugin Stop ");
        context.success();
    }

}
