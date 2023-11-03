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

import static com.huawei.hms.cordova.mlbody.utils.HMSMLUtils.constructObjectToIntArray;
import static com.huawei.hms.cordova.mlbody.utils.HMSMLUtils.constructObjectToStringArray;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.mlbody.helpers.MLInteractiveLivenessCaptureError;
import com.huawei.hms.cordova.mlbody.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlbody.utils.TextUtils;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCapture;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCaptureResult;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class MLInteractiveLivenessCustomDetectionHandler extends HMSProvider {
    public static CallbackContext callbackContext;

    public static final MLInteractiveLivenessCapture.Callback CUSTOM_CALLBACK
        = new MLInteractiveLivenessCapture.Callback() {
        @Override
        public void onSuccess(MLInteractiveLivenessCaptureResult result) {
            try {
                callbackContext.success(TextUtils.mlInteractiveLivenessResult(result));
            } catch (JSONException e) {
                Log.i("Customized-Exception", e.getMessage());
            }
        }

        @Override
        public void onFailure(int errorCode) {
            callbackContext.error(MLInteractiveLivenessCaptureError.toErrorJSON(errorCode));
        }
    };

    private Activity mActivity;

    private Context mContext;

    public MLInteractiveLivenessCustomDetectionHandler(Context context, Activity activity) {
        super(context);
        mActivity = activity;
        mContext = context;
    }

    public void customInteractiveLivenessAnalyser(JSONObject jsonObject, CallbackContext context) throws JSONException {
        this.callbackContext = context;

        int[] actionArray = new int[0];
        String[] actionArrayValue = null;
        int num = 0;
        boolean isRandom = false;

        if (jsonObject.has("action")) {
            JSONObject action = jsonObject.getJSONObject("action");
            actionArray = constructObjectToIntArray(action.getJSONObject("actionArray"));
            actionArrayValue = constructObjectToStringArray(action.getJSONObject("actionArray"));
            num = action.getInt("num");
            isRandom = action.getBoolean("isRandom");
        }

        int[] statusCodes = new int[0];
        String[] statusCodesValue = null;
        if (jsonObject.has("statusCodes")) {
            statusCodes = constructObjectToIntArray(jsonObject.getJSONObject("statusCodes"));
            statusCodesValue = constructObjectToStringArray(jsonObject.getJSONObject("statusCodes"));
        }

        int detectionTimeOut = 10000;
        if (jsonObject.has("detectionTimeOut")) {
            detectionTimeOut = jsonObject.getInt("detectionTimeOut");
        }

        int cameraFrameBottom = 1440;
        int cameraFrameTop = 0;
        int cameraFrameLeft = 0;
        int cameraFrameRight = 1080;
        if (jsonObject.has("cameraFrame")) {
            JSONObject cameraFrame = jsonObject.getJSONObject("cameraFrame");
            cameraFrameBottom = cameraFrame.getInt("bottom");
            cameraFrameTop = cameraFrame.getInt("top");
            cameraFrameLeft = cameraFrame.getInt("left");
            cameraFrameRight = cameraFrame.getInt("right");
        }

        int faceFrameBottom = 518;
        int faceFrameTop = 122;
        int faceFrameLeft = 84;
        int faceFrameRight = 396;
        if (jsonObject.has("faceFrame")) {
            JSONObject cameraFrame = jsonObject.getJSONObject("faceFrame");
            faceFrameBottom = cameraFrame.getInt("bottom");
            faceFrameTop = cameraFrame.getInt("top");
            faceFrameLeft = cameraFrame.getInt("left");
            faceFrameRight = cameraFrame.getInt("right");
        }

        int textMargin = 0;
        if (jsonObject.has("textMargin")) {
            textMargin = jsonObject.getInt("textMargin");
        }

        String title = "Face Detection";
        if (jsonObject.has("title")) {
            title = jsonObject.getString("title");
        }

        boolean showStatusCode = true;
        if (jsonObject.has("showStatusCode")) {
            showStatusCode = jsonObject.getBoolean("showStatusCode");
        }

        int textColor = -16777216;
        float textSize = 20.0F;
        boolean autoSizeText = false;
        int minTextSize = 15;
        int maxTextSize = 30;
        int granularity = 2;
        if (jsonObject.has("textOptions")) {
            JSONObject textOptions = jsonObject.getJSONObject("textOptions");
            if (textOptions.has("textColor")) {
                textColor = textOptions.getInt("textColor");
            }
            if (textOptions.has("textSize")) {
                textSize = (float) textOptions.getDouble("textSize");
            }
            if (textOptions.has("autoSizeText")) {
                autoSizeText = textOptions.getBoolean("autoSizeText");
            }
            if (textOptions.has("minTextSize")) {
                minTextSize = textOptions.getInt("minTextSize");
            }
            if (textOptions.has("maxTextSize")) {
                maxTextSize = textOptions.getInt("maxTextSize");
            }
            if (textOptions.has("granularity")) {
                granularity = textOptions.getInt("granularity");
            }
        }

        Intent intent = new Intent(mContext, MLInteractiveLivenessCustomDetectionActivity.class);

        intent.putExtra("actionArray", actionArray);
        intent.putExtra("actionArrayValue", actionArrayValue);
        intent.putExtra("statusCodes", statusCodes);
        intent.putExtra("statusCodesValue", statusCodesValue);
        intent.putExtra("num", num);
        intent.putExtra("isRandom", isRandom);
        intent.putExtra("detectionTimeOut", detectionTimeOut);
        intent.putExtra("cameraFrameBottom", cameraFrameBottom);
        intent.putExtra("cameraFrameTop", cameraFrameTop);
        intent.putExtra("cameraFrameLeft", cameraFrameLeft);
        intent.putExtra("cameraFrameRight", cameraFrameRight);
        intent.putExtra("faceFrameBottom", faceFrameBottom);
        intent.putExtra("faceFrameTop", faceFrameTop);
        intent.putExtra("faceFrameLeft", faceFrameLeft);
        intent.putExtra("faceFrameRight", faceFrameRight);
        intent.putExtra("textMargin", textMargin);
        intent.putExtra("title", title);
        intent.putExtra("showStatusCode", showStatusCode);
        intent.putExtra("textColor", textColor);
        intent.putExtra("textSize", textSize);
        intent.putExtra("autoSizeText", autoSizeText);
        intent.putExtra("minTextSize", minTextSize);
        intent.putExtra("maxTextSize", maxTextSize);
        intent.putExtra("granularity", granularity);

        mActivity.startActivity(intent);
    }
}
