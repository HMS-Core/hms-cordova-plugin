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
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.handkeypoint.MLHandKeypointGraphic;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoints;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class HandAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLHandKeypoints> {
    private static String TAG = HandAnalyzerTransactor.class.getSimpleName();
    JSONObject handkeyGraphicSetting;
    private Context context;
    private GraphicOverlay handkeyGraphicOverlay;

    public HandAnalyzerTransactor(JSONObject setting, GraphicOverlay ocrGraphicOverlay, Context context) {
        this.handkeyGraphicOverlay = ocrGraphicOverlay;
        this.handkeyGraphicSetting = setting;
        this.context = context;
    }

    @Override
    public void destroy() {
        this.handkeyGraphicOverlay.clear();
    }

    @Override
    public void transactResult(MLAnalyzer.Result<MLHandKeypoints> result) {
        this.handkeyGraphicOverlay.clear();
        MLHandKeypointGraphic graphic;
        SparseArray<MLHandKeypoints> handKeypointsSparseArray = result.getAnalyseList();
        List<MLHandKeypoints> list = new ArrayList<>();
        for (int i = 0; i < handKeypointsSparseArray.size(); i++) {
            list.add(handKeypointsSparseArray.valueAt(i));
        }

        try {
            graphic = new MLHandKeypointGraphic(this.handkeyGraphicOverlay, list, this.handkeyGraphicSetting);
            this.handkeyGraphicOverlay.add(graphic);
        } catch (JSONException e) {
            Log.e(TAG, "" + e.getMessage());
        }

        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                HMSMLUtils.listToJSONArray(list, TextUtils::mlHandKeypointsListTOJSON));
            pluginResult.setKeepCallback(true);
            HMSMLPlugin.getCallbackContext().sendPluginResult(pluginResult);
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }

        HMSLogger.getInstance(context).sendPeriodicEvent("liveHandkeyAnalyse");
    }

}