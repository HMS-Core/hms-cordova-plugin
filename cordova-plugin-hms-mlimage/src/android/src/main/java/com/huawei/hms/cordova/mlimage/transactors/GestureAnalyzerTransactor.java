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

import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.GESTURE_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.GESTURE_TRANSACTOR_ON_RESULT;

import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlimage.providers.composite.gesture.MLGestureGraphic;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.gesture.MLGesture;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class GestureAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLGesture> {
    private static String TAG = HandAnalyzerTransactor.class.getSimpleName();

    private final CorPack corPack;

    private final Promise promise;

    JSONObject gestureGraphicSetting;

    private GraphicOverlay gestureGraphicOverlay;

    public GestureAnalyzerTransactor(JSONObject setting, GraphicOverlay ocrGraphicOverlay, CorPack corPack,
        Promise promise) {
        this.gestureGraphicOverlay = ocrGraphicOverlay;
        this.gestureGraphicSetting = setting;
        this.corPack = corPack;
        this.promise = promise;
    }

    @Override
    public void destroy() {
        this.gestureGraphicOverlay.clear();
        corPack.getEventRunner().sendEvent(GESTURE_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(MLAnalyzer.Result<MLGesture> result) {
        this.gestureGraphicOverlay.clear();
        MLGestureGraphic graphic;
        SparseArray<MLGesture> gestureSparseArray = result.getAnalyseList();
        List<MLGesture> list = new ArrayList<>();
        for (int i = 0; i < gestureSparseArray.size(); i++) {
            list.add(gestureSparseArray.valueAt(i));
        }
        try {
            graphic = new MLGestureGraphic(this.gestureGraphicOverlay, list, this.gestureGraphicSetting);
            this.gestureGraphicOverlay.add(graphic);
        } catch (JSONException e) {
            Log.e(TAG, "" + e.getMessage());
        }

        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                HMSMLUtils.listToJSONArray(list, TextUtils::mlGesturesListTOJSON));
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
            corPack.getEventRunner()
                .sendEvent(GESTURE_TRANSACTOR_ON_RESULT,
                    HMSMLUtils.listToJSONArray(list, TextUtils::mlGesturesListTOJSON));
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }
    }
}
