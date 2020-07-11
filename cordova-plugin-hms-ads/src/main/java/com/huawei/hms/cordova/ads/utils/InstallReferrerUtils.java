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

package com.huawei.hms.cordova.ads.utils;

import android.os.RemoteException;
import android.util.Log;
import com.huawei.hms.ads.installreferrer.api.InstallReferrerClient;
import com.huawei.hms.ads.installreferrer.api.InstallReferrerStateListener;
import com.huawei.hms.ads.installreferrer.api.ReferrerDetails;
import java.io.IOException;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

public class InstallReferrerUtils {
    private static final String TAG = InstallReferrerUtils.class.getSimpleName();

    private static InstallReferrerClient client;

    private static synchronized InstallReferrerClient getClient(CordovaInterface cordova, boolean isTest) {
        if (client == null) {
            Log.d(TAG, "getClient() :: building client...");
            client = InstallReferrerClient.newBuilder(cordova.getContext()).setTest(isTest).build();
        }

        return client;
    }

    public static JSONObject fromReferrerDetailsToJSONObject(ReferrerDetails rd) {
        try {
            return new JSONObject()
                    .put("responseCode", InstallReferrerClient.InstallReferrerResponse.OK)
                    .put("installReferrer", rd.getInstallReferrer())
                    .put("referrerClickTimestamp", rd.getReferrerClickTimestampMillisecond())
                    .put("installBeginTimestamp", rd.getInstallBeginTimestampMillisecond());
        } catch (JSONException ignored) {
            return null;
        }
    }

    private static InstallReferrerStateListener getListener(CallbackContext callback) {
        return new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                Log.d(TAG, JavaUtils.format("onInstallReferrerSetupFinished() :: ok with %s", responseCode));

                if (responseCode != InstallReferrerClient.InstallReferrerResponse.OK) {
                    callback.success(CordovaUtils.keyValPair("responseCode", responseCode));
                    return;
                }

                ReferrerDetails referrerDetails = null;
                try {
                    referrerDetails = client.getInstallReferrer();
                } catch (RemoteException | IOException e) {
                    Log.e(TAG, "onInstallReferrerSetupFinished() :: error : " + e.getMessage());
                }

                if (null != referrerDetails) {
                    callback.success(fromReferrerDetailsToJSONObject(referrerDetails));
                } else {
                    callback.error("null referrerDetails");
                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                Log.d(TAG, "onInstallReferrerServiceDisconnected()");
                callback.error("service disconnected");
            }
        };
    }

    public static void start(CordovaInterface cordova, boolean isTest, CallbackContext callback) {
        cordova.getThreadPool().execute(() -> {
            getClient(cordova, isTest).startConnection(getListener(callback));
        });
    }

    public static void disconnect(CallbackContext callbackContext) {
        Log.d(TAG, "disconnect()");

        if (null != client) {
            client.endConnection();
            client = null;
        }

        callbackContext.success();
    }
}
