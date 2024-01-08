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
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.health.HMSHealth;
import com.huawei.hms.cordova.health.OnActivityResultCallback;
import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.JSONUtils;
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.SettingController;
import com.huawei.hms.hihealth.data.Field;
import com.huawei.hms.hihealth.options.DataTypeAddOptions;
import com.huawei.hms.hihealth.result.HealthKitAuthResult;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class SettingsController extends CordovaBaseModule implements OnActivityResultCallback {

    private static final String TAG = SettingsController.class.getSimpleName();

    private static final int REQUEST_AUTH = 8888;

    private SettingController settingController;

    private Activity activity;

    private CordovaPlugin plugin;

    private Promise mPromise;

    public SettingsController(HMSHealth hmsHealth, Context context, Activity activity) {
        this.settingController = HuaweiHiHealth.getSettingController(activity);
        this.activity = activity;
        plugin = hmsHealth;
        hmsHealth.setOnActivityResultCallback(this);
    }

    @HMSLog
    @CordovaMethod
    public void addNewDataType(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);

        String dataTypeName = jsonObject.getString("dataTypeName");
        String field = jsonObject.getString("fieldValue");

        Field selectedField = Field.newStringField(field);

        DataTypeAddOptions dataTypeAddOptions = new DataTypeAddOptions.Builder().setName(dataTypeName)
            .addField(selectedField)
            .build();
        settingController.addDataType(dataTypeAddOptions)
            .addOnFailureListener((e) -> promise.error(e.getMessage()))
            .addOnCompleteListener((task) -> {
                if (task.isSuccessful()) {
                    promise.success();
                } else {
                    Log.i("TAG", "exception is " + task.getException().getMessage());
                    promise.error(task.getException().getMessage());
                }
            });
    }

    @HMSLog
    @CordovaMethod
    public void readDataType(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String dataTypeName = args.getString(0);

        settingController.readDataType(dataTypeName).addOnFailureListener((e) -> {
            Log.i("TAG", "Read dataType failed");
            promise.error(e.getMessage());
        }).addOnCompleteListener((task) -> {
            if (task.isSuccessful()) {
                Log.i("TAG", "DataType : " + task.getResult());
                promise.success();
            } else {
                Log.i("TAG", "GetException is " + task.getException().getMessage());
                promise.error(task.getException().getMessage());
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void disableHiHealth(final CorPack corPack, JSONArray args, final Promise promise) {
        settingController.disableHiHealth()
            .addOnFailureListener((e) -> promise.error(e.getMessage()))
            .addOnCompleteListener((task) -> {
                if (task.isSuccessful()) {
                    promise.success();
                } else {
                    Log.i("TAG", "GetException is " + task.getException().getMessage());
                    promise.error(task.getException().getMessage());
                }
            });
    }

    @HMSLog
    @CordovaMethod
    public void getHealthAppAuthorization(final CorPack corPack, JSONArray args, final Promise promise) {
        settingController.getHealthAppAuthorization()
            .addOnFailureListener((e) -> promise.error(e.getMessage()))
            .addOnCompleteListener((task) -> {
                if (task.isSuccessful()) {
                    promise.success(task.isSuccessful());
                } else {
                    Log.i("TAG", "GetException is " + task.getException().getMessage());
                    promise.error(task.getException().getMessage());
                }
            });
    }

    @HMSLog
    @CordovaMethod
    public void checkHealthAppAuthorization(final CorPack corPack, JSONArray args, final Promise promise) {
        settingController.checkHealthAppAuthorization()
            .addOnFailureListener((e) -> promise.error(e.getMessage()))
            .addOnCompleteListener((task) -> {
                if (task.isSuccessful()) {
                    promise.success(task.isSuccessful());
                } else {
                    Log.i("TAG", "GetException is " + task.getException().getMessage());
                    promise.error(task.getException().getMessage());
                }
            });
    }

    @HMSLog
    @CordovaMethod
    public void requestAuthorizationIntent(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);
        JSONArray scopeJsonArray = jsonObject.getJSONArray("scopes");
        Boolean enableHealthAuth = jsonObject.getBoolean("enableHealthAuth");
        List<String> scopeList = JSONUtils.mapJSONArray(scopeJsonArray);
        String[] scopes = JSONUtils.toStringArray(scopeList);

        Intent intent = settingController.requestAuthorizationIntent(scopes, enableHealthAuth);
        mPromise = promise;
        if (intent != null) {
            plugin.cordova.setActivityResultCallback(plugin);
            activity.startActivityForResult(intent, REQUEST_AUTH);

        } else {
            promise.error("null object");
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if (requestCode == REQUEST_AUTH) {
            try {
                HealthKitAuthResult result = HuaweiHiHealth.getSettingController(activity)
                    .parseHealthKitAuthResultFromIntent(intent);
                Log.i("onActivityResult:", result.toJson());
                
                mPromise.success(result.toJson());
            } catch (JSONException e) {
                Log.i(TAG, e.getMessage());
            }
        } else {
            Log.i("TAG", "onActivityResult Error " + resultCode);

        }
    }

}
