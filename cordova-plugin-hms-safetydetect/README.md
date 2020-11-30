# Cordova Plugin HMS Safety Detect

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
  - [3.2. Constants](#32-constants)
  - [3.3. Data Types](#33-data-types)
  - [3.4. Result Codes](#34-result-codes)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Safety Detect SDK and Cordova platform. It exposes all functionality provided by Huawei Safety Detect SDK.

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

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

4. Install `HMS Safety Detect plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-safetydetect
    ```

    b. Or download the plugin from [Plugin > Safety Detect Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_safetydetect_plugin_path>
    ```

5. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

6. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

7. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

8. Run the application.

    ```bash
    cordova run android --device
    ```

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

4. Install `HMS Safety Detect plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-safetydetect
    ```

    b. Or download the plugin from [Plugin > Safety Detect Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_safetydetect_plugin_path>
    ```

5. Copy **hms-safety-detect** folder from **`node_modules/@hmscore/cordova-plugin-hms-safetydetect/ionic/dist/hms-safety-detect`** directory to **`node_modules/@ionic-native`** directory.

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

3. Install `HMS Safety Detect plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-safetydetect
    ```

   b. Or download the plugin from [Plugin > Safety Detect Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_safetydetect_plugin_path>
    ```

4. Copy **hms-safety-detect** folder from **`node_modules/@hmscore/cordova-plugin-hms-safetydetect/ionic/dist/hms-safety-detect`** directory to **`node_modules/@ionic-native`** directory.

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

## 3. API Reference

### 3.1. Functions Overview
| Return Type |Function |Description |
|---------------------|---------------------|-----------------------|
|Promise\<EnableAppsCheckResult\>|enableAppsCheck()|Enables app security check.|
|Promise\<VerifyAppsCheckResult\>|isVerifyAppsCheck()|Checks whether app security check is enabled.|
|Promise\<HMSMaliciousAppsData[]\>|getMaliciousAppsList()|Initiates an app security check request.|
|Promise\<string\>|sysIntegrity(nonce, appId)|Initiates a request to check the system integrity of the current device.|
|Promise\<void\>|initUrlCheck()|Initializes URL check.|
|Promise\<HMSUrlCheckThreatConstants[]\>|urlCheck(url, appId, urlCheckThreats)|Initiates a URL check request.|
|Promise\<void\>|shutdownUrlCheck()|Disables URL check.|
|Promise\<void\>|initUserDetect()|Initializes fake user detection.|
|Promise\<string\>|userDetection(appId)|Initiates a fake user detection request.|
|Promise\<void\>|shutdownUserDetect()|Disables fake user detection.|
|Promise\<void\>|initAntiFraud(appId)|Initializes imperceptible fake user detection.|
|Promise\<string\>|getRiskToken()|Obtains a risk token.|
|Promise\<void\>|releaseAntiFraud()|Disables imperceptible fake user detection.|
|Promise\<HMSWifiDetectResponse\>|getWifiDetectStatus()|Obtains the malicious Wi-Fi check result.|
|Promise\<void\>|enableLogger()|Enables logger.|
|Promise\<void\>|disableLogger()|Disables logger.|
#### 3.1.1. Public Methods

##### enableAppsCheck()

This API is called for enabling app security check.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<EnableAppsCheckResult\> | Result of enabling app security check.(App security check is enabled by default and cannot be disabled. Therefore, the value true is always returned.) |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.enableAppsCheck();
    alert("enableAppsCheck => success!");
  } catch (error) {
    alert("enableAppsCheck => Error!" + error);
  }
```

##### isVerifyAppsCheck()

This API is called for checking whether app security check is enabled.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<VerifyAppsCheckResult\> | Whether app security check is enabled. (App security check is enabled by default and cannot be disabled. Therefore, the value true is always returned.)  |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.isVerifyAppsCheck();
    alert("isVerifyAppsCheck => success!");
  } catch (error) {
    alert("isVerifyAppsCheck => Error!" + error);
  }
```

##### getMaliciousAppsList()

This API is called for initiate an app security check request.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<HMSMaliciousAppsData[]\> | App security check result. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.getMaliciousAppsList();
    alert("getMaliciousAppsList => success ::" + JSON.stringify(res));
  } catch (error) {
    alert("getMaliciousAppsList => Error!" + error);
  }
```

##### sysIntegrity(nonce, appId)

This API is called for initiate a request to check the system integrity of the current device.

###### Parameters

| Name | Type | Description |
|----------------|----------|-----------|
| nonce | string|Cryptographic nonce value, which is used to prevent replay attacks. Nonce value is a random value that is generated anew for each use.
| appId | string| App ID applied in AppGallery Connect. HMS Core (APK) needs to authenticate the app ID. You need to enable the Safety Detect service on the Manage APIs page in AppGallery Connect. Since you have created an app during development preparations, you can obtain appId of the app on HUAWEI Developers as described in Configuring the Signing Certificate Fingerprint and transfer it to the API as the second input parameter.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<string\> | System integrity check result. |

###### Call Example
```ts
  const nonce = "Sample" + Date.now();
  try {
    const jws = await HMSSafetyDetect.sysIntegrity(nonce, appId);
    jwsPayloadStr = JSON.stringify(jws).split(".")[1];
    var jsonPayload = decodeURIComponent(
      atob(jwsPayloadStr.replace(/-/g, "+").replace(/_/g, "/"))
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    alert("sysIntegrity => success! :: " + JSON.stringify(jsonPayload));
  } catch (error) {
    alert("sysIntegrity => Error! " + error);
  }
```

##### initUrlCheck()

This API is called for initialize URL check.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.initUrlCheck();
    alert("initUrlCheck => success!");
  } catch (error) {
    alert("initUrlCheck => Error!" + error);
  }
```

##### urlCheck(url, appId, urlCheckThreats)

This API is called for initiate a URL check request.

###### Parameters

| Name | Type | Description |
|----------------|----------|-----------|
| url | string|URL to check, including the protocol, host, and path but excluding query parameters. The SDK will discard all passed query parameters.
| appId | string| App ID applied in AppGallery Connect. HMS Core (APK) needs to authenticate the app ID. You need to enable the Safety Detect service on the Manage APIs page in AppGallery Connect. Since you have created an app during development preparations, you can obtain appId of the app on HUAWEI Developers as described in Configuring the Signing Certificate Fingerprint and transfer it to the API as the second input parameter.
| urlCheckThreats | HMSUrlCheckThreatConstants[]|Concerned threat types for URLs to check.

###### Return Type
|Type  | Description|
|----------------|---------------------|
| Promise\<HMSUrlCheckThreatConstants[]\>  | URL check result. |

###### Call Example
```ts
  var threats = [
    HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_MALWARE,
    HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_PHISHING,
  ];
  try {
    const res = await HMSSafetyDetect.urlCheck(url, appId, threats);
    if (res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_MALWARE) && res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_PHISHING) ) {
      alert("urlCheck => success! => Phishing and Mallware detected " + "for url:" + url);
    } else if (res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_MALWARE))  {
      alert("urlCheck => success! => Malware detected " + "for url:" + url);
    }else if (res.includes(HMSSafetyDetect.HMSUrlCheckThreatConstants.HMS_PHISHING))  {
      alert("urlCheck => success! => Phishing detected " + "for url:" + url);
    } else {
      alert("urlCheck => success! => No threats detected! " + "for url:" + url);
    }
  } catch (error) {
    alert("urlCheck => Error!" + error);
    console.log("urlCheck => Error!" + error);
  }
