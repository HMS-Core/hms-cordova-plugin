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
export enum Events {
    ON_LOCATION_RESULT = "onLocationResult",
    ACTIVITY_CONVERSION_RESULT = "onActivityConversionResult",
    ACTIVITY_IDENTIFICATION_RESULT = "onActivityIdentificationResult",
    GEOFENCE_RESULT = "onGeofenceResult",
}

export enum PriorityConstants {
    PRIORITY_HIGH_ACCURACY = 100,
    PRIORITY_BALANCED_POWER_ACCURACY = 102,
    PRIORITY_LOW_POWER = 104,
    PRIORITY_NO_POWER = 105,
    PRIORITY_HD_ACCURACY = 200
}

export enum NavigationRequestConstants {
    OVERPASS = 1,
    IS_SUPPORT_EX = 2,
}

export enum ActivityType {
    VEHICLE = 100,
    BIKE = 101,
    FOOT = 102,
    STILL = 103,
    OTHERS = 104,
    WALKING = 107,
    RUNNING = 108,
}

export enum ConversionType {
    ENTER_ACTIVITY_CONVERSION = 0,
    EXIT_ACTIVITY_CONVERSION = 1,
}

export enum CoordinateType {
    COORDINATE_TYPE_WGS_84 = 1,
    COORDINATE_TYPE_GCJ_02 = 0,
}

export enum GeofenceInitConversionType {
    ENTER_INIT_CONVERSION = 1,
    EXIT_INIT_CONVERSION = 2,
    DWELL_INIT_CONVERSION = 4,
}

export enum GeofenceTriggerType {
    ENTER_GEOFENCE_CONVERSION = 1,
    EXIT_GEOFENCE_CONVERSION = 2,
    DWELL_GEOFENCE_CONVERSION = 4,
    GEOFENCE_NEVER_EXPIRE = -1,
}

export enum NotificationCategory {
    ALARM = "alarm",
    CALL = "call",
    EMAIL = "email",
    ERROR = "err",
    EVENT = "event",
    MESSAGE = "msg",
    NAVIGATION = "navigation",
    PROGRESS = "progress",
    PROMO = "promo",
    RECOMMENDATION = "recommendation",
    REMINDER = "reminder",
    SERVICE = "service",
    SOCIAL = "social",
    STATUS = "status",
    SYSTEM = "sys",
    TRANSPORT = "transport"
}

export enum NotificationImportance {
    DEFAULT = 3,
    HIGH = 4,
    LOW = 2,
    MAX = 5,
    MIN = 1,
    NONE = 0,
    UNSPECIFIED = -100
}

export enum RequestType {
    LOCATION_CALLBACK = "locationCallback",
    PENDING_INTENT = "pendingIntent"
}
