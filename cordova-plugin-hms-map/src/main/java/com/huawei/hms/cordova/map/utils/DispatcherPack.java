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

package com.huawei.hms.cordova.map.utils;

import com.huawei.hms.cordova.map.helpers.Consumer;

import org.apache.cordova.CallbackContext;
import org.json.JSONObject;


public class DispatcherPack {
    public static final String TAG = ActionPack.class.getSimpleName();

    public Object realObject;
    public JSONObject incomingObject;
    public JSONObject args;
    public CallbackContext callback;

    public static DispatcherPack create(Object realObject, JSONObject incomingObject, JSONObject args, CallbackContext callback) {
        DispatcherPack dispatcherPack = new DispatcherPack();
        dispatcherPack.realObject = realObject;
        dispatcherPack.incomingObject = incomingObject;
        dispatcherPack.args = args;
        dispatcherPack.callback = callback;
        return dispatcherPack;
    }

    public <T> T obj(Class<T> target) {
        return target.cast(realObject);
    }

    public <T> void handle(Consumer<T> consumer, T obj) {
        consumer.run(obj);
        callback.success();
    }

    public void handle(Runnable runnable) {
        runnable.run();
        callback.success();
    }

    public void handle(JSONObject json) {
        callback.success(json);
    }
}
