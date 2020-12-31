# Cordova Plugin HMS Ads

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Cordova](#22-cordova)
  - [2.3. Ionic](#23-ionic)
    - [2.3.1. With Cordova Runtime](#231-with-cordova-runtime)
    - [2.3.2. With Capacitor Runtime](#232-with-capacitor-runtime)
- [3. API Reference](#3-api-reference)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Ads SDK and Cordova platform. It exposes all functionality provided by Huawei Ads SDK.

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

### 2.2. Cordova

1. Install Cordova CLI if haven't done before.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

4. Install `HMS Ads plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-ads
    ```

5. Run the app.

    ```bash
    cordova run android --device
    ```

### 2.3 Ionic

1. Install Ionic CLI and other required tools if haven't done before.

    ```bash
    npm install -g @ionic/cli cordova-res native-run
    ```

2. Create a new Ionic project or use existing Ionic project.

    - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

#### 2.3.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

    ```bash
    ionic integrations enable cordova
    ```

2. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

3. Install `HMS Ads plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-ads
    ```

4. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-ads
    ```

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Run the app.

   ```bash
   ionic cordova run android --device
   ```

#### 2.3.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Initialize **Capacitor** if haven't done before.

    ```bash
    npx cap init [appName] [appId]
    ```

    - For more details please follow [Initialize Capacitor with your app information](https://capacitorjs.com/docs/getting-started/with-ionic#initialize-capacitor-with-your-app-information).

3. Install `HMS Ads plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-ads
    ```

4. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-ads
    ```

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

7. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories**.

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

8. Updates dependencies, and copy any web assets to your project.

    ```bash
    npx cap sync
    ```

9. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. API Reference

### HMSAds

#### Method Summary

| Method                                                 | Return Type                    | Description                                                                                           |
| ------------------------------------------------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| init()                                                 | `Promise<void>`                | Initializes the HUAWEI Ads SDK.                                                                       |
| getSDKVersion()                                        | `Promise<string>`              | Obtains the version number of the HUAWEI Ads SDK.                                                     |
| getRequestOptions()                                    | `Promise<HMSRequestOptions>`   | Obtains the global request configuration.                                                             |
| setRequestOptions(requestOptions:HMSRequestOptions)    | `Promise<void>`                | Sets the global ad request configuration.                                                             |
| setConsent(consent:string)                             | `Promise<void>`                | Sets the user consent string that complies with TCF 2.0.                                              |
| enableLogger()                                         | `Promise<any>`                 | Enables HMS Logger                                                                                    |
| disableLogger()                                        | `Promise<any>`                 | Disables HMS Logger                                                                                   |
| addTestDeviceId(testDeviceId:string)                   | `Promise<void>`                | Adds a test device ID.                                                                                |
| getTestDeviceId()                                      | `Promise<string>`              | Obtains a test device ID.                                                                             |
| setUnderAgeOfPromise(underAgeOfPromise:boolean)        | `Promise<void>`                | Sets the flag indicating whether to process ad requests as directed to users under the age of consent |
| setConsentStatus(consentStatus:ConsentStatus)          | `Promise<void>`                | Sets user consent.                                                                                    |
| setDebugNeedConsent(debugNeedConsent:DebugNeedConsent) | `Promise<any>`                 | Sets whether to obtain user consent for debugging.                                                    |
| requestConsentUpdate()                                 | `Promise<ConsentUpdateResult>` | Requests user consent updates.                                                                        |
| verifyAdId(adId:string, isLimitAdTracking:boolean)     | `Promise<boolean>`             | Checks whether the OAID and setting of Disable personalized ads are valid.                            |
| getAdvertisingIdInfo()                                 | `Promise<OaidResult>`          | Obtains an OaidResult object.                                                                         |
| referrerClientStartConnection(isTest?:boolean)         | `Promise<number>`              | Starts to connect to the install referrer service.                                                    |
| referrerClientEndConnection()                          | `Promise<void>`                | Ends the service connection and releases all occupied resources.                                      |
| referrerClientIsReady()                                | `Promise<boolean>`             | Checks whether the service connection is ready.                                                       |
| getInstallReferrer()                                   | `Promise<ReferrerDetails>`     | Obtains install referrer information.                                                                 |

#### Methods

##### init()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function init() {
        await HMSAds.init();
}
```

##### getSDKVersion()

###### Return Type

| Type              | Description                                         |
| ----------------- | --------------------------------------------------- |
| `Promise<string>` | Obtains the version number of the HMS Core Ads SDK. |

###### Sample Code

```ts
async function getSDKVersion() {
    HMSAds.getSDKVersion()
        .then((result) => console.log("getSDKVersion :: ", result))
            .catch((error) => console.log("getSDKVersion :: Error!", error));
}
```

##### getRequestOptions()

###### Return Type

| Type                         | Description                   |
| ---------------------------- | ----------------------------- |
| `Promise<HMSRequestOptions>` | Global request configuration. |

###### Sample Code

```ts
async function getRequestOptions() {
    HMSAds.getRequestOptions()
        .then((result) => console.log("getRequestOptions :: ", JSON.stringify(result)))
            .catch((error) => console.log("getRequestOptions :: Error!", error));
}
```

##### setRequestOptions(requestOptions:HMSRequestOptions)

###### Parameters

| Name           | Type              | Description                   |
| -------------- | ----------------- | ----------------------------- |
| requestOptions | HMSRequestOptions | Global request configuration. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setRequestOptions() {
    const reqOpt = {
        adContentClassification: HMSConstants.AdContentClassification.AD_CONTENT_CLASSIFICATION_W,
        appLang: "En",
        appCountry: "TR",
        tagForChildProtection: HMSConstants.ChildProtection.TAG_FOR_CHILD_PROTECTION_FALSE,
        tagForUnderAgeOfPromise: HMSConstants.UnderAgeOfPromise.PROMISE_TRUE,
        nonPersonalizedAd: HMSConstants.NonPersonalizedAd.ALLOW_ALL,
    };
    await HMSAds.setRequestOptions(requestOptions);
}
```

##### setConsent(consent:string)

###### Parameters

| Name    | Type   | Description                                                                |
| ------- | ------ | -------------------------------------------------------------------------- |
| consent | string | User consent string, which complies with Consent String Format in TCF 2.0. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setConsent() {
        await HMSAds.setConsent(consent);
}
```

##### enableLogger()

###### Return Type

| Type           | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<any>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function enableLogger() {
        await HMSAds.enableLogger();
}
```

##### disableLogger()

###### Return Type

| Type           | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<any>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function disableLogger() {
        await HMSAds.disableLogger();
}
```

##### addTestDeviceId(testDeviceId:string)

###### Parameters

| Name         | Type   | Description          |
| ------------ | ------ | -------------------- |
| testDeviceId | string | ID of a test device. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function addTestDeviceId() {
        await HMSAds.addTestDeviceId(testDeviceId);
}
```

##### getTestDeviceId()

###### Return Type

| Type              | Description          |
| ----------------- | -------------------- |
| `Promise<string>` | ID of a test device. |

###### Sample Code

```ts
async function getTestDeviceId() {
    HMSAds.getTestDeviceId()
        .then((result) => console.log("getTestDeviceId :: ", result))
            .catch((error) => console.log("getTestDeviceId :: Error!", error));
}
```

##### setUnderAgeOfPromise(underAgeOfPromise:boolean)

###### Parameters

| Name              | Type    | Description                                                           |
| ----------------- | ------- | --------------------------------------------------------------------- |
| underAgeOfPromise | boolean | true: under the age of consent.false: at or above the age of consent. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setUnderAgeOfPromise() {
        const underAgeOfPromise = 'true';
        await HMSAds.setUnderAgeOfPromise(underAgeOfPromise);
}
```

##### setConsentStatus(consentStatus:ConsentStatus)

###### Parameters

| Name          | Type          | Description   |
| ------------- | ------------- | ------------- |
| consentStatus | ConsentStatus | User consent. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setConsentStatus() {
        await HMSAds.setConsentStatus(consentStatus);
}
```

##### setDebugNeedConsent(debugNeedConsent:DebugNeedConsent)

###### Parameters

| Name             | Type             | Description                                             |
| ---------------- | ---------------- | ------------------------------------------------------- |
| debugNeedConsent | DebugNeedConsent | Indicates whether to obtain user consent for debugging. |

###### Return Type

| Type           | Description                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<any>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setDebugNeedConsent() {
        await HMSAds.setDebugNeedConsent(debugNeedConsent);
}
```

##### requestConsentUpdate()

###### Return Type

| Type                           | Description                               |
| ------------------------------ | ----------------------------------------- |
| `Promise<ConsentUpdateResult>` | Listener result for user consent updates. |

###### Sample Code

```ts
async function requestConsentUpdate() {
    HMSAds.requestConsentUpdate()
        .then((result) => console.log("requestConsentUpdate :: ", JSON.stringify(result)))
            .catch((error) => console.log("requestConsentUpdate :: Error!", error));
}
```

##### verifyAdId(adId:string, isLimitAdTracking:boolean)

###### Parameters

| Name              | Type    | Description                          |
| ----------------- | ------- | ------------------------------------ |
| adId              | string  | OAID.                                |
| isLimitAdTracking | boolean | Setting of Disable personalized ads. |

###### Return Type

| Type               | Description                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `Promise<boolean>` | true if the OAID and setting of Disable personalized ads are valid. false if the OAID and setting of Disable personalized ads are invalid. |

###### Sample Code

```ts
async function verifyAdId() {

    HMSAds.verifyAdId(adId, isLimitAdTracking)
        .then((result) => console.log("verifyAdId :: ", result))
            .catch((error) => console.log("verifyAdId :: Error!", error));
}
```

##### getAdvertisingIdInfo()

###### Return Type

| Type                  | Description                                             |
| --------------------- | ------------------------------------------------------- |
| `Promise<OaidResult>` | An OaidResult object if the API is called successfully. |

###### Sample Code

```ts
async function getAdvertisingIdInfo() {
    HMSAds.getAdvertisingIdInfo()
        .then((result) => console.log("getAdvertisingIdInfo :: ", JSON.stringify(result)))
            .catch((error) => console.log("getAdvertisingIdInfo :: Error!", error));
}
```

##### referrerClientStartConnection(isTest?:boolean)

###### Parameters

| Name    | Type    | Description                                                                                                                       |
| ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| isTest? | boolean | Indicates whether to enable the test mode. The default value is false. Change the value to true if you want to use the test mode. |

###### Return Type

| Type              | Description                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Promise<number>` | Connection status. The options are as follows: -1: Failed to connect to the service. 0: Connected to the service successfully. 1: The service does not exist. 2: The service is not supported. 3: A call error occurred. |

###### Sample Code

```ts
async function referrerClientStartConnection() {
    const isTest = 'true';
    HMSAds.referrerClientStartConnection(isTest)
        .then((result) => console.log("referrerClientStartConnection :: ", result))
            .catch((error) => console.log("referrerClientStartConnection :: Error!", error));
}
```

##### referrerClientEndConnection()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function referrerClientEndConnection() {
        await HMSAds.referrerClientEndConnection();
}
```

##### referrerClientIsReady()

###### Return Type

| Type               | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `Promise<boolean>` | true if the service is connected and ready to be called. false otherwise. |

###### Sample Code

```ts
async function referrerClientIsReady() {
    HMSAds.referrerClientIsReady()
        .then((result) => console.log("referrerClientIsReady :: ", result))
            .catch((error) => console.log("referrerClientIsReady :: Error!", error));
}
```

##### getInstallReferrer()

###### Return Type

| Type                       | Description              |
| -------------------------- | ------------------------ |
| `Promise<ReferrerDetails>` | A ReferrerDetails object |

###### Sample Code

```ts
async function getInstallReferrer() {
    HMSAds.getInstallReferrer()
        .then((result) => console.log("getInstallReferrer :: ", JSON.stringify(result)))
            .catch((error) => console.log("getInstallReferrer :: Error!", error));
}
```

### HMSBannerAd

#### Method Summary

| Method                                                 | Return Type            | Description                                                                          |
| ------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------ |
| on(eventName:  BannerAdEvents,  callback:  () => void) | `void`                 | Subscribe to given event.                                                            |
| create(divId:  string)                                 | `Promise<HMSBannerAd>` | Creates the Banner Ad.                                                               |
| scroll()                                               | `void`                 | Scroll method for Ionic                                                              |
| getAdId()                                              | `Promise<string>`      | Obtains an ad slot ID.                                                               |
| setAdId(adId:  string)                                 | `Promise<void>`        | Sets an ad slot ID.                                                                  |
| getBannerAdSize()                                      | `Promise<AdSize>`      | Obtains the size of a banner ad.                                                     |
| setBannerAdSize(bannerAdSize:  BannerAdSize or AdSize) | `Promise<void>`        | Sets the banner ad size.                                                             |
| setBackgroundColor(bgColor:  Color)                    | `Promise<void>`        | Sets the background color for banner ad.                                             |
| setBannerRefresh(bannerRefresh:  number)               | `Promise<void>`        | Sets the refresh interval for banner ads.                                            |
| setAdListener()                                        | `Promise<void>`        | Sets an ad listener for an ad view.                                                  |
| isLoading()                                            | `Promise<boolean>`     | Checks whether an ad is being loaded.                                                |
| loadAd(adParam:  AdParam = {})                         | `Promise<void>`        | Loads an ad.                                                                         |
| pause()                                                | `Promise<void>`        | Pauses any additional processing related to an ad view.                              |
| resume()                                               | `Promise<void>`        | Resumes an ad view after the pause() method is called last time.                     |
| destroy()                                              | `Promise<void>`        | Destroys an ad view.                                                                 |
| getHeight()                                            | `Promise<number>`      | Obtains the ad height for banner ad, in dp                                           |
| getHeightPx()                                          | `Promise<number>`      | Obtains the ad height, in px. If it fails to be obtained, –1 is returned.            |
| getWidth()                                             | `Promise<number>`      | Obtains the ad width, in dp.                                                         |
| getWidthPx()                                           | `Promise<number>`      | Obtains the ad width, in px. If it fails to be obtained, –1 is returned.             |
| isAutoHeightSize()                                     | `Promise<boolean>`     | Checks whether an adaptive height is used.                                           |
| isDynamicSize()                                        | `Promise<boolean>`     | Checks whether a dynamic size is used.                                               |
| isFullWidthSize()                                      | `Promise<boolean>`     | Checks whether a full-screen width is used.                                          |
| getCurrentDirectionBannerSize(width:  number)          | `Promise<AdSize>`      | Creates a banner ad size based on the current device orientation and a custom width. |
| getLandscapeBannerSize(width:  number)                 | `Promise<AdSize>`      | Creates a banner ad size based on a custom width in landscape orientation.           |
| getPortraitBannerSize(width:  number)                  | `Promise<AdSize>`      | Creates a banner ad size based on a custom width in portrait orientation.            |

#### Methods

##### on(eventName: BannerAdEvents,  callback: () => void)

###### Parameters

| Name      | Type           | Description                                     |
| --------- | -------------- | ----------------------------------------------- |
| eventName | BannerAdEvents | One of the BannerAdEvents to listen             |
| callback  | void           | Callback to be called when the event triggered. |

###### Sample Code

```ts
function on() {
    this.bannerAd.on(HMSConstants.BannerAdEvents.BANNER_AD_FAILED, async(result) => {
        alert('BANNER_AD_FAILED :: ' + result.message);
    });
}
```

##### create(divId: string)

###### Parameters

| Name  | Type   | Description                          |
| ----- | ------ | ------------------------------------ |
| divId | string | Div element id for placing banner ad |

###### Return Type

| Type                   | Description        |
| ---------------------- | ------------------ |
| `Promise<HMSBannerAd>` | Banner ad instance |

###### Sample Code

```ts
async function create() {
     bannerAd.create("bannerAd");
}
```

##### scroll()

###### Sample Code

```ts
function scroll() {
        bannerAd.scroll();
}
```

##### getAdId()

###### Return Type

| Type              | Description |
| ----------------- | ----------- |
| `Promise<string>` | Ad slot ID. |

###### Sample Code

```ts
async function getAdId() {
        await bannerAd.getAdId();
}
```

##### setAdId(adId: string)

###### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| adId | string | Ad slot ID. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAdId() {
        const adId = 'testw6vs28auh3';
        await bannerAd.setAdId(adId);
}
```

##### getBannerAdSize()

###### Return Type

| Type              | Description                                    |
| ----------------- | ---------------------------------------------- |
| `Promise<AdSize>` | An ad size object with width and height values |

###### Sample Code

```ts
async function getBannerAdSize() {
        await bannerAd.getBannerAdSize();
}
```

##### setBannerAdSize(bannerAdSize: BannerAdSize | AdSize)

###### Parameters

| Name         | Type                   | Description |
| ------------ | ---------------------- | ----------- |
| bannerAdSize | BannerAdSize \| AdSize | null        |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setBannerAdSize() {
        const bannerAdSize = 'todo';
        bannerAd.setBannerAdSize(bannerAdSize);
}
```

##### setBackgroundColor(bgColor: Color)

###### Parameters

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| bgColor | Color | null        |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setBackgroundColor() {
        const bgColor = HMSConstants.BannerAdSize.BANNER_SIZE_300_250;
        await HMS<name>.setBackgroundColor(bgColor);
}
```

##### setBannerRefresh(bannerRefresh: number)

###### Parameters

| Name          | Type   | Description                                                    |
| ------------- | ------ | -------------------------------------------------------------- |
| bannerRefresh | number | Refresh interval, in seconds. The value ranges from 30 to 120. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setBannerRefresh() {
        const bannerRefresh = 50;
        await bannerAd.setBannerRefresh(bannerRefresh);
}
```

##### setAdListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAdListener() {
        await bannerAd.setAdListener();
}
```

##### isLoading()

###### Return Type

| Type               | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `Promise<boolean>` | true if an ad is being loaded. false if an ad is not being loaded. |

###### Sample Code

```ts
async function isLoading() {
    bannerAd.isLoading()
        .then((result) => console.log("isLoading :: ", result))
            .catch((error) => console.log("isLoading :: Error!", error));
}
```

##### loadAd(adParam: AdParam = {})

###### Parameters

| Name    | Type         | Description            |
| ------- | ------------ | ---------------------- |
| adParam | AdParam = {} | Defines an ad request. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function loadAd() {
        await bannerAd.loadAd(adParam);
}
```

##### pause()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function pause() {
        await bannerAd.pause();
}
```

##### resume()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function resume() {
        await bannerAd.resume();
}
```

##### destroy()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function destroy() {
        await bannerAd.destroy();
}
```

##### getHeight()

###### Return Type

| Type              | Description      |
| ----------------- | ---------------- |
| `Promise<number>` | Ad height, in dp |

###### Sample Code

```ts
async function getHeight() {
        await bannerAd.getHeight();
}
```

##### getHeightPx()

###### Return Type

| Type              | Description        |
| ----------------- | ------------------ |
| `Promise<number>` | Ad height, in px.. |

###### Sample Code

```ts
async function getHeightPx() {
        await bannerAd.getHeightPx();
}
```

##### getWidth()

###### Return Type

| Type              | Description      |
| ----------------- | ---------------- |
| `Promise<number>` | Ad width, in dp. |

###### Sample Code

```ts
async function getWidth() {
        await HMS<name>.getWidth();
}
```

##### getWidthPx()

###### Return Type

| Type              | Description      |
| ----------------- | ---------------- |
| `Promise<number>` | Ad width, in px. |

###### Sample Code

```ts
async function getWidthPx() {
        await HMS<name>.getWidthPx();
}
```

##### isAutoHeightSize()

###### Return Type

| Type               | Description                                                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Setting indicating whether an adaptive height is used for the bannerView's size. true: yes false: no (The default value is false.) |

###### Sample Code

```ts
async function isAutoHeightSize() {
    bannerAd.isAutoHeightSize()
        .then((result) => console.log("isAutoHeightSize :: ", result))
            .catch((error) => console.log("isAutoHeightSize :: Error!", error));
}
```

##### isDynamicSize()

###### Return Type

| Type               | Description                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Setting indicating whether dynamic size is used for the bannerView's size. true: yes false: no (The default value is false.) |

###### Sample Code

```ts
async function isDynamicSize() {
    bannerAd.isDynamicSize()
        .then((result) => console.log("isDynamicSize :: ", result))
            .catch((error) => console.log("isDynamicSize :: Error!", error));
}
```

##### isFullWidthSize()

###### Return Type

| Type               | Description                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Setting indicating whether full width size is used for the bannerView's size. true: yes false: no (The default value is false.) |

###### Sample Code

```ts
async function isFullWidthSize() {
    bannerAd.isFullWidthSize()
        .then((result) => console.log("isFullWidthSize :: ", result))
            .catch((error) => console.log("isFullWidthSize :: Error!", error));
}
```

##### getCurrentDirectionBannerSize(width: number)

###### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number | Width.      |

###### Return Type

| Type              | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Promise<AdSize>` | Banner ad size if context is not null and the creation is successful; BannerAdSize.INVALID if context is null or the creation fails. |

###### Sample Code

```ts
async function getCurrentDirectionBannerSize() {
    const width = 25;
    bannerAd.getCurrentDirectionBannerSize(width)
        .then((result) => console.log("getCurrentDirectionBannerSize :: ", JSON.stringify(result)))
            .catch((error) => console.log("getCurrentDirectionBannerSize :: Error!", error));
}
```

##### getLandscapeBannerSize(width: number)

###### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number | Width       |

###### Return Type

| Type              | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Promise<AdSize>` | Banner ad size if context is not null and the creation is successful; BannerAdSize.INVALID if context is null or the creation fails. |

###### Sample Code

```ts
async function getLandscapeBannerSize() {
    const width = 25;
    bannerAd.getLandscapeBannerSize(width)
        .then((result) => console.log("getLandscapeBannerSize :: ", JSON.stringify(result)))
            .catch((error) => console.log("getLandscapeBannerSize :: Error!", error));
}
```

##### getPortraitBannerSize(width: number)

###### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| width | number | Width       |

###### Return Type

| Type              | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Promise<AdSize>` | Banner ad size if context is not null and the creation is successful; BannerAdSize.INVALID if context is null or the creation fails. |

###### Sample Code

```ts
async function getPortraitBannerSize() {
    const width = 25;
    bannerAd.getPortraitBannerSize(width)
        .then((result) => console.log("getPortraitBannerSize :: ", JSON.stringify(result)))
            .catch((error) => console.log("getPortraitBannerSize :: Error!", error));
}
```

### HMSInterstitialAd

#### Method Summary

| Method                                                       | Return Type                  | Description                                        |
| ------------------------------------------------------------ | ---------------------------- | -------------------------------------------------- |
| on(eventName:  InterstitialAdEvents,  callback:  () => void) | `void`                       | Subscribe to given event.                          |
| create(useActivity:  boolean)                                | `Promise<HMSInterstitialAd>` | Creates Interstitial Ad                            |
| show()                                                       | `Promise<void>`              | Shows an interstitial ad.                          |
| isLoaded()                                                   | `Promise<boolean>`           | Checks whether an interstitial ad has been loaded. |
| isLoading()                                                  | `Promise<boolean>`           | Checks whether an interstitial ad is being loaded. |
| loadAd(adParam:  AdParam = {})                               | `Promise<void>`              | Initiates a request to load an interstitial ad.    |
| setAdId(adId:  string)                                       | `Promise<void>`              | Sets the slot ID for an interstitial ad.           |
| getAdId()                                                    | `Promise<string>`            | Obtains the slot ID for an interstitial ad.        |
| setAdListener()                                              | `Promise<void>`              | Sets the listener for interstitial ad status.      |
| setRewardAdListener()                                        | `Promise<void>`              | Sets the listener for rewarded ad loading.         |

#### Methods

##### on(eventName: InterstitialAdEvents,  callback: () => void)

###### Parameters

| Name      | Type                 | Description                                     |
| --------- | -------------------- | ----------------------------------------------- |
| eventName | InterstitialAdEvents | One of the InterstitialAdEvents to listen       |
| callback  | void                 | Callback to be called when the event triggered. |

###### Sample Code

```ts
function on() {
    interstitialAd.on(HMSConstants.InterstitialAdEvents.INTERSTITIAL_AD_LOADED,
        async() => {
        console.log("Interstitial Ad loaded!")
        }
    );
}
```

##### create(useActivity: boolean)

###### Parameters

| Name        | Type    | Description                                                                                         |
| ----------- | ------- | --------------------------------------------------------------------------------------------------- |
| useActivity | boolean | Setting for creating interstitialAd using activty or context. true: yes, false: no , default: false |

###### Return Type

| Type                         | Description              |
| ---------------------------- | ------------------------ |
| `Promise<HMSInterstitialAd>` | Interstitial ad instance |

###### Sample Code

```ts
async function create() {
        await interstitialAd.create(useActivity);
}
```

##### show()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function show() {
        await interstitialAd.show();
}
```

##### isLoaded()

###### Return Type

| Type               | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `Promise<boolean>` | true if an interstitial ad has been loaded; false otherwise. |

###### Sample Code

```ts
async function isLoaded() {
    interstitialAd.isLoaded()
        .then((result) => console.log("isLoaded :: ", result))
            .catch((error) => console.log("isLoaded :: Error!", error));
}
```

##### isLoading()

###### Return Type

| Type               | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `Promise<boolean>` | true if an interstitial ad is being loaded; false otherwise. |

###### Sample Code

```ts
async function isLoading() {
    interstitialAd.isLoading()
        .then((result) => console.log("isLoading :: ", result))
            .catch((error) => console.log("isLoading :: Error!", error));
}
```

##### loadAd(adParam: AdParam = {})

###### Parameters

| Name    | Type         | Description                       |
| ------- | ------------ | --------------------------------- |
| adParam | AdParam = {} | Ad request parameter information. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function loadAd() {
        await interstitialAd.loadAd(adParam);
}
```

##### setAdId(adId: string)

###### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| adId | string | Ad slot ID. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAdId() {
        const adId = 'testb4znbuh3n2';
        await interstitialAd.setAdId(adId);
}
```

##### getAdId()

###### Return Type

| Type              | Description                             |
| ----------------- | --------------------------------------- |
| `Promise<string>` | Ad slot ID if it is set; null otherwise |

###### Sample Code

```ts
async function getAdId() {
        await interstitialAd.getAdId();
}
```

##### setAdListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAdListener() {
        await interstitialAd.setAdListener();
}
```

##### setRewardAdListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setRewardAdListener() {
        await interstitialAd.setRewardAdListener();
}
```

### HMSNativeAd

#### Method Summary

| Method                                                 | Return Type                         | Description                                                                                     |
| ------------------------------------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| on(eventName:  NativeAdEvents,  callback:  () => void) | `void`                              | Subscribe to given event.                                                                       |
| create(options:  NativeAdOptions)                      | `Promise<HMSNativeAd>`              | Creates a Native ad                                                                             |
| scroll()                                               | `void`                              | Handles scroll for Ionic                                                                        |
| loadAd(options:  NativeAdLoadOptions = {})             | `Promise<void>`                     | Requests a native ad.                                                                           |
| show()                                                 | `Promise<void>`                     | Shows native ad                                                                                 |
| isLoading()                                            | `Promise<boolean>`                  | Checks whether an ad is being loaded.                                                           |
| destroy()                                              | `Promise<void>`                     | Destroys an ad object. After calling destroy(), do not call any other methods on the ad object. |
| dislikeAd(dislikeReason:  string)                      | `Promise<void>`                     | Dislikes the current ad as requested by a user.                                                 |
| setAllowCustomClick()                                  | `Promise<void>`                     | Enables custom click gestures.                                                                  |
| getAdSource()                                          | `Promise<string>`                   | Obtains an ad source.                                                                           |
| getDescription()                                       | `Promise<string>`                   | Obtains the description of an ad.                                                               |
| getCallToAction()                                      | `Promise<string>`                   | Obtains the text to be displayed on a button, for example, View details or Install.             |
| getDislikeAdReasons()                                  | `Promise<string[]>`                 | Obtains the "Dislike This Ad" option.                                                           |
| isCustomClickAllowed()                                 | `Promise<boolean>`                  | Checks whether custom click gestures are enabled.                                               |
| isCustomDislikeThisAdEnabled()                         | `Promise<boolean>`                  | Checks whether custom ad disliking is enabled.                                                  |
| recordClickEvent()                                     | `Promise<void>`                     | Reports a custom click event.                                                                   |
| recordImpressionEvent(impressionData:  any)            | `Promise<boolean>`                  | Reports an ad impression.                                                                       |
| getUniqueId()                                          | `Promise<string>`                   | Obtains the unique ID of an ad.                                                                 |
| setDislikeAdListener()                                 | `Promise<void>`                     | Sets an ad disliking listener.                                                                  |
| gotoWhyThisAdPage(useView:  boolean)                   | `Promise<void>`                     | Goes to the Why this ad page.                                                                   |
| getAdSign()                                            | `Promise<string>`                   | Obtains a flag indicating whether a task is an ad task.                                         |
| getTitle()                                             | `Promise<string>`                   | Obtains the title of an ad.                                                                     |
| getWhyThisAd()                                         | `Promise<string>`                   | Obtains the redirection link to Why this ad.                                                    |
| onAdClose(keywords:  string[])                         | `Promise<void>`                     | Called when an ad is closed.                                                                    |
| getNativeAdConfiguration()                             | `Promise<NativeAdConfiguration>`    | Ad configuration                                                                                |
| videoOperatorGetAspectRatio()                          | `Promise<VideoOperatorAspectRatio>` | Obtains the video aspect ratio.                                                                 |
| videoOperatorHasVideo()                                | `Promise<boolean>`                  | Checks whether ad content contains a video.                                                     |
| videoOperatorIsCustomizeOperateEnabled()               | `Promise<boolean>`                  | Checks whether a custom player control is used for a video ad.                                  |
| videoOperatorIsMuted()                                 | `Promise<boolean>`                  | Checks whether a video is muted.                                                                |
| videoOperatorMute(mute:  boolean)                      | `Promise<void>`                     | Sets whether to mute a video when a custom player control is used.                              |
| videoOperatorPause()                                   | `Promise<void>`                     | Pauses video playback when a custom player control is used.                                     |
| videoOperatorPlay()                                    | `Promise<void>`                     | Plays a video when a custom player control is used.                                             |
| videoOperatorStop()                                    | `Promise<void>`                     | Stops video playback when a custom player control is used.                                      |

#### Methods

##### on(eventName: NativeAdEvents,  callback: () => void)

###### Parameters

| Name      | Type           | Description                                     |
| --------- | -------------- | ----------------------------------------------- |
| eventName | NativeAdEvents | One of the NativeAdEvents to listen             |
| callback  | void           | Callback to be called when the event triggered. |

###### Sample Code

```ts
function on() {
    nativeAd.on(HMSConstants.NativeAdEvents.NATIVE_AD_LOADED, async() => {
        console.log("Native Ad Loaded :: ");
    });
}
```

##### create(options: NativeAdOptions)

###### Parameters

| Name    | Type            | Description              |
| ------- | --------------- | ------------------------ |
| options | NativeAdOptions | Native ad create options |

###### Return Type

| Type                   | Description        |
| ---------------------- | ------------------ |
| `Promise<HMSNativeAd>` | Native ad instance |

###### Sample Code

```ts
async function create() {
        const nativeAdOptions = { requestCustomDislikeThisAd: true };
        await nativeAd.create({
        div: "native-ad-element",
        template,
        bg: "#E4E4E4"});
}
```

##### scroll()

###### Sample Code

```ts
function scroll() {
        nativeAd.scroll();
}
```

##### loadAd(options: NativeAdLoadOptions = {})

###### Parameters

| Name    | Type                     | Description            |
| ------- | ------------------------ | ---------------------- |
| options | NativeAdLoadOptions = {} | Native ad load options |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function loadAd() {
        const options = { requestCustomDislikeThisAd: true };
        await nativeAd.loadAd(options);
}
```

##### show()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function show() {
        await nativeAd.show();
}
```

##### isLoading()

###### Return Type

| Type               | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `Promise<boolean>` | true if an ad is being loaded. false if an ad is not being loaded. |

###### Sample Code

```ts
async function isLoading() {
    nativeAd.isLoading()
        .then((result) => console.log("isLoading :: ", result))
            .catch((error) => console.log("isLoading :: Error!", error));
}
```

##### destroy()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function destroy() {
        await nativeAd.destroy();
}
```

##### dislikeAd(dislikeReason: string)

###### Parameters

| Name          | Type   | Description       |
| ------------- | ------ | ----------------- |
| dislikeReason | string | Dislike ad reason |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function dislikeAd() {
        const dislikeReason = 'Reason.';
        await nativeAd.dislikeAd(dislikeReason);
}
```

