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

package com.huawei.hms.cordova;

import com.huawei.hms.cordova.logger.HMSLogger;
import com.huawei.hms.cordova.utils.ExceptionUtils;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

public class CordovaPluginWithLoggerAndExceptions extends CordovaPlugin {

    protected HMSLogger logger;
    protected ExceptionUtils exceptions;

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        logger = HMSLogger.getInstance(cordova.getContext());
        exceptions = new ExceptionUtils(logger);
    }
}
