# cordova-plugin-hms-location

---

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

This Cordova SDK code encapsulates the Huawei Location Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

* **src/main/com/huawei/hms/cordova/location**: core layer that exposes LocationKitSDK functionality to JS side.
* **www/**: Public interfaces for interacting LocationKitSDK through Cordova.

---

## 2. Installation Guide

### Cordova

1. Add Android platform to your project if you haven't yet.

```bash
cordova platform add android
```

2. Add this plugin to your project by running the following command in root directory of your project:

```bash
cordova plugin add @hmscore/cordova-hms-plugin-location
```

1. Run your app.

```bash
cordova run android
```

### Ionic

1. Add this plugin to your project by running the following command in root directory of your project:

```bash
npm install @hmscore/cordova-hms-plugin-location
```

2. For full Ionic support you should also install the Ionic wrapper. Firstly, install `@ionic-native/core`:

```bash
npm install @ionic-native/core
```

3. Copy the folder `node_modules/@hmscore/cordova-plugin-hms-location/ionic/dist/hms-location` into `node_modules/@ionic-native`.

4. Compile and run ionic project.

```bash
ionic build
npx cap init [appName] [appId]
npx capacitor add android
ionic capacitor run android
```

## 3. API Reference

### Modules Overview

| Module                                                  | Description                                                                                                                                                                                               |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [HMSLocationKit](#hmslocationkit)                       | A module for initializing the package and enabling/disabling logger.                                                                                                                                      |
| [HMSFusedLocation](#hmsfusedlocation)                   | With this module you can check the device location settings, get the last known location information once or continuously, set mock location and others                                                   |
| [HMSActivityIdentification](#hmsactivityidentification) | If your app needs to obtain the activity status of the user's device (for example, walking, running, or bicycling) or your app needs to detect activity status change of a user, you can use this module. |
| [HMSGeofence](#hmsgeofence)                             | If you are interested in a place, you can create a geofence based on the place. When the device enters the geofence or stays for a duration of time, a notification can be sent to your app.              |

### Common Method Summary

| Return Type | Function                               | Description                                              |
| ----------- | -------------------------------------- | -------------------------------------------------------- |
| void        | registerHMSEvent(eventName, handler)   | This method is used to register HMS events in runtime.   |
| void        | unregisterHMSEvent(eventName, handler) | This method is used to unregister registered HMS events. |

### HMSLocationKit

#### Public Method Summary

| Return Type     | Function        | Description                                                                                                                                   |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Promise\<void\> | init()          | Initialize plugin.                                                                                                                            |
| Promise\<void\> | enableLogger()  | This method enables HMSLogger capability which is used for sending usage analytics of Location SDK's methods to improve the service quality.  |
| Promise\<void\> | disableLogger() | This method disables HMSLogger capability which is used for sending usage analytics of Location SDK's methods to improve the service quality. |

### HMSFusedLocation

#### Data Types

##### Location

| Field                        | Type    |                                                                                                                         |
| ---------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| latitude                     | Float   | Latitude of a location. If no latitude is available, 0.0 is returned.                                                   |
| longitude                    | Float   | Longitude of a location. If no longitude is available, 0.0 is returned.                                                 |
| speed                        | Float   | Speed of a device at the current location, in meters per second. If no speed is available, 0.0 is returned.             |
| bearing                      | Float   | Bearing of a device at the current location, in degrees. If no bearing is available, 0.0 is returned.                   |
| accuracy                     | Float   | Horizontal error of a location, in meters. If no horizontal error is available, 0.0 is returned.                        |
| verticalAccuracyMeters       | Float   | Vertical error of a location, in meters. If no vertical error is available, 0.0 is returned.                            |
| bearingAccuracyDegrees       | Float   | Bearing error of the current location, in degrees. If no bearing error is available, 0.0 is returned.                   |
| speedAccuracyMetersPerSecond | Float   | Speed error of a device at the current location, in meters per second. If no speed error is available, 0.0 is returned. |
| time                         | Float   | Current timestamp, in milliseconds.                                                                                     |
| fromMockProvider             | Boolean | Indicates whether location coming from mock provider.                                                                   |

##### LocationRequest

| Field                  | Type    | Description                                                                                                                                                                                                  |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| priority               | Number  | Request priority. The default value is 100.                                                                                                                                                                  |
| interval               | Float   | Request interval, in milliseconds. The default value is 3600000.                                                                                                                                             |
| numUpdates             | Number  | Number of requested location updates.                                                                                                                                                                        |
| fastestInterval        | Float   | Shortest request interval, in milliseconds. The default value is 600000. If another app initiates a location request, the location is also reported to the app at the interval specified in fastestInterval. |
| expirationTime         | Float   | Request expiration time, in milliseconds.                                                                                                                                                                    |
| expirationTimeDuration | Float   | Request expiration duration, in milliseconds.                                                                                                                                                                |
| smallestDisplacement   | Float   | Minimum displacement between location updates, in meters.                                                                                                                                                    |
| maxWaitTime            | Float   | Maximum waiting timeIndicates whether to return the address information. The default value is false.                                                                                                         |
| needAddress            | Boolean | Indicates whether to return the address information. The default value is false.                                                                                                                             |
| language               | String  | Language. The value consists of two letters and complies with the ISO 639-1 international standard. By default, the value is empty.                                                                          |
| countryCode            | String  | Country code. The value consists of two letters and complies with the ISO 3166-1 international standard. By default, the value is empty.                                                                     |

##### LocationSettingsRequest

| Fields           | Type                                | Description                                                                                                  |
| ---------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| locationRequests | [LocationRequest](#locationrequest) | Collection of LocationRequest object.                                                                        |
| needBle          | Boolean                             | Indicates whether BLE scanning needs to be enabled. The options are true (yes) and false (no).               |
| alwaysShow       | Boolean                             | Indicates whether a location is required for the app to continue. The options are true (yes) and false (no). |

##### NavigationResult

| Fields      | Type   |                                       |
| ----------- | ------ | ------------------------------------- |
| state       | String | Status information.                   |
| possibility | String | Confidence of the status information. |

##### LatLng

| Fields    | Type  | Description              |
| --------- | ----- | ------------------------ |
| longitude | float | Longitude of a location. |
| latitude  | float | Latitude of a location.  |

##### LocationSettingsStates

| Fields                   | Type    | Description                       |
| ------------------------ | ------- | --------------------------------- |
| isBlePresent             | boolean | Ble is present or not             |
| isBleUsable              | boolean | Ble is usable or not              |
| isGpsPresent             | boolean | Gps is present or not             |
| isGpsUsable              | boolean | Gps is usable or not              |
| isLocationPresent        | boolean | Location is present or not        |
| isLocationUsable         | boolean | Location is usable or not         |
| isNetworkLocationPresent | boolean | NetworkLocation is present or not |
| isNetworkLocationUsable  | boolean | NetworkLocation is usable or not  |

##### LocationPermissionResult

| Fields             | Type    | Description         |
| ------------------ | ------- | ------------------- |
| granted            | boolean | Granted             |
| fineLocation       | boolean | Fine location       |
| coarseLocation     | boolean | Coarse location     |
| backgroundLocation | boolean | Background location |

##### LocationAvailability

| Fields              | Type    | Description                                    |
| ------------------- | ------- | ---------------------------------------------- |
| isLocationAvailable | boolean | Indicates if the location is available or not. |

##### HasPermission

| Fields        | Type    | Description                                      |
| ------------- | ------- | ------------------------------------------------ |
| hasPermission | boolean | Indicates if the permission is available or not. |

##### IdResult

| Fields | Type   | Description    |
| ------ | ------ | -------------- |
| id     | string | The id result. |

#### Constants

##### Events

| Name            | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| SCANNING_RESULT | Name of event which is triggered after scan.  The value is "onScanningResult". |

##### PriorityConstants

| Name                             | Description                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| PRIORITY_BALANCED_POWER_ACCURACY | Used to request the block-level location. The value is 102.                                                    |
| PRIORITY_HIGH_ACCURACY           | Used to request the most accurate location. The value is 100.                                                  |
| PRIORITY_LOW_POWER               | Used to request the city-level location. The value is 104.                                                     |
| PRIORITY_NO_POWER                | Used to request the location with the optimal accuracy without additional power consumption. The value is 105. |

##### NavigationRequestConstants

| Name          | Description                                                                        |
| ------------- | ---------------------------------------------------------------------------------- |
| IS_SUPPORT_EX | Used to check whether the device supports high-precision location. The value is 2. |

#### Public Method Summary

| Return Type                                                      | Function                                                                                         | Description                                                                                                                                                                                                          |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Promise\<void\>                                                  | init()                                                                                           | Initialize plugin.                                                                                                                                                                                                   |
| Promise\<void\>                                                  | flushLocations()                                                                                 | This API is used to update locations being processed.                                                                                                                                                                |
| Promise\<[LocationSettingsState](#locationsettingsstates)\>      | checkLocationSettings(locationRequest:[LocationSettingsRequest](#locationsettingsrequest))       | This API is used to check whether related location settings are available.                                                                                                                                           |
| Promise\<[NavigationResult](#navigationresult)\>                 | getNavigationContextState(requestType:[NavigationRequestConstants](#navigationrequestconstants)) | This API is used for obtaining navigation status and checking whether the user device supports high-precision location.                                                                                              |
| Promise\<[Location](#location)\>                                 | getLastLocation()                                                                                | This API is used to obtain the latest available location.                                                                                                                                                            |
| Promise\<[LocationAvailability](#locationavailability)\>         | getLocationAvailability()                                                                        | This API is used to check whether the location data is available.                                                                                                                                                    |
| Promise\<[IdResult](#idresult)\>                                 | removeLocationUpdates(requestCode)                                                               | This API is used to remove location updates of the specified callback information.                                                                                                                                   |
| Promise\<[IdResult](#idresult)\>                                 | requestLocationUpdates(locationRequest:[LocationRequest](#locationrequest))                      | This API is used to request location updates.                                                                                                                                                                        |
| Promise\<[IdResult](#idresult)\>                                 | requestLocationUpdatesEx(locationRequest:[LocationRequest](#locationrequest))                    | This is an extended location service API that supports high-precision location and is compatible with common location APIs.                                                                                          |
| Promise\<void\>                                                  | setMockMode(isMockMode)                                                                          | This API is used to specify whether the location provider uses the location mock mode. If yes, the GPS or network location is not used and the location set through setMockLocation (Location) is directly returned. |
| Promise\<boolean\>                                               | setMockLocation(mockLocation:[LatLng](#latlng))                                                  | This API is used to update locations being processed.                                                                                                                                                                |
| Promise\<[HWLocation](#hwlocation)\>                             | getLastLocationWithAddress(locationRequest:[LocationRequest](#locationrequest))                  | This API is used to obtain the available location of the last request, including the detailed address information.                                                                                                   |
| Promise\<[LocationPermissionResult](#locationpermissionresult)\> | requestPermission()                                                                              | This API is used to request permission to use location services.                                                                                                                                                     |
| Promise\<[HasPermission](#haspermission)\>                       | hasPermission()                                                                                  | This API is used to check if the permission to use location services has been granted.                                                                                                                               |

### HMSActivityIdentification

#### Data Types

##### ActivityConversionInfo


| Fields         | Type | Description                                                                                                                     |
| -------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| conversionType | Int  | Activity conversion information. The options are  Activities.ENTER_ACTIVITY_CONVERSION and Activities.EXIT_ACTIVITY_CONVERSION. |
| activityType   | Int  | Activity type. Please refer to Constants to see options.                                                                        |

##### ActivityConversionData

| Fields                | Type  | Description                                                                                                                               |
| --------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| conversionType        | Int   | Activity type. Please refer to Constants to see options.                                                                                  |
| elapsedTimeFromReboot | Float | The elapsed real time (in milliseconds) of this conversion since boot, including sleeping time obtained by SystemClock.elapsedRealtime(). |
| conversionType        | Int   | Activity conversion information. The options are  Activities.ENTER_ACTIVITY_CONVERSION and Activities.EXIT_ACTIVITY_CONVERSION.           |

##### ActivityConversionRequest

| Fields         | Type | Description      |
| -------------- | ---- | ---------------- |
| conversionType | Int  | Conversion type. |
| activityType   | Int  | Activity type.   |

##### ActivityConversionResponse

| Fields                  | Type                                              | Description                                                                                                       |
| ----------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| activityConversionDatas | [ActivityConversionData](#activityconversiondata) | All activity conversion events in the result. The obtained activity events are sorted by time in ascending order. |

##### ActivityIdentificationData

| Fields                 | Type | Description             |
| ---------------------- | ---- | ----------------------- |
| possibility            | Int  | Confidence information. |
| identificationActivity | Int  | Detected activity type. |

##### ActivityIdentificationResponse

| Fields                      | Type                                                      | Description                                                                                                                              |
| --------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| elapsedTimeFromReboot       | Int                                                       | The elapsed real time (in milliseconds) of this detection since boot, including sleeping time obtained by SystemClock.elapsedRealtime(). |
| mostActivityIdentification  | Int                                                       | The most probable activity identification of the user.                                                                                   |
| activityIdentificationDatas | [ActivityIdentificationData](#activityidentificationdata) | The list of activitiy identification list. The activity identifications are sorted by most probable activity first.                      |
| time                        | Int                                                       | The time of this identification, which is in milliseconds since January 1, 1970,obtained by System.currentTimeMillis().                  |

##### HWLocation

| Fields                 | Type   | Description                                                                                                                                        |
| ---------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| latitude               | number | Latitude of a location. If no latitude is available, 0.0 is returned.                                                                              |
| longitude              | number | Longitude of a location. If no longitude is available, 0.0 is returned.                                                                            |
| altitude               | number | Altitude of the current location. If no altitude is available, 0.0 will be returned.                                                               |
| speed                  | number | Speed of a device at the current location, in meters per second. If no speed is available, 0.0 is returned.                                        |
| bearing                | number | Bearing of a device at the current location, in degrees. If no bearing is available, 0.0 is returned.                                              |
| accuracy               | number | Horizontal error of a location, in meters. If no horizontal error is available, 0.0 is returned.                                                   |
| provider               | string | Location method, such as network location, GNSS, Wi-Fi, and Bluetooth. If no location method is available, null will be returned.                  |
| time                   | number | Current timestamp, in milliseconds.                                                                                                                |
| elapsedRealtimeNanos   | number | Time elapsed since system boot, in nanoseconds.                                                                                                    |
| countryName            | string | Country name. If no country name is available, null will be returned.                                                                              |
| state                  | string | Administrative region. If no administrative region is available, null will be returned.                                                            |
| city                   | string | City. If no city is available, null will be returned.                                                                                              |
| county                 | string | District/county. If no district/county is available, null will be returned.                                                                        |
| street                 | string | Street. If no street is available, null will be returned.                                                                                          |
| featureName            | string | Feature building of the current location. If no feature building is available, null will be returned.                                              |
| postalCode             | string | Postal code of the current location. If no postal code is available, null will be returned.                                                        |
| phone                  | string | Phone number of the feature building (such as a store or company) of the current location. If no phone number is available, null will be returned. |
| url                    | string | Website of the feature building (such as a store or company) of the current location. If no website is available, null will be returned.           |
| extraInfo              | string | Additional information, which is a key-value pair. If no additional information is available, null will be returned.                               |
| verticalAccuracyMeters | number | Vertical error of a location, in meters. If no vertical error is available, 0.0 is returned.                                                       |
| bearingAccuracyDegrees | number | Bearing error of the current location, in degrees. If no bearing error is available, 0.0 is returned.                                              |

##### HasPermission

| Fields        | Type    | Description                                      |
| ------------- | ------- | ------------------------------------------------ |
| hasPermission | boolean | Indicates if the permission is available or not. |

##### ActivityPermissionResult

| Fields              | Type    | Description                       |
| ------------------- | ------- | --------------------------------- |
| granted             | boolean | Granted permission.               |
| activityRecognition | boolean | Activitiy recognation permission. |

##### RequestCodeResult

| Fields      | Type   | Description       |
| ----------- | ------ | ----------------- |
| requestCode | number | The request code. |

#### Constants

##### Events

| Name                           | Description                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| ACTIVITY_CONVERSION_RESULT     | Name of event which is triggered after activity conversion. The value is "onActivityConversionResult".        |
| ACTIVITY_IDENTIFICATION_RESULT | Name of event which is triggered after activity identification The value is "onActivityIdentificationResult". |

##### Activities

| Name    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| VEHICLE | The device user is in a vehicle, such as car. The value is 100.                |
| BIKE    | The device user is on a bicycle. The value is 101.                             |
| FOOT    | The device user is walking or running. The value is 102.                       |
| RUNNING | The device user is running, which is a sub-activity of FOOT. The value is 108. |
| STILL   | The device user is still. The value is 103                                     |
| TILTING | The device is in an obvious tilt status. The value is 105.                     |
| OTHERS  | The device is in other status. The value is 104.                               |
| WALKING | The device user is walking. It is a sub-activity of FOOT. The value is 107.    |

##### ActivitiyConversions

| Name                      | Description                                       |
| ------------------------- | ------------------------------------------------- |
| ENTER_ACTIVITY_CONVERSION | A user enters the given activity. The value is 0. |
| EXIT_ACTIVITY_CONVERSION  | A user exits the given activity. The value is 1.  |

#### Public Method Summary

| Return Type                                                      | Function                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Promise\<void\>                                                  | init()                                                                                                             | Initialize plugin.                                                                                                                 |
| Promise\<[RequestCodeResult](#requestcoderesult)\>               | createActivityConversionUpdates(activityConversionRequest:[ActivityConversionRequest](#activityconversionrequest)) | This API is used to activity conversions (entering and exit), for example, detecting user status change from walking to bicycling. |
| Promise\<[RequestCodeResult](#requestcoderesult)\>               | createActivityIdentificationUpdates(intervalMillis)                                                                | This API is used to register for activity identification updates.                                                                  |
| Promise\<void\>                                                  | deleteActivityConversionUpdates(requestCode)                                                                       | This API is used to remove activity conversion updates associated with the given pendingIntent object.                             |
| Promise\<void\>                                                  | deleteActivityIdentificationUpdates(requestCode)                                                                   | This API is used to remove all activity identification updates from the specified PendingIntent object.                            |
| Promise\<[ActivityPermissionResult](#activitypermissionresult)\> | requestPermission()                                                                                                | This API is used to request permission to use activity identification services.                                                    |
| Promise\<[HasPermission](#haspermission)\>                       | hasPermission()                                                                                                    | This API is used to check if the permission to use activity identfication services has been granted.                               |

### HMSGeofence

#### Data Types

##### Geofence

| Fields               | Type   | Description                                                                                                                                                                            |
| -------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| longitude            | Float  | Longitude. The value range is [-180,180].                                                                                                                                              |
| latitude             | Float  | Latitude. The value range is [-90,90].                                                                                                                                                 |
| radius               | Float  | Radius, in meters.                                                                                                                                                                     |
| uniqueId             | String | Unique ID. If the unique ID already exists, the new geofence will overwrite the old one.                                                                                               |
| conversions          | Number | Geofence conversions. The bitwise-OR operation is supported.                                                                                                                           |
| validContinueTime    | Float  | Geofence timeout interval, in milliseconds. The geofence will be automatically deleted after this amount of time.                                                                      |
| dwellDelayTime       | Number | Geofence timeout interval, in milliseconds. The geofence will be automatically deleted after this amount of time.                                                                      |
| notificationInterval | Number | Notification response capability. The default value is 0. Setting it to a larger value can reduce power consumption accordingly. However, reporting of geofence events may be delayed. |

##### GeofenceResponse

| Fields   | Type   | Description |
| -------- | ------ | ----------- |
| uniqueId | String | Unique id   |

##### GeofenceData

| Fields                 | Type   |                                                                |
| ---------------------- | ------ | -------------------------------------------------------------- |
| convertingGeofenceList | Array  | Information about converted geofences.                         |
| conversion             | Number | Geofence convert type.                                         |
| convertingLocation     | Array  | The location when a geofence is converted.                     |
| errorCode              | Number | Error code. For details, please refer to Cordova Result Codes. |
| errorMessage           | String | Detailed error message.                                        |

#### Constants

##### Events

| Name            | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| GEOFENCE_RESULT | Name of event which is triggered after geofence result. The value is "onGeofenceResult". |

##### GeofenceConstants

| Name                      | Description                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| ENTER_GEOFENCE_CONVERSION | A user enters the geofence. The value is 1.                          |
| EXIT_GEOFENCE_CONVERSION  | A user exits the geofence. The value is 2.                           |
| DWELL_GEOFENCE_CONVERSION | A user lingers in the geofence. The value is 4.                      |
| GEOFENCE_NEVER_EXPIRE     | No timeout interval is configured for the geofence. The value is -1. |

##### GeofenceRequestConstants

| Name                   | Description                                     |
| ---------------------- | ----------------------------------------------- |
| ENTER_INIT_CONVERSION  | de                                              |
| EXIT_INIT_CONVERSION   | de                                              |
| DWELL_INIT_CONVERSION  | de                                              |
| COORDINATE_TYPE_WGS_84 | Use the coordinate type WGS_84. The value is 1. |
| COORDINATE_TYPE_GCJ_02 | Use the coordinate type GCJ_02. The value is 0. |

#### Public Method Summary

| Return Type                                        | Function                                                                    | Description                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Promise\<void\>                                    | init()                                                                      | Initialize plugin.                                                                                    |
| Promise\<[RequestCodeResult](#requestcoderesult)\> | createGeofenceList([geofences](#geofence), initConversions, coordinateType) | This API is used to add multiple geofences.                                                           |
| Promise\<void\>                                    | deleteGeofenceList(geofenceRequestId)                                       | This API is used to remove geofences by their request IDs. An error is reported if the list is empty. |

---

## 4. Configuration and Description

No.

---

## 5. Sample Project

[Demo project in the Examples > Location Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin), there you can find more usage examples.

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

Huawei Location Kit Cordova Plugin uses the Apache 2.0 license.
