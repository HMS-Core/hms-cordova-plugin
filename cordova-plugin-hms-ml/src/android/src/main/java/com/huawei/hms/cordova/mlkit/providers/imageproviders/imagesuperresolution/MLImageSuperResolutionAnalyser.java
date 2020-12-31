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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.imagesuperresolution;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.SparseArray;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionAnalyzer;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionAnalyzerFactory;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionAnalyzerSetting;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionResult;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MLImageSuperResolutionAnalyser extends HMSProvider {
    private static final int INDEX_1X = 0;
    private static final int INDEX_ORIGINAL = 2;
    private MLImageSuperResolutionAnalyzer analyzer;
    private Bitmap srcBitmap;
    private CordovaInterface cordovaInterface;
    private int selectItem = INDEX_1X;
    private MLImageSuperResolutionAnalyzerSetting setting;

    public MLImageSuperResolutionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeISRAnalyser(final JSONObject params, final CallbackContext callbackContext,
        final CordovaInterface cordovaInterface) throws JSONException, IOException {
        this.cordovaInterface = cordovaInterface;
        Uri imageUri = Uri.parse(params.getString("filePath"));
        srcBitmap = MediaStore.Images.Media.getBitmap(cordovaInterface.getActivity().getContentResolver(), imageUri);

        int detectType = params.getInt("detectType");
        int syncType = params.optInt("syncType", 0);
        JSONObject mlImgSuperResAnalyserSetting = params.optJSONObject("imgSuperResolutionSetting");
        float scaleType = (float) mlImgSuperResAnalyserSetting.optDouble("scaleType",
            MLImageSuperResolutionAnalyzerSetting.ISR_SCALE_1X);

        setting = new MLImageSuperResolutionAnalyzerSetting.Factory().setScale(scaleType).create();

        analyzer = MLImageSuperResolutionAnalyzerFactory.getInstance().getImageSuperResolutionAnalyzer(setting);
        detectImage(detectType, syncType, callbackContext);
    }

    private void release() {
        if (analyzer == null) {
            return;
        }
        analyzer.stop();
    }

    private void createAnalyzer(final int type) {
        if (type == INDEX_1X) {
            analyzer = MLImageSuperResolutionAnalyzerFactory.getInstance().getImageSuperResolutionAnalyzer();
        } else {
            setting = new MLImageSuperResolutionAnalyzerSetting.Factory().setScale(
                MLImageSuperResolutionAnalyzerSetting.ISR_SCALE_3X).create();
            analyzer = MLImageSuperResolutionAnalyzerFactory.getInstance().getImageSuperResolutionAnalyzer(setting);
        }
    }

    private void detectImage(final int type, final int syncType, final CallbackContext callbackContext)
        throws JSONException {
        JSONObject resultImageResolution = new JSONObject();
        HMSMethod method = new HMSMethod("imageSuperResolutionAnalyse");
        if (type == INDEX_ORIGINAL) {
            resultImageResolution.putOpt("bitmap", HMSMLUtils.bitmapToBase64(srcBitmap));
            callbackContext.success(resultImageResolution);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("imageSuperResolutionAnalyse");
            return;
        }
        if (type != selectItem) {
            release();
            createAnalyzer(type);
        }
        if (analyzer == null) {
            return;
        }
        selectItem = type;
        MLFrame frame = MLFrame.fromBitmap(srcBitmap);
        switch (syncType) {
            case 0: {
                Task<MLImageSuperResolutionResult> task = analyzer.asyncAnalyseFrame(frame);
                task.addOnSuccessListener(PlatformUtils.successListener(method, getActivity(), callbackContext,
                    TextUtils.FROM_ISR_TO_JSON_OBJECT))
                    .addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));
                break;
            }
            case 1: {
                SparseArray<MLImageSuperResolutionResult> sparseArray = analyzer.analyseFrame(frame);
                callbackContext.success(TextUtils.fromSparseArrayISRToJSON(sparseArray));
                break;
            }
        }
    }

    public void stopISR(final CallbackContext callbackContext) {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("imageSuperResolutionAnalyseStop", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            analyzer.stop();
            analyzer = null;
            callbackContext.success("Analyzer is stop");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("imageSuperResolutionAnalyseStop");
        }
    }

    public void getISRSetting(final CallbackContext callbackContext) throws JSONException {
        if (analyzer == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("imageSuperResolutionAnalyseSetting", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            JSONObject jsonObject = new JSONObject();
            jsonObject.putOpt("scale", setting.getScale());
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("imageSuperResolutionAnalyseSetting");
        }
    }

}