##### setAllowCustomClick()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAllowCustomClick() {
        await nativeAd.setAllowCustomClick();
}
```

##### getAdSource()

###### Return Type

| Type              | Description |
| ----------------- | ----------- |
| `Promise<string>` | Ad source.  |

###### Sample Code

```ts
async function getAdSource() {
    nativeAd.getAdSource()
        .then((result) => console.log("getAdSource :: ", result))
            .catch((error) => console.log("getAdSource :: Error!", error));
}
```

##### getDescription()

###### Return Type

| Type              | Description     |
| ----------------- | --------------- |
| `Promise<string>` | Ad description. |

###### Sample Code

```ts
async function getDescription() {
    nativeAd.getDescription()
        .then((result) => console.log("getDescription :: ", result))
            .catch((error) => console.log("getDescription :: Error!", error));
}
```

##### getCallToAction()

###### Return Type

| Type              | Description                       |
| ----------------- | --------------------------------- |
| `Promise<string>` | Text to be displayed on a button. |

###### Sample Code

```ts
async function getCallToAction() {
    nativeAd.getCallToAction()
        .then((result) => console.log("getCallToAction :: ", result))
            .catch((error) => console.log("getCallToAction :: Error!", error));        
}
```

##### getDislikeAdReasons()

###### Return Type

| Type                | Description               |
| ------------------- | ------------------------- |
| `Promise<string[]>` | "Dislike This Ad" option. |

###### Sample Code

```ts
async function getDislikeAdReasons() {
    nativeAd.getDislikeAdReasons()
        .then((result) => console.log("getDislikeAdReasons :: ", JSON.stringify(result)))
            .catch((error) => console.log("getDislikeAdReasons :: Error!", error));    
}
```

##### isCustomClickAllowed()

###### Return Type

| Type               | Description                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | SSetting indicating whether custom click gestures are enabled. true: yes false: no The default value is false. |

###### Sample Code

```ts
async function isCustomClickAllowed() {
    nativeAd.isCustomClickAllowed()        
        .then((result) => console.log("isCustomClickAllowed :: ", result))
            .catch((error) => console.log("isCustomClickAllowed :: Error!", error));    
}
```

##### isCustomDislikeThisAdEnabled()

###### Return Type

| Type               | Description                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Setting indicating whether custom ad disliking is enabled. true: yes false: no The default value is false. |

###### Sample Code

```ts
async function isCustomDislikeThisAdEnabled() {
    nativeAd.isCustomDislikeThisAdEnabled()        
        .then((result) => console.log("isCustomDislikeThisAdEnabled :: ", result))
            .catch((error) => console.log("isCustomDislikeThisAdEnabled :: Error!", error));    
}
```

##### recordClickEvent()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function recordClickEvent() {
        await nativeAd.recordClickEvent();
}
```

