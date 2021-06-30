/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.scan.backend.draw;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.View;

import com.huawei.hms.cordova.scan.basef.handler.CorPack;
import com.huawei.hms.ml.scan.HmsScan;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;

public class ScanResultView extends View {
    private static final String TAG = ScanResultView.class.getName();
    private static int textColor;
    private static float textSize;
    private static float strokeWidth;
    private static int rectColor;
    private static int rectStyle;
    private final Object lock = new Object();
    private final List<HmsScanGraphic> hmsScanGraphics = new ArrayList<>();
    private float widthScaleFactor = 1.0f;
    private float heightScaleFactor = 1.0f;
    private float previewWidth;
    private float previewHeight;

    public ScanResultView(Context context) {
        super(context);
    }

    public static void scanResultViewInitializer(JSONObject viewAttributes) {
        if (viewAttributes != null) {
            textColor = viewAttributes.optInt("textColor", Color.WHITE);
            textSize = (float) viewAttributes.optDouble("textSize", 35.0f);
            strokeWidth = (float) viewAttributes.optDouble("strokeWidth", 4.0f);
            rectColor = viewAttributes.optInt("rectColor", -1);
            rectStyle = viewAttributes.optInt("rectStyle", 0);
        } else {
            textColor = Color.WHITE;
            textSize = 35.0f;
            strokeWidth = 4.0f;
            rectColor = -1;
            rectStyle = 0;
        }
    }

    public ScanResultView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public void clear() {
        synchronized (lock) {
            hmsScanGraphics.clear();
        }
        postInvalidate();
    }

    public void add(HmsScanGraphic graphic) {
        synchronized (lock) {
            hmsScanGraphics.add(graphic);
        }
    }

    public void setCameraInfo(int previewWidth, int previewHeight) {
        synchronized (lock) {
            this.previewWidth = previewWidth;
            this.previewHeight = previewHeight;
        }
        postInvalidate();
    }


    /**
     * Draw MultiCodes on screen.
     */
    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        synchronized (lock) {
            if ((previewWidth != 0) && (previewHeight != 0)) {
                widthScaleFactor = (float) getWidth() / previewWidth;
                heightScaleFactor = (float) getHeight() / previewHeight;
            }

            for (HmsScanGraphic graphic : hmsScanGraphics) {
                graphic.drawGraphic(canvas);
            }
        }
    }

    public static class HmsScanGraphic {
        private final Paint rectPaint;
        private final Paint hmsScanResult;
        private final HmsScan hmsScan;
        private ScanResultView scanResultView;

        public HmsScanGraphic(ScanResultView scanResultView, HmsScan hmsScan) {
            this(scanResultView, hmsScan, Color.WHITE);
        }

        public HmsScanGraphic(ScanResultView scanResultView, HmsScan hmsScan, int color) {
            this.scanResultView = scanResultView;
            this.hmsScan = hmsScan;

            rectPaint = new Paint();
            if (rectColor == -1) {
                rectPaint.setColor(color);
            } else {
                rectPaint.setColor(rectColor);
            }

            if (rectStyle == 0) {
                rectPaint.setStyle(Paint.Style.STROKE);
            } else if (rectStyle == 1) {
                rectPaint.setStyle(Paint.Style.FILL);
            } else {
                rectPaint.setStyle(Paint.Style.FILL_AND_STROKE);
            }
            rectPaint.setStrokeWidth(strokeWidth);

            hmsScanResult = new Paint();
            hmsScanResult.setColor(textColor);
            hmsScanResult.setTextSize(textSize);
        }


        public void drawGraphic(Canvas canvas) {
            if (hmsScan == null) {
                return;
            }

            RectF rect = new RectF(hmsScan.getBorderRect());
            RectF other = new RectF();
            other.left = canvas.getWidth() - scaleX(rect.top);
            other.top = scaleY(rect.left);
            other.right = canvas.getWidth() - scaleX(rect.bottom);
            other.bottom = scaleY(rect.right);
            canvas.drawRect(other, rectPaint);

            canvas.drawText(hmsScan.getOriginalValue(), other.right, other.bottom, hmsScanResult);
        }

        public float scaleX(float horizontal) {
            return horizontal * scanResultView.widthScaleFactor;
        }

        public float scaleY(float vertical) {
            return vertical * scanResultView.heightScaleFactor;
        }
    }
}
