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

  const argscheck = require('cordova/argscheck');
  const exec = require('cordova/exec');
  const cordova = require('cordova');
  
  var HMSMLKitAPI = function () {
        console.log("HMSMLPlugin instanced");
  };
  var execute = (success, error, action, param) => {
      exec(success, error, "HMSMLPlugin", action, param === undefined || param === null ? [{}] : [param]);
    };
    HMSMLKitAPI.prototype.hasPermissions = (permissionListInput,success, error) => {
      execute(success, error, "ACTION_CHECK_PERMISSION",permissionListInput);
    };
    HMSMLKitAPI.prototype.requestPermissions = (permissionListInput,success, error) => {
      execute(success, error, "ACTION_REQUEST_PERMISSION",permissionListInput);
    };
    HMSMLKitAPI.prototype.ImageTextAnalyser = (ImageTextAnalyserInput,success, error) => {
      execute(success, error, "ACTION_IMAGE_TEXT_ANALYSER", ImageTextAnalyserInput);
    };
    HMSMLKitAPI.prototype.stopTextAnalyser = (success, error) => {
      execute(success, error, "ACTION_STOP_TEXT_ANALYSER");
    };
    HMSMLKitAPI.prototype.getTextAnalyserInfo = (success, error) => {
      execute(success, error, "ACTION_GET_IMAGE_TEXT_INFO");
    };
    HMSMLKitAPI.prototype.documentImageAnalyser = (documentImageAnalyserInput,success, error) => {
      execute(success, error, "ACTION_DOCUMENT_IMAGE_ANALYSER", documentImageAnalyserInput);
    };
    HMSMLKitAPI.prototype.stopDocumentImageAnalyser = (success, error) => {
      execute(success, error, "ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER");
    };
    HMSMLKitAPI.prototype.imageClassificationAnalyser = (imageClassificationInput,success, error) => {
      execute(success, error, "ACTION_IMAGE_CLASSIFICATION_ANALYSER", imageClassificationInput);
    };
    HMSMLKitAPI.prototype.stopImageClassificationAnalyser = (success, error) => {
      execute(success, error, "ACTION_CLOSE_IMAGE_CLASSIFICATION_ANALYSER");
    };
    HMSMLKitAPI.prototype.remoteTranslator = (translateInput,success, error) => {
      execute(success, error, "ACTION_REMOTE_TRANSLATOR", translateInput);
    };
    HMSMLKitAPI.prototype.remoteLangDetection = (remoteLangDetectionInput,success, error) => {
      execute(success, error, "ACTION_REMOTE_LANG_DETECTION", remoteLangDetectionInput);
    };
    HMSMLKitAPI.prototype.stopTranslatorService = (success, error) => {
      execute(success, error, "ACTION_STOP_TRANSLATOR_SERVICE");
    };
    HMSMLKitAPI.prototype.stopLangDetectionService = (success, error) => {
      execute(success, error, "ACTION_STOP_LANGDETECTION_SERVICE");
    };
    HMSMLKitAPI.prototype.stillFaceAnalyser = (faceAnalyserInput,success, error) => {
      execute(success, error, "ACTION_STILL_FACE_ANALYSER", faceAnalyserInput);
    };
    HMSMLKitAPI.prototype.stilFaceAnalyserInfo = (success, error) => {
      execute(success, error, "ACTION_STILL_FACE_INFO");
    };
    HMSMLKitAPI.prototype.stopStillFaceAnalyser = (success, error) => {
      execute(success, error, "ACTION_STOP_STILL_FACE_ANALYSER");
    };
    HMSMLKitAPI.prototype.bankCardDetector = (bankCardDetecterInput,success, error) => {
      execute(success, error, "ACTION_BANK_CARD_DETECTOR", bankCardDetecterInput);
    };
    HMSMLKitAPI.prototype.stopBankCardDetector = (success, error) => {
      execute(success, error, "ACTION_STOP_BANK_CARD_DETECTOR");
    };
    HMSMLKitAPI.prototype.generalCardDetector = (generalCardDetectorInput,success, error) => {
      execute(success, error, "ACTION_GENERALCARD_PLUGIN_DETECTOR", generalCardDetectorInput);
    };
    HMSMLKitAPI.prototype.imgSegmentation = (imgSegmentationInput,success, error) => {
      execute(success, error, "ACTION_IMAGE_SEGMENTATION", imgSegmentationInput);
    };
    HMSMLKitAPI.prototype.stopImgSegmentation = (success, error) => {
      execute(success, error, "STOP_IMAGE_SEGMENTATION");
    };
    HMSMLKitAPI.prototype.imgLandMarkAnalyser = (imgLandMarkAnalyserInput,success, error) => {
      execute(success, error, "ACTION_IMAGE_LANDMARK_ANALYSE",imgLandMarkAnalyserInput);
    };
    HMSMLKitAPI.prototype.imgLandMarkAnalyserStop = (success, error) => {
      execute(success, error, "ACTION_IMAGE_LANDMARK_STOP");
    };
    HMSMLKitAPI.prototype.productVisionSearch = (productVisionSearchInput,success, error) => {
      execute(success, error, "ACTION_PRODUCT_VISION_SEARCH",productVisionSearchInput);
    };
    HMSMLKitAPI.prototype.stopProductVisionSearch = (success, error) => {
      execute(success, error, "STOP_PRODUCT_VISION_SEARCH");
    };
    HMSMLKitAPI.prototype.idCardAnalyser = (idCardAnalyserInput,success, error) => {
      execute(success, error, "ACTION_IDCARD_ANALYSER",idCardAnalyserInput);
    };
    HMSMLKitAPI.prototype.objectAnalyser = (objectAnalyserInput,success, error) => {
      execute(success, error, "ACTION_OBJECT_ANALYSER",objectAnalyserInput);
    };
    HMSMLKitAPI.prototype.ttsAnalyser = (ttsAnalyserInput,success, error) => {
      execute(success, error, "ACTION_TTS_ANALYSE",ttsAnalyserInput);
    };
    HMSMLKitAPI.prototype.ttsAnalyserStop = (success, error) => {
      execute(success, error, "ACTION_TTS_ANALYSE_STOP");
    };
    HMSMLKitAPI.prototype.ttsAnalyserPause = (success, error) => {
      execute(success, error, "ACTION_TTS_ANALYSE_PAUSE");
    };
    HMSMLKitAPI.prototype.ttsAnalyserResume = (success, error) => {
      execute(success, error, "ACTION_TTS_ANALYSE_RESUME");
    };
  module.exports = new HMSMLKitAPI();