##### recordImpressionEvent(impressionData: any)

###### Parameters

| Name           | Type | Description      |
| -------------- | ---- | ---------------- |
| impressionData | any  | Impression data. |

###### Return Type

| Type               | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `Promise<boolean>` | true if an impression is recorded for an ad successfully; false otherwise. |

###### Sample Code

```ts
async function recordImpressionEvent() {
    const impressionData = {
        impressed: true,
        isUseful: "nope",
    };
    nativeAd.recordImpressionEvent(impressionData)
        .then((result) => console.log("recordImpressionEvent :: ", result))
            .catch((error) => console.log("recordImpressionEvent :: Error!", error));
}
```

##### getUniqueId()

###### Return Type

| Type              | Description         |
| ----------------- | ------------------- |
| `Promise<string>` | Unique ID of an ad. |

###### Sample Code

```ts
async function getUniqueId() {
    nativeAd.getUniqueId()
        .then((result) => console.log("getUniqueId :: ", result))
            .catch((error) => console.log("getUniqueId :: Error!", error));
}
```

##### setDislikeAdListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setDislikeAdListener() {
        await nativeAd.setDislikeAdListener();
}
```

##### gotoWhyThisAdPage(useView: boolean)

###### Parameters

| Name    | Type    | Description                                                                     |
| ------- | ------- | ------------------------------------------------------------------------------- |
| useView | boolean | true if go by using nativeView, false if go by using nativeAd, (default: false) |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function gotoWhyThisAdPage() {
        await nativeAd.gotoWhyThisAdPage(false);
}
```

