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

import com.facebook.drawee.backends.pipeline.Fresco;
import com.huawei.hms.cordova.mlkit.common.MLHMSAnalyzer;
import com.huawei.hms.cordova.mlkit.common.MLHMSApplication;
import com.huawei.hms.cordova.mlkit.common.MLHMSCompositeAnalyzer;
import com.huawei.hms.cordova.mlkit.common.MLHMSFrame;
import com.huawei.hms.cordova.mlkit.common.MLHMSLensEngine;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.helpers.PluginLayout;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.custommodel.MLCustomModel;
import com.huawei.hms.cordova.mlkit.utils.CordovaUtils;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;
import com.huawei.hms.mlsdk.common.MLApplication;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class HMSMLPlugin extends CordovaPlugin {
    private static final String TAG = HMSMLPlugin.class.getSimpleName();
    List<String> permissionLists = new ArrayList<>();
    private CordovaInterface cordovaInterface;
    private PermissionUtils permissionUtils = new PermissionUtils();
    private CallbackContext callbackContext;
    private MLCustomModel customModel = new MLCustomModel();
    private MLHMSLensEngine mlLensEngine;
    private PluginLayout pluginLayout = new PluginLayout();
    private MLHMSApplication mlhmsApplication;
    private MLHMSCompositeAnalyzer compositeAnalyzer;
    private MLHMSAnalyzer mlhmsAnalyzer;
    private MLHMSFrame mlhmsFrame;
    private static CallbackContext callbackCtx;
    private boolean isStart = false;
    public static CallbackContext getCallbackContext() {
        return callbackCtx;
    }

    public static void setCallbackContext(final CallbackContext callbackContext) {
        callbackCtx = callbackContext;
    }

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        Fresco.initialize(cordova.getContext());
        webView.getView().getViewTreeObserver().addOnScrollChangedListener(() -> {
            if (isStart) {
                mlLensEngine.scrollXAndY(-webView.getView().getScrollX(), -webView.getView().getScrollY());
            }
        });
    }

    public void pluginInitialize() {
        mlLensEngine = CordovaHelpers.initializeProvider(new MLHMSLensEngine(cordova.getContext()), cordova, this);
        mlhmsApplication = CordovaHelpers.initializeProvider(new MLHMSApplication(cordova.getContext()), cordova, this);
        compositeAnalyzer = CordovaHelpers.initializeProvider(new MLHMSCompositeAnalyzer(cordova.getContext()), cordova,
            this);
        mlhmsAnalyzer = CordovaHelpers.initializeProvider(new MLHMSAnalyzer(cordova.getContext()), cordova, this);
        mlhmsFrame = CordovaHelpers.initializeProvider(new MLHMSFrame(cordova.getContext()), cordova, this);
    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        this.cordovaInterface = cordova;
        this.callbackContext = callbackContext;
        setCallbackContext(callbackContext);
        permissionLists.add("camera");
        permissionLists.add("readExternalStorage");
        permissionLists.add("writeExternalStorage");
        permissionLists.add("audio");
        JSONObject params = args.optJSONObject(0);
        JSONObject userProps = args.optJSONObject(1);
        Log.i(TAG, "actionName:" + action);
        try {
            if (action.equals("HMSMLKIT_INITILALIZER")) {
                cordovaInterface.getThreadPool().execute(() -> {
                    try {
                        mlKitInitializer(params);
                    } catch (JSONException e) {
                        Log.e(TAG, "execute: error ->" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("forceUpdateXAndY")) {
                Log.i(TAG, "forced:");
                forceUpdateXAndY(args, callbackContext);
                return true;
            }
            if (action.equals("ACTION_CHECK_PERMISSION")) {
                JSONObject permissionResult = new JSONObject();
                List<String> permissionList = PermissionUtils.jsonArrayToList(params);
                if (permissionList.contains("camera")) {
                    permissionResult.putOpt("camera",
                        CordovaUtils.keyValPair("hasPermission", PermissionUtils.hasPermission("camera", this)));
                }
                if (permissionList.contains("readExternalStorage")) {
                    permissionResult.putOpt("readExternalStorage", CordovaUtils.keyValPair("hasPermission",
                        PermissionUtils.hasPermission("readExternalStorage", this)));
                }
                if (permissionList.contains("writeExternalStorage")) {
                    permissionResult.putOpt("writeExternalStorage", CordovaUtils.keyValPair("hasPermission",
                        PermissionUtils.hasPermission("writeExternalStorage", this)));
                }
                if (permissionList.contains("audio")) {
                    permissionResult.putOpt("audio",
                        CordovaUtils.keyValPair("hasPermission", PermissionUtils.hasPermission("audio", this)));
                }
                callbackContext.success(permissionResult);
                return true;
            }
            if (action.equals("ACTION_REQUEST_PERMISSION")) {
                PermissionUtils.requestPermission(params, this);
                return true;
            }
            if (action.equals("ACTION_APP_SETTING")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("appSetting");
                mlhmsApplication.applicationSetting(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_COMPOSITE_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("compositeAnalyser");
                compositeAnalyzer.initializeCompositeAnalyzer(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_COMPOSITE_ANALYSE_INFO")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("compositeAnalyserInfo");
                compositeAnalyzer.infoCompositeAnalyser(callbackContext);
                return true;
            }
            if (action.equals("ACTION_COMPOSITE_ANALYSE_STOP")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("compositeAnalyserStop");
                compositeAnalyzer.closeCompositeAnalyser(callbackContext);
                return true;
            }
            if (action.equals("ACTION_COMPOSITE_ANALYSE_OBTAIN")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("compositeAnalyserObtain");
                compositeAnalyzer.obtainPicture(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_MLANALYSER_SETSTATISTIC")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("mlAnalyzerSetStatistic");
                mlhmsAnalyzer.setStatisticsAllowed(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_MLANALYSER_GETSTATISTIC")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("mlAnalyzergetStatistic");
                mlhmsAnalyzer.getStatisticsAllowed(callbackContext);
                return true;
            }
            if (action.equals("ACTION_MLFRAME")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("mlFrameAnalyser");
                mlhmsFrame.initializeMLFrame(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_LIVE_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        mlLensEngine.createLensEngine(params, callbackContext, webView,
                            pluginLayout.layoutParams(CordovaHelpers.initialPropsFrom(userProps)), userProps);
                        isStart = true;
                    } catch (JSONException e) {
                        Log.e(TAG, "" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_PHOTOGRAPHY_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("livePhotographyAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    mlLensEngine.photograph(callbackContext);
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_COMPOSITE_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveCompositeAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        mlLensEngine.initializeLiveCompositeAnalyzer(params, callbackContext, webView,
                            pluginLayout.layoutParams(CordovaHelpers.initialPropsFrom(userProps)));
                    } catch (JSONException e) {
                        Log.e(TAG, "" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_DESTROY")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveDestroyAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    mlLensEngine.closeLensEngine(callbackContext, webView);
                    isStart = false;
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_DOZOOM")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveZoomAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        mlLensEngine.doZoomLensEngine(params, callbackContext);
                    } catch (JSONException e) {
                        Log.e(TAG, "" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_DISPLAYDIMENSION")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveDisplayDimension");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        mlLensEngine.getDisplayDimension(callbackContext);
                    } catch (JSONException e) {
                        Log.e(TAG, "" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_GETLENSTYPE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveGetLensType");
                cordova.getActivity().runOnUiThread(() -> {
                    mlLensEngine.getLensType(callbackContext);
                });
                return true;
            }
            if (action.equals("ACTION_CUSTOMMODEL_ANALYSER")) {
                boolean readExternalStorage = PermissionUtils.hasPermission("readExternalStorage", this);
                boolean writeExternalStorage = PermissionUtils.hasPermission("writeExternalStorage", this);
                if (writeExternalStorage && readExternalStorage) {
                    HMSLogger.getInstance(cordovaInterface.getContext())
                        .startMethodExecutionTimer("customModelAnalyser");
                    customModel.initializeCustomModelAnalyser(params, callbackContext, cordovaInterface);
                    return true;
                }
                permissionUtils.checkPermissionError(readExternalStorage, 1, writeExternalStorage, 1, false, 0, false,
                    0, callbackContext);
            }

            if (action.equals("enableLogger")) {
                enableLogger(callbackContext);
                return true;
            }
            if (action.equals("disableLogger")) {
                disableLogger(callbackContext);
                return true;
            }
        } catch (JSONException e) {
            Log.e(TAG, "execute ->" + e.getMessage());
        }
        return false;
    }

    private void forceUpdateXAndY(JSONArray args, final CallbackContext callbackContext) {
        int x = args.optInt(1);
        int y = args.optInt(2);
        if (mlLensEngine != null) {
            mlLensEngine.updateXAndY(x, y);
        }
        callbackContext.success();
    }

    public void mlKitInitializer(final JSONObject config) throws JSONException {
        HMSLogger.getInstance(cordovaInterface.getContext()).startMethodExecutionTimer("mlKitInitializer");

        if ((!config.has("apiKey") || config.isNull("apiKey")) && (!config.has("accessToken") || config.isNull(
            "accessToken"))) {
            callbackContext.error(
                "Illegal argument. apiKey or accessToken field is mandatory and it must not be null.");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("mlKitInitializer", "-1");
            return;
        }
        if (config.has("apiKey")) {
            MLApplication.getInstance().setApiKey(config.getString("apiKey"));
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("mlKitInitializer");
        }
        if (config.has("accessToken")) {
            MLApplication.getInstance().setAccessToken(config.getString("accessToken"));
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("mlKitInitializer");
        }
    }

    public void enableLogger(final CallbackContext callbackContext) {
        HMSLogger.getInstance(cordovaInterface.getContext()).enableLogger();
        callbackContext.success();
    }

    public void disableLogger(final CallbackContext callbackContext) {
        HMSLogger.getInstance(cordovaInterface.getContext()).disableLogger();
        callbackContext.success();
    }

}
