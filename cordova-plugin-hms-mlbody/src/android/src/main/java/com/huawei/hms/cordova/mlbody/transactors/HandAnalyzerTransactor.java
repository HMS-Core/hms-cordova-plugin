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

package com.huawei.hms.cordova.mlbody.transactors;

import static com.huawei.hms.cordova.mlbody.helpers.LensEngineConstants.HAND_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlbody.helpers.LensEngineConstants.HAND_TRANSACTOR_ON_RESULT;

import android.content.Context;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlbody.HMSMLBodyPlugin;
import com.huawei.hms.cordova.mlbody.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlbody.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.cordova.mlbody.providers.handkeypoint.MLHandKeypointGraphic;
import com.huawei.hms.cordova.mlbody.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlbody.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoints;

import org.apache.cordova.CordovaPlugin;
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

    private CordovaPlugin cordovaPlugin;

    public HandAnalyzerTransactor(JSONObject setting, GraphicOverlay ocrGraphicOverlay, Context context, CordovaPlugin cordovaPlugin) {
        this.handkeyGraphicOverlay = ocrGraphicOverlay;
        this.handkeyGraphicSetting = setting;
        this.context = context;
        this.cordovaPlugin = cordovaPlugin;
    }

    @Override
    public void destroy() {
        this.handkeyGraphicOverlay.clear();
        CordovaHelpers.sendEvent(cordovaPlugin, HAND_TRANSACTOR_ON_DESTROY);
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
            HMSMLBodyPlugin.getCallbackContext().sendPluginResult(pluginResult);
            CordovaHelpers.sendEvent(cordovaPlugin, HAND_TRANSACTOR_ON_RESULT, HMSMLUtils.listToJSONArray(list, TextUtils::mlHandKeypointsListTOJSON));
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }

        HMSLogger.getInstance(context).sendPeriodicEvent("liveHandkeyAnalyse");
    }

}