##### getAdSign()

###### Return Type

| Type              | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `Promise<string>` | Indicates whether a task is an ad task. 0: no 1: yes The default value is 1. |

###### Sample Code

```ts
async function getAdSign() {
    nativeAd.getAdSign()
        .then((result) => console.log("getUniqueId :: ", result))
            .catch((error) => console.log("getUniqueId :: Error!", error));
}
```

##### getTitle()

###### Return Type

| Type              | Description     |
| ----------------- | --------------- |
| `Promise<string>` | Title of an ad. |

###### Sample Code

```ts
async function getTitle() {
    nativeAd.getTitle()
        .then((result) => console.log("getTitle :: ", result))
            .catch((error) => console.log("getTitle :: Error!", error));
}
}
```

##### getWhyThisAd()

###### Return Type

| Type              | Description                      |
| ----------------- | -------------------------------- |
| `Promise<string>` | Redirection link to Why this ad. |

###### Sample Code

```ts
async function getWhyThisAd() {
    nativeAd.getWhyThisAd()
        .then((result) => console.log("getWhyThisAd :: ", result))
            .catch((error) => console.log("getWhyThisAd :: Error!", error));
}
```

##### onAdClose(keywords: string[])

###### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| keywords | string[] | Ad keyword. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function onAdClose() {
        await nativeAd.onAdClose(keywords);
}
```

##### getNativeAdConfiguration()

###### Return Type

| Type                             | Description             |
| -------------------------------- | ----------------------- |
| `Promise<NativeAdConfiguration>` | Native ad configuration |

###### Sample Code

```ts
async function getNativeAdConfiguration() {
        await nativeAd.getNativeAdConfiguration();
}
```

##### videoOperatorGetAspectRatio()

###### Return Type

| Type                                | Description                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| `Promise<VideoOperatorAspectRatio>` | Video aspect ratio if the aspect ratio information is available; 0 otherwise. |

###### Sample Code

```ts
async function videoOperatorGetAspectRatio() {
    nativeAd.videoOperatorGetAspectRatio()
        .then((result) => console.log("videoOperatorGetAspectRatio :: ", JSON.stringify(result)))
            .catch((error) => console.log("videoOperatorGetAspectRatio :: Error!", error));    
}
```

##### videoOperatorHasVideo()

###### Return Type

| Type               | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `Promise<boolean>` | true if the ad content contains a video; false otherwise. |

###### Sample Code

```ts
async function videoOperatorHasVideo() {
    nativeAd.videoOperatorHasVideo()
        .then((result) => console.log("videoOperatorHasVideo :: ", result))
            .catch((error) => console.log("videoOperatorHasVideo :: Error!", error));

}
```

##### videoOperatorIsCustomizeOperateEnabled()

###### Return Type

| Type               | Description                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Setting indicating whether a custom player control is used for the video ad. true: yes false: no The default value is false. |

###### Sample Code

```ts
async function videoOperatorIsCustomizeOperateEnabled() {
    nativeAd.videoOperatorIsCustomizeOperateEnabled()
        .then((result) => console.log("videoOperatorIsCustomizeOperateEnabled :: ", result))
            .catch((error) => console.log("videoOperatorIsCustomizeOperateEnabled :: Error!", error));
}
```

##### videoOperatorIsMuted()

###### Return Type

| Type               | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `Promise<boolean>` | Setting indicating whether a video is muted. true: yes false: no The default value is false. |

###### Sample Code

```ts
async function videoOperatorIsMuted() {
    nativeAd.videoOperatorIsMuted()
        .then((result) => console.log("videoOperatorIsMuted :: ", result))
            .catch((error) => console.log("videoOperatorIsMuted :: Error!", error));
}
}
```

##### videoOperatorMute(mute: boolean)

###### Parameters

| Name | Type    | Description                                                                                                                        |
| ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| mute | boolean | true if a video is muted when a custom player control is used. false if a video is not muted when a custom player control is used. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function videoOperatorMute() {
        await HMS<name>.videoOperatorMute(true);
}
```

##### videoOperatorPause()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function videoOperatorPause() {
        nativeAd.videoOperatorPause();
}
```

##### videoOperatorPlay()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function videoOperatorPlay() {
        nativeAd.videoOperatorPlay();
}
```

##### videoOperatorStop()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function videoOperatorStop() {
        nativeAd.videoOperatorStop();
}
```

### HMSRewardAd

#### Method Summary

| Method                                                 | Return Type                      | Description                                          |
| ------------------------------------------------------ | -------------------------------- | ---------------------------------------------------- |
| on(eventName:  RewardAdEvents,  callback:  () => void) | `void`                           | Subscribe to given event.                            |
| create(adId :  string)                                 | `Promise<HMSRewardAd>`           | Create reward ad                                     |
| show(useActivity: boolean)                             | `Promise<void>`                  | Shows a rewarded ad.                                 |
| resume()                                               | `Promise<void>`                  | Resumes a rewarded ad.                               |
| pause()                                                | `Promise<void>`                  | Pauses a rewarded ad.                                |
| destroy()                                              | `Promise<void>`                  | Destroys a reward ad                                 |
| loadAd(adParam:  AdParam = {})                         | `Promise<void>`                  | Loads a rewarded ad                                  |
| isLoaded()                                             | `Promise<boolean>`               | Checks whether a rewarded ad is successfully loaded. |
| getData()                                              | `Promise<string>`                | Obtains custom data.                                 |
| getUserId()                                            | `Promise<string>`                | Obtains a user ID.                                   |
| getReward()                                            | `Promise<HMSReward>`             | Obtains the reward item of a loaded rewarded ad.     |
| setData(data:  string)                                 | `Promise<void>`                  | Sets custom data.                                    |
| setUserId(userId:  string)                             | `Promise<void>`                  | Sets a user ID.                                      |
| setRewardVerifyConfig(config:  HMSRewardVerifyConfig)  | `Promise<void>`                  | Sets server-side verification parameters.            |
| getRewardVerifyConfig()                                | `Promise<HMSRewardVerifyConfig>` | Gets server-side verification parameters.            |
| setRewardAdListener()                                  | `Promise<void>`                  | Sets a listener for rewarded ad loading.             |

#### Methods

##### on(eventName: RewardAdEvents,  callback: () => void)

###### Parameters

| Name      | Type           | Description                                     |
| --------- | -------------- | ----------------------------------------------- |
| eventName | RewardAdEvents | One of the RewardAdEvents to listen             |
| callback  | void           | Callback to be called when the event triggered. |

###### Sample Code

```ts
function on() {
    rewardAd.on(HMSConstants.RewardAdEvents.REWARDED_STATUS, async(reward) => {
        console.log("Reward => ", JSON.stringify(reward));
    });
}
```

##### create(adId : string)

###### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| adId | string | Ad slot ID. |

###### Return Type

| Type                   | Description        |
| ---------------------- | ------------------ |
| `Promise<HMSRewardAd>` | Reward ad instance |

###### Sample Code

```ts
async function create() {
        const adId = 'testx9dtjwj8hp';
        await rewardAd.create(adId);
}
```

##### show(useActivity:boolean)

###### Parameters

| Name        | Type    | Description                                                                      |
| ----------- | ------- | -------------------------------------------------------------------------------- |
| useActivity | boolean | Show reward ad by using activity or not, true = yes, false = no, default = false |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function show() {
        await rewardAd.show(true);
}
```

##### resume()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function resume() {
        await rewardAd.resume();
}
```

##### pause()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function pause() {
        await rewardAd.pause();
}
```

##### destroy()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function destroy() {
        await rewardAd.destroy();
}
```

##### loadAd(adParam: AdParam = {})

###### Parameters

| Name    | Type         | Description            |
| ------- | ------------ | ---------------------- |
| adParam | AdParam = {} | Defines an ad request. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function loadAd() {
        await rewardAd.loadAd();
}
```

##### isLoaded()

###### Return Type

| Type               | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `Promise<boolean>` | true if a reward ad has been loaded. false if a reward ad has not been loaded. |

###### Sample Code

```ts
async function isLoaded() {
    rewardAd.isLoaded()
        .then((result) => console.log("isLoaded :: ", result))
            .catch((error) => console.log("isLoaded :: Error!", error));
}
```

##### getData()

###### Return Type

| Type              | Description  |
| ----------------- | ------------ |
| `Promise<string>` | Custom data. |

###### Sample Code

```ts
async function getData() {
    rewardAd.getData()
        .then((result) => console.log("getData :: ", result))
            .catch((error) => console.log("getData :: Error!", error));
}
```

##### getUserId()

###### Return Type

| Type              | Description |
| ----------------- | ----------- |
| `Promise<string>` | User ID.    |

###### Sample Code

```ts
async function getUserId() {
    rewardAd.getUserId()
        .then((result) => console.log("getUserId :: ", result))
            .catch((error) => console.log("getUserId :: Error!", error));    
}
```

##### getReward()

###### Return Type

| Type                 | Description  |
| -------------------- | ------------ |
| `Promise<HMSReward>` | Reward item. |

###### Sample Code

```ts
async function getReward() {
    rewardAd.getReward()
        .then((result) => console.log("getReward :: ", JSON.stringify(result)))
            .catch((error) => console.log("getReward :: Error!", error));    
}
}
```

##### setData(data: string)

###### Parameters

| Name | Type   | Description                                                                                                                                                                                                                                        |
| ---- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data | string | Custom data. Note: This is a custom parameter of a rewarded ad. This parameter can be combined with a URL and then the URL is encoded. In this case, the URL length cannot exceed 1024 bytes. Otherwise, the server-side verification is affected. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setData() {
        rewardAd.setData(data);
}
```

##### setUserId(userId: string)

###### Parameters

| Name   | Type   | Description                                                                                                                                                                                                                           |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId | string | User ID. Note: This is a user ID of a rewarded ad. This parameter can be combined with a URL and then the URL is encoded. In this case, the URL length cannot exceed 1024 bytes. Otherwise, the server-side verification is affected. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setUserId() {
        rewardAd.setUserId(userId);
}
```

##### setRewardVerifyConfig(config: HMSRewardVerifyConfig)

###### Parameters

