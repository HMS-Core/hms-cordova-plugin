/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.location.services;

import com.huawei.hms.cordova.location.basef.CordovaBaseModule;
import com.huawei.hms.cordova.location.basef.CordovaMethod;
import com.huawei.hms.cordova.location.basef.HMSLog;
import com.huawei.hms.cordova.location.basef.handler.CorPack;
import com.huawei.hms.cordova.location.basef.handler.Promise;

import org.json.JSONArray;

public class PluginService extends CordovaBaseModule {

    @CordovaMethod
    @HMSLog
    public void initialize(final CorPack corPack, JSONArray args, final Promise cb) {
        cb.success();
    }

    @CordovaMethod
    @HMSLog
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise cb) {
        corPack.enableLogger();
    }

    @CordovaMethod
    @HMSLog
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise cb) {
        corPack.disableLogger();
    }
}
