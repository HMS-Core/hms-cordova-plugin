/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.location;

import com.huawei.hms.cordova.location.backend.interfaces.HMSCallback;
import com.huawei.hms.cordova.location.backend.providers.ActivityIdentificationProvider;
import com.huawei.hms.cordova.location.helpers.CordovaCallback;
import com.huawei.hms.cordova.location.helpers.CordovaUtils;
import com.huawei.hms.cordova.location.helpers.HMSCordovaPlugin;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSActivityIdentification extends HMSCordovaPlugin {
    private ActivityIdentificationProvider provider;

    public void pluginInitialize() {
        provider = CordovaUtils.initializeProvider(new ActivityIdentificationProvider(cordova.getContext()), cordova,
                this);
    }

    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        HMSCallback callback = CordovaCallback.fromCallbackContext(callbackContext);

        if ("createActivityConversionUpdates".equals(action)) {
            provider.createActivityConversionUpdates(args.getJSONArray(0), callback);
        } else if ("createActivityIdentificationUpdates".equals(action)) {
            provider.createActivityIdentificationUpdates(args.getDouble(0), callback);
        } else if ("deleteActivityConversionUpdates".equals(action)) {
            provider.deleteActivityConversionUpdates(args.getInt(0), callback);
        } else if ("deleteActivityIdentificationUpdates".equals(action)) {
            provider.deleteActivityIdentificationUpdates(args.getInt(0), callback);
        } else if ("requestPermission".equals(action)) {
            provider.requestPermission(callback);
        } else if ("hasPermission".equals(action)) {
            provider.hasPermission(callback);
        } else {
            return false;
        }
        return true;
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        return provider.getConstants();
    }

    @Override
    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) throws JSONException {
        provider.onRequestPermissionResult(requestCode, permissions, grantResults);
    }
}
