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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.livenessdetection;

import static com.huawei.hms.mlsdk.livenessdetection.MLLivenessDetectView.DETECT_MASK;

import android.content.Context;

import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.livenessdetection.MLLivenessCapture;
import com.huawei.hms.mlsdk.livenessdetection.MLLivenessCaptureConfig;
import com.huawei.hms.mlsdk.livenessdetection.MLLivenessCaptureResult;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class MLLivenessDetectionAnalyser extends HMSProvider {
    private static String TAG = MLLivenessDetectionAnalyser.class.getSimpleName();

    public MLLivenessDetectionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeLivenessAnalyser(final JSONObject params, final CallbackContext callbackContext) {

        MLLivenessCaptureConfig captureConfig = new MLLivenessCaptureConfig.Builder().setOptions(DETECT_MASK).build();
        MLLivenessCapture capture = MLLivenessCapture.getInstance();
        capture.setConfig(captureConfig);
        capture.startDetect(getActivity(), new MLLivenessCapture.Callback() {
            public void onSuccess(MLLivenessCaptureResult result) {
                try {
                    callbackContext.success(TextUtils.mlLivenessResult(result));
                    HMSLogger.getInstance(getContext()).sendSingleEvent("livenessDetection");
                } catch (JSONException e) {
                    callbackContext.error(e.getMessage());
                    HMSLogger.getInstance(getContext()).sendSingleEvent("livenessDetection", e.getMessage());
                }
            }

            public void onFailure(int errorCode) {
                callbackContext.error("Error: " + errorCode);
                HMSLogger.getInstance(getContext()).sendSingleEvent("livenessDetection", "-1");
            }
        });

    }
}