/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.gesture;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.mlsdk.gesture.MLGesture;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class MLGestureGraphic extends GraphicOverlay.Graphic {
    private static final float BOX_STROKE_WIDTH = 5.0f;

    private final Paint rectPaint;

    private final Paint idPaintnew;

    private final Rect rect;

    private Paint linePaint;

    private Paint textPaint;

    private List<MLGesture> gestureResults;

    public MLGestureGraphic(GraphicOverlay overlay, List<MLGesture> resultGesture, JSONObject GestureGraphicSetting)
        throws JSONException {
        super(overlay);
        this.gestureResults = resultGesture;

        final int selectedColor = Color.WHITE;
        idPaintnew = new Paint();

        textPaint = new Paint();
        textPaint.setColor(Color.YELLOW);
        textPaint.setStyle(Paint.Style.FILL);
        textPaint.setStrokeWidth(5f);
        textPaint.setTextSize(100);

        linePaint = new Paint();
        linePaint.setColor(Color.GREEN);
        linePaint.setStyle(Paint.Style.STROKE);
        linePaint.setStrokeWidth(4f);
        linePaint.setAntiAlias(true);

        rectPaint = new Paint();
        rectPaint.setColor(Color.BLUE);
        rectPaint.setStyle(Paint.Style.STROKE);
        rectPaint.setStrokeWidth(5f);
        rectPaint.setAntiAlias(true);

        rect = new Rect();

        if (GestureGraphicSetting != null) {
            JSONObject idPaintnewSetting = GestureGraphicSetting.optJSONObject("idPaintnewSetting");
            JSONObject rectPaintSetting = GestureGraphicSetting.optJSONObject("rectPaintSetting");
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
        for (int i = 0; i < gestureResults.size(); i++) {
            MLGesture mlGesture = gestureResults.get(i);
            canvas.drawRect(rect, rectPaint);
            Rect rect = translateRect(mlGesture.getRect());
            if (rect.right < rect.left) {
                int x = rect.left;
                rect.left = rect.right;
                rect.right = x;
            }
            canvas.drawRect(rect, linePaint);

            canvas.drawText(getChineseDescription(mlGesture.getCategory()),
                translateX((mlGesture.getRect().left + mlGesture.getRect().right) / 2f),
                translateY((mlGesture.getRect().top + mlGesture.getRect().bottom) / 2f), textPaint);

        }
    }

    private String getChineseDescription(int gestureCategory) {
        String chineseDescription;
        switch (gestureCategory) {
            case MLGesture.ONE:
                chineseDescription = "数字1";
                break;
            case MLGesture.SECOND:
                chineseDescription = "数字2";
                break;
            case MLGesture.THREE:
                chineseDescription = "数字3";
                break;
            case MLGesture.FOUR:
                chineseDescription = "数字4";
                break;
            case MLGesture.FIVE:
                chineseDescription = "数字5";
                break;
            case MLGesture.SIX:
                chineseDescription = "数字6";
                break;
            case MLGesture.SEVEN:
                chineseDescription = "数字7";
                break;
            case MLGesture.EIGHT:
                chineseDescription = "数字8";
                break;
            case MLGesture.NINE:
                chineseDescription = "数字9";
                break;
            case MLGesture.DISS:
                chineseDescription = "差评";
                break;
            case MLGesture.FIST:
                chineseDescription = "握拳";
                break;
            case MLGesture.GOOD:
                chineseDescription = "点赞";
                break;
            case MLGesture.HEART:
                chineseDescription = "单手比心";
                break;
            case MLGesture.OK:
                chineseDescription = "确认";
                break;
            default:
                chineseDescription = "其他手势";
                break;

        }
        return chineseDescription;
    }

    public Rect translateRect(Rect rect) {
        float left = translateX(rect.left);
        float right = translateX(rect.right);
        float bottom = translateY(rect.bottom);
        float top = translateY(rect.top);
        if (left > right) {
            float size = left;
            left = right;
            right = size;
        }
        if (bottom < top) {
            float size = bottom;
            bottom = top;
            top = size;
        }
        return new Rect((int) left, (int) top, (int) right, (int) bottom);
    }
}
