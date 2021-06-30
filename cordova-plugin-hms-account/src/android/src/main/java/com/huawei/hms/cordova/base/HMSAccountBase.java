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

import android.content.Intent;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.PackageName;
import com.huawei.hms.cordova.account.HMSAccountAuthManager;
import com.huawei.hms.cordova.exceptions.NullServiceException;
import com.huawei.hms.cordova.helpers.Constants;
import com.huawei.hms.cordova.logger.HMSLogger;
import com.huawei.hms.cordova.utils.ExceptionUtils;
import com.huawei.hms.cordova.utils.HMSAccountUtils;
import com.huawei.hms.support.account.AccountAuthManager;
import com.huawei.hms.support.account.request.AccountAuthParams;
import com.huawei.hms.support.account.request.AccountAuthParamsHelper;
import com.huawei.hms.support.account.result.AccountIcon;
import com.huawei.hms.support.account.result.AuthAccount;
import com.huawei.hms.support.account.service.AccountAuthService;
import com.huawei.hms.support.feature.service.AuthService;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import com.huawei.hms.support.hwid.service.HuaweiIdAuthService;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSAccountBase {
    public static final String TAG = HMSAccountBase.class.getSimpleName();

    private CallbackContext mSignInCallback;
    private AuthService mService;

    private PackageName packageName;
    private HMSLogger logger;
    private CordovaInterface cordova;
    private ExceptionUtils exceptions;
    private CordovaPlugin plugin;


    public HMSAccountBase setPackageName(PackageName packageName) {
        this.packageName = packageName;
        return this;
    }

    public HMSAccountBase setLogger(HMSLogger logger) {
        this.logger = logger;
        return this;
    }

    public HMSAccountBase setCordova(CordovaInterface cordova) {
        this.cordova = cordova;
        return this;
    }

    public HMSAccountBase setExceptions(ExceptionUtils exceptions) {
        this.exceptions = exceptions;
        return this;
    }

    public HMSAccountBase setPlugin(CordovaPlugin plugin) {
        this.plugin = plugin;
        return this;
    }

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
            String authParams = args.getString(0);
            silentSignIn(authParams, callbackContext);
            return true;
        } else if ("enableLogger".equals(action)) {
            enableLogger(callbackContext);
            return true;
        } else if ("disableLogger".equals(action)) {
            disableLogger(callbackContext);
            return true;
        } else if ("getChannel".equals(action)) {
            getChannel(callbackContext);
            return true;
        }
        return false;
    }

    private void signIn(JSONObject signInData, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "signIn start");

        JSONArray signInRequestOption = signInData.getJSONArray("authRequestOption");
        String authParams = "";
        JSONArray authScopeList = new JSONArray();

        if (signInRequestOption == null || signInRequestOption.length() == 0) {
            callbackContext.error("Empty parameter!");
            return;
        }

        if (signInData.has("authParam")) {
            authParams = signInData.getString("authParam");
        }

        if (signInData.has("authScopeList")) {
            authScopeList = signInData.getJSONArray("authScopeList");
        }

        if (packageName.equals(PackageName.ACCOUNT)) {
            AccountAuthParams buildAccountAuthParams = HMSAccountUtils.fromJSONObjectToAccountAuthParams(signInRequestOption, authParams, authScopeList);
            if (buildAccountAuthParams == null) {
                callbackContext.error("Invalid Parameter");
            } else {
                mService = AccountAuthManager.getService(cordova.getContext(), buildAccountAuthParams);
            }
        } else if (packageName.equals(PackageName.HWID)) {
            HuaweiIdAuthParams buildHuaweiIdAuthParams = HMSAccountUtils.fromJSONObjectToHuaweiIdAuthParams(signInRequestOption, authParams, authScopeList);
            if (buildHuaweiIdAuthParams == null) {
                callbackContext.error("Invalid Parameter");
            } else {
                mService = HuaweiIdAuthManager.getService(cordova.getContext(), buildHuaweiIdAuthParams);
            }
        }
        cordova.setActivityResultCallback(this.plugin);
        cordova.getActivity().startActivityForResult(mService.getSignInIntent(), Constants.SIGN_IN_REQUEST_ID);
        mSignInCallback = callbackContext;
        Log.i(TAG, "signIn end");

    }

    public void handleActivityResult(int requestCode, int resultCode, Intent intent) {
        Log.i(TAG, "onActivityResult start");

        OnFailureListener handleSingInFailure = e -> {
            mSignInCallback.error(exceptions.logAndGetErrorJSON("signIn", e, "single"));
            Log.i(TAG, "Signin OnFailure");
        };

        OnSuccessListener<JSONObject> handler = signinObject -> {
            Log.i(TAG, "Signin onSuccess");
            mSignInCallback.success(signinObject);
            logger.sendSingleEvent("signIn");
        };

        if (requestCode == Constants.SIGN_IN_REQUEST_ID) {
            if (packageName.equals(PackageName.ACCOUNT)) {
                Task<AuthAccount> authAccountTask = AccountAuthManager.parseAuthResultFromIntent(intent);
                authAccountTask.addOnSuccessListener(authAccount -> {
                    try {
                        JSONObject signinObject = HMSAccountUtils.fromAuthAccountToJsonObject(authAccount);
                        handler.onSuccess(signinObject);
                    } catch (JSONException e) {
                        handleSingInFailure.onFailure(e);
                    }
                }).addOnFailureListener(handleSingInFailure);
            } else if (packageName.equals(PackageName.HWID)) {
                Task<AuthHuaweiId> authHuaweiIdTask = HuaweiIdAuthManager.parseAuthResultFromIntent(intent);
                authHuaweiIdTask.addOnSuccessListener(authHuaweiId -> {
                    try {
                        JSONObject signinObject = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId);
                        handler.onSuccess(signinObject);
                    } catch (JSONException e) {
                        handleSingInFailure.onFailure(e);
                    }
                }).addOnFailureListener(handleSingInFailure);
            }
        }
    }

    private void signOut(CallbackContext callbackContext) {
        Log.i(TAG, "signOut start");
        if (mService != null) {
            Task<Void> signOutTask = mService.signOut();
            signOutTask.addOnCompleteListener(task -> {
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
        if (mService != null) {
            Task<Void> taskCancelAuthorization = mService.cancelAuthorization();
            taskCancelAuthorization.addOnSuccessListener(aVoid -> {
                callbackContext.success();
                logger.sendSingleEvent("cancelAuthorization");
                Log.i(TAG, "cancelAuthorization onSuccess");
            }).addOnFailureListener(e -> {
                callbackContext.error(exceptions.logAndGetErrorJSON("cancelAuthorization", e, "single"));
                Log.i(TAG, "cancelAuthorization onFailure");
            });

            Log.i(TAG, "cancelAuthorization end");

        } else {
            callbackContext.error(exceptions.logAndGetErrorJSON("cancelAuthorization", new NullServiceException(), "single"));
        }

    }

    private void silentSignIn(String authParams, CallbackContext callbackContext) {
        OnFailureListener handleSilentlySignInFailure = e -> {
            callbackContext.error(exceptions.logAndGetErrorJSON("silentSignIn", e, "single"));
            Log.i(TAG, "silentSignIn OnFailure");
        };

        OnSuccessListener<JSONObject> handleSilentlySignInSuccess = signinObject -> {
            Log.i(TAG, "silentSignIn onSuccess");
            callbackContext.success(signinObject);
            logger.sendSingleEvent("silentSignIn");
        };

        Log.i(TAG, "silentSignIn start");

        if (packageName.equals(PackageName.ACCOUNT)) {
            AccountAuthParams accountAuthParams = null;

            if (authParams.isEmpty()) {
                accountAuthParams = new AccountAuthParamsHelper().createParams();
            } else {
                if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                    accountAuthParams = new AccountAuthParamsHelper(AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
                } else if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                    accountAuthParams = new AccountAuthParamsHelper(AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME).createParams();
                } else {
                    callbackContext.error("Invalid Parameter");
                }
            }

            mService = AccountAuthManager.getService(cordova.getContext(), accountAuthParams);
            Task<AuthAccount> taskSilentSignIn = ((AccountAuthService) mService).silentSignIn();

            taskSilentSignIn.addOnSuccessListener(authAccount -> {
                try {
                    JSONObject jsonObjForSilentlySignIn = HMSAccountUtils.fromAuthAccountToJsonObject(authAccount);
                    handleSilentlySignInSuccess.onSuccess(jsonObjForSilentlySignIn);
                } catch (JSONException e) {
                    Log.i(TAG, exceptions.getErrorMessage(e).toString());
                    handleSilentlySignInFailure.onFailure(e);
                }

            }).addOnFailureListener(handleSilentlySignInFailure);

        } else if (packageName.equals(PackageName.HWID)) {
            HuaweiIdAuthParams huaweiIdAuthParams = null;

            if (authParams.isEmpty()) {
                huaweiIdAuthParams = new HuaweiIdAuthParamsHelper().createParams();
            } else {
                if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                    huaweiIdAuthParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
                } else if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                    huaweiIdAuthParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME).createParams();
                } else {
                    callbackContext.error("Invalid Parameter");
                }
            }

            mService = HuaweiIdAuthManager.getService(cordova.getContext(), huaweiIdAuthParams);
            Task<AuthHuaweiId> taskSilentSignIn = ((HuaweiIdAuthService) mService).silentSignIn();

            taskSilentSignIn.addOnSuccessListener(authHuaweiId -> {
                try {
                    JSONObject jsonObjForSilentlySignIn = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId);
                    handleSilentlySignInSuccess.onSuccess(jsonObjForSilentlySignIn);
                } catch (JSONException e) {
                    Log.i(TAG, exceptions.getErrorMessage(e).toString());
                    handleSilentlySignInFailure.onFailure(e);
                }

            }).addOnFailureListener(handleSilentlySignInFailure);
        }
        Log.i(TAG, "silentSignIn end");
    }

    private void getChannel(CallbackContext callbackContext) {
        Task<AccountIcon> channel = ((AccountAuthService) mService).getChannel();
        channel.addOnSuccessListener(accountIcon -> {
            JSONObject iconInfo = null;
            try {
                iconInfo = HMSAccountUtils.fromAccountIconToJSONObject(accountIcon);
            } catch (JSONException e) {
                Log.i(TAG, exceptions.getErrorMessage(e).toString());
                callbackContext.error(exceptions.logAndGetErrorJSON("getChannel", e, "single"));
            }
            callbackContext.success(iconInfo);
            logger.sendSingleEvent("getChannel");
        }).addOnFailureListener(e -> {
            callbackContext.error(exceptions.logAndGetErrorJSON("getChannel", e, "single"));
            Log.i(TAG, "getChannel OnFailure");
        });
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
