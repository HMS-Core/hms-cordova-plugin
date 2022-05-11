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

package com.huawei.hms.cordova.location.utils;

public class Constants {

    public static class Event {
        public static final String ON_LOCATION_RESULT = "onLocationResult";

        public static final String ON_ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult";

        public static final String ON_ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult";

        public static final String ON_GEOFENCE_RESULT = "onGeofenceResult";
    }

    public static class FunctionType {
        public static final String LOCATION_FUNCTION = "locationFunction";

        public static final String CONVERSION_FUNCTION = "conversionFunction";

        public static final String IDENTIFICATION_FUNCTION = "identificationFunction";

        public static final String GEOFENCE_FUNCTION = "geofenceFunction";
    }

    public static class RequestType {
        public static final String LOCATION_CALLBACK = "locationCallback";

        public static final String PENDING_INTENT = "pendingIntent";

        public static final int CHECK_SETTINGS_REQUEST_CODE = 66666;
    }

    public static class Permission {
        public static final String ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION";

        public static final String ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION";

        public static final String ACCESS_BACKGROUND_LOCATION = "android.permission.ACCESS_BACKGROUND_LOCATION";

        public static final String FOREGROUND_SERVICE = "android.permission.FOREGROUND_SERVICE";

        public static final String READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE";

        public static final String WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE";
    }
}
