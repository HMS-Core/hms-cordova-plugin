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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.imgseg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlkit.camera.LensEnginePreview;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;

public class MLSegmentGraphic extends GraphicOverlay.Graphic {
    private final Paint resultPaint;
    private Rect mDestRect;
    private Bitmap bitmapForeground;
    private Boolean isFront;

    public MLSegmentGraphic(final LensEnginePreview preview, final GraphicOverlay overlay,
        final MLImageSegmentation segmentation, Boolean isFront) {
        super(overlay);
        this.bitmapForeground = segmentation.getForeground();
        this.isFront = isFront;

        int width = bitmapForeground.getWidth();
        int height = bitmapForeground.getHeight();
        int div = overlay.getWidth() - preview.getWidth();
        int left = overlay.getWidth() - width + div / 2;

        mDestRect = new Rect(left, 0, overlay.getWidth() - div / 2, height / 2);
        this.resultPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        this.resultPaint.setFilterBitmap(true);
        this.resultPaint.setDither(true);
    }

    @Override
    public void draw(Canvas canvas) {
        if (isFront) {
            bitmapForeground = convert(bitmapForeground);
        }
        Bitmap bitmapBackground = Bitmap.createBitmap(bitmapForeground.getWidth(), bitmapForeground.getHeight(),
            Bitmap.Config.ARGB_8888);
        bitmapBackground.eraseColor(Color.parseColor("#ffffff"));
        canvas.drawBitmap(bitmapForeground, null, mDestRect, resultPaint);
    }

    private Bitmap convert(Bitmap bitmap) {
        Matrix m = new Matrix();
        m.setScale(-1, 1);
        return Bitmap.createBitmap(bitmap, 0, 0, bitmap.getWidth(), bitmap.getHeight(), m, true);
    }
}