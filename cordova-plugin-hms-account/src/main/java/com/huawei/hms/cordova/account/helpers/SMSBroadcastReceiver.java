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

package com.huawei.hms.cordova.account.helpers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.cordova.account.utils.Error;
import com.huawei.hms.support.api.client.Status;
import com.huawei.hms.support.sms.common.ReadSmsConstant;
import org.apache.cordova.CallbackContext;

import com.huawei.hms.common.api.CommonStatusCodes;


public class SMSBroadcastReceiver extends BroadcastReceiver {
    public static final String TAG = SMSBroadcastReceiver.class.getSimpleName();
    CallbackContext cb;


    public SMSBroadcastReceiver(CallbackContext callbackContext) {
        cb = callbackContext;
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        Bundle bundle = intent.getExtras();
        if (bundle != null) {
            Status status = bundle.getParcelable(ReadSmsConstant.EXTRA_STATUS);
            if (status.getStatusCode() == CommonStatusCodes.TIMEOUT) {
                Log.i(TAG, Error.getErrorMessage(Constants.ERR_TIME_OUT).toString());

                cb.error(Error.getErrorMessage(Constants.ERR_TIME_OUT));

            } else if (status.getStatusCode() == CommonStatusCodes.SUCCESS) {
                if (bundle.containsKey(ReadSmsConstant.EXTRA_SMS_MESSAGE)) {
                    Bundle extras = intent.getExtras();

                    String message = (String) extras.get(ReadSmsConstant.EXTRA_SMS_MESSAGE);
                    cb.success(message);

                }
            }

        }
    }
}
