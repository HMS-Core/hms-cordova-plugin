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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.sounddect;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.mlsdk.sounddect.MLSoundDectListener;
import com.huawei.hms.mlsdk.sounddect.MLSoundDector;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

public class MLSoundDetectionAnalyser extends HMSProvider {
    private static final String TAG = MLSoundDetectionAnalyser.class.getName();
    private MLSoundDector soundDetector;
    private CallbackContext callbackContext;

    private MLSoundDectListener listener = new MLSoundDectListener() {
        @Override
        public void onSoundSuccessResult(Bundle result) {
            int soundType = result.getInt(MLSoundDector.RESULTS_RECOGNIZED);
            JSONObject sound = new JSONObject();
            try {
                sound.putOpt("soundType", soundType);
                sound.putOpt("eventName", "onSoundSuccessResult");
                callbackContext.success(sound);
                HMSLogger.getInstance(getContext()).sendSingleEvent("soundDectAnalyser");
            } catch (JSONException e) {
                Log.e(TAG, "onSoundFailResult: error" + e.getMessage());
                callbackContext.error("Error: " + e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("soundDectAnalyser", e.getMessage());
            }
        }

        @Override
        public void onSoundFailResult(int errCode) {
            callbackContext.error(errCode);
        }
    };

    public MLSoundDetectionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeSoundDectAnalyzer(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        boolean startType = params.getBoolean("startType");
        this.callbackContext = callbackContext;

        soundDetector = MLSoundDector.createSoundDector();
        soundDetector.setSoundDectListener(listener);
        if (startType) {
            boolean startSuccess = soundDetector.start(getContext());
            if (startSuccess) {
                Log.i(TAG, "Voice Recognition Start");
            }
        } else {
            soundDetector.stop();
            callbackContext.success("Voice Recognition Stop");
            HMSLogger.getInstance(getContext()).sendSingleEvent("soundDectAnalyser");
        }
    }

    public void destroySound(final CallbackContext callbackContext) {
        if (soundDetector == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("soundDectAnalyserDestroy", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            soundDetector.destroy();
            HMSLogger.getInstance(getContext()).sendSingleEvent("soundDectAnalyserDestroy");
        }
    }

}
