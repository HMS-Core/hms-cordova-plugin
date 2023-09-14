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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.imgseg;

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
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationAnalyzer;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationSetting;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLImageSegmentationAnalyser extends CordovaBaseModule {
    private static final String TAG = MLImageSegmentationAnalyser.class.getName();

    private final Context context;

    private MLImageSegmentationAnalyzer imageSegmentationAnalyzer;

    private MLImageSegmentationSetting setting;

    public MLImageSegmentationAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void imgSegmentation(final CorPack corPack, JSONArray args, final Promise promise) {
        JSONObject params = args.optJSONObject(0);
        MLFrame segFrame = HMSMLUtils.getFrame(context, params);

        corPack.getCordova().getThreadPool().execute(() -> {
            CordovaHelpers.frameController(segFrame, context, promise, "imageSegmentation");
            JSONObject imageSegmentationSetting = params.optJSONObject("imageSegmentationSetting");
            int analyseMode = params.optInt("analyseMode");
            if (imageSegmentationSetting != null) {
                setting = TextUtils.toObject(imageSegmentationSetting, MLImageSegmentationSetting.class);
            } else {
                setting = new MLImageSegmentationSetting.Factory().create();
            }
            imageSegmentationAnalyzer = MLAnalyzerFactory.getInstance().getImageSegmentationAnalyzer(setting);

            switch (analyseMode) {
                case 0:
                    Task<MLImageSegmentation> task = imageSegmentationAnalyzer.asyncAnalyseFrame(segFrame);
                    task.addOnSuccessListener(
                            PlatformUtils.successListener(promise, TextUtils.FROM_IMGSEG_TO_JSON_OBJECT))
                        .addOnFailureListener(PlatformUtils.failureListener(promise));
                    break;
                case 1:
                    SparseArray<MLImageSegmentation> sparseArray = imageSegmentationAnalyzer.analyseFrame(segFrame);
                    if (sparseArray != null) {
                        promise.success(TextUtils.fromSparseArrayImageSegmentationToJSON(sparseArray));
                    }
                    break;
                default:
                    promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                    break;
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void stopImgSegmentation(final CorPack corPack, JSONArray args, final Promise promise) {
        if (imageSegmentationAnalyzer == null) {
            promise.error("Image Segmentation Analyser is already closed");
        } else {
            try {
                imageSegmentationAnalyzer.stop();
                imageSegmentationAnalyzer = null;
                promise.success("Image Segmentation Analyser is closed ");
            } catch (IOException e) {
                promise.error(e.getMessage());
            }
        }
    }

    @HMSLog
    @CordovaMethod
    public void getSegmentationSetting(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        if (imageSegmentationAnalyzer == null) {
            promise.error("Image Segmentation Analyser is already closed");
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("analyzerType", setting.getAnalyzerType());
            jsonObject.putOpt("scene", setting.getScene());
            jsonObject.putOpt("isExact", setting.isExact());
            promise.success(jsonObject);
        }
    }

}
