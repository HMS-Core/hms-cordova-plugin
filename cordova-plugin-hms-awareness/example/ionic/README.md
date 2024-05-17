# HMS Awareness Ionic Demo

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Ionic](#21-ionic)
    - [2.1.1. With Cordova Runtime](#211-with-cordova-runtime)
    - [2.1.2. With Capacitor Runtime](#212-with-capacitor-runtime)
- [3. Configuration and Description](#3-configuration-and-description)
- [4. Questions or Issues](#4-questions-or-issues)
- [5. Licensing and Terms](#5-licensing-and-terms)

---

## 1. Introduction

This demo application demonstrates the usage of the HMS Awareness Kit Cordova plugin.

---

## 2. Installation Guide

### 2.1. Creating a Project in AppGallery Connect

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services.
To create an app, perform the following steps:

1. Sign in
   to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html?ha_source=hms1)
   and select **My projects**.
2. Select your project from the project list or create a new one by clicking the **Add Project**
   button.
3. Go to **Project Setting** > **General information**, and click **Add app**.
    - If an app exists in the project and you need to add a new one, expand the app selection area
      on the top of the page and click **Add app**.
4. On the **Add app** page, enter the app information, and click **OK**.

### 2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to
access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally
generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can
refer to 3rd and 4th steps
of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2?ha_source=hms1)
Codelab tutorial for the certificate generation. Perform the following steps after you have
generated the certificate.

1. Sign in
   to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html?ha_source=hms1)
   and select your project from **My Projects**. Then go to **Project Setting** > **General
   information**. In the **App information** field, click the icon next to SHA-256 certificate
   fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page, click **agconnect-services.json** button to download the configuration file.

### 2.3. Ionic

1. Install Ionic CLI and other required tools if haven't done before.

    ```bash
    npm install -g @ionic/cli cordova-res native-run
    ```

2. Open the demo project's root directory.

3. Install project dependencies.

    ```bash
    npm install
    ```

#### 2.1.1. With Cordova Runtime

1. Enable the **Cordova integration**.

    ```bash
    ionic integrations enable cordova
    ```

2. Add the **Android platform** to the project.

    ```bash
    ionic cordova platform add android
    ```

3. Install `HMS Awareness plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-awareness
    ```

4. Install HMS Awareness Ionic Native wrappers

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-awareness
    ```

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Run the app.

    ```bash
    ionic cordova run android --device
    ```

#### 2.1.2. With Capacitor Runtime

1. Enable the **Capacitor integration**.

   ```bash
   ionic integrations enable capacitor
   ```

2. Initialize **Capacitor**.

    ```bash
    npx cap init [appName] [appId]
    ```

    - For more details please follow [Initialize Capacitor with your app information](https://capacitorjs.com/docs/getting-started/with-ionic#initialize-capacitor-with-your-app-information).

3. Install `HMS Awareness plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-awareness
    ```

4. Install HMS Awareness Ionic Native wrappers.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-awareness
    ```

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Add the **Android platform** to the project.

    ```bash
    npx cap add android
    ```

7. Updates dependencies, and copy any web assets to your project.

    ```bash
    npx cap sync
    ```

8. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories**.

    ```groovy
    buildscript {
        repositories {
            /*
                <Other repositories>
            */
            maven { url 'https://developer.huawei.com/repo/' }
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

9. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. Configuration and Description

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Awareness plugin's ProGuard rules need to be added to your project. These rules are as follows:

```text
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.huawei.hianalytics.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-keep class com.huawei.hms.awareness.**{*;}
-keep interface com.huawei.hms.awareness.**{*;}
-keep class com.huawei.openalliance.ad.**{*;}
-repackageclasses
```

---

## 4. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001&ha_source=hms1) HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin?ha_source=hms1) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 5. Licensing and Terms

Huawei Awareness Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENSE).
