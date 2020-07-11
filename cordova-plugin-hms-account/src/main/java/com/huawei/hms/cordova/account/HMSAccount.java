/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.huawei.hms.cordova.account;

import android.accounts.Account;
import android.content.Intent;
import android.util.Log;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.account.helpers.Constants;
import com.huawei.hms.cordova.account.utils.Error;
import com.huawei.hms.cordova.account.utils.HMSAccountUtils;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import com.huawei.hms.support.hwid.service.HuaweiIdAuthService;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSAccount extends CordovaPlugin {
    public static final String TAG = HMSAccount.class.getSimpleName();


    CallbackContext mSignInCallback;
    private HuaweiIdAuthService service;

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("signIn".equals(action)) {
            JSONArray authprms = args.getJSONArray(0);
            signIn(authprms, callbackContext);
            return true;
        } else if ("signOut".equals(action)) {
            signOut(callbackContext);
            return true;
        } else if ("cancelAuthorization".equals(action)) {
            cancelAuthorization(callbackContext);
            return true;
        } else if ("silentSignIn".equals(action)) {
            silentSignIn(callbackContext);
            return true;
        }

        return false;
    }

    private void signIn(JSONArray authParams, CallbackContext callbackContext) throws JSONException {
        if (authParams == null || authParams.length() == 0) {
            callbackContext.error("Empty parameter!");
            return;
        }
        Log.i(TAG, "signIn start");

        service = HuaweiIdAuthManager.getService(cordova.getContext(), HMSAccountUtils.fromJSONObjectToHuaweiIdAuthParams(authParams));

        cordova.setActivityResultCallback(this);

        cordova.getActivity().startActivityForResult(service.getSignInIntent(), Constants.SIGN_IN_REQUEST_ID);
        mSignInCallback = callbackContext;

        Log.i(TAG, "signIn end");

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        Log.i(TAG, "onActivityResult start");

        super.onActivityResult(requestCode, resultCode, intent);

        if (requestCode == Constants.SIGN_IN_REQUEST_ID) {

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
                    mSignInCallback.success(signinObject);

                } catch (JSONException e) {
                    Log.i(TAG, e.getMessage());
                }

            }).addOnFailureListener(e -> {
                mSignInCallback.error(Error.getErrorMessage(e));
                Log.i(TAG, "Signin OnFailure");
            });
        }
    }

    private void signOut(CallbackContext callbackContext) {
        Log.i(TAG, "signOut start");
        if (service != null) {
            Task<Void> signOutTask = service.signOut();
            signOutTask.addOnCompleteListener(task -> {
                // Processing after the sign-out.
                Log.i(TAG, "signOut complete");
                callbackContext.success();
            }).addOnFailureListener(e -> callbackContext.error(Error.getErrorMessage(e)));
        } else {
            callbackContext.error(Error.getErrorMessage(501));
            Log.i(TAG, "signOut onFailure");
        }
        Log.i(TAG, "signOut end");
    }

    private void cancelAuthorization(CallbackContext callbackContext) {
        Log.i(TAG, "cancelAuthorization start");
        if (service != null) {
            Task<Void> taskCancelAuthorization = service.cancelAuthorization();
            taskCancelAuthorization.addOnSuccessListener(aVoid -> {
                callbackContext.success();
                Log.i(TAG, "cancelAuthorization onSuccess");
            });

            taskCancelAuthorization.addOnFailureListener(e -> {
                callbackContext.error(Error.getErrorMessage(e));
                Log.i(TAG, "cancelAuthorization onFailure");
            });

            Log.i(TAG, "cancelAuthorization end");

        } else {
            callbackContext.error(Error.getErrorMessage(501));
        }

    }

    private void silentSignIn(CallbackContext callbackContext) {
        if (service != null) {
            Log.i(TAG, "silentSignIn start");
            HuaweiIdAuthParams authParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
            service = HuaweiIdAuthManager.getService(cordova.getContext(), authParams);
            Task<AuthHuaweiId> taskSilentSignIn = service.silentSignIn();

            taskSilentSignIn.addOnSuccessListener(authHuaweiId -> {
                try {

                    JSONObject jsonObjForSilentlySignIn = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId);

                    Account account = authHuaweiId.getHuaweiAccount();
                    if (account != null) {
                        jsonObjForSilentlySignIn.put("account", HMSAccountUtils.fromAccountToJSONObject(account));
                    } else {
                        Log.i(TAG, "account is null");
                    }

                    callbackContext.success(jsonObjForSilentlySignIn);
                    Log.i(TAG, "silentSignIn onSuccess");

                } catch (JSONException e) {
                    Log.i(TAG, e.getMessage());
                }

            }).addOnFailureListener(e -> {
                callbackContext.error(Error.getErrorMessage(e));

                Log.i(TAG, "silentSignIn OnFailure");

            });

            Log.i(TAG, "silentSignIn end");

        } else {
            callbackContext.error(Error.getErrorMessage(501));
            Log.i(TAG, Error.getErrorMessage(501).toString());
        }

    }

}