| Name   | Type                  | Description                          |
| ------ | --------------------- | ------------------------------------ |
| config | HMSRewardVerifyConfig | Server-side verification parameters. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setRewardVerifyConfig() {
        rewardAd.setRewardVerifyConfig(config);
}
```

##### getRewardVerifyConfig()

###### Return Type

| Type                             | Description                          |
| -------------------------------- | ------------------------------------ |
| `Promise<HMSRewardVerifyConfig>` | Server-side verification parameters. |

###### Sample Code

```ts
async function getRewardVerifyConfig() {
    rewardAd.getRewardVerifyConfig()
        .then((result) => console.log("getRewardVerifyConfig :: ", JSON.stringify(result)))
            .catch((error) => console.log("getRewardVerifyConfig :: Error!", error));        
}
```

##### setRewardAdListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setRewardAdListener() {
        await rewardAd.setRewardAdListener();
}
```

### HMSSplashAd

#### Method Summary

| Method                                                 | Return Type            | Description                                                                               |
| ------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------- |
| create()                                               | `Promise<HMSSplashAd>` | Creates splash ad                                                                         |
| on(eventName:  SplashAdEvents,  callback:  () => void) | `void`                 | Subscribe to given event.                                                                 |
| setLogo(file:  string)                                 | `Promise<void>`        | Sets logo with given html input file                                                      |
| setWideSloganResId(wideSloganResId:  string)           | `Promise<void>`        | Sets a default app launch image in landscape mode, which is displayed before a splash ad. |
| setSloganResId(sloganResId:  string)                   | `Promise<void>`        | Sets a default app launch image in portrait mode, which is displayed before a splash ad.  |
| load(options:  SplashAdLoadOptions)                    | `Promise<void>`        | Loads and displays a splash ad.                                                           |
| preloadAd(options:  SplashAdLoadOptions)               | `Promise<void>`        | Preloads a splash ad.                                                                     |
| destroyView()                                          | `Promise<void>`        | Destroys a view.                                                                          |
| pauseView()                                            | `Promise<void>`        | Pauses a view.                                                                            |
| resumeView()                                           | `Promise<void>`        | Resumes a view.                                                                           |
| isLoading()                                            | `Promise<boolean>`     | Checks whether a splash ad is being loaded.                                               |
| isLoaded()                                             | `Promise<boolean>`     | Checks whether a splash ad has been loaded.                                               |
| setAdDisplayListener()                                 | `Promise<void>`        | Sets a listener for the splash ad display or click event.                                 |
| setAudioFocusType(audioFocusType:  AudioFocusType)     | `Promise<void>`        | Sets the audio focus type for a splash video ad.                                          |

#### Methods

##### create()

###### Return Type

| Type                   | Description        |
| ---------------------- | ------------------ |
| `Promise<HMSSplashAd>` | Splash ad instance |

###### Sample Code

```ts
async function create() {
        await splashAd.create();
}
```

##### on(eventName: SplashAdEvents,  callback: () => void)

###### Parameters

| Name      | Type           | Description                                     |
| --------- | -------------- | ----------------------------------------------- |
| eventName | SplashAdEvents | One of the SplashAdEvents to listen             |
| callback  | void           | Callback to be called when the event triggered. |

###### Sample Code

```ts
function on() {
    splashAd.on(HMSConstants.SplashAdEvents.SPLASH_AD_LOADED, async() => {
        console.log("splash loaded");
    });
}
```

##### setLogo(file: string)

###### Parameters

| Name | Type   | Description        |
| ---- | ------ | ------------------ |
| file | string | File to for slogan |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setLogo() {
    splashAd.setLogo("www/logo.html");
}
```

##### setWideSloganResId(wideSloganResId: string)

###### Parameters

| Name            | Type   | Description                                                          |
| --------------- | ------ | -------------------------------------------------------------------- |
| wideSloganResId | string | Resource file name. (This should be added to under drawable folder.) |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setWideSloganResId() {
    splashAd.setWideSloganResId("default_slogan");
}
```

##### setSloganResId(sloganResId: string)

###### Parameters

| Name        | Type   | Description                                                          |
| ----------- | ------ | -------------------------------------------------------------------- |
| sloganResId | string | Resource file name. (This should be added to under drawable folder.) |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setSloganResId() {
        await splashAd.setSloganResId("default_slogan");
}
```

##### load(options: SplashAdLoadOptions)

###### Parameters

| Name    | Type                | Description  |
| ------- | ------------------- | ------------ |
| options | SplashAdLoadOptions | Load options |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function load() {
    await splashAd.load({
            adId: "testd7c5cewoj6",
            orientation: HMSConstants.HMSScreenOrientation.SCREEN_ORIENTATION_PORTRAIT,
            logoAnchor: HMSConstants.Anchor.TOP,
            adParam: adParams,
    });
}
```

##### preloadAd(options: SplashAdLoadOptions)

###### Parameters

| Name    | Type                | Description  |
| ------- | ------------------- | ------------ |
| options | SplashAdLoadOptions | Load options |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function preloadAd() {
    await splashAd.preload({
            adId: "testd7c5cewoj6",
            orientation: HMSConstants.HMSScreenOrientation.SCREEN_ORIENTATION_PORTRAIT,
            logoAnchor: HMSConstants.Anchor.TOP,
            adParam: adParams,
    });
}
```

##### destroyView()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function destroyView() {
        await splashAd.destroyView();
}
```

##### pauseView()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function pauseView() {
        await splashAd.pauseView();
}
```

##### resumeView()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function resumeView() {
        await splashAd.resumeView();
}
```

##### isLoading()

###### Return Type

| Type               | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `Promise<boolean>` | true if a splash ad is being loaded. false if a splash ad is not being loaded. |

###### Sample Code

```ts
async function isLoading() {
    splashAd.isLoading()
        .then((result) => console.log("isLoading :: ", result))
            .catch((error) => console.log("isLoading :: Error!", error));    
}
```

##### isLoaded()

###### Return Type

| Type               | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `Promise<boolean>` | true if a splash ad has been loaded. false if a splash ad has not been loaded. |

###### Sample Code

```ts
async function isLoaded() {
    splashAd.isLoaded()
        .then((result) => console.log("isLoaded :: ", result))
            .catch((error) => console.log("isLoaded :: Error!", error));    
}
```

##### setAdDisplayListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAdDisplayListener() {
        await splashAd.setAdDisplayListener();
}
```

##### setAudioFocusType(audioFocusType: AudioFocusType)

###### Parameters

| Name           | Type           | Description      |
| -------------- | -------------- | ---------------- |
| audioFocusType | AudioFocusType | Audio Focus Type |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setAudioFocusType() {
        const audioFocusType = HMSConstants.AudioFocusType.GAIN_AUDIO_FOCUS_ALL;
        await splashAd.setAudioFocusType(audioFocusType);
}
```

### HMSRollAd

#### Method Summary

| Method                                               | Return Type          | Description                                                  |
| ---------------------------------------------------- | -------------------- | ------------------------------------------------------------ |
| on(eventName:  RollAdEvents,  callback:  () => void) | `void`               | Subscribe to given event.                                    |
| create(params:  RollAdLoaderParams,  divId:  string) | `Promise<HMSRollAd>` | Creates Roll Ad                                              |
| scroll()                                             | `void`               | Scroll method for Ionic                                      |
| loadAd(options:  RollAdLoadOptions)                  | `Promise<void>`      | Requests roll ads.                                           |
| isLoading()                                          | `Promise<boolean>`   | Checks whether an ad is being loaded.                        |
| destroy()                                            | `Promise<void>`      | Destroys a roll ad view.                                     |
| pause()                                              | `Promise<void>`      | Pauses a roll ad.                                            |
| isPlaying()                                          | `Promise<boolean>`   | Checks whether a roll ad is being played.                    |
| mute()                                               | `Promise<void>`      | Mutes a roll ad.                                             |
| unmute()                                             | `Promise<void>`      | Unmutes a roll ad.                                           |
| onClose()                                            | `Promise<void>`      | Closes a roll ad.                                            |
| play()                                               | `Promise<void>`      | Plays a roll ad.                                             |
| stop()                                               | `Promise<void>`      | Stops a roll ad.                                             |
| removeInstreamMediaChangeListener()                  | `Promise<void>`      | Removes the listener for roll ad switching.                  |
| removeMediaMuteListener()                            | `Promise<void>`      | Removes the listener for roll ad playback status.            |
| removeInstreamMediaStateListener()                   | `Promise<void>`      | Removes the listener that checks whether a roll ad is muted. |
| setInstreamAds()                                     | `Promise<void>`      | Sets roll ads.                                               |
| setInstreamMediaChangeListener()                     | `Promise<void>`      | Sets the listener for roll ad switching.                     |
| setMediaMuteListener()                               | `Promise<void>`      | Sets the listener that checks whether a roll ad is muted.    |
| setInstreamMediaStateListener()                      | `Promise<void>`      | Sets the listener for roll ad playback status.               |
| setOnInstreamAdClickListener()                       | `Promise<void>`      | Sets the listener for roll ad click events.                  |
| getAdSource()                                        | `Promise<string>`    | Obtains the ad source.                                       |
| getDuration()                                        | `Promise<Duration>`  | Obtains the duration of a roll ad.                           |
| getWhyThisAd()                                       | `Promise<string>`    | Obtains the redirection link to Why this ad                  |
| getAdSign()                                          | `Promise<string>`    | Obtains a flag indicating whether a task is an ad task.      |
| isClicked()                                          | `Promise<boolean>`   | Checks whether an ad has been clicked.                       |
| isExpired()                                          | `Promise<boolean>`   | Checks whether an ad has expired.                            |
| isImageAd()                                          | `Promise<boolean>`   | Checks whether an ad is an image ad.                         |
| isShown()                                            | `Promise<boolean>`   | Checks whether an ad has been displayed.                     |
| isVideoAd()                                          | `Promise<boolean>`   | Checks whether an ad is a video ad.                          |
| getCallToAction()                                    | `Promise<string>`    | Obtains the text to be displayed on a button.                |

#### Custom Javascript Method Summary

Custom javascript methods can be used for implementing following functionalities on custom html file, which is given for diplaying on instream view.
| Method      | Return Type | Description                                                       |
| ----------- | ----------- | ----------------------------------------------------------------- |
| pause()     | `void`      | Pauses a roll ad.                                                 |
| play()      | `void`      | Plays a roll ad.                                                  |
| stop()      | `void`      | Stops a roll ad.                                                  |
| mute()      | `void`      | Mutes a roll ad.                                                  |
| unmute()    | `void`      | Unmutes a roll ad.                                                |
| whyThisAd() | `void`      | Obtains the redirection link to Why this ad to Cordova/Ionic side |
| skip()      | `void`      | Skips and destorys all views for roll ad                          |
| onClick()   | `void`      | Performs click on roll ad view                                    |
| isPlaying() | `boolean`   | Checks whether a roll ad is being played.                         |

#### Methods

##### on(eventName: RollAdEvents,  callback: () => void)

###### Parameters

| Name      | Type         | Description                                     |
| --------- | ------------ | ----------------------------------------------- |
| eventName | RollAdEvents | One of the RollAdEvents to listen               |
| callback  | void         | Callback to be called when the event triggered. |

###### Sample Code

```ts
function on() {
    rollAd.on(HMSConstants.RollAdEvents.ROLL_AD_LOADED, async() => {
        console.log("ROLL_AD_LOADED");
    });
}
```

##### scroll()

###### Sample Code

```ts
function scroll() {
        rollAd.scroll();
}
```

##### create(params: RollAdLoaderParams,  divId: string)

###### Parameters

| Name   | Type               | Description                        |
| ------ | ------------------ | ---------------------------------- |
| params | RollAdLoaderParams | null                               |
| divId  | string             | Div element id for placing roll ad |

###### Return Type

| Type                 | Description      |
| -------------------- | ---------------- |
| `Promise<HMSRollAd>` | Roll ad instance |

###### Sample Code

```ts
async function create() {
    await rollAd.create({ adId: "testy3cglm3pj0", totalDuration: 60, maxCount: 4 },
        "rollAd"
    );
}
```

##### loadAd(options: RollAdLoadOptions)

###### Parameters

