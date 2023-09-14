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

import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.SKELETON_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.SKELETON_TRANSACTOR_ON_RESULT;

import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlimage.providers.composite.skeleton.MLSkeletonGraphic;
import com.huawei.hms.cordova.mlimage.providers.composite.skeleton.MLSkeletonUtils;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.skeleton.MLSkeleton;

import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class SkeletonAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLSkeleton> {
    private static String TAG = SkeletonAnalyzerTransactor.class.getSimpleName();

    private final CorPack corPack;

    private final Promise promise;

    private GraphicOverlay mGraphicOverlay;

    private JSONObject graphicSetting;

    public SkeletonAnalyzerTransactor(GraphicOverlay ocrGraphicOverlay, JSONObject graphicSetting, CorPack corPack,
        Promise promise) {
        this.graphicSetting = graphicSetting;
        this.mGraphicOverlay = ocrGraphicOverlay;
        this.corPack = corPack;
        this.promise = promise;
    }

    @Override
    public void destroy() {
        this.mGraphicOverlay.clear();
        corPack.getEventRunner().sendEvent(SKELETON_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(MLAnalyzer.Result<MLSkeleton> result) {
        this.mGraphicOverlay.clear();
        MLSkeletonGraphic graphic;
        SparseArray<MLSkeleton> sparseArray = result.getAnalyseList();
        List<MLSkeleton> list = new ArrayList<>();
        for (int i = 0; i < sparseArray.size(); i++) {
            list.add(sparseArray.valueAt(i));
        }

        List<MLSkeleton> skeletons = MLSkeletonUtils.getValidSkeletons(list);

        try {
            if (this.graphicSetting != null) {
                graphic = new MLSkeletonGraphic(this.mGraphicOverlay, skeletons, this.graphicSetting);
            } else {
                graphic = new MLSkeletonGraphic(this.mGraphicOverlay, skeletons, null);

            }
            this.mGraphicOverlay.add(graphic);
        } catch (JSONException e) {
            Log.e(TAG, "" + e.getMessage());
        }

        try {
            PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                HMSMLUtils.listToJSONArray(list, TextUtils::mlSkeletonsListTOJSON));
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
            corPack.getEventRunner()
                .sendEvent(SKELETON_TRANSACTOR_ON_RESULT,
                    HMSMLUtils.listToJSONArray(list, TextUtils::mlSkeletonsListTOJSON));
        } catch (JSONException e) {
            Log.e(TAG, "transactResult: error ->" + e.getMessage());
        }
    }

}
