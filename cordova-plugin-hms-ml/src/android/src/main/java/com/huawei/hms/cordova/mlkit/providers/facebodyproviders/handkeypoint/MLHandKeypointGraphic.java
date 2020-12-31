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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.handkeypoint;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoint;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoints;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class MLHandKeypointGraphic extends GraphicOverlay.Graphic {
    private static final float BOX_STROKE_WIDTH = 5.0f;
    private final Paint rectPaint;
    private final Paint idPaintnew;
    private List<MLHandKeypoints> handKeypoints;

    public MLHandKeypointGraphic(GraphicOverlay overlay, List<MLHandKeypoints> handKeypoints,
        JSONObject handkeyGraphicSetting) throws JSONException {
        super(overlay);
        this.handKeypoints = handKeypoints;

        final int selectedColor = Color.WHITE;
        idPaintnew = new Paint();
        rectPaint = new Paint();

        if (handkeyGraphicSetting != null) {
            JSONObject idPaintnewSetting = handkeyGraphicSetting.optJSONObject("idPaintnewSetting");
            JSONObject rectPaintSetting = handkeyGraphicSetting.optJSONObject("rectPaintSetting");
            if (idPaintnewSetting != null) {
                String color = idPaintnewSetting.optString("color", String.valueOf(Color.GREEN));
                if (color.startsWith("#")) {
                    this.idPaintnew.setColor(Color.parseColor(color));
                } else {
                    this.idPaintnew.setColor(Integer.parseInt(color));
                }
                float textSize = (float) idPaintnewSetting.optDouble("textSize", 32);

                idPaintnew.setTextSize(textSize);
            } else {
                idPaintnew.setColor(Color.GREEN);
                idPaintnew.setTextSize(32);
            }
            if (rectPaintSetting != null) {
                String color = rectPaintSetting.optString("color", String.valueOf(Color.WHITE));
                if (color.startsWith("#")) {
                    this.rectPaint.setColor(Color.parseColor(color));
                } else {
                    this.rectPaint.setColor(Integer.parseInt(color));
                }
                if (rectPaintSetting.has("style")) {
                    if (rectPaintSetting.getInt("style") == 1) {
                        rectPaint.setStyle(Paint.Style.STROKE);
                    } else if (rectPaintSetting.getInt("style") == 2) {
                        rectPaint.setStyle(Paint.Style.FILL);
                    } else {
                        rectPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    rectPaint.setStyle(Paint.Style.STROKE);
                }
                float boxStrokeWidth = (float) rectPaintSetting.optDouble("boxStrokeWidth", 5.0f);

                rectPaint.setStrokeWidth(boxStrokeWidth);
            } else {
                rectPaint.setColor(selectedColor);
                rectPaint.setStyle(Paint.Style.STROKE);
                rectPaint.setStrokeWidth(BOX_STROKE_WIDTH);
            }
        } else {
            idPaintnew.setColor(Color.GREEN);
            idPaintnew.setTextSize(32);

            rectPaint.setColor(selectedColor);
            rectPaint.setStyle(Paint.Style.STROKE);
            rectPaint.setStrokeWidth(BOX_STROKE_WIDTH);
        }

    }

    @Override
    public void draw(Canvas canvas) {
        for (int i = 0; i < handKeypoints.size(); i++) {
            MLHandKeypoints mHandKeypoints = handKeypoints.get(i);
            if (mHandKeypoints.getHandKeypoints() == null) {
                continue;
            }

            Rect rect = translateRect(handKeypoints.get(i).getRect());
            canvas.drawRect(rect, rectPaint);
            for (MLHandKeypoint handKeypoint : mHandKeypoints.getHandKeypoints()) {
                if (!(Math.abs(handKeypoint.getPointX() - (float)0) == 0 && Math.abs(handKeypoint.getPointY() - (float)0) == 0)) {
                    canvas.drawCircle(translateX(handKeypoint.getPointX()), translateY(handKeypoint.getPointY()), 24f,
                        idPaintnew);
                }
            }
        }
    }

    public Rect translateRect(Rect rect) {
        float leftH = translateX(rect.left);
        float rightH = translateX(rect.right);
        float bottomH = translateY(rect.bottom);
        float topH = translateY(rect.top);
        if (leftH > rightH) {
            float size = leftH;
            leftH = rightH;
            rightH = size;
        }
        if (bottomH < topH) {
            float size = bottomH;
            bottomH = topH;
            topH = size;
        }
        return new Rect((int) leftH, (int) topH, (int) rightH, (int) bottomH);
    }
}