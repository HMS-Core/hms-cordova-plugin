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


package com.huawei.hms.cordova.contactshield;

import android.Manifest;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.util.Log;

import com.google.gson.Gson;
import com.huawei.hms.common.ApiException;
import com.huawei.hms.contactshield.ContactShield;
import com.huawei.hms.contactshield.ContactShieldEngine;
import com.huawei.hms.contactshield.ContactShieldSetting;
import com.huawei.hms.contactshield.DiagnosisConfiguration;
import com.huawei.hms.contactshield.StatusCode;
import com.huawei.hms.cordova.contactshield.basef.CordovaBaseModule;
import com.huawei.hms.cordova.contactshield.basef.CordovaMethod;
import com.huawei.hms.cordova.contactshield.basef.HMSLog;
import com.huawei.hms.cordova.contactshield.basef.handler.CorPack;
import com.huawei.hms.cordova.contactshield.basef.handler.Promise;
import com.huawei.hms.cordova.contactshield.constants.IntentAction;
import com.huawei.hms.cordova.contactshield.constants.RequestCode;
import com.huawei.hms.cordova.contactshield.handlers.ContactShieldBroadcastReceiver;
import com.huawei.hms.cordova.contactshield.handlers.ContactShieldCallbackHandler;
import com.huawei.hms.cordova.contactshield.utils.ObjectProvider;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.List;

import static com.huawei.hms.cordova.contactshield.constants.IntentAction.CHECK_CONTACT_STATUS;
import static com.huawei.hms.cordova.contactshield.constants.RequestCode.PUT_SHARED_KEY_FILES;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getDiagnosisConfiguration;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getFileList;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getPendingIntent;

public class ContactShieldModule extends CordovaBaseModule {
    private static final String TAG = ContactShieldModule.class.getSimpleName();

    private ContactShieldEngine engine;
    private Gson gson;
    BroadcastReceiver receiver;

    public ContactShieldModule(Context context) {
        engine = ContactShield.getContactShieldEngine(context);
        gson = new Gson();
    }

