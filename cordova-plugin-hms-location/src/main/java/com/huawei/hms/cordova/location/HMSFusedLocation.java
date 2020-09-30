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

import com.huawei.hms.cordova.location.backend.providers.FusedLocationProvider;
import com.huawei.hms.cordova.location.helpers.CordovaCallback;
import com.huawei.hms.cordova.location.helpers.CordovaUtils;
import com.huawei.hms.cordova.location.helpers.HMSCordovaPlugin;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSFusedLocation extends HMSCordovaPlugin {
    private FusedLocationProvider provider;

    public void pluginInitialize() {
        provider = CordovaUtils.initializeProvider(new FusedLocationProvider(cordova.getContext()), cordova, this);
    }

    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        CordovaCallback callback = CordovaCallback.fromCallbackContext(callbackContext);

        if ("flushLocations".equals(action)) {
            provider.flushLocations(callback);
        } else if ("checkLocationSettings".equals(action)) {
            provider.checkLocationSettings(args.getJSONObject(0), callback);
        } else if ("getLastLocation".equals(action)) {
            provider.getLastLocation(callback);
        } else if ("getNavigationContextState".equals(action)) {
            provider.getNavigationContextState(args.getInt(0), callback);
        } else if ("getLastLocationWithAddress".equals(action)) {
            provider.getLastLocationWithAddress(args.getJSONObject(0), callback);
        } else if ("getLocationAvailability".equals(action)) {
            provider.getLocationAvailability(callback);
        } else if ("setMockLocation".equals(action)) {
            provider.setMockLocation(args.getJSONObject(0), callback);
        } else if ("setMockMode".equals(action)) {
            provider.setMockMode(args.getBoolean(0), callback);
        } else if ("requestLocationUpdates".equals(action)) {
            provider.requestLocationUpdates(args.getJSONObject(0), callback);
        } else if ("requestPermission".equals(action)) {
            provider.requestPermission(callback);
        } else if ("hasPermission".equals(action)) {
            provider.hasPermission(callback);
        } else if ("requestLocationUpdatesEx".equals(action)) {
            provider.requestLocationUpdatesEx(args.getJSONObject(0), callback);
        } else if ("removeLocationUpdates".equals(action)) {
            provider.removeLocationUpdates(args.getString(0), callback);
        } else {
            return false;
        }
        return true;
    }

    @Override
    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) {
        provider.onRequestPermissionResult(requestCode, permissions, grantResults);
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        return provider.getConstants();
    }
}
