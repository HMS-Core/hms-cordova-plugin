# HMS Availability Cordova Plugin

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Cordova](#21-cordova)
  - [2.2. Ionic](#22-ionic)
    - [2.2.1. With Cordova Runtime](#221-with-cordova-runtime)
    - [2.2.2. With Capacitor Runtime](#222-with-capacitor-runtime)
- [3. API Reference](#3-api-reference)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Availability SDK and Cordova platform. It exposes all functionality provided by Huawei Availability SDK.

---

## 2. Installation Guide

### 2.1. Cordova

1. Install Cordova CLI.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

  - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Update the widget **`id`** property which is specified in the **`config.xml`** file.
   
4. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

5. Install `HMS Availability Cordova Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-availability
    ```

   b. Or download the plugin from [Plugin > Availability Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_availability_plugin_path>
    ```

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

7. Run the application.

    ```bash
    cordova run android --device
    ```

### 2.2 Ionic

1. Install Ionic CLI.

    ```bash
    npm install -g @ionic/cli
    ```

2. Create a new Ionic project or use existing Ionic project.

  - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

#### 2.2.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

    ```bash
    ionic integrations enable cordova
    ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file.

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

4. Install `HMS Availability Cordova Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-availability
    ```

   b. Or download the plugin from [Plugin > Availability Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_availability_plugin_path>
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-availability
    ```

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

7. Run the application.

   ```bash
   ionic cordova run android --device
   ```

#### 2.2.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Update the widget **`appId`** property which is specified in the **`capacitor.config.json`** file.

3. Install `HMS Availability Cordova Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-availability
    ```

   b. Or download the Plugin from [Plugin > Availability Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_availability_plugin_path>
    ```

4. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-availability
    ```

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

7. Copy **`keystore(.jks)`** file to **`<project_root>/android/app`** directory.

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

10. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. API Reference

### HMSAvailability
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|isHuaweiMobileServicesAvailable(minApkVersion?: number)|`Promise<number>`|Checks whether HMS Core (APK) is successfully installed and integrated on a device, and whether the version of the installed APK is that required by the client or is later than the required version.|
|isHuaweiMobileNoticeAvailable()|`Promise<number>`|Checks whether the HMS Core (APK) version supports notice obtaining.|
|getApiMap()|`Promise<ApiMap>`|Obtains the API version number of each service.|
|getServicesVersionCode()|`Promise<number>`|Obtains the minimum version number of HMS Core that is supported currently.|
|setServicesVersionCode(servicesVersionCode: number)|`Promise<void>`|Sets the minimum version number of HMS Core that is supported currently.|
|isUserResolvableError(errorCode: number)|`Promise<boolean>`|Checks whether an exception is rectified through user operations.|
|getErrorString(errorCode: number)|`Promise<string>`|Displays a readable text result code returned by the isHuaweiMobileServicesAvailable(minApkVersion?: number) method.|
|resolveError(errorCode: number, requestCode: number)|`Promise<void>`|Displays a notification or dialog box is displayed for the returned result code if an exception can be rectified through user operations.|
|showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void)|`Promise<boolean>`|Creates and displays a dialog box for a result code.|
|showErrorNotification(errorCode: number)|`Promise<void>`|Creates and displays a dialog box for a result code.|

#### Public Methods

##### isHuaweiMobileServicesAvailable(minApkVersion?: number)
Checks whether HMS Core (APK) is successfully installed and integrated on a device, and whether the version of the installed APK is that required by the client or is later than the required version.
###### Parameters
|Name|Type|Description|
|---|---|---|
|minApkVersion|number|Earliest version number of HMS Core (APK) required by a service. This parameter is optional.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|A status code.<br>0: HMS Core (APK) is available.<br>1: No HMS Core (APK) is found on the device.<br>2: HMS Core (APK) installed is out of date.<br>3: HMS Core (APK) installed on the device is unavailable.<br>9: HMS Core (APK) installed on the device is not the official version.<br>21: The device is too old to support HMS Core (APK).|
###### Sample Code

```ts
async function sample() {
    const result = await HMSAvailability.isHuaweiMobileServicesAvailable();
    alert(result);
}
```

##### isHuaweiMobileNoticeAvailable()
Checks whether the HMS Core (APK) version supports notice obtaining.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|A status code.<br>0: The version of HMS Core (APK) supports notice obtaining.<br>2: HMS Core (APK) installed is out of date.|
###### Sample Code
```ts
async function sample() {
    const result = await HMSAvailability.isHuaweiMobileNoticeAvailable();
    alert(result);
}
```

##### getApiMap()
Obtains the API version number of each service.
###### Return Type
|Type|Description|
|---|---|
|`Promise<ApiMap>`|Object that contains an API version number of each service.|
###### Sample Code
```ts
async function sample() {
    const result = await HMSAvailability.getApiMap();
    alert(JSON.stringify(result));
}
```

##### getServicesVersionCode()
Obtains the minimum version number of HMS Core that is supported currently.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Minimum version number of HMS Core that is supported currently.|
###### Sample Code
```ts
async function sample() {
    const code = await HMSAvailability.getServicesVersionCode();
    alert(code);
}
```

##### setServicesVersionCode(servicesVersionCode: number)
Sets the minimum version number of HMS Core that is supported currently.
###### Parameters
|Name|Type|Description|
|---|---|---|
|servicesVersionCode|number|Minimum version number of HMS Core that is supported currently.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise object.|
###### Sample Code
```ts
async function sample() {
    await HMSAvailability.setServicesVersionCode(50000000);
    const newVersionCode = await HMSAvailability.getServicesVersionCode();
    alert(newVersionCode);
}
```

##### isUserResolvableError(errorCode: number)
Checks whether an exception is rectified through user operations.
###### Parameters
|Name|Type|Description|
|---|---|---|
|errorCode|number|Result code.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if a solution is available; false otherwise.|
###### Sample Code
```ts
async function sample() {
    const result = await HMSAvailability.isUserResolvableError(1);
    alert(result);
}
```

##### getErrorString(errorCode: number)
Displays a readable text result code returned by the isHuaweiMobileServicesAvailable(minApkVersion?: number) method.
###### Parameters
|Name|Type|Description|
|---|---|---|
|errorCode|number|Result code.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<string>`|Result code description.|
###### Sample Code
```ts
async function sample() {
    const result = await HMSAvailability.getErrorString(2);
    alert(result);
}
```

##### resolveError(errorCode: number, requestCode: number)
Displays a notification or dialog box is displayed for the returned result code if an exception can be rectified through user operations.
###### Parameters
|Name|Type|Description|
|---|---|---|
|errorCode|number|Result code. If the value of isUserResolvableError is true for a result code, the system supports exception rectification through user operations.|
|requestCode|number|Request code, which is used for transparent transmission.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise object.|
###### Sample Code
```ts
async function sample() {
    await HMSAvailability.resolveError(2, 111);
}
```

##### showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void)
Creates and displays a dialog box for a result code.
###### Parameters
|Name|Type|Description|
|---|---|---|
|errorCode|number|Result code returned by the isHuaweiMobileServicesAvailable(minApkVersion?: number) method.|
|requestCode|number|Request code, which is used for transparent transmission.|
|cancelListener|function|Processing when the dialog is canceled. This parameter is optional.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if a dialog box is displayed; false otherwise.|
###### Sample Code
```ts
async function sample() {
    const errorCode = 2;
    const requestCode = 111;
    const result = await HMSAvailability.showErrorDialogFragment(errorCode, requestCode, () => {
        alert('OnCancel called');
    });
    alert(result);
}
```

##### showErrorNotification(errorCode: number)
Creates and displays a dialog box for a result code.
###### Parameters
|Name|Type|Description|
|---|---|---|
|errorCode|number|Result code returned by the isHuaweiMobileServicesAvailable(minApkVersion?: number) method.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise object.|
###### Sample Code
```ts
async function sample() {
    await HMSAvailability.showErrorNotification(2);
}
```

### ApiMap
Object that contains an API version number of each service.

|Field|Type|Description|
|---|---|---|
|HuaweiIap.API|number|Version number of the HUAWEI IAP service.|
|HuaweiID.API|number|Version number of the HUAWEI ID service.|
|HuaweiGame.API|number|Version number of the HUAWEI Game service.|
|HuaweiPay.API|number|Version number of the HUAWEI Pay service.|
|HuaweiSns.API|number|Version number of the SNS service.|
|HuaweiOpenDevice.API|number|Version number of the open device service.|
|HuaweiPPSkit.API|number|Version number of the HUAWEI PPS service.|
|HuaweiPush.API|number|Version number of the HUAWEI Push service.|

---

## 4. Configuration and Description

### Preparing for Release

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default, obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the HMS Cordova Availability Plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

You can find the sample projects on [HMS Core > Examples > Availability Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

HMS Availability Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