```

##### shutdownUrlCheck()

This API is called for disabling URL check.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.shutdownUrlCheck();
    alert("shutdownUrlCheck => success!");
  } catch (error) {
    alert("shutdownUrlCheck => Error!" + error);
  }
```

##### initUserDetect()

This API is called for initialize fake user detection.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.initUserDetect();
    alert("initUserDetect => success! " + JSON.stringify(res));
  } catch (error) {
    alert("initUserDetect => Error! " + error);
  }
```

##### userDetection(appId)

This API is called for initiate fake user detection.

###### Parameters

| Name | Type | Description |
|----------------|----------|-----------|
| appId | string| App ID applied in AppGallery Connect. HMS Core (APK) needs to authenticate the app ID. You need to enable the Safety Detect service on the Manage APIs page in AppGallery Connect. Since you have created an app during development preparations, you can obtain appId of the app on HUAWEI Developers as described in Configuring the Signing Certificate Fingerprint and transfer it to the API as the second input parameter.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<string\>  | Result of fake user detection. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.userDetection(appId);
    alert("userDetect => success! " + JSON.stringify(res));
  } catch (error) {
    alert("userDetect => Error! " + error);
  }
```

##### shutdownUserDetect()

This API is called for disabling fake user detection.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.shutdownUserDetect();
    alert("shutdownUserDetect => success! " + JSON.stringify(res));
  } catch (error) {
    alert("shutdownUserDetect => Error! " + error);
  }
