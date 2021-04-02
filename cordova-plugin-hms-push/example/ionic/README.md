# HMS Push Cordova Demo

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Ionic](#21-ionic)
      - [2.1.1. With Cordova Runtime](#211-with-cordova-runtime)
      - [2.1.2. With Capacitor Runtime](#212-with-capacitor-runtime)
- [3. Configuration and Description](#3-configuration-and-description)
- [4. Questions or Issues](#4-questions-or-issues)
- [5. Licencing and Terms](#5-licencing-and-terms)

---

## 1. Introduction

This demo application demonstrates the usage of HMS Push Cordova Plugin.

---

## 2. Installation Guide

### 2.1. Ionic

1. Install Ionic CLI.

    ```bash
    npm install -g @ionic/cli
    ```

2. Create a new Ionic project or use existing Ionic project.

- To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

#### 2.1.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

    ```bash
    ionic integrations enable cordova
    ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file.

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

4. Install `HMS Push Cordova Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-push
    ```

   b. Or download the plugin from [Plugin > Push Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_push_plugin_path>
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-push
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

#### 2.1.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Update the widget **`appId`** property which is specified in the **`capacitor.config.json`** file.

3. Install `HMS Push Cordova Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-push
    ```

   b. Or download the Plugin from [Plugin > Push Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_push_plugin_path>
    ```

4. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-push
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

## 3. Configuration and Description

---

## 4. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001) HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 5. Licencing and Terms

HMS Push Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
