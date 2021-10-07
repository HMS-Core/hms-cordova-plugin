# Cordova Plugin HMS IAP

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json](#22-configuring-the-signing-certificate-fingerprint-and-obtaining-agconnect-servicesjson)
  - [2.3. Enabling Required Services](#23-enabling-required-services)
  - [2.4. Cordova](#24-cordova)
  - [2.5. Ionic](#25-ionic)
    - [2.5.1. With Cordova Runtime](#251-with-cordova-runtime)
    - [2.5.2. With Capacitor Runtime](#252-with-capacitor-runtime)
- [3. API Reference](#3-api-reference)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei IAP SDK and Cordova platform. It exposes all functionality provided by Huawei IAP SDK.

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

### 2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the  icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page, click **agconnect-services.json** button to download the configuration file.

### 2.3. Enabling Required Services

To use HUAWEI IAP, you first need to **[enable the IAP service](https://developer.huawei.com/consumer/en/doc/distribution/app/agc-enable_service#h1-1574822945685)** and also **[set IAP parameters](https://developer.huawei.com/consumer/en/doc/distribution/app/agc-enable_service#h1-1587376818335)**.

> **NOTE:** Please save the public key obtained during the process of enabling the IAP service. It will be used for verifying the signature of data returned by the IAP SDK, ensuring that the data is not tampered with.

### 2.4. Cordova

1. Install Cordova CLI if haven't done before.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

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

    - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

#### 2.5.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

    ```bash
    ionic integrations enable cordova
    ```

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

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

    - For more details please follow [Initialize Capacitor with your app information](https://capacitorjs.com/docs/getting-started/with-ionic#initialize-capacitor-with-your-app-information).

3. Update the **`appId`** property which is specified in the **`capacitor.config.json`** file according to your project. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

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

8. Copy **`keystore(.jks)`** and **`agconnect-services.json`** files to **`<project_root>/android/app`** directory.

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

## 3. API Reference

### Method Summary

| Method                                                                         | Definition                                                                                                                                                                                                |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`isEnvReady`](#isenvready)                                                    | This API is called to check whether the currently signed-in HUAWEI ID is located in a country or region where HUAWEI IAP is available.                                                                    |
| [`isSandboxActivated`](#issandboxactivated)                                    | This API is called to check whether the sign-in HUAWEI ID and app APK version meets the requirements of the sandbox testing(sandbox testing is not available for individual developers outside of China). |
| [`obtainOwnedPurchases`](#obtainownedpurchasesownedpurchasesrequest)           | This API is called to query information about all purchased in-app products, including consumables, non-consumables, and auto-renewable subscriptions.                                                    |
| [`obtainProductInfo`](#obtainproductinfoproductinforequest)                    | This API is called to obtain in-app product details configured in AppGallery Connect.                                                                                                                     |
| [`createPurchaseIntent`](#createpurchaseintentpurchaseintentrequest)           | This API is called to create orders for PMS products, including consumables, non-consumables, and subscriptions.                                                                                          |
| [`consumeOwnedPurchase`](#consumeownedpurchaseconsumeownedpurchaserequest)     | This API is called to consume a consumable after the consumable is delivered to a user who has completed payment.                                                                                         |
| [`obtainOwnedPurchaseRecord`](#obtainownedpurchaserecordownedpurchasesrequest) | This API is called to obtain the historical consumption information about a consumable or all subscription receipts of a subscription.                                                                    |
| [`startIapActivity`](#obtainownedpurchaserecordownedpurchasesrequest)          | Brings up in-app payment pages, including Subscription Editing Page and Subscription Management Page.                                                                                                     |
| [`enableLogger`](#enablelogger)                                                | This API is called to enables the HMSLogger for sends some statistics for the development of functions in the cordova-plugin-hms-location plugin.                                                         |
| [`disableLogger`](#disablelogger)                                              | This method is called to disables the HMSLogger for stops sending some statistics for the development of functions in the cordova-plugin-hms-location plugin.                                             |

### Methods

#### isEnvReady()

This API is called to check whether the currently signed-in HUAWEI ID is located in a country or region where HUAWEI IAP is available.

| Return                      | Description                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Promise<IsEnvReadyResult>` | If the operation is successful, promise resolves to a [`IsEnvReadyResult`](#isenvreadyresult) object. |

###### Sample Code

```ts
    HMSInAppPurchases.isEnvReady()
        .then((result) => console.log("isEnvReady :: ", result))
        .catch((error) => console.log("isEnvReady :: Error!", error));
```

#### isSandboxActivated()

This API is called to check whether the sign-in HUAWEI ID and app APK version meets the requirements of the sandbox testing(sandbox testing is not available for individual developers outside of China).

| Return                              | Description                                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<IsSandboxActivatedResult>` | If the operation is successful, promise resolves to a [`IsSandboxActivatedResult`](#issandboxactivatedresult) object. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSInAppPurchases.isSandboxActivated()
        .then((result) => console.log("isSandboxActivated :: ", result))
        .catch((error) => console.log("isSandboxActivated :: Error!", error));
```

#### obtainOwnedPurchases(ownedPurchasesRequest)

This API is called to query information about all purchased in-app products, including consumables, non-consumables, and auto-renewable subscriptions.

| Parameter               | Type                                      | Definition                                                                                                                                                                           |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ownedPurchasesRequest` | [`OwnedPurchasesReq`](#ownedpurchasesreq) | Request object that must have `priceType` as key and number(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value. Ex: `{ 'priceType': 1 }` |

| Return                          | Description                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<OwnedPurchasesResult>` | If the operation is successful, promise resolves to a [`OwnedPurchasesResult`](#ownedpurchasesresult) object. Otherwise it throws an error. |

###### Sample Code

```ts
    const PRICETYPE = {
        CONSUMABLE : 0,
        NONCONSUMABLE : 1,
        SUBSCRIPTION : 2,
    };

    HMSInAppPurchases.obtainOwnedPurchases({
        priceType: PRICETYPE.CONSUMABLE
    })
        .then((result) => console.log("obtainOwnedPurchases :: ", result))
        .catch((error) => console.log("obtainOwnedPurchases :: Error!", error));
```

#### obtainProductInfo(productInfoRequest)

This API is called to obtain in-app product details configured in AppGallery Connect.

| Parameter            | Type                                | Definition                                                                                                                                                                                                                                                                                                     |
| -------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `productInfoRequest` | [`ProductInfoReq`](#productinforeq) | Request object that must have `priceType` as key and number(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value. and `productList` as key and list of strings of ids of products as value. Ex: `{ 'priceType': 0, 'productList': ['consumable_1','consumable_2'] }` |

| Return                       | Description                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Promise<ProductInfoResult>` | If the operation is successful, promise resolves to a [`ProductInfoResult`](#productinforesult) object and obtains in-app product details. Otherwise it throws an error. |

###### Sample Code

```ts
    const PRICETYPE = {
        CONSUMABLE : 0,
        NONCONSUMABLE : 1,
        SUBSCRIPTION : 2,
    };

    HMSInAppPurchases.obtainProductInfo({
        priceType: PRICETYPE.CONSUMABLE,
        productList: ["consumable_product_1", "consumable_product_2"]
    })
        .then((result) => console.log("obtainProductInfo :: ", result))
        .catch((error) => console.log("obtainProductInfo :: Error!", error));
```

#### createPurchaseIntent(purchaseIntentRequest)

This API is called to create orders for PMS products, including consumables, non-consumables, and subscriptions.

| Parameter               | Type                                      | Definition                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `purchaseIntentRequest` | [`PurchaseIntentReq`](#purchaseintentreq) | Request object that must have `priceType` as key and number(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value, and `productId` as key and string of id of the product to be purchased as value, may have `developerPayload` as key and string decided by developer as value  Ex: `{ 'priceType': 0, 'productId': 'consumable_1', 'developerPayload': 'HMSDevPayload'}` |

| Return                          | Description                                                                                                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<PurchaseIntentResult>` | If the operation is successful, promise resolves to a [`PurchaseIntentResult`](#purchaseintentresult) object and creating orders for PMS products. Otherwise it throws an error. |

###### Sample Code

```ts
    const PRICETYPE = {
        CONSUMABLE : 0,
        NONCONSUMABLE : 1,
        SUBSCRIPTION : 2,
    };

    HMSInAppPurchases.createPurchaseIntent({
        priceType: PRICETYPE.NONCONSUMABLE,
        productId: 'non_consumable_1',
        developerPayload: 'HMSCoreDeveloper',
        reservedInfor: `{"key1":"value1","key2":"value2"}`        
    })
        .then((result) => console.log("createPurchaseIntent :: ", result))
        .catch((error) => console.log("createPurchaseIntent :: Error!", error));
```

#### consumeOwnedPurchase(consumeOwnedPurchaseRequest)

This API is called to consume a consumable after the consumable is delivered to a user who has completed payment.

| Parameter                     | Type                                                  | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consumeOwnedPurchaseRequest` | [`ConsumeOwnedPurchaseReq`](#consumeOwnedPurchaseReq) | Request object that must have `inAppPurchaseData` as key and JSON string that contains purchase order details of the product to be consumed(it can be obtained by using result object of `createPurchaseIntent`  or `obtainOwnedPurchases` functions ) as value, may have `developerChallenge` as key and string decided by developer as value  Ex: `{ 'inAppPurchaseData': "{'autoRenewing':false,'orderId':'0000.000','packageName':'com.mycompany.aa.bb.cc.yy.demo','applicationId':000000,'kind':0,'productId':'consumable_1','productName':'Consumable Product 1','purchaseTime':000000,'purchaseTimeMillis':000000,'purchaseState':0,'developerPayload':'HMSDevPayload','purchaseToken':'012345678cdef.1.0123bcdef','developerChallenge':'HMSDevChallenge','responseCode':'0','consumptionState':1,'confirmed':1,'currency':'TRY','price':6,'country':'TR','payOrderId':'WPXXXXX','payType':'24'}, 'developerChallenge': 'HMSDevChallenge'}` |

| Return                                | Description                                                                                                                                                                               |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<ConsumeOwnedPurchaseResult>` | If the operation is successful, promise resolves to a [`ConsumeOwnedPurchaseResult`](#consumeownedpurchaseresult) object and consumes a consumable product. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSInAppPurchases.consumeOwnedPurchase({
          inAppPurchaseData: "inAppPurchaseData",
          developerChallenge: "HMSCoreDeveloperChallenge"     
    })
        .then((result) => console.log("consumeOwnedPurchase :: ", result))
        .catch((error) => console.log("consumeOwnedPurchase :: Error!", error));
```

#### obtainOwnedPurchaseRecord(ownedPurchasesRequest)

This API is called to obtain the historical consumption information about a consumable or all subscription receipts of a subscription.

| Parameter               | Type                                      | Definition                                                                                                                                                                           |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ownedPurchasesRequest` | [`OwnedPurchasesReq`](#ownedpurchasesreq) | Request object that must have `priceType` as key and number(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value. Ex: `{ 'priceType': 1 }` |

| Return                          | Description                                                                                                                                                                                    |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<OwnedPurchasesResult>` | If the operation is successful, promise resolves to an [`OwnedPurchasesResult`](#ownedpurchasesresult) object and obtain the historical consumption information. Otherwise it throws an error. |

###### Sample Code

```ts
    const PRICETYPE = {
        CONSUMABLE : 0,
        NONCONSUMABLE : 1,
        SUBSCRIPTION : 2,
    };

    HMSInAppPurchases.obtainOwnedPurchaseRecord({
        priceType: PRICETYPE.CONSUMABLE
    })
        .then((result) => console.log("obtainOwnedPurchaseRecord :: ", result))
        .catch((error) => console.log("obtainOwnedPurchaseRecord :: Error!", error));
```

#### startIapActivity()

Brings up in-app payment pages, including Subscription Editing Page and Subscription Management Page.

| Parameter   | Type     | Definition                                                                                                                                                                   |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `productId` | `string` | `productId` is an optional parameter that allows you to open the subscription editing page. If you do not pass the parameter, it brings up the subscription management page. |

| Return          | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void and brings the subscription page. Otherwise it throws an error. |


###### Sample Code

```ts
    // Redirecting to the subscription management page
    HMSInAppPurchases.startIapActivity()
        .then((result) => console.log("startIapActivity :: ", result))
        .catch((error) => console.log("startIapActivity :: Error!", error));
    
    // Switching to the subscription details page
    HMSInAppPurchases.startIapActivity("product_id")
        .then((result) => console.log("startIapActivity :: ", result))
        .catch((error) => console.log("startIapActivity :: Error!", error));
```

#### enableLogger()

This API is called to enables the HMSLogger for sends some statistics for the development of functions in the cordova-plugin-hms-iap plugin.

| Return          | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void and brings the subscription page. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSInAppPurchases.enableLogger()
        .then((result) => console.log("enableLogger :: ", result))
        .catch((error) => console.log("enableLogger :: Error!", error));
```

#### disableLogger()

This method is called to disables the HMSLogger for stops sending some statistics for the development of functions in the cordova-plugin-hms-iap plugin.

| Return          | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void and brings the subscription page. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSInAppPurchases.disableLogger()
        .then((result) => console.log("disableLogger :: ", result))
        .catch((error) => console.log("disableLogger :: Error!", error));
```

### Data Types

#### Status

| Parameter       | Type      | Definition                                                                                        |
| --------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `errorString`   | `string`  | The error description.                                                                            |
| `statusCode`    | `number`  | The status code. `0`: success, `1`: failure, `404`: no resource found, and `500`: internal error. |
| `statusMessage` | `string`  | The status description.                                                                           |
| `hasResolution` | `boolean` | True if whether there is a pending intent that will resolve the issue.                            |
| `isCanceled`    | `boolean` | True if the process cancelled.                                                                    |
| `isInterrupted` | `boolean` | True if the process interrupted.                                                                  |
| `isSuccess`     | `boolean` | True if the process succeeded.                                                                    |

#### OwnedPurchasesReq

| Parameter   | Type     | Definition             |
| ----------- | -------- | ---------------------- |
| `priceType` | `number` | The type of a product. |

#### ProductInfoReq

| Parameter     | Type       | Definition                             |
| ------------- | ---------- | -------------------------------------- |
| `priceType`   | `number`   | The type of a product to be queried.   |
| `productList` | `string[]` | The ID list of products to be queried. |

#### PurchaseIntentReq

| Parameter          | Type     | Definition                                   |
| ------------------ | -------- | -------------------------------------------- |
| `priceType`        | `number` | The type of a product.                       |
| `productId`        | `string` | The ID of the product to be paid.            |
| `developerPayload` | `string` | The information stored on the merchant side. |
| `reservedInfor`    | `string` | Extended field set by a merchant.            |

#### ConsumeOwnedPurchaseReq

| Parameter            | Type     | Definition                                                       |
| -------------------- | -------- | ---------------------------------------------------------------- |
| `inAppPurchaseData`  | `string` | JSON string of [`InAppPurchaseData`](#inapppurchasedata) object. |
| `developerChallenge` | `string` | The challenge customized by a developer.                         |

#### IsSandboxActivatedResult

| Parameter         | Type                | Definition                                                                                |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| `returnCode`      | `number`            | Query result code.                                                                        |
| `errMsg`          | `string`            | Result code description.                                                                  |
| `isSandboxUser`   | `boolean`           | True if A sandbox account is used.                                                        |
| `isSandboxApk`    | `boolean`           | True if the app APK version meets the requirements of the sandbox testing.                |
| `versionInApk`    | `string`            | App version information.                                                                  |
| `versionFrMarket` | `string`            | The information about the app version that is last released in HUAWEI AppGallery Connect. |
| `status`          | [`Status`](#status) | Status based on the task processing result.                                               |

#### IsEnvReadyResult

| Parameter    | Type                | Definition                                  |
| ------------ | ------------------- | ------------------------------------------- |
| `returnCode` | `number`            | Query result code.                          |
| `status`     | [`Status`](#status) | Status based on the task processing result. |

#### OwnedPurchasesResult

| Parameter                     | Type                | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `continuationToken`           | `string`            | Data location flag.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `errMsg`                      | `string`            | Result code description.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `itemList`                    | `string[]`          | The ID list of found products.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `inAppPurchaseDataList`       | `string[]`          | The information about products that have been purchased but not consumed or about all existing subscription relationships of users, which is returned using the [`obtainOwnedPurchases`](#obtainownedpurchasesownedpurchasesrequest-or-cbobtainownedpurchasesownedpurchasesrequest-success-error) method or the historical consumable information or all subscription receipts, which are returned using the [`obtainOwnedPurchaseRecord`](#obtainownedpurchaserecordownedpurchasesrequest-or-cbobtainownedpurchaserecordownedpurchasesrequest-success-error) method. The value is an array of JSON string of [`InAppPurchaseData`](#inapppurchasedata) |
| `inAppSignature`              | `string[]`          | a signature character string of each character string in `inAppPurchaseDataList`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `placedInappPurchaseDataList` | `string[]`          | Subscription relationship information about a user who has performed subscription switchover. The value is an array of JSON string of [`InAppPurchaseData`](#inapppurchasedata) object                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `placedInappSignatureList`    | `string[]`          | The signature character string of each character string in `placedInappPurchaseDataList`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `returnCode`                  | `number`            | Query result code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `status`                      | [`Status`](#status) | Status based on the task processing result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### ProductInfoResult

| Parameter         | Type                            | Definition                                               |
| ----------------- | ------------------------------- | -------------------------------------------------------- |
| `returnCode`      | `number`                        | Query result code.                                       |
| `errMsg`          | `string`                        | Result code description.                                 |
| `productInfoList` | [`ProductInfo[]`](#productinfo) | The list of in-app products that are successfully found. |
| `status`          | [`Status`](#status)             | Status based on the task processing result.              |

#### PurchaseIntentResult

| Parameter            | Type     | Definition                                                                                            |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `returnCode`         | `number` | Query result code.                                                                                    |
| `errMsg`             | `string` | Result code description.                                                                              |
| `inAppPurchaseData`  | `string` | JSON string of [`InAppPurchaseData`](#inapppurchasedata) object that contains purchase order details. |
| `inAppDataSignature` | `string` | The signed character string generated by signing the purchase data.                                   |

#### ConsumeOwnedPurchaseResult

| Parameter             | Type                | Definition                                                       |
| --------------------- | ------------------- | ---------------------------------------------------------------- |
| `consumePurchaseData` | `string`            | JSON string that contains consumption result data.               |
| `dataSignature`       | `string`            | The signature character string generated after consumption data. |
| `errMsg`              | `string`            | Result code description.                                         |
| `returnCode`          | `number`            | Query result code.                                               |
| `status`              | [`Status`](#status) | Status based on the task processing result.                      |

#### PurchaseResultInfo

| Parameter            | Type     | Definition                                                                                            |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `returnCode`         | `number` | Query result code.                                                                                    |
| `errMsg`             | `string` | Result code description.                                                                              |
| `inAppPurchaseData`  | `string` | JSON string of [`InAppPurchaseData`](#inapppurchasedata) object that contains purchase order details. |
| `inAppDataSignature` | `string` | The signed character string generated by signing the purchase data.                                   |

#### ProductInfo

| Parameter                | Type     | Definition                                                             |
| ------------------------ | -------- | ---------------------------------------------------------------------- |
| `productId`              | `string` | ID of the product                                                      |
| `priceType`              | `number` | The type of the product                                                |
| `price`                  | `string` | Displayed price of a product.                                          |
| `microsPrice`            | `number` | Product price in micro unit.                                           |
| `originalLocalPrice`     | `string` | Original price of a product                                            |
| `originalMicroPrice`     | `number` | Original price of a product in micro unit.                             |
| `currency`               | `string` | Product currency                                                       |
| `productName`            | `string` | Product name                                                           |
| `productDesc`            | `string` | Product description.                                                   |
| `subPeriod`              | `string` | Unit of a subscription period.                                         |
| `subSpecialPrice`        | `string` | Promotional price of a subscription.                                   |
| `subSpecialPriceMicros`  | `number` | Promotional price of a subscription in micro unit.                     |
| `subSpecialPeriod`       | `string` | Promotion period unit of a subscription                                |
| `subSpecialPeriodCycles` | `number` | Promotion period unit of a subscription                                |
| `subFreeTrialPeriod`     | `string` | Free trial period of a subscription.                                   |
| `subGroupId`             | `string` | ID of the subscription group to which a subscription belongs.          |
| `subGroupTitle`          | `string` | Description of the subscription group to which a subscription belongs. |
| `subProductLevel`        | `number` | Level of a subscription in its subscription group.                     |

#### InAppPurchaseData

| Parameter              | Type      | Definition                                                                                                                                                             |
| ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appInfo`              | `string`  | App information                                                                                                                                                        |
| `applicationId`        | `number`  | Application ID                                                                                                                                                         |
| `cancelledSubKeepDays` | `number`  | Number of days for retaining a subscription relationship after the subscription is canceled.                                                                           |
| `cancelReason`         | `number`  | Cause of subscription cancellation.                                                                                                                                    |
| `cancelTime`           | `number`  | Timestamp of the subscription cancellation time.                                                                                                                       |
| `country`              | `string`  | Country code, which is used to identify a country.                                                                                                                     |
| `currency`             | `string`  | Currency                                                                                                                                                               |
| `daysLasted`           | `number`  | Days of paid service, excluding the free trial period and promotion period.                                                                                            |
| `developerPayload`     | `string`  | The payload provided by developer.                                                                                                                                     |
| `expirationDate`       | `number`  | Timestamp of the subscription expiration time.                                                                                                                         |
| `expirationIntent`     | `number`  | Reason why a subscription expires.                                                                                                                                     |
| `introductoryFlag`     | `number`  | Indicates whether a subscription is in the promotion period.                                                                                                           |
| `lastOrderId`          | `string`  | Order ID generated by the payment server during fee deduction on the previous renewal date.                                                                            |
| `notifyClosed`         | `number`  | Indicates whether a user has disabled subscription notifications.                                                                                                      |
| `numOfDiscount`        | `number`  | Number of successful renewal periods with promotion.                                                                                                                   |
| `numOfPeriods`         | `number`  | Number of successful standard renewal periods (that is, renewal periods without promotion).                                                                            |
| `orderID`              | `string`  | Order ID on the Huawei payment server, which uniquely identifies a transaction and is generated by the Huawei payment server during payment.                           |
| `oriPurchaseTime`      | `number`  | Timestamp of the first fee deduction time, milliseconds since 00:00:00 on January 1, 1970.                                                                             |
| `packageName`          | `string`  | App installation package name.                                                                                                                                         |
| `price`                | `number`  | Value after the actual price of an in-app product is multiplied by 100.                                                                                                |
| `priceConsentStatus`   | `number`  | User opinion on the price increase of an in-app product.                                                                                                               |
| `productGroup`         | `string`  | ID of the subscription group to which a subscription benumbers                                                                                                         |
| `productId`            | `string`  | In-app product ID.                                                                                                                                                     |
| `productName`          | `string`  | In-app product name.                                                                                                                                                   |
| `purchaseState`        | `number`  | Transaction status.                                                                                                                                                    |
| `purchaseTime`         | `number`  | Timestamp of the purchase time, milliseconds since 00:00:00 on January 1, 1970.                                                                                        |
| `purchaseToken`        | `string`  | Purchase token, which uniquely identifies the mapping between an in-app product and a user and is generated by the Huawei payment server when the payment is complete. |
| `purchaseType`         | `number`  | Purchase type.                                                                                                                                                         |
| `quantity`             | `number`  | Purchase quantity.                                                                                                                                                     |
| `renewPrice`           | `number`  | Price used upon the next renewal.                                                                                                                                      |
| `renewStatus`          | `number`  | Renewal status.                                                                                                                                                        |
| `retryFlag`            | `number`  | Indicates whether the system still tries to renew an expired subscription.                                                                                             |
| `subscriptionId`       | `string`  | Subscription ID.                                                                                                                                                       |
| `trialFlag`            | `number`  | Indicates whether a subscription is in the free trial period.                                                                                                          |
| `isAutoRenewing`       | `boolean` | Purchase auto renewing status.                                                                                                                                         |
| `isSubValid`           | `boolean` | Valid if a user has been charged for an in-app product, the in-app product has not expired, and no refund has been made.                                               |
| `cancelledSubKeepDays` | `number`  | Number of days for retaining a subscription relationship after the subscription is canceled.                                                                           |
| `kind`                 | `number`  | Product type                                                                                                                                                           |
| `developerChallenge`   | `string`  | Challenge defined when an app initiates a consumption request, which uniquely identifies the consumption request. This parameter exists only for one-off products.     |
| `consumptionState`     | `number`  | Consumption status, which exists only for one-off products.                                                                                                            |
| `payOrderId`           | `string`  | Merchant ID, which uniquely identifies a transaction and is generated by the Huawei IAP server during payment.                                                         |
| `payType`              | `string`  | Payment method.                                                                                                                                                        |
| `deferFlag`            | `number`  | Indicates whether to postpone the settlement date. The value 1 indicates that the settlement date is postponed.                                                        |
| `oriSubscriptionId`    | `string`  | Original subscription ID.                                                                                                                                              |
| `cancelWay`            | `number`  | Subscription cancellation initiator.                                                                                                                                   |
| `cancellationTime`     | `number`  | Subscription cancellation time in UTC.                                                                                                                                 |
| `resumeTime`           | `number`  | Time when a subscription is resumed.                                                                                                                                   |

---

## 4. Configuration and Description

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova IAP plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

## 5. Sample Project

You can find the sample projects on [HMS Core > Samples > In-App Purchases](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei IAP Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
