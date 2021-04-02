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

package com.huawei.hms.cordova.availability;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.huawei.hms.api.HuaweiApiAvailability;
import com.huawei.hms.cordova.availability.basef.CordovaBaseModule;
import com.huawei.hms.cordova.availability.basef.CordovaMethod;
import com.huawei.hms.cordova.availability.basef.HMSLog;
import com.huawei.hms.cordova.availability.basef.handler.CorPack;
import com.huawei.hms.cordova.availability.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Map;

public class HMSAvailabilityImpl extends CordovaBaseModule {
    private static final String TAG = HMSAvailability.class.getName();
    private final Activity activity;
    private final Context context;

    public HMSAvailabilityImpl(Activity activity, Context context) {
        this.activity = activity;
        this.context = context;
    }

    @HMSLog
    @CordovaMethod
    public void getApiMap(final CorPack corPack, JSONArray args, final Promise promise) {
        Map<String, Integer> map = HuaweiApiAvailability.getApiMap();
        JSONObject result = mapToJSON(map);
        promise.success(result);
    }

    private JSONObject mapToJSON(Map<String, Integer> map) {
        JSONObject result = new JSONObject();
        try {
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                result.put(entry.getKey(), entry.getValue());
            }
        } catch (JSONException e) {
            Log.e(TAG, e.getLocalizedMessage());
        }

        return result;
    }

    @HMSLog
    @CordovaMethod
    public void getServicesVersionCode(final CorPack corPack, JSONArray args, final Promise promise) {
        int code = HuaweiApiAvailability.getServicesVersionCode();
        promise.success(code);
    }

    @HMSLog
    @CordovaMethod
    public void getErrorString(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int code = args.getInt(0);
        String result = HuaweiApiAvailability.getInstance().getErrorString(code);
        promise.success(result);
    }

    @HMSLog
    @CordovaMethod
    public void isUserResolvableError(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int errorCode = args.getInt(0);
        boolean result = HuaweiApiAvailability.getInstance().isUserResolvableError(errorCode);
        promise.success(result);
    }

    @HMSLog
    @CordovaMethod
    public void isHuaweiMobileNoticeAvailable(final CorPack corPack, JSONArray args, final Promise promise) {
        int isHuaweiMobileNoticeAvailable = HuaweiApiAvailability.getInstance().isHuaweiMobileNoticeAvailable(context);
        promise.success(isHuaweiMobileNoticeAvailable);
    }

    @HMSLog
    @CordovaMethod
    public void isHuaweiMobileServicesAvailable(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        final int isHuaweiMobileServicesAvailable;
        if (args.length() > 0) {
            int minApkVersion = args.getInt(0);
            isHuaweiMobileServicesAvailable = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(context, minApkVersion);
        } else {
            isHuaweiMobileServicesAvailable = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(context);
        }
        promise.success(isHuaweiMobileServicesAvailable);
    }

    @HMSLog
    @CordovaMethod
    public void resolveError(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int errorCode = args.getInt(0);
        int requestCode = args.getInt(1);
        HuaweiApiAvailability.getInstance().resolveError(activity, errorCode, requestCode);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void setServicesVersionCode(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int code = args.getInt(0);
        HuaweiApiAvailability.setServicesVersionCode(code);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void showErrorDialogFragment(final CorPack corPack, JSONArray args, final Promise promise) {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    boolean result;
                    int errorCode = args.getInt(0);
                    int requestCode = args.getInt(1);
                    if (args.length() > 2) {
                        result = HuaweiApiAvailability.getInstance().showErrorDialogFragment(activity, errorCode, requestCode,
                                dialog -> corPack.getCordovaWebView().loadUrl("javascript:window.runHMSEvent('onCancel')"));
                    } else {
                        result = HuaweiApiAvailability.getInstance().showErrorDialogFragment(activity, errorCode, requestCode);
                    }
                    promise.success(result);
                } catch (JSONException e) {
                    Log.e(TAG, e.getLocalizedMessage());
                }
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void showErrorNotification(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int errorCode = args.getInt(0);
        HuaweiApiAvailability.getInstance().showErrorNotification(context, errorCode);
        promise.success();
    }
}
