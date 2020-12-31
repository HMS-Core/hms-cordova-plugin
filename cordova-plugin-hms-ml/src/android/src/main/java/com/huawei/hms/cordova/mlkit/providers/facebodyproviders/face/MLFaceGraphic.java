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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.face;

import android.content.Context;
import android.content.res.Configuration;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;
import android.graphics.Rect;
import android.graphics.Typeface;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.mlsdk.common.MLPosition;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceKeyPoint;
import com.huawei.hms.mlsdk.face.MLFaceShape;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class MLFaceGraphic extends GraphicOverlay.Graphic {
    private static final String TAG = "MLFaceGraphic";
    private final GraphicOverlay overlay;
    private final Paint keypointPaint;
    private final Paint boxPaint;
    private final Paint facePaint;
    private final Paint eyePaint;
    private final Paint eyebrowPaint;
    private final Paint lipPaint;
    private final Paint nosePaint;
    private final Paint noseBasePaint;
    private final Paint textPaint;
    private final Paint faceFeaturePaintText;
    private volatile MLFace mFace;
    private Context mContext;

    public MLFaceGraphic(GraphicOverlay overlay, MLFace face, Context context, JSONObject faceGraphicSetting)
        throws JSONException {
        super(overlay);

        this.mContext = context;
        this.mFace = face;
        this.overlay = overlay;
        final int selectedColor = Color.WHITE;
        float lineWidth = dp2px(this.mContext, 1);
        Paint facePositionPaint = new Paint();
        this.textPaint = new Paint();
        this.faceFeaturePaintText = new Paint();
        this.keypointPaint = new Paint();
        this.boxPaint = new Paint();
        this.facePaint = new Paint();
        this.eyePaint = new Paint();
        this.eyebrowPaint = new Paint();
        this.nosePaint = new Paint();
        this.noseBasePaint = new Paint();
        this.lipPaint = new Paint();
        if (faceGraphicSetting != null) {
            JSONObject facePositionPaintSetting = faceGraphicSetting.optJSONObject("facePositionPaint");
            JSONObject textPaintSetting = faceGraphicSetting.optJSONObject("textPaint");
            JSONObject faceFeaturePaintTextSetting = faceGraphicSetting.optJSONObject("faceFeaturePaintText");
            JSONObject keypointPaintSetting = faceGraphicSetting.optJSONObject("keypointPaint");
            JSONObject boxPaintSetting = faceGraphicSetting.optJSONObject("boxPaint");
            JSONObject facePaintSetting = faceGraphicSetting.optJSONObject("facePaint");
            JSONObject eyePaintSetting = faceGraphicSetting.optJSONObject("eyePaint");
            JSONObject eyebrowPaintSetting = faceGraphicSetting.optJSONObject("eyebrowPaint");
            JSONObject nosePaintSetting = faceGraphicSetting.optJSONObject("nosePaint");
            JSONObject noseBasePaintSetting = faceGraphicSetting.optJSONObject("noseBasePaint");
            JSONObject lipPaintSetting = faceGraphicSetting.optJSONObject("lipPaint");
            if (facePositionPaintSetting != null) {
                String facePositionPaintColor = facePositionPaintSetting.optString("color",
                    String.valueOf(selectedColor));
                if (facePositionPaintColor.startsWith("#")) {
                    facePositionPaint.setColor(Color.parseColor(facePositionPaintColor));
                } else {
                    facePositionPaint.setColor(Integer.parseInt(facePositionPaintColor));
                }
            } else {
                facePositionPaint.setColor(selectedColor);
            }
            if (textPaintSetting != null) {
                String textPaintColor = textPaintSetting.optString("color", String.valueOf(Color.WHITE));
                if (textPaintColor.startsWith("#")) {
                    this.textPaint.setColor(Color.parseColor(textPaintColor));
                } else {
                    this.textPaint.setColor(Integer.parseInt(textPaintColor));
                }
                int textPaintTextSize = textPaintSetting.optInt("textSize", 6);
                this.textPaint.setTextSize(dp2px(context, textPaintTextSize));
                this.textPaint.setTypeface(Typeface.DEFAULT);
            } else {
                this.textPaint.setColor(Color.WHITE);
                this.textPaint.setTextSize(dp2px(context, 6));
                this.textPaint.setTypeface(Typeface.DEFAULT);

            }
            if (faceFeaturePaintTextSetting != null) {
                String faceFeaturePaintTextColor = faceFeaturePaintTextSetting.optString("color",
                    String.valueOf(Color.WHITE));
                if (faceFeaturePaintTextColor.startsWith("#")) {
                    this.faceFeaturePaintText.setColor(Color.parseColor(faceFeaturePaintTextColor));
                } else {
                    this.faceFeaturePaintText.setColor(Integer.parseInt(faceFeaturePaintTextColor));
                }
                int faceFeaturePaintTextSize = faceFeaturePaintTextSetting.optInt("textSize", 11);
                this.faceFeaturePaintText.setTextSize(dp2px(context, faceFeaturePaintTextSize));
                this.faceFeaturePaintText.setTypeface(Typeface.DEFAULT);

            } else {
                this.faceFeaturePaintText.setColor(Color.WHITE);
                this.faceFeaturePaintText.setTextSize(dp2px(context, 11));
                this.faceFeaturePaintText.setTypeface(Typeface.DEFAULT);

            }
            if (keypointPaintSetting != null) {
                String keypointPaintColor = keypointPaintSetting.optString("color", String.valueOf(Color.YELLOW));
                if (keypointPaintColor.startsWith("#")) {
                    this.keypointPaint.setColor(Color.parseColor(keypointPaintColor));
                } else {
                    this.keypointPaint.setColor(Integer.parseInt(keypointPaintColor));
                }
                if (keypointPaintSetting.has("style")) {
                    if (keypointPaintSetting.getInt("style") == 1) {
                        this.keypointPaint.setStyle(Paint.Style.STROKE);
                    } else if (keypointPaintSetting.getInt("style") == 2) {
                        this.keypointPaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.keypointPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.keypointPaint.setStyle(Style.STROKE);
                }
                int keypointPaintTextSize = keypointPaintSetting.optInt("textSize", 2);
                this.keypointPaint.setTextSize(dp2px(context, keypointPaintTextSize));
            } else {
                this.keypointPaint.setColor(Color.YELLOW);
                this.keypointPaint.setStyle(Paint.Style.FILL);
                this.keypointPaint.setTextSize(dp2px(context, 2));

            }
            if (boxPaintSetting != null) {
                String boxPaintColor = boxPaintSetting.optString("color", "#ffcc66");
                if (boxPaintColor.startsWith("#")) {
                    this.boxPaint.setColor(Color.parseColor(boxPaintColor));
                } else {
                    this.boxPaint.setColor(Integer.parseInt(boxPaintColor));
                }
                if (boxPaintSetting.has("style")) {
                    if (boxPaintSetting.getInt("style") == 2) {
                        this.boxPaint.setStyle(Style.FILL);
                    } else if (boxPaintSetting.getInt("style") == 1) {
                        this.boxPaint.setStyle(Style.STROKE);
                    } else {
                        this.boxPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.boxPaint.setStyle(Style.STROKE);
                }
                int boxPaintStrokeWidth = boxPaintSetting.optInt("strokeWidth", 1);
                this.boxPaint.setStrokeWidth(dp2px(this.mContext, boxPaintStrokeWidth));

            } else {
                this.boxPaint.setColor(Color.parseColor("#ffcc66"));
                this.boxPaint.setStyle(Paint.Style.STROKE);
                this.boxPaint.setStrokeWidth(lineWidth);

            }
            if (facePaintSetting != null) {
                String facePaintColor = facePaintSetting.optString("color", "#ffcc66");
                if (facePaintColor.startsWith("#")) {
                    this.facePaint.setColor(Color.parseColor(facePaintColor));
                } else {
                    this.facePaint.setColor(Integer.parseInt(facePaintColor));
                }
                if (facePaintSetting.has("style")) {
                    if (facePaintSetting.getInt("style") == 1) {
                        this.facePaint.setStyle(Paint.Style.STROKE);
                    } else if (facePaintSetting.getInt("style") == 2) {
                        this.facePaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.facePaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.facePaint.setStyle(Style.STROKE);
                }
                int facePaintStrokeWidth = facePaintSetting.optInt("strokeWidth", 1);
                this.facePaint.setStrokeWidth(dp2px(this.mContext, facePaintStrokeWidth));

            } else {
                this.facePaint.setColor(Color.parseColor("#ffcc66"));
                this.facePaint.setStyle(Paint.Style.STROKE);
                this.facePaint.setStrokeWidth(lineWidth);

            }
            if (eyePaintSetting != null) {
                String eyePaintColor = eyePaintSetting.optString("color", "#00ccff");
                if (eyePaintColor.startsWith("#")) {
                    this.eyePaint.setColor(Color.parseColor(eyePaintColor));
                } else {
                    this.eyePaint.setColor(Integer.parseInt(eyePaintColor));
                }
                if (eyePaintSetting.has("style")) {
                    if (eyePaintSetting.getInt("style") == 1) {
                        this.eyePaint.setStyle(Paint.Style.STROKE);
                    } else if (eyePaintSetting.getInt("style") == 2) {
                        this.eyePaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.eyePaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.eyePaint.setStyle(Style.STROKE);
                }
                int eyePaintStrokeWidth = eyePaintSetting.optInt("strokeWidth", 1);
                this.eyePaint.setStrokeWidth(dp2px(this.mContext, eyePaintStrokeWidth));

            } else {
                this.eyePaint.setColor(Color.parseColor("#00ccff"));
                this.eyePaint.setStyle(Paint.Style.STROKE);
                this.eyePaint.setStrokeWidth(lineWidth);

            }
            if (eyebrowPaintSetting != null) {
                String eyebrowPaintColor = eyebrowPaintSetting.optString("color", "#006666");
                if (eyebrowPaintColor.startsWith("#")) {
                    this.eyebrowPaint.setColor(Color.parseColor(eyebrowPaintColor));
                } else {
                    this.eyebrowPaint.setColor(Integer.parseInt(eyebrowPaintColor));
                }
                if (eyebrowPaintSetting.has("style")) {
                    if (eyebrowPaintSetting.getInt("style") == 1) {
                        this.eyebrowPaint.setStyle(Paint.Style.STROKE);
                    } else if (eyebrowPaintSetting.getInt("style") == 2) {
                        this.eyebrowPaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.eyebrowPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.eyebrowPaint.setStyle(Style.STROKE);
                }
                int eyebrowPaintStrokeWidth = eyebrowPaintSetting.optInt("strokeWidth", 1);
                this.eyebrowPaint.setStrokeWidth(dp2px(this.mContext, eyebrowPaintStrokeWidth));

            } else {
                this.eyebrowPaint.setColor(Color.parseColor("#006666"));
                this.eyebrowPaint.setStyle(Paint.Style.STROKE);
                this.eyebrowPaint.setStrokeWidth(lineWidth);
            }
            if (nosePaintSetting != null) {
                String nosePaintColor = nosePaintSetting.optString("color", "#ffff00");
                if (nosePaintColor.startsWith("#")) {
                    this.nosePaint.setColor(Color.parseColor(nosePaintColor));
                } else {
                    this.nosePaint.setColor(Integer.parseInt(nosePaintColor));
                }
                if (nosePaintSetting.has("style")) {
                    if (nosePaintSetting.getInt("style") == 1) {
                        this.nosePaint.setStyle(Paint.Style.STROKE);
                    } else if (nosePaintSetting.getInt("style") == 2) {
                        this.nosePaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.nosePaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.nosePaint.setStyle(Style.STROKE);
                }
                int nosePaintStrokeWidth = nosePaintSetting.optInt("strokeWidth", 1);
                this.nosePaint.setStrokeWidth(dp2px(this.mContext, nosePaintStrokeWidth));

            } else {
                this.nosePaint.setColor(Color.parseColor("#ffff00"));
                this.nosePaint.setStyle(Paint.Style.STROKE);
                this.nosePaint.setStrokeWidth(lineWidth);

            }
            if (noseBasePaintSetting != null) {
                String noseBasePaintColor = noseBasePaintSetting.optString("color", "#ff6699");
                if (noseBasePaintColor.startsWith("#")) {
                    this.noseBasePaint.setColor(Color.parseColor(noseBasePaintColor));
                } else {
                    this.noseBasePaint.setColor(Integer.parseInt(noseBasePaintColor));
                }
                if (noseBasePaintSetting.has("style")) {
                    if (noseBasePaintSetting.getInt("style") == 1) {
                        this.noseBasePaint.setStyle(Paint.Style.STROKE);
                    } else if (noseBasePaintSetting.getInt("style") == 2) {
                        this.noseBasePaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.noseBasePaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.noseBasePaint.setStyle(Style.STROKE);
                }
                int noseBasePaintStrokeWidth = noseBasePaintSetting.optInt("strokeWidth", 1);
                this.noseBasePaint.setStrokeWidth(dp2px(this.mContext, noseBasePaintStrokeWidth));

            } else {
                this.noseBasePaint.setColor(Color.parseColor("#ff6699"));
                this.noseBasePaint.setStyle(Paint.Style.STROKE);
                this.noseBasePaint.setStrokeWidth(lineWidth);
            }
            if (lipPaintSetting != null) {
                String lipPaintColor = lipPaintSetting.optString("color", "#990000");
                if (lipPaintColor.startsWith("#")) {
                    this.lipPaint.setColor(Color.parseColor(lipPaintColor));
                } else {
                    this.lipPaint.setColor(Integer.parseInt(lipPaintColor));
                }
                if (lipPaintSetting.has("style")) {
                    if (lipPaintSetting.getInt("style") == 1) {
                        this.lipPaint.setStyle(Paint.Style.STROKE);
                    } else if (lipPaintSetting.getInt("style") == 2) {
                        this.lipPaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.lipPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.lipPaint.setStyle(Style.STROKE);
                }
                int lipPaintStrokeWidth = lipPaintSetting.optInt("strokeWidth", 1);
                this.lipPaint.setStrokeWidth(dp2px(this.mContext, lipPaintStrokeWidth));
            } else {
                this.lipPaint.setColor(Color.parseColor("#990000"));
                this.lipPaint.setStyle(Paint.Style.STROKE);
                this.lipPaint.setStrokeWidth(lineWidth);
            }
        } else {
            facePositionPaint.setColor(selectedColor);

            this.textPaint.setColor(Color.WHITE);
            this.textPaint.setTextSize(dp2px(context, 6));
            this.textPaint.setTypeface(Typeface.DEFAULT);

            this.faceFeaturePaintText.setColor(Color.WHITE);
            this.faceFeaturePaintText.setTextSize(dp2px(context, 11));
            this.faceFeaturePaintText.setTypeface(Typeface.DEFAULT);

            this.keypointPaint.setColor(Color.YELLOW);
            this.keypointPaint.setStyle(Paint.Style.FILL);
            this.keypointPaint.setTextSize(dp2px(context, 2));

            this.boxPaint.setColor(Color.parseColor("#ffcc66"));
            this.boxPaint.setStyle(Paint.Style.STROKE);
            this.boxPaint.setStrokeWidth(lineWidth);

            this.facePaint.setColor(Color.parseColor("#ffcc66"));
            this.facePaint.setStyle(Paint.Style.STROKE);
            this.facePaint.setStrokeWidth(lineWidth);

            this.eyePaint.setColor(Color.parseColor("#00ccff"));
            this.eyePaint.setStyle(Paint.Style.STROKE);
            this.eyePaint.setStrokeWidth(lineWidth);

            this.eyebrowPaint.setColor(Color.parseColor("#006666"));
            this.eyebrowPaint.setStyle(Paint.Style.STROKE);
            this.eyebrowPaint.setStrokeWidth(lineWidth);

            this.nosePaint.setColor(Color.parseColor("#ffff00"));
            this.nosePaint.setStyle(Paint.Style.STROKE);
            this.nosePaint.setStrokeWidth(lineWidth);

            this.noseBasePaint.setColor(Color.parseColor("#ff6699"));
            this.noseBasePaint.setStyle(Paint.Style.STROKE);
            this.noseBasePaint.setStrokeWidth(lineWidth);

            this.lipPaint.setColor(Color.parseColor("#990000"));
            this.lipPaint.setStyle(Paint.Style.STROKE);
            this.lipPaint.setStrokeWidth(lineWidth);
        }

    }

    public static float dp2px(Context context, float dipValue) {
        return dipValue * context.getResources().getDisplayMetrics().density + (float)0.5;
    }

    private boolean isLandScape() {
        Configuration configuration = this.mContext.getResources().getConfiguration();
        int ori = configuration.orientation;
        return ori == Configuration.ORIENTATION_LANDSCAPE;
    }

    public List<String> sortHashMap(HashMap<String, Float> map) {
        Set<Map.Entry<String, Float>> entey = map.entrySet();
        List<Map.Entry<String, Float>> list = new ArrayList<Map.Entry<String, Float>>(entey);
        Collections.sort(list, (o1, o2) -> {
            if (o2.getValue() - o1.getValue() >= 0) {
                return 1;
            } else {
                return -1;
            }
        });
        List<String> emotions = new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            emotions.add(list.get(i).getKey());
        }
        return emotions;
    }

    @Override
    public void draw(Canvas canvas) {
        if (this.mFace == null) {
            return;
        }
        canvas.drawRect(translateRect(mFace.getBorder()), boxPaint);
        paintKeyPoint(canvas);
        paintFeatures(canvas);
    }

    private void paintFeatures(Canvas canvas) {
        float start = this.overlay.getWidth() / (float)4;
        float x = start;
        float width = this.overlay.getWidth() / (float)3;
        float y;
        if (this.isLandScape()) {
            y = (dp2px(this.mContext, this.overlay.getHeight() / (float)8)) < 130
                ? 130
                : (dp2px(this.mContext, this.overlay.getHeight() / (float)8));
        } else {
            y = (dp2px(this.mContext, this.overlay.getHeight() / (float)16)) < 350.0
                ? 350
                : (dp2px(this.mContext, this.overlay.getHeight() / (float)16));
            if (this.overlay.getHeight() > 2500) {
                y = dp2px(this.mContext, this.overlay.getHeight() / (float)10);
            }
        }
        float space = dp2px(this.mContext, 12);
        Log.i(TAG, x + "," + y + "; height" + this.overlay.getHeight() + ",width" + this.overlay.getWidth());

        HashMap<String, Float> emotions = new HashMap<>();
        emotions.put("Smiling", this.mFace.getEmotions().getSmilingProbability());
        emotions.put("Neutral", this.mFace.getEmotions().getNeutralProbability());
        emotions.put("Angry", this.mFace.getEmotions().getAngryProbability());
        emotions.put("Fear", this.mFace.getEmotions().getFearProbability());
        emotions.put("Sad", this.mFace.getEmotions().getSadProbability());
        emotions.put("Disgust", this.mFace.getEmotions().getDisgustProbability());
        emotions.put("Surprise", this.mFace.getEmotions().getSurpriseProbability());
        List<String> result = this.sortHashMap(emotions);

        DecimalFormat decimalFormat = new DecimalFormat("0.000");
        canvas.drawText("Glass Probability: " + decimalFormat.format(mFace.getFeatures().getSunGlassProbability()), x,
            y, this.faceFeaturePaintText);
        x = x + width;
        String sex = (mFace.getFeatures().getSexProbability() > (float)0.5) ? "Female" : "Male";
        canvas.drawText("Gender: " + sex, x, y, this.faceFeaturePaintText);
        y = y - space;
        x = start;
        canvas.drawText("EulerAngleY: " + decimalFormat.format(mFace.getRotationAngleY()), x, y,
            this.faceFeaturePaintText);
        x = x + width;
        canvas.drawText("EulerAngleX: " + decimalFormat.format(mFace.getRotationAngleX()), x, y,
            this.faceFeaturePaintText);
        y = y - space;
        x = start;
        canvas.drawText("EulerAngleZ: " + decimalFormat.format(mFace.getRotationAngleZ()), x, y,
            this.faceFeaturePaintText);
        x = x + width;
        canvas.drawText("Emotion: " + result.get(0), x, y, this.faceFeaturePaintText);
        x = start;
        y = y - space;
        canvas.drawText("Hat Probability: " + decimalFormat.format(mFace.getFeatures().getHatProbability()), x, y,
            this.faceFeaturePaintText);
        x = x + width;
        canvas.drawText("Age: " + mFace.getFeatures().getAge(), x, y, this.faceFeaturePaintText);
        y = y - space;
        x = start;
        canvas.drawText("Moustache Probability: " + decimalFormat.format(mFace.getFeatures().getMoustacheProbability()),
            x, y, this.faceFeaturePaintText);
        y = y - space;
        canvas.drawText("Right eye open Probability: " + decimalFormat.format(mFace.opennessOfRightEye()), x, y,
            this.faceFeaturePaintText);
        y = y - space;
        canvas.drawText("Left eye open Probability: " + decimalFormat.format(mFace.opennessOfLeftEye()), x, y,
            this.faceFeaturePaintText);
    }

    private void paintKeyPoint(Canvas canvas) {
        if (this.mFace.getFaceShapeList() != null) {
            for (MLFaceShape faceShape : this.mFace.getFaceShapeList()) {
                if (faceShape == null) {
                    continue;
                }
                List<MLPosition> points = faceShape.getPoints();
                if (points != null) {
                    for (int i = 0; i < points.size(); i++) {
                        MLPosition point = points.get(i);
                        canvas.drawPoint(this.translateX(point.getX()), this.translateY(point.getY()), this.boxPaint);

                        if (i != (points.size() - 1)) {
                            MLPosition next = points.get(i + 1);
                            if (point.getX() != null && point.getY() != null) {
                                if (i % 3 == 0) {
                                    canvas.drawText(i + 1 + "", this.translateX(point.getX()),
                                        this.translateY(point.getY()), this.textPaint);
                                }
                                canvas.drawLines(new float[] {
                                    this.translateX(point.getX()), this.translateY(point.getY()),
                                    this.translateX(next.getX()), this.translateY(next.getY())
                                }, this.getPaint(faceShape));
                            }
                        }
                    }
                }
            }
        }
        for (MLFaceKeyPoint keyPoint : this.mFace.getFaceKeyPoints()) {
            if (keyPoint != null) {
                MLPosition point = keyPoint.getPoint();
                canvas.drawCircle(this.translateX(point.getX()), this.translateY(point.getY()), dp2px(this.mContext, 3),
                    this.keypointPaint);
            }
        }
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

    private Paint getPaint(MLFaceShape faceShape) {
        switch (faceShape.getFaceShapeType()) {
            case MLFaceShape.TYPE_LEFT_EYE:
            case MLFaceShape.TYPE_RIGHT_EYE:
                return this.eyePaint;
            case MLFaceShape.TYPE_BOTTOM_OF_LEFT_EYEBROW:
            case MLFaceShape.TYPE_BOTTOM_OF_RIGHT_EYEBROW:
            case MLFaceShape.TYPE_TOP_OF_LEFT_EYEBROW:
            case MLFaceShape.TYPE_TOP_OF_RIGHT_EYEBROW:
                return this.eyebrowPaint;
            case MLFaceShape.TYPE_BOTTOM_OF_LOWER_LIP:
            case MLFaceShape.TYPE_TOP_OF_LOWER_LIP:
            case MLFaceShape.TYPE_BOTTOM_OF_UPPER_LIP:
            case MLFaceShape.TYPE_TOP_OF_UPPER_LIP:
                return this.lipPaint;
            case MLFaceShape.TYPE_BOTTOM_OF_NOSE:
                return this.noseBasePaint;
            case MLFaceShape.TYPE_BRIDGE_OF_NOSE:
                return this.nosePaint;
            default:
                return this.facePaint;
        }
    }
}