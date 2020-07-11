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

package com.huawei.hms.cordova.location.utils;

import android.Manifest;
import android.os.Build;
import android.util.Log;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;


public class PermissionUtils {

    private static final String TAG = PermissionUtils.class.getSimpleName();

    public static boolean hasLocationPermission(CordovaInterface cordova) {
        boolean fineLoc = cordova.hasPermission(Manifest.permission.ACCESS_FINE_LOCATION);
        boolean coarseLoc = cordova.hasPermission(Manifest.permission.ACCESS_COARSE_LOCATION);

        boolean result = fineLoc || coarseLoc;

        if (!result || Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            boolean accessBackgroundLocation = cordova.hasPermission("android.permission.ACCESS_BACKGROUND_LOCATION");
            result = result || accessBackgroundLocation;
        }
        return result;
    }

    public static void requestLocationPermission(CordovaPlugin plugin, CordovaInterface cordova) {
        Log.d(TAG, "requestLocationPermission start");

        if (hasLocationPermission(cordova)) {
            Log.d(TAG, "requestLocationPermission -> already have the permissions");
        }

        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.P) {
            String[] permissions = {
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION
            };
            cordova.requestPermissions(plugin, 1, permissions);
        } else {
            String[] permissions = {
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION,
                "android.permission.ACCESS_BACKGROUND_LOCATION"
            };

            cordova.requestPermissions(plugin, 2, permissions);
        }
        Log.d(TAG, "requestPermissions -> apply permission");
    }

    public static boolean hasActivityRecognitionPermission(CordovaInterface cordova) {
        return
            (Build.VERSION.SDK_INT <= Build.VERSION_CODES.P && cordova.hasPermission("com.huawei.hms.permission.ACTIVITY_RECOGNITION"))
            || (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P && cordova.hasPermission("android.permission.ACTIVITY_RECOGNITION"));
    }

    public static void requestActivityRecognitionPermission(CordovaPlugin plugin, CordovaInterface cordova) {
        Log.d(TAG, "requestActivityRecognitionPermission start");

        if (hasActivityRecognitionPermission(cordova)) {
            Log.d(TAG, "requestActivityRecognitionPermission -> already have the permissions");
            return;
        }

        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.P) {
            String permissions = "com.huawei.hms.permission.ACTIVITY_RECOGNITION";
            cordova.requestPermission(plugin, 1, permissions);
        } else {
            String permissions = "android.permission.ACTIVITY_RECOGNITION";
            cordova.requestPermission(plugin, 2, permissions);
        }
        Log.d(TAG, "requestActivityRecognitionPermission -> apply permission");
    }

    public static void handlePermissionRequestResult(int requestCode) {
        // TODO: handle permission results here and add callbacks to permission requests
    }

}
