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

package com.huawei.hms.cordova.mltext;

import android.util.Log;

import com.huawei.hms.cordova.mltext.common.MLHMSAnalyzer;
import com.huawei.hms.cordova.mltext.common.MLHMSApplication;
import com.huawei.hms.cordova.mltext.common.MLHMSFrame;
import com.huawei.hms.cordova.mltext.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mltext.logger.HMSLogger;
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

public class HMSMLTextPlugin extends CordovaPlugin {
    private static final String TAG = HMSMLTextPlugin.class.getSimpleName();

    private static CallbackContext callbackCtx;

    List<String> permissionLists = new ArrayList<>();

    private CordovaInterface cordovaInterface;

    private CallbackContext callbackContext;

    private MLHMSApplication mlhmsApplication;

    private MLHMSAnalyzer mlhmsAnalyzer;

    private MLHMSFrame mlhmsFrame;

    private boolean isStart = false;

    public static CallbackContext getCallbackContext() {
        return callbackCtx;
    }

    public static void setCallbackContext(final CallbackContext callbackContext) {
        callbackCtx = callbackContext;
    }

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    public void pluginInitialize() {
        mlhmsApplication = CordovaHelpers.initializeProvider(new MLHMSApplication(cordova.getContext()), cordova, this);
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
            if (action.equals("ACTION_APP_SETTING")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("appSetting");
                mlhmsApplication.applicationSetting(params, callbackContext);
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

            if (action.equals("enableLogger")) {
                enableLogger(callbackContext);
                return true;
            }
            if (action.equals("disableLogger")) {
                disableLogger(callbackContext);
                return true;
            }
            if (action.equals("setUserRegion")) {
                mlhmsApplication.setUserRegion(params, callbackContext);
                return true;
            }
            if (action.equals("getCountryCode")) {
                mlhmsApplication.getCountryCode(callbackContext);
                return true;
            }
        } catch (JSONException e) {
            Log.e(TAG, "execute ->" + e.getMessage());
        }
        return false;
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
