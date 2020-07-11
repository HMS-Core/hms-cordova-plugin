# cordova-plugin-hms-site

## Contents
1. Introduction
2. Installation Guide
3. Function Definitions
4. Configuration & Description
5. Licencing & Terms

## 1. Intruduction

This plugin enables communication between Huawei Site SDK and Cordova platform. It exposes all functionality provided by Huawei Site SDK.


## 2. Installation Guide

- Download cordova-plugin-hms-site plugin.
- Run following command in the root directory of project
```bash
cordova plugin add <plugin_path>
```

- Download agconnect-services.json and put it under the root directory of the project

- Add keystore file and build.json file to your project's root.
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

## 3. Function Definitions

|Return Type | Function                                                                     |
|:-----------|:-----------------------------------------------------------------------------|
|void        | initializeService(config, successCallback, errorCallback)                    |
|void        | textSearch(textSearchRequest, successCallback, errorCallback)                |
|void        | detailSearch(detailSearchRequest, successCallback, errorCallback)            |
|void        | querySuggestion(querySuggestionRequest, successCallback, errorCallback)      | 
|void        | nearbySearch(nearbySearchRequest, successCallback, errorCallback)            |

## 3. Confuguration & Description
No.

## 4. Licencing & Terms
Apache 2.0 license.
