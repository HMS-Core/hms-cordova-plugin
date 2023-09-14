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

import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.SEGMENTATION_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.SEGMENTATION_TRANSACTOR_ON_RESULT;

import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlimage.camera.LensEnginePreview;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.imgseg.MLSegmentGraphic;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;

import org.apache.cordova.PluginResult;

public class ImageSegmentationTransactor implements MLAnalyzer.MLTransactor<MLImageSegmentation> {
    private final GraphicOverlay graphicOverlay;

    private final LensEnginePreview lensEnginePreview;

    private final CorPack corPack;

    private final Promise promise;

    public ImageSegmentationTransactor(GraphicOverlay graphicOverlay, LensEnginePreview lensEnginePreview,
        CorPack corPack, Promise promise) {
        this.graphicOverlay = graphicOverlay;
        this.lensEnginePreview = lensEnginePreview;
        this.corPack = corPack;
        this.promise = promise;
    }

    @Override
    public void destroy() {
        this.graphicOverlay.clear();
        corPack.getEventRunner().sendEvent(SEGMENTATION_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(Result<MLImageSegmentation> result) {
        graphicOverlay.clear();
        SparseArray<MLImageSegmentation> imageSegmentationResult = result.getAnalyseList();
        boolean isFront = true;
        MLSegmentGraphic graphic = new MLSegmentGraphic(lensEnginePreview, graphicOverlay,
            imageSegmentationResult.valueAt(0), true);
        graphicOverlay.add(graphic);

        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
            TextUtils.fromSparseArrayImageSegmentationToJSON(imageSegmentationResult));
        pluginResult.setKeepCallback(true);
        promise.sendPluginResult(pluginResult);
        corPack.getEventRunner()
            .sendEvent(SEGMENTATION_TRANSACTOR_ON_RESULT,
                TextUtils.fromSparseArrayImageSegmentationToJSON(imageSegmentationResult));
    }
}
