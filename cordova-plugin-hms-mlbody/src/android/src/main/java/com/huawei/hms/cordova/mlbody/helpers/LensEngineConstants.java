/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mlbody.helpers;

import java.util.HashMap;
import java.util.Map;

public class LensEngineConstants {
    // Face transactor
    public static final String FACE_TRANSACTOR_ON_DESTROY = "faceTransactorOnDestroy";

    public static final String FACE_TRANSACTOR_ON_RESULT = "faceTransactorOnResult";

    // 3d face transactor
    public static final String FACE_3D_TRANSACTOR_ON_DESTROY = "face3dTransactorOnDestroy";

    public static final String FACE_3D_TRANSACTOR_ON_RESULT = "face3dTransactorOnResult";

    // skeleton transactor
    public static final String SKELETON_TRANSACTOR_ON_DESTROY = "skeletonTransactorOnDestroy";

    public static final String SKELETON_TRANSACTOR_ON_RESULT = "skeletonTransactorOnResult";

    // hand keypoint transactor
    public static final String HAND_TRANSACTOR_ON_DESTROY = "handTransactorOnDestroy";

    public static final String HAND_TRANSACTOR_ON_RESULT = "handTransactorOnResult";

    // gesture transactor
    public static final String GESTURE_TRANSACTOR_ON_DESTROY = "gestureTransactorOnDestroy";

    public static final String GESTURE_TRANSACTOR_ON_RESULT = "gestureTransactorOnResult";

    static final Map<String, String> LENS_ENGINE_CONSTANTS_MAP = new HashMap<>();

    static {
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_2D_TRANSACTOR_ON_DESTROY", FACE_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_2D_TRANSACTOR_ON_RESULT", FACE_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_3D_TRANSACTOR_ON_DESTROY", FACE_3D_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_3D_TRANSACTOR_ON_RESULT", FACE_3D_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("SKELETON_TRANSACTOR_ON_DESTROY", SKELETON_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("SKELETON_TRANSACTOR_ON_RESULT", SKELETON_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("HAND_TRANSACTOR_ON_DESTROY", HAND_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("HAND_TRANSACTOR_ON_DESTROY", HAND_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("GESTURE_TRANSACTOR_ON_DESTROY", GESTURE_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("GESTURE_TRANSACTOR_ON_RESULT", GESTURE_TRANSACTOR_ON_RESULT);
    }

    public LensEngineConstants() {
    }

}

