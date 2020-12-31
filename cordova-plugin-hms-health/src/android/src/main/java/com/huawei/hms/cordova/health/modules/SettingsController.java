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

import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.hihealth.HiHealthOptions;
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.SettingController;
import com.huawei.hms.hihealth.data.Field;
import com.huawei.hms.hihealth.options.DataTypeAddOptions;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class SettingsController extends CordovaBaseModule {
    private AuthHuaweiId mSignInHuaweiId;
    private SettingController settingController;

    public SettingsController(Context context) {
        HiHealthOptions options = com.huawei.hms.hihealth.HiHealthOptions.builder().build();
        this.mSignInHuaweiId = HuaweiIdAuthManager.getExtendedAuthResult(options);
        this.settingController = HuaweiHiHealth.getSettingController(context, this.mSignInHuaweiId);
    }

    @HMSLog
    @CordovaMethod
    public void addNewDataType(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);

        String dataTypeName = jsonObject.getString("dataTypeName");
        String field = jsonObject.getString("fieldValue");

        Field selectedField = Field.newStringField(field);

        DataTypeAddOptions dataTypeAddOptions =
                new DataTypeAddOptions.Builder().setName(dataTypeName).addField(selectedField).build();

        // Add a new data type.
        // Display the returned result on the phone screen.
        settingController
                .addDataType(dataTypeAddOptions)
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
    public void disableHiHealth(final CorPack corPack, JSONArray args, final Promise promise) {
        settingController
                .disableHiHealth()
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
    public void readDataType(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String dataTypeName = args.getString(0);

        settingController
                .readDataType(dataTypeName)
                .addOnFailureListener((e) -> {
                    Log.i("TAG", "Read dataType failed");
                    promise.error(e.getMessage());
                })
                .addOnCompleteListener((task) -> {
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
    public void checkHealthAppAuthorization(final CorPack corPack, JSONArray args, final Promise promise) {
        settingController
                .checkHealthAppAuthorization()
                .addOnFailureListener((e) -> promise.error(e.getMessage())).addOnCompleteListener((task) -> {
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
    public void getHealthAppAuthorization(final CorPack corPack, JSONArray args, final Promise promise) {
        settingController
                .getHealthAppAuthorization()
                .addOnFailureListener((e) -> promise.error(e.getMessage())).addOnCompleteListener((task) -> {
                    if (task.isSuccessful()) {
                        promise.success(task.isSuccessful());
                    } else {
                        Log.i("TAG", "GetException is " + task.getException().getMessage());
                        promise.error(task.getException().getMessage());
                    }
                });
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {}
}

