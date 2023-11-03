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

import static com.huawei.hms.cordova.mlbody.utils.HMSMLUtils.jsonArrayToArray;

import android.content.Context;

import com.huawei.hms.cordova.mlbody.helpers.MLInteractiveLivenessCaptureError;
import com.huawei.hms.cordova.mlbody.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.cordova.mlbody.utils.TextUtils;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCapture;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCaptureConfig;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCaptureResult;
import com.huawei.hms.mlsdk.interactiveliveness.action.InteractiveLivenessStateCode;
import com.huawei.hms.mlsdk.interactiveliveness.action.MLInteractiveLivenessConfig;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class MLInteractiveLivenessDetectionAnalyser extends HMSProvider {

    public static final int DETECT_FACE_TIME_OUT = 11404;

    private static String tag = MLInteractiveLivenessDetectionAnalyser.class.getSimpleName();

    private MLInteractiveLivenessConfig interactiveLivenessConfig;

    public MLInteractiveLivenessDetectionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeInteractiveLivenessAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        int options = params.optInt("options", MLInteractiveLivenessCaptureConfig.DETECT_MASK);
        int detectionTimeOut = params.optInt("detectionTimeOut", 10000);

        if (params.has("action")) {
            JSONObject action = params.getJSONObject("action");
            int[] actionArray = jsonArrayToArray(action.optJSONArray("actionArray"));
            int num = action.getInt("num");
            boolean isRandom = action.getBoolean("isRandom");
            interactiveLivenessConfig = new MLInteractiveLivenessConfig.Builder().setActionArray(actionArray, num,
                isRandom).build();
        } else {
            interactiveLivenessConfig = new MLInteractiveLivenessConfig.Builder().build();
        }

        MLInteractiveLivenessCaptureConfig captureConfig = new MLInteractiveLivenessCaptureConfig.Builder().setOptions(
            options).setActionConfig(interactiveLivenessConfig).setDetectionTimeOut(detectionTimeOut).build();
        MLInteractiveLivenessCapture capture = MLInteractiveLivenessCapture.getInstance();
        capture.setConfig(captureConfig);
        capture.startDetect(getActivity(), new MLInteractiveLivenessCapture.Callback() {
            @Override
            public void onSuccess(MLInteractiveLivenessCaptureResult result) {
                switch (result.getStateCode()) {
                    case InteractiveLivenessStateCode.ALL_ACTION_CORRECT:
                        // Processing logic when the verification is passed.
                        try {
                            callbackContext.success(TextUtils.mlInteractiveLivenessResult(result));
                            HMSLogger.getInstance(getContext()).sendSingleEvent("interactiveLivenessDetection");
                        } catch (JSONException e) {
                            callbackContext.error(e.getMessage());
                            HMSLogger.getInstance(getContext())
                                .sendSingleEvent("interactiveLivenessDetection", e.getMessage());
                        }
                        break;
                    case InteractiveLivenessStateCode.IN_PROGRESS:
                        // Processing logic during verification.
                        HMSLogger.getInstance(getContext()).sendSingleEvent("inProgress");
                        break;
                    case InteractiveLivenessStateCode.RESULT_TIME_OUT:
                        HMSLogger.getInstance(getContext()).sendSingleEvent("resultTimeOut");
                        callbackContext.error(MLInteractiveLivenessCaptureError.toErrorJSON(DETECT_FACE_TIME_OUT));
                        break;
                    default:
                        break;
                }
            }

            @Override
            public void onFailure(int i) {
                callbackContext.error(MLInteractiveLivenessCaptureError.toErrorJSON(i));
                HMSLogger.getInstance(getContext()).sendSingleEvent("interactiveLivenessDetection", "-1");
            }
        });
    }
}
