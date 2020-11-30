# Cordova Plugin HMS Account

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
   - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
   - [2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json](#22-configuring-the-signing-certificate-fingerprint-and-obtaining-agconnect-servicesjson)
   - [2.3. Cordova](#23-cordova)
   - [2.4. Ionic](#24-ionic)
     - [2.4.1. With Cordova Runtime](#241-with-cordova-runtime)
     - [2.4.2. With Capacitor Runtime](#242-with-capacitor-runtime)
- [3. API Reference](#3-api-reference)
    - [3.1. Module Overview](#31-module-overview)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

The Cordova SDK code encapsulates the Huawei Account Kit interface. It provides many APIs for your reference or use.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### 2.1. Creating a Project in AppGallery Connect

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html)  and select **My projects**.
2. Select your project from the project list or create a new one by clicking the **Add Project** button.
3. Go to **Project Setting** > **General information**, and click **Add app**.
If an app exists in the project and you need to add a new one, expand the app selection area on the top of the page and click **Add app**.
4. On the **Add app** page, enter the app information, and click **OK**.

### 2.2. Configuring the Signing Certificate Fingerprint, Obtaining agconnect-services.json

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the  icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.
2. After completing the configuration, click **OK** to save the changes. (Check mark icon)
3. In the same page, click **agconnect-services.json** button to download the configuration file.

### 2.3. Cordova

1. Install Cordova CLI.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

4. Install `HMS Account Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-account
    ```

    b. Or download the plugin from [Plugin > Account Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_account_plugin_path>
    ```

5. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

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

7. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

8. Run the application.

    ```bash
    cordova run android --device
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

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

4. Install `HMS Account Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-account
    ```

    b. Or download the plugin from [Plugin > Account Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_account_plugin_path>
    ```

5. Copy **hms-account** folder from **`node_modules/@hmscore/cordova-plugin-hms-account/ionic/wrapper/dist`** directory to **`node_modules/@ionic-native`** directory.

6. Copy **`agconnect-services.json`** file to **`<project_root>/platforms/android/app`** directory.

7. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

8. Run the application.

   ```bash
   ionic cordova run android --device
   ```

#### 2.4.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Update the widget **`appId`** property which is specified in the **`capacitor.config.json`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

3. Install `HMS Account Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-account
    ```

   b. Or download the plugin from [Plugin > Account Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_account_plugin_path>
    ```

4. Copy **hms-account** folder from **`node_modules/@hmscore/cordova-plugin-hms-account/ionic/wrapper/dist`** directory to **`node_modules/@ionic-native`** directory.

5. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

6. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

7. Copy **`keystore(.jks)`** and **`agconnect-services.json`** files to **`<project_root>/android/app`** directory.

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

10. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

## 3. API Reference

## Module Overview

| Module                                            | Description                                                                                         |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [HMSCommonTypes](#constants)                                    | A module for providing common data types and constants.                                             |
| [HMSAccount](#hmsaccount)                         | A module for interacting with the Huawei Sign In API.                                               |
| [HMSHuaweiIdAuthManager](#hmshuaweiIdauthmanager) | A module is used to entry point for the Huawei Sign In API.                                         |
| [HMSHuaweiIdAuthTool](#hmshuaweiIdauthtool)       | A module for obtaining and clearing authorization information.                                      |
| [HMSNetworkTool](#hmsnetworkTool)                 | A module is used to construct a cookie and a url with specific parameters.                          |
| [HMSReadSMSManager](#hmsreadsmsmanager)           | A module for Huawei ID SMS Service.                                                                 |
| [HMSHuaweiIdAuthButton](#hmshuaweiIdauthbutton)   | A module is used to processing the the visual elements of the button for sign in.                   |

## HMSAccount

### Public Method Summary

 | Return Type                              | Methods               | Definition                                                                             |
 | ---------------------------------------- | --------------------- | -------------------------------------------------------------------------------------- |
 | Promise\<[AuthHuaweiId](#authhuaweiid)\> | `signIn`              | This API is called to sign in to the apps with HUAWEI IDs securely.                    |
 | Promise\<void\>                          | `signOut`             | This API is called to sign out of a HUAWEI ID from an app.                             |
 | Promise\<void\>                          | `cancelAuthorization` | This API is called to cancel HUAWEI sign-in authorization.                             |
 | Promise\<[AuthHuaweiId](#authhuaweiid)\> | `silentSignIn`        | This API is called to silent authorization. The API will not display the related page. |
| void        | `enableLogger`  | This API is used to activating a logger that is for sending some statistics for the development of functions. |
| void        | `disableLogger` | This API is used to disable a logger that is for sending some statistics for the development of functions.    |

### Public Methods

### signIn

This API is called for HUAWEI sign-in.

 | Parameter  | Type       | Definition       |
 | ---------- | ---------- | ---------------- |
 | signInData | [SignInData](#signindata)] | Signin settings. |

| Return                                   | Definition                                                                                               |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Promise\<[AuthHuaweiId](#authhuaweiid)\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |

#### Call Example

```javascript

const signInParameters = {
        authRequestOption: [HMSCommonTypes.AuthRequestOption.SCOPE_ID_TOKEN],
        authParam: HMSCommonTypes.HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM
}


try {
    const res = await HMSAccount.signIn(signInParameters);
    alert(JSON.stringify(res));
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

#### Example Result

```javascript
{"accessToken":"","displayName":"account@***.com","email":"account@***.com","familyName":"","givenName":"","authorizationCode":"DQB6e3******","avatarUriString":"","expressionTimeSecs":0,"gender":-1,"describeContentsInAuthHuaweiId":0,"status":0,"authorizedScopes":["openid","profile"],"extensionScopes":[],"account":{"type":"com.huawei","name":"account@***.com"}}
```

### signOut

This API is called to sign out of a HUAWEI ID from an app. After sign-out, the HMS SDK deletes the cached HUAWEI ID information.

| Return          | Definition                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Promise\<void\> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

#### Call Example

```javascript
    try {
        await HMSAccount.signOut();
        alert("signOut -> success");
    } catch (ex) {
        alert('signOut -> Error : ' + JSON.stringify(ex));
    }
```

### cancelAuthorization

This API is called to cancel HUAWEI sign-in authorization.

| Return          | Definition                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Promise\<void\> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

#### Call Example

```javascript
    try {
        await HMSAccount.cancelAuthorization();
        alert("cancelAuthorization -> success");
    } catch (ex) {
        alert('cancelAuthorization -> Error : ' + JSON.stringify(ex));
    }
```

### silentSignIn

This API is called to return the information (or error information) about the HUAWEI ID used by a user who has signed in to an app. During this process, no user page will be displayed to the HUAWEI ID user.

 | Parameter | Type                                      | Definition                                                    |
 | --------- | ----------------------------------------- | ------------------------------------------------------------- |
 | authParam | [HuaweiIdAuthParams](#huaweiidauthparams) | Authorization scope parameter to customize the authorization. |

| Return                                   | Definition                                                                                               |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Promise\<[AuthHuaweiId](#authhuaweiid)\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |

#### Call Example

```javascript
    try {
        const authParam = HMSCommonTypes.HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM;
        const res = await HMSAccount.silentSignIn(authParam);
        alert("silentSignIn -> success :" + JSON.stringify(res));
    } catch (ex) {
        alert('silentSignIn -> Error : ' + JSON.stringify(ex));
    }
```
#### Example Result

```javascript
{"accessToken":"","displayName":"account@***.com","familyName":"","givenName":"","unionId":"MDEC*****","avatarUriString":"","expressionTimeSecs":0,"openId":"MDF***","gender":-1,"describeContentsInAuthHuaweiId":0,"status":0,"authorizedScopes":["openid","profile"],"extensionScopes":[]}
```

### enableLogger

Enables HMS Logger.

| Return          | Definition                                                                           |
| --------------- | ------------------------------------------------------------------------------------ |
| Promise\<void\> | If the operation is successful, a logger is activated. Otherwise it throws an error. |

#### Call Example

```javascript
 try {
        await HMSAccount.enableLogger();
        alert("enableLogger -> success");
    } catch (ex) {
        alert('enableLogger -> Error : ' + JSON.stringify(ex));

```

### disableLogger

Disables HMS Logger.

| Return          | Definition                                                                          |
| --------------- | ----------------------------------------------------------------------------------- |
| Promise\<void\> | If the operation is successful, a logger is disabled. Otherwise it throws an error. |

#### Call Example

```javascript
 try {
        await HMSAccount.disableLogger();
        alert("disableLogger -> success");
    } catch (ex) {
        alert('disableLogger -> Error : ' + JSON.stringify(ex));
```

## HMSHuaweiIdAuthManager

### Public Method Summary

 | Return Type                                            | Methods                                  | Definition                                                                                                                           |
 | ------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
 | Promise\<void\>                                        | `addAuthScopes`  | This API is called to request the permission specified by scopeList from a HUAWEI ID.                                                |
 | Promise\<[ContainScopesResult](#containscopesresult)\> | `containScopes` | This API is called to check whether the user with the designated HUAWEI ID has been assigned all permissions specified by scopeList. |
 | Promise\<[AuthHuaweiId](#authhuaweiid)\>               | `getAuthResultWithScope`      | This API is called to obtain the AuthHuaweiId instance.                                                                              |
 | Promise\<[AuthHuaweiId](#authhuaweiid)\>               | `getAuthResult`                        | This API is called to obtain the latest authorization information.                                                                   |

### Public Methods

### addAuthScopes

This API is called to request the permission specified by scopeList from a HUAWEI ID.

 | Parameter   | Type                              | Definition                |
 | ----------- | --------------------------------- | ------------------------- |
 | requestCode | number                            | Request Id.               |
 | scopeList   | [AuthScopeList](#authscopelist)[] | Authorization scope list. |

 | Return Type     | Definition                                                                                       |
 | --------------- | ------------------------------------------------------------------------------------------------ |
 | Promise\<void\> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

#### Call Example

```javascript
const scopeList = [HMSCommonTypes.AuthScopeList.EMAIL, HMSCommonTypes.AuthScopeList.PROFILE];
try {
    const res = await HMSHuaweiIdAuthManager.addAuthScopes(8888, scopeList);
    alert("addAuthScopes -> success " + JSON.stringify(res));
    console.log(JSON.stringify(res));
} catch (ex) {
    alert('addAuthScopes -> Error : ' + JSON.stringify(ex));
}
```

### containScopes

This API is called to checks whether the designated HUAWEI ID has been assigned all permissions specified by scopeList.

| Parameter    | Type                                        | Definition                        |
| ------------ | ------------------------------------------- | --------------------------------- |
| authHuaweiId | [AuthHuaweiIdBuilder](#authhuaweiidbuilder) | Authorized HUAWEI ID information. |
| scopeList    | [AuthScopeList](#authscopelist)[]           | Authorization scope list.         |

 | Return                                                 | Definition                                                                                                                                                |
 | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Promise\<[ContainScopesResult](#containscopesresult)\> | If the operation is successful, promise resolves to an object that contains boolean result, like {"containScopes": false }. Otherwise it throws an error. |

 #### Call Example

 ```javascript
    const authHuaweiId = {
        "openId": "MDFQ***",
        "uid": "",
        "displayName": "+90***",
        "photoUrl": "",
        "accessToken": "",
        "serviceCountryCode": "",
        "status": 0,
        "gender": HMSCommonTypes.Gender.UNKNOWN,
        "serverAuthCode": "",
        "unionId": "MDHn***",
        "countryCode": "",
        "scopes": [HMSCommonTypes.AuthScopeList.EMAIL]
    };

    const scopeList = [HMSCommonTypes.AuthScopeList.EMAIL, HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSHuaweiIdAuthManager.containScopes(authHuaweiId, scopeList);
        alert("containScopes -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('containScopes -> Error : ' + JSON.stringify(ex));
    }
 ```

#### Call Result

 ```javascript
 {"containScopes": false}
 ```

### getAuthResultWithScope

This API is called to obtain the AuthHuaweiId.

 | Parameter | Type                              | Definition                |
 | --------- | --------------------------------- | ------------------------- |
 | scopeList | [AuthScopeList](#authscopelist)[] | Authorization scope list. |

 | Return                                   | Definition                                                                                               |
 | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
 | Promise\<[AuthHuaweiId](#authhuaweiid)\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |

 #### Call Example

```javascript
    const scopeList = [HMSCommonTypes.AuthScopeList.EMAIL, HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSHuaweiIdAuthManager.getAuthResultWithScope(scopeList);
        alert("getAuthResultWithScope -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('getAuthResultWithScope -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
{"accessToken":"CgB6****","displayName":"account@***.com","familyName":"","givenName":"","idToken":"eyJr***","unionId":"MDE***","avatarUriString":"","expressionTimeSecs":0,"openId":"MDF***","gender":-1,"describeContentsInAuthHuaweiId":0,"status":0,"authorizedScopes":["openid","profile"],"extensionScopes":["profile","email"]}
```

### getAuthResult()

This API is called to obtain information about the HUAWEI ID used for the previous sign-in and authorization.

 | Return                                   | Definition                                                                                               |
 | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
 | Promise\<[AuthHuaweiId](#authhuaweiid)\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |

 #### Call Example

```javascript
    try {
        const res = await HMSHuaweiIdAuthManager.getAuthResult();
        alert("getAuthResult -> success " + JSON.stringify(res));
        console.log(JSON.stringify(res));
    } catch (ex) {
        alert('getAuthResult -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
{"accessToken":"CgB***","displayName":"account@****.com","familyName":"","givenName":"","idToken":"eyJ***","unionId":"MDE***","avatarUriString":"","expressionTimeSecs":0,"openId":"MDF***","gender":-1,"describeContentsInAuthHuaweiId":0,"status":0,"authorizedScopes":["openid","profile"],"extensionScopes":[]}

```

## HMSHuaweiIdAuthTool

### Public Method Summary

 | Return Type       | Methods                                  | Definition                                   |
 | ----------------- | ---------------------------------------- | -------------------------------------------- |
 | Promise\<string\> | `requestUnionId`      | This API is called to obtain a unionId.      |
 | Promise\<string\> | `requestAccessToken` | This API is called to obtain a token.        |
 | Promise\<void\>   | `deleteAuthInfo`            | This API is called to clear the local cache. |

### Public Methods

### requestUnionId

Obtains a unionId.

| Parameter         | Type   | Definition      |
| ----------------- | ------ | --------------- |
| huaweiAccountName | string | HUAWEI ID Name. |

| Return            | Definition                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Promise\<string\> | If the operation is successful, promise resolves to a string that contains union id. Otherwise it throws an error. |

#### Call Example

```javascript
    try {
        const res = await HMSHuaweiIdAuthTool.requestUnionId("account@***.com");
        alert("requestUnionId -> success " + JSON.stringify(res));
        console.log(JSON.stringify(res));
    } catch (ex) {
        alert('requestUnionId -> Error : ' + JSON.stringify(ex));
    }

```

#### Call Result

```javascript
"MDE***"
```

### requestAccessToken

Obtains a token.

| Parameter | Type                              | Definition                                                                            |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| account   | [Account](#account)               | HUAWEI ID for which you need to obtain a token. It contains name and type properties. |
| scopeList | [AuthScopeList](#authscopelist)[] | HUAWEI ID authorization scope.                                                        |

| Return            | Definition                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Promise\<string\> | If the operation is successful, promise resolves to a string that contains a access token. Otherwise it throws an error. |

#### Call Example

```javascript
const account = {
        "type": "com.huawei.hwid",
        "name": "account@***.com"
    }

    const scopeList = [HMSCommonTypes.AuthScopeList.PROFILE];

    try {
        const res = await HMSHuaweiIdAuthTool.requestAccessToken(account, scopeList);
        alert("requestAccessToken -> success " + JSON.stringify(res));
        console.log(JSON.stringify(res));
    } catch (ex) {
        alert('requestAccessToken -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
"CgB***"

```

### deleteAuthInfo

Clears the local cache.

| Parameter   | Type   | Definition         |
| ----------- | ------ | ------------------ |
| accessToken | string | Token to be clear. |

 | Return          | Definition                                                                                       |
 | --------------- | ------------------------------------------------------------------------------------------------ |
 | Promise\<void\> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

 ### Call Example

 ```javascript
    try {
        const res = await HMSHuaweiIdAuthTool.deleteAuthInfo("access_token_info");
        alert("deleteAuthInfo -> success " + JSON.stringify(res));
        console.log(JSON.stringify(res));
    } catch (ex) {
        alert('deleteAuthInfo -> Error : ' + JSON.stringify(ex));
    }
 ```

## HMSNetworkTool

### Public Method Summary

| Return Type       | Methods                       | Definition                                                                |
| ----------------- | ----------------------------- | ------------------------------------------------------------------------- |
| Promise\<string\> | `buildNetworkCookie`  | This API is called to construct a cookie by combining input values.       |
| Promise\<string\> | `buildNetworkURL` | This API is called to cookie url based on the domain name and isUseHttps. |

### Public Methods

### buildNetworkCookie

Constructs a cookie by combining input values.

| Parameter | Type              | Definition                                                                                         |
| --------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| cookie    | [Cookie](#cookie) | It is an object that contains cookieName, cookieValue, domain, path, isHttpOnly, isSecure, maxAge. |

| Return            | Definition                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Promise\<string\> | If the operation is successful, promise resolves to a string that contains a cookie. Otherwise it throws an error. |

#### Call Example

```javascript
    const param = {
        "cookieName": "hello",
        "cookieValue": "world",
        "domain": "www.demo.com",
        "path": "/demo",
        "isHttpOnly": true,
        "isSecure": true,
        "maxAge": 10
    };




    try {
        const res = await HMSNetworkTool.buildNetworkCookie(param);
        alert("buildNetworkCookie -> success " + JSON.stringify(res));
        console.log(JSON.stringify(res));
    } catch (ex) {
        alert('buildNetworkCookie -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
"hello=world;HttpOnly;Secure;Domain=www.demo.com;Path=/demo;Max-Age=10"
```

### buildNetworkURL

Returns cookie url based on the domain name and isUseHttps.

| Parameter  | Type                      | Definition                                                     |
| ---------- | ------------------------- | -------------------------------------------------------------- |
| domainInfo | [DomainInfo](#domaininfo) | The parameter that contains a domain name and isUseHttps info. |

| Return            | Definition                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Promise\<string\> | If the operation is successful, promise resolves to a string that contains a cookie url. Otherwise it throws an error. |

#### Call Example

```javascript
    const params = {
        "domain": "www.demo.com",
        "isUseHttps": true
    };

    try {
        const res = await HMSNetworkTool.buildNetworkURL(params);
        alert("buildNetworkURL -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('buildNetworkURL -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
"https://www.demo.com"
```

## HMSReadSMSManager

### Public Method Summary

| Return Type       | Methods                 | Definition                                                                                                                          |
| ----------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Promise\<string\> | `smsVerificationCode` | This API is called to enable the service of reading SMS messages until the SMS messages that meet the rules (Timeout five minutes). |
| Promise\<string\> | `obtainHashCode`      | This API is called to obtain hash code.                                                                                             |

### Public Methods

### smsVerificationCode

With this function, app can automatically retrieve SMS verification codes without requesting the permission of reading SMS messages. In case of get SMS Message, returned the SMS Message.

| Return            | Definition                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Promise\<string\> | If the operation is successful, promise resolves to a string that contains a content of SMS. Otherwise it throws an error. |

#### Call Example

```javascript
    try {
        const res = await HMSReadSMSManager.smsVerificationCode();
        alert("smsVerificationCode -> success :" + JSON.stringify(res));
        console.log(JSON.stringify(res));
    } catch (ex) {
        alert('smsVerificationCode -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
"<#> Account Kit Test Verification code is 123456 Wc1***"
```

### obtainHashCode

Obtains hash code which indicates the hash value generated by the HMS SDK based on app package name to uniquely identify app.

| Return            | Definition                                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Promise\<string\> | If the operation is successful, promise resolves to a string that contains a hash value. Otherwise it throws an error. |

#### Call Example

```javascript
    try {
        const res = await HMSReadSMSManager.obtainHashCode();
        alert("obtainHashCode -> success " + JSON.stringify(res));
    } catch (ex) {
        alert('obtainHashCode -> Error : ' + JSON.stringify(ex));
    }
```

#### Call Result

```javascript
"W1c***"
```

## HMSHuaweiIdAuthButton

### Public Method Summary

| Return Type | Methods                                                             | Definition                                                  |
| ----------- | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| void        | `getHuaweiIdAuthButton` | This API is called to creating a specific button for login. |

### Public Methods

### getHuaweiIdAuthButton
Authenticates user identities. Note that this class only processes the the visual elements of the button.

| Parameter    | Type         | Definition                                     |
| ------------ | ------------ | ---------------------------------------------- |
| buttonId     | string       | Id of div that is used for HuaweiIdAuthButton. |
| theme        | Theme        | Button theme                                   |
| colorPolicy  | ColorPolicy  | Values indicates button colors                 |
| cornerRadius | CornerRadius | Values indicates button corner types           |

#### Call Example

```javascript
const edittedButton = "btn_auth_button";

    HMSHuaweiIdAuthButton.getHuaweiIdAuthButton(edittedButton,
        HMSHuaweiIdAuthButton.Theme.THEME_FULL_TITLE,
        HMSHuaweiIdAuthButton.ColorPolicy.COLOR_POLICY_RED,
        HMSHuaweiIdAuthButton.CornerRadius.CORNER_RADIUS_LARGE);
```

## Constants

| Name                                 | Definition                                                         |
| ------------------------------------ | ------------------------------------------------------------------ |
| `HMSCommonTypes.AuthRequestOption`   | Provides scopes to request a Huawei ID user.                       |
| `HMSCommonTypes.HuaweiIdAuthParams`  | Provides default HuaweiID authorization parameters.                |
| `HMSCommonTypes.AuthScopeList`       | Provides authorization scopes.                                     |
| `HMSCommonTypes.Gender`              | Provides gender information.                                       |
| `HMSCommonTypes.ErrorCodes`          | Provides result codes.                                             |
| `HMSHuaweiIdAuthButton.Theme`        | Provides themes to set theme of the button.                        |
| `HMSHuaweiIdAuthButton.ColorPolicy`  | Provides colors to set color of the button.                        |
| `HMSHuaweiIdAuthButton.CornerRadius` | Provides corner radiueses to set corner radius size of the button. |

### AuthRequestOption

 | Constant Fields            | Value               | Definition                                                            |
 | -------------------------- | ------------------- | --------------------------------------------------------------------- |
 | `SCOPE_PROFILE`            | "profile"           | Requests a HUAWEI ID user to authorize profile information to an app. |
 | `SCOPE_ID_TOKEN`           | "idToken"           | Requests a HUAWEI ID user to authorize ID token to an app.            |
 | `SCOPE_ACCESS_TOKEN`       | "accessToken"       | Requests a HUAWEI ID user to authorize access token to an app.        |
 | `SCOPE_EMAIL`              | "email"             | Requests a HUAWEI ID user to authorize email address to an app.       |
 | `SCOPE_ID`                 | "id"                | Requests a HUAWEI ID user to authorize ID to an app.                  |
 | `SCOPE_AUTHORIZATION_CODE` | "authorizationCode" | Requests a HUAWEI ID user to authorize authorization code to an app.  |

### HuaweiIdAuthParams

 | Constant Fields                   | Value                             | Definition                                                                                               |
 | --------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------- |
 | `DEFAULT_AUTH_REQUEST_PARAM`      | "DEFAULT_AUTH_REQUEST_PARAM"      | Exposes HuaweiIdAuthParam.DEFAULT_AUTH_REQUEST_PARAM. Default authorization parameter of an AppTouch ID. |
 | `DEFAULT_AUTH_REQUEST_PARAM_GAME` | "DEFAULT_AUTH_REQUEST_PARAM_GAME" | Exposes HuaweiIdAuthParam.DEFAULT_AUTH_REQUEST_PARAM_GAME. Default authorization parameter of a game.    |

### AuthScopeList

| Constant Fields | Value                               | Definition                      |
| --------------- | ----------------------------------- | ------------------------------- |
| `GAME`          | "https://www.huawei.com/auth/games" | Value to specify game scope.    |
| `OPENID`        | "openid"                            | Value to specify openid scope.  |
| `EMAIL`         | "email"                             | Value to specify email scope.   |
| `PROFILE`       | "profile"                           | Value to specify profile scope. |

### Gender

| Constant Fields | Value | Definition   |
| --------------- | ----- | ------------ |
| `UNKNOWN`       | -1    | Unkown       |
| `MALE`          | 0     | Male         |
| `FEMALE`        | 1     | Female       |
| `CONFIDENTIAL`  | 2     | Confidential |

### Theme

| Constant Fields    | Value | Definition                       |
| ------------------ | ----- | -------------------------------- |
| `THEME_NO_TITLE`   | 0     | Button without any title.        |
| `THEME_FULL_TITLE` | 1     | Button with an icon and a title. |

### ColorPolicy

| Constant Fields                  | Value | Definition                 |
| -------------------------------- | ----- | -------------------------- |
| `COLOR_POLICY_BLUE`              | 0     | Blue button.               |
| `COLOR_POLICY_RED`               | 1     | Red button.                |
| `COLOR_POLICY_WHITE`             | 2     | White button.              |
| `COLOR_POLICY_WHITE_WITH_BORDER` | 3     | White button with strokes. |
| `COLOR_POLICY_BLACK`             | 4     | Black button.              |
| `COLOR_POLICY_GRAY`              | 5     | Gray button.               |

### CornerRadius

| Constant Fields        | Value | Definition                                |
| ---------------------- | ----- | ----------------------------------------- |
| `CORNER_RADIUS_LARGE`  | -1    | Button with large rounded corners.        |
| `CORNER_RADIUS_MEDIUM` | -2    | Button with medium-sized rounded corners. |
| `CORNER_RADIUS_SMALL`  | -3    | Button with small rounded corners         |

### ErrorCodes

| Constant Fields                  | Value | Definition                      |
| -------------------------------- | ----- | ------------------------------- |
| `HuaweiIdAuthException`          | "503" | An authentication error occurs. |

## Data Types

### AuthHuaweiIdBuilder

| Field Name         | Type            | Definition                                                                                  |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------- |
| openId             | string          | openId.                                                                                     |
| uid                | string          | uid.                                                                                        |
| displayName        | string          | Nickname.                                                                                   |
| photoUrl           | string          | Obtains the picture url.                                                                    |
| accessToken        | string          | Access token.                                                                               |
| serviceCountryCode | string          | Service country code.                                                                       |
| status             | number          | User status. 1: Normal; 2: Dbank suspended; 3: Deregistered, 4: All services are suspended. |
| gender             | Gender          | User Gender.                                                                                |
| scopes             | AuthScopeList[] | Authorized scopes.                                                                          |
| serverAuthCode     | string          | serverAuthCode.                                                                             |
| unionId            | string          | unionId.                                                                                    |
| countryCode        | string          | Registration country code.                                                                  |

### AuthHuaweiId

| Field                          | Type     | Definition                     |
| ------------------------------ | -------- | ------------------------------ |
| accessToken                    | string   | Access token.                  |
| displayName                    | string   | Nickname.                      |
| email                          | string   | Email adress.                  |
| familyName                     | string   | Family name.                   |
| givenName                      | string   | Given name.                    |
| idToken                        | string   | ID Token                       |
| unionId                        | string   | Union Id                        |
| avatarUriString                | string   | Profile picture URI            |
| openId                         | string   | OpenId                         |
| describeContentsInAuthHuaweiId | number   | Describe Contents In AuthHuaweiId |
| authorizedScopes               | string[] | Authorized Scopes              |
| authorizationCode              | string   | Authorization Code              |
| huaweiAccount                  | Account  | Huawei Account                  |

### Account

| Field Name | Type   | Definition                     |
| ---------- | ------ | ------------------------------ |
| type       | string | Type of HUAWEI ID Account.     |
| name       | string | Name of the HUAWEI ID Account. |

### Cookie

| Field Name  | Type    | Definition                                                                                                                                             |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cookieName  | string  | Cookie name.                                                                                                                                           |
| cookieValue | string  | Cookie value.                                                                                                                                          |
| domain      | string  | Cookie domain name.                                                                                                                                    |
| path        | string  | Page path for accessing the cookie.                                                                                                                    |
| isHttpOnly  | boolean | Value true indicates that the cookie information is contained only in the HTTP request header and cannot be accessed through document.cookie.          |
| isSecure    | boolean | Value true indicates that the cookie can be transmitted only through HTTPS, and value false indicates that the cookie can be transmitted through HTTP. |
| maxAge      | number  | Cookie lifetime, in seconds.                                                                                                                           |

### DomainInfo

| Field Name | Type    | Definition                                                  |
| ---------- | ------- | ----------------------------------------------------------- |
| domain     | string  | Domain name.                                                |
| isUseHttps | boolean | Value true indicates HTTPS, and value false indicates HTTP. |

### ContainScopesResult

| Field Name    | Type    | Definition                                                                                                                                       |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| containScopes | boolean | true: The HUAWEI ID has all the permissions specified by scopeArr. false: The HUAWEI ID does not have all the permissions specified by scopeArr. |

### SignInData

| Field Name        | Type                | Definition                                                                                                                        |
| ----------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| authRequestOption | [AuthRequestOption](#authrequestoption)[] | AuthRequestOption array to customize the authorization.                                                                           |
| authParam         | [HuaweiIdAuthParams](#huaweiauthparams)  | Authorization scope parameter to customize the authorization. It is optional.                                                     |
| authScopeList     | [AuthScopeList](#authscopelist)[]     | AuthScopeList array to customize the authorization. If this value not passed to API, an empty array will be send. It is optional. |

---

## 4. Configuration and Description

### SMS Message Rules

After the service of reading SMS messages is enabled, the SMS message you obtain is as follows:

> prefix_flag short message verification code is XXXXXX hash_value

prefix_flag indicates the prefix of an SMS message, which can be <#>, [#], or **. short message verification code is indicates the content of an SMS message, which is user-defined. XXXXXX indicates the verification code. hash_value indicates the hash value generated by the HMS SDK based on your app package name to uniquely identify your app.

### Preparing for Release

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Safety Detect plugin's ProGuard rules need to be added to your project. These rules are as follows:

```pro
-ignorewarnings
-keepattributes *Annotation*
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes Signature
-keep class com.hianalytics.android.**{*;}
-keep class com.huawei.updatesdk.**{*;}
-keep class com.huawei.hms.**{*;}
-repackageclasses
```

---

## 5. Sample Project

You can find the sample projects on [HMS Core > Examples > Account Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Account Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
