/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.location.services;

import android.app.Activity;
import android.app.Notification;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.location.Location;
import android.os.Looper;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.common.ResolvableApiException;
import com.huawei.hms.cordova.location.basef.CordovaBaseModule;
import com.huawei.hms.cordova.location.basef.CordovaMethod;
import com.huawei.hms.cordova.location.basef.HMSLog;
import com.huawei.hms.cordova.location.basef.handler.CorPack;
import com.huawei.hms.cordova.location.basef.handler.Promise;
import com.huawei.hms.cordova.location.helpers.LocationBroadcastReceiver;
import com.huawei.hms.cordova.location.helpers.LocationCallbackHandler;
import com.huawei.hms.cordova.location.utils.Constants;
import com.huawei.hms.cordova.location.utils.Exceptions;
import com.huawei.hms.cordova.location.utils.LocationUtils;
import com.huawei.hms.cordova.location.utils.json.JSONToObject;
import com.huawei.hms.cordova.location.utils.json.ObjectToJSON;
import com.huawei.hms.location.FusedLocationProviderClient;
import com.huawei.hms.location.LocationEnhanceService;
import com.huawei.hms.location.LocationRequest;
import com.huawei.hms.location.LocationServices;
import com.huawei.hms.location.LocationSettingsRequest;
import com.huawei.hms.location.LocationSettingsResponse;
import com.huawei.hms.location.LocationSettingsStates;
import com.huawei.hms.location.LocationSettingsStatusCodes;
import com.huawei.hms.location.LogConfig;
import com.huawei.hms.location.NavigationRequest;
import com.huawei.hms.location.SettingsClient;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class FusedLocationService extends CordovaBaseModule {
    private static final String TAG = FusedLocationService.class.getSimpleName();

    private final FusedLocationProviderClient client;

    private final Map<Integer, PendingIntent> pendingIntentRequestMap;

    private final Map<Integer, LocationCallbackHandler> locationCallbackRequestMap;

    private LogConfig logConfig;

    private Promise activityResultCb;

    private boolean isMockModeEnabled = false;

    public FusedLocationService(CordovaInterface cordova) {
        pendingIntentRequestMap = new HashMap<>();
        locationCallbackRequestMap = new HashMap<>();
        client = LocationServices.getFusedLocationProviderClient(cordova.getActivity());
    }

    @Override
    public void onDestroy() {
        Log.d(TAG, "onDestroy() called");
    }

    @CordovaMethod
    @HMSLog
    public void disableBackgroundLocation(final CorPack corPack, JSONArray args, final Promise cb) {
        client.disableBackgroundLocation().addOnSuccessListener(aVoid -> {
            cb.success();
        }).addOnFailureListener(e -> {
            cb.error(e.getMessage());
        });
    }

    @CordovaMethod
    @HMSLog
    public void enableBackgroundLocation(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        boolean hasLocationPermission = corPack.hasPermission(Constants.Permission.FOREGROUND_SERVICE);
        if (!hasLocationPermission) {
            cb.error(Exceptions.getError(Exceptions.NO_PERMISSION_ERROR,
                "App does not have FOREGROUND_SERVICE permission."));
            return;
        }
        JSONObject json = new JSONObject(args.getString(1));
        Notification mNotification = LocationUtils.buildNotification(corPack.getCordova().getContext(), json);
        client.enableBackgroundLocation(args.getInt(0), mNotification).addOnFailureListener(e -> {
            Log.e(TAG, Objects.requireNonNull(e.getMessage()));
        });
        cb.success();
    }

    @CordovaMethod
    @HMSLog
    public void requestLocationUpdatesEx(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        JSONObject requestParams = args.getJSONObject(1);
        if (!LocationUtils.hasLocationPermission(corPack)) {
            cb.error(Exceptions.getError(Exceptions.NO_PERMISSION_ERROR));
            return;
        }
        if (locationCallbackRequestMap.containsKey(requestCode)) {
            cb.error(Exceptions.getError(Exceptions.DUPLICATE_ID_ERROR));
            return;
        }
        LocationRequest locationRequest = JSONToObject.convertJSONToLocationRequest(requestParams);
        LocationCallbackHandler locationCallbackHandler = new LocationCallbackHandler(corPack.getCordova());
        locationCallbackRequestMap.put(requestCode, locationCallbackHandler);
        Task<Void> task = client.requestLocationUpdatesEx(locationRequest, locationCallbackHandler,
            Looper.getMainLooper());
        task.addOnSuccessListener(aVoid -> cb.success(true))
            .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void requestLocationUpdates(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        if (!LocationUtils.hasLocationPermission(corPack)) {
            cb.error(Exceptions.getError(Exceptions.NO_PERMISSION_ERROR));
            return;
        }
        int requestCode = args.getInt(0);
        JSONObject requestParams = args.getJSONObject(1);
        LocationRequest locationRequest = JSONToObject.convertJSONToLocationRequest(requestParams);
        if (args.length() > 2) {
            String function = args.getString(2);
            LocationUtils.saveBackgroundTask(corPack.getCordova().getContext(),
                Constants.FunctionType.LOCATION_FUNCTION, function);
            PendingIntent pendingIntent = LocationUtils.getPendingIntent(corPack.getCordova().getContext(),
                LocationBroadcastReceiver.ACTION_PROCESS_LOCATION, requestCode, PendingIntent.FLAG_UPDATE_CURRENT);
            pendingIntentRequestMap.put(requestCode, pendingIntent);
            client.requestLocationUpdates(locationRequest, pendingIntent)
                .addOnSuccessListener(aVoid -> cb.success(true))
                .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
        } else {
            LocationCallbackHandler locationCallbackHandler = new LocationCallbackHandler(corPack.getCordova());
            locationCallbackRequestMap.put(requestCode, locationCallbackHandler);
            client.requestLocationUpdates(locationRequest, locationCallbackHandler, Looper.getMainLooper())
                .addOnSuccessListener(aVoid -> cb.success(true))
                .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
        }
    }

    @CordovaMethod
    @HMSLog
    public void checkLocationSettings(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        SettingsClient settingsClient = LocationServices.getSettingsClient(corPack.getCordova().getContext());
        LocationSettingsRequest locationSettingsRequest = JSONToObject.convertJSONToLocationSettingsRequest(
            args.getJSONObject(0));
        Task<LocationSettingsResponse> task = settingsClient.checkLocationSettings(locationSettingsRequest);
        task.addOnSuccessListener(locationSettingsResponse -> {
            JSONObject result = ObjectToJSON.locationSettingsStatesToJSON(
                locationSettingsResponse.getLocationSettingsStates());
            cb.success(result);
        }).addOnFailureListener(exception -> {
            if (exception instanceof ResolvableApiException) {
                switch (((ResolvableApiException) exception).getStatusCode()) {
                    case LocationSettingsStatusCodes.RESOLUTION_REQUIRED:
                        try {
                            ResolvableApiException resolvable = (ResolvableApiException) exception;
                            activityResultCb = cb;
                            resolvable.startResolutionForResult(corPack.getCordova().getActivity(),
                                Constants.RequestType.CHECK_SETTINGS_REQUEST_CODE);
                        } catch (IntentSender.SendIntentException | ClassCastException e) {
                            Log.d(TAG, e.getLocalizedMessage());
                            cb.error(exception.getLocalizedMessage());
                        }
                        break;
                    case LocationSettingsStatusCodes.SETTINGS_CHANGE_UNAVAILABLE:
                        cb.error(exception.getLocalizedMessage());
                        break;
                }
            }
        });
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        final LocationSettingsStates states = LocationSettingsStates.fromIntent(data);
        if (activityResultCb != null && requestCode == Constants.RequestType.CHECK_SETTINGS_REQUEST_CODE) {
            switch (resultCode) {
                case Activity.RESULT_OK:
                    JSONObject result = ObjectToJSON.locationSettingsStatesToJSON(states);
                    activityResultCb.success(result);
                    break;
                case Activity.RESULT_CANCELED:
                    activityResultCb.error("Operation is canceled.");
                    break;
                default:
                    break;
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void flushLocations(final CorPack corPack, JSONArray args, final Promise cb) {
        client.flushLocations()
            .addOnSuccessListener(aVoid -> cb.success())
            .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void getLastLocation(final CorPack corPack, JSONArray args, final Promise cb) {
        client.getLastLocation().addOnSuccessListener(location -> {
            if (location == null) {
                cb.error("Location is null.");
            } else {
                cb.success(ObjectToJSON.convertLocationToJSON(location));
            }
        }).addOnFailureListener(e -> cb.error(e.getMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void getLastLocationWithAddress(final CorPack corPack, JSONArray args, final Promise cb)
        throws JSONException {
        LocationRequest locationRequest = JSONToObject.convertJSONToLocationRequest(args.getJSONObject(0));
        client.getLastLocationWithAddress(locationRequest).addOnSuccessListener(hwLocation -> {
            if (hwLocation == null) {
                cb.error("HWLocation is null.");
            } else {
                cb.success(ObjectToJSON.convertHWLocationToJSON(hwLocation));
            }
        }).addOnFailureListener(e -> cb.error(e.getMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void getLocationAvailability(final CorPack corPack, JSONArray args, final Promise cb) {
        client.getLocationAvailability().addOnSuccessListener(locationAvailability -> {
            boolean isLocationAvailable = locationAvailability.isLocationAvailable();
            cb.success(isLocationAvailable);
        }).addOnFailureListener(e -> cb.error(e.getMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void getNavigationContextState(final CorPack corPack, JSONArray args, final Promise cb)
        throws JSONException {
        int requestType = args.getInt(0);
        LocationEnhanceService locationEnhanceService = LocationServices.getLocationEnhanceService(
            corPack.getCordova().getContext());
        locationEnhanceService.getNavigationState(new NavigationRequest(requestType))
            .addOnSuccessListener(navigationResult -> cb.success(ObjectToJSON.navigationResultToJSON(navigationResult)))
            .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
    }

    public void removeLocationUpdatesCallback(int requestCode, final Promise cb) throws JSONException {
        if (!locationCallbackRequestMap.containsKey(requestCode)) {
            cb.error(Exceptions.getError(Exceptions.NO_MATCHED_CALLBACK));
            return;
        }
        LocationCallbackHandler locationCallbackHandler = locationCallbackRequestMap.get(requestCode);
        client.removeLocationUpdates(locationCallbackHandler)
            .addOnSuccessListener(aVoid -> cb.success(true))
            .addOnFailureListener(e -> cb.error(e.getLocalizedMessage()));
        locationCallbackRequestMap.remove(requestCode);
    }

    public void removeLocationUpdatesPendingIntent(Context context, int requestCode, final Promise cb)
        throws JSONException {
        PendingIntent pendingIntent;
        if (!pendingIntentRequestMap.containsKey(requestCode)) {
            pendingIntent = LocationUtils.getPendingIntent(context, LocationBroadcastReceiver.ACTION_PROCESS_LOCATION,
                requestCode, PendingIntent.FLAG_NO_CREATE);
            if (pendingIntent != null) {
                pendingIntent.cancel();
                cb.success(true);
            } else {
                cb.error(Exceptions.getError(Exceptions.NO_MATCHED_INTENT));
            }
        } else {
            pendingIntent = pendingIntentRequestMap.get(requestCode);
            Task<Void> task = client.removeLocationUpdates(pendingIntent);
            task.addOnSuccessListener(aVoid -> cb.success(true)).addOnFailureListener(e -> cb.error(e.getMessage()));
            pendingIntentRequestMap.remove(requestCode);
        }
        LocationUtils.deleteBackgroundTask(context, Constants.FunctionType.LOCATION_FUNCTION);
    }

    @CordovaMethod
    @HMSLog
    public void removeLocationUpdates(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        int requestCode = args.getInt(0);
        String type = args.getString(1);
        if (type.equals(Constants.RequestType.LOCATION_CALLBACK)) {
            removeLocationUpdatesCallback(requestCode, cb);
        } else if (type.equals(Constants.RequestType.PENDING_INTENT)) {
            removeLocationUpdatesPendingIntent(corPack.getCordova().getContext(), requestCode, cb);
        } else {
            cb.error(Exceptions.getError(Exceptions.INVALID_REQUEST_TYPE));
        }
    }

    @CordovaMethod
    @HMSLog
    public void setMockLocation(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        if (!isMockModeEnabled) {
            cb.error(Exceptions.getError(Exceptions.NOT_IN_MOCK_MODE));
            return;
        }
        JSONObject json = args.getJSONObject(0);
        Location location = new Location("HMS-MOCK");
        location.setLongitude(json.optDouble("longitude"));
        location.setLatitude(json.optDouble("latitude"));
        client.setMockLocation(location)
            .addOnSuccessListener(aVoid -> cb.success())
            .addOnFailureListener(e -> cb.error(e.getMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void setMockMode(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        boolean isMockMode = args.getBoolean(0);
        client.setMockMode(isMockMode).addOnSuccessListener(aVoid -> {
            isMockModeEnabled = isMockMode;
            cb.success();
        }).addOnFailureListener(e -> cb.error(e.getMessage()));
    }

    @CordovaMethod
    @HMSLog
    public void setLogConfig(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        boolean hasLocationPermission = corPack.hasPermission(Constants.Permission.READ_EXTERNAL_STORAGE)
            && corPack.hasPermission(Constants.Permission.WRITE_EXTERNAL_STORAGE);
        if (!hasLocationPermission) {
            cb.error(Exceptions.getError(Exceptions.NO_PERMISSION_ERROR, "App does not have storage permission."));
            return;
        }
        SettingsClient settingsClient = LocationServices.getSettingsClient(corPack.getCordova().getContext());
        logConfig = new LogConfig();
        if (!args.isNull(0)) {
            JSONToObject.convertJSONToLogConfig(args.getJSONObject(0), logConfig);
        }
        settingsClient.setLogConfig(logConfig).addOnFailureListener(e -> {
            Log.e(TAG, Objects.requireNonNull(e.getMessage()));
            cb.error(e.getMessage());
        });
        cb.success();
    }

    @CordovaMethod
    @HMSLog
    public void getLogConfig(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        if (logConfig == null) {
            cb.error("LogConfig is null.");
            return;
        }
        cb.success(ObjectToJSON.convertLogConfigToJSON(logConfig));
    }
}
