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

package com.huawei.hms.cordova.mlbody;

import android.util.Log;

import com.huawei.hms.cordova.mlbody.common.HMSMLApplication;
import com.huawei.hms.cordova.mlbody.common.HMSMLFrame;
import com.huawei.hms.cordova.mlbody.common.HMSMLLensEngine;
import com.huawei.hms.cordova.mlbody.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlbody.helpers.PluginLayout;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.mlsdk.common.MLApplication;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSMLBodyPlugin extends CordovaPlugin {
    private static final String TAG = HMSMLBodyPlugin.class.getSimpleName();

    private static CallbackContext callbackCtx;
    private CordovaInterface cordovaInterface;

    private CallbackContext callbackContext;

    private HMSMLLensEngine hmsmlLensEngine;

    private PluginLayout pluginLayout = new PluginLayout();

    private HMSMLApplication hmsmlApplication;

    private HMSMLFrame hmsmlFrame;

    private boolean isStart = false;

    public static CallbackContext getCallbackContext() {
        return callbackCtx;
    }

    public static void setCallbackContext(final CallbackContext callbackContext) {
        callbackCtx = callbackContext;
    }

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        webView.getView().getViewTreeObserver().addOnScrollChangedListener(() -> {
            if (isStart) {
                hmsmlLensEngine.scrollXAndY(-webView.getView().getScrollX(), -webView.getView().getScrollY());
            }
        });
    }

    public void pluginInitialize() {
        hmsmlLensEngine = CordovaHelpers.initializeProvider(new HMSMLLensEngine(cordova.getContext()), cordova, this);
        hmsmlApplication = CordovaHelpers.initializeProvider(new HMSMLApplication(cordova.getContext()), cordova, this);
        hmsmlFrame = CordovaHelpers.initializeProvider(new HMSMLFrame(cordova.getContext()), cordova, this);
    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        this.cordovaInterface = cordova;
        this.callbackContext = callbackContext;
        setCallbackContext(callbackContext);
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

            if (action.equals("ACTION_APP_SETTING")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("appSetting");
                hmsmlApplication.applicationSetting(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_MLFRAME")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("mlFrameAnalyser");
                hmsmlFrame.initializeMLFrame(params, callbackContext);
                return true;
            }
            if (action.equals("ACTION_LIVE_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        hmsmlLensEngine.createLensEngine(params, callbackContext, webView,
                            pluginLayout.layoutParams(CordovaHelpers.initialPropsFrom(userProps)), userProps);
                        isStart = true;
                    } catch (JSONException e) {
                        Log.e(TAG, "liveAnalyser" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_GESTURE_LIVE_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("GestureliveAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        hmsmlLensEngine.createLensEngine(params, callbackContext, webView,
                            pluginLayout.layoutParams(CordovaHelpers.initialPropsFrom(userProps)), userProps);
                        isStart = true;
                    } catch (JSONException e) {
                        Log.e(TAG, " gestureLiveAnalyse" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_PHOTOGRAPHY_ANALYSE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("livePhotographyAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    hmsmlLensEngine.photograph(callbackContext);
                });
                return true;
            }

            if (action.equals("ACTION_LIVE_DESTROY")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveDestroyAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    hmsmlLensEngine.closeLensEngine(callbackContext, webView);
                    isStart = false;
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_DOZOOM")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveZoomAnalyse");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        hmsmlLensEngine.doZoomLensEngine(params, callbackContext);
                    } catch (JSONException e) {
                        Log.e(TAG, "liveDoZoom" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_DISPLAYDIMENSION")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveDisplayDimension");
                cordova.getActivity().runOnUiThread(() -> {
                    try {
                        hmsmlLensEngine.getDisplayDimension(callbackContext);
                    } catch (JSONException e) {
                        Log.e(TAG, "liveDisplayDimension" + e.getMessage());
                    }
                });
                return true;
            }
            if (action.equals("ACTION_LIVE_GETLENSTYPE")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("liveGetLensType");
                cordova.getActivity().runOnUiThread(() -> {
                    hmsmlLensEngine.getLensType(callbackContext);
                });
                return true;
            }
            if (action.equals("enableLogger")) {
                enableLogger(callbackContext);
                return true;
            }
            if (action.equals("disableLogger")) {
                disableLogger(callbackContext);
                return true;
            }
            if (action.equals("setUserRegion")) {
                hmsmlApplication.setUserRegion(params, callbackContext);
                return true;
            }
            if (action.equals("getCountryCode")) {
                hmsmlApplication.getCountryCode(callbackContext);
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
        if (hmsmlLensEngine != null) {
            hmsmlLensEngine.updateXAndY(x, y);
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
