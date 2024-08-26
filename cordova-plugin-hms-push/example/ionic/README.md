# HMS Push Ionic Demo

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

This demo application demonstrates the usage of HMS Push Cordova Plugin.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification
on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/?ha_source=hms1) website. For
details, please refer
to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104?ha_source=hms1).

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

#### 2.3.1. Ionic with Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

   ```bash
   ionic integrations enable cordova
   ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file.

3. Add the **Android platform** to the project if haven't done before.

   ```bash
   ionic cordova platform add android
   ```

4. Install `HMS Push Cordova Plugin` to the project. You can either install the plugin through `npm`
   or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

   ```bash
   ionic cordova plugin add @hmscore/cordova-plugin-hms-push
   ```

   b. Or download the plugin
   from [Plugin > Push Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin?ha_source=hms1)
   page and run the following command in the root directory of your project to **install it
   manually**.

   ```bash
   ionic cordova plugin add <hms_cordova_push_plugin_path>
   ```

5. If you want to enable Ionic Native support then run the following command.

   ```bash
   npm install @awesome-cordova-plugins/core @hmscore/ionic-native-hms-push
   ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

- You can refer to 3rd and 4th steps
  of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2?ha_source=hms1)
  Codelab tutorial page for generating keystore file.

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

#### 2.3.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Update the widget **`appId`** property which is specified in the **`capacitor.config.json`**
   file.

3. Install `HMS Push Cordova Plugin` to the project. You can either install the plugin through `npm`
   or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

   ```bash
   npm install @hmscore/cordova-plugin-hms-push
   ```

   b. Or download the Plugin
   from [Plugin > Push Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin?ha_source=hms1)
   page and run the following command in the root directory of your project to **install it
   manually**.

   ```bash
   npm install <hms_cordova_push_plugin_path>
   ```

4. If you want to enable Ionic Native support then run the following command.

   ```bash
   npm install @awesome-cordova-plugins/core @hmscore/ionic-native-hms-push
   ```

5. Build Ionic app to generate resource files.

   ```bash
   ionic build
   ```

6. Add the **Android platform** to the project if haven't done before.

   ```bash
   npx cap add android
   ```

7. Copy **`agconnect-services.json`** file to **`<project_root>/android/app`** directory.

8. Copy **`keystore(.jks)`** file to **`<project_root>/android/app`** directory.

- You can refer to 3rd and 4th steps
  of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2?ha_source=hms1)
  Codelab tutorial page for generating keystore file.

9. Open the **`build.gradle`** file in the **`<project_root>/android/app`** directory.

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
            classpath 'com.huawei.agconnect:agcp:1.9.1.301'
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

11. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. Configuration and Description

---

## 4. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best
  place for any programming questions. Be sure to tag your question
  with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these
  plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001&ha_source=hms1)
  HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin?ha_source=hms1) is
  place to official documentation for all HMS Core Kits, you can find detailed documentations in
  there.

If you run into a bug in our samples, please submit an issue to
the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 5. Licensing and Terms

HMS Push Cordova Plugin is licensed under the [Apache 2.0 license](LICENSE).
