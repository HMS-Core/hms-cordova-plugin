# HMS Health Ionic Demo

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Configuring the Signing Certificate Fingerprint](#22-configuring-the-signing-certificate-fingerprint)
  - [2.3. Enabling Required Services](#23-enabling-required-services)
  - [2.4. Ionic](#24-ionic)
    - [2.4.1. With Cordova Runtime](#241-with-cordova-runtime)
    - [2.4.2. With Capacitor Runtime](#242-with-capacitor-runtime)
- [3. Configuration and Description](#3-configuration-and-description)
- [4. Questions or Issues](#4-questions-or-issues)
- [5. Licensing and Terms](#5-licensing-and-terms)

---

## 1. Introduction

This demo application demonstrates the usage of the HMS Health Kit Cordova plugin.

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

### 2.2. Configuring the Signing Certificate Fingerprint

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation.

### 2.3. Enabling Required Services

#### Applying for Health Kit

To use HUAWEI Health Kit, you first need to [apply for Huawei Health Service](https://developer.huawei.com/consumer/en/doc/apply-kitservice-0000001050071707-V5) and also [apply for Huawei ID Service](https://developer.huawei.com/consumer/en/doc/apply-id-0000001050069756-V5).

1. Sign in to the HUAWEI Developers website and click Console.

2. Click Health Kit in Development section.

3. Click Apply for Health Kit, agree to the agreement, and the screen for data permission application is displayed.

4. Select the data access permissions that must be applied for the product.
  
    - When adding Health Kit, comply with the least privilege principle. The data access permissions must be consistent with the business. Do not apply for any permission that is beyond the business scope or is not yet needed.

5. Wait while your application is under approval.

    - It normally takes about 15 minutes for an application involving data types other than restricted ones to be automatically activated. If permissions for restricted data types are required, the application will be subject to approval. For applications that involve the write permissions of restricted data types, the approval process may take a couple of weeks, depending on the number of data types for which permissions are required and the app release regions.

    - An application won't be approved if the submitted materials do not meet the requirements. Once the application is approved, the app development and test phases can start and the app can be released once the related procedures are completed.

    - If your business scope changes and you need to modify the corresponding data permissions, click Modify to submit the application again.

> **NOTE:** Please save the public key obtained during the process of enabling the IAP service. It will be used for verifying the signature of data returned by the IAP SDK, ensuring that the data is not tampered with.

### 2.4. Ionic

1. Install Ionic CLI and other required tools if haven't done before.

    ```bash
    npm install -g @ionic/cli cordova-res native-run
    ```

2. Open the demo project's root directory.

3. Install project dependencies.

    ```bash
    npm install
    ```

#### 2.4.1. With Cordova Runtime

1. Enable the **Cordova integration**.

    ```bash
    ionic integrations enable cordova
    ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be the package name which used when applying for the HUAWEI ID service.

3. Add the **Android platform** to the project.

    ```bash
    ionic cordova platform add android
    ```

4. Install `HMS Health plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-health
    ```

5. Install HMS Health Ionic Native wrappers.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-health
    ```

6. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

7. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

8. Run the app.

   ```bash
   ionic cordova run android --device
   ```

#### 2.4.2. With Capacitor Runtime

1. Enable the **Capacitor integration**.

   ```bash
   ionic integrations enable capacitor
   ```

2. Initialize **Capacitor**.

    ```bash
    npx cap init [appName] [appId]
    ```

    - For more details please follow [Initialize Capacitor with your app information](https://capacitorjs.com/docs/getting-started/with-ionic#initialize-capacitor-with-your-app-information).

3. Update the **`appId`** property which is specified in the **`capacitor.config.json`** file. It should be the package name which used when applying for the HUAWEI ID service

4. Install `HMS Health plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-health
    ```

5. Install HMS Health Ionic Native wrappers.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-health
    ```

6. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

7. Add the **Android platform** to the project.

    ```bash
    npx cap add android
    ```

8. Copy **`keystore(.jks)`** file to **`<project_root>/android/app`** directory.

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

## 3. Configuration and Description

Please make sure you have applied and get accepted for Huawei Health Service.

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Health plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

Huawei Health Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
