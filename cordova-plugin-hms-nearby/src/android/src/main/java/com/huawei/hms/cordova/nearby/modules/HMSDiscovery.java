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

import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.CordovaMethod;
import com.huawei.hms.cordova.nearby.basef.HMSLog;
import com.huawei.hms.cordova.nearby.basef.handler.CorPack;
import com.huawei.hms.cordova.nearby.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.nearby.basef.handler.Promise;
import com.huawei.hms.cordova.nearby.utils.HMSEvents;
import com.huawei.hms.cordova.nearby.utils.HMSUtils;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.discovery.BroadcastOption;
import com.huawei.hms.nearby.discovery.DiscoveryEngine;
import com.huawei.hms.nearby.discovery.Policy;
import com.huawei.hms.nearby.discovery.ConnectCallback;
import com.huawei.hms.nearby.discovery.ConnectInfo;
import com.huawei.hms.nearby.discovery.ConnectResult;
import com.huawei.hms.nearby.discovery.ScanEndpointCallback;
import com.huawei.hms.nearby.discovery.ScanEndpointInfo;
import com.huawei.hms.nearby.discovery.ScanOption;
import com.huawei.hms.nearby.transfer.Data;
import com.huawei.hms.nearby.transfer.DataCallback;
import com.huawei.hms.nearby.transfer.TransferStateUpdate;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class HMSDiscovery extends CordovaBaseModule {
    private DiscoveryEngine discoveryEngine;

    public HMSDiscovery(Activity activity) {
        discoveryEngine = Nearby.getDiscoveryEngine(activity);
    }

    @HMSLog
    @CordovaMethod
    public void startBroadcasting(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String name = args.getString(0);
        String serviceId = args.getString(1);
        int policyNumber = args.getInt(2);
        Policy policy = HMSUtils.getPolicyByNumber(policyNumber);

        BroadcastOption broadcastOption = new BroadcastOption.Builder().setPolicy(policy).build();
        discoveryEngine.startBroadcasting(name, serviceId,
                new ConnectCallbackHandler(corPack.getEventRunner()), broadcastOption)
                .addOnSuccessListener(aVoid -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "startBroadcasting: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void stopBroadcasting(final CorPack corPack, JSONArray args, final Promise promise) {
        discoveryEngine.stopBroadcasting();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void startScan(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String serviceId = args.getString(0);
        int policyNumber = args.getInt(1);
        Policy policy = HMSUtils.getPolicyByNumber(policyNumber);

        ScanOption scanOption = new ScanOption.Builder().setPolicy(policy).build();
        discoveryEngine.startScan(serviceId,
                new ScanEndpointCallbackHandler(corPack.getEventRunner()), scanOption)
                .addOnSuccessListener(aVoid -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "startScan: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void stopScan(final CorPack corPack, JSONArray args, final Promise promise) {
        discoveryEngine.stopScan();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void requestConnect(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String name = args.getString(0);
        String endpointId = args.getString(1);
        discoveryEngine.requestConnect(name, endpointId, 
                new ConnectCallbackHandler(corPack.getEventRunner()))
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "requestConnect: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void acceptConnect(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String endpointId = args.getString(0);
        discoveryEngine.acceptConnect(endpointId,
                new DataCallbackHandler(corPack.getEventRunner()))
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "acceptConnect: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void rejectConnect(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String endpointId = args.getString(0);
        discoveryEngine.rejectConnect(endpointId)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "rejectConnect: %s", e.getMessage()));
                });
    }

    @HMSLog
    @CordovaMethod
    public void disconnect(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String endpointId = args.getString(0);
        discoveryEngine.disconnect(endpointId);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disconnectAll(final CorPack corPack, JSONArray args, final Promise promise) {
        discoveryEngine.disconnectAll();
        promise.success();
    }

    private static class ScanEndpointCallbackHandler extends ScanEndpointCallback {
        private final CordovaEventRunner eventRunner;

        public ScanEndpointCallbackHandler(CordovaEventRunner eventRunner) {
            super();
            this.eventRunner = eventRunner;
        }

        @Override
        public void onFound(String s, ScanEndpointInfo scanEndpointInfo) {
            JSONObject jsonObject = HMSUtils.convertScanEndpointInfoToJSONObject(s, scanEndpointInfo);
            eventRunner.sendEvent(HMSEvents.EVENT_SCAN_ON_FOUND, jsonObject);
        }

        @Override
        public void onLost(String s) {
            JSONObject jsonObject = HMSUtils.generateEndpointIdJSONObject(s);
            eventRunner.sendEvent(HMSEvents.EVENT_SCAN_ON_LOST, jsonObject);
        }
    }

    private static class DataCallbackHandler extends DataCallback {
        private final CordovaEventRunner eventRunner;

        public DataCallbackHandler(CordovaEventRunner eventRunner) {
            super();
            this.eventRunner = eventRunner;
        }

        @Override
        public void onReceived(String s, Data data) {
            JSONObject jsonObject = HMSUtils.convertReceivedDataToJSONObject(s, data);
            eventRunner.sendEvent(HMSEvents.EVENT_DATA_ON_RECEIVED, jsonObject);
        }

        @Override
        public void onTransferUpdate(String s, TransferStateUpdate transferStateUpdate) {
            JSONObject jsonObject = HMSUtils.convertTransferStateUpdateToJSONObject(s, transferStateUpdate);
            eventRunner.sendEvent(HMSEvents.EVENT_DATA_ON_TRANSFER_UPDATE, jsonObject);
        }
    }

    private static class ConnectCallbackHandler extends ConnectCallback {
        private final CordovaEventRunner eventRunner;

        public ConnectCallbackHandler(CordovaEventRunner eventRunner) {
            super();
            this.eventRunner = eventRunner;
        }

        @Override
        public void onEstablish(String s, ConnectInfo connectInfo) {
            JSONObject jsonObject = HMSUtils.convertConnectInfoToJSONObject(s, connectInfo);
            eventRunner.sendEvent(HMSEvents.EVENT_CONNECTION_ON_ESTABLISH, jsonObject);
        }

        @Override
        public void onResult(String s, ConnectResult connectResult) {
            JSONObject jsonObject = HMSUtils.convertConnectResultToJSONObject(s, connectResult);
            eventRunner.sendEvent(HMSEvents.EVENT_CONNECTION_ON_RESULT, jsonObject);
        }

        @Override
        public void onDisconnected(String s) {
            JSONObject jsonObject = HMSUtils.generateEndpointIdJSONObject(s);
            eventRunner.sendEvent(HMSEvents.EVENT_CONNECTION_ON_DISCONNECT, jsonObject);
        }
    }
}
