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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.imgseg;

import android.content.Context;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationAnalyzer;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLImageSegmentationAnalyser extends HMSProvider {
    private static final String TAG = MLImageSegmentationAnalyser.class.getName();
    private MLImageSegmentationAnalyzer imageSegmentationAnalyzer;
    private MLImageSegmentationSetting setting;

    public MLImageSegmentationAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeImgSegmentationAnalyzer(final Context context, final JSONObject params,
        final CallbackContext callbackContext) {
        MLFrame segFrame = HMSMLUtils.getFrame(context, params);
        HMSMethod method = new HMSMethod("imageSegmentation");
        CordovaHelpers.frameController(segFrame, getContext(), callbackContext, "imageSegmentation");
        JSONObject imageSegmentationSetting = params.optJSONObject("imageSegmentationSetting");
        int analyseMode = params.optInt("analyseMode");
        if (imageSegmentationSetting != null) {
            setting = TextUtils.toObject(imageSegmentationSetting, MLImageSegmentationSetting.class);
        } else {
            setting = new MLImageSegmentationSetting.Factory().create();
        }
        imageSegmentationAnalyzer = MLAnalyzerFactory.getInstance().getImageSegmentationAnalyzer(setting);

        switch (analyseMode) {
            case 0:
                Task<MLImageSegmentation> task = imageSegmentationAnalyzer.asyncAnalyseFrame(segFrame);
                task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_IMGSEG_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            case 1:
                SparseArray<MLImageSegmentation> sparseArray = imageSegmentationAnalyzer.analyseFrame(segFrame);
                if (sparseArray != null) {
                    callbackContext.success(TextUtils.fromSparseArrayImageSegmentationToJSON(sparseArray));
                    HMSLogger.getInstance(getContext()).sendSingleEvent("imageSegmentation");
                }
                break;
            default:
                callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
                HMSLogger.getInstance(getContext())
                    .sendSingleEvent("imageSegmentation", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    public void stopSegmentation(final CallbackContext callbackContext) throws IOException {
        if (imageSegmentationAnalyzer == null) {
            callbackContext.success("Image Segmentation Analyser is already closed");
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageSegmentationStop");
        } else {
            imageSegmentationAnalyzer.stop();
            imageSegmentationAnalyzer = null;
            callbackContext.success("Image Segmentation Analyser is closed ");
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageSegmentationStop");
        }
    }

    public void getSegmentationSetting(final CallbackContext callbackContext) throws IOException, JSONException {
        if (imageSegmentationAnalyzer == null) {
            callbackContext.success("Image Segmentation Analyser is already closed");
            HMSLogger.getInstance(getContext()).sendSingleEvent("imageSegmentationSetting");
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("analyzerType", setting.getAnalyzerType());
            jsonObject.putOpt("scene", setting.getScene());
            jsonObject.putOpt("isExact", setting.isExact());
            callbackContext.success(jsonObject);
        }
    }

}
