/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push.utils;

import android.app.PendingIntent;
import android.content.Intent;
import android.util.Log;
import android.webkit.WebView;

import com.huawei.hms.aaid.HmsInstanceId;
import com.huawei.hms.common.ResolvableApiException;

public class ResolvableExceptionUtils {
    public ResolvableExceptionUtils(Exception e, WebView webView, String TAG) {
        if (e instanceof ResolvableApiException) {
            PendingIntent resolution = ((ResolvableApiException) e).getResolution();
            if (resolution != null) {
                try {
                    com.huawei.hms.support.log.HMSLog.e(HmsInstanceId.TAG, "has resolution by pendingIntent");
                    resolution.send();
                } catch (PendingIntent.CanceledException ex) {
                    Log.i(TAG, "Failed to resolve, " + e.getMessage());
                }
            }
            Intent resolutionIntent = ((ResolvableApiException) e).getResolutionIntent();
            if (resolutionIntent != null) {
                com.huawei.hms.support.log.HMSLog.e(HmsInstanceId.TAG, "has resolution by intent");
                resolutionIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                webView.getContext().startActivity(resolutionIntent);
            }
        }
    }
}