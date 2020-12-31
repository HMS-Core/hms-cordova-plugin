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

package com.huawei.hms.cordova.health.modules;

import android.accounts.Account;
import android.content.Intent;
import android.util.Log;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.health.HMSHealth;
import com.huawei.hms.cordova.health.OnActivityResultCallback;
import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Constants;
import com.huawei.hms.cordova.health.utils.Error;
import com.huawei.hms.cordova.health.utils.HMSAccountUtils;
import com.huawei.hms.cordova.health.utils.JSONUtils;
import com.huawei.hms.support.api.entity.auth.Scope;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import com.huawei.hms.support.hwid.service.HuaweiIdAuthService;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Objects;

public class AuthController extends CordovaBaseModule implements OnActivityResultCallback {
    private String TAG = AuthController.class.getSimpleName();
    private CordovaPlugin plugin;
    private Promise promise;

    public AuthController(HMSHealth hmsHealth) {
        plugin = hmsHealth;
        hmsHealth.setOnActivityResultCallback(this);
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
        Log.d(TAG, "new onActivityResult, requestCode=" + requestCode + ", resultCode=" + resultCode);
        Log.i(TAG, "onActivityResult start");

        if (requestCode == Constants.SIGN_IN_REQUEST_ID || requestCode == Constants.REQUEST_SIGN_IN_LOGIN) {

            Task<AuthHuaweiId> authHuaweiIdTask = HuaweiIdAuthManager.parseAuthResultFromIntent(intent);
            authHuaweiIdTask.addOnSuccessListener(authHuaweiId -> {

                try {
                    JSONObject signinObject = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId);
                    Account account = authHuaweiId.getHuaweiAccount();
                    if (account != null) {
                        signinObject.put("account", HMSAccountUtils.fromAccountToJSONObject(account));
                    } else {
                        Log.i(TAG, "The account is null");
                    }
                    Log.i(TAG, "Signin onSuccess");
                    promise.success(signinObject);

                } catch (JSONException e) {
                    Log.i(TAG, Objects.requireNonNull(e.getMessage()));
                }

            }).addOnFailureListener(e -> {
                Log.i(TAG, "Signin OnFailure");
                Log.i(TAG, Objects.requireNonNull(e.getMessage()));
                promise.error(Error.getErrorMessage(e));
            });
        }
    }

    @HMSLog
    @CordovaMethod
    public void signIn(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        JSONArray scopes = args.getJSONArray(0);
        List<Scope> scopeList = JSONUtils.toScopeList(scopes);

        // Configure authorization parameters.
        HuaweiIdAuthParamsHelper authParamsHelper = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM);
        HuaweiIdAuthParams authParams = authParamsHelper.setIdToken().setAccessToken().setScopeList(scopeList).createParams();
        // Initialize the HuaweiIdAuthService object.
        final HuaweiIdAuthService authService = HuaweiIdAuthManager.getService(plugin.webView.getContext(), authParams);
        Task<AuthHuaweiId> taskSilentSignIn = authService.silentSignIn();

        taskSilentSignIn.addOnSuccessListener(authHuaweiId -> {
            try {
                JSONObject userData = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId);
                Account account = authHuaweiId.getHuaweiAccount();
                if (account != null) {
                    userData.put("account", HMSAccountUtils.fromAccountToJSONObject(account));
                } else {
                    Log.i(TAG, "account is null");
                }

                Log.i(TAG, "silentSignIn onSuccess");
                promise.success(userData);
            } catch (JSONException e) {
                Log.i(TAG, Objects.requireNonNull(e.getMessage()));
                promise.error(e.getMessage());
            }

        }).addOnFailureListener(e -> {
            // The silent sign-in fails.
            // This indicates that the authorization has not been granted by the current account.
            Log.i(TAG, "begin sign in by intent");

            // Call the sign-in API using the getSignInIntent() method.
            Intent signInIntent = authService.getSignInIntent();

            // Display the authorization screen by using the startActivityForResult() method of the activity.
            // Developers can change HealthKitAuthClientActivity to the actual activity.
            plugin.cordova.setActivityResultCallback(plugin);
            plugin.cordova.getActivity().startActivityForResult(signInIntent, Constants.REQUEST_SIGN_IN_LOGIN);
        });
    }
}

