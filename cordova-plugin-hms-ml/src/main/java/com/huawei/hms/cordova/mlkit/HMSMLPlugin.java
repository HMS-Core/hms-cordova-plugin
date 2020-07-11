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

package com.huawei.hms.cordova.mlkit;

import android.util.Log;

import com.huawei.hms.cordova.mlkit.bankcard.BankCardAnalyse;
import com.huawei.hms.cordova.mlkit.classification.ImageClassificationAnalyse;
import com.huawei.hms.cordova.mlkit.document.ImageDocumentAnalyse;
import com.huawei.hms.cordova.mlkit.face.StillFaceAnalyse;
import com.huawei.hms.cordova.mlkit.generalcard.GeneralCardAnalyse;
import com.huawei.hms.cordova.mlkit.idcard.IDCardAnalyse;
import com.huawei.hms.cordova.mlkit.imgseg.ImageSegmentation;
import com.huawei.hms.cordova.mlkit.landmark.ImageLandMarkAnalyse;
import com.huawei.hms.cordova.mlkit.langdetection.LangDetection;
import com.huawei.hms.cordova.mlkit.object.ImageObjectAnalyser;
import com.huawei.hms.cordova.mlkit.productvisionsearch.ProductVisionSearchAnalyse;
import com.huawei.hms.cordova.mlkit.text.ImageTextAnalyse;
import com.huawei.hms.cordova.mlkit.translate.Translator;
import com.huawei.hms.cordova.mlkit.tts.TtsAnalyse;
import com.huawei.hms.cordova.mlkit.utils.CordovaUtils;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class HMSMLPlugin extends CordovaPlugin {
    public static final String TAG = HMSMLPlugin.class.getSimpleName();

    private ImageTextAnalyse mlTextService = new ImageTextAnalyse();
    private ImageDocumentAnalyse mlDocumentService = new ImageDocumentAnalyse();
    private ImageClassificationAnalyse imageClassificationAnalyse = new ImageClassificationAnalyse();
    private Translator translator = new Translator();
    private LangDetection langDetection = new LangDetection();
    private StillFaceAnalyse stillFaceAnalyse = new StillFaceAnalyse();
    private BankCardAnalyse bcrAnalyse = new BankCardAnalyse();
    private ImageSegmentation imageSegmentation = new ImageSegmentation();
    private ImageLandMarkAnalyse imageLandMarkAnalyse = new ImageLandMarkAnalyse();
    private ProductVisionSearchAnalyse productVisionSearchAnalyse = new ProductVisionSearchAnalyse();
    private GeneralCardAnalyse generalCardAnalyse = new GeneralCardAnalyse();
    private IDCardAnalyse idCardAnalyse = new IDCardAnalyse();
    private ImageObjectAnalyser imageObjectAnalyser = new ImageObjectAnalyser();
    private TtsAnalyse ttsAnalyse = new TtsAnalyse();

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        JSONObject params = args.optJSONObject(0);
        try {
            int ocrType;
            switch (Actions.valueOf(action)) {
                case ACTION_CHECK_PERMISSION:
                    JSONObject permissionResult = new JSONObject();
                    List<String> permissionList = PermissionUtils.jsonArrayToList(params);
                    if (permissionList.contains("camera")) {
                        permissionResult.putOpt("camera", CordovaUtils.keyValPair("hasPermission",
                                PermissionUtils.hasCameraPermission("camera", this)));
                    }
                    if (permissionList.contains("readExternalStorage")) {
                        permissionResult.putOpt("readExternalStorage", CordovaUtils.keyValPair("hasPermission",
                                PermissionUtils.hasCameraPermission("readExternalStorage", this)));
                    }
                    if (permissionList.contains("writeExternalStorage")) {
                        permissionResult.putOpt("writeExternalStorage", CordovaUtils.keyValPair("hasPermission",
                                PermissionUtils.hasCameraPermission("writeExternalStorage", this)));
                    }
                    if (permissionList.contains("audio")) {
                        permissionResult.putOpt("audio", CordovaUtils.keyValPair("hasPermission",
                                PermissionUtils.hasCameraPermission("audio", this)));
                    }
                    callbackContext.success(permissionResult);
                    return true;
                case ACTION_REQUEST_PERMISSION:
                    PermissionUtils.requestCameraPermission(callbackContext, params, this);
                    return true;
                case ACTION_IMAGE_TEXT_ANALYSER:
                    if (!params.has("ocrType") || params.isNull("ocrType")) {
                        Log.e(TAG, "Illegal argument. ocrType field is mandatory and it must not be null.");
                        callbackContext.error("Illegal argument. ocrType field is mandatory and it must not be null.");
                        return false;
                    }
                    ocrType = params.getInt("ocrType");
                    switch (ocrType) {
                        case 0:
                            Log.i(TAG, "ImageTextAnalyse: localImageTextAnalyser");
                            mlTextService.localImageTextAnalyser(this.cordova.getContext(), params, callbackContext);
                            break;
                        case 1:
                            Log.i(TAG, "ImageTextAnalyse: remoteImageTextAnalyser");
                            mlTextService.remoteImageTextAnalyser(this.cordova.getContext(), params, callbackContext);
                            break;
                        default:
                    }
                    return true;
                case ACTION_GET_IMAGE_TEXT_INFO:
                    mlTextService.getAnalyserInfo(callbackContext);
                    return true;
                case ACTION_STOP_TEXT_ANALYSER:
                    mlTextService.closeAnalyser(callbackContext);
                    return true;
                case ACTION_DOCUMENT_IMAGE_ANALYSER:
                    mlDocumentService.documentAnalyser(this.cordova.getContext(), params, callbackContext);
                    return true;
                case ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER:
                    mlDocumentService.closeDocumentAnalyser(callbackContext);
                    return true;
                case ACTION_IMAGE_CLASSIFICATION_ANALYSER:
                    if (!params.has("ocrType") || params.isNull("ocrType")) {
                        Log.e(TAG, "Illegal argument. ocrType field is mandatory and it must not be null.");
                        callbackContext.error("Illegal argument. ocrType field is mandatory and it must not be null.");
                        return false;
                    }
                    ocrType = params.getInt("ocrType");
                    switch (ocrType) {
                        case 0:
                            Log.i(TAG, "execute: LocalImageClassificationAnalyser");
                            imageClassificationAnalyse.localImageClassificationAnalyzer(this.cordova.getContext(),
                                    params, callbackContext);
                            break;
                        case 1:
                            Log.i(TAG, "execute: remoteImageClassificationAnalyzer");
                            imageClassificationAnalyse.remoteImageClassificationAnalyzer(this.cordova.getContext(),
                                    params, callbackContext);
                            break;
                        default:
                    }
                    return true;
                case ACTION_CLOSE_IMAGE_CLASSIFICATION_ANALYSER:
                    imageClassificationAnalyse.closeImageClassificationAnalyser(callbackContext);
                    return true;
                case ACTION_OBJECT_ANALYSER:
                    imageObjectAnalyser.objectAnalyser(this.cordova.getContext(), params, callbackContext);
                    return true;
                case ACTION_REMOTE_TRANSLATOR:
                    translator.remoteTranslator(params, callbackContext);
                    return true;
                case ACTION_REMOTE_LANG_DETECTION:
                    langDetection.remoteLangDetection(params, callbackContext);
                    return true;
                case ACTION_STOP_TRANSLATOR_SERVICE:
                    translator.stopTranslatorService(callbackContext);
                    return true;
                case ACTION_STOP_LANGDETECTION_SERVICE:
                    langDetection.stopLangDetectionService(callbackContext);
                    return true;
                case ACTION_STILL_FACE_ANALYSER:
                    stillFaceAnalyse.analyzer(this.cordova.getContext(), params, callbackContext);
                    return true;
                case ACTION_STILL_FACE_INFO:
                    stillFaceAnalyse.getAnalyserInfo(callbackContext);
                    return true;
                case ACTION_STOP_STILL_FACE_ANALYSER:
                    stillFaceAnalyse.closeStillFaceAnalyser(callbackContext);
                    return true;
                case ACTION_IDCARD_ANALYSER:
                    idCardAnalyse.initializerIDCardAnalyser(action, params, this.cordova.getContext(), callbackContext);
                    return true;
                case ACTION_BANK_CARD_DETECTOR:
                    bcrAnalyse.initializerCallBack(params, this.cordova.getContext(), callbackContext);
                    return true;
                case ACTION_STOP_BANK_CARD_DETECTOR:
                    bcrAnalyse.stopBankCardAnalyser(callbackContext);
                    return true;
                case ACTION_GENERALCARD_PLUGIN_DETECTOR:
                    generalCardAnalyse.initializerCallBack(action, params, this.cordova.getContext(), callbackContext);
                    return true;
                case ACTION_IMAGE_SEGMENTATION:
                    imageSegmentation.analyzer(this.cordova.getContext(), params, callbackContext);
                    return true;
                case STOP_IMAGE_SEGMENTATION:
                    imageSegmentation.stopSegmentation(callbackContext);
                    return true;
                case ACTION_IMAGE_LANDMARK_ANALYSE:
                    imageLandMarkAnalyse.imageLandMarkAnalyzer(this.cordova.getContext(), params, callbackContext);
                    return true;
                case ACTION_IMAGE_LANDMARK_ANALYSE_STOP:
                    imageLandMarkAnalyse.stopAnalyser(callbackContext);
                    return true;
                case ACTION_PRODUCT_VISION_SEARCH:
                    productVisionSearchAnalyse.remoteAnalyzer(this.cordova.getContext(), params, callbackContext);
                    return true;
                case STOP_PRODUCT_VISION_SEARCH:
                    productVisionSearchAnalyse.stopProductVisionSearchAnalyser(callbackContext);
                    return true;
                case ACTION_TTS_ANALYSE:
                    ttsAnalyse.ttsAnalyseInitializer(callbackContext, params);
                    return true;
                case ACTION_TTS_ANALYSE_STOP:
                    ttsAnalyse.stopAnalyser(callbackContext);
                    return true;
                case ACTION_TTS_ANALYSE_PAUSE:
                    ttsAnalyse.pauseAnalyser(callbackContext);
                    return true;
                case ACTION_TTS_ANALYSE_RESUME:
                    ttsAnalyse.resumeAnalyser(callbackContext);
                    return true;
            }
        } catch (JSONException e) {
            callbackContext.error(e.getMessage());
        } catch (RuntimeException e) {
            callbackContext.error(e.getMessage());
        } catch (Exception e) {
            callbackContext.error(e.getMessage());
        }
        return false;
    }

    public enum Actions {
        ACTION_CHECK_PERMISSION, ACTION_REQUEST_PERMISSION, // Permission
        ACTION_IMAGE_TEXT_ANALYSER, ACTION_GET_IMAGE_TEXT_INFO, ACTION_STOP_TEXT_ANALYSER, // Text Analyser
        ACTION_DOCUMENT_IMAGE_ANALYSER, ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER, //Document Analyser
        ACTION_IMAGE_CLASSIFICATION_ANALYSER, ACTION_CLOSE_IMAGE_CLASSIFICATION_ANALYSER, // Image Class. Analyser
        ACTION_REMOTE_TRANSLATOR, ACTION_REMOTE_LANG_DETECTION,
        ACTION_STOP_TRANSLATOR_SERVICE, ACTION_STOP_LANGDETECTION_SERVICE, // Translator Service
        ACTION_STILL_FACE_ANALYSER, ACTION_STOP_STILL_FACE_ANALYSER, ACTION_STILL_FACE_INFO,
        ACTION_IDCARD_ANALYSER,
        ACTION_OBJECT_ANALYSER,
        ACTION_GENERALCARD_PLUGIN_DETECTOR,

        ACTION_BANK_CARD_DETECTOR, ACTION_STOP_BANK_CARD_DETECTOR,
        ACTION_IMAGE_SEGMENTATION, STOP_IMAGE_SEGMENTATION, // Image Segmentation Service
        ACTION_IMAGE_LANDMARK_ANALYSE, ACTION_IMAGE_LANDMARK_ANALYSE_STOP, // Image LandMark Analyse
        ACTION_PRODUCT_VISION_SEARCH, STOP_PRODUCT_VISION_SEARCH,
        ACTION_TTS_ANALYSE, ACTION_TTS_ANALYSE_STOP, ACTION_TTS_ANALYSE_PAUSE, ACTION_TTS_ANALYSE_RESUME,
    }
}
