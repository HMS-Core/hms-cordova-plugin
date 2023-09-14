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

import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.OBJECT_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.OBJECT_TRANSACTOR_ON_RESULT;

import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.object.MLObjectGraphic;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;
import com.huawei.hms.mlsdk.objects.MLObject;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class ObjectAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLObject> {
    private static final String TAG = ObjectAnalyzerTransactor.class.getSimpleName();

    private final GraphicOverlay objectGraphicOverlay;

    private final JSONObject objectGraphicSetting;

    private final Promise promise;

    private final CorPack corPack;

    private boolean mlsNeedToDetect = true;

    public ObjectAnalyzerTransactor(GraphicOverlay graphicOverlay, JSONObject objectGraphicSetting, Promise promise,
        CorPack corPack) {
        this.objectGraphicOverlay = graphicOverlay;
        this.objectGraphicSetting = objectGraphicSetting;
        this.promise = promise;
        this.corPack = corPack;
    }

    @Override
    public void destroy() {
        this.objectGraphicOverlay.clear();
        corPack.getEventRunner().sendEvent(OBJECT_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(Result<MLObject> result) {
        if (!this.mlsNeedToDetect) {
            return;
        }
        MLObjectGraphic graphic;
        this.objectGraphicOverlay.clear();
        SparseArray<MLObject> objectSparseArray = result.getAnalyseList();
        List<MLObject> list = new ArrayList<>();
        for (int i = 0; i < objectSparseArray.size(); i++) {
            list.add(objectSparseArray.valueAt(i));
        }

        if (this.objectGraphicSetting != null) {
            for (int i = 0; i < objectSparseArray.size(); i++) {
                try {
                    graphic = new MLObjectGraphic(this.objectGraphicOverlay, objectSparseArray.valueAt(i),
                        objectGraphicSetting);
                    this.objectGraphicOverlay.add(graphic);
                } catch (JSONException e) {
                    Log.e(TAG, "transactResult: error -> ", e);
                }
            }
        } else {
            for (int i = 0; i < objectSparseArray.size(); i++) {
                try {
                    graphic = new MLObjectGraphic(this.objectGraphicOverlay, objectSparseArray.valueAt(i), null);
                    this.objectGraphicOverlay.add(graphic);
                } catch (JSONException e) {
                    Log.e(TAG, "transactResult: error ->", e);
                }
            }
        }

        for (int i = 0; i < objectSparseArray.size(); i++) {
            if (objectSparseArray.valueAt(i).getTypeIdentity() == MLObject.TYPE_FOOD) {
                this.mlsNeedToDetect = true;
            }
        }
        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                HMSMLUtils.listToJSONArray(list, TextUtils::mlObjectsListTOJSON));
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
            corPack.getEventRunner()
                .sendEvent(OBJECT_TRANSACTOR_ON_RESULT,
                    HMSMLUtils.listToJSONArray(list, TextUtils::mlObjectsListTOJSON));
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }
    }
}
