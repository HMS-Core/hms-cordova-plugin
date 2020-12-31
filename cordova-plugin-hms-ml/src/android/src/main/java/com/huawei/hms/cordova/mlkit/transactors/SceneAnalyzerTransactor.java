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

package com.huawei.hms.cordova.mlkit.transactors;

import android.content.Context;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlkit.HMSImageServiceProvider;
import com.huawei.hms.cordova.mlkit.HMSMLPlugin;
import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.scenedetection.MLSceneDetectionGraphic;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer.MLTransactor;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;
import com.huawei.hms.mlsdk.scd.MLSceneDetection;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

public class SceneAnalyzerTransactor implements MLTransactor<MLSceneDetection> {
    private static String TAG = SceneAnalyzerTransactor.class.getSimpleName();
    private Context context;
    private GraphicOverlay sceneOverlay;
    private JSONObject setting;

    public SceneAnalyzerTransactor(GraphicOverlay graphicOverlay, JSONObject setting, Context context) {
        this.sceneOverlay = graphicOverlay;
        this.setting = setting;
        this.context = context;
    }

    @Override
    public void destroy() {
        this.sceneOverlay.clear();
        Log.i(TAG, "destroy");
    }

    @Override
    public void transactResult(Result<MLSceneDetection> result) {
        sceneOverlay.clear();
        JSONObject sceneDetectionResult = new JSONObject();
        MLSceneDetectionGraphic senceDetectionGraphic;

        try {
            if (setting != null) {

                SparseArray<MLSceneDetection> imageSegmentationResult = result.getAnalyseList();
                sceneDetectionResult.putOpt("analyseList",
                    TextUtils.fromSparseArraySceneToJSON(imageSegmentationResult));
                sceneDetectionResult.putOpt("frameProperty", TextUtils.propertyFunc(result.getFrameProperty()));
                senceDetectionGraphic = new MLSceneDetectionGraphic(sceneOverlay, imageSegmentationResult, setting);

            } else {
                SparseArray<MLSceneDetection> imageSegmentationResult = result.getAnalyseList();
                senceDetectionGraphic = new MLSceneDetectionGraphic(sceneOverlay, imageSegmentationResult, null);

            }
            sceneOverlay.add(senceDetectionGraphic);
            sceneOverlay.postInvalidate();
        } catch (final NullPointerException | JSONException e) {
            Log.e(TAG, e.toString());
        }
        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, sceneDetectionResult);
            pluginResult.setKeepCallback(true);
            HMSMLPlugin.getCallbackContext().sendPluginResult(pluginResult);
            HMSLogger.getInstance(context).sendPeriodicEvent("liveSceneAnalyse");
        } catch (Exception e) {
            Log.e(TAG, "" + e.getMessage());
        }
    }

}
