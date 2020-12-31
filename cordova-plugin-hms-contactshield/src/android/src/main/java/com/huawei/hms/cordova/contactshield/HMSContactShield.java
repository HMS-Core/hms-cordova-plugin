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
package com.huawei.hms.cordova.contactshield;

import com.huawei.hms.cordova.contactshield.basef.handler.CordovaController;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.util.Arrays;

public class HMSContactShield extends CordovaPlugin {

    private CordovaController cordovaController;
    public static final String SERVICE = "CordovaContactShield";
    public static final String VERSION = "5.0.4.302";
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        ContactShieldModule csm = new ContactShieldModule(webView.getContext());
        cordovaController = new CordovaController(this, SERVICE, VERSION,
                Arrays.asList(csm));
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }
}
