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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.object;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.PlatformUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.objects.MLObject;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzer;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzerSetting;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLImageObjectAnalyser extends CordovaBaseModule {

    private final Context context;

    private String TAG = MLImageObjectAnalyser.class.getName();

    private MLObjectAnalyzer analyzer;

    private MLObjectAnalyzerSetting setting;

    public MLImageObjectAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void objectAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        JSONObject params = args.optJSONObject(0);
        MLFrame frame = HMSMLUtils.getFrame(context, params);
        CordovaHelpers.frameController(frame, context, promise, "objectAnalyser");
        int syncType = params.optInt("syncType", 0);

        JSONObject mlObjectAnalyserSetting = params.optJSONObject("mlObjectAnalyserSetting");

        corPack.getCordova().getThreadPool().execute(() -> {
            if (mlObjectAnalyserSetting != null) {
                setting = TextUtils.toObject(mlObjectAnalyserSetting, MLObjectAnalyzerSetting.class);
                analyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer(setting);
            } else {
                analyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer();
            }

            switch (syncType) {
                case 0: {
                    Task<List<MLObject>> task = analyzer.asyncAnalyseFrame(frame);
                    task.addOnSuccessListener(
                            PlatformUtils.successListener(promise, TextUtils.FROM_MLOBJECT_TO_JSON_OBJECT))
                        .addOnFailureListener(PlatformUtils.failureListener(promise));
                    break;
                }
                case 1: {
                    SparseArray<MLObject> mlObjectSparseArray = analyzer.analyseFrame(frame);
                    if (mlObjectSparseArray != null) {
                        promise.success(TextUtils.fromSparseArrayImageObjectJSON(mlObjectSparseArray));
                    }
                    break;
                }
                default:
                    promise.error("analyse Mode can be only 0 or 1");
                    break;
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void objectAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.SERVICE_FAILURE));
            return;
        }
        corPack.getCordova().getThreadPool().execute(() -> {
            try {
                analyzer.stop();
                analyzer = null;
                promise.success("closed");
            } catch (IOException e) {
                promise.error(e.getMessage());
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void getObjectSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject object = new JSONObject();
            object.putOpt("analyzerType", setting.getAnalyzerType());
            object.putOpt("isClassificationAllowed", setting.isClassificationAllowed());
            object.putOpt("isMultipleResultsAllowed", setting.isMultipleResultsAllowed());
            promise.success(object);
        }
    }
}
