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

package com.huawei.hms.cordova.mlkit;

import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.aft.MLAftAnalyser;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.asr.MLAsrAnalyser;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.langdetection.MLLangDetectionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.rtt.MLRttAnalyser;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.sounddect.MLSoundDetectionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.translate.MLTranslatorAnalyser;
import com.huawei.hms.cordova.mlkit.providers.voiceproviders.tts.MLTtsAnalyser;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;
import com.huawei.hms.mlsdk.common.MLException;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSVoiceServiceProvider extends CordovaPlugin {
    public static final String TAG = HMSVoiceServiceProvider.class.getSimpleName();

    private PermissionUtils permissionUtils = new PermissionUtils();
    private MLTranslatorAnalyser translator;
    private MLLangDetectionAnalyser langDetection;
    private MLTtsAnalyser ttsAnalyse;
    private MLAftAnalyser aftAnalyse;
    private MLAsrAnalyser asrAnalyse = new MLAsrAnalyser();
    private MLSoundDetectionAnalyser soundDectAnalyse;
    private MLRttAnalyser rttAnalyser;

    public void pluginInitialize() {
        translator = CordovaHelpers.initializeProvider(new MLTranslatorAnalyser(cordova.getContext()), cordova, this);
        langDetection = CordovaHelpers.initializeProvider(new MLLangDetectionAnalyser(cordova.getContext()), cordova,
            this);
        ttsAnalyse = CordovaHelpers.initializeProvider(new MLTtsAnalyser(cordova.getContext()), cordova, this);
        aftAnalyse = CordovaHelpers.initializeProvider(new MLAftAnalyser(cordova.getContext()), cordova, this);
        soundDectAnalyse = CordovaHelpers.initializeProvider(new MLSoundDetectionAnalyser(cordova.getContext()),
            cordova, this);
        rttAnalyser = CordovaHelpers.initializeProvider(new MLRttAnalyser(cordova.getContext()), cordova, this);

    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        JSONObject params = args.optJSONObject(0);
        if (permissionCheckVoice(callbackContext)) {
            try {
                switch (action) {
                    case "ACTION_REMOTE_TRANSLATOR":
                    case "ACTION_LOCAL_TRANSLATOR":
                    case "ACTION_DOWNLOAD_MODEL":
                    case "ACTION_DELETE_MODEL":
                    case "ACTION_REMOTE_GETLANG":
                    case "ACTION_LOCAL_GETLANG":
                    case "ACTION_GET_DSTRATEGY":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("translatorAnalyser");
                        translator.initializeTranslatorAnalyser(action, callbackContext, params);
                        return true;
                    case "ACTION_REMOTE_LANG_DETECTION":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("remoteLangDetection");
                        langDetection.initializeRemoteLangDetectionAnalyser(params, callbackContext);
                        return true;
                    case "ACTION_LOCAL_LANG_DETECTION":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("localLangDetection");
                        langDetection.initializeLocalLangDetectionAnalyser(params, callbackContext, cordova);
                        return true;
                    case "ACTION_STOP_TRANSLATOR_SERVICE":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("translatorAnalyserStop");
                        translator.stopTranslatorService(callbackContext, cordova);
                        return true;
                    case "ACTION_STOP_LANGDETECTION_SERVICE":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("langDetectionServiceStop");
                        langDetection.stopLangDetectionService(callbackContext, cordova);
                        return true;
                    case "ACTION_TTS_ANALYSE": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsAnalyser");
                            try {
                                ttsAnalyse.initializeTTSAnalyser(callbackContext, params);
                            } catch (JSONException e) {
                                Log.e(TAG, "initializer: ACTION_TTS_ANALYSE  -> " + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_TTS_ANALYSE_STOP":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsAnalyserStop");
                        ttsAnalyse.stopTTSAnalyser(callbackContext, cordova);
                        return true;
                    case "ACTION_TTS_ANALYSE_DSETTING":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("ttsAnalyserDownloadSetting");
                        ttsAnalyse.ttsDownloadSetting(callbackContext);
                        return true;
                    case "ACTION_TTS_ANALYSE_ENGINESETTING":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("ttsAnalyserDownloadSetting");
                        ttsAnalyse.ttsEngineSetting(params, callbackContext);
                        return true;
                    case "ACTION_TTS_ANALYSE_SHUTDOWN":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsAnalyserShutdown");
                        ttsAnalyse.shutdown(callbackContext);
                        return true;
                    case "ACTION_TTS_ANALYSE_PAUSE":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsAnalyserPause");
                        ttsAnalyse.pauseTTSAnalyser(callbackContext, cordova);
                        return true;
                    case "ACTION_TTS_ANALYSE_RESUME":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsAnalyserResume");
                        ttsAnalyse.resumeTTSAnalyser(callbackContext);
                        return true;
                    case "ACTION_TTS_OFFLINE_ANALYSE": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsOfflineAnalyser");
                            try {
                                ttsAnalyse.downloadTTSAnalyser(callbackContext, params);
                            } catch (JSONException e) {
                                Log.e(TAG, "initializer: ACTION_TTS_OFFLINE_ANALYSE  -> " + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_AFT_ANALYSE": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("aftAnalyser");
                        try {
                            aftAnalyse.initializeAFTAnalyser(params, callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_LANG_ANALYSE_SETTING": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("langSetting");
                        try {
                            langDetection.getLangDetectionSetting(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_RTT_ANALYSE_SETTING": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("rttSetting");
                        try {
                            rttAnalyser.getRTTSetting(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_TTS_ANALYSE_SETTING": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("ttsSetting");
                        try {
                            ttsAnalyse.getTTSAnalyserSetting(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_AFT_ANALYSE_CLOSE": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("aftAnalyserClose");
                        try {
                            aftAnalyse.close(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_AFT_ANALYSE_SETTING": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("aftAnalyserSetting");
                        try {
                            aftAnalyse.getAFTSetting(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_AFT_ANALYSE_PAUSE": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("aftAnalyserPause");
                        try {
                            aftAnalyse.pauseTask(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_AFT_ANALYSE_DESTROY": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("aftAnalyserDestroy");
                        try {
                            aftAnalyse.destroyTask(callbackContext);
                        } catch (Exception e) {
                            MLException mlException = (MLException) e;
                            Log.i(TAG, "AFT:" + mlException.getMessage());
                        }
                        return true;
                    }
                    case "ACTION_SOUNDDECT_ANALYSE": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("soundDectAnalyser");
                        soundDectAnalyse.initializeSoundDectAnalyzer(params, callbackContext);
                        return true;
                    }
                    case "ACTION_SOUNDDECT_ANALYSE_DESTROY": {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("soundDectAnalyserDestroy");
                        soundDectAnalyse.destroySound(callbackContext);
                        return true;
                    }
                    case "ACTION_ASR_ANALYSE": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("asrAnalyser");
                            asrAnalyse.initializeASRAnalyser(params, callbackContext, cordova);
                        });
                        return true;
                    }
                    case "ACTION_ASR_ANALYSE_STOP": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("asrAnalyserStop");
                            asrAnalyse.destroy();
                        });
                        return true;
                    }
                    case "ACTION_RTT_ANALYSE": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("rttAnalyse");
                            rttAnalyser.initializeRTTAnalyser(params, callbackContext);
                        });
                        return true;
                    }
                    case "ACTION_RTT_ANALYSE_STOP": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("rttAnalyserStop");
                        rttAnalyser.destroyRTT();
                        return true;
                    }
                }
                return false;
            } catch (JSONException e) {
                Log.e(TAG, "" + e.getMessage());
            }
        }
        return false;
    }

    public boolean permissionCheckVoice(CallbackContext callbackContext) {
        boolean readExternalStorage = PermissionUtils.hasPermission("readExternalStorage", this);
        boolean writeExternalStorage = PermissionUtils.hasPermission("writeExternalStorage", this);
        boolean audio = PermissionUtils.hasPermission("audio", this);
        if (readExternalStorage && writeExternalStorage) {
            return true;
        }
        permissionUtils.checkPermissionError(readExternalStorage, 1, writeExternalStorage, 1, false, 0, audio, 1,
            callbackContext);
        return false;
    }

}
