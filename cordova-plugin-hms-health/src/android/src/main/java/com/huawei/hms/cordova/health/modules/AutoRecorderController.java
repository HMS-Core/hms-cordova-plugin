/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.SamplePoint;
import com.huawei.hms.hihealth.options.OnSamplePointListener;

import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.concurrent.TimeUnit;

public class AutoRecorderController extends CordovaBaseModule {
    private static final String TAG = AutoRecorderController.class.getSimpleName();

    private final Activity activity;

    private final com.huawei.hms.hihealth.AutoRecorderController controller;

    private CorPack corPack;

    private boolean isRecording = false;

    OnSamplePointListener onSamplePointListener = new OnSamplePointListener() {
        @Override
        public void onSamplePoint(final SamplePoint samplePoint) {
            if (isRecording) {
                corPack.getEventRunner()
                    .sendEvent("samplepoint", Utils.getJSONFromSamplePoint(samplePoint, TimeUnit.MILLISECONDS));
            }
        }
    };

    public AutoRecorderController(final Activity activity) {
        this.activity = activity;
        final HiHealthOptions options = com.huawei.hms.hihealth.HiHealthOptions.builder().build();
        this.controller = HuaweiHiHealth.getAutoRecorderController(activity);
    }

    @HMSLog
    @CordovaMethod
    public void startRecord(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.corPack = corPack;
        final JSONObject jsonObject = args.getJSONObject(0);
        final String dataTypeParam = jsonObject.getString("dataType");
        final DataType dataType = Utils.toDataType(dataTypeParam);

        controller.startRecord(dataType, onSamplePointListener).addOnCompleteListener((taskResult) -> {
            isRecording = true;
            if (taskResult.isSuccessful()) {
                Log.i("AutoRecorder", "onComplete startRecordByType Successful");
                final PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                pluginResult.setKeepCallback(false);
            } else {
                Log.i("AutoRecorder", "onComplete startRecordByType Failed");
                final PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR,
                    taskResult.getException().toString());
                pluginResult.setKeepCallback(false);
            }
        }).addOnSuccessListener((result) -> {
            isRecording = true;
            Log.i(TAG, "onSuccess startRecordByType Successful");
            final PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
            pluginResult.setKeepCallback(true);
        }).addOnFailureListener((e) -> {
            Log.i(TAG, "onFailure startRecordByType Failed: " + e.getMessage());
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    public void stopRecord(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject jsonObject = args.getJSONObject(0);
        final String dataTypeParam = jsonObject.getString("dataType");
        final DataType dataType = Utils.toDataType(dataTypeParam);

        final com.huawei.hms.hihealth.AutoRecorderController autoRecorderController
            = HuaweiHiHealth.getAutoRecorderController(activity);

        final Task<Void> stopRecordTask = autoRecorderController.stopRecord(dataType, onSamplePointListener);

        stopRecordTask.addOnCompleteListener(taskResult -> {
            isRecording = false;
            if (taskResult.isSuccessful()) {
                Log.i(TAG, "onComplete stopRecordByType Successful");
                final PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                pluginResult.setKeepCallback(false);
                promise.sendPluginResult(pluginResult);
            } else {
                Log.i(TAG, "onComplete stopRecordByType Failed");
                final PluginResult pluginResult = new PluginResult(PluginResult.Status.ERROR,
                    taskResult.getException().toString());
                pluginResult.setKeepCallback(false);
                promise.sendPluginResult(pluginResult);
            }
        });
        stopRecordTask.addOnSuccessListener(result -> {
            isRecording = false;
            Log.i(TAG, "onSuccess stopRecordByType Successful");
            final PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
            pluginResult.setKeepCallback(true);
            promise.sendPluginResult(pluginResult);
        });
        stopRecordTask.addOnFailureListener((e) -> {
            Log.i(TAG, "onFailure stopRecordByType Failed: " + e.getMessage());
            promise.error(e.getMessage());
        });
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
    }

}
