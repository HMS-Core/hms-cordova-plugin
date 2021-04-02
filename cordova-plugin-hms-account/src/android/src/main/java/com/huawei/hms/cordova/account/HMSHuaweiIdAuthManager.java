/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.account;

import android.util.Log;

import com.huawei.hms.cordova.account.utils.HMSAccountUtils;
import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class HMSHuaweiIdAuthManager extends CordovaPluginWithLoggerAndExceptions {
    public static final String TAG = HMSHuaweiIdAuthManager.class.getSimpleName();

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        logger.startMethodExecutionTimer(action);
        if ("addAuthScopes".equals(action)) {
            Integer reqCode = args.getInt(0);
            JSONArray scopeList = args.getJSONArray(1);
            addAuthScopes(reqCode, scopeList, callbackContext);
            return true;
        } else if ("containScopes".equals(action)) {
            JSONObject authHuawei = args.getJSONObject(0);
            JSONArray scopeList = args.getJSONArray(1);
            containScopes(authHuawei, scopeList, callbackContext);
            return true;
        } else if ("getAuthResultWithScope".equals(action)) {
            JSONArray scopeList = args.getJSONArray(0);
            getAuthResultWithScope(scopeList, callbackContext);
        } else if ("getAuthResult".equals(action)) {
            getAuthResult(callbackContext);
            return true;
        }

        return false;
    }

    private void addAuthScopes(Integer reqCode, JSONArray scopeList, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "addAuthScopes start");
        List<Scope> scope = HMSAccountUtils.fromJSONArrayToScopeList(scopeList);
        HuaweiIdAuthManager.addAuthScopes(cordova.getActivity(), reqCode, scope);
        callbackContext.success();
        logger.sendSingleEvent("addAuthScopes");

        Log.i(TAG, "addAuthScopes end");
    }

    private void containScopes(JSONObject authHuawei, JSONArray scopeList, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "containScopes start");
        AuthHuaweiId getAuthHuaweiId = HMSAccountUtils.fromJSONObjectToAuthHuaweiId(authHuawei);
        List<Scope> getScopeList = HMSAccountUtils.fromJSONArrayToScopeList(scopeList);
        Boolean containScopes = HuaweiIdAuthManager.containScopes(getAuthHuaweiId, getScopeList);
        JSONObject isContainScopes = new JSONObject();
        isContainScopes.put("containScopes", containScopes);
        callbackContext.success(isContainScopes);
        logger.sendSingleEvent("containScopes");

        Log.i(TAG, "containScopes end");
    }

    private void getAuthResultWithScope(JSONArray scopeArray, CallbackContext callbackContext) {
        Log.i(TAG, "getAuthResultWithScope start");
        try {
            List<Scope> scopeList = HMSAccountUtils.fromJSONArrayToScopeList(scopeArray);
            AuthHuaweiId authResult = HuaweiIdAuthManager.getAuthResultWithScopes(scopeList);

            if (authResult == null) {
                callbackContext.success();
                logger.sendSingleEvent("getAuthResultWithScope");
            } else {
                JSONObject authResultJson = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authResult);
                callbackContext.success(authResultJson);
                logger.sendSingleEvent("getAuthResultWithScope");
            }

        } catch (Exception e) {
            callbackContext.error(exceptions.logAndGetErrorJSON("getAuthResultWithScope", e, "single"));
        }
        Log.i(TAG, "getAuthResultWithScope end");
    }

    private void getAuthResult(CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "getAuthResult start");

        AuthHuaweiId authInfo = HuaweiIdAuthManager.getAuthResult();

        if (authInfo == null) {
            callbackContext.success();
            logger.sendSingleEvent("getAuthResult");
        } else {
            JSONObject authResult = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authInfo);
            callbackContext.success(authResult);
            logger.sendSingleEvent("getAuthResult");
        }


        Log.i(TAG, "getAuthResult end");
    }
}
