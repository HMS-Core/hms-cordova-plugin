# Cordova Plugin HMS Push

---

## Contents

  - [1. Introduction](#1-introduction)
  - [2. Installation Guide](#2-installation-guide)
  - [3. API Reference](#3-api-reference)
  - [4. Configuration and Description](#4-configuration-and-description)
  - [5. Sample Project](#5-sample-project)
  - [6. Questions or Issues](#6-questions-or-issues)
  - [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

**HUAWEI Push Kit** is a messaging service provided by Huawei. It establishes a messaging channel from the cloud to devices. By integrating Push Kit, you can send messages to your apps on users' devices in real time. This helps you maintain closer ties with users and increases user awareness and engagement with your apps. 

This module enables communication between HUAWEI Push Kit SDK and Cordova platform. It exposes all functionality provided by HUAWEI Push Kit SDK.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### Creating a Project in AppGallery Connect
Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

**Step 1.** Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html)  and select **My projects**.

**Step 2.** Select your project from the project list or create a new one by clicking the **Add Project** button.

**Step 3.** Go to **Project Setting** > **General information**, and click **Add app**.
If an app exists in the project and you need to add a new one, expand the app selection area on the top of the page and click **Add app**.

**Step 4.** On the **Add app** page, enter the app information, and click **OK**.

### Configuring the Signing Certificate Fingerprint

A signing certificate fingerprint is used to verify the authenticity of an app when it attempts to access an HMS Core (APK) through the HMS SDK. Before using the HMS Core (APK), you must locally generate a signing certificate fingerprint and configure it in the **AppGallery Connect**. You can refer to 3rd and 4th steps of [Generating a Signing Certificate](https://developer.huawei.com/consumer/en/codelab/HMSPreparation/index.html#2) codelab tutorial for the certificate generation. Perform the following steps after you have generated the certificate.

**Step 1:** Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html) and select your project from **My Projects**. Then go to **Project Setting** > **General information**. In the **App information** field, click the  icon next to SHA-256 certificate fingerprint, and enter the obtained **SHA-256 certificate fingerprint**.

**Step 2:**  After completing the configuration, click **OK** to save the changes. (Check mark icon)

### Cordova

1. Download the Cordova Push SDK Plugin.

2. Make sure widget id is same as your package name in config.xml. Otherwise demo project will not work properly.

3. Add Platform To Project.

     ***```cordova platform add android```***

4. You can either install the plugin through npm or by downloading from downloads page.

    a. Run the following command in the root directory of your Cordova project to install it through npm.

    ***```cordova plugin add @hmscore/cordova-plugin-hms-push```***
    
    b. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin.     
        ***```cordova plugin add <CORDOVA_PUSH_PLUGIN_PATH>```***
    
5. Check whether the Cordova Push SDK is successfully added to Plugin folder in the root directory of the Cordova project.

6. Download **agconnect-services.json** file from AppGallery Connect.

7. Add **agconnect-services.json** and **jks** file to root directory.

8. Add build.json file to your project's root. Add following code to build.json file and edit  build.json file according to your own keystore file.
    ```json
    {
        "android": {
            "debug": {
                "keystore": "./storeFile.jks",
                "storePassword": "storePassword",
                "alias": "keyAlias",
                "password": "keyPassword"
            },
            "release": {
                "keystore": "./storeFile.jks",
                "storePassword": "storePassword",
                "alias": "keyAlias",
                "password": "keyPassword"
            }
        }
    }
    ```

9. Then run the Cordova app 

     ***```cordova run android```***

### Ionic

1. Download the Cordova Push SDK Plugin through npm or by downloading from downloads page.

    a. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin. 
    
    ***```npm install <CORDOVA_PUSH_PLUGIN_PATH>```***
    
    b. Run the following command in the root directory of your Ionic project to install it through npm.
    ***`npm install @hmscore/cordova-plugin-hms-push`***
    
2. Check whether the Cordova Push SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project. <br>

    ***`npm install @ionic-native/core --save-dev`***

4. Copy the "ionic/dist/hms-push" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`*** 

    > ***NOTE*** <br>
    > where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Configure the Maven repository address and AppGallery Connect plug-in address for the AppGallery Connect SDK.
    1. Open the build.gradle file in the root directory under `android` folder.
    2. Go to allprojects > repositories and configure the Maven repository address for the AppGallery Connect SDK.
        ```gradle
        allprojects {  
            repositories {  
                google()  
                jcenter()  
                maven {url 'https://developer.huawei.com/repo/'}  
            }  
        }
        ```

    3. Go to buildscript > repositories and configure the Maven repository address for the AppGallery Connect SDK.

        ```gradle
        buildscript {  
            repositories {  
                google()  
                jcenter()  
                maven {url 'https://developer.huawei.com/repo/'}  
            }  
        }
        ```
     4. Go to buildscript > dependencies and configure the AppGallery Connect plug-in address.

        ```gradle
        buildscript {  
            dependencies {  
                classpath 'com.huawei.agconnect:agcp:1.4.1.300' 
            }  
        }
        ```
8. Add build dependencies and the AppGallery Connect plug-in address.

    1. Open the build.gradle file in the app directory.
    2. Add the AppGallery Connect plug-in dependency to the bottom of the file.
        ```gradle
        apply plugin: 'com.huawei.agconnect'
        ```
    3. Add signingConfig inside the android section
        ```gradle
        android{
            signingConfigs{
                config{
                    keyAlias 'keyAlias'
                    keyPassword 'keyPassword'
                    storeFile file('storeFile')
                    storePassword 'storePassword'
                }
            }
            buildTypes {
            debug {
                signingConfig signingConfigs.config
            }
            release {
                signingConfig signingConfigs.config
            }
        }
        ```

    4. Add the following code to dependencies.
        ```gradle
        dependencies {
            // other dependencies
            implementation "com.huawei.hms:push:5.0.2.300"
        }
        ```

9. Add agconnect-services.json and jks file to the app directory in your Android project.

10. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

11. Then run the Ionic app.
       ***`ionic capacitor run android`***


After this command, the demo will be opened android studio. Just run it.

---

## 3. API Reference

### **HmsPush**

#### Public Method Summary

| Method                                                       | Return Type       | Description                                                  |
| ------------------------------------------------------------ | ----------------- | ------------------------------------------------------------ |
| [init()](#hmspushinit)                                       | Promise\<void>    | Initialize to HUAWEI Push Kit.                               |
| [getToken(scope? : string)](#hmspushgettokenscope-string)    | Promise\<string>  | Obtains a token required for accessing HUAWEI Push Kit.      |
| [getId()](#hmspushgetid)                                     | Promise\<string>  | Obtains an AAID in synchronous mode.                         |
| [getAAID()](#hmspushgetaaid)                                 | Promise\<string>  | Obtains an AAID in asynchronous mode.                        |
| [getCreationTime()](#hmspushgetcreationtime)                 | Promise\<string>  | Obtains the generation timestamp of an AAID.                 |
| [deleteAAID()](#hmspushdeleteaaid)                           | Promise\<boolean> | Deletes a local AAID and its generation timestamp.           |
| [deleteToken(scope? : string)](#hmspushdeletetokenscope-string) | Promise\<boolean> | Deletes a token.                                             |
| [isAutoInitEnabled()](#hmspushisautoinitenabled)             | Promise\<boolean> | Checks whether automatic initialization is enabled.          |
| [setAutoInitEnabled(enabled : boolean)](#hmspushsetautoinitenabledenabled-boolean) | Promise\<boolean> | Determines whether to enable automatic initialization.       |
| [turnOnPush()](#hmspushturnonpush)                           | Promise\<boolean> | Enables the function of receiving notification messages in asynchronous mode. |
| [turnOffPush()](#hmspushturnoffpush)                         | Promise\<boolean> | Disables the function of receiving notification messages in asynchronous mode. |
| [subscribe(topic : string)](#hmspushsubscribetopic-string)   | Promise\<boolean> | Subscribes to topics in asynchronous mode.                   |
| [unsubscribe(topic : string)](#hmspushunsubscribetopic-string) | Promise\<boolean> | Unsubscribes from topics in asynchronous mode.               |
| [sendRemoteMessage(remoteMessage : RemoteMessageBuilder)](#hmspushsendremotemessageremotemessage-remotemessagebuilder) | Promise\<boolean> | Sends an uplink message to the app server.                   |
| [getInitialNotification()](#hmspushgetinitialnotification)   | Promise\<object>  | Obtains the object that includes "remoteMessage", "extras" and "uriPage" of the notification tapped to open an app. |
| [setBackgroundAction((remoteMessage) => {})](#hmspushsetbackgroundactionremotemessage-) | Promise\<boolean> | Set a data message handler function which is called when the app is in the killed application state |
| [removeBackgroundAction()](#hmspushremovebackgroundaction)   | Promise\<boolean> | Remove data message handler function which is called when the app is in the  killed application state. |
| [getOdid()](#hmspushgetodid)                                 | Promise\<string>  | Obtains an Odid in asynchronous mode.                        |
| [enableLogger()](#hmspushenablelogger)                       | Promise\<boolean> | This method enables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality. |
| [disableLogger()](#hmspushdisablelogger)                     | Promise\<boolean> | This method disables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality. |

#### Public Methods

##### HmsPush.init()
This method is used to initialize the Push plugin. It must called when application started.

###### Call Example
```javascript
HmsPush.init()
```
##### HmsPush.getId()

This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.


###### Call Example

```javascript
  HmsPush.getId()
    .then((result) => console.log("getId", result))
    .catch((error) => console.log("getId", error));
```

###### Example Response

```js
"f5bffbff-d6dc-0c81-9dff-xxxxxxxxxxxx"
```

##### HmsPush.getAAID()

This method is used to obtain an AAID in asynchronous mode.


###### Call Example

```javascript
  HmsPush.getAAID()
    .then((result) => console.log("getAAID", result))
    .catch((error) => console.log("getAAID", error));
```

###### Example Response

```js
"f5bffbff-d6dc-0c81-9dff-xxxxxxxxxxxx"
```

##### HmsPush.getCreationTime()

This method is used to obtain the generation timestamp of an AAID.


###### Call Example

```javascript
  HmsPush.getCreationTime()
    .then((result) => console.log("getCreationTime", result))
    .catch((error) => console.log("getCreationTime", error));
```

###### Example Response

```js
"1602526461590"
```

##### HmsPush.deleteAAID()

This method is used to delete a local AAID and its generation timestamp.

###### Call Example

```javascript
  HmsPush.deleteAAID()
    .then((result) => console.log("deleteAAID", result))
    .catch((error) => console.log("deleteAAID", error));
```

###### Example Response

```js
true
```

##### HmsPush.getToken(scope? : string)

This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| scope?    | Authorization scope. If you do not use scope parameter , default scope value will be "HCM" |

###### Call Example

```javascript
  HmsPush.getToken()
    .then((result) => console.log("getToken", result))
    .catch((error) => console.log("getToken", error));
```

###### Example Response

```js
"APv6RrcA51gbORKIXKO2xpyKOLCjCrlOib_cS-xxxxxxxxx"
```

##### HmsPush.deleteToken(scope? : string)

This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| scope?    | Authorization scope. If you do not use scope parameter , default scope value will be "HCM" |

###### Call Example

```javascript
  HmsPush.deleteToken()
    .then((result) => console.log("deleteToken", result))
    .catch((error) => console.log("deleteToken", error));
```

###### Example Response

```js
true
```

##### HmsPush.isAutoInitEnabled()

Checks whether automatic initialization is enabled.


###### Call Example

```javascript
  HmsPush.isAutoInitEnabled()
    .then((result) => console.log("isAutoInitEnabled", result))
    .catch((error) => console.log("isAutoInitEnabled", error));
```

###### Example Response

```js
true
```

##### HmsPush.setAutoInitEnabled(enabled : boolean)

This method is used to determine whether to enable automatic initialization. If this parameter is set to **true**, the SDK automatically generates an AAID and applies for a token.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| enabled    | Indicates whether to enable automatic initialization. The value true indicates yes and false indicates no. |

###### Call Example

```javascript
  HmsPush.setAutoInitEnabled(true)
    .then((result) => console.log("enableAutoInit", result))
    .catch((error) => console.log("enableAutoInit", error));
```

###### Example Response
```js
true
```

##### HmsPush.subscribe(topic : string)

This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| topic      | Topic to be subscribed to. The value must match the following regular expression: [\u4e00-\u9fa5\w-_.~%]{1,900}. |

###### Call Example

```javascript
  HmsPush.subscribe(topic)
    .then((result) => console.log("subscribe", result))
    .catch((error) => console.log("subscribe", error));
```

###### Example Response

```js
true
```

##### HmsPush.unsubscribe(topic : string)

This method is used to unsubscribe from topics that are subscribed to through the subscribe method.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| topic      | Topic to be subscribed to. The value must match the following regular expression: [\u4e00-\u9fa5\w-_.~%]{1,900}. |

###### Call Example

```javascript
  HmsPush.unsubscribe(topic)
    .then((result) => console.log("unsubscribe", result))
    .catch((error) => console.log("unsubscribe", error));
```

###### Example Response

```js
true
```

##### HmsPush.turnOnPush()

This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable data messaging.

###### Call Example

```javascript
  HmsPush.turnOnPush()
    .then((result) => console.log("turnOnPush", result))
    .catch((error) => console.log("turnOnPush", error));
```

###### Example Response

```js
true
```

##### HmsPush.turnOffPush()

This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable data messaging.


###### Call Example

```javascript
  HmsPush.turnOffPush()
    .then((result) => console.log("turnOffPush", result))
    .catch((error) => console.log("turnOffPush", error));
```

###### Example Response

```js
true
```

##### HmsPush.sendRemoteMessage(remoteMessage : RemoteMessageBuilder)

Sends an uplink message to the application server.

###### Parameters

| Name       | Type |  Description                          |
|------------|------|---------------------------------------|
| remoteMessage | [RemoteMessageBuilder](#RemoteMessageBuilder) |Remote message to be sent to the application server |

###### Call Example

```javascript
  HmsPush.sendRemoteMessage({
    [HmsPush.RemoteMessageBuilder.TO]: "",
    //[RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
    [HmsPush.RemoteMessageBuilder.MESSAGE_TYPE]: "hms",
    [HmsPush.RemoteMessageBuilder.COLLAPSE_KEY]: "-1",
    [HmsPush.RemoteMessageBuilder.TTL]: 120,
    [HmsPush.RemoteMessageBuilder.RECEIPT_MODE]: 1,
    [HmsPush.RemoteMessageBuilder.SEND_MODE]: 1,
    [HmsPush.RemoteMessageBuilder.DATA]: {
      key1: "test",
      message: "huawei-test",
    },
  })
    .then((result) => console.log("sendRemoteMessage", result))
    .catch((error) => console.log("sendRemoteMessage", error));
```

###### Example Response

```js
true
```

##### HmsPush.getInitialNotification()

Obtains the object that includes "remoteMessage", "extras" and "uriPage" of the notification tapped to open an app. If the app is not opened by a notification, it returns null.

###### Call Example

```javascript
  HmsPush.getInitialNotification()
    .then((result) => console.log("getInitialNotification",result))
    .catch((error) => console.log("getInitialNotification", error));
```

###### Example Response

```js
{
    extras: {
        _push_cmd_type: "cosa",
        _push_msgid: "-1744601771",
        _push_notifyid: 1218295586,
        KEY1: "VALUE1"
    },
    remoteMessage: {
        Link: "null",
        NotifyId: "0",
        contents: "0",
        ttl: "86400",
        isDefaultSound: "true",
        ...
    },
    uriPage: "app://app2"
}
```

##### HmsPush.setBackgroundAction((remoteMessage) => {})

Set a data message handler function which is called when the app is in the  killed application state.

###### Call Example

```javascript
HmsPush.setBackgroundAction((remoteMessage) => {
        const jsonData = JSON.parse(remoteMessage.data);
        const headlessNotification = {
            "title": "[Headless] " + jsonData.title,
            "message": jsonData.message.replace("{{name}}", "YourName")
        };
        const notification = JSON.stringify(headlessNotification);
        HmsLocalNotification.backgroundLocalNotification(notification);
    })
    .then((result) =>
        defaultSuccessHandler("setBackgroundAction", result)
    )
    .catch((error) =>
        defaultExceptionHandler("setBackgroundAction", error)
    ); 
```

##### HmsPush.removeBackgroundAction()

Remove data message handler function which is called when the app is in the  killed application state.

###### Call Example

```javascript
HmsPush.removeBackgroundAction()
    .then((result) =>
        defaultSuccessHandler("removeBackgroundAction", result)
    )
    .catch((error) =>
        defaultExceptionHandler("removeBackgroundAction", error)
    );
```



##### HmsPush.getOdid()

This method is used to obtain an Odid in asynchronous mode.


###### Call Example

```javascript
  HmsPush.getOdid()
    .then((result) => console.log("getOdid", result))
    .catch((error) => console.log("getOdid", error));
```
###### Example Response

```js
"fe575edb-fd73-79bd-6dfb-xxxxxxxxxxxx"
```

##### HmsPush.enableLogger()

Enables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality.

###### Call Example

```javascript
  HmsPush.enableLogger()
    .then((result) => console.log("enableLogger", result))
    .catch((error) => console.log("enableLogger", error));
```

###### Example Response

```js
true
```

##### HmsPush.disableLogger()

Disables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality.

###### Call Example

```javascript
  HmsPush.disableLogger()
    .then((result) => console.log("disableLogger", result))
    .catch((error) => console.log("disableLogger", error));
```

###### Example Response

```js
true
```

### **HmsLocalNotification**

#### Public Method Summary

| Method                                                    | Return Type  | Description                          |
|-----------------------------------------------------------|--------------|--------------------------------------|
| [localNotification(notification : object)](#hmslocalnotificationlocalnotificationnotification-object) | Promise\<object>    | Pushes a local notification instantly. |
| [localNotificationSchedule(notification : object)](#hmslocalnotificationlocalnotificationschedulenotification-object) | Promise\<object>    | Schedules a local notification to be pushed at a further time. |
| [cancelAllNotifications()](#hmslocalnotificationcancelallnotifications) | Promise\<boolean>  | Cancels all pending scheduled notifications and the ones registered in the notification manager. |
| [cancelNotifications()](#hmslocalnotificationcancelnotifications) | Promise\<boolean>   | Cancels all pending notifications registered in the notification manager. |
| [cancelScheduledNotifications()](#hmslocalnotificationcancelschedulednotifications) | Promise\<boolean>   | Cancels all pending scheduled notifications. |
| [cancelNotificationsWithId(idArr : object[])](#hmslocalnotificationcancelnotificationswithididarr-object) | Promise\<boolean>   | Cancels all pending notifications by an array of IDs. |
| [cancelNotificationsWithIdTag(idTagArr : object[])](#hmslocalnotificationcancelnotificationswithidtagidtagarr-object) | Promise\<boolean>   | Cancels all pending notifications by an array of objects encapsulating the fields "**Id**" and "**tag**", both of the field values are strings. |
| [cancelNotificationsWithTag(tag : string)](#hmslocalnotificationcancelnotificationswithtagtag-string) | Promise\<boolean>   | Cancel a notifcation with tag. |
| [getNotifications()](#hmslocalnotificationgetnotifications) | Promise\<object[]> | Returns an array of all notifications. |
| [getScheduledNotifications()](#hmslocalnotificationgetschedulednotifications) | Promise\<object[]> | Returns an array of all pending scheduled notifications. |
| [getChannels()](#hmslocalnotificationgetchannels) | Promise<string[]>  | Returns a string array of all notification channels. |
| [channelExists(channelid : string)](#hmslocalnotificationchannelexistschannelid-string) | Promise\<boolean>          | Checks whether automatic initialization is enabled. |
| [channelBlocked(channelid : string)](#hmslocalnotificationchannelblockedchannelid-string) | Promise\<boolean>          | Returns true if the notification channel with the specified ID is blocked |
| [deleteChannel(channelid : string)](#hmslocalnotificationdeletechannelchannelid-string) | Promise\<boolean>   | Deletes the notification channel with specified ID. |



##### HmsLocalNotification.localNotification(notification : object)
Pushes a local notification instantly.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| notification | Local notification object to be pushed, refer **HmsLocalNotification.Attr** |

###### Call Example

```javascript
 HmsLocalNotification.localNotification(
      {
        [HmsLocalNotification.Attr.title]: 'Notification Title',
        [HmsLocalNotification.Attr.message]: 'Notification Message', // (required)
        [HmsLocalNotification.Attr.title]: "HMS Push",
        [HmsLocalNotification.Attr.message]: "This is Local Notification",
        [HmsLocalNotification.Attr.bigText]: "This is a bigText",
        [HmsLocalNotification.Attr.subText]: "This is a bigText",
        [HmsLocalNotification.Attr.tag]: "push-tag",
        [HmsLocalNotification.Attr.largeIcon]: 'ic_launcher',
        [HmsLocalNotification.Attr.smallIcon]: 'ic_notification',
        [HmsLocalNotification.Attr.bigText]: 'This is a bigText',
        [HmsLocalNotification.Attr.subText]: 'This is a subText',
        [HmsLocalNotification.Attr.importance]: HmsLocalNotification.Importance.max,
      })
      .then((result) => console.log("localNotification", result))
      .catch((error) => console.log("localNotification", error));
```

###### Example Response

```js
{
    action: "No",
    actions: "["Yes", "No"]",
    autoCancel: true,
    bigText: "This is a bigText",
    color: "white",
    dontNotifyInForeground: false,
    groupSummary: false,
    id: "279690461",
    importance: "max",
    invokeApp: false,
    largeIcon: "ic_launcher",
    message: "This is Local Notification",
    ongoing: false,
    showWhen: true,
    smallIcon: "ic_notification",
    subText: "This is a subText",
    ticker: "Optional Ticker",
    title: "HMSPush",
    vibrate: false,
    vibrateDuration: 1000
}
```

##### HmsLocalNotification.localNotificationSchedule(notification : object)

Schedules a local notification to be pushed at a further time.

###### Parameters

| Name       |  Description                          |
|------------|---------------------------------------|
| notification | Local notification object to be pushed, refer **HmsLocalNotification.Attr** |

###### Call Example

```javascript
  HmsLocalNotification.localNotificationSchedule(
        {
          [HmsLocalNotification.Attr.title]: 'Notification Title',
          [HmsLocalNotification.Attr.message]: 'Notification Message', // (required)
          [HmsLocalNotification.Attr.fireDate]: new Date( Date.now() + 60 * 1000).getTime(), // in 1 min
          [HmsLocalNotification.Attr.title]: "HMS Push",
          [HmsLocalNotification.Attr.message]: "This is Local Notification",
          [HmsLocalNotification.Attr.bigText]: "This is a bigText",
          [HmsLocalNotification.Attr.subText]: "This is a bigText",
          [HmsLocalNotification.Attr.tag]: "push-tag",
          [HmsLocalNotification.Attr.largeIcon]: 'ic_launcher',
          [HmsLocalNotification.Attr.smallIcon]: 'ic_notification',
          [HmsLocalNotification.Attr.bigText]: 'This is a bigText',
          [HmsLocalNotification.Attr.subText]: 'This is a subText',
          [HmsLocalNotification.Attr.importance]: HmsLocalNotification.Importance.MAX,
        })
        .then((result) => console.log("localNotificationSchedule", result))
        .catch((error) => console.log("localNotificationSchedule", error));
```

###### Example Response

```js
{
  	actions: "["Yes", "No"]",
    allowWhileIdle: true,
    autoCancel: true,
    bigText: "This is a bigText",
    color: "white",
    dontNotifyInForeground: false,
    fireDate: 1602529801591,
    groupSummary: false,
    id: "100506716",
    importance: "max",
    invokeApp: false,
    largeIcon: "ic_launcher",
    message: "This is Local Notification",
    ongoing: false,
    showWhen: true,
    smallIcon: "ic_notification",
    subText: "This is a subText",
    ticker: "Optional Ticker",
    title: "HMSPush",
    vibrate: false,
    vibrateDuration: 1000
}
```

##### HmsLocalNotification.cancelAllNotifications()

Cancels all pending scheduled notifications and the ones registered in the notification manager.

###### Call Example

```javascript
 HmsLocalNotification.cancelAllNotifications()
    .then((result) => console.log("cancelAllNotifications", result))
    .catch((error) => console.log("cancelAllNotifications", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.cancelNotifications()

Cancels all pending notifications registered in the notification manager.

###### Call Example

```javascript
 HmsLocalNotification.cancelNotifications()
    .then((result) => console.log("cancelNotifications", result))
    .catch((error) => console.log("cancelNotifications", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.cancelScheduledNotifications()

Cancels all pending scheduled notifications.

###### Call Example

```javascript
    HmsLocalNotification.cancelScheduledNotifications()
      .then((result) => console.log("cancelScheduledNotifications", result))
      .catch((error) => console.log("cancelScheduledNotifications", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.cancelNotificationsWithId(idArr : object[])

Cancels all pending notifications by an array of IDs.

###### Call Example

```javascript
  HmsLocalNotification.cancelNotificationsWithId(["13","14"])
    .then((result) => console.log("cancelNotificationsWithId", result))
    .catch((error) => console.log("cancelNotificationsWithId", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.cancelNotificationsWithIdTag(idTagArr : object[])

Cancels all pending notifications by an array of objects encapsulating the fields "**Id**" and "**tag**", both of the field values are strings.

###### Call Example

```javascript
  HmsLocalNotification.cancelNotificationsWithIdTag([{id:"13",tag:"some-tag"},{id:"14",tag:"some-tag"}])
    .then((result) => console.log("cancelNotificationsWithIdTag", result))
    .catch((error) => console.log("cancelNotificationsWithIdTag", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.cancelNotificationsWithTag(tag : string)

Cancel a notifications with tag.

###### Call Example

```javascript
  HmsLocalNotification.cancelNotificationsWithTag('tag')
    .then((result) => console.log("cancelNotificationsWithTag", result))
    .catch((error) => console.log("cancelNotificationsWithTag", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.getNotifications()

Returns an array of all notifications.

###### Call Example

```javascript
 HmsLocalNotification.getNotifications()
   .then((result) => console.log("getNotifications", result))
   .catch((error) => console.log("getNotifications", error));
```

###### Example Response

```js
{
    body: "This is Local Notification",
    statusBarNotificationId: "-2005306437",
    title: "HMSPush"
}
```

##### HmsLocalNotification.getScheduledNotifications()

Returns a list of all pending scheduled notifications.

###### Call Example

```javascript
  HmsLocalNotification.getScheduledNotifications()
      .then((result) => console.log("getScheduledNotifications", result))
      .catch((error) => console.log("getScheduledNotifications", error));
```

###### Example Response

```js
[
    {
        date: 1602530039952,
        id: "-794349432",
        message: "This is Local Notification",
        ticker: "Optional Ticker",
        title: "HMSPush"
	},
    ...
]
```

##### HmsLocalNotification.getChannels()

Returns a string array of all notification channels.

###### Call Example

```javascript
    HmsLocalNotification.getChannels()
      .then((result) => console.log("getChannels", result))
      .catch((error) => console.log("getChannels", error));
```

###### Example Response

```js
[
    "huawei-hms-cordova-push-channel-id-4-default-5000",
    "huawei-hms-cordova-push-channel-id-4-default",
    "huawei-hms-cordova-push-channel-id-4"
]
```

##### HmsLocalNotification.channelExists(channelid : string)

Returns true if the notification channel with the specified ID is exists.

###### Call Example

```javascript
  HmsLocalNotification.channelExists("huawei-hms-cordova-push-channel-id")
    .then((result) => console.log("channelExists", result))
    .catch((error) => console.log("channelExists", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.channelBlocked(channelid : string)

Returns true if the notification channel with the specified ID is blocked.

###### Call Example

```javascript
  HmsLocalNotification.channelBlocked("huawei-hms-cordova-push-channel-id")
    .then((result) => console.log("channelBlocked", result))
    .catch((error) => console.log("channelBlocked", error));
```

###### Example Response

```js
true
```

##### HmsLocalNotification.deleteChannel(channelid : string)

Deletes the notification channel with specified ID.

###### Call Example

```javascript
  HmsLocalNotification.deleteChannel("huawei-hms-cordova-push-channel-id")
    .then((result) => console.log("deleteChannel", result))
    .catch((error) => console.log("deleteChannel", error));
```

###### Example Response

```js
true
```

#### HmsLocalNotification.Attr

This object contains the field names for local notifications attributes. These fields are used to construct local notification messages.

| Name                                           | Key                    | Type                            | Description                                                  |
| ---------------------------------------------- | ---------------------- | ------------------------------- | ------------------------------------------------------------ |
| HmsLocalNotification.Attr.id                   | "id"                   | string                          | An identifier for the notification message to be pushed.     |
| HmsLocalNotification.Attr.message              | "message"              | string                          | The message (second row) of the notification                 |
| HmsLocalNotification.Attr.fireDate             | "fireDate"             | Date                            | The time at which the notification will be posted.           |
| HmsLocalNotification.Attr.title                | "title"                | string                          | The title (first row) of the notification                    |
| HmsLocalNotification.Attr.ticker               | "ticker"               | string                          | The ticker of the notification which is sent to the accessibility services |
| HmsLocalNotification.Attr.autoCancel           | "autoCancel"           | boolean                         | If true, the notification is dismissed on click.             |
| HmsLocalNotification.Attr.largeIcon            | "largeIcon"            | string                          | The name of the file to be set as the large icon for notification |
| HmsLocalNotification.Attr.largeIconUrl         | "largeIconUrl"         | string                          | URL of the image to be set as the large icon for the notification to be pushed. |
| HmsLocalNotification.Attr.smallIcon            | "smallIcon"            | string                          | The name of the file to be set as the small icon for notification |
| HmsLocalNotification.Attr.bigText              | "bigText"              | string                          | The longer text to be displayed in the big form of the template |
| HmsLocalNotification.Attr.subText              | "subText"              | string                          | Additional information to be displayed in notification       |
| HmsLocalNotification.Attr.bigPictureUrl        | "bigPictureUrl"        | string                          | URL of the image to be set as the big picture for the notification to be pushed. |
| HmsLocalNotification.Attr.shortcutId           | "shortcutId"           | string                          | If the notification is duplicative of a launcher shortcut, sets the case the Launcher wants to hide the shortcut. |
| HmsLocalNotification.Attr.number               | "number"               | number                          | Sets the number of items this notification represents. Launchers that support badging may display it as a badge. |
| HmsLocalNotification.Attr.channelId            | "channelId"            | string                          | The id of the notification channel for the notification to be pushed |
| HmsLocalNotification.Attr.channelName          | "channelName"          | string                          | Name of the channel to be created for the notification to be pushed |
| HmsLocalNotification.Attr.channelDescription   | "channelDescription"   | string                          | Description for the channel to be created for the notification to be pushed. |
| HmsLocalNotification.Attr.color                | "color"                | string                          | The notification color in #RRGGBB or #AARRGGBB formats or string like 'white' |
| HmsLocalNotification.Attr.group                | "group"                | string                          | The notification group, the notifications in the same group are displayed in a stacked way, if the device used supports such rendering. |
| HmsLocalNotification.Attr.groupSummary         | "groupSummary"         | boolean                         | If true, this notification is included in the specified group. |
| HmsLocalNotification.Attr.playSound            | "playSound"            | boolean                         | If true, the specified sound will be played when a notifcation message is pushed. |
| HmsLocalNotification.Attr.soundName            | "soundName"            | string                          | Name of the sound file in the raw folder to be played, when a notification message is pushed. |
| HmsLocalNotification.Attr.vibrate              | "vibrate"              | boolean                         | Turn on or off the vibration when a notification message a notification message is pushed. |
| HmsLocalNotification.Attr.vibrateDuration      | "vibrateDuration"      | number                          | The duration of the vibration when a notification message is pushed |
| HmsLocalNotification.Attr.actions              | "actions"              | string[]                        | Adds action(s) to the notification to be pushed, actions are displayed as buttons adjacent notification content. |
| HmsLocalNotification.Attr.invokeApp            | "invokeApp"            | boolean                         | If true, the app pushed the notification is invoked when a pushed notification is clicked. |
| HmsLocalNotification.Attr.tag                  | "tag"                  | string                          | A tag for the notification to be set for identification      |
| HmsLocalNotification.Attr.repeatType           | "repeatType"           | HmsLocalNotification.RepeatType | The time to repeat pushing for a scheduled notification.     |
| HmsLocalNotification.Attr.repeatTime           | "repeatTime"           | number                          | The Time in milliseconds to repeat pushing the next scheduled notification message. |
| HmsLocalNotification.Attr.ongoing              | "ongoing"              | boolean                         | If true, the notification to be pushed will be an ongoing notification, which can't be cancelled by the user by a swipe and the app must handle the cancelling. |
| HmsLocalNotification.Attr.allowWhileIdle       | "allowWhileIdle"       | boolean                         | If true, a scheduled notification message can be pushed even when the device is in low-power idle mode. |
| HmsLocalNotification.Attr.dontNotifyForeground | "dontNotifyForeground" | boolean                         | If true, the a notification won't be pushed when the app is in foreground. |
| HmsLocalNotification.Attr.priority             | "priority"             | HmsLocalNotification.Priority   | The priority for the notification to be pushed.              |
| HmsLocalNotification.Attr.importance           | "importance"           | HmsLocalNotification.Importance | The importance for the notification to be pushed             |
| HmsLocalNotification.Attr.visibility           | "visibility"           | HmsLocalNotification.Visibility | The visibility of the notification to be pushed              |


#### HmsLocalNotification.Priority

This object contains the values for the local notification priority.

| Name                                  | Description                                        |
| ------------------------------------- | -------------------------------------------------- |
| HmsLocalNotification.Priority.MAX     | Max priority for the notification to be pushed     |
| HmsLocalNotification.Priority.HIGH    | High priority for the notification to be pushed    |
| HmsLocalNotification.Priority.DEFAULT | Default priority for the notification to be pushed |
| HmsLocalNotification.Priority.LOW     | Low priority for the notification to be pushed     |
| HmsLocalNotification.Priority.MIN     | Min priority for the notification to be pushed     |

#### HmsLocalNotification.Visibility

This object contains the values for the local notification visibility.

| Name                                    | Description                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| HmsLocalNotification.Visibility.PUBLIC  | When set, the notification is shown entirely in all lock screens. |
| HmsLocalNotification.Visibility.SECRET  | When set, the notification is hidden entirely in secure lock screens. |
| HmsLocalNotification.Visibility.PRIVATE | When set, the notification is shown entirely in all lock screens, but the private information is hidden in secure lock screens. |

#### HmsLocalNotification.Importance

This object contains the values for the local notification importance.

| Name                                        | Description                                                  |
| ------------------------------------------- | ------------------------------------------------------------ |
| HmsLocalNotification.Importance.MAX         | When set, the notification is pushed from the channel with max importance. |
| HmsLocalNotification.Importance.HIGH        | When set, the notification is pushed from the channel with high importance. |
| HmsLocalNotification.Importance.DEFAULT     | When set, the notification is pushed from the channel with default importance. |
| HmsLocalNotification.Importance.LOW         | When set, the notification is pushed from the channel with low importance. |
| HmsLocalNotification.Importance.MIN         | When set, the notification is pushed from the channel with min importance. |
| HmsLocalNotification.Importance.NONE        | When set, the notification is pushed from the channel with none importance. |
| HmsLocalNotification.Importance.UNSPECIFIED | When set, the notification is pushed from the channel with unspecified importance. |


#### HmsLocalNotification.RepeatType

This object contains the repeat types (repeat periods) of the scheduled messages to be sent.

| Name                                       | Description |
| ------------------------------------------ | ----------- |
| HmsLocalNotification.RepeatType.HOUR       | 1 Hour      |
| HmsLocalNotification.RepeatType.MINUTE     | 1 Minute    |
| HmsLocalNotification.RepeatType.DAY        | 1 Day       |
| HmsLocalNotification.RepeatType.WEEK       | 1 Week      |
| HmsLocalNotification.RepeatType.CUSTOMTIME | Custom Time |



### **RemoteMessageBuilder**

Contains the fields required to construct remote messages to be sent as uplink messages.

#### Fields

| Name                                      | Description                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| HmsPush.RemoteMessageBuilder.TO           | For an uplink message, default value is **push.hcm.upstream**. |
| HmsPush.RemoteMessageBuilder.MESSAGE_ID   | Message ID, which is generated by an app and is unique for each message. |
| HmsPush.RemoteMessageBuilder.MESSAGE_TYPE | The message type is transparently transmitted by the SDK.    |
| HmsPush.RemoteMessageBuilder.TTL          | Maximum cache duration of an offline message set for HUAWEI Push Kit, in seconds. The duration can be set to 15 days at most. The value of the input parameter ttl must be within the range [1,1296000] |
| HmsPush.RemoteMessageBuilder.COLLAPSE_KEY | Sets the maximum cache duration of a message, in seconds. If you set to **-1**, all offline messages of the app are sent to the user after the user's device goes online. If you set 0, offline messages of the app sent to the user are determined by the default policy of HUAWEI Push Kit. Generally, only the latest offline message is sent to the user after the user's device goes online. You can set a value ranging from 1 to 100 to group messages. For example, if you send 10 messages and set collapse_key to 1 for the first five messages and to 2 for the rest, the latest offline message whose value is 1 and the latest offline message whose value is 2 are sent to the user after the user's device goes online. |
| HmsPush.RemoteMessageBuilder.RECEIPT_MODE | The value can be 0 or 1. The value 1 indicates that the receipt capability is enabled after messages are sent. That is, if an uplink message sent by the app is successfully sent to the app server, the server will respond and send a receipt to the app through the **onPushMessageSentDelivered** event. |
| HmsPush.RemoteMessageBuilder.SEND_MODE    | Sets whether to enable the message cache and resending capability of the Push Kit client. If this parameter is not set, messages cannot be cached or resent. For example, when the network is unavailable, messages are directly discarded. The value can be 0 or 1. The value 1 indicates that the cache and resending capability is enabled. |
| HmsPush.RemoteMessageBuilder.DATA         | Sets key-value pair data to a message.                       |

###### Call Example

```javascript
await HmsLocalNotification.sendRemoteMessage({
    [HmsPush.RemoteMessageBuilder.TO]: '',
    //[RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
    [HmsPush.RemoteMessageBuilder.MESSAGE_TYPE]: 'hms',
    [HmsPush.RemoteMessageBuilder.COLLAPSE_KEY]: '-1',
    [HmsPush.RemoteMessageBuilder.TTL]: 120,
    [HmsPush.RemoteMessageBuilder.RECEIPT_MODE]: 1,
    [HmsPush.RemoteMessageBuilder.SEND_MODE]: 1,
    [HmsPush.RemoteMessageBuilder.DATA]: {
        key1: 'test',
        message: 'huawei-test'
    },
});
```

### **CordovaRemoteMessage**

Represents a message entity class encapsulated using JavaScript. You can use the get methods in this class to receive data messages that are obtained. This class maps the native class RemoteMessage of the Android Push SDK.

#### Fields

| Name             | Value  | Description                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| PRIORITY_UNKNOWN | 0      | Unknown priority.                                          |
| PRIORITY_HIGH    | 1      | High priority.                                             |
| PRIORITY_NORMAL  | 2      | Normal priority.                                           |
| COLLAPSEKEY      | string | The classification identifier (collapse key) of a message. |
| DATA             | string | The payload of a message.                                  |
| DATAOFMAP        | string | The payload of a Map message.                              |
| MESSAGEID        | string | The ID of a message.                                       |
| MESSAGETYPE      | string | The type of a message                                      |
| ORIGINALURGENCY  | string | The message priority set by the App.                       |
| URGENCY          | string | The message priority set on the HUAWEI Push Kit server.    |
| TTL              | string | The maximum cache duration of a message.                   |
| SENTTIME         | string | The time when a message is sent from the server.           |
| TO               | string | The recipient of a message.                                |
| FROM             | string | The source of a message.                                   |
| TOKEN            | string | The token in a message.                                    |

#### Public Method Summary

| Method                     | Return Type | Description                                                  |
| -------------------------- | ----------- | ------------------------------------------------------------ |
| getCollapseKey()           | string      | This method is used to obtain the classification identifier (collapse key) of a message. |
| getData()                  | string      | This method is used to obtain the payload of a message. Data obtained using the getData method is of the String type instead of the Map type of Java. You can determine the parsing rule of the data format. If data in the key-value format is transferred on the HUAWEI Push console, the data is converted into a JSON string and needs to be parsed. If data transmitted through HUAWEI Push is of high sensitivity and confidentiality, it is recommended that the message body be encrypted and decrypted by yourselves for security. |
| getDataOfMap()             | object      | This method is used to obtain the payload of a Map message. Different from the getData method, this method directly returns a Map data instance or null (indicating an empty Map data instance). |
| getMessageId()             | string      | This method is used to obtain the ID of a message.           |
| getMessageType()           | string      | This method is used to obtain the type of a message.         |
| getOriginalUrgency()       | number      | This method is used to obtain the message priority set by the app when it sends a message through an API of the HUAWEI Push Kit server. |
| getUrgency()               | number      | This method is used to obtain the message priority set on the HUAWEI Push Kit server. |
| getTtl()                   | number      | This method is used to obtain the maximum cache duration (in seconds) of a message. For a downstream message, the value of ttl in the AndroidConfig structure is returned. |
| getSentTime()              | number      | This method is used to obtain the time (in milliseconds) when a message is sent from the server. |
| getTo()                    | string      | This method is used to obtain the recipient of a message.    |
| getFrom()                  | string      | This method is used to obtain the source of a message. The value returned is the same as that set in the message body on the HUAWEI Push Kit server. |
| getToken()                 | string      | This method is used to obtain the token in a message.        |
| getNotificationTitle()     | string      | This method is used to obtain the title of a message.        |
| getTitleLocalizationKey()  | string      | This method is used to obtain the key of the localized title of a notification message for message display localization. To implement localization for notification messages, the key must be consistent with the node name defined in the strings.xml file of the app. |
| getTitleLocalizationArgs() | object      | This method is used to obtain variable string values in the localized title of a notification message. It must be used together with the getTitleLocalizationKey method. The key obtained by the getTitleLocalizationKey() method must be the same as the node name in the strings.xml file of the app, and the number of variable string values obtained by the getTitleLocalizationArgs method cannot be smaller than the number of placeholders in the value mapping the key in the strings.xml file. |
| getBodyLocalizationKey()   | string      | This method is used to obtain the key of the localized content of a notification message for message display localization. To implement localization for notification messages, the key must be consistent with the node name defined in the strings.xml file of the app. |
| getBodyLocalizationArgs()  | object      | This method is used to obtain variable string values in the localized content of a message. It must be used together with the getBodyLocalizationKey method. The key obtained by the getBodyLocalizationKey() method must be the same as the node name in the strings.xml file of the app, and the number of variable string values obtained by the getBodyLocalizationArgs method cannot be smaller than the number of placeholders in the value mapping the key in the strings.xml file. |
| getBody()                  | string      | This method is used to obtain the displayed content of a message. |
| getIcon()                  | string      | This method is used to obtain the image resource name of a notification icon. On an Android device, all icon files are stored in the /res/raw/** directory of the app. |
| getSound()                 | string      | This method is used to obtain the name of an audio resource to be played when a notification message is displayed. On an Android device, all audio files are stored in the /res/raw/** directory of the app. If no audio resource is set, set this parameter to null. |
| getTag()                   | string      | This method is used to obtain the tag from a message for message overwriting. A message will be overwritten by another message with the same tag but is sent later. |
| getColor()                 | string      | This method is used to obtain the colors (in #RRGGBB format) of icons in a message. |
| getClickAction()           | string      | This method is used to obtain the action triggered upon notification message tapping. If no action is specified, null is returned. |
| getChannelId()             | string      | This method is used to obtain IDs of channels that support the display of a message. If no channel is set, null is returned. |
| getImageUrl()              | object      | This method is used to obtain the URL of an image in a message. The image URL must be a URL that can be accessed from the public network. |
| getLink()                  | object      | This method is used to obtain the deep link from a message. A deep link is a specific URL, such as the URL of a web page or rich media. If no URL is set, null is returned. |
| getNotifyId()              | number      | This method is used to obtain the unique ID of a message. Different messages can have the same value of NotifyId, so that new messages can overwrite old messages. |
| isDefaultLight()           | boolean     | This method is used to check whether a notification message uses the default notification light settings. |
| isDefaultSound()           | boolean     | This method is used to check whether a notification message uses the default sound. |
| isDefaultVibrate()         | boolean     | This method is used to check whether a notification message uses the default vibration mode. |
| getWhen()                  | number      | This method is used to obtain the time (in milliseconds) when an event occurs from a notification message. Developers can sort notification messages by this time. |
| getLightSettings()         | object      | This method is used to obtain the blinking frequency and color of a breathing light. |
| getBadgeNumber()           | number      | This method is used to obtain the number of notification messages. |
| isAutoCancel()             | boolean     | This method is used to check whether a notification message is sticky. If true is returned, the notification message will disappear after a user taps it. If false is returned, the notification message will not disappear after a user taps it, but the user can swipe right or tap the trash can icon to delete the message. |
| getImportance()            | number      | This method is used to obtain the priority of a notification message. |
| getTicker()                | string      | This method is used to obtain the text to be displayed on the status bar for a notification message. |
| getVibrateConfig()         | object      | This method is used to obtain the vibration mode of a message. For details, please refer to the description of vibrate_config in the AndroidNotification structure in Sending Messages. |
| getVisibility()            | number      | This method is used to obtain the visibility of a notification message. For details, please refer to the definition of visibility in the AndroidNotification structure. |
| getIntentUri()             | string      | This method is used to obtain the intent in a notification message. The intent can be opening a page specified by the app. For details, please refer to the definition of the intent parameter in the ClickAction structure in Sending Messages of the development guide. |
| parseMsgAllAttribute()     | string      | Returns a string representation of the remote message.       |

###### Call Example

```javascript
  HmsPushEvent.onRemoteMessageReceived((result) => {
    console.log("REMOTE_DATA_MESSAGE_RECEIVED", JSON.stringify(result));
    HmsLocalNotification.localNotification({
      [HmsLocalNotification.Attr.title]: "DataMessage Received",  
      [HmsLocalNotification.Attr.message]: new HmsPush.CordovaRemoteMessage(
        result.msg
      ).getDataOfMap(),
    });
  });
```

#### CordovaRemoteMessage.NOTIFICATION

| Field                                 |
|---------------------------------------|
| CordovaRemoteMessage.NOTIFICATION.TITLE          |
| CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONKEY          |
| CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONARGS          |
| CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONKEY          |
| CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONARGS          |
| CordovaRemoteMessage.NOTIFICATION.BODY          |
| CordovaRemoteMessage.NOTIFICATION.ICON          |
| CordovaRemoteMessage.NOTIFICATION.SOUND          |
| CordovaRemoteMessage.NOTIFICATION.TAG          |
| CordovaRemoteMessage.NOTIFICATION.COLOR          |
| CordovaRemoteMessage.NOTIFICATION.CLICKACTION          |
| CordovaRemoteMessage.NOTIFICATION.CHANNELID          |
| CordovaRemoteMessage.NOTIFICATION.IMAGEURL          |
| CordovaRemoteMessage.NOTIFICATION.LINK          |
| CordovaRemoteMessage.NOTIFICATION.NOTIFYID          |
| CordovaRemoteMessage.NOTIFICATION.WHEN          |
| CordovaRemoteMessage.NOTIFICATION.LIGHTSETTINGS          |
| CordovaRemoteMessage.NOTIFICATION.BADGENUMBER          |
| CordovaRemoteMessage.NOTIFICATION.IMPORTANCE          |
| CordovaRemoteMessage.NOTIFICATION.TICKER          |
| CordovaRemoteMessage.NOTIFICATION.VIBRATECONFIG          |
| CordovaRemoteMessage.NOTIFICATION.VISIBILITY          |
| CordovaRemoteMessage.NOTIFICATION.INTENTURI          |
| CordovaRemoteMessage.NOTIFICATION.ISAUTOCANCEL          |
| CordovaRemoteMessage.NOTIFICATION.ISLOCALONLY          |
| CordovaRemoteMessage.NOTIFICATION.ISDEFAULTLIGHT          |
| CordovaRemoteMessage.NOTIFICATION.ISDEFAULTSOUND          |
| CordovaRemoteMessage.NOTIFICATION.ISDEFAULTVIBRATE          |


### **HmsPushEvent**

#### Events

| Constant                         | Value                            | Description                          |
|---------------------------------------|--------------------------------------|---------------------------------------|
| HmsPushEvent.REMOTE_DATA_MESSAGE_RECEIVED | REMOTE_DATA_MESSAGE_RECEIVED          | Event emitted when a data message is received. |
| HmsPushEvent.TOKEN_RECEIVED_EVENT | TOKEN_RECEIVED_EVENT          | Event emitted when a new token is received. |
| HmsPushEvent.ON_TOKEN_ERROR_EVENT | ON_TOKEN_ERROR_EVENT          | Event emitted when there was an error with the new token request. |
| HmsPushEvent.NOTIFICATION_OPENED_EVENT | NOTIFICATION_OPENED_EVENT          | Event emitted when the user clicks to a pushed notification. |
| HmsPushEvent.LOCAL_NOTIFICATION_ACTION_EVENT | LOCAL_NOTIFICATION_ACTION_EVENT          | Event emitted when the user clicks to a notification action button. |
| HmsPushEvent.ON_PUSH_MESSAGE_SENT | ON_PUSH_MESSAGE_SENT          | Event emitted when an uplink message is sent. |
| HmsPushEvent.ON_PUSH_MESSAGE_SENT_ERROR | ON_PUSH_MESSAGE_SENT_ERROR          | Event emitted when there was an error with the uplink message to be sent. |
| HmsPushEvent.ON_PUSH_MESSAGE_SENT_DELIVERED | ON_PUSH_MESSAGE_SENT_DELIVERED          | Event emitted when the uplink message is delivered. |


#### Listeners

| Listener                                                     |
| ------------------------------------------------------------ |
| [onRemoteMessageReceived](#hmspusheventonremotemessagereceivedresult) |
| [onTokenReceived](#hmspusheventontokenreceivedresult)        |
| [onTokenError](#hmspusheventontokenerrorresult)              |
| [onPushMessageSent](#hmspusheventonpushmessagesentresult)    |
| [onPushMessageSentError](#hmspusheventonpushmessagesenterrorresult) |
| [onPushMessageSentDelivered](#hmspusheventonpushmessagesentdeliveredresult) |
| [onLocalNotificationAction](#hmspusheventonlocalnotificationactionresult) |
| [onNotificationOpenedApp](#hmspusheventonnotificationopenedappresult) |



#### HmsPushEvent.onRemoteMessageReceived((result)=>{})

Listens for the HmsPushEvent.REMOTE_DATA_MESSAGE_RECEIVED events. The result is an object encapsulating the instance of the remoteMessage received in "**msg**" field.

**NOTE** : **onRemoteMessageReceived only work when application foreground or background mode.**

###### Call Example

```javascript
  HmsPushEvent.onRemoteMessageReceived((result) => {
    console.log("REMOTE_DATA_MESSAGE_RECEIVED", JSON.stringify(result));
    HmsLocalNotification.localNotification({
      [HmsLocalNotification.Attr.title]: "DataMessage Received",  
      [HmsLocalNotification.Attr.message]: new HmsPush.CordovaRemoteMessage(
        result.msg
      ).getDataOfMap(),
    });
  });
```
###### Example Response

```js
{
    BadgeNumber: "null",
    ImageUrl: "null",
    Importance: "0",
    LightSettings: "null",
    Link: "null",
    NotifyId: "0",
    When: "null",
    bodyLocalizationArgs: "null",
    contents: "0",
    data: "{"KEY1":"VALUE1","KEY2":"VALUE2"}",
    dataOfMap: "{KEY2=VALUE2, KEY1=VALUE1}",
    from: "102595495",
    isAutoCancel: "true",
    isDefaultLight: "true",
    isDefaultSound: "true",
    isDefaultVibrate: "true",
    isLocalOnly: "true",
    messageId: "0",
    originalUrgency: "2",
    receiptMode: "0",
    sendMode: "0",
    sentTime: "0",
    titleLocalizationArgs: "null",
    token: "AF66qKtyJCZojlFl3_USUfIf1uPFhdde5BcJbvG61_iGr3-xxxxxxxxxx",
    ttl: "2147483647",
    urgency: "2",
    vibrateConfig: "null",
    visibility: "null",
}
```

#### HmsPushEvent.onTokenReceived((result)=>{})

Listens for the HmsPushEvent.TOKEN_RECEIVED_EVENT events. The result is an object encapsulating the string representation of the token received in "**token**" field.

###### Call Example

```javascript
HmsPushEvent.onTokenReceived((result)=>{
    console.log('[onTokenReceived]: ' + result.token);
  })
```
###### Example Response

```js
{
  token:"APv6RrcA51gbORKIXKO2xpyKOLCjCrlOib_cS-xxxxxxxxx"
}
```

#### HmsPushEvent.onTokenError((result)=>{})

Listens for the HmsPushEvent.ON_TOKEN_ERROR_EVENT events. The result is an object encapsulating the exception message in "**exception**" field.

###### Call Example

```javascript
HmsPushEvent.onTokenError((result)=>{
    console.log('[onTokenError]: ' + result.exception);
  })
```
#### HmsPushEvent.onPushMessageSent((result)=>{})

Listens for the HmsPushEvent.ON_PUSH_MESSAGE_SENT events. The result is an object encapsulating the message ID in "**msgId**" field.

###### Call Example

```javascript
HmsPushEvent.onPushMessageSent((result)=>{
    console.log('[onPushMessageSent]: msgId:' + result.msgId);
  })
```
###### Example Response

```js
{
  msgId:"-1138962175"
}
```

#### HmsPushEvent.onPushMessageSentError((result)=>{})

Listens for the HmsPushEvent.ON_PUSH_MESSAGE_SENT_ERROR events. The result is an object encapsulating the error code in "**result**", message ID in "**msgId**", and error info in "**resultInfo**" fields.

###### Call Example

```javascript
HmsPushEvent.onPushMessageSentError((result)=>{
    console.log('[onPushMessageSentError]:  msgId: ' + result.msgId + ', result: ' + result.result + ', resultInfo: ' + result.resultInfo);
  })
```
#### HmsPushEvent.onPushMessageSentDelivered((result)=>{})

Listens for the HmsPushEvent.ON_PUSH_MESSAGE_SENT_DELIVERED events. The result is an object encapsulating the error code in "**result**", message ID in "**msgId**", and error info in "**resultInfo**" fields.

###### Call Example

```javascript
HmsPushEvent.onPushMessageSentDelivered((result)=>{
    console.log('[onPushMessageSentDelivered]:  msgId: ' + result.msgId + ', result: ' + result.result + ', resultInfo: ' + result.resultInfo);
  })
```
###### Example Response

```js
{
  result="0",
  msgId:"-1138962175",
  resultInfo:"success"
}
```

#### HmsPushEvent.onLocalNotificationAction((result)=>{})

Listens for the HmsPushEvent.LOCAL_NOTIFICATION_ACTION_EVENT events. The result is the object encapsulating the actions.

###### Call Example

```javascript
HmsPushEvent.onLocalNotificationAction((result)=>{
    console.log("LOCAL_NOTIFICATION_ACTION_EVENT",JSON.stringify(result));
    const notification = JSON.parse(result.dataJSON);
    if (notification.action === "Yes") {
      HmsLocalNotification.cancelNotificationsWithId([notification.id]);
    }
  })
```
###### Example Response

```js
{dataJSON:{
   subText:"This is a subText",
   invokeApp:false,
   smallIcon:"ic_notification",
   action:"Yes",
   ongoing:false,
   actions:["Yes", "No"],
   ticker:"Optional Ticker",
   autoCancel:true,
   showWhen:true,
   vibrateDuration:1000,
   bigText:"This is a bigText",
   id:"272784920",
   tag:null,
   color:"white",
   title:"HMSPush",
   vibrate:false,
   largeIcon:"ic_launcher",
   message:"This is Local Notification",
   groupSummary:false,
   dontNotifyInForeground:false,
   importance:"max"
}}
```

#### HmsPushEvent.onNotificationOpenedApp((result)=>{})

Listens for the HmsPushEvent.NOTIFICATION_OPENED_EVENT events. The result is an object encapsulating the  remoteMessage in "**remoteMessage**", extras in "**extras**", and Custom Intent URI in "**uriPage**".

###### Call Example

```javascript
HmsPushEvent.onNotificationOpenedApp((result)=>{
    console.log("NOTIFICATION_OPENED_EVENT",JSON.stringify(result));
    const remoteMessageData = result.remoteMessage;
    const extrasData = result.extras;
    if (result.uriPage !== null && result.uriPage === "app://app2")
      openCustomIntent(); //This function is custom function that open another page.
  })
```
###### Example Response

```js
{
    extras: {
        _push_cmd_type: "cosa",
        _push_msgid: "-1744601771",
        _push_notifyid: 1218295586,
        KEY1: "VALUE1"
    },
    remoteMessage: {
        Link: "null",
        NotifyId: "0",
        contents: "0",
        ttl: "86400",
        isDefaultSound: "true",
        ...
    },
    uriPage: "app://app2"
}
```

#### unregisterHMSEvent(eventName)

This function is used to remove active listeners. You need the write listener eventName which do you want to remove.

###### Call Example
```javascript
unregisterHMSEvent(HmsPushEvent.ON_TOKEN_ERROR_EVENT); //unregistering process.
```

### **HmsPushResultCode**

#### Constants

| Name                                      | ResultCode  | Description                                                  |
| ----------------------------------------- | ----------- | ------------------------------------------------------------ |
| SUCCESS                                   | "0"         | Success                                                      |
| ERROR                                     | "-1"        | Error                                                        |
| NULL_BUNDLE                               | "333"       | Bundle is null, exception                                    |
| ERROR_NO_TOKEN                            | "907122030" | You do not have a token. Apply for a token.                  |
| ERROR_NO_NETWORK                          | "907122031" | The current network is unavailable. Check the network connection. |
| ERROR_TOKEN_INVALID                       | "907122032" | The token has expired. Delete the token and apply for a new one. |
| ERROR_SERVICE_NOT_AVAILABLE               | "907122046" | If the Push service is unavailable, contact Huawei technical support. |
| ERROR_PUSH_SERVER                         | "907122047" | If the Push server returns an error, contact Huawei technical support. |
| ERROR_UNKNOWN                             | "907122045" | Unknown error. Contact Huawei technical support.             |
| ERROR_TOPIC_EXCEED                        | "907122034" | The number of subscribed topics exceeds 2000.                |
| ERROR_TOPIC_SEND                          | "907122035" | Failed to send the subscription topic. Contact Huawei technical support. |
| ERROR_NO_RIGHT                            | "907122036" | Push rights are not enabled. Enable the service and set push service parameters at AppGallery Connect. |
| ERROR_GET_TOKEN_ERR                       | "907122037" | Failed to apply for the token. Contact Huawei technical support. |
| ERROR_STORAGE_LOCATION_EMPTY              | "907122038" | No storage location is selected for the application or the storage location is invalid. |
| ERROR_NOT_ALLOW_CROSS_APPLY               | "907122053" | Failed to apply for a token. Cross-region token application is not allowed. |
| ERROR_SIZE                                | "907122041" | The message body size exceeds the maximum.                   |
| ERROR_INVALID_PARAMETERS                  | "907122042" | The message contains invalid parameters.                     |
| ERROR_TOO_MANY_MESSAGES                   | "907122043" | The number of sent messages reaches the upper limit. The messages will be discarded. |
| ERROR_TTL_EXCEED                          | "907122044" | The message lifetime expires before the message is successfully sent to the APP server. |
| ERROR_HMS_CLIENT_API                      | "907122048" | Huawei Mobile Services (APK) can't connect  Huawei Push  Kit. |
| ERROR_OPERATION_NOT_SUPPORTED             | "907122049" | The current EMUI version is too early to use the capability. |
| ERROR_MAIN_THREAD                         | "907122050" | The operation cannot be performed in the main thread.        |
| ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING | "907122051" | The device certificate authentication fails.                 |
| ERROR_BIND_SERVICE_SELF_MAPPING           | "907122052" | Failed to bind the service.                                  |
| ERROR_ARGUMENTS_INVALID                   | "907122054" | The input parameter is incorrect. Check whether the related configuration information is correct. |
| ERROR_INTERNAL_ERROR                      | "907135000" | Internal Push error. Contact Huawei technical support engineers. |
| ERROR_NAMING_INVALID                      | "907135001" | Internal Push error. Contact Huawei technical support engineers. |
| ERROR_CLIENT_API_INVALID                  | "907135002" | The ApiClient object is invalid.                             |
| ERROR_EXECUTE_TIMEOUT                     | "907135003" | Invoking AIDL times out. Contact Huawei technical support.   |
| ERROR_NOT_IN_SERVICE                      | "907135004" | The current area does not support this service.              |
| ERROR_SESSION_INVALID                     | "907135005" | If the AIDL connection session is invalid, contact Huawei technical support. |
| ERROR_API_NOT_SPECIFIED                   | "907135006" | An error occurred when invoking an unspecified API.          |
| ERROR_GET_SCOPE_ERROR                     | "1002"      | Failed to invoke the gateway to query the application scope. |
| ERROR_SCOPE_LIST_EMPTY                    | "907135700" | Scope is not configured on the AppGallery Connect.           |
| ERROR_CERT_FINGERPRINT_EMPTY              | "907135701" | The certificate fingerprint is not configured on the AppGallery Connect. |
| ERROR_PERMISSION_LIST_EMPTY               | "907135702" | Permission is not configured on the AppGallery Connect.      |
| ERROR_AUTH_INFO_NOT_EXIST                 | "907135703" | The authentication information of the application does not exist. |
| ERROR_CERT_FINGERPRINT_ERROR              | "6002"      | An error occurred during certificate fingerprint verification. Check whether the correct certificate fingerprint is configured in AppGallery Connect. |
| ERROR_PERMISSION_NOT_EXIST                | "6003"      | Interface authentication: The permission does not exist and is not applied for in AppGallery Connect. |
| ERROR_PERMISSION_NOT_AUTHORIZED           | "6005"      | Interface authentication: unauthorized.                      |
| ERROR_PERMISSION_EXPIRED                  | "6006"      | Interface authentication: The authorization expires.         |

---

## 4. Configuration and Description

### Receiving Data Messages at Killed Application State

To listen to **Data Messages** in the foreground or background, call the [**onRemoteMessageReceived**](#hmspusheventonremotemessagereceivedresult) method inside of your application. Code executed via this handler has access to Cordova Context and is able to interact with your application.

When the application is in a killed state, the [**onRemoteMessageReceived**](#hmspusheventonremotemessagereceivedresult) handler will not be called when receiving data messages. Instead, you need to setup a background callback handler via the  [setBackgroundAction](#hmspushsetbackgroundactionremotemessage-) method.

To setup a background handler, pass a callback to the method. If you want to send localNotification in setBackgroundAction, you must call the HmsLocalNotification.backgroundLocalNotification() method. It should take one parameter and it should be a variable in string form of  [notification](#hmslocalnotificationattr) object. Otherwise  it will not work.

````javascript
HmsPush.setBackgroundAction((remoteMessage) => {
    const jsonData = JSON.parse(remoteMessage.data);
    const headlessNotification = {
         "title": "[Headless] " + jsonData.title,
         "message": jsonData.message.replace("{{name}}","YourName")
    };
    const notification = JSON.stringify(headlessNotification)
    HmsLocalNotification.backgroundLocalNotification(notification);
});  
````



### Receiving Custom Intent URI
To receive the custom intent URIs you need to declare an intent filter inside **AndroidManifest.xml** file as shown below. Replace the value for the **android:scheme** with your custom scheme (for example: myapp). 

```xml
<manifest ...>
  <!-- Other configurations -->
  <application ...>
    <activity ...>
      <!-- Other configurations -->

      <!-- The Intent filter below is for receiving custom intents-->
      <intent-filter>
          <action android:name="android.intent.action.VIEW" />
          <category android:name="android.intent.category.DEFAULT" />
          <category android:name="android.intent.category.BROWSABLE" />
          <data android:scheme="<YOUR_SCHEME>"/>
      </intent-filter>
    </activity>
  </application>
</manifest>
```


### Auto-Initialization

The HMS Core Push SDK provides the capability of automatically generating AAIDs and automatically applying for tokens. After this capability is configured, the applied token is returned. You can configure automatic initialization by adding the meta-data section to the AndroidManifest.xml file or calling the [setAutoInitEnabled(boolean enable)](#hmspushsetautoinitenabledenabled-boolean) method from the Push SDK.

To enable Auto-Initialization with the configuration, add the meta-data section under application tag in the **AndroidManifest.xml** file.

```xml
<manifest ...>
    <!-- Other configurations -->
    <application ...>
        <activity ...>
          <!-- Other configurations -->

        </activity>
        <!-- Setting push kit auto enable to true -->
        <meta-data
            android:name="push_kit_auto_init_enabled"
            android:value="true" />
        <!-- Other configurations -->
    </application>
</manifest>
```

#### Vibration

In order to customize the vibration pattern of the local notifications you need to add the permission below to **AndroidManifest.xml** file

```xml
<uses-permission android:name="android.permission.VIBRATE" />
```

#### Playing Custom Sound

For playing a custom sound for a local notification you should add your sound file as a raw resource. The path for raw resources as follows: **<your_cordova_project>/android/app/src/main/res/raw** 

---

## 5. Sample Project

You can find demo applications about using the library here

[Cordova Sample Code](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples/cordova-sample-code-0000001050135749)

[Ionic Sample Code](https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-Examples/ionic-sample-code-0000001052494278)

---

## 6. Questions or Issues

If you have questions about how to use HMS samples, try the following options:

* [Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services) is the best place for any programming questions. Be sure to tag your question with **huawei-mobile-services**.
* [GitHub](https://github.com/HMS-Core/hms-cordova-plugin) is the official repository for these plugins, You can open an issue or submit your ideas.
* [Huawei Developer Forum](https://forums.developer.huawei.com/forumPortal/en/home?fid=0101187876626530001) HMS Core Module is great for general questions, or seeking recommendations and opinions.
* [Huawei Developer Docs](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) is place to official documentation for all HMS Core Kits, you can find detailed documentations in there.

If you run into a bug in our samples, please submit an issue to the [GitHub repository](https://github.com/HMS-Core/hms-cordova-plugin).

---

## 7. Licensing and Terms

Huawei Cordova SDK Plugin is licensed under [Apache 2.0 license](LICENCE)

