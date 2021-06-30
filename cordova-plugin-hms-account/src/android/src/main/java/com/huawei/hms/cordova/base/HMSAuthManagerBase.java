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

package com.huawei.hms.cordova.base;

import android.util.Log;

import com.huawei.hms.cordova.PackageName;
import com.huawei.hms.cordova.account.HMSAccountAuthManager;
import com.huawei.hms.cordova.logger.HMSLogger;
import com.huawei.hms.cordova.utils.ExceptionUtils;
import com.huawei.hms.cordova.utils.HMSAccountUtils;
import com.huawei.hms.support.account.AccountAuthManager;
import com.huawei.hms.support.account.result.AuthAccount;
import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

import static com.huawei.hms.cordova.utils.HMSAccountUtils.getCallbackSuccess;


public class HMSAuthManagerBase {

    public static final String TAG = HMSAuthManagerBase.class.getSimpleName();
    private PackageName packageName;
    private HMSLogger logger;
    private CordovaInterface cordova;
    private ExceptionUtils exceptions;

    public HMSAuthManagerBase(PackageName packageName, CordovaInterface cordova, HMSLogger logger, ExceptionUtils exceptions) {
        this.packageName = packageName;
        this.logger = logger;
        this.cordova = cordova;
        this.exceptions = exceptions;
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        logger.startMethodExecutionTimer(action);

        if ("addAuthScopes".equals(action)) {
            Integer reqCode = args.getInt(0);
            JSONArray scopeList = args.getJSONArray(1);
            addAuthScopes(reqCode, scopeList, callbackContext);
            return true;
        } else if ("containScopes".equals(action)) {
            JSONObject authInfo = args.getJSONObject(0);
            JSONArray scopeList = args.getJSONArray(1);
            containScopes(authInfo, scopeList, callbackContext);
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

        if (packageName == PackageName.ACCOUNT) {
            AccountAuthManager.addAuthScopes(cordova.getActivity(), reqCode, scope);
        } else if (packageName == PackageName.HWID) {
            HuaweiIdAuthManager.addAuthScopes(cordova.getActivity(), reqCode, scope);
        }

        callbackContext.success();
        logger.sendSingleEvent("addAuthScopes");

        Log.i(TAG, "addAuthScopes end");
    }

    private void containScopes(JSONObject authOption, JSONArray scopeList, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "containScopes start");
        Boolean containScopes = null;
        List<Scope> scopeListForAuth = HMSAccountUtils.fromJSONArrayToScopeList(scopeList);

        if (packageName == PackageName.ACCOUNT) {
            AuthAccount authAccount = HMSAccountUtils.fromJSONObjectToAuth(authOption, PackageName.ACCOUNT);
            containScopes = AccountAuthManager.containScopes(authAccount, scopeListForAuth);
        } else if (packageName == PackageName.HWID) {
            AuthHuaweiId authHuaweiId = HMSAccountUtils.fromJSONObjectToAuth(authOption, PackageName.HWID);
            containScopes = HuaweiIdAuthManager.containScopes(authHuaweiId, scopeListForAuth);
        }

        JSONObject isContainScopes = new JSONObject();
        isContainScopes.put("containScopes", containScopes);
        callbackContext.success(isContainScopes);
        logger.sendSingleEvent("containScopes");

        Log.i(TAG, "containScopes end");
    }

    private void getAuthResultWithScope(JSONArray scopeArray, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "getAuthResultWithScope start");

        List<Scope> scopeList = HMSAccountUtils.fromJSONArrayToScopeList(scopeArray);

        if (packageName == PackageName.ACCOUNT) {
            try {
                AuthAccount accountAuthResult = AccountAuthManager.getAuthResultWithScopes(scopeList);
                getCallbackSuccess(accountAuthResult, logger, "getAuthResultWithScope", callbackContext);
            } catch (Exception e) {
                callbackContext.error(exceptions.logAndGetErrorJSON("getAuthResultWithScope", e, "single"));
            }

        } else if (packageName == PackageName.HWID) {
            try {
                AuthHuaweiId huaweiIdAuthResult = HuaweiIdAuthManager.getAuthResultWithScopes(scopeList);
                getCallbackSuccess(huaweiIdAuthResult, logger, "getAuthResultWithScope", callbackContext);
            } catch (Exception e) {
                callbackContext.error(exceptions.logAndGetErrorJSON("getAuthResultWithScope", e, "single"));
            }
        }
        Log.i(TAG, "getAuthResultWithScope end");
    }

    private void getAuthResult(CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "getAuthResult start");
        if (packageName == PackageName.ACCOUNT) {
            AuthAccount authInfo = AccountAuthManager.getAuthResult();
            getCallbackSuccess(authInfo, logger, "getAuthResult", callbackContext);

        } else if (packageName == PackageName.HWID) {
            AuthHuaweiId authInfo = HuaweiIdAuthManager.getAuthResult();
            getCallbackSuccess(authInfo, logger, "getAuthResult", callbackContext);
        }

        Log.i(TAG, "getAuthResult end");
    }

}
