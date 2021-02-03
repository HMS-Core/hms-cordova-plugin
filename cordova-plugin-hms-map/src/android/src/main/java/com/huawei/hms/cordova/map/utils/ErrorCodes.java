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

package com.huawei.hms.cordova.map.utils;

import java.util.Locale;

public enum ErrorCodes {
    NO_MAP_FOUND(6000, "No map with this divId was found."),
    LOCATION_PERMISSION_DENIED(6001, "Location permission is denied"),
    COMPONENT_IS_NOT_FOUND(6002, "No component with given component id."),
    HMS_LOGGER_IS_NULL(6003, "HMSLogger is null."),
    INVALID_API_KEY(6004, "Invalid API key.");

    public final int id;
    public final String message;

    ErrorCodes(int id, String msg) {
        this.id = id;
        this.message = msg;
    }

    @Override
    public java.lang.String toString() {
        return String.format(Locale.ENGLISH, "Error Code: %d - Message: %s", this.id, this.message);
    }
}
