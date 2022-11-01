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

package com.huawei.hms.cordova.dtm;

import com.huawei.hms.cordova.dtm.basef.CordovaBaseModule;
import com.huawei.hms.cordova.dtm.basef.handler.CordovaController;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import java.util.Arrays;

public class HMSDTM extends CordovaPlugin {

    private static final String KIT = "DTM";
    private static final String VERSION = "6.6.0.300";
    private CordovaController cordovaController;

    private static CordovaPlugin mPlugin;

    public static CordovaPlugin getPlugin() {
        return mPlugin;
    }

    public static void setPlugin(CordovaPlugin plugin) {
        mPlugin = plugin;
    }
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        setPlugin(this);
        cordovaController = new CordovaController(this, KIT, VERSION, Arrays.asList(new CordovaBaseModule[] {
            new HMSDTMModule(cordova)
        }));
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }

}
