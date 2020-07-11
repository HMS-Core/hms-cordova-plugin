/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.mlkit.face;

import android.content.Context;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzer;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class StillFaceAnalyse {
    private String TAG = StillFaceAnalyse.class.getSimpleName();

    private MLFaceAnalyzer analyzer;

    public void analyzer(Context context, JSONObject params, CallbackContext callbackContext) throws IOException, JSONException {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        analyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer();
        int analyseMode = params.optInt("analyseMode", 0);
        switch (analyseMode) {
            case 0:
                Task<List<MLFace>> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(faces -> {
                    if (faces.size() > 0) {
                        try {
                            callbackContext.success(HMSMLUtils.listToJSONArray(faces, this::faceResultToJSON));
                        } catch (JSONException e) {
                            Log.e(TAG, "error:" + e.getMessage());
                        }
                    }
                }).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
                break;
            case 1:
                SparseArray<MLFace> analyseFrame = analyzer.analyseFrame(frame);
                callbackContext.success(TextUtils.fromSparseArrayStillFaceAnalyseToJSON(analyseFrame));
                break;
            default:
                callbackContext.error("analyseMode can be only 0 or 1");
                break;
        }
    }

    private JSONObject faceResultToJSON(MLFace mlFace) throws JSONException {
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

        facesObject.putOpt("allPoints", HMSMLUtils.listToJSONArray(mlFace.getAllPoints(), TextUtils::faceAllPointToJSON));
        facesObject.putOpt("keyPoints", HMSMLUtils.listToJSONArray(mlFace.getFaceKeyPoints(), TextUtils::faceKeyPointsToJSON));
        facesObject.putOpt("faceShapeList", HMSMLUtils.listToJSONArray(mlFace.getFaceShapeList(), TextUtils::faceShapeListToJSON));

        return facesObject;

    }

    public void closeStillFaceAnalyser(CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error("Analyser is not initialized.");
        } else {
            analyzer.stop();
            analyzer = null;
        }

    }

    public void getAnalyserInfo(CallbackContext callbackContext) throws JSONException {
        boolean isAnalyserAvailable;
        if (analyzer == null) {
            callbackContext.error("Analyzer is not initialized");
            return;
        }
        isAnalyserAvailable = analyzer.isAvailable();
        JSONObject analyserInfo = new JSONObject();
        analyserInfo.putOpt("isAnalyserAvailable", isAnalyserAvailable);
        callbackContext.success(analyserInfo);
    }

}
