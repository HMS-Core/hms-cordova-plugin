/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.hwid;

import android.accounts.Account;
import android.util.Log;

import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.tools.HuaweiIdAuthTool;

import com.huawei.hms.cordova.utils.ExceptionUtils;

import org.apache.cordova.CordovaInterface;

import com.huawei.hms.cordova.basef.CordovaBaseModule;
import com.huawei.hms.cordova.basef.CordovaMethod;
import com.huawei.hms.cordova.basef.HMSLog;
import com.huawei.hms.cordova.basef.handler.CorPack;
import com.huawei.hms.cordova.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

import static com.huawei.hms.cordova.utils.HMSAccountUtils.fromJSONArrayToScopeList;
import static com.huawei.hms.cordova.utils.HMSAccountUtils.fromJSONObjectToAccount;

public class HMSHuaweiIdAuthTool extends CordovaBaseModule {
    public static final String TAG = HMSHuaweiIdAuthTool.class.getSimpleName();

    protected ExceptionUtils exceptions;

    public CordovaInterface cordova;

    public HMSHuaweiIdAuthTool(CordovaInterface cordova) {
        this.cordova = cordova;
        exceptions = new ExceptionUtils();
    }

    @CordovaMethod
    @HMSLog
    public void requestUnionId(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "requestUnionId start");
        String huaweiAccountName = args.getString(0);
        try {
            String unionId = HuaweiIdAuthTool.requestUnionId(cordova.getActivity(), huaweiAccountName);
            cb.success(unionId);
        } catch (Exception e) {
            cb.error(exceptions.logAndGetErrorJSON("requestUnionId", e, "single"));
        }
        Log.i(TAG, "requestUnionId end");
    }

    @CordovaMethod
    @HMSLog
    public void requestAccessToken(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "requestAccessToken start");
        JSONObject account = args.getJSONObject(0);
        JSONArray scopeList = args.getJSONArray(1);

        Account getAccount = fromJSONObjectToAccount(account);
        List<Scope> getScopeList = fromJSONArrayToScopeList(scopeList);
        try {
            String token = HuaweiIdAuthTool.requestAccessToken(cordova.getActivity(), getAccount, getScopeList);
            cb.success(token);
        } catch (Exception e) {
            cb.error(exceptions.logAndGetErrorJSON("requestAccessToken", e, "single"));
        }
        Log.i(TAG, "requestAccessToken end");
    }

    @CordovaMethod
    @HMSLog
    public void deleteAuthInfo(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "deleteAuthInfo start");
        String accessToken = args.getString(0);
        try {
            HuaweiIdAuthTool.deleteAuthInfo(cordova.getActivity(), accessToken);
            cb.success();
        } catch (Exception e) {
            cb.error(exceptions.logAndGetErrorJSON("deleteAuthInfo", e, "single"));
        }
        Log.i(TAG, "deleteAuthInfo end");
    }

}
