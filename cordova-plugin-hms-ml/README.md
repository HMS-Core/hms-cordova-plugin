# cordova-plugin-hms-ml

## Contents

1. Introduction
2. Installation Guide
3. Cordova Example API Method Definition
4. Configure Description
5. Licensing and Terms

## 1. Introduction

This Cordova SDK code encapsulates the Huawei Ml Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

- **src/main/com/huawei/hms/cordova/mlkit**: core layer that exposes MlKitSDK functionality to JS side.
- **www/**: Public interfaces for interacting MlKitSDK through Cordova.

## 2. Installation Guide

1. Download `cordova-plugin-hms-ml`.
2. Add Android platform to your project if you haven't yet.

``` shell
cordova platform add android
```

3. Add this plugin to your project by running the following command in root directory of your project:

``` shell
cordova plugin add PATH_TO_CORDOVA_MLKIT_PLUGIN
```

4. Run your app.

``` shell
cordova run android
```


## 3. Cordova SDK API method definitions

### Modules Overview

| Module                          | Description                                                                                                                                                                                                                            |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BankCardAnalyse                 | If you want to get information such as cart number, validity period on bank cards, you can use this service.                                                                                                                           |
| ImageClassificationAnalyse      | The image classification service classifies elements in images into intuitive categories, such as people, objects, environments, activities, or artwork, to define image themes and application scenarios.                             |
| ImageDocumentAnalyse            | The document recognition service can recognize text with paragraph formats in document images.                                                                                                                                         | 
| StillFaceAnalyse                | The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.                                                                                                      |
| GeneralCardAnalyse              | The general card recognition service provides a universal development framework based on the text recognition technology.                                                                                                              |
| IDCardAnalyse                   | If you are interested in a place, you can create a geofence based on the place. When the device enters the geofence or stays for a duration of time, a notification can be sent to your app.                                           |
| ImageSegmentation               | The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food, cat, dog, flower, water, sand, building, mountain, and others.  |
| ImageLandMarkAnalyse            | The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.                                                                                          |
| ImageObjectAnalyser             | The object detection and tracking service can detect and track multiple objects in an image.                                                                                                                                           |
| ProductVisionSearchAnalyse      | A user can take a photo of a product, or scan it, to search for similar items online.                                                                                                                                                  |
| ImageTextAnalyse                | The text recognition service extracts text from images of receipts, business cards, and documents.                                                                                                                                     |
| Translator                      | The text translation service can translate text into different languages.                                                                                                                                                              |
| LangDetection			  | The language detection service can detect the language of text. Both single-language text and multi-language text are supported.                                                                                                       |
| TtsAnalyse                      | Text to speech (TTS) can convert text information into speech output. Rich timbres are supported to produce more natural sounds.     



### Functions Overview

|Return Type | Function                                                                                    |
|:-----------|:--------------------------------------------------------------------------------------------|
|void        | requestPermissions(permissionList, successCallback, errorCallback)                          |
|void        | hasPermissions(permissionListInput, successCallback, errorCallback)                         |
|void        | imageTextAnalyser(ImageTextAnalyserInput, successCallback, errorCallback)                   |
|void        | getTextAnalyserInfo(successCallback, errorCallback)                                         | 
|void        | stopTextAnalyser(successCallback, errorCallback)                                            |
|void        | documentImageAnalyser(documentImageAnalyserInput, successCallback, errorCallback)           |
|void        | stopDocumentImageAnalyser(successCallback, errorCallback)                                   |
|void        | imageClassificationAnalyser(imageClassificationInput, successCallback, errorCallback)       |
|void        | stopImageClassificationAnalyser(successCallback, errorCallback)                             | 
|void        | remoteTranslator(translateInput, successCallback, errorCallback)                            |
|void        | remoteLangDetection(remoteLangDetectionInput, successCallback, errorCallback)               |
|void        | stopTranslatorService(successCallback, errorCallback)                                       |
|void        | stopLangDetectionService(successCallback, errorCallback)                                    | 
|void        | stillFaceAnalyser(faceAnalyserInput, successCallback, errorCallback)                        | 
|void        | stilFaceAnalyserInfo(successCallback, errorCallback)                                        |
|void        | stopStillFaceAnalyser(successCallback, errorCallback)                                       |
|void        | bankCardDetector(bankCardSDKDetectorInput, successCallback, errorCallback)                  |
|void        | stopBankCardDetector(successCallback, errorCallback)                                        | 
|void        | generalCardDetector(generalCardDetectorInput, successCallback, errorCallback)               |
|void        | imgSegmentation(imgSegmentationInput, successCallback, errorCallback)                       |
|void        | imgLandMarkAnalyser(imgLandMarkAnalyserInput, successCallback, errorCallback)               |
|void        | productVisionSearch(productVisionSearchInput, successCallback, errorCallback)               | 
|void        | stopProductVisionSearch(successCallback, errorCallback)                                     | 
|void        | idCardAnalyser(idCardAnalyserInput, successCallback, errorCallback)                         |
|void        | objectAnalyser(objectAnalyserInput, successCallback, errorCallback)                         |
|void        | ttsAnalyser(ttsAnalyserInput, successCallback, errorCallback)                               | 
|void        | ttsAnalyserPause(successCallback, errorCallback)                                            |
|void        | ttsAnalyserResume(successCallback, errorCallback)                                           | 
|void        | ttsAnalyserStop(successCallback, errorCallback)                                             |                                                                                                  |

---

## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
