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

package com.huawei.hms.cordova.site.basef.handler;

import android.util.Log;

public final class CorLog {
    private CorLog(){}
    private static boolean enable = false;

    public static void setEnable(boolean enable) {
        CorLog.enable = enable;
    }

    public static void log(int priority, String tag, String message) {
        if(enable)
            Log.println(priority, tag, message);
    }

    public static void info(String tag, String message) {
        log(Log.INFO, tag, message);
    }

    public static void warn(String tag, String message){
        log(Log.WARN, tag, message);
    }

    public static void debug(String tag, String message){
        log(Log.DEBUG, tag, message);
    }

    public static void err(String tag, String message) {
        log(Log.ERROR, tag, message);
    }

    public static void verb(String tag, String message) {
        log(Log.VERBOSE, tag, message);
    }

    public static void asst(String tag, String message){
        log(Log.ASSERT, tag, message);
    }

}

