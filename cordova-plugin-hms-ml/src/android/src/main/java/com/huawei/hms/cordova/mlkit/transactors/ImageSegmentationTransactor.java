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
import android.util.SparseArray;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlkit.camera.LensEnginePreview;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.imgseg.MLSegmentGraphic;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;

public class ImageSegmentationTransactor implements MLAnalyzer.MLTransactor<MLImageSegmentation> {
    private GraphicOverlay graphicOverlay;
    private Context context;
    private LensEnginePreview lensEnginePreview;

    public ImageSegmentationTransactor(GraphicOverlay graphicOverlay, Context context,
        LensEnginePreview lensEnginePreview) {
        this.graphicOverlay = graphicOverlay;
        this.context = context;
        this.lensEnginePreview = lensEnginePreview;
    }

    @Override
    public void destroy() {
        this.graphicOverlay.clear();
    }

    @Override
    public void transactResult(Result<MLImageSegmentation> result) {
        graphicOverlay.clear();
        SparseArray<MLImageSegmentation> imageSegmentationResult = result.getAnalyseList();
        boolean isFront = true;
        MLSegmentGraphic graphic = new MLSegmentGraphic(lensEnginePreview, graphicOverlay,
            imageSegmentationResult.valueAt(0), true);
        graphicOverlay.add(graphic);
        HMSLogger.getInstance(context).sendPeriodicEvent("liveImageSegmentationAnalyse");
    }
}
