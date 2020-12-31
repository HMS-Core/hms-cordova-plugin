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

package com.huawei.hms.cordova.mlkit.providers.voiceproviders.aft;

import android.content.Context;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.aft.MLAftEvents;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftEngine;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftListener;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftResult;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

public class MLAftAnalyser extends HMSProvider {
    private static final String TAG = MLAftAnalyser.class.getName();
    private static final int THRESHOLD_TIME = 60000;
    private static volatile Timer mTimer;
    private CallbackContext callbackContext;
    private String taskId;
    private MLRemoteAftEngine engine;
    private MLRemoteAftSetting setting;
    private MLRemoteAftListener aftListener = new MLRemoteAftListener() {
        @Override
        public void onInitComplete(String taskId, Object ext) {
            JSONObject onInitComplete = new JSONObject();
            try {
                onInitComplete.putOpt("eventName", "onInitComplete");
                onInitComplete.put("taskId", taskId);
                onInitComplete.put("ext", ext);
                callbackContext.success(onInitComplete);
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser");
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
            }
        }

        @Override
        public void onUploadProgress(String taskId, double progress, Object ext) {
            JSONObject onUploadProgress = new JSONObject();
            try {
                onUploadProgress.putOpt("eventName", "onUploadProgress");
                onUploadProgress.putOpt("taskId", taskId);
                onUploadProgress.putOpt("progress", progress);
                onUploadProgress.putOpt("ext", ext);
                callbackContext.success(onUploadProgress);
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser");
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
            }
        }

        @Override
        public void onEvent(String taskId, int eventId, Object ext) {
            startQueryResult();
            JSONObject onEvent = new JSONObject();
            try {
                onEvent.putOpt("eventName", "onEvent");
                onEvent.putOpt("taskId", taskId);
                onEvent.putOpt("eventId", eventId);
                onEvent.putOpt("ext", ext);
                callbackContext.success(onEvent);
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser");
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
            }
        }

        @Override
        public void onResult(String taskId, MLRemoteAftResult result, Object ext) {
            if (result.isComplete()) {
                JSONObject aftResult = new JSONObject();
                try {
                    aftResult.putOpt("eventName", "onResult");
                    aftResult.putOpt("text", result.getText());
                    aftResult.putOpt("taskId", result.getTaskId());
                    aftResult.putOpt("complete", result.isComplete());

                    List<MLRemoteAftResult.Segment> words = result.getWords();
                    if (words != null && words.size() != 0) {
                        for (MLRemoteAftResult.Segment word : words) {
                            Log.e(TAG, "MLAsrCallBack word  text is : " + word.getText() + ", startTime is : "
                                + word.getStartTime() + ". endTime is : " + word.getEndTime());
                        }
                    }

                    List<MLRemoteAftResult.Segment> sentences = result.getSentences();
                    if (sentences != null && sentences.size() != 0) {
                        for (MLRemoteAftResult.Segment sentence : sentences) {
                            Log.e(TAG, "MLAsrCallBack sentence  text is : " + sentence.getText() + ", startTime is : "
                                + sentence.getStartTime() + ". endTime is : " + sentence.getEndTime());
                        }
                    }
                    callbackContext.success(aftResult);
                    HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser");
                } catch (JSONException e) {
                    callbackContext.error(e.getMessage());
                    HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
                }

            } else {
                callbackContext.success("Loading...");
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser");
                return;
            }
            if (result.getTaskId() == null || result.getText().equals("")) {
                callbackContext.error("No speech recognized, please re-enter.");
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", "-1");
            }
        }

        @Override
        public void onError(String taskId, int errorCode, String message) {
            JSONObject error = new JSONObject();
            try {
                error.putOpt("eventName", "onError");
                error.putOpt("taskId", taskId);
                error.putOpt("errorCode", errorCode);
                error.putOpt("message", message);
                callbackContext.error(error);
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", "-1");
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
            }
            Log.e(TAG, "MLAsrCallBack onError." + errorCode + " task:" + taskId);
        }
    };
    private MLRemoteAftListener aftLongListener = new MLRemoteAftListener() {
        @Override
        public void onInitComplete(String taskId, Object ext) {
            engine.startTask(taskId);
        }

        @Override
        public void onUploadProgress(String taskId, double progress, Object ext) {

        }

        @Override
        public void onEvent(String taskId, int eventId, Object ext) {
            if (eventId == MLAftEvents.UPLOADED_EVENT) {
                getResult(taskId);
            }
        }

        @Override
        public void onResult(String taskId, MLRemoteAftResult result, Object ext) {

            if (result.isComplete()) {
                JSONObject aftLongResult = new JSONObject();
                try {
                    aftLongResult.putOpt("eventName", "onResult");
                    aftLongResult.putOpt("text", result.getText());
                    aftLongResult.putOpt("taskId", result.getTaskId());
                    aftLongResult.putOpt("complete", result.isComplete());
                    callbackContext.success(aftLongResult);
                    HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser");
                } catch (JSONException e) {
                    callbackContext.error(e.getMessage());
                    HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
                }
                mTimer.cancel();

            }
        }

        @Override
        public void onError(String taskId, int errorCode, String message) {
            JSONObject errorLong = new JSONObject();
            try {
                errorLong.putOpt("eventName", "onError");
                errorLong.putOpt("taskId", taskId);
                errorLong.putOpt("errorCode", errorCode);
                errorLong.putOpt("message", message);
                callbackContext.error(errorLong);
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", "-1");
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyser", e.getMessage());
            }
        }
    };

