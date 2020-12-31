# Cordova Plugin HMS ML

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json](#22-configuring-the-signing-certificate-fingerprint-and-obtaining-agconnect-servicesjson)
  - [2.3. Cordova](#23-cordova)
  - [2.4. Ionic](#24-ionic)
    - [2.4.1. With Cordova Runtime](#241-with-cordova-runtime)
    - [2.4.2. With Capacitor Runtime](#242-with-capacitor-runtime)
- [3. API Reference](#3-api-reference)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei ML SDK and Cordova platform. It exposes all functionality provided by Huawei ML SDK.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### 2.1. Creating a Project in AppGallery Connect

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html)  and select **My projects**.
2. Select your project from the project list or create a new one by clicking the **Add Project** button.
3. Go to **Project Setting** > **General information**, and click **Add app**.
    - If an app exists in the project and you need to add a new one, expand the app selection area on the top of the page and click **Add app**.
4. On the **Add app** page, enter the app information, and click **OK**.

### 2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the  icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page, click **agconnect-services.json** button to download the configuration file.

### 2.3. Cordova

1. Install Cordova CLI if haven't done before.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

4. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

5. Install `HMS ML plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-ml
    ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.

    - Fill **`build.json`** file according to your keystore. For example:

    ```json
    {
        "android": {
            "debug": {
                "keystore": "<keystore_file>.jks",
                "storePassword": "<keystore_password>",
                "alias": "<key_alias>",
                "password": "<key_password>"
            },
            "release": {
                "keystore": "<keystore_file>.jks",
                "storePassword": "<keystore_password>",
                "alias": "<key_alias>",
                "password": "<key_password>"
            }
        }
    }
    ```

8. Run the app.

    ```bash
    cordova run android --device
    ```

### 2.4 Ionic

1. Install Ionic CLI and other required tools if haven't done before.

    ```bash
    npm install -g @ionic/cli cordova-res native-run
    ```

2. Create a new Ionic project or use existing Ionic project.

    - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

#### 2.4.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

    ```bash
    ionic integrations enable cordova
    ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

4. Install `HMS ML plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-ml
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-ml
    ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.

    - Fill **`build.json`** file according to your keystore. For example:

    ```json
    {
        "android": {
            "debug": {
                "keystore": "<keystore_file>.jks",
                "storePassword": "<keystore_password>",
                "alias": "<key_alias>",
                "password": "<key_password>"
            },
            "release": {
                "keystore": "<keystore_file>.jks",
                "storePassword": "<keystore_password>",
                "alias": "<key_alias>",
                "password": "<key_password>"
            }
        }
    }
    ```

8. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

9. Run the app.

   ```bash
   ionic cordova run android --device
   ```

#### 2.4.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Initialize **Capacitor** if haven't done before.

    ```bash
    npx cap init [appName] [appId]
    ```

    - For more details please follow [Initialize Capacitor with your app information](https://capacitorjs.com/docs/getting-started/with-ionic#initialize-capacitor-with-your-app-information).

3. Update the **`appId`** property which is specified in the **`capacitor.config.json`** file according to your project. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

4. Install `HMS ML plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-ml
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-ml
    ```

6. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

7. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

8. Copy **`keystore(.jks)`** and **`agconnect-services.json`** files to **`<project_root>/android/app`** directory.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.

9. Open the **`build.gradle`** file in the **`<project_root>/android/app`** directory.

    - Add `signingConfigs` entry to the **android** section and modify it according to your keystore.

    - Enable `signingConfig` configuration for **debug** and **release** flavors.

    ```groovy
    ...

    android {

        ...

        // Modify signingConfigs according to your keystore
        signingConfigs {
            config {
                storeFile file('<keystore_file>.jks')
                storePassword '<keystore_password>'
                keyAlias '<key_alias>'
                keyPassword '<key_password>'
            }
        }
        buildTypes {
            debug {
                signingConfig signingConfigs.config // Enable signingConfig for debug flavor
            }
            release {
                signingConfig signingConfigs.config // Enable signingConfig for release flavor
                minifyEnabled false
                proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            }
        }
    }

    ...
    ```

10. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories** and **agconnect classpath** to the file.

    ```groovy
    buildscript {
        repositories {
            /*
                <Other repositories>
            */
            maven { url 'https://developer.huawei.com/repo/' }
        }
        dependencies {
            /*
                <Other dependencies>
            */
            classpath 'com.huawei.agconnect:agcp:1.4.2.301'
        }
    }

    /*
        <Other build.gradle entries>
    */

    allprojects {
        repositories {
            /*
                <Other repositories>
            */
            maven { url 'https://developer.huawei.com/repo/' }
        }
    }
    ```

11. Updates dependencies, and copy any web assets to your project.

    ```bash
    npx cap sync
    ```

12. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. API Reference

### HMSNearby

#### Method Summary

| Method                                                 | Return Type                    | Description                                                                                           |
| ------------------------------------------------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| [`requestPermissions`](#requestpermissions) | `Promise<void>`                | Obtains the necessary permissions to use the services. |
| [`hasPermissions`](#hasPermissions)     |  `Promise<void>`                | It chekcs the permissions required o use the services. |
| [`liveEngineAnalyser`](#liveEngineAnalyser)     |  `Promise<void>`                | This service used to launch live services that work with the camera. |
| [`doZoom`](#doZoom)     |  `Promise<void>`                | Adjusts the focal length of the camera based on the scaling coefficient (digital zoom). |
| [`photography`](#photography)     |  `Promise<void>`                | Monitors photographing. |
| [`getDisplayDimension`](#getDisplayDimension)     |  `Promise<void>`                | Obtains the size of the preview image of a camera. |
| [`destroy`](#destroy)     |  `Promise<void>`                |Closes the camera and stops sending frames to the frame analyzer.  |
| [`getLensType`](#getLensType)     |  `Promise<void>`                |Obtains the selected camera type. |
| [`mlFrame`](#mlFrame)     |  `Promise<void>`                | This service supports getFrame, rotate frame, and preview bitmap data. |
| [`setStatistics`](#setStatistics)     |  `Promise<void>`                | Determines whether to collect statistics on the current app. |
| [`getStatistics`](#getStatistics)     |  `Promise<void>`                | Gets statistics on the current app. |
| [`appSetting`](#appSetting)     |  `Promise<void>`                | Basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit. When using cloud services of the ML Kit, you need to set the apiKey of your app. |
|  [`serviceInitializer`](#serviceInitializer)                               |  `Promise<void>`                | Call the initializeService method to initialize the HMSML service. A configuration object which contains apiKey or token must be passed as a parameter.                                                               |
| [`imageTextAnalyser`](#imageTextAnalyser)                               |  `Promise<MLText>`                | The text recognition service extracts text from images of receipts, business cards, and documents.                                                               |
|  [`stopTextAnalyser`](#stopTextAnalyser)                               |  `Promise<void>`                |It stops text analyser service.          |
 | [`getTextAnalyserInfo`](#getTextAnalyserInfo)                               |  `Promise<void>`                |It used to  obtain information about the service.          |
| [`documentImageAnalyser`](#documentImageAnalyser)                               |  `Promise<MLDocument>`                |The document recognition service can recognize text with paragraph formats in document images.                                                                                    |  
| [`stopDocumentImageAnalyser`](#stopDocumentImageAnalyser)                               | `Promise<void>`                | It stops document analyser service.          |
| [`closeDocumentImageAnalyser`](#closeDocumentImageAnalyser)                               | `Promise<void>`                | It closes document analyser service.          |
| [`imageClassificationAnalyser`](#imageClassificationAnalyser)                               | `Promise<MLImageClassification>`                |The image classification service classifies elements in images into intuitive categories, such as people, objects, environments, activities, or artwork, to define image themes and application scenarios.                                                       |  
| [`getDocumentImageAnalyserSetting`](#getDocumentImageAnalyserSetting)                               |  `Promise<void>`                | It returns document analyser settings properties.          |
| [`getTextAnalyserSetting`](#getTextAnalyserSetting)                               |  `Promise<void>`                | It returns text analyser settings properties.          |
| [`getFaceAnalyserSetting`](#getFaceAnalyserSetting)                               |  `Promise<void>`                | It returns face analyser settings properties.          |
| [`getGCRSetting`](#getGCRSetting)                               |  `Promise<void>`                | It returns GCR analyser settings properties.          |
| [`formRecognitionAnalyser`](#formRecognitionAnalyser)                                                  | `Promise<MLFormRecogitionResult>`                | The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and table text in Chinese and English including punctuation, from input images. |
| [`stopFormRecognitionAnalyser`](#stopFormRecognitionAnalyser)                               | `Promise<void>`                | It stops form recognition analyser service.          |
| [`stopImageClassificationAnalyser`](#stopImageClassificationAnalyser)                               |  `Promise<void>`                |It stops image classification analyser service.          |
| [`localTranslator`](#localTranslator)                               |  `Promise<void>`                | The text translation service can translate text into different languages in local.                                                       |  
| [`remoteTranslator`](#remoteTranslator)                               |  `Promise<void>`                | The text translation service can translate text into different languages with cloud.                                                       |
| [`remoteLangDetection`](#remoteLangDetection)                               |  `Promise<void>`                | The translate remotelanguage detection service can detect the language of text. Both single-language text and multi-language text are supported.                                                       |  
| [`localLangDetection`](#localLangDetection)                               |  `Promise<void>`                | The translate local language detection service can detect the language of text. Both single-language text and multi-language text are supported.                                                        |
| [`translatorDownloadModel`](#translatorDownloadModel)                               |  `Promise<void>`                | It downloads files required for local translator.                                                       |
| [`translatorDeleteModel`](#translatorDeleteModel)                               |  `Promise<void>`                | It deletes local languages files.                                                       |
| [`translatorRemoteAllLang`](#translatorRemoteAllLang)                               |  `Promise<void>`                | It Obtains all languages supported for cloud translation..                                                       |
| [`translatorLocalAllLang`](#translatorLocalAllLang)                               |  `Promise<void>`                | Obtains all languages supported for local translation.                                                       |
| [`stopTranslatorService`](#stopTranslatorService)                               |  `Promise<void>`                | It stops translator service.          |
| [`stopLangDetectionService`](#stopLangDetectionService)                               |  `Promise<void>`                | It stops language detection service.          |
| [`getRTTSetting`](#getRTTSetting)                               |  `Promise<void>`                | It returns Rtt analyser settings properties.          |
| [`getTTSSetting`](#getTTSSetting)                               |  `Promise<void>`                | It returns Tts analyser settings properties.          |
| [`getAFTSetting`](#getAFTSetting)                               |  `Promise<void>`                | It returns Aft analyser settings properties.          |
| [`getLangDetectionSetting`](#getLangDetectionSetting)                               |  `Promise<void>`                | It returns Language detection analyser settings properties.          |
| [`ttsAnalyserEngineSetting`](#ttsAnalyserEngineSetting)                               |  `Promise<void>`                | It returns Tts engine settings properties.          |
| [`ttsAnalyserDownloadSetting`](#ttsAnalyserDownloadSetting)                               |  `Promise<void>`                | It returns Tts analyser download settings properties.          |
| [`getDownloadStrategy`](#getDownloadStrategy)                               |  `Promise<void>`                | It returns download strategy properties.          |
| [`soundDectAnalyser`](#soundDectAnalyser)                               |  `Promise<MLSoundDectResult>`                | The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.         |
| [`soundDectAnalyserDestroy`](#soundDectAnalyserDestroy)                               |  `Promise<void>`                | Releases sound detector resources.         |
| [`ttsAnalyser`](#ttsAnalyser)                               |  `Promise<MLTtsResult>`                | Text to speech (TTS) can convert text information into speech output. Rich timbres are supported to produce more natural sounds.         |
| [`ttsOfflineAnalyser`](#ttsOfflineAnalyser)                               |  `Promise<MLTtsResult>`                | Text to speech (TTS) can convert text information into speech output on device.        |
| [`ttsAnalyserStop`](#ttsAnalyserStop)                               |  `Promise<void>`                |It stops tts analyser service.          |
| [`ttsAnalyserPause`](#ttsAnalyserPause)                               |  `Promise<void>`                |It pause tts analyser service.          |
| [`ttsAnalyserResume`](#ttsAnalyserResume)                               |  `Promise<void>`                |It resume tts analyser service.          |
| [`ttsAnalysershutDown`](#ttsAnalysershutDown)                               |  `Promise<void>`                |It releases engine resources.         |
| [`aftAnalyser`](#hmsmlaftAnalyser)                               |  `Promise<MLAftResult>`                |The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.                                                         |
| [`aftAnalyserClose`](#aftAnalyserClose)                               |  `Promise<void>`                |Disables the audio transcription engine to release engine resources.     |
| [`asrAnalyserStop`](#asrAnalyserStop)                               |  `Promise<void>`                |Pauses a asr analyzer.         |
| [`aftAnalyserPause`](#aftAnalyserPause)                               |  `Promise<void>`                |Pauses a long audio transcription task on the cloud.     |
| [`aftAnalyserDestroy`](#aftAnalyserDestroy)                               |  `Promise<void>`                | Resumes a long audio transcription task on the cloud.         |
| [`stillFaceAnalyser`](#stillFaceAnalyser)                               | `Promise<MLFace>`                |The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.                                                     |
| [`stilFaceAnalyserInfo`](#stilFaceAnalyserInfo)                               |  `Promise<void>`                | It used to  obtain information about the service.          |
| [`stopStillFaceAnalyser`](#stopStillFaceAnalyser)                               |  `Promise<void>`                | It stops still face analyser service.          |
| [`stopStillHandKeyAnalyser`](#stopStillHandKeyAnalyser)                               |  `Promise<void>`                | It stops still hand keypoint analyser service.          |
| [`stopStillSkeletonAnalyser`](#stopStillSkeletonAnalyser)                               |  `Promise<void>`                | It stops still skeleton analyser.          |
| [`getFaceAnalyserSetting`](#getFaceAnalyserSetting)                               |  `Promise<void>`                | It returns face analyser settings properties.          |
| [`getHandKeyAnalyserSetting`](#getHandKeyAnalyserSetting)                               |  `Promise<void>`                | It returns hand keypoint analyser settings properties service.          |
| [`bankCardDetector`](#bankCardDetector)                               | `Promise<MLBankCard>`                |The bank card recognition service can quickly recognize information such as the bank card number, covering mainstream bank cards such as China UnionPay, American Express, Mastercard, Visa, and JCB around the world.                                                     |
|  [`generalCardDetector`](#generalCardDetector)                               | `Promise<MLGcrCaptureResult>`                | The general card recognition service provides a universal development framework based on the text recognition technology.                                                    |
| [`stopBankCardDetector`](#stopBankCardDetector)                               | `Promise<void>`                | It stops bank card detector service.          |
| [`imgSegmentation`](imgSegmentation)                               |  `Promise<MLImageSegmentation>`                |The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food, cat, dog, flower, water, sand, building, mountain, and others.                                                    |
| [`stopImgSegmentation`](#stopImgSegmentation)                               |  `Promise<void>`                |It stops image segmentation service.          |
| [`imgLandMarkAnalyser`](#imgLandMarkAnalyser)                               |  `Promise<MLRemoteLandmark>`                |The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.                                                |
| [`imgLandMarkAnalyserStop`](#imgLandMarkAnalyserStop)                               |  `Promise<void>`                |It stops Landmark analyser service.          |
| [`objectAnalyser`](#objectAnalyser)                               |  `Promise<MLObject>`                | The object detection and tracking service can detect and track multiple objects in an image.                                             |
| [`productVisionAnalyser`](#productVisionAnalyser)                               |  `Promise<MLProductVisionResult>`                | This service searches for the same or similar products in the pre-established product image library based on a product photo taken by a user, and returns the IDs of those products and related information.                                             |
| [`stillSceneAnalyser`](#stillSceneAnalyser)                               |  `Promise<MLSceneDetectionResult>`                | Classify the scene content of images and add annotation information, such as outdoor scenery, indoor places, and buildings, to help understand the image content.                                             |
| [`stillSkeletonAnalyser`](#stillSkeletonAnalyser)                               |  `Promise<MLSkeleton>`                | The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.                                         |
|  [`documentSkewCorrectionAnalyser`](#documentSkewCorrectionAnalyser)                               |   `Promise<MLDocumentSkewDetectResult>`                | This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document. In addition, users can perform document skew correction at user-defined boundary points.           |
| [`objectAnalyserStop`](#objectAnalyserStop)                               |  `Promise<void>`                | It stops object  analyser service.          |
| [`productAnalyserStop`](#productAnalyserStop)                               |  `Promise<void>`                | It stops product  analyser service.          |
| [`docSkewAnalyserStop`](#docSkewAnalyserStop)                               |  `Promise<void>`                | It stops documentskew correction  analyser service.          |
| [`ISRAnalyserStop`](#ISRAnalyserStop)                               |  `Promise<void>`                | It stops image super resolution  analyser service.          |
| [`TISRAnalyserStop`](#TISRAnalyserStop)                               |  `Promise<void>`                | It stops text image super resolution  analyser service.          |
| [`stillSceneAnalyserStop`](#stillSceneAnalyserStop)                               |  `Promise<void>`                | It stops scene  analyser service.          |
| [`getImageClassificationAnalyserSetting`](#getImageClassificationAnalyserSetting)                               |  `Promise<void>`                | It returns image classification analyser settings properties.          |
| [`getISRSetting`](#getISRSetting)                               |  `Promise<void>`                | It returns ISR analyser settings properties.          |
| [`getSegmentationSetting`](#getSegmentationSetting)                               |  `Promise<void>`                | It returns Image segmantation analyser settings properties.          |
| [`getLandmarkSetting`](#getLandmarkSetting)                               |  `Promise<void>`                | It returns ladnmark analyser settings properties.          |
| [`getObjectSetting`](#getObjectSetting)                               |  `Promise<void>`                | It returns face analyser settings properties.          |
| [`liveLivenessAnalyser`](#liveLivenessAnalyser)                               |  `Promise<MLLivenessCaptureResult>`                |This service can detect whether a user in a service scenario is a real person. This service is useful in various scenarios. It can detect whether a user is a real person without requiring the user to follow specific instructions.                                                         |
| [`customModelAnalyser`](#customModelAnalyser)                               | `Promise<void>`                |This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.                                                         |
| [`stillHandkeyAnalyser`](#stillHandkeyAnalyser)                               | `Promise<MLHandKeypoints>`                |This service can detect 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.                                                         |
| [`imageSuperResolution`](#imageSuperResolution)                               | `Promise<void>`                |This service provides the 1x and 3x super-resolution capabilities. 1x super-resolution removes the compression noise, and 3x super-resolution not only effectively suppresses the compression noise, but also provides a 3x enlargement capability.                                                         |
| [`textImageSuperResolution`](#textImageSuperResolution)                               | `Promise<void>`                |This service can zoom in an image that contains text and significantly improve the definition of text in the image. For example, when recapturing a text file, users can use this service to improve the definition of text in the image.                                                        |
| [`textEmbeddingDictionaryInfo`](#textEmbeddingDictionaryInfo)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`textEmbeddingWordBatchVector`](#textEmbeddingWordBatchVector)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`textEmbeddingWordtoVector`](#textEmbeddingWordtoVector)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`textEmbeddingSentencetoVector`](#textEmbeddingSentencetoVector)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`textEmbeddingWordSimilarity`](#textEmbeddingWordSimilarity)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`textEmbeddingSentenceSimilarity`](#textEmbeddingSentenceSimilarity)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`textEmbeddingSimilarWords`](#textEmbeddingSimilarWords)                               | `Promise<void>`                |The text embedding service allows you to enter Chinese and English words or sentences to query matching vector values, and perform further research based on the query result. A user can enter a keyword in your news app to return hot news related to the word, improving the search and browsing efficiency.                                                       |
| [`getTextEmbeddingSetting`](#getTextEmbeddingSetting)                               |  `Promise<void>`                | It returns Text embedding analyser settings properties.          |
|  [`asrAnalyser`](#asrAnalyser)                               | `Promise<void>`                |ASR can recognize speech not longer than 60s and convert the input speech into text in real time. This service uses industry-leading deep learning technologies to achieve a recognition accuracy of over 95%.              |
| [`rttAnalyserStart`](#rttAnalyserStart)                               | `Promise<void>`                |Real-time transcription enables your app to convert long speech (no longer than 5 hours) into text in real time. The generated text contains punctuation marks and timestamps.             |
| [`rttAnalyserStop`](#rttAnalyserStop)                               | `Promise<void>`                |It stops rtt analyser.            |
| [`enableLogger`](#enablelogger)                                                    |  `Promise<void>`                |This method enables HMSLogger capability which is used for sending usage analytics of ML SDK's methods to improve the service quality.                                                                       |
| [`disableLogger`](#disableLogger)                                                  |  `Promise<void>`                |This method disables HMSLogger capability which is used for sending usage analytics of ML SDK's methods to improve the service quality.                                                                      |

#### Methods

#### HMSMLKit

#### requestPermissions()

Obtains the necessary permissions to use the services.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `permissionList` | [`permissionList`](#permissionListReq) | Obtains the necessary permissions list to use the services. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | When it is successfully executed, promise is resolved into a Permission result. Otherwise, you will get an error. |

##### Data Types

###### permissionListReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `permissionList` | `string[]`  | The input value that the permission list. |

##### Sample Code

```dart
async function requestPermissions() {
    try {
        await HMSMLKit.requestPermissions({
            permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
        });
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### hasPermissions

Obtains the necessary permissions to use the services.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `permissionList` | [`permissionList`](#permissionListReq) | Permission List. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | When it is successfully executed, promise is resolved into a Permission result. Otherwise, you will get an error. |

###### Sample Code

```dart
async function checkPermissions() {
    var permissionListInput = {
        permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
    }
    try {
        const result = await HMSMLKit.hasPermissions(permissionListInput);
        alert("Camera Permission: " + result.camera.hasPermission + "\nRead External Storage Permission: " +
            result.readExternalStorage.hasPermission + "\nWrite External Storage Permission" + result.writeExternalStorage.hasPermission +
            "\nAudio Permission" + result.audio.hasPermission);
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### serviceInitializer()

Call the initializeService method to initialize the HMSML service. A configuration object which contains apiKey or token must be passed as a parameter.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `configReq` | [`configReq`](#configReq) | Configuration that contains the value of apiKey or accessToken  obtained from HUAWEI AppGallery Connect, which is required for the start of the services. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |When it is successfully executed, promise is resolved. |

##### Data Types

###### ConfigReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `apiKey` | `string`  | API key. |
| `accessToken` | `string`  | API token.|

##### Sample Code

```dart
    try {
        var config = {
            apiKey: "<API_KEY>"
        };
        HMSMLKit.serviceInitializer(config);
        } catch (ex) {
        console.log(JSON.stringify(ex));
        }
    
```

#### enableLogger()

This method enables HMSLogger capability which is used for sending usage analytics of ML SDK's methods to improve the service quality.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |Future result of an execution that returns no value.|

##### Sample Code

```dart
async function enableLogger() {
  try {
    await HMSML.enableLogger();
  } catch (ex) {
    console.log(JSON.stringify(ex));
  }
}
```

#### disableLogger()

This method disables HMSLogger capability which is used for sending usage analytics of ML SDK's methods to improve the service quality.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |Future result of an execution that returns no value.|

##### Sample Code

```dart
async function disableLogger() {
  try {
    await HMSML.disableLogger();
  } catch (ex) {
    console.log(JSON.stringify(ex));
  }
}
```

#### liveEngineAnalyser

This service used to launch live services that work with the camera.

| Parameter               | Type                                      | Definition                                                |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lensEngineReq` | [`lensEngineReq`](#lensEngineReq) | Represents the necessary parameter to live engine service. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Data Types

###### lensEngineReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `analyzerName`    | `MLAnalyzerName` | Specifies which live service to start. |
| `lensEngineSetting`    | `MLLensEngineSetting` | A camera engine creator used to create an instance of LensEngine. |
| `graphicSetting`    | `GraphicSetting` | You must use the settings of which analyzer type you are using. If left null, default values will use. |
| `analyzerSetting`    | `AnalyzerSetting` | You must use the settings of which analyzer type you are using. If left null, default values will use. |

###### MLLensEngineSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `fps`    | `number` | Sets the preview frame rate (FPS) of a camera. |
| `displayDimensionI`    | `number` | Sets the size of the preview image of a camera. |
| `displayDimensionI1`    | `number` | Sets the size of the preview image of a camera. |
| `lensType`    | [`MLLensType`](#MLLensType) |Sets the camera type. |
| `enableFocus`    | `boolean` | Sets the focus mode for a camera. |
| `flashMode`    | [`MLFlashMode`](#MLFlashMode) | Sets the flash mode for a camera. |

###### GraphicSetting

You must use the graphic settings of which analyzer type you are using. If left null, default values will use.

###### FaceGraphicSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `facePositionPaintSetting` |  [`facePositionPaintSetting`](#facePositionPaintSetting)  | Sets the outer frame color of the face. |
| `textPaintSetting` |  [`textPaintSetting`](#textPaintSetting)  | Use set for frame. |
| `faceFeaturePaintTextSetting` |  [`faceFeaturePaintTextSetting`](#faceFeaturePaintTextSetting)  | Use set for face fauture frame. |
| `keypointPaintSetting` |[`keypointPaintSetting`](#keypointPaintSetting) | Use set for key point. |
| `boxPaintSetting` |  [`boxPaintSetting`](#boxPaintSetting)   | Use set for box point. |
| `facePaintSetting` |  [`facePaintSetting`](#facePaintSetting)  | Use set for face point. |
| `eyePaintSetting` |  [`eyePaintSetting`](#eyePaintSetting)  | Use set for eye setting. |
| `eyebrowPaintSetting` | [`eyebrowPaintSetting`](#eyebrowPaintSetting)   | Use set for eyebrow setting. |
| `nosePaintSetting` |  [`nosePaintSetting`](#nosePaintSetting) | Use set for nose setting. |
| `noseBasePaintSetting` |  [`noseBasePaintSetting`](#noseBasePaintSetting) | Use set for nose base setting. |
| `lipPaintSetting` |   [`lipPaintSetting`](#lipPaintSetting)  | Use set for lip setting. |

###### facePositionPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for outer frame color. |

####### textPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `textSize` | `number`  | Float value indicative of textSize. |

###### faceFeaturePaintTextSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `textSize` | `number`  | Float value indicative of textSize. |

###### keypointPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for circle color. |
| `textSize` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for key point style. |

###### boxPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### facePaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### eyePaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### eyebrowPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### nosePaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### noseBasePaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### lipPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for text color. |
| `strokeWidth` | `number`  | Float value indicative of textSize. |
| `style` | `Rect`  | Use for box point style. |

###### skeletonGraphicSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `circlePaintSetting` | [`circlePaintSetting`](#circlePaintSetting)  | Configuration of the live skeleton graphic circle paint. |
| `linePaintSetting` | [`linePaintSetting`](#linePaintSetting)   | Configuration of the live skeleton graphic circle paint. |

###### circlePaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for circle color. |
| `style` | `Rect`  | Use for style. |
| `antiAlias` | `boolean`  | Use for antiAlias setting. |

###### circlelinePaintSettingPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for circle color. |
| `style` | `Rect`  | Use for style. |
| `antiAlias` | `boolean`  | Use for antiAlias setting. |
| `strokeWidth` | `string`  | Float value indicative of line. |

###### ObjectGraphicSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `boxPaintSetting` |  [`boxPaintSetting`](#boxPaintSetting)  | Contains the parameters of drawing around an object |
| `TextPaintSetting` |  [`TextPaintSetting`](#TextPaintSetting)   |Settings that contain information about objects. |

###### boxPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for frame color. |
| `style` | `Rect`  | Use for box style. |
| `boxStrokeWidth` | `number`  | Float value indicative of the thickness of the line. |

###### TextPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for frame color. |
| `textSize` | `number`  | Float value indicative of textSize |

###### sceneSettings

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for frame color. |
| `textSize` | `number`  | Float value indicative of textSize |

###### HandkeyGraphicSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `RectPaintSetting` |  [`RectPaintSetting`](#RectPaintSetting)   | Sets the paint setting. |
| `IdPaintnewSetting` |  [`IdPaintnewSetting`](#IdPaintnewSetting)  | Sets the paint setting. |

###### RectPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for box color. |
| `style` | `Rect`  | Use for box point style. |
| `boxStrokeWidth` | `number`  | Float value indicative of box. |

###### RectPaintSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `color` | `Colors`  | Use for circle color. |
| `textSize` | `number`  | Float value indicative of textSize. |

##### Constants

###### MLAnalyzerName

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `LIVEFACE` | `string`  | FACE |
| `LIVEFACE3D` | `string`  | FACE3D |
| `LIVEFACEMAX` | `string`  | FACEMAX |
| `LIVEHAND` | `string`  | HAND |
| `LIVESKELETON` | `string`  | SKELETON |
| `LIVEOBJECT` | `string`  | OBJECT |
| `LIVECLASSIFICATION` | `string`  | CLASSIFICATION |
| `LIVESCENE` | `string`  | SCENE |
| `LIVETEXT` | `string`  | TEXT |

###### MLFlashMode

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `AUTO` | `string`  | auto |
| `ON` | `string`  | on |
| `OFF` | `string`  | off |

###### MLLensType

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `BACK_LENS` | `number`  | 0 |
| `FRONT_LENS` | `number`  | 1 |

###### Colors

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `RED` | `number`  | -65536 |
| `DKGRAY` | `number`  | -12303292 |
| `GRAY` | `number`  | -7829368 |
| `WHITE` | `number`  | -1 |
| `BLUE` | `number`  | -16776961 |
| `BLACK` | `number`  | -16777216 |
| `LTGRAY` | `number`  | -3355444 |
| `MAGENTA` | `number`  | -65281 |
| `YELLOW` | `number`  | -256 |
| `TRANSPARENT` | `number`  | 0 |
| `CYAN` | `number`  | -16711681 |
| `GREEN` | `number`  | -16711936 |

###### RectStyle

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `STROKE` | `number`  | 1 |
| `FILL` | `number`  | 2 |
| `FILL_AND_STROKE` | `number`  | 3 |

##### Sample Code

The "scene" variable that in liveEngineAnalyser(), represent the div's id. Depends on the this div value, dimensions of the camera or where the camera will be appeared is adjusted according to the location of this variable.
You must use the settings of which analyzer type you are using, otherwise the code will not work.
If graphicSetting or analyzerSetting is null, default values are used.

```dart
let mlFace = null;
async function livefaceanalyserStart() {
    mlFace = null;
    mlFace = new HMSMLKit.liveEngineAnalyser("scene");
    var lensEngineReq={
        analyzerName:HMSMLKit.MLAnalyzerName.LIVEFACE,
        analyzerSetting:{
            featureType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_FEATURES,
            keyPointType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_KEYPOINTS,
            maxSizeFaceOnly: false,
            minFaceProportion: 0.2,
            performanceType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_PRECISION,
            shapeType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_SHAPES
        },
        graphicSetting:{
            noseBasePaintSetting:{
                color:HMSMLKit.Colors.RED
            }
        }
    }
 await mlFace.startMLLive({lensEngineReq});
 await mlFace.on((value) => {
  console.log(JSON.stringify(value));
 });
}
    
```

#### doZoom()

Adjusts the focal length of the camera based on the scaling coefficient (digital zoom).

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `doZoomReq` | [`doZoomReq`](#doZoomReq) | Represents the necessary parameter to zoom live engine's camera. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |



###### doZoomReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `scale`    | `number` | Scaling coefficient. If the scaling coefficient is greater than 1.0, the focal length is calculated as follows: Maximum focal length supported by the camera x 1/10 x Scaling coefficient. If the scaling coefficient is 1.0, the focal length does not change. If the scaling coefficient is less than 1.0, the focal length equals the current focal length multiplied by the scaling coefficient. |

##### Sample Code

```dart
    async function doZoom() {
        var doZoomReq={
                scale:3.0
            }
         HMSMLKit.doZoom(
                  doZoomReq,
                 function (res) {
                     console.log(JSON.stringify(res));
                 }, function (err) { console.log(JSON.stringify(err)); }
             );
}
    
```

#### photography()

Monitors photographing.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Sample Code

```dart
    async function photo() {
         try {
               const result = await HMSMLKit.photograph();
               document.getElementById("image").src = "data:image/jpeg;base64," + result.bitmap;
               console.log(JSON.stringify(res));
         } catch (Ex) {
               alert(JSON.stringify(Ex));
         }

    }
}
    
```

#### getDisplayDimension()

Obtains the size of the preview image of a camera.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Sample Code

```dart
    async function dimension() {
         try {
               const result = await HMSMLKit.getDisplayDimension();
               alert(JSON.stringify(result));
         } catch (Ex) {
               alert(JSON.stringify(Ex));
         }

    }
}
    
```

#### destroy()

Closes the camera and stops sending frames to the frame analyzer.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Sample Code

```dart
    function destroy() {
    HMSMLKit.destroy(
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}

    
```

#### getLensType()

Obtains the selected camera type.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Sample Code

```dart
    async function lensType() {
         try {
               const result = await HMSMLKit.getLensType();
               alert(JSON.stringify(result));
         } catch (Ex) {
               alert(JSON.stringify(Ex));
         }

    }
}
    
```

#### mlFrame()

This service supports getFrame, rotate frame, and preview bitmap data.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mlFrameReq` | [`mlFrameReq`](#mlFrameReq) | Represents the necessary parameter to mlFrame analyzer. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Data Types

###### mlFrameReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `actionName`    |  [`MLFrame`](#MLFrame) | There are three services in this module, you have to enter this parameter to specify which service you will use.  |
| `filePath`    | | `string` | Takes the URI of the image of the document.  |


##### MLFrame
| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `getPreviewBitmap` | `string`  | Set action name to getPreviewBitmap. |
| `readBitmap` | `string`  | Set action name to readBitmap. |
| `rotate` | `string`  | Set action name to rotate. |

##### Sample Code

```dart
    async function frame() {
         
    var mlFrameReq = {
        filePath: $imageResult,
        actionName: HMSMLKit.MLFrame.readBitmap
    };
    try {
        let result = await HMSMLKit.mlFrame(mlFrameReq);
        document.getElementById("image").src = "data:image/jpeg;base64," + result;
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
    
```

#### setStatistics()

Determines whether to collect statistics on the current app.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statisticsnReq` | `statisticsnReq` | Represents the necessary parameter for analyzer. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Data Types

###### statisticsnReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `isAllowed`    |  `boolean` | true: yes false: no |

##### Sample Code

```dart
    async function setStatistics() {
         
    var statisticsnReq = {
       isAllowed:true
    };
    try {
        let result = await HMSMLKit.setStatistics(statisticsnReq);
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
    
```

#### getStatistics()

Returns statistics on the current app.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Sample Code

```dart
    async function getStatistics() {
         
    try {
        let result = await HMSMLKit.getStatistics();
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
    
```

#### appSetting()

An app information service used to store basic information about apps with the HMS Core ML SDK integrated and complete the initialization of ML Kit.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appSettingReq` |  [`appSettingReq`](#appSettingReq) | Represents the necessary parameter for analyzer. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |If the operation is successful, promise will also resolve successfully. |

##### Data Types

###### appSettingReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `apiKey`    |  `string` | Sets the API key of an app. |
| `applicationId`    |  `string` | Sets the ID of an app. |
| `certFingerprint`    |  `string` | Sets a certificate fingerprint. |

##### Sample Code

```dart
    async function appSetting() {
    var appSettingReq = {
            apiKey:"API_KEY",
            applicationId:"ID",
            certFingerprint:"certFingerprint"
    };
    try {
        let result = await HMSMLKit.appSetting(appSettingReq);
         alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
    
```

#### customModelAnalyser()

This service recognize the image from the picture and return what the picture can be with the percentages. Use ML Libraries.

---
**NOTE**

Make sure, your gradle file has below code.

```dart
android {
    aaptOptions {
        noCompress "ms", "mnn", "cambricon"
        cruncherEnabled false
        useNewCruncher false
    }
}
```
---

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customModelReq` | [`customModelReq`](#customModelReq) | Represents the parameter required for custom model analyser.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. It returns the results of custom model analyser. |

##### ownCustomModelReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `detectType` | `number`  | Used for download or custom model selection. |
| `modelFullName` | `string`  | Used for gets model name, it must include model extension. |
| `modelName` | `string`  | Contains the name of the model.  |
| `labelFileName` | `string`  | Contains the name of the file listed by the labeled by the model |
| `bitmapHeight` | `number`  | Height of bitmap. |
| `bitmapWidth` | `number`  | Width of Bitmap |
| `outPutSize` | `number`  | Output size. |

###### downloadModelReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `detectType` | `number`  | Used for download or custom model selection. For download use 1. |
| `downloadStrategySetting` |[`downloadStrategySetting`](#downloadStrategySetting)  | Setting the model policy. |

###### downloadStrategySetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `isChargingNeed` | `boolean`  | Default value is false. |
| `isWifiNeed` | `boolean`  | Default value is false. |
| `isDeviceIdleNeed` | `boolean`  | Default value is false. |
| `setRegion` | [`DownloadStrategyCustom`](#DownloadStrategyCustom)  | Set the Site region. Currently, the following site regions are supported: REGION_DR_CHINA, REGION_DR_AFILA, REGION_DR_EUROPE, and REGION_DR_RUSSIA. |

##### Constants

###### DownloadStrategyCustom

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `REGION_DR_CHINA` | `number`  | 1002 |
| `REGION_DR_AFILA` | `number`  | 1003 |
| `REGION_DR_EUROPE` | `number`  | 1004 |
| `REGION_DR_RUSSIA` | `number`  | 1005 |


---
**NOTE**

 1- Prepare your local or remote model.
 2- Configure method settings
 3- Call exec method to perform inference using input and output configurations and content.
 4- Call close method to stop an inference task to release resources
 For details and model preparation please explore Huawei Developer Website
        
---

##### Sample Code

```dart
    async function remoteModel() {
    var customModelReq = {
        detectType: 2,
        filePath: $imageResult,
        modelFullName:"",
        modelName:"",
        labelFileName:"",
        bitmapHeight:"",
        bitmapWidth:"",
        outPutSize:"",

    };
    try {
        const result = await HMSMLKit.customModelAnalyser(customModelReq);
        alert(JSON.stringify(result));
        console.log(JSON.stringify(result));

    } catch (Ex) {
        alert(JSON.stringify(Ex));
        }
        
    }

async function downloadModel() {
    var downloadModelReq = {
        detectType: 1,
        filePath: $imageResult,
        downloadStrategySetting: {
            setRegion: HMSMLKit.DownloadStrategyCustom.REGION_DR_CHINA,
            isWifiNeed:false
        }
    };
    try {
        const result = await HMSMLKit.customModelAnalyser(downloadModelReq);
        JSON.stringify(result)
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

```

#### HMSFaceBodyProvider

#### stillFaceAnalyser()

The face detection service can detect the face contour, recognize facial features, and determine facial expressions for a person.

| Parameter               | Type                                      | Definition                                                                                                      |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `faceReq` | [`faceReq`](#faceReq) | Represents the parameter required for face detection.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLFace>` | It is called when the function is executed successfully. It returns the results of face detection.|

##### Data Types 

###### faceReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image. |
| `analyseMode` | `MLFaceConfigs`  | Sets the analysis mode. The default value is 0 (asyncAnalyseFrame). |
| `mlFaceAnalyserSetting` |  [`mlFaceAnalyserSetting`](#mlFaceAnalyserSetting)  | Creates an instance of the face analysis configurator (MLFaceAnalyzerSetting |

###### mlFaceAnalyserSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `featureType` |  [`MLFaceSetting`](#MLFaceSetting)  | Sets the detection mode of facial features and expressions of the analyzer. |
| `keyPointType` | [`MLFaceSetting`](#MLFaceSetting)  | Sets the facial key-point detection mode of the analyzer. |
| `maxSizeFaceOnly` | `boolean`  | Sets whether to detect only the largest face in an image. |
| `minFaceProportion` | `number`  | Sets the smallest proportion (range: 0.0–1.0) of a face in an image. The proportion is equal to the head width divided by the image width. Only faces whose proportions are greater than or equal to this threshold are returned. |
| `performanceType` | [`MLFaceSetting`](#MLFaceSetting)  | Sets the preference mode of the analyzer. |
| `shapeType` | [`MLFaceSetting`](#MLFaceSetting)  | Sets the facial shape detection mode of the analyzer. |
| `tracingAllowed` | `boolean`  | Sets whether to enable face tracking. |

###### MLFace

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `opennessOfLeftEye` | `number`  | Obtains the face openness of left eye. |
| `tracingIdentity` | `number`  |Obtains the face tracking ID, which uniquely identifies a face detected in an image. |
| `possibilityOfSmiling` | `number`  | Obtains the face smiling possibility. |
| `opennessOfRightEye` | `number`  | Obtains the face openness of right eye. |
| `rotationAngleX` | `number`  | Obtains the face pitch angle |
| `rotationAngleY` | `number`  | Obtains the face yaw angle |
| `rotationAngleZ` | `number`  | Obtains the face roll angle. |
| `height` | `number`  | Obtains the face height. |
| `width` | `number`  | Obtains the face width. |
| `border` | `Border`  | Obtains the axis-aligned bounding rectangle of a face.|
| `features` |  [`Features`](#Features)   | Obtains the acial features. |
| `emotions` |  [`Emotions`](#Emotions)  | Obtains all facial expressions.|
| `allPoints` |  [`AllPoints`](#AllPoints)  | Obtains all key position points of a complete face shape. A total of 855 points are included. |

###### Features

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sunGlassProbability` | `number`  | Obtains the measurement of wearing glasses. |
| `sexProbability` | `number`  |Obtains the gender measurement of a face. |
| `rightEyeOpenProbability` | `number`  | Obtains the measurement of opening the right eye. |
| `moustacheProbability` | `number`  | Obtains the measurement of wearing a beard. |
| `leftEyeOpenProbability` | `number`  | Obtains the measurement of opening the left eye. |
| `age` | `number`  | Obtains the age of a face. |
| `hatProbability` | `number`  | Obtains the measurement of wearing a hat. |

###### Emotions

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `surpriseProbability` | `number`  | Obtains the measurement of surprise. |
| `smilingProbability` | `number`  |Obtains the measurement of smiling. |
| `sadProbability` | `number`  | Obtains the measurement of sadness. |
| `neutralProbability` | `number`  | Obtains the measurement of a neutral expression. |
| `fearProbability` | `number`  | Obtains the measurement of fear. |
| `disgustProbability` | `number`  | Obtains the measurement of disgust. |
| `angryProbability` | `number`  | Obtains the measurement of anger. |

###### AllPoints

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `X` | `number`  |Obtains the X number. |
| `Y` | `number`  |Obtains the top Y number. |

###### Border

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `bottom` | `number`  | Obtains the bottom. |
| `top` | `number`  | Obtains the top number. |
| `left` | `number`  | Obtains the left.|
| `right` | `number`  | Obtains the right. |
| `exactCenterX` | `number`  | Obtains the exactCenterX. |
| `centerY` | `number`  | Obtains the centerY. |
| `centerX` | `number`  | Obtains the centerX. |
| `height` | `number`  | Obtains the height. |
| `width` | `number`  | Obtains the width. |
| `describeContents` | `number`  |Obtains the describeContents. |

##### Constants

###### MLFaceSetting

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `TYPE_FEATURES` | `number`  |1 |
| `TYPE_UNSUPPORT_FEATURES` | `number`  | 2 |
| `TYPE_KEYPOINTS` | `number`  | 0 |
| `TYPE_UNSUPPORT_KEYPOINTS` | `number`  | 2 |
| `TYPE_PRECISION` | `number`  | 1 |
| `TYPE_SPEED` | `number`  | 2 |
| `TYPE_SHAPES` | `number`  |2 |
| `TYPE_UNSUPPORT_SHAPES` | `number`  | 3 |
| `TYPE_FEATURE_EMOTION` | `number`  | 4 |
| `TYPE_FEATURE_EYEGLASS` | `number`  | 8 |
| `TYPE_FEATURE_HAT` | `number`  | 16 |
| `TYPE_FEATURE_BEARD` | `number`  | 32 |
| `TYPE_FEATURE_OPENCLOSEEYE` | `number`  |64 |
| `TYPE_FEATURE_GENDAR` | `number`  | 128 |
| `TYPE_FEATURE_AGE` | `number`  | 256 |
| `MODE_TRACING_FAST` | `number`  |1 |
| `MODE_TRACING_ROBUST` | `number`  | 2 |

###### MLFaceSetting

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `TYPE_2D_SYNC` | `number`  |0 |
| `TYPE_2D_ASYNC` | `number`  | 1 |
| `TYPE_3D_SYNC` | `number`  |  2|
| `TYPE_3D_ASYNC` | `number`  | 3 |

##### Sample Code

```dart
 async function stillFaceAnalyser() {
    var faceAnalyserInput = {
        mlFaceAnalyserSetting: {
            featureType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_FEATURES,
            keyPointType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_KEYPOINTS,
            maxSizeFaceOnly: false,
            minFaceProportion: 1.0,
            performanceType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_PRECISION,
            shapeType: HMSMLKit.MLFaceAnalyzerSetting.TYPE_SHAPES,
            tracingAllowed: false,
        },
        analyseMode: 0,
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSFaceBodyProvider.stillFaceAnalyser(faceAnalyserInput)));
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### stilFaceAnalyserInfo()

It stops translator service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function stilFaceAnalyserInfo() {
    try {
        alert(JSON.stringify(await HMSFaceBodyProvider.stilFaceAnalyserInfo()));
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopStillFaceAnalyser()

It stops still face analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function stopStillFaceAnalyser() {
    try {
        alert(await HMSFaceBodyProvider.stopStillFaceAnalyser());
    } catch (ex) {
        alert(ex)
    }
}
```

#### stillSkeletonAnalyser()

The skeleton detection service detects and locates key points of the human body, such as the top of the head, neck, shoulder, elbow, wrist, hip, knee, and ankle.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stillSkeletonReq` | [`stillSkeletonReq`](#stillSkeletonReq) | Represents the parameter required for skeleton analyser.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLSkeleton>` | It is called when the function is executed successfully. It returns the results of scene analyser. |

##### Data Types

###### stillSkeletonReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `syncType` | `MLSkeletonConfig`  | Sets method  synchronous. |
| `analyzerType` | `MLSkeletonConfig`  | Sets the detection mode. By default, the detection mode is set to `MLSkeletonAnalyzerSetting.TYPE_NORMAL`. |

###### stillSkeletonSimilarityReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `filePath2` | `string`  | Takes the URI of the image document. |
| `syncType` | `MLSkeletonConfig`  | Sets method  synchronous. |
| `analyzerType` | `MLSkeletonConfig`  | Sets the detection mode. By default, the detection mode is set to `MLSkeletonAnalyzerSetting.TYPE_NORMAL`. |

##### Constants 

###### MLSkeletonConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `SYNC_MODE` | `number`  | 0 |
| `ASYNS_MODE` | `number`  | 1 |
| `SIMILARITTY_MODE` | `number`  | 2 |
| `TYPE_YOGA` | `number`  | 1 |
| `TYPE_NORMAL` | `number`  | 0 |

###### MLSkeleton

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `joints` | [`Joints`](#Joints) | Obtains the list of skeleton points. |

###### Joints

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `x` | `number`  | Obtains the X coordinate. |
| `y` | `number`  | Obtains the Y coordinate. |
| `score` | `number`  | Obtains the confidence value of a skeleton point. |
| `type` | `number`  | Obtains the skeleton point type. |

##### Sample Code

```dart
  async function stillskeletonnalyserStart() {
    var stillskeletonInput = {
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSFaceBodyProvider.stillSkeletonAnalyser(stillskeletonInput)));
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### liveLivenessAnalyser()

This service can detect whether a user in a service scenario is a real person. This service is useful in various scenarios. It can detect whether a user is a real person without requiring the user to follow specific instructions.  

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLLivenessCaptureResult>` | It is called when the function is executed successfully. It returns the results of liveness analyser. |

##### Data Types 

###### MLLivenessCaptureResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `bitmap` | `Bitmap`  | Obtains the image frame of the liveness detection result. |
| `isLive` | `boolean`  | Determines whether a face is of a real user. |
| `pitch` | `number`  | Obtains the face pitch angle. |
| `roll` | `number`  | Obtains the face roll angle.|
| `score` | `number`  | Confidence of the detection result. |
| `yaw` | `number`  | Obtains the face yaw angle. |

##### Sample Code

```dart
   async function liveLivenessDetection() {
    var livenessDetectionInput = {
        filePath: $imageResult,
    };
    try {
        let result = await HMSFaceBodyProvider.liveLivenessAnalyser(livenessDetectionInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### stillHandkeyAnalyser()

This service can detect 21 hand keypoints (including fingertips, knuckles, and wrists) and return positions of the keypoints.  

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stillHandKeypointReq` | [`stillHandKeypointReq`](#stillHandKeypointReq) | Represents the parameter required for hand keypoint analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLHandKeypoints>` | It is called when the function is executed successfully. It returns the results of hand keypoint analyser. |

##### Data Types

###### stillHandKeypointReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `syncType` | `syncType`  | Used for sync selection. |
| `handkeySetting` |[`handkeySetting`](#handkeySetting) | Sets the hand keypoint setting analyzer. |

###### handkeySetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sceneType` | `string`  | Obtains the return mode of the hand keypoint recognition result. |
| `maxHandResults` | `number` | Obtains the maximum number of hand regions that can be detected in an image.|

###### MLHandKeypoints

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `handKeypoints` | [`handKeypoints`](#handKeypoints)  | Obtains the hand keypoint of a specified type. |
| `rect` | `Rect`  | Obtains the hand region corresponding to the hand keypoint set. |
| `score` | `number`  | Obtains the hand region confidence. |

###### handKeypoints

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `X` | `number`  | Obtains the X coordinate. |
| `Y` | `number`  | Obtains the Y coordinate. |
| `score` | `number`  | Obtains the confidence of a hand keypoint. |
| `type` | `number`  | Obtains the hand keypoint type. |

##### Constants

###### syncType

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `SYNC_MODE` | `number`  | 0 |
| `ASYNC_MODE` | `number`  | 1 |

###### HandkeyPointConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `TYPE_ALL` | `number`  | 0 |
| `TYPE_KEYPOINT_ONLY` | `number`  | 1 |
| `TYPE_RECT_ONLY` | `number`  | 2 |

##### Sample Code

```dart
    async function stillHandAnalyser() {
    var stillHandkeyAnalyserInput = {
        syncType: 0,
        filePath: $imageResult,
        handkeySetting: {
            sceneType: HMSFaceBodyProvider.HandkeyPointconfig.TYPE_ALL,
            maxHandResults: 2,
        }
    };
    try {
        alert(JSON.stringify(await HMSMLKit.stillHandkeyAnalyser(stillHandkeyAnalyserInput)));
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}

```

#### stopStillHandKeyAnalyser()

It stops still hand analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function stopStillHandKeyAnalyser() {
    try {
        alert(await HMSFaceBodyProvider.stopStillHandKeyAnalyser());
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopStillSkeletonAnalyser()

It stops still still skeleton analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function stopStillSkeletonAnalyser() {
    try {
        alert(await HMSFaceBodyProvider.stopStillSkeletonAnalyser());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getFaceAnalyserSetting()

It returns face analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getFaceAnalyserSetting() {
    try {
        alert(await HMSFaceBodyProvider.getFaceAnalyserSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getHandKeyAnalyserSetting()

It returns hand keypoint analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getHandKeyAnalyserSetting() {
    try {
        alert(await HMSFaceBodyProvider.getHandKeyAnalyserSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### HMSImageServiceProvider

#### imageClassificationAnalyser()

The image classification service classifies elements in images into intuitive categories, such as people, objects, environments, activities, or artwork, to define image themes and application scenarios.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localImageClassificationReq` | [`localImageClassificationReq`](#localImageClassificationReq) | Represents the parameter required for image classification. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLImageClassification>` |It is called when the function is executed successfully. It returns the classification results. |

##### Data Types 

###### localImageClassificationReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ocrType` | [`MLImageClassificationConfig`](#MLImageClassificationConfig)  | Determines whether the service will work on the phone or on the cloud. If ocrType is set to 1, the analyzer runs in local image classification analyzer mode.  |
| `analyseMode` | `number`  | Sets the speaker. The default value is TTS_SPEAKER_FEMALE_ZH.|
| `filePath` | `string`  | Sets the analysis mode. The default value is 0 (asyncAnalyseFrame).|
| `localClassificationAnalyserSetting` |  [`localClassificationAnalyserSetting`](#localClassificationAnalyserSetting)  | Creates an instance of the on-device image classification configurator. |

###### localClassificationAnalyserSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `possibility` | `number`  | Sets the confidence threshold for the on-device image classification analyzer. The default value is 0.5f.  |

###### remoteClassificationAnalyserSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `maxResults` | `string`  | Obtains the maximum number of classifications from the analyzer. |
| `possibility` | `number`  | Sets the confidence threshold for the on-device image classification analyzer. The default value is 0.5f. |
| `isEnableFingerprintVerification` | `boolean`  | Enable verification |

##### Constants

###### MLImageClassificationConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `TYPE_LOCAL` | `string`  | 0 |
| `TYPE_REMOTE` | `string`  | 1 |

##### Sample Code

```dart
   async function imageClassificationAnalyser() {
    var imageClassificationInput = {
        ocrType: local,
        analyseMode: 0,
        localClassificationAnalyzerSetting: {
            possibility: 0.8,
        },
        remoteClassificationAnalyzerSetting: {
            maxResults: 0,
            possibility: 0.5,
        },
        filePath: $imageResult
    };
    try {
        const result = await HMSImageServiceProvider.imageClassificationAnalyser(imageClassificationInput);
        document.getElementById("Identity").value = JSON.stringify(result[0].identity;
        document.getElementById("Name").value = JSON.stringify(result[0].name);
        document.getElementById("Possibility").value = JSON.stringify(result[0].possibility);
        console.log(JSON.stringify(result));
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopImageClassificationAnalyser()

It stops image classification analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function stopImageClassificationAnalyser() {
    try {
        alert(await HMSImageServiceProvider.stopImageClassificationAnalyser())
    } catch (ex) {
        alert(ex)
    }
}
```

#### imgSegmentation()

The image segmentation service segments same elements (such as human body, plant, and sky) from an image. The elements supported include human body, sky, plant, food, cat, dog, flower, water, sand, building, mountain, and others.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSegmentationReq` | [`imgSegmentationReq`](#imgSegmentationReq) | Represents the parameter required for image segmentation.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLImageSegmentation>` | It is called when the function is executed successfully. It returns the results of image segmentation.|

##### Data Types

###### imgSegmentationReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `imageSegmentationSetting` | [`imageSegmentationSetting`](#imageSegmentationSetting)   | Sets the image segmentation analyzer. |
| `filePath` | `string`  | Takes the URI of the image. |
| `analyseMode` | `MLFormRecogitionConfig`  | Sets the analysis mode. The default value is 0 (asyncAnalyseFrame). |

###### imageSegmentationSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `isExact` | `boolean`  | Checks whether fine detection is supported. |
| `analyserType` | [`MLImageSegmentationSetting`](#MLImageSegmentationSetting)  | Sets the classification mode. |
| `scene` |  [`MLImageSegmentationScene`](#MLImageSegmentationScene)   | An image segmentation scenario, from which you can choose one or more as needed. |

###### MLImageSegmentation

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `bitmapForeground` | `Bitmap`  |Human body image with a transparent background. |
| `bitmapGrayscale` | `Bitmap`  | OGray-scale image with a white human body and black background. |
| `masks` | `number`  | Size of the semantic segmentation result of pixel detection in the current image category. |
| `bitmapOriginal` | `Bitmap`  | Original image for segmentation. |

##### Constants

###### MLImageSegmentationSetting

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `BODY_SEG` | `number`  | 0 |
| `IMAGE_SEG` | `number`  | 1 |

###### MLImageSegmentationScene

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ALL` | `number`  | 1 |
| `MASK_ONLY` | `number`  | 2 |
| `FOREGROUND_ONLY` | `number`  | 3 |
| `GRAYSCALE_ONLY` | `number`  | 4 |

##### Sample Code

```dart
  async function getimgSegmentation() {
    var imgSegmentationInput = {
        imageSegmentationSetting: {
            analyserType: HMSImageServiceProvider.MLImageSegmentationSetting.BODY_SEG,
            scene: HMSImageServiceProvider.MLImageSegmentationScene.ALL,
            analyseMode: 1
        },
        filePath: $imageResult,
    };
    try {
        const result = await HMSImageServiceProvider.imgSegmentation(imgSegmentationInput)
        document.getElementById("segmentImg").src = "data:image/jpeg;base64," + result.bitmapForeground;
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopImgSegmentation()

It stops image segmentation service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
async function stopimgSegmentation() {
   try {
        alert(await HMSImageServiceProvider.stopImgSegmentation());
    } catch (ex) {
        alert(ex)
    }
}
```

#### imgLandMarkAnalyserStop()

It stops landmark analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully.|

##### Sample Code

```dart
async function stopImgLandMarkAnalyser() {
   try {
        alert(await HMSImageServiceProvider.imgLandMarkAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### imgLandMarkAnalyser()

The landmark recognition service enables you to obtain the landmark name, landmark longitude and latitude, and confidence of the input image.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgLandMarkReq` | [`imgLandMarkReq`](#imgLandMarkReq) | Represents the parameter required for the image landmark analyzer.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLRemoteLandmark>` | It is called when the function is executed successfully. It returns the results of landmark detection.|

##### Data Types

###### imgLandMarkReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image. |
| `landmarkAnalyserSetting` |  [`landmarkAnalyserSetting`](#landmarkAnalyserSetting)  | Creates an instance of the landmark analysis configurator. |

###### landmarkAnalyserSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `modelType` | `MLRemoteLandmarkSetting`  | Sets the mode used by the analyzer. The default value is STEADY_PATTERN. |
| `maxResults` | `number`  | Sets the maximum number of detection results for the analyzer. The default value is 10. |

###### MLRemoteLandmark

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `border` | `Rect`  | Obtains the axis-aligned bounding rectangle of a landmark in an image. The area is a rectangle that involves four values: left, top, right, and bottom. The values of left and top form the upper-left corner coordinates of the rectangle, and the values of right and bottom form the lower-right corner coordinates of the rectangle.  |
| `landmark` | `string`  |Obtains the landmark description.  |
| `positionInfo` | [`MLCoordinate`](#MLCoordinate)  | Obtains landmark location information. Each MLCoordinate object contains a longitude and a latitude. |
| `possibility` | `number`  | Obtains the result confidence. The value range is [0,1]. A value closer to 0 indicates lower confidence, and a value closer to 1 indicates higher confidence. |


###### MLCoordinate

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `lat` | `number`  | Obtains latitude information. |
| `lng` | `number`  | Obtains longitude information.  |

##### Constants

###### MLRemoteLandmarkSetting

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `STEADY_PATTERN` | `number`  | 1 |
| `NEWEST_PATTERN` | `number`  | 2 |

##### Sample Code

```dart
  async function imgLandMarkAnalyser() {
    var imgLandMarkAnalyserInput = {
        landmarkAnalyzerSetting: {
            largestNumOfReturns: 5,
            patternType: HMSImageServiceProvider.MLRemoteLandmarkAnalyzerSetting.STEADY_PATTERN,
        },
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSMLKit.imgLandMarkAnalyser(imgLandMarkAnalyserInput)));
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### objectAnalyser()

 The object detection and tracking service can detect and track multiple objects in an image.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `objectReq` | [`objectReq`](#objectReq) | Represents the parameter required for object detection.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLObject>` | It is called when the function is executed successfully. It returns the results of object detection.|

##### Data Types

###### objectReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image. |
| `syncType` | `MLFormRecogitionConfig`  | Sync type. |
| `mlObjectAnalyserSetting` |  [`mlObjectAnalyserSetting`](#mlObjectAnalyserSetting)  | Creates an instance of the object analysis configurator to set object detection attributes. |

###### mlObjectAnalyserSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `isClassificationAllowed` | `boolean`  | Sets whether to support detection result classification. The default value is true. |
| `isMultipleResultsAllowed` | `boolean`  | Sets whether to support multi-object detection. The default value is true. |
| `analyzerType` |  [`MLObjectAnalyserConfig`](#MLObjectAnalyserConfig) | Sets whether to support multi-object detection. The default value is true. |

###### MLObject

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `tracingIdentity` | `number`  | Obtains the object ID.  |
| `typeIdentity` | `number`  | Obtains the object classification result.  |
| `typePossiblity` | `number`  | Obtains the object detection confidence. |
| `border` | `Rect`  | Obtains the axis-aligned bounding rectangle of an object. |

##### Constants

##### MlObjectAnalyserConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `TYPE_VIDEO` | `number`  | 0 |
| `TYPE_PICTURE` | `number`  | 1 |

##### Sample Code

```dart
  async function objectAnalyser() {
    var objectAnalyserInput = {
        filePath: $imageResult,
        mlObjectAnalyserSetting: {
            isClassificationAllowed: true,
            isMultipleResultsAllowed: true
        }
    };
    try {
        var result = await HMSImageServiceProvider.objectAnalyser(objectAnalyserInput);
        document.getElementById("tracingIdentity").value = JSON.stringify(result[0].tracingIdentity);
        document.getElementById("typeIdentity").value = JSON.stringify(result[0].typeIdentity);
        document.getElementById("typePossibility").value = JSON.stringify(result[0].typePossibility);
        document.getElementById("bottom").value = JSON.stringify(result[0].border.bottom);
        document.getElementById("left").value = JSON.stringify(result[0].border.left);
        document.getElementById("right").value = JSON.stringify(result[0].border.right);
        document.getElementById("top").value = JSON.stringify(result[0].border.top);
    } catch (ex) {
        alert(ex)
    }
}
```

#### stillSceneAnalyser()

Classify the scene content of images and add annotation information, such as outdoor scenery, indoor places, and buildings, to help understand the image content.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stillSceneReq` | [`stillSceneReq`](#stillSceneReq) | Represents the parameter required for scene analyser.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLSceneDetectionResult>` | It is called when the function is executed successfully. It returns the results of scene analyser. |

##### Data Types

###### stillSceneReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `analyseMode` | `syncType`  | Sync type. |

###### MLSceneDetectionResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `resultString` | `string`  |Obtains the scene detection result. |
| `confidence` | `number`  | Obtains the confidence threshold corresponding to the scene detection result. |

##### Sample Code

```dart
  async function getimgScene() {
    var stillSceneInput = {
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSImageServiceProvider.stillSceneAnalyser(stillSceneInput)));
    } catch (ex) {
        alert(ex)
    }
}
```

#### documentSkewCorrectionAnalyser()

This service can automatically identify the location of a document in an image and adjust the shooting angle to the angle facing the document. In addition, users can perform document skew correction at user-defined boundary points.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentSkewCorrectionReq` | [`documentSkewCorrectionReq`](#documentSkewCorrectionReq) | Represents the parameter required for document skew correction analyser.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLDocumentSkewDetectResult>` | It is called when the function is executed successfully. It returns the results of document skew correction analyser. |

##### Data Types

###### documentSkewCorrectionReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `syncMode` | `MLFormRecogitionConfig`  | Sync type. |

###### MLDocumentSkewDetectResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `resultCode` | [`dscResultCode`](#dscResultCode)  | Defines the type of the text box detection/correction return code. |
| `bitmap` | `Bitmap`  | Obtains the image data after text box correction. |

##### Constants

###### dscResultCode

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `SUCCESS` | `number`  | 0 |
| `DETECT_FAILD` | `number`  | 1 |
| `CORRECTION_FAILD` | `number`  | 2 |
| `IMAGE_DATA_ERROR` | `number`  | 3 |

##### Sample Code

```dart
 
async function documentSkewCorrectionStart() {
    var documentSkewCorrectionInput = {
        filePath: $imageResult
    };
    try {
        const result = await HMSImageServiceProvider.documentSkewCorrectioAnalyser(documentSkewCorrectionInput);
        document.getElementById("dscImage").src = "data:image/jpeg;base64," + result.bitmap;
    } catch (ex) {
        alert(ex)
    }
}
```

#### imageSuperResolution()

This service provides the 1x and 3x super-resolution capabilities. 1x super-resolution removes the compression noise, and 3x super-resolution not only effectively suppresses the compression noise, but also provides a 3x enlargement capability.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imageSuperResolutionReq` | [`imageSuperResolutionReq`](#imageSuperResolutionReq) | Represents the parameter required for image super resolution analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. It returns the results of image super resolution analyser. |

##### Data Types

###### imageSuperResolutionReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `syncType` | `MLFormRecogitionConfig`  | Sync type |
| `imgSuperResolutionSetting` | [`imgSuperResolutionSetting`](#imgSuperResolutionSetting)  | Image super-resolution configurator, which is used to set the attributes of the image super-resolution analyzer.|

###### imgSuperResolutionSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `scaleType` | [`ImgSuperResolutionConfig`](#ImgSuperResolutionConfig)  | Image super-resolution configurator, which is used to set the attributes of the image super-resolution analyzer. |

##### Constants

###### ImgSuperResolutionConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ISR_SCALE_1X` | `number`  |1.0 |
| `ISR_SCALE_3X` | `number`  | 3.0 |

##### Sample Code

```dart
   async function imageSuperResolution() {
    var imageSuperResolutionInput = {
        filePath: $imageResult,
        detectType: 0,
        imgSuperResolutionSetting: {
            scaleType: 1.0
        }
    };
    try {
        let result = await HMSImageServiceProvider.imageSuperResolution(imageSuperResolutionInput);
        document.getElementById("superResolutionImage").src = "data:image/jpeg;base64," + result.bitmap;
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### textImageSuperResolution()

This service can zoom in an image that contains text and significantly improve the definition of text in the image. For example, when recapturing a text file, users can use this service to improve the definition of text in the image.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textImageSuperResolutionReq` | [`textImageSuperResolutionReq`](#textImageSuperResolutionReq) | Represents the parameter required for text image super resolution analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. It returns the results of text image super resolution analyser. |

##### Data Types

###### textImageSuperResolutionReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `analyseMode` | `MLFormRecogitionConfig`  | Sync type. |
##### Sample Code

```dart
   async function getTextImageSuper() {
    var textImageSuperResolutionInput = {
        filePath: $imageResult,

    };
    try {
        const result = await HMSImageServiceProvider.textImageSuperResolution(textImageSuperResolutionInput)
        document.getElementById("superImg").src = "data:image/jpeg;base64," + result.superBitmap;
    } catch (ex) {
        alert(ex)
    }
}

```

#### productVisionAnalyser()

This service searches for the same or similar products in the pre-established product image library based on a product photo taken by a user, and returns the IDs of those products and related information.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `productReq` | [`productReq`](#productReq) | Represents the parameter required for product vision search analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLProductVisionResult>` | It is called when the function is executed successfully. It returns the results of text image super resolution analyser. |

##### Data Types

###### productReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `detectType` | `number`  |  Sets whether the definition will work with the SDK or as a plugin                         |
| `mlProductSetting` | `mlProductSetting`  | Setting for the Prodcut analyzer |

###### mlProductSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `largestNumOfReturns` | `number`  | Obtains the maximum number of products. |
| `productSetId` | `strign`  |  Obtains the product set ID.         || `region` | `MLProductConfig`  | Obtains the site region. |

###### MLProductVisionResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `type` | `MLProductType`  | Product type |
| `border` | `Border`  |  Oaxis-aligned bounding rectangle, including left, top, right, and bottom. The values of left and top form the upper-left corner coordinates of the bounding rectangle, and the values of right and bottom form the lower-right corner coordinates. Currently, there is no gradient.         |
| `list` | `ListEntity`  | Product information list, which is sorted by confidence in descending order. |

###### ListEntity

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `customcontent` | `string`  |  customized product information. |
| `imagelist` | `ImagelistEntity`  |  product image list.     |
| `possibility` | `number`  | confidence |
| `productURL` | `string`  |  product URL.|

###### ImagelistEntity

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `imageId` | `string`  |  Image ID |
| `possibility` | `number`  | confidence |
| `productID` | `string`  |  product ID.|

##### Constants

###### MLProductConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `REGION_DR_CHINA` | `number`  | 1002 |
| `REGION_DR_AFILA` | `number`  | 1003 |
| `REGION_DR_EUROPE` | `number`  | 1004 |
| `REGION_DR_RUSSIA` | `number`  | 1005 |
| `REGION_DR_GERMAN` | `number`  | 1006 |
| `REGION_DR_SIANGAPORE` | `number`  | 1007|

###### MLProductType

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `others` | `number`  | 0 |
| `clothing` | `number`  | 1 |
| `shoes` | `number`  | 2 |
| `bags` | `number`  | 3 |
| `digital&home appliances` | `number`  | 4 |
| `household products` | `number`  | 5|
| `toys` | `number`  | 6 |
| `cosmetics` | `number`  | 7 |
| `accessories`  | 8 |
| `food` | `number`  | 9|

##### Sample Code

```dart
   async function productAnalyser() {
    var productReq = {
        filePath: $imageResult,
        detectType:0
    };
    var productPluginReq = {
        detectType:1
    };
    try {
        if (device == true) {
            const result = await HMSImageServiceProvider.productVisionAnalyser(productReq);
            alert(JSON.stringify(result));
           
        } else {
            const result = await HMSImageServiceProvider.productVisionAnalyser(productPluginReq);
            alert(JSON.stringify(result));
        }
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

```

#### objectAnalyserStop()

It stops object analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function objectAnalyserStop() {
    try {
        alert(await HMSImageServiceProvider.objectAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### productAnalyserStop()

It stops product vision search analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function productAnalyserStop() {
    try {
        alert(await HMSImageServiceProvider.productAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### docSkewAnalyserStop()

It stops document skew correction analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function docSkewAnalyserStop() {
    try {
        alert(await HMSImageServiceProvider.docSkewAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### ISRAnalyserStop()

It stops ISR analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function ISRAnalyserStop() {
    try {
        alert(await HMSImageServiceProvider.ISRAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### TISRAnalyserStop()

It stops TISR analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function tisrAnalyzerStop() {
    try {
        alert(await HMSImageServiceProvider.TISRAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### stillSceneAnalyserStop()

It stops still scene analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function stillSceneAnalyserStop() {
    try {
        alert(await HMSImageServiceProvider.stillSceneAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getImageClassificationAnalyserSetting()

 It returns image classification analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getImageClassificationAnalyserSetting() {
    try {
        alert(await HMSImageServiceProvider.getImageClassificationAnalyserSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getISRSetting()

 It returns ISR analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getISRSetting() {
    try {
        alert(await HMSImageServiceProvider.getISRSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getSegmentationSetting()

 It returns image segmentation analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getSegmentationSetting() {
    try {
        alert(await HMSImageServiceProvider.getSegmentationSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getLandmarkSetting()

 It returns landmark analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getLandmarkSetting() {
    try {
        alert(await HMSImageServiceProvider.getLandmarkSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getObjectSetting()

 It returns image object analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getObjectSetting() {
    try {
        alert(await HMSImageServiceProvider.getObjectSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### HMSLanguageServiceProvider

#### textEmbeddingDictionaryInfo()

This service can zoom in an image that contains text and significantly improve the definition of text in the image.
Query the dictionary version information.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingDicInfoReq` | [`textEmbeddingDicInfoReq`](#textEmbeddingDicInfoReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLVocabularyVersion>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types

###### textEmbeddingDicInfoReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

###### textEmbeddingSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `language` | `string`  |Obtains the language set for text embedding. |

###### MLVocabularyVersion

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `dictionaryDimension` | `string`  | Obtains the dictionary dimension. |
| `dictionarySize` | `string`  | Obtains the dictionary size. |
| `versionNo` | `string`  | Obtains the dictionary version number. |

##### Sample Code

```dart
   async function getDictionaryInfo() {
    var textEmbeddingInput = {
        textEmbeddingSetting:{
            language:"en"
        },
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingDictionaryInfo(textEmbeddingInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### textEmbeddingWordBatchVector()

Asynchronously queries word vectors in batches. (The number of words ranges from 1 to 500.)

| Parameter               | Type                                      | Definition                                                                                                                     |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingWordBatchReq` | [`textEmbeddingWordBatchReq`](#textEmbeddingWordBatchReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types

##### textEmbeddingWordBatchReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `batchText` | `string`  | Input value to be used for analyzer |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

##### Sample Code

```dart
    async function getBatchText() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        batchText: document.getElementById("wordBatch").value,
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingWordBatchVector(textEmbeddingReq);
        alert(JSON.stringify(result));
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
```

#### textEmbeddingWordtoVector()

This service can zoom in an image that contains text and significantly improve the definition of text in the image.
Query the word/sentence vector result to build a vector library.

| Parameter               | Type                                      | Definition                                                                |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingWordtoVectorReq` | [`textEmbeddingWordtoVectorReq`](#textEmbeddingWordtoVectorReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLWordtoVectorResult>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types

###### textEmbeddingWordtoVectorReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `wordText` | `string`  | Input value to be used for analyzer |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

##### Result

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `vector` | `string`  | Obtains the vector. |
| `wordText` | `string`  | Word to be queried. |

###### MLWordtoVectorResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `result` |  [`Result`](#Result)  | Obtains the result. |

##### Sample Code

```dart
    async function getWordText() {
    var textEmbeddingInput = {
        textEmbeddingSetting:{
            language:"en"
        },
        wordText: document.getElementById("wordText").value,
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingWordtoVector(textEmbeddingInput);
        alert(JSON.stringify(result.result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### textEmbeddingSentencetoVector()

This service can zoom in an image that contains text and significantly improve the definition of text in the image.
Query the word/sentence vector result to build a vector library.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingSentencetoVectorReq` | [`textEmbeddingSentencetoVectorReq`](#textEmbeddingSentencetoVectorReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MlSentencetoVectorResult>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types

###### textEmbeddingSentencetoVectorReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sentenceText` | `string`  | Input value to be used for analyzer. |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

###### MlSentencetoVectorResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `vector` | `string`  |Obtains the vector. |
| `sentence` | `string`  | Word to be queried.|

##### Sample Code

```dart
    async function getSentenceText() {
    var textEmbeddingInput = {
        textEmbeddingSetting:{
            language:"en"
        },
        sentenceText: document.getElementById("sentenceText").value,
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingSentencetoVector(textEmbeddingInput);
        alert(JSON.stringify(result.result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### textEmbeddingWordSimilarity()

This service can zoom in an image that contains text and significantly improve the definition of text in the image.
Query the similarity between two words or sentences to determine whether the words or sentences are similar.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingWordSimilarityReq` | [`textEmbeddingWordSimilarityReq`](#textEmbeddingWordSimilarityReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLWordSimilarityResult>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types

###### textEmbeddingWordSimilarityReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `wordText1` | `string`  | Input value to be used for analyzer. |
| `wordText2` | `string`  | Input value to be used for analyzer. |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

###### MLWordSimilarityResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `wordSimilarity` | `string`  | Obtains the result of word similarity. |


##### Sample Code

```dart
   async function getWordSimilarity() {
    var textEmbeddingInput = {
        textEmbeddingSetting:{
            language:"en"
        },
        wordText1:document.getElementById("wordText1").value,
        wordText2:document.getElementById("wordText2").value
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingWordSimilarty(textEmbeddingInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### textEmbeddingSentenceSimilarity()

This service can zoom in an image that contains text and significantly improve the definition of text in the image.
Query the similarity between two words or sentences to determine whether the words or sentences are similar.

| Parameter               | Type                                      | Definition    |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingSentenceSimilartyReq` | [`textEmbeddingSentenceSimilartyReq`](#textEmbeddingSentenceSimilartyReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLSentenceSimilarityResult>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types

###### textEmbeddingSentenceSimilartyReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sentenceText1` | `string`  | Input value to be used for analyzer. |
| `sentenceText2` | `string`  | Input value to be used for analyzer. |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

###### MLSentenceSimilarityResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sentenceSimilarity` | `string`  | Obtains the result of sentence similarity. |

##### Sample Code

```dart
   async function getSentenceSimilarity() {
    var textEmbeddingInput = {
        textEmbeddingSetting:{
            language:"en"
        },
        sentenceText1:document.getElementById("sentenceText2").value,
        sentenceText2:document.getElementById("sentenceText2").value
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingSentenceSimilarty(textEmbeddingInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### textEmbeddingSimilarWords()

This service can zoom in an image that contains text and significantly improve the definition of text in the image.
Perform semantically-based extended association on input words.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textEmbeddingSimilarWordsReq` | [`textEmbeddingSimilarWordsReq`](#textEmbeddingSimilarWordsReq) | Represents the parameter required for text embedding analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLSimilarWordsResult>` | It is called when the function is executed successfully. It returns the results of text embedding analyser.|

##### Data Types 

###### textEmbeddingSimilarWordsReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `multipleText` | `string`  | Input value to be used for analyzer. |
| `similarityNumber` | `number`  | Number for how many words are required. |
| `textEmbeddingSetting` | [`textEmbeddingSetting`](#textEmbeddingSetting)  | Configuration file of the text embedding analyzer, which is used to configure the attributes of the text embedding analyzer. |

###### MLSimilarWordsResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `result` | `string[]`  | Obtains the result similar words. |


##### Sample Code

```dart
    async function getSimilarWords() {
    var textEmbeddingInput = {
        textEmbeddingSetting:{
            language:"en"
        },
        multipleText:document.getElementById("multipleText").value,
        similarityNumber:document.getElementById("similartyNumber").value
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingSimilarWords(textEmbeddingInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```

#### getTextEmbeddingSetting()

 It returns text embedding settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getTextEmbeddingSetting() {
    try {
        alert(await HMSLanguageServiceProvider.getTextEmbeddingSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### HMSTextServiceProvider

#### imageTextAnalyser()

The text recognition service extracts text from images of receipts, business cards, and documents.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localImageTextReq` | [`localImageTextReq`](#ImageTextReq) | Represents the necessary parameter to convert images to the text format. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLText>` |If the operation is successful, promise will also resolve successfully. |

##### Data Types

###### ImageTextReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ocrType`   | [`MLTextConfig`](#MLTextConfig)   | Determines whether the service will work on the phone or on the cloud.                                                                        |
| `analyseMode`    | `number` | Sets the analysis mode. The default value is `0` (syncAnalyseFrame). |
| `localTextSetting` | [`localTextSetting`](#localTextSetting)  | Sets the on-device detection attributes of the text analyzer (MLTextAnalyzer).                                         |
| `filePath` | `string` | Takes the URI of the image of the document, receipt, or business card to be converted into the text format.            |

###### remoteImageTextReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ocrType`   | [`MLTextConfig`](#MLTextConfig)   |Determines whether the service will work on the phone or on the cloud.                                                                      |
| `analyseMode`    | `number` | Sets the analysis mode. The default value is `0` (syncAnalyseFrame). |
| `remoteTextSetting` | [`remoteTextSetting`](#remoteTextSetting)  | Sets the on-cloud detection attributes of the text analyzer (MLTextAnalyzer) to call the cloud API for detecting text in an image.                                         |
| `filePath` | `string` | Takes the URI of the image of the document, receipt, or business card to be converted into the text format.            |

###### localTextSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ocrMode`   |  [`MLLocalTextSetting`](#MLLocalTextSetting)  | Sets the detection mode. The default value is `OCR_DETECT_MODE`.                     |
| `language`    | `string` | Sets the languages preset in the text analyzer. The default value is rm (Roman languages). |

###### remoteTextSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `textDensityScene`   |  [`MLRemoteTextSetting`](#MLRemoteTextSetting) | Sets the type of text to be detected. The default value is `1`.                     |
| `languageList`    | `string[]` | Sets the preset languages to be detected. |
| `borderType`    | [`MLRemoteTextSetting`](#MLRemoteTextSetting) | Sets the type of the text bounding box. The default value is `ARC`. |

###### MLText

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `blocks` | `Block[]`  | All text blocks detected in the image, including the text content, text block bounding box, and language. |
| `stringValue` | `string`  | All text content detected in the image. |

###### Blocks

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `bottom` | `number`  | Bottom |
| `top` | `number`  | Top  |
| `left` | `number`  | Left |
| `right` | `number`  | Right |
| `exactCenterX` | `number`  | Exact center X |
| `centerX` | `number`  | Center X |
| `centerY` | `number`  | Center Y |
| `describeContents` | `number`  | Describe contents.  |
| `height` | `number`  | Height |
| `width` | `string[]`  | Width |

###### Base

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `border` | `Rect`  | Obtains the axis-aligned bounding rectangle of the text. |
| `contents` |  [`Base[]`](#Base)  |Obtains the lower-level text object contained in the current text object. The current method needs to be rewritten in the subclass. Text objects are classified into Block, TextLine, and Word. A Block is a text object at the highest level, and may include multiple TextLine objects at the lower level. A TextLine object may include multiple Word objects at the lowest level. A Word object is a word that contains a set of characters. If the current text object is the lowest-level text object Word, null is returned.  |
| `language` | `string`  | Obtains the language that appears most frequently in the text. |
| `languageList` | `string[]`  | Obtains the detected languages.  |
| `possibility` | `number`  |Obtains the confidence of the detection result. |
| `stringValue` | `string`  | Obtains the detected text content.  |
| `vertexes` | [`Point`](#Point)   | Obtains the corner points of the text bounding box.|

###### Point

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `X` | `number`  |X |
| `Y` | `number`  |Y  |
| `describeContents` | `number`  | Describe contents. |


##### Constants

###### MLLocalTextSetting

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `OCR_DETECT_MODE` | `number`  | 1 |
| `OCR_TRACKING_MODE` | `number`  | 2 |

###### MLTextConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `OCR_LOCAL_TYPE` | `number`  | 0 |
| `OCR_REMOTE_TYPE` | `number`  | 1 |

###### MLRemoteTextSetting

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `OCR_LOOSE_SCENE` | `number`  | 0 |
| `OCR_COMPACT_SCENE` | `number`  | 1 |
| `NGON` | `string`  | "NGON" |
| `ARC` | `string`  | "ARC" |

##### Sample Code

```dart
     async function ImageTextAnalyser() {
 
    var ImageTextReq = {
        ocrType: 1,
        analyseMode: 1,
        remoteTextSetting: {
            textDensityScene: HMSMLKit.MLRemoteTextSetting.OCR_COMPACT_SCENE,
            languageList: ["en", "zh", "tr"],
            borderType: HMSMLKit.MLRemoteTextSetting.ARC,
        },
        filePath: $imageResult,
    };
    var localTextReq={
        ocrType: 0,
        analyseMode: 0,
        localTextSetting: {
            language: "en"
        },
        filePath: $imageResult,
    }
    try {
        if (device == true) {
            const result = await HMSTextServiceProvider.imageTextAnalyser(localTextReq);
            console.log(JSON.stringify(result));
            document.getElementById("textView").value += JSON.stringify(result.stringValue);
        
           
        } else {
            const result = await HMSTextServiceProvider.imageTextAnalyser(ImageTextReq);
            console.log(JSON.stringify(result));
            document.getElementById("textView").value += JSON.stringify(result.stringValue);
        
        }
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
```

#### stopTextAnalyser()

It stops text analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully. |

##### Sample Code

```dart
    async function stopTextAnalyser() {
    try {
        const result = await HMSTextServiceProvider.stopTextAnalyser();
        alert(result.isAnalyserClosed)
    } catch (ex) {
        alert(ex)
    }
}
```

#### getTextAnalyserInfo()

It used to  obtain information about the service.  

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully. It returns text analyzer information. |

##### Sample Code

```dart
   async function getTextAnalyserInfo() {
    try {
        alert(JSON.stringify(await HMSTextServiceProvider.getTextAnalyserInfo()));
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### documentImageAnalyser()

The document recognition service can recognize text with paragraph formats in document images.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentImageReq` | [`documentImageReq`](#documentImageReq) | Represents the necessary parameter to convert document images to the text format. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLDocument>` |It is called when the function is executed successfully. It returns text. |

##### Data Types

###### documentImageReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `documentSetting` |  [`documentSetting`](#documentSetting)  | SCreates an instance of the document analysis configurator to set document detection attributes.                             |
| `filePath` | `string` | Takes the URI of the image of the document, receipt, or business card to be converted into the text format.            |

###### documentSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `borderType` | [`MLRemoteTextSetting`](#MLRemoteTextSetting)  | Sets the type of the text bounding box. The default value is NGON.                             |
| `languageList` | `string[]` | Sets the preset languages. Do not set this parameter if languages are not determined. The service will automatically identify the languages.           |
| `enableFingerprintVerification` | `boolean` | Determines whether to enable certificate fingerprint verification.        |

###### MLDocument

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `blocks` | `Block[]`  | All text blocks detected in the image, including the text content, text block bounding box, and language. |
| `stringValue` | `string`  | All text content detected in the image. |

###### Blocks

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `stringValue` | `string`  | Obtains the detected text content. |
| `border` | `Rect`  |Obtains the axis-aligned bounding rectangle of the text.  |
| `vertexes` | `Point[]`  | Obtains the corner points of the text bounding box. |
| `possibility` | `number`  | Obtains the confidence of the detection result.. |
| `languageList` | `string[]`  | Obtains the detected languages. |
| `contents` | [`MLTextBase`](#MLTextBase)  | Obtains the lower-level text object contained in the current text object. The current method needs to be rewritten in the subclass. Text objects are classified into Block, TextLine, and Word. A Block is a text object at the highest level, and may include multiple TextLine objects at the lower level. A TextLine object may include multiple Word objects at the lowest level. A Word object is a word that contains a set of characters. If the current text object is the lowest-level text object Word, null is returned. |

##### Sample Code

```dart
   async function getDocumentImageAnalyser() {
    var documentImageAnalyserInput = {
        documentSetting: {
            borderType: HMSMLKit.MLRemoteTextSetting.ARC,
            possibleLanguages: ["en", "zh", "tr"],
            enableFingerprintVerification: true,
        },
        filePath: $imageResult,
    };
    try {
        const result = await HMSTextServiceProvider.documentImageAnalyser(documentImageAnalyserInput);
        document.getElementById("textView").value = JSON.stringify(result.stringValue);
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

#### stopDocumentImageAnalyser()

It stops document analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully.|

##### Sample Code

```dart
   async function stopDocumentImageAnalyser() {
    try {
        const result = await HMSTextServiceProvider.stopDocumentImageAnalyser();
        alert(result)
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopBankCardDetector()

It stops bank card detector service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully.|

##### Sample Code

```dart
   async function stopBankCardDetector() {
    try {
        alert(await HMSTextServiceProvider.stopBankCardDetector());
    } catch (ex) {
        alert(ex)
    }
}
```

#### bankCardDetector()

The bank card recognition service can quickly recognize information such as the bank card number, covering mainstream bank cards such as China UnionPay, American Express, Mastercard, Visa, and JCB around the world.

|  Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bankCardSDKDetectorReq` | [`bankCardSDKDetectorReq`](#bankCardSDKDetectorReq) | Represents the parameter required for on-device bank card recognition. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLBankCard>` | It is called when the function is executed successfully. It returns bank card information. |

##### Data Types

###### bankCardSDKDetectorReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `detectType` | `number`  | Sets whether the definition will work with the SDK or as a plugin                            |
| `filePath` | `string` | Takes the URI of the image of the document, receipt, or business card to be converted into the text format.            |
| `mlBcrAnalyserSetting` | [`mlBcrAnalyserSetting`](#mlBcrAnalyserSetting) | Creates an instance of the on-device bank card recognition configurator.           |

###### mlBcrAnalyserSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `langType` | `string`  | Sets the bank card recognition language. The default value is zh.      |
| `resultType` | [`MLBcrResultConfig`](#MLBcrResultConfig) | Sets the bank card recognition result type.            |

###### bankCardPluginDetectorReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `detectType` | `number`  | Sets whether the definition will work with the SDK or as a plugin.      |
| `mlBcrCaptureConfig` | [`mlBcrCaptureConfig`](#mlBcrCaptureConfig) | SRepresents the configurator factory of the bank card recognition plugin, which is used to create a configurator instance for the bank card recognition plugin.           |

###### bankCardPluginDetectorReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `orientation` | [`mlBcrCaptureConfig`](#mlBcrCaptureConfig)  | Sets the recognition screen orientation. The default value is ORIENTATION_AUTO.      |
| `resultType` | [`MLBcrResultConfig`](#MLBcrResultConfig)  | Sets the bank card recognition result type.      |

###### MLBankCard

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `number` | `string`  | Obtains the bank card number. |
| `expire` | `string`  | Obtains the expiration date of a bank card. |
| `issuer` | `string`  | Obtains the issuing bank. |
| `type` | `string`  | Obtains the bank card type. |
| `organization` | `string`  | Obtains the name of the card organization. |
| `numberBitmap` | `Bitmap`  | All text content detected in the image. |
| `originalBitmap` | `Bitmap`  | Obtains the original uncorrected bank card image sent for recognition.|

##### Constants

###### MLBcrResultConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `RESULT_NUM_ONLY` | `number`  | 0 |
| `RESULT_SIMPLE` | `number`  | 1 |
| `RESULT_ALL` | `number`  | 2 |

###### MLBcrCaptureConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ORIENTATION_AUTO` | `number`  | 0 |
| `ORIENTATION_LANDSCAPE` | `number`  | 1 |
| `ORIENTATION_PORTRAIT` | `number`  | 2 |

##### Sample Code

```dart
 async function bankCardDetector() {
    var bankCardSDKDetectorInput = {
        detectType: 0,
        filePath: $imageResult,
        mLBcrAnalyzerSetting: {
            langType: "zh",
            resultType: HMSMLKit.MLBcrResultConfig.RESULT_ALL
        },
    };
    var bankCardPluginDetectorInput = {
        detectType: 1,
        mLBcrCaptureConfig: {
            orientation: HMSMLKit.MLBcrCaptureConfig.ORIENTATION_AUTO,
            resultType: HMSMLKit.MLBcrResultConfig.RESULT_ALL
        },
    };
    try {
        if (device == true) {
            const result = await HMSTextServiceProvider.bankCardDetector(bankCardSDKDetectorInput);
            document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
            document.getElementById("cardNumber").value = JSON.stringify(result.number);
            document.getElementById("cardExpire").value = JSON.stringify(result.expire);
            document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
        } else {
            const result = await HMSTextServiceProvider.bankCardDetector(bankCardPluginDetectorInput);
            document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
            document.getElementById("cardNumber").value = JSON.stringify(result.number);
            document.getElementById("cardExpire").value = JSON.stringify(result.expire);
            document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
        }
    } catch (ex) {
        alert(ex)
    }
}
```

#### generalCardDetector()

The general card recognition service provides a universal development framework based on the text recognition technology.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `generalCardDetectorReq` | [`generalCardDetectorReq`](#generalCardDetectorReq) |Represents the parameter required for general card recognition with the plugin.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLGcrCaptureResult>` | It is called when the function is executed successfully. It returns general card information. |

##### Data Types

###### generalCardDetectorReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `captureType` | [`gcrCaptureType`](#gcrCaptureType)  | SCreates an instance of the recognition UI configurator.      |
| `gcrCaptureConfig` | [`gcrCaptureConfig`](#gcrCaptureConfig)  | Represents the general card recognition configurator factory, which is used to create an instance of the general card recognition configurator.    |
| `gcrCaptureUIConfig` | [`gcrCaptureUIConfig`](#gcrCaptureUIConfig)  | SCreates an instance of the recognition UI configurator.      |

###### gcrCaptureConfig

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `language` | `string`  | Sets the language of general card recognition. The default value is en.   |

###### gcrCaptureUIConfig

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `orientation` | [`MLGcrCaptureUIConfig`](#MLGcrCaptureUIConfig)   | Sets the scanning screen orientation (landscape or portrait). The default value is ORIENTATION_AUTO.   |
| `tipText` | `number`  | Sets the tips displayed in the scanning box.   |
| `scanBoxCornerColor` | `number`  | Sets the color value of the scanning box corners. The default value is –16711936 (GREEN).   |
| `photoButtonResId` | `number`  | Sets the resource ID of the shot button image on the scanning UI.   |
| `backButtonResId` | `number`  | Sets the resource ID of the back button image on the scanning UI.   |
| `torchResId` | `number`  | Sets the resource IDs of the torch-on and torch-off images on the scanning UI   |

###### MLGcrCaptureResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `cardBitmap` | `Bitmap`  | General card image sent for recognition. |
| `text` | `string`  | General card recognition result. |


##### Constants

###### MLGcrCaptureUIConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ORIENTATION_AUTO` | `number`  | 0 |
| `ORIENTATION_LANDSCAPE` | `number`  | 1 |
| `ORIENTATION_PORTRAIT` | `number`  | 2 |

###### gcrCaptureType

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `CAPTURE_ACTIVITY` | `number`  | 0 |
| `CAPTURE_PHOTO` | `number`  | 1 |
| `CAPTURE_IMAGE` | `number`  | 2 |

##### Sample Code

```dart
async function generalCardDetector() {
    var generalCardDetectorReq = {
        gcrCaptureConfig: {
            language: "en",
        },
        gcrCaptureUIConfig: {
            orientation: HMSMLKit.MLGcrCaptureUIConfig.ORIENTATION_AUTO,
            tipTextColor: HMSMLKit.Colors.GREEN,
            tipText: "Scan a card",
            scanBoxCornerColor: HMSMLKit.Colors.BLUE,
        }
    };
    try {
        const result = await HMSTextServiceProvider.generalCardDetector(generalCardDetectorReq);
        alert(JSON.stringify(result.text));
        console.log(JSON.stringify(result));
        document.getElementById("detectedGeneralCardImage").src = "data:image/jpeg;base64," + result.cardBitmap;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
```

#### formRecognitionAnalyser()

The form recognition service uses AI technologies to recognize and return form structure information (including rows, columns, and coordinates of cells) and table text in Chinese and English including punctuation, from input images.

| Parameter               | Type                                      | Definition     |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `formRecognizerAnalyserReq` | [`formRecognizerAnalyserReq`](#formRecognizerAnalyserReq) | Represents the parameter required for form recognizer analyser. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLFormRecogitionAnalyser>` | It is called when the function is executed successfully. It returns the results of form recognition analyser.|

##### Data Types

###### formRecognizerAnalyserReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `filePath` | `string`  | Takes the URI of the image document. |
| `syncType` | `MLFormRecogitionConfig`  | Sync or Async  |

###### MLFormRecogitionResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `retCode` | `number`  | Obtains the retcode. |
| `tableContent` | [`TableContent`](#TableContent)  | Obtains the table content. |

###### TableContent

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `tableCount` | `number`  | Obtains the number of table count. |
| `tables` | [`TablesEntity`](#TablesEntity) | Obtains the tables entity. |

###### TablesEntity

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `tableID` | `number`  | Obtains the number of table count. |
| `headerInfo` | `string`  | Obtains the header info. |
| `footerInfo` | `string`  | Obtains the footer info. |
| `tableBody` | [`TableBodyEntity`](#TableBodyEntity) | Obtains the tables body entity. |

###### TableBodyEntity

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `startRow` | `number`  | Obtains the start row info. |
| `endRow` | `number`  | Obtains the end row info. |
| `startCol` | `number`  | Obtains the start column info. |
| `endCol` | `number`  | Obtains the end column info. |
| `cellCoordinate` |  [`CellCoordinate`](#CellCoordinate)| Obtains the cell coordinate info. |
| `textInfo` | `string`  | Obtains the text. |

###### CellCoordinate

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `topLeft_x` | `number`  | Obtains the X coordinate of the upper left corner of a cell in a form. |
| `topLeft_y` | `number`  | Obtains the Y coordinate of the upper left corner of a cell in a form. |
| `topRight_x` | `number`  | Obtains the X coordinate of the upper right corner of a cell in a form. |
| `topRight_y` | `number`  | Obtains the Y coordinate of the upper right corner of a cell in a form. |
| `bottomLeft_x` |  `number`|  Obtains the X coordinate of the lower left corner of a cell in a form. |
| `bottomLeft_y` | `number`  | Obtains the Y coordinate of the lower left corner of a cell in a form. |
| `bottomRight_x` | `number`  | Obtains the X coordinate of the lower right corner of a cell in a form. |
| `bottomRight_y` | `number`  | Obtains the Y coordinate of the lower right corner of a cell in a form. |

##### Constants

###### MLFormRecogitionConfig

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `SYNC_TYPE` | `number`  | 1|
| `ASYNC_TYPE` | `number`  | o |

##### Sample Code

```dart
    async function getFormImageAnalyser() {
    var formReq = {
        filePath: $imageResult,
    };
    try {
        const result = await HMSTextServiceProvider.formRecognitionAnalyser(formReq);
        document.getElementById("textView").value = JSON.stringify(result);
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex))
    }
}
}
```

#### closeDocumentImageAnalyser()

It closes document analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully.|

##### Sample Code

```dart
   async function closeDocumentImageAnalyser() {
    try {
        const result = await HMSTextServiceProvider.closeDocumentImageAnalyser();
        alert(result)
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopFormRecognitionAnalyser()

It stops form recognition analyser service.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` |It is called when the function is executed successfully.|

##### Sample Code

```dart
   async function stopFormRecognitionAnalyser() {
    try {
        const result = await HMSTextServiceProvider.stopFormRecognitionAnalyser();
        alert(result)
    } catch (ex) {
        alert(ex)
    }
}
```

#### getDocumentImageAnalyserSetting()

 It returns document analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getDocumentImageAnalyserSetting() {
    try {
        alert(await HMSTextServiceProvider.getDocumentImageAnalyserSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getBankCardDetectorSetting()

 It returns bcr analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getBankCardDetectorSetting() {
    try {
        alert(await HMSTextServiceProvider.getBankCardDetectorSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getGCRSetting()

 It returns gcr analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getGCRSetting() {
    try {
        alert(await HMSTextServiceProvider.getGCRSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getTextAnalyserSetting()

 It returns text analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getTextAnalyserSetting() {
    try {
        alert(await HMSTextServiceProvider.getTextAnalyserSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### HMSVoiceServiceProvider

#### localTranslator()

The text translation service can translate text into different languages in local.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localTranslateReq` | [`localTranslateReq`](#localTranslateReq) |Represents the parameter required for translate.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<TranslateResult>` | It is called when the function is executed successfully. It returns the translated text. |

##### Data Types

###### localTranslateReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `USE_SYNC` | `boolean`  | Sets method  synchronous.   |
| `sourceText` | `string`  | Source text to be translated.   |
| `sourceLangCode` | `string`  | Sets the source language code (ISO 639-1 standard code). If this parameter is not set, the system automatically recognizes the language of the text to be translated.  |
| `targetLangCode` | `string`  | Sets the target language code (ISO 639-1 standard code).   |

###### TranslateResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `text` | `string`  | Translation  |

##### Sample Code

```dart
  async function localTranslator() {
    var localtranslateInput = {
        targetLangCode: "zh",
        sourceLangCode: "en",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.localTranslator(localtranslateInput);
        document.getElementById("textView2").value = result;
    } catch (ex) {
        alert(ex)
    }
}
```

#### remoteTranslator()

The text translation service can translate text into different languages with cloud.                      

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `remotetranslateReq` | [`remotetranslateReq`](#remotetranslateReq) |Represents the parameter required for translate.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<TranslateResult>` | It is called when the function is executed successfully. It returns the translated text. |

##### Data Types 

###### remotetranslateReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `USE_SYNC` | `boolean`  | Sets method  synchronous.   |
| `sourceText` | `string`  | Source text to be translated.   |
| `sourceLangCode` | `string`  | Sets the source language code (ISO 639-1 standard code). If this parameter is not set, the system automatically recognizes the language of the text to be translated.  |
| `targetLangCode` | `string`  | Sets the target language code (ISO 639-1 standard code).   |

##### Sample Code

```dart
    async function remoteTranslator() {
    var remotetranslateInput = {
        targetLangCode: "zh",
        sourceLangCode: "",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.remoteTranslator(remotetranslateInput);
        document.getElementById("textView2").value = result;
    } catch (ex) {
        alert(ex)
    }
}
```


#### localLangDetection()

The language detection service can detect the language of text. Both single-language text and multi-language text are supported.                       

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localLangDetectionReq` | [`localLangDetectionReq`](#localLangDetectionReq) |Represents the parameter required for language detection.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | A callback function. It is called when the function is executed successfully. It returns the detected language from the text. |

##### Data Types

###### localLangDetectionReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sourceText` | `string`  | Text whose language is to be defined.   |
| `trustedThreshold` | `number`  | The confidence for language detection. If the `firstBestDetectTask` method is used, the default value is `0.5f`. If the probabilityDetectTask method is used, the default value is `0.01f`. | 

###### MLDetectedLang

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `langCode` | `string`  | Lang code.  |
| `probability` | `number`  | Predicted probability value. |

###### MLDetectedLang

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `identity` | `string`  | Obtains the classification ID.  |
| `name` | `string`  | Obtains the classification name.  |
| `possibility` | `number`  | Obtains the classification confidence. |

##### Sample Code

```dart
 async function locallangdetect() {
    var locallangdatectInput = {
        targetLangCode: "zh",
        sourceLangCode: "en",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorLocalLangDetect(locallangdatectInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```


#### remoteLangDetection()

The language detection service can detect the language of text. Both single-language text and multi-language text are supported.                    

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `remoteLangDetectionReq` | [`remoteLangDetectionReq`](#remoteLangDetectionReq) |Represents the parameter required for language detection.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLRemoteLangDetection | MLlangDetectionWithFirstDetect>` | A callback function. It is called when the function is executed successfully. It returns the detected language from the text. |

##### Data Types

###### remoteLangDetectionReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `sourceText` | `string`  | Text whose language is to be defined.   |
| `taskMode` | `number`  | Sets the method of language detection.  |
| `trustedThreshold` | `number`  | The confidence for language detection. If the `firstBestDetectTask` method is used, the default value is `0.5f`. If the probabilityDetectTask method is used, the default value is `0.01f`. |

###### MLlangDetectionWithFirstDetect

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `langCode` | `string`  |Translation result. |

##### Sample Code

```dart
     async function remotelangdetect() {
    var remotelangdatectInput = {
        targetLangCode: "zh",
        sourceLangCode: "en",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorRemoteLangDetect(remotelangdatectInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```


#### translatorDownloadModel()

It downloads files required for local translator.                   

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `downloadTranslateReq` | [`downloadTranslateReq`](#downloadTranslateReq) | Represents the parameter required for download local files.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Data Types

###### downloadTranslateReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `USE_SYNC` | `boolean`  | Sets method  synchronous. |
| `langcode` | `string`  |Language code to be downloaded. |

##### Sample Code

```dart
   async function downloadlocal() {
    var dowloadtrasnlateInput = {
        targetLangCode: "zh",
        sourceLangCode: "en",
        langcode: "zh",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorDownloadModel(dowloadtrasnlateInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
```


#### translatorDeleteModel()

It deletes loca language files.                   

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deleteTranslateReq` | [`deleteTranslateReq`](#deleteTranslateReq) | Represents the parameter required for delete local files.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Data Types 

###### deleteTranslateReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `USE_SYNC` | `boolean`  | Sets method  synchronous. |
| `langcode` | `string`  |Language code to be deleted. |

##### Sample Code

```dart
   async function deletelocal() {
    var deletetrasnlateInput = {
        targetLangCode: "zh",
        sourceLangCode: "en",
        langcode: "zh",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorDeleteModel(deletetrasnlateInput);
        alert(result);
    } catch (ex) {
        alert(ex)
    }
}
```

#### translatorRemoteAllLang()

Obtains all languages supported for cloud translation.                  

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `remoteAllLangReq` | [`remoteAllLangReq`](#remoteAllLangReq) | Represents the parameter required for cloud all languages.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Data Types 

###### remoteAllLangReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `USE_SYNC` | `boolean`  | Sets method  synchronous. |

##### Sample Code

```dart 
async function remoteAllLang() {
    var remoteAllLangReq = {
        useSync: "true"
    };
    try {
        const result = await HMSMLKit.translatorRemoteAllLang(remoteAllLangReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
```

#### translatorLocalAllLang()

Obtains all languages supported for local translation.                 

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `localAllLangReq` | [`localAllLangReq`](#localAllLangReq) | Represents the parameter required for local all languages.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Data Types 

###### localAllLangReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `USE_SYNC` | `boolean`  | Sets method  synchronous. |


##### Sample Code

```dart
    async function localAllLang() {
        var localAllLangReq = {
            useSync: "false"
        };
        try {
            const result = await HMSVoiceServiceProvider.translatorLocalAllLang(localAllLangReq);
            alert(JSON.stringify(result));
        } catch (Ex) {
            alert(JSON.stringify(Ex));
        }
    }
```

#### stopTranslatorService()

It stops translator service.


| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Sample Code

```dart
  async function stopTranslatorService() {
    try {
        alert(await HMSVoiceServiceProvider.stopTranslatorService());
    } catch (ex) {
        alert(ex)
    }
}
```

#### stopLangDetectionService()

It stops language detection service. 

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Sample Code

```dart
      async function stopTranslatorService() {
    try {
        alert(await HMSVoiceServiceProvider.stopLangDetectionService());
    } catch (ex) {
        alert(ex)
    }
}
```








#### soundDectAnalyser()

The sound detection service can detect sound events in online (real-time recording) mode. The detected sound events can help you perform subsequent actions.   

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `soundDectReq` | [`soundDectReq`](#soundDectReq) | Represents the parameter required for sound detection analyser.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLSoundDectResult>` | It is called when the function is executed successfully. It returns the results of sound detection analyser. |

##### Data Types

###### soundDectReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `startType` | `boolean`  | Sets to start the service. |

###### MLSoundDectResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `soundType` | [`soundType`](#soundType)  |Obtains the sound detection result. |
| `eventName` | `string`  | Event name of the remote sound detection listener. |

##### Constants

###### soundType

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `SOUND_EVENT_TYPE_BABY_CRY` | `number`  | 1 |
| `SOUND_EVENT_TYPE_SNORING` | `number`  | 2 |
| `SOUND_EVENT_TYPE_SNEEZE` | `number`  | 3 |
| `SOUND_EVENT_TYPE_SCREAMING` | `number`  | 4 |
| `SOUND_EVENT_TYPE_MEOW` | `number`  | 5 |
| `SOUND_EVENT_TYPE_BARK` | `number`  | 6 |
| `SOUND_EVENT_TYPE_WATER` | `number`  | 7 |
| `SOUND_EVENT_TYPE_CAR_ALARM` | `number`  | 8 |
| `SOUND_EVENT_TYPE_DOOR_BELL` | `number`  | 9 |
| `SOUND_EVENT_TYPE_KNOCK` | `number`  | 10 |
| `SOUND_EVENT_TYPE_ALARM` | `number`  | 11 |
| `SOUND_EVENT_TYPE_STEAM_WHISTLE` | `number`  | 12 |

##### Sample Code

```dart
   async function soundDectStart() {
    var soundDectAnalyserInput = {
        startType: true,
    };
    try {
        var res = await HMSMLKit.soundDectAnalyser(soundDectAnalyserInput);
        if (res.eventName == "onSoundSuccessResult") {
            alert(JSON.stringify(res.soundType));
        }
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### ttsAnalyser()

Text to speech (TTS) can convert text information into speech output. Rich timbres are supported to produce more natural sounds.                                           

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttsReq` | [`ttsReq`](#ttsReq) | Represents the parameter required for TTS.|

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLTtsResult>` | It is called when the function is executed successfully. It converts text file to audio output. |

##### Data Types

###### ttsReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `text` | `string`  | Text to be converted to speech. The text can contain a maximum of 500 characters.   |
| `mlConfigs` |   [`mlConfigs`](#mlConfigs)  | Configures TTS. |
| `queuingMode` |  [`MLTtsConstants`](#MLTtsConstants)  | TTS playback mode. |

###### mlConfigs

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `language` |  [`MLTtsConstants`](#MLTtsConstants)  | Sets the language. The default value is TTS_ZH_HANS.  |
| `person` |  [`MLTtsConstants`](#MLTtsConstants)  | Sets the speaker. The default value is TTS_SPEAKER_FEMALE_ZH.|
| `speed` | `number`  | Sets the speech speed. The default value is 1.0.|
| `volume` | `number`  | Sets the volume. The default value is 1.0.|

###### MLTtsResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  |Event name of the remote tts listener. |
| `taskId` | `string`  | ID of the tts task. |
| `complete` | `boolean`  | Task completion value. |
| `text` | `string`  | Extended information.|

##### Constants

###### MLTtsConstants

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `TTS_EN_US` | `string`  | "en-US" |
| `TTS_LAN_FR_FR` | `string`  | "fr-FR" |
| `TTS_ZH_HANS` | `string`  | "zh-Hans" |
| `TTS_LAN_DE_DE` | `string`  | "de-DE" |
| `TTS_ES_ES` | `string`  | "es-ES" |
| `TTS_LAN_IT_IT` | `string`  | "it-IT" |
| `TTS_SPEAKER_FEMALE_EN` | `string`  | "Female-en" |
| `TTS_SPEAKER_FEMALE_ZH` | `string`  | "Female-zh" |
| `TTS_SPEAKER_MALE_EN` | `string`  | "Male-en" |
| `TTS_SPEAKER_MALE_ZH` | `string`  | "Male-zh" |
| `TTS_SPEAKER_FEMALE_DE` | `string`  | "de-DE-st-1" |
| `TTS_SPEAKER_FEMALE_ES` | `string`  | "it-IT-st-1" |
| `TTS_SPEAKER_FEMALE_IT` | `string`  | "es-ES-st-1" |
| `TTS_SPEAKER_FEMALE_FR` | `string`  | "fr-FR-st-1" |
| `TTS_SPEAKER_OFFLINE_EN_US_MALE_BOLT` | `string`  | "en-US-st-bolt-2" |
| `TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_EAGLE` | `string`  | "zh-Hans-st-eagle-1" |
| `TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_EAGLE` | `string`  | "zh-Hans-st-eagle-2" |
| `TTS_SPEAKER_OFFLINE_EN_US_FEMALE_EAGLE` | `string`  | "en-US-st-eagle-1" |
| `TTS_SPEAKER_OFFLINE_EN_US_MALE_EAGLE` | `string`  | "en-US-st-eagle-2" |
| `TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE` | `string`  | "en-US-st-bee-1" |
| `TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE` | `string`  | "fr-FR-st-bee-1" |
| `TTS_SPEAKER_OFFLINE_ES_ES_FEMALE_BEE` | `string`  | "es-ES-st-bee-1" |
| `TTS_SPEAKER_OFFLINE_DE_DE_FEMALE_BEE` | `string`  | "de-DE-st-bee-1" |
| `TTS_SPEAKER_OFFLINE_IT_IT_FEMALE_BEE` | `string`  | "it-IT-st-bee-1"" |
| `TTS_SPEAKER_OFFLINE_ZH_HANS_FEMALE_BOLT` | `string`  | "zh-Hans-st-bolt-1" |
| `TTS_SPEAKER_OFFLINE_ZH_HANS_MALE_BOLT` | `string`  | "zh-Hans-st-bolt-2" |
| `TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BOLT` | `string`  | "en-US-st-bolt-1" |
| `TTS_OFFLINE_MODE` | `string`  | "offline" |
| `TTS_ONLINE_MODE` | `string`  | "online" |
| `QUEUE_APPEND` | `number`  | 0 |
| `QUEUE_FLUSH` | `number`  | 1 |
| `EXTERNAL_PLAYBACK` | `number`  | 2 |
| `OPEN_STREAM` | `number`  | 4 |

##### Sample Code

```dart
async function ttsAnalyserStart(textToSpeech) {
    var ttsReq = {
        text: textToSpeech,
        mlConfigs: {
            language: HMSVoiceServiceProvider.MLTtsConstants.TTS_EN_US,
            person: HMSVoiceServiceProvider.MLTtsConstants.TTS_SPEAKER_FEMALE_EN,
            speed: 1.0,
            volume: 1.0,
        },
        queuingMode: 0,

    };
    try {
        await HMSVoiceServiceProvider.ttsAnalyser(ttsReq);
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
```


#### ttsOfflineAnalyser()

With the support of an offline model, on-device TTS can convert text information into speech even when there is no network connection. The current version provides five types of female voice speakers.                                           


|  Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttsReq` | [`ttsReq`](#ttsReq) | Represents the parameter required for TTS.|


| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLTtsResult>` | It is called when the function is executed successfully. It converts text file to audio output. |

##### Sample Code

```dart
async function ttsOfflineAnalyser() {
    var ttsReq = {
        text: "Hello Huawei",
        mlConfigs: {
            language: HMSVoiceServiceProvider.MLTtsConstants.TTS_EN_US,
            person: HMSVoiceServiceProvider.MLTtsConstants.TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE,
            speed: 1.0,
            volume: 1.0,
            synthesizeMode: HMSVoiceServiceProvider.MLTtsConstants.TTS_OFFLINE_MODE
            
        },
        queuingMode: 0,

    };
    try {
        await HMSVoiceServiceProvider.ttsOfflineAnalyser(ttsReq);
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
```

#### ttsAnalyserStop()

It stops tts analyser service. 

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Sample Code

```dart
   async function ttsAnalyserStop() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserStop());
    } catch (ex) {
        alert(ex)
    }
}
```

#### ttsAnalyserPause()

It pause tts analyser service. 

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Sample Code

```dart
   async function ttsAnalyserPause() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserPause());
    } catch (ex) {
        alert(ex)
    }
}
```

#### ttsAnalyserResume()

It resume tts analyser service. 

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Sample Code

```dart
  async function ttsAnalyserResume() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserResume());
    } catch (ex) {
        alert(ex)
    }
}
```

#### ttsAnalysershutDown()

It releases engine resources.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully. |

##### Sample Code

```dart
   async function ttsAnalysershutDown() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalysershutDown());
    } catch (ex) {
        alert(ex)
    }
}
```

#### ttsAnalyserEngineSetting()

 It returns TTS engine's settings properties.

|  Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttsEngineReq` | [`ttsEngineReq`](#ttsEngineReq) | Represents the parameter required for TTS Engine.|


| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Data Types

###### ttsEngineReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `language` | `string`  | Supported language.   |


##### Sample Code

```dart
    async function ttsAnalyserEngineSetting() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserEngineSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### ttsAnalyserDownloadSetting()

It returns Tts analyser download settings properties.


| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function ttsAnalyserDownloadSetting() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserDownloadSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### aftAnalyser()

The audio file transcription service can convert an audio file less than or equal to 60 seconds into a text file. Currently, Chinese and English are supported.  

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aftReq` | [`aftReq`](#aftReq) | Represents the parameter required for the analyzer.|


| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<MLAftResult>` | It is called when the function is executed successfully. It returns the conversion results. |

##### Data Types

###### aftReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `audioPath` | `string`  |Takes the URI of the audio file path. |
| `aftSetting` |  [`aftSetting`](#aftSetting)  |Audio transcription settings.  |

###### aftSetting

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `languageCode` | `string`  | Obtains the audio language code. |
| `punctuationEnabled` | `boolean`  | Set whether to generate the text transcription result of each audio segment and the corresponding audio time shift.  |
| `timeOffset` | `boolean`  | Set whether to output the time shift of a sentence in the audio file. The default value is false.  |
| `wordTimeOffsetEnabled` | `boolean`  | Set whether to output the time shift of a sentence in the audio file. The default value is false.  |
| `sentenceTimeOffsetEnabled` | `boolean`  | Set whether to automatically add punctuations to the converted text. The default value is false.  |

###### MLAftResult

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the remote audio file transcription listener. |
| `taskId` | `string`  | ID of the audio transcription task|
| `text` | `string`  | Extended information. |
| `complete` | `boolean`  | Task completion value.  |

##### Sample Code

```dart
 async function aftAnalyserStart() {
    var aftAnalyserInput = {
        audioPath: $audioResult,
        aftSetting: {
            languageCode: "en-US",
            punctuationEnabled: true,
            wordTimeOffsetEnabled: true,
            sentenceTimeOffsetEnabled: true
        }
    };
    try {
        let result = await HMSVoiceServiceProvider.aftAnalyser(aftAnalyserInput);
        document.getElementById("textViewAFT").value = JSON.stringify(result.text);
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### asrAnalyser()

ASR can recognize speech not longer than 60s and convert the input speech into text in real time. This service uses industry-leading deep learning technologies to achieve a recognition accuracy of over 95%.                             

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `asrReq` | [`asrReq`](#asrReq) | Represents the parameter required for the ASR analyzer. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | It is called when the function is executed successfully. It returns the conversion results. |

##### Data Types

###### asrReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `language` | `string`  | Language key carried by Intent in the startRecognizing API. The default value is en-US. |
| `feature` | `number`  | Recognition mode key carried by Intent in the startRecognizing API. Currently, the real-time result output and whole-section result output after recognition are supported.  |


###### asrAnayserResult

###### onStartingOfSpeech
Called when the recorder starts to receive speech.

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the speech recognition listener. |

###### onStartListening
Called when the recorder starts to receive speech.

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the speech recognition listener. |

###### onVoiceDataReceived
Returns the original PCM stream and audio power to the user.

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the speech recognition listener. |
| `data` | `number[]`  | PCM stream, with PCM mono, 16-bit depth, and 16 kHz audio sampling rate. |
| `energy` | `number`  | Audio power. |

###### onState
Notifies the app status change.

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the speech recognition listener. |
| `state` | `number`  | Status code. For details, please refer to MLAsrConstants. |

###### onError
Called when a network error or recognition error occurs.

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `errorCode` | `string`  | Result code. For details about the result codes, please refer to `MLAsrConstants`.ERR_NO_NETWORKERR_NO_UNDERSTANDERR_SERVICE_UNAVAILABLE. |
| `errorMessage` | `number`  | Error message. |

###### onRecognizingResults
When the speech recognition mode is set to MLAsrConstants.FEATURE_WORDFLUX, the speech recognizer continuously returns the speech recognition result through this API.

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the speech recognition listener. |
| `recognitionResult` | `string`  | Result returned during speech recognition. Currently, Bundle carries the recognized text information, which is stored in the value with MLAsrRecognizer.RESULTS_RECOGNIZING as the key in the string type. |

###### onResults
Called when the recorder starts to receive speech.
| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `eventName` | `string`  | Event name of the speech recognition listener. |
| `result` | `string`  | Speech recognition result. Currently, Bundle carries the recognized text information, which is stored in the value with MLAsrRecognizer.RESULTS_RECOGNIZED as the key in the string type. |

##### Constants 

###### FEATURE

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `FEATURE_ALLINONE` | `number`  | 11 |
| `FEATURE_WORDFLUX` | `number`  | 12 |


###### LANGUAGE

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `LAN_EN_US` | `string`  | "en-US" |
| `LAN_FR_FR` | `string`  | "fr-FR" |
| `LAN_ZH` | `string`  | "zh" |
| `LAN_ZH_CN` | `string`  | "zh-CN" |
| `LAN_ES_ES` | `string`  | "es-ES" |
| `LAN_DE_DE` | `string`  | "de-DE" |

###### MLAsrConstants

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `ERR_NO_NETWORK` | `number`  | 11202 |
| `ERR_NO_UNDERSTAND` | `number`  | 11204 |
| `ERR_SERVICE_UNAVAILABLE` | `number`  | 11203 |
| `STATE_LISTENING` | `number`  | 1 |
| `STATE_NO_NETWORK` | `number`  | 7 |
| `STATE_NO_SOUND` | `number`  | 2 |
| `STATE_NO_SOUND_TIMES_EXCEED` | `number`  | 3 |
| `STATE_WAITING` | `number`  | 9 |
| `STATE_NO_UNDERSTAND` | `number`  | 6 |


##### Sample Code

```dart
   function asrAnalyserStart() {
    var asrAnalyserInput = {
        language: HMSVoiceServiceProvider.LANGUAGE.LAN_EN_US,
        feature: HMSVoiceServiceProvider.FEATURE.FEATURE_ALLINONE
    };
    document.getElementById('servicesDiv').style.backgroundColor = 'Red';
    HMSVoiceServiceProvider.asrAnalyser(
        asrAnalyserInput,
        function (res) {
            console.log(JSON.stringify(res));
            if (res.eventName == "onResults") {
                alert(res.result);
                document.getElementById('servicesDiv').style.backgroundColor = 'honeydew';
            }
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
```


#### rttAnalyserStart()

Real-time transcription enables your app to convert long speech (no longer than 5 hours) into text in real time. The generated text contains punctuation marks and timestamps.

| Parameter               | Type                                      | Definition                                                                                                                                                                            |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rttReq` | [`rttReq`](#rttReq) | Represents the parameter required for the RTT analyzer. |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | It is called when the function is executed successfully. It returns the conversion results. |

##### Data Types

###### rttReq

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `mLSpeechRealTimeTranscriptionConfig` |  [`mLSpeechRealTimeTranscriptionConfig`](#mLSpeechRealTimeTranscriptionConfig)  | Real-time transcription configuration parameters. |

###### mLSpeechRealTimeTranscriptionConfig

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `language` | `MLRttLanguages`  | Set languages. Currently, Mandarin Chinese, English, and French are supported. |
| `punctuationEnable` | `boolean`  | Set punctuations. |
| `wordTimeOffsetEnable` | `boolean`  | Set the sentence offset. |
| `sentenceTimeOffsetEnable` | `boolean`  | Set the word offset. |
| `scenes` | `MLRttScenes`  | Set the scenes. |

##### constants

###### MLRttLanguages

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `LAN_ZH_CN` | `string`  | zh-CN |
| `LAN_EN_US` | `string`  | en-US |
| `LAN_FR_FR` | `string`  | fr-FR |
| `LAN_ES_ES` | `string`  | es-ES |
| `LAN_EN_IN` | `string`  | en-IN |
| `LAN_DE_DE` | `string`  | de-DE |

###### MLRttScenes

| Parameter       | Type      | Value                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `SCENES_SHOPPING` | `string`  | shopping |

##### Sample Code

```dart
   function rttAnalyserStart() {
    var rttAnalyserInput = {
        mLSpeechRealTimeTranscriptionConfig: {
            setLanguage: "en-US",
            enablePunctuation: true,
            enableSentenceTimeOffset: true,
            enableWordTimeOffset: true,
        }
    };
    HMSVoiceServiceProvider.rttAnalyserStart(
        rttAnalyserInput,
        function (res) {
            document.getElementById("textView").value = JSON.stringify(res);
            console.log(JSON.stringify(res));

        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
```

#### rttAnalyserStop()

It stops rtt analyser service.                           

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
   function rttAnalyserStop() {
    HMSVoiceServiceProvider.rttAnalyserStop(
        function (res) {
            alert.log(JSON.stringify(res));
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
```

#### getRTTSetting()

 It returns RTT analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getRTTSetting() {
    try {
        alert(await HMSVoiceServiceProvider.getRTTSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getTTSSetting()

 It returns TTS analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getTTSSetting() {
    try {
        alert(await HMSVoiceServiceProvider.getTTSSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getLangDetectionSetting()

 It returns language detection analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getLangDetectionSetting() {
    try {
        alert(await HMSVoiceServiceProvider.getLangDetectionSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### getAFTSetting()

 It returns AFT analyser settings properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<any>` | It is called when the function is executed successfully.|

##### Sample Code

```dart
    async function getAFTSetting() {
    try {
        alert(await HMSVoiceServiceProvider.getAFTSetting());
    } catch (ex) {
        alert(ex)
    }
}
```

#### aftAnalyserClose()

Disables the audio transcription engine to release engine resources.                           

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
  async function aftAnalyserClose() {
    try {
        let result = await HMSVoiceServiceProvider.aftAnalyserClose();
       alert(JSON.stringify(result));
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### asrAnalyserStop()

Pauses a asr analyzer.                           

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
  async function asrAnalyserStop() {
    try {
        let result = await HMSVoiceServiceProvider.asrAnalyserStop();
       alert(JSON.stringify(result));
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### aftAnalyserPause()

Pauses a long audio transcription task on the cloud.                       

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
  async function aftAnalyserPause() {
    try {
        let result = await HMSVoiceServiceProvider.aftAnalyserPause();
       alert(JSON.stringify(result));
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### aftAnalyserDestroy()

 Resumes a long audio transcription task on the cloud.                        

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
  async function aftAnalyserDestroy() {
    try {
        let result = await HMSVoiceServiceProvider.aftAnalyserDestroy();
       alert(JSON.stringify(result));
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### soundDectAnalyserDestroy()

 Releases sound detector resources.                        

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
  async function soundDectAnalyserDestroy() {
    try {
        let result = await HMSVoiceServiceProvider.soundDectAnalyserDestroy();
       alert(JSON.stringify(result));
    } catch (Ex) {
        alert(Ex);
    }
}
```

#### getDownloadStrategy()

It returns download strategy properties.

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` |A callback function.|

##### Sample Code

```dart
  async function getDownloadStrategy() {
    try {
        let result = await HMSVoiceServiceProvider.getDownloadStrategy();
       alert(JSON.stringify(result));
    } catch (Ex) {
        alert(Ex);
    }
}
```

## 4. Configuration and Description

**Do not forget to add your API_KEY.**

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova ML plugin's ProGuard rules need to be added to your project. These rules are as follows:

```text
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.huawei.hianalytics.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-dontwarn com.huawei.**
-keep class com.huawei.** {*;}
-dontwarn org.slf4j.**
-keep class org.slf4j.** {*;}
-dontwarn org.springframework.**
-keep class org.springframework.** {*;}
-dontwarn com.fasterxml.jackson.**
-keep class com.fasterxml.jackson.** {*;}
-repackageclasses
```

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Samples > ML Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

---

## 6. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001) HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 7. Licensing and Terms

Huawei ML Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
