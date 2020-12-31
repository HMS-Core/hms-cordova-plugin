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


package com.huawei.hms.cordova.awareness.backend.helpers;

import android.util.SparseArray;

import com.huawei.hms.kit.awareness.barrier.BehaviorBarrier;
import com.huawei.hms.kit.awareness.barrier.TimeBarrier;
import com.huawei.hms.kit.awareness.status.CapabilityStatus;

public class Constants {
    public static final SparseArray<String> TIME_DESCRIPTION_MAP = new SparseArray<>();

    static {
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_WEEKDAY, "TIME_CATEGORY_WEEKDAY");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_WEEKEND, "TIME_CATEGORY_WEEKEND");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_HOLIDAY, "TIME_CATEGORY_HOLIDAY");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_NOT_HOLIDAY, "TIME_CATEGORY_NOT_HOLIDAY");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_MORNING, "TIME_CATEGORY_MORNING");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_AFTERNOON, "TIME_CATEGORY_AFTERNOON");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_EVENING, "TIME_CATEGORY_EVENING");
        TIME_DESCRIPTION_MAP.put(TimeBarrier.TIME_CATEGORY_NIGHT, "TIME_CATEGORY_NIGHT");
    }

    public static final SparseArray<String> BEHAVIOR_DESCRIPTION_MAP = new SparseArray<>();

    static {
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_IN_VEHICLE, "BEHAVIOR_IN_VEHICLE");
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_ON_BICYCLE, "BEHAVIOR_ON_BICYCLE");
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_ON_FOOT, "BEHAVIOR_ON_FOOT");
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_STILL, "BEHAVIOR_STILL");
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_UNKNOWN, "BEHAVIOR_UNKNOWN");
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_WALKING, "BEHAVIOR_WALKING");
        BEHAVIOR_DESCRIPTION_MAP.put(BehaviorBarrier.BEHAVIOR_RUNNING, "BEHAVIOR_RUNNING");
    }

    public static final SparseArray<String> CAPABILITIES_DESCRIPTION_MAP = new SparseArray<>();

    static {
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_HEADSET, "AWA_CAP_CODE_HEADSET");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_LOCATION_CAPTURE, "AWA_CAP_CODE_LOCATION_CAPTURE");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_LOCATION_NORMAL_BARRIER, "AWA_CAP_CODE_LOCATION_NORMAL_BARRIER");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_LOCATION_LOW_POWER_BARRIER, "AWA_CAP_CODE_LOCATION_LOW_POWER_BARRIER");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_BEHAVIOR, "AWA_CAP_CODE_BEHAVIOR");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_TIME, "AWA_CAP_CODE_TIME");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_AMBIENT_LIGHT, "AWA_CAP_CODE_AMBIENT_LIGHT");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_WEATHER, "AWA_CAP_CODE_WEATHER");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_BEACON, "AWA_CAP_CODE_BEACON");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_INCAR_BLUETOOTH, "AWA_CAP_CODE_INCAR_BLUETOOTH");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_WIFI, "AWA_CAP_CODE_WIFI");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_APPLICATION, "AWA_CAP_CODE_APPLICATION");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_DARK_MODE, "AWA_CAP_CODE_DARK_MODE");
        CAPABILITIES_DESCRIPTION_MAP.put(CapabilityStatus.AWA_CAP_CODE_SCREEN, "AWA_CAP_CODE_SCREEN");
    }

}
