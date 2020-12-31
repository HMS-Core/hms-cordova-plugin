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


package com.huawei.hms.cordova.awareness.backend.providers;

import android.annotation.SuppressLint;
import android.app.PendingIntent;
import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.cordova.awareness.backend.helpers.Constants;
import com.huawei.hms.cordova.awareness.backend.utils.JSONUtils;
import com.huawei.hms.cordova.awareness.basef.handler.Promise;
import com.huawei.hms.kit.awareness.Awareness;
import com.huawei.hms.kit.awareness.barrier.AmbientLightBarrier;
import com.huawei.hms.kit.awareness.barrier.AwarenessBarrier;
import com.huawei.hms.kit.awareness.barrier.BarrierQueryRequest;
import com.huawei.hms.kit.awareness.barrier.BarrierQueryResponse;
import com.huawei.hms.kit.awareness.barrier.BarrierStatus;
import com.huawei.hms.kit.awareness.barrier.BarrierStatusMap;
import com.huawei.hms.kit.awareness.barrier.BarrierUpdateRequest;
import com.huawei.hms.kit.awareness.barrier.BeaconBarrier;
import com.huawei.hms.kit.awareness.barrier.BehaviorBarrier;
import com.huawei.hms.kit.awareness.barrier.BluetoothBarrier;
import com.huawei.hms.kit.awareness.barrier.HeadsetBarrier;
import com.huawei.hms.kit.awareness.barrier.LocationBarrier;
import com.huawei.hms.kit.awareness.barrier.ScreenBarrier;
import com.huawei.hms.kit.awareness.barrier.TimeBarrier;
import com.huawei.hms.kit.awareness.barrier.WifiBarrier;
import com.huawei.hms.kit.awareness.status.BeaconStatus;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Objects;
import java.util.TimeZone;

public class BarrierUtils {
    private static final String TAG = BarrierUtils.class.getName();

    public static void addBarrier(final Context context, final String label,
    final AwarenessBarrier barrier, final PendingIntent pendingIntent, final Promise promise) {
        try {
            BarrierUpdateRequest.Builder builder = new BarrierUpdateRequest.Builder();
            BarrierUpdateRequest request = builder.addBarrier(label, barrier, pendingIntent).build();
            Awareness.getBarrierClient(context).updateBarriers(request)
                    .addOnSuccessListener(aVoid -> Log.i(TAG, "addBarrier: "))
                    .addOnFailureListener(e -> {
                        Log.e(TAG, "onFailure: error ->", e);
                        promise.error(e.toString());
                    });
        } catch (NullPointerException | IllegalArgumentException e) {
            Log.e(TAG, "addBarrier: error -> " + e.toString());
            promise.error(e.toString());
        }
    }

    public static void deleteBarrier(final Context context, final Promise promise, final String... labels) {
        try {
            BarrierUpdateRequest.Builder builder = new BarrierUpdateRequest.Builder();
            for (String label : labels) {
                builder.deleteBarrier(label);
            }
            Awareness.getBarrierClient(context).updateBarriers(builder.build())
                    .addOnSuccessListener(aVoid -> Log.d(TAG, "delete Barrier success"))
                    .addOnFailureListener(e -> {
                        Log.e(TAG, "deleteBarrier: error ->", e);
                    });
        } catch (IllegalArgumentException e) {
            Log.e(TAG, "addBarrier: error -> " + e.toString());
            promise.error(e.toString());
        }
    }

    public static void deleteAllBarriers(Context context, Promise promise) {
        BarrierUpdateRequest.Builder builder = new BarrierUpdateRequest.Builder();
        builder.deleteAll();
        Awareness.getBarrierClient(context).updateBarriers(builder.build())
                .addOnSuccessListener(aVoid -> Log.d(TAG, "delete all barrier successfully"))
                .addOnFailureListener(e -> {
                    Log.e(TAG, "deleteBarrier: error ->", e);
                    promise.error(e.toString());
                });
    }

    public static AwarenessBarrier addHeadsetBarrierKeepingUtil(JSONArray args) throws JSONException {
        final int headsetStatus = args.getInt(1);
        return HeadsetBarrier.keeping(headsetStatus);
    }

    public static AwarenessBarrier addHeadsetBarrierConnectingUtil(JSONArray args) {
        return HeadsetBarrier.connecting();
    }

