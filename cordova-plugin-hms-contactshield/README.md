# Cordova Plugin HMS Contact Shield

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
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei Contact Shield SDK and Cordova platform. It exposes all functionality provided by Huawei Contact Shield SDK.

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

### 2.3. Cordova

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

5. Install `HMS Contact Shield plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-contactshield
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

### 2.4 Ionic

1. Install Ionic CLI and other required tools if haven't done before.

    ```bash
    npm install -g @ionic/cli cordova-res native-run
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

4. Install `HMS Contact Shield plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-contactshield
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-contactshield
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

#### 2.4.2. With Capacitor Runtime

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

4. Install `HMS Contact Shield plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-contactshield
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-contactshield
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

### HMSContactShield

#### Method Summary

| Method                                                     | Return Type                | Description                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clearData()                                                | `Promise<void>`            | Deletes all data stored on the device by Contact Shield.                                                                                                                                                                                                                                      |
| getContactDetail(token:string)                             | `Promise<ContactDetail[]>` | Obtains the latest diagnosis result details from Contact Shield. This API has been deprecated. To ensure that the functions of earlier versions are normal, this API can still be used in the current version.                                                                                |
| startContactShield(incubationPeriod:number)                | `Promise<void>`            | Enables Contact Shield. When a user exits the app, Contact Shield is still running in the background.                                                                                                                                                                                         |
| startContactShieldOld(incubationPeriod:number)             | `Promise<void>`            | Enables Contact Shield. This API has been deprecated. To ensure that the functions of earlier versions are normal, this API can still be used in the current version.                                                                                                                         |
| startContactShieldNoPersistent(incubationPeriod:number)    | `Promise<void>`            | Enables Contact Shield. When a user exits the app, Contact Shield stops running.                                                                                                                                                                                                              |
| stopContactShield()                                        | `Promise<void>`            | Disables Contact Shield.                                                                                                                                                                                                                                                                      |
| getContactSketch(token:string)                             | `Promise<ContactSketch>`   | Obtains the latest diagnosis result summary from Contact Shield.                                                                                                                                                                                                                              |
| getContactWindow(token:string)                             | `Promise<ContactWindow[]>` | Obtains the latest diagnosis result details from Contact Shield in Window mode.                                                                                                                                                                                                               |
| getPeriodicKey()                                           | `Promise<PeriodicKey[]>`   | Obtains the periodic key list from the Contact Shield SDK.The periodic key list obtained by calling this API does not contain the periodic key of the current day.                                                                                                                            |
| isContactShieldRunning()                                   | `Promise<boolean>`         | Checks whether Contact Shield is running.                                                                                                                                                                                                                                                     |
| putSharedKeyFiles(sharedKeyData:SharedKeyData)             | `Promise<void>`            | Provides the shared key list file obtained from the diagnosis server to the Contact Shield SDK. If the Window mode is used, that is, ContactShieldEngine.TOKEN_A, a maximum of 60 calls are allowed within 24 hours. A common token can be called for a maximum of 200 times within 24 hours. |
| putSharedKeyFilesOld(sharedKeyData:SharedKeyData)          | `Promise<void>`            | Provides the shared key list file obtained from the diagnosis server to the Contact Shield SDK.This API has been deprecated. To ensure that the functions of earlier versions are normal, this API can still be used in the current version.                                                  |
| disableLogger()                                            | `Promise<void>`            | Disables HMS Plugin Method Analytics.                                                                                                                                                                                                                                                         |
| enableLogger()                                             | `Promise<void>`            | Enables HMS Plugin Method Analytics.                                                                                                                                                                                                                                                          |
| handleCallback(event:string, callback:(data:string)=>void) | `void`                     | A function for setting callbacks that will be triggered when putSharedKeyFiles or startContactShieldOld methods are called. `event` should be `onHasContact` and `onNoContact`                                                                                                                |
| registerReceiver()                                         | `Promise<void>`            | This method is used to start broadcast in the Android backend. This is required to start tracing. After calling this, you can use handleCallback function to register events.                                                                                                                 |
| unregisterReceiver()                                       | `Promise<void>`            | This method is used to stop broadcast in the Android backend.                                                                                                                                                                                                                                 |
| hasPermission(permission:Permission)                       | `Promise<boolean>`         | Checks if the specified permission is exist.                                                                                                                                                                                                                                                  |
| requestPermission(permission:Permission)                   | `Promise<void>`            | Activates specified permission.                                                                                                                                                                                                                                                               |

