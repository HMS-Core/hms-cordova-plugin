# HMS Availability Ionic Demo

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

This demo application demonstrates the usage of HMS Availability Cordova Plugin.

---

## 2. Installation Guide

### 2.1. Ionic

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

3. Install `HMS Availability plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-availability
    ```

4. Install HMS Availability Ionic Native wrappers

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-availability
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

3. Install `HMS Availability plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-availability
    ```

4. Install HMS Availability Ionic Native wrappers.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-availability
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

---

## 4. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

- [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **`huawei-mobile-services`**.
- [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
- [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001?ha_source=hms1) HMS Core Module is great for general questions, or seeking recommendations and opinions.
- [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin?ha_source=hms1) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 5. Licencing and Terms

HMS Availability Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
