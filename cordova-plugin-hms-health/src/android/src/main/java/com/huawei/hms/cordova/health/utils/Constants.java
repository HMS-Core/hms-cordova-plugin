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

package com.huawei.hms.cordova.health.utils;

import java.util.HashMap;
import java.util.Map;

public final class Constants {
    public static final int ERR_CAN_NOT_LOG_IN = 722;
    public static final int ERR_INTENT_DATA_EMPTY = 723;
    public static final int REQUEST_SIGN_IN_LOGIN = 1002;

    public static final int SIGN_IN_REQUEST_ID = 8888;

    private static final Map<String, Integer> CONSTANTS_MAP = new HashMap<>();

    static {
        CONSTANTS_MAP.put("ERR_CAN_NOT_LOG_IN", ERR_CAN_NOT_LOG_IN);
        CONSTANTS_MAP.put("ERR_INTENT_DATA_EMPTY", ERR_INTENT_DATA_EMPTY);
    }

    private Constants() {
    }
}
