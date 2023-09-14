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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.imagesuperresolution;

import android.app.Activity;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.PlatformUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionAnalyzer;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionAnalyzerFactory;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionAnalyzerSetting;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionResult;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLImageSuperResolutionAnalyser extends CordovaBaseModule {
    private static final int INDEX_1X = 0;

    private static final int INDEX_ORIGINAL = 2;

    private final Activity activity;

    private MLImageSuperResolutionAnalyzer analyzer;

    private Bitmap srcBitmap;

    private int selectItem = INDEX_1X;

    private MLImageSuperResolutionAnalyzerSetting setting;

    public MLImageSuperResolutionAnalyser(CordovaInterface cordova) {
        this.activity = cordova.getActivity();
    }

    @HMSLog
    @CordovaMethod
    public void imageSuperResolution(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, IOException {
        JSONObject params = args.optJSONObject(0);
        Uri imageUri = Uri.parse(params.getString("filePath"));
        srcBitmap = MediaStore.Images.Media.getBitmap(activity.getContentResolver(), imageUri);

        int detectType = params.getInt("detectType");
        int syncType = params.optInt("syncType", 0);
        JSONObject mlImgSuperResAnalyserSetting = params.optJSONObject("imgSuperResolutionSetting");
        float scaleType = (float) mlImgSuperResAnalyserSetting.optDouble("scaleType",
            MLImageSuperResolutionAnalyzerSetting.ISR_SCALE_1X);

        setting = new MLImageSuperResolutionAnalyzerSetting.Factory().setScale(scaleType).create();

        analyzer = MLImageSuperResolutionAnalyzerFactory.getInstance().getImageSuperResolutionAnalyzer(setting);
        detectImage(detectType, syncType, promise);
    }

    private void release() {
        if (analyzer == null) {
            return;
        }
        analyzer.stop();
    }

    private void createAnalyzer(final int type) {
        if (type == INDEX_1X) {
            analyzer = MLImageSuperResolutionAnalyzerFactory.getInstance().getImageSuperResolutionAnalyzer();
        } else {
            setting = new MLImageSuperResolutionAnalyzerSetting.Factory().setScale(
                MLImageSuperResolutionAnalyzerSetting.ISR_SCALE_3X).create();
            analyzer = MLImageSuperResolutionAnalyzerFactory.getInstance().getImageSuperResolutionAnalyzer(setting);
        }
    }

    private void detectImage(final int type, final int syncType, final Promise promise) throws JSONException {
        JSONObject resultImageResolution = new JSONObject();
        if (type == INDEX_ORIGINAL) {
            resultImageResolution.putOpt("bitmap", HMSMLUtils.bitmapToBase64(srcBitmap));
            promise.success(resultImageResolution);
            return;
        }
        if (type != selectItem) {
            release();
            createAnalyzer(type);
        }
        if (analyzer == null) {
            return;
        }
        selectItem = type;
        MLFrame frame = MLFrame.fromBitmap(srcBitmap);
        switch (syncType) {
            case 0: {
                Task<MLImageSuperResolutionResult> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(PlatformUtils.successListener(promise, TextUtils.FROM_ISR_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(promise));
                break;
            }
            case 1: {
                SparseArray<MLImageSuperResolutionResult> sparseArray = analyzer.analyseFrame(frame);
                promise.success(TextUtils.fromSparseArrayISRToJSON(sparseArray));
                break;
            }
            default:
                promise.error(CordovaErrors.ILLEGAL_PARAMETER);
                break;
        }
    }

    @HMSLog
    @CordovaMethod
    public void getISRSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("scale", setting.getScale());
            promise.success(jsonObject);
        }
    }

    @HMSLog
    @CordovaMethod
    public void ISRAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (analyzer == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            promise.success("Analyzer is stop");
        }
    }
}
