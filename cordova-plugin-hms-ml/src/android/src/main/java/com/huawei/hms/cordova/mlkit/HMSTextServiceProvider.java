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
import com.huawei.hms.cordova.mlkit.providers.textproviders.bankcard.MLBankCardAnalyser;
import com.huawei.hms.cordova.mlkit.providers.textproviders.document.MLImageDocumentAnalyser;
import com.huawei.hms.cordova.mlkit.providers.textproviders.formrecognition.MLFormRecognitionAnalyser;
import com.huawei.hms.cordova.mlkit.providers.textproviders.generalcard.MLGeneralCardAnalyser;
import com.huawei.hms.cordova.mlkit.providers.textproviders.text.MLImageTextAnalyser;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSTextServiceProvider extends CordovaPlugin {

    public static final String TAG = HMSTextServiceProvider.class.getSimpleName();
    private static CallbackContext callbackCtx;
    private PermissionUtils permissionUtils = new PermissionUtils();
    private MLImageTextAnalyser mlTextService;
    private MLImageDocumentAnalyser mlDocumentService;
    private MLBankCardAnalyser bcrAnalyse;
    private MLGeneralCardAnalyser generalCardAnalyse;
    private MLFormRecognitionAnalyser formRecognitionAnalyser;

    public static CallbackContext getCallbackContext() {
        return callbackCtx;
    }

    public static void setCallbackContext(final CallbackContext callbackContext) {
        callbackCtx = callbackContext;
    }

    public void pluginInitialize() {
        mlTextService = CordovaHelpers.initializeProvider(new MLImageTextAnalyser(cordova.getContext()), cordova, this);
        mlDocumentService = CordovaHelpers.initializeProvider(new MLImageDocumentAnalyser(cordova.getContext()),
            cordova, this);
        generalCardAnalyse = CordovaHelpers.initializeProvider(new MLGeneralCardAnalyser(cordova.getContext()), cordova,
            this);
        formRecognitionAnalyser = CordovaHelpers.initializeProvider(new MLFormRecognitionAnalyser(cordova.getContext()),
            cordova, this);
        bcrAnalyse = CordovaHelpers.initializeProvider(new MLBankCardAnalyser(cordova.getContext()), cordova, this);

    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {

        setCallbackContext(callbackContext);
        JSONObject params = args.optJSONObject(0);
        int ocrType;
        if (checkPermissionText(callbackContext)) {
            try {
                switch (action) {
                    case "ACTION_IMAGE_TEXT_ANALYSER": {
                        if (!params.has("ocrType") || params.isNull("ocrType")) {
                            Log.e(TAG, "Illegal argument. ocrType field is mandatory and it must not be null.");
                            callbackContext.error(
                                "Illegal argument. ocrType field is mandatory and it must not be null.");
                            return false;
                        }
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyser");
                        ocrType = params.getInt("ocrType");
                        switch (ocrType) {
                            case 0:
                                Log.i(TAG, "ImageTextAnalyse: localImageTextAnalyser");
                                mlTextService.initializeLocalImageTextAnalyser(params, callbackContext);
                                return true;
                            case 1:
                                Log.i(TAG, "ImageTextAnalyse: remoteImageTextAnalyser");
                                mlTextService.initializeRemoteImageTextAnalyser(params, callbackContext);
                                return true;
                            default:
                        }
                        break;
                    }
                    case "ACTION_GET_IMAGE_TEXT_INFO":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyserInfo");
                        mlTextService.getImgTextAnalyserInfo(callbackContext, cordova);
                        return true;
                    case "ACTION_GET_IMAGE_TEXT_SETTING":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("imageTextAnalyserSetting");
                        mlTextService.getTextSetting(callbackContext);
                        return true;
                    case "ACTION_STOP_TEXT_ANALYSER":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("imageTextAnalyserStop");
                        mlTextService.closeImgTextAnalyser(callbackContext, cordova);
                        return true;
                    case "ACTION_GET_GCR_SETTING":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("gcrAnalyserSetting");
                        generalCardAnalyse.getGCRSetting(callbackContext);
                        return true;
                    case "ACTION_DOCUMENT_IMAGE_ANALYSER": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("documentImageAnalyser");
                            mlDocumentService.initializeDocumentAnalyser(params, callbackContext);
                        });
                        return true;
                    }
                    case "ACTION_STOP_DOCUMENT_IMAGE_ANALYSER": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("documentImageAnalyserStop");
                            try {
                                mlDocumentService.stopDocumentAnalyser(callbackContext);
                            } catch (IOException e) {
                                Log.e(TAG, "" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("documentImageAnalyserClose");
                        mlDocumentService.closeDocumentAnalyser(callbackContext);
                        return true;
                    case "ACTION_GET_DOCUMENT_IMAGE_ANALYSER_SETTING":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("documentImageAnalyserSetting");
                        mlDocumentService.getDocumentAnalyserSetting(callbackContext);
                        return true;
                    case "ACTION_FORM_RECOGNITION": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("formRecognitionAnalyser");
                            try {
                                formRecognitionAnalyser.initializeFormRecognitionAnalyser(params, callbackContext);
                            } catch (JSONException e) {
                                Log.i(TAG, "" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_FORM_RECOGNITION_STOP": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext())
                                .startMethodExecutionTimer("formRecognitionAnalyserStop");
                            try {
                                formRecognitionAnalyser.stop(callbackContext);
                            } catch (IOException e) {
                                Log.e(TAG, "" + e.getMessage());
                            }
                        });
                        return true;
                    }
                    case "ACTION_BANK_CARD_DETECTOR": {
                        cordova.getThreadPool().execute(() -> {
                            HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("bankCardDetector");
                            bcrAnalyse.initializerBCRAnalyser(params, callbackContext);
                        });
                        return true;
                    }
                    case "ACTION_STOP_BANK_CARD_DETECTOR":
                        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("bankCardDetectorStop");
                        bcrAnalyse.stopBankCardAnalyser(callbackContext, cordova);
                        return true;
                    case "ACTION_GET_BANK_CARD_SETTING":
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("bankCardDetectorSetting");
                        bcrAnalyse.getBCRSetting(callbackContext);
                        return true;
                    case "ACTION_GENERALCARD_PLUGIN_DETECTOR": {
                        HMSLogger.getInstance(cordova.getContext())
                            .startMethodExecutionTimer("generalcardPluginDetector");
                        generalCardAnalyse.initializeGeneralCardAnalyser(params, callbackContext);
                        return true;
                    }

                }
            } catch (IOException | JSONException e) {
                Log.e(TAG, "error: " + e.getMessage());
            }
        }

        return false;
    }

    public boolean checkPermissionText(CallbackContext callbackContext) {
        boolean camera = PermissionUtils.hasPermission("camera", this);
        boolean writeExternalStorage = PermissionUtils.hasPermission("writeExternalStorage", this);
        boolean readExternalStorage = PermissionUtils.hasPermission("readExternalStorage", this);
        if (camera && writeExternalStorage && readExternalStorage) {
            return true;
        }
        permissionUtils.checkPermissionError(readExternalStorage, 0, writeExternalStorage, 1, camera, 1, false, 0,
            callbackContext);
        return false;
    }

}
