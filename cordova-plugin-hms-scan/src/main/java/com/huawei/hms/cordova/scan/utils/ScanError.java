/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.scan.utils;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

public class ScanError {
    private final int errorCode;
    private final String errorMessage;

    public ScanError(final int errorCode, final String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    public JSONObject toJSON() {
        final JSONObject errorResult = new JSONObject();
        try {
            errorResult.putOpt("errorCode", errorCode);
            errorResult.putOpt("errorMessage", errorMessage);
        } catch (final JSONException e) {
            Log.e("ScanError", "error" + e.toString());
        }
        return errorResult;
    }
}
