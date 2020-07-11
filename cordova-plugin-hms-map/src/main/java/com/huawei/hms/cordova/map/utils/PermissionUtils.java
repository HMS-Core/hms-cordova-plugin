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

package com.huawei.hms.cordova.map.utils;

import android.Manifest;
import android.os.Build;
import android.util.Log;

import org.apache.cordova.CordovaPlugin;

public class PermissionUtils {
    private static final String TAG = PermissionUtils.class.getSimpleName();

    public static final int REQUEST_LOCATION = 3920;

    public static boolean hasLocationPermission(CordovaPlugin plugin) {
        boolean fineLoc = plugin.cordova.hasPermission(Manifest.permission.ACCESS_FINE_LOCATION);
        boolean coarseLoc = plugin.cordova.hasPermission(Manifest.permission.ACCESS_COARSE_LOCATION);

        boolean result = fineLoc || coarseLoc;

        if (!result || Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            boolean accessBackgroundLocation = plugin.cordova.hasPermission("android.permission.ACCESS_BACKGROUND_LOCATION");
            result = result || accessBackgroundLocation;
        }
        return result;
    }

    public static void requestLocationPermission(CordovaPlugin plugin) {
        Log.d(TAG, "requestLocationPermission start");

        if (hasLocationPermission(plugin)) {
            Log.d(TAG, "requestLocationPermission -> already have the permissions");
        }

        if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.P) {
            String[] permissions = {
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION
            };
            plugin.cordova.requestPermissions(plugin, REQUEST_LOCATION, permissions);
        } else {
            String[] permissions = {
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION,
                "android.permission.ACCESS_BACKGROUND_LOCATION"
            };

            plugin.cordova.requestPermissions(plugin, REQUEST_LOCATION, permissions);
        }
        Log.d(TAG, "requestPermissions -> apply permission");
    }
}