| Name    | Type              | Description          |
| ------- | ----------------- | -------------------- |
| options | RollAdLoadOptions | Roll ad load options |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function loadAd() {
     await rollAd.loadAd({ file: "www/roll.html" });
}
```

##### isLoading()

###### Return Type

| Type               | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `Promise<boolean>` | true if an ad is being loaded. false if an ad is not being loaded. |

###### Sample Code

```ts
async function isLoading() {
    rollAd.isLoading()
        .then((result) => console.log("isLoading :: ", result))
            .catch((error) => console.log("isLoading :: Error!", error));
}
```

##### destroy()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function destroy() {
        await rollAd.destroy();
}
```

##### pause()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function pause() {
        await rollAd.pause();
}
```

##### isPlaying()

###### Return Type

| Type               | Description                                         |
| ------------------ | --------------------------------------------------- |
| `Promise<boolean>` | true if a roll ad is being played; false otherwise. |

###### Sample Code

```ts
async function isPlaying() {
    rollAd.isPlaying()
        .then((result) => console.log("isPlaying :: ", result))
            .catch((error) => console.log("isPlaying :: Error!", error));
}
```

##### mute()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function mute() {
        await rollAd.mute();
}
```

##### unmute()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function unmute() {
        await rollAd.unmute();
}
```

##### onClose()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function onClose() {
        await rollAd.onClose();
}
```

##### play()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function play() {
        await rollAd.play();
}
```

##### stop()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function stop() {
        await rollAd.stop();
}
```

##### removeInstreamMediaChangeListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function removeInstreamMediaChangeListener() {
        await rollAd.removeInstreamMediaChangeListener();
}
```

##### removeMediaMuteListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function removeMediaMuteListener() {
        await rollAd.removeMediaMuteListener();
}
```

##### removeInstreamMediaStateListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function removeInstreamMediaStateListener() {
        await rollAd.removeInstreamMediaStateListener();
}
```

##### setInstreamAds()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setInstreamAds() {
        await rollAd.setInstreamAds();
}
```

##### setInstreamMediaChangeListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setInstreamMediaChangeListener() {
        await rollAd.setInstreamMediaChangeListener();
}
```

##### setMediaMuteListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setMediaMuteListener() {
        await rollAd.setMediaMuteListener();
}
```

##### setInstreamMediaStateListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setInstreamMediaStateListener() {
        await rollAd.setInstreamMediaStateListener();
}
```

##### setOnInstreamAdClickListener()

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
async function setOnInstreamAdClickListener() {
        await rollAd.setOnInstreamAdClickListener();
}
```

##### getAdSource()

###### Return Type

| Type              | Description |
| ----------------- | ----------- |
| `Promise<string>` | Ad source.  |

###### Sample Code

```ts
async function getAdSource() {
    rollAd.getAdSource()
        .then((result) => console.log("getAdSource :: ", result))
            .catch((error) => console.log("getAdSource :: Error!", error));
}
```

##### getDuration()

###### Return Type

| Type                | Description                             |
| ------------------- | --------------------------------------- |
| `Promise<Duration>` | Duration of a roll ad, in milliseconds. |

###### Sample Code

```ts
async function getDuration() {
    rollAd.getDuration()
        .then((result) => console.log("getDuration :: ", JSON.stringify(result)))
            .catch((error) => console.log("getDuration :: Error!", error));
}
```

##### getWhyThisAd()

###### Return Type

| Type              | Description                      |
| ----------------- | -------------------------------- |
| `Promise<string>` | Redirection link to Why this ad. |

###### Sample Code

```ts
async function getWhyThisAd() {
    rollAd.getWhyThisAd()
        .then((result) => console.log("getWhyThisAd :: ", result))
            .catch((error) => console.log("getWhyThisAd :: Error!", error));
    }
```

##### getAdSign()

###### Return Type

| Type              | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `Promise<string>` | Indicates whether a task is an ad task. 0: no 1: yes The default value is 1. |

###### Sample Code

```ts
async function getAdSign() {
    rollAd.getAdSign()
        .then((result) => console.log("getAdSign :: ", result))
            .catch((error) => console.log("getAdSign :: Error!", error));
}
```

##### isClicked()

###### Return Type

| Type               | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `Promise<boolean>` | true if an ad has been clicked. false if an ad has not been clicked. |

###### Sample Code

```ts
async function isClicked() {
    rollAd.isClicked()
        .then((result) => console.log("isClicked :: ", result))
            .catch((error) => console.log("isClicked :: Error!", error));
}
```

##### isExpired()

###### Return Type

| Type               | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `Promise<boolean>` | true if an ad has expired. false if an ad has not expired. |

###### Sample Code

```ts
async function isExpired() {
    rollAd.isExpired()
        .then((result) => console.log("isExpired :: ", result))
            .catch((error) => console.log("isExpired :: Error!", error));
}
```

##### isImageAd()

###### Return Type

| Type               | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `Promise<boolean>` | true if an ad is an image ad. false if an ad is not an image ad. |

###### Sample Code

```ts
async function isImageAd() {
    rollAd.isImageAd()
        .then((result) => console.log("isImageAd :: ", result))
            .catch((error) => console.log("isImageAd :: Error!", error));
}
```

##### isShown()

###### Return Type

| Type               | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `Promise<boolean>` | true if an ad has been displayed. false if an ad has not been displayed. |

###### Sample Code

```ts
async function isShown() {
    rollAd.isShown()
        .then((result) => console.log("isShown :: ", result))
            .catch((error) => console.log("isShown :: Error!", error));
}
```

##### isVideoAd()

###### Return Type

| Type               | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `Promise<boolean>` | true if an ad is a video ad. false if an ad is not a video ad. |

###### Sample Code

```ts
async function isVideoAd() {
    rollAd.isVideoAd()
        .then((result) => console.log("isVideoAd :: ", result))
            .catch((error) => console.log("isVideoAd :: Error!", error));
}
```

##### getCallToAction()

###### Return Type

| Type              | Description                       |
| ----------------- | --------------------------------- |
| `Promise<string>` | Text to be displayed on a button. |

###### Sample Code

```ts
async function getCallToAction() {
    rollAd.getCallToAction()
        .then((result) => console.log("getCallToAction :: ", result))
            .catch((error) => console.log("getCallToAction :: Error!", error));
}
```

#### Custom Javascript Methods

##### pause()

###### Sample Code

```ts
function pause() {
        RollAd.pause();
}
```

##### play()

###### Sample Code

```ts
function play() {
        RollAd.play();
}
```

##### stop()

###### Sample Code

```ts
function stop() {
        RollAd.stop();
}
```

##### isPlaying()

###### Return Type

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | true if a roll ad is being played; false otherwise. |

###### Sample Code

```ts
async function isPlaying() {
    const isPlaying = RollAd.isPlaying();
}
```

##### mute()

###### Sample Code

```ts
function mute() {
    RollAd.mute();
}
```

##### unmute()

###### Sample Code

```ts
function unmute() {
    RollAd.unmute();
}
```

##### skip()

###### Sample Code

```ts
function skip() {
    RollAd.skip();
}
```

##### whyThisAd()

###### Sample Code

```ts
//Following code block should be implemented on Cordova index.js side

    rollAd.on(HMSConstants.RollAdEvents.ROLL_AD_WHY_THIS_AD, async(result) => {
        console.log("Why this ad clicked");
        window.location.href = result;
    });
    
//Following code block should be implemented on custom html file

    async function whyThisAd() {
        RollAd.whyThisAd();
    }
```

##### click()

###### Sample Code

```ts
window.addEventListener("click", function() {
        console.log('ad clicked');
        if (RollAd.isPlaying()) {
            RollAd.pause();
        } else {
            console.log('already paused');
        }
        RollAd.onClick()
    });
```

### Constants

#### Enum AdParamErrorCodes
| Field                            | Value | Description                                                                                               |
| -------------------------------- | ----- | --------------------------------------------------------------------------------------------------------- |
| AD_PARAM_INNER                   | 0     | Internal error.                                                                                           |
| AD_PARAM_INVALID_REQUEST         | 1     | Invalid ad request. For example, the ad slot ID is not set or the banner ad size is invalid.              |
| AD_PARAM_NETWORK_ERROR           | 2     | Failed to send the ad request due to a network connection error.                                          |
| AD_PARAM_NO_AD                   | 3     | The ad request is sent successfully, but the server returns a response indicating no available ad assets. |
| AD_PARAM_AD_LOADING              | 4     | The ad is being loaded and cannot be requested again.                                                     |
| AD_PARAM_LOW_API                 | 5     | The API version is not supported by HUAWEI Ads Kit.                                                       |
| AD_PARAM_BANNER_AD_EXPIRE        | 6     | The banner ad has expired                                                                                 |
| AD_PARAM_BANNER_AD_CANCEL        | 7     | The banner ad task is removed.                                                                            |
| AD_PARAM_HMS_NOT_SUPPORT_SET_APP | 8     | The HMS Core (APK) version does not support the setting of AppInfo.                                       |

#### Enum RewardAdStatusErrorCodes
| Field                       | Value | Description                                 |
| --------------------------- | ----- | ------------------------------------------- |
| REWARD_AD_STATUS_INTERNAL   | 0     | Internal error                              |
| REWARD_AD_STATUS_REUSED     | 1     | Duplicate ad                                |
| REWARD_AD_STATUS_NOT_LOADED | 2     | The ad has not been loaded                  |
| REWARD_AD_STATUS_BACKGROUND | 3     | The rewarded ad is played in the background |
#### Enum AdContentClassification
| Field                            | Value | Description                                            |
| -------------------------------- | ----- | ------------------------------------------------------ |
| AD_CONTENT_CLASSIFICATION_A      | "A"   | Content suitable for adults only.                      |
| AD_CONTENT_CLASSIFICATION_PI     | "PI"  | Content suitable for audiences with parental guidance. |
| AD_CONTENT_CLASSIFICATION_UNKOWN | ""    | Unknown rating.                                        |
| AD_CONTENT_CLASSIFICATION_J      | "J"   | Content suitable for junior and older audiences.       |
| AD_CONTENT_CLASSIFICATION_W      | "W"   | Content suitable for widespread audiences.             |

#### Enum Gender
| Field   | Value | Description |
| ------- | ----- | ----------- |
| FEMALE  | 2     | Female      |
| MALE    | 1     | Male        |
| UNKNOWN | 0     | Unknown     |

#### Enum NonPersonalizedAd
| Field                  | Value | Description                                                    |
| ---------------------- | ----- | -------------------------------------------------------------- |
| ALLOW_ALL              | 0     | Requests both personalized and non-personalized ads (default). |
| ALLOW_NON_PERSONALIZED | 1     | Requests only non-personalized ads.                            |

#### Enum ChildProtection
| Field                                | Value | Description                                                                                     |
| ------------------------------------ | ----- | ----------------------------------------------------------------------------------------------- |
| TAG_FOR_CHILD_PROTECTION_UNSPECIFIED | -1    | Whether to process ad requests according to the COPPA is not specified.                         |
| TAG_FOR_CHILD_PROTECTION_FALSE       | 0     | Does not process ad requests according to the Children's Online Privacy Protection Act (COPPA). |
| TAG_FOR_CHILD_PROTECTION_TRUE        | 1     | Processes ad requests according to the COPPA.                                                   |

#### Enum UnderAgeOfPromise
| Field               | Value | Description                                                                                    |
| ------------------- | ----- | ---------------------------------------------------------------------------------------------- |
| PROMISE_UNSPECIFIED | -1    | Whether to process ad requests as directed to users under the age of consent is not specified. |
| PROMISE_FALSE       | 0     | Does not process ad requests as directed to users under the age of consent.                    |
| PROMISE_TRUE        | 1     | Processes ad requests as directed to users under the age of consent.                           |

