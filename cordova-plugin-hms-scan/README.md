# Cordova Plugin HMS Scan

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
  - [3.1. Functions Overview](#31-functions-overview)
    - [3.1.1. Public Methods](#311-public-methods)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licencing and Terms](#7-licencing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Scan SDK and Cordova platform. It exposes all functionality provided by Huawei Scan SDK.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### 2.1. Creating a Project in AppGallery Connect

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html)  and select **My projects**.
2. Select your project from the project list or create a new one by clicking the **Add Project** button.
3. Go to **Project Setting** > **General information**, and click **Add app**.
If an app exists in the project and you need to add a new one, expand the app selection area on the top of the page and click **Add app**.
4. On the **Add app** page, enter the app information, and click **OK**.

### 2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the  icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page, click **agconnect-services.json** button to download the configuration file.

### 2.3. Cordova

1. Install Cordova CLI.

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

5. Install `HMS Scan plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-scan
    ```

    b. Or download the plugin from [Plugin > Scan Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_scan_plugin_path>
    ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.
    - Fill **`build.json`** file according to your keystore information. For example:

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

8. Run the application.

    ```bash
    cordova run android --device
    ```

---

### 2.4. Ionic

1. Install Ionic CLI.

    ```bash
    npm install -g @ionic/cli
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

4. Install `HMS Scan plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-scan
    ```

    b. Or download the plugin from [Plugin > Scan Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_scan_plugin_path>
    ```

5. Copy **hms-scan** folder from **`node_modules/@hmscore/cordova-plugin-hms-scan/ionic/wrapper/dist`** directory to **`node_modules/@ionic-native`** directory.

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.

    - Fill **`build.json`** file according to your keystore information. For example:

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

8. Run the application.

   ```bash
   ionic cordova run android --device
   ```

#### 2.4.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Update the widget **`appId`** property which is specified in the **`capacitor.config.json`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

3. Install `HMS Scan plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-scan
    ```

   b. Or download the plugin from [Plugin > Scan Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_scan_plugin_path>
    ```

4. Copy **hms-scan** folder from **`node_modules/@hmscore/cordova-plugin-hms-scan/ionic/wrapper/dist`** directory to **`node_modules/@ionic-native`** directory.

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

7. Copy **`keystore(.jks)`** and **`agconnect-services.json`** files to **`<project_root>/android/app`** directory.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.

8. Open the **`build.gradle`** file in the **`<project_root>/android/app`** directory.

    - Add `signingConfigs` entry to **android** according to your keystore information.
    - Enable `signingConfig` configuration to **debug** and **release** flavors.
    - Apply `com.huawei.agconnect` plugin.

    ```groovy
    ...

    android {

        ...

        // Add signingConfigs according to your keystore information
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
                signingConfig signingConfigs.config // Enable signingConfig in debug flavor
            }
            release {
                signingConfig signingConfigs.config // Enable signingConfig in release flavor
                minifyEnabled false
                proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            }
        }
    }

    ...

    apply plugin: 'com.huawei.agconnect' // Apply com.huawei.agconnect plugin. This line must be added to the end of the file.
    ```

9. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories** and **agconnect classpath** to the file.

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
            classpath 'com.huawei.agconnect:agcp:1.4.1.300'
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

10. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. API Reference

### 3.1. Functions Overview

| Return Type    | Function                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Promise\<any>  | [requestPermissions(permissionList)](#3111-promiseany-hmsscanrequestpermissionspermissionlist)                                       | Obtains the necessary permissions to use the services.                                                                                                                                                                                                                                                                                                                                                                                       |
| Promise\<any>  | [checkPermissions(permissionList)](#3112-promiseany-hmsscancheckpermissionspermissionlist)                                           | It chekcs the permissions required o use the services.                                                                                                                                                                                                                                                                                                                                                                                       |
| Promise\<any>  | [defaultViewMode(defaultViewModeRequest)](#3113-promiseany-hmsscandefaultviewmodedefaultviewmoderequest)                             | In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used. You do not need to worry about designing a UI as Scan Kit provides one.                                                                                                                                                                                                                  |
| Promise\<any>  | [customViewMode(customViewModeRequest)](#3114-promiseany-hmsscancustomviewmodecustomviewmoderequest)                                 | In Customized View mode, you do not need to worry about developing the scanning process or camera control. Scan Kit will do all these tasks for you. However, you will need to design the scanning UI.                                                                                                                                                                                                                                       |
| Callback       | [multiProcessorSynMode(multiProcessorSynModeRequest)](#3115-promiseany-hmsscanmultiprocessorsynmodemultiprocessorsynmoderequest)     | Scan Kit in MultiProcessor mode scans multiple barcodes simultaneously. The MultiProcessor mode is less capable than the other three modes in processing efficiency. You are advised to use the MultiProcessor mode only when simultaneous scanning is required.Scan Kit in MultiProcessor mode with Synchronous scans multiple barcodes simultaneously.                                                                                     |
| Callback       | [multiProcessorAsynMode(multiProcessorAsynModeRequest)](#3116-promiseany-hmsscanmultiprocessorasynmodemultiprocessorasynmoderequest) | Scan Kit in MultiProcessor mode scans multiple barcodes simultaneously. The MultiProcessor mode is less capable than the other three modes in processing efficiency. You are advised to use the MultiProcessor mode only when simultaneous scanning is required.Scan Kit in MultiProcessor mode with Asynchronous scans multiple barcodes simultaneously.                                                                                    |
| Promise\<any>  | [asynModeWithImage(asynModeWithImageRequest)](#3117-promiseany-hmsscanasynmodewithimageasynmodewithimagerequest)                     | This service works asynchronously, defines the bitmap given as a parameter and returns the Scan results.                                                                                                                                                                                                                                                                                                                                     |
| Promise\<any>  | [synModeWithImage(synModeWithImageRequest)](#3117-promiseany-hmsscanasynmodewithimageasynmodewithimagerequest)                       | This service works synchronously, defines the bitmap given as a parameter and returns the Scan results.                                                                                                                                                                                                                                                                                                                                      |
| Promise\<any>  | [decodeWithBitmap(decodeWithBitmapRequest)](#3119-promiseany-hmsscandecodewithbitmapdecodewithbitmaprequest)                         | The service recognition scanning barcodes from images in Bitmap mode.                                                                                                                                                                                                                                                                                                                                                                        |
| Promise\<any>  | [generateBarcode(generateBarcodeRequest)](#31110-promiseany-hmsscangeneratebarcodegeneratebarcoderequest)                            | Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec.                                                                                                                                                                                                                                       |
| Promise\<any>  | [bitmapMode(bitmapModeInput)](#31111-promiseany-hmsscanbitmapmodebitmapmoderequest)                                                  | In Bitmap mode, barcodes can be scanned using the camera or from images, which you can specify when calling the scanning API. If you choose to scan barcodes using the camera, camera control capabilities required for scanning should be developed by yourself. For the two barcode scanning ways, Scan Kit provides optimized scanning algorithms. Choosing the one that suits your needs best will provide you with the best experience. |
| Promise\<void> | [enableLogger()](#31112-promisevoid-hmsscanenablelogger)                                                                             | This method enables HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.                                                                                                                                                                                                                                                                                                     |
| Promise\<void> | [disableLogger()](#31113-promisevoid-hmsscandisablelogger)                                                                           | This method disables HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.                                                                                                                                                                                                                                                                                                    |

#### 3.1.1. Public Methods

##### 3.1.1.1. Promise\<any> HMSScan.requestPermissions(permissionList)

Obtains the necessary permissions to use the services.

###### 3.1.1.1.1. Parameters

| Name           | Description     |
| -------------- | --------------- |
| permissionList | Permission List |

###### 3.1.1.1.2. Call Example

```javascript
async function requestPermissions() {
    try {
        await HMSScan.requestPermissions({
            permissionList: ["CAMERA", "READ_EXTERNAL_STORAGE"],
        });
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.2. Promise\<any> HMSScan.checkPermissions(permissionList)

It chekcs the permissions required o use the services.

###### 3.1.1.2.1. Parameters

| Name           | Description     |
| -------------- | --------------- |
| permissionList | Permission List |

###### 3.1.1.2.2. Call Example

```javascript
async function checkPermissions() {
    var permissionListInput = {
        permissionList: ["CAMERA", "READ_EXTERNAL_STORAGE"],
    }
    try {
        const result = await HMSScan.hasPermissions(permissionListInput);
        alert("Camera Permission:" + result.CAMERA.hasPermission );
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}
```

##### 3.1.1.3. Promise\<any> HMSScan.defaultViewMode(defaultViewModeRequest)

In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used. You do not need to worry about designing a UI as Scan Kit provides one.

###### 3.1.1.3.1. Parameters

| Name                 | Description                                             |
| -------------------- | ------------------------------------------------------- |
| defaultViewModeInput | Contains the settings of the default view mode service. |

###### 3.1.1.3.2. Call Example

```javascript
async function defaultViewMode() {
    try {
        const defaultViewModeInput = {
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.defaultViewMode(defaultViewModeInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.4. Promise\<any> HMSScan.customViewMode(customViewModeRequest)

In Customized View mode, you do not need to worry about developing the scanning process or camera control. Scan Kit will do all these tasks for you. However, you will need to design the scanning UI.  

###### 3.1.1.4.1. Parameters

| Name                | Description                                            |
| ------------------- | ------------------------------------------------------ |
| customViewModeInput | Contains the settings of the custom view mode service. |

###### 3.1.1.4.2. Call Example

```javascript
async function customViewMode() {
    try {
        const customViewModeInput = {
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
            scanAreaWidth: 240,
            scanAreaHeight: 240,
            enableFlushButton: true,
            enablePictureButton: false,
            scanAreaText: "Place the code within the frame",
        };
        let result = await HMSScan.customViewMode(customViewModeInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.5. Promise\<any> HMSScan.multiProcessorSynMode(multiProcessorSynModeRequest)

Scan Kit in MultiProcessor mode scans multiple barcodes simultaneously. The MultiProcessor mode is less capable than the other three modes in processing efficiency. You are advised to use the MultiProcessor mode only when simultaneous scanning is required. Scan Kit in MultiProcessor mode with Synchronous scans multiple barcodes simultaneously.  

###### 3.1.1.5.1. Parameters

| Name                       | Description                                                     |
| -------------------------- | --------------------------------------------------------------- |
| multiProcessorSynModeInput | Contains the settings of the Multi processor Sync mode service. |

###### 3.1.1.5.2. Call Example

```javascript
function multiProcessorSynMode() {
    const multiProcessorSynModeInput = {
        scanAreaWidth: 240,
        scanAreaHeight: 240,
        enablePhotoButton: true,
        enableScanArea: true,
        textColor: HMSScan.Colors.WHITE,
        textSize: 30,
        strokeWidth: 10,
        rectColor: HMSScan.Colors.BLACK,
        scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
        rectStyle: 0,
    };
    HMSScan.multiProcessorSynMode(
        multiProcessorSynModeInput,
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) {
            console.log(JSON.stringify(err));
        }
    );
}
```

##### 3.1.1.6. Promise\<any> HMSScan.multiProcessorAsynMode(multiProcessorAsynModeRequest)

Scan Kit in MultiProcessor mode scans multiple barcodes simultaneously. The MultiProcessor mode is less capable than the other three modes in processing efficiency. You are advised to use the MultiProcessor mode only when simultaneous scanning is required.Scan Kit in MultiProcessor mode with Asynchronous scans multiple barcodes simultaneously.  

###### 3.1.1.6.1. Parameters

| Name                        | Description                                                      |
| --------------------------- | ---------------------------------------------------------------- |
| multiProcessorAsynModeInput | Contains the settings of the Multi processor Async mode service. |

###### 3.1.1.6.2. Call Example

```javascript
function multiProcessorAsynMode() {
    const multiProcessorAsynModeInput = {
        scanAreaWidth: 240,
        scanAreaHeight: 240,
        enablePhotoButton: true,
        enableScanArea: true,
        textColor: HMSScan.Colors.WHITE,
        textSize: 30,
        strokeWidth: 10,
        rectColor: HMSScan.Colors.BLACK,
        scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
        rectStyle: 0,
    };
    HMSScan.multiProcessorAsynMode(
        multiProcessorAsynModeInput,
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) {
            console.log(JSON.stringify(err));
        }
    );
}
```

##### 3.1.1.7. Promise\<any> HMSScan.asynModeWithImage(asynModeWithImageRequest)

This service works asynchronously, defines the bitmap given as a parameter and returns the Scan results.  

###### 3.1.1.7.1. Parameters

| Name                   | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| asynModeWithImageInput | Contains the settings of the Async mode with image service. |

###### 3.1.1.7.2. Call Example

```javascript
async function asynModeWithImage() {
    try {
        const asynModeWithImageInput = {
            filePath: $imageResult,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.asynModeWithImage(asynModeWithImageInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.8. Promise\<any> HMSScan.synModeWithImage(synModeWithImageRequest)

This service works asynchronously, defines the bitmap given as a parameter and returns the scan results.  

###### 3.1.1.8.1. Parameters

| Name                  | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| synModeWithImageInput | Contains the settings of the Sync mode with image service. |

###### 3.1.1.8.2. Call Example

```javascript
async function synModeWithImage() {
    try {
        const synModeWithImageInput = {
            filePath: $imageResult,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.synModeWithImage(synModeWithImageInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.9. Promise\<any> HMSScan.decodeWithBitmap(decodeWithBitmapRequest)

The service recognition scanning barcodes from images in Bitmap mode.  

###### 3.1.1.9.1. Parameters

| Name                  | Description                                       |
| --------------------- | ------------------------------------------------- |
| decodeWithBitmapInput | Contains the settings of the bitmap mode service. |

###### 3.1.1.9.2. Call Example

```javascript
async function decodeWithBitmap() {
    try {
        const decodeWithBitmapInput = {
            filePath: $imageResult,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.decodeWithBitmap(decodeWithBitmapInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.10. Promise\<any> HMSScan.generateBarcode(generateBarcodeRequest)

Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec.  

###### 3.1.1.10.1. Parameters

| Name                 | Description                                              |
| -------------------- | -------------------------------------------------------- |
| generateBarcodeInput | Contains the settings of the barcode generation service. |

###### 3.1.1.10.2. Call Example

```javascript
async function generateBarcode() {
    try {
        const generateBarcodeInput = {
            inputContent: "Huawei Mobile Services",
            barcodeFormat: HMSScan.ScanTypes.QRCODE_SCAN_TYPE,
            barcodeHeight: 800,
            barcodeWidth: 800,
            bitmapBackgroundColor: HMSScan.Colors.WHITE,
            bitmapColor: HMSScan.Colors.BLACK,
            bitmapMargin: 1,
        };
        let result = await HMSScan.generateBarcode(generateBarcodeInput);
        document.getElementById("barcodeImg").src = "data:image/jpeg;base64," + result;
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.11. Promise\<any> HMSScan.bitmapMode(bitmapModeRequest)

In Bitmap mode, barcodes can be scanned using the camera or from images, which you can specify when calling the scanning API. If you choose to scan barcodes using the camera, camera control capabilities required for scanning should be developed by yourself. For the two barcode scanning ways, Scan Kit provides optimized scanning algorithms. Choosing the one that suits your needs best will provide you with the best experience.  

###### 3.1.1.11.1. Parameters

| Name            | Description                                       |
| --------------- | ------------------------------------------------- |
| bitmapModeInput | Contains the settings of the bitmap mode service. |

###### 3.1.1.11.2. Call Example

```javascript
async function bitmapMode() {
    try {
        const bitmapModeInput = {
            scanAreaWidth: 240,
            scanAreaHeight: 240,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
            enableScanArea: true,
            scanTips: "Place the code within the frame",
        };
        let result = await HMSScan.bitmapMode(bitmapModeInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### 3.1.1.12. Promise\<void> HMSScan.enableLogger()

This method enables HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.

###### 3.1.1.12.1. Call Example

```javascript
async function enableLogger() {
    try {
        await HMSScan.enableLogger();
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
```

##### 3.1.1.13. Promise\<void> HMSScan.disableLogger()

This method disables HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.

###### 3.1.1.13.1. Call Example

```javascript
async function disableLogger() {
    try {
        await HMSScan.disableLogger();
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
```

---

## 4. Configuration and Description

No

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Examples > Scan Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

---

## 6. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001) HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 7. Licencing and Terms

Huawei Scan Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
