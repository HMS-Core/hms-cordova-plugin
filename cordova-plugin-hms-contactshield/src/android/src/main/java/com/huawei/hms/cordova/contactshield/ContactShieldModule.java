/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.util.Log;

import com.google.gson.Gson;

import com.huawei.hms.common.ApiException;
import com.huawei.hms.contactshield.ContactShield;
import com.huawei.hms.contactshield.ContactShieldEngine;
import com.huawei.hms.contactshield.ContactShieldSetting;
import com.huawei.hms.contactshield.ContactShieldStatus;
import com.huawei.hms.contactshield.DailySketchConfiguration;
import com.huawei.hms.contactshield.DiagnosisConfiguration;
import com.huawei.hms.contactshield.SharedKeyFileProvider;
import com.huawei.hms.contactshield.SharedKeysDataMapping;
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
import java.util.Map;

import static com.huawei.hms.cordova.contactshield.constants.IntentAction.CHECK_CONTACT_STATUS;
import static com.huawei.hms.cordova.contactshield.constants.RequestCode.PUT_SHARED_KEY_FILES;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.convertJSONArrayToList;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.dailySketchConfiguration;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getDiagnosisConfiguration;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getFileList;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getMapObject;
import static com.huawei.hms.cordova.contactshield.utils.ObjectProvider.getPendingIntent;

public class ContactShieldModule extends CordovaBaseModule {
    private static final String TAG = ContactShieldModule.class.getSimpleName();

    private ContactShieldEngine engine;

    private Gson gson;

    private BroadcastReceiver receiver;

    public ContactShieldModule(Context context) {
        engine = ContactShield.getContactShieldEngine(context);
        gson = new Gson();
    }

