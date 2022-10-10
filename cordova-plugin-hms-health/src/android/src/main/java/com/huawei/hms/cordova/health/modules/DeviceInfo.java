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

import android.content.Context;
import android.content.Intent;

import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Utils;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DeviceInfo extends CordovaBaseModule {

    private static final String TAG = DeviceInfo.class.getSimpleName();

    private final Context context;

    public DeviceInfo(Context context) {
        this.context = context;
    }

    public static boolean check(JSONObject jsonObject) {

        if (jsonObject.isNull("deviceManufacturer")) {
            return false;
        }
        if (jsonObject.isNull("modelName")) {
            return false;
        }
        if (jsonObject.isNull("uuid")) {
            return false;
        }
        if (jsonObject.isNull("deviceType")) {
            return false;
        }
        return true;
    }

    @HMSLog
    @CordovaMethod
    public void createDeviceInfo(final CorPack corPack, final JSONArray args, final Promise promise)
            throws JSONException {
        com.huawei.hms.hihealth.data.DeviceInfo deviceInfo = null;
        final JSONObject appInfoJson = args.getJSONObject(0);
        String deviceManufacturer = null;
        String modelName = null;
        String uuid = null;
        Integer deviceType = null;
        Integer platformType;
        Boolean isBleDevice;
        try {
            deviceManufacturer = appInfoJson.getString("deviceManufacturer");
            modelName = appInfoJson.getString("modelName");
            uuid = appInfoJson.getString("uuid");
            deviceType = appInfoJson.getInt("deviceType");
        } catch (JSONException e) {
            promise.error(e.getMessage());
        }
        boolean check = check(appInfoJson);

        if (check) {
            if (!appInfoJson.has("isBleDevice") && !appInfoJson.has("platformType")) {
                if (deviceType != null) {
                    deviceInfo = new com.huawei.hms.hihealth.data.DeviceInfo(deviceManufacturer, modelName, uuid,
                            deviceType);
                }

            }
            if (appInfoJson.has("platformType") && !appInfoJson.has("isBleDevice")) {
                platformType = appInfoJson.getInt("platformType");
                if (platformType != null && deviceType != null) {
                    deviceInfo = new com.huawei.hms.hihealth.data.DeviceInfo(deviceManufacturer, modelName, uuid,
                            deviceType, platformType);
                }
            }
            if (appInfoJson.has("platformType") && appInfoJson.has("isBleDevice")) {
                platformType = appInfoJson.getInt("platformType");
                isBleDevice = appInfoJson.getBoolean("isBleDevice");

                if (platformType != null && isBleDevice != null && deviceType != null) {

                    deviceInfo = new com.huawei.hms.hihealth.data.DeviceInfo(deviceManufacturer, modelName, uuid,
                            deviceType, platformType, isBleDevice);
                }
            }

        } else {
            promise.error("You can't set null value");
        }

        try {
            JSONObject deviceInfoJson = Utils.getJSONFromDeviceInfo(deviceInfo);
            promise.success(deviceInfoJson);
        } catch (IllegalArgumentException e) {
            promise.error("Null deviInfo object");
        }

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {

    }
}
