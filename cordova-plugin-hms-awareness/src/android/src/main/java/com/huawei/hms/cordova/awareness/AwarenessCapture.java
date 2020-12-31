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


package com.huawei.hms.cordova.awareness;

import android.annotation.SuppressLint;
import android.os.Build;

import com.huawei.hms.cordova.awareness.backend.helpers.Exceptions;
import com.huawei.hms.cordova.awareness.backend.utils.JSONUtils;
import com.huawei.hms.cordova.awareness.basef.CordovaBaseModule;
import com.huawei.hms.cordova.awareness.basef.CordovaMethod;
import com.huawei.hms.cordova.awareness.basef.HMSLog;
import com.huawei.hms.cordova.awareness.basef.handler.CorPack;
import com.huawei.hms.cordova.awareness.basef.handler.Promise;
import com.huawei.hms.kit.awareness.Awareness;
import com.huawei.hms.kit.awareness.capture.WeatherPosition;
import com.huawei.hms.kit.awareness.status.BeaconStatus;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class AwarenessCapture extends CordovaBaseModule {
    private final String TAG = AwarenessCapture.class.getName();

    @CordovaMethod
    @HMSLog
    public void getHeadsetStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getHeadsetStatus()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getLocation(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getLocation()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_LOCATION_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getBehaviorStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getBehavior()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_BEHAVIOUR_STATUS_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getLightIntensity(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getLightIntensity()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getWeatherByDevice(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getWeatherByDevice()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_WEATHER_STATUS_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getWeatherByPosition(final CorPack corPack, final JSONArray args, final Promise promise) {
        final JSONObject params = args.optJSONObject(0);
        final WeatherPosition weatherPosition = JSONUtils.toObject(params, WeatherPosition.class);
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getWeatherByPosition(weatherPosition)
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_WEATHER_STATUS_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void querySupportingCapabilities(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .querySupportingCapabilities()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void enableUpdateWindow(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        Awareness.getCaptureClient(corPack.getCordova().getContext())
                .enableUpdateWindow(args.getBoolean(0));
    }

    @CordovaMethod
    @HMSLog
    public void getBluetoothStatus(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        int bluetoothDevice = args.getInt(0);
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getBluetoothStatus(bluetoothDevice)
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getWifiStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getWifiStatus()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getScreenStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getScreenStatus()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getDarkModeStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        if (Build.VERSION.SDK_INT >= 29) {
            Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                    .getDarkModeStatus()
                    .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                    .addOnFailureListener(err -> promise.error(err.toString()));
        } else {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_LOW_API_LEVEL_29));
        }
    }

    @CordovaMethod
    @HMSLog
    public void getApplicationStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getApplicationStatus(corPack.getCordova().getContext().getPackageName())
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getCurrentLocation(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getCurrentLocation()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_LOCATION_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getTimeCategories(final CorPack corPack, final JSONArray args, final Promise promise) {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getTimeCategories()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void getTimeCategoriesByUser(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject params = args.optJSONObject(0);
        final JSONObject locationRequest = params.getJSONObject("location");
        if (locationRequest.length() > 0 && locationRequest.has("latitude") && locationRequest.has("longitude")) {
            final double latitude = locationRequest.getDouble("latitude");
            final double longitude = locationRequest.getDouble("longitude");
            Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                    .getTimeCategoriesByUser(latitude, longitude)
                    .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                    .addOnFailureListener(err -> promise.error(err.toString()));
        }
    }

    @CordovaMethod
    @HMSLog
    public void getTimeCategoriesByCountryCode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String countryCode = args.getString(0);
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getTimeCategoriesByCountryCode(countryCode)
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getTimeCategoriesByIP(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getTimeCategoriesByIP()
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getTimeCategoriesForFuture(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final long futureTimestamp = args.getLong(0);
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getTimeCategoriesForFuture(futureTimestamp)
                .addOnSuccessListener((success) -> promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(success)))
                .addOnFailureListener(err -> promise.error(err.toString()));
    }

    @SuppressLint("MissingPermission")
    @CordovaMethod
    @HMSLog
    public void getBeaconStatus(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final JSONObject params = args.optJSONObject(0);
        final BeaconStatus.Filter filter = JSONUtils.fromJSONToBeaconStatusFilter(params);
        Awareness.getCaptureClient(corPack.getCordovaWebView().getContext())
                .getBeaconStatus(filter)
                .addOnSuccessListener(beaconStatusResponse -> {
                    List<BeaconStatus.BeaconData> beaconDataList =
                            beaconStatusResponse.getBeaconStatus().getBeaconData();
                    if (beaconDataList != null && beaconDataList.size() != 0) {
                        promise.success(JSONUtils.FROM_STATUS_RESPONSE_TO_JSON_OBJECT.map(beaconStatusResponse));
                    } else {
                        promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_BEACON_MATCHES));
                    }
                })
                .addOnFailureListener(e -> promise.error(e.toString()));
    }


}
