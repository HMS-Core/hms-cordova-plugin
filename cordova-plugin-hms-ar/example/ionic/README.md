# HMS AR Ionic Demo

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1 Ionic](#21-ionic)
    - [2.1.1. With Cordova Runtime](#211-with-cordova-runtime)
    - [2.1.2. With Capacitor Runtime](#212-with-capacitor-runtime)
- [3. Configuration and Description](#3-configuration-and-description)
- [4. Questions or Issues](#4-questions-or-issues)
- [5. Licencing and Terms](#5-licencing-and-terms)

---

## 1. Introduction

This demo application demonstrates the usage of HMS AR Kit Cordova plugin.

---

## 2. Installation Guide

### 2.1. Ionic

1. Install Ionic CLI.

    ```bash
    npm install -g @ionic/cli
    ```

2. Open the demo project root folder.

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

3. Install `HMS AR plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-ar
    ```

    b. Or download the plugin from [Plugin > Augmented Reality > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_ar_plugin_path>
    ```

4. Copy **hms-ar** folder from **`node_modules/@hmscore/cordova-plugin-hms-ar/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

5. Run the application.

    ```bash
    ionic cordova run android --device
    ```

#### 2.1.2. With Capacitor Runtime

1. Enable the **Capacitor integration**.

   ```bash
   ionic integrations enable capacitor
   ```


2. Install `HMS AR plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-ar
    ```

   b. Or download the plugin from [Plugin > Augmented Reality > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_ar_plugin_path>
    ```

3. Copy **hms-ar** folder from **`node_modules/@hmscore/cordova-plugin-hms-ar/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

4. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

5. Add the **Android platform** to the project.

    ```bash
    npx cap add android
    ```

6. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories** and **agconnect classpath** to the file.

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

7. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. Configuration and Description

No

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

Huawei AR Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
