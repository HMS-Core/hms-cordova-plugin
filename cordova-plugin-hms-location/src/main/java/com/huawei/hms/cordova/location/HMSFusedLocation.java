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

import android.location.Location;
import android.os.Looper;
import android.util.Log;

import com.huawei.hms.cordova.location.helpers.Constants.Event;
import com.huawei.hms.cordova.location.helpers.Exceptions;
import com.huawei.hms.cordova.location.helpers.HMSCordovaPlugin;
import com.huawei.hms.cordova.location.helpers.LocationCallbackWithHandler;
import com.huawei.hms.cordova.location.helpers.ResultHandler;
import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.cordova.location.utils.LocationUtils;
import com.huawei.hms.cordova.location.utils.PermissionUtils;
import com.huawei.hms.location.FusedLocationProviderClient;
import com.huawei.hms.location.LocationCallback;
import com.huawei.hms.location.LocationRequest;
import com.huawei.hms.location.LocationServices;
import com.huawei.hms.location.SettingsClient;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;


public class HMSFusedLocation extends HMSCordovaPlugin implements ResultHandler {
    protected static final String TAG = HMSFusedLocation.class.getSimpleName();

    private FusedLocationProviderClient fusedLocationProviderClient;
    private HashMap<String, LocationCallback> locationCallbackMap;

    private SettingsClient settingsClient;

    public HMSFusedLocation() {}

    public void pluginInitialize() {
        super.pluginInitialize();
        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(cordova.getActivity().getApplicationContext());
        settingsClient = LocationServices.getSettingsClient(cordova.getActivity().getApplicationContext());
        locationCallbackMap = new HashMap<String, LocationCallback>();
    }

    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.d(TAG, action + " is called.");
        if ("flushLocations".equals(action)) {
            flushLocations(callbackContext);
        } else if ("checkLocationSettings".equals(action)) {
            checkLocationSettings(args.getJSONObject(0), callbackContext);
        } else if ("getLastLocation".equals(action)) {
            getLastLocation(callbackContext);
        } else if ("getLastLocationWithAddress".equals(action)) {
            getLastLocationWithAddress(args.getJSONObject(0), callbackContext);
        } else if ("getLocationAvailability".equals(action)) {
            getLocationAvailability(callbackContext);
        } else if ("setMockLocation".equals(action)) {
            setMockLocation(args.getJSONObject(0), callbackContext);
        } else if ("setMockMode".equals(action)) {
            setMockMode(args.getBoolean(0), callbackContext);
        } else if ("requestLocationUpdates".equals(action)) {
            requestLocationUpdates(args.getJSONObject(0), callbackContext);
        } else if ("removeLocationUpdates".equals(action)) {
            removeLocationUpdates(args.getString(0), callbackContext);
        } else if ("requestPermission".equals(action)) {
            requestPermission(callbackContext);
        } else if ("hasPermission".equals(action)) {
            hasPermission(callbackContext);
        } else {
            return false;
        }
        return true;
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        final JSONObject priorityConstants = new JSONObject();
        priorityConstants.put("PRIORITY_BALANCED_POWER_ACCURACY", LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY);
        priorityConstants.put("PRIORITY_HIGH_ACCURACY", LocationRequest.PRIORITY_HIGH_ACCURACY);
        priorityConstants.put("PRIORITY_LOW_POWER", LocationRequest.PRIORITY_LOW_POWER);
        priorityConstants.put("PRIORITY_NO_POWER", LocationRequest.PRIORITY_NO_POWER);

        final JSONObject eventConstants = new JSONObject();
        eventConstants.put("SCANNING_RESULT", Event.SCANNING_RESULT.getVal());

        final JSONObject constants = new JSONObject();
        constants.put("PriorityConstants", priorityConstants);
        constants.put("Events", eventConstants);

