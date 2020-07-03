/*
 * Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package com.huawei.cordova.hms.push;

import java.util.ArrayList;
import java.util.List;

import android.os.Bundle;

import com.huawei.hms.push.RemoteMessage;

public class CordovaHmsMessageReceiverManager {
    private static final String TAG = "HmsMessageReceiverMan";

    private static List<CordovaHmsMessageReceiver> receivers = new ArrayList<CordovaHmsMessageReceiver>();

    public static void register(CordovaHmsMessageReceiver receiver) {
        receivers.add(receiver);
    }

    public static boolean onMessageReceived(RemoteMessage remoteMessage) {
        boolean handled = false;
        for (CordovaHmsMessageReceiver receiver : receivers) {
            boolean wasHandled = receiver.onMessageReceived(remoteMessage);
            if (wasHandled) {
                handled = true;
            }
        }

        return handled;
    }

    public static boolean sendMessage(Bundle bundle) {
        boolean handled = false;
        for (CordovaHmsMessageReceiver receiver : receivers) {
            boolean wasHandled = receiver.sendMessage(bundle);
            if (wasHandled) {
                handled = true;
            }
        }

        return handled;
    }
}
