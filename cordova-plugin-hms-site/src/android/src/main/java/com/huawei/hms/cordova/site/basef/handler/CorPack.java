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

package com.huawei.hms.cordova.site.basef.handler;

import android.content.Intent;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

public final class CorPack {
    private final CordovaPlugin cordovaPlugin;
    private final CordovaWebView webView;
    private final CordovaInterface cordova;
    private final CordovaEventRunner eventRunner;
    private final HMSLogger hmsLogger;

    CorPack(final CordovaPlugin cordovaPlugin, final CordovaEventRunner eventRunner, final HMSLogger hmsLogger) {
        this.cordovaPlugin = cordovaPlugin;
        this.webView = cordovaPlugin.webView;
        this.cordova = cordovaPlugin.cordova;
        this.eventRunner = eventRunner;
        this.hmsLogger = hmsLogger;
    }

    public void enableLogger() {
        hmsLogger.enableLogger();
    }

    public void disableLogger() {
        hmsLogger.disableLogger();
    }

    public void startActivityForResult(Intent intent, int requestCode) {
        cordova.startActivityForResult(cordovaPlugin, intent, requestCode);
    }

    public void requestPermission(int requestCode, String permission) {
        cordova.requestPermission(cordovaPlugin, requestCode, permission);
    }

    public void requestPermissions(int requestCode, String[] permissions) {
        cordova.requestPermissions(cordovaPlugin, requestCode, permissions);
    }

    public boolean hasPermission(String permission) {
        return cordova.hasPermission(permission);
    }

    public CordovaWebView getCordovaWebView() {
        return webView;
    }

    public CordovaInterface getCordova() {
        return cordova;
    }

    public CordovaEventRunner getEventRunner() {
        return eventRunner;
    }
}
