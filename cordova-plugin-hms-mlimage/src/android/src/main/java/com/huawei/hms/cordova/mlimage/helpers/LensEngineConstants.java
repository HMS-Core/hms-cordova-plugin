package com.huawei.hms.cordova.mlimage.helpers;

import java.util.HashMap;
import java.util.Map;

public class LensEngineConstants {
    // text transactor
    public static final String TEXT_TRANSACTOR_ON_DESTROY = "textTransactorOnDestroy";

    public static final String TEXT_TRANSACTOR_ON_RESULT = "textTransactorOnResult";

    // Face transactor
    public static final String FACE_TRANSACTOR_ON_DESTROY = "faceTransactorOnDestroy";

    public static final String FACE_TRANSACTOR_ON_RESULT = "faceTransactorOnResult";

    // 3d face transactor
    public static final String FACE_3D_TRANSACTOR_ON_DESTROY = "face3dTransactorOnDestroy";

    public static final String FACE_3D_TRANSACTOR_ON_RESULT = "face3dTransactorOnResult";

    // skeleton transactor
    public static final String SKELETON_TRANSACTOR_ON_DESTROY = "skeletonTransactorOnDestroy";

    public static final String SKELETON_TRANSACTOR_ON_RESULT = "skeletonTransactorOnResult";

    // scene transactor
    public static final String SCENE_TRANSACTOR_ON_DESTROY = "sceneTransactorOnDestroy";

    public static final String SCENE_TRANSACTOR_ON_RESULT = "sceneTransactorOnResult";

    // classification transactor
    public static final String CLASSIFICATION_TRANSACTOR_ON_DESTROY = "classificationTransactorOnDestroy";

    public static final String CLASSIFICATION_TRANSACTOR_ON_RESULT = "classificationTransactorOnResult";

    // object transactor
    public static final String OBJECT_TRANSACTOR_ON_DESTROY = "objectTransactorOnDestroy";

    public static final String OBJECT_TRANSACTOR_ON_RESULT = "objectTransactorOnResult";

    // hand keypoint transactor
    public static final String HAND_TRANSACTOR_ON_DESTROY = "handTransactorOnDestroy";

    public static final String HAND_TRANSACTOR_ON_RESULT = "handTransactorOnResult";

    // gesture transactor
    public static final String GESTURE_TRANSACTOR_ON_DESTROY = "gestureTransactorOnDestroy";

    public static final String GESTURE_TRANSACTOR_ON_RESULT = "gestureTransactorOnResult";

    // segmentation transactor
    public static final String SEGMENTATION_TRANSACTOR_ON_DESTROY = "segmentationTransactorOnDestroy";

    public static final String SEGMENTATION_TRANSACTOR_ON_RESULT = "segmentationTransactorOnResult";

    static final Map<String, String> LENS_ENGINE_CONSTANTS_MAP = new HashMap<>();

    static {
        LENS_ENGINE_CONSTANTS_MAP.put("TEXT_TRANSACTOR_ON_DESTROY", TEXT_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("TEXT_TRANSACTOR_ON_RESULT", TEXT_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_2D_TRANSACTOR_ON_DESTROY", FACE_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_2D_TRANSACTOR_ON_RESULT", FACE_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_3D_TRANSACTOR_ON_DESTROY", FACE_3D_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("FACE_3D_TRANSACTOR_ON_RESULT", FACE_3D_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("CLASSIFICATION_TRANSACTOR_ON_DESTROY", CLASSIFICATION_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("CLASSIFICATION_TRANSACTOR_ON_RESULT", CLASSIFICATION_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("OBJECT_TRANSACTOR_ON_DESTROY", OBJECT_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("OBJECT_TRANSACTOR_ON_RESULT", OBJECT_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("SCENE_TRANSACTOR_ON_DESTROY", SCENE_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("SCENE_TRANSACTOR_ON_RESULT", SCENE_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("SKELETON_TRANSACTOR_ON_DESTROY", SKELETON_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("SKELETON_TRANSACTOR_ON_RESULT", SKELETON_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("HAND_TRANSACTOR_ON_DESTROY", HAND_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("HAND_TRANSACTOR_ON_DESTROY", HAND_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("GESTURE_TRANSACTOR_ON_DESTROY", GESTURE_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("GESTURE_TRANSACTOR_ON_RESULT", GESTURE_TRANSACTOR_ON_RESULT);
        LENS_ENGINE_CONSTANTS_MAP.put("SEGMENTATION_TRANSACTOR_ON_DESTROY", SEGMENTATION_TRANSACTOR_ON_DESTROY);
        LENS_ENGINE_CONSTANTS_MAP.put("SEGMENTATION_TRANSACTOR_ON_RESULT", SEGMENTATION_TRANSACTOR_ON_RESULT);
    }

    public LensEngineConstants() {
    }

}