#### Enum BannerAdSize
| Field               | Value                 | Description                                                                                       |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| BANNER_SIZE_360_57  | "BANNER_SIZE_360_57"  | Banner ad size: 360 x 57                                                                          |
| BANNER_SIZE_360_144 | "BANNER_SIZE_360_144" | Banner ad size: 360 x 144                                                                         |
| BANNER_SIZE_160_600 | "BANNER_SIZE_160_600" | Banner ad size: 160 x 600                                                                         |
| BANNER_SIZE_300_250 | "BANNER_SIZE_300_250" | Banner ad size: 300 x 250                                                                         |
| BANNER_SIZE_320_100 | "BANNER_SIZE_320_100" | Banner ad size: 320 x 100                                                                         |
| BANNER_SIZE_320_50  | "BANNER_SIZE_320_50"  | Banner ad size: 320 x 50                                                                          |
| BANNER_SIZE_468_60  | "BANNER_SIZE_468_60"  | Banner ad size: 468 x 60                                                                          |
| BANNER_SIZE_728_90  | "BANNER_SIZE_728_90"  | Banner ad size: 728 x 90                                                                          |
| BANNER_SIZE_DYNAMIC | "BANNER_SIZE_DYNAMIC" | Dynamic banner ad size. The width of the parent layout and the height of the ad content are used. |
| BANNER_SIZE_INVALID | "BANNER_SIZE_INVALID" | Invalid size. No ad can be requested using this size.                                             |
| BANNER_SIZE_SMART   | "BANNER_SIZE_SMART"   | Dynamic banner ad size. The screen width and an adaptive height are used                          |

#### Enum HMSScreenOrientation
| Field                                | Value | Description       |
| ------------------------------------ | ----- | ----------------- |
| SCREEN_ORIENTATION_LANDSCAPE         | 0     | Landscape         |
| SCREEN_ORIENTATION_UNSPECIFIED       | -1    | Unspecified.      |
| SCREEN_ORIENTATION_PORTRAIT          | 1     | Portrait          |
| SCREEN_ORIENTATION_USER              | 2     | User              |
| SCREEN_ORIENTATION_BEHIND            | 3     | Behind            |
| SCREEN_ORIENTATION_SENSOR            | 4     | Sensor            |
| SCREEN_ORIENTATION_NOSENSOR          | 5     | Nosensor          |
| SCREEN_ORIENTATION_SENSOR_LANDSCAPE  | 6     | Sensor landscape  |
| SCREEN_ORIENTATION_SENSOR_PORTRAIT   | 7     | Sensor portrait   |
| SCREEN_ORIENTATION_REVERSE_LANDSCAPE | 8     | Reverse landscape |
| SCREEN_ORIENTATION_REVERSE_PORTRAIT  | 9     | Reverse portrait  |
| SCREEN_ORIENTATION_FULL_SENSOR       | 10    | Full sensor       |
| SCREEN_ORIENTATION_USER_LANDSCAPE    | 11    | User landscape    |
| SCREEN_ORIENTATION_USER_PORTRAIT     | 12    | User portrait     |
| SCREEN_ORIENTATION_FULL_USER         | 13    | Full user.        |
| SCREEN_ORIENTATION_LOCKED            | 14    | Locked.           |

#### Enum DebugNeedConsent
| Field                          | Value | Description            |
| ------------------------------ | ----- | ---------------------- |
| CONSENT_DEBUG_DISABLED         | 0     | Consent debug disable. |
| CONSENT_DEBUG_NEED_CONSENT     | 1     | Need consent debug     |
| CONSENT_DEBUG_NOT_NEED_CONSENT | 2     | Not need debug consent |

#### Enum ConsentStatus
| Field                    | Value | Description                                                                           |
| ------------------------ | ----- | ------------------------------------------------------------------------------------- |
| CONSENT_PERSONALIZED     | 0     | The user has agreed to receive personalized and non-personalized ads.                 |
| CONSENT_NON_PERSONALIZED | 1     | The user has agreed to receive only non-personalized ads                              |
| CONSENT_UNKNOWN          | 2     | The user neither agrees nor declines to receive personalized or non-personalized ads. |

#### Enum AudioFocusType
| Field                          | Value | Description                                                                                   |
| ------------------------------ | ----- | --------------------------------------------------------------------------------------------- |
| GAIN_AUDIO_FOCUS_ALL           | 0     | Does not obtain the audio focus when a video is played, no matter whether the video is muted. |
| NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE | 1     | Obtains the audio focus only when a video is played without being muted.                      |
| NOT_GAIN_AUDIO_FOCUS_ALL       | 2     | Obtains the audio focus when a video is played, no matter whether the video is muted.         |

#### Enum MediaAspect
| Field              | Value | Description         |
| ------------------ | ----- | ------------------- |
| ASPECT_ANY         | 1     | Any aspect.         |
| ASPECT_CUSTOM_SIZE | -1    | Custom size aspect. |
| ASPECT_LANDSCAPE   | 2     | Landscape           |
| ASPECT_PORTRAIT    | 3     | Portrait            |
| ASPECT_SQUARE      | 4     | Square              |
| ASPECT_UNKNOWN     | 0     | Unknown             |

#### Enum ChoicesPosition
| Field        | Value | Description                                      |
| ------------ | ----- | ------------------------------------------------ |
| BOTTOM_LEFT  | 3     | The AdChoices icon is in the bottom left corner. |
| BOTTOM_RIGHT | 2     | The AdChoices icon is in the bottom right corner |
| INVISIBLE    | 4     | The AdChoices icon is invisible.                 |
| TOP_LEFT     | 0     | The AdChoices icon is in the top left corner.    |
| TOP_RIGHT    | 1     | The AdChoices icon is in the top right corner.   |

#### Enum MediaDirection
| Field     | Value | Description     |
| --------- | ----- | --------------- |
| ANY       | 0     | Any orientation |
| LANDSCAPE | 2     | Landscape       |
| PORTRAIT  | 1     | Portrait.       |

#### Enum NativeAdTemplate
| Field                     | Value                       | Description     |
| ------------------------- | --------------------------- | --------------- |
| NATIVE_AD_SMALL_TEMPLATE  | "NATIVE_AD_SMALL_TEMPLATE"  | Small template  |
| NATIVE_AD_FULL_TEMPLATE   | "NATIVE_AD_FULL_TEMPLATE"   | Full template   |
| NATIVE_AD_BANNER_TEMPLATE | "NATIVE_AD_BANNER_TEMPLATE" | Banner template |
| NATIVE_AD_VIDEO_TEMPLATE  | "NATIVE_AD_VIDEO_TEMPLATE"  | Video template  |

#### Enum Color
| Field       | Value         | Description |
| ----------- | ------------- | ----------- |
| RED         | "RED"         | RED         |
| DKGRAY      | "DKGRAY"      | DKGRAY      |
| GRAY        | "GRAY"        | GRAY        |
| WHITE       | "WHITE"       | WHITE       |
| BLUE        | "BLUE"        | BLUE        |
| BLACK       | "BLACK"       | BLACK       |
| LTGRAY      | "LTGRAY"      | LTGRAY      |
| MAGENTA     | "MAGENTA"     | MAGENTA     |
| YELLOW      | "YELLOW"      | YELLOW      |
| CYAN        | "CYAN"        | CYAN        |
| GREEN       | "GREEN"       | GREEN       |
| TRANSPARENT | "TRANSPARENT" | TRANSPARENT |

#### Enum InstallReferrerResponses
| Field                 | Value | Description                            |
| --------------------- | ----- | -------------------------------------- |
| SERVICE_DISCONNECTED  | -1    | Failed to connect to the service.      |
| DEVELOPER_ERROR       | 3     | A call error occurred                  |
| SERVICE_UNAVAILABLE   | 1     | The service does not exist.            |
| OK                    | 0     | Connected to the service successfully. |
| FEATURE_NOT_SUPPORTED | 2     | The service is not supported.          |

#### Enum Anchor
| Field     | Value       | Description    |
| --------- | ----------- | -------------- |
| TOP       | "top"       | Top anchor.    |
| BOTTOM    | "bottom"    | Bottom anchor. |
| INVISIBLE | "invisible" | Invisible      |

#### Enum InterstitialAdEvents
| Field                                 | Value                                   | Description                              |
| ------------------------------------- | --------------------------------------- | ---------------------------------------- |
| INTERSTITIAL_AD_CLOSED                | 'interstitial_ad_closed'                | Called when interstitial ad closed       |
| INTERSTITIAL_AD_FAILED                | 'interstitial_ad_failed'                | Called when an interstitial ad failed    |
| INTERSTITIAL_AD_LEAVE                 | 'interstitial_ad_leave'                 | Called when an interstitial ad leaved    |
| INTERSTITIAL_AD_OPENED                | 'interstitial_ad_opened'                | Called when an interstitial ad opened    |
| INTERSTITIAL_AD_LOADED                | 'interstitial_ad_loaded'                | Called when an interstitial ad loaded    |
| INTERSTITIAL_AD_CLICKED               | 'interstitial_ad_clicked'               | Called when an interstitial ad clicked   |
| INTERSTITIAL_AD_IMPRESSION            | 'interstitial_ad_impression'            | Called when an interstitial ad impressed |
| INTERSTITIAL_AD_REWARDED              | 'interstitial_ad_rewarded'              | Called when an ad rewarded               |
| INTERSTITIAL_REWARD_AD_CLOSED         | 'interstitial_reward_ad_closed'         | Called when an ad closed                 |
| INTERSTITIAL_REWARD_AD_FAILED_TO_LOAD | 'interstitial_reward_ad_failed_to_load' | Called when an ad failed to load         |
| INTERSTITIAL_REWARD_AD_LEFT_APP       | 'interstitial_reward_ad_left_app'       | Called when an ad left                   |
| INTERSTITIAL_REWARD_AD_LOADED         | 'interstitial_reward_ad_loaded'         | Called when an ad loaded                 |
| INTERSTITIAL_REWARD_AD_OPENED         | 'interstitial_reward_ad_opened'         | Called when an ad opened                 |
| INTERSTITIAL_REWARD_AD_COMPLETED      | 'interstitial_reward_ad_completed'      | Called when an ad completed              |
| INTERSTITIAL_REWARD_AD_STARTED        | 'interstitial_reward_ad_started'        | Called when an ad started                |

#### Enum SplashAdEvents
| Field                    | Value                      | Description                |
| ------------------------ | -------------------------- | -------------------------- |
| SPLASH_AD_FAILED_TO_LOAD | 'splash_ad_failed_to_load' | Called when failed to load |
| SPLASH_AD_LOADED         | 'splash_ad_loaded'         | Called when loaded         |
| SPLASH_AD_DISMISSED      | 'splash_ad_dismissed'      | Called when dismissed      |
| SPLASH_AD_SHOWED         | 'splash_ad_showed'         | Called when showed         |
| SPLASH_AD_CLICK          | 'splash_ad_click'          | Called when clicked        |

#### Enum RollAdEvents
| Field                    | Value                      | Description                    |
| ------------------------ | -------------------------- | ------------------------------ |
| ROLL_AD_LOAD_FAILED      | 'roll_ad_load_failed'      | Called when faild to load      |
| ROLL_AD_LOADED           | 'roll_ad_loaded'           | Called when loaded             |
| ROLL_AD_MEDIA_CHANGED    | 'roll_ad_media_changed'    | Called when media changed      |
| ROLL_AD_CLICKED          | 'roll_ad_clicked'          | Called when cliked             |
| ROLL_AD_MEDIA_PROGRESS   | 'roll_ad_media_progress'   | Called when media progressed   |
| ROLL_AD_MEDIA_START      | 'roll_ad_media_start'      | Called when media start        |
| ROLL_AD_MEDIA_PAUSE      | 'roll_ad_media_pause'      | Called when media pause        |
| ROLL_AD_MEDIA_STOP       | 'roll_ad_media_stop'       | Called when media stop         |
| ROLL_AD_MEDIA_COMPLETION | 'roll_ad_media_completion' | Called when media completed    |
| ROLL_AD_MEDIA_ERROR      | 'roll_ad_media_error'      | Called when media error        |
| ROLL_AD_MEDIA_UNMUTE     | 'roll_ad_media_unmute'     | Called when media unmuted      |
| ROLL_AD_MEDIA_MUTE       | 'roll_ad_media_mute'       | Called when media muted        |
| ROLL_AD_WHY_THIS_AD      | 'roll_ad_why_this_ad'      | Called when whyThisAd() called |

