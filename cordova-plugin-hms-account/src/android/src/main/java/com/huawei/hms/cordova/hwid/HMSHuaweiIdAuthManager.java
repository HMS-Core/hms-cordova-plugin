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

package com.huawei.hms.cordova.hwid;

import com.huawei.hms.cordova.CordovaPluginWithLoggerAndExceptions;
import com.huawei.hms.cordova.PackageName;
import com.huawei.hms.cordova.account.HMSAccountAuthManager;
import com.huawei.hms.cordova.base.HMSAuthManagerBase;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

public class HMSHuaweiIdAuthManager extends CordovaPluginWithLoggerAndExceptions {
    public static final String TAG = HMSHuaweiIdAuthManager.class.getSimpleName();
    HMSAuthManagerBase authManagerBase;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        authManagerBase = new HMSAuthManagerBase(PackageName.HWID, cordova, logger, exceptions);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.authManagerBase.execute(action, args, callbackContext);
        return true;
    }
}
