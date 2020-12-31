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

package com.huawei.hms.cordova.health.utils;

import android.accounts.Account;
import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

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
        signInJSONObject.put("unionId", authHuaweiId.getUnionId());
        signInJSONObject.put("countryCode", authHuaweiId.getCountryCode());
        signInJSONObject.put("avatarUriString", authHuaweiId.getAvatarUriString());
        signInJSONObject.put("expressionTimeSecs", authHuaweiId.getExpirationTimeSecs());
        signInJSONObject.put("serviceCountryCode", authHuaweiId.getServiceCountryCode());
        signInJSONObject.put("uid", authHuaweiId.getUid());
        signInJSONObject.put("openId", authHuaweiId.getOpenId());
        signInJSONObject.put("gender", authHuaweiId.getGender());
        signInJSONObject.put("describeContentsInAuthHuaweiId", authHuaweiId.describeContents());
        signInJSONObject.put("status", authHuaweiId.getStatus());
        signInJSONObject.put("authorizedScopes", fromAuthorizedScopesToJsonArray(authHuaweiId.getAuthorizedScopes()));
        signInJSONObject.put("extensionScopes", fromExtensionScopesToJsonArray(authHuaweiId.getExtensionScopes()));
        return signInJSONObject;
    }

    public static JSONArray fromAuthorizedScopesToJsonArray(Set<Scope> authorizedScopes) {
        JSONArray arrayListAuthorizedScopes = new JSONArray();
        for (Scope authorizedScope : authorizedScopes) {
            String f = authorizedScope.toString();
            arrayListAuthorizedScopes.put(f);
        }
        return arrayListAuthorizedScopes;
    }

    public static JSONArray fromExtensionScopesToJsonArray(Set<Scope> extensionScopes) {
        JSONArray arrayListExtensionScopes = new JSONArray();
        for (Scope extensionScope : extensionScopes) {
            String f = extensionScope.toString();
            arrayListExtensionScopes.put(f);
        }
        return arrayListExtensionScopes;
    }

    public static JSONObject fromAccountToJSONObject(Account account) throws JSONException {
        JSONObject accountJsonObject = new JSONObject();
        accountJsonObject.put("type", account.type);
        accountJsonObject.put("name", account.name);
        return accountJsonObject;
    }
}
