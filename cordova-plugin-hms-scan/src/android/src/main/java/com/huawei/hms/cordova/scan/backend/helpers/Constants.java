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

package com.huawei.hms.cordova.scan.backend.helpers;

import android.Manifest;
import android.util.SparseArray;

import java.util.HashMap;
import java.util.Map;

public class Constants {
    public static final int BITMAP_CODE = 1;
    public static final int MULTIPROCESSOR_SYN_CODE = 2;
    public static final int MULTIPROCESSOR_ASYN_CODE = 3;
    public static final int CAMERA = 4;
    public static final int READ_EXTERNAL_STORAGE = 5;

    public static final SparseArray<String> PERMISSIONS = new SparseArray<>();

    static {
        PERMISSIONS.put(CAMERA, Manifest.permission.CAMERA);
        PERMISSIONS.put(READ_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE);
    }
}
