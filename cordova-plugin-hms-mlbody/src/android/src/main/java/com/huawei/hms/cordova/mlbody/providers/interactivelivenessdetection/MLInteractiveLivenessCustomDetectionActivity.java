/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mlbody.providers.interactivelivenessdetection;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Rect;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.RequiresApi;

import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCaptureResult;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessDetectView;
import com.huawei.hms.mlsdk.interactiveliveness.OnMLInteractiveLivenessDetectCallback;
import com.huawei.hms.mlsdk.interactiveliveness.action.InteractiveLivenessStateCode;
import com.huawei.hms.mlsdk.interactiveliveness.action.MLInteractiveLivenessConfig;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;

public class MLInteractiveLivenessCustomDetectionActivity extends Activity {
    public static final int DETECT_FACE_TIME_OUT = 11404;

    private static final String TAG = MLInteractiveLivenessCustomDetectionActivity.class.getSimpleName();

    private static final String ACTIVITY_LIVENESS_CUSTOM_DETECTION = "activity_liveness_custom_detection";

    private static final String LIVENESS_DETECTION_FRAME_BOLD = "liveness_detection_frame_bold";

    private MLInteractiveLivenessDetectView mlInteractiveLivenessDetectView;

    private FrameLayout mPreviewContainer;

    private RelativeLayout mText;

    private ImageView imgBack;

    private Context mContext;

    private View customView;

    private Intent intent;

    private Bundle bundle;

    private TextView tips;

    private TextView title;

    private TextView statusCode;

    private int[] actionArray;

    private JSONObject actionJson = new JSONObject();

    private JSONObject statusCodesJson = new JSONObject();

    private HashMap<Integer, String> statusCodeList = new HashMap<>();

    private boolean autoSizeText;

    private int minTextSize;

    private int maxTextSize;

    private int granularity;

    private float textSize;

    private boolean isActionArray = true;

    private boolean isStatusCodes = true;

    private boolean showStatusCode;

    private MLInteractiveLivenessConfig interactiveLivenessConfig;

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mContext = this.getApplicationContext();

        initStatusCodeList();

        intent = getIntent();
        try {
            bundle = intent.getExtras();
        } catch (Exception e) {
            Log.i("Customized-Exception", e.getMessage());
        }

        customView = this.getLayoutInflater().inflate(getTemplate(), null);
        setContentView(customView);
        mPreviewContainer = (FrameLayout) handleResources("surface_layout");

        mText = (RelativeLayout) handleResources("bg");

        imgBack = (ImageView) handleResources("img_back");
        tips = (TextView) handleResources("tips");
        title = (TextView) handleResources("title");
        statusCode = (TextView) handleResources("status_code");

        ImageView scanBg = new ImageView(this);
        ViewGroup.LayoutParams layoutParams = new FrameLayout.LayoutParams(
            bundle.getInt("cameraFrameRight") - bundle.getInt("cameraFrameLeft"),
            bundle.getInt("cameraFrameBottom") - bundle.getInt("cameraFrameTop"));
        scanBg.setLayoutParams(layoutParams);
        scanBg.setY(bundle.getInt("faceFrameTop") - 25);
        scanBg.setX(bundle.getInt("faceFrameLeft"));
        scanBg.setImageDrawable(getDrawable(getDrawableId(mContext, "LIVENESS_DETECTION_FRAME_BOLD")));

        imgBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });

        getAction(bundle);
        getStatusCodes(bundle);

        mText.setY(bundle.getInt("textMargin"));
        tips.setTextColor(bundle.getInt("textColor"));
        statusCode.setTextColor(bundle.getInt("textColor"));
        title.setText(bundle.getString("title"));

        textSize = bundle.getFloat("textSize");
        autoSizeText = bundle.getBoolean("autoSizeText");
        minTextSize = bundle.getInt("minTextSize");
        maxTextSize = bundle.getInt("maxTextSize");
        granularity = bundle.getInt("granularity");
        showStatusCode = bundle.getBoolean("showStatusCode");

        applyStyleAutoSize(statusCode);
        applyStyleAutoSize(tips);

        if (showStatusCode) {
            statusCode.setVisibility(View.VISIBLE);
        } else {
            statusCode.setVisibility(View.GONE);
        }

        Rect frameRect = new Rect(bundle.getInt("cameraFrameLeft"), bundle.getInt("cameraFrameTop"),
            bundle.getInt("cameraFrameRight"), bundle.getInt("cameraFrameBottom"));
        Rect faceRect = new Rect(bundle.getInt("faceFrameLeft"), bundle.getInt("faceFrameTop"),
            bundle.getInt("faceFrameRight"), bundle.getInt("faceFrameBottom"));

        if (isActionArray) {
            interactiveLivenessConfig = new MLInteractiveLivenessConfig.Builder().setActionArray(actionArray,
                bundle.getInt("num"), bundle.getBoolean("isRandom")).build();
        } else {
            interactiveLivenessConfig = new MLInteractiveLivenessConfig.Builder().build();
        }

        mlInteractiveLivenessDetectView = new MLInteractiveLivenessDetectView.Builder().setContext(this)
            // Set the position of the camera video stream. (The coordinates of the upper left vertex and lower right vertex are determined based on the preview view.)
            .setFrameRect(frameRect)
            // Set the configurations for interactive biometric verification.
            .setActionConfig(interactiveLivenessConfig)
            // Set the position of the face frame relative to the camera preview view. The coordinates of the upper left vertex and lower right vertex are determined based on a 640 x 480 px image. You are advised to ensure the face frame dimensions comply with the ratio of a real face. The face frame is used to check whether a face is too close to or far from the camera, and whether a face deviates from the camera view.
            .setFaceRect(faceRect)
            // Set the verification timeout interval. The recommended value is about 10,000 ms.
            .setDetectionTimeOut(bundle.getInt("detectionTimeOut"))
            // Set the result callback.
            .setDetectCallback(new OnMLInteractiveLivenessDetectCallback() {

                @Override
                public void onCompleted(MLInteractiveLivenessCaptureResult result) {
                    // Callback when the verification is complete.
                    if (!isStatusCodes) {
                        statusCode.setText(statusCodeList.get(result.getStateCode()));
                    }
                    switch (result.getStateCode()) {
                        case InteractiveLivenessStateCode.ALL_ACTION_CORRECT:
                            // Processing logic when the verification is passed.
                            tips.setText("Success");
                            MLInteractiveLivenessCustomDetectionHandler.CUSTOM_CALLBACK.onSuccess(result);
                            finish();
                            break;
                        case InteractiveLivenessStateCode.IN_PROGRESS:
                            // Processing logic during verification.
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("2000"));
                            }
                            switch (result.getActionType()) {
                                case MLInteractiveLivenessConfig.SHAKE_DOWN_ACTION:
                                    if (isActionArray) {
                                        tips.setText(actionJson.optString("1"));
                                    } else {
                                        tips.setText("Nod your head");
                                    }
                                    break;
                                case MLInteractiveLivenessConfig.OPEN_MOUTH_ACTION:
                                    if (isActionArray) {
                                        tips.setText(actionJson.optString("2"));
                                    } else {
                                        tips.setText("Open your mouth");
                                    }
                                    break;
                                case MLInteractiveLivenessConfig.EYE_CLOSE_ACTION:
                                    if (isActionArray) {
                                        tips.setText(actionJson.optString("3"));
                                    } else {
                                        tips.setText("Blink");
                                    }
                                    break;
                                case MLInteractiveLivenessConfig.SHAKE_LEFT_ACTION:
                                    if (isActionArray) {
                                        tips.setText(actionJson.optString("4"));
                                    } else {
                                        tips.setText("Turn your head to the left");
                                    }
                                    break;
                                case MLInteractiveLivenessConfig.SHAKE_RIGHT_ACTION:
                                    if (isActionArray) {
                                        tips.setText(actionJson.optString("5"));
                                    } else {
                                        tips.setText("Turn your head to the right");
                                    }
                                    break;
                                case MLInteractiveLivenessConfig.GAZED_ACTION:
                                    if (isActionArray) {
                                        tips.setText(actionJson.optString("6"));
                                    } else {
                                        tips.setText("Stare at the screen");
                                    }
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case InteractiveLivenessStateCode.RESULT_TIME_OUT:
                            MLInteractiveLivenessCustomDetectionHandler.CUSTOM_CALLBACK.onFailure(DETECT_FACE_TIME_OUT);
                            finish();
                            break;
                        case InteractiveLivenessStateCode.FACE_ASPECT:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1001"));
                            }
                            break;
                        case InteractiveLivenessStateCode.NO_FACE:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1002"));
                            }
                            break;
                        case InteractiveLivenessStateCode.MULTI_FACES:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1003"));
                            }
                            break;
                        case InteractiveLivenessStateCode.PART_FACE:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1004"));
                            }
                            break;
                        case InteractiveLivenessStateCode.BIG_FACE:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1005"));
                            }
                            break;
                        case InteractiveLivenessStateCode.SMALL_FACE:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1006"));
                            }
                            break;
                        case InteractiveLivenessStateCode.WEAR_SUNGLASSES:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1007"));
                            }
                            break;
                        case InteractiveLivenessStateCode.WEAR_MASK:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1008"));
                            }
                            break;
                        case InteractiveLivenessStateCode.ACTION_MUTUALLY_EXCLUSIVE_ERROR:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1009"));
                            }
                            break;
                        case InteractiveLivenessStateCode.CONTINUITY_DETECTION_ERROR:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1014"));
                            }
                            break;
                        case InteractiveLivenessStateCode.DARK:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1018"));
                            }
                            break;
                        case InteractiveLivenessStateCode.BLUR:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1019"));
                            }
                            break;
                        case InteractiveLivenessStateCode.BACK_LIGHTING:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1020"));
                            }
                            break;
                        case InteractiveLivenessStateCode.BRIGHT:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("1021"));
                            }
                            break;
                        case InteractiveLivenessStateCode.SPOOFING:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("2002"));
                            }
                            break;
                        case InteractiveLivenessStateCode.LIVE_AND_ACTION_CORRECT:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("2003"));
                            }
                            break;
                        case InteractiveLivenessStateCode.GUIDE_DETECTION_SUCCESS:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("2004"));
                            }
                            break;
                        case InteractiveLivenessStateCode.INIT_FACE_RECTANGLE_ERROR:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("2007"));
                            }
                            break;
                        case InteractiveLivenessStateCode.ERROR_RESULT_BEFORE:
                            if (showStatusCode && isStatusCodes) {
                                statusCode.setText(statusCodesJson.optString("5020"));
                            }
                            break;
                        default:
                            Log.e(TAG, String.valueOf(result.getStateCode()));
                            break;
                    }
                }

                @Override
                public void onError(int error) {
                    // Callback when an error occurs during verification.
                    MLInteractiveLivenessCustomDetectionHandler.CUSTOM_CALLBACK.onFailure(error);
                }
            }).build();

        mPreviewContainer.addView(mlInteractiveLivenessDetectView, 0);
        mPreviewContainer.addView(scanBg, 1);
        mlInteractiveLivenessDetectView.onCreate(savedInstanceState);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    void applyStyleAutoSize(TextView textView) {
        if (autoSizeText) {
            textView.setAutoSizeTextTypeUniformWithConfiguration(minTextSize, maxTextSize, granularity,
                TypedValue.COMPLEX_UNIT_DIP);
        } else {
            textView.setTextSize(textSize);
        }
    }

    private void getAction(Bundle bundle) {
        actionArray = bundle.getIntArray("actionArray");
        String[] actionArrayValue = bundle.getStringArray("actionArrayValue");

        if (actionArray != null && actionArrayValue != null) {
            for (int i = 0; i < actionArray.length; i++) {
                try {
                    actionJson.put(String.valueOf(actionArray[i]), actionArrayValue[i]);
                } catch (JSONException e) {
                    Log.i("Customized-Exception", e.getMessage());
                }
            }
        } else {
            isActionArray = false;
        }
    }

    private void getStatusCodes(Bundle bundle) {
        int[] statusCodes = bundle.getIntArray("statusCodes");
        String[] statusCodesValue = bundle.getStringArray("statusCodesValue");

        if (statusCodes != null && statusCodesValue != null) {
            for (int i = 0; i < statusCodes.length; i++) {
                try {
                    statusCodesJson.put(String.valueOf(statusCodes[i]), statusCodesValue[i]);
                } catch (JSONException e) {
                    Log.i("Customized-Exception", e.getMessage());
                }
            }
        } else {
            isStatusCodes = false;
        }
    }

    private View handleResources(String resourceName) {
        return customView.findViewById(
            mContext.getResources().getIdentifier(resourceName, "id", mContext.getPackageName()));
    }

    private int getTemplate() {
        try {
            return mContext.getResources()
                .getIdentifier((String) MLInteractiveLivenessCustomDetectionActivity.class.getDeclaredField(
                    "ACTIVITY_LIVENESS_CUSTOM_DETECTION").get(null), "layout", mContext.getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e(TAG, e.getMessage());
            return -1;
        }
    }

    private int getDrawableId(Context context, String resourceName) {
        try {
            return context.getResources()
                .getIdentifier(
                    (String) MLInteractiveLivenessCustomDetectionActivity.class.getDeclaredField(resourceName)
                        .get(null), "drawable", context.getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e("PluginNativeAdManager", e.getMessage());
            return -1;
        }
    }

    void initStatusCodeList() {
        statusCodeList.put(1001, "The face orientation is inconsistent with that of the phone.");
        statusCodeList.put(1002, "No face is detected.");
        statusCodeList.put(1003, "Multiple faces are detected.");
        statusCodeList.put(1004, "The face deviates from the center of the face frame.");
        statusCodeList.put(1005, "The face is too large.");
        statusCodeList.put(1006, "The face is too small.");
        statusCodeList.put(1007, "The face is blocked by the sunglasses.");
        statusCodeList.put(1008, "The face is blocked by the mask.");
        statusCodeList.put(1009, "The detected action is not the required one.");
        statusCodeList.put(1014, "The continuity detection fails.");
        statusCodeList.put(1018, "The light is dark.");
        statusCodeList.put(1019, "The image is blurry.");
        statusCodeList.put(1020, "The face is backlit.");
        statusCodeList.put(1021, "The light is bright.");
        statusCodeList.put(2000, "In progress");
        statusCodeList.put(2002, "The face does not belong to a real person. ");
        statusCodeList.put(2003, "Verification is performed, and the detected action is correct.");
        statusCodeList.put(2004, "Verification succeeded.");
        statusCodeList.put(2007, "The position of the face frame is not set before the algorithm is called.");
        statusCodeList.put(5020, "The previous detection ended when it was not complete.");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mlInteractiveLivenessDetectView.onDestroy();
    }

    @Override
    protected void onPause() {
        super.onPause();
        mlInteractiveLivenessDetectView.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        mlInteractiveLivenessDetectView.onResume();
    }

    @Override
    protected void onStart() {
        super.onStart();
        mlInteractiveLivenessDetectView.onStart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        mlInteractiveLivenessDetectView.onStop();
    }
}
