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

package com.huawei.hms.cordova.location.helpers;

import android.util.Log;

import com.huawei.hms.cordova.location.utils.json.ObjectToJSON;
import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.location.LocationAvailability;
import com.huawei.hms.location.LocationCallback;
import com.huawei.hms.location.LocationResult;

import org.apache.cordova.CordovaInterface;
import org.json.JSONObject;

public class LocationCallbackHandler extends LocationCallback {
    private static final String TAG = LocationCallbackHandler.class.getSimpleName();

    private CordovaInterface cordova;

    public LocationCallbackHandler(CordovaInterface cordova) {
        this.cordova = cordova;
    }

    @Override
    public void onLocationResult(LocationResult locationResult) {
        Log.d(TAG, "LocationCallbackHandler:onLocationResult: ");
        if (locationResult == null) {
            return;
        }
        handleResult(locationResult);
    }

    @Override
    public void onLocationAvailability(LocationAvailability locationAvailability) {
        super.onLocationAvailability(locationAvailability);
        Log.i(TAG, "requestLocationUpdatesWithCallback onLocationAvailability");
        if (locationAvailability != null) {
            boolean flag = locationAvailability.isLocationAvailable();
            Log.i(TAG, "onLocationAvailability isLocationAvailable:" + flag);
        }
    }

    private void handleResult(LocationResult locationResult) {
        Log.d("LocationCallbackHandler",
            "LocationCallbackHandler: handleResult() called with: locationResult = [" + locationResult + "]");
        JSONObject json = ObjectToJSON.convertLocationResultToJSON(locationResult);
        if (cordova == null) {
            Log.d(TAG, "handleResult: null");
        }
        CordovaUtils.sendEvent("onLocationResult", json);
    }
}
