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

import com.huawei.hms.cordova.nearby.basef.CordovaBaseModule;
import com.huawei.hms.cordova.nearby.basef.CordovaMethod;
import com.huawei.hms.cordova.nearby.basef.HMSLog;
import com.huawei.hms.cordova.nearby.basef.handler.CorPack;
import com.huawei.hms.cordova.nearby.basef.handler.Promise;
import com.huawei.hms.cordova.nearby.utils.HMSUtils;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.NearbyApiContext;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Locale;

public class HMSNearbyBase extends CordovaBaseModule {

    public HMSNearbyBase() {
    }

    /* HMS LOGGER */
    @HMSLog
    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        corPack.disableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void hasPermission(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String permission = args.getString(0);
        promise.success(corPack.hasPermission(permission));
    }
    
    @HMSLog
    @CordovaMethod
    public void requestPermission(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String permission = args.getString(0);
        corPack.requestPermission(0, permission);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void requestPermissions(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        List<String> permissions = HMSUtils.convertJSONArrayToList(args.getJSONArray(0));
        corPack.requestPermissions(0, permissions.toArray(new String[0]));
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void setApiKey(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String apiKey = args.getString(0);
        NearbyApiContext.getInstance().setApiKey(apiKey);
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void getApiKey(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String apiKey = NearbyApiContext.getInstance().getApiKey();
        promise.success(apiKey);
    }

    @HMSLog
    @CordovaMethod
    public void getVersion(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String version = Nearby.getVersion();
        promise.success(version);
    }
}
