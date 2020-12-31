# Cordova Plugin HMS Nearby

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

This plugin enables communication between Huawei Nearby SDK and Cordova platform. It exposes all functionality provided by Huawei Nearby SDK.

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

5. Install `HMS Nearby plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-nearby
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

4. Install `HMS Nearby plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-nearby
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-nearby
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

4. Install `HMS Nearby plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-nearby
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-nearby
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

### HMSNearby

#### Method Summary

| Method                                                              | Return Type        | Description                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| on(event: HMSNearbyEvent, callback: (val)=>void)                    | `void`             | Subscribes to Nearby events. Pass a callback to run codes when the event triggered.                                                                                                                                                                                                                                    |
| enableLogger()                                                      | `Promise<void>`    | Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.                                                                                                                                                                                                                        |
| disableLogger()                                                     | `Promise<void>`    | Disables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods.                                                                                                                                                                                                                       |
| hasPermission(permission: HMSPermission)                            | `Promise<boolean>` | Checks whether permission is granted to use the services.                                                                                                                                                                                                                                                              |
| requestPermission(permission: HMSPermission)                        | `Promise<void>`    | Obtains the necessary permissions to use the services.                                                                                                                                                                                                                                                                 |
| requestPermissions(permissions: HMSPermission[])                    | `Promise<void>`    | Obtains the necessary permissions to use the services.                                                                                                                                                                                                                                                                 |
| startBroadcasting(name: string, serviceId: string,  policy: Policy) | `Promise<void>`    | Starts broadcasting.                                                                                                                                                                                                                                                                                                   |
| stopBroadcasting()                                                  | `Promise<void>`    | Stops broadcasting.                                                                                                                                                                                                                                                                                                    |
| startScan(serviceId: string,  policy: Policy)                       | `Promise<void>`    | Starts to scan for remote endpoints with the specified service ID.                                                                                                                                                                                                                                                     |
| stopScan()                                                          | `Promise<void>`    | Stops discovering devices.                                                                                                                                                                                                                                                                                             |
| requestConnect(name: string,  endpointId: string)                   | `Promise<void>`    | Sends a request to connect to a remote endpoint.                                                                                                                                                                                                                                                                       |
| acceptConnect(endpointId: string)                                   | `Promise<void>`    | Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.                                                                                                                                 |
| rejectConnect(endpointId: string)                                   | `Promise<void>`    | Rejects a connection request from a remote endpoint.                                                                                                                                                                                                                                                                   |
| disconnect(endpointId: string)                                      | `Promise<void>`    | Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.                                                                                                                                                                                                                |
| disconnectAll()                                                     | `Promise<void>`    | Disconnects all connections.                                                                                                                                                                                                                                                                                           |
| sendBytes(bytes: number[], endpointIds: string[])                   | `Promise<void>`    | Transfers given bytes to given endpoint ids.                                                                                                                                                                                                                                                                           |
| sendFile(fileUri: string, endpointIds: string[])                    | `Promise<void>`    | Transfers file from given URI to given endpoint ids. Transferred file is saved in subscriber's device under Downloads/Nearby/ directory with name data id.                                                                                                                                                             |
| sendStream(streamUrl: string, endpointIds: string[])                | `Promise<void>`    | Transfers stream from given URL to given endpoint ids.                                                                                                                                                                                                                                                                 |
| cancelDataTransfer(dataId: string)                                  | `Promise<void>`    | Cancels data transmission when sending or receiving data.                                                                                                                                                                                                                                                              |
| getApiKey()                                                         | `Promise<string>`  | Obtains the current API credential.                                                                                                                                                                                                                                                                                    |
| setApiKey(apiKey: string)                                           | `Promise<void>`    | Sets the API credential for your app.                                                                                                                                                                                                                                                                                  |
| put(message: Message)                                               | `Promise<void>`    | Publishes a message and broadcasts a token for nearby devices to scan.                                                                                                                                                                                                                                                 |
| put(message: Message,  putOption: PutOption)                        | `Promise<void>`    | Publishes a message and broadcasts a token for nearby devices to scan. This message is published only to apps that use the same project ID and have registered the message type with the cloud for subscription.                                                                                                       |
| get()                                                               | `Promise<void>`    | Obtains messages from the cloud using the default option (DEFAULT).                                                                                                                                                                                                                                                    |
| get(getOption: GetOption)                                           | `Promise<void>`    | Registers the messages to be obtained with the cloud. Only messages with the same project ID can be obtained.                                                                                                                                                                                                          |
| getInBackground()                                                   | `Promise<void>`    | Identifies only BLE beacon messages. It subscribes to messages published by nearby devices in a persistent and low-power manner and uses the default configuration (DEFAULT). Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed. |
| getInBackground(getOption: GetOption)                               | `Promise<void>`    | Identifies only BLE beacon messages. Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.                                                                                                                                          |
| unput(message: Message)                                             | `Promise<void>`    | Cancels message publishing.                                                                                                                                                                                                                                                                                            |
| unget()                                                             | `Promise<void>`    | Cancels a message subscription.                                                                                                                                                                                                                                                                                        |
| ungetInBackground()                                                 | `Promise<void>`    | Cancels the current message subscription.                                                                                                                                                                                                                                                                              |
| startWifiShare(wifiSharePolicy: WifiSharePolicy)                    | `Promise<void>`    | Enable the Wi-Fi sharing function. Set WifiSharePolicy based on function requirements.                                                                                                                                                                                                                                 |
| stopWifiShare()                                                     | `Promise<void>`    | Disables the Wi-Fi sharing function.                                                                                                                                                                                                                                                                                   |
| shareWifiConfig(endpointId: string)                                 | `Promise<void>`    | Shares Wi-Fi with a remote device.                                                                                                                                                                                                                                                                                     |
| getVersion()                                                        | `Promise<string>`  | Obtains the Nearby Service SDK version number.                                                                                                                                                                                                                                                                         |

#### Methods

##### on(event: HMSNearbyEvent,  callback: (val) => void)
Subscribes to Nearby events. Pass a callback to run codes when the event triggered.

###### Parameters

| Name     | Type           | Description                                     |
| -------- | -------------- | ----------------------------------------------- |
| event    | HMSNearbyEvent | Event name.                                     |
| callback | function       | Callback to be called when the event triggered. |

###### Return Type

| Type   | Description |
| ------ | ----------- |
| `void` | -           |

###### Sample Code

```ts
function on() {
    HMSNearby.on(HMSNearbyEvent.EVENT_CONNECTION_ON_ESTABLISH, (res) => {
        console.log("Connection Established: " + JSON.stringify(res));
    });
}
```

##### enableLogger()
Enables HMSLogger capability which is used for sending usage analytics of Nearby SDK's methods to improve the service quality.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function enableLogger() {
    HMSNearby.enableLogger().then(() => {
        console.log("enableLogger: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### disableLogger()
Disables HMSLogger.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function disableLogger() {
    HMSNearby.disableLogger().then(() => {
        console.log("disableLogger: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### hasPermission(permission: HMSPermission)
Checks whether permissions are granted to use the services.

###### Parameters

| Name       | Type          | Description |
| ---------- | ------------- | ----------- |
| permission | HMSPermission | Permission. |

###### Return Type

| Type               | Description                                     |
| ------------------ | ----------------------------------------------- |
| `Promise<boolean>` | True if permission is granted, otherwise false. |

###### Sample Code

```ts
function hasPermission() {
    HMSNearby.hasPermission(HMSPermission.PERMISSION_BLUETOOTH)
    .then((permissionResult) => {
        console.log("hasPermission: " + permissionResult);
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### requestPermission(permission: HMSPermission)
Obtains the necessary permissions to use the services.

###### Parameters

| Name       | Type          | Description |
| ---------- | ------------- | ----------- |
| permission | HMSPermission | Permission. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function requestPermission() {
    HMSNearby.requestPermission(HMSPermission.PERMISSION_BLUETOOTH)
    .then(() => {
        console.log("requestPermission: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### requestPermissions(permissions: HMSPermission[])
Obtains the necessary permissions to use the services.

###### Parameters

| Name        | Type            | Description       |
| ----------- | --------------- | ----------------- |
| permissions | HMSPermission[] | Permissions List. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function requestPermissions() {
    HMSNearby.requestPermissions([HMSPermission.PERMISSION_BLUETOOTH, HMSPermission.PERMISSION_BLUETOOTH_ADMIN])
    .then(() => {
        console.log("requestPermissions: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### startBroadcasting(name: string,  serviceId: string,  policy: Policy)
Starts broadcasting.

###### Parameters

| Name      | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| name      | string | Local endpoint name.                             |
| serviceId | string | Service ID. The app package name is recommended. |
| policy    | Policy | Object of the Policy type.                       |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function startBroadcasting() {
    const name = 'name';
    const serviceId = 'serviceId';
    HMSNearby.startBroadcasting(name, serviceId, Policy.POLICY_STAR).then(() => {
        console.log("startBroadcasting: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### stopBroadcasting()
Stops broadcasting.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function stopBroadcasting() {
    HMSNearby.stopBroadcasting().then(() => {
        console.log("stopBroadcasting: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### startScan(serviceId: string,  policy: Policy)
Starts to scan for remote endpoints with the specified service ID.

###### Parameters

| Name      | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| serviceId | string | Service ID. The app package name is recommended. |
| policy    | Policy | Object of the Policy type.                       |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function startScan() {
    const serviceId = 'serviceId';
    HMSNearby.startScan(serviceId, Policy.POLICY_STAR).then(() => {
        console.log("startScan: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### stopScan()
Stops discovering devices.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function stopScan() {
    HMSNearby.stopScan().then(() => {
        console.log("stopScan: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### requestConnect(name: string,  endpointId: string)
Sends a request to connect to a remote endpoint.

###### Parameters

| Name       | Type   | Description                |
| ---------- | ------ | -------------------------- |
| name       | string | Local endpoint name.       |
| endpointId | string | ID of the remote endpoint. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function requestConnect() {
    const name = 'name';
    const endpointId = 'endpointId';
    HMSNearby.requestConnect(name, endpointId).then(() => {
        console.log("requestConnect: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### acceptConnect(endpointId: string)
Accepts a connection. This API must be called before data transmission. If the connection request is not accepted within 8 seconds, the connection fails and needs to be re-initiated.

###### Parameters

| Name       | Type   | Description                |
| ---------- | ------ | -------------------------- |
| endpointId | string | ID of the remote endpoint. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function acceptConnect() {
    const endpointId = 'endpointId';
    HMSNearby.acceptConnect(endpointId).then(() => {
        console.log("acceptConnect: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### rejectConnect(endpointId: string)
Rejects a connection request from a remote endpoint.

###### Parameters

| Name       | Type   | Description                |
| ---------- | ------ | -------------------------- |
| endpointId | string | ID of the remote endpoint. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function rejectConnect() {
    const endpointId = 'endpointId';
    HMSNearby.rejectConnect(endpointId).then(() => {
        console.log("rejectConnect: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### disconnect(endpointId: string)
Disconnects from a remote endpoint. Then communication with the remote endpoint is no longer available.

###### Parameters

| Name       | Type   | Description                |
| ---------- | ------ | -------------------------- |
| endpointId | string | ID of the remote endpoint. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function disconnect() {
    const endpointId = 'endpointId';
    HMSNearby.disconnect(endpointId).then(() => {
        console.log("disconnect: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### disconnectAll()
Disconnects all connections.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function disconnectAll() {
    HMSNearby.disconnectAll().then(() => {
        console.log("disconnectAll: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### sendBytes(bytes: number[], endpointIds: string[])
Transfers given bytes to given endpoint ids.

###### Parameters

| Name        | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| bytes       | number[] | number array that contains your data. |
| endpointIds | string[] | string array of remote endpoint IDs.  |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function sendBytes() {
    const bytes = [11, 22, 33, 44];
    const endpointIds = ['endpointId1', 'endpointId2'];
    HMSNearby.sendBytes(bytes, endpointIds).then(() => {
        console.log("sendBytes: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### sendFile(fileUri: string,  endpointIds: string[])
Transfers file from given URI to given endpoint ids. The transferred file is saved in subscriber's device under downloads/nearby/ directory with name data id.

###### Parameters

| Name        | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| fileUri     | string   | File URI.                            |
| endpointIds | string[] | string array of remote endpoint IDs. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function sendFile() {
    const fileUri = 'fileUri';
    const endpointIds = ['endpointId1', 'endpointId2'];
    HMSNearby.sendFile(fileUri, endpointIds).then(() => {
        console.log("sendFile: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### sendStream(streamUrl: string,  endpointIds: string[])
Transfers stream from given URL to given endpoint ids.

###### Parameters

| Name        | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| streamUrl   | string   | Stream URL.                          |
| endpointIds | string[] | string array of remote endpoint IDs. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function sendStream() {
    const streamUrl = 'streamUrl';
    const endpointIds = ['endpointId1', 'endpointId2'];
    HMSNearby.sendStream(streamUrl, endpointIds).then(() => {
        console.log("sendStream: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### cancelDataTransfer(dataId: string)
Cancels data transmission when sending or receiving data.

###### Parameters

| Name   | Type   | Description                                          |
| ------ | ------ | ---------------------------------------------------- |
| dataId | string | ID of the data whose transmission is to be canceled. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function cancelDataTransfer() {
    const dataId = "123456";
    HMSNearby.cancelDataTransfer(dataId).then(() => {
        console.log("cancelDataTransfer: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### getApiKey()
Obtains the current API credential.

###### Return Type

| Type              | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `Promise<string>` | Promise result of an execution that returns the current API credential. |

###### Sample Code

```ts
function getApiKey() {
    HMSNearby.getApiKey().then((apiKey) => {
        console.log("getApiKey: " + apiKey);
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### setApiKey(apiKey: string)
Sets the API credential for your app.

###### Parameters

| Name   | Type   | Description     |
| ------ | ------ | --------------- |
| apiKey | string | API credential. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function setApiKey() {
    const apiKey = 'apiKey';
    HMSNearby.setApiKey(apiKey).then(() => {
        console.log("setApiKey: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### put(message: Message)
Publishes a message and broadcasts a token for nearby devices to scan.

###### Parameters

| Name    | Type    | Description        |
| ------- | ------- | ------------------ |
| message | Message | Published message. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function put() {
    const message = {
        content: [11, 22, 33, 44],
        type: 'Message'
    }
    HMSNearby.put(message).then(() => {
        console.log("put: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### put(message: Message,  putOption: PutOption)
Publishes a message and broadcasts a token for nearby devices to scan. This message is published only to apps that use the same project ID and have registered the message type with the cloud for subscription.

###### Parameters

| Name      | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| message   | Message   | Published message.               |
| putOption | PutOption | Obtains options for calling Put. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function put() {
    const message = {
        content: [11, 22, 33, 44],
        type: 'Message'
    }
    const putOption = {
        policy: {
            distanceType: MessagePolicyDistanceType.POLICY_DISTANCE_TYPE_DEFAULT,
            findingMode: MessagePolicyFindingMode.POLICY_FINDING_MODE_DEFAULT,
            ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_DEFAULT
        }
    }
    HMSNearby.put(message, putOption).then(() => {
        console.log("put: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### get()
Obtains messages from the cloud using the default option (DEFAULT).

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function get() {
    HMSNearby.get().then(() => {
        console.log("get: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### get(getOption: GetOption)
Registers the messages to be obtained with the cloud. Only messages with the same project ID can be obtained.

###### Parameters

| Name      | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| getOption | GetOption | Obtains options for calling Get. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function get() {
    const getOption = {
        picker: {
            includeAllTypes: true
        },
        policy: {
            ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_DEFAULT
        }
    }
    HMSNearby.get(getOption).then(() => {
        console.log("get: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### getInBackground()
Identifies only BLE beacon messages. It subscribes to messages published by nearby devices in a persistent and low-power manner and uses the default configuration (DEFAULT). Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function getInBackground() {
    HMSNearby.getInBackground().then(() => {
        console.log("getInBackground: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### getInBackground(getOption: GetOption)
Identifies only BLE beacon messages. Scanning is going on no matter whether your app runs in the background or foreground. The scanning stops when the app process is killed.

###### Parameters

| Name      | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| getOption | GetOption | Obtains options for calling Get. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function getInBackground() {
    const getOption = {
        picker: {
            includeAllTypes: true
        },
        policy: {
            ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_DEFAULT
        }
    }
    HMSNearby.getInBackground(getOption).then(() => {
        console.log("getInBackground: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### unput(message: Message)
Cancels message publishing.

###### Parameters

| Name    | Type    | Description        |
| ------- | ------- | ------------------ |
| message | Message | Published message. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function unput() {
    const message = {
        content: [11, 22, 33, 44],
        type: 'Message'
    }
    HMSNearby.unput(message).then(() => {
        console.log("unput: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### unget()
Cancels a message subscription.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function unget() {
    HMSNearby.unget().then(() => {
        console.log("unget: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### ungetInBackground()
Cancels the current message subscription.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function ungetInBackground() {
    HMSNearby.ungetInBackground().then(() => {
        console.log("ungetInBackground: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### startWifiShare(wifiSharePolicy: WifiSharePolicy)
Enable the Wi-Fi sharing function. Set WifiSharePolicy based on function requirements.

###### Parameters

| Name            | Type            | Description                                                                            |
| --------------- | --------------- | -------------------------------------------------------------------------------------- |
| wifiSharePolicy | WifiSharePolicy | Wi-Fi sharing policy. Enable the Wi-Fi sharing mode or configuration mode as required. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function startWifiShare() {
    HMSNearby.startWifiShare(WifiSharePolicy.POLICY_SHARE).then(() => {
        console.log("startWifiShare: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### stopWifiShare()
Disables the Wi-Fi sharing function.

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function stopWifiShare() {
    HMSNearby.stopWifiShare().then(() => {
        console.log("stopWifiShare: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### shareWifiConfig(endpointId: string)
Shares Wi-Fi with a remote device.

###### Parameters

| Name       | Type   | Description                |
| ---------- | ------ | -------------------------- |
| endpointId | string | ID of the remote endpoint. |

###### Return Type

| Type            | Description                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `Promise<void>` | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

###### Sample Code

```ts
function shareWifiConfig() {
    const endpointId = 'endpointId';
    HMSNearby.shareWifiConfig(endpointId).then(() => {
        console.log("shareWifiConfig: success");
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

##### getVersion()
Obtains the Nearby Service SDK version number.

###### Return Type

| Type              | Description                               |
| ----------------- | ----------------------------------------- |
| `Promise<string>` | Version number of the Nearby Service SDK. |

###### Sample Code

```ts
function getVersion() {
    HMSNearby.getVersion().then((version) => {
        console.log("version: " + version);
    }).catch((e) => {
        console.error(JSON.stringify(e));
    });
}
```

### Enum HMSNearbyEvent

| Field                               | Value                            | Description                                                                                                                                                                   |
| ----------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EVENT_CONNECTION_ON_ESTABLISH       | "eventConnectionOnEstablish"     | Called back when a connection has been established and both ends need to confirm whether to accept the connection.                                                            |
| EVENT_CONNECTION_ON_RESULT          | "eventConnectionOnResult"        | Called back when either end accepts or rejects the connection.                                                                                                                |
| EVENT_CONNECTION_ON_DISCONNECT      | "eventConnectionOnDisconnect"    | Called back when the remote endpoint disconnects or the connection is unreachable.                                                                                            |
| EVENT_SCAN_ON_FOUND                 | "eventScanOnFound"               | Called back when an endpoint is discovered.                                                                                                                                   |
| EVENT_SCAN_ON_LOST                  | "eventScanOnLost"                | Called back when an endpoint is no longer discoverable.                                                                                                                       |
| EVENT_DATA_ON_RECEIVED              | "eventDataOnReceived"            | Returns the data.                                                                                                                                                             |
| EVENT_DATA_ON_TRANSFER_UPDATE       | "eventDataOnTransferUpdate"      | Called back to obtain the data sending or receiving status.                                                                                                                   |
| EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED | "eventMessageOnBleSignalChanged" | Called when the first BLE broadcast message associated with Message or the BLE signal associated with Message changes.                                                        |
| EVENT_MESSAGE_ON_DISTANCE_CHANGED   | "eventMessageOnDistanceChanged"  | Called when the estimated distance to a message changes.                                                                                                                      |
| EVENT_MESSAGE_ON_FOUND              | "eventMessageOnFound"            | Called when a message is detected for the first time or a lost message is detected again.                                                                                     |
| EVENT_MESSAGE_ON_LOST               | "eventMessageOnLost"             | Called when a message is no longer detectable.                                                                                                                                |
| EVENT_PUT_ON_TIMEOUT                | "eventPutOnTimeout"              | Called when message publishing expires.                                                                                                                                       |
| EVENT_GET_ON_TIMEOUT                | "eventGetOnTimeout"              | Called when message subscription expires.                                                                                                                                     |
| EVENT_STATUS_ON_PERMISSION_CHANGED  | "eventStatusOnPermissionChanged" | Called when a Nearby permission is assigned or revoked.                                                                                                                       |
| EVENT_WIFI_ON_FOUND                 | "eventWifiOnFound"               | Called back when a nearby device on which Wi-Fi can be configured is discovered. Device information can be obtained for the display and selection of target devices.          |
| EVENT_WIFI_ON_LOST                  | "eventWifiOnLost"                | Called back when a device on which Wi-Fi can be configured is lost.                                                                                                           |
| EVENT_WIFI_ON_FETCH_AUTH_CODE       | "eventWifiOnFetchAuthCode"       | Called back when the verification code for Wi-Fi sharing is to be obtained. The verification code must be obtained and displayed so that users can confirm the target device. |
| EVENT_WIFI_ON_SHARE_RESULT          | "eventWifiOnShareResult"         | Called back when the Wi-Fi sharing result is to be obtained.                                                                                                                  |

### Enum HMSPermission

| Field                             | Value                                       | Description                                            |
| --------------------------------- | ------------------------------------------- | ------------------------------------------------------ |
| PERMISSION_BLUETOOTH              | "android.permission.BLUETOOTH"              | Permission to connect to paired bluetooth devices.     |
| PERMISSION_BLUETOOTH_ADMIN        | "android.permission.BLUETOOTH_ADMIN"        | Permission to discover and pair bluetooth devices.     |
| PERMISSION_ACCESS_WIFI_STATE      | "android.permission.ACCESS_WIFI_STATE"      | Permission to access information about Wi-Fi networks. |
| PERMISSION_CHANGE_WIFI_STATE      | "android.permission.CHANGE_WIFI_STATE"      | Permission to change Wi-Fi connectivity state.         |
| PERMISSION_ACCESS_COARSE_LOCATION | "android.permission.ACCESS_COARSE_LOCATION" | Permission to access approximate location.             |
| PERMISSION_ACCESS_FINE_LOCATION   | "android.permission.ACCESS_FINE_LOCATION"   | Permission to access precise location.                 |
| PERMISSION_READ_EXTERNAL_STORAGE  | "android.permission.READ_EXTERNAL_STORAGE"  | Permission to read from external storage.              |
| PERMISSION_WRITE_EXTERNAL_STORAGE | "android.permission.WRITE_EXTERNAL_STORAGE" | Permission to write to external storage.               |

### Enum Policy

| Field       | Value | Description                                                                     |
| ----------- | ----- | ------------------------------------------------------------------------------- |
| POLICY_MESH | 1     | Point-to-point connection policy, which supports an M-to-N connection topology. |
| POLICY_P2P  | 2     | Point-to-point connection policy, which supports a 1-to-1 connection topology.  |
| POLICY_STAR | 3     | Point-to-point connection policy, which supports a 1-to-N connection topology.  |

### Enum DataType

| Field       | Value | Description                           |
| ----------- | ----- | ------------------------------------- |
| DATA_FILE   | 1     | Payload of the file type.             |
| DATA_BYTES  | 2     | Payload of the byte type.             |
| DATA_STREAM | 3     | Payload of the real-time stream type. |

### Enum TransferState

| Field                      | Value | Description                |
| -------------------------- | ----- | -------------------------- |
| TRANSFER_STATE_SUCCESS     | 1     | Data sent successfully.    |
| TRANSFER_STATE_FAILURE     | 2     | Failed to send data.       |
| TRANSFER_STATE_IN_PROGRESS | 3     | Data is being transmitted. |
| TRANSFER_STATE_CANCELED    | 4     | Data sending canceled.     |

### Enum MessagePolicyDistanceType

| Field                        | Value | Description                                                |
| ---------------------------- | ----- | ---------------------------------------------------------- |
| POLICY_DISTANCE_TYPE_DEFAULT | 0     | Allows messages to be transmitted over any distance.       |
| POLICY_DISTANCE_TYPE_EARSHOT | 1     | Allows messages to be transmitted only within the earshot. |

### Enum MessagePolicyFindingMode

| Field                         | Value | Description                                                                                      |
| ----------------------------- | ----- | ------------------------------------------------------------------------------------------------ |
| POLICY_FINDING_MODE_DEFAULT   | 0     | Allows messages to be transmitted over any distance.                                             |
| POLICY_FINDING_MODE_BROADCAST | 1     | Broadcasts a sharing code for other devices to scan to discover nearby devices.                  |
| POLICY_FINDING_MODE_SCAN      | 2     | Broadcasts a sharing code and scans for other devices' sharing codes to discover nearby devices. |

### Enum MessagePolicyTtlSeconds

| Field                       | Value      | Description                 |
| --------------------------- | ---------- | --------------------------- |
| POLICY_TTL_SECONDS_DEFAULT  | 240        | Default TTL, in seconds.    |
| POLICY_TTL_SECONDS_MAX      | 86400      | Maximum TTL, in seconds.    |
| POLICY_TTL_SECONDS_INFINITE | 2147483647 | Indefinite TTL, in seconds. |

### Enum WifiSharePolicy

| Field        | Value | Description               |
| ------------ | ----- | ------------------------- |
| POLICY_SHARE | 1     | Wi-Fi sharing mode.       |
| POLICY_SET   | 2     | Wi-Fi configuration mode. |

### Enum StatusCode

| Field                                            | Value | Description                                                                                                     |
| ------------------------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------- |
| STATUS_SUCCESS                                   | 0     | Operation successful.                                                                                           |
| STATUS_FAILURE                                   | –1    | Operation failed.                                                                                               |
| STATUS_API_DISORDER                              | 8001  | API calls are out of order.                                                                                     |
| STATUS_NO_NETWORK                                | 8002  | The local endpoint is not connected to the Internet.                                                            |
| STATUS_NOT_CONNECTED                             | 8003  | The local endpoint is not connected to a remote endpoint.                                                       |
| STATUS_TRANSFER_IO_ERROR                         | 8004  | Failed to read or write a file or data streams.                                                                 |
| STATUS_ALREADY_BROADCASTING                      | 8005  | The app is broadcasting.                                                                                        |
| STATUS_ALREADY_CONNECTED                         | 8006  | The local endpoint has been connected to a remote endpoint.                                                     |
| STATUS_ALREADY_SCANNING                          | 8007  | The app is scanning for nearby devices.                                                                         |
| STATUS_POLICY_CONFLICT                           | 8008  | Stop the scanning and connection before enabling a new policy.                                                  |
| STATUS_BLUETOOTH_OPERATION_FAILED                | 8009  | The connection failed due to a Bluetooth error.                                                                 |
| STATUS_CONNECT_REJECTED                          | 8010  | The remote endpoint rejected the connection.                                                                    |
| STATUS_CONNECT_IO_ERROR                          | 8011  | Failed to communicate with a connected remote endpoint.                                                         |
| STATUS_ENDPOINT_UNKNOWN                          | 8012  | Attempting to connect to an unknown remote endpoint.                                                            |
| STATUS_API_OCCUPIED                              | 8013  | Nearby API already called by another app.                                                                       |
| STATUS_MISSING_PERMISSION_ACCESS_COARSE_LOCATION | 8014  | The ACCESS_COARSE_LOCATION permission is required.                                                              |
| STATUS_MISSING_PERMISSION_ACCESS_WIFI_STATE      | 8015  | The ACCESS_WIFI_STATE permission is required.                                                                   |
| STATUS_MISSING_PERMISSION_BLUETOOTH              | 8016  | The BLUETOOTH permission is required.                                                                           |
| STATUS_MISSING_PERMISSION_BLUETOOTH_ADMIN        | 8017  | The BLUETOOTH_ADMIN permission is required.                                                                     |
| STATUS_MISSING_PERMISSION_CHANGE_WIFI_STATE      | 8018  | The CHANGE_WIFI_STATE permission is required.                                                                   |
| STATUS_MISSING_PERMISSION_RECORD_AUDIO           | 8019  | The RECORD_AUDIO permission is required.                                                                        |
| STATUS_MISSING_SETTING_LOCATION_ON               | 8020  | The location permission is required.                                                                            |
| STATUS_AIRPLANE_MODE_MUST_BE_OFF                 | 8021  | The Airplane mode must be turned off.                                                                           |
| STATUS_MESSAGE_APP_UNREGISTERED                  | 8050  | The app is not granted the permission to use the Message API.                                                   |
| STATUS_MESSAGE_APP_QUOTA_LIMITED                 | 8051  | The app has reached its quota limit to call the Message API.                                                    |
| STATUS_MESSAGE_BLE_BROADCASTING_UNSUPPORTED      | 8052  | The Message API depends on BLE broadcast.                                                                       |
| STATUS_MESSAGE_BLE_SCANNING_UNSUPPORTED          | 8053  | The Message API depends on BLE scanning.                                                                        |
| STATUS_MESSAGE_BLUETOOTH_OFF                     | 8054  | The Bluetooth function is disabled.                                                                             |
| STATUS_MESSAGE_WRONG_CONTEXT                     | 8055  | The context of the Message API is invalid.                                                                      |
| STATUS_MESSAGE_NOT_ALLOW                         | 8056  | The Message API is disabled.                                                                                    |
| STATUS_MESSAGE_MISSING_PERMISSIONS               | 8057  | The request for calling the Message API is rejected due to insufficient permissions.                            |
| STATUS_MESSAGE_AUTH_FAILED                       | 8058  | The Message API is not authorized.                                                                              |
| STATUS_MESSAGE_PENDING_INTENTS_LIMITED           | 8059  | The number of message subscriptions initiated by the app has exceeded the upper limit allowed by PendingIntent. |
| STATUS_INTERNAL_ERROR                            | 8060  | Internal error. For details, please refer to the error description.                                             |
| STATUS_FINDING_MODE_ERROR                        | 8061  | The nearby device discovery mode is incorrectly set.                                                            |
| STATUS_MESSAGE_TASK_ALREADY_IN_PROCESSING        | 8062  | The message engine task is being processed.                                                                     |
| STATUS_MISSING_PERMISSION_FILE_READ_WRITE        | 8063  | The file read and write permissions are not assigned for Nearby Connection.                                     |
| STATUS_MISSING_PERMISSION_INTERNET               | 8064  | The network permission is not assigned for Nearby Message.                                                      |
| STATUS_WIFI_SHARE_USER_AUTH_FAIL                 | 8065  | Failed to verify Wi-Fi sharing in a dialog box.                                                                 |
| STATUS_WIFI_SHARE_WIFI_CLOSED                    | 8066  | The sharing endpoint disconnects from the Wi-Fi connection during Wi-Fi sharing.                                |
| STATUS_WIFI_CONNECT_FAIL                         | 8067  | Wi-Fi connection failed or timed out.                                                                           |

### Message

| Field      | Type       | Description                                                   |
| ---------- | ---------- | ------------------------------------------------------------- |
| content    | `number[]` | Message content. The size cannot exceed MAX_CONTENT_SIZE.     |
| namespace? | `string`   | Domain namespace. The default value is "_reserved_namespace." |
| type?      | `string`   | Message type. The value cannot exceed MAX_TYPE_LENGTH.        |

### EddystoneUid

| Field        | Type     | Description                                                                                       |
| ------------ | -------- | ------------------------------------------------------------------------------------------------- |
| hexNamespace | `string` | 10-byte namespace of an Eddystone UID (in hexadecimal format), for example, c526dfec5403adc62585. |
| hexInstance  | `string` | 6-byte instance of an Eddystone UID (in hexadecimal format), for example, 32ddbcad1576.           |

### IBeaconId

| Field       | Type     | Description  |
| ----------- | -------- | ------------ |
| iBeaconUuid | `string` | UUID.        |
| major       | `number` | Major value. |
| minor       | `number` | Minor value. |

### NamespaceType

| Field     | Type     | Description                                                                 |
| --------- | -------- | --------------------------------------------------------------------------- |
| namespace | `string` | Namespace of a message. The value cannot be empty or contain asterisks (*). |
| type      | `string` | Type of a message. The value cannot be empty or contain asterisks (*).      |

### MessagePicker

| Field            | Type              | Description                                                                                                                             |
| ---------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| includeAllTypes? | `boolean`         | Includes Eddystone UIDs.                                                                                                                |
| eddystoneUids?   | `EddystoneUid[]`  | Includes Eddystone UIDs.                                                                                                                |
| iBeaconIds?      | `IBeaconId[]`     | Includes iBeacon IDs.                                                                                                                   |
| namespaceTypes?  | `NamespaceType[]` | Picks among all messages in the specified namespace and with the specified type. A namespace can be specified only for beacon messages. |

### MessagePolicy

| Field         | Type                        | Description                                                                                                                                                                                                                                                |
| ------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| distanceType? | `MessagePolicyDistanceType` | For message publishing, the published message will only be delivered to subscribing devices that are at the most specified distance. For message subscription, messages will only be delivered if the publishing device is at the most specified distance. |
| findingMode?  | `MessagePolicyFindingMode`  | Sets the scanning mode.                                                                                                                                                                                                                                    |
| ttlSeconds?   | `MessagePolicyTtlSeconds`   | Sets the TTL of a published or subscribed message.                                                                                                                                                                                                         |

### PutOption

| Field   | Type            | Description                                                                     |
| ------- | --------------- | ------------------------------------------------------------------------------- |
| policy? | `MessagePolicy` | Sets the policy for publishing messages. The DEFAULT policy is used by default. |

### GetOption

| Field   | Type            | Description                                                                         |
| ------- | --------------- | ----------------------------------------------------------------------------------- |
| picker? | `MessagePicker` | Sets the rule for filtering messages to be received.                                |
| policy? | `MessagePolicy` | Sets the policy for subscribing to messages. The DEFAULT policy is used by default. |

### BleSignal

| Field   | Type     | Description                                                                 |
| ------- | -------- | --------------------------------------------------------------------------- |
| rssi    | `number` | Returns the received signal strength in dBm. The value range is [–127,127]. |
| txPower | `number` | Returns the transmit power from 1 m away, in dBm.                           |

### Distance

| Field     | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| precision | `number` | Returns the precision of the estimated instance. |
| meters    | `number` | Returns the estimated distance, in m.            |

### Constant Values

| Field                            | Type            | Value                           | Description                                                                |
| -------------------------------- | --------------- | ------------------------------- | -------------------------------------------------------------------------- |
| BLE_UNKNOWN_TX_POWER             | `number`        | 0x80000000                      | Unknown transmit power level.                                              |
| PRECISION_LOW                    | `number`        | 1                               | Precision of the distance estimated based on the BLE signal strength.      |
| MAX_SIZE_DATA                    | `number`        | 32768                           | Maximum length of bytes that can be sent when transfer methods are called. |
| MAX_CONTENT_SIZE                 | `number`        | 65536                           | Maximum size of the message content, in bytes.                             |
| MAX_TYPE_LENGTH                  | `number`        | 16                              | Maximum size of a message type, in bytes.                                  |
| MESSAGE_NAMESPACE_RESERVED       | `string`        | "_reserved_namespace"           | Namespace reserved for special messages.                                   |
| MESSAGE_TYPE_EDDYSTONE_UID       | `string`        | "_eddystone_uid"                | Eddystone message type.                                                    |
| MESSAGE_TYPE_I_BEACON_ID         | `string`        | "_ibeacon_id"                   | IBeacon message type.                                                      |
| DISTANCE_UNKNOWN                 | `Distance`      | "precision = LOW, meters = NaN" | Unknown distance.                                                          |
| MESSAGE_PICKER_INCLUDE_ALL_TYPES | `MessagePicker` | "INCLUDE_ALL_TYPES"             | A picker that returns all types of messages published by the app.          |
| MESSAGE_POLICY_DEFAULT           | `MessagePolicy` | "POLICY = DEFAULT"              | Default parameter settings of Policy.                                      |
| MESSAGE_POLICY_BLE_ONLY          | `MessagePolicy` | "POLICY = BLE_ONLY"             | Policy that uses only BLE to discover nearby devices.                      |
| GET_OPTION_DEFAULT               | `GetOption`     | "GetOption = DEFAULT"           | Default parameter settings of GetOption.                                   |
| PUT_OPTION_DEFAULT               | `PutOption`     | "PutOption = DEFAULT"           | Default parameter settings of PutOption.                                   |

---

## 4. Configuration and Description

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Nearby plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

You can find the sample projects on [HMS Core > Samples > Nearby Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Nearby Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
