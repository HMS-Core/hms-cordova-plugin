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
package com.huawei.hms.cordova.ads;

import android.content.Context;
import android.os.RemoteException;
import android.util.Log;

import com.huawei.hms.ads.installreferrer.api.InstallReferrerClient;
import com.huawei.hms.ads.installreferrer.api.InstallReferrerStateListener;
import com.huawei.hms.ads.installreferrer.api.ReferrerDetails;
import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.CordovaMethod;
import com.huawei.hms.cordova.ads.basef.HMSLog;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.Promise;

import org.json.JSONArray;

import java.io.IOException;

public class InstallReferrerModule extends CordovaBaseModule {
    private static final String TAG = InstallReferrerModule.class.getSimpleName();

    private InstallReferrerClient client;
    private int respCode;

    private synchronized InstallReferrerClient getClient(Context context, boolean isTest) {
        if (client == null) {
            client = InstallReferrerClient.newBuilder(context).setTest(isTest).build();
        }
        return client;
    }

    private InstallReferrerStateListener getInstallReferrerStateListener(Promise promise) {
        return new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                respCode = responseCode;
                promise.success(responseCode);
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                Log.d(InstallReferrerModule.TAG, "onInstallReferrerServiceDisconnected()");
                promise.error("service disconnected");
            }
        };
    }

    @CordovaMethod
    @HMSLog
    public void referrerClientStartConnection(final CorPack corPack, JSONArray args, final Promise promise) {
        boolean isTest = args.optBoolean(0, false);
        corPack.getCordova()
            .getThreadPool()
            .execute(() -> getClient(corPack.getCordovaWebView().getContext(), isTest).startConnection(
                getInstallReferrerStateListener(promise)));
    }

    @CordovaMethod
    @HMSLog
    public void referrerClientEndConnection(final CorPack corPack, JSONArray args, final Promise promise) {
        if (null != client) {
            client.endConnection();
            client = null;
        }
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void referrerClientIsReady(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(client.isReady());
    }

    @CordovaMethod
    @HMSLog
    public void getInstallReferrer(final CorPack corPack, JSONArray args, final Promise promise) {
        if (respCode != InstallReferrerClient.InstallReferrerResponse.OK) {
            promise.success(respCode);
            return;
        }
        ReferrerDetails referrerDetails = null;
        try {
            referrerDetails = client.getInstallReferrer();
        } catch (RemoteException | IOException e) {
            Log.e(TAG, "getInstallReferrer() :: error : " + e.getMessage());
        }

        if (null != referrerDetails) {
            promise.success(Converter.fromReferrerDetailsToJSONObject(referrerDetails));
        } else {
            promise.error("null referrerDetails");
        }
        promise.success();
    }

}
