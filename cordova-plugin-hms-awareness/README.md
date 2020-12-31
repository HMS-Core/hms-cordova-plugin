# Cordova Plugin HMS Awareness

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

This plugin enables communication between Huawei Awareness SDK and Cordova platform. It exposes all functionality provided by Huawei Awareness SDK.

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

5. Install `HMS Awareness plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-awareness
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

4. Install `HMS Awareness plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-awareness
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-awareness
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

4. Install `HMS Awareness plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-awareness
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-awareness
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

11. Set the minSdkVersion to **`24`** in the **`variables.gradle`** file that located at the **`<project_root>/android`** directory. 

12. Updates dependencies, and copy any web assets to your project.

    ```bash
    npx cap sync
    ```

13. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. API Reference

## 3.1 AwarenessBarrier Client

### 3.1.1 Functions Overview

| Method                                                                                                                                      | Return Type                     | Description                                                                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HeadsetBarrier.keeping(headsetStatus:  number)                                                                                              | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected.                                                                                            |
| HeadsetBarrier.connecting()                                                                                                                 | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected.                                                                                            |
| HeadsetBarrier.disconnecting()                                                                                                              | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected.                                                                                            |
| AmbientLightBarrier.above(minLightIntensity:  number)                                                                                       | [BarrierStatus](#BarrierStatus) | Sets the ambient light barrier. For example, you can set the system to prompt users to enable the flashlight function when the illuminance is less than 100 lux.                |
| AmbientLightBarrier.below(maxLightIntensity:  number)                                                                                       | [BarrierStatus](#BarrierStatus) | Sets the ambient light barrier. For example, you can set the system to prompt users to enable the flashlight function when the illuminance is less than 100 lux.                |
| AmbientLightBarrier.range(minLightIntensity:  number,  maxLightIntensity:  number)                                                          | [BarrierStatus](#BarrierStatus) | Sets the ambient light barrier. For example, you can set the system to prompt users to enable the flashlight function when the illuminance is less than 100 lux.                |
| WifiBarrier.keeping(wifiStatus:  number,  bssid?:  string,  ssid?:  string)                                                                 | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected. broadcasting. |
| WifiBarrier.connecting(bssid?:  string,  ssid?:  string)                                                                                    | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected. broadcasting. |
| WifiBarrier.disconnecting(bssid?:  string,  ssid?:  string)                                                                                 | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected. broadcasting. |
| WifiBarrier.enabling()                                                                                                                      | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected. broadcasting. |
| WifiBarrier.disabling()                                                                                                                     | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected. broadcasting. |
| BluetoothBarrier.keep(deviceType:  number,  bluetoothStatus:  number)                                                                       | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected.                                                                                            |
| BluetoothBarrier.connecting(deviceType:  number)                                                                                            | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected.                                                                                            |
| BluetoothBarrier.disconnecting(deviceType:  number)                                                                                         | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected.                                                                                            |
| BehaviorBarrier.keeping(behaviorTypes:  number[])                                                                                           | [BarrierStatus](#BarrierStatus) | Detects the behavior change, such as going from staying still to running.                                                                                                       |
| BehaviorBarrier.beginning(behaviorTypes:  number[])                                                                                         | [BarrierStatus](#BarrierStatus) | Detects the behavior change, such as going from staying still to running.                                                                                                       |
| BehaviorBarrier.ending(behaviorTypes:  number[])                                                                                            | [BarrierStatus](#BarrierStatus) | Detects the behavior change, such as going from staying still to running.                                                                                                       |
| LocationBarrier.enter(latitude:  number,  longitude:  number,  radius:  number)                                                             | [BarrierStatus](#BarrierStatus) | Sets a location barrier based on the target location, radius (not smaller than 200 m), and stay duration.                                                                       |
| LocationBarrier.exit(latitude:  number,  longitude:  number,  radius:  number)                                                              | [BarrierStatus](#BarrierStatus) | Sets a location barrier based on the target location, radius (not smaller than 200 m), and stay duration.                                                                       |
| LocationBarrier.stay(latitude:  number,  longitude:  number,  radius:  number,  timeOfDuration:  number)                                    | [BarrierStatus](#BarrierStatus) | Sets a location barrier based on the target location, radius (not smaller than 200 m), and stay duration.                                                                       |
| ScreenBarrier.screenOn()                                                                                                                    | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected.               |
| ScreenBarrier.screenOff()                                                                                                                   | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected.               |
| ScreenBarrier.screenUnlock()                                                                                                                | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected.               |
| ScreenBarrier.keeping(screenStatus:  number)                                                                                                | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on and whether Wi-Fi changes from being connected to being disconnected.               |
| TimeBarrier.duringPeriodOfDay(timeZone:  string,  startTimeOfDay:  number,  stopTimeOfDay:  number)                                         | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time.                                                                                                                             |
| TimeBarrier.duringPeriodOfWeek(dayOfWeek:  number,  timeZone:  string,  startTimeOfSpecifiedDay:  number,  stopTimeOfSpecifiedDay:  number) | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time.                                                                                                                             |
| TimeBarrier.duringTimePeriod(startTimeStamp:  number,  stopTimeStamp:  number)                                                              | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time.                                                                                                                             |
| TimeBarrier.inSunriseOrSunsetPeriod(timeInstant:  number,  startTimeOffset:  number,  stopTimeOffset:  number)                              | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time.                                                                                                                             |
| TimeBarrier.inTimeCategory(timeCategory:  number)                                                                                           | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time.                                                                                                                             |
| BeaconBarrier.discover(...filters:  Filter[])                                                                                               | [BarrierStatus](#BarrierStatus) | Sets a beacon barrier based on the beacon status.                                                                                                                               |
| BeaconBarrier.keep(...filters:  Filter[])                                                                                                   | [BarrierStatus](#BarrierStatus) | Sets a beacon barrier based on the beacon status.                                                                                                                               |
| BeaconBarrier.missed(...filters:  Filter[])                                                                                                 | [BarrierStatus](#BarrierStatus) | Sets a beacon barrier based on the beacon status.                                                                                                                               |
| deleteAllBarriers(success:any, error:any)                                                                                                   | `any`                           | This services delete all barriers.                                                                                                                                              |
| deleteBarrierWithLabels(success:any, error:any, params:any)                                                                                 | `any`                           | This service delete barriers with label string.                                                                                                                                 |
| unRegisterReceiver(success:any, error:any)                                                                                                  | `any`                           | You can remove the registered receiver with this method.                                                                                                                        |

### 3.1.1.1 Public Methods

### BarrierStatus
| Field                 | Type     | Description                                                   |
|-----------------------|----------|---------------------------------------------------------------|
| barrierLabel          | `string` | Key value that uniquely identifies a barrier in Barrier Label |
| presentStatus         | `number` | Barrier status. 1: TRUE 0: FALSE 2: UNKNOWN                   |
| lastStatus            | `number` | Barrier status. 1: TRUE 0: FALSE 2: UNKNOWN                   |
| lastBarrierUpdateTime | `number` | Timestamp of the last barrier status change.                  |

### HeadsetBarrier
#### Public Method Summary
| Method                          | Return Type                     | Description                                                                          |
|---------------------------------|---------------------------------|--------------------------------------------------------------------------------------|
| keeping(headsetStatus:  number) | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected. |
| connecting()                    | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected. |
| disconnecting()                 | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, from connected to disconnected. |
#### Public Methods

##### keeping(headsetStatus: number)
###### Parameters
| Name          | Type   | Description     |
|---------------|--------|-----------------|
| headsetStatus | number | Headset status. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addHeadsetBarrierKeeping() {
    let headsetStatus = AwarenessBarrier.HeadsetStatus.CONNECTED;
    let barrierLabel = "headsetBarrierKeeping";
    AwarenessBarrier.HeadsetBarrier.keeping(headsetStatus)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
```