#### Methods

##### clearData()

Deletes all data stored on the device by Contact Shield, including periodic keys, historical shared keys detected, supplementary data, and diagnosis records.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    await HMSContactShield.clearData();
    alert("clearData-> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### getContactDetail(token:string)

Obtains the latest diagnosis result details from Contact Shield.

> **NOTICE:**
> The diagnosis is asynchronous. When token != [ContactShieldEngine.TOKEN_A](#ContactShieldEngine), the original mode is used. When this method is called to obtain the latest diagnosis result, a [ContactDetail](#contactdetail) list is returned.
>
> This API has been deprecated. To ensure that the functions of earlier versions are normal, this API can still be used in the current version.

###### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| token | string | Token.      |

###### Return Type

| Type                      | Description                                                      |
| ------------------------- | ---------------------------------------------------------------- |
| `Promise<ContactDetail[]` | The result of an execution that returns list of contact details. |

###### Sample Code

```ts
try {
    const token = "TOKEN_TEST";
    const res = await HMSContactShield.getContactDetail(token);
    alert("getContactDetail -> success, " + JSON.stringify(res));
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### startContactShield(incubationPeriod:number)

Enables Contact Shield. When a user exits the app, Contact Shield is still running in the background.

Before calling this method, your app must obtain the user's authorization for contact tracing.

###### Parameters

| Name             | Type   | Description                                                                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| incubationPeriod | number | Incubation period for COVID-19. This parameter is optional and its default value is **`14`** in days. The value range is \[1,60]. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    const incubationPeriod = 14;
    await HMSContactShield.startContactShield(incubationPeriod);
    alert("startContactShield -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}

```

##### startContactShieldOld(incubationPeriod:number)

Enables Contact Shield. Before calling this method, your app must obtain the user's authorization for contact tracing.

> **NOTE:** This API has been deprecated. To ensure that the functions of earlier versions are normal, this API can still be used in the current version.

###### Parameters

| Name             | Type   | Description                                                                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| incubationPeriod | number | Incubation period for COVID-19. This parameter is optional and its default value is **`14`** in days. The value range is \[1,60]. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
// You can also call handleCallback function here to handle incoming result
try {
    const incubationPeriod = 14;
    const res = await HMSContactShield.startContactShieldOld(incubationPeriod);
    alert("startContactShieldOld -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### startContactShieldNoPersistent(incubationPeriod:number)

Enables Contact Shield. When a user exits the app, Contact Shield stops running. Before calling this method, your app must obtain the user's authorization for contact tracing.

###### Parameters

| Name             | Type   | Description                                                                                                                 |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| incubationPeriod | number | Incubation period for COVID-19. This parameter is optional and its default value is 14 in days. The value range is \[1,60]. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    const incubationPeriod = 14;
    await HMSContactShield.startContactShieldNoPersistent(incubationPeriod);
    alert("startContactShieldNoPersistent -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### stopContactShield()

Disables Contact Shield. In this case, related data and keys are retained on the device and will not be deleted.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    res = await HMSContactShield.stopContactShield();
    alert("stopContactShield -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### getContactSketch(token:string)

Obtains the latest diagnosis result summary from Contact Shield.

> **NOTICE:** The diagnosis is asynchronous. When token != [TOKEN](#ContactShieldEngine), the original mode is used. When this method is called to obtain the latest diagnosis result, a [ContactSketch](#contactsketch) instance is returned.

###### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| token | string | Token.      |

###### Return Type

| Type                     | Description                                         |
| ------------------------ | --------------------------------------------------- |
| `Promise<ContactSketch>` | Result of an execution that returns contact sketch. |

###### Sample Code

```ts
try {
    const token = "TOKEN_TEST";
    const res = await HMSContactShield.getContactSketch(token);
    alert("getContactSketch -> success, " + JSON.stringify(res));
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### getContactWindow(token:string)

Obtains the latest diagnosis result details from Contact Shield in Window mode.

> **NOTICE:** The diagnosis is asynchronous. When token == [ContactShieldEngine.TOKEN_A](#contactshieldengine), the original mode is used. When this method is called to obtain the latest diagnosis result, a [ContactWindow](#contactwindow) list is returned.

###### Parameters

| Name  | Type   | Description                                                                             |
| ----- | ------ | --------------------------------------------------------------------------------------- |
| token | string | Token. This parameter is optional and its default value is ContactShieldEngine.TOKEN_A. |

###### Return Type

| Type                       | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| `Promise<ContactWindow[]>` | Result of an execution that returns list of contact windows. |

###### Sample Code

```ts
try {
    const token = HMSContactShield.ContactShieldEngine.TOKEN_A;
    const res = await HMSContactShield.getContactWindow(token);
    alert("getContactWindow -> success, " + JSON.stringify(res));
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### getPeriodicKey()

Obtains the periodic key list from the Contact Shield SDK. Before calling this method, your app must obtain the user's authorization. Your app can upload these periodic keys to the diagnosis server.

> **NOTE:** The periodic key list obtained by calling this API does not contain the periodic key of the current day.

###### Return Type

| Type                     | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `Promise<PeriodicKey[]>` | Result of an execution that returns list of periodic keys. |

###### Sample Code

```ts
try {
    const res = await HMSContactShield.getPeriodicKey();
    alert("getPeriodicKey -> success, " + JSON.stringify(res));
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### isContactShieldRunning()

Checks whether Contact Shield is running.

###### Return Type

| Type               | Description                          |
| ------------------ | ------------------------------------ |
| `Promise<boolean>` | Result of the Contact Shield status. |

###### Sample Code

```ts
try {
    const res = await HMSContactShield.isContactShieldRunning();
    alert("isContactShieldRunning -> success, " + res);
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### putSharedKeyFiles(sharedKeyData:SharedKeyData)

Provides the shared key list file obtained from the diagnosis server to the Contact Shield SDK.

If the Window mode is used, that is, ContactShieldEngine.TOKEN_A, a maximum of 60 calls are allowed within 24 hours. A common token can be called for a maximum of 200 times within 24 hours.

###### Parameters

| Name          | Type          | Description                                                                           |
| ------------- | ------------- | ------------------------------------------------------------------------------------- |
| sharedKeyData | SharedKeyData | It is an object that contain path of current keys, diagnosis configuration and token. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    fileChooser.open(async function(uri) {
        const args = {
            token: "TOKEN_TEST",
            diagnosisConfiguration: {},
            fileList: [uri]
        };
        const res = await HMSContactShield.putSharedKeyFiles(args);
        alert("putSharedKeyFiles -> success, " + res);
    });
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### putSharedKeyFilesOld(sharedKeyData:SharedKeyData)

Provides the shared key list file obtained from the diagnosis server to the Contact Shield SDK.

> **NOTICE:**
>
> This API has been deprecated. To ensure that the functions of earlier versions are normal, this API can still be used in the current version.

###### Parameters

| Name          | Type          | Description                                                                           |
| ------------- | ------------- | ------------------------------------------------------------------------------------- |
| sharedKeyData | SharedKeyData | It is an object that contain path of current keys, diagnosis configuration and token. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    fileChooser.open(async function(uri) {
        const args = {
            token: "TOKEN_TEST",
            diagnosisConfiguration: {},
            fileList: [uri]
        };
        const res = await HMSContactShield.putSharedKeyFilesOld(args);
        alert("putSharedKeyFilesOld -> success, " + res);
    });
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### disableLogger()

This method disables the HMSLogger capability which is used for sending usage analytics of contact Shield SDK's methods to improve the service quality.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    await HMSContactShield.disableLogger();
    alert("disableLogger -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### enableLogger()

This method enables the HMSLogger capability which is used for sending usage analytics of Map SDK's methods to improve the service quality.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    await HMSContactShield.enableLogger();
    alert("enableLogger -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### handleCallback(event:string, callback:(data: string) => void)

This method is used to handle callbacks that is coming after putSharedKeyResult and startContactShield methods.

###### Parameters

| Name     | Type                     | Description                                                                                                                          |
| -------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| event    | string                   | Possible values: `onHasContact` \| `onNoContact`                                                                                     |
| callback | `(data: string) => void` | Callback function that notifies the app that a shared key has / has not matched any historical contact records stored on the device. |

###### Sample Code

```ts
HMSContactShield.handleCallback("onHasContact", (data) => {
    alert("Event -> onHasContact, " + data)
})

HMSContactShield.handleCallback("onNoContact", (data) => {
    alert("Event -> onNoContact, " + data)
})
```

##### registerReceiver()

This method is used to start broadcast in the Android backend. This is required to start tracing. After calling this, you can use handleCallback function to register events.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    await HMSContactShield.registerReceiver();
    alert("registerReceiver -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### unregisterReceiver()

This method is used to stop broadcast in the Android backend.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    await HMSContactShield.unregisterReceiver();
    alert("unregisterReceiver -> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### hasPermission(permission:Permission)

Checks if the specified permission is exist.

###### Parameters

| Name       | Type       | Description |
| ---------- | ---------- | ----------- |
| permission | Permission | Permission. |

###### Return Type

| Type               | Description                                                                       |
| ------------------ | --------------------------------------------------------------------------------- |
| `Promise<boolean>` | If specified permission is activated, it returns true. Oherwise it returns false. |

###### Sample Code

```ts
try {
    const permission = HMSContactShield.Permission.BLUETOOTH;
    const res = await HMSContactShield.hasPermission(permission);
    alert(JSON.stringify(res));
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

##### requestPermission(permission:Permission)

Activates specified permission.

###### Parameters

| Name       | Type       | Description |
| ---------- | ---------- | ----------- |
| permission | Permission | Permission. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
try {
    const permission = HMSContactShield.Permission.BLUETOOTH;
    await HMSContactShield.requestPermission(permission);
    alert("requestPermission-> success");
} catch (ex) {
    alert(JSON.stringify(ex));
}
```

---

### Constants

| Name                                 | Definition                          |
| ------------------------------------ | ----------------------------------- |
| `ContactShield.ContactShieldSetting` | Provides default incubation period. |
| `ContactShield.ContactShieldEngine`  | Provides token window mode.         |
| `ContactShield.Permission`           | Provides permissions.               |
| `ContactShield.RiskLevel`            | Provides risk levels.               |
| `ContactShield.HMSStatusCode`        | Provides status codes.              |

#### ContactShieldSetting

| Field                     | Value | Description                             |
| ------------------------- | ----- | --------------------------------------- |
| DEFAULT_INCUBATION_PERIOD | 14    | Default incubation period for COVID-19. |

#### ContactShieldEngine

| Field   | Value               | Description                                                |
| ------- | ------------------- | ---------------------------------------------------------- |
| TOKEN_A | "TOKEN_WINDOW_MODE" | Token indicating that the Window mode needs to be enabled. |

#### Permission

| Field                  | Value | Description                                                            |
| ---------------------- | ----- | ---------------------------------------------------------------------- |
| INTERNET               | 1     | It used to allows applications to open network sockets.                |
| ACCESS_NETWORK_STATE   | 2     | It used to allows applications to access information about networks.   |
| BLUETOOTH              | 3     | It used to allows applications to connect to paired bluetooth devices. |
| BLUETOOTH_ADMIN        | 4     | It used to allows applications to discover and pair bluetooth devices. |
| ACCESS_COARSE_LOCATION | 5     | It used to allows an app to access location in the background.         |
| ACCESS_FINE_LOCATION   | 6     | It used to allows an app to access precise location.                   |

#### RiskLevel

| Field                  | Value | Description             |
| ---------------------- | ----- | ----------------------- |
| RISK_LEVEL_INVALID     | 0     | Invalid risk level.     |
| RISK_LEVEL_LOWEST      | 1     | Lowest risk level.      |
| RISK_LEVEL_LOW         | 2     | Low risk level.         |
| RISK_LEVEL_MEDIUM_LOW  | 3     | Low-medium risk level.  |
| RISK_LEVEL_MEDIUM      | 4     | Medium risk level.      |
| RISK_LEVEL_MEDIUM_HIGH | 5     | Medium-high risk level. |
| RISK_LEVEL_HIGH        | 6     | High risk level.        |
| RISK_LEVEL_EXT_HIGH    | 7     | Very high risk level.   |
| RISK_LEVEL_HIGHEST     | 8     | Highest risk level.     |

#### HMSStatusCode

| Field                               | Value | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STATUS_SUCCESS                      | 0     | Operation successful.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| STATUS_FAILURE                      | -1    | Operation failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| STATUS_API_DISORDER                 | 8001  | API calls are out of order.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| STATUS_APP_QUOTA_LIMITED            | 8100  | This error code is returned when startContactShield()  is called. The error cause is that multiple apps use Contact Shield at the same time.This error code is returned when putSharedKeyFiles() is called. The error cause is that the number of call times exceeds the upper limit. If the window mode is used, that is, ContactShieldEngine.TOKEN_A a maximum of 60 calls are allowed within 24 hours. A common token can be called for a maximum of 200 times within 24 hours. |
| STATUS_DISK_FULL                    | 8101  | The storage space is insufficient.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| STATUS_BLUETOOTH_OPERATION_ERROR    | 8102  | An error occurred when setting Bluetooth.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| STATUS_MISSING_PERMISSION_BLUETOOTH | 8016  | No Bluetooth permission                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| STATUS_MISSING_SETTING_LOCATION_ON  | 8020  | The location permission must be enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| STATUS_INTERNAL_ERROR               | 8060  | Internal error. For details, please refer to the error description.                                                                                                                                                                                                                                                                                                                                                                                                                |
| STATUS_MISSING_PERMISSION_INTERNET  | 8064  | The network permission is missing in Contact Shield.                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Data Types

#### PeriodicKey

| Field                | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| content              | Int8Array | A fixed-length list of 8-bit unsigned integers(0 to 255).                                                                                                                                                                                                                                                                                                                                                                                                                      |
| initialRiskLevel     | number    | The initial risk level corresponding to the periodic key. The value is an integer ranging from 0 to 8.The following are the suggested risk types and their meaning. Before uploading each key to the server, set initialRiskLevel. The options include: </br> 0: currently not used </br> 1: low risk </br> 2: medium risk </br> 3: high risk </br> 4: confirmed positive with COVID-19 </br> 5: self-report </br> 6: confirmed negative with COVID-19 </br> 7: recursive case |
| periodicKeyLifeTime  | number    | The number of time segments elapsed since the periodic key takes effect. Each time segment contains 10 minutes.                                                                                                                                                                                                                                                                                                                                                                |
| periodicKeyValidTime | number    | The time segment to which the periodic key effective time belongs.                                                                                                                                                                                                                                                                                                                                                                                                             |
| reportType           | number    | The diagnosis type that is specified when a shared key is uploaded. The diagnosis type options can be defined as required. Example:</br> The value of REPORT_TYPE_UNKNOW is 0. </br> The value of REPORT_TYPE_CONFIRMED_TEST is 1. </br> The value of REPORT_TYPE_CONFIRMED_CLINICAL_DIAGNOSIS is 2. </br> The value of REPORT_TYPE_SELF_REPORT is 3. </br> The value of REPORT_TYPE_RECURSIVE is 4. </br> The value of REPORT_TYPE_REVOKED is 5.                              |

#### SharedKeyData

| Field                  | Type                   | Description                      |
| ---------------------- | ---------------------- | -------------------------------- |
| token                  | string                 | Token.                           |
| diagnosisConfiguration | DiagnosisConfiguration | Current diagnosis configuration. |
| fileList               | string[]               | Paths of the shared keys.        |

#### DiagnosisConfiguration

| Field                                              | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attenuationDurationThresholds?                     | number[] | Signal attenuation threshold details. Value contains two thresholds, each ranging from 0 to 255.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| attenuationRiskValues?                             | number[] | Signal attenuation risk values. The definition of each value is as follows: </br> attenuationRiskValues[0]: The attenuation is greater than 73. </br> attenuationRiskValues[1]: The attenuation is greater than 63 and less than or equal to 73. </br> attenuationRiskValues[2]: The attenuation is greater than 51 and less than or equal to 63. </br> attenuationRiskValues[3]: The attenuation is greater than 33 and less than or equal to 51. </br> attenuationRiskValues[4]: The attenuation is greater than 27 and less than or equal to 33. </br> attenuationRiskValues[5]: The attenuation is greater than 15 and less than or equal to 27. </br> attenuationRiskValues[6]: The attenuation is greater than 10 and less than or equal to 15.                                                                                                                                                                                                                                                                                  |
| attenuationWeight?                                 | number   | Attenuation weight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| daysAfterContactedRiskValues?                      | number[] | The the risk value associated with the last contact based on the number of days elapsed since the last contact. The definition of each value is as follows: </br> daysAfterContactedRiskValues[0]: The number of days elapsed since the last contact is greater than or equal to 14. </br> daysAfterContactedRiskValues[1]: The number of days elapsed since the last contact is greater than or equal to 12. </br> daysAfterContactedRiskValues[2]: The number of days elapsed since the last contact is greater than or equal to 10. </br> daysAfterContactedRiskValues[3]: The number of days elapsed since the last contact is greater than or equal to 8. </br> daysAfterContactedRiskValues[4]: The number of days elapsed since the last contact is greater than or equal to 6. </br> daysAfterContactedRiskValues[5]: The number of days elapsed since the last contact is greater than or equal to 4. </br> daysAfterContactedRiskValues[6]: The number of days elapsed since the last contact is greater than or equal to 2. |
| daysAfterContactedWeight?                          | number   |
| The number of days elapsed since the last contact. |
| durationRiskValues?                                | number[] | The risk value associated with the last contact based on the duration (in minutes) of the last contact. The definition of each value is as follows: </br> durationRiskValues[0]: There is no contact. </br> durationRiskValues[1]: The contact duration is less than or equal to 5 minutes. </br> durationRiskValues[2]: The contact duration is less than or equal to 10 minutes. </br> durationRiskValues[3]: The contact duration is less than or equal to 15 minutes. </br> durationRiskValues[4]: The contact duration is less than or equal to 20 minutes. </br> durationRiskValues[5]: The contact duration is less than or equal to 25 minutes. </br> durationRiskValues[6]: The contact duration is less than or equal to 30 minutes.                                                                                                                                                                                                                                                                                         |
| durationWeight?                                    | number   | Duration weight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| initialRiskLevelRiskValues?                        | number[] | The initial contact risk value. The definition of each value is as follows: </br> initialRiskLevelRiskValues[0]: RISK_LEVEL_LOWEST </br> initialRiskLevelRiskValues[1]: RISK_LEVEL_LOW </br> initialRiskLevelRiskValues[2]: RISK_LEVEL_MEDIUM_LOW </br> initialRiskLevelRiskValues[3]: RISK_LEVEL_MEDIUM </br> initialRiskLevelRiskValues[4]: RISK_LEVEL_MEDIUM_HIGH </br> initialRiskLevelRiskValues[5]: RISK_LEVEL_HIGH </br> initialRiskLevelRiskValues[6]: RISK_LEVEL_EXT_HIGH </br> initialRiskLevelRiskValues[7]: RISK_LEVEL_HIGHEST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| initialRiskLevelWeight?                            | number   | Initial risk level weight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| minimumRiskValueThreshold?                         | number   | The lowest risk value that would be recorded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### ContactSketch

| Field                | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| attenuationDurations | number[] | Time-related details for the contacts of all matched shared keys in an array. The unit is minute. </br> attenDurations[0]: The sum of contact durations when the signal attenuation is less than the lower threshold. </br> attenDurations[1]: The sum of contact durations when the signal attenuation is greater than or equal to the lower threshold and less than the upper threshold. |
| daysSinceLastHit     | number   | The number of days elapsed since the last successful matching of a shared key. The daysSinceLastHit field is valid only when the value of numberOfHits is greater than 0. The value 0 indicates today, the value 1 indicates yesterday, and the value 2 indicates the day before yesterday. The others follow the same rule.                                                               |
| maxRiskValue         | number   | The highest risk level among all shared keys that are successfully matched. The value is an integer ranging from 0 to 8.                                                                                                                                                                                                                                                                   |
| numberOfHits         | number   | The number of shared keys that are successfully matched.                                                                                                                                                                                                                                                                                                                                   |
| summationRiskValue   | number   | The sum of contact risk values of all matched shared keys.                                                                                                                                                                                                                                                                                                                                 |

#### ContactDetail

| Field                | Type     | Description                                                                                                                                                                                                                                                                                                                                                               |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attenuationDurations | number[] | </br>Time-related details for the contact in a list. The unit is minute.</br>attenuationDurations[0]: The sum of contact durations when the signal attenuation is less than the lower threshold.</br>attenuationDurations[1]: The sum of contact durations when the signal attenuation is greater than or equal to the lower threshold and less than the upper threshold. |
| attenuationRiskValue | number   | The signal attenuation level during the contact. The signal attenuation level is related to the transmit power and received signal strength indicator (RSSI) and can reflect the distance between two devices. The value ranges from 0 to 255.                                                                                                                            |
| dayNumber            | number   | The time when the contact occurred. The value is the number of days that have elapsed since the Unix epoch.                                                                                                                                                                                                                                                               |
| durationMinutes      | number   | The duration of the contact, in minutes. To protect privacy, even if durationMinutes is set to a value greater than 60, the duration of the contact is still 60 minutes.                                                                                                                                                                                                  |
| initialRiskLevel     | number   | The initial risk level corresponding to a shared key that is successfully matched.                                                                                                                                                                                                                                                                                        |
| totalRiskValue       | number   | The current risk level corresponding to a shared key that is successfully matched. The value ranges from 0 to 4096.                                                                                                                                                                                                                                                       |

#### ContactWindow

| Field      | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dateMillis | number     | The date when the contact occurs.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| reportType | number     | The diagnosis type that is set when a shared key is uploaded. The diagnosis type options can be defined as required. </br> Example: </br> The value of REPORT_TYPE_UNKNOW is 0. </br> The value of REPORT_TYPE_CONFIRMED_TEST is 1. </br> The value of REPORT_TYPE_CONFIRMED_CLINICAL_DIAGNOSIS is 2. </br> The value of REPORT_TYPE_SELF_REPORT is 3. </br> The value of REPORT_TYPE_RECURSIVE is 4. </br> The value of REPORT_TYPE_REVOKED is 5. |
| scanInfos  | ScanInfo[] | The ScanInfo list recorded during the contact.                                                                                                                                                                                                                                                                                                                                                                                                     |

#### ScanInfo

| Field                | Type   | Description                                                                            |
| -------------------- | ------ | -------------------------------------------------------------------------------------- |
| averageAttenuation   | number | The average of all attenuations detected during the scanning, in dB.                   |
| minimumAttenuation   | number | The minimum attenuation.                                                               |
| secondsSinceLastScan | number | The number of seconds elapsed since last scanning. The value ranges from 120s to 180s. |

#### StatusCode

| Field         | Type   | Description        |
| ------------- | ------ | ------------------ |
| statusCode    | number | Error code.        |
| statusMessage | string | Error description. |

## 4. Configuration and Description

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Contact Shield plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

You can find the sample projects on [HMS Core > Samples > Contact Shield Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Contact Shield Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