    public static AwarenessBarrier addHeadsetBarrierDisconnectingUtil(JSONArray args) {
        return HeadsetBarrier.disconnecting();
    }

    public static AwarenessBarrier addAmbientLightBarrierRangeUtil(JSONArray args) throws JSONException {
        final float lowLuxValue = (float) args.getDouble(1);
        final float highLuxValue = (float) args.getDouble(2);
        return AmbientLightBarrier.range(lowLuxValue, highLuxValue);
    }

    public static AwarenessBarrier addAmbientLightBarrierAboveUtil(JSONArray args) throws JSONException {
        final float highLuxValue = (float) args.getDouble(1);
        return AmbientLightBarrier.above(highLuxValue);
    }

    public static AwarenessBarrier addAmbientLightBarrierBelowUtil(JSONArray args) throws JSONException {
        final float lowLuxValue = (float) args.getDouble(1);
        return AmbientLightBarrier.below(lowLuxValue);
    }

    public static AwarenessBarrier addWifiBarrierKeepingUtil(JSONArray args) throws JSONException {
        final int wifiStatus = args.getInt(1);
        final String bssid = args.optString(2);
        final String ssid = args.optString(3);
        return WifiBarrier.keeping(wifiStatus, bssid, ssid);
    }

    public static AwarenessBarrier addWifiBarrierConnectingUtil(JSONArray args) {
        final String bssid = args.optString(1);
        final String ssid = args.optString(2);
        return WifiBarrier.connecting(bssid, ssid);
    }

    public static AwarenessBarrier addWifiBarrierDisconnectingUtil(JSONArray args) {
        final String bssid = args.optString(1);
        final String ssid = args.optString(2);
        return WifiBarrier.disconnecting(bssid, ssid);
    }

    public static AwarenessBarrier addWifiBarrierEnablingUtil(JSONArray args) {
        return WifiBarrier.enabling();
    }

    public static AwarenessBarrier addWifiBarrierDisablingUtil(JSONArray args) {
        return WifiBarrier.disabling();
    }

    public static AwarenessBarrier addBluetoothBarrierKeepUtil(JSONArray args) throws JSONException {
        final int deviceType = args.getInt(1);
        final int bluetoothStatus = args.getInt(2);
        return BluetoothBarrier.keep(deviceType, bluetoothStatus);
    }

    public static AwarenessBarrier addBluetoothBarrierConnectingUtil(JSONArray args) throws JSONException {
        final int deviceType = args.getInt(1);
        return BluetoothBarrier.connecting(deviceType);
    }

    public static AwarenessBarrier addBluetoothBarrierDisconnectingUtil(JSONArray args) throws JSONException {
        final int deviceType = args.getInt(1);
        return BluetoothBarrier.disconnecting(deviceType);
    }

    public static AwarenessBarrier addBehaviorBarrierKeepingUtil(JSONArray args) throws JSONException {
        int[] behaviorTypes = JSONUtils.getBehaviorTypes(args);
        return BehaviorBarrier.keeping(behaviorTypes);
    }

    public static AwarenessBarrier addBehaviorBarrierBeginningUtil(JSONArray args) throws JSONException {
        int[] behaviorTypes = JSONUtils.getBehaviorTypes(args);
        return BehaviorBarrier.beginning(behaviorTypes);
    }

