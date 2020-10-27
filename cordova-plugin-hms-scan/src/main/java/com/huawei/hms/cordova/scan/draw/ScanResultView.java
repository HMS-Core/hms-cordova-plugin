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

package com.huawei.hms.cordova.scan.draw;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;

import com.huawei.hms.cordova.scan.utils.HMSLogger;
import com.huawei.hms.cordova.scan.utils.JSONUtils;
import com.huawei.hms.ml.scan.HmsScan;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class ScanResultView extends View {
    private static final String TAG = ScanResultView.class.getName();
    private static int textColor;
    private static float textSize;
    private static float strokeWidth;
    private static int rectColor;
    private static int rectStyle;
    private static CallbackContext callback;
    private static CordovaInterface cordovaInterface;
    private final Object lock = new Object();
    private final List<HmsScanGraphic> hmsScanGraphics = new ArrayList<>();
    private float widthScaleFactor = 1.0f;
    private float heightScaleFactor = 1.0f;
    private float previewWidth;
    private float previewHeight;

    public ScanResultView(final Context context) {
        super(context);
    }

    public ScanResultView(final Context context, final AttributeSet attrs) {
        super(context, attrs);
    }

    public static void scanResultViewInitializer(final JSONObject params, final CallbackContext callbackContext,
        final CordovaInterface cordovaInterface) {
        textColor = params.optInt("textColor", Color.WHITE);
        textSize = (float) params.optDouble("textSize", 35.0f);
        strokeWidth = (float) params.optDouble("strokeWidth", 4.0f);
        rectColor = params.optInt("rectColor", -1);
        rectStyle = params.optInt("rectStyle", 0);
        callback = callbackContext;
        ScanResultView.cordovaInterface = cordovaInterface;
    }

    public void clear() {
        synchronized (lock) {
            hmsScanGraphics.clear();
        }
        postInvalidate();
    }

    public void add(final HmsScanGraphic graphic) {
        synchronized (lock) {
            hmsScanGraphics.add(graphic);
        }
    }

    public void setCameraInfo(final int previewWidth, final int previewHeight) {
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
    protected void onDraw(final Canvas canvas) {
        super.onDraw(canvas);

        synchronized (lock) {
            if ((previewWidth != 0) && (previewHeight != 0)) {
                widthScaleFactor = (float) getWidth() / previewWidth;
                heightScaleFactor = (float) getHeight() / previewHeight;
            }

            for (final HmsScanGraphic graphic : hmsScanGraphics) {
                graphic.drawGraphic(canvas);
            }
        }
    }

    public static class HmsScanGraphic {
        private final Paint rectPaint;
        private final Paint hmsScanResult;
        private final HmsScan hmsScan;
        private final ScanResultView scanResultView;

        public HmsScanGraphic(final ScanResultView scanResultView, final HmsScan hmsScan) {
            this(scanResultView, hmsScan, Color.WHITE);
        }

        public HmsScanGraphic(final ScanResultView scanResultView, final HmsScan hmsScan, final int color) {
            this.scanResultView = scanResultView;
            this.hmsScan = hmsScan;

            try {
                final PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
                    JSONUtils.hmsScansToJSON(hmsScan));
                pluginResult.setKeepCallback(true);
                callback.sendPluginResult(pluginResult);
            } catch (final JSONException e) {
                Log.e(TAG, "error: " + e.toString());
                callback.error(e.toString());
            }

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

        public void drawGraphic(final Canvas canvas) {
            if (hmsScan == null) {
                return;
            }
            final RectF rect = new RectF(hmsScan.getBorderRect());
            final RectF other = new RectF();
            other.left = canvas.getWidth() - scaleX(rect.top);
            other.top = scaleY(rect.left);
            other.right = canvas.getWidth() - scaleX(rect.bottom);
            other.bottom = scaleY(rect.right);
            canvas.drawRect(other, rectPaint);
            canvas.drawText(hmsScan.getOriginalValue(), other.right, other.bottom, hmsScanResult);
        }

        public float scaleX(final float horizontal) {
            return horizontal * scanResultView.widthScaleFactor;
        }

        public float scaleY(final float vertical) {
            return vertical * scanResultView.heightScaleFactor;
        }
    }
}
