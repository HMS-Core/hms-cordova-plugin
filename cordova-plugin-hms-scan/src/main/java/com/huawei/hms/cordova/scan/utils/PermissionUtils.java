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

package com.huawei.hms.cordova.scan.utils;

import android.Manifest;
import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PermissionUtils {
    public static final int CAMERA_PERMISSION_CODE = 100;
    private static final String TAG = PermissionUtils.class.getSimpleName();

    private PermissionUtils() {
    }

    public static boolean hasPermission(final String permissionName, final CordovaPlugin plugin) {
        boolean permissionResult = false;
        Log.i(TAG, "Permission Camera Java");

        switch (permissionName) {
            case "CAMERA":
                permissionResult = plugin.cordova.hasPermission(Manifest.permission.CAMERA);
                break;
            case "WRITE_EXTERNAL_STORAGE":
                permissionResult = plugin.cordova.hasPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);
                break;
            default:
                break;
        }
        return permissionResult;
    }

    public static void requestPermission(final JSONObject params, final CordovaPlugin plugin) throws JSONException {
        Log.d(TAG, "requestPermission start");
        final List<String> permissionList = jsonArrayToList(params);

        boolean isPermission = false;
        for (int i = 0; i < permissionList.size(); i++) {
            isPermission = hasPermission(permissionList.get(i), plugin);
        }

        if (isPermission) {
            Log.i(TAG, "requestPermission -> already have the permissions");
            return;
        }
        Log.d(TAG, "requestPermission continue");

        boolean camera = false;
        if (permissionList.contains("CAMERA")) {
            camera = true;
        }

        boolean writeExternalStorage = false;
        if (permissionList.contains("WRITE_EXTERNAL_STORAGE")) {
            writeExternalStorage = true;
        }

        final String[] permissions = {
            (camera) ? Manifest.permission.CAMERA : null,
            (writeExternalStorage) ? Manifest.permission.WRITE_EXTERNAL_STORAGE : null
        };

        Log.d(TAG, "requestCameraPermission: PermissionArraySize" + permissions.length);
        plugin.cordova.requestPermissions(plugin, CAMERA_PERMISSION_CODE, permissions);
        Log.d(TAG, "requestPermissions -> apply permission");
    }

    public static List<String> jsonArrayToList(final JSONObject jsonObject) throws JSONException {
        final JSONArray permissionArray = jsonObject.optJSONArray("permissionList");

        if (permissionArray != null) {
            final List<String> permissionList = new ArrayList<>(permissionArray.length());
            for (int i = 0; i < permissionArray.length(); i++) {
                permissionList.add(permissionArray.getString(i));
            }
            return permissionList;
        }

        return Collections.emptyList();
    }
}
