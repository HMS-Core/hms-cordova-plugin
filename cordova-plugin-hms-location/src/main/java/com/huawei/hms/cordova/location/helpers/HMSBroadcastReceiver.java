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

package com.huawei.hms.cordova.location.helpers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import com.huawei.hms.cordova.location.helpers.Constants.Event;
import com.huawei.hms.cordova.location.utils.ActivityUtils;
import com.huawei.hms.cordova.location.utils.CordovaUtils;
import com.huawei.hms.cordova.location.utils.GeofenceUtils;
import com.huawei.hms.location.ActivityConversionResponse;
import com.huawei.hms.location.ActivityIdentificationResponse;
import com.huawei.hms.location.GeofenceData;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;


public class HMSBroadcastReceiver extends BroadcastReceiver {

    public static final String TAG = HMSBroadcastReceiver.class.getSimpleName();

    public static final String ACTION_PROCESS_LOCATION =
        "com.huawei.hms.cordova.location.GeoFenceBroadcastReceiver.ACTION_PROCESS_LOCATION";

    public static final String ACTION_PROCESS_IDENTIFICATION =
        "com.huawei.hms.cordova.location.HMSActivityIdentificationModule.ACTION_PROCESS_ACTIVITY_IDENTIFICATION";

    public static final String ACTION_PROCESS_CONVERSION =
        "com.huawei.hms.cordova.location.HMSActivityIdentificationModule.ACTION_PROCESS_ACTIVITY_CONVERSION";

    private static HMSBroadcastReceiver instance;
    private CordovaInterface mCordovaInterface;
    private CordovaWebView mCordovaWebView;

    public static synchronized HMSBroadcastReceiver getInstance() {
        if (instance == null) {
            instance = new HMSBroadcastReceiver();
        }
        return instance;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d(TAG, "onReceive start");

        if (intent == null) {
            Log.d(TAG, "onReceive, intent is null");
            return;
        }

        if (mCordovaInterface == null || mCordovaWebView == null) {
            Log.d(TAG, "onReceive, cordova.getActivity().getApplicationContext() not initalized yet");
            return;
        }

        try {
            if (ACTION_PROCESS_IDENTIFICATION.equals(intent.getAction())
                && ActivityIdentificationResponse.containDataFromIntent(intent)) {
                Log.d(TAG, intent.getAction());
                ActivityIdentificationResponse response = ActivityIdentificationResponse.getDataFromIntent(intent);
                CordovaUtils.sendEvent(
                    mCordovaInterface,
                    mCordovaWebView,
                    Event.ACTIVITY_IDENTIFICATION_RESULT.getVal(),
                    ActivityUtils.fromActivityIdentificationResponseToJSONObject(response)
                );
            } else if (ACTION_PROCESS_CONVERSION.equals(intent.getAction()) && ActivityConversionResponse.containDataFromIntent(intent)) {
                Log.d(TAG, intent.getAction());
                ActivityConversionResponse response = ActivityConversionResponse.getDataFromIntent(intent);
                Log.d(TAG, String.valueOf(response.getActivityConversionDatas().size()));
                CordovaUtils.sendEvent(
                    mCordovaInterface,
                    mCordovaWebView,
                    Event.ACTIVITY_CONVERSION_RESULT.getVal(),
                    ActivityUtils.fromActivityConversionResponseToJSONObject(response)
                );
            } else if (ACTION_PROCESS_LOCATION.equals(intent.getAction())) {
                Log.d(TAG, intent.getAction());
                GeofenceData geofenceData = GeofenceData.getDataFromIntent(intent);
                CordovaUtils.sendEvent(
                    mCordovaInterface,
                    mCordovaWebView,
                    Event.GEOFENCE_RESULT.getVal(),
                    GeofenceUtils.fromGeofenceDataToJSONObject(geofenceData)
                );
            } else {
                Log.d(TAG, "onReceive unhandled intent, " + intent.getAction());
            }

            Log.d(TAG, "onReceive end");
        } catch (JSONException ex) {
            Log.e(TAG, "json exception: " + ex.getMessage());
        }
    }

    public void setCordova(final CordovaInterface cordova, final CordovaWebView webView) {
        mCordovaInterface = cordova;
        mCordovaWebView = webView;
    }

    public static IntentFilter getIntentFilter() {
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction(HMSBroadcastReceiver.ACTION_PROCESS_CONVERSION);
        intentFilter.addAction(HMSBroadcastReceiver.ACTION_PROCESS_IDENTIFICATION);
        intentFilter.addAction(HMSBroadcastReceiver.ACTION_PROCESS_LOCATION);
        return intentFilter;
    }

    public static HMSBroadcastReceiver init(final CordovaInterface cordova, final CordovaWebView webView) {
        cordova.getActivity().registerReceiver(getInstance(), getIntentFilter());
        getInstance().setCordova(cordova, webView);
        return getInstance();
    }

}
