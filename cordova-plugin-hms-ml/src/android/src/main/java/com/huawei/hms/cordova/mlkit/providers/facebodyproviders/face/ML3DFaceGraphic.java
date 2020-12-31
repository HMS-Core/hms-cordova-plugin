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
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Paint.Style;

import com.huawei.hms.cordova.mlkit.camera.GraphicOverlay;
import com.huawei.hms.mlsdk.common.MLPosition;
import com.huawei.hms.mlsdk.face.face3d.ML3DFace;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class ML3DFaceGraphic extends GraphicOverlay.Graphic {
    private static final String TAG = ML3DFaceGraphic.class.getSimpleName();
    private final GraphicOverlay overlay;
    private final Paint keypointPaint;
    private final Paint boxPaint;
    private float line_width;
    private volatile ML3DFace mLFace;
    private Context mContext;

    public ML3DFaceGraphic(GraphicOverlay overlay, ML3DFace face, Context context, JSONObject graphicSetting)
        throws JSONException {
        super(overlay);
        this.mContext = context;
        this.mLFace = face;
        this.overlay = overlay;
        this.keypointPaint = new Paint();
        this.boxPaint = new Paint();
        line_width = dp2px(this.mContext, 3);
        if (graphicSetting != null) {
            JSONObject paint = graphicSetting.optJSONObject("keypointPaint");
            JSONObject boxPaintJSON = graphicSetting.optJSONObject("boxPaint");
            if (paint != null) {
                String color = paint.optString("color", String.valueOf(Color.RED));
                if (color.startsWith("#")) {
                    this.keypointPaint.setColor(Color.parseColor(color));
                } else {
                    this.keypointPaint.setColor(Integer.parseInt(color));
                }
                if (paint.has("style")) {
                    if (paint.getInt("style") == 1) {
                        this.keypointPaint.setStyle(Paint.Style.STROKE);
                    } else if (paint.getInt("style") == 2) {
                        this.keypointPaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.keypointPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.keypointPaint.setStyle(Style.FILL);
                }
                int keypointPaintTextSize = paint.optInt("textSize", 2);
                this.keypointPaint.setTextSize(dp2px(context, keypointPaintTextSize));
            } else {
                this.keypointPaint.setColor(Color.RED);
                this.keypointPaint.setStyle(Paint.Style.FILL);
                this.keypointPaint.setTextSize(dp2px(context, 2));
            }
            if (boxPaintJSON != null) {
                String boxColor = boxPaintJSON.optString("color", String.valueOf(Color.BLUE));
                if (boxColor.startsWith("#")) {
                    this.boxPaint.setColor(Color.parseColor(boxColor));
                } else {
                    this.boxPaint.setColor(Integer.parseInt(boxColor));
                }
                if (boxPaintJSON.has("style")) {
                    if (boxPaintJSON.getInt("style") == 1) {
                        this.boxPaint.setStyle(Paint.Style.STROKE);
                    } else if (boxPaintJSON.getInt("style") == 2) {
                        this.boxPaint.setStyle(Paint.Style.FILL);
                    } else {
                        this.boxPaint.setStyle(Paint.Style.FILL_AND_STROKE);
                    }
                } else {
                    this.boxPaint.setStyle(Style.STROKE);
                }
                float boxPaintStrokeWidth = (float) boxPaintJSON.optDouble("strokeWidth", dp2px(this.mContext, 3));
                this.boxPaint.setStrokeWidth(dp2px(this.mContext, boxPaintStrokeWidth));

            } else {
                this.boxPaint.setColor(Color.BLUE);
                this.boxPaint.setStyle(Paint.Style.STROKE);
                this.boxPaint.setStrokeWidth(line_width);
            }
        } else {
            this.keypointPaint.setColor(Color.RED);
            this.keypointPaint.setStyle(Paint.Style.FILL);
            this.keypointPaint.setTextSize(dp2px(context, 2));

            this.boxPaint.setColor(Color.BLUE);
            this.boxPaint.setStyle(Paint.Style.STROKE);
            this.boxPaint.setStrokeWidth(line_width);
        }

    }

    public float dp2px(Context context, float dipValue) {
        return dipValue * context.getResources().getDisplayMetrics().density + (float)0.5;
    }

    @Override
    public void draw(Canvas canvas) {
        if (this.mLFace == null) {
            return;
        }
        List<MLPosition> face3dPoints = mLFace.get3DKeyPoints(ML3DFace.LANDMARK_FIVE);

        float[] projectionMatrix = new float[4 * 4];
        float[] viewMatrix = new float[4 * 4];
        mLFace.get3DProjectionMatrix(projectionMatrix, 1, 10);
        mLFace.get3DViewMatrix(viewMatrix);

        int frameHeight = (int) unScaleX(overlay.getHeight());// Image height
        int frameWidth = (int) unScaleY(overlay.getWidth());// Image Width

        float[] adaptMatrix = {
            (float) frameWidth / 2, 0, (float) frameWidth / 2, 0, (float) -frameHeight / 2, (float) frameHeight / 2, 0,
            0, 1
        };
        List<MLPosition> face2dPoints = translateTo2D(face3dPoints, projectionMatrix, viewMatrix, adaptMatrix);

        StringBuilder sb = new StringBuilder();
        Paint numPaint;
        numPaint = new Paint();
        numPaint.setColor(Color.RED);
        numPaint.setTextSize((float) frameHeight / 80);
        for (int i = 0; i < face2dPoints.size(); i++) {
            MLPosition point = face2dPoints.get(i);
            canvas.drawPoint(translateX(point.getX()), translateY(point.getY()), boxPaint);
            canvas.drawText("" + i, translateX(point.getX()), translateY(point.getY()), numPaint);
            sb.append(point.getX()).append(" ").append(point.getY()).append("\n");

        }

    }

    private List<MLPosition> translateTo2D(List<MLPosition> face3dPoints, float[] projectionMatrix, float[] viewMatrix,
        float[] adaptMatrix) {
        List<MLPosition> face2dPoints = new ArrayList<>();
        for (int i = 0; i < face3dPoints.size(); i++) {
            MLPosition curPoint = face3dPoints.get(i);
            float[] curVec = {curPoint.getX(), curPoint.getY(), curPoint.getZ(), 1};
            //1 V*Vec
            float[] temp1 = matrixMulti(viewMatrix, 4, 4, curVec);
            //2 P*(V*Vec)
            float[] temp2 = matrixMulti(projectionMatrix, 4, 4, temp1);
            //3 calculations x’ y'
            float[] temp3 = {temp2[0] / temp2[3], temp2[1] / temp2[3], 1};
            //4 calculations X Y coordinates
            float[] point = matrixMulti(adaptMatrix, 3, 3, temp3);
            face2dPoints.add(new MLPosition(point[0], point[1]));
        }
        return face2dPoints;
    }

    private float[] matrixMulti(float[] V, final int m, final int n, float[] vec) {
        float[] result = new float[n];
        for (int i = 0; i < n; i++) {
            float temp = 0;
            for (int j = 0; j < m; j++) {
                temp += V[i * m + j] * vec[j];
            }
            result[i] = temp;
        }
        return result;
    }
}