#### Enum RewardAdEvents
| Field                         | Value                           | Description                                  |
| ----------------------------- | ------------------------------- | -------------------------------------------- |
| REWARD_AD_FAILED_TO_LOAD_LOAD | 'reward_ad_failed_to_load_load' | Called when failed to load for load listener |
| REWARDED_LOADED               | 'rewarded_loaded'               | Called when loaded                           |
| REWARDED_STATUS               | 'rewarded_status'               | Called when rewarded for status listener     |
| REWARD_AD_CLOSED_STATUS       | 'reward_ad_closed_status'       | Called when closed for status listener       |
| REWARD_AD_OPENED_STATUS       | 'reward_ad_opened_status'       | Called when opened for status listener       |
| REWARD_AD_FAILED_TO_SHOW      | 'reward_ad_failed_to_show'      | Called when failed to show                   |
| REWARDED                      | 'rewarded'                      | Called when rewarded                         |
| REWARD_AD_CLOSED              | 'reward_ad_closed'              | Called when closed                           |
| REWARD_AD_FAILED_TO_LOAD      | 'reward_ad_failed_to_load'      | Called when failed to load                   |
| REWARD_AD_LEFT_APP            | 'reward_ad_left_app'            | Called when left                             |
| REWARD_AD_LOADED              | 'reward_ad_loaded'              | Called when loaded                           |
| REWARD_AD_OPENED              | 'reward_ad_opened'              | Called when opened                           |
| REWARD_AD_COMPLETED           | 'reward_ad_completed'           | Called when completed                        |
| REWARD_AD_STARTED             | 'reward_ad_started'             | Called when started                          |

#### Enum NativeAdEvents
| Field                      | Value                        | Description                          |
| -------------------------- | ---------------------------- | ------------------------------------ |
| NATIVE_AD_DISLIKED         | 'native_ad_disliked'         | Called when disliked                 |
| NATIVE_AD_LOADED_LOAD      | 'native_ad_loaded_load'      | Called when loaded for load listener |
| NATIVE_AD_CLOSED           | 'native_ad_closed'           | Called when closed                   |
| NATIVE_AD_FAILED           | 'native_ad_failed'           | Called when failed                   |
| NATIVE_AD_LEAVE            | 'native_ad_leave'            | Called when leaved                   |
| NATIVE_AD_OPENED           | 'native_ad_opened'           | Called when opened                   |
| NATIVE_AD_LOADED           | 'native_ad_loaded'           | Called when loaded                   |
| NATIVE_AD_CLICKED          | 'native_ad_clicked'          | Called when clicked                  |
| NATIVE_AD_IMPRESSION       | 'native_ad_impression'       | Called when impressed                |
| VIDEO_OPERATOR_VIDEO_START | 'video_operator_video_start' | Called when video start              |
| VIDEO_OPERATOR_VIDEO_PLAY  | 'video_operator_video_play'  | Called when video play               |
| VIDEO_OPERATOR_VIDEO_PAUSE | 'video_operator_video_pause' | Called when video pause              |
| VIDEO_OPERATOR_VIDEO_END   | 'video_operator_video_end'   | Called when video end                |
| VIDEO_OPERATOR_VIDEO_MUTE  | 'video_operator_video_mute'  | Called when video mute               |

#### Enum BannerAdEvents
| Field                | Value                  | Description           |
| -------------------- | ---------------------- | --------------------- |
| BANNER_AD_CLOSED     | 'banner_ad_closed'     | Called when closed    |
| BANNER_AD_FAILED     | 'banner_ad_failed'     | Called when failed    |
| BANNER_AD_LEAVE      | 'banner_ad_leave'      | Called when leaved    |
| BANNER_AD_OPENED     | 'banner_ad_opened'     | Called when opened    |
| BANNER_AD_LOADED     | 'banner_ad_loaded'     | Called when loaded    |
| BANNER_AD_CLICKED    | 'banner_ad_clicked'    | Called when clicked   |
| BANNER_AD_IMPRESSION | 'banner_ad_impression' | Called when impressed |

### Interfaces

#### AdParam

| Field                    | Type                      | Description                                                                                    |
| ------------------------ | ------------------------- | ---------------------------------------------------------------------------------------------- |
| gender?                  | `Gender`                  | The gender                                                                                     |
| adContentClassification? | `AdContentClassification` | Ad content rating.                                                                             |
| tagForUnderAgeOfPromise? | `UnderAgeOfPromise`       | Specifies whether to process ad requests as directed to users under the age of consent.        |
| tagForChildProtection?   | `ChildProtection`         | Specifies whether to process ad requests according to the COPPA.                               |
| nonPersonalizedAd?       | `NonPersonalizedAd`       | Specifies whether to request personalized ads.                                                 |
| appCountry?              | `string`                  | The country code corresponding to the language in which an ad needs to be returned for an app. |
| appLang?                 | `string`                  | The language in which an ad needs to be returned for an app.                                   |
| countryCode?             | `string`                  | The home country code.                                                                         |
| belongCountryCode?       | `string`                  | Code of the country/region to which an app belongs.                                            |
| consent?                 | `string`                  | User consent string, which complies with Consent String Format in TCF 2.0.                     |

#### HMSRequestOptions
| Field                    | Type                      | Description                                                                             |
| ------------------------ | ------------------------- | --------------------------------------------------------------------------------------- |
| adContentClassification? | `AdContentClassification` | Ad content rating.                                                                      |
| appLang?                 | `string`                  | The language in which an ad needs to be returned for an app.                            |
| appCountry?              | `string`                  | The home country code.                                                                  |
| tagForChildProtection?   | `ChildProtection`         | Specifies whether to process ad requests according to the COPPA.                        |
| tagForUnderAgeOfPromise? | `UnderAgeOfPromise`       | Specifies whether to process ad requests as directed to users under the age of consent. |
| nonPersonalizedAd?       | `NonPersonalizedAd`       | Specifies whether to request personalized ads.                                          |
| consent?                 | `string`                  | User consent string, which complies with Consent String Format in TCF 2.0.              |

#### HMSReward
| Field        | Type     | Description |
| ------------ | -------- | ----------- |
| rewardAmount | `number` | Amount      |
| rewardName   | `string` | Name        |

#### HMSRewardVerifyConfig
| Field  | Type     | Description |
| ------ | -------- | ----------- |
| data   | `string` | Data        |
| userId | `string` | User ID     |

#### OaidResult
| Field                   | Type      | Description                                              |
| ----------------------- | --------- | -------------------------------------------------------- |
| id                      | `string`  | The current OAID.                                        |
| isLimitAdTracingEnabled | `boolean` | Obtains the current setting of Disable personalized ads. |

#### Duration
| Field    | Type     | Description |
| -------- | -------- | ----------- |
| duration | `number` | Duration    |

#### RollAdLoaderParams
| Field         | Type     | Description    |
| ------------- | -------- | -------------- |
| adId          | `string` | Ad Slot ID     |
| totalDuration | `number` | Total Duration |
| maxCount      | `number` | Max ad count   |

#### VideoConfiguration
| Field                      | Type             | Description                                                             |
| -------------------------- | ---------------- | ----------------------------------------------------------------------- |
| audioFocusType?            | `AudioFocusType` | The video playback scenario where the audio focus needs to be obtained. |
| clickToFullScreenRequest?  | `boolean`        | Whether click to full screen request exists.                            |
| customizeOperateRequested? | `boolean`        | Whether customize operate requested                                     |
| isStartMuted?              | `boolean`        | Whether a video is initially muted.                                     |

#### NativeAdConfiguration
| Field                       | Type                 | Description                                                     |
| --------------------------- | -------------------- | --------------------------------------------------------------- |
| adSize                      | `AdSize`             | Requested ad size.                                              |
| choicesPosition?            | `ChoicesPosition`    | Position of an ad choice icon                                   |
| mediaAspect?                | `MediaAspect`        | Aspect ratio of an ad image..                                   |
| mediaDirection?             | `MediaDirection`     | Direction of an ad image..                                      |
| returnUrlsForImages?        | `boolean`            | Whether the SDK is allowed to download native ad images or not. |
| requestCustomDislikeThisAd? | `boolean`            | Whether native ad will have custom dislike this button or not.  |
| requestMultiImages?         | `boolean`            | Whether multiple ad images are requested.                       |
| videoConfiguration?         | `VideoConfiguration` | Video configuration used to control video playback.             |

#### VideoOperatorAspectRatio
| Field                       | Type     | Description                 |
| --------------------------- | -------- | --------------------------- |
| videoOperatorGetAspectRatio | `number` | Video operator aspect ratio |

#### NativeAdLoadOptions
| Field            | Type                    | Description              |
| ---------------- | ----------------------- | ------------------------ |
| adId?            | `string`                | Ad slot id               |
| ad?              | `AdParam`               | Defines an ad request.   |
| nativeAdOptions? | `NativeAdConfiguration` | Native ad configurations |

#### AdSize
| Field  | Type     | Description |
| ------ | -------- | ----------- |
| width  | `number` | Ad widht    |
| height | `number` | Ad height   |

#### NativeAdOptions
| Field     | Type               | Description      |
| --------- | ------------------ | ---------------- |
| div       | `string`           | Div id           |
| template? | `NativeAdTemplate` | Template         |
| bg?       | `Color`            | Background color |

#### RollAdLoadOptions
| Field    | Type      | Description            |
| -------- | --------- | ---------------------- |
| file?    | `string`  | File to be loaded      |
| adParam? | `AdParam` | Defines an ad request. |

#### ReferrerDetails
| Field                   | Type                       | Description                                              |
| ----------------------- | -------------------------- | -------------------------------------------------------- |
| responseCode?           | `InstallReferrerResponses` | Connection status.                                       |
| installReferrer?        | `string`                   | Obtains install referrer information.                    |
| referrerClickTimestamp? | `number`                   | Obtains the ad click timestamp, in milliseconds.         |
| installBeginTimestamp?  | `number`                   | Obtains the app installation timestamp, in milliseconds. |

#### ConsentUpdateResult
| Field          | Type            | Description                                             |
| -------------- | --------------- | ------------------------------------------------------- |
| consentStatus? | `ConsentStatus` | Consent status                                          |
| isNeedConsent? | `boolean`       | Indicates whether to obtain user consent for debugging. |
| adProviders?   | `AdProvider[]`  | Ad technology provider information.                     |

#### AdProvider
| Field             | Type     | Description                                             |
| ----------------- | -------- | ------------------------------------------------------- |
| id?               | `string` | ID of an ad technology provider.                        |
| name?             | `string` | Name of an ad technology provider.                      |
| privacyPolicyUrl? | `string` | URL of the privacy policy of an ad technology provider. |
| serviceArea?      | `string` | Service area of an ad technology provider.              |

#### SplashAdLoadOptions
| Field        | Type                   | Description                   |
| ------------ | ---------------------- | ----------------------------- |
| adId         | `string`               | Ad slot ID                    |
| orientation? | `HMSScreenOrientation` | Orientation of splash screen. |
| adParam?     | `AdParam`              | AdParam object.               |
| logoAnchor?  | `Anchor`               | Anchor of the logo            |

---

## 4. Configuration and Description

Please, do not forget to add following prefix to file paths in ionic application.

- For Ionic - Cordova Runtime = "www/assets/your_file"
- For Ionic - Capacitor Runtime = "public/assets/your_file".

For example, in demo application:

```ts
    // roll.html file is under assets folder directly. So that, path should be given like below.
    await this.rollAdInstance.loadAd({ file: 'public/assets/roll.html' });
}
```

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Ads plugin's ProGuard rules need to be added to your project. These rules are as follows:

```text
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.huawei.hianalytics.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-keep class com.huawei.hms.ads.**{*;}
-keep interface com.huawei.hms.ads.**{*;}
-keep class com.huawei.openalliance.ad.**{*;}
-repackageclasses
```

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Samples > Ads Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Ads Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