    public MLAftAnalyser(Context ctx) {
        super(ctx);
    }

    private void getResult(final String taskId) {
        if (mTimer == null) {
            mTimer = new Timer();
        }
        TimerTask timerTask = new TimerTask() {
            @Override
            public void run() {
                engine.getLongAftResult(taskId);
            }
        };
        mTimer.schedule(timerTask, 1000, 2000);
    }

    public void initializeAFTAnalyser(final JSONObject params, final CallbackContext callbackContext)
        throws JSONException {
        this.callbackContext = callbackContext;

        if (!params.has("audioPath")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("aftAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }

        String filePath = params.getString("audioPath");
        Uri uri = Uri.parse(filePath);
        JSONObject aftSetting = params.optJSONObject("aftSetting");
        if (aftSetting != null) {
            setting = TextUtils.toObject(aftSetting, MLRemoteAftSetting.class);
        } else {
            setting = new MLRemoteAftSetting.Factory().setLanguageCode("en-US")
                .enablePunctuation(true)
                .enableWordTimeOffset(true)
                .enableSentenceTimeOffset(true)
                .create();
        }

        this.engine = MLRemoteAftEngine.getInstance();
        this.engine.init(getContext());

        int audioTime = getAudioFileTimeFromUri(uri);
        if (!Uri.EMPTY.equals(uri)) {
            if (audioTime < THRESHOLD_TIME) {
                this.engine.setAftListener(this.aftListener);
                this.engine.shortRecognize(uri, setting);
            } else {
                this.engine.setAftListener(this.aftLongListener);
                this.taskId = this.engine.longRecognize(uri, setting);

            }
        }

    }

    public void close(final CallbackContext callbackContext) {
        if (this.engine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("aftAnalyserClose", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.engine.close();
            HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyserClose");
        }
    }

    public void destroyTask(final CallbackContext callbackContext) {
        if (this.engine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("aftAnalyserDestroy", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.engine.destroyTask(this.taskId);
            HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyserDestroy");
        }
    }

    public void pauseTask(final CallbackContext callbackContext) {
        if (this.engine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("aftAnalyserPause", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.engine.pauseTask(this.taskId);
            HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyserPause");
        }
    }

    private int getAudioFileTimeFromUri(Uri uri) {
        MediaMetadataRetriever mmr = new MediaMetadataRetriever();
        mmr.setDataSource(getContext(), uri);
        String durationStr = mmr.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION);
        return Integer.parseInt(durationStr);
    }

    private void startQueryResult() {
        Timer timer = new Timer();
        TimerTask mTimerTask = new TimerTask() {
            @Override
            public void run() {
                getResult();
            }
        };
        timer.schedule(mTimerTask, 5000, 10000);
    }

    private void getResult() {
        this.engine.setAftListener(aftListener);
        this.engine.getLongAftResult(taskId);
    }

    public void getAFTSetting(final CallbackContext callbackContext) throws JSONException {
        if (this.engine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("aftAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject object = new JSONObject();
            object.putOpt("languageCode", setting.getLanguageCode());
            object.putOpt("isPunctuationEnabled", setting.isPunctuationEnabled());
            object.putOpt("isWordTimeOffsetEnabled", setting.isWordTimeOffsetEnabled());
            object.putOpt("isTimeOffsetEnabled", setting.isTimeOffsetEnabled());
            callbackContext.success(object);
            HMSLogger.getInstance(getContext()).sendSingleEvent("aftAnalyserSetting");
        }
    }

}