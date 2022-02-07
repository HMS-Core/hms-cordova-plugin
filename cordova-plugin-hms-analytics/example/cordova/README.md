# HMS Analytics Cordova Demo

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json and agconnect-services.plist](#22-configuring-the-signing-certificate-fingerprint-and-obtaining-agconnect-servicesjson-and-agconnect-servicesplist)
  - [2.3. Cordova](#23-cordova)
    - [2.3.1. iOS App Development](#231-ios-app-development)
    - [2.3.2. Android App Development](#232-android-app-development)
- [3. Configuration and Description](#3-configuration-and-description)
- [4. Questions or Issues](#4-questions-or-issues)
- [5. Licensing and Terms](#5-licensing-and-terms)

---

## 1. Introduction

This demo application demonstrates the usage of the HMS Analytics Kit Cordova plugin.

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

### 2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json and agconnect-services.plist

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your Android project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page,
    - If platform is Android ,click **agconnect-services.json** button to download the configuration file.
    - If platform is iOS, click **agconnect-services.plist** button to download the configuration file.

### 2.3. Cordova

1. Install Cordova CLI if haven't done before.

    ```bash
    npm install -g cordova
    ```

2. Open the demo project's root folder.

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** and **`agconnect-services.plist`** files.

4. Add the **Android** or **iOS** platform to the project.

    ```bash
    cordova platform add android
    ```

    ```bash
    cordova platform add ios
    ```

5. Install `HMS Analytics plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-analytics
    ```

#### 2.3.1. iOS App Development

1. Add **`agconnect-services.plist`** file to the app's root directory of your Xcode project.

2. Set preference in your Ionic project config.xml platform iOS.

   ```xml
   <!--platform name="ios"-->
    <preference name="deployment-target" value="11.0" />
    <preference name="SwiftVersion" value="5" />
   ```

3. Run the application.

   ```bash
   cordova run ios --device
   ```

#### 2.3.2. Android App Development

1. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory your Android project.

2. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

3. Run the app.

    ```bash
    cordova run android --device
    ```

---

## 3. Configuration and Description

### Using the Debug Mode for Android and iOS platforms

During the development, you can enable the debug mode to view the event records in real time, observe the results, and adjust the event reporting policies.

#### Android Platform:

1. Run the following command on an Android device to enable the debug mode:

    ```bash
    adb shell setprop debug.huawei.hms.analytics.app <package_name>
    ```

2. To disable the debug mode, run the following command:

    ```bash
    adb shell setprop debug.huawei.hms.analytics.app .none.
    ```

#### iOS Platform:

1. To enable the debug mode: Choose **Product > Scheme > Edit Scheme** from the Xcode menu. On the Arguments page, click + to add the **-HADebugEnabled** parameter. After the parameter is added, click Close to save the setting.
2. To disable the debug mode: Choose **Product > Scheme > Edit Scheme** from the Xcode menu. On the Arguments page, click + to add the **-HADebugDisabled** parameter. After the parameter is added, click Close to save the setting.

**NOTE : You can examine events from AppGallery Connect, under App debugging section.**

<img src=".docs/images/event_debug_mode.png" width="500" >

### Enable HUAWEI Analytics

1. Sign in to AppGallery Connect and click My projects.
2. Find your project, and click the app for which you want to view analytics data.
3. Select any menu under HUAWEI Analytics and click Enable Analytics service.

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Analytics plugin's ProGuard rules need to be added to your project. These rules are as follows:

```text
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.huawei.hianalytics.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-repackageclasses
```

---

## 4. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001) HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 5. Licensing and Terms

Huawei Analytics Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
