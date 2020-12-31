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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.object;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.mlsdk.objects.MLObject;

import org.json.JSONException;
import org.json.JSONObject;

public class MLObjectGraphic extends GraphicOverlay.Graphic {
    private static final float TEXT_SIZE = 54.0f;
    private static final float STROKE_WIDTH = 4.0f;
    private final MLObject object;
    private final Paint boxPaint;
    private final Paint textPaint;

    public MLObjectGraphic(final GraphicOverlay overlay, final MLObject object, final JSONObject objectGraphicSetting)
        throws JSONException {
        super(overlay);

        this.object = object;
        this.boxPaint = new Paint();
        this.textPaint = new Paint();

        if (objectGraphicSetting != null) {
            JSONObject boxPaintSetting = objectGraphicSetting.optJSONObject("boxPaintSetting");
            JSONObject textPaintSetting = objectGraphicSetting.optJSONObject("textPaintSetting");

            if (boxPaintSetting != null) {
                String color = boxPaintSetting.optString("color", String.valueOf(Color.WHITE));
                if (color.startsWith("#")) {
                    this.boxPaint.setColor(Color.parseColor(color));
                } else {
                    this.boxPaint.setColor(Integer.parseInt(color));
                }
                if (boxPaintSetting.has("style")) {
                    if (boxPaintSetting.getInt("style") == 1) {
                        this.boxPaint.setStyle(Paint.Style.STROKE);
                    } else if (boxPaintSetting.getInt("style") == 2) {
                        this.boxPaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.boxPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.boxPaint.setStyle(Paint.Style.STROKE);
                }
                float boxStrokeWidth = (float) boxPaintSetting.optDouble("boxStrokeWidth", 4.0f);

                this.boxPaint.setStrokeWidth(boxStrokeWidth);
            } else {
                this.boxPaint.setColor(Color.WHITE);
                this.boxPaint.setStyle(Paint.Style.STROKE);
                this.boxPaint.setStrokeWidth(MLObjectGraphic.STROKE_WIDTH);
            }
            if (textPaintSetting != null) {
                String color = textPaintSetting.optString("color", String.valueOf(Color.WHITE));
                if (color.startsWith("#")) {
                    this.textPaint.setColor(Color.parseColor(color));
                } else {
                    this.textPaint.setColor(Integer.parseInt(color));
                }
                float textSize = (float) textPaintSetting.optDouble("textSize", 54.0f);

                this.textPaint.setStrokeWidth(textSize);
            } else {
                this.textPaint.setColor(Color.WHITE);
                this.textPaint.setTextSize(MLObjectGraphic.TEXT_SIZE);
            }
        } else {
            this.boxPaint.setColor(Color.WHITE);
            this.boxPaint.setStyle(Paint.Style.STROKE);
            this.boxPaint.setStrokeWidth(MLObjectGraphic.STROKE_WIDTH);

            this.textPaint.setColor(Color.WHITE);
            this.textPaint.setTextSize(MLObjectGraphic.TEXT_SIZE);
        }

    }

    private static String getCategoryName(int category) {
        switch (category) {
            case MLObject.TYPE_OTHER:
                return "Unknown";
            case MLObject.TYPE_FURNITURE:
                return "Home good";
            case MLObject.TYPE_GOODS:
                return "Fashion good";
            case MLObject.TYPE_PLACE:
                return "Place";
            case MLObject.TYPE_PLANT:
                return "Plant";
            case MLObject.TYPE_FOOD:
                return "Food";
            case MLObject.TYPE_FACE:
                return "Face";
            default:
        }
        return "";
    }

    @Override
    public void draw(Canvas canvas) {

        RectF rect = new RectF(this.object.getBorder());
        rect.left = this.translateX(rect.left);
        rect.top = this.translateY(rect.top);
        rect.right = this.translateX(rect.right);
        rect.bottom = this.translateY(rect.bottom);
        canvas.drawRect(rect, this.boxPaint);

        canvas.drawText(MLObjectGraphic.getCategoryName(this.object.getTypeIdentity()), rect.left, rect.bottom,
            this.textPaint);
        canvas.drawText("trackingId: " + this.object.getTracingIdentity(), rect.left, rect.top, this.textPaint);
        if (this.object.getTypePossibility() != null) {
            canvas.drawText("confidence: " + this.object.getTypePossibility(), rect.right, rect.bottom, this.textPaint);
        }
    }
}
