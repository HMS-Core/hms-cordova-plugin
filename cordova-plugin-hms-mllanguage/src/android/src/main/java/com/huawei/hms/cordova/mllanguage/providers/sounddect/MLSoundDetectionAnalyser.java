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

package com.huawei.hms.cordova.mllanguage.providers.sounddect;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.helpers.CordovaErrors;
import com.huawei.hms.mlsdk.sounddect.MLSoundDetectListener;
import com.huawei.hms.mlsdk.sounddect.MLSoundDetector;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MLSoundDetectionAnalyser extends CordovaBaseModule {
    private static final String TAG = MLSoundDetectionAnalyser.class.getName();

    private MLSoundDetector soundDetector;

    private Promise promise;

    private Context context;

    public MLSoundDetectionAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void soundDectAnalyser(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        boolean startType = params.getBoolean("startType");
        this.promise = promise;

        soundDetector = MLSoundDetector.createSoundDetector();
        soundDetector.setSoundDetectListener(listener);
        if (startType) {
            boolean startSuccess = soundDetector.start(context);
            if (startSuccess) {
                Log.i(TAG, "Voice Recognition Start");
            }
        } else {
            soundDetector.stop();
            promise.success("Voice Recognition Stop");
        }
    }

    @HMSLog
    @CordovaMethod
    public void soundDectAnalyserDestroy(final CorPack corPack, JSONArray args, final Promise promise) {
        if (soundDetector == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            soundDetector.destroy();
            promise.success();
        }
    }

    private MLSoundDetectListener listener = new MLSoundDetectListener() {
        @Override
        public void onSoundSuccessResult(Bundle result) {
            int soundType = result.getInt(MLSoundDetector.RESULTS_RECOGNIZED);
            JSONObject sound = new JSONObject();
            try {
                sound.putOpt("soundType", soundType);
                sound.putOpt("eventName", "onSoundSuccessResult");
                promise.success(sound);
            } catch (JSONException e) {
                Log.e(TAG, "onSoundFailResult: error" + e.getMessage());
                promise.error("Error: " + e.getMessage());
            }
        }

        @Override
        public void onSoundFailResult(int errCode) {
            promise.error(errCode);
        }
    };
}
