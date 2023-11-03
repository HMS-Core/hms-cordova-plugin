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

package com.huawei.hms.cordova.mlbody.utils;

import static com.huawei.hms.cordova.mlbody.utils.PlatformUtils.mapperWrapper;

import android.graphics.Bitmap;
import android.graphics.Rect;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.common.size.Size;
import com.huawei.hms.mlsdk.common.MLApplicationSetting;
import com.huawei.hms.mlsdk.common.MLCoordinate;
import com.huawei.hms.mlsdk.common.MLPosition;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceKeyPoint;
import com.huawei.hms.mlsdk.face.MLFaceShape;
import com.huawei.hms.mlsdk.face.face3d.ML3DFace;
import com.huawei.hms.mlsdk.faceverify.MLFaceVerificationResult;
import com.huawei.hms.mlsdk.gesture.MLGesture;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoint;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoints;
import com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCaptureResult;
import com.huawei.hms.mlsdk.livenessdetection.MLLivenessCaptureResult;
import com.huawei.hms.mlsdk.skeleton.MLJoint;
import com.huawei.hms.mlsdk.skeleton.MLSkeleton;

import com.google.gson.Gson;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class TextUtils {
    public static final Mapper<List<MLSkeleton>, JSONObject> FROM_MLSKELETON_TO_JSON_OBJECT = mapperWrapper(
        (List<MLSkeleton> mlSkeletons) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlSkeletons, TextUtils::mlSkeletonsListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());

    public static final Mapper<List<ML3DFace>, JSONObject> FROM_ML3DFACE_TO_JSON_OBJECT = mapperWrapper(
        (List<ML3DFace> mlFace) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlFace, TextUtils::ml3DFacetoJSON);
            map.putOpt("result", array);

            return map;
        }, new JSONObject());

    public static final Mapper<List<MLFaceVerificationResult>, JSONObject> FROM_MLFACE_VERIFICATION_TO_JSON_OBJECT
        = mapperWrapper((List<MLFaceVerificationResult> mlFace) -> {
        JSONObject map = new JSONObject();
        JSONArray array = HMSMLUtils.listToJSONArray(mlFace, TextUtils::mlFaceVerificationToJSON);
        map.putOpt("result", array);
        return map;
    }, new JSONObject());

    private static final String TAG = TextUtils.class.getSimpleName();

    public static final Mapper<List<MLFace>, JSONObject> FROM_MLFACE_TO_JSON_OBJECT = mapperWrapper(
        (List<MLFace> mlFace) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlFace, TextUtils::mlFacetoJSON);
            map.putOpt("result", array);

            return map;
        }, new JSONObject());

    public static final Mapper<List<MLHandKeypoints>, JSONObject> FROM_MLHAND_TO_JSON_OBJECT = mapperWrapper(
        (List<MLHandKeypoints> mlHandKeypoints) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlHandKeypoints, TextUtils::mlHandKeypointsListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());

    public static final Mapper<List<MLGesture>, JSONObject> FROM_MLGESTURE_TO_JSON_OBJECT = mapperWrapper(
        (List<MLGesture> mlGestures) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlGestures, TextUtils::mlGesturesListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());

    private static Gson gson = new Gson();

    public static JSONObject fromSparseArrayStillFaceAnalyseToJSON(final SparseArray<MLFace> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLFace mlFace = array.get(key);
                json.putOpt(String.valueOf(key), mlFacetoJSON(mlFace));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayStillFace3DAnalyseToJSON(final SparseArray<ML3DFace> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                ML3DFace mlFace = array.get(key);
                json.putOpt(String.valueOf(key), ml3DFacetoJSON(mlFace));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject mlLivenessResult(final MLLivenessCaptureResult mlLivenessCaptureResult)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();

        Bitmap bitmapOriginal = mlLivenessCaptureResult.getBitmap();
        jsonObject.putOpt("isLive", mlLivenessCaptureResult.isLive());
        jsonObject.putOpt("pitch", mlLivenessCaptureResult.getPitch());
        jsonObject.putOpt("roll", mlLivenessCaptureResult.getRoll());
        jsonObject.putOpt("yaw", mlLivenessCaptureResult.getYaw());
        jsonObject.putOpt("score", mlLivenessCaptureResult.getScore());
        jsonObject.putOpt("bitmap", HMSMLUtils.bitmapToBase64(bitmapOriginal));
        return jsonObject;
    }

    public static JSONObject mlFaceVerificationToJSON(final MLFaceVerificationResult mlFaceVerificationResult)
        throws JSONException {
        JSONObject faceVerificationObject = new JSONObject();
        faceVerificationObject.putOpt("faceInfo", mlFaceVerificationResult.getFaceInfo());
        faceVerificationObject.putOpt("similarity", mlFaceVerificationResult.getSimilarity());
        faceVerificationObject.putOpt("templateId", mlFaceVerificationResult.getTemplateId());
        faceVerificationObject.putOpt("faceRect", mlFaceVerificationResult.getFaceInfo().getFaceRect());

        return faceVerificationObject;
    }

    public static JSONObject mlFacetoJSON(final MLFace mlFace) throws JSONException {
        JSONObject facesObject = new JSONObject();
        facesObject.putOpt("opennessOfLeftEye", mlFace.opennessOfLeftEye());
        facesObject.putOpt("tracingIdentity", mlFace.getTracingIdentity());
        facesObject.putOpt("possibilityOfSmiling", mlFace.possibilityOfSmiling());
        facesObject.putOpt("opennessOfRightEye", mlFace.opennessOfRightEye());
        facesObject.putOpt("rotationAngleX", mlFace.getRotationAngleX());
        facesObject.putOpt("rotationAngleY", mlFace.getRotationAngleY());
        facesObject.putOpt("rotationAngleZ", mlFace.getRotationAngleZ());
        facesObject.putOpt("height", mlFace.getHeight());
        facesObject.putOpt("width", mlFace.getWidth());
        facesObject.putOpt("border", TextUtils.borderToJSON(mlFace.getBorder()));
        JSONObject featuresFace = new JSONObject();
        featuresFace.putOpt("sunGlassProbability", mlFace.getFeatures().getSunGlassProbability());
        featuresFace.putOpt("sexProbability", mlFace.getFeatures().getSexProbability());
        featuresFace.putOpt("rightEyeOpenProbability", mlFace.getFeatures().getRightEyeOpenProbability());
        featuresFace.putOpt("moustacheProbability", mlFace.getFeatures().getMoustacheProbability());
        featuresFace.putOpt("leftEyeOpenProbability", mlFace.getFeatures().getLeftEyeOpenProbability());
        featuresFace.putOpt("age", mlFace.getFeatures().getAge());
        featuresFace.putOpt("hatProbability", mlFace.getFeatures().getHatProbability());
        facesObject.putOpt("features", featuresFace);
        JSONObject emotions = new JSONObject();
        emotions.putOpt("surpriseProbability", mlFace.getEmotions().getSurpriseProbability());
        emotions.putOpt("smilingProbability", mlFace.getEmotions().getSmilingProbability());
        emotions.putOpt("sadProbability", mlFace.getEmotions().getSadProbability());
        emotions.putOpt("neutralProbability", mlFace.getEmotions().getNeutralProbability());
        emotions.putOpt("fearProbability", mlFace.getEmotions().getFearProbability());
        emotions.putOpt("disgustProbability", mlFace.getEmotions().getDisgustProbability());
        emotions.putOpt("angryProbability", mlFace.getEmotions().getAngryProbability());
        facesObject.putOpt("emotions", emotions);

        facesObject.putOpt("allPoints",
            HMSMLUtils.listToJSONArray(mlFace.getAllPoints(), TextUtils::faceAllPointToJSON));
        facesObject.putOpt("keyPoints",
            HMSMLUtils.listToJSONArray(mlFace.getFaceKeyPoints(), TextUtils::faceKeyPointsToJSON));
        facesObject.putOpt("faceShapeList",
            HMSMLUtils.listToJSONArray(mlFace.getFaceShapeList(), TextUtils::faceShapeListToJSON));
        return facesObject;
    }

    public static JSONObject ml3DFacetoJSON(final ML3DFace mlFace) throws JSONException {
        JSONObject facesObject = new JSONObject();
        facesObject.putOpt("3DfaceEulerX", mlFace.get3DFaceEulerX());
        facesObject.putOpt("3DfaceEulerY", mlFace.get3DFaceEulerY());
        facesObject.putOpt("3DfaceEulerZ", mlFace.get3DFaceEulerZ());
        facesObject.putOpt("3DAllVertexs",
            HMSMLUtils.listToJSONArray(mlFace.get3DAllVertexs(), TextUtils::faceAllPointToJSON));

        return facesObject;
    }

    public static JSONObject borderToJSON(final Rect rect) {
        JSONObject border = new JSONObject();
        try {
            border.putOpt("bottom", rect.bottom);
            border.putOpt("top", rect.top);
            border.putOpt("left", rect.left);
            border.putOpt("right", rect.right);
            border.putOpt("exactCenterX", rect.exactCenterX());
            border.putOpt("centerY", rect.centerY());
            border.putOpt("centerX", rect.centerX());
            border.putOpt("describeContents", rect.describeContents());
            border.putOpt("height", rect.height());
            border.putOpt("width", rect.width());
        } catch (JSONException e) {
            Log.e(TAG, "error:" + e.getMessage());
        }
        return border;
    }

    public static JSONObject faceAllPointToJSON(final MLPosition mlPosition) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("X", mlPosition.getX());
        jsonObject.putOpt("Y", mlPosition.getY());
        jsonObject.putOpt("Z", mlPosition.getZ());
        return jsonObject;
    }

    public static JSONObject faceKeyPointsToJSON(final MLFaceKeyPoint mlFaceKeyPoint) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("type", mlFaceKeyPoint.getType());
        JSONObject points = new JSONObject();
        points.putOpt("X", mlFaceKeyPoint.getPoint().getX());
        points.putOpt("Y", mlFaceKeyPoint.getPoint().getY());
        points.putOpt("Z", mlFaceKeyPoint.getPoint().getZ());
        jsonObject.putOpt("point", points);
        JSONObject coordinatePoint = new JSONObject();
        coordinatePoint.putOpt("x", mlFaceKeyPoint.getCoordinatePoint().x);
        coordinatePoint.putOpt("y", mlFaceKeyPoint.getCoordinatePoint().y);
        coordinatePoint.putOpt("describeContents", mlFaceKeyPoint.getCoordinatePoint().describeContents());
        points.putOpt("coordinatePoint", coordinatePoint);
        return jsonObject;
    }

    public static JSONObject faceShapeListToJSON(final MLFaceShape faceShape) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("points", HMSMLUtils.listToJSONArray(faceShape.getPoints(), TextUtils::faceAllPointToJSON));
        jsonObject.putOpt("faceShapeType", faceShape.getFaceShapeType());
        return jsonObject;
    }

    public static JSONObject positionInfoToJSON(final MLCoordinate coordinate) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("lng", coordinate.getLng());
        jsonObject.putOpt("lat", coordinate.getLat());
        return jsonObject;
    }

    private static JSONObject handKeypointsListTOJSON(final MLHandKeypoint mlHandKeypoint) throws JSONException {
        JSONObject handKeyPointsJSON = new JSONObject();
        handKeyPointsJSON.putOpt("x", mlHandKeypoint.getPointX());
        handKeyPointsJSON.putOpt("y", mlHandKeypoint.getPointY());
        handKeyPointsJSON.putOpt("score", mlHandKeypoint.getScore());
        handKeyPointsJSON.putOpt("type", mlHandKeypoint.getType());
        return handKeyPointsJSON;
    }

    public static JSONObject mlHandKeypointsListTOJSON(final MLHandKeypoints mlHandKeypoints) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("handkeyPoints",
            HMSMLUtils.listToJSONArray(mlHandKeypoints.getHandKeypoints(), TextUtils::handKeypointsListTOJSON));
        jsonObject.putOpt("rect", TextUtils.borderToJSON(mlHandKeypoints.getRect()));
        jsonObject.putOpt("score", mlHandKeypoints.getScore());
        return jsonObject;
    }

    public static JSONObject mlGesturesListTOJSON(final MLGesture mlGesture) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("category", mlGesture.getCategory());
        jsonObject.putOpt("rect", TextUtils.borderToJSON(mlGesture.getRect()));
        jsonObject.putOpt("score", mlGesture.getScore());
        return jsonObject;
    }

    public static JSONObject mlSkeletonsListTOJSON(final MLSkeleton mlSkeleton) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("joints", HMSMLUtils.listToJSONArray(mlSkeleton.getJoints(), TextUtils::mlSkeletonsTOJSON));
        return jsonObject;
    }

    private static JSONObject mlSkeletonsTOJSON(final MLJoint mlJoint) throws JSONException {
        JSONObject mljointsJSON = new JSONObject();
        mljointsJSON.putOpt("x", mlJoint.getPointX());
        mljointsJSON.putOpt("y", mlJoint.getPointY());
        mljointsJSON.putOpt("score", mlJoint.getScore());
        mljointsJSON.putOpt("type", mlJoint.getType());
        mljointsJSON.putOpt("hashCode", mlJoint.hashCode());
        return mljointsJSON;
    }

    public static boolean isNullOrEmpty(final String item) {
        return null == item || item.isEmpty();
    }

    public static <T> String toJSON(T obj) {
        return gson.toJson(obj);
    }

    public static <T> T toObject(final JSONObject jsonObject, final Class<T> clazz) {
        if (jsonObject != null) {
            return gson.fromJson(jsonObject.toString(), clazz);
        } else {
            return null;
        }

    }

    public static JSONObject mlSize(final Size size) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("height", size.getHeight());
        jsonObject.putOpt("width", size.getWidth());
        return jsonObject;
    }

    public static JSONObject getApplicationSetting(final MLApplicationSetting mlApplicationSetting)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("apiKey", mlApplicationSetting.getApiKey());
        jsonObject.putOpt("certFingerprint", mlApplicationSetting.getCertFingerprint());
        jsonObject.putOpt("appID", mlApplicationSetting.getAppId());
        jsonObject.putOpt("acceptHa", mlApplicationSetting.getAcceptHa());
        jsonObject.putOpt("sdkVersion", mlApplicationSetting.getMLSdkVersion());
        jsonObject.putOpt("packageName", mlApplicationSetting.getPackageName());
        jsonObject.putOpt("region", mlApplicationSetting.getRegion());
        jsonObject.putOpt("extProperties", mlApplicationSetting.getExtProperties());
        jsonObject.putOpt("serviceUrl", mlApplicationSetting.getMLServiceUrls());
        return jsonObject;
    }

    public static JSONObject mlInteractiveLivenessResult(
        final MLInteractiveLivenessCaptureResult mlInteractiveLivenessCaptureResult) throws JSONException {
        JSONObject jsonObject = new JSONObject();

        Bitmap bitmapOriginal = mlInteractiveLivenessCaptureResult.getBitmap();
        jsonObject.putOpt("stateCode", mlInteractiveLivenessCaptureResult.getStateCode());
        jsonObject.putOpt("actionType", mlInteractiveLivenessCaptureResult.getActionType());
        jsonObject.putOpt("bitmap", HMSMLUtils.bitmapToBase64(bitmapOriginal));
        return jsonObject;
    }

    public static int resId(final CordovaInterface cordova, final String type, final String name) {
        if (isNullOrEmpty(type) || isNullOrEmpty(name)) {
            return -1;
        }
        return cordova.getContext().getResources().getIdentifier(name, type, cordova.getContext().getPackageName());
    }

    public static int rid(final CordovaInterface cordova, final String name) {
        return resId(cordova, "id", name);
    }

    public static int rlayout(final CordovaInterface cordova, final String name) {
        return resId(cordova, "layout", name);
    }

    public static int rdraw(final CordovaInterface cordova, final String name) {
        return resId(cordova, "drawable", name);
    }
}
