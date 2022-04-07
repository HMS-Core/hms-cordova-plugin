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

package com.huawei.hms.cordova.push.local;

import android.os.Bundle;

import com.huawei.hms.cordova.push.HMSPush;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.utils.BundleUtils;
import com.huawei.hms.cordova.push.utils.CordovaUtils;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;

import org.apache.cordova.CordovaWebView;
import org.json.JSONException;
import org.json.JSONObject;

public class HmsLocalNotificationActionPublisher {

    public static void notifyNotificationAction(Bundle bundle) throws JSONException {

        String bundleString = BundleUtils.convertJSON(bundle);

        JSONObject params = new JSONObject();
        params.put(Core.Event.Result.DATA_JSON, bundleString);

        CordovaUtils.sendEvent(HMSPush.getCordova(), HMSPush.getWebView(), Core.Event.LOCAL_NOTIFICATION_ACTION_EVENT,
            params);
    }

}
