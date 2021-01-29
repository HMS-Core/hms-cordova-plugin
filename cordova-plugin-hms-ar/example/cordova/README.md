# HMS AR Cordova Demo

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
- [3. Configuration and Description](#3-configuration-and-description)
- [4. Questions or Issues](#4-questions-or-issues)
- [5. Licencing and Terms](#5-licencing-and-terms)

---

## 1. Introduction

This demo application demonstrates the usage of HMS AR Kit Cordova plugin.

---

## 2. Installation Guide

1. Install Cordova CLI.

    ```bash
    npm install -g cordova
    ```

2. Open the demo project root folder.

3. Add the **Android platform** to the project.

    ```bash
    cordova platform add android
    ```

4. Install `HMS AR plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-ar
    ```

    b. Or download the plugin from [Plugin > Augmented Reality > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_ar_plugin_path>
    ```

5. Run the application.

    ```bash
    cordova run android --device
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