##### connecting()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addHeadsetBarrierConnecting() {
    let barrierLabel = "headsetBarrierConnecting";
    AwarenessBarrier.HeadsetBarrier.connecting()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
```

##### disconnecting()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addHeadsetBarrierDisconnecting() {
    let barrierLabel = "headsetBarrierDisconnecting";
    AwarenessBarrier.HeadsetBarrier.disconnecting()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}

```



### AmbientLightBarrier
#### Public Method Summary
| Method                                                         | Return Type                     | Description                                                                                                                                                                |
|----------------------------------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| above(minLightIntensity:  number)                              | [BarrierStatus](#BarrierStatus) | Sets the ambient light barrier. For example, you can set the system to prompt users to enable the flashlight function when the illuminance is greater than 100 lux.        |
| below(maxLightIntensity:  number)                              | [BarrierStatus](#BarrierStatus) | Sets the ambient light barrier. For example, you can set the system to prompt users to enable the flashlight function when the illuminance is less than 100 lux.           |
| range(minLightIntensity:  number,  maxLightIntensity:  number) | [BarrierStatus](#BarrierStatus) | Sets the ambient light barrier. For example, you can set the system to prompt users to enable the flashlight function when the illuminance is between 100 lux and 200 lux. |
#### Public Methods

##### above(v: number)
###### Parameters
| Name              | Type   | Description          |
|-------------------|--------|----------------------|
| minLightIntensity | number | Minimum illuminance. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addAmbientLightBarrierAbove() {
    let barrierLabel = "AmbientLightBarrierAbove";
    let highLuxValue = 2500.0;
    AwarenessBarrier.AmbientLightBarrier.above(highLuxValue)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
```

##### below(v: number)
###### Parameters
| Name              | Type   | Description          |
|-------------------|--------|----------------------|
| maxLightIntensity | number | Maximum illuminance. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addAmbientLightBarrierBelow() {
    let barrierLabel = "AmbientLightBarrierBelow";
    let lowLuxValue = 500.0;
    AwarenessBarrier.AmbientLightBarrier.below(lowLuxValue)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
```

##### range(v1: number,  v2: number)
###### Parameters
| Name              | Type   | Description          |
|-------------------|--------|----------------------|
| minLightIntensity | number | Minimum illuminance. |
| maxLightIntensity | number | Maximum illuminance. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addAmbientLightBarrierRange() {
    let barrierLabel = "AmbientLightBarrierRange";
    let lowLuxValue = 500.0;
    let highLuxValue = 2500.0;
    AwarenessBarrier.AmbientLightBarrier.range(lowLuxValue, highLuxValue)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
```



### WifiBarrier
#### Public Method Summary
| Method                                                          | Return Type                     | Description                                                                                                        |
|-----------------------------------------------------------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------|
| connecting(bssid?:  string,  ssid?:  string)                    | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether Wi-Fi changes connecting.                                 |
| disabling()                                                     | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether Wi-Fi changes disabling.                                  |
| disconnecting(bssid?:  string,  ssid?:  string)                 | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether Wi-Fi changes disconnecting.                              |
| enabling()                                                      | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether Wi-Fi changes enabling.                                   |
| keeping(wifiStatus:  number,  bssid?:  string,  ssid?:  string) | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether Wi-Fi changes from being connected to being disconnected. |
#### Public Methods

##### connecting(bssid?: string,  ssid?: string)
###### Parameters
| Name   | Type   | Description                                                                                                                                                                                                                                                   |
|--------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bssid? | string | If the value of wifiStatus is CONNECTED or DISCONNECTED, the BSSID (physical address of the Wi-Fi source) of the Wi-Fi barrier can be specified. The value null indicates any BSSID. If the value of wifiStatus is ENABLED or DISABLED, the BSSID is invalid. |
| ssid?  | string | If the value of wifiStatus is CONNECTED or DISCONNECTED, the SSID (name of the Wi-Fi source) of the Wi-Fi barrier can be specified. The value null indicates any SSID. If the value of wifiStatus is ENABLED or DISABLED, the SSID is invalid.                |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addWifiBarrierConnecting() {
    let barrierlLabel = "WifiBarrierConnecting";
    let bssid = "";
    let ssid = "";
    AwarenessBarrier.WifiBarrier.connecting(bssid, ssid)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### disabling()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addWifiBarrierDisabling() {
    let barrierlLabel = "WifiBarrierDisabling";
    AwarenessBarrier.WifiBarrier.disabling()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}

```

##### disconnecting(bssid?: string,  ssid?: string)
###### Parameters
| Name   | Type   | Description                                                                                                                                                                                                                                                   |
|--------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bssid? | string | If the value of wifiStatus is CONNECTED or DISCONNECTED, the BSSID (physical address of the Wi-Fi source) of the Wi-Fi barrier can be specified. The value null indicates any BSSID. If the value of wifiStatus is ENABLED or DISABLED, the BSSID is invalid. |
| ssid?  | string | If the value of wifiStatus is CONNECTED or DISCONNECTED, the SSID (name of the Wi-Fi source) of the Wi-Fi barrier can be specified. The value null indicates any SSID. If the value of wifiStatus is ENABLED or DISABLED, the SSID is invalid.                |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addWifiBarrierDisconnecting() {
    let barrierlLabel = "WifiBarrierDisconnecting";
    let bssid = "";
    let ssid = "";
    AwarenessBarrier.WifiBarrier.disconnecting(bssid, ssid)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}

```

##### enabling()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addWifiBarrierEnabling() {
    let barrierlLabel = "WifiBarrierEnabling";
    AwarenessBarrier.WifiBarrier.enabling()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### keeping(wifiStatus: number,  bssid?: string,  ssid?: string)
###### Parameters
| Name       | Type   | Description                                                                                                                                                                                                                                                   |
|------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| wifiStatus | number | Wifi Status.                                                                                                                                                                                                                                                  |
| bssid?     | string | If the value of wifiStatus is CONNECTED or DISCONNECTED, the BSSID (physical address of the Wi-Fi source) of the Wi-Fi barrier can be specified. The value null indicates any BSSID. If the value of wifiStatus is ENABLED or DISABLED, the BSSID is invalid. |
| ssid?      | string | If the value of wifiStatus is CONNECTED or DISCONNECTED, the SSID (name of the Wi-Fi source) of the Wi-Fi barrier can be specified. The value null indicates any SSID. If the value of wifiStatus is ENABLED or DISABLED, the SSID is invalid.                |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addWifiBarrierKeeping() {
    let barrierlLabel = "WifiBarrierKeeping";
    let wifiStatus = AwarenessBarrier.WifiStatus.CONNECTED;
    let bssid = "";
    let ssid = "";
    AwarenessBarrier.WifiBarrier.keeping(wifiStatus, bssid, ssid)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

Detect status changes of the phone, for example, whether Wi-Fi changes connecting.

### BluetoothBarrier
#### Public Method Summary
| Method                                               | Return Type                     | Description                                                                                            |
|------------------------------------------------------|---------------------------------|--------------------------------------------------------------------------------------------------------|
| connecting(deviceType:  number)                      | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, whether Bluetooth changes connecting              |
| disconnecting(deviceType:  number)                   | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, whether Bluetooth changes disconnecting.          |
| keep(deviceType:  number,  bluetoothStatus:  number) | [BarrierStatus](#BarrierStatus) | Detects the audio device status change, for example, whether Bluetooth from connected to disconnected. |
#### Public Methods

##### connecting(deviceType: number)
###### Parameters
| Name       | Type   | Description                                                               |
|------------|--------|---------------------------------------------------------------------------|
| deviceType | number | Bluetooth device type. Value DEVICE_CAR indicates a Bluetooth car stereo. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
}
function addBluetoothBarrierConnecting() {
    let barrierlLabel = "BluetoothBarrierConnecting";
    let deviceType = AwarenessBarrier.BlueoothDevice.DEVICE_CAR;
    AwarenessBarrier.BluetoothBarrier.connecting(deviceType)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### disconnecting(deviceType: number)
###### Parameters
| Name       | Type   | Description                                                               |
|------------|--------|---------------------------------------------------------------------------|
| deviceType | number | Bluetooth device type. Value DEVICE_CAR indicates a Bluetooth car stereo. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBluetoothBarrierDisconnecting() {
    let barrierlLabel = "BluetoothBarrierDisconnecting";
    let deviceType = AwarenessBarrier.BlueoothDevice.DEVICE_CAR;
    AwarenessBarrier.BluetoothBarrier.disconnecting(deviceType)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### keep(deviceType: number,  bluetoothStatus: number)
###### Parameters
| Name            | Type   | Description                                                               |
|-----------------|--------|---------------------------------------------------------------------------|
| deviceType      | number | Bluetooth device type. Value DEVICE_CAR indicates a Bluetooth car stereo. |
| bluetoothStatus | number | Connection status of the Bluetooth car stereo.                            |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBluetoothBarrierKeep() {
    let barrierlLabel = "BluetoothBarrierKeep";
    let bluetoothStatus = AwarenessBarrier.BluetoothStatus.CONNECTED;
    let deviceType = AwarenessBarrier.BlueoothDevice.DEVICE_CAR;
    AwarenessBarrier.BluetoothBarrier.keep(deviceType, bluetoothStatus)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```



### BehaviorBarrier
#### Public Method Summary
| Method                              | Return Type                     | Description                                                               |
|-------------------------------------|---------------------------------|---------------------------------------------------------------------------|
| beginning(behaviorTypes:  number[]) | [BarrierStatus](#BarrierStatus) | Detects the behavior change, such as going from staying still to running. |
| ending(behaviorTypes:  number[])    | [BarrierStatus](#BarrierStatus) | Detects the behavior change, such as going from running still to ending.  |
| keeping(behaviorTypes:  number[])   | [BarrierStatus](#BarrierStatus) | Detects the behavior change, such as going from staying still to running. |
#### Public Methods

##### beginning(behaviorTypes: number[])
###### Parameters
| Name                        | Type     | Description                          |
|-----------------------------|----------|--------------------------------------|
| behaviorTypes behaviorTypes | number[] | One or more behavior type constants. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBehaviorBarrierBeginning() {
    let barrierlLabel = "BehaviorBarrierBeginning";
    AwarenessBarrier.BehaviorBarrier.beginning(AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_WALKING, AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_STILL)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### ending(behaviorTypes: number[])
###### Parameters
| Name          | Type     | Description                          |
|---------------|----------|--------------------------------------|
| behaviorTypes | number[] | One or more behavior type constants. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBehaviorBarrierEnding() {
    let barrierlLabel = "BehaviorBarrierEnding";
    AwarenessBarrier.BehaviorBarrier.ending(AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_WALKING, AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_STILL)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}


```

##### keeping(behaviorTypes: number[])
###### Parameters
| Name          | Type     | Description                          |
|---------------|----------|--------------------------------------|
| behaviorTypes | number[] | One or more behavior type constants. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBehaviorBarrierKeeping() {
    let barrierlLabel = "BehaviorBarrierKeeping";
    AwarenessBarrier.BehaviorBarrier.keeping(AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_WALKING, AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_STILL)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```



### LocationBarrier
#### Public Method Summary
| Method                                                                                   | Return Type                     | Description |
|------------------------------------------------------------------------------------------|---------------------------------|-------------|
| enter(latitude:  number,  longitude:  number,  radius:  number)                          | [BarrierStatus](#BarrierStatus) |             |
| exit(latitude:  number,  longitude:  number,  radius:  number)                           | [BarrierStatus](#BarrierStatus) |             |
| stay(latitude:  number,  longitude:  number,  radius:  number,  timeOfDuration:  number) | [BarrierStatus](#BarrierStatus) |             |
#### Public Methods

##### enter(latitude:  number,  longitude:  number,  radius:  number)
###### Parameters
| Name      | Type   | Description                                                                          |
|-----------|--------|--------------------------------------------------------------------------------------|
| latitude  | number | Center latitude of an area. The unit is degree and the value range is [–90°,90°].    |
| longitude | number | Center longitude of an area. The unit is degree and the value range is (–180°,180°]. |
| radius    | number | Radius of an area. The unit is meter.                                                |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addLocationBarrierEnter() {
    let barrierlLabel = "LocationBarrierEnter";
    let latitude = 40.909520;
    let longitude = 29.169720;
    let radius = 1000.0;
    AwarenessBarrier.LocationBarrier.enter(latitude, longitude, radius)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### exit(latitude:  number,  longitude:  number,  radius:  number)
###### Parameters
| Name      | Type   | Description                                                                          |
|-----------|--------|--------------------------------------------------------------------------------------|
| latitude  | number | Center latitude of an area. The unit is degree and the value range is [–90°,90°].    |
| longitude | number | Center longitude of an area. The unit is degree and the value range is (–180°,180°]. |
| radius    | number | Radius of an area. The unit is meter.                                                |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addLocationBarrierExit() {
    let barrierlLabel = "LocationBarrierExit";
    let latitude = 40.909520;
    let longitude = 29.169720;
    let radius = 1000.0;
    AwarenessBarrier.LocationBarrier.exit(latitude, longitude, radius)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### stay(latitude:  number,  longitude:  number,  radius:  number, timeDuration: number)
###### Parameters
| Name           | Type   | Description                                                                          |
|----------------|--------|--------------------------------------------------------------------------------------|
| latitude       | number | Center latitude of an area. The unit is degree and the value range is [–90°,90°].    |
| longitude      | number | Center longitude of an area. The unit is degree and the value range is (–180°,180°]. |
| radius         | number | Radius of an area. The unit is meter.                                                |
| timeOfDuration | number | Minimum stay time in a specified area. The unit is millisecond.                      |

|
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addLocationBarrierStay() {
    let barrierlLabel = "LocationBarrierStay";
    let latitude = 40.909520;
    let longitude = 29.169720;
    let radius = 1000.0;
    let mTimeOfDuration = 1000;
    AwarenessBarrier.LocationBarrier.stay(latitude, longitude, radius, mTimeOfDuration)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```



### ScreenBarrier
#### Public Method Summary
| Method                         | Return Type                     | Description                                                                                  |
|--------------------------------|---------------------------------|----------------------------------------------------------------------------------------------|
| screenOn()                     | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns on from being on.  |
| screenOff()                    | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on. |
| screenUnlock()                 | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen unlock from being on.    |
| keeping(screenStatus:  number) | [BarrierStatus](#BarrierStatus) | Detect status changes of the phone, for example, whether the screen turns off from being on. |
#### Public Methods

##### screenOn()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addScreenBarrierOn() {
    let barrierlLabel = "ScreenBarrierOn";
    AwarenessBarrier.ScreenBarrier.screenOn()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### screenOff()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addScreenBarrierOff() {
    let barrierlLabel = "ScreenBarrierOff";
    AwarenessBarrier.ScreenBarrier.screenOff()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### screenUnlock()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addScreenBarrierUnlock() {
    let barrierlLabel = "ScreenBarrierUnlock";
    AwarenessBarrier.ScreenBarrier.screenUnlock()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}

```

##### keeping(screenStatus: number)
###### Parameters
| Name         | Type   | Description   |
|--------------|--------|---------------|
| screenStatus | number | Screen Status |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addScreenBarrierKeeping() {
    let barrierlLabel = "ScreenBarrierKeeping";
    let screenStatus = AwarenessBarrier.ScreenStatus.SCREENON;
    AwarenessBarrier.ScreenBarrier.keeping(screenStatus)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```



### TimeBarrier
#### Public Method Summary
| Method                                                                                                                          | Return Type                     | Description                                         |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-----------------------------------------------------|
| duringPeriodOfDay(timeZone:  string,  startTimeOfDay:  number,  stopTimeOfDay:  number)                                         | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time. |
| duringPeriodOfWeek(dayOfWeek:  number,  timeZone:  string,  startTimeOfSpecifiedDay:  number,  stopTimeOfSpecifiedDay:  number) | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time. |
| duringTimePeriod(startTimeStamp:  number,  stopTimeStamp:  number)                                                              | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time. |
| inSunriseOrSunsetPeriod(timeInstant:  number,  startTimeOffset:  number,  stopTimeOffset:  number)                              | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time. |
| inTimeCategory(timeCategory:  number)                                                                                           | [BarrierStatus](#BarrierStatus) | Sets a timer or a barrier based on the target time. |
#### Public Methods

##### duringPeriodOfDay(timeZone:  string,  startTimeOfDay:  number,  stopTimeOfDay:  number)
###### Parameters
| Name           | Type   | Description                                                                                                                           |
|----------------|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| timeZone       | string | Time zone specified by you. If the time zone does not exist, the time zone of the area where the user is located is used.             |
| startTimeOfDay | number | Start time of the barrier, in milliseconds. The value 0 indicates 00:00. The maximum value is the number of milliseconds of 24 hours. |
| stopTimeOfDay  | number | Stop time of the barrier, in milliseconds. The value of stopTimeOfDay must be greater than or equal to the value of startTimeOfDay.   |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addTimeBarrierDuringPeriodOfDay() {
    const oneHourMilliSecond = 60 * 60 * 1000;
    let barrierlLabel = "TimeBarrierDuringPeriodOfDay";
    let timeZone;
    let startTimeOfDay = 11 * oneHourMilliSecond;
    let stopTimeOfDay = 12 * oneHourMilliSecond;
    AwarenessBarrier.TimeBarrier.duringPeriodOfDay(timeZone, startTimeOfDay, stopTimeOfDay)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}

```

##### duringPeriodOfWeek(dayOfWeek:  number,  timeZone:  string,  startTimeOfSpecifiedDay:  number,  stopTimeOfSpecifiedDay:  number)
###### Parameters
| Name                    | Type   | Description                                                                                                                                           |
|-------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| dayOfWeek               | number | Day of a week. The options are as follows: SUNDAY_CODE, MONDAY_CODE, TUESDAY_CODE, WEDNESDAY_CODE, THURSDAY_CODE, FRIDAY_CODE, SATURDAY_CODE          |
| timeZone                | string | Sets the time zone. If the time zone does not exist, the time zone of the area where the user is located is used.                                     |
| startTimeOfSpecifiedDay | number | Start time of the barrier, in milliseconds. The value 0 indicates 00:00. The maximum value is the number of milliseconds of 24 hours.                 |
| stopTimeOfSpecifiedDay  | number | Stop time of the barrier, in milliseconds. The value of stopTimeOfSpecifiedDay must be greater than or equal to the value of startTimeOfSpecifiedDay. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addTimeBarrierDuringPeriodOfWeek() {
    const oneHourMilliSecond = 60 * 60 * 1000;
    let barrierlLabel = "TimeBarrierDuringPeriodOfWeek";
    let dayCode = AwarenessBarrier.TimeBarrierConstants.THURSDAY_CODE;
    let timeZone;
    let startTimeOfSpecifiedDay = 11 * oneHourMilliSecond;
    let stopTimeOfSpecifiedDay = 12 * oneHourMilliSecond;
    AwarenessBarrier.TimeBarrier.duringPeriodOfWeek(dayCode, timeZone, startTimeOfSpecifiedDay, stopTimeOfSpecifiedDay)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### duringTimePeriod(startTimeStamp:  number,  stopTimeStamp:  number)
###### Parameters
| Name           | Type   | Description                                                                                         |
|----------------|--------|-----------------------------------------------------------------------------------------------------|
| startTimeStamp | number | Start timestamp. The value must be greater than or equal to 0.                                      |
| stopTimeStamp  | number | Stop timestamp. The value of stopTimeStamp must be greater than or equal to that of startTimeStamp. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addTimeBarrierDuringTimePeriod() {
    let barrierlLabel = "TimeBarrierDuringTimePeriod";
    const tenSecondsMillis = 10 * 1000;
    let startTimeStamp = Date.now();
    let stopTimeStamp = startTimeStamp + tenSecondsMillis;
    AwarenessBarrier.TimeBarrier.duringTimePeriod(startTimeStamp, stopTimeStamp)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### inSunriseOrSunsetPeriod(timeInstant:  number,  startTimeOffset:  number,  stopTimeOffset:  number)
###### Parameters
| Name            | Type   | Description                                                                                                                                                                              |
|-----------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| timeInstant     | number | Sunrise or sunset. Options are SUNRISE_CODE and SUNSET_CODE.                                                                                                                             |
| startTimeOffset | number | Start time offset of the time barrier. The unit is millisecond. The value range is milliseconds from –24 hours to +24 hours. The value must be less than the value of stopTimeOffset.    |
| stopTimeOffset  | number | Stop time offset of the time barrier. The unit is millisecond. The value range is milliseconds from –24 hours to +24 hours. The value must be greater than the value of startTimeOffset. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addTimeBarrierInSunriseOrSunsetPeriod() {
    const oneHourMilliSecond = 60 * 60 * 1000;
    let barrierlLabel = "TimeBarrierInSunriseOrSunsetPeriod";
    let timeInstant = AwarenessBarrier.TimeBarrierConstants.SUNSET_CODE;
    let startTimeOffset = -oneHourMilliSecond;
    let stopTimeOffset = oneHourMilliSecond;
    AwarenessBarrier.TimeBarrier.inSunriseOrSunsetPeriod(timeInstant, startTimeOffset, stopTimeOffset)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### inTimeCategory(timeCategory: number)
###### Parameters
| Name         | Type   | Description                                                                                                                                                                                       |
|--------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| timeCategory | number | Time. The options are as follows: TIME_CATEGORY_MORNING, TIME_CATEGORY_AFTERNOON, TIME_CATEGORY_EVENING, TIME_CATEGORY_NIGHT, TIME_CATEGORY_WEEKDAY, TIME_CATEGORY_WEEKEND, TIME_CATEGORY_HOLIDAY |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addTimeBarrierInTimeCategory() {
    let barrierlLabel = "TimeBarrierInTimeCategory";
    let timeCategory = AwarenessBarrier.TimeBarrierConstants.TIME_CATEGORY_WEEKEND;
    AwarenessBarrier.TimeBarrier.inTimeCategory(timeCategory)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```



### BeaconBarrier
#### Public Method Summary
| Method                                                        | Return Type                     | Description                                                                                                                                                                                    |
|---------------------------------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| discover(namespace : string, type :string, content :string[]) | [BarrierStatus](#BarrierStatus) | Sets a beacon barrier based on the beacon status. For example, if a barrier for discovering a beacon is set, a barrier notification will be triggered when Awareness Kit discovers the beacon. |
| keep(namespace : string, type :string, content :string[])     | [BarrierStatus](#BarrierStatus) | Sets a beacon barrier based on the beacon status. For example, if a barrier for keeping a beacon is set, a barrier notification will be triggered when Awareness Kit keeps the beacon.         |
| missed(namespace : string, type :string, content :string[])   | [BarrierStatus](#BarrierStatus) | Sets a beacon barrier based on the beacon status. For example, if a barrier for missing a beacon is set, a barrier notification will be triggered when Awareness Kit miss the beacon.          |
#### Public Methods

##### discover(namespace : string, type :string, content :string[])
###### Parameters
| Name      | Type     | Description       |
|-----------|----------|-------------------|
| namespace | string   | Beacon namespace. |
| type      | string   | Beacon type.      |
| content   | string[] | Content           |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBeaconBarrierDiscover() {
    let barrierlLabel = "BeaconBarrierDiscover";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    AwarenessBarrier.BeaconBarrier.discover(namespace, type, content)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### keep(namespace : string, type :string, content :string[])
###### Parameters

| Name      | Type     | Description       |
|-----------|----------|-------------------|
| namespace | string   | Beacon namespace. |
| type      | string   | Beacon type.      |
| content   | string[] | Content           |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBeaconBarrierKeep() {
    let barrierlLabel = "BeaconBarrierKeep";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    AwarenessBarrier.BeaconBarrier.keep(namespace, type, content)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
```

##### missed(namespace : string, type :string, content :string[])
###### Parameters

| Name      | Type     | Description       |
|-----------|----------|-------------------|
| namespace | string   | Beacon namespace. |
| type      | string   | Beacon type.      |
| content   | string[] | Content           |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function addBeaconBarrierMissed() {
    let barrierlLabel = "BeaconBarrierMissed";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    AwarenessBarrier.BeaconBarrier.missed(namespace, type, content)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}


```



### CombinationBarrier
#### Public Method Summary
| Method                              | Return Type                     | Description                                                                |
|-------------------------------------|---------------------------------|----------------------------------------------------------------------------|
| or(...awareness:  BarrierStatus[])  | [BarrierStatus](#BarrierStatus) | Obtains the barrier after the OR logic operation is executed.              |
| and(...awareness:  BarrierStatus[]) | [BarrierStatus](#BarrierStatus) | Obtains the integrated barriers after the AND logic operation is executed. |
| not(awareness:  BarrierStatus)      | [BarrierStatus](#BarrierStatus) | Obtains the barrier after the NOT logic operation is executed.             |
#### Public Methods


##### barrierCombination(...awareness: AwarenessBarrier[])
###### Parameters
| Name                | Type               | Description   |
|---------------------|--------------------|---------------|
| ...awarenessBarrier | AwarenessBarrier[] | Barrier set.. |
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
function barrierCombination() {
    let barrierCombinationLabel = "barrierCombinationLabelCustom";
    AwarenessBarrier.CombinationBarrier.and(AwarenessBarrier.HeadsetBarrier.disconnecting(),
        AwarenessBarrier.WifiBarrier.keeping(1), AwarenessBarrier.CombinationBarrier.not(AwarenessBarrier.ScreenBarrier.screenOff()))
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch(err => {
            console.log(JSON.stringify(err));
        }).run(barrierCombinationLabel);
}
```

##### deleteAllBarriers(success:any, error:any)
###### Parameters
| Name    | Type | Description |
|---------|------|-------------|
| success | any  | -           |
| error   | any  | -           |
###### Return Type
| Type  | Description |
|-------|-------------|
| `any` | -           |
###### Call Example
```ts
function deleteAllBarriers() {
    AwarenessBarrier.deleteAllBarriers(
        function (res) {
            console.log(JSON.stringify(res))
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
```

##### deleteBarrierWithLabels(success:any, error:any, params:any)
###### Parameters
| Name    | Type | Description     |
|---------|------|-----------------|
| success | any  | -               |
| error   | any  | -               |
| params  | any  | Barrier labels. |
###### Return Type
| Type  | Description |
|-------|-------------|
| `any` | -           |
###### Call Example
```ts
function deleteBarrierWithLabels() {
    let barrierLabels = ["headsetBarrierKeeping"];
    AwarenessBarrier.deleteBarrierWithLabels(
        function (res) {
            console.log(JSON.stringify(res))
        }, function (err) {
            console.log(JSON.stringify(err));
        }, barrierLabels
    );
}
```

##### unRegisterReceiver(success:any, error:any)
###### Parameters
| Name    | Type | Description |
|---------|------|-------------|
| success | any  | -           |
| error   | any  | -           |
###### Return Type
| Type  | Description |
|-------|-------------|
| `any` | -           |
###### Call Example
```ts
function unRegisterReceiver() {
    AwarenessBarrier.unRegisterReceiver(
        function (res) {
            console.log(JSON.stringify(res))
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
```

## 3.2 AwarenessCapture Client
### 3.2.1 Functions Overview
| Method                                                                                | Return Type                                              | Description                                                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getHeadsetStatus()                                                                    | `Promise<HMSAwarenessCapture.HeadsetStatusResponse>`     | Obtains the status of an audio device (connected or disconnected).                                                                                                                                                                                                                   |
| getLocation()                                                                         | `Promise<HMSAwarenessCapture.LocationResponse>`          | Obtains the latitude and longitude of the location.                                                                                                                                                                                                                                  |
| getBehaviorStatus()                                                                   | `Promise<HMSAwarenessCapture.BehaviorResponse>`          | Obtains user behavior, such as walking, running, cycling, driving, or staying still.                                                                                                                                                                                                 |
| getBluetoothStatus(bluetoothDevice:HMSAwarenessCapture.BlueoothDevice)                | `Promise<HMSAwarenessCapture.BluetoothStatusResponse>`   | Obtains the status of an audio device (connected or disconnected).                                                                                                                                                                                                                   |
| getBeaconStatus(params:HMSAwarenessCapture.BeaconStatusRequest)                       | `Promise<HMSAwarenessCapture.BeaconStatusResponse>`      | Indicates whether the device has approached, connected to, or disconnected from a registered beacon.                                                                                                                                                                                 |
| getApplicationStatus()                                                                | `Promise<HMSAwarenessCapture.ApplicationStatusResponse>` | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode.                                                                                       |
| getLightIntensity()                                                                   | `Promise<HMSAwarenessCapture.AmbientLightResponse>`      | Obtains the illuminance of the environment where the device is located. The unit is lux. The illuminance is the intensity received by the light sensor of the device. When the light sensor is blocked or illuminated by strong light, the obtained illuminance changes accordingly. |
| getScreenStatus()                                                                     | `Promise<HMSAwarenessCapture.ScreenStatusResponse>`      | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode.                                                                                       |
| getCurrentLocation()                                                                  | `Promise<HMSAwarenessCapture.LocationResponse>`          | Obtains the latitude and longitude of the current location.                                                                                                                                                                                                                          |
| getDarkModeStatus()                                                                   | `Promise<HMSAwarenessCapture.DarkmodeStatusResponse>`    | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode.                                                                                       |
| getWifiStatus()                                                                       | `Promise<HMSAwarenessCapture.WifiStatusResponse>`        | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode.                                                                                       |
| getWeatherByDevice()                                                                  | `Promise<HMSAwarenessCapture.WeatherStatusResponse>`     | Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.                                                                                            |
| getWeatherByPosition(params:HMSAwarenessCapture.WeatherPosition)                      | `Promise<HMSAwarenessCapture.WeatherStatusResponse>`     | Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried.                                                                                            |
| getTimeCategories()                                                                   | `Promise<HMSAwarenessCapture.TimeCategoriesResponse>`    | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.                                                                                                                                   |
| getTimeCategoriesByCountryCode(countryCode:string)                                    | `Promise<HMSAwarenessCapture.TimeCategoriesResponse>`    | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.                                                                                                                                   |
| getTimeCategoriesByIP()                                                               | `Promise<HMSAwarenessCapture.TimeCategoriesResponse>`    | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.                                                                                                                                   |
| getTimeCategoriesByUser(params:HMSAwarenessCapture.TimeCategoriesByUserRequest)       | `Promise<HMSAwarenessCapture.TimeCategoriesResponse>`    | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.                                                                                                                                   |
| getTimeCategoriesForFuture(params:HMSAwarenessCapture.TimeCategoriesForFutureRequest) | `Promise<HMSAwarenessCapture.TimeCategoriesResponse>`    | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night.                                                                                                                                   |
| enableUpdateWindow(params:HMSAwarenessCapture.EnableUpdateWindowRequest)              | `Promise<any>`                                           | Indicates whether to display a dialog box before Awareness Kit or HMS Core (APK) starts an upgrade in your app.                                                                                                                                                                      |
| querySupportingCapabilities()                                                         | `Promise<any>`                                           | API to query the supported awareness capabilities.                                                                                                                                                                                                                                   |

#### Public Methods



##### getHeadsetStatus()
###### Return Type
| Type                                                 | Description                                                        |
|------------------------------------------------------|--------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.HeadsetStatusResponse>` | Obtains the status of an audio device (connected or disconnected). |
###### Call Example
```ts
async function getHeadsetStatus() {
    await AwarenessCapture.getHeadsetStatus();
}
```

##### getLocation()
###### Return Type
| Type                                            | Description                                         |
|-------------------------------------------------|-----------------------------------------------------|
| `Promise<HMSAwarenessCapture.LocationResponse>` | Obtains the latitude and longitude of the location. |
###### Call Example
```ts
async function getLocation() {
    await AwarenessCapture.getLocation();
}
```

##### getBehaviorStatus()
###### Return Type
| Type                                            | Description                                                                          |
|-------------------------------------------------|--------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.BehaviorResponse>` | Obtains user behavior, such as walking, running, cycling, driving, or staying still. |
###### Call Example
```ts
async function getBehaviorStatus() {
    await AwarenessCapture.getBehaviorStatus();
}
```

##### getBluetoothStatus(bluetoothDevice:HMSAwarenessCapture.BlueoothDevice)
###### Parameters
| Name            | Type                               | Description                 |
|-----------------|------------------------------------|-----------------------------|
| bluetoothDevice | HMSAwarenessCapture.BlueoothDevice | Indicates bluetooth device. |
###### Return Type
| Type                                                   | Description                                                        |
|--------------------------------------------------------|--------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.BluetoothStatusResponse>` | Obtains the status of an audio device (connected or disconnected). |
###### Call Example
```ts
async function getBluetoothStatus() {
    const bluetoothDevice = AwarenessCapture.BluetoothDevice.DEVICE_CAR;
    await AwarenessCapture.getBluetoothStatus(bluetoothDevice);
}
```

##### getBeaconStatus(params:HMSAwarenessCapture.BeaconStatusRequest)
###### Parameters
| Name   | Type                                    | Description    |
|--------|-----------------------------------------|----------------|
| params | HMSAwarenessCapture.BeaconStatusRequest | Beacon Status. |
###### Return Type
| Type                                                | Description                                                                                          |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.BeaconStatusResponse>` | Indicates whether the device has approached, connected to, or disconnected from a registered beacon. |

           
###### Call Example
```ts
async function getBeaconStatus() {
    const beaconStatusRequest = {
            namespace: "sample namespace",
            type: "sample type",
            content: ['s', 'a', 'm', 'p', 'l', 'e']
        }
    await AwarenessCapture.getBeaconStatus(beaconStatusRequest);
}
```

##### getApplicationStatus()
###### Return Type
| Type                                                     | Description                                                                                                                                                                                    |
|----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.ApplicationStatusResponse>` | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode. |
###### Call Example
```ts
async function getApplicationStatus() {
    await AwarenessCapture.getApplicationStatus();
}
```

##### getLightIntensity()
###### Return Type
| Type                                                | Description                                                                                                                                                                                                                                                                          |
|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.AmbientLightResponse>` | Obtains the illuminance of the environment where the device is located. The unit is lux. The illuminance is the intensity received by the light sensor of the device. When the light sensor is blocked or illuminated by strong light, the obtained illuminance changes accordingly. |
###### Call Example
```ts
async function getLightIntensity() {
    await AwarenessCapture.getLightIntensity();
}
```

##### getScreenStatus()
###### Return Type
| Type                                                | Description                                                                                                                                                                                    |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.ScreenStatusResponse>` | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode. |
###### Call Example
```ts
async function getScreenStatus() {
    await AwarenessCapture.getScreenStatus();
}
```

##### getCurrentLocation()
###### Return Type
| Type                                            | Description                                                 |
|-------------------------------------------------|-------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.LocationResponse>` | Obtains the latitude and longitude of the current location. |
###### Call Example
```ts
async function getCurrentLocation() {
    await AwarenessCapture.getCurrentLocation();
}
```

##### getDarkModeStatus()
###### Return Type
| Type                                                  | Description                                                                                                                                                                                    |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.DarkmodeStatusResponse>` | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode. |
###### Call Example
```ts
async function getDarkModeStatus() {
    await AwarenessCapture.getDarkModeStatus();
}
```

##### getWifiStatus()
###### Return Type
| Type                                              | Description                                                                                                                                                                                    |
|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.WifiStatusResponse>` | Obtain the status of the phone, for example, whether the app is started or closed, whether the screen is on or off, whether Wi-Fi is connected or not, and whether the system is in dark mode. |
###### Call Example
```ts
async function getWifiStatus() {
    await AwarenessCapture.getWifiStatus();
}
```

##### getWeatherByDevice()
###### Return Type
| Type                                                 | Description                                                                                                                                                                               |
|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.WeatherStatusResponse>` | Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried. |
###### Call Example
```ts
async function getWeatherByDevice() {
    await AwarenessCapture.getWeatherByDevice();
}
```

##### getWeatherByPosition(params:HMSAwarenessCapture.WeatherPosition)
###### Parameters
| Name   | Type                                | Description              |
|--------|-------------------------------------|--------------------------|
| params | HMSAwarenessCapture.WeatherPosition | Weather position request |
###### Return Type
| Type                                                 | Description                                                                                                                                                                               |
|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.WeatherStatusResponse>` | Queries the weather information of the device location or a specified location. Weather of the current day (24 hours) and the next seven days (including the current day) can be queried. |
###### Call Example
```ts
async function getWeatherByPosition() {
     const weatherPositionRequest = {
            mCountry: "UK",
            mProvince: "London",
            mCity: "London",
            mDistrict: "",
            mCounty: "",
            mLocale: "en_US",
        }
    await AwarenessCapture.getWeatherByPosition(weatherPositionRequest);
}
```

##### getTimeCategories()
###### Return Type
| Type                                                  | Description                                                                                                                                        |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.TimeCategoriesResponse>` | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night. |
###### Call Example
```ts
async function getTimeCategories() {
    await AwarenessCapture.getTimeCategories();
}
```

##### getTimeCategoriesByCountryCode(countryCode:string)
###### Parameters
| Name        | Type   | Description  |
|-------------|--------|--------------|
| countryCode | string | Country code |
###### Return Type
| Type                                                  | Description                                                                                                                                        |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.TimeCategoriesResponse>` | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night. |
###### Call Example
```ts
async function getTimeCategoriesByCountryCode() {
    const countryCode = "TR";
    await AwarenessCapture.getTimeCategoriesByCountryCode(countryCode);
}
```

##### getTimeCategoriesByIP()
###### Return Type
| Type                                                  | Description                                                                                                                                        |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.TimeCategoriesResponse>` | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night. |
###### Call Example
```ts
async function getTimeCategoriesByIP() {
    await AwarenessCapture.getTimeCategoriesByIP();
}
```

##### getTimeCategoriesByUser(params:HMSAwarenessCapture.TimeCategoriesByUserRequest)
###### Parameters
| Name   | Type                                            | Description                      |
|--------|-------------------------------------------------|----------------------------------|
| params | HMSAwarenessCapture.TimeCategoriesByUserRequest | Time Categories By User request. |
###### Return Type
| Type                                                  | Description                                                                                                                                        |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.TimeCategoriesResponse>` | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night. |
###### Call Example
```ts
async function getTimeCategoriesByUser() {
    const locationRequest = {
            location: {
                latitude: 48.893478,
                longitude: 2.334595,
            }
        }
    await AwarenessCapture.getTimeCategoriesByUser(locationRequest);
}
```

##### getTimeCategoriesForFuture(params:HMSAwarenessCapture.TimeCategoriesForFutureRequest)
###### Parameters
| Name   | Type                                               | Description       |
|--------|----------------------------------------------------|-------------------|
| params | HMSAwarenessCapture.TimeCategoriesForFutureRequest | Future timestamp. |
###### Return Type
| Type                                                  | Description                                                                                                                                        |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `Promise<HMSAwarenessCapture.TimeCategoriesResponse>` | Obtains the current local time or time of a specified location, such as working day, weekend, holiday, morning, afternoon, evening, or late night. |
###### Call Example
```ts
async function getTimeCategoriesForFuture() {
    const timeStamp = <FUTURE_TIMESTAMPT>;
    await AwarenessCapture.getTimeCategoriesForFuture(timeStamp);
}
```

##### enableUpdateWindow(params:HMSAwarenessCapture.EnableUpdateWindowRequest)
###### Parameters
| Name   | Type                                          | Description           |
|--------|-----------------------------------------------|-----------------------|
| params | HMSAwarenessCapture.EnableUpdateWindowRequest | Enable update window. |
###### Return Type
| Type           | Description |
|----------------|-------------|
| `Promise<any>` | -           |
###### Call Example
```ts
async function enableUpdateWindow() {
    const isEnable = true;
    await AwarenessCapture.enableUpdateWindow(isEnable);
}
```

##### querySupportingCapabilities()
###### Return Type
| Type           | Description                                        |
|----------------|----------------------------------------------------|
| `Promise<any>` | API to query the supported awareness capabilities. |
###### Call Example
```ts
async function querySupportingCapabilities() {
    await AwarenessCapture.querySupportingCapabilities();
}
```




---



## 3.3 HMSAwareness Client
### 3.3.1 Functions Overview
| Method                                                          | Return Type                     | Description                                                                                         |
|-----------------------------------------------------------------|---------------------------------|-----------------------------------------------------------------------------------------------------|
| hasPermission(permission:HMSAwarenessAPI.HMSPermission)         | `Promise<any>`                  | Checks whether permission is granted to use the services.                                           |
| requestPermission(permission:HMSAwarenessAPI.HMSPermission)     | `Promise<any>`                  | Obtains the necessary permissions to use the services.                                              |
| requestPermissions(permissions:HMSAwarenessAPI.HMSPermission[]) | `Promise<any>`                  | Obtains the necessary permissions to use the services.                                              |
| enableLogger()                                                  | [BarrierStatus](#BarrierStatus) | Enables HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods.  |
| disableLogger()                                                 | [BarrierStatus](#BarrierStatus) | Disables HMSLogger capability which is used for sending usage analytics of Awareness SDK's methods. |

####  3.3.1.1 Public Methods
##### hasPermission(permission:HMSAwarenessAPI.HMSPermission)
###### Parameters
| Name       | Type                          | Description |
|------------|-------------------------------|-------------|
| permission | HMSAwarenessAPI.HMSPermission | null        |
###### Return Type
| Type           | Description |
|----------------|-------------|
| `Promise<any>` | -           |
###### Call Example
```ts
async function hasPermission() {
    try {
        const permission = await HMSAwareness.hasPermission(HMSAwareness.HMSPermission.PERMISSION_ACCESS_FINE_LOCATION);
        alert(JSON.stringify(permission));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### requestPermission(permission:HMSAwarenessAPI.HMSPermission)
###### Parameters
| Name       | Type                          | Description |
|------------|-------------------------------|-------------|
| permission | HMSAwarenessAPI.HMSPermission | null        |
###### Return Type
| Type           | Description |
|----------------|-------------|
| `Promise<any>` | -           |
###### Call Example
```ts
async function requestPermission() {
    try {
        await HMSAwareness.requestPermission(HMSAwareness.HMSPermission.PERMISSION_ACCESS_FINE_LOCATION);
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### requestPermissions(permissions:HMSAwarenessAPI.HMSPermission[])
###### Parameters
| Name        | Type                            | Description |
|-------------|---------------------------------|-------------|
| permissions | HMSAwarenessAPI.HMSPermission[] | null        |
###### Return Type
| Type           | Description |
|----------------|-------------|
| `Promise<any>` | -           |
###### Call Example
```ts
async function requestPermissions() {
    try {
        await HMSAwareness.requestPermissions(HMSAwareness.HMSPermission.PERMISSION_ACCESS_FINE_LOCATION, HMSAwareness.HMSPermission.PERMISSION_ACCESS_COARSE_LOCATION);
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
```

##### enableLogger()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
async function enableLogger() {
    await HMSAwareness.enableLogger();
}
```

##### disableLogger()
###### Return Type
| Type                            | Description            |
|---------------------------------|------------------------|
| [BarrierStatus](#BarrierStatus) | Barrier status result. |
###### Call Example
```ts
async function disableLogger() {
    await HMSAwareness.disableLogger();
}
```

## 4. Configuration and Description

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Awareness plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

You can find the sample projects on [HMS Core > Samples > Awareness Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Awareness Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
