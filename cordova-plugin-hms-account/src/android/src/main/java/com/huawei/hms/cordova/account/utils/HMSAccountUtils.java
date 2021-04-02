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

package com.huawei.hms.cordova.account.utils;

import android.accounts.Account;

import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;

public class HMSAccountUtils {

    public static JSONObject fromAuthHuaweiIdToJsonObject(AuthHuaweiId authHuaweiId) throws JSONException {

        JSONObject signInJSONObject = new JSONObject();
        signInJSONObject.put("accessToken", Objects.toString(authHuaweiId.getAccessToken(), ""));
        signInJSONObject.put("displayName", authHuaweiId.getDisplayName());
        signInJSONObject.put("email", authHuaweiId.getEmail());
        signInJSONObject.put("familyName", authHuaweiId.getFamilyName());
        signInJSONObject.put("givenName", authHuaweiId.getGivenName());
        signInJSONObject.put("idToken", authHuaweiId.getIdToken());
        signInJSONObject.put("authorizationCode", authHuaweiId.getAuthorizationCode());
        signInJSONObject.put("unionId", authHuaweiId.getUnionId());
        signInJSONObject.put("ageRange", authHuaweiId.getAgeRange());
        signInJSONObject.put("countryCode", authHuaweiId.getCountryCode());
        signInJSONObject.put("avatarUriString", authHuaweiId.getAvatarUriString());
        signInJSONObject.put("expressionTimeSecs", authHuaweiId.getExpirationTimeSecs());
        signInJSONObject.put("serviceCountryCode", authHuaweiId.getServiceCountryCode());
        signInJSONObject.put("uid", authHuaweiId.getUid());
        signInJSONObject.put("openId", authHuaweiId.getOpenId());
        signInJSONObject.put("gender", authHuaweiId.getGender());
        signInJSONObject.put("describeContentsInAuthHuaweiId", authHuaweiId.describeContents());
        signInJSONObject.put("status", authHuaweiId.getStatus());
        signInJSONObject.put("account", fromAccountToJSONObject(authHuaweiId.getHuaweiAccount()));

        signInJSONObject.put("authorizedScopes", fromScopesToJsonArray(authHuaweiId.getAuthorizedScopes()));
        signInJSONObject.put("extensionScopes", fromScopesToJsonArray(authHuaweiId.getExtensionScopes()));

        return signInJSONObject;

    }


    public static JSONArray fromScopesToJsonArray(Set<Scope> scopes) {
        JSONArray arrayListScopes = new JSONArray();
        for (Iterator<Scope> it = scopes.iterator(); it.hasNext(); ) {
            String f = it.next().toString();
            arrayListScopes.put(f);
        }
        return arrayListScopes;
    }

    public static JSONObject fromAccountToJSONObject(Account account) throws JSONException {
        JSONObject accountJsonObject = new JSONObject();
        if (account == null) {
            return null;
        } else {
            accountJsonObject.put("type", account.type);
            accountJsonObject.put("name", account.name);
        }
        return accountJsonObject;
    }

    public static HuaweiIdAuthParams fromJSONObjectToHuaweiIdAuthParams(JSONArray scopes, String huaweiIdAuthParams, JSONArray jsonScopeList) throws JSONException {
        HuaweiIdAuthParamsHelper builder;
        if (huaweiIdAuthParams.isEmpty()) {
            builder = new HuaweiIdAuthParamsHelper();
        } else {
            if (huaweiIdAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                builder = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM);
            } else if (huaweiIdAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                builder = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME);
            } else {
                return null;
            }
        }


        ArrayList<String> listData = new ArrayList<String>();
        List<Scope> scopeList = fromJSONArrayToScopeList(jsonScopeList);
        if (scopes != null) {
            for (int i = 0; i < scopes.length(); i++) {
                listData.add(scopes.getString(i));
            }
        }
        if (listData.contains("profile")) {
            builder.setProfile();
        }

        if (listData.contains("idToken")) {
            builder.setIdToken();
        }

        if (listData.contains("accessToken")) {
            builder.setAccessToken();
        }

        if (listData.contains("mobileNumber")) {
            builder.setMobileNumber();
        }

        if (listData.contains("email")) {
            builder.setEmail();
        }

        if (listData.contains("shippingAddress")) {
            builder.setShippingAddress();
        }

        if (listData.contains("uid")) {
            builder.setUid();
        }

        if (listData.contains("id")) {
            builder.setId();
        }

        if (listData.contains("authorizationCode")) {
            builder.setAuthorizationCode();
        }

        if (scopeList.size() > 0) {
            builder.setScopeList(scopeList);
        }
        HuaweiIdAuthParams buildAuthParams = builder.createParams();

        return buildAuthParams;
    }

    public static List<Scope> fromJSONArrayToScopeList(JSONArray jsonScopeList) throws JSONException {

        List<Scope> scopeList = new ArrayList<Scope>();
        for (int i = 0; i < jsonScopeList.length(); ++i) {

            Scope element = new Scope(jsonScopeList.getString(i));
            scopeList.add(element);
        }
        return scopeList;
    }

    public static Account fromJSONObjectToAccount(JSONObject jsonAccount) throws JSONException {
        Account account;
        String accountName = jsonAccount.getString("name");
        String accountType = jsonAccount.getString("type");

        account = new Account(accountName, accountType);

        return account;
    }

    public static AuthHuaweiId fromJSONObjectToAuthHuaweiId(JSONObject authHuawei) throws JSONException {

        String openId = authHuawei.getString("openId");
        String uid = authHuawei.getString("uid");
        String displayName = authHuawei.getString("displayName");
        String photoUrl = authHuawei.getString("photoUrl");
        String accessToken = authHuawei.getString("accessToken");
        String serviceCountryCode = authHuawei.getString("serviceCountryCode");
        Integer status = authHuawei.getInt("status");
        Integer gender = authHuawei.getInt("gender");
        String serverAuthCode = authHuawei.getString("serverAuthCode");
        String unionId = authHuawei.getString("unionId");
        String countryCode = authHuawei.getString("countryCode");
        JSONArray jsonScope = authHuawei.getJSONArray("scopes");

        Set<Scope> scope = new HashSet<Scope>();

        for (int i = 0; i < jsonScope.length(); i++) {
            String val = jsonScope.getString(i);
            Scope element = new Scope(val);
            scope.add(element);
        }
        AuthHuaweiId buildAuth = AuthHuaweiId.build(openId, uid, displayName, photoUrl, accessToken, serviceCountryCode, status, gender, scope, serverAuthCode, unionId, countryCode);

        return buildAuth;
    }

}
