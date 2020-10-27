# Cordova Plugin HMS Analytics

---

## Contents

  - [1. Introduction](#1-introduction)
  - [2. Installation Guide](#2-installation-guide)
    - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
    - [2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json and agconnect-services.plist](#22-configuring-the-signing-certificate-fingerprint-obtaining-agconnect-servicesjson-and-agconnect-servicesplist)
    - [2.3. Cordova](#23-cordova)
    - [2.4. Ionic](#24-ionic)
        - [2.4.1. With Cordova Runtime](#241-with-cordova-runtime)
        - [2.4.2. With Capacitor Runtime](#242-with-capacitor-runtime)
  - [3. API Reference](#3-api-reference)
  - [4. Configuration and Description](#4-configuration-and-description)
  - [5. Sample Project](#5-sample-project)
  - [6. Questions or Issues](#6-questions-or-issues)
  - [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Analytics SDK and Cordova platform. It exposes all functionality provided by Huawei Analytics SDK.

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

### 2.2. Configuring the Signing Certificate Fingerprint, Obtaining agconnect-services.json and agconnect-services.plist

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the  icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page,
    - If platform is Android ,click **agconnect-services.json** button to download the configuration file.
    - If platform is iOS, click **agconnect-services.plist** button to download the configuration file.

### 2.3. Cordova

1. Install Cordova CLI.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** and **`agconnect-services.plist`** files.

4. Add the **Android** or **iOS** platform to the project if haven't done before.

    ```bash
    cordova platform add android
    ```
    
    ```bash
    cordova platform add ios
    ```

5. Install `HMS Analytics plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-analytics
    ```

    b. Or download the plugin from [Plugin > Analytics Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_analytics_plugin_path>
    ```

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory your Android project. Copy **`agconnect-services.plist`** file to the app's root directory of your Xcode project.

7. For Android platform: Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

8. To initialize HMS Core Analytics SDK iOS platform, add the following code: 

    - For the iOS platform -> 
        - Check Signing & Capabilities your Xcode project.
        - Objective C sample code: **(BOOL)Application** method in **AppDelegate.m**

        ```objective-c
        // #import <HiAnalytics/HiAnalytics.h>
        [HiAnalytics config];//Initialization
        ```
        
        - Swift sample code: **func Application** method in **AppDelegate.swift**

        ```swift
        // import HiAnalytics
        HiAnalytics.config();//Initialization
        ```

9. Run the application.

    > ***NOTE*** <br>
    > During the development, you can enable the debug mode to view the event records in real time, observe the results, and adjust the event reporting policies. --> [Configuration and Description](#4-configuration-and-description)

    ```bash
    cordova run android --device
    ```
    
    ```bash
    cordova run ios --device
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

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** and **`agconnect-services.plist`** files.

3. Add the **Android** or **iOS** platform to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```
    
    ```bash
    ionic cordova platform add ios
    ```

4. Install `HMS Analytics plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-analytics
    ```

    b. Or download the plugin from [Plugin > Analytics Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_analytics_plugin_path>
    ```

5. Copy **hms-analytics** folder from **`node_modules/@hmscore/cordova-plugin-hms-analytics/ionic/dist/hms-analytics`** directory to **`node_modules/@ionic-native`** directory.

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory your Android project. Copy **`agconnect-services.plist`** file to the app's root directory of your Xcode project.

7. For Android platform: Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

8. To initialize HMS Core Analytics SDK iOS platform, add the following code: 

    - For the iOS platform -> 
        - Check Signing & Capabilities your Xcode project.
        - Objective C sample code: **(BOOL)Application** method in **AppDelegate.m**

        ```objective-c
        // #import <HiAnalytics/HiAnalytics.h>
        [HiAnalytics config];//Initialization
        ```
        - Swift sample code: **func Application** method in **AppDelegate.swift**

        ```swift
        // import HiAnalytics
        HiAnalytics.config();//Initialization
        ```

9. Run the application.

    > ***NOTE*** <br/>
    > During the development, you can enable the debug mode to view the event records in real time, observe the results, and adjust the event reporting policies. --> [Configuration and Description](#4-configuration-and-description)

   ```bash
   ionic cordova run android --device
   ```

   ```bash
   ionic cordova run ios --device
   ```

#### 2.4.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Update the widget **`appId`** property which is specified in the **`capacitor.config.json`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** and **`agconnect-services.plist`** files.

3. Install `HMS Analytics plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-analytics
    ```

   b. Or download the plugin from [Plugin > Analytics Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_analytics_plugin_path>
    ```

4. Copy **hms-analytics** folder from **`node_modules/@hmscore/cordova-plugin-hms-analytics/ionic/dist/hms-analytics`** directory to **`node_modules/@ionic-native`** directory.

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Add the **Android platform** and **iOS platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

    ```bash
    npx cap add ios
    ```

    > ***NOTE*** <br>
    > During the development, you can enable the debug mode to view the event records in real time, observe the results, and adjust the event reporting policies. --> [Configuration and Description](#4-configuration-and-description)

7. Copy **`keystore(.jks)`** and **`agconnect-services.json`** files to **`<project_root>/android/app`** directory of your Android project. Copy **`agconnect-services.plist`** file to the app's root directory of your Xcode project.

    - You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial page for generating keystore file.

8. For Android platform: Open the **`build.gradle`** file in the **`<project_root>/android/app`** directory.

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

9. For Android platform: Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories** and **agconnect classpath** to the file.

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

10. To initialize HMS Core Analytics SDK iOS platform, add the following code: 

    - For the iOS platform -> 
        - Check Signing & Capabilities your Xcode project.
        - Objective C sample code: **(BOOL)application** method in **AppDelegate.m**

        ```objective-c
        // #import <HiAnalytics/HiAnalytics.h>
        [HiAnalytics config];//Initialization
        ```
        - Swift sample code: **func application** method in **AppDelegate.swift**

        ```swift
        // import HiAnalytics
        HiAnalytics.config();//Initialization
        ```

11. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

12. Open the project in Xcode and run it.

    ```bash
    npx cap open ios
    ```

---

## 3. API Reference

## Module Overview

| Module        | Description|
| ------------- | -------------------------------------------- |
| [HMSAnalytics](#hmsanalytics)  | HUAWEI Analytics Kit offers a rich array of preset analytics models that help you gain a deeper insight into your users, products, and content. With this insight, you can then take a data-driven approach to market your apps and optimize your products. |

## HMSAnalytics

### Public Method Summary

|Methods                        |Definition                   |
|-------------------------------|-----------------------------|
|[setAnalyticsEnabled](#setanalyticsenabled) |This method is called to specifies whether to enable event collection If the function is disabled, no data is recorded. |
|[config](#config) |This method is called to initialize in the main thread based on the configuration. |
|[getAAID](#getaaid) |This method is called to obtain the app instance ID from AppGalleryConnect. |
|[onEvent](#onevent) |This method is called to record custom or predefined events. |
|[setUserId](#setuserid) |This method is called to set user IDs. |
|[setUserProfile](#setuserprofile) |This method is called to set user attributes. |
|[getUserProfiles](#getuserprofiles) |This method is called to obtain user attributes in the A/B test. |
|[enableLog](#enablelog) |This method is called to enable the HUAWEI Analytics Kit log function. |
|[enableLogWithLevel](#enablelogwithlevel) |This method is called to enable debug logs and set the minimum log level (minimum level of log records that will be printed). |
|[setPushToken](#setpushtoken) |This method is called to set the push token, which can be obtained from HUAWEI Push Kit. |
|[setMinActivitySessions](#setminactivitysessions) |This method is called to set the minimum interval between two sessions. |
|[setSessionDuration](#setsessionduration) |This method is called to set the session timeout interval. |
|[clearCachedData](#clearcacheddata) |This method is called to delete all collected data cached locally, including cached data that failed to be sent. |
|[pageStart](#pagestart) |This method is called to customizes a page entry event. The API applies only to non-activity pages because automatic collection is supported for activity pages. |
|[pageEnd](#pageend) |This method is called to customizes a page end event. The API applies only to non-activity pages because automatic collection is supported for activity pages. |
|[setReportPolicies](#setreportpolicies) |This method is called to set data reporting policies. |
|enableLogger |This method enables HMSLogger capability which is used for sending usage analytics of Analytics SDK's methods to improve the service quality. This method is only to support on Android Platform.|
|disableLogger|This method disables HMSLogger capability which is used for sending usage analytics of Analytics SDK's methods to improve the service quality. This method is only to support on Android Platform.|

### Public Methods

### setAnalyticsEnabled
Specifies whether to enable event collection. If this function is disabled, all cached data is cleared and no data is recorded.

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|enabled| boolean |Indicates whether to enable event collection. The function is enabled by default. If enabled is true, enabled event collection.|

| Return | Definition |
|-------------------------------|-----------------------------|
|Promise\<void> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### config
Analytics Kit will be initialized in the main thread based on the configuration.
- This method is only to support on iOS Platform.

| Return | Definition |
|-------------------------------|-----------------------------|
|Promise\<void> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### getAAID
This method is called to obtain the app instance ID from AppGallery Connect.

| Return | Definition |
|----------------|---------------|
|Promise\<string>|Obtains the app instance ID from AppGallery Connect.|

### onEvent
This method is called to record events.

| Parameters |Type | Definition |
|----------------|---------------|---------|
|eventId| Promise\<[HAEventType](#haeventtype) \| string> |Indicates the ID of a customized event. The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore. The value of this parameter cannot be an ID of an automatically collected event.
|value| Promise\<[HAParamType](#haparamtype) \| [EventParams](#eventparams)>|Indicates the information carried by the event. The number of built-in key-value pairs in the object cannot exceed 2048 and the size cannot exceed 200 KB. The key value in the object cannot contain spaces or invisible characters.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### setUserId
This method is called to set user IDs.

When the method is called, a new session is generated if the old value of userId is not empty and is different from the new value.If you do not want to use userId to identify a user (for example, when a user signs out), you must set userId to null.

id: ID of a user. Huawei Analytics uses this ID to associate user data.The use of userId must comply with related privacy regulations. You need to declare the use of such information in the privacy statement of your app.

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|userId| string|Indicates the user ID.This parameter cannot be empty and its value can contain a maximum of 256 characters.|
  
| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### setUserProfile
This method is called to set user attributes.The values of user attributes remain unchanged throughout the app lifecycle and during each session.A maximum of 25 user attributes are supported. If the name of an attribute set later is the same as that of an existing attribute, the value of the existing attribute is updated.
  
| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|key| string |Indicates the ID of a user attribute.The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore.|
|value|string |Indicates the attribute value,which is a non-empty string containing up to 256 characters.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### getUserProfiles
This method is called to obtain predefined and custom user attributes in the A/B test.

| Parameters |Type | Definition |
|----------------|---------------|---------|
|predefined| boolean |Indicates whether to obtain predefined user attributes.***True:*** obtains predefined user attributes ***False:*** obtains developer-defined user attributes|

| Return | Definition |
|----------------|---------------|
| Promise\<[UserProfiles](#userprofiles)>| Predefined or custom user attributes. |

### enableLog
Enables the console log function of the SDK. The default level is DEBUG.
- This method is only to support on Android Platform.

| Return | Definition |
|-------------------------------|-----------------------------|
|Promise\<void> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### enableLogWithLevel
Enables the console log function of the SDK. The log level is passed.
- This method is only to support on Android Platform.

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|logLevel| [LogLevel](#loglevel) |Log level. The value can be ***DEBUG***, ***INFO***, ***WARN*** or ***ERROR***. The value is case insensitive.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>| If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### setPushToken
This method is called to set the push token. After obtaining a push token through HUAWEI Push Kit, use this method to save the push token so that you can use the audience defined by HUAWEI Analytics to create HCM notification tasks.
- This method is only to support on Android Platform.

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|token| string |Push token, which is a non-empty string containing up to 256 characters.|

| Return | Definition |
|----------------|---------------|
|Promise\<any>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### setMinActivitySessions
This method is called to set the minimum interval for starting a new session. A new session is generated when an app is switched back to the foreground after it runs in the background for the specified minimum interval. The default value is 30 seconds.

| Parameters |Type | Definition |
|----------------|---------------|-----------------------------|
|interval| number |Indicates the minimum interval between two sessions.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|
  
### setSessionDuration
This method is called to set the session timeout interval. A new session is generated when an app keeps running in the foreground but the interval between two adjacent events exceeds the specified timeout interval. The default value is 30 minutes.

| Parameters |Type | Definition |
|----------------|---------------|---------|
|duration| number |Indicates the session timeout interval.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### clearCachedData
This method is called to delete all collected data cached locally, including cached data that failed to be sent.

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### pageStart
This method is called to customizes a page entry event. The metod applies only to non-activity pages because automatic collection is supported for activity pages. If this API is called for an activity page, statistics on page entry and exit events will be inaccurate.After this API is called, the [pageEnd()](#pageend) method must be called.
- This method is only to support on Android Platform.

| Parameters |Type | Definition |
|----------------|---------------|---------|
|pageName| string |Name of the current page, a string containing a maximum of 256 characters.|
|pageClassOverride| string |Class name of the current page, a string containing a maximum of 256 characters.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### pageEnd
This method is called to customizes a page end event. The method applies only to non-activity pages because automatic collection is supported for activity pages. If this API is called for an activity page, statistics on page entry and exit events will be inaccurate. Before this method is called, the [pageStart()](#pagestart) function must be called.
- This method is only to support on Android Platform.

| Parameters |Type | Definition |
|----------------|---------------|---------|
|pageName| string |Indicates the name of the current activity screen, which is mandatory.This parameter cannot be empty and its value can contain a maximum of 256 characters. It must be the same as the value of pageName passed in pageStart().|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

### setReportPolicies
Sets data reporting policies.
- This method is only to support on iOS Platform.

| Parameters |Type | Definition |
|----------------|---------------|---------|
|reportPolicyType| [HAReportPolicy](#hareportpolicy) |Sets the policy of reporting type.|

| Return | Definition |
|----------------|---------------|
|Promise\<void>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

## Data Types

### LogLevel
| Field Name |Type | Definition |
|----------------|---------------|---------|
|values |string | The value can be DEBUG, INFO, WARN, or ERROR.|

### EventParams

| Field Name |Type | Definition |
|----------------|---------------|---------|
|key|string|Event param key.|
|value|string| Event param value.|

### UserProfiles

| Field Name |Type | Definition |
|----------------|---------------|---------|
|key|string|Predefined user attribute key.|
|value|string| Predefined user attribute value.|

### HAReportPolicy

| Field Name |Type | Description |
|----------------|---------------|---------|
|onScheduledTimePolicy?|number|Sets the policy of reporting data at the scheduled interval. You can configure the interval as needed. The value ranges from 60 to 1800, in seconds.|
|onAppLaunchPolicy?|boolean|Sets the policy of reporting data upon app launch.|
|onMoveBackgroundPolicy?|boolean|Sets the policy of reporting data when the app moves to the background. This policy is enabled by default.|
|onCacheThresholdPolicy?|number|Sets the policy of reporting data when the specified threshold is reached. This policy is enabled by default. You can configure the interval as needed. The value ranges from 30 to 1000. The default value is 200.|

## Constants

| Name | Definition |
|-------------------------------|-----------------------------|
|[HMSAnalytics.HAParamType](#haparamtype)| provides the IDs of all predefined parameters, including the ID constants of predefined parameters and user attributes.|
|[HMSAnalytics.HAEventType](#haeventtype) | provides the ID constants of all predefined events.|

### HAEventType

| Constant Fields |Type | Value |
|----------------|---------------|---------|
|CREATEPAYMENTINFO|string|Event reported when a user has added payment information but has not initiated payment during checkout. It can be used with STARTCHECKOUT and COMPLETEPURCHASE to construct funnel analysis for the checkout process.|
|ADDPRODUCT2CART|string| Event reported when a user adds a product to the shopping cart. It can be used with VIEWPRODUCT and STARTCHECKOUT to construct funnel analysis for product purchase. It can also be used to analyze products that users are interested in, helping you promote the products to the users.|
|ADDPRODUCT2WISHLIST|string| Event reported when a user adds a product to favorites. It can be used to analyze products that users are interested in, helping you promote the products to the users.|
|STARTAPP| string |Event reported when a user launches the app.|
|STARTCHECKOUT|string|Event reported when a user clicks the checkout button after placing an order. It can be used with VIEWPRODUCT and COMPLETEPURCHASE to construct funnel analysis for the e-commerce purchase conversion rate.|
|VIEWCAMPAIGN|string|Event reported when a user view details of a marketing campaign. It can be used to analyze the conversion rate of a marketing campaign.|
|VIEWCHECKOUTSTEP|string|Event reported when a user views steps of the settlement process.|
|WINVIRTUALCOIN|string|Event reported when a user obtains virtual currency. It can be used to analyze the difficulty for users to obtain virtual currency, which helps you optimize the product design.|
|COMPLETEPURCHASE|string|This event is reported after a user purchases a product. It can be used to analyze the products or contents that users are more interested in, which helps you optimize the operations policy.|
|OBTAINLEADS|string|Event reported when a user joins in a group, for example, joining in a group chart in a social app. It can be used to evaluate the attractiveness of your product's social features to users.|
|COMPLETELEVEL|string|Event reported when a user completes a game level in a game app. It can be used with STARTLEVEL to analyze whether the game level design is proper and make targeted optimization policies.|
|STARTLEVEL|string|Event reported when a user starts a game level in a game app. It can be used together with COMPLETELEVEL to analyze whether the game level design is proper and make targeted optimization policies.|
|UPGRADELEVEL|string|Event reported when a user levels up in a game app. It can be used to analyze whether your product's user level design is optimal and make targeted optimization policies.|
|SIGNIN|string|Event reported when a user signs in to an app requiring sign-in. It can be used to analyze users' sign-in habits and make targeted operations policies.|
|SIGNOUT|string|Event reported when a user signs out.|
|SUBMITSCORE|string|Event reported when a user submits the score in a game or education app. It can be used to analyze the difficulty of product content and make targeted optimization policies.|
|CREATEORDER|string|Event reported when a user creates an order.|
|REFUNDORDER|string|Event reported when the refund is successful for a user. It can be used to analyze loss caused by the refund and make targeted optimization policies.|
|DELPRODUCTFROMCART|string|Event reported when a user removes a product from the shopping cart. It can be used for targeted marketing to the user.|
|SEARCH|string|Event reported when a user searches for content in an app. It can be used with events such as VIEWSEARCHRESULT and VIEWPRODUCT to analyze the accuracy of search results.|
|VIEWCONTENT| string| Event reported when a user touches a content, for example, touching a product in the product list in an e-commerce app to view the product details. It can be used to analyze the products that users are interested in.|
|UPDATECHECKOUTOPTION|string|Event reported when a user sets some checkout options during checkout. It can be used to analyze checkout preferences of users.|
|SHARECONTENT|string|Event reported when a user shares a product or content through a social channel. It can be used to analyze users' loyalty to the product.|
|REGISTERACCOUNT|string|Event reported when a user registers an account. It can be used to analyze the user sources and optimize operations policies.|
|CONSUMEVIRTUALCOIN|string|Event reported when a user consumes virtual currency. It can be used to analyze the products that users are interested in.|
|STARTTUTORIAL|string|Event reported when a user starts to use the tutorial. It can be used with COMPLETETUTORIAL to evaluate the tutorial quality and formulate targeted optimization policies.|
|COMPLETETUTORIAL|string|Event reported when a user completes the tutorial. It can be used with STARTTUTORIAL to evaluate the tutorial quality and formulate targeted optimization policies.|
|OBTAINACHIEVEMENT|string|Event reported when a user unlocks an achievement. It can be used to analyze whether the achievement level design is optimal and make targeted optimization policies.|
|VIEWPRODUCT|string|Event reported when a user browses a product. It can be used to analyze the products that users are interested in, or used with other events for funnel analysis.|
|VIEWPRODUCTLIST|string|Event reported when a user browses a list of products, for example, browsing the list of products by category. It can be used to analyze the types of contents that users are more interested in.|
|VIEWSEARCHRESULT|string|Event reported when a user views the search results. It can be used with VIEWPRODUCT and SEARCH to measure the accuracy of the search algorithm.|
|UPDATEMEMBERSHIPLEVEL|string|Event reported when a user purchases membership or signs in for the first time after membership expires. It can be used to analyze user habits.|
|FILTRATEPRODUCT|string|Event reported when a user sets conditions to filter products displayed. It can be used to analyze user preferences.|
|VIEWCATEGORY|string|Event reported when a user taps a product category. It can be used to analyze popular product categories or user preferences.|
|UPDATEORDER|string|Event reported when a user modifies an order.|
|CANCELORDER|string|Event reported when a user cancels an order.|
|COMPLETEORDER|string|Event reported when a user confirms the reception.|
|CANCELCHECKOUT|string|Event reported when a user cancels an ongoing payment of a submitted order. It can be used to analyze the cause of user churn.|
|OBTAINVOUCHER|string|Event reported when a user claims a voucher.|
|CONTACTCUSTOMSERVICE|string|Event reported when a user contacts customer service personnel to query product details or make a complaint.|
|RATE|string|Event reported when a user comments on an app, service, or product.|
|INVITE|string|Event reported when a user invites other users to use the app through the social channel.|

### HAParamType

| Constant Fields |Type | Value |
|----------------|---------------|---------|
|STORENAME|string|Indicates the store or organization where a transaction occurred.|
|BRAND|string|Indicates the item brand.|
|CATEGORY|string|Indicates the item category.|
|PRODUCTID|string|Indicates the item ID.|
|PRODUCTNAME|string|Indicates the item name.|
|PRODUCTFEATURE|string|Indicates the item variant.|
|PRICE|string|Indicates the purchase price.|
|QUANTITY|string|Indicates the purchase quantity.|
|REVENUE|string|Indicates the context-specific value that is automatically accumulated for each event type.|
|CURRNAME|string|Indicates the currency type of the revenue, which is used together with $Revenue.|
|PLACEID|string|Indicates the item's location ID.|
|DESTINATION|string|Indicates the flight or travel destination.|
|ENDDATE|string|Indicates the project end date, checkout date, or lease end date.|
|BOOKINGDAYS|string|Indicates the number of days that a user can stay in the case of hotel reservation.|
|PASSENGERSNUMBER|string|Indicates the number of customers in the case of hotel reservation.|
|BOOKINGROOMS|string|Indicates the number of rooms reserved by a user in the case of hotel reservation.|
|ORIGINATINGPLACE|string|Indicates the departure location.|
|BEGINDATE|string|Indicates the departure date, hotel check-in date, or lease start date.|
|TRANSACTIONID|string|Indicates the e-commerce transaction ID.|
|CLASS|string|Indicates the level of a room reserved by a user in the case of hotel reservation.|
|CLICKID|string|Indicates the ID generated by the ad network and used to record ad clicks.|
|PROMOTIONNAME|string|Indicates the name of a marketing activity.|
|CONTENT|string|Indicates the content of a marketing activity.|
|EXTENDPARAM|string|Indicates a customized parameter.|
|MATERIALNAME|string|Indicates the name of the creative material used in a marketing activity.|
|MATERIALSLOT|string|Indicates the location where the creative material is displayed.|
|MEDIUM|string|Indicates the media where the campaign occurred, for example, CPC and email.|
|SOURCE|string|Indicates the source of a marketing activity provider, for example, Huawei PPS.|
|KEYWORDS|string|Indicates the search string or keyword.|
|OPTION|string|Indicates the checkout option entered by a user in the current settlement step.|
|STEP|string|Indicates the step where a user is currently in during the settlement process.|
|VIRTUALCURRNAME|string|Indicates the virtual currency type.|
|VOUCHER|string|Indicates the coupons used by a user in this transaction.|
|PLACE|string|Indicates the item’s location ID.|
|SHIPPING|string|Indicates the transportation fee generated in this transaction.|
|TAXFEE|string|Indicates the tax entailed in this transaction.|
|USERGROUPID|string|Indicates the ID of a group that a user joins.|
|LEVELNAME|string|Indicates the name of a game level.|
|RESULT|string|Indicates the operation result.|
|ROLENAME|string|Indicates the role of a user.|
|LEVELID|string|Indicates the name of a game level.|
|CHANNEL|string|Indicates the channel through which a user signs in.|
|SCORE|string|Indicates the score in a game.|
|SEARCHKEYWORDS|string|Indicates the search string or keyword.|
|CONTENTTYPE|string|Indicates the content type selected by a user.|
|ACHIEVEMENTID|string|Indicates the achievement ID.|
|FLIGHTNO|string|Indicates the flight number generated by the transaction system.|
|POSITIONID|string|Indicates the index of an item in the list.|
|PRODUCTLIST|string|Indicates the item list displayed to a user.|
|ACOUNTTYPE|string|Account type of a user, for example, email or mobile number.|
|OCCURREDTIME|string|Time when an account is registered.|
|EVTRESULT|string|Sign-in result.|
|PREVLEVEL|string|Level before the change.|
|CURRVLEVEL|string|Current level.|
|VOUCHERS|string|Names of vouchers applicable to a product.|
|MATERIALSLOTTYPE|string|Type of the slot where a creative material is displayed, for example, the ad slot, operations slot, or banner.|
|LISTID|string|Product ID list.|
|FILTERS|string|Filter condition.|
|SORTS|string|Sorting condition.|
|ORDERID|string|Order ID generated by your transaction system.|
|PAYTYPE|string|Payment mode selected by a user.|
|REASON|string|Change reason.|
|EXPIREDATE|string|Expiration time of a voucher.|
|VOUCHERTYPE|string|Voucher type.|
|SERVICETYPE|string|Type of a service provided for a user, for example, consultation or complaint.|
|DETAILS|string|Details of user evaluation on an object.|
|COMMENTTYPE|string|Evaluated object.|
|REGISTMETHOD|string|User source.|

---

## 4. Configuration and Description

### Using the Debug Mode for Android and iOS platforms

During the development, you can enable the debug mode to view the event records in real time, observe the results, and adjust the event reporting policies.

- Android Platform
1. Run the following command on an Android device to enable the debug mode:        
    ```
    adb shell setprop debug.huawei.hms.analytics.app <package_name>
    ```
2. To disable the debug mode, run the following command:        
    ```
    adb shell setprop debug.huawei.hms.analytics.app .none.
    ```

- iOS Platform:
1. To enable the debug mode: Choose **Product > Scheme > Edit Scheme** from the Xcode menu. On the Arguments page, click + to add the **-HADebugEnabled** parameter. After the parameter is added, click Close to save the setting.
2. To disable the debug mode: Choose **Product > Scheme > Edit Scheme** from the Xcode menu. On the Arguments page, click + to add the **-HADebugDisabled** parameter. After the parameter is added, click Close to save the setting.

### Enable HUAWEI Analytics
1. Sign in to AppGallery Connect and click My projects.
2. Find your project, and click the app for which you want to view analytics data.
3. Select any menu under HUAWEI Analytics and click Enable Analytics service.

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Examples > Analytics Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Cordova SDK Plugin is licensed under [Apache 2.0 license](LICENCE)
