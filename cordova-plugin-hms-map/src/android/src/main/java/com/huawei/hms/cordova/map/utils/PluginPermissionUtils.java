/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.map.utils;

import android.Manifest;
import android.os.Build;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PermissionHelper;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public final class PluginPermissionUtils {
    public static final int REQUEST_LOCATION = 3920;

    public static boolean hasLocationPermission(CordovaPlugin plugin) {
        boolean hasLocationPermission = PermissionHelper.hasPermission(plugin, Manifest.permission.ACCESS_FINE_LOCATION) &&
                PermissionHelper.hasPermission(plugin, Manifest.permission.ACCESS_COARSE_LOCATION);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P)
            hasLocationPermission = hasLocationPermission &&
                    PermissionHelper.hasPermission(plugin, "android.permission.ACCESS_BACKGROUND_LOCATION");
        return hasLocationPermission;
    }

    public static void requestLocationPermission(CordovaPlugin plugin) {
        List<String> permissions = new LinkedList<>(Arrays.asList(Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION));
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P)
            permissions.add("android.permission.ACCESS_BACKGROUND_LOCATION");
        PermissionHelper.requestPermissions(plugin, REQUEST_LOCATION, permissions.toArray(new String[permissions.size()]));
    }
}
