/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.nearby.modules;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.nearby.basef.handler.CorPack;
import com.huawei.hms.cordova.nearby.basef.handler.Promise;
import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.CordovaMethod;
import com.huawei.hms.cordova.nearby.basef.HMSLog;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.beacon.BeaconEngine;
import com.huawei.hms.nearby.beacon.BeaconMsgCondition;
import com.huawei.hms.nearby.beacon.BeaconPicker;
import com.huawei.hms.nearby.beacon.GetBeaconOption;
import com.huawei.hms.nearby.beacon.RawBeaconCondition;
import com.huawei.hms.nearby.beacon.TriggerOption;
import com.huawei.hms.nearby.message.BeaconInfo;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Locale;

public class HMSBeacon extends CordovaBaseModule {

    private Activity activity;
    private BeaconPicker beaconPicker;
    private BeaconBroadcastReceiver beaconReceiver;
    private BeaconEngine beaconEngine;
    public static final String ACTION_SCAN_ONFOUND_RESULT = "com.huawei.hms.nearby.action.ONFOUND_BEACON";
    public HMSBeacon(Activity activity) {
        this.activity = activity;
        beaconEngine = Nearby.getBeaconEngine(activity);
    }

    @HMSLog
    @CordovaMethod
    public void registerScanTask(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {

        String beaconId = null;
        Integer beaconType = 1;
        String namespace = null;
        String type = null;
        JSONObject json = args.getJSONObject(0);
        if (json.has("beaconId")) {
            beaconId = json.getString("beaconId");
        }
        if (json.has("namespace")) {
            namespace = json.getString("namespace");
        }
        if (json.has("beaconType")) {
            beaconType = json.getInt("beaconType");
        }
        if (json.has("type")) {
            type = json.getString("type");
        }

        TriggerOption triggerOption = new TriggerOption.Builder().setTriggerMode(2).setTriggerClassName(HMSBeacon.BeaconBroadcastReceiver.class.getName()).build();
        Intent intent = new Intent();
        intent.putExtra(GetBeaconOption.KEY_TRIGGER_OPTION,triggerOption);


        if(beaconId != null  && namespace == null && type == null){
            beaconPicker = new BeaconPicker.Builder().includeBeaconId(beaconId,beaconType).build();

        } else if (beaconId == null && namespace != null && type != null) {
            beaconPicker = new BeaconPicker.Builder().includeNamespaceType(namespace,type).build();

        } else if (beaconId != null && namespace != null && type != null) {
            beaconPicker = new BeaconPicker.Builder().includeNamespaceType(namespace,type,beaconId,beaconType).build();

        } else {
            promise.error(String.format(Locale.ENGLISH, "Invalid values"));
        }

        GetBeaconOption getBeaconOption = new GetBeaconOption.Builder().picker(beaconPicker).build();

        Task<Void> register = beaconEngine.registerScanTask(intent,getBeaconOption);
        startRegisterReceiver(register,"registerScanTask",promise);
    }

    @SuppressLint("UnspecifiedRegisterReceiverFlag")
    private void startRegisterReceiver(Task<Void> taskRegister, String methodName, final Promise promise){
        taskRegister.addOnCompleteListener(task -> {
            if(task.isSuccessful()) {
                if(beaconReceiver != null) {
                    activity.unregisterReceiver(beaconReceiver);
                }
                beaconReceiver = new BeaconBroadcastReceiver(promise, methodName);
                IntentFilter intentBeaconFilter = new IntentFilter(ACTION_SCAN_ONFOUND_RESULT);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU){
                    activity.registerReceiver(beaconReceiver, intentBeaconFilter, Context.RECEIVER_EXPORTED);
                } else {
                    activity.registerReceiver(beaconReceiver, intentBeaconFilter);
                }

            }
        }).addOnFailureListener(e -> Log.e(methodName,"Error RegisterReceiver"));
    }

    @HMSLog
    @CordovaMethod
    public void unRegisterScanTask(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        TriggerOption triggerOption = new TriggerOption.Builder().setTriggerMode(2).setTriggerClassName(HMSBeacon.BeaconBroadcastReceiver.class.getName()).build();
        Intent intent = new Intent();
        intent.putExtra(GetBeaconOption.KEY_TRIGGER_OPTION,triggerOption);


        Nearby.getBeaconEngine(activity.getApplicationContext()).unRegisterScanTask(intent).addOnSuccessListener(unused -> {
            promise.success();
        }).addOnFailureListener(e -> {
            promise.error(String.format(Locale.ENGLISH, "unRegisterScanTask: %s", e.getMessage()));
        });

    }

