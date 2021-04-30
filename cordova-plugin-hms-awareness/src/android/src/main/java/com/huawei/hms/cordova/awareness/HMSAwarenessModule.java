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

package com.huawei.hms.cordova.awareness;

import com.huawei.hms.cordova.awareness.backend.utils.JSONUtils;
import com.huawei.hms.cordova.awareness.basef.CordovaBaseModule;
import com.huawei.hms.cordova.awareness.basef.CordovaMethod;
import com.huawei.hms.cordova.awareness.basef.HMSLog;
import com.huawei.hms.cordova.awareness.basef.handler.CorPack;
import com.huawei.hms.cordova.awareness.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.List;

public class HMSAwarenessModule extends CordovaBaseModule {

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
        List<String> permissions = JSONUtils.convertJSONArrayToList(args.getJSONArray(0));
        corPack.requestPermissions(0, permissions.toArray(new String[0]));
        promise.success();
    }
}

