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
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.face.MLStillFaceAnalyser;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.handkeypoint.MLStillHandKeypointAnalyser;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.livenessdetection.MLLivenessDetectionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.facebodyproviders.skeleton.MLStillSkeletonAnalyser;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSFaceBodyProvider extends CordovaPlugin {

    public static final String TAG = HMSFaceBodyProvider.class.getSimpleName();
    private PermissionUtils permissionUtils = new PermissionUtils();
    private MLLivenessDetectionAnalyser liveLivenessDetection;
    private MLStillHandKeypointAnalyser stillHandKeyPointAnalyse;
    private MLStillSkeletonAnalyser stillSkeletonAnalyse;
    private MLStillFaceAnalyser stillFaceAnalyse;

    public void pluginInitialize() {
        stillFaceAnalyse = CordovaHelpers.initializeProvider(new MLStillFaceAnalyser(cordova.getContext()), cordova,
            this);
        liveLivenessDetection = CordovaHelpers.initializeProvider(new MLLivenessDetectionAnalyser(cordova.getContext()),
            cordova, this);
        stillHandKeyPointAnalyse = CordovaHelpers.initializeProvider(
            new MLStillHandKeypointAnalyser(cordova.getContext()), cordova, this);
        stillSkeletonAnalyse = CordovaHelpers.initializeProvider(new MLStillSkeletonAnalyser(cordova.getContext()),
            cordova, this);
        stillSkeletonAnalyse = CordovaHelpers.initializeProvider(new MLStillSkeletonAnalyser(cordova.getContext()),
            cordova, this);

    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        JSONObject params = args.optJSONObject(0);
        if (checkPermission(callbackContext)) {
            try {
                switch (action) {
                    case "ACTION_LIVENESS_DETECTION": {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("livenessDetection");
                        cordova.getActivity().runOnUiThread(() -> {
                            liveLivenessDetection.initializeLivenessAnalyser(params, callbackContext);

                        });
                        return true;
                    }
                    case "ACTION_STILL_SKELETON_ANALYSE": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("stillSkeletonAnalyse");
                            try {
                                stillSkeletonAnalyse.initializeStillSkeletonAnalyser(params, callbackContext);
                            } catch (JSONException e) {
                                Log.e(TAG, "initializer: ACTION_STILL_SKELETON_ANALYSE ->" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_STILL_SKELETON_ANALYSE_STOP": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("stillSkeletonAnalyseStop");
                            try {
                                stillSkeletonAnalyse.stopSkeleton(callbackContext);
                            } catch (IOException e) {
                                Log.e(TAG, "initializer: ACTION_STILL_SKELETON_ANALYSE_STOP ->" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_STILL_HANDKEYPOINT_ANALYSE": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("stillHandkeypointAnalyse");
                            try {
                                stillHandKeyPointAnalyse.initializeStillHandKeyAnalyser(params, callbackContext);
                            } catch (JSONException e) {
                                Log.e(TAG, "initializer: ACTION_STILL_HANDKEYPOINT_ANALYSE ->" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("stillHandkeypointAnalyseStop");
                            stillHandKeyPointAnalyse.stopHandKeypoint(callbackContext);
                        });
                        return true;
                    }
                    case "ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("stillHandkeypointAnalyseSetting");
                            try {
                                stillHandKeyPointAnalyse.getHandKeypointSetting(callbackContext);
                            } catch (JSONException e) {
                                Log.e(TAG, "" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_STILL_FACE_ANALYSER": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFaceAnalyser");
                            stillFaceAnalyse.initializeStillFaceAnalyser(params, callbackContext);
                        });
                        return true;
                    }
                    case "ACTION_STILL_FACE_ANALYSER_SETTING": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("stillFaceAnalyserSetting");
                            try {
                                stillFaceAnalyse.getAnalyzerSetting(callbackContext);
                            } catch (JSONException e) {
                                Log.e(TAG, "" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_STILL_FACE_INFO":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFaceAnalyserInfo");
                        stillFaceAnalyse.getFaceAnalyserInfo(callbackContext);
                        return true;
                    case "ACTION_STOP_STILL_FACE_ANALYSER":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillFaceAnalyserStop");
                        stillFaceAnalyse.closeStillFaceAnalyser(callbackContext);
                        return true;
                    default:
                        Log.e(TAG, "initializer: invalid action");
                        return false;
                }
            } catch (JSONException | IOException e) {
                Log.e(TAG, "initializer: error :" + e.getMessage());
                callbackContext.error(e.getMessage());
            }
        }

        return false;
    }

    public boolean checkPermission(CallbackContext callbackContext) {
        boolean camera = PermissionUtils.hasPermission("camera", this);
        boolean writeExternalStorage = PermissionUtils.hasPermission("writeExternalStorage", this);
        boolean readExternalStorage = PermissionUtils.hasPermission("readExternalStorage", this);
        if (camera && writeExternalStorage && readExternalStorage) {
            return true;
        }
        permissionUtils.checkPermissionError(readExternalStorage, 1, writeExternalStorage, 1, camera, 1, false, 0,
            callbackContext);
        return false;
    }
}
