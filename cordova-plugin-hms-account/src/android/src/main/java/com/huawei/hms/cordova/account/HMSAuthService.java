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

import android.content.Intent;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.HMSAccount;
import com.huawei.hms.cordova.OnActivityResultCallback;
import com.huawei.hms.cordova.basef.CordovaBaseModule;
import com.huawei.hms.cordova.basef.CordovaMethod;
import com.huawei.hms.cordova.basef.HMSLog;
import com.huawei.hms.cordova.basef.handler.CorPack;
import com.huawei.hms.cordova.basef.handler.Promise;
import com.huawei.hms.cordova.exceptions.NullServiceException;
import com.huawei.hms.cordova.helpers.Constants;
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

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSAuthService extends CordovaBaseModule implements OnActivityResultCallback {
    public static final String TAG = HMSAuthService.class.getSimpleName();

    private final ExceptionUtils exceptions;

    private final CordovaInterface cordova;

    private final CordovaPlugin plugin;

    private Promise mSignInCallback;

    private AuthService mService;

    private AccountAuthService mAccountService;

    private String packageName;

    public HMSAuthService(CordovaInterface cordova, HMSAccount hmsAccount) {
        this.cordova = cordova;
        this.plugin = hmsAccount;
        hmsAccount.setOnActivityResultCallback(this);
        exceptions = new ExceptionUtils();
    }

    @CordovaMethod
    @HMSLog
    public void getIndependentSignIn(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "getIndependentSignIn start");
        if (mService != null) {
            String accessToken = args.getString(0);
            AccountAuthParams accountAuthParams = new AccountAuthParamsHelper().setProfile().createParams();

            if (accessToken.isEmpty()) {
                cb.error("Missing accessToken parameter.");
            }

            mAccountService = AccountAuthManager.getService(cordova.getContext(), accountAuthParams);
            cordova.setActivityResultCallback(this.plugin);
            cordova.getActivity()
                .startActivityForResult(mAccountService.getIndependentSignInIntent(accessToken),
                    Constants.SIGN_IN_REQUEST_ID);
            mSignInCallback = cb;
            Log.i(TAG, "getIndependentSignIn end");
        } else {
            cb.error(exceptions.logAndGetErrorJSON("getIndependentSignIn", new NullServiceException(), "single"));
            Log.e(TAG, "getIndependentSignIn onFailure");
        }
    }

    @CordovaMethod
    @HMSLog
    public void signIn(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Log.i(TAG, "signIn start");
        JSONObject signInData = args.getJSONObject(0);
        packageName = args.getString(1);
        JSONArray signInRequestOption = signInData.getJSONArray("authRequestOption");
        String authParams = "";
        JSONArray authScopeList = new JSONArray();
        int authIdTokenSignAlg = 2;

        if (signInRequestOption == null || signInRequestOption.length() == 0) {
            cb.error("Empty parameter!");
            return;
        }

        if (signInData.has("authParam")) {
            authParams = signInData.getString("authParam");
        }

        if (signInData.has("authScopeList")) {
            authScopeList = signInData.getJSONArray("authScopeList");
        }

        if (signInData.has("authIdTokenSignAlg")) {
            authIdTokenSignAlg = signInData.getInt("authIdTokenSignAlg");
        }

        if (packageName.equals("ACCOUNT")) {
            AccountAuthParams buildAccountAuthParams = HMSAccountUtils.fromJSONObjectToAccountAuthParams(
                signInRequestOption, authParams, authScopeList, authIdTokenSignAlg);
            if (buildAccountAuthParams == null) {
                cb.error("Invalid Parameter");
            } else {
                mService = AccountAuthManager.getService(cordova.getContext(), buildAccountAuthParams);
            }
        } else if (packageName.equals("HWID")) {
            HuaweiIdAuthParams buildHuaweiIdAuthParams = HMSAccountUtils.fromJSONObjectToHuaweiIdAuthParams(
                signInRequestOption, authParams, authScopeList);
            if (buildHuaweiIdAuthParams == null) {
                cb.error("Invalid Parameter");
            } else {
                mService = HuaweiIdAuthManager.getService(cordova.getContext(), buildHuaweiIdAuthParams);
            }
        }
        cordova.setActivityResultCallback(this.plugin);
        cordova.getActivity().startActivityForResult(mService.getSignInIntent(), Constants.SIGN_IN_REQUEST_ID);
        mSignInCallback = cb;
        Log.i(TAG, "signIn end");

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        Log.i(TAG, "onActivityResult start");

        OnFailureListener handleSingInFailure = e -> {
            mSignInCallback.error(exceptions.logAndGetErrorJSON("signIn", e, "single"));
            Log.i(TAG, "SignIn OnFailure");
        };

        OnSuccessListener<JSONObject> handler = signInObject -> {
            Log.i(TAG, "SignIn onSuccess");
            mSignInCallback.success(signInObject);
        };

        if (requestCode == Constants.SIGN_IN_REQUEST_ID) {
            if (packageName.equals("ACCOUNT")) {
                Task<AuthAccount> authAccountTask = AccountAuthManager.parseAuthResultFromIntent(intent);
                authAccountTask.addOnSuccessListener(authAccount -> {
                    try {
                        JSONObject signInObject = HMSAccountUtils.fromAuthAccountToJsonObject(authAccount,
                            cordova.getContext());
                        handler.onSuccess(signInObject);
                    } catch (JSONException e) {
                        handleSingInFailure.onFailure(e);
                    }
                }).addOnFailureListener(handleSingInFailure);
            } else if (packageName.equals("HWID")) {
                Task<AuthHuaweiId> authHuaweiIdTask = HuaweiIdAuthManager.parseAuthResultFromIntent(intent);
                authHuaweiIdTask.addOnSuccessListener(authHuaweiId -> {
                    try {
                        JSONObject signInObject = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId,
                            cordova.getContext());
                        handler.onSuccess(signInObject);
                    } catch (JSONException e) {
                        handleSingInFailure.onFailure(e);
                    }
                }).addOnFailureListener(handleSingInFailure);
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void signOut(final CorPack corPack, JSONArray args, final Promise cb) {
        Log.i(TAG, "signOut start");
        if (mService != null) {
            Task<Void> signOutTask = mService.signOut();
            signOutTask.addOnCompleteListener(task -> {
                Log.i(TAG, "signOut complete");
                cb.success();
            }).addOnFailureListener(e -> {
                Log.i(TAG, "signOut onFailure");
                cb.error(exceptions.logAndGetErrorJSON("signOut", e, "single"));
            });
        } else {
            Log.i(TAG, "mService is null");
            cb.error(exceptions.logAndGetErrorJSON("signOut", new NullServiceException(), "single"));
        }
        Log.i(TAG, "signOut end");
    }

    @CordovaMethod
    @HMSLog
    public void cancelAuthorization(final CorPack corPack, JSONArray args, final Promise cb) {
        Log.i(TAG, "cancelAuthorization start");
        if (mService != null) {
            Task<Void> taskCancelAuthorization = mService.cancelAuthorization();
            taskCancelAuthorization.addOnSuccessListener(aVoid -> {
                Log.i(TAG, "cancelAuthorization onSuccess");
                cb.success();
            }).addOnFailureListener(e -> {
                Log.i(TAG, "cancelAuthorization onFailure");
                cb.error(exceptions.logAndGetErrorJSON("cancelAuthorization", e, "single"));
            });
            Log.i(TAG, "cancelAuthorization end");

        } else {
            cb.error(exceptions.logAndGetErrorJSON("cancelAuthorization", new NullServiceException(), "single"));
        }
    }

    @CordovaMethod
    @HMSLog
    public void silentSignIn(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        String authParams = args.getString(0);
        packageName = args.getString(1);
        OnFailureListener handleSilentlySignInFailure = e -> {
            cb.error(exceptions.logAndGetErrorJSON("silentSignIn", e, "single"));
            Log.i(TAG, "silentSignIn OnFailure");
        };

        OnSuccessListener<JSONObject> handleSilentlySignInSuccess = signInObject -> {
            Log.i(TAG, "silentSignIn onSuccess");
            cb.success(signInObject);
        };

        Log.i(TAG, "silentSignIn start");

        if (packageName.equals("ACCOUNT")) {
            AccountAuthParams accountAuthParams = null;

            if (authParams.isEmpty()) {
                accountAuthParams = new AccountAuthParamsHelper().createParams();
            } else {
                if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                    accountAuthParams = new AccountAuthParamsHelper(
                        AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
                } else if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                    accountAuthParams = new AccountAuthParamsHelper(
                        AccountAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME).createParams();
                } else {
                    cb.error("Invalid Parameter");
                }
            }

            mService = AccountAuthManager.getService(cordova.getContext(), accountAuthParams);
            Task<AuthAccount> taskSilentSignIn = ((AccountAuthService) mService).silentSignIn();

            taskSilentSignIn.addOnSuccessListener(authAccount -> {
                try {
                    JSONObject jsonObjForSilentlySignIn = HMSAccountUtils.fromAuthAccountToJsonObject(authAccount,
                        cordova.getContext());
                    handleSilentlySignInSuccess.onSuccess(jsonObjForSilentlySignIn);
                } catch (JSONException e) {
                    Log.i(TAG, exceptions.getErrorMessage(e).toString());
                    handleSilentlySignInFailure.onFailure(e);
                }

            }).addOnFailureListener(handleSilentlySignInFailure);

        } else if (packageName.equals("HWID")) {
            HuaweiIdAuthParams huaweiIdAuthParams = null;

            if (authParams.isEmpty()) {
                huaweiIdAuthParams = new HuaweiIdAuthParamsHelper().createParams();
            } else {
                if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM")) {
                    huaweiIdAuthParams = new HuaweiIdAuthParamsHelper(
                        HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
                } else if (authParams.equals("DEFAULT_AUTH_REQUEST_PARAM_GAME")) {
                    huaweiIdAuthParams = new HuaweiIdAuthParamsHelper(
                        HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME).createParams();
                } else {
                    cb.error("Invalid Parameter");
                }
            }

            mService = HuaweiIdAuthManager.getService(cordova.getContext(), huaweiIdAuthParams);
            Task<AuthHuaweiId> taskSilentSignIn = ((HuaweiIdAuthService) mService).silentSignIn();

            taskSilentSignIn.addOnSuccessListener(authHuaweiId -> {
                try {
                    JSONObject jsonObjForSilentlySignIn = HMSAccountUtils.fromAuthHuaweiIdToJsonObject(authHuaweiId,
                        cordova.getContext());
                    handleSilentlySignInSuccess.onSuccess(jsonObjForSilentlySignIn);
                } catch (JSONException e) {
                    Log.i(TAG, exceptions.getErrorMessage(e).toString());
                    handleSilentlySignInFailure.onFailure(e);
                }

            }).addOnFailureListener(handleSilentlySignInFailure);
        }
        Log.i(TAG, "silentSignIn end");
    }

    @CordovaMethod
    @HMSLog
    public void getChannel(final CorPack corPack, JSONArray args, final Promise cb) {
        if (mService != null) {
            Task<AccountIcon> channel = ((AccountAuthService) mService).getChannel();
            channel.addOnSuccessListener(accountIcon -> {
                JSONObject iconInfo = null;
                try {
                    iconInfo = HMSAccountUtils.fromAccountIconToJSONObject(accountIcon);
                } catch (JSONException e) {
                    Log.i(TAG, exceptions.getErrorMessage(e).toString());
                    cb.error(exceptions.logAndGetErrorJSON("getChannel", e, "single"));
                }
                cb.success(iconInfo);
            }).addOnFailureListener(e -> {
                Log.i(TAG, "getChannel OnFailure");
                cb.error(exceptions.logAndGetErrorJSON("getChannel", e, "single"));
            });
        } else {
            Log.i(TAG, "mService is null");
            cb.error(exceptions.logAndGetErrorJSON("getChannel", new NullServiceException(), "single"));
        }
    }

    @CordovaMethod
    @HMSLog
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise cb) {
        try {
            corPack.enableLogger();
            cb.success();
        } catch (Exception e) {
            cb.error(exceptions.getErrorMessage(e));
        }
    }

    @CordovaMethod
    @HMSLog
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise cb) {
        try {
            corPack.disableLogger();
            cb.success();
        } catch (Exception e) {
            cb.error(exceptions.getErrorMessage(e));
        }
    }
}
