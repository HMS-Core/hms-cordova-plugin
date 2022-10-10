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
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Utils;
import com.huawei.hms.hihealth.HiHealthStatusCodes;
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.data.DataCollector;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.Field;
import com.huawei.hms.hihealth.data.HealthRecord;
import com.huawei.hms.hihealth.data.SamplePoint;
import com.huawei.hms.hihealth.data.SampleSet;
import com.huawei.hms.hihealth.options.HealthRecordDeleteOptions;
import com.huawei.hms.hihealth.options.HealthRecordInsertOptions;
import com.huawei.hms.hihealth.options.HealthRecordReadOptions;
import com.huawei.hms.hihealth.options.HealthRecordUpdateOptions;
import com.huawei.hms.hihealth.result.HealthRecordReply;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class HealthRecordController extends CordovaBaseModule {

    private static final String TAG = "HealthRecordSample";

    private Activity activity;

    private com.huawei.hms.hihealth.HealthRecordController healthRecordController;

    private Context context;

    public HealthRecordController(Activity activity, Context context) {
        this.healthRecordController = HuaweiHiHealth.getHealthRecordController(context);
        this.activity = activity;
        this.context = context;
    }

    @HMSLog
    @CordovaMethod
    public void addHealthRecord(final CorPack corPack, final JSONArray args, final Promise promise)
            throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);
        final JSONObject outerDataCollectorJson = jsonObject.getJSONObject("dataCollector");
        final JSONArray healthFieldsJson = jsonObject.getJSONArray("healthFields");

        final DataCollector outerDataCollector = Utils.toHealthDataCollector(outerDataCollectorJson,
                context.getPackageName());

        HealthRecord.Builder builder = new HealthRecord.Builder(outerDataCollector);

        if (jsonObject.has("options")) {
            final JSONObject readOptionsJSON = jsonObject.getJSONObject("options");
            if (readOptionsJSON.has("startTime") && readOptionsJSON.has("endTime") && readOptionsJSON.has("timeUnit")) {
                final String startTime = readOptionsJSON.getString("startTime");
                final String endTime = readOptionsJSON.getString("endTime");
                final String timeUnitParam = readOptionsJSON.getString("timeUnit");
                final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
                builder.setStartTime(Long.parseLong(startTime), timeUnit);
                builder.setEndTime(Long.parseLong(endTime), timeUnit);
                if (readOptionsJSON.has("metaData")) {
                    String metaData = readOptionsJSON.getString("metaData");
                    builder.setMetadata(metaData);
                }
            }
        }
        builder.setDataCollector(outerDataCollector);

        final JSONArray sampleSets = jsonObject.getJSONArray("sampleSets");
        List<SampleSet> sampleSetsList = new ArrayList<>();
        List<SamplePoint> samplePointList = new ArrayList<>();

        for (int i = 0; i < sampleSets.length(); i++) {

            JSONObject sampleSetJson = sampleSets.getJSONObject(i);
            JSONObject sampleSetDataCollectorJson = sampleSetJson.getJSONObject("dataCollector");

            DataCollector sampleSetDataCollector = Utils.toDataCollector(sampleSetDataCollectorJson,
                    context.getPackageName());

            SampleSet sampleSet = SampleSet.create(sampleSetDataCollector);
            JSONArray sampleSetPoint = sampleSetJson.getJSONArray("samplePoints");

            for (int j = 0; j < sampleSetPoint.length(); j++) {
                JSONObject innerDataCollectorJson = sampleSetPoint.getJSONObject(j).getJSONObject("dataCollector");
                JSONObject samplePointFromJson = sampleSetPoint.getJSONObject(j);
                DataCollector innerDataCollector = Utils.toDataCollector(innerDataCollectorJson,
                        context.getPackageName());
                final String startTime = samplePointFromJson.getString("startTime");
                final String endTime = samplePointFromJson.getString("endTime");
                final String timeUnitParam = samplePointFromJson.getString("timeUnit");
                final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

                SamplePoint samplePointForSet = sampleSet.createSamplePoint()
                        .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit);

                for (int k = 0; k < sampleSetJson.getJSONArray("fields").length(); k++) {
                    JSONObject innerFieldObject = sampleSetJson.getJSONArray("fields").getJSONObject(k);
                    final String fieldName = innerFieldObject.getString("fieldName");
                    final Object fieldValue = innerFieldObject.get("fieldValue");
                    final Field field = Utils.toFieldType(fieldName);
                    samplePointForSet = Utils.valueSetterSample(field, fieldValue, samplePointForSet);
                    sampleSet.addSample(samplePointForSet);
                }

                SamplePoint.Builder samplePointForListBuilder = new SamplePoint.Builder(innerDataCollector);

                for (int k = 0; k < samplePointFromJson.getJSONArray("fields").length(); k++) {
                    JSONObject innerFieldObject = samplePointFromJson.getJSONArray("fields").getJSONObject(k);
                    final String fieldName = innerFieldObject.getString("fieldName");
                    final Object fieldValue = innerFieldObject.get("fieldValue");
                    final Field field = Utils.toFieldType(fieldName);
                    samplePointForListBuilder = Utils.valueSetter(field, fieldValue, samplePointForListBuilder);

                }
                SamplePoint samplePointForList = samplePointForListBuilder.build();

                samplePointForList.setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit);
                samplePointList.add(samplePointForList);

            }
            sampleSetsList.add(sampleSet);

        }

        builder.setSubDataDetails(sampleSetsList).setSubDataSummary(samplePointList);

        HealthRecord.Builder hr = builder;
        for (int i = 0; i < healthFieldsJson.length(); i++) {
            String healthFieldName = healthFieldsJson.getJSONObject(i).getString("healthFieldName");
            Field healthRecordName = Utils.toHealthFieldType(healthFieldName);
            Object healthFieldValue = healthFieldsJson.getJSONObject(i).get("healthFieldValue");
            Utils.valueHealthRecordSetter(healthRecordName, healthFieldValue, hr);
        }

        HealthRecordInsertOptions opt = new HealthRecordInsertOptions.Builder().setHealthRecord(hr.build()).build();

        healthRecordController.addHealthRecord(opt).addOnSuccessListener(new OnSuccessListener<String>() {
            @Override
            public void onSuccess(String healthRecordId) {

                promise.success(healthRecordId);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                promise.error(e.getMessage());
            }
        });

    }

    @HMSLog
    @CordovaMethod
    public void deleteHealthRecord(final CorPack corPack, final JSONArray args, final Promise promise)
            throws JSONException {

        HealthRecordDeleteOptions.Builder deleteRequest = new HealthRecordDeleteOptions.Builder();

        final JSONObject jsonObject = args.getJSONObject(0);
        if (jsonObject.has("options")) {
            final JSONObject readOptionsJSON = jsonObject.getJSONObject("options");
            if (readOptionsJSON.has("startTime") && readOptionsJSON.has("endTime") && readOptionsJSON.has("timeUnit")) {
                final String startTime = readOptionsJSON.getString("startTime");
                final String endTime = readOptionsJSON.getString("endTime");
                final String timeUnitParam = readOptionsJSON.getString("timeUnit");
                final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
                deleteRequest.setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit);
            }
        }
        if (jsonObject.has("dataType")) {
            final String dataTypeParam = jsonObject.getString("dataType");
            final DataType dataType = Utils.toDataType(dataTypeParam);
            deleteRequest.setDataType(dataType);
        }
        if (jsonObject.has("isDeleteSubData")) {
            final Boolean isDeleteSubData = jsonObject.getBoolean("isDeleteSubData");
            deleteRequest.isDeleteSubData(isDeleteSubData);
        }
        if (jsonObject.has("dataTypes")) {
            final JSONArray jsonArrayDataTypes = jsonObject.getJSONArray("dataTypes");
            final List<JSONObject> list = new ArrayList<>();
            for (int i = 0; i < jsonArrayDataTypes.length(); i++) {
                list.add(jsonArrayDataTypes.getJSONObject(i));
            }
            List<DataType> subDataTypeList = new ArrayList<>();
            for (final JSONObject object : list) {
                final DataType dataType2 = Utils.toDataType(object.getString("dataType"));
                subDataTypeList.add(dataType2);
            }
            deleteRequest.setSubDataTypeList(subDataTypeList);
        }

        if (jsonObject.has("activityRecordIds")) {
            final JSONArray jsonArrayActivityRecordId = jsonObject.getJSONArray("activityRecordIds");

            final List<String> healthRecordIds = new ArrayList<String>();
            for (int i = 0; i < jsonArrayActivityRecordId.length(); i++) {
                healthRecordIds.add(jsonArrayActivityRecordId.getJSONObject(i).getString("activityRecord"));
            }
            deleteRequest.setHealthRecordIds(healthRecordIds);

        } else {
            Log.e(TAG, "activityRecordIds can not be null");
            promise.error("activityRecordIds can not be null");
        }

        // Call deleteHealthRecord to delete the health record.
        Task<Void> deleteTask = healthRecordController.deleteHealthRecord(deleteRequest.build());
        deleteTask.addOnSuccessListener(new OnSuccessListener<Void>() {
            @Override
            public void onSuccess(Void aVoid) {
                Log.i("HealthRecords", "HealthRecords delete was successful!");
                promise.success();
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                String errorCode = e.getMessage();
                Log.i("HealthRecords", errorCode + ": ");
                promise.error(e.getMessage());
            }
        });

    }

    @HMSLog
    @CordovaMethod
    public void getHealthRecord(final CorPack corPack, final JSONArray args, final Promise promise)
            throws JSONException {

        final JSONObject jsonObject = args.getJSONObject(0);

        final JSONObject readOptionsJSON = jsonObject.getJSONObject("options");
        final String startTime = readOptionsJSON.getString("startTime");
        final String endTime = readOptionsJSON.getString("endTime");
        final String timeUnitParam = readOptionsJSON.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        final String dataTypeParam = jsonObject.getString("dataType");
        final DataType dataType = Utils.toHealthDataType(dataTypeParam);

        final JSONArray jsonArrayDataTypes = jsonObject.getJSONArray("dataTypes");
        final List<JSONObject> list = new ArrayList<>();
        for (int i = 0; i < jsonArrayDataTypes.length(); i++) {
            list.add(jsonArrayDataTypes.getJSONObject(i));
        }
        List<DataType> subDataTypeList = new ArrayList<>();
        for (final JSONObject object : list) {
            final DataType dataType2 = Utils.toDataType(object.getString("dataType"));
            subDataTypeList.add(dataType2);
        }

        HealthRecordReadOptions healthRecordReadOptions = new HealthRecordReadOptions.Builder().setTimeInterval(
                Long.parseLong(startTime), Long.parseLong(endTime), timeUnit)
                .readHealthRecordsFromAllApps()
                .readByDataType(dataType)
                .setSubDataTypeList(subDataTypeList)
                .build();

        Task<HealthRecordReply> task = healthRecordController.getHealthRecord(healthRecordReadOptions);

        task.addOnSuccessListener(HealthRecordReply -> {
            Log.i(TAG, "Get ActivityRecord was successful!");
            final JSONArray healthRecords = new JSONArray();
            final List<HealthRecord> healthRecordsList = HealthRecordReply.getHealthRecords();
            for (final HealthRecord healthRecord : healthRecordsList) {
                healthRecords.put(Utils.hrToJson(healthRecord, timeUnit));
            }
            promise.success(healthRecords);
        }).addOnFailureListener(e -> {
            final String errorCode = e.getMessage();
            final String errorMsg = HiHealthStatusCodes.getStatusCodeMessage(Integer.parseInt(errorCode));
            Log.i(TAG, errorCode + ": " + errorMsg);
            promise.error(errorCode + ": " + errorMsg);
        });

    }

    @HMSLog
    @CordovaMethod
    public void updateHealthRecord(final CorPack corPack, final JSONArray args, final Promise promise)
            throws JSONException {

        final JSONObject jsonObject = args.getJSONObject(0);

        final JSONObject outerDataCollectorJson = jsonObject.getJSONObject("dataCollector");
        final JSONArray healthFieldsJson = jsonObject.getJSONArray("healthFields");

        final DataCollector outerDataCollector = Utils.toHealthDataCollector(outerDataCollectorJson,
                context.getPackageName());

        HealthRecord.Builder builder = new HealthRecord.Builder(outerDataCollector);

        if (jsonObject.has("options")) {
            final JSONObject readOptionsJSON = jsonObject.getJSONObject("options");
            if (readOptionsJSON.has("startTime") && readOptionsJSON.has("endTime") && readOptionsJSON.has("timeUnit")) {
                final String startTime = readOptionsJSON.getString("startTime");
                final String endTime = readOptionsJSON.getString("endTime");
                final String timeUnitParam = readOptionsJSON.getString("timeUnit");
                final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
                builder.setStartTime(Long.parseLong(startTime), timeUnit);
                builder.setEndTime(Long.parseLong(endTime), timeUnit);
                if (readOptionsJSON.has("metaData")) {
                    String metaData = readOptionsJSON.getString("metaData");
                    builder.setMetadata(metaData);
                }
            }
        }
        builder.setDataCollector(outerDataCollector);

        final JSONArray sampleSets = jsonObject.getJSONArray("sampleSets");
        List<SampleSet> sampleSetsList = new ArrayList<>();
        List<SamplePoint> samplePointList = new ArrayList<>();

        for (int i = 0; i < sampleSets.length(); i++) {

            JSONObject sampleSetJson = sampleSets.getJSONObject(i);
            JSONObject sampleSetDataCollectorJson = sampleSetJson.getJSONObject("dataCollector");

            DataCollector sampleSetDataCollector = Utils.toDataCollector(sampleSetDataCollectorJson,
                    context.getPackageName());

            SampleSet sampleSet = SampleSet.create(sampleSetDataCollector);
            JSONArray sampleSetPoint = sampleSetJson.getJSONArray("samplePoints");

            for (int j = 0; j < sampleSetPoint.length(); j++) {
                JSONObject innerDataCollectorJson = sampleSetPoint.getJSONObject(j).getJSONObject("dataCollector");
                JSONObject samplePointFromJson = sampleSetPoint.getJSONObject(j);
                DataCollector innerDataCollector = Utils.toDataCollector(innerDataCollectorJson,
                        context.getPackageName());
                final String startTime = samplePointFromJson.getString("startTime");
                final String endTime = samplePointFromJson.getString("endTime");
                final String timeUnitParam = samplePointFromJson.getString("timeUnit");
                final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

                SamplePoint samplePointForSet = sampleSet.createSamplePoint()
                        .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit);

                for (int k = 0; k < sampleSetJson.getJSONArray("fields").length(); k++) {
                    JSONObject innerFieldObject = sampleSetJson.getJSONArray("fields").getJSONObject(k);
                    final String fieldName = innerFieldObject.getString("fieldName");
                    final Object fieldValue = innerFieldObject.get("fieldValue");
                    final Field field = Utils.toFieldType(fieldName);
                    samplePointForSet = Utils.valueSetterSample(field, fieldValue, samplePointForSet);
                    sampleSet.addSample(samplePointForSet);
                }

                SamplePoint.Builder samplePointForListBuilder = new SamplePoint.Builder(innerDataCollector);

                for (int k = 0; k < samplePointFromJson.getJSONArray("fields").length(); k++) {
                    JSONObject innerFieldObject = samplePointFromJson.getJSONArray("fields").getJSONObject(k);
                    final String fieldName = innerFieldObject.getString("fieldName");
                    final Object fieldValue = innerFieldObject.get("fieldValue");
                    final Field field = Utils.toFieldType(fieldName);
                    samplePointForListBuilder = Utils.valueSetter(field, fieldValue, samplePointForListBuilder);

                }
                SamplePoint samplePointForList = samplePointForListBuilder.build();

                samplePointForList.setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit);
                samplePointList.add(samplePointForList);

            }
            sampleSetsList.add(sampleSet);
        }

        builder.setSubDataDetails(sampleSetsList).setSubDataSummary(samplePointList);

        HealthRecord.Builder hr = builder;
        for (int i = 0; i < healthFieldsJson.length(); i++) {
            String healthFieldName = healthFieldsJson.getJSONObject(i).getString("healthFieldName");
            Field healthRecordName = Utils.toHealthFieldType(healthFieldName);
            Object healthFieldValue = healthFieldsJson.getJSONObject(i).get("healthFieldValue");
            Utils.valueHealthRecordSetter(healthRecordName, healthFieldValue, hr);
        }

        final String healthRecordId = jsonObject.getString("healthRecordId");
        HealthRecordUpdateOptions updateOptions = new HealthRecordUpdateOptions.Builder().setHealthRecord(hr.build())
                .setHealthRecordId(healthRecordId)
                .build();

        healthRecordController.updateHealthRecord(updateOptions).addOnSuccessListener(result -> {
            Log.i(TAG, "updateHealthRecord success");
            promise.success();
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {

    }

}
