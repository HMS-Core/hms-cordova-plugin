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

package com.huawei.hms.cordova.push.utils;

import android.content.Context;
import android.util.Log;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public class HtmlUtils {
    private static final String TAG = HtmlUtils.class.getSimpleName();

    public static String readFile(Context context, String filename) {
        StringBuilder fContent = new StringBuilder();
        BufferedReader reader = null;
        String line;
        try {
            reader = new BufferedReader(
                new InputStreamReader(context.getAssets().open(filename), StandardCharsets.UTF_8));
            while ((line = reader.readLine()) != null) {
                fContent.append(line);
            }
        } catch (IOException e) {
            Log.d(TAG, "file2str: " + e.getLocalizedMessage());
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    Log.d(TAG, "file2str: " + e.getLocalizedMessage());
                }
            }
        }
        return fContent.toString();
    }

    public static String onBackgroundRemoteMessageReceived() {
        String onBackgroundRemoteMessageReceived = "function onBackgroundRemoteMessageReceived(callback) {"
            + "window['BACKGROUND_REMOTE_DATA_MESSAGE_RECEIVED'] = callback;" + "}";
        return onBackgroundRemoteMessageReceived;
    }

    public static String getItemResponseListener() {
        String getItemResponseListener = "function onGetItemResponse(callback) {"
            + "window['ON_GET_ITEM_RESPONSE_EVENT'] = callback;" + "}";
        return getItemResponseListener;
    }

    public static String wrapInsideScriptTag(String data) {
        return "<script type='text/javascript'>" + data + "</script>";
    }

}
