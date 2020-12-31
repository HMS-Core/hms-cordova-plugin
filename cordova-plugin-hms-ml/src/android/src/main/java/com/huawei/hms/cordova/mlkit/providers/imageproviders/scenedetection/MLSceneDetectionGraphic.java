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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.scenedetection;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.mlsdk.scd.MLSceneDetection;

import org.json.JSONObject;

public class MLSceneDetectionGraphic extends GraphicOverlay.Graphic {
    private final GraphicOverlay overlay;
    private final SparseArray<MLSceneDetection> results;
    private float textSize = 48;
    private int color = Color.RED;

    public MLSceneDetectionGraphic(GraphicOverlay overlay, SparseArray<MLSceneDetection> results,
        JSONObject sceneSettings) {
        super(overlay);
        this.overlay = overlay;
        this.results = results;
        if (sceneSettings != null) {
            this.color = sceneSettings.optInt("color", Color.RED);
            if (String.valueOf(this.color).startsWith("#")) {
                this.color = Color.parseColor(String.valueOf(this.color));
            }
            this.textSize = (float) sceneSettings.optDouble("textSize", 48);
        }
    }

    @Override
    public void draw(Canvas canvas) {
        Paint paint = new Paint();
        paint.setColor(this.color);
        paint.setTextSize(this.textSize);

        canvas.drawText("SceneCount：" + results.size(), (float) overlay.getWidth() / 5, 50, paint);
        for (int i = 0; i < results.size(); i++) {
            canvas.drawText("Scene：" + results.get(i).getResult(), (float) overlay.getWidth() / 5, 100 * (i + 1),
                paint);
            canvas.drawText("Confidence：" + results.get(i).getConfidence(), (float) overlay.getWidth() / 5,
                (100 * (i + 1)) + 50, paint);
        }
    }
}