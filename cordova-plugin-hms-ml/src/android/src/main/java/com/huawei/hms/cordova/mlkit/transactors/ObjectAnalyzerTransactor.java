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
import com.huawei.hms.cordova.mlkit.providers.imageproviders.object.MLObjectGraphic;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;
import com.huawei.hms.mlsdk.objects.MLObject;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class ObjectAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLObject> {
    private static String TAG = ObjectAnalyzerTransactor.class.getSimpleName();
    private GraphicOverlay objectGraphicOverlay;
    private boolean mlsNeedToDetect = true;
    private JSONObject objectGraphicSetting;
    private Context context;

    public ObjectAnalyzerTransactor(GraphicOverlay graphicOverlay, JSONObject objectGraphicSetting, Context context) {
        this.objectGraphicOverlay = graphicOverlay;
        this.objectGraphicSetting = objectGraphicSetting;
        this.context = context;
    }

    @Override
    public void destroy() {

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
            HMSMLPlugin.getCallbackContext().sendPluginResult(pluginResult);
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }
        HMSLogger.getInstance(context).sendPeriodicEvent("liveObjectAnalyse");
    }
}
