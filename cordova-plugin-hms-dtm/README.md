# Cordova Plugin HMS DTM

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
   - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
   - [2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json](#22-configuring-the-signing-certificate-fingerprint-and-obtaining-agconnect-servicesjson)
   - [2.3. Cordova](#23-cordova)
   - [2.4. Ionic](#24-ionic)
     - [2.4.1. With Cordova Runtime](#241-with-cordova-runtime)
     - [2.4.2. With Capacitor Runtime](#242-with-capacitor-runtime)
   - [2.5. Operations on the Server](#25-operations-on-the-server)
- [3. API Reference](#3-api-reference)
    - [3.1. Functions Overview](#31-functions-overview)
     - [3.1.1. Public Methods](#311-public-methods)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

**HUAWEI Dynamic Tag Manager** (DTM) is a dynamic tag management system. With DTM, it allows you to dynamically update its tags in a web-based user interface to track specific events and report them to third-party analytics platforms, as well as tracking types of marketing activities.

You must integrate the third-party analytics platform you want to use in your application. Huawei DTM Plugin allows you to report to other platforms simultaneously via Custom Tags.

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

4. Install `HMS Dtm plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-dtm
    ```

    b. Or download the plugin from [Plugin > Dtm Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_dtm_plugin_path>
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

4. Install `HMS Dtm plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-dtm
    ```

    b. Or download the plugin from [Plugin > Dtm Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_dtm_plugin_path>
    ```

5. Copy **hms-dtm** folder from **`node_modules/@hmscore/cordova-plugin-hms-dtm/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

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

3. Install `HMS Dtm plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-dtm
    ```

   b. Or download the plugin from [Plugin > Dtm Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_dtm_plugin_path>
    ```

4. Copy **hms-dtm** folder from **`node_modules/@hmscore/cordova-plugin-hms-dtm/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

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

### 2.5. Operations on the Server

​		To access the DTM portal, follow the steps in [Operations on the Server](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/android-permission-0000001056203546).

## 3. API Reference

#### 3.1. Functions Overview

| Method                                       | Return Type              | Description               |
| -------------------------------------------- | ------------------------ |-------------------------- |
| onEvent(eventName,bundleObject)           | Promise\<boolean>        | Reports an event.|
| setCustomVariable(customVariableObject) | Promise\<boolean> | This method sets the value that will be returned for a custom variable created in the DTM console. |
| onCustomTag(() => {})                        | Promise\<object>       | This method Listen ICustomTag interface class and return an object when interfaces triggered. |
| enableLogger()                               | Promise\<boolean>        | This method enables HMSLogger capability which is used for sending usage analytics of DTM SDK's methods to improve the service quality. |
| disableLogger()                              | Promise\<boolean>        | This method disables HMSLogger capability which is used for sending usage analytics of DTM SDK's methods to improve the service quality. |

#### 3.1.1. Public Methods

##### HMSDtm.onEvent(eventName,bundleObject)

This API is called to record events.

###### Parameters

| Name         | Type   | Description                                                  |
| ------------ | -------| ------------------------------------------------------------ |
| eventName    | string | ID of a customized event. The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore. The value of this parameter cannot be an ID of an automatically collected event. |
| bundleObject | [BundleObject](#bundleObject) | Information carried by the event. The number of built-in key-value pairs in the bundleObject cannot exceed 2048 and the size cannot exceed 200 KB. A value supports the following data types : number,string, boolean. |

###### BundleObject

| Type                  | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| object                | Contains a key-value pairs. Key must be string and values can be: number , string  or boolean |
###### Call Example

```
const eventName = "Shopping"
const bundleObject = {
    "price":"25",
    "type":"jeans"
}
HMSDtm.onEvent(eventName,bundleObject)
  .then((result) => console.log("onEvent ", result))
  .catch((error) => console.log("onEvent ", error));
```

###### Example Response

```
true
```

##### HMSDtm.setCustomVariable(customVariableObject)

This method sets the value that will be returned for a custom variable created in the DTM console.

###### Parameters

| Name                 | Type                                          | Description                                                  |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| customVariableObject | [CustomVariableObject](#customvariableobject) | CustomVariableObject is an object returned to the server for CustomVariable. The size of the bundleObject in the CustomVariableObject  cannot exceed 200 KB. |

###### CustomVariableObject

| Name    | Type                  | Description                                                  |
| ------- | --------------------- | ------------------------------------------------------------ |
| varName | string                | varName is the name returned to the server for CustomVariable. |
| value   | number,string,boolean | The value is the value returned to the server for CustomVariable. |

###### Call Example

```
const customVariableObject={
	"varName":"CustomVariable"
	"value":20
}
HMSDtm.setCustomVariable(customVariableObject)
```

###### Example Response

```
true
```

##### HMSDtm.onCustomTag((result) => {})

This method listening ICustomTag interface class. If CustomTag class triggered, this listener returns an object that contains CustomTag variables.

###### Call Example

```
HMSDtm.onCustomTag((result) => {
	console.log(JSON.stringfy(result))
})
```

###### Example Response

```
{
	"price":"40",
	"value":"50",
	"eventName":"custom"
}
```

##### HMSDtm.enableLogger()

This method enables HMSLogger capability which is used for sending usage analytics of DTM SDK's methods to improve the service quality.

###### Call Example

```
HMSDtm.enableLogger()
  .then((result) => console.log("enableLogger ", result))
  .catch((error) => console.log("enableLogger ", error));
```

###### Example Response

```
true
```

##### HMSDtm.disableLogger()

This method disables HMSLogger capability which is used for sending usage analytics of DTM SDK's methods to improve the service quality.

###### Call Example

```
HMSDtm.disableLogger()
  .then((result) => console.log("disableLogger ", result))
  .catch((error) => console.log("disableLogger ", error));
```

###### Example Response

```
true
```
---

## 4. Configuration and Description

### Preparing for Release

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova DTM plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

### Importing a DTM Configuration File

Create the **android\app\src\main\assets\containers**  directory  in  your project root and move the generated configuration file **DTM-\**\**\**\*.json** to the directory.

### Using the Debug Mode

During development, you can enable the debug mode to view the event records in real time, observe the results, and adjust the event tracking scheme as needed.

- **Huawei Analytics**

  - To enable or disable the debug mode, perform the following steps:
  - Run the following command on an Android device to enable the debug mode:

  	```
  	adb shell setprop debug.huawei.hms.analytics.app <package_name>
  	```

  - After the debug mode is enabled, all events will be reported in real time.
  - Run the following command to disable the debug mode:

  	```
  	adb shell setprop debug.huawei.hms.analytics.app .none.
  	```

- **Third-Party Platforms** 

  - If you use a third-party template (such as a template of Adjust or AppsFlyer), run the following command to enable the debug mode:

  	```
  	adb shell setprop debug.huawei.hms.dtm.app <package_name>
  	```

  - Run the following command to disable the debug mode:

  	```
  	adb shell setprop debug.huawei.hms.dtm.app .none.
  	```

### For Third Party Analytics Platforms

If you are using a third party platform, you must do the configurations of the platform you are using.

Examples for some platforms: 
- [Get started with Google Analytics](https://firebase.google.com/docs/analytics/get-started?platform=android)
- [Get started with Apps Flyer](https://support.appsflyer.com/hc/en-us/articles/207033486-Getting-started-step-by-step#basic-attribution)

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Examples > DTM Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei DTM Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).

