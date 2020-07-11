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

package com.huawei.hms.cordova.mlkit.utils;

import android.Manifest;
import android.os.Build;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class PermissionUtils {
    private static final String TAG = PermissionUtils.class.getSimpleName();
    private static final int CAMERA_PERMISSION_CODE = 100;

    public static boolean hasCameraPermission(String permissionName, CordovaPlugin plugin) throws JSONException {
        boolean permissionResult=false;
        Log.i(TAG, "Permission Camera Java");

        switch (permissionName) {
            case "camera":
                permissionResult = plugin.cordova.hasPermission(Manifest.permission.CAMERA);
                break;
            case "readExternalStorage":
                permissionResult = plugin.cordova.hasPermission(Manifest.permission.READ_EXTERNAL_STORAGE);
                break;
            case "writeExternalStorage":
                permissionResult = plugin.cordova.hasPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE);
                break;
            case "audio":
                permissionResult = plugin.cordova.hasPermission(Manifest.permission.RECORD_AUDIO);
                break;
            default:
                break;
        }

        Log.i(TAG, "hasCameraPermissionBoolenResult: "+permissionResult);
        return permissionResult;
    }


    public static void requestCameraPermission(CallbackContext callbackContext, JSONObject params, CordovaPlugin plugin) throws JSONException {
        Log.d(TAG, "requestPermission start");
        boolean camera=false;
        boolean readExternalStorage=false;
        boolean writeExternalStorage=false;
        boolean audio=false;
        List<String> permissionList=jsonArrayToList(params);

        boolean isPermission=false;
        for (int i = 0; i <permissionList.size() ; i++) {
            isPermission=hasCameraPermission(permissionList.get(i),plugin);
        }
        if(isPermission){
            Log.i(TAG, "requestPermission -> already have the permissions");
            return;
        }
        Log.d(TAG, "requestPermission continue");
        if (permissionList.contains("camera")){
            camera=true;
        }
        if (permissionList.contains("readExternalStorage")){
            readExternalStorage =true;
        }
        if (permissionList.contains("writeExternalStorage")){
            writeExternalStorage = true;
        }
        if (permissionList.contains("audio")){
            audio = true;
        }

        String[] permissions = {(camera)?Manifest.permission.CAMERA:null,(readExternalStorage)?Manifest.permission.READ_EXTERNAL_STORAGE:null,(writeExternalStorage)?Manifest.permission.WRITE_EXTERNAL_STORAGE:null,(audio)?Manifest.permission.RECORD_AUDIO:null};

        Log.d(TAG, "requestCameraPermission: PermissionArraySize"+permissions.length);
        plugin.cordova.requestPermissions(plugin, CAMERA_PERMISSION_CODE, permissions);

        Log.d(TAG, "requestPermissions -> apply permission");
    }
    public static List<String> jsonArrayToList(JSONObject jsonObject) throws JSONException {
        JSONArray permissionArray = jsonObject.optJSONArray("permissionList");
        List<String> permissionList = new ArrayList<>(permissionArray.length());
        for (int i = 0; i < permissionArray.length(); i++) {
            permissionList.add(permissionArray.getString(i));
        }
        return permissionList;
    }

}