    @HMSLog
    @CordovaMethod
    public void getBeaconMsgConditions(final CorPack corPack, JSONArray args, final Promise promise) {
        List<BeaconMsgCondition> beaconMsgConditionList;
        JSONArray jsonArray = new JSONArray();

        if(beaconPicker == null){
            promise.error("BeaconMsgError: Register ERROR");
        } else {
            beaconMsgConditionList = beaconPicker.getBeaconMsgConditions();
            for(int i=0; i < beaconMsgConditionList.size(); i++){
                JSONObject json = new JSONObject();
                try {
                    json.put("beaconId", beaconMsgConditionList.get(i).getBeaconId());
                    json.put("beaconType", beaconMsgConditionList.get(i).getBeaconType());
                    json.put("namespace", beaconMsgConditionList.get(i).getNamespace());
                    json.put("type", beaconMsgConditionList.get(i).getType());
                    jsonArray.put(json);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            promise.success(jsonArray);
        }
    }

    @HMSLog
    @CordovaMethod
    public void getRawBeaconConditions(final CorPack corPack, JSONArray args, final Promise promise) {
        List<RawBeaconCondition> rawBeaconConditionList;
        JSONArray jsonArray = new JSONArray();

        if(beaconPicker == null) {
            promise.error("RawBeaconError: Register ERROR");
        } else {
            rawBeaconConditionList = beaconPicker.getRawBeaconConditions();
            for(int i=0; i < rawBeaconConditionList.size(); i++){
                JSONObject json = new JSONObject();
                try {
                    json.put("beaconId", rawBeaconConditionList.get(i).getBeaconId());
                    json.put("beaconType", rawBeaconConditionList.get(i).getBeaconType());
                    jsonArray.put(json);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            promise.success(jsonArray);
        }
    }

    @HMSLog
    @CordovaMethod
    public void getRawBeaconConditionsWithBeaconType(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        List<RawBeaconCondition> rawBeaconConditionList;
        Integer beaconType = 0;
        JSONArray jsonArray = new JSONArray();

        JSONObject jsonObject = args.getJSONObject(0);
        if (jsonObject.has("beaconType")) {
            beaconType = jsonObject.getInt("beaconType");
        }
        if(beaconPicker == null){
            promise.error("RawBeaconError: Register ERROR");
        } else {
            rawBeaconConditionList = beaconPicker.getRawBeaconConditions(beaconType);
            for(int i=0; i < rawBeaconConditionList.size(); i++){
                JSONObject json = new JSONObject();
                try {
                    json.put("beaconId", rawBeaconConditionList.get(i).getBeaconId());
                    json.put("beaconType", rawBeaconConditionList.get(i).getBeaconType());
                    jsonArray.put(json);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            promise.success(jsonArray);
        }
    }



    public class BeaconBroadcastReceiver extends BroadcastReceiver {
        public static final String TAG = "BeaconBroadcastReceiver";
        public static final String ACTION_SCAN_ONFOUND_RESULT = "com.huawei.hms.nearby.action.ONFOUND_BEACON";
        public static final String KEY_SCAN_ONFOUND_FLAG = "SCAN_ONFOUND_FLAG";
        public static final String KEY_SCAN_BEACON_DATA = "SCAN_BEACON";
        private final Promise promise;
        private final String methodName;
        public BeaconBroadcastReceiver(Promise promise, String methodName) {
            this.promise = promise;
            this.methodName = methodName;
        }

        @Override
        public void onReceive(Context context, Intent intent) {
            if(intent == null){
                Log.e(TAG,"intent is null");
                return;
            }

            Log.i(TAG,"onReceive:" + intent);
            String action = intent.getAction();

            if(ACTION_SCAN_ONFOUND_RESULT.equals(action)){
                int onFound = intent.getIntExtra(KEY_SCAN_ONFOUND_FLAG, -1);
                Log.i(TAG, "onReceive onFound, isFound:" + onFound);
                List<BeaconInfo> beaconIds = intent.getParcelableArrayListExtra(KEY_SCAN_BEACON_DATA);
                if(beaconIds == null) {
                    Log.w(TAG,"beacon Ids is null");
                    return;
                }
                for(BeaconInfo beacon : beaconIds) {
                    // promise resolve
                    promise.success(beacon.getBeaconId());
                }
            }
        }
    }


}
