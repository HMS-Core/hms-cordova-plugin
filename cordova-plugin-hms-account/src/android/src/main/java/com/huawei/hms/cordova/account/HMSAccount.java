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

import android.accounts.Account;
import android.content.Intent;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.account.exceptions.NullServiceException;
import com.huawei.hms.cordova.account.helpers.Constants;
import com.huawei.hms.cordova.account.utils.HMSAccountUtils;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import com.huawei.hms.support.hwid.service.HuaweiIdAuthService;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSAccount extends CordovaPluginWithLoggerAndExceptions {
    public static final String TAG = HMSAccount.class.getSimpleName();


    CallbackContext mSignInCallback;
    private HuaweiIdAuthService service;

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        logger.startMethodExecutionTimer(action);
        if ("signIn".equals(action)) {
            JSONObject signInData = args.getJSONObject(0);
            signIn(signInData, callbackContext);
            return true;
        } else if ("signOut".equals(action)) {
            signOut(callbackContext);
            return true;
        } else if ("cancelAuthorization".equals(action)) {
            cancelAuthorization(callbackContext);
            return true;
        } else if ("silentSignIn".equals(action)) {
            String huaweiIdAuthParams = args.getString(0);
            silentSignIn(huaweiIdAuthParams, callbackContext);
            return true;
        } else if ("enableLogger".equals(action)) {
            enableLogger(callbackContext);
            return true;
        } else if ("disableLogger".equals(action)) {
            disableLogger(callbackContext);
            return true;
        }

        return false;
    }


    private void signIn(JSONObject signInData, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "signIn start");

        JSONArray signInRequestOption = signInData.getJSONArray("authRequestOption");
        String huaweiIdAuthParams = "";
        JSONArray authScopeList = new JSONArray();

        if (signInRequestOption == null || signInRequestOption.length() == 0) {
            callbackContext.error("Empty parameter!");
            return;
        }

        if (signInData.has("authParam")) {
            huaweiIdAuthParams = signInData.getString("authParam");
        }

        if (signInData.has("authScopeList")) {
            authScopeList = signInData.getJSONArray("authScopeList");
        }

        HuaweiIdAuthParams buildHuaweiIdAuthParams = HMSAccountUtils.fromJSONObjectToHuaweiIdAuthParams(signInRequestOption, huaweiIdAuthParams, authScopeList);
        if (buildHuaweiIdAuthParams == null) {
            callbackContext.error("Invalid Parameter");
        } else {
            service = HuaweiIdAuthManager.getService(cordova.getContext(), buildHuaweiIdAuthParams);

            cordova.setActivityResultCallback(this);

            cordova.getActivity().startActivityForResult(service.getSignInIntent(), Constants.SIGN_IN_REQUEST_ID);
            mSignInCallback = callbackContext;

            Log.i(TAG, "signIn end");
        }


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
                    logger.sendSingleEvent("signIn");

                } catch (JSONException e) {
                    Log.i(TAG, exceptions.getErrorMessage(e).toString());
                }

            }).addOnFailureListener(e -> {
                mSignInCallback.error(exceptions.logAndGetErrorJSON("signIn", e, "single"));
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
                logger.sendSingleEvent("signOut");
            }).addOnFailureListener(e -> callbackContext.error(exceptions.logAndGetErrorJSON("signOut", e, "single")));
        } else {
            callbackContext.error(exceptions.logAndGetErrorJSON("signOut", new NullServiceException(), "single"));
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
                logger.sendSingleEvent("cancelAuthorization");
                Log.i(TAG, "cancelAuthorization onSuccess");
            });

            taskCancelAuthorization.addOnFailureListener(e -> {
                callbackContext.error(exceptions.logAndGetErrorJSON("cancelAuthorization", e, "single"));
                Log.i(TAG, "cancelAuthorization onFailure");
            });

            Log.i(TAG, "cancelAuthorization end");

        } else {
            callbackContext.error(exceptions.logAndGetErrorJSON("cancelAuthorization", new NullServiceException(), "single"));
        }

    }

    private void silentSignIn(String huaweiIdAuthParams, CallbackContext callbackContext) {
        Log.i(TAG, "silentSignIn start");
        HuaweiIdAuthParams authParams = null;

        if (huaweiIdAuthParams.isEmpty()) {
            authParams = new HuaweiIdAuthParamsHelper().createParams();
        } else {
            if (huaweiIdAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                authParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
            } else if (huaweiIdAuthParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                authParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME).createParams();
            } else {
                callbackContext.error("Invalid Parameter");
            }
        }


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
                logger.sendSingleEvent("silentlySignIn");
                Log.i(TAG, "silentSignIn onSuccess");

            } catch (JSONException e) {
                Log.i(TAG, exceptions.getErrorMessage(e).toString());
            }

        }).addOnFailureListener(e -> {
            callbackContext.error(exceptions.logAndGetErrorJSON("silentlySignIn", e, "single"));
            Log.i(TAG, "silentSignIn OnFailure");

        });

        Log.i(TAG, "silentSignIn end");

    }

    private void enableLogger(CallbackContext callbackContext) {
        try {
            logger.enableLogger();
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(exceptions.getErrorMessage(e));
        }

    }


    private void disableLogger(CallbackContext callbackContext) {
        try {
            logger.disableLogger();
            callbackContext.success();
        } catch (Exception e) {
            callbackContext.error(exceptions.getErrorMessage(e));
        }
    }

}
