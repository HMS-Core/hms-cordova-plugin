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

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.face.ML3DFaceGraphic;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.face.face3d.ML3DFace;

import org.json.JSONException;
import org.json.JSONObject;

public class Face3DAnalyzerTransactor implements MLAnalyzer.MLTransactor<ML3DFace> {
    private static String TAG = Face3DAnalyzerTransactor.class.getSimpleName();
    private GraphicOverlay mGraphicOverlay;
    private JSONObject setting;
    private Context context;

    public Face3DAnalyzerTransactor(GraphicOverlay ocrGraphicOverlay, JSONObject setting, Context context) {
        this.mGraphicOverlay = ocrGraphicOverlay;
        this.setting = setting;
        this.context = context;

    }

    @Override
    public void destroy() {
        this.mGraphicOverlay.clear();
    }

    /**
     * Process the results returned by the analyzer.
     */
    @Override
    public void transactResult(MLAnalyzer.Result<ML3DFace> result) {
        this.mGraphicOverlay.clear();
        SparseArray<ML3DFace> faceSparseArray = result.getAnalyseList();
        for (int i = 0; i < faceSparseArray.size(); i++) {
            ML3DFaceGraphic graphic = null;
            try {
                graphic = new ML3DFaceGraphic(this.mGraphicOverlay, faceSparseArray.valueAt(i), context, setting);
                this.mGraphicOverlay.add(graphic);
            } catch (JSONException e) {
                Log.e(TAG, "" + e.getMessage());
            }

        }
    }
}
