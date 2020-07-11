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

package com.huawei.hms.cordova.mlkit.imgseg;

import android.content.Context;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationAnalyzer;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class ImageSegmentation {
    private static final String TAG = ImageSegmentation.class.getName();
    private MLImageSegmentationAnalyzer imageSegmentationAnalyzer;

    public void analyzer(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        JSONObject imageSegmentationSetting = params.optJSONObject("imageSegmentationSetting");
        int analyseMode = params.optInt("analyseMode");
        MLImageSegmentationSetting setting;
        if (imageSegmentationSetting != null) {
            boolean exactMode = imageSegmentationSetting.optBoolean("exactMode", true);
            int analyserType = imageSegmentationSetting.optInt("analyserType", 0);
            int scene = imageSegmentationSetting.optInt("scene", 0);
            setting = new MLImageSegmentationSetting.Factory()
                    .setExact(exactMode)
                    .setAnalyzerType(analyserType)
                    .setScene(scene)
                    .create();
        } else {
            setting = new MLImageSegmentationSetting.Factory()
                    .create();
        }
        Log.i(TAG, "analyzer: getAnalyzerType" + setting.getAnalyzerType() + " getScene" + setting.getScene());
        imageSegmentationAnalyzer = MLAnalyzerFactory.getInstance().getImageSegmentationAnalyzer(setting);

        switch (analyseMode) {
            case 0:
                Log.i(TAG, "analyzerMode: AsyncAnalyseFrame");
                Task<MLImageSegmentation> task = imageSegmentationAnalyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(imageSegmentationResult -> {
                    try {
                        callbackContext.success(TextUtils.getImageSegmentationResult(imageSegmentationResult));
                    } catch (JSONException e) {
                        callbackContext.error(e.getMessage());
                        Log.e(TAG, "error:" + e.getMessage());
                    }
                }).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
                break;
            case 1:
                Log.i(TAG, "analyzerMode: AnalyseFrame");
                SparseArray<MLImageSegmentation> sparseArray = imageSegmentationAnalyzer.analyseFrame(frame);
                if (sparseArray != null)
                    callbackContext.success(TextUtils.fromSparseArrayImageSegmentationToJSON(sparseArray));
                break;
            default:
                callbackContext.error("analyseMode can be only 0 or 1");
                break;
        }
    }

    public void stopSegmentation(CallbackContext callbackContext) throws IOException {
        if (imageSegmentationAnalyzer == null) {
            callbackContext.success("Image Segmentation Analyser is already closed");
        } else {
            imageSegmentationAnalyzer.stop();
            imageSegmentationAnalyzer = null;
            callbackContext.success("Image Segmentation Analyser is closed ");
        }
    }

}
