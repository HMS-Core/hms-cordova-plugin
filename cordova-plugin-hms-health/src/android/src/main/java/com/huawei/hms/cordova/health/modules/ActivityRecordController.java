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

package com.huawei.hms.cordova.health.modules;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Utils;
import com.huawei.hms.hihealth.ActivityRecordsController;
import com.huawei.hms.hihealth.HiHealthStatusCodes;
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.data.ActivityRecord;
import com.huawei.hms.hihealth.data.DataCollector;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.DeviceInfo;
import com.huawei.hms.hihealth.data.SampleSet;
import com.huawei.hms.hihealth.options.ActivityRecordDeleteOptions;
import com.huawei.hms.hihealth.options.ActivityRecordInsertOptions;
import com.huawei.hms.hihealth.options.ActivityRecordReadOptions;
import com.huawei.hms.hihealth.options.OnActivityRecordListener;
import com.huawei.hms.hihealth.result.ActivityRecordReply;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class ActivityRecordController extends CordovaBaseModule {

    private final Activity activity;

    private final Context context;

    private final String TAG = ActivityRecordController.class.getSimpleName();

    private final ActivityRecordsController activityRecordsController;

    public ActivityRecordController(final Activity activity, Context context) {
        this.activity = activity;
        this.context = context;
        this.activityRecordsController = HuaweiHiHealth.getActivityRecordsController(context);
    }

    @HMSLog
    @CordovaMethod
    public void addActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);
        final JSONObject dataCollectorJSON = jsonObject.getJSONObject("dataCollector");
        final JSONArray sampleSetJSON = jsonObject.getJSONArray("sampleSet");

        final DataCollector dataCollector = Utils.toDataCollector(dataCollectorJSON, context.getPackageName());
        final ActivityRecord activityRecord = Utils.getActivityRecord(jsonObject, context.getPackageName());
        final SampleSet sampleSet = Utils.toSampleSet(sampleSetJSON, dataCollector, context.getPackageName());
        final ActivityRecordInsertOptions insertRequest = new ActivityRecordInsertOptions.Builder().setActivityRecord(
            activityRecord).addSampleSet(sampleSet).build();
        final Task<Void> addTask = activityRecordsController.addActivityRecord(insertRequest);
        addTask.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "ActivityRecord add was successful!");
            promise.success();
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            Log.i(TAG, "addActivityRecord error:" + errorCode);
            promise.error(errorCode);
        });
    }

    @CordovaMethod
    public void deleteActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {

        final JSONObject jsonObject = args.getJSONObject(0);
        final String startTime = jsonObject.getString("startTime");
        final String endTime = jsonObject.getString("endTime");
        final Boolean isDeleteSubData = jsonObject.getBoolean("isDeleteSubData");
        final String timeUnitParam = jsonObject.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        final JSONArray jsonArrayActivityRecordId = jsonObject.getJSONArray("activityRecordIds");
        final List<String> healthRecordIds = new ArrayList<String>();

        for (int i = 0; i < jsonArrayActivityRecordId.length(); i++) {
            healthRecordIds.add(jsonArrayActivityRecordId.getJSONObject(i).getString("activityRecord"));
        }

        final JSONArray jsonArrayDataTypes = jsonObject.getJSONArray("dataTypes");
        final List<JSONObject> list = new ArrayList<>();
        for (int i = 0; i < jsonArrayDataTypes.length(); i++) {
            list.add(jsonArrayDataTypes.getJSONObject(i));
        }
        List<DataType> dataTypes = new ArrayList<>();
        for (final JSONObject object : list) {
            final DataType dataType = Utils.toDataType(object.getString("dataType"));
            dataTypes.add(dataType);
        }

        ActivityRecordDeleteOptions deleteRequest = new ActivityRecordDeleteOptions.Builder().setSubDataTypeList(
                dataTypes)
            .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit)
            .setActivityRecordIds(healthRecordIds)
            .isDeleteSubData(isDeleteSubData)
            .build();

        final Task<Void> addTask = activityRecordsController.deleteActivityRecord(deleteRequest);
        addTask.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "ActivityRecord deleteActivityRecord was successful!");
            promise.success();
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            Log.i(TAG, errorCode);
            promise.error(errorCode);
        });
    }

    @HMSLog
    @CordovaMethod
    public void beginActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {
        final ActivityRecord.Builder activityRecord = new ActivityRecord.Builder();

        final JSONObject activityRecordData = args.getJSONObject(0);
        final String startTime = activityRecordData.getString("startTime");
        final String timeZone = activityRecordData.getString("timeZone");
        final String timeUnitParam = activityRecordData.getString("timeUnit");
        final String id = activityRecordData.getString("id");
        final String name = activityRecordData.getString("name");
        final String description = activityRecordData.getString("description");
        final String activityType = activityRecordData.getString("activityType");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        activityRecord.setName(name)
            .setDesc(description)
            .setId(id)
            .setActivityTypeId(activityType)
            .setStartTime(Long.parseLong(startTime), timeUnit)
            .setTimeZone(timeZone);

        if (activityRecordData.has("deviceInfo")) {
            DeviceInfo deviceInfo = Utils.deviceInfoFromJson(activityRecordData);
            activityRecord.setDeviceInfo(deviceInfo);
        }

        final Task<Void> task = activityRecordsController.beginActivityRecord(activityRecord.build());

        task.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "MyActivityRecord begin success");
            promise.success();
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            Log.i(TAG, errorCode);
            promise.error(errorCode);
        });
    }

    @HMSLog
    @CordovaMethod
    public void beginBackgroundActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {
        final ActivityRecord.Builder activityRecord = new ActivityRecord.Builder();

        final JSONObject activityRecordData = args.getJSONObject(0);
        final String startTime = activityRecordData.getString("startTime");
        final String timeZone = activityRecordData.getString("timeZone");
        final String timeUnitParam = activityRecordData.getString("timeUnit");
        final String id = activityRecordData.getString("id");
        final String name = activityRecordData.getString("name");
        final String description = activityRecordData.getString("description");
        final String activityType = activityRecordData.getString("activityType");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        activityRecord.setName(name)
            .setDesc(description)
            .setId(id)
            .setActivityTypeId(activityType)
            .setStartTime(Long.parseLong(startTime), timeUnit)
            .setTimeZone(timeZone);

        if (activityRecordData.has("deviceInfo")) {
            DeviceInfo deviceInfo = Utils.deviceInfoFromJson(activityRecordData);
            activityRecord.setDeviceInfo(deviceInfo);
        }

        ComponentName componentName = new ComponentName(context, ActivityRecordController.class);

        OnActivityRecordListener activityRecordListener = new OnActivityRecordListener() {
            @Override
            public void onStatusChange(int statusCode) {
                if (HiHealthStatusCodes.WORK_OUT_TIME_OUT == statusCode
                    || HiHealthStatusCodes.WORK_OUT_BE_OCCUPIED == statusCode) {
                    activity.stopService(getForegroundServiceIntent());
                }
            }
        };

        Task<Void> beginTask = activityRecordsController.beginActivityRecord(activityRecord.build(), componentName,
            activityRecordListener);
        beginTask.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "beginActivityRecord begin success");
            activity.startService(getForegroundServiceIntent());
            promise.success();
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            Log.i("Error Code:", errorCode);
            promise.error(errorCode);
        });
    }

    @HMSLog
    @CordovaMethod
    public void endActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {

        final JSONObject jsonObject = args.getJSONObject(0);
        final String activityRecordId = jsonObject.getString("activityRecordId");
        final String timeUnitParam = jsonObject.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        Task<List<ActivityRecord>> endTask = activityRecordsController.endActivityRecord(activityRecordId);

        endTask.addOnSuccessListener(activityRecordReply -> {

            Log.i(TAG, "Get ActivityRecord was successful!");
            final JSONArray activityRecords = new JSONArray();
            if (activityRecordReply.size() > 0) {
                for (final ActivityRecord activityRecord : activityRecordReply) {
                    activityRecords.put(Utils.getJSONFromActivityRecord(activityRecord, timeUnit));
                }
            } else {
                Log.i(TAG, "End response is null");
            }
            promise.success(activityRecords);
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));
            Log.i(TAG, errorCode + ": " + errorMsg);
            promise.error(errorCode + ": " + errorMsg);
        });

    }

    @HMSLog
    @CordovaMethod
    public void endBackgroundActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {

        final JSONObject jsonObject = args.getJSONObject(0);
        final String activityRecordId = jsonObject.getString("activityRecordId");
        final String timeUnitParam = jsonObject.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        Task<List<ActivityRecord>> endTask = activityRecordsController.endActivityRecord(activityRecordId);

        endTask.addOnSuccessListener(new OnSuccessListener<List<ActivityRecord>>() {
            @Override
            public void onSuccess(List<ActivityRecord> activityRecordReply) {

                Log.i(TAG, "Get ActivityRecord was successful!");
                final JSONArray activityRecords = new JSONArray();
                if (activityRecordReply.size() > 0) {
                    for (final ActivityRecord activityRecord : activityRecordReply) {
                        activityRecords.put(Utils.getJSONFromActivityRecord(activityRecord, timeUnit));
                    }
                } else {
                    Log.i(TAG, "End response is null");
                }
                activity.stopService(getForegroundServiceIntent());
                promise.success(activityRecords);
            }
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));

            promise.error(errorMsg);
        });

    }

    @HMSLog
    @CordovaMethod
    public void getActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise)
        throws JSONException {
        final JSONObject activityRecordJSON = args.getJSONObject(0);

        // Activity Record
        final String startTime = activityRecordJSON.getString("startTime");
        final String endTime = activityRecordJSON.getString("endTime");
        final String timeUnitParam = activityRecordJSON.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        final String dataTypeParam = activityRecordJSON.getString("dataType");

        final DataType dataType = Utils.toDataType(dataTypeParam);

        final ActivityRecordReadOptions readRequest = new ActivityRecordReadOptions.Builder().setTimeInterval(
                Long.parseLong(startTime), Long.parseLong(endTime), timeUnit)
            .readActivityRecordsFromAllApps()
            .read(dataType)
            .build();

        final Task<ActivityRecordReply> getTask = activityRecordsController.getActivityRecord(readRequest);
        getTask.addOnSuccessListener(activityRecordReply -> {
            Log.i(TAG, "Get ActivityRecord was successful!");
            final JSONArray activityRecords = new JSONArray();
            final List<ActivityRecord> activityRecordList = activityRecordReply.getActivityRecords();
            for (final ActivityRecord activityRecord : activityRecordList) {
                activityRecords.put(Utils.getJSONFromActivityRecord(activityRecord, timeUnit));
            }
            promise.success(activityRecords);
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));
            Log.i(TAG, errorCode + ": " + errorMsg);
            promise.error(errorCode + ": " + errorMsg);
        });
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
    }

    private Intent getForegroundServiceIntent() {

        Intent intent = new Intent();
        intent.setClassName(context.getPackageName(),
            "com.huawei.hms.cordova.health.modules.ActivityRecordForegroundService");
        return intent;
    }
}
