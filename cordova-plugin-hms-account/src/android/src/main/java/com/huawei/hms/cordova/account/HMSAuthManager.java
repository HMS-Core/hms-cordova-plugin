/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import com.huawei.hms.cordova.basef.CordovaMethod;
import com.huawei.hms.cordova.basef.HMSLog;
import com.huawei.hms.cordova.basef.handler.CorPack;
import com.huawei.hms.cordova.basef.handler.Promise;
import com.huawei.hms.cordova.basef.CordovaBaseModule;

import com.huawei.hms.cordova.utils.ExceptionUtils;
import com.huawei.hms.cordova.utils.HMSAccountUtils;
import com.huawei.hms.support.account.AccountAuthManager;
import com.huawei.hms.support.account.result.AuthAccount;
import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

import static com.huawei.hms.cordova.utils.HMSAccountUtils.getCallbackSuccess;

public class HMSAuthManager extends CordovaBaseModule {

    public static final String TAG = HMSAuthManager.class.getSimpleName();

    private final CordovaInterface cordova;

    private final ExceptionUtils exceptions;

    private String packageName;

    public HMSAuthManager(CordovaInterface cordova) {
        this.cordova = cordova;
        exceptions = new ExceptionUtils();
    }

    @CordovaMethod
    @HMSLog
    public void addAuthScopes(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "addAuthScopes start");
        int reqCode = args.getInt(0);
        JSONArray scopeList = args.getJSONArray(1);
        packageName = args.getString(2);
        List<Scope> scope = HMSAccountUtils.fromJSONArrayToScopeList(scopeList);

        if (packageName.equals("ACCOUNT")) {
            AccountAuthManager.addAuthScopes(cordova.getActivity(), reqCode, scope);
        } else if (packageName.equals("HWID")) {
            HuaweiIdAuthManager.addAuthScopes(cordova.getActivity(), reqCode, scope);
        }

        Log.i(TAG, "addAuthScopes end");
        cb.success();
    }

    @CordovaMethod
    @HMSLog
    public void containScopes(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "containScopes start");
        JSONObject authInfo = args.getJSONObject(0);
        JSONArray scopeList = args.getJSONArray(1);
        packageName = args.getString(2);
        Boolean containScopes = null;
        List<Scope> scopeListForAuth = HMSAccountUtils.fromJSONArrayToScopeList(scopeList);

        if (packageName.equals("ACCOUNT")) {
            AuthAccount authAccount = HMSAccountUtils.fromJSONObjectToAuth(authInfo, "ACCOUNT");
            containScopes = AccountAuthManager.containScopes(authAccount, scopeListForAuth);
        } else if (packageName.equals("HWID")) {
            AuthHuaweiId authHuaweiId = HMSAccountUtils.fromJSONObjectToAuth(authInfo, "HWID");
            containScopes = HuaweiIdAuthManager.containScopes(authHuaweiId, scopeListForAuth);
        }

        JSONObject isContainScopes = new JSONObject();
        isContainScopes.put("containScopes", containScopes);

        Log.i(TAG, "containScopes end");
        cb.success(isContainScopes);
    }

    @CordovaMethod
    @HMSLog
    public void getAuthResultWithScope(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "getAuthResultWithScope start");
        JSONArray scopeArray = args.getJSONArray(0);
        packageName = args.getString(1);
        List<Scope> scopeList = HMSAccountUtils.fromJSONArrayToScopeList(scopeArray);

        if (packageName.equals("ACCOUNT")) {
            try {
                AuthAccount accountAuthResult = AccountAuthManager.getAuthResultWithScopes(scopeList);
                getCallbackSuccess(accountAuthResult, "getAuthResultWithScope", cb, cordova.getContext());
            } catch (Exception e) {
                cb.error(exceptions.logAndGetErrorJSON("getAuthResultWithScope", e, "single"));
            }

        } else if (packageName.equals("HWID")) {
            try {
                AuthHuaweiId huaweiIdAuthResult = HuaweiIdAuthManager.getAuthResultWithScopes(scopeList);
                getCallbackSuccess(huaweiIdAuthResult, "getAuthResultWithScope", cb, cordova.getContext());
            } catch (Exception e) {
                cb.error(exceptions.logAndGetErrorJSON("getAuthResultWithScope", e, "single"));
            }
        }
        Log.i(TAG, "getAuthResultWithScope end");
    }

    @CordovaMethod
    @HMSLog
    public void getAuthResult(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "getAuthResult start");
        packageName = args.getString(0);
        if (packageName.equals("ACCOUNT")) {
            AuthAccount authInfo = AccountAuthManager.getAuthResult();
            getCallbackSuccess(authInfo, "getAuthResult", cb, cordova.getContext());

        } else if (packageName.equals("HWID")) {
            AuthHuaweiId authInfo = HuaweiIdAuthManager.getAuthResult();
            getCallbackSuccess(authInfo, "getAuthResult", cb, cordova.getContext());
        }

        Log.i(TAG, "getAuthResult end");
    }
}
