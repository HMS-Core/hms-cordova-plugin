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
import com.huawei.hms.cordova.location.backend.providers.GeofenceProvider;
import com.huawei.hms.cordova.location.helpers.CordovaCallback;
import com.huawei.hms.cordova.location.helpers.CordovaUtils;
import com.huawei.hms.cordova.location.helpers.HMSCordovaPlugin;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSGeofence extends HMSCordovaPlugin {
    private GeofenceProvider provider;

    public void pluginInitialize() {
        provider = CordovaUtils.initializeProvider(new GeofenceProvider(cordova.getContext()), cordova, this);
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        return this.getProvider().getConstants();
    }

    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        HMSCallback callback = CordovaCallback.fromCallbackContext(callbackContext);

        if ("createGeofenceList".equals(action)) {
            this.getProvider().createGeofenceList(args.getJSONArray(0), args.getInt(1), args.getInt(2), callback);
        } else if ("deleteGeofenceList".equals(action)) {
            this.getProvider().deleteGeofenceList(args.getInt(0), callback);
        } else {
            return false;
        }
        return true;
    }

    public GeofenceProvider getProvider() {
        return this.provider;
    }
}

