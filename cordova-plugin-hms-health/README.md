# Cordova Plugin HMS Health

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
  - [2.1. Creating a Project in AppGallery Connect](#21-creating-a-project-in-appgallery-connect)
  - [2.2. Configuring the Signing Certificate Fingerprint](#22-configuring-the-signing-certificate-fingerprint)
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

This plugin enables communication between Huawei Health SDK and Cordova platform. It exposes all functionality provided by Huawei Health SDK.

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

### 2.2. Configuring the Signing Certificate Fingerprint

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) Codelab tutorial for the certificate generation.

### 2.3. Enabling Required Services

#### Applying for Health Kit

To use HUAWEI Health Kit, you first need to [apply for Huawei Health Service](https://developer.huawei.com/consumer/en/doc/apply-kitservice-0000001050071707-V5) and also [apply for Huawei ID Service](https://developer.huawei.com/consumer/en/doc/apply-id-0000001050069756-V5).

1. Sign in to the HUAWEI Developers website and click Console.

2. Click Health Kit in Development section.

3. Click Apply for Health Kit, agree to the agreement, and the screen for data permission application is displayed.

4. Select the data access permissions that must be applied for the product.
  
    - When adding Health Kit, comply with the least privilege principle. The data access permissions must be consistent with the business. Do not apply for any permission that is beyond the business scope or is not yet needed.

5. Wait while your application is under approval.

    - It normally takes about 15 minutes for an application involving data types other than restricted ones to be automatically activated. If permissions for restricted data types are required, the application will be subject to approval. For applications that involve the write permissions of restricted data types, the approval process may take a couple of weeks, depending on the number of data types for which permissions are required and the app release regions.

    - An application won't be approved if the submitted materials do not meet the requirements. Once the application is approved, the app development and test phases can start and the app can be released once the related procedures are completed.

    - If your business scope changes and you need to modify the corresponding data permissions, click Modify to submit the application again.

> **NOTE:** Please save the public key obtained during the process of enabling the IAP service. It will be used for verifying the signature of data returned by the IAP SDK, ensuring that the data is not tampered with.

### 2.4. Cordova

1. Install Cordova CLI if haven't done before.

    ```bash
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be the package name which used when applying for the HUAWEI ID service.

4. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

5. Install `HMS Health plugin` to the project.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-health
    ```

6. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

7. Run the app.

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

2. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be the package name which used when applying for the HUAWEI ID service.

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

4. Install `HMS Health plugin` to the project.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-health
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-health
    ```

6. Add **`keystore(.jks)`** and **`build.json`** files to your project's root directory.

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

7. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

8. Run the app.

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

3. Update the **`appId`** property which is specified in the **`capacitor.config.json`** file. It should be the package name which used when applying for the HUAWEI ID service

4. Install `HMS Health plugin` to the project.

    ```bash
    npm install @hmscore/cordova-plugin-hms-health
    ```

5. If you want to enable Ionic Native support then run the following command.

    ```bash
    npm install @ionic-native/core @hmscore/ionic-native-hms-health
    ```

6. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

7. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

8. Copy **`keystore(.jks)`** file to **`<project_root>/android/app`** directory.

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

### Overview

Huawei Health Kit Plugin for Flutter provides a set of function classes and functions as described in the table below.

#### Methods

| Method          | Return Type             | Description                 |
| --------------- | ----------------------- | --------------------------- |
| signIn()        | `Promise<AuthHuaweiId>` | Sign in with Huawei ID      |
| enableLogger()  | `Promise<void>`         | Enables HMSLogger service.  |
| disableLogger() | `Promise<void>`         | Disables HMSLogger service. |

#### Modules

| Module                                                | Description                                                                |
| ----------------------------------------------------- | -------------------------------------------------------------------------- |
| [ActivityRecordController](#activityrecordcontroller) | Provides methods to create and manage user activity records.               |
| [AutoRecorderController](#autorecordercontroller)     | Provides real-time data reading functions.                                 |
| [DataController](#datacontroller)                     | Provides methods to add, delete, modify, and query the platform data.      |
| [SettingsController](#settingscontroller)             | Provides setting related functions.                                        |
| [ConsentsController](#consentscontroller)             | Contains all involved APIs for obtaining the various Controller instances. |

#### ActivityRecordController
Provides functions to create and manage user activities.

##### Method Summary
| Method                | Return Type                 | Description                                                                               |
| --------------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| addActivityRecord()   | `Promise<void>`             | Inserts a specified activity record and corresponding data to the HUAWEI Health platform. |
| beginActivityRecord() | `Promise<void>`             | Starts a new ActivityRecord for the current app.                                          |
| getActivityRecord()   | `Promise<ActivityRecord[]>` | Reads ActivityRecord data from the HUAWEI Health platform.                                |
| endActivityRecord()   | `Promise<ActivityRecord[]>` | Stops the ActivityRecord of a specific ID.                                                |

#### AutoRecorderController
Provides the capabilities to read data in real time and cancel the reading.

##### Method Summary
| Method        | Return Type     | Description                                                |
| ------------- | --------------- | ---------------------------------------------------------- |
| startRecord() | `Promise<void>` | Starts real-time data reading by specifying the data type. |
| stopRecord()  | `Promise<void>` | Stops the ongoing AutoRecorder service.                    |

#### DataController
Determines the API for data management. The user can use this API to insert, delete, update, and read data, as well as query the data statistics of the current day and past days.

##### Method Summary
| Method               | Return Type          | Description                                                                                                                       |
| -------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| initDataController() | `Promise<void>`      | Initializes a DataController instance by a list of HiHealthOption objects that define data types and read/write permissions.      |
| read()               | `Promise<ReadReply>` | Reads user data.                                                                                                                  |
| insert()             | `Promise<void>`      | Inserts a sampling dataset into the Health platform.                                                                              |
| update()             | `Promise<void>`      | Updates existing data.                                                                                                            |
| deleteData()         | `Promise<void>`      | Deletes inserted sampling datasets by specifying a time range or deletes them all. It can also be used to delete workout records. |
| readTodaySummation() | `Promise<SampleSet>` | Reads the summary data of a specified data type of the current day.                                                               |
| readDailySummation() | `Promise<SampleSet>` | Reads the daily statistics of a specified data type.                                                                              |
| clearAll()           | `Promise<void>`      | Clears all data inserted by the app from the device and the cloud.                                                                |

#### SettingsController
Provides the setting-related functions.

##### Method Summary
| Method                        | Return Type         | Description                                                                                                                                                                                                                        |
| ----------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addDataType()                 | `Promise<void>`     | Adds new custom data types.                                                                                                                                                                                                        |
| readDataType()                | `Promise<DataType>` | Reads the data type based on the data type name.                                                                                                                                                                                   |
| disableHiHealth()             | `Promise<void>`     | Disables the Health Kit function, cancels user authorization, and cancels all data records. (The task takes effect in 24 hours.)                                                                                                   |
| checkHealthAppAuthorization() | `Promise<void>`     | Checks the user privacy authorization to Health Kit. If the authorization has not been granted, the user will be redirected to the authorization screen where they can authorize the Huawei Health app to open data to Health Kit. |
| getHealthAppAuthorization()   | `Promise<boolean>`  | Checks the user privacy authorization to Health Kit.                                                                                                                                                                               |

#### ConsentsController
Provides authorization management APIs that can be used to view and revoke the granted permissions.

##### Method Summary
| Method           | Return Type              | Description                                          |
| ---------------- | ------------------------ | ---------------------------------------------------- |
| getPermissions() | `Promise<ScopeLangItem>` | Reads the permissions.                               |
| revoke()         | `Promise<void>`          | Reads the data type based on the data type name.     |
| revokeAll()      | `Promise<void>`          | Checks the user privacy authorization to Health Kit. |



#### signIn()

Inserts a specified activity record and corresponding data to the HUAWEI Health platform.

| Parameter | Type     | Definition    |
| --------- | -------- | ------------- |
| `scopes`  | string[] | Login scopes. |


| Return                  | Description                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| `Promise<AuthHuaweiId>` | If the operation is successful, promise resolves to an AuthHuaweiId object. Otherwise it throws an error. |

###### Sample Code

```ts
const scopes = [
    HuaweiHiHealth.HEALTHKIT_STEP_READ,
    HuaweiHiHealth.HEALTHKIT_STEP_WRITE,
]
HMSHealth.signIn(scopes)
  .then((result) => console.log("signIn :: ", result))
  .catch((error) => console.log("signIn :: Error!", error));
```

#### addActivityRecord()

Inserts a specified activity record and corresponding data to the HUAWEI Health platform.

| Parameter              | Type                                            | Definition               |
| ---------------------- | ----------------------------------------------- | ------------------------ |
| `AddActivityRecordReq` | [`AddActivityRecordReq`](#addactivityrecordreq) | Activity record details. |


| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
let startDate = new Date();
let endDate = new Date();
startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000))

let activityRecordData = {
  dataCollector: {
    dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
    name: "DT_CONTINUOUS_STEPS_DELTA",
    dataGenerateType: DataGenerateType.DATA_TYPE_RAW
  },
  activityRecord: {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: TimeUnit.MILLISECONDS,
    timeZone: "+0800",
    id: 'ActivityRecordRun1923',
    name: 'BeginActivityRecord',
    description: 'This is a test for ActivityRecord',
    activityType: HiHealthActivities.RUNNING,
    activitySummary: {
      paceSummary: {
        avgPace: 247.27626,
        bestPace: 212,
        britishPaceMap: {
          "50001893": 365.0,
        },
        britishPartTimeMap: {
          "1.0": 263.0
        },
        partTimeMap: {
          "1.0": 456.0
        },
        paceMap: {
          "1.0": 263
        },
        sportHealthPaceMap: {
          "102802480": 535.0
        }
      },
      dataSummary: [{
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        fieldName: Field.FIELD_STEPS_DELTA,
        fieldValue: "200",
        timeUnit: TimeUnit.MILLISECONDS,
        dataCollector: {
          dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
          name: "DT_CONTINUOUS_STEPS_DELTA",
          dataGenerateType: DataGenerateType.DATA_TYPE_RAW
        }
      }]
    }
  },
  sampleSet: [{
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    fieldName: Field.FIELD_STEPS_DELTA,
    fieldValue: "200",
    timeUnit: TimeUnit.MILLISECONDS,
    dataCollector: {
      dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
      name: "DT_CONTINUOUS_STEPS_DELTA",
      dataGenerateType: DataGenerateType.DATA_TYPE_RAW
    },
  }]
}
HMSHealth.addActivityRecord(activityRecordData)
  .then((result) => console.log("addActivityRecord :: ", result))
  .catch((error) => console.log("addActivityRecord :: Error!", error));
```

#### getActivityRecord()

Reads ActivityRecord data from the HUAWEI Health platform

| Parameter              | Type                                            | Definition               |
| ---------------------- | ----------------------------------------------- | ------------------------ |
| `GetActivityRecordReq` | [`GetActivityRecordReq`](#getactivityrecordreq) | Activity record details. |

| Return                      | Description                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Promise<ActivityRecord[]>` | If the operation is successful, promise resolves to an ActivityRecord array. Otherwise it throws an error. |

###### Sample Code

```ts
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000))

    let activityRecordData = {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: TimeUnit.MILLISECONDS,
    dataType: DataType.DT_CONTINUOUS_STEPS_DELTA
    }

    HMSHealth.getActivityRecord(activityRecordData)
        .then((result) => console.log("getActivityRecord :: ", result))
        .catch((error) => console.log("getActivityRecord :: Error!", error));
```

#### beginActivityRecord()

 Starts a new ActivityRecord for the current app.

| Parameter                | Type                                                | Definition               |
| ------------------------ | --------------------------------------------------- | ------------------------ |
| `BeginActivityRecordReq` | [`BeginActivityRecordReq`](#beginactivityrecordreq) | Activity record details. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let startDate = new Date();
    startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 1000))

    let activityRecordOptions = {
        startTime: startDate.getTime(),
        timeUnit: TimeUnit.MILLISECONDS,
        timeZone: "+0800",
        id: 'ActivityRecordRun',
        name: 'BeginActivityRecord',
        description: 'This is a test for ActivityRecord',
        activityType: HiHealthActivities.RUNNING,
    }
    HMSHealth.beginActivityRecord(activityRecordOptions)
        .then((result) => console.log("beginActivityRecord :: ", result))
        .catch((error) => console.log("beginActivityRecord :: Error!", error));
```

#### endActivityRecord()

Stops the ActivityRecord of a specific ID.

| Parameter          | Type   | Definition          |
| ------------------ | ------ | ------------------- |
| `activityRecordId` | string | Activity record id. |

| Return                      | Description                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Promise<ActivityRecord[]>` | If the operation is successful, promise resolves to an ActivityRecord array. Otherwise it throws an error. |

###### Sample Code

```ts
    let activityRecordId = "ActivityRecordWalking";

    HMSHealth.endActivityRecord(activityRecordId)
        .then((result) => console.log("endActivityRecord :: ", result))
        .catch((error) => console.log("endActivityRecord :: Error!", error));
```

#### startRecord()

Starts real-time data reading by specifying the data type.

| Parameter        | Type                                | Definition           |
| ---------------- | ----------------------------------- | -------------------- |
| `StartRecordReq` | [`StartRecordReq`](#startrecordreq) | Data type to record. |

| Return          | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void and brings the subscription page. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.on("samplepoint", (e) => {
        console.log(e);
    });

    HMSHealth.startRecord(
         dataType: DataType.DT_CONTINUOUS_STEPS_TOTAL
    )
        .then((result) => console.log("startRecord :: ", result))
        .catch((error) => console.log("startRecord :: Error!", error));
```

#### stopRecord()

Stops the ongoing AutoRecorder service.

| Parameter       | Type                              | Definition |
| --------------- | --------------------------------- | ---------- |
| `StopRecordReq` | [`StopRecordReq`](#stoprecordreq) | Data type. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.stopRecord(
        dataType: DataType.DT_CONTINUOUS_STEPS_TOTAL
    )
        .then((result) => console.log("stopRecord :: ", result))
        .catch((error) => console.log("stopRecord :: Error!", error));
```

#### initDataController()

Initializes a DataController instance by a list of HiHealthOption objects that define data types and read/write permissions.

| Parameter      | Type                          | Definition            |
| -------------- | ----------------------------- | --------------------- |
| `DataOption[]` | [`DataOption[]`](#dataoption) | Data type and scopes. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let dataOptions = [{
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        hiHealthOption: HiHealthOptions.ACCESS_READ
    },
    {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        hiHealthOption: HiHealthOptions.ACCESS_WRITE
    }
    ];
    HMSHealth.initDataController(dataOptions)
        .then((result) => console.log("initDataController :: ", result))
        .catch((error) => console.log("initDataController :: Error!", error));
```

#### read()

Reads user data.

| Parameter | Type                  | Definition    |
| --------- | --------------------- | ------------- |
| `ReadReq` | [`ReadReq`](#readreq) | Data options. |

| Return               | Description                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| `Promise<ReadReply>` | If the operation is successful, promise resolves to a ReadReply object. Otherwise it throws an error. |

###### Sample Code

```ts
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

    let readDataOptions = {
        dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW
        },
        options: {
            startTime: startDate.getTime(),
            endTime: endDate.getTime(),
            timeUnit: TimeUnit.MILLISECONDS,
        }
    }
    HMSHealth.read(readDataOptions)
        .then((result) => console.log("read :: ", result))
        .catch((error) => console.log("read :: Error!", error));
```

#### insert()

Inserts a sampling dataset into the Health platform.

| Parameter   | Type                      | Definition    |
| ----------- | ------------------------- | ------------- |
| `InsertReq` | [`InsertReq`](#insertreq) | Data details. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

    let insertDataOptions = {
        dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW
        },
        sampleSet: [{
            startTime: startDate.getTime(),
            endTime: endDate.getTime(),
            fieldName: Field.FIELD_STEPS_DELTA,
            fieldValue: "200",
            timeUnit: TimeUnit.MILLISECONDS,
            dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW
            }
        }]
    }
  
    HMSHealth.insert(insertDataOptions)
        .then((result) => console.log("insert :: ", result))
        .catch((error) => console.log("insert :: Error!", error));
```

#### update()

Updates existing data

| Parameter   | Type                      | Definition    |
| ----------- | ------------------------- | ------------- |
| `UpdateReq` | [`UpdateReq`](#updatereq) | Data details. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

    let updateDataOptions = {
        dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW
        },
        sampleSet: [{
            startTime: startDate.getTime(),
            endTime: endDate.getTime(),
            fieldName: Field.FIELD_STEPS_DELTA,
            fieldValue: "200",
            timeUnit: TimeUnit.MILLISECONDS,
            dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW
            },
        }],
        options: {
            startTime: startDate.getTime(),
            endTime: endDate.getTime(),
            timeUnit: TimeUnit.MILLISECONDS,
        }
    }
    HMSHealth.update(updateDataOptions)
        .then((result) => console.log("update :: ", result))
        .catch((error) => console.log("update :: Error!", error));
```

#### deleteData()

Reads the summary data of a specified data type of the current day. 

| Parameter   | Type                      | Definition    |
| ----------- | ------------------------- | ------------- |
| `DeleteReq` | [`DeleteReq`](#deletereq) | Data details. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

    let deleteDataOptions = {
        dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW
        },
        options: {
            startTime: startDate.getTime(),
            endTime: endDate.getTime(),
            timeUnit: TimeUnit.MILLISECONDS,
        }
    }
    HMSHealth.deleteData(deleteDataOptions)
        .then((result) => console.log("deleteData :: ", result))
        .catch((error) => console.log("deleteData :: Error!", error));
```

#### readTodaySummation()

Reads the summary data of a specified data type of the current day. 

| Parameter  | Type    | Definition |
| ---------- | ------- | ---------- |
| `dataType` | [string | Data type. |


| Return               | Description                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| `Promise<SampleSet>` | If the operation is successful, promise resolves to a SampleSet object. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.readTodaySummation(DataType.DT_CONTINUOUS_STEPS_DELTA)
        .then((result) => console.log("readTodaySummation :: ", result))
        .catch((error) => console.log("readTodaySummation :: Error!", error));
```

#### readDailySummation()

Reads the daily statistics of a specified data type.

| Parameter      | Type                            | Definition    |
| -------------- | ------------------------------- | ------------- |
| `ReadDailyReq` | [`ReadDailyReq`](#readdailyreq) | Data details. |

| Return               | Description                                                                                           |
| -------------------- | ----------------------------------------------------------------------------------------------------- |
| `Promise<SampleSet>` | If the operation is successful, promise resolves to a SampleSet object. Otherwise it throws an error. |

###### Sample Code

```ts
    let options = {
        startDate: 20201218,
        endDate: 20201221,
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA
    }
    HMSHealth.readDailySummation(options)
        .then((result) => console.log("readDailySummation :: ", result))
        .catch((error) => console.log("readDailySummation :: Error!", error));
```

#### clearAll()

Clears all data inserted by the app from the device and the cloud

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.clearAll()
        .then((result) => console.log("clearAll :: ", result))
        .catch((error) => console.log("clearAll :: Error!", error));
```

#### addDataType()

Adds new custom data types.

| Parameter        | Type                                | Definition      |
| ---------------- | ----------------------------------- | --------------- |
| `AddDataTypeReq` | [`AddDataTypeReq`](#adddatatypereq) | Data type info. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    const options = {
        dataTypeName: "com.myapp.myapp.newExtendedDataType",
        fieldValue: Field.FIELD_STEPS_DELTA
    }

    HMSHealth.addDataType(options)
        .then((result) => console.log("addDataType :: ", result))
        .catch((error) => console.log("addDataType :: Error!", error));
```

#### readDataType()

Reads the data type based on the data type name.

| Parameter      | Type   | Definition |
| -------------- | ------ | ---------- |
| `dataTypeName` | string | Data type. |

| Return              | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `Promise<DataType>` | If the operation is successful, promise resolves to an object. Otherwise it throws an error. |

###### Sample Code

```ts
  let dataTypeName = "com.huseyindeniz.health.newExtendedDataType1";

    HMSHealth.readDataType(dataTypeName)
        .then((result) => console.log("readDataType :: ", result))
        .catch((error) => console.log("readDataType :: Error!", error));
```

#### disableHiHealth()

Disables the Health Kit function, cancels user authorization, and cancels all data records. (The task takes effect in 24 hours.)

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.disableHiHealth()
        .then((result) => console.log("disableHiHealth :: ", result))
        .catch((error) => console.log("disableHiHealth :: Error!", error));
```

#### checkHealthAppAuthorization()

Checks the user privacy authorization to Health Kit. If the authorization has not been granted, the user will be redirected to the authorization screen where they can authorize the Huawei Health app to open data to Health Kit.

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.checkHealthAppAuthorization()
        .then((result) => console.log("checkHealthAppAuthorization :: ", result))
        .catch((error) => console.log("checkHealthAppAuthorization :: Error!", error));
```

#### getHealthAppAuthorization()

Checks the user privacy authorization to Health Kit

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.getHealthAppAuthorization()
        .then((result) => console.log("getHealthAppAuthorization :: ", result))
        .catch((error) => console.log("getHealthAppAuthorization :: Error!", error));
```

#### getPermissions()

Reads the permissions.

| Parameter           | Type                                      | Definition                   |
| ------------------- | ----------------------------------------- | ---------------------------- |
| `GetPermissionsReq` | [`GetPermissionsReq`](#getpermissionsreq) | Language and app id options. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let options = {
        language: "en-us",
        appId: "103345931"
    }
    HMSHealth.getPermissions(options)
        .then((result) => console.log("getPermissions :: ", result))
        .catch((error) => console.log("getPermissions :: Error!", error));
```

#### revoke()

Checks the user privacy authorization to Health Kit

| Parameter   | Type                      | Definition              |
| ----------- | ------------------------- | ----------------------- |
| `RevokeReq` | [`RevokeReq`](#revokereq) | App id and scope array. |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    let options = {
        appId: "103345931",
        scopes: [
            HuaweiHiHealth.HEALTHKIT_STEP_READ,
            HuaweiHiHealth.HEALTHKIT_STEP_WRITE
        ]
    }
    HMSHealth.revoke()
        .then((result) => console.log("revoke :: ", result))
        .catch((error) => console.log("revoke :: Error!", error));
```

#### revokeAll()

Checks the user privacy authorization to Health Kit

| Parameter | Type   | Definition |
| --------- | ------ | ---------- |
| `appId`   | string | App id.    |

| Return          | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.revokeAll()
        .then((result) => console.log("revokeAll :: ", result))
        .catch((error) => console.log("revokeAll :: Error!", error));
```

#### enableLogger()

This API is called to enables the HMSLogger for sends some statistics for the development of functions in the cordova-plugin-hms-iap plugin.

| Return          | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Promise<void>` | If the operation is successful, promise resolves to a void and brings the subscription page. Otherwise it throws an error. |

###### Sample Code

```ts
    HMSHealth.enableLogger()
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
    HMSHealth.disableLogger()
        .then((result) => console.log("disableLogger :: ", result))
        .catch((error) => console.log("disableLogger :: Error!", error));
```

### Interfaces

#### AuthHuaweiId

| Field                          | Type     | Definition                        |
| ------------------------------ | -------- | --------------------------------- |
| accessToken                    | string   | Access token.                     |
| displayName                    | string   | Nickname.                         |
| email                          | string   | Email adress.                     |
| familyName                     | string   | Family name.                      |
| givenName                      | string   | Given name.                       |
| idToken                        | string   | ID Token                          |
| unionId                        | string   | Union Id                          |
| avatarUriString                | string   | Profile picture URI               |
| openId                         | string   | OpenId                            |
| describeContentsInAuthHuaweiId | number   | Describe Contents In AuthHuaweiId |
| authorizedScopes               | string[] | Authorized Scopes                 |
| authorizationCode              | string   | Authorization Code                |
| huaweiAccount                  | Account  | Huawei Account                    |

#### Account

| Field Name | Type   | Definition                     |
| ---------- | ------ | ------------------------------ |
| type       | string | Type of HUAWEI ID Account.     |
| name       | string | Name of the HUAWEI ID Account. |

#### DataCollector

| Field Name       | Type   | Definition                 |
| ---------------- | ------ | -------------------------- |
| dataType         | string | Type of DataCollector.     |
| name             | string | Name of the DataCollector. |
| dataGenerateType | number | Data generate type.        |

#### ReadReply

| Field Name | Type        | Definition             |
| ---------- | ----------- | ---------------------- |
| sampleSets | SampleSet[] | All sampling datasets. |

#### ScopeLangItem

| Field Name  | Type   | Definition                           |
| ----------- | ------ | ------------------------------------ |
| appName     | string | Application name.                    |
| appIconPath | string | Path to the app icon image.          |
| authTime    | string | Time when the permission is granted. |

#### SampleSet

| Field Name    | Type          | Definition            |
| ------------- | ------------- | --------------------- |
| startTime     | number        | Start time timestamp. |
| endTime       | number        | End time timestamp.   |
| fieldName     | string        | Field name.           |
| fieldValue    | string        | Field value.          |
| timeUnit      | string        | Time unit.            |
| dataCollector | DataCollector | Datacollector.        |

#### ActivityRecord

| Field Name      | Type            | Definition                      |
| --------------- | --------------- | ------------------------------- |
| startTime       | number          | Start time timestamp.           |
| endTime         | number          | End time timestamp.             |
| timeUnit        | string          | Time unit.                      |
| timeZone        | string          | Time zone.                      |
| id              | string          | Id of Activity Record.          |
| name            | string          | Name of Activity Record.        |
| description     | string          | Description of Activity Record. |
| activityType    | string          | Activity Type.                  |
| activitySummary | ActivitySummary | ActivitySummary.                |

#### ActivitySummary

| Field Name  | Type        | Definition                                              |
| ----------- | ----------- | ------------------------------------------------------- |
| paceSummary | PaceSummary | ActivitySummary.                                        |
| dataSummary | SampleSet[] | Statistical data points that consist from SamplePoints. |

#### PaceSummary

| Field Name         | Type   | Definition                                 |
| ------------------ | ------ | ------------------------------------------ |
| britishPaceMap     | object | Pace per mile.                             |
| britishPartTimeMap | object | Segment data table in the imperial system. |
| paceMap            | object | Pace per kilometer.                        |
| partTimeMap        | object | Segment data table in the metric system.   |
| sportHealthPaceMap | object | Health pace records.                       |
| avgPace            | double | Average pace.                              |
| bestPace           | double | Optimal pace.                              |

#### HuaweiHiHealth
HuaweiHiHealth constant class, which is used to apply for scopes to access Health Kit data from users.

##### Constants
| Name                              | Type   | Description                                                                                                                                                               |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HEALTHKIT_ACTIVITY_READ           | string | Views the activity data (such as activity points, workout, strength, running posture, cycling, and activity duration) in HUAWEI Health Kit.                               |
| HEALTHKIT_ACTIVITY_WRITE          | string | Stores the activity data (such as activity points, workout, strength, running posture, cycling, and activity duration) in HUAWEI Health Kit.                              |
| HEALTHKIT_BLOODGLUCOSE_READ       | string | Views the blood glucose data in HUAWEI Health Kit.                                                                                                                        |
| HEALTHKIT_BLOODGLUCOSE_WRITE      | string | Stores the blood glucose data in HUAWEI Health Kit.                                                                                                                       |
| HEALTHKIT_CALORIES_READ           | string | Views the calories (including the BMR) in HUAWEI Health Kit.                                                                                                              |
| HEALTHKIT_CALORIES_WRITE          | string | Stores calories (including the BMR) in HUAWEI Health Kit.                                                                                                                 |
| HEALTHKIT_DISTANCE_READ           | string | Views the distance and climbing height in HUAWEI Health Kit.                                                                                                              |
| HEALTHKIT_DISTANCE_WRITE          | string | Stores the distance and climbing height in HUAWEI Health Kit.                                                                                                             |
| HEALTHKIT_HEARTRATE_READ          | string | Views the heart rate data in HUAWEI Health Kit.                                                                                                                           |
| HEALTHKIT_HEARTRATE_WRITE         | string | Stores the heart rate data in HUAWEI Health Kit.                                                                                                                          |
| HEALTHKIT_HEIGHTWEIGHT_READ       | string | Views the height and weight in HUAWEI Health Kit.                                                                                                                         |
| HEALTHKIT_HEIGHTWEIGHT_WRITE      | string | Stores the height and weight in HUAWEI Health Kit.                                                                                                                        |
| HEALTHKIT_LOCATION_READ           | string | Views the location data (including the trajectory) in HUAWEI Health Kit.                                                                                                  |
| HEALTHKIT_LOCATION_WRITE          | string | Stores the location data (including the trajectory) in HUAWEI Health Kit.                                                                                                 |
| HEALTHKIT_PULMONARY_READ          | string | Views the pulmonary function data (e.g. VO2 Max) in HUAWEI Health Kit.                                                                                                    |
| HEALTHKIT_PULMONARY_WRITE         | string | Stores the pulmonary function data (e.g. VO2 Max) in HUAWEI Health Kit.                                                                                                   |
| HEALTHKIT_SLEEP_READ              | string | Views the sleep data in HUAWEI Health Kit.                                                                                                                                |
| HEALTHKIT_SLEEP_WRITE             | string | Stores the sleep data in HUAWEI Health Kit.                                                                                                                               |
| HEALTHKIT_SPEED_READ              | string | Views the speed in HUAWEI Health Kit.                                                                                                                                     |
| HEALTHKIT_SPEED_WRITE             | string | Stores the speed in HUAWEI Health Kit.                                                                                                                                    |
| HEALTHKIT_STEP_READ               | string | Views the step count in HUAWEI Health Kit.                                                                                                                                |
| HEALTHKIT_STEP_WRITE              | string | Stores the step count in HUAWEI Health Kit.                                                                                                                               |
| HEALTHKIT_STRENGTH_READ           | string | Views medium- and high-intensity data in HUAWEI Health Kit.                                                                                                               |
| HEALTHKIT_STRENGTH_WRITE          | string | Stores medium- and high-intensity data in HUAWEI Health Kit.                                                                                                              |
| HEALTHKIT_BODYFAT_READ            | string | Views the body fat data (such as body fat rate, BMI, muscle mass, moisture rate, visceral fat, bone salt, protein ratio, and skeletal muscle mass) in HUAWEI Health Kit.  |
| HEALTHKIT_BODYFAT_WRITE           | string | Stores the body fat data (such as body fat rate, BMI, muscle mass, moisture rate, visceral fat, bone salt, protein ratio, and skeletal muscle mass) in HUAWEI Health Kit. |
| HEALTHKIT_NUTRITION_READ          | string | Views the nutrition data in HUAWEI Health Kit.                                                                                                                            |
| HEALTHKIT_NUTRITION_WRITE         | string | Stores the nutrition data in HUAWEI Health Kit.                                                                                                                           |
| HEALTHKIT_BLOODPRESSURE_READ      | string | Views the blood pressure data in HUAWEI Health Kit.                                                                                                                       |
| HEALTHKIT_BLOODPRESSURE_WRITE     | string | Stores the blood pressure data in HUAWEI Health Kit.                                                                                                                      |
| HEALTHKIT_BODYTEMPERATURE_READ    | string | Views the body temperature data in HUAWEI Health Kit.                                                                                                                     |
| HEALTHKIT_BODYTEMPERATURE_WRITE   | string | Stores the body temperature data in HUAWEI Health Kit.                                                                                                                    |
| HEALTHKIT_OXYGENSTATURATION_READ  | string | Views the blood oxygen data in HUAWEI Health Kit.                                                                                                                         |
| HEALTHKIT_OXYGENSTATURATION_WRITE | string | Stores the blood oxygen data in HUAWEI Health Kit.                                                                                                                        |
| HEALTHKIT_REPRODUCTIVE_READ       | string | Views the reproductive data in HUAWEI Health Kit.                                                                                                                         |
| HEALTHKIT_REPRODUCTIVE_WRITE      | string | Stores the reproductive data in HUAWEI Health Kit.                                                                                                                        |
| HEALTHKIT_ACTIVITY_RECORD_READ    | string | Views the activity data (such as activity points, workout, strength, running posture, cycling, and activity duration) in HUAWEI Health Kit.                               |
| HEALTHKIT_ACTIVITY_RECORD_WRITE   | string | Stores the activity data (such as activity points, workout, strength, running posture, cycling, and activity duration) in HUAWEI Health Kit.                              |
| HEALTHKIT_STRESS_READ             | string | Views the stress data in HUAWEI Health Kit.                                                                                                                               |
| HEALTHKIT_STRESS_WRITE            | string | Stores the stress data in HUAWEI Health Kit.                                                                                                                              |

---

#### DataType
Contains the HUAWEI Health Kit datasets.

##### Constants
| Name                                                | Type   | Description                                                                                                                                                                                                                             |
| --------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DT_UNUSED_DATA_TYPE                                 | string | Default data type.                                                                                                                                                                                                                      |
| DT_CONTINUOUS_STEPS_DELTA                           | string | Steps taken since the last reading. The value range over 1 second is (0, 10], that over 1 minute is (0, 600], and that over 1 hour is (0, 36000].                                                                                       |
| DT_CONTINUOUS_STEPS_TOTAL                           | string | Total number of steps. This data type applies only to data query scenarios.                                                                                                                                                             |
| DT_INSTANTANEOUS_STEPS_RATE                         | string | Number of steps per minute.                                                                                                                                                                                                             |
| DT_CONTINUOUS_STEPS_RATE_STATISTIC                  | string | Step cadence statistics.                                                                                                                                                                                                                |
| DT_CONTINUOUS_ACTIVITY_SEGMENT                      | string | Activity type within a period of time.                                                                                                                                                                                                  |
| DT_CONTINUOUS_CALORIES_CONSUMED                     | string | Calories consumed within a period of time (unit: kcal).                                                                                                                                                                                 |
| DT_CONTINUOUS_CALORIES_BURNT                        | string | Total calories burnt within a period of time. This field is mandatory, and the unit is kcal. The value range over 1 second is (0, 0.555555555555556), that over 1 minute is (0, 33.333333333333333), and that over 1 hour is (0, 2000]. |
| DT_INSTANTANEOUS_CALORIES_BMR                       | string | Basic metabolic rate per day (unit: kcal).                                                                                                                                                                                              |
| DT_INSTANTANEOUS_POWER_SAMPLE                       | string | Instantaneous sampling of power.                                                                                                                                                                                                        |
| DT_INSTANTANEOUS_ACTIVITY_SAMPLE                    | string | A single activity type within a period of time.                                                                                                                                                                                         |
| DT_INSTANTANEOUS_ACTIVITY_SAMPLES                   | string | Activity type within a period of time. (This data type is not recommended as it is to be deprecated.)                                                                                                                                   |
| DT_INSTANTANEOUS_HEART_RATE                         | string | Heart rate (unit: heartbeats per minute). This field is mandatory. The value range is (0, 255).                                                                                                                                         |
| DT_INSTANTANEOUS_LOCATION_SAMPLE                    | string | Location at a given time.                                                                                                                                                                                                               |
| DT_INSTANTANEOUS_LOCATION_TRACE                     | string | A point on the trajectory.                                                                                                                                                                                                              |
| DT_CONTINUOUS_DISTANCE_DELTA                        | string | Distance covered since the last reading (unit: meter). This field is mandatory. The value range over 1 second is (0, 100], that over 1 minute is (0, 6000], and that over 1 hour is (0, 360000].                                        |
| DT_CONTINUOUS_DISTANCE_TOTAL                        | string | Accumulated distance covered (unit: meter).                                                                                                                                                                                             |
| DT_CONTINUOUS_CALORIES_BURNT_TOTAL                  | string | Total calories.                                                                                                                                                                                                                         |
| DT_INSTANTANEOUS_SPEED                              | string | Instantaneous speed on the ground (unit: m/s).                                                                                                                                                                                          |
| DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL           | string | Number of rotations of the bicycle wheel within a period of time.                                                                                                                                                                       |
| DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION              | string | Instantaneous measurement of the rotational speed of the bicycle wheel per minute.                                                                                                                                                      |
| DT_CONTINUOUS_BIKING_PEDALING_TOTAL                 | string | Total mileage of the bicycle since the start of the count (unit: meter).                                                                                                                                                                |
| DT_INSTANTANEOUS_BIKING_PEDALING_RATE               | string | Cycling speed at a time point (unit: m/s).                                                                                                                                                                                              |
| DT_INSTANTANEOUS_HEIGHT                             | string | Height (unit: meter). This field is mandatory. The value range is (0.4, 2.6).                                                                                                                                                           |
| DT_INSTANTANEOUS_BODY_WEIGHT                        | string | Weight (unit: kg). This field is mandatory. The value range is (1, 560).                                                                                                                                                                |
| DT_INSTANTANEOUS_BODY_FAT_RATE                      | string | Body fat rate.                                                                                                                                                                                                                          |
| DT_INSTANTANEOUS_NUTRITION_FACTS                    | string | Nutrient intake over a meal.                                                                                                                                                                                                            |
| DT_INSTANTANEOUS_HYDRATE                            | string | Water taken over a single drink (unit: liter).                                                                                                                                                                                          |
| DT_CONTINUOUS_WORKOUT_DURATION                      | string | Workout duration (unit: minute).                                                                                                                                                                                                        |
| DT_CONTINUOUS_EXERCISE_INTENSITY                    | string | Workout intensity.                                                                                                                                                                                                                      |
| DT_STATISTICS_SLEEP                                 | string | Sleep statistics type.                                                                                                                                                                                                                  |
| DT_CONTINUOUS_SLEEP                                 | string | Sleep details.                                                                                                                                                                                                                          |
| DT_INSTANTANEOUS_STRESS                             | string | Pressure details.                                                                                                                                                                                                                       |
| DT_INSTANTANEOUS_STRESS_STATISTICS                  | string | Pressure statistics type.                                                                                                                                                                                                               |
| POLYMERIZE_CONTINUOUS_WORKOUT_DURATION              | string | Workout duration over a period of time (unit: minute).                                                                                                                                                                                  |
| POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS           | string | Summarized statistics of a specific activity type within a period of time.                                                                                                                                                              |
| POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS       | string | Average, maximum, and minimum basic metabolic rates over a period of time (unit: kcal).                                                                                                                                                 |
| POLYMERIZE_STEP_COUNT_DELTA                         | string | Step increment within a period of time.                                                                                                                                                                                                 |
| POLYMERIZE_DISTANCE_DELTA                           | string | Distance increment within a period of time.                                                                                                                                                                                             |
| POLYMERIZE_CALORIES_CONSUMED                        | string | Total calories consumed.                                                                                                                                                                                                                |
| POLYMERIZE_CALORIES_EXPENDED                        | string | Total calories consumed within a period of time (unit: kcal).                                                                                                                                                                           |
| POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS | string | Heartbeat intensity statistics.                                                                                                                                                                                                         |
| POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS         | string | Average, maximum, and minimum heartbeats per minute within a period of time.                                                                                                                                                            |
| POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE       | string | Activity boundaries within a period of time.                                                                                                                                                                                            |
| POLYMERIZE_CONTINUOUS_POWER_STATISTICS              | string | Power within a period of time (including the maximum, minimum, and average power in the unit of watt).                                                                                                                                  |
| POLYMERIZE_CONTINUOUS_SPEED_STATISTICS              | string | Ground speed (including the maximum, minimum, and average speed in the unit of m/s).                                                                                                                                                    |
| POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS      | string | Body fat rate over a period of time (including the maximum, minimum, and average values).                                                                                                                                               |
| POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS        | string | Weight over a period of time (including maximum, minimum, and average values in the unit of kg).                                                                                                                                        |
| POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS             | string | Height over a period of time (including maximum, minimum, and average values in the unit of meter).                                                                                                                                     |
| POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS    | string | Sum of nutrient intake over a period of time.                                                                                                                                                                                           |
| POLYMERIZE_HYDRATION                                | string | Water intake over a period of time (unit: liter).                                                                                                                                                                                       |

#### HiHealthActivities
Defines different types of activity that a user is performing.

##### Constants
| Name                   | Type   | Description                                                                                    |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| MIME_TYPE_PREFIX       | string | General prefix of the MIME type as the activity state.                                         |
| EXTRA_ACTION_STATUS    | string | A string that contains STATUS_ACTION_START and STATUS_ACTION_END as two extra activity states. |
| STATUS_ACTION_START    | string | Indicates that the activity has started.                                                       |
| STATUS_ACTION_END      | string | Indicates that the activity has ended.                                                         |
| AEROBICS               | string | The user is doing an aerobic exercise.                                                         |
| ARCHERY                | string | The user is doing archery.                                                                     |
| BADMINTON              | string | The user is playing badminton.                                                                 |
| BASEBALL               | string | The user is playing baseball.                                                                  |
| BASKETBALL             | string | The user is playing basketball.                                                                |
| BIATHLON               | string | The user is doing cross-country skiing and rifle shooting.                                     |
| BOXING                 | string | The user is boxing.                                                                            |
| CALISTHENICS           | string | The user is doing a calisthenics exercise.                                                     |
| CIRCUIT_TRAINING       | string | The user is doing a circuit training exercise.                                                 |
| CRICKET                | string | The user is playing cricket.                                                                   |
| CROSSFIT               | string | The user is doing a crossfit exercise.                                                         |
| CURLING                | string | The user is playing curling.                                                                   |
| CYCLING                | string | The user is cycling.                                                                           |
| CYCLING_INDOOR         | string | The user is doing indoor cycling.                                                              |
| DANCING                | string | The user is dancing.                                                                           |
| DIVING                 | string | The user is diving.                                                                            |
| ELEVATOR               | string | The user is taking an elevator.                                                                |
| ELLIPTICAL             | string | The user is using an elliptical machine.                                                       |
| ERGOMETER              | string | The user is using an ergometer machine.                                                        |
| ESCALATOR              | string | The user is taking an escalator.                                                               |
| FENCING                | string | The user is fencing.                                                                           |
| FLYING_DISC            | string | The user is throwing a Frisbee.                                                                |
| FOOTBALL_AMERICAN      | string | The user is playing American football.                                                         |
| FOOTBALL_AUSTRALIAN    | string | The user is playing Australian football.                                                       |
| FOOTBALL_SOCCER        | string | The user is playing soccer.                                                                    |
| GARDENING              | string | The user is gardening.                                                                         |
| GOLF                   | string | The user is playing golf.                                                                      |
| GYMNASTICS             | string | The user is doing gymnastics.                                                                  |
| HANDBALL               | string | The user is playing handball.                                                                  |
| HIIT                   | string | The user is doing high intensity interval training (HIIT).                                     |
| HIKING                 | string | The user is hiking.                                                                            |
| HOCKEY                 | string | The user is playing hockey.                                                                    |
| HORSE_RIDING           | string | The user is riding a horse.                                                                    |
| HOUSEWORK              | string | The user is doing housework.                                                                   |
| ICE_SKATING            | string | The user is ice-skating.                                                                       |
| IN_VEHICLE             | string | The user is in a vehicle.                                                                      |
| INTERVAL_TRAINING      | string | The user is doing an interval training exercise.                                               |
| JUMPING_ROPE           | string | The user is jumping rope.                                                                      |
| KAYAKING               | string | The user is kayaking.                                                                          |
| KETTLEBELL_TRAINING    | string | The user is training with a kettlebell.                                                        |
| KICKBOXING             | string | The user is practising kickboxing.                                                             |
| KITESURFING            | string | The user is kite-surfing.                                                                      |
| MARTIAL_ARTS           | string | The user is practising martial arts.                                                           |
| MEDITATION             | string | The user is meditating.                                                                        |
| MIXED_MARTIAL_ARTS     | string | The user is practising mixed martial arts.                                                     |
| ON_FOOT                | string | The user is on foot.                                                                           |
| OTHER                  | string | The user is doing some other activity (not an unknown activity that cannot be identified).     |
| P90X                   | string | The user is doing a P90X exercise.                                                             |
| PARAGLIDING            | string | The user is paragliding.                                                                       |
| PILATES                | string | The user is doing a Pilates exercise.                                                          |
| POLO                   | string | The user is playing polo.                                                                      |
| RACQUETBALL            | string | The user is playing racquetball.                                                               |
| ROCK_CLIMBING          | string | The user is rock climbing.                                                                     |
| ROWING                 | string | The user is rowing.                                                                            |
| ROWING_MACHINE         | string | The user is using a rowing machine.                                                            |
| RUGBY                  | string | The user is playing rugby.                                                                     |
| RUNNING                | string | The user is running.                                                                           |
| RUNNING_MACHINE        | string | The user is running on a treadmill.                                                            |
| SAILING                | string | The user is sailing.                                                                           |
| SCOOTER_RIDING         | string | The user is riding a scooter.                                                                  |
| SCUBA_DIVING           | string | The user is scuba diving.                                                                      |
| SKATEBOARDING          | string | The user is skateboarding.                                                                     |
| SKATING                | string | The user is skating.                                                                           |
| SKIING                 | string | The user is skiing.                                                                            |
| SLEDDING               | string | The user is sledding.                                                                          |
| SLEEP                  | string | The user is sleeping.                                                                          |
| SLEEP_AWAKE            | string | The user is awake during a sleep period. (Deprecated. Not recommended for use.)                |
| SLEEP_DEEP             | string | The user is in a deep sleep cycle. (Deprecated. Not recommended for use.)                      |
| SLEEP_LIGHT            | string | The user is in a light sleep cycle. (Deprecated. Not recommended for use.)                     |
| SLEEP_REM              | string | The user is in a REM sleep cycle. (Deprecated. Not recommended for use.)                       |
| SNOWBOARDING           | string | The user is snowboarding.                                                                      |
| SNOWMOBILE             | string | The user is riding a snow mobile.                                                              |
| SNOWSHOEING            | string | The user is walking in snowshoes.                                                              |
| SOFTBALL               | string | The user is playing softball.                                                                  |
| SQUASH                 | string | The user is playing squash.                                                                    |
| STAIR_CLIMBING         | string | The user is climbing stairs.                                                                   |
| STAIR_CLIMBING_MACHINE | string | The user is using a stair-climbing machine.                                                    |
| STANDUP_PADDLEBOARDING | string | The user is on a stand-up paddle board.                                                        |
| STILL                  | string | The user is still.                                                                             |
| STRENGTH_TRAINING      | string | The user is strength training.                                                                 |
| SURFING                | string | The user is surfing.                                                                           |
| SWIMMING               | string | The user is swimming.                                                                          |
| SWIMMING_OPEN_WATER    | string | The user is swimming in open waters.                                                           |
| SWIMMING_POOL          | string | The user is swimming in a swimming pool.                                                       |
| TABLE_TENNIS           | string | The user is playing table tennis.                                                              |
| TEAM_SPORTS            | string | The user is playing a team sport.                                                              |
| TENNIS                 | string | The user is playing tennis.                                                                    |
| TILTING                | string | The user is tilting the phone.                                                                 |
| UNKNOWN                | string | The user is performing an unknown activity (that can't be identified).                         |
| VOLLEYBALL             | string | The user is playing volleyball.                                                                |
| WAKEBOARDING           | string | The user is wakeboarding (being pulled by a motorboat).                                        |
| WALKING                | string | The user is walking.                                                                           |
| WATER_POLO             | string | The user is playing water polo.                                                                |
| WEIGHTLIFTING          | string | The user is weightlifting.                                                                     |
| WHEELCHAIR             | string | The user is in a wheelchair.                                                                   |
| WINDSURFING            | string | The user is windsurfing.                                                                       |
| YOGA                   | string | The user is doing Yoga.                                                                        |
| ZUMBA                  | string | The user is doing Zumba (a kind of fitness dance).                                             |
| DARTS                  | string | The user is throwing darts.                                                                    |
| BILLIARDS              | string | The user is playing billiards.                                                                 |
| SHUTTLECOCK            | string | The user is playing shuttlecock.                                                               |
| BOWLING                | string | The user is playing bowling.                                                                   |
| GROUP_CALISTHENICS     | string | The user is practising group calisthenics.                                                     |
| TUG_OF_WAR             | string | The user is playing tug of war.                                                                |
| BEACH_SOCCER           | string | The user is playing beach soccer.                                                              |
| BEACH_VOLLEYBALL       | string | The user is playing beach volleyball.                                                          |
| GATEBALL               | string | The user is playing gateball.                                                                  |
| SEPAKTAKRAW            | string | The user is playing Sepak Takraw.                                                              |
| DODGE_BALL             | string | The user is playing dodgeball.                                                                 |
| TREADMILL              | string | The user is practising using a stair stepper.                                                  |
| SPINNING               | string | The user is practising using a spinning bike.                                                  |
| STROLL_MACHINE         | string | The user is practising using a spacewalk machine.                                              |
| CROSS_FIT              | string | The user is practising crossfit.                                                               |
| FUNCTIONAL_TRAINING    | string | The user is having a functional training session.                                              |
| PHYSICAL_TRAINING      | string | The user is having a physical training session.                                                |
| BELLY_DANCE            | string | The user is practising/performing belly dance.                                                 |
| JAZZ                   | string | The user is practising/performing Jazz dance.                                                  |
| LATIN                  | string | The user is practising/performing Latin dance.                                                 |
| BALLET                 | string | The user is practising/performing ballet.                                                      |
| CORE_TRAINING          | string | The user is having a core strength training.                                                   |
| HORIZONTAL_BAR         | string | The user is practising on a horizontal bar.                                                    |
| PARALLEL_BARS          | string | The user is practising on parallel bars.                                                       |
| HIP_HOP                | string | The user is practising/performing hip-hop dance.                                               |
| SQUARE_DANCE           | string | The user is square dancing.                                                                    |
| HU_LA_HOOP             | string | The user is practising with a hula hoop.                                                       |
| BMX                    | string | The user is riding a BMX bicycle.                                                              |
| ORIENTEERING           | string | The user is participating in orienteering.                                                     |
| INDOOR_WALK            | string | The user is walking indoors.                                                                   |
| INDOOR_RUNNING         | string | The user is running indoors.                                                                   |
| MOUNTIN_CLIMBing       | string | The user is participating in mountaineering.                                                   |
| CROSS_COUNTRY_RACE     | string | The user is doing cross-country running.                                                       |
| ROLLER_SKATING         | string | The user is roller skating.                                                                    |
| HUNTING                | string | The user is hunting.                                                                           |
| FLY_A_KITE             | string | The user is flying a kite.                                                                     |
| SWING                  | string | The user is playing on a swing.                                                                |
| OBSTACLE_RACE          | string | The user is doing an obstacle race.                                                            |
| BUNGEE_JUMPING         | string | The user is doing bungee jumping.                                                              |
| PARKOUR                | string | The user is playing parkour.                                                                   |
| PARACHUTE              | string | The user is performing parachuting.                                                            |
| RACING_CAR             | string | The user is participating in a car race.                                                       |
| TRIATHLONS             | string | The user is participating in triathlon.                                                        |
| ICE_HOCKEY             | string | The user is playing ice hockey.                                                                |
| CROSSCOUNTRY_SKIING    | string | The user is doing cross-country skiing.                                                        |
| SLED                   | string | The user is sledding.                                                                          |
| FISHING                | string | The user is fishing.                                                                           |
| DRIFTING               | string | The user is drifting in a river.                                                               |
| DRAGON_BOAT            | string | The user is participating in a dragon boat race.                                               |
| MOTORBOAT              | string | The user is riding a motorboat.                                                                |
| SUP                    | string | The user is doing standup paddleboarding.                                                      |
| FREE_SPARRING          | string | The user is practising free sparring.                                                          |
| KARATE                 | string | The user is practising Karate.                                                                 |
| BODY_COMBAT            | string | The user is practising BodyCombat.                                                             |
| KENDO                  | string | The user is practising Kendo.                                                                  |
| TAI_CHI                | string | The user is practising Tai ch                                                                  |

#### TimeUnit
Defines different time units.

##### Constants
| Name         | Type   | Description             |
| ------------ | ------ | ----------------------- |
| HOURS        | string | Time unit: Hours        |
| DAYS         | string | Time unit: Days         |
| MICROSECONDS | string | Time unit: Microseconds |
| MILLISECONDS | string | Time unit: Milliseconds |
| MINUTES      | string | Time unit: Minutes      |
| NANOSECONDS  | string | Time unit: Nanoseconds  |
| SECONDS      | string | Time unit: Seconds      |

#### Field
Defines different time units.

##### Constants
| Name                                | Type   | Description                                                                                                   |
| ----------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| MEAL_UNKNOWN                        | string | Unknown meal type.                                                                                            |
| MEAL_BREAKFAST                      | string | Breakfast.                                                                                                    |
| MEAL_LUNCH                          | string | Lunch.                                                                                                        |
| MEAL_DINNER                         | string | Dinner.                                                                                                       |
| MEAL_SNACK                          | string | Snack.                                                                                                        |
| TYPE_OF_RESISTANCE_UNKNOWN          | string | Use of an unknown object for resistance during an exercise.                                                   |
| TYPE_OF_RESISTANCE_BARBELL          | string | Use of a barbell for resistance during an exercise.                                                           |
| TYPE_OF_RESISTANCE_CABLE            | string | Use of a cable for resistance during an exercise.                                                             |
| TYPE_OF_RESISTANCE_DUMBBELL         | string | Use of a dumbbell for resistance during an exercise.                                                          |
| TYPE_OF_RESISTANCE_KETTLEBELL       | string | Use of a kettlebell for resistance during an exercise.                                                        |
| TYPE_OF_RESISTANCE_MACHINE          | string | Use of a machine for resistance during an exercise.                                                           |
| TYPE_OF_RESISTANCE_BODY             | string | Use of the user's own body weight for resistance during an exercise.                                          |
| NUTRIENTS_FACTS_CALORIES            | string | Calories (kcal).                                                                                              |
| NUTRIENTS_FACTS_TOTAL_FAT           | string | Total fat (g).                                                                                                |
| NUTRIENTS_FACTS_SATURATED_FAT       | string | Saturated fat (g).                                                                                            |
| NUTRIENTS_FACTS_UNSATURATED_FAT     | string | Unsaturated fat (g).                                                                                          |
| NUTRIENTS_FACTS_POLYUNSATURATED_FAT | string | Polyunsaturated fat (g).                                                                                      |
| NUTRIENTS_FACTS_MONOUNSATURATED_FAT | string | Monounsaturated fat (g).                                                                                      |
| NUTRIENTS_FACTS_TRANS_FAT           | string | Trans fat (g).                                                                                                |
| NUTRIENTS_FACTS_CHOLESTEROL         | string | Cholesterol (mg).                                                                                             |
| NUTRIENTS_FACTS_SODIUM              | string | Sodium (mg).                                                                                                  |
| NUTRIENTS_FACTS_POTASSIUM           | string | Potassium (mg).                                                                                               |
| NUTRIENTS_FACTS_TOTAL_CARBS         | string | Total carbohydrates (g).                                                                                      |
| NUTRIENTS_FACTS_DIETARY_FIBER       | string | Dietary fiber (g).                                                                                            |
| NUTRIENTS_FACTS_SUGAR               | string | Sugar amount (g).                                                                                             |
| NUTRIENTS_FACTS_PROTEIN             | string | Protein amount (g).                                                                                           |
| NUTRIENTS_FACTS_VITAMIN_A           | string | Vitamin A amount in international unit (IU).                                                                  |
| NUTRIENTS_FACTS_VITAMIN_C           | string | Vitamin C amount (mg).                                                                                        |
| NUTRIENTS_FACTS_CALCIUM             | string | Calcium amount (mg).                                                                                          |
| NUTRIENTS_FACTS_IRON                | string | Iron amount (mg).                                                                                             |
| FIELD_PRECISION                     | string | Precision.                                                                                                    |
| FIELD_ALTITUDE                      | string | Altitude.                                                                                                     |
| FIELD_TYPE_OF_ACTIVITY              | string | Activity type.                                                                                                |
| FIELD_POSSIBILITY_OF_ACTIVITY       | string | Activity type confidence.                                                                                     |
| FIELD_BPM                           | string | Heart rate.                                                                                                   |
| FIELD_POSSIBILITY                   | string | Confidence, with a value ranging from 0.0 to 100.0.                                                           |
| FIELD_SPAN                          | string | Duration.                                                                                                     |
| FIELD_DISTANCE                      | string | Distance (m).                                                                                                 |
| FIELD_DISTANCE_DELTA                | string | Distance covered since the last reading.                                                                      |
| FIELD_HEIGHT                        | string | Height (m).                                                                                                   |
| FIELD_STEPS_DELTA                   | string | Steps taken since the last reading.                                                                           |
| FIELD_STEPS                         | string | Step count.                                                                                                   |
| FIELD_STEP_LENGTH                   | string | Step length (m).                                                                                              |
| FIELD_LATITUDE                      | string | Latitude (degree).                                                                                            |
| FIELD_LONGITUDE                     | string | Longitude (degree).                                                                                           |
| FIELD_BODY_WEIGHT                   | string | Weight (kg).                                                                                                  |
| FIELD_BMI                           | string | Body mass index, which is calculated via dividing the weight kilograms by the square meter of height (kg/m2). |
| FIELD_BODY_FAT                      | string | Body fat (kg), accurate to the first decimal place.                                                           |
| FIELD_BODY_FAT_RATE                 | string | Body fat rate (percentage), with a value ranging from 0 to 100.                                               |
| FIELD_MUSCLE_MASS                   | string | Muscle mass (kg).                                                                                             |
| FIELD_BASAL_METABOLISM              | string | Basic metabolism (kcal/day).                                                                                  |
| FIELD_MOISTURE                      | string | Water weight (kg).                                                                                            |
| FIELD_MOISTURE_RATE                 | string | Water rate (percentage).                                                                                      |
| FIELD_VISCERAL_FAT_LEVEL            | string | Visceral fat (level).                                                                                         |
| FIELD_BONE_SALT                     | string | Bone salt amount (kg).                                                                                        |
| FIELD_PROTEIN_RATE                  | string | Protein ratio (percentage).                                                                                   |
| FIELD_BODY_AGE                      | string | Body age.                                                                                                     |
| FIELD_BODY_SCORE                    | string | Body score (score).                                                                                           |
| FIELD_SKELETAL_MUSCLEL_MASS         | string | Skeletal muscle (kg).                                                                                         |
| FIELD_IMPEDANCE                     | string | Impedance (ohm).                                                                                              |
| FIELD_CIRCUMFERENCE                 | string | Circumference of a body part (such as the hip, chest, and waist) in centimeters.                              |
| FIELD_SPEED                         | string | Speed (m/s).                                                                                                  |
| FIELD_RPM                           | string | Rotations per minute or rate per minute.                                                                      |
| FIELD_STEP_RATE                     | string | Step frequency.                                                                                               |
| FIELD_ROTATION                      | string | Rotations.                                                                                                    |
| FIELD_CALORIES                      | string | Calories (kcal).                                                                                              |
| FIELD_CALORIES_TOTAL                | string | Calories (kcal).                                                                                              |
| FIELD_POWER                         | string | Power (Watt).                                                                                                 |
| FIELD_HYDRATE                       | string | Volume (liter).                                                                                               |
| FIELD_MEAL                          | string | Meal type.                                                                                                    |
| FIELD_FOOD                          | string | Food type.                                                                                                    |
| FIELD_NUTRIENTS                     | string | Nutrients.                                                                                                    |
| FIELD_NUTRIENTS_FACTS               | string | Nutrition facts.                                                                                              |
| FIELD_FRAGMENTS                     | string | Fragments.                                                                                                    |
| FIELD_AVG                           | string | Average value.                                                                                                |
| FIELD_MAX                           | string | Maximum value.                                                                                                |
| FIELD_MIN                           | string | Minimum value.                                                                                                |
| FIELD_MIN_LATITUDE                  | string | Low latitude (degree).                                                                                        |
| FIELD_MIN_LONGITUDE                 | string | Low longitude (degree).                                                                                       |
| FIELD_MAX_LATITUDE                  | string | High latitude (degree).                                                                                       |
| FIELD_MAX_LONGITUDE                 | string | High longitude (degree).                                                                                      |
| FIELD_APPEARANCE                    | string | Number of occurrences within a period of time.                                                                |
| FIELD_INTENSITY                     | string | Workout intensity.                                                                                            |
| FALL_ASLEEP_TIME                    | string | Time when the user falls asleep, expressed as a Unix timestamp.                                               |
| WAKE_UP_TIME                        | string | Time when the user wakes up, expressed as a Unix timestamp.                                                   |
| SLEEP_SCORE                         | string | Sleep score.                                                                                                  |
| SLEEP_LATENCY                       | string | Sleep latency.                                                                                                |
| GO_BED_TIME                         | string | Time when the user goes to bed.                                                                               |
| SLEEP_EFFICIENCY                    | string | Sleep efficiency (percentage).                                                                                |
| LIGHT_SLEEP_TIME                    | string | Light sleep duration.                                                                                         |
| DEEP_SLEEP_TIME                     | string | Deep sleep duration.                                                                                          |
| DREAM_TIME                          | string | REM sleep duration.                                                                                           |
| AWAKE_TIME                          | string | Duration when staying awake.                                                                                  |
| ALL_SLEEP_TIME                      | string | Total sleep duration.                                                                                         |
| WAKE_UP_CNT                         | string | Number of times the user is awake.                                                                            |
| DEEP_SLEEP_PART                     | string | Number of deep sleep segments.                                                                                |
| SLEEP_STATE                         | string | Sleep state.                                                                                                  |
| SCORE                               | string | Stress score.                                                                                                 |
| GRADE                               | string | Stress grade.                                                                                                 |
| MEASURE_TYPE                        | string | Stress measurement type: active or passive.                                                                   |
| STRESS_AVG                          | string | Average stress score.                                                                                         |
| STRESS_MAX                          | string | Highest stress score.                                                                                         |
| STRESS_MIN                          | string | Lowest stress score.                                                                                          |
| STRESS_LAST                         | string | Latest stress score.                                                                                          |
| MEASURE_COUN                        | string | Number of stress measurement times.                                                                           |

## 4. Configuration and Description

Please make sure you have applied and get accepted for Huawei Health Service.

### Configuring Obfuscation Scripts

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Health plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

You can find the sample projects on [HMS Core > Samples > Health Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei Health Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
