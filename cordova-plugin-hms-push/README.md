# cordova-plugin-hms-push

- Contents
- Introduction
- Installation Guide
- Cordova SDK API Method Definition
- Configure description
- Licensing and Terms

## 1. Introduction

The Cordova SDK code encapsulates the Huawei push client interface. It provides many APIs for your reference or use.

The Cordova SDK code package is described as follows:

**src/main/:** core layer, bridging PushSDK bottom-layer code;

**www/HmsPush.js:** external interface definition layer, which is used to define interface classes or reference files.

## 2. Installation Guide

### Cordova

1. Download the Cordova Push SDK Plugin.

2. Add Platform To Project.

     ***```cordova platform add android```***

3. You can either install the plugin through npm or by downloading from downloads page, [Cordova plugin package](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Library-V1/cordova-plugin-0000001050133798-V1).

    a. Run the following command in the root directory of your Cordova project to install it through npm.

    ***```cordova plugin add @hmscore/cordova-plugin-hms-push```***

    b. Run the following command in the root directuory of your Cordova project to install it manually after downloading the plugin.

    ***```cordova plugin add <CORDOVA_PUSH_PLUGIN_PATH>```***

4. Check whether the Cordova Push SDK is successfully added to Plugin folder in the root directory of the Cordova project.

5. Download **agconnect-services.json** file from AppGallery Connect.

6. Add **agconnect-services.json** and **jks** file to root directory.

7. Add **build.json** file to your project's root.

8. Make sure widget id is same as your package name in config.xml. Otherwise demo project will not work properly.

9. Then run the Cordova app

     ***```cordova run android```***

### Ionic

1. Download the Cordova Push SDK Plugin through npm or by downloading from downloads page, [Cordova plugin package](https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Library-V1/cordova-plugin-0000001050133798-V1). <br><br>

    a. Run the following command in the root directuory of your Cordova project to install it manually after downloading the plugin.

    ***```npm install <CORDOVA_PUSH_PLUGIN_PATH>```***

    b. Run the following command in the root directory of your Ionic project to install it through npm.

    ***`npm install @hmscore/cordova-plugin-hms-push`***

2. Check whether the Cordova Push SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project.

    ***`npm install @ionic-native/core --save-dev`***