    public static AwarenessBarrier addBehaviorBarrierEndingUtil(JSONArray args) throws JSONException {
        int[] behaviorTypes = JSONUtils.getBehaviorTypes(args);
        return BehaviorBarrier.ending(behaviorTypes);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addLocationBarrierEnterUtil(JSONArray args) throws JSONException {
        final double latitude = args.getDouble(1);
        final double longitude = args.getDouble(2);
        final double radius = args.getDouble(3);
        return LocationBarrier.enter(latitude, longitude, radius);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addLocationBarrierStayUtil(JSONArray args) throws JSONException {
        final double latitude = args.getDouble(1);
        final double longitude = args.getDouble(2);
        final double radius = args.getDouble(3);
        final long mTimeOfDuration = (long) args.getLong(4);
        return LocationBarrier.stay(latitude, longitude, radius, mTimeOfDuration);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addLocationBarrierExitUtil(JSONArray args) throws JSONException {
        final double latitude = args.getDouble(1);
        final double longitude = args.getDouble(2);
        final double radius = args.getDouble(3);
        return LocationBarrier.exit(latitude, longitude, radius);
    }

    public static AwarenessBarrier addScreenBarrierKeepingUtil(JSONArray args) throws JSONException {
        final int screenStatus = args.getInt(1);
        return ScreenBarrier.keeping(screenStatus);
    }

    public static AwarenessBarrier addScreenBarrierScreenOnUtil(JSONArray args) {
        return ScreenBarrier.screenOn();
    }

    public static AwarenessBarrier addScreenBarrierScreenOffUtil(JSONArray args) {
        return ScreenBarrier.screenOff();
    }

    public static AwarenessBarrier addScreenBarrierScreenUnlockUtil(JSONArray args) {
        return ScreenBarrier.screenUnlock();
    }


    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addTimeBarrierDuringPeriodOfDayUtil(JSONArray args) throws JSONException {
        final String timeZoneObject = args.optString(1);
        TimeZone timeZone;
        if (timeZoneObject.isEmpty()) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = TimeZone.getTimeZone(timeZoneObject);
        }
        final long startTimeOfDay = args.getLong(2);
        final long stopTimeOfDay = args.getLong(3);
        return TimeBarrier.duringPeriodOfDay(timeZone, startTimeOfDay, stopTimeOfDay);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addTimeBarrierDuringPeriodOfWeekUtil(JSONArray args) throws JSONException {
        final int dayCode = args.getInt(1);
        final String timeZoneObject = args.optString(2);
        TimeZone timeZone;
        if (timeZoneObject.isEmpty()) {
            timeZone = TimeZone.getDefault();
        } else {
            timeZone = TimeZone.getTimeZone(timeZoneObject);
        }
        final long startTimeOfSpecifiedDay = args.getLong(3);
        final long stopTimeOfSpecifiedDay = args.getLong(4);
        return TimeBarrier.duringPeriodOfWeek(dayCode, timeZone, startTimeOfSpecifiedDay, stopTimeOfSpecifiedDay);
    }

    public static AwarenessBarrier addTimeBarrierDuringTimePeriodUtil(JSONArray args) throws JSONException {
        final long startTimeStamp = args.getLong(1);
        final long stopTimeStamp = args.getLong(2);
        return TimeBarrier.duringTimePeriod(startTimeStamp, stopTimeStamp);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addTimeBarrierTimeInSunriseOrSunsetPeriodUtil(JSONArray args) throws JSONException {
        final int timeInstant = args.getInt(1);
        final long startTimeOffset = args.getLong(2);
        final long stopTimeOffset = args.getLong(3);
        return TimeBarrier.inSunriseOrSunsetPeriod(timeInstant, startTimeOffset, stopTimeOffset);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addTimeBarrierInTimeCategoryUtil(JSONArray args) throws JSONException {
        final int timeCategory = args.getInt(1);
        return TimeBarrier.inTimeCategory(timeCategory);
    }

    @SuppressLint("MissingPermission")
    public static AwarenessBarrier addBeaconBarrierUtil(JSONArray args, String barrierLabel) throws JSONException {
        final String namespace = args.getString(1);
        final String type = args.optString(2);
        final JSONArray jsArray = args.optJSONArray(3);
        final BeaconStatus.Filter filter;

        if (jsArray == null && type == null) {
            filter = BeaconStatus.Filter.match(namespace);
        } else if (jsArray == null) {
            filter = BeaconStatus.Filter.match(namespace, type);
        } else {
            byte[] content = jsArray.toString().getBytes(StandardCharsets.UTF_8);
            filter = BeaconStatus.Filter.match(namespace, type, content);
        }

        if (barrierLabel.equals("keep")) {
            return BeaconBarrier.keep(filter);
        } else if (barrierLabel.equals("discover")) {
            return BeaconBarrier.discover(filter);
        } else {
            return BeaconBarrier.missed(filter);
        }
    }

    public static AwarenessBarrier findAwareness(String method, JSONArray args) {
        try {
            Method m = BarrierUtils.class.getMethod(method + "Util", JSONArray.class);
            return (AwarenessBarrier) m.invoke(null, args);
        } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            Log.e(TAG, "error: ->" + e.toString());
        }
        return null;
    }
}
