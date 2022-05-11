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

package com.huawei.hms.cordova.location.helpers;

import android.app.Notification;
import android.content.Context;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import androidx.core.app.NotificationManagerCompat;

import com.huawei.hms.cordova.location.utils.LocationUtils;

import org.json.JSONException;
import org.json.JSONObject;

public class BackgroundManager {
    private Context context;

    public BackgroundManager(Context context) {
        this.context = context;
    }

    @JavascriptInterface
    public void notify(int notificationId, String param) throws JSONException {
        Log.d("BackgroundManager",
            "notify() called with: notificationId = [" + notificationId + "], param = [" + param + "]");
        JSONObject json = new JSONObject(param);
        Notification notification = LocationUtils.buildNotification(context, json);
        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);
        notificationManager.notify(notificationId, notification);
    }

    @JavascriptInterface
    public void makeToast(String text, int duration) {
        Log.d("BackgroundManager", "makeToast() called with: text = [" + text + "], duration = [" + duration + "]");
        Toast.makeText(context, text, duration).show();
    }
}
