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

import com.huawei.hms.cordova.ads.basef.handler.CordovaEventRunner;
import com.huawei.hms.cordova.ads.basef.handler.Promise;
import com.huawei.hms.cordova.ads.layout.PluginLayoutManager;
import com.huawei.hms.cordova.ads.utils.ErrorCodes;

import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public abstract class PluginAbstractAdManager {
    protected CordovaEventRunner pluginListenerManager;
    protected final int managerId;
    private static int managerIdCounter = 0;
    protected final String TAG;

    public PluginAbstractAdManager() {
        managerId = getManagerIdCounter();
        TAG = getClass().getSimpleName();
    }

    private static synchronized int getManagerIdCounter() {
        return ++PluginAbstractAdManager.managerIdCounter;
    }

    public int getManagerId() {
        return managerId;
    }

    public void runMethod(String method, JSONObject args, final Promise promise)
        throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Method m = getClass().getDeclaredMethod(method, JSONObject.class, Promise.class);
        m.invoke(this, args, promise);
    }

    public void checkIfObjectNullOrThrowError(Object object, Promise promise, ErrorCodes error) {
        if (object == null) {
            promise.error(error.toJson());
            throw new NullPointerException(Integer.toString(error.toJson().optInt("code")));
        }
    }

    /**
     * Specifies if the ad manager has a custom layout
     *
     * @return true if custom layout exist, false if not exist
     */
    public abstract boolean hasLayout();

    /**
     * Returns pluginLayoutManager of the adManager class.
     *
     * @return PluginlayoutManager
     */
    public abstract PluginLayoutManager getLayoutManager();
}
