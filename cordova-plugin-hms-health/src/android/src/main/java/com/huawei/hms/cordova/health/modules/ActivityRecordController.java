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

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Utils;
import com.huawei.hms.hihealth.ActivityRecordsController;
import com.huawei.hms.hihealth.HiHealthOptions;
import com.huawei.hms.hihealth.HiHealthStatusCodes;
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.data.ActivityRecord;
import com.huawei.hms.hihealth.data.DataCollector;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.SampleSet;
import com.huawei.hms.hihealth.options.ActivityRecordInsertOptions;
import com.huawei.hms.hihealth.options.ActivityRecordReadOptions;
import com.huawei.hms.hihealth.result.ActivityRecordReply;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ActivityRecordController extends CordovaBaseModule {
    private final Context context;

    private final String TAG = ActivityRecordController.class.getSimpleName();
    private final ActivityRecordsController activityRecordsController;

    public ActivityRecordController(final Context context) {
        this.context = context;
        final HiHealthOptions hihealthOptions = HiHealthOptions.builder().build();
        final AuthHuaweiId signInHuaweiId = HuaweiIdAuthManager.getExtendedAuthResult(hihealthOptions);
        this.activityRecordsController = HuaweiHiHealth.getActivityRecordsController(context, signInHuaweiId);
    }

    @HMSLog
    @CordovaMethod
    public void addActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);

        final JSONObject dataCollectorJSON = jsonObject.getJSONObject("dataCollector");
        final JSONArray sampleSetJSON = jsonObject.getJSONArray("sampleSet");

        final DataCollector dataCollector = Utils.toDataCollector(dataCollectorJSON, context.getPackageName());
        final ActivityRecord activityRecord = Utils.getActivityRecord(jsonObject, context.getPackageName());
        final SampleSet sampleSet = Utils.toSampleSet(sampleSetJSON, dataCollector, context.getPackageName());
        final ActivityRecordInsertOptions insertRequest =
            new ActivityRecordInsertOptions.Builder().setActivityRecord(activityRecord).addSampleSet(sampleSet).build();
        final Task<Void> addTask = activityRecordsController.addActivityRecord(insertRequest);
        addTask.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "ActivityRecord add was successful!");
            promise.success();
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));
            Log.i(TAG, errorCode + ": " + errorMsg);
            promise.error(errorCode + ": " + errorMsg);
        });
    }

    @HMSLog
    @CordovaMethod
    public void beginActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject activityRecordData = args.getJSONObject(0);

        // Activity Record
        final String startTime = activityRecordData.getString("startTime");
        final String timeZone = activityRecordData.getString("timeZone");
        final String timeUnitParam = activityRecordData.getString("timeUnit");
        final String id = activityRecordData.getString("id");
        final String name = activityRecordData.getString("name");
        final String description = activityRecordData.getString("description");
        final String activityType = activityRecordData.getString("activityType");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        final ActivityRecord activityRecord = new ActivityRecord.Builder()
            .setName(name)
            .setDesc(description)
            .setId(id)
            .setActivityTypeId(activityType)
            .setStartTime(Long.parseLong(startTime), timeUnit)
            .setTimeZone(timeZone)
            .build();

        final Task<Void> task = activityRecordsController.beginActivityRecord(activityRecord);
        task.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "MyActivityRecord begin success");
            promise.success();
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));
            Log.i(TAG, errorCode + ": " + errorMsg);
            promise.error(errorCode + ": " + errorMsg);
        });
    }

    @HMSLog
    @CordovaMethod
    public void endActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String activityRecordId = args.getString(0);

        final Task<List<ActivityRecord>> endTask = activityRecordsController.endActivityRecord(activityRecordId);
        endTask.addOnSuccessListener(activityRecords -> {
            Log.i(TAG, "MyActivityRecord End success");
            if (activityRecords.size() > 0) {
                final JSONArray activityRecordsJSON = new JSONArray();

                for (final ActivityRecord activityRecord : activityRecords) {
                    activityRecordsJSON.put(Utils.getJSONFromActivityRecord(activityRecord, TimeUnit.MILLISECONDS));
                }
                promise.success(activityRecordsJSON);
            } else {
                Log.i(TAG, "MyActivityRecord End response is null");
                promise.success(new JSONArray());
            }
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));
            Log.i(TAG, errorCode + ": " + errorMsg);
            promise.error(errorCode + ": " + errorMsg);
        });
    }

    @HMSLog
    @CordovaMethod
    public void getActivityRecord(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject activityRecordJSON = args.getJSONObject(0);

        // Activity Record
        final String startTime = activityRecordJSON.getString("startTime");
        final String endTime = activityRecordJSON.getString("endTime");
        final String timeUnitParam = activityRecordJSON.getString("timeUnit");
        final String dataTypeParam = activityRecordJSON.getString("dataType");

        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        final DataType dataType = Utils.toDataType(dataTypeParam);

        final ActivityRecordReadOptions readRequest =
            new ActivityRecordReadOptions.Builder()
                .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit)
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
}

