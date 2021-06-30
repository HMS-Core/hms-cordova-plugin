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

package com.huawei.hms.cordova.utils;

import android.accounts.Account;
import android.graphics.Bitmap;
import android.util.Base64;
import android.util.Log;

import com.huawei.hms.cordova.PackageName;
import com.huawei.hms.cordova.logger.HMSLogger;
import com.huawei.hms.support.account.request.AccountAuthParams;
import com.huawei.hms.support.account.request.AccountAuthParamsHelper;
import com.huawei.hms.support.account.result.AccountIcon;
import com.huawei.hms.support.account.result.AuthAccount;
import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.feature.result.AbstractAuthAccount;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
import java.util.Set;

public class HMSAccountUtils {

    public static JSONObject fromAuthHuaweiIdToJsonObject(AuthHuaweiId authHuaweiId) throws JSONException {
        JSONObject authHuaweiJSONObject = fromAbsractAuthAccountToJSONObject(authHuaweiId);
        authHuaweiJSONObject.put("ageRangeFlag", authHuaweiId.getAgeRangeFlag());
        if (authHuaweiId.getHuaweiAccount() != null) {
            authHuaweiJSONObject.put("huaweiAccount", fromAccountToJSONObject(authHuaweiId.getHuaweiAccount()));
        } else {
            Log.i("HMSAccountUtils", "The account is null");
        }

        return authHuaweiJSONObject;

    }

    public static JSONObject fromAuthAccountToJsonObject(AuthAccount authAccount) throws JSONException {
        JSONObject authAccountJSONObject = fromAbsractAuthAccountToJSONObject(authAccount);
        if (authAccount.getAccount() != null) {
            authAccountJSONObject.put("account", fromAccountToJSONObject(authAccount.getAccount()));
        } else {
            Log.i("HMSAccountUtils", "The account is null");
        }
        authAccountJSONObject.put("accountFlag", authAccount.getAccountFlag());

        return authAccountJSONObject;
    }