```

##### initAntiFraud(appId)

This API is called for initialize imperceptible fake user detection.

###### Parameters

| Name | Type | Description |
|----------------|----------|-----------|
| appId | string| App ID applied in AppGallery Connect. HMS Core (APK) needs to authenticate the app ID. You need to enable the Safety Detect service on the Manage APIs page in AppGallery Connect. Since you have created an app during development preparations, you can obtain appId of the app on HUAWEI Developers as described in Configuring the Signing Certificate Fingerprint and transfer it to the API as the second input parameter.

###### Return Type

|Type | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.initAntiFraud(appId);
    alert("initAntiFraud => success! " + JSON.stringify(res));
  } catch (error) {
    alert("initAntiFraud => Error! " + error);
  }
```

##### getRiskToken()

This API is called for obtain a risk token.

###### Return Type

|Type | Description|
|----------------|---------------------|
| Promise\<string\>  | Risk token. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.getRiskToken();
    alert("getRiskToken => success! " + JSON.stringify(res));
  } catch (error) {
    alert("getRiskToken => Error! " + error);
  }
```

##### releaseAntiFraud()

This API is called for disabling imperceptible fake user detection.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.releaseAntiFraud();
    alert("releaseAntiFraud => success! " + JSON.stringify(res));
  } catch (error) {
    alert("releaseAntiFraud => Error! " + error);
  }
```

##### getWifiDetectStatus()

This API is called for obtain the Wi-Fi detection result.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<HMSWifiDetectResponse\> | Security status of the current Wi-Fi. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.getWifiDetectStatus();
    alert("getWifiDetectStatus => " + HMSSafetyDetect.HMSWifiDetectResponse[res]);
  } catch (error) {
    alert("getWifiDetectStatus => Error! " + error);
  }
```

##### enableLogger()

This API is called for enabling HMS logger.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.enableLogger();
    alert("enableLogger => success! ");
  } catch (error) {
    alert("enableLogger => Error! " + error);
  }
```

##### disableLogger()

This API is called for disabling HMS logger.

###### Return Type

|Type  | Description|
|----------------|---------------------|
| Promise\<void\> |If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Call Example
```ts
  try {
    const res = await HMSSafetyDetect.disableLogger();
    alert("disableLogger => success! " );
  } catch (error) {
    alert("disableLogger => Error! " + error);
  }
```
### 3.2. Constants

#### Enum HMSAppsCheckConstants
|Field|Value|Description|
|---|---|---|
|HMS_VIRUS_LEVEL_RISK|1|Risky app. |
|HMS_VIRUS_LEVEL_VIRUS|2|Virus app. |

#### Enum HMSUrlCheckThreatConstants
|Field|Value|Description|
|---|---|---|
|HMS_MALWARE|1|Threat type MALWARE. |
|HMS_PHISHING|3|Threat type PHISHING. |

#### Enum HMSWifiDetectResponse
|Field|Value|Description|
|---|---|---|
|HMS_NO_WIFI|0|No Wi-Fi is connected. |
|HMS_SECURE_WIFI|1|The Wi-Fi is secure. |
|HMS_INSECURE_WIFI|2|The Wi-Fi is insecure. |

### 3.3. Data Types

#### VerifyAppsCheckResult
|Field|Type|Description|
|---|---|---|
|verifyAppsCheck|`boolean`|true: App security check is enabled. false: App security check is not enabled. |

