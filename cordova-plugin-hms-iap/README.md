# Cordova Plugin HMS IAP

<p align="center">
  <h1 align="center">Cordova HMS Iap</h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@hmscore/cordova-plugin-hms-iap"><img src="https://img.shields.io/npm/dm/@hmscore/cordova-plugin-hms-iap?color=%23007EC6&style=for-the-badge" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@hmscore/cordova-plugin-hms-iap"><img src="https://img.shields.io/npm/v/@hmscore/cordova-plugin-hms-iap?color=%23ed2a1c&style=for-the-badge" alt="NPM version"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/@hmscore/cordova-plugin-hms-iap.svg?color=%3bcc62&style=for-the-badge" alt="License"></a>
</p>

---

This plugin enables communication between Huawei Iap SDK and Cordova platform. It exposes all
functionality provided by Huawei Iap SDK.

[> Learn More](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Guides/introduction-0000001126692133?ha_source=hms1)

## 1. Introduction

This plugin enables communication between Huawei IAP SDK and Cordova platform. It exposes all
functionality provided by Huawei IAP SDK.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification
on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please
refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104?ha_source=hms1).

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

### 2.3. Enabling Required Services

To use HUAWEI IAP, you first need
to **[enable the IAP service](https://developer.huawei.com/consumer/en/doc/distribution/app/agc-enable_service#h1-1574822945685?ha_source=hms1)**
and
also **[set IAP parameters](https://developer.huawei.com/consumer/en/doc/distribution/app/agc-enable_service#h1-1587376818335?ha_source=hms1)**
.

> **NOTE:** Please save the public key obtained during the process of enabling the IAP service. It will be used for verifying the signature of data returned by the IAP SDK, ensuring that the data is not tampered with.

### 2.4. Cordova

1. Install Cordova CLI if haven't done before.

   ```bash
   npm install -g cordova
   ```

2. Create a new Cordova project or use existing Cordova project.

   - To create new Cordova project, you can
     use **`cordova create path [id [name [config]]] [options]`** command. For more details please
     follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command)
     .

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be
   same with **client > package_name** value of the **`agconnect-services.json`** file.

4. Add the **Android platform** to the project if haven't done before.

   ```bash
   cordova platform add android
   ```

5. Install `HMS IAP plugin` to the project.

   ```bash
   cordova plugin add @hmscore/cordova-plugin-hms-iap
   ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

   - You can refer to 3rd and 4th steps
     of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2?ha_source=hms1)
     Codelab tutorial page for generating keystore file.

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

### 2.5 Ionic

1. Install Ionic CLI and other required tools if haven't done before.

   ```bash
   npm install -g @ionic/cli cordova-res native-run
   ```

2. Create a new Ionic project or use existing Ionic project.

   - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`**
     command. For more details please
     follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start)
     .

#### 2.5.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

   ```bash
   ionic integrations enable cordova
   ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be
   same with **client > package_name** value of the **`agconnect-services.json`** file.

3. Add the **Android platform** to the project if haven't done before.

   ```bash
   ionic cordova platform add android
   ```

4. Install `HMS IAP plugin` to the project.

   ```bash
   ionic cordova plugin add @hmscore/cordova-plugin-hms-iap
   ```

5. If you want to enable Ionic Native support then run the following command.

   ```bash
   npm install @ionic-native/core @hmscore/ionic-native-hms-iap
   ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

   - You can refer to 3rd and 4th steps
     of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2?ha_source=hms1)
     Codelab tutorial page for generating keystore file.

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

#### 2.5.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Initialize **Capacitor** if haven't done before.

   ```bash
   npx cap init [appName] [appId]
   ```

   - For more details please
     follow [Initialize Capacitor with your app information](https://capacitorjs.com/docs/getting-started/with-ionic#initialize-capacitor-with-your-app-information)
     .

3. Update the **`appId`** property which is specified in the **`capacitor.config.json`** file
   according to your project. It must be same with **client > package_name** value of
   the **`agconnect-services.json`** file.

4. Install `HMS IAP plugin` to the project.

   ```bash
   npm install @hmscore/cordova-plugin-hms-iap
   ```

5. If you want to enable Ionic Native support then run the following command.

   ```bash
   npm install @ionic-native/core @hmscore/ionic-native-hms-iap
   ```

6. Build Ionic app to generate resource files.

   ```bash
   ionic build
   ```

7. Add the **Android platform** to the project if haven't done before.

   ```bash
   npx cap add android
   ```

8. Copy **`keystore(.jks)`** and **`agconnect-services.json`** files
   to **`<project_root>/android/app`** directory.

   - You can refer to 3rd and 4th steps
     of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2?ha_source=hms1)
     Codelab tutorial page for generating keystore file.

9. Open the **`build.gradle`** file in the **`<project_root>/android/app`** directory.

   - Add `signingConfigs` entry to the **android** section and modify it according to your
     keystore.

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

10. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's
    maven repositories** and **agconnect classpath** to the file.

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
