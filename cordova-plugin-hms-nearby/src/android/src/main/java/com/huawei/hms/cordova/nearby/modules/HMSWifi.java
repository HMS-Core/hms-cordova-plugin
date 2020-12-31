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

package com.huawei.hms.cordova.nearby.modules;

import android.app.Activity;

import com.huawei.hms.cordova.nearby.basef.handler.CorPack;
import com.huawei.hms.cordova.nearby.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.nearby.basef.handler.Promise;
import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.CordovaMethod;
import com.huawei.hms.cordova.nearby.basef.HMSLog;
import com.huawei.hms.cordova.nearby.utils.HMSEvents;
import com.huawei.hms.cordova.nearby.utils.HMSUtils;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.discovery.ScanEndpointInfo;
import com.huawei.hms.nearby.wifishare.WifiShareCallback;
import com.huawei.hms.nearby.wifishare.WifiShareEngine;
import com.huawei.hms.nearby.wifishare.WifiSharePolicy;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class HMSWifi extends CordovaBaseModule {

    private WifiShareEngine wifiShareEngine;

    public HMSWifi(Activity activity) {
        wifiShareEngine = Nearby.getWifiShareEngine(activity);
    }

    @HMSLog
    @CordovaMethod
    public void startWifiShare(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        int policyNumber = args.getInt(0);
        WifiSharePolicy policy = HMSUtils.getWifiSharePolicyByNumber(policyNumber);
        wifiShareEngine.startWifiShare(new WifiShareCallbackHandler(corPack.getEventRunner()), policy)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "startWifiShare: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void stopWifiShare(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        wifiShareEngine.stopWifiShare()
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "stopWifiShare: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void shareWifiConfig(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String endpointId = args.getString(0);
        wifiShareEngine.shareWifiConfig(endpointId)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "shareWifiConfig: %s", e.getMessage()));
                });
    }

    private static class WifiShareCallbackHandler extends WifiShareCallback {
        private final CordovaEventRunner eventRunner;
        public WifiShareCallbackHandler(CordovaEventRunner eventRunner) {
            super();
            this.eventRunner = eventRunner;
        }

        @Override
        public void onFound(String s, ScanEndpointInfo scanEndpointInfo) {
            JSONObject jsonObject = HMSUtils.convertScanEndpointInfoToJSONObject(s, scanEndpointInfo);
            eventRunner.sendEvent(HMSEvents.EVENT_WIFI_ON_FOUND, jsonObject);
        }

        @Override
        public void onLost(String s) {
            JSONObject jsonObject = HMSUtils.generateEndpointIdJSONObject(s);
            eventRunner.sendEvent(HMSEvents.EVENT_WIFI_ON_LOST, jsonObject);
        }

        @Override
        public void onFetchAuthCode(String s, String s1) {
            JSONObject jsonObject = HMSUtils.generateAuthCodeJSONObject(s, s1);
            eventRunner.sendEvent(HMSEvents.EVENT_WIFI_ON_FETCH_AUTH_CODE, jsonObject);
        }

        @Override
        public void onWifiShareResult(String s, int i) {
            JSONObject jsonObject = HMSUtils.generateStatusCodeJSONObject(s, i);
            eventRunner.sendEvent(HMSEvents.EVENT_WIFI_ON_SHARE_RESULT, jsonObject);
        }
    }
}
