# cordova-plugin-hms-ads

## Contents

1. Introduction
2. Installation Guide
3. Cordova Example API Method Definition
4. Configure Description
5. Licensing and Terms

## 1. Introduction

This Cordova SDK code encapsulates the Huawei Ads Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

- **src/main/com/huawei/hms/cordova/ads**: core layer that exposes AdsKit SDK functionality to JS side.
- **www/**: Public interfaces for interacting AdsKit SDK through Cordova.

## 2. Installation Guide

1. [Create an application](https://developer.huawei.com/consumer/en/doc/distribution/app/agc-create_app) on AppGallery Connect.

2. Go to Develop > Overview > App information then download `agconnect-services.json` and add it to root directory.

3. Copy `package_name` value from `agconnect-services.json` file and put it in `id` field of `config.xml` file.

4. Download the Cordova Ads SDK Plugin.

5. Add platform to project.

```
cordova platform add android
```

6. Run the following command in the root directory of the Cordova project:

```
cordova plugin add PATH_TO_CORDOVA_ADS_SDK
```

7. Check whether the Cordova ADS SDK is successfully added to `plugins` folder in the root directory of the Cordova project.

8. Add jks(keystore) file to root directory. Refer to [creating jks file](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/iap-configuring-appGallery-connect).

9. Add build.json file to your project's root.

```json
{
    "android": {
        "release": {
          "keystore": "./YOUR-JKS-FILE-NAME",
          "storePassword": "STORE-PASSWORD",
          "alias": "ALIAS",
          "password" : "PASSWORD"
        },
        "debug": {
          "keystore": "./YOUR-JKS-FILE-NAME",
          "storePassword": "STORE-PASSWORD",
          "alias": "ALIAS",
          "password" : "PASSWORD"
        }
    }
  }
```

10. Develop your app.

## 3. Cordova SDK API method definitions

### Data Types

#### AdParam

Defines an ad request.

| Field name              | Type   | Description                                                                                    |
|-------------------------|--------|------------------------------------------------------------------------------------------------|
| gender                  | int    | The gender.                                                                                    |
| adContentClassification | String | Ad content rating.                                                                             |
| tagForUnderAgeOfPromise | int    | Specifies whether to process ad requests as directed to users under the age of consent.        |
| tagForChildProtection   | int    | Specifies whether to process ad requests according to the COPPA.                               |
| nonPersonalizedAd       | int    | Specifies whether to request personalized ads.                                                 |
| appCountry              | String | The country code corresponding to the language in which an ad needs to be returned for an app. |
| appLang                 | String | The language in which an ad needs to be returned for an app.                                   |
| countryCode             | String | The home country code.                                                                         |

#### BannerAdOptions

Defines required information for a banner ad.

| Field name    | Type   | Description                             |
|---------------|--------|-----------------------------------------|
| adId          | String | An ad slot ID.                          |
| bannerAdSize  | String | Specifies size for banner.              |
| bgColor       | String | Background color.                       |
| anchor        | String | Banner position, bottom or top gravity. |
| bannerRefresh | long   | Rotation interval.                      |

#### SplashAdOptions

Defines required information for a splash ad.

| Field name      | Type                | Description                                                                                                           |
|-----------------|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| preload         | boolean             | Whether to preload the ad or not.                                                                                     |
| orientation     | int                 | Orientation of splash screen. (Required if preload is true.)                                                          |
| adId            | String              | An ad slot id. (Required if preload is true.)                                                                         |
| ad              | AdParam             | AdParam object. (Required if preload is true.)                                                                        |
| sloganResId     | String              | Default app launch image in portrait mode, which is displayed before a splash ad is displayed. (Android resource id)  |
| wideSloganResId | String              | Default app launch image in landscape mode, which is displayed before a splash ad is displayed. (Android resource id) |
| audioFocusType  | int                 | The audio focus preemption policy for a video splash ad.                                                              |
| logo            | SplashAdLogoOptions | Logo options.                                                                                                         |

#### SplashAdLogoOptions

Defines how splash ad's logo section looks like.

| Field name | Type    | Description                                  |
|------------|---------|----------------------------------------------|
| hidden     | boolean | Visibility state of the logo portion.        |
| anchor     | String  | Logo placement, either `"top"` or `"bottom"` |
| owner      | String  | Owner text.                                  |
| copyright  | String  | Copyright text.                              |
| bg         | int     | Background color of logo portion.            |

#### SplashAdLoadOptions

Defines required information to load splash ad.

| Field name  | Type    | Description                   |
|-------------|---------|-------------------------------|
| orientation | int     | Orientation of splash screen. |
| adId        | String  | An ad slot id.                |
| ad          | AdParam | AdParam object.               |

#### RewardAdOptions

Defines required information for a reward ad.

| Field name         | Type               | Description                          |
|--------------------|--------------------|--------------------------------------|
| userId             | String             | A user ID.                           |
| data               | String             | Custom data.                         |
| immersive          | boolean            | Immersive or not.                    |
| rewardVerifyConfig | RewardVerifyConfig | Server-side verification parameters. |

#### RewardVerifyConfig

Defines verify related configuration for reward ad.

| Field name | Type   | Description  |
|------------|--------|--------------|
| data       | String | Custom data. |
| userId     | String | User ID.     |

#### InterstitialAdOptions

Defines required information for a interstitial ad.

| Field name | Type   | Description |
|------------|--------|-------------|
| adId       | String | Ad slot ID. |

#### NativeAdOptions

Defines required information for a native ad.

| Field name | Type   | Description                                                                      |
|------------|--------|----------------------------------------------------------------------------------|
| div        | String | Companion HTML div id.                                                           |
| template   | String | Native ad view template. Options are: `"small"`, `"full"`, `"banner"`, `"video"` |

#### NativeAdLoadOptions

Defines required information to load native ad.

| Field name      | Type                  | Description              |
|-----------------|-----------------------|--------------------------|
| adId            | String                | Ad slot ID.              |
| ad              | AdParam               | AdParam object.          |
| nativeAdOptions | NativeAdConfiguration | Native ad configuration. |

#### NativeAdConfiguration

Defines extra information for a native ad.

| Field name                 | Type               | Description                                                     |
|----------------------------|--------------------|-----------------------------------------------------------------|
| adSize                     | AdSize             | Requested ad size.                                              |
| choicesPosition            | int                | Position of an ad choice icon.                                  |
| mediaAspect                | int                | Aspect ratio of an ad image..                                   |
| mediaDirection             | int                | Direction of an ad image..                                      |
| returnUrlsForImages        | boolean            | Whether the SDK is allowed to download native ad images or not. |
| requestCustomDislikeThisAd | boolean            | Whether native ad will have custom dislike this button or not.  |
| requestMultiImages         | boolean            | Whether multiple ad images are requested.                       |
| videoConfiguration         | VideoConfiguration | Video configuration used to control video playback.             |

#### AdSize

Defines an ad size.

| Field name | Type | Description       |
|------------|------|-------------------|
| width      | int  | The width in dp.  |
| height     | int  | The height in dp. |

#### VideoConfiguration

Video configuration used to control video playback.

| Field name               | Type    | Description                                                             |
|--------------------------|---------|-------------------------------------------------------------------------|
| audioFocusType           | int     | The video playback scenario where the audio focus needs to be obtained. |
| clickToFullScreenRequest | boolean | Whether click to full screen request exists.                            |
| startMuted               | boolean | Whether a video is initially muted.                                     |

#### InitOptions

Initial configuration options for Ads Kit.

| Field name  | Type    | Description                                              |
|-------------|---------|----------------------------------------------------------|
| appCode     | String  | App code.                                                |
| bannerFloat | boolean | Whether banner ads will float on Cordova webview or not. |

#### IsLoadingResult

Returned when `.isLoading()` function called on an ad.

| Field name | Type    | Description                |
|------------|---------|----------------------------|
| isLoading  | boolean | Whether the ad is loading. |

#### IsLoadedResult

Returned when `.isLoaded()` function called on an ad.

| Field name | Type    | Description                |
|------------|---------|----------------------------|
| isLoaded   | boolean | Whether the ad is loading. |

#### OaidResult

The OAID and setting of **Disable personalized ads**.

| Field name              | Type    | Description                                                  |
|-------------------------|---------|--------------------------------------------------------------|
| id                      | string  | The current OAID.                                            |
| isLimitAdTracingEnabled | boolean | Obtains the current setting of **Disable personalized ads**. |

#### ReferrerDetails

Describes the install referrer information.

| Field name             | Type    | Description                                                                                                                                                                             |
|------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| responseCode           | integer | Connection status. The options are as follows: `-1`: Failed to connect. `0`: Connected successfully. `1`: The service does not exist. `2`: The service is not supported. `3`: An error. |
| installReferrer        | string  | Obtains install referrer information.                                                                                                                                                   |
| referrerClickTimestamp | long    | Obtains the ad click timestamp, in milliseconds.                                                                                                                                        |
| installBeginTimestamp  | long    | Obtains the app installation timestamp, in milliseconds.                                                                                                                                |

### Constants

| Constant Name         | Description                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------|
| `BANNER_SIZE_360_57`  | Banner ad size: 360 x 57 dp                                                                       |
| `BANNER_SIZE_360_144` | Banner ad size: 360 x 144 dp                                                                      |
| `BANNER_SIZE_160_600` | Banner ad size: 160 x 600 dp                                                                      |
| `BANNER_SIZE_300_250` | Banner ad size: 300 x 250 dp                                                                      |
| `BANNER_SIZE_320_100` | Banner ad size: 320 x 100 dp                                                                      |
| `BANNER_SIZE_320_50`  | Banner ad size: 320 x 50 dp                                                                       |
| `BANNER_SIZE_468_60`  | Banner ad size: 468 x 60 dp                                                                       |
| `BANNER_SIZE_728_90`  | Banner ad size: 728 x 90 dp                                                                       |
| `BANNER_SIZE_DYNAMIC` | Dynamic banner ad size. The width of the parent layout and the height of the ad content are used. |
| `BANNER_SIZE_INVALID` | Invalid size. No ad can be requested using this size.                                             |
| `BANNER_SIZE_SMART`   | Dynamic banner ad size. The screen width and an adaptive height are used                          |

### BannerAd

#### Public Method Summary

| Method name                         | Return Type         | Description                                                      |
|-------------------------------------|---------------------|------------------------------------------------------------------|
| create(params: BannerAdOptions)     | `Promise<BannerAd>` | Creates the Banner Ad.                                           |
| on(eventName: String, cb: Function) | `undefined`         | Subscribe to given event.                                        |
| loadAd(adParam: AdParam)            | `Promise<>`         | Load ad with given adParam.                                      |
| pause()                             | `Promise<>`         | Pauses any additional processing related to an ad view.          |
| resume()                            | `Promise<>`         | Resumes an ad view after the pause() method is called last time. |
| destroy()                           | `Promise<>`         | Destroys an ad view.                                             |

#### Event names

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name | Description                               |
|------------|-------------------------------------------|
| loaded     | Called when an ad is loaded successfully. |
| failed     | Called when an ad request fails.          |
| opened     | Called when an ad is opened.              |
| clicked    | Called when an ad is tapped.              |
| leave      | Called when an ad leaves an app.          |
| closed     | Called when an ad is closed.              |

### SplashAd

#### Public Method Summary

| Method name                         | Return Type                | Description                                                      |
|-------------------------------------|----------------------------|------------------------------------------------------------------|
| create(params: SplashAdOptions)     | `Promise<SplashAd>`        | Creates the Splash Ad.                                           |
| on(eventName: String, cb: Function) | `undefined`                | Subscribe to given event.                                        |
| load(options: SplashAdLoadOptions)  | `Promise<>`                | Loads the splash ad.                                             |
| show()                              | `Promise<>`                | Show the splash ad.                                              |
| cancel()                            | `Promise<>`                | Close the splash ad.                                             |
| pause()                             | `Promise<>`                | Pauses any additional processing related to an ad view.          |
| resume()                            | `Promise<>`                | Resumes an ad view after the pause() method is called last time. |
| destroy()                           | `Promise<>`                | Destroys the ad view.                                            |
| isLoaded()                          | `Promise<IsLoadedResult>`  | Checks whether the ad has been loaded or not.                    |
| isLoading()                         | `Promise<IsLoadingResult>` | Checks whether the ad is being loaded or not.                    |

#### Event Names

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name | Description                                     |
|------------|-------------------------------------------------|
| loaded     | Called when a splash ad is loaded successfully. |
| loadFailed | Called when a splash ad fails to be loaded.     |
| dismissed  | Called after a splash ad disappears.            |
| showed     | Called when a splash ad is displayed.           |
| click      | Called when a splash ad is clicked.             |

### RewardAd

#### Public Method Summary

| Method name                         | Return Type               | Description                                                      |
|-------------------------------------|---------------------------|------------------------------------------------------------------|
| create(params: RewardAdOptions)     | `Promise<RewardAd>`       | Creates the Reward Ad.                                           |
| on(eventName: String, cb: Function) | `undefined`               | Subscribe to given event.                                        |
| loadAd(adParam: AdParam)            | `Promise<>`               | Load the ad with given adParam.                                  |
| show()                              | `Promise<>`               | Show the splash ad.                                              |
| pause()                             | `Promise<>`               | Pauses any additional processing related to an ad view.          |
| resume()                            | `Promise<>`               | Resumes an ad view after the pause() method is called last time. |
| destroy()                           | `Promise<>`               | Destroys the ad view.                                            |
| isLoaded()                          | `Promise<IsLoadedResult>` | Checks whether the ad has been loaded or not.                    |

#### Event Names

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name | Description                                                   |
|------------|---------------------------------------------------------------|
| loaded     | Called when a rewarded ad is successfully loaded.             |
| loadFailed | Called when a rewarded ad fails to be loaded.                 |
| opened     | Called when a rewarded ad is opened.                          |
| showFailed | Called when a rewarded ad fails to be displayed.              |
| closed     | Called when a rewarded ad is closed.                          |
| rewarded   | Called when a rewarded ad is provided based on a rewarded ad. |

### InterstitialAd

#### Public Method Summary

| Method name                           | Return Type                | Description                                   |
|---------------------------------------|----------------------------|-----------------------------------------------|
| create(params: InterstitialAdOptions) | `Promise<InterstitialAd>`  | Creates the Interstitial Ad.                  |
| on(eventName: String, cb: Function)   | `undefined`                | Subscribe to given event.                     |
| loadAd(adParam: AdParam)              | `Promise<>`                | Load the ad with given adParam.               |
| show()                                | `Promise<>`                | Show the ad.                                  |
| destroy()                             | `Promise<>`                | Destroys the ad view.                         |
| isLoaded()                            | `Promise<IsLoadedResult>`  | Checks whether the ad has been loaded or not. |
| isLoading()                           | `Promise<IsLoadingResult>` | Checks whether the ad is being loaded or not. |

#### Event Names

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name      | Description                                     |
|-----------------|-------------------------------------------------|
| loaded          | Called when a splash ad is loaded successfully. |
| loadFailed      | Called when a splash ad fails to be loaded.     |
| dismissed       | Called after a splash ad disappears.            |
| showed          | Called when a splash ad is displayed.           |
| click           | Called when a splash ad is clicked.             |
| metadataChanged | Called when metadata is changed.                |

### NativeAd

#### Public Method Summary

| Method name                                  | Return Type               | Description                        |
|----------------------------------------------|---------------------------|------------------------------------|
| create(params: NativeAdOptions)              | `Promise<InterstitialAd>` | Creates the Native Ad.             |
| on(eventName: String, cb: Function)          | `undefined`               | Subscribe to given event.          |
| loadAd(params: NativeAdLoadOptions)          | `Promise<>`               | Load the ad with given parameters. |
| destroy()                                    | `Promise<>`               | Destroys the ad view.              |

#### Event Names

You can subscribe to these events using `.on` function, with event name as described below.

| Event Name     | Description                               |
|----------------|-------------------------------------------|
| nativeAdLoaded | Called when native ad is loaded.          |
| disliked       | Called when ad is disliked.               |
| videoStart     | Called when video started playing.        |
| videoPlay      | Called when video is playing.             |
| videoPause     | Called when video is paused.              |
| videoEnd       | Called when video is ended.               |
| videoMute      | Called when video is muted.               |
| loaded         | Called when an ad is loaded successfully. |
| failed         | Called when an ad request fails.          |
| opened         | Called when an ad is opened.              |
| clicked        | Called when an ad is tapped.              |
| leave          | Called when an ad leaves an app.          |
| closed         | Called when an ad is closed.              |


### Other Public Methods

| Name                                                        | Return Type                | Function Description                                                                                                 |
|-------------------------------------------------------------|----------------------------|----------------------------------------------------------------------------------------------------------------------|
| HMSAds.init(opts: InitOptions)                              | `Promise<>`                | Initialize some necessary values. You need to resolve the returning promise to be able to use Ads kit functionality. |
| HMSAds.getOaidResult()                                      | `Promise<OaidResult>`      | Obtains the current OAID.                                                                                            |
| HMSAds.getReferrerDetails(isTest: boolean)                  | `Promise<ReferrerDetails>` | Starts to connect to the install referrer service and obtains the Install Referrer information                       |
| HMSAds.disconnectFromReferrerClient()                       | `Promise<>`                | Ends the service connection and releases all occupied resources.                                                     |
| HMSAds.verifyAdId(adId: String, isLimitAdTracking: boolean) | `Promise<VerifyResult>`    | Verifies the OAID and setting of **Disable personalized ads**.                                                       |

## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