    @HMSLog
    @CordovaMethod
    public void getStatus(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.getStatus().addOnSuccessListener(result -> {
            JSONArray statusResult = new JSONArray();
            try {
                for (ContactShieldStatus value : result) {
                    JSONObject keyMap = new JSONObject();
                    keyMap.put("status", value.name());
                    keyMap.put("value", value.getStatusValue());
                    statusResult.put(keyMap);
                }
            } catch (JSONException e) {
                Log.e(TAG, "getStatus: error ->" + e.toString());
            }
            promise.success(statusResult);
        }).addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void getContactShieldVersion(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.getContactShieldVersion()
            .addOnSuccessListener(promise::success)
            .addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void getDeviceCalibrationConfidence(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.getDeviceCalibrationConfidence()
            .addOnSuccessListener(promise::success)
            .addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void isSupportScanningWithoutLocation(final CorPack corPack, JSONArray args, final Promise promise) {
        final boolean isSupportScan = engine.isSupportScanningWithoutLocation();
        promise.success(isSupportScan);
    }

    @HMSLog
    @CordovaMethod
    public void setSharedKeysDataMapping(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        final JSONObject jsonData = args.getJSONObject(0);
        final JSONObject daysSinceCreationToContagiousness = jsonData.getJSONObject(
            "daysSinceCreationToContagiousness");
        final int defaultReportType = jsonData.getInt("defaultReportType");
        final int defaultContagiousness = jsonData.getInt("defaultContagiousness");

        Map<Integer, Integer> mapObj = getMapObject(daysSinceCreationToContagiousness);

        final SharedKeysDataMapping sharedKeysDataMapping
            = new SharedKeysDataMapping.Builder().setDaysSinceCreationToContagiousness(mapObj)
            .setDefaultContagiousness(defaultContagiousness)
            .setDefaultReportType(defaultReportType)
            .build();

        engine.setSharedKeysDataMapping(sharedKeysDataMapping)
            .addOnSuccessListener(aVoid -> promise.success())
            .addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void getSharedKeysDataMapping(final CorPack corPack, JSONArray args, final Promise promise) {
        engine.getSharedKeysDataMapping().addOnSuccessListener(sharedKeysDataMapping -> {
            final JSONObject jsonObject = new JSONObject();
            try {
                jsonObject.put("defaultContagiousness", sharedKeysDataMapping.getDefaultContagiousness());
                jsonObject.put("defaultReportType", sharedKeysDataMapping.getDefaultReportType());
                jsonObject.put("daysSinceCreationToContagiousness",
                    sharedKeysDataMapping.getDaysSinceCreationToContagiousness());
            } catch (JSONException e) {
                Log.e(TAG, "getSharedKeysDataMapping: " + e.toString());
            }
            promise.success(jsonObject);
        }).addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void getDailySketch(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        final JSONObject dailySketchConfigurationJson = args.getJSONObject(0);
        final DailySketchConfiguration dailySketchConfiguration = dailySketchConfiguration(dailySketchConfigurationJson,
            gson);

        engine.getDailySketch(dailySketchConfiguration)
            .addOnSuccessListener(dailySketches -> handleGsonAsList(gson.toJson(dailySketches), promise))
            .addOnFailureListener(e -> handleError(e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void putSharedKeyFilesKeysProvider(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException, IOException {
        final JSONObject jsonData = args.getJSONObject(0);
        final JSONArray fileList = jsonData.getJSONArray("fileList");
        final JSONArray publicKeysJSON = jsonData.getJSONArray("publicKeys");

        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);
        final PendingIntent pendingIntent = getPendingIntent(corPack.getCordovaWebView().getContext(),
            CHECK_CONTACT_STATUS, PUT_SHARED_KEY_FILES);

        final SharedKeyFileProvider provider = new SharedKeyFileProvider(files);
        final List<String> publicKeys = convertJSONArrayToList(publicKeysJSON);
        engine.putSharedKeyFiles(pendingIntent, provider, publicKeys).addOnSuccessListener(aVoid -> {
            deleteFiles(files);
            promise.success();
        }).addOnFailureListener(e -> {
            handleError(e, promise);
            promise.error("Error");
        });
    }

    @CordovaMethod
    @HMSLog
    public void putSharedKeyFilesKeys(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException, IOException {
        final JSONObject jsonData = args.getJSONObject(0);
        final JSONObject diagnosisConfig = jsonData.getJSONObject("diagnosisConfiguration");
        final String token = jsonData.getString("token");
        final JSONArray fileList = jsonData.getJSONArray("fileList");
        final JSONArray publicKeysJSON = jsonData.getJSONArray("publicKeys");
        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);

        final PendingIntent pendingIntent = getPendingIntent(corPack.getCordovaWebView().getContext(),
            CHECK_CONTACT_STATUS, PUT_SHARED_KEY_FILES);

        final List<String> publicKeys = convertJSONArrayToList(publicKeysJSON);
        final DiagnosisConfiguration diagnosisConfiguration = getDiagnosisConfiguration(diagnosisConfig, gson);

        engine.putSharedKeyFiles(pendingIntent, files, publicKeys, diagnosisConfiguration, token)
            .addOnSuccessListener(aVoid -> {
                deleteFiles(files);
                promise.success();
            })
            .addOnFailureListener(e -> {
                handleError(e, promise);
            });
    }

    @CordovaMethod
    @HMSLog
    public void putSharedKeyFilesProvider(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException, IOException {
        final JSONArray fileList = args.getJSONArray(0);
        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);
        final PendingIntent pendingIntent = getPendingIntent(corPack.getCordovaWebView().getContext(),
            CHECK_CONTACT_STATUS, PUT_SHARED_KEY_FILES);

        final SharedKeyFileProvider provider = new SharedKeyFileProvider(files);

        engine.putSharedKeyFiles(pendingIntent, provider).addOnSuccessListener(aVoid -> {
            deleteFiles(files);
            promise.success();
        }).addOnFailureListener(e -> {
            handleError(e, promise);
        });
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
            .addOnSuccessListener(periodicKeys -> handleGsonAsList(this.gson.toJson(periodicKeys), promise))
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
    public void startContactShieldOld(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
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
    public void startContactShieldNoPersistent(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
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
    public void putSharedKeyFiles(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, IOException {
        JSONObject jsonData = args.getJSONObject(0);
        JSONObject diagnosisConfig = jsonData.getJSONObject("diagnosisConfiguration");
        String token = jsonData.getString("token");
        JSONArray fileList = jsonData.getJSONArray("fileList");

        final PendingIntent pendingIntent = getPendingIntent(corPack.getCordovaWebView().getContext(),
            CHECK_CONTACT_STATUS, PUT_SHARED_KEY_FILES);

        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);
        final DiagnosisConfiguration diagnosisConfiguration = getDiagnosisConfiguration(diagnosisConfig, gson);

        engine.putSharedKeyFiles(pendingIntent, files, diagnosisConfiguration, token).addOnSuccessListener(aVoid -> {
            deleteFiles(files);
            promise.success();
        }).addOnFailureListener(e -> {
            deleteFiles(files);
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    @Deprecated
    public void putSharedKeyFilesOld(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, IOException {
        JSONObject jsonSharedKeyFilesData = args.getJSONObject(0);
        JSONObject diagnosisConfigJson = jsonSharedKeyFilesData.getJSONObject("diagnosisConfiguration");
        String token = jsonSharedKeyFilesData.getString("token");
        JSONArray fileList = jsonSharedKeyFilesData.getJSONArray("fileList");
        final List<File> files = getFileList(corPack.getCordovaWebView().getContext().getContentResolver(), fileList);
        final DiagnosisConfiguration diagnosisConfig = ObjectProvider.getDiagnosisConfiguration(diagnosisConfigJson,
            this.gson);

        engine.putSharedKeyFiles(files, diagnosisConfig, token).addOnSuccessListener(aVoid -> {
            deleteFiles(files);
            promise.success();
        }).addOnFailureListener(e -> {
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
        receiver = new ContactShieldBroadcastReceiver(corPack.getCordovaWebView().getContext(),
            new ContactShieldCallbackHandler(corPack));
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
    public void hasPermission(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String permission = args.getString(0);
        promise.success(corPack.hasPermission(permission));
    }

    @HMSLog
    @CordovaMethod
    public void requestPermissions(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        List<String> permissions = convertJSONArrayToList(args.getJSONArray(0));
        corPack.requestPermissions(0, permissions.toArray(new String[0]));
        promise.success();
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
