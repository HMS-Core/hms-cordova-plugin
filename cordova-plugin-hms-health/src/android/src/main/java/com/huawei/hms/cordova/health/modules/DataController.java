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
import com.huawei.hms.hihealth.HiHealthOptions;
import com.huawei.hms.hihealth.data.DataCollector;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.SampleSet;
import com.huawei.hms.hihealth.options.DeleteOptions;
import com.huawei.hms.hihealth.options.ReadOptions;
import com.huawei.hms.hihealth.options.UpdateOptions;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DataController extends CordovaBaseModule {
    private final Context context;
    private final String TAG = DataController.class.getSimpleName();
    private com.huawei.hms.hihealth.DataController dataController;

    public DataController(final Context context) {
        this.context = context;
    }

    @HMSLog
    @CordovaMethod
    public void initDataController(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONArray jsonArray = args.getJSONArray(0);

        final HiHealthOptions.Builder hiHealthOptions = com.huawei.hms.hihealth.HiHealthOptions.builder();

        final List<JSONObject> list = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            list.add(jsonArray.getJSONObject(i));
        }

        for (final JSONObject object : list) {
            final DataType dataType = Utils.toDataType(object.getString("dataType"));
            final int hiHealthOption = object.getInt("hiHealthOption");
            hiHealthOptions.addDataType(Objects.requireNonNull(dataType), hiHealthOption);
        }

        final AuthHuaweiId signInHuaweiId = HuaweiIdAuthManager.getExtendedAuthResult(hiHealthOptions.build());
        dataController = com.huawei.hms.hihealth.HuaweiHiHealth.getDataController(context, signInHuaweiId);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void read(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);
        final JSONObject dataCollectorJSON = jsonObject.getJSONObject("dataCollector");
        final JSONObject readOptionsJSON = jsonObject.getJSONObject("options");

        final String startTime = readOptionsJSON.getString("startTime");
        final String endTime = readOptionsJSON.getString("endTime");
        final String timeUnitParam = readOptionsJSON.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        final DataCollector dataCollector = Utils.toDataCollector(dataCollectorJSON, context.getPackageName());

        final ReadOptions readOptions = new ReadOptions.Builder().read(dataCollector)
            .setTimeRange(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit)
            .build();

        final Task<com.huawei.hms.hihealth.result.ReadReply> readReplyTask = dataController.read(readOptions);

        readReplyTask.addOnSuccessListener(readReply -> {
            Log.i(TAG, "Success read a SampleSets from HMS core");
            promise.success(Utils.getJSONFromReadReply(readReply, timeUnit, dataCollector.getDataType()));
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void insert(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);
        final JSONObject dataCollectorJSON = jsonObject.getJSONObject("dataCollector");
        final JSONArray sampleSetJSON = jsonObject.getJSONArray("sampleSet");
        final DataCollector dataCollector = Utils.toDataCollector(dataCollectorJSON, context.getPackageName());
        final SampleSet sampleSet = Utils.toSampleSet(sampleSetJSON, dataCollector, context.getPackageName());

        final Task<Void> insertTask = dataController.insert(sampleSet);

        insertTask.addOnSuccessListener(result -> {
            Log.i(TAG, "Success insert a SampleSet into HMS core");
            promise.success();
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void update(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);
        final JSONObject dataCollectorJSON = jsonObject.getJSONObject("dataCollector");
        final JSONObject updateOptions = jsonObject.getJSONObject("options");
        final JSONArray sampleSetJSON = jsonObject.getJSONArray("sampleSet");

        final String startTime = updateOptions.getString("startTime");
        final String endTime = updateOptions.getString("endTime");
        final String timeUnitParam = updateOptions.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        final DataCollector dataCollector = Utils.toDataCollector(dataCollectorJSON, context.getPackageName());
        final SampleSet sampleSet = Utils.toSampleSet(sampleSetJSON, dataCollector, context.getPackageName());

        final UpdateOptions updateOption = new UpdateOptions.Builder()
            .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit)
            .setSampleSet(sampleSet)
            .build();

        final Task<Void> updateTask = dataController.update(updateOption);
        updateTask.addOnSuccessListener(result -> {
            Log.i(TAG, "Success update sample data from HMS core");
            promise.success();
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void deleteData(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject;
        jsonObject = args.getJSONObject(0);
        final JSONObject dataCollectorJSON;
        dataCollectorJSON = jsonObject.getJSONObject("dataCollector");
        final JSONObject deleteOptionsJSON = jsonObject.getJSONObject("options");

        final String startTime = deleteOptionsJSON.getString("startTime");
        final String endTime = deleteOptionsJSON.getString("endTime");
        final String timeUnitParam = deleteOptionsJSON.getString("timeUnit");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

        final DataCollector dataCollector = Utils.toDataCollector(dataCollectorJSON, context.getPackageName());

        final DeleteOptions deleteOptions = new DeleteOptions.Builder().addDataCollector(dataCollector)
            .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit).build();

        final Task<Void> deleteTask = dataController.delete(deleteOptions);
        deleteTask.addOnSuccessListener(result -> {
            Log.i(TAG, "Success delete sample data from HMS core");
            promise.success();
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void readTodaySummation(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String dataTypeStr = args.getString(0);
        final DataType dataType = Utils.toDataType(dataTypeStr);

        final Task<SampleSet> todaySummationTask = dataController.readTodaySummation(dataType);
        todaySummationTask.addOnSuccessListener(sampleSet -> {
            Log.i(TAG, "Success read today summation from HMS core");
            promise.success(Utils.getJSONFromSampleSet(sampleSet, TimeUnit.MILLISECONDS));
        });
        todaySummationTask.addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void readDailySummation(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);

        final int startDate = jsonObject.getInt("startDate");
        final int endDate = jsonObject.getInt("endDate");

        final String dataTypeStr = jsonObject.getString("dataType");
        final DataType dataType = Utils.toDataType(dataTypeStr);

        final Task<SampleSet> dailySummationTask = dataController.readDailySummation(dataType, startDate, endDate);
        dailySummationTask.addOnSuccessListener(sampleSet -> {
            Log.i(TAG, "Success read daily summation from HMS core");
            promise.success(Utils.getJSONFromSampleSet(sampleSet, TimeUnit.MILLISECONDS));
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void clearAll(final CorPack corPack, final JSONArray args, final Promise promise) {
        final Task<Void> syncTask = dataController.clearAll();
        syncTask.addOnSuccessListener(result -> {
            Log.i(TAG, "clearAll success");
            promise.success();
        }).addOnFailureListener((e) -> promise.error(e.getMessage()));
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
    }
}

