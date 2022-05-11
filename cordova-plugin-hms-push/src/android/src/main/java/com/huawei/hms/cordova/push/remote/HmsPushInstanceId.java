/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push.remote;

import android.content.Context;

import android.util.Log;
import android.webkit.WebView;

import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.aaid.HmsInstanceId;
import com.huawei.hms.common.ApiException;
import com.huawei.hms.cordova.push.basef.CordovaBaseModule;
import com.huawei.hms.cordova.push.basef.CordovaMethod;
import com.huawei.hms.cordova.push.basef.HMSLog;
import com.huawei.hms.cordova.push.basef.handler.CorPack;
import com.huawei.hms.cordova.push.basef.handler.Promise;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.utils.ResolvableExceptionUtils;
import com.huawei.hms.opendevice.OpenDevice;
import com.huawei.hms.common.ResolvableApiException;

import org.json.JSONArray;
import org.json.JSONException;

public class HmsPushInstanceId extends CordovaBaseModule {

    private final String TAG = HmsPushInstanceId.class.getSimpleName();

    private final HmsInstanceId hmsInstanceId;

    private WebView webView;

    public HmsPushInstanceId(Context context) {
        hmsInstanceId = HmsInstanceId.getInstance(context);
    }

    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success(true);
    }

    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success(true);
    }

    @CordovaMethod
    public void init(final CorPack corPack, JSONArray args, final Promise promise) {
        Log.i(TAG, "HMSPush plugin initialized");
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void getToken(final CorPack corPack, JSONArray args, final Promise promise)
        throws ApiException, JSONException {
        String appId = AGConnectServicesConfig.fromContext(corPack.getCordova().getContext())
            .getString(Core.CLIENT_APP_ID);
        String scope = args.optString(0, "HCM");
        try {
            String token = hmsInstanceId.getToken(appId, scope);
            promise.success(token);

        } catch (ResolvableApiException e) {
            new ResolvableExceptionUtils(e, webView, TAG);
        }
    }

    @HMSLog
    @CordovaMethod
    public void getTokenWithSubjectId(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, ApiException {
        String token = hmsInstanceId.getToken(args.getString(0));
        promise.success(token);
    }

    @HMSLog
    @CordovaMethod
    public void getAAID(final CorPack corPack, JSONArray args, final Promise promise) {
        hmsInstanceId.getAAID()
            .addOnSuccessListener(task -> promise.success(task.getId()))
            .addOnFailureListener(e -> promise.error(e.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void getCreationTime(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(hmsInstanceId.getCreationTime());
    }

    @HMSLog
    @CordovaMethod
    public void getId(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(hmsInstanceId.getId());
    }

    @HMSLog
    @CordovaMethod
    public void deleteAAID(final CorPack corPack, JSONArray args, final Promise promise) throws ApiException {
        hmsInstanceId.deleteAAID();
        promise.success(true);
    }

    @HMSLog
    @CordovaMethod
    public void deleteToken(final CorPack corPack, JSONArray args, final Promise promise)
        throws ApiException, JSONException {
        String appId = AGConnectServicesConfig.fromContext(corPack.getCordova().getContext())
            .getString(Core.CLIENT_APP_ID);
        String scope = args.optString(0, "HCM");
        HmsInstanceId.getInstance(corPack.getCordova().getContext()).deleteToken(appId, scope);
        promise.success(true);
    }

    @HMSLog
    @CordovaMethod
    public void deleteTokenWithSubjectId(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException, ApiException {
        hmsInstanceId.deleteToken(args.getString(0));
        promise.success(true);
    }

    @HMSLog
    @CordovaMethod
    public void getOdid(final CorPack corPack, JSONArray args, final Promise promise) {
        OpenDevice.getOpenDeviceClient(corPack.getCordova().getContext())
            .getOdid()
            .addOnSuccessListener(odidResult -> promise.success(odidResult.getId()))
            .addOnFailureListener(e -> promise.error(e.getLocalizedMessage()));
    }

}