    @HMSLog
    @CordovaMethod
    public void clearData(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.clearData()
                .addOnSuccessListener(aVoid -> promise.success())
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    @Deprecated
    public void getContactDetail(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String token = args.getString(0);
        engine.getContactDetail(token)
                .addOnSuccessListener(contactDetails -> handleGsonAsList(gson.toJson(contactDetails), promise))
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void getContactSketch(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String token = args.getString(0);
        engine.getContactSketch(token)
                .addOnSuccessListener(contactSketch -> handleGsonAsObject(this.gson.toJson(contactSketch), promise))
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void getContactWindow(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String token = args.getString(0);
        engine.getContactWindow(token)
                .addOnSuccessListener(contactWindows -> handleGsonAsList(this.gson.toJson(contactWindows), promise))
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void getPeriodicKey(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.getPeriodicKey()
                .addOnSuccessListener(
                        periodicKeys -> handleGsonAsList(this.gson.toJson(periodicKeys), promise))
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void isContactShieldRunning(final CorPack corPack, JSONArray args, final Promise promise) {
        this.engine.isContactShieldRunning()
                .addOnSuccessListener(aBoolean -> handleBooleanAsObject(aBoolean, promise))
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void startContactShield(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int incubationPeriod = args.getInt(0);
        final ContactShieldSetting setting = ObjectProvider.getContactShieldSetting(incubationPeriod);
        engine.startContactShield(setting)
                .addOnSuccessListener(aVoid -> promise.success())
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    @Deprecated
    public void startContactShieldOld(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int incubationPeriod = args.getInt(0);
        final PendingIntent pendingIntent = ObjectProvider.getPendingIntent(corPack.getCordovaWebView().getContext(),
                IntentAction.CHECK_CONTACT_STATUS_OLD, RequestCode.START_CONTACT_SHIELD_OLD);
        final ContactShieldSetting setting = ObjectProvider.getContactShieldSetting(incubationPeriod);

        engine.startContactShield(pendingIntent, setting)
                .addOnSuccessListener(aVoid -> promise.success())
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void startContactShieldNoPersistent(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int incubationPeriod = args.getInt(0);
        final ContactShieldSetting setting = ObjectProvider.getContactShieldSetting(incubationPeriod);

        engine.startContactShieldNoPersistent(setting)
                .addOnSuccessListener(aVoid -> promise.success())
                .addOnFailureListener(e -> handleError(e, promise));
    }


    @HMSLog
    @CordovaMethod
    public void stopContactShield(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.stopContactShield()
                .addOnSuccessListener(aVoid -> promise.success())
                .addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void putSharedKeyFiles(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException, IOException {
        JSONObject jsonData = args.getJSONObject(0);
        JSONObject diagnosisConfig = jsonData.getJSONObject("diagnosisConfiguration");
        String token = jsonData.getString("token");
        JSONArray fileList = jsonData.getJSONArray("fileList");

        final PendingIntent pendingIntent = getPendingIntent(corPack.getCordovaWebView().getContext(), CHECK_CONTACT_STATUS, PUT_SHARED_KEY_FILES);

        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);
        final DiagnosisConfiguration diagnosisConfiguration = getDiagnosisConfiguration(diagnosisConfig, gson);

        engine.putSharedKeyFiles(pendingIntent, files, diagnosisConfiguration, token)
                .addOnSuccessListener(aVoid -> {
                    deleteFiles(files);
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    deleteFiles(files);
                    handleError(e, promise);
                });
    }


    @HMSLog
    @CordovaMethod
    @Deprecated
    public void putSharedKeyFilesOld(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException, IOException {
        android.util.Log.i(TAG, "putSharedKeyFilesOld: running");

        JSONObject jsonSharedKeyFilesData = args.getJSONObject(0);
        JSONObject diagnosisConfigJson = jsonSharedKeyFilesData.getJSONObject("diagnosisConfiguration");
        String token = jsonSharedKeyFilesData.getString("token");
        JSONArray fileList = jsonSharedKeyFilesData.getJSONArray("fileList");
        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);
        final DiagnosisConfiguration diagnosisConfig = ObjectProvider.getDiagnosisConfiguration(diagnosisConfigJson, this.gson);

        engine.putSharedKeyFiles(files, diagnosisConfig, token)
                .addOnSuccessListener(aVoid -> {
                    deleteFiles(files);
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    deleteFiles(files);
                    handleError(e, promise);
                });

    }

    private void deleteFiles(List<File> files) {
        for (File file : files) {
            Log.i(TAG, "isFileDelete: " + file.delete());
        }
    }


    @HMSLog
    @CordovaMethod
    public void registerReceiver(final CorPack corPack, JSONArray args, final Promise promise) {
        receiver = new ContactShieldBroadcastReceiver(corPack.getCordovaWebView().getContext(), new ContactShieldCallbackHandler(corPack));
        corPack.getCordovaWebView().getContext().registerReceiver(receiver, ObjectProvider.getIntentFilter());
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void unregisterReceiver(final CorPack corPack, JSONArray args, final Promise promise) {
        if (receiver != null) {
            corPack.getCordovaWebView().getContext().unregisterReceiver(receiver);
        }
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void hasPermission(final CorPack corPack, JSONArray args, final Promise promise) {
        try {
            boolean result = corPack.hasPermission(getRequirePermission(args.getInt(0)));
            promise.success(result);

        } catch (Exception e) {
            Log.i(TAG, e.toString());
        }
    }

    @HMSLog
    @CordovaMethod
    public void requestPermission(final CorPack corPack, JSONArray args, final Promise promise) {
        try {
            corPack.requestPermission(100, getRequirePermission(args.getInt(0)));
            promise.success();
        } catch (Exception e) {
            Log.i(TAG, e.toString());
        }
    }

    private String getRequirePermission(int permission) {
        String manifestPermission = "";

        switch (permission) {
            case 1:
                manifestPermission = Manifest.permission.INTERNET;
                break;
            case 2:
                manifestPermission = Manifest.permission.ACCESS_NETWORK_STATE;
                break;
            case 3:
                manifestPermission = Manifest.permission.BLUETOOTH;
                break;
            case 4:
                manifestPermission = Manifest.permission.BLUETOOTH_ADMIN;
                break;
            case 5:
                manifestPermission = Manifest.permission.ACCESS_COARSE_LOCATION;
                break;
            case 6:
                manifestPermission = Manifest.permission.ACCESS_FINE_LOCATION;
                break;
            default:
                break;
        }

        return manifestPermission;
    }


    public void handleError(Exception e, Promise promise) {
        try {
            final int statusCode;
            final String statusMessage;

            if (e instanceof ApiException) {
                statusCode = ((ApiException) e).getStatusCode();
                statusMessage = StatusCode.getStatusCode(statusCode);
            } else {
                statusCode = StatusCode.STATUS_FAILURE;
                statusMessage = StatusCode.getStatusCode(statusCode);
            }

            final JSONObject errorResult = new JSONObject();
            errorResult.put("statusCode", statusCode);
            errorResult.put("statusMessage", statusMessage);

            promise.error(errorResult);
        } catch (Exception ex) {
            Log.e(TAG, ex.toString());
        }
    }


    public void handleGsonAsList(String res, Promise promise) {
        try {
            promise.success(new JSONArray(res));
        } catch (Exception ex) {
            Log.e(TAG, ex.toString());
        }
    }

    public void handleGsonAsObject(String res, Promise promise) {
        try {
            promise.success(new JSONObject(res));
        } catch (Exception ex) {
            Log.e(TAG, ex.toString());
        }
    }

    public void handleBooleanAsObject(Boolean res, Promise promise) {
        try {
            JSONObject resBoolean = new JSONObject();
            resBoolean.put("result", res);
            promise.success(resBoolean);
        } catch (Exception ex) {
            Log.e(TAG, ex.toString());
        }
    }


}