    private static <T extends AbstractAuthAccount> JSONObject fromAbsractAuthAccountToJSONObject(T authAccount) throws JSONException {
        JSONObject authAccountJSONObject = new JSONObject();
        authAccountJSONObject.put("uid", authAccount.getUid());
        authAccountJSONObject.put("openId", authAccount.getOpenId());
        authAccountJSONObject.put("displayName", authAccount.getDisplayName());
        authAccountJSONObject.put("accessToken", Objects.toString(authAccount.getAccessToken(), ""));
        authAccountJSONObject.put("status", authAccount.getStatus());
        authAccountJSONObject.put("gender", authAccount.getGender());
        authAccountJSONObject.put("serviceCountryCode", authAccount.getServiceCountryCode());
        authAccountJSONObject.put("countryCode", authAccount.getCountryCode());
        authAccountJSONObject.put("unionId", authAccount.getUnionId());
        authAccountJSONObject.put("email", authAccount.getEmail());
        authAccountJSONObject.put("extensionScopes", fromScopesToJsonArray(authAccount.getExtensionScopes()));
        authAccountJSONObject.put("idToken", authAccount.getIdToken());
        authAccountJSONObject.put("expirationTimeSecs", authAccount.getExpirationTimeSecs());
        authAccountJSONObject.put("givenName", authAccount.getGivenName());
        authAccountJSONObject.put("familyName", authAccount.getFamilyName());
        authAccountJSONObject.put("ageRange", authAccount.getAgeRange());
        authAccountJSONObject.put("homeZone", authAccount.getHomeZone());
        authAccountJSONObject.put("authorizedScopes", fromScopesToJsonArray(authAccount.getAuthorizedScopes()));
        authAccountJSONObject.put("avatarUriString", authAccount.getAvatarUriString());
        authAccountJSONObject.put("authorizationCode", authAccount.getAuthorizationCode());
        authAccountJSONObject.put("requestedScopes", fromScopesToJsonArray(authAccount.getRequestedScopes()));
        return authAccountJSONObject;
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
        HuaweiIdAuthParamsHelper huaweiIdBuilder;
        if (huaweiIdAuthParams.isEmpty()) {
            huaweiIdBuilder = new HuaweiIdAuthParamsHelper();
        } else {
            if (huaweiIdAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                huaweiIdBuilder = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM);
            } else if (huaweiIdAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                huaweiIdBuilder = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME);
            } else {
                return null;
            }
        }

        List<Scope> huaweiIdScopeList = fromJSONArrayToScopeList(jsonScopeList);
        ArrayList<String> huaweiIdListData = createListData(scopes);

        if (scopes != null) {
            for (int i = 0; i < scopes.length(); i++) {
                huaweiIdListData.add(scopes.getString(i));
            }
        }

        if (huaweiIdListData.contains("email")) {
            huaweiIdBuilder.setEmail();
        }

        if (huaweiIdListData.contains("id")) {
            huaweiIdBuilder.setId();
        }

        if (huaweiIdListData.contains("idToken")) {
            huaweiIdBuilder.setIdToken();
        }

        if (huaweiIdListData.contains("profile")) {
            huaweiIdBuilder.setProfile();
        }

        if (huaweiIdListData.contains("mobileNumber")) {
            huaweiIdBuilder.setMobileNumber();
        }

        if (huaweiIdListData.contains("uid")) {
            huaweiIdBuilder.setUid();
        }

        if (huaweiIdListData.contains("authorizationCode")) {
            huaweiIdBuilder.setAuthorizationCode();
        }

        if (huaweiIdListData.contains("accessToken")) {
            huaweiIdBuilder.setAccessToken();
        }

        if (huaweiIdListData.contains("dialogAuth")) {
            huaweiIdBuilder.setDialogAuth();
        }

        if (huaweiIdScopeList.size() > 0) {
            huaweiIdBuilder.setScopeList(huaweiIdScopeList);
        }

        if (huaweiIdListData.contains("shippingAddress")) {
            huaweiIdBuilder.setShippingAddress();
        }

        HuaweiIdAuthParams huaweiIdBuildAuthParams = huaweiIdBuilder.createParams();

        return huaweiIdBuildAuthParams;
    }

    public static AccountAuthParams fromJSONObjectToAccountAuthParams(JSONArray scopes, String accountAuthParams, JSONArray jsonScopeList) throws JSONException {
        AccountAuthParamsHelper accountBuilder;
        if (accountAuthParams.isEmpty()) {
            accountBuilder = new AccountAuthParamsHelper();
        } else {
            if (accountAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                accountBuilder = new AccountAuthParamsHelper(AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM);
            } else if (accountAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                accountBuilder = new AccountAuthParamsHelper(AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME);
            } else {
                return null;
            }
        }

        List<Scope> scopeList = fromJSONArrayToScopeList(jsonScopeList);
        ArrayList<String> accountListData = createListData(scopes);

        if (accountListData.contains("email")) {
            accountBuilder.setEmail();
        }

        if (accountListData.contains("id")) {
            accountBuilder.setId();
        }

        if (accountListData.contains("idToken")) {
            accountBuilder.setIdToken();
        }

        if (accountListData.contains("profile")) {
            accountBuilder.setProfile();
        }

        if (accountListData.contains("mobileNumber")) {
            accountBuilder.setMobileNumber();
        }

        if (accountListData.contains("uid")) {
            accountBuilder.setUid();
        }

        if (accountListData.contains("authorizationCode")) {
            accountBuilder.setAuthorizationCode();
        }

        if (accountListData.contains("accessToken")) {
            accountBuilder.setAccessToken();
        }

        if (accountListData.contains("dialogAuth")) {
            accountBuilder.setDialogAuth();
        }

        if (scopeList.size() > 0) {
            accountBuilder.setScopeList(scopeList);
        }

        AccountAuthParams accountBuildAuthParams = accountBuilder.createParams();

        return accountBuildAuthParams;
    }

    private static ArrayList<String> createListData(JSONArray signOption) throws JSONException {
        ArrayList<String> listData = new ArrayList<String>();

        if (signOption != null) {
            for (int i = 0; i < signOption.length(); i++) {
                listData.add(signOption.getString(i));
            }
        }

        return listData;
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

    public static <T extends AbstractAuthAccount> T fromJSONObjectToAuth(JSONObject auth, PackageName authType) throws JSONException {
        T buildAuth = null;
        String openId = auth.getString("openId");
        String uid = auth.getString("uid");
        String displayName = auth.getString("displayName");
        String photoUriString = auth.getString("photoUriString");
        String accessToken = auth.getString("accessToken");
        String serviceCountryCode = auth.getString("serviceCountryCode");
        Integer status = auth.getInt("status");
        Integer gender = auth.getInt("gender");

        String serverAuthCode = auth.getString("serverAuthCode");
        String unionId = auth.getString("unionId");
        String countryCode = auth.getString("countryCode");
        JSONArray jsonScope = auth.getJSONArray("grantedScopes");

        Set<Scope> scopes = new HashSet<Scope>();

        for (int i = 0; i < jsonScope.length(); i++) {
            String val = jsonScope.getString(i);
            Scope element = new Scope(val);
            scopes.add(element);
        }

        if (authType.equals(PackageName.HWID)) {
            buildAuth = (T) AuthHuaweiId.build(openId, uid, displayName, photoUriString, accessToken, serviceCountryCode, status, gender, scopes, serverAuthCode, unionId, countryCode);
        } else if (authType.equals(PackageName.ACCOUNT)) {
            buildAuth = (T) AuthAccount.build(openId, uid, displayName, photoUriString, accessToken, serviceCountryCode, status, gender, scopes, serverAuthCode, unionId, countryCode);
        }

        return buildAuth;
    }

    public static JSONObject fromAccountIconToJSONObject(AccountIcon accountIcon) throws JSONException {
        JSONObject iconInfo = new JSONObject();

        iconInfo.put("icon", convertBitmapToString(accountIcon.getIcon()));
        iconInfo.put("description", accountIcon.getDescription());

        return iconInfo;
    }

    public static String convertBitmapToString(Bitmap bitmap) {
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, stream);
        byte[] byteArray = stream.toByteArray();
        String result = Base64.encodeToString(byteArray, Base64.DEFAULT);
        return result;
    }

    public static <T extends AbstractAuthAccount> void getCallbackSuccess(T authResult, HMSLogger logger, String functionName, CallbackContext callbackContext) throws JSONException {
        if (authResult == null) {
            callbackContext.success();
            logger.sendSingleEvent(functionName);
        } else {
            JSONObject authResultJson = null;

            if (authResult instanceof AuthHuaweiId) {
                authResultJson = HMSAccountUtils.fromAuthHuaweiIdToJsonObject((AuthHuaweiId) authResult);
            } else if (authResult instanceof AuthAccount) {
                authResultJson = HMSAccountUtils.fromAuthAccountToJsonObject((AuthAccount) authResult);
            }

            callbackContext.success(authResultJson);
            logger.sendSingleEvent(functionName);
        }
    }

}
