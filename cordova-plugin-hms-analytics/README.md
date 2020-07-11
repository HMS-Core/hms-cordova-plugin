
# CORDOVA PLUGIN HMS ANALYTICS

  

1. Contents

2. Introduction

3. Installation Guide

4. Cordova SDK API Method Definition

5. Configure Description

6. Licensing and Terms

  

## 1. Contents

The Cordova SDK code encapsulates the Huawei analytics client interface. It provides many APIs for your reference or use.

  

The Cordova SDK code package is described as follows:

  

**src/android**: core layer, bridging AnalyticsSDK bottom-layer code;

  

**www/HMSAnalytics.js**: external interface definition layer, which is used to define interface classes or reference files.

  
  

## 2. Installation Guide


1. Download the Cordova Analytics SDK Plugin.

2.  Add Platform To Project.

    ***`cordova platform add android`***

3. Run the following command in the root directory of the Cordova project:

	***`cordova plugin add PATH_TO_CORDOVA_ANALYTICS_SDK`***

4. Check whether the Cordova Analytics SDK is successfully added to Plugin folder in the root directory of the Cordova project.

5. Add agconnect-services.json and jks file to root directory. 

6. Add build.json file to your project's root.

7. Import required package and add following code to onCreate function in MainActivity.java inside platforms\android\app\src\main\java .


8. Then run the Cordova app and check whether the automatically collected event can be properly reported in the **Real-time analysis** menu on the **Advanced analysis** page in HUAWEI Developer.
        
    ***`cordova run android`***


  
  
  

## 3. Cordova SDK API Method And Constant Definition

  
  

|Methods |Definition |
|-------------------------------|-----------------------------|
`enableLog` |This API is called to enable the HUAWEI Analytics Kit log function. |
`enableLogWithLevel` |This API is called to enable debug logs and set the minimum log level (minimum level of log records that will be printed). |
`setUserId` |This API is called to set user IDs. |
`setUserProfile` |This API is called to set user attributes. |
`setPushToken` |This API is called to set the push token, which can be obtained from HUAWEI Push Kit. |
`setMinActivitySessions` |This API is called to set the minimum interval between two sessions. |
`setSessionDuration` |This API is called to set the session timeout interval. |
`setCurrentActivity` |This API is called to set the current screen name, which is used to identify the currently displayed screen. |
`onEvent` |This API is called to delete all collected data cached locally, including cached data that failed to be sent. |
`clearCachedData` |This API is called to delete all collected data cached locally, including cached data that failed to be sent. |
`getAAID` |This API is called to obtain the app instance ID from AppGalleryConnect. |
`getUserProfiles` |This API is called to obtain user attributes in the A/B test. |

  
  
  

## Public Functions

  

### enableLog(success, error)

  

Enables the console log function of the SDK. The default level is DEBUG.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### enableLogWithLevel( logLevel, success, error)

  

Enables the console log function of the SDK. The log level is passed.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|logLevel| Log level. The value can be ***debug***, ***info***, ***warn*** or ***error***. The value is case insensitive.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  
  

### setUserId(userId, success, error)

This API is called to set user IDs.

  

When the API is called, a new session is generated if the old value of userId is not empty and is different from the new value.If you do not want to use userId to identify a user (for example, when a user signs out), you must set userId to null.

  

id: ID of a user. Huawei Analytics uses this ID to associate user data.The use of userId must comply with related privacy regulations. You need to declare the use of such information in the privacy statement of your app.

  
  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|userId| Indicates the user ID.This parameter cannot be empty and its value can contain a maximum of 256 characters.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### setUserProfile(key, value, success, error)

This API is called to set user attributes.The values of user attributes remain unchanged throughout the app lifecycle and during each session.A maximum of 25 user attributes are supported. If the name of an attribute set later is the same as that of an existing attribute, the value of the existing attribute is updated.

  
  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|key| Indicates the ID of a user attribute.The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore.|
|value| Indicates the attribute value,which is a non-empty string containing up to 256 characters.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### setPushToken(token, success, error)

  

This API is called to set the push token. After obtaining a push token through HUAWEI Push Kit, use this method to save the push token so that you can use the audience defined by HUAWEI Analytics to create HCM notification tasks.

  
  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|token| Push token, which is a non-empty string containing up to 256 characters.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  
  

### setMinActivitySessions(interval, success, error)

This API is called to set the minimum interval for starting a new session. A new session is generated when an app is switched back to the foreground after it runs in the background for the specified minimum interval. The default value is 30 seconds.

  
  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|interval| Indicates the minimum interval between two sessions.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### setSessionDuration(duration, success, error)

This API is called to set the session timeout interval. A new session is generated when an app keeps running in the foreground but the interval between two adjacent events exceeds the specified timeout interval. The default value is 30 minutes.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|duration| Indicates the session timeout interval.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### setCurrentActivity(activityName, screenClassOverride, success, error)

This API is called to set the current screen name, which is used to identify the currently displayed screen.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|activityName| Indicates the name of the current activity screen, which is mandatory.This parameter cannot be empty and its value can contain a maximum of 256 characters.|
|screenClassOverride| Indicates the screen class name, which is optional. If this parameter is set to null or left empty, the class name of the current activity is used.The value can contain a maximum of 256 characters.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### onEvent(key, value, success, error)

This API is called to record events.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|key| Indicates the ID of a customized event.The value cannot be empty and can contain a maximum of 256 characters, including digits, letters, and underscores (_). It cannot start with a digit or underscore. The value of this parameter cannot be an ID of an automatically collected event.
|value| Indicates the information carried by the event.The number of built-in key-value pairs in the object cannot exceed 2048 and the size cannot exceed 200 KB. The key value in the object cannot contain spaces or invisible characters.|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### clearCachedData(success, error)

This API is called to delete all collected data cached locally, including cached data that failed to be sent.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  

### getAAID(success, error)

This API is called to obtain the app instance ID from AppGallery Connect.

  
  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|

  
  
  

### getUserProfiles(predefined, success, error)

This API is called to obtain predefined and custom user attributes in the A/B test.

  

| Parameters | Definition |
|-------------------------------|-----------------------------|
|predefined| Indicates whether to obtain predefined user attributes.***True:*** obtains predefined user attributes ***False:*** obtains developer-defined user attributes|
|success | A callback function. It is called when function is executed successfully.|
|error| A callback function. It is called when function is failed.|


## Constants

| Name | Definition |
|-------------------------------|-----------------------------|
|HMSAnalytics.HAParamType| provides the IDs of all predefined parameters, including the ID constants of predefined parameters and user attributes.|
|HMSAnalytics.HAEventType | provides the ID constants of all predefined events.|


## 4. Configure Description

No

  
  

## 5. Licensing and Terms

Apache 2.0 license.