4. Copy the "ionic/dist/hms-push" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`***

    > ***NOTE:*** where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and agconnect service dependencies.

8. Add the plug-in configuration to the build.gradle file in the app directory. And add push service implementation into to dependencies.

9. Add agconnect-services.json and jks file to the app directory in your Android project.

10. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

11. Then run the Ionic app.

    ***`ionic capacitor run android`***

    After this command, the demo will be opened android studio. Just run it.

## 3. Cordova SDK API Methods & Constant Definitions

## 4. API Definition

### **HmsPush**

#### Public Method Summary

| Method                                                | Return Type | Description                                                                                                                               |
| ----------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| init()                                                | void        | Initialize to HUAWEI Push Kit.                                                                                                            |
| getToken(Callback callback)                           | void        | Obtains a token required for accessing HUAWEI Push Kit.                                                                                   |
| getId(Callback callback)                              | void        | Obtains an AAID in synchronous mode.                                                                                                      |
| getAAID(Callback callback)                            | void        | Obtains an AAID in asynchronous mode.                                                                                                     |
| getCreationTime(Callback callback)                    | void        | Obtains the generation timestamp of an AAID.                                                                                              |
| deleteAAID(Callback callback)                         | void        | Deletes a local AAID and its generation timestamp.                                                                                        |
| deleteToken(Callback callback)                        | void        | Deletes a token.                                                                                                                          |
| isAutoInitEnabled(Callback callback)                  | void        | Checks whether automatic initialization is enabled.                                                                                       |
| setAutoInitEnabled(boolean enabled,Callback callback) | void        | Determines whether to enable automatic initialization.                                                                                    |
| turnOnPush(Callback callback)                         | void        | Enables the function of receiving notification messages in asynchronous mode.                                                             |
| turnOffPush(Callback callback)                        | void        | Disables the function of receiving notification messages in asynchronous mode.                                                            |
| subscribe(String topic, Callback callBack)            | void        | Subscribes to topics in asynchronous mode.                                                                                                |
| unsubscribe(String topic, Callback callBack)          | void        | Unsubscribes from topics in asynchronous mode.                                                                                            |
| sendRemoteMessage(JSONObject uplinkMessage)           | void        | Sends an uplink message to the app server.                                                                                                |
| getInitialNotification(Callback callback)             | void        | Returns the **remoteMessage** of the notification which opened the app, when the app was in quit state.                                   |
| getOdid(Callback callback)                            | void        | Obtains an Odid in asynchronous mode.                                                                                                     |
| enableLogger()                                        | void        | This method enables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality.  |
| disableLogger                                         | void        | This method disables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality. |

#### Public Methods

##### HmsPush.getId()

This method is used to obtain an AAID in synchronous mode. Before applying for a token, an app calls this method to obtain its unique AAID. The HUAWEI Push server generates a token for the app based on the AAID. If the AAID of the app changes, a new token will be generated next time when the app applies for a token. If an app needs to report statistics events, it must carry the AAID as its unique ID.

###### Call Example

```javascript
async function getId() {
  try {
    console.log(await HmsPush.getId())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.getAAID()

This method is used to obtain an AAID in asynchronous mode.

###### Call Example

```javascript
async function getAAID() {
  try {
    console.log(await HmsPush.getAAID())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.getCreationTime()

This method is used to obtain the generation timestamp of an AAID.

###### Call Example

```javascript
async function getCreationTime() {
  try {
    console.log(await HmsPush.getCreationTime())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.deleteAAID()
This method is used to delete a local AAID and its generation timestamp.

###### Call Example

```javascript
async function deleteAAID() {
  try {
    console.log(await HmsPush.deleteAAID())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.getToken()

This method is used to obtain a token required for accessing HUAWEI Push Kit. If there is no local AAID, this method will automatically generate an AAID when it is called because the HUAWEI Push Kit server needs to generate a token based on the AAID.

###### Call Example

```javascript
async function getToken() {
  try {
    console.log(await HmsPush.getToken())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.deleteToken()
This method is used to delete a token. After a token is deleted, the corresponding AAID will not be deleted. This method is a synchronous method.

###### Call Example

```javascript
async function deleteToken() {
  try {
    console.log(await HmsPush.deleteToken())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.isAutoInitEnabled()

Checks whether automatic initialization is enabled.

###### Call Example

```javascript
async function isAutoInitEnabled() {
  try {
    console.log(await HmsPush.isAutoInitEnabled())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.setAutoInitEnabled(boolean enabled)

This method is used to determine whether to enable automatic initialization. If this parameter is set to **true**, the SDK automatically generates an AAID and applies for a token.

###### Parameters

| Name    | Description                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| enabled | Indicates whether to enable automatic initialization. The value true indicates yes and false indicates no. |

###### Call Example

```javascript
 try {
    boolean enabled=true;
    console.log(await HmsPush.setAutoInitEnabled(enabled))
  } catch (e) {
    console.log(e);
  }
```

##### HmsPush.subscribe(String topic)

This method is used to subscribe to topics in asynchronous mode. The HUAWEI Push Kit topic messaging function allows you to send messages to multiple devices whose users have subscribed to a specific topic. You can write messages about the topic as required, and HUAWEI Push Kit determines the release path and sends messages to the correct devices in a reliable manner.

###### Parameters

| Name  | Description                                                                                                      |
| ----- | ---------------------------------------------------------------------------------------------------------------- |
| topic | Topic to be subscribed to. The value must match the following regular expression: [\u4e00-\u9fa5\w-_.~%]{1,900}. |

###### Call Example

```javascript
async function subscribe(topic) {
  try {
    console.log(await HmsPush.subscribe(
      topic
    ))
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.unsubscribe(String topic)

This method is used to unsubscribe from topics that are subscribed to through the subscribe method.

###### Parameters

| Name  | Description                                                                                                      |
| ----- | ---------------------------------------------------------------------------------------------------------------- |
| topic | Topic to be subscribed to. The value must match the following regular expression: [\u4e00-\u9fa5\w-_.~%]{1,900}. |

###### Call Example

```javascript
async function unsubscribe(topic) {
  try {
    console.log(await HmsPush.unsubscribe(
      topic
    ))
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.turnOnPush()

This method is used to enable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable data messaging.

###### Call Example

```javascript
async function turnOnPush() {
  try {
    console.log(await HmsPush.turnOnPush())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.turnOffPush()

This method is used to disable the display of notification messages. If you want to control the display of notification messages in an app, you can call this method. This method applies to notification messages but not data messages. It is the app that determines whether to enable data messaging.

###### Call Example

```javascript
async function turnOffPush() {
  try {
    console.log(await HmsPush.turnOffPush())
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.sendRemoteMessage(uplinkMessage)

Sends an uplink message to the application server.

###### Parameters

| Name          | Description                                         |
| ------------- | --------------------------------------------------- |
| uplinkMessage | Remote message to be sent to the application server |

###### Call Example

```javascript
async function sendRemoteMessage() {
  try {
    await HmsPush.sendRemoteMessage({
      [HmsPush.RemoteMessageBuilder.TO]: '',
      //[RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
      [HmsPush.RemoteMessageBuilder.MESSAGE_TYPE]: 'hms',
      [HmsPush.RemoteMessageBuilder.COLLAPSE_KEY]: '-1',
      [HmsPush.RemoteMessageBuilder.TTL]: 120,
      [HmsPush.RemoteMessageBuilder.RECEIPT_MODE]: 1,
      [HmsPush.RemoteMessageBuilder.SEND_MODE]: 1,
      [HmsPush.RemoteMessageBuilder.DATA]: { key1: 'test', message: 'huawei-test' }
    })

  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.getInitialNotification()

Returns the remoteMessage of the notification which opened the app from quit state. If the app is not opened by a notification, it returns null.

###### Parameters

| Name                | Description                                                            |
| ------------------- | ---------------------------------------------------------------------- |
| initialNotification | The remoteMessage of the notification which opened the app by a click. |

###### Call Example

```javascript
async function getInitialNotification() {
  try {
    console.log(JSON.stringify(await HmsPush.getInitialNotification()));
  } catch (e) {
    console.log(e);
  }
}
```

##### HmsPush.getOdid()

This method is used to obtain an Odid in asynchronous mode.

###### Call Example

```javascript
async function getOdid() {
  try {
    console.log(await HmsPush.getOdid())
  } catch (e) {
    console.log(e);
  }
}
```

### **HmsLocalNotification**

#### Public Method Summary

| Method                                                                | Return Type | Description                                                                                                                                     |
| --------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| localNotification(JSONObject notification, Callback callback)         | void        | Pushes a local notification instantly.                                                                                                          |
| localNotificationSchedule(JSONObject notification, Callback callback) | void        | Schedules a local notification to be pushed at a further time.                                                                                  |
| cancelAllNotifications(Callback callback)                             | void        | Cancels all pending scheduled notifications and the ones registered in the notification manager.                                                |
| cancelNotifications(Callback callback)                                | void        | Cancels all pending notifications registered in the notification manager.                                                                       |
| cancelScheduledNotifications(Callback callback)                       | void        | Cancels all pending scheduled notifications.                                                                                                    |
| cancelNotificationsWithId(JSONArray idArr, Callback callback)         | void        | Cancels all pending notifications by an array of IDs.                                                                                           |
| cancelNotificationsWithIdTag(JSONArray idTagArr, Callback callback)   | void        | Cancels all pending notifications by an array of objects encapsulating the fields "**Id**" and "**tag**", both of the field values are strings. |
| cancelNotificationsWithTag(String tag, Callback callback)             | void        | Cancel a notifcation with tag.                                                                                                                  |
| getNotifications(Callback callback)                                   | void        | Returns an array of all notifications.                                                                                                          |
| getScheduledNotifications(Callback callback)                          | void        | Returns a list of all pending scheduled notifications.                                                                                          |
| getChannels(Callback callback)                                        | void        | Returns a string array of all notification channels.                                                                                            |
| channelExists(String channelId, Callback callback)                    | void        | Checks whether automatic initialization is enabled.                                                                                             |
| channelBlocked(String channelId, Callback callback)                   | void        | Returns true if the notification channel with the specified ID is blocked                                                                       |
| deleteChannel(String channelId, Callback callback)                    | void        | Deletes the notification channel with specified ID.                                                                                             |

##### HmsLocalNotification.localNotification(notification)

Pushes a local notification instantly.

###### Parameters

| Name         | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| notification | Local notification object to be pushed, refer **HmsLocalNotification.Attr** |

###### Call Example

```javascript
 try {
   const result = await HmsLocalNotification.localNotification(
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
      }
    )
    console.log(JSON.stringify(result));
 }
    catch (ex) {
            console.log(JSON.stringify(ex));
        }
```

##### HmsLocalNotification.localNotificationSchedule(notification)

Schedules a local notification to be pushed at a further time.

###### Parameters

| Name         | Description                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| notification | Local notification object to be pushed, refer **HmsLocalNotification.Attr** |

###### Call Example

```javascript
    try {
      const result = await  HmsLocalNotification.localNotificationSchedule(
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
      },
    )
    console.log(JSON.stringify(result));
    } catch (ex) {
            console.log(JSON.stringify(ex));
        }
```

##### HmsLocalNotification.cancelAllNotifications(callback)

Cancels all pending scheduled notifications and the ones registered in the notification manager.

###### Call Example

```javascript
   await HmsLocalNotification.cancelAllNotifications()
```

##### HmsLocalNotification.cancelNotifications(callback)

Cancels all pending notifications registered in the notification manager.

###### Call Example

```javascript
 await HmsLocalNotification.cancelNotifications();
```

##### HmsLocalNotification.cancelScheduledNotifications(callback)

Cancels all pending scheduled notifications.

###### Call Example

```javascript
 await  HmsLocalNotification.cancelScheduledNotifications();
```

##### HmsLocalNotification.cancelNotificationsWithId(idArr, callback)

Cancels all pending notifications by an array of IDs.

###### Call Example

```javascript
  await HmsLocalNotification.cancelNotificationsWithId(["13","14"]);
```

##### HmsLocalNotification.cancelNotificationsWithIdTag(idTagArr, callback)

Cancels all pending notifications by an array of objects encapsulating the fields "**Id**" and "**tag**", both of the field values are strings.

###### Call Example

```javascript
 await  HmsLocalNotification.cancelNotificationsWithIdTag([{id:"13",tag:"some-tag"},{id:"14",tag:"some-tag"}]);
```

##### HmsLocalNotification.cancelNotificationsWithTag(tag, callback)

Cancel a notifications with tag.

###### Call Example

```javascript
  await HmsLocalNotification.cancelNotificationsWithTag('tag');
```

##### HmsLocalNotification.getNotifications()

Returns an array of all notifications.

###### Call Example

```javascript
try {
      const result = await HmsLocalNotification.getNotifications();
      console.log(result)
    } catch (ex) {
        console.log(ex);
    }
```

##### HmsLocalNotification.getScheduledNotifications()

Returns a list of all pending scheduled notifications.

###### Call Example

```javascript
 try {
        const result = await HmsLocalNotification.getScheduledNotifications();
        console.log(JSON.stringify(result))
     } catch (ex) {
        console.log(ex);
    }
```

##### HmsLocalNotification.getChannels()

Returns a string array of all notification channels.

###### Call Example

```javascript
    try {
          const result = await HmsLocalNotification.getChannels();
          console.log(result)
        } catch (ex) {
            console.log(ex);
        }
```

##### HmsLocalNotification.channelExists(channeld)

Returns true if the notification channel with the specified ID is exists.

###### Call Example

```javascript
  try {
          const result = await HmsLocalNotification.channelExists('huawei-hms-cordova-push-channel-id');
          console.log(result)
      } catch (ex) {
          console.log(ex);
      }
```

##### HmsLocalNotification.channelBlocked(channeld)

Returns true if the notification channel with the specified ID is blocked.

###### Call Example

```javascript
    try {
          const result = await HmsLocalNotification.channelBlocked('huawei-hms-cordova-push-channel-id');
          console.log(result)
        } catch (ex) {
            console.log(ex);
        }
```

##### HmsLocalNotification.deleteChannel(channeld)

Deletes the notification channel with specified ID.

###### Call Example

```javascript
  await  HmsLocalNotification.deleteChannel("hms-channel-custom");
```

#### HmsLocalNotification.Attr

This object contains the field names for local notifications attributes. These fields are used to construct local notification messages.

| Name                                           | Type                            | Description                                                                                                                                                     |
| ---------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HmsLocalNotification.Attr.id                   | String                          | An identifier for the notification message to be pushed.                                                                                                        |
| HmsLocalNotification.Attr.message              | String                          | The message (second row) of the notification                                                                                                                    |
| HmsLocalNotification.Attr.fireDate             | Date                            | The time at which the notification will be posted.                                                                                                              |
| HmsLocalNotification.Attr.title                | String                          | The title (first row) of the notification                                                                                                                       |
| HmsLocalNotification.Attr.ticker               | ticker                          | The ticker of the notification which is sent to the accessibility services                                                                                      |
| HmsLocalNotification.Attr.autoCancel           | Boolean                         | If true, the notification is dismissed on click.                                                                                                                |
| HmsLocalNotification.Attr.largeIcon            | String                          | The name of the file to be set as the large icon for notification                                                                                               |
| HmsLocalNotification.Attr.largeIconUrl         | String                          | URL of the image to be set as the large icon for the notification to be pushed.                                                                                 |
| HmsLocalNotification.Attr.smallIcon            | String                          | The name of the file to be set as the small icon for notification                                                                                               |
| HmsLocalNotification.Attr.bigText              | String                          | The longer text to be displayed in the big form of the template                                                                                                 |
| HmsLocalNotification.Attr.subText              | String                          | Additional information to be displayed in notification                                                                                                          |
| HmsLocalNotification.Attr.bigPictureUrl        | String                          | URL of the image to be set as the big picture for the notification to be pushed.                                                                                |
| HmsLocalNotification.Attr.shortcutId           | String                          | If the notification is duplicative of a launcher shortcut, sets the case the Launcher wants to hide the shortcut.                                               |
| HmsLocalNotification.Attr.number               | Number                          | Sets the number of items this notification represents. Launchers that support badging may display it as a badge.                                                |
| HmsLocalNotification.Attr.channelId            | String                          | The id of the notification channel for the notification to be pushed                                                                                            |
| HmsLocalNotification.Attr.channelName          | String                          | Name of the channel to be created for the notification to be pushed                                                                                             |
| HmsLocalNotification.Attr.channelDescription   | String                          | Description for the channel to be created for the notification to be pushed.                                                                                    |
| HmsLocalNotification.Attr.color                | String                          | The notification color in #RRGGBB or #AARRGGBB formats or string like 'white'                                                                                   |
| HmsLocalNotification.Attr.group                | String                          | The notification group, the notifications in the same group are displayed in a stacked way, if the device used supports such rendering.                         |
| HmsLocalNotification.Attr.groupSummary         | Boolean                         | If true, this notification is included in the specified group.                                                                                                  |
| HmsLocalNotification.Attr.playSound            | Boolean                         | If true, the specified sound will be played when a notifcation message is pushed.                                                                               |
| HmsLocalNotification.Attr.soundName            | String                          | Name of the sound file in the raw folder to be played, when a notification message is pushed.                                                                   |
| HmsLocalNotification.Attr.vibrate              | Boolean                         | Turn on or off the vibration when a notification message a notification message is pushed.                                                                      |
| HmsLocalNotification.Attr.vibrateDuration      | Number                          | The duration of the vibration when a notification message is pushed                                                                                             |
| HmsLocalNotification.Attr.actions              | Array                           | Adds action(s) to the notification to be pushed, actions are displayed as buttons adjacent notification content.                                                |
| HmsLocalNotification.Attr.invokeApp            | Boolean                         | If true, the app pushed the notification is invoked when a pushed notification is clicked.                                                                      |
| HmsLocalNotification.Attr.tag                  | String                          | A tag for the notification to be set for identification                                                                                                         |
| HmsLocalNotification.Attr.repeatType           | HmsLocalNotification.RepeatType | The time to repeat pushing for a scheduled notification.                                                                                                        |
| HmsLocalNotification.Attr.repeatTime           | Number                          | The Time in milliseconds to repeat pushing the next scheduled notification message.                                                                             |
| HmsLocalNotification.Attr.ongoing              | Boolean                         | If true, the notification to be pushed will be an ongoing notification, which can't be cancelled by the user by a swipe and the app must handle the cancelling. |
| HmsLocalNotification.Attr.allowWhileIdle       | Boolean                         | If true, a scheduled notification message can be pushed even when the device is in low-power idle mode.                                                         |
| HmsLocalNotification.Attr.dontNotifyForeground | Boolean                         | If true, the a notification won't be pushed when the app is in foreground.                                                                                      |
| HmsLocalNotification.Attr.priority             | HmsLocalNotification.Priority   | The priority for the notification to be pushed.                                                                                                                 |
| HmsLocalNotification.Attr.importance           | HmsLocalNotification.Importance | The importance for the notification to be pushed                                                                                                                |
| HmsLocalNotification.Attr.visibility           | HmsLocalNotification.Visibility | The visibility of the notification to be pushed                                                                                                                 |

#### HmsLocalNotification.Priority

This object contains the values for the local notification priority.

| Name                                  | Description                                       |
| ------------------------------------- | ------------------------------------------------- |
| HmsLocalNotification.Priority.MAX     | Max priority for the notifiation to be pushed     |
| HmsLocalNotification.Priority.HIGH    | High priority for the notifiation to be pushed    |
| HmsLocalNotification.Priority.DEFAULT | Default priority for the notifiation to be pushed |
| HmsLocalNotification.Priority.LOW     | ;Low priority for the notifiation to be pushed    |
| HmsLocalNotification.Priority.MIN     | Min priority for the notifiation to be pushed     |

#### HmsLocalNotification.Visibility

This object contains the values for the local notification visibility.

| Name                                    | Description                                                                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| HmsLocalNotification.Visibility.PUBLIC  | When set, the notification is shown entirely in all lock screens.                                                               |
| HmsLocalNotification.Visibility.SECRET  | When set, the notification is hidden entirely in secure lock screens.                                                           |
| HmsLocalNotification.Visibility.PRIVATE | When set, the notification is shown entirely in all lock screens, but the private information is hidden in secure lock screens. |

#### HmsLocalNotification.Importance

This object contains the values for the local notification importance.

| Name                                        | Description                                                                        |
| ------------------------------------------- | ---------------------------------------------------------------------------------- |
| HmsLocalNotification.Importance.MAX         | When set, the notification is pushed from the channel with max importance.         |
| HmsLocalNotification.Importance.HIGH        | When set, the notification is pushed from the channel with high importance.        |
| HmsLocalNotification.Importance.DEFAULT     | When set, the notification is pushed from the channel with default importance.     |
| HmsLocalNotification.Importance.LOW         | When set, the notification is pushed from the channel with low importance.         |
| HmsLocalNotification.Importance.MIN         | When set, the notification is pushed from the channel with min importance.         |
| HmsLocalNotification.Importance.NONE        | When set, the notification is pushed from the channel with none importance.        |
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

| Name                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HmsPush.RemoteMessageBuilder.TO           | For an uplink message, the value is always push.hcm.upstream.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| HmsPush.RemoteMessageBuilder.MESSAGE_ID   | Message ID, which is generated by an app and is unique for each message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| HmsPush.RemoteMessageBuilder.MESSAGE_TYPE | The message type is transparently transmitted by the SDK.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| HmsPush.RemoteMessageBuilder.TTL          | Maximum cache duration of an offline message set for HUAWEI Push Kit, in seconds. The duration can be set to 15 days at most. The value of the input parameter ttl must be within the range [1,1296000]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| HmsPush.RemoteMessageBuilder.COLLAPSE_KEY | Sets the maximum cache duration of a message, in seconds. If you set to **-1**, all offline messages of the app are sent to the user after the user's device goes online. If you set 0, offline messages of the app sent to the user are determined by the default policy of HUAWEI Push Kit. Generally, only the latest offline message is sent to the user after the user's device goes online. You can set a value ranging from 1 to 100 to group messages. For example, if you send 10 messages and set collapse_key to 1 for the first five messages and to 2 for the rest, the latest offline message whose value is 1 and the latest offline message whose value is 2 are sent to the user after the user's device goes online. |
| RemoteMessageBuilder.RECEIPT_MODE         | The value can be 0 or 1. The value 1 indicates that the receipt capability is enabled after messages are sent. That is, if an uplink message sent by the app is successfully sent to the app server, the server will respond and send a receipt to the app through the **onPushMessageSentDelivered** event.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| HmsPush.RemoteMessageBuilder.SEND_MODE    | Sets whether to enable the message cache and resending capability of the Push Kit client. If this parameter is not set, messages cannot be cached or resent. For example, when the network is unavailable, messages are directly discarded. The value can be 0 or 1. The value 1 indicates that the cache and resending capability is enabled.                                                                                                                                                                                                                                                                                                                                                                                         |
| HmsPush.RemoteMessageBuilder.DATA         | Sets key-value pair data to a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

###### Call Example

```javascript
    await HmsLocalNotification.sendRemoteMessage(
      {
        [HmsPush.RemoteMessageBuilder.TO]: '',
        //[RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
        [HmsPush.RemoteMessageBuilder.MESSAGE_TYPE]: 'hms',
        [HmsPush.RemoteMessageBuilder.COLLAPSE_KEY]: '-1',
        [HmsPush.RemoteMessageBuilder.TTL]: 120,
        [HmsPush.RemoteMessageBuilder.RECEIPT_MODE]: 1,
        [HmsPush.RemoteMessageBuilder.SEND_MODE]: 1,
        [HmsPush.RemoteMessageBuilder.DATA]: { key1: 'test', message: 'huawei-test' },
      }
    );
```

### **CordovaRemoteMessage**

Represents a message entity class encapsulated using JavaScript. You can use the get methods in this class to receive data messages that are obtained. This class maps the native class RemoteMessage of the Android Push SDK.

#### Fields

| Name             | Value  | Description                                                |
| ---------------- | ------ | ---------------------------------------------------------- |
| PRIORITY_UNKNOWN | 0      | Unknown priority.                                          |
| PRIORITY_HIGH    | 1      | High priority.                                             |
| PRIORITY_NORMAL  | 2      | Normal priority.                                           |
| COLLAPSEKEY      | String | The classification identifier (collapse key) of a message. |
| DATA             | String | The payload of a message.                                  |
| DATAOFMAP        | String | The payload of a Map message.                              |
| MESSAGEID        | String | The ID of a message.                                       |
| MESSAGETYPE      | String | The type of a message                                      |
| ORIGINALURGENCY  | String | The message priority set by the App.                       |
| URGENCY          | String | The message priority set on the HUAWEI Push Kit server.    |
| TTL              | String | The maximum cache duration of a message.                   |
| SENTTIME         | String | The time when a message is sent from the server.           |
| TO               | String | The recipient of a message.                                |
| FROM             | String | The source of a message.                                   |
| TOKEN            | String | The token in a message.                                    |

#### Public Method Summary

| Method                     | Return Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getCollapseKey()           | String      | This method is used to obtain the classification identifier (collapse key) of a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| getData()                  | String      | This method is used to obtain the payload of a message. Data obtained using the getData method is of the String type instead of the Map type of Java. You can determine the parsing rule of the data format. If data in the key-value format is transferred on the HUAWEI Push console, the data is converted into a JSON string and needs to be parsed. If data transmitted through HUAWEI Push is of high sensitivity and confidentiality, it is recommended that the message body be encrypted and decrypted by yourselves for security. |
| getDataOfMap()             | Object      | This method is used to obtain the payload of a Map message. Different from the getData method, this method directly returns a Map data instance or null (indicating an empty Map data instance).                                                                                                                                                                                                                                                                                                                                            |
| getMessageId()             | String      | This method is used to obtain the ID of a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| getMessageType()           | String      | This method is used to obtain the type of a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| getOriginalUrgency()       | Number      | This method is used to obtain the message priority set by the app when it sends a message through an API of the HUAWEI Push Kit server.                                                                                                                                                                                                                                                                                                                                                                                                     |
| getUrgency()               | Number      | This method is used to obtain the message priority set on the HUAWEI Push Kit server.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| getTtl()                   | Number      | This method is used to obtain the maximum cache duration (in seconds) of a message. For a downstream message, the value of ttl in the AndroidConfig structure is returned.                                                                                                                                                                                                                                                                                                                                                                  |
| getSentTime()              | Number      | This method is used to obtain the time (in milliseconds) when a message is sent from the server.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| getTo()                    | String      | This method is used to obtain the recipient of a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| getFrom()                  | String      | This method is used to obtain the source of a message. The value returned is the same as that set in the message body on the HUAWEI Push Kit server.                                                                                                                                                                                                                                                                                                                                                                                        |
| getToken()                 | String      | This method is used to obtain the token in a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| getNotificationTitle()     | String      | This method is used to obtain the title of a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| getTitleLocalizationKey()  | String      | This method is used to obtain the key of the localized title of a notification message for message display localization. To implement localization for notification messages, the key must be consistent with the node name defined in the strings.xml file of the app.                                                                                                                                                                                                                                                                     |
| getTitleLocalizationArgs() | Array       | This method is used to obtain variable string values in the localized title of a notification message. It must be used together with the getTitleLocalizationKey method. The key obtained by the getTitleLocalizationKey() method must be the same as the node name in the strings.xml file of the app, and the number of variable string values obtained by the getTitleLocalizationArgs method cannot be smaller than the number of placeholders in the value mapping the key in the strings.xml file.                                    |
| getBodyLocalizationKey()   | String      | This method is used to obtain the key of the localized content of a notification message for message display localization. To implement localization for notification messages, the key must be consistent with the node name defined in the strings.xml file of the app.                                                                                                                                                                                                                                                                   |
| getBodyLocalizationArgs()  | Array       | This method is used to obtain variable string values in the localized content of a message. It must be used together with the getBodyLocalizationKey method. The key obtained by the getBodyLocalizationKey() method must be the same as the node name in the strings.xml file of the app, and the number of variable string values obtained by the getBodyLocalizationArgs method cannot be smaller than the number of placeholders in the value mapping the key in the strings.xml file.                                                  |
| getBody()                  | String      | This method is used to obtain the displayed content of a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| getIcon()                  | String      | This method is used to obtain the image resource name of a notification icon. On an Android device, all icon files are stored in the /res/raw/** directory of the app.                                                                                                                                                                                                                                                                                                                                                                      |
| getSound()                 | String      | This method is used to obtain the name of an audio resource to be played when a notification message is displayed. On an Android device, all audio files are stored in the /res/raw/** directory of the app. If no audio resource is set, set this parameter to null.                                                                                                                                                                                                                                                                       |
| getTag()                   | String      | This method is used to obtain the tag from a message for message overwriting. A message will be overwritten by another message with the same tag but is sent later.                                                                                                                                                                                                                                                                                                                                                                         |
| getColor()                 | String      | This method is used to obtain the colors (in #RRGGBB format) of icons in a message.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| getClickAction()           | String      | This method is used to obtain the action triggered upon notification message tapping. If no action is specified, null is returned.                                                                                                                                                                                                                                                                                                                                                                                                          |
| getChannelId()             | String      | This method is used to obtain IDs of channels that support the display of a message. If no channel is set, null is returned.                                                                                                                                                                                                                                                                                                                                                                                                                |
| getImageUrl()              | Object      | This method is used to obtain the URL of an image in a message. The image URL must be a URL that can be accessed from the public network.                                                                                                                                                                                                                                                                                                                                                                                                   |
| getLink()                  | Object      | This method is used to obtain the deep link from a message. A deep link is a specific URL, such as the URL of a web page or rich media. If no URL is set, null is returned.                                                                                                                                                                                                                                                                                                                                                                 |
| getNotifyId()              | Number      | This method is used to obtain the unique ID of a message. Different messages can have the same value of NotifyId, so that new messages can overwrite old messages.                                                                                                                                                                                                                                                                                                                                                                          |
| isDefaultLight()           | Boolean     | This method is used to check whether a notification message uses the default notification light settings.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| isDefaultSound()           | Boolean     | This method is used to check whether a notification message uses the default sound.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| isDefaultVibrate()         | Boolean     | This method is used to check whether a notification message uses the default vibration mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| getWhen()                  | Number      | This method is used to obtain the time (in milliseconds) when an event occurs from a notification message. Developers can sort notification messages by this time.                                                                                                                                                                                                                                                                                                                                                                          |
| getLightSettings()         | Array       | This method is used to obtain the blinking frequency and color of a breathing light.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| getBadgeNumber()           | Number      | This method is used to obtain the number of notification messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| isAutoCancel()             | Boolean     | This method is used to check whether a notification message is sticky. If true is returned, the notification message will disappear after a user taps it. If false is returned, the notification message will not disappear after a user taps it, but the user can swipe right or tap the trash can icon to delete the message.                                                                                                                                                                                                             |
| getImportance()            | Number      | This method is used to obtain the priority of a notification message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| getTicker()                | String      | This method is used to obtain the text to be displayed on the status bar for a notification message.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| getVibrateConfig()         | Array       | This method is used to obtain the vibration mode of a message. For details, please refer to the description of vibrate_config in the AndroidNotification structure in Sending Messages.                                                                                                                                                                                                                                                                                                                                                     |
| getVisibility()            | Number      | This method is used to obtain the visibility of a notification message. For details, please refer to the definition of visibility in the AndroidNotification structure.                                                                                                                                                                                                                                                                                                                                                                     |
| getIntentUri()             | String      | This method is used to obtain the intent in a notification message. The intent can be opening a page specified by the app. For details, please refer to the definition of the intent parameter in the ClickAction structure in Sending Messages of the development guide.                                                                                                                                                                                                                                                                   |
| parseMsgAllAttribute()     | String      | Returns a string representation of the remote message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

###### Call Example

```javascript
  HmsPushEvent.onRemoteMessageReceived((result)=>{
    const CordovaRemoteMessageObj = new HmsPush.CordovaRemoteMessage(result.msg);
    const msg = CordovaRemoteMessageObj.parseMsgAllAttribute();
    console.log("msg",msg);
  })
```

#### RNRemoteMessage.NOTIFICATION

| Field                                                   |
| ------------------------------------------------------- |
| CordovaRemoteMessage.NOTIFICATION.TITLE                 |
| CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONKEY  |
| CordovaRemoteMessage.NOTIFICATION.TITLELOCALIZATIONARGS |
| CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONKEY   |
| CordovaRemoteMessage.NOTIFICATION.BODYLOCALIZATIONARGS  |
| CordovaRemoteMessage.NOTIFICATION.BODY                  |
| CordovaRemoteMessage.NOTIFICATION.ICON                  |
| CordovaRemoteMessage.NOTIFICATION.SOUND                 |
| CordovaRemoteMessage.NOTIFICATION.TAG                   |
| CordovaRemoteMessage.NOTIFICATION.COLOR                 |
| CordovaRemoteMessage.NOTIFICATION.CLICKACTION           |
| CordovaRemoteMessage.NOTIFICATION.CHANNELID             |
| CordovaRemoteMessage.NOTIFICATION.IMAGEURL              |
| CordovaRemoteMessage.NOTIFICATION.LINK                  |
| CordovaRemoteMessage.NOTIFICATION.NOTIFYID              |
| CordovaRemoteMessage.NOTIFICATION.WHEN                  |
| CordovaRemoteMessage.NOTIFICATION.LIGHTSETTINGS         |
| CordovaRemoteMessage.NOTIFICATION.BADGENUMBER           |
| CordovaRemoteMessage.NOTIFICATION.IMPORTANCE            |
| CordovaRemoteMessage.NOTIFICATION.TICKER                |
| CordovaRemoteMessage.NOTIFICATION.VIBRATECONFIG         |
| CordovaRemoteMessage.NOTIFICATION.VISIBILITY            |
| CordovaRemoteMessage.NOTIFICATION.INTENTURI             |
| CordovaRemoteMessage.NOTIFICATION.ISAUTOCANCEL          |
| CordovaRemoteMessage.NOTIFICATION.ISLOCALONLY           |
| CordovaRemoteMessage.NOTIFICATION.ISDEFAULTLIGHT        |
| CordovaRemoteMessage.NOTIFICATION.ISDEFAULTSOUND        |
| CordovaRemoteMessage.NOTIFICATION.ISDEFAULTVIBRATE      |

### **HmsPushEvent**

#### Events

| Event                           | Description                                                               |
| ------------------------------- | ------------------------------------------------------------------------- |
| REMOTE_DATA_MESSAGE_RECEIVED    | Event emitted when a data message is received.                            |
| TOKEN_RECEIVED_EVENT            | Event emitted when a new token is received.                               |
| ON_TOKEN_ERROR_EVENT            | Event emitted when there was an error with the new token request.         |
| CUSTOM_INTEN_EVENT              | Event emitted when there was a custom intent in notification              |
| NOTIFICATION_OPENED_EVENT       | Event emitted when the user clicks to a pushed notification.              |
| LOCAL_NOTIFICATION_ACTION_EVENT | Event emitted when the user clicks to a notification action button.       |
| ON_PUSH_MESSAGE_SENT            | Event emitted when an uplink message is sent.                             |
| ON_PUSH_MESSAGE_SENT_ERROR      | Event emitted when there was an error with the uplink message to be sent. |
| ON_PUSH_MESSAGE_SENT_DELIVERED  | Event emitted when the uplink message is delivered.                       |

#### Listeners

#### HmsPushEvent.onRemoteMessageReceived((result)=>{})

Listens for the HmsPushEvent.REMOTE_DATA_MESSAGE_RECEIVED events. The result is an object encapsulating the instance of the remoteMessage received in "**msg**" field.

###### Call Example

```javascript
HmsPushEvent.onRemoteMessageReceived((result)=>{
    const CordovaRemoteMessageObj = new HmsPush.CordovaRemoteMessage(result.msg);
    const msg = CordovaRemoteMessageObj.parseMsgAllAttribute();
    console.log("msg",msg);
  })
```

#### HmsPushEvent.onTokenReceived((result)=>{})

Listens for the HmsPushEvent.TOKEN_RECEIVED_EVENT events. The result is an object encapsulating the string representation of the token received in "**token**" field.

###### Call Example

```javascript
HmsPushEvent.onTokenReceived((result)=>{
    console.log('[onTokenReceived]: ' + result.token);
  })
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

#### HmsPushEvent.onLocalNotificationAction((result)=>{})

Listens for the HmsPushEvent.LOCAL_NOTIFICATION_ACTION_EVENT events. The result is the object encapsulating the actions.

###### Call Example

```javascript
HmsPushEvent.onLocalNotificationAction((result)=>{
    console.log("LOCAL_NOTIFICATION_ACTION_EVENT",JSON.stringify(result));
  })
```

#### HmsPushEvent.onNotificationOpenedApp((result)=>{})

Listens for the HmsPushEvent.NOTIFICATION_OPENED_EVENT events. The result is an object representing the clicked remoteMessage.

###### Call Example

```javascript
HmsPushEvent.onNotificationOpenedApp((result)=>{
    console.log("NOTIFICATION_OPENED_EVENT",JSON.stringify(result));
  })
```

#### HmsPushEvent.onCustomIntent((result)=>{})

Listens for the HmsPushEvent.CUSTOM_INTENT_EVENT events. The result is an object representing the clicked remoteMessage.

###### Call Example

```javascript
  HmsPushEvent.onCustomIntent((result)=>{
    console.log("CUSTOM_INTENT_EVENT",JSON.stringify(result));
  })
```

### **HmsLogger**

Includes the methods for enabling and disabling HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality.

#### HmsPush.enableLogger

Enables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality.

| Return         | Definition                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Promise\<void> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

#### Call Example

```javascript
async function enableLogger() {
    try {
        await HmsPush.enableLogger();
    } catch (ex) {
        console.log(ex)
    }
}
```

#### HmsPush.disableLogger

Disables HMSLogger capability which is used for sending usage analytics of Push SDK's methods to improve the service quality.

| Return         | Definition                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Promise\<void> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error. |

#### Call Example

```javascript
async function disableLogger() {
    try {
        await HmsPush.disableLogger();
    } catch (ex) {
        console.log(ex)
    }
}
```

### **HmsPushResultCode**

#### Constants

| Name                                      | ResultCode | Description                                                                                                                                           |
| ----------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SUCCESS                                   | 0          | Success                                                                                                                                               |
| ERROR                                     | -1         | Error                                                                                                                                                 |
| NULL_BUNDLE                               | 333        | Bundle is null, exception                                                                                                                             |
| ERROR_NO_TOKEN                            | 907122030  | You do not have a token. Apply for a token.                                                                                                           |
| ERROR_NO_NETWORK                          | 907122031  | The current network is unavailable. Check the network connection.                                                                                     |
| ERROR_TOKEN_INVALID                       | 907122032  | The token has expired. Delete the token and apply for a new one.                                                                                      |
| ERROR_SERVICE_NOT_AVAILABLE               | 907122046  | If the Push service is unavailable, contact Huawei technical support.                                                                                 |
| ERROR_PUSH_SERVER                         | 907122047  | If the Push server returns an error, contact Huawei technical support.                                                                                |
| ERROR_UNKNOWN                             | 907122045  | Unknown error. Contact Huawei technical support.                                                                                                      |
| ERROR_TOPIC_EXCEED                        | 907122034  | The number of subscribed topics exceeds 2000.                                                                                                         |
| ERROR_TOPIC_SEND                          | 907122035  | Failed to send the subscription topic. Contact Huawei technical support.                                                                              |
| ERROR_NO_RIGHT                            | 907122036  | Push rights are not enabled. Enable the service and set push service parameters at AppGallery Connect.                                                |
| ERROR_GET_TOKEN_ERR                       | 907122037  | Failed to apply for the token. Contact Huawei technical support.                                                                                      |
| ERROR_STORAGE_LOCATION_EMPTY              | 907122038  | No storage location is selected for the application or the storage location is invalid.                                                               |
| ERROR_NOT_ALLOW_CROSS_APPLY               | 907122053  | Failed to apply for a token. Cross-region token application is not allowed.                                                                           |
| ERROR_SIZE                                | 907122041  | The message body size exceeds the maximum.                                                                                                            |
| ERROR_INVALID_PARAMETERS                  | 907122042  | The message contains invalid parameters.                                                                                                              |
| ERROR_TOO_MANY_MESSAGES                   | 907122043  | The number of sent messages reaches the upper limit. The messages will be discarded.                                                                  |
| ERROR_TTL_EXCEED                          | 907122044  | The message lifetime expires before the message is successfully sent to the APP server.                                                               |
| ERROR_HMS_CLIENT_API                      | 907122048  | Huawei Mobile Services (APK) can't connect  Huawei Push  Kit.                                                                                         |
| ERROR_OPERATION_NOT_SUPPORTED             | 907122049  | The current EMUI version is too early to use the capability.                                                                                          |
| ERROR_MAIN_THREAD                         | 907122050  | The operation cannot be performed in the main thread.                                                                                                 |
| ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING | 907122051  | The device certificate authentication fails.                                                                                                          |
| ERROR_BIND_SERVICE_SELF_MAPPING           | 907122052  | Failed to bind the service.                                                                                                                           |
| ERROR_ARGUMENTS_INVALID                   | 907122054  | The input parameter is incorrect. Check whether the related configuration information is correct.                                                     |
| ERROR_INTERNAL_ERROR                      | 907135000  | Internal Push error. Contact Huawei technical support engineers.                                                                                      |
| ERROR_NAMING_INVALID                      | 907135001  | Internal Push error. Contact Huawei technical support engineers.                                                                                      |
| ERROR_CLIENT_API_INVALID                  | 907135002  | The ApiClient object is invalid.                                                                                                                      |
| ERROR_EXECUTE_TIMEOUT                     | 907135003  | Invoking AIDL times out. Contact Huawei technical support.                                                                                            |
| ERROR_NOT_IN_SERVICE                      | 907135004  | The current area does not support this service.                                                                                                       |
| ERROR_SESSION_INVALID                     | 907135005  | If the AIDL connection session is invalid, contact Huawei technical support.                                                                          |
| ERROR_API_NOT_SPECIFIED                   | 907135006  | An error occurred when invoking an unspecified API.                                                                                                   |
| ERROR_GET_SCOPE_ERROR                     | 1002       | Failed to invoke the gateway to query the application scope.                                                                                          |
| ERROR_SCOPE_LIST_EMPTY                    | 907135700  | Scope is not configured on the AppGallery Connect.                                                                                                    |
| ERROR_CERT_FINGERPRINT_EMPTY              | 907135701  | The certificate fingerprint is not configured on the AppGallery Connect.                                                                              |
| ERROR_PERMISSION_LIST_EMPTY               | 907135702  | Permission is not configured on the AppGallery Connect.                                                                                               |
| ERROR_AUTH_INFO_NOT_EXIST                 | 907135703  | The authentication information of the application does not exist.                                                                                     |
| ERROR_CERT_FINGERPRINT_ERROR              | 6002       | An error occurred during certificate fingerprint verification. Check whether the correct certificate fingerprint is configured in AppGallery Connect. |
| ERROR_PERMISSION_NOT_EXIST                | 6003       | Interface authentication: The permission does not exist and is not applied for in AppGallery Connect.                                                 |
| ERROR_PERMISSION_NOT_AUTHORIZED           | 6005       | Interface authentication: unauthorized.                                                                                                               |
| ERROR_PERMISSION_EXPIRED                  | 6006       | Interface authentication: The authorization expires.                                                                                                  |

## 4. Configure parameters

No.

## 5. Licensing and Terms

Apache 2.0 license.
