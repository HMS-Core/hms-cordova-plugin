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

import android.util.Log;

import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

public class CordovaUtils {
    private static final String TAG = CordovaUtils.class.getName();

    private CordovaUtils() {
    }

    public static <T> JSONObject keyValPair(final String key, final T val) {
        final JSONObject map = new JSONObject();
        try {
            map.put(key, val);
        } catch (final JSONException e) {
            Log.d(TAG, "JSONException :: " + e.toString());
        }
        return map;
    }

    public static int resId(final CordovaInterface cordova, final String type, final String name) {
        if (isNullOrEmpty(type) || isNullOrEmpty(name)) {
            return -1;
        }

        return cordova.getContext().getResources().getIdentifier(name, type, cordova.getContext().getPackageName());
    }

    public static int rid(final CordovaInterface cordova, final String name) {
        return resId(cordova, "id", name);
    }

    public static int rlayout(final CordovaInterface cordova, final String name) {
        return resId(cordova, "layout", name);
    }

    public static int rdraw(final CordovaInterface cordova, final String name) {
        return resId(cordova, "drawable", name);
    }

    public static boolean isNullOrEmpty(final String item) {
        return null == item || item.isEmpty();
    }
}
