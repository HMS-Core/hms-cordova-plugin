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

import com.huawei.hms.cordova.mlkit.HMSFaceBodyProvider;
import com.huawei.hms.cordova.mlkit.HMSMLPlugin;
import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.face.MLFaceGraphic;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.face.MLFace;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class FaceAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLFace> {
    private static String TAG = FaceAnalyzerTransactor.class.getSimpleName();
    private GraphicOverlay mGraphicOverlay;
    private JSONObject setting;
    private Context context;

    public FaceAnalyzerTransactor(GraphicOverlay ocrGraphicOverlay, JSONObject setting, Context context) {
        this.mGraphicOverlay = ocrGraphicOverlay;
        this.setting = setting;
        this.context = context;
    }

    @Override
    public void destroy() {
        this.mGraphicOverlay.clear();
    }

    @Override
    public void transactResult(MLAnalyzer.Result<MLFace> result) {

        this.mGraphicOverlay.clear();
        SparseArray<MLFace> faceSparseArray = result.getAnalyseList();
        List<MLFace> list = new ArrayList<>();
        for (int i = 0; i < faceSparseArray.size(); i++) {
            list.add(faceSparseArray.valueAt(i));
        }
        for (int i = 0; i < faceSparseArray.size(); i++) {
            try {
                MLFaceGraphic graphic = new MLFaceGraphic(this.mGraphicOverlay, faceSparseArray.valueAt(i), context,
                    this.setting);
                this.mGraphicOverlay.add(graphic);

            } catch (JSONException e) {
                Log.e(TAG, "Error: " + e.getMessage());
            }

        }
        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                HMSMLUtils.listToJSONArray(list, TextUtils::mlFacetoJSON));
            pluginResult.setKeepCallback(true);
            HMSMLPlugin.getCallbackContext().sendPluginResult(pluginResult);
            Log.i(TAG, "Face:" + HMSMLUtils.listToJSONArray(list, TextUtils::mlFacetoJSON));
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }
    }
}
