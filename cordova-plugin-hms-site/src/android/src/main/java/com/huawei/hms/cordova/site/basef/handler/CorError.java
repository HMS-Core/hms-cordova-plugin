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

import java.io.Serializable;

import org.json.JSONException;
import org.json.JSONObject;

public class CorError implements Serializable {
    private final int code;
    private final String message;

    private static final long serialVersionUID = 8461223600L;

    public CorError(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public JSONObject toJson()  {
        JSONObject json = new JSONObject();
        try {
            return json.put("code", code).put("message", message);
        } catch (JSONException ignored) {
            return json;
        }
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
