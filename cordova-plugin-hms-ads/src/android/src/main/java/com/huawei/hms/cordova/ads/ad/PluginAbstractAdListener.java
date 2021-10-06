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
package com.huawei.hms.cordova.ads.ad;

import android.util.Log;

import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;

import java.util.Locale;

public abstract class PluginAbstractAdListener {
    protected final int objId;
    protected final CordovaEventRunner pluginListenerManager;

    public PluginAbstractAdListener(final CordovaEventRunner listenerManager, final int objectId) {
        pluginListenerManager = listenerManager;
        objId = objectId;
    }

    protected String generateEventName(String event) {
        return String.format(Locale.ENGLISH, event, objId);
    }

    protected void configureEventNameAndParamsThenSendEvent(String event, Object... params) {
        String eventName = generateEventName(event);
        Log.d("TAG", "event :: " + eventName);
        if (params.length == 0) {
            pluginListenerManager.sendEvent(eventName);
        } else {
            pluginListenerManager.sendEvent(eventName, params);
        }
    }
}