#### EnableAppsCheckResult
|Field|Type|Description|
|---|---|---|
|enableAppsCheck|`boolean`|true: App security check enabled successfully. false: App security check could not enabled. |

#### HMSMaliciousAppsData
|Field|Type|Description|
|---|---|---|
|apkPackageName|`string`|Package name of a malicious app. |
|apkCategory|`HMSAppsCheckConstants`| Type of a malicious app. |
|apkSha256|`string`| Base64 encoding result of the SHA-256 value of a malicious app. |

### 3.4. Result Codes

|Result Code|Value|Description|Solution|
|---|---|---|---|
|SDK_INTERNAL_ERROR|19001|HMS Core SDK internal error.|Go to Support > Customer Service > Submit Question Online, select the relevant topic, and submit your question. Huawei will get back to you as soon as possible.|
|NETWORK_ERROR|19002|Network exception.|Verify that your phone has access to the Internet.|
|UNSUPPORTED_AREA|19003|The API is unavailable in this region.|Verify that this API is supported in the region where the user is located.|
|INVALID_APPID_APPCHECK|19004|Invalid app ID in the request.|Verify that the app ID in the request is valid.|
|UNSUPPORTED_EMUI_VERSION|19202|The HMS Core (APK) version on the user device does not support the Safety Detect service.|Update HMS Core (APK) to the latest version.|
|APPS_CHECK_FALIED_VIRUS_NUMBER_EXCEEDED|19402|The number of apps to check exceeds the maximum allowed by AppCheck.|Reduce the number of apps to check.|
|PARAM_ERROR_EMPTY|19150|A mandatory parameter in the request is empty.|Verify that all mandatory parameters in the request are correctly set.|
|PARAM_ERROR_INVALID|19151|Parameter verification failed.|Verify that parameters in the request are valid.|
|APPS_CHECK_INTERNAL_ERROR|19401|An internal error occurred during app security check.|Contact Huawei technical support.|
|URL_CHECK_INNER_ERROR|19600|An internal error occurred during malicious URL check.|Contact Huawei technical support.|
|CHECK_WITHOUT_INIT|19601|URLCheck initialization failed.|Call the initUrlCheck() API first to initialize URLCheck.|
|URL_CHECK_THREAT_TYPE_INVALID|19602|The URLCheck API does not support the passed URL categories. Currently, Safety Detect can only identify phishing and malware URLs.|Verify that the passed URL categories are valid.|
|URL_CHECK_REQUEST_PARAM_INVALID|19603|Invalid parameters for calling urlCheck.|Verify that relevant parameters are valid.|
|URL_CHECK_REQUEST_APPID_INVALID|19604|The app ID passed for calling urlCheck is invalid.|Verify that the passed app ID is valid.|
|DETECT_FAIL|19800|Fake user detection failed.|Try again. If the detection fails for three times, risks exist.|
|USER_DETECT_TIMEOUT|19801|Fake user detection timed out, for example, when the user enters the verification code.|Try again.|
|USER_DETECT_INVALID_APPID|19802|The app ID passed for calling userDetection is invalid.|Verify that the passed app ID is valid.|
|ANTI_FRAUD_INIT_FAIL|19820|Failed to initialize imperceptible fake user detection.|Contact Huawei technical support.|
|ANTI_FRAUD_INIT_PARAM_INVALID|19821|The app ID passed to the initAntiFraud API is incorrect.|Verify the passed parameter.|
|RISK_TOKEN_GET_FAIL|19830|Failed to obtain the risk token.|Initializes the API again.|
|RISK_TOKEN_INNER_ERROR|19831|An internal error occurred on the API for obtaining a risk token.|Contact Huawei technical support.|
|DEVICE_VERIFY_INNER_ERROR|19840|Failed to verify the device identity.|Call the DeviceVerify API again.|
|DEVICE_VERIFY_NOT_SUPPORT|19841|Device identity verification is not supported.|-|
|UNKNOWN_ERROR_STATUS_CODE|-1|Unkown error code.|-|


---

## 4. Configuration and Description

### Preparing for Release

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Safety Detect plugin's ProGuard rules need to be added to your project. These rules are as follows:

```
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.hianalytics.android.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-repackageclasses
```

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Examples > Safety Detect Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Safety Detect Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
