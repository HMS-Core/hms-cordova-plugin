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

package com.huawei.hms.cordova.hwid;

import android.content.Context;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.util.Base64;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.CordovaPluginWithLoggerAndExceptions;
import com.huawei.hms.cordova.exceptions.NullMessageDigestException;
import com.huawei.hms.cordova.helpers.SMSBroadcastReceiver;
import com.huawei.hms.support.sms.ReadSmsManager;
import com.huawei.hms.support.sms.common.ReadSmsConstant;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

public class HMSReadSMSManager extends CordovaPluginWithLoggerAndExceptions {
    private static final String TAG = HMSReadSMSManager.class.getSimpleName();
    private static SMSBroadcastReceiver smsBroadcastReceiver;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("smsVerificationCode".equals(action)) {
            logger.startMethodExecutionTimer(action);
            smsVerificationCode(callbackContext);
            return true;
        } else if ("obtainHashCode".equals(action)) {
            obtainHashCode(callbackContext);
            return true;
        } else if ("startConsent".equals(action)) {
            String phoneNumber = args.getString(0);
            startConsent(phoneNumber, callbackContext);
            return true;
        }
        return false;
    }


    private void smsVerificationCode(CallbackContext callbackContext) {
        Log.i(TAG, "smsVerificationCode start");
        Task<Void> smsVerificationCodeTask = ReadSmsManager.start(cordova.getContext());
        startRegisterReceiver(smsVerificationCodeTask, "smsVerificationCode", callbackContext);
    }

    private void obtainHashCode(CallbackContext callbackContext) {
        Log.i(TAG, "obtainHashCode start");
        String packageName = cordova.getContext().getPackageName();
        String signature = getSignature(cordova.getContext(), packageName);
        MessageDigest messageDigest = getMessageDigest();

        try {
            String hashCode = getHashCode(packageName, messageDigest, signature);
            callbackContext.success(hashCode);
        } catch (Exception e) {
            callbackContext.error(exceptions.getErrorMessage(e));
        }
        Log.i(TAG, "obtainHashCode end");
    }

    private void startConsent(String phoneNumber, CallbackContext callbackContext) {
        Log.i(TAG, "startConsent start");
        Task<Void> consentTask = ReadSmsManager.startConsent(cordova.getActivity(), phoneNumber);
        startRegisterReceiver(consentTask, "startConsent", callbackContext);
    }

    private void startRegisterReceiver(Task<Void> taskRegisterReceiver, String functionName, CallbackContext callbackContext) {
        taskRegisterReceiver.addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                if (smsBroadcastReceiver != null) {
                    cordova.getContext().unregisterReceiver(smsBroadcastReceiver);
                }
                smsBroadcastReceiver = new SMSBroadcastReceiver(logger, functionName, callbackContext);

                Log.i(TAG, functionName + " onSuccess");

                IntentFilter intentFilter = new IntentFilter(ReadSmsConstant.READ_SMS_BROADCAST_ACTION);
                cordova.getContext().registerReceiver(smsBroadcastReceiver, intentFilter);
            }
        }).addOnFailureListener(e -> {
            Log.i(TAG, functionName + " onFailure : " + exceptions.getErrorMessage(e).toString());
        });

    }

    private MessageDigest getMessageDigest() {
        Log.i(TAG, "getMessageDigest start");
        MessageDigest messageDigest = null;
        try {
            messageDigest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            Log.e(TAG, "No Such Algorithm.", e);
        }
        return messageDigest;
    }

    private String getSignature(Context context, String packageName) {
        Log.i(TAG, "getSignature start");
        PackageManager packageManager = context.getPackageManager();
        Signature[] signatureArrs;
        try {
            signatureArrs = packageManager.getPackageInfo(packageName, PackageManager.GET_SIGNATURES).signatures;
        } catch (PackageManager.NameNotFoundException e) {
            Log.e(TAG, "Package name inexistent.");
            return "";
        }
        if (null == signatureArrs || 0 == signatureArrs.length) {
            Log.e(TAG, "signature is null.");
            return "";
        }
        return signatureArrs[0].toCharsString();
    }

    private String getHashCode(String packageName, MessageDigest messageDigest, String signature) throws Exception {
        Log.i(TAG, "getHashCode start");
        String appInfo = packageName + " " + signature;
        messageDigest.update(appInfo.getBytes(StandardCharsets.UTF_8));
        byte[] hashSignature = messageDigest.digest();
        hashSignature = Arrays.copyOfRange(hashSignature, 0, 9);
        String base64Hash = Base64.encodeToString(hashSignature, Base64.NO_PADDING | Base64.NO_WRAP);
        if (base64Hash.length() > 0) {
            base64Hash = base64Hash.substring(0, 11);
            return base64Hash;
        } else {
            throw new NullMessageDigestException();
        }

    }

}
