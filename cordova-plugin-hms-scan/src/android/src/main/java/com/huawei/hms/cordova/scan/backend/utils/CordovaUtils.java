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

package com.huawei.hms.cordova.scan.backend.utils;

import android.Manifest;
import android.util.Log;

import com.huawei.hms.cordova.scan.backend.helpers.Exceptions;
import com.huawei.hms.cordova.scan.backend.layout.InitialProps;
import com.huawei.hms.cordova.scan.basef.handler.CorPack;
import com.huawei.hms.cordova.scan.basef.handler.Promise;

import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

public class CordovaUtils {
    private static final String TAG = CordovaUtils.class.getName();

    private CordovaUtils() {
    }

    public static InitialProps constructInitialPropsFromJSON(JSONObject json) {
        InitialProps.Builder initialPropsBuilder = new InitialProps.Builder(json.optInt("x", 0), json.optInt("y", 0),
                json.optInt("width", 0), json.optInt("height", 0), json.optInt("pageXOffset", 0),
                json.optInt("pageYOffset", 0));

        if (json.has("marginBottom")) {
            initialPropsBuilder.marginBottom(json.optInt("marginBottom"));
        }
        if (json.has("marginRight")) {
            initialPropsBuilder.marginRight(json.optInt("marginRight"));
        }
        if (json.has("marginLeft")) {
            initialPropsBuilder.marginLeft(json.optInt("marginLeft"));
        }
        if (json.has("marginTop")) {
            initialPropsBuilder.marginTop(json.optInt("marginTop"));
        }
        return initialPropsBuilder.build();
    }

    public static int resId(final CordovaInterface cordova, final String type, final String name) {
        if (isNullOrEmpty(type) || isNullOrEmpty(name)) {
            return -1;
        }
        return cordova.getContext().getResources().getIdentifier(name, type, cordova.getContext().getPackageName());
    }

    public static int rdraw(final CordovaInterface cordova, final String name) {
        return resId(cordova, "drawable", name);
    }

    public static boolean isNullOrEmpty(final String item) {
        return null == item || item.isEmpty();
    }

    public static <T, R> Mapper<T, R> mapperWrapper(JSONMapper<T, R> jm) {
        return mapperWrapper(jm, null);
    }

    public static <T, R> Mapper<T, R> mapperWrapper(JSONMapper<T, R> jm, R def) {
        return arg -> {
            if (arg == null) {
                return null;
            }

            try {
                return jm.map(arg);
            } catch (JSONException | NullPointerException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
                return def;
            }
        };
    }

    public static boolean permissionCheck(CorPack corPack, Promise promise, String... permissions) {
        boolean camera = true;
        boolean readExternal = true;
        for (String permission : permissions) {
            if (permission.equals(Manifest.permission.CAMERA)) {
                camera = corPack.hasPermission(permission);
            } else {
                readExternal = corPack.hasPermission(permission);
            }
        }

        if (!camera && !readExternal) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_PERMISSION));
            return false;
        } else if (!camera) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_CAMERA_PERMISSION));
            return false;
        } else if (!readExternal) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NO_READ_EXTERNAL_PERMISSION));
            return false;
        } else {
            return true;
        }
    }
}
