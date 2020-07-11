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

package com.huawei.hms.cordova.mlkit.landmark;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmark;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmarkAnalyzer;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmarkAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class ImageLandMarkAnalyse {
    private static final String TAG = ImageLandMarkAnalyse.class.getName();

    private MLRemoteLandmarkAnalyzer analyzer;

    public void imageLandMarkAnalyzer(Context context, JSONObject params, CallbackContext callbackContext) throws IOException, JSONException {
        int largestNumOfReturns;
        int patternType;
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        JSONObject landmarkAnalyzerSetting = params.optJSONObject("landmarkAnalyzerSetting");
        if (landmarkAnalyzerSetting != null) {
            largestNumOfReturns = landmarkAnalyzerSetting.optInt("largestNumOfReturns", 10);
            patternType = landmarkAnalyzerSetting.optInt("patternType", 1);

            MLRemoteLandmarkAnalyzerSetting settings = new MLRemoteLandmarkAnalyzerSetting.Factory()
                    .setLargestNumOfReturns(largestNumOfReturns)
                    .setPatternType(patternType)
                    .create();

            analyzer = MLAnalyzerFactory.getInstance()
                    .getRemoteLandmarkAnalyzer(settings);
        } else {
            MLRemoteLandmarkAnalyzerSetting settings = MLRemoteLandmarkAnalyzerSetting.DEFAULT_SETTINGS;
            analyzer = MLAnalyzerFactory.getInstance().getRemoteLandmarkAnalyzer(settings);
        }
        Task<List<MLRemoteLandmark>> task = analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(landmarkResults -> {
            try {
                callbackContext.success(new JSONObject(getResult(landmarkResults.get(0))));
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                Log.e(TAG, "error:" + e.getMessage());
            }
        }).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
    }

    private String getResult(MLRemoteLandmark landmark) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("border", landmark.getBorder());
        jsonObject.putOpt("landmark", landmark.getLandmark());
        jsonObject.putOpt("landmarkIdentity", landmark.getLandmarkIdentity());
        jsonObject.putOpt("positionInfos", landmark.getPositionInfos());
        jsonObject.putOpt("possibility", landmark.getPossibility());
        return HMSMLUtils.toJSON(landmark);

    }

    public void stopAnalyser(CallbackContext callbackContext) throws IOException {
        if (analyzer == null) {
            callbackContext.error("Analyser is not initialized.");
        } else {
            this.analyzer.close();
            callbackContext.success("Image landmark Analyser is closed");
        }
    }
}
