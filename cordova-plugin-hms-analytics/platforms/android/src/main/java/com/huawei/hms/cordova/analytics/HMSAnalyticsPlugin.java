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

package com.huawei.hms.cordova.analytics;

import android.util.Log;

import com.huawei.hms.cordova.analytics.logger.HMSLogger;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSAnalyticsPlugin extends CordovaPlugin {
    private String TAG = HMSAnalyticsPlugin.class.getSimpleName();
    private HMSAnalyticsWrapper analyticsWrapper;

    @Override
    protected void pluginInitialize() {
        analyticsWrapper = new HMSAnalyticsWrapper(cordova.getContext());
    }

    @Override
    public boolean execute(String method, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (args == null || args.opt(0) == null) {
            callbackContext.error("Argument array is null or empty!");
            return false;
        }
        if (args.optJSONObject(0) == null) {
            callbackContext.error("Invalid parameter type, first argument must be a JSONObject");
            return false;
        }

        Log.i(TAG, "Running method:" + method);

        boolean isSyncMethod = true;
        boolean result = true;

        JSONObject params = args.getJSONObject(0);
        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer(method);

        switch (Methods.valueOf(method)) {
            case getAAID:
                analyticsWrapper.getAAID(callbackContext);
                isSyncMethod = false;
                break;
            case setAnalyticsEnabled:
                analyticsWrapper.setAnalyticsEnabled(params, callbackContext);
                break;
            case clearCachedData:
                analyticsWrapper.clearCachedData(callbackContext);
                break;
            case enableLog:
                analyticsWrapper.enableLog(callbackContext);
                break;
            case enableLogWithLevel:
                analyticsWrapper.enableLogWithLevel(params, callbackContext);
                break;
            case onEvent:
                analyticsWrapper.onEvent(params, callbackContext);
                break;
            case setMinActivitySessions:
                analyticsWrapper.setMinActivitySessions(params, callbackContext);
                break;
            case pageStart:
                analyticsWrapper.pageStart(params, callbackContext);
                break;
            case pageEnd:
                analyticsWrapper.pageEnd(params, callbackContext);
                break;
            case setUserId:
                analyticsWrapper.setUserId(params, callbackContext);
                break;
            case setUserProfile:
                analyticsWrapper.setUserProfile(params, callbackContext);
                break;
            case setPushToken:
                analyticsWrapper.setPushToken(params, callbackContext);
                break;
            case setSessionDuration:
                analyticsWrapper.setSessionDuration(params, callbackContext);
                break;
            case getUserProfiles:
                analyticsWrapper.getUserProfiles(params, callbackContext);
                break;
            case enableLoggler:
                HMSLogger.getInstance(cordova.getContext()).enableLogger();
                callbackContext.success();
                break;
            case disableLogger:
                HMSLogger.getInstance(cordova.getContext()).disableLogger();
                callbackContext.success();
                break;
            default:
                Log.e(TAG, "Not supported on Android platform. actionName : " + method);
                callbackContext.error("Not supported on Android platform. actionName : " + method);
                HMSLogger.getInstance(cordova.getContext()).sendSingleEvent(method, "-1");
                result = false;
                break;
        }

        if (isSyncMethod && result) {
            HMSLogger.getInstance(cordova.getContext()).sendSingleEvent(method);
        }

        return true;
    }

    private enum Methods {
        setAnalyticsEnabled,
        getAAID,
        onEvent,
        setUserId,
        setUserProfile,
        getUserProfiles,
        enableLog,
        enableLogWithLevel,
        setPushToken,
        setMinActivitySessions,
        setSessionDuration,
        pageStart,
        pageEnd,
        clearCachedData,
        enableLoggler,
        disableLogger,
        config,
        setReportPolicies
    }
}