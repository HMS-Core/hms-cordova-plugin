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

package com.huawei.hms.cordova.mllanguage.providers.aft;

import android.content.Context;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.util.Log;

import com.huawei.hms.cordova.mllanguage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mllanguage.basef.CordovaMethod;
import com.huawei.hms.cordova.mllanguage.basef.HMSLog;
import com.huawei.hms.cordova.mllanguage.basef.handler.CorPack;
import com.huawei.hms.cordova.mllanguage.basef.handler.Promise;
import com.huawei.hms.cordova.mllanguage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mllanguage.utils.TextUtils;
import com.huawei.hms.mlsdk.aft.MLAftEvents;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftEngine;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftListener;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftResult;
import com.huawei.hms.mlsdk.aft.cloud.MLRemoteAftSetting;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

public class MLAftAnalyser extends CordovaBaseModule {

    private static final String TAG = MLAftAnalyser.class.getName();

    private static final int THRESHOLD_TIME = 60000;

    private static volatile Timer mTimer;

    public Context context;

    private Promise promise;

    private String taskId;

    private MLRemoteAftEngine engine;

    private MLRemoteAftSetting setting;

    public MLAftAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void aftAnalyser(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        JSONObject params = args.getJSONObject(0);

        if (!params.has("audioPath")) {
            Log.e("aftAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
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
        this.engine.init(context);
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
                    promise.success(aftLongResult);
                } catch (JSONException e) {
                    promise.error(e.getMessage());
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
                promise.error(errorLong);
            } catch (JSONException e) {
                promise.error(e.getMessage());
            }
        }
    };

    @HMSLog
    @CordovaMethod
    public void aftAnalyserClose(final CorPack corPack, JSONArray args, final Promise promise) {
        if (this.engine == null) {
            Log.e("aftAnalyserClose", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.engine.close();
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void aftAnalyserDestroy(final CorPack corPack, JSONArray args, final Promise promise) {
        if (this.engine == null) {
            Log.e("aftAnalyserDestroy", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.engine.destroyTask(this.taskId);
            promise.success();
        }
    }

    @HMSLog
    @CordovaMethod
    public void aftAnalyserPause(final CorPack corPack, JSONArray args, final Promise promise) {
        if (this.engine == null) {
            Log.e("aftAnalyserPause", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            this.engine.pauseTask(this.taskId);
            promise.success();
        }
    }

    private int getAudioFileTimeFromUri(Uri uri) {
        MediaMetadataRetriever mmr = new MediaMetadataRetriever();
        mmr.setDataSource(context, uri);
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

    @HMSLog
    @CordovaMethod
    public void getAFTSetting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        if (this.engine == null) {
            Log.e("getAFTSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject object = new JSONObject();
            object.putOpt("languageCode", setting.getLanguageCode());
            object.putOpt("isPunctuationEnabled", setting.isPunctuationEnabled());
            object.putOpt("isWordTimeOffsetEnabled", setting.isWordTimeOffsetEnabled());
            object.putOpt("isTimeOffsetEnabled", setting.isTimeOffsetEnabled());
            promise.success(object);
        }
    }

    @HMSLog
    @CordovaMethod
    public void getLongAftLanguages(final CorPack corPack, JSONArray args, final Promise promise) {

        MLRemoteAftEngine.getInstance().getLongAftLanguages(new MLRemoteAftEngine.LanguageCallback() {
            @Override
            public void onResult(final List<String> result) {
                Log.i(TAG, "support languages==" + result.toString());
                promise.success(result.toString());
            }

            @Override
            public void onError(int errorCode, String errorMsg) {
                Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg);
                JSONObject json = new JSONObject();
                try {
                    json.put("errorCode", errorCode);
                    json.put("errorMsg", errorMsg);
                } catch (JSONException e) {
                    Log.e(TAG, "MLRemoteAftEngine.LanguageCallback: error ->" + e.getMessage());
                }
                promise.error(json);
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void getShortAftLanguages(final CorPack corPack, JSONArray args, final Promise promise) {
        MLRemoteAftEngine.getInstance().getShortAftLanguages(new MLRemoteAftEngine.LanguageCallback() {
            @Override
            public void onResult(final List<String> result) {
                Log.i(TAG, "support languages==" + result.toString());
                promise.success(result.toString());
            }

            @Override
            public void onError(int errorCode, String errorMsg) {
                Log.e(TAG, "errorCode:" + errorCode + "errorMsg:" + errorMsg);
                JSONObject json = new JSONObject();
                try {
                    json.put("errorCode", errorCode);
                    json.put("errorMsg", errorMsg);
                } catch (JSONException e) {
                    Log.e(TAG, "MLRemoteAftEngine.LanguageCallback: error ->" + e.getMessage());
                }
                promise.error(json);
            }
        });
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
    }    private MLRemoteAftListener aftListener = new MLRemoteAftListener() {
        @Override
        public void onInitComplete(String taskId, Object ext) {
            JSONObject onInitComplete = new JSONObject();
            try {
                onInitComplete.putOpt("eventName", "onInitComplete");
                onInitComplete.put("taskId", taskId);
                onInitComplete.put("ext", ext);
                promise.success(onInitComplete);
            } catch (JSONException e) {
                Log.e("aftAnalyser", e.getMessage());
                promise.error(e.getMessage());
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
                promise.success(onUploadProgress);
            } catch (JSONException e) {
                Log.e("aftAnalyser", e.getMessage());
                promise.error(e.getMessage());
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
                promise.success(onEvent);
            } catch (JSONException e) {
                Log.e("aftAnalyser", e.getMessage());
                promise.error(e.getMessage());
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
                    promise.success(aftResult);
                } catch (JSONException e) {
                    Log.e("aftAnalyser", e.getMessage());
                    promise.error(e.getMessage());
                }

            } else {
                promise.success("Loading...");
                return;
            }
            if (result.getTaskId() == null || result.getText().equals("")) {
                Log.e("aftAnalyser", "No speech recognized, please re-enter.");
                promise.error("No speech recognized, please re-enter.");
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
                promise.error(error);
            } catch (JSONException e) {
                promise.error(e.getMessage());
            }
            Log.e(TAG, "MLAsrCallBack onError." + errorCode + " task:" + taskId);
        }
    };
}
