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

package com.huawei.hms.cordova.mlimage.transactors;

import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.SCENE_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.SCENE_TRANSACTOR_ON_RESULT;

import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.scenedetection.MLSceneDetectionGraphic;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer.MLTransactor;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;
import com.huawei.hms.mlsdk.scd.MLSceneDetection;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

public class SceneAnalyzerTransactor implements MLTransactor<MLSceneDetection> {
    private static final String TAG = SceneAnalyzerTransactor.class.getSimpleName();

    private final GraphicOverlay sceneOverlay;

    private final JSONObject setting;

    private final Promise promise;

    private final CorPack corPack;

    public SceneAnalyzerTransactor(GraphicOverlay graphicOverlay, JSONObject setting, Promise promise,
        CorPack corPack) {
        this.sceneOverlay = graphicOverlay;
        this.setting = setting;
        this.promise = promise;
        this.corPack = corPack;
    }

    @Override
    public void destroy() {
        this.sceneOverlay.clear();
        corPack.getEventRunner().sendEvent(SCENE_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(Result<MLSceneDetection> result) {
        sceneOverlay.clear();
        JSONObject sceneDetectionResult = new JSONObject();
        MLSceneDetectionGraphic sceneDetectionGraphic;

        try {
            SparseArray<MLSceneDetection> imageSegmentationResult = result.getAnalyseList();
            if (setting != null) {
                sceneDetectionResult.putOpt("analyseList",
                    TextUtils.fromSparseArraySceneToJSON(imageSegmentationResult));
                sceneDetectionResult.putOpt("frameProperty", TextUtils.propertyFunc(result.getFrameProperty()));
                sceneDetectionGraphic = new MLSceneDetectionGraphic(sceneOverlay, imageSegmentationResult, setting);

            } else {
                sceneDetectionGraphic = new MLSceneDetectionGraphic(sceneOverlay, imageSegmentationResult, null);

            }
            sceneOverlay.add(sceneDetectionGraphic);
            sceneOverlay.postInvalidate();
        } catch (final NullPointerException | JSONException e) {
            Log.e(TAG, e.toString());
        }
        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, sceneDetectionResult);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
            corPack.getEventRunner().sendEvent(SCENE_TRANSACTOR_ON_RESULT, sceneDetectionResult);
        } catch (Exception e) {
            Log.e(TAG, "" + e.getMessage());
        }
    }
}
