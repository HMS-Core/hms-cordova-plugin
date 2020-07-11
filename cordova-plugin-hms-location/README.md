# cordova-plugin-hms-location

## Contents

1. Introduction
2. Installation Guide
3. Cordova Example API Method Definition
4. Configure Description
5. Licensing and Terms

## 1. Introduction

This Cordova SDK code encapsulates the Huawei Location Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

- **src/main/com/huawei/hms/cordova/location**: core layer that exposes LocationKitSDK functionality to JS side.
- **www/**: Public interfaces for interacting LocationKitSDK through Cordova.

## 2. Installation Guide

1. Download `cordova-plugin-hms-location`.
2. Add Android platform to your project if you haven't yet.

``` shell
cordova platform add android
```

3. Add this plugin to your project by running the following command in root directory of your project:

``` shell
cordova plugin add PATH_TO_CORDOVA_LOCATION_PLUGIN
```

4. Run your app.

``` shell
cordova run android
```


## 3. Cordova SDK API method definitions

### Modules Overview

| Module                    | Description                                                                                                                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HMSLocationKit            | A module for initializing the package.                                                                                                                                                                    |
| HMSFusedLocation          | With this module you can check the device location settings, get the last known location information once or continuously, set mock location and others                                                   |
| HMSActivityIdentification | If your app needs to obtain the activity status of the user's device (for example, walking, running, or bicycling) or your app needs to detect activity status change of a user, you can use this module. |
| HMSGeofence               | If you are interested in a place, you can create a geofence based on the place. When the device enters the geofence or stays for a duration of time, a notification can be sent to your app.              |

### Common Functions

| Return Type | Function                               |
|-------------|----------------------------------------|
| void        | registerHMSEvent(eventName, handler)   |
| void        | unregisterHMSEvent(eventName, handler) |

### HMSLocationKit

| Return Type                    | Function                                    |
|--------------------------------|---------------------------------------------|
| Promise<>                      | init()                                      |

### HMSFusedLocation

#### Data Types

##### LocationData

| Field                        | Type    |                                                                                                                         |
|------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------|
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
|------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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

| Fields           | Type              | Description                                                                                                  |
|------------------|-------------------|--------------------------------------------------------------------------------------------------------------|
| locationRequests | [LocationRequest] | Collection of LocationRequest object.                                                                        |
| needBle          | Boolean           | Indicates whether BLE scanning needs to be enabled. The options are true (yes) and false (no).               |
| alwaysShow       | Boolean           | Indicates whether a location is required for the app to continue. The options are true (yes) and false (no). |

##### LatLng

| Fields    | Type  | Description              |
|-----------|-------|--------------------------|
| longitude | float | Longitude of a location. |
| latitude  | float | Latitude of a location.  |

##### LocationAvailability

| Fields              | Type    | Description                                    |
|---------------------|---------|------------------------------------------------|
| isLocationAvailable | boolean | Indicates if the location is available or not. |

##### HasPermission

| Fields        | Type    | Description                                      |
|---------------|---------|--------------------------------------------------|
| hasPermission | boolean | Indicates if the permission is available or not. |

##### RequestCode

| Fields      | Type | Description       |
|-------------|------|-------------------|
| requestCode |      | The request code. |

#### Functions

| Return Type                    | Function                                    |
|--------------------------------|---------------------------------------------|
| Promise<>                      | init()                                      |
| Promise<>                      | flushLocations()                            |
| Promise<LocationSettingsState> | checkLocationSettings(locationRequest)      |
| Promise<Location>              | getLastLocation()                           |
| Promise<LocationAvailability>  | getLocationAvailability()                   |
| Promise<RequestCode>           | removeLocationUpdates(requestCode)          |
| Promise<RequestCode>           | requestLocationUpdates(locationRequest)     |
| Promise<>                      | setMockMode(isMockMode)                     |
| Promise<>                      | setMockLocation(mockLocation)               |
| Promise<LocationData>          | getLastLocationWithAddress(locationRequest) |
| Promise<>                      | requestPermission()                         |
| Promise<HasPermission>         | hasPermission()                             |

### HMSActivityIdentification

#### Data Types

##### ActivityConversionInfo


| Fields         | Type | Description                                                                                                                     |
|----------------|------|---------------------------------------------------------------------------------------------------------------------------------|
| conversionType | Int  | Activity conversion information. The options are  Activities.ENTER_ACTIVITY_CONVERSION and Activities.EXIT_ACTIVITY_CONVERSION. |
| activityType   | Int  | Activity type. Please refer to Constants to see options.                                                                        |

##### ActivityConversionData

| Fields                | Type  | Description                                                                                                                               |
|-----------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------|
| conversionType        | Int   | Activity type. Please refer to Constants to see options.                                                                                  |
| elapsedTimeFromReboot | Float | The elapsed real time (in milliseconds) of this conversion since boot, including sleeping time obtained by SystemClock.elapsedRealtime(). |
| conversionType        | Int   | Activity conversion information. The options are  Activities.ENTER_ACTIVITY_CONVERSION and Activities.EXIT_ACTIVITY_CONVERSION.           |

##### ActivityConversionRequest

| Fields         | Type | Description      |
|----------------|------|------------------|
| conversionType | Int  | Conversion type. |
| activityType   | Int  | Activity type.   |

##### ActivityConversionResponse

| Fields                  | Type                     | Description                                                                                                       |
|-------------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| activityConversionDatas | [ActivityConversionData] | All activity conversion events in the result. The obtained activity events are sorted by time in ascending order. |

##### ActivityIdentificationData

| Fields                 | Type | Description             |
|------------------------|------|-------------------------|
| possibility            | Int  | Confidence information. |
| identificationActivity | Int  | Detected activity type. |

##### ActivityIdentificationResponse

| Fields                      | Type                         | Description                                                                                                                              |
|-----------------------------|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| elapsedTimeFromReboot       | Int                          | The elapsed real time (in milliseconds) of this detection since boot, including sleeping time obtained by SystemClock.elapsedRealtime(). |
| mostActivityIdentification  | Int                          | The most probable activity identification of the user.                                                                                   |
| activityIdentificationDatas | [ActivityIdentificationData] | The list of activitiy identification list. The activity identifications are sorted by most probable activity first.                      |
| time                        | Int                          | The time of this identification, which is in milliseconds since January 1, 1970,obtained by System.currentTimeMillis().                  |

##### HasPermission

| Fields        | Type    | Description                                      |
|---------------|---------|--------------------------------------------------|
| hasPermission | boolean | Indicates if the permission is available or not. |

##### RequestCode

| Fields      | Type | Description       |
|-------------|------|-------------------|
| requestCode |      | The request code. |

#### Functions

| Return Type            | Function                                                   |
|------------------------|------------------------------------------------------------|
| Promise<>              | init()                                                     |
| Promise<RequestCode>   | createActivityConversionUpdates(activityConversionRequest) |
| Promise<RequestCode>   | createActivityIdentificationUpdates(intervalMillis)        |
| Promise<>              | deleteActivityConversionUpdates(requestCode)               |
| Promise<>              | deleteActivityIdentificationUpdates(requestCode)           |
| Promise<>              | requestPermission()                                        |
| Promise<HasPermission> | hasPermission()                                            |

### HMSGeofence

#### Data Types

##### Geofence

| Fields               | Type   | Description                                                                                                                                                                            |
|----------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
|----------|--------|-------------|
| uniqueId | String | Unique id   |

##### GeofenceData

| Fields                 | Type   |                                                                |
|------------------------|--------|----------------------------------------------------------------|
| convertingGeofenceList | Array  | Information about converted geofences.                         |
| conversion             | Number | Geofence convert type.                                         |
| convertingLocation     | Array  | The location when a geofence is converted.                     |
| errorCode              | Number | Error code. For details, please refer to Cordova Result Codes. |
| errorMessage           | String | Detailed error message.                                        |

#### Functions

| Return Type               | Function                                                             |
|---------------------------|----------------------------------------------------------------------|
| Promise<>                 | init()                                                               |
| Promise<GeofenceResponse> | createGeofenceList(geofenceRequest, initConversions, coordinateType) |
| Promise<>                 | deleteGeofenceList(geofenceRequestId)                                |


### Usage Notes

By default every function returns a `Promise`. Alternatively you can use callback variations of these functions by prepending `cb` to the function name.

```javascript
// async version
try {
   let result = await HMSFusedLocation.setMockMode(true);
   console.log(message);
} catch (err) {
   console.log(err);
}

// callback version
HMSFusedLocation.cbSetMockMode(true,
   (result) => { // Success callback
      console.log(result);
   },
   (err)=>{ // Error callback
      console.log(err);
   }
);
```

---

## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
