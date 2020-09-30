# cordova-plugin-hms-site

## Contents

* [1. Introduction](#1-introduction)
* [2. Installation Guide](#2-installation-guide)
* [3. API Reference](#3-api-reference)
* [4. Configuration and Description](#4-configuration-and-description)
* [5. Sample Project](#5-sample-project)
* [6. Questions or Issues](#6-questions-or-issues)
* [7. Licencing and Terms](#7-licencing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Site SDK and Cordova platform. It exposes all functionality provided by Huawei Site SDK.

---

## 2. Installation Guide

### Cordova

* Download cordova-plugin-hms-site plugin.
* You can either install the plugin through npm or by downloading from downloads page, [Cordova plugin package](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Library-V1/cordova-sdk-download-0000001050426037-V1).
    a. Run the following command in the root directory of your Cordova project to install it through npm.

    ***```cordova plugin add @hmscore/cordova-plugin-hms-site```***

    b. Run the following command in the root directuory of your Cordova project to install it manually after downloading the plugin.

    ***```cordova plugin add <CORDOVA_SITE_PLUGIN_PATH>```***

* Download agconnect-services.json and put it under the root directory of the project

* Add keystore file and build.json file to your project's root.

```json
{
    "android": {
        "debug": {
            "keystore": "<keystore>",
            "storePassword": "<password>",
            "alias": "<alias>",
            "password" : "<password>",
        },
        "release": {
            "keystore": "<keystore>",
            "storePassword": "<password>",
            "alias": "<alias>",
            "password" : "<password>",
        }
    }
}
```

### Ionic

1. Download the Cordova Push SDK Plugin through npm or by downloading from downloads page, [Cordova plugin package](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Library-V1/cordova-sdk-download-0000001050426037-V1).

    a. Run the following command in the root directuory of your Cordova project to install it manually after downloading the plugin.

    ***```npm install <CORDOVA_SITE_PLUGIN_PATH>```***

    b. Run the following command in the root directory of your Cordova project to install it through npm.

    ***`npm install @hmscore/cordova-plugin-hms-site`***

2. Check whether the Cordova Site SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project.

    ***`npm install @ionic-native/core --save-dev`***

4. Copy the "ionic/dist/hms-site" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`***

    > ***NOTE:*** where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and agconnect service dependencies.

8. Add the plug-in configuration to the build.gradle file in the app directory. And add site service implementation into to dependencies.

9. Add agconnect-services.json and jks file to the app directory in your Android project.

10. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

11. Then run the Ionic app.
    ***`ionic capacitor run android`***

    After this command, the demo will be opened android studio. Just run it.

---

## 3. API Reference

| Return Type      | Function                                                                                              | Description                                                                                                                                                                                                    |
| :--------------- | :---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Promise\<any\>   | [initializeService(params)](#promiseany-hmssiteinitializeServiceparams)                               | Call the initializeService method to initialize the HMSSite service. A configuration object which contains apiKey must be passed as a parameter.                                                               |
| Promise\<Sites\> | [textSearch(textSearchRequest)](#promiseSites-hmssitetextSearchtextSearchRequest)                     | With this function, users can specify keywords, coordinate bounds, and other information to search for places such as tourist attractions, enterprises, and schools.                                           |
| Promise\<Sites\> | [detailSearch(detailSearchRequest)](#promiseSites-hmssitedetailSearchdetailSearchRequest)             | With this function, users can search for details about a place based on the unique ID of the place.                                                                                                            |
| Promise\<Sites\> | [querySuggestion(querySuggestionRequest)](#promiseSites-hmssitequerySuggestionquerySuggestionRequest) | With this function, your app can return search suggestions during the user input.                                                                                                                              |
| Promise\<Sites\> | [nearbySearch(nearbySearchRequest)](#promiseSites-hmssitenearbySearchnearbySearchRequest)             | With this function, your app can return a list of nearby places based on the current location of a user. When the user selects a place, the app obtains the place ID and searches for details about the place. |
| Promise\<Site\>  | [widgetSearch(widgetSearchRequest)](#promiseSite-hmssitewidgetSearchwidgetSearchRequest)              | The widget is a search component of the built-in place search suggestion feature. When a user enters a keyword in the search box, the widget displays a list of suggested places to the user.                  |
| Promise\<void\>  | [enableLogger()](#promisevoid-hmssiteenablelogger)                                                    | This method enables HMSLogger capability which is used for sending usage analytics of Site SDK's methods to improve the service quality.                                                                       |
| Promise\<void\>  | [disableLogger()](#promisevoid-hmssitedisableLogger)                                                  | This method disables HMSLogger capability which is used for sending usage analytics of Site SDK's methods to improve the service quality.                                                                      |

### Public Methods

#### Promise\<any\> HMSSite.initializeService(params)

Call the initializeService method to initialize the HMSSite service. A configuration object which contains apiKey must be passed as a parameter.

##### Parameters

| Name   | Description                                                                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| config | Configuration that contains the value of apiKey obtained from HUAWEI AppGallery Connect, which is required for the start of the services. |

##### Call Example

```dart
    var config = {
      apiKey: "<API_KEY>"
    };
    HMSSite.initializeService(
      config
    );
```

#### Promise\<Sites\> HMSSite.textSearch(textSearchRequest)

With this function, users can specify keywords, coordinate bounds, and other information to search for places such as tourist attractions, enterprises, and schools.

##### Parameters

| Name              | Description                           |
| ----------------- | ------------------------------------- |
| textSearchRequest | Request object used for place search. |

##### Call Example

```dart
async function onTextSearch() {
  var textSearchReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    radius: 1000,
    poiType: HMSSite.LocationType.ADDRESS,
    hwPoiType: HMSSite.HwLocationType.ADDRESS,
    countryCode: "FR",
    language: "fr",
    pageIndex: 1,
    pageSize: 5
  };
  try {
    console.log(JSON.stringify(textSearchReq));
    alert(JSON.stringify(await HMSSite.textSearch(
      textSearchReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}
    );
```

#### Promise\<Sites\> HMSSite.detailSearch(detailSearchRequest)

With this function, users can search for details about a place based on the unique ID of the place.

##### Parameters

| Name                | Description                                   |
| ------------------- | --------------------------------------------- |
| detailSearchRequest | Request object used for place details search. |

##### Call Example

```dart
async function onDetailSearch() {
  var detailSearchReq = {
    siteId: "16DA89C6962A36CB1752A343ED48B78A",
    language: "fr"
  };
  try {
    alert(JSON.stringify(await HMSSite.detailSearch(
      detailSearchReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}
```

#### Promise\<Sites\> HMSSite.querySuggestion(querySuggestionRequest)

With this function, your app can return search suggestions during the user input.

##### Parameters

| Name                   | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| querySuggestionRequest | Request object used for search suggestions during user input. |

```dart
async function onQuerySuggestion() {
  var querySuggestionReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    poiTypes: [HMSSite.LocationType.ADDRESS, HMSSite.LocationType.GEOCODE],
    radius: 1000,
    countryCode: "FR",
    language: "fr",
  };
  try {
    alert(JSON.stringify(await HMSSite.querySuggestion(
      querySuggestionReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}
```

#### Promise\<Sites\> HMSSite.nearbySearch(nearbySearchRequest)

With this function, your app can return a list of nearby places based on the current location of a user. When the user selects a place, the app obtains the place ID and searches for details about the place.

##### Parameters

| Name                | Description                                      |
| ------------------- | ------------------------------------------------ |
| nearbySearchRequest | Request object used to search for nearby places. |

```dart
async function onNearbySearch() {
  var nearbySearchReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    radius: 1000,
    poiType: HMSSite.LocationType.ADDRESS,
    hwPoiType: HMSSite.HwLocationType.ADDRESS,
    countryCode: "FR",
    language: "fr",
    pageIndex: 1,
    pageSize: 5
  };
  try {
    alert(JSON.stringify(await HMSSite.nearbySearch(
      nearbySearchReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}
```

#### Promise\<Site\> HMSSite.widgetSearch(widgetSearchRequest)

The widget is a search component of the built-in place search suggestion feature. When a user enters a keyword in the search box, the widget displays a list of suggested places to the user.

##### Parameters

| Name                | Description                                         |
| ------------------- | --------------------------------------------------- |
| widgetSearchRequest | Request object used to search for place suggestion. |

```dart
async function widgetSearch() {
  var widgetSearchReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    coordinateBounds: {
      northeast: {
        lat: 48.858166833205594,
        lng: 2.3527817476503596,
      },
      southwest: {
        lat: 48.85562316679441,
        lng: 2.34891565234964,
      },
    },
    radius: 1000,
    poiTypes: [HMSSite.LocationType.ADDRESS],
    countryCode: "FR",
    language: "fr",
    hint: "Search Place"
  };
  try {
    let result = await HMSSite.widgetSearch(widgetSearchReq);
    alert(JSON.stringify(result))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}
```

#### Promise\<void\> HMSSite.enableLogger()

This method enables HMSLogger capability which is used for sending usage analytics of Site SDK's methods to improve the service quality.

##### Call Example

```dart
async function enableLogger() {
  try {
    await HMSSite.enableLogger();
  } catch (ex) {
    console.log(JSON.stringify(ex));
  }
}
```

#### Promise\<void\> HMSSite.disableLogger()

This method disables HMSLogger capability which is used for sending usage analytics of Site SDK's methods to improve the service quality.

##### Call Example

```dart
async function disableLogger() {
  try {
    await HMSSite.disableLogger();
  } catch (ex) {
    console.log(JSON.stringify(ex));
  }
}
```

## 4. Configuration and Description

No.

---

## 5. Sample Project

You can find demo applications about using the library here.

[Cordova Sample Code](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples/cordova-sample-code-0000001050184042)

[Ionic Sample Code](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples/ionic-sample-code-0000001052422017)

---

## 6. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

* [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **huawei-mobile-services**.
* [Github](https://github.com/HMS-Core/hms-cordova-plugin/) is the official repository for these plugins, You can open an issue or submit your ideas.
* [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001) HMS Core Module is great for general questions, or seeking recommendations and opinions.
* [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the Github Repository.

---

## 7. Licencing and Terms

Huawei Site Kit Cordova Plugin uses the Apache 2.0 license.
