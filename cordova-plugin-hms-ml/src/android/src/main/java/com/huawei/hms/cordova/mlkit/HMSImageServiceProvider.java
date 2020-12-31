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

package com.huawei.hms.cordova.mlkit;

import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.classification.MLImageClassificationAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.documentskewcorrection.MLDocumentSkewCorrectionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.imagesuperresolution.MLImageSuperResolutionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.imgseg.MLImageSegmentationAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.landmark.MLImageLandMarkAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.object.MLImageObjectAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.product.MLProductVisionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.scenedetection.MLStillSceneDetectionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.textimagesuperresolution.MLTextImageSuperResolutionAnalyser;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSImageServiceProvider extends CordovaPlugin {

    public static final String TAG = HMSImageServiceProvider.class.getSimpleName();
    private PermissionUtils permissionUtils = new PermissionUtils();
    private MLImageClassificationAnalyser imageClassificationAnalyse;
    private MLImageSegmentationAnalyser imageSegmentation;
    private MLImageLandMarkAnalyser imageLandMarkAnalyse;
    private MLImageObjectAnalyser imageObjectAnalyser;
    private MLDocumentSkewCorrectionAnalyser documentSkewCorrection;
    private MLImageSuperResolutionAnalyser imageSuperResolution;
    private MLStillSceneDetectionAnalyser sceneDetectionStillAnalyse;
    private MLTextImageSuperResolutionAnalyser textImageSuperResolution;
    private MLProductVisionAnalyser productVisionAnalyser;

    public void pluginInitialize() {
        imageClassificationAnalyse = CordovaHelpers.initializeProvider(
            new MLImageClassificationAnalyser(cordova.getContext()), cordova, this);
        imageSegmentation = CordovaHelpers.initializeProvider(new MLImageSegmentationAnalyser(cordova.getContext()),
            cordova, this);
        imageLandMarkAnalyse = CordovaHelpers.initializeProvider(new MLImageLandMarkAnalyser(cordova.getContext()),
            cordova, this);
        imageObjectAnalyser = CordovaHelpers.initializeProvider(new MLImageObjectAnalyser(cordova.getContext()),
            cordova, this);
        documentSkewCorrection = CordovaHelpers.initializeProvider(
            new MLDocumentSkewCorrectionAnalyser(cordova.getContext()), cordova, this);
        imageSuperResolution = CordovaHelpers.initializeProvider(
            new MLImageSuperResolutionAnalyser(cordova.getContext()), cordova, this);
        sceneDetectionStillAnalyse = CordovaHelpers.initializeProvider(
            new MLStillSceneDetectionAnalyser(cordova.getContext()), cordova, this);
        textImageSuperResolution = CordovaHelpers.initializeProvider(
            new MLTextImageSuperResolutionAnalyser(cordova.getContext()), cordova, this);
        productVisionAnalyser = CordovaHelpers.initializeProvider(new MLProductVisionAnalyser(cordova.getContext()),
            cordova, this);

    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext)
        throws JSONException {
        JSONObject params = args.optJSONObject(0);
        int ocrType;
        if (permissionCheck(callbackContext)) {
            try {
                if (action.equals("ACTION_IMAGE_CLASSIFICATION_ANALYSER")) {

                    if (!params.has("ocrType") || params.isNull("ocrType")) {
                        Log.e(TAG, "Illegal argument. ocrType field is mandatory and it must not be null.");
                        callbackContext.error("Illegal argument. ocrType field is mandatory and it must not be null.");
                        return false;
                    }
                    ocrType = params.getInt("ocrType");
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageClassificationAnalyser");
                    switch (ocrType) {
                        case 0:
                            imageClassificationAnalyse.initializeLocalImgClassAnalyzer(params, callbackContext,
                                cordova);
                            return true;
                        case 1:
                            imageClassificationAnalyse.initializeRemoteImgClassAnalyzer(params, callbackContext,
                                cordova);
                            return true;
                        default:
                    }

                }
                if (action.equals("ACTION_CLOSE_IMAGE_CLASSIFICATION_ANALYSER")) {
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageClassificationAnalyserClose");
                    imageClassificationAnalyse.closeImageClassificationAnalyser(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_GET_IMAGE_CLASSIFICATION_ANALYSER_SETTING")) {
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageClassificationAnalyserSetting");
                    imageClassificationAnalyse.getImageClassificationAnalyserSetting(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_OBJECT_ANALYSER")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("objectAnalyser");
                        imageObjectAnalyser.initializeObjectAnalyser(params, callbackContext);
                    });
                    return true;
                }
                if (action.equals("ACTION_OBJECT_ANALYSER_CLOSE")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("objectAnalyserClose");
                        try {
                            imageObjectAnalyser.stopObject(callbackContext);
                        } catch (IOException e) {
                            Log.e(TAG, "" + e.getMessage());
                        }
                    });
                    return true;
                }
                if (action.equals("ACTION_OBJECT_ANALYSER_SETTING")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("objectAnalyserSetting");
                        try {
                            imageObjectAnalyser.getObjectAnalyserSetting(callbackContext);
                        } catch (JSONException e) {
                            Log.e(TAG, "" + e.getMessage());
                        }
                    });
                    return true;
                }
                if (action.equals("ACTION_PRODUCT_VISION_ANALYSE")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("productVisionAnalyser");
                        productVisionAnalyser.initializeProductVisionAnalyser(params, cordova.getContext(),
                            callbackContext, cordova, webView);
                    });
                    return true;
                }
                if (action.equals("ACTION_PRODUCT_VISION_ANALYSE_STOP")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("productAnalyserStop");
                        productVisionAnalyser.stopProduct(callbackContext);
                    });
                    return true;
                }
                if (action.equals("ACTION_IMAGE_SEGMENTATION")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageSegmentation");
                        imageSegmentation.initializeImgSegmentationAnalyzer(cordova.getContext(), params,
                            callbackContext);
                    });
                    return true;
                }
                if (action.equals("STOP_IMAGE_SEGMENTATION")) {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageSegmentationStop");
                    imageSegmentation.stopSegmentation(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_GET_IMAGE_SEGMENTATION_SETTING")) {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageSegmentationSetting");
                    imageSegmentation.getSegmentationSetting(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_IMAGE_LANDMARK_ANALYSE")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageLandmarkAnalyse");
                        imageLandMarkAnalyse.initializeImageLandMarkAnalyzer(params, callbackContext);
                    });
                    return true;
                }
                if (action.equals("ACTION_IMAGE_LANDMARK_ANALYSE_STOP")) {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageLandmarkAnalyseStop");
                    imageLandMarkAnalyse.stopLandmarkAnalyser(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_IMAGE_LANDMARK_ANALYSE_SETTING")) {
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageLandmarkAnalyseSetting");
                    imageLandMarkAnalyse.getLandmarkAnalyserSetting(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_DOCUMENT_SKEW_ANALYSE")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("documentSkewAnalyse");
                        try {
                            documentSkewCorrection.initializeDocumentSkewCorrectionAnalyser(params, callbackContext,
                                cordova);
                        } catch (JSONException | IOException e) {
                            Log.e(TAG, "initializer: error ->", e);
                            callbackContext.error(e.getMessage());
                        }
                    });
                    return true;
                }
                if (action.equals("ACTION_DOCUMENT_SKEW_ANALYSE_STOP")) {
                    cordova.getThreadPool().execute(() -> {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("documentSkewAnalyseStop");
                        try {
                            documentSkewCorrection.stopDocSkew(callbackContext);
                        } catch (IOException e) {
                            Log.e(TAG, "initializer: error ->", e);
                            callbackContext.error(e.getMessage());
                        }
                    });
                    return true;
                }
                if (action.equals("ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE")) {
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageSuperResolutionAnalyse");
                    imageSuperResolution.initializeISRAnalyser(params, callbackContext, cordova);
                    return true;
                }
                if (action.equals("ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE_SETTING")) {
                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageSuperResolutionAnalyseSetting");
                    imageSuperResolution.getISRSetting(callbackContext);
                    return true;
                }
                if (action.equals("ACTION_IMAGE_SUPER_RESOLUTION_ANALYSE_STOP")) {

                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("imageSuperResolutionAnalyseStop");
                    imageSuperResolution.stopISR(callbackContext);
                    return true;

                }
                if (action.equals("ACTION_TEXTIMAGE_SUPER_RESOLUTION_ANALYSE")) {

                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("textImageSuperResolutionAnalyse");
                    textImageSuperResolution.initializeTISRAnalyser(callbackContext, params);
                    return true;

                }
                if (action.equals("ACTION_TEXTIMAGE_SUPER_RESOLUTION_ANALYSE_STOP")) {

                    HMSLogger.getInstance(cordova.getContext())
                        .startMethodExecutionTimer("textImageSuperResolutionAnalyseStop");
                    textImageSuperResolution.stopTISR(callbackContext);
                    return true;

                }
                if (action.equals("ACTION_STILL_SCENE_ANALYSE")) {

                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillSceneAnalyse");
                    sceneDetectionStillAnalyse.initializeStillSceneAnalyser(params, callbackContext);
                    return true;

                }
                if (action.equals("ACTION_STILL_SCENE_ANALYSE_STOP")) {

                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("stillSceneAnalyseStop");
                    sceneDetectionStillAnalyse.stopScene(callbackContext);
                    return true;

                }
            } catch (IOException e) {
                Log.e(TAG, "" + e.getMessage());
            }
        }

        return false;
    }

    public boolean permissionCheck(CallbackContext callbackContext) {
        boolean readExternalStorage = PermissionUtils.hasPermission("readExternalStorage", this);
        boolean writeExternalStorage = PermissionUtils.hasPermission("writeExternalStorage", this);
        if (readExternalStorage && writeExternalStorage) {
            return true;
        }
        permissionUtils.checkPermissionError(readExternalStorage, 1, writeExternalStorage, 1, false, 0, false, 0,
            callbackContext);
        return false;
    }
}