        return constants;
    }

    // @CordovaMethod
    public void flushLocations(final CallbackContext cordovaCallback) {
        Log.i(TAG, "flushLocations begin");
        fusedLocationProviderClient.flushLocations()
                .addOnSuccessListener(aVoid -> {
                    Log.i(TAG, "flushLocations::onSuccess");
                    cordovaCallback.success();
                })
                .addOnFailureListener(e -> {
                    Log.e(TAG, "flushLocations::onFailure -> " + e.getMessage());
                    cordovaCallback.error(e.getMessage());
                });
    }

    // @CordovaMethod
    public void checkLocationSettings(final JSONObject locationRequestMap, final CallbackContext cordovaCallback) throws JSONException {
        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        settingsClient.checkLocationSettings(LocationUtils.fromJSONObjectToLocationSettingsRequest.map(locationRequestMap))
                .addOnSuccessListener(locationSettingsResponse -> {
                    Log.i(TAG, "checkLocationSettings::onSuccess");
                    try {
                        cordovaCallback.success(LocationUtils.fromLocationSettingsStatesResponseToJSONObject(locationSettingsResponse.getLocationSettingsStates()));
                    } catch (JSONException e) {
                        Log.e(TAG, "json exception: " + e.getMessage());
                        cordovaCallback.error(e.getMessage());
                    }
                })
                .addOnFailureListener(e -> {
                    Log.e(TAG, "checkLocationSettings::onFailure -> " + e.getMessage());
                    cordovaCallback.error(e.getMessage());
                });
    }

    // @CordovaMethod
    public void getLastLocation(final CallbackContext cordovaCallback) {
        Log.i(TAG, "getLastLocation begin");

        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        fusedLocationProviderClient.getLastLocation().addOnSuccessListener(location -> {
            Log.i(TAG, "getLastLocation::onSuccess -> " + location.toString());
            try {
                cordovaCallback.success(LocationUtils.fromLocationToJSONObject(location));
            } catch (JSONException e) {
                Log.e(TAG, "json exception: " + e.getMessage());
                cordovaCallback.error(e.getMessage());
            }
        }).addOnFailureListener(e -> {
            Log.e(TAG, "getLastLocation::onFailure -> " + e.getMessage());
            cordovaCallback.error(e.getMessage());
        });

        Log.i(TAG, "getLastLocation end");
    }

    // @CordovaMethod
    public void getLastLocationWithAddress(final JSONObject map, final CallbackContext cordovaCallback) throws JSONException {
        Log.i(TAG, "getLastLocationWithAddress begin");

        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        LocationRequest locationRequest = LocationUtils.fromJSONObjectToLocationRequest.map(map);
        Log.i(TAG, "getLastLocationWithAddress locationRequest -> " + locationRequest.toString());
        fusedLocationProviderClient.getLastLocationWithAddress(locationRequest)
                .addOnSuccessListener(hwLocation -> {
                    Log.i(TAG, "getLastLocationWithAddress::onSuccess");
                    if (hwLocation == null) {
                        Log.i(TAG, "hwLocation is null");
                        cordovaCallback.error(new Exceptions.NoHWLocation().getMessage());
                        return;
                    }

                    Log.i(TAG, "getLastLocationWithAddress::onSuccess location -> " + LocationUtils.hwLocationToString(hwLocation));
                    try {
                        cordovaCallback.success(LocationUtils.fromHWLocationToJSONObject(hwLocation));
                    } catch (JSONException e) {
                        Log.e(TAG, "json exception: " + e.getMessage());
                        cordovaCallback.error(e.getMessage());
                    }
                }).addOnFailureListener(e -> {
                    Log.e(TAG, "getLastLocationWithAddress::onFailure -> " + e.getMessage());
                    cordovaCallback.error(e.getMessage());
                });

        Log.i(TAG, "getLastLocationWithAddress end");
    }

    // @CordovaMethod
    public void getLocationAvailability(final CallbackContext cordovaCallback) {
        Log.i(TAG, "getLocationAvailability begin");
        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        fusedLocationProviderClient.getLocationAvailability()
                .addOnSuccessListener(locationAvailability -> {
                    Log.i(TAG, "getLocationAvailability::onSuccess -> ");
                    cordovaCallback.success(CordovaUtils.keyValPair("isLocationAvailable", locationAvailability.isLocationAvailable()));
                }).addOnFailureListener(e -> {
                    Log.e(TAG, "getLocationAvailability::onFailure:" + e.getMessage());
                    cordovaCallback.error(e.getMessage());
                });

        Log.i(TAG, "getLocationAvailability end");
    }

    // @CordovaMethod
    public void setMockLocation(JSONObject map, final CallbackContext cordovaCallback) throws JSONException {
        Log.i(TAG, "setMockLocation begin");

        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        Location location = new Location("HMS-MOCK");
        location.setLongitude(map.getDouble("longitude"));
        location.setLatitude(map.getDouble("latitude"));
        fusedLocationProviderClient.setMockLocation(location).addOnSuccessListener(v -> {
            Log.i(TAG, "setMockLocation::onSuccess");
            cordovaCallback.success();
        }).addOnFailureListener(e -> {
            Log.e(TAG, "setMockLocation::onFailure -> " + e.getMessage());
            cordovaCallback.error(e.getMessage());
        });

        Log.i(TAG, "setMockLocation end");
    }

    // @CordovaMethod
    public void setMockMode(final boolean shouldMock, final CallbackContext cordovaCallback) {
        Log.i(TAG, "setMockMode -> shouldMock=" + shouldMock);

        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        fusedLocationProviderClient.setMockMode(shouldMock).addOnSuccessListener(v -> {
            Log.i(TAG, "setMockMode::onSuccess");
            cordovaCallback.success();
        }).addOnFailureListener(e -> {
            Log.e(TAG, "setMockMode::onFailure -> " + e.getMessage());
            cordovaCallback.error(e.getMessage());
        });
        Log.i(TAG, "setMockMode end");
    }

    // @CordovaMethod
    private void requestLocationUpdates(final JSONObject readableMap, final CallbackContext cordovaCallback) throws JSONException {
        Log.i(TAG, "requestLocationUpdatesWithCallback start");

        if (LocationUtils.checkForObstacles(cordova, fusedLocationProviderClient, cordovaCallback)) {
            return;
        }

        final String id = readableMap.getString("id");
        final LocationRequest locationRequest = LocationUtils.fromJSONObjectToLocationRequest.map(readableMap);

        if (locationCallbackMap.get(id) != null) {
            Log.i(TAG, "requestLocationUpdatesWithCallback: this callback id already exists");
            cordovaCallback.error(new Exceptions.DuplicateIdError().getMessage());
            return;
        }

        // Create locationCallback
        LocationCallback locationCallback = new LocationCallbackWithHandler(this);
        locationCallbackMap.put(id, locationCallback);

        fusedLocationProviderClient.requestLocationUpdates(locationRequest, locationCallback, Looper.getMainLooper())
                .addOnSuccessListener(aVoid -> {
                    Log.i(TAG, "requestLocationUpdatesWithCallback onSuccess");
                    cordovaCallback.success(CordovaUtils.basicMap("id", id));
                }).addOnFailureListener(e -> {
                    Log.i(TAG, "requestLocationUpdatesWithCallback onFailure:" + e.getMessage());
                    cordovaCallback.error(e.getMessage());
                });

        Log.i(TAG, "call requestLocationUpdatesWithCallback success.");
    }

    // @CordovaMethod
    public void removeLocationUpdates(final String id, final CallbackContext cordovaCallback) {
        LocationCallback callback = locationCallbackMap.get(id);

        if (callback == null) {
            Log.i(TAG, "removeLocationUpdates callback is null");
            cordovaCallback.error(new Exceptions.EmptyCallback().getMessage());
            return;
        }

        fusedLocationProviderClient.removeLocationUpdates(callback).addOnSuccessListener(aVoid -> {
            Log.i(TAG, "removeLocationUpdates::onSuccess");
            cordovaCallback.success(CordovaUtils.basicMap("id", id));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "removeLocationUpdates::onSuccess");
            cordovaCallback.error(e.getMessage());
        });
    }

    // @CordovaMethod
    public void requestPermission(CallbackContext cordovaCallback) { // FIXME: handle callback
        PermissionUtils.requestLocationPermission(this, cordova);
    }

    // @CordovaMethod
    public void hasPermission(final CallbackContext cordovaCallback) throws JSONException {
        boolean result = PermissionUtils.hasLocationPermission(cordova);
        cordovaCallback.success(CordovaUtils.keyValPair("hasPermission", result));
    }

    public void handleResult(Location location) {
        try {
            JSONObject params = LocationUtils.fromLocationToJSONObject(location);
            CordovaUtils.sendEvent(cordova, webView, Event.SCANNING_RESULT.getVal(), params);
        } catch (JSONException ex) {
            Log.e(TAG, "json exception: " + ex.getMessage());
        }
    }

    @Override
    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) throws JSONException {
        PermissionUtils.handlePermissionRequestResult(requestCode);
    }
}
