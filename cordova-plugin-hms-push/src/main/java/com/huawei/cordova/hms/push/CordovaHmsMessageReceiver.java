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

import android.os.Bundle;

import com.huawei.hms.push.RemoteMessage;

public abstract class CordovaHmsMessageReceiver {
    private static final String TAG = "HmsMessageReceiver";

    public CordovaHmsMessageReceiver() {
        CordovaHmsMessageReceiverManager.register(this);
    }

    /**
     * method onMessageReceived 
     * 
     * @param remoteMessage RemoteMessage
     * @return boolean boolean
     */
    public abstract boolean onMessageReceived(RemoteMessage remoteMessage);

    /**
     * method sendMessage
     * 
     * @param bundle Bundle
     * @return boolean boolean
     */
    public abstract boolean sendMessage(Bundle bundle);
}
