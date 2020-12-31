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
import android.net.Uri;
import android.os.ParcelFileDescriptor;

import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.CordovaMethod;
import com.huawei.hms.cordova.nearby.basef.HMSLog;
import com.huawei.hms.cordova.nearby.basef.handler.CorPack;
import com.huawei.hms.cordova.nearby.basef.handler.Promise;
import com.huawei.hms.cordova.nearby.utils.HMSUtils;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.transfer.Data;
import com.huawei.hms.nearby.transfer.TransferEngine;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.List;

import java.util.Locale;

public class HMSTransfer extends CordovaBaseModule {
    private Activity activity;
    private TransferEngine transferEngine;

    public HMSTransfer(Activity activity) {
        this.activity = activity;
        transferEngine = Nearby.getTransferEngine(activity);
    }
    
    @HMSLog
    @CordovaMethod
    public void sendBytes(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        byte[] bytes = HMSUtils.convertJSONArrayToBytes(args.getJSONArray(0));
        List<String> endpointIds = HMSUtils.convertJSONArrayToList(args.getJSONArray(1));
        sendData(Data.fromBytes(bytes), endpointIds, promise);
    }
    
    @HMSLog
    @CordovaMethod
    public void sendFile(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String fileUri = args.getString(0);
        List<String> endpointIds = HMSUtils.convertJSONArrayToList(args.getJSONArray(1));
        ParcelFileDescriptor pfd;
        try {
            pfd = activity.getContentResolver().openFileDescriptor(Uri.parse(fileUri), "r");
        } catch (FileNotFoundException e) {
            promise.error(String.format(Locale.ENGLISH, "sendFile: %s", e.getMessage()));
            return;
        }
        sendData(Data.fromFile(pfd), endpointIds, promise);
    }
    
    @HMSLog
    @CordovaMethod
    public void sendStream(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String urlString = args.getString(0);
        List<String> endpointIds = HMSUtils.convertJSONArrayToList(args.getJSONArray(1));
        InputStream inputStream;
        try {
            URL url = new URL(urlString);
            inputStream = url.openStream();
        } catch (IOException e) {
            promise.error(String.format(Locale.ENGLISH, "sendStream: %s", e.getMessage()));
            return;
        }
        sendData(Data.fromStream(inputStream), endpointIds, promise);
    }

    @HMSLog
    @CordovaMethod
    public void cancelDataTransfer(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String dataIdText = args.getString(0);
        long dataId = Long.parseLong(dataIdText);
        transferEngine.cancelDataTransfer(dataId)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "cancelDataTransfer: %s", e.getMessage()));
                });
    }

    private void sendData(Data data, List<String> endpointIds, final Promise promise) {
        transferEngine.sendData(endpointIds, data)
                .addOnSuccessListener(unused -> {
                    promise.success();
                })
                .addOnFailureListener(e -> {
                    promise.error(String.format(Locale.ENGLISH, "sendData: %s", e.getMessage()));
                });
    }
}
