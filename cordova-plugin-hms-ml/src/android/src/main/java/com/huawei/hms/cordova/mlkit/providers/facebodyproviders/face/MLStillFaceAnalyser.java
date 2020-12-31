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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.face;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzer;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLException;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzerSetting;
import com.huawei.hms.mlsdk.face.face3d.ML3DFace;
import com.huawei.hms.mlsdk.face.face3d.ML3DFaceAnalyzer;
import com.huawei.hms.mlsdk.face.face3d.ML3DFaceAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MLStillFaceAnalyser extends HMSProvider {
    private String TAG = MLStillFaceAnalyser.class.getSimpleName();
    private MLFaceAnalyzer analyzer;
    private ML3DFaceAnalyzer analyzer3d;
    private boolean flag = false;
    private MLFaceAnalyzerSetting mlFaceAnalyzerSetting;
    private ML3DFaceAnalyzerSetting ml3DFaceAnalyzerSetting;

    public MLStillFaceAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeStillFaceAnalyser(final JSONObject params, final CallbackContext callbackContext) {

        HMSMethod method = new HMSMethod("stillFaceAnalyser");

        MLFrame faceFrame = HMSMLUtils.getFrame(getContext(), params);
        CordovaHelpers.frameController(faceFrame, getContext(), callbackContext, "stillFaceAnalyser");
        JSONObject mlFaceAnalyserSetting = params.optJSONObject("mlFaceAnalyserSetting");
        int analyseMode = params.optInt("analyseMode");
        switch (analyseMode) {
            case 0: {
                analyzer = createAnalyzer(mlFaceAnalyserSetting);
                Task<List<MLFace>> task = analyzer.asyncAnalyseFrame(faceFrame);
                task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_MLFACE_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            }
            case 1: {
                analyzer = createAnalyzer(mlFaceAnalyserSetting);
                SparseArray<MLFace> analyseFrame = analyzer.analyseFrame(faceFrame);
                callbackContext.success(TextUtils.fromSparseArrayStillFaceAnalyseToJSON(analyseFrame));
                HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceAnalyser");
                break;
            }
            case 2: {
                flag = true;
                analyzer3d = create3DAnalyzer(mlFaceAnalyserSetting);
                Task<List<ML3DFace>> task3d = analyzer3d.asyncAnalyseFrame(faceFrame);
                task3d.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_ML3DFACE_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            }
            case 3: {
                flag = true;
                analyzer3d = create3DAnalyzer(mlFaceAnalyserSetting);
                SparseArray<ML3DFace> sync = analyzer3d.analyseFrame(faceFrame);
                callbackContext.success(TextUtils.fromSparseArrayStillFace3DAnalyseToJSON(sync));
                HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceAnalyser");
                break;

            }
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    public void closeStillFaceAnalyser(final CallbackContext callbackContext) throws IOException {

        if (flag) {
            if (analyzer3d == null) {
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            }
            analyzer3d.stop();
            analyzer3d = null;
            flag = false;
            callbackContext.success("Face analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceAnalyserStop");
        } else {
            if (analyzer == null) {
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
            }
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Face analyzer stopped");
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceAnalyserStop");
        }

    }

    private MLFaceAnalyzer createAnalyzer(JSONObject mlFaceAnalyserSettingJSON) {
        if (mlFaceAnalyserSettingJSON == null || mlFaceAnalyserSettingJSON.length() == 0) {
            analyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer();
        } else {
            mlFaceAnalyzerSetting = TextUtils.toObject(mlFaceAnalyserSettingJSON, MLFaceAnalyzerSetting.class);
            analyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer(mlFaceAnalyzerSetting);
        }
        return analyzer;
    }

    private ML3DFaceAnalyzer create3DAnalyzer(JSONObject mlFaceAnalyserSettingJSON) {
        if (mlFaceAnalyserSettingJSON == null || mlFaceAnalyserSettingJSON.length() == 0) {
            analyzer3d = MLAnalyzerFactory.getInstance().get3DFaceAnalyzer();
        } else {
            ml3DFaceAnalyzerSetting = TextUtils.toObject(mlFaceAnalyserSettingJSON, ML3DFaceAnalyzerSetting.class);
            analyzer3d = MLAnalyzerFactory.getInstance().get3DFaceAnalyzer(ml3DFaceAnalyzerSetting);
        }
        return analyzer3d;
    }

    public void getFaceAnalyserInfo(final CallbackContext callbackContext) throws JSONException {
        boolean isAnalyserAvailable;
        if (flag) {
            if (analyzer3d == null) {
                callbackContext.error(MLException.ANALYSIS_FAILURE);
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyserInfo", String.valueOf(MLException.ANALYSIS_FAILURE));
                return;
            }
            isAnalyserAvailable = analyzer3d.isAvailable();
            JSONObject analyserInfo = new JSONObject();
            analyserInfo.putOpt("isAnalyserAvailable", isAnalyserAvailable);
            callbackContext.success(analyserInfo);
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceAnalyserInfo");
        } else {
            if (analyzer == null) {
                callbackContext.error(MLException.ANALYSIS_FAILURE);
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyserInfo", String.valueOf(MLException.ANALYSIS_FAILURE));
                return;
            }
            isAnalyserAvailable = analyzer.isAvailable();
            JSONObject analyserInfo = new JSONObject();
            analyserInfo.putOpt("isAnalyserAvailable", isAnalyserAvailable);
            callbackContext.success(analyserInfo);
            HMSLogger.getInstance(getContext()).sendSingleEvent("stillFaceAnalyserInfo");
        }

    }

    public void getAnalyzerSetting(final CallbackContext callbackContext) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        if (flag) {
            if (analyzer3d == null) {
                callbackContext.error(CordovaErrors.ANALYSIS_NULL);
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_NULL));
                return;
            }
            jsonObject.putOpt("performanceType", ml3DFaceAnalyzerSetting.getPerformanceType());
            jsonObject.putOpt("isTracingAllowed", ml3DFaceAnalyzerSetting.isTracingAllowed());
            callbackContext.success(jsonObject);
        } else {
            if (analyzer == null) {
                callbackContext.error(CordovaErrors.ANALYSIS_NULL);
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("stillFaceAnalyserSetting", String.valueOf(CordovaErrors.ANALYSIS_NULL));
                return;
            }
            jsonObject.putOpt("featureType", mlFaceAnalyzerSetting.getFeatureType());
            jsonObject.putOpt("keyPointType", mlFaceAnalyzerSetting.getKeyPointType());
            jsonObject.putOpt("minFaceProportion", mlFaceAnalyzerSetting.getMinFaceProportion());
            jsonObject.putOpt("performanceType", mlFaceAnalyzerSetting.getPerformanceType());
            jsonObject.putOpt("shapeType", mlFaceAnalyzerSetting.getShapeType());
            jsonObject.putOpt("tracingMode", mlFaceAnalyzerSetting.getTracingMode());
            jsonObject.putOpt("isTracingAllowed", mlFaceAnalyzerSetting.isTracingAllowed());
            jsonObject.putOpt("isPoseDisabled", mlFaceAnalyzerSetting.isPoseDisabled());
            jsonObject.putOpt("isTracingAllowed", mlFaceAnalyzerSetting.isMaxSizeFaceOnly());
            callbackContext.success(jsonObject);

        }

    }
}
