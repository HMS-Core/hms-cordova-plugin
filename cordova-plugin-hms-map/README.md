# Cordova Plugin HMS MAP

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

This plugin enables communication between Huawei MAP SDK and Cordova platform. It exposes all functionality provided by Huawei MAP SDK.

---

## 2. Installation Guide

Before you get started, you must register as a HUAWEI Developer and complete identity verification on the [HUAWEI Developer](https://developer.huawei.com/consumer/en/) website. For details, please refer to [Register a HUAWEI ID](https://developer.huawei.com/consumer/en/doc/10104).

### 2.1. Creating a Project in AppGallery Connect   

Creating an app in AppGallery Connect is required in order to communicate with the Huawei services. To create an app, perform the following steps:

1. Sign in to [AppGallery Connect](https://developer.huawei.com/consumer/en/service/josp/agc/index.html)  and select **My projects**.
2. Select your project from the project list or create a new one by clicking the **Add Project** button.
3. Go to **Project Setting** > **General information**, and click **Add app**.
If an app exists in the project and you need to add a new one, expand the app selection area on the top of the page and click **Add app**.
4. On the **Add app** page, enter the app information, and click **OK**.

### 2.2. Configuring the Signing Certificate Fingerprint and Obtaining agconnect-services.json

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

3. Update the widget **`id`** property which is specified in the **`config.xml`** file. It must be same with **client > package_name** value of the **`agconnect-services.json`** file.

4. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

5. Install `HMS Map Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-map
    ```

    b. Or download the plugin from [Plugin > Map Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_map_plugin_path>
    ```

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
    cordova run android --device
    ```

### Ionic

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

4. Install `HMS Map Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-map
    ```

    b. Or download the plugin from [Plugin > Map Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_map_plugin_path>
    ```

5. Copy **hms-map** folder from **`node_modules/@hmscore/cordova-plugin-hms-map/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

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

3. Install `HMS Map Plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-map
    ```

   b. Or download the Plugin from [Plugin > Map Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_map_plugin_path>
    ```

4. Copy **hms-map** folder from **`node_modules/@hmscore/cordova-plugin-hms-map/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

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

---

## 3. API Reference

### HMSMap
Main class of the MapKit. The HuaweiMap class is the entry point for all map-related methods. You cannot instantiate a HuaweiMap object directly. Instead, you must obtain an object using the getMap() function from HMSMap class.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getMap(divId:string, huaweiMapOptions:HuaweiMapOptions, bounds?:MapBounds)|`Promise<HuaweiMap>`|Returns a new map with given div id. If DOM doesn't have a div with given div id, NO_DOM_ELEMENT_FOUND exception throws.|
|showMap(divId:string)|`Promise<HuaweiMap>`|Returns already created map with given id. If there is no map with this id, NO_MAP_FOUND_WITH_GIVEN_ID exception throws.|
|hasPermission()|`Promise<boolean>`|Checks whether permission is granted to show map.|
|requestPermission()|`Promise<void>`|Requests permission from user.|
|computeDistanceBetween(from:LatLng, to:LatLng)|`Promise<ComputeDistanceResult>`|Calculates the distance between two coordinate points.|
|setApiKey(apiKey:string)|`Promise<void>`|Set apiKey of map.|
|enableLogger()|`Promise<void>`|Enables HMS Plugin Method Analytics.|
|disableLogger()|`Promise<void>`|Disables HMS Plugin Method Analytics.|

#### Public Methods

##### getMap(divId:string, huaweiMapOptions:HuaweiMapOptions, bounds?:MapBounds)
Returns a new map with given div id. If DOM doesn't have a div with given div id, NO_DOM_ELEMENT_FOUND exception throws.
###### Parameters
|Name|Type|Description|
|---|---|---|
|divId|string|Indicates id of div that contains the new created map.|
|huaweiMapOptions|HuaweiMapOptions|Defines attributes for a HuaweiMap object, and they can be used when you add a map to your app.|
|bounds|MapBounds|Indicates marginTop and marginBottom for toolbar and footer respectively|
###### Return Type
|Type|Description|
|---|---|
|`Promise<HuaweiMap>`|HuaweiMap object.|
###### Sample Code
```ts
async function example(){
    let map: HuaweiMap = await HMSMap.getMap("map",{});  
}
```

##### showMap(divId:string)
Returns an already created map with given id. If there is no map with this id, NO_MAP_FOUND_WITH_GIVEN_ID exception throws.
###### Parameters
|Name|Type|Description|
|---|---|---|
|divId|string|Indicates id of div that contains the map.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<HuaweiMap>`|HuaweiMap object.|
###### Sample Code
```ts
async function example(){
    let map: HuaweiMap = await HMSMap.showMap("map");  
}
```

##### hasPermission()
Checks whether permission is granted to show map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|True if permission is granted, otherwise false.|
###### Sample Code
```ts
async function example(){
    const result = await HMSMap.hasPermission();
    console.log(result); // console will be written true if permission is given.   
}
```

##### requestPermission()
Requests permission from user.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await HMSMap.requestPermission();   
}
```

##### computeDistanceBetween(from:LatLng, to:LatLng)
Calculates the distance between two coordinates points.
###### Parameters
|Name|Type|Description|
|---|---|---|
|from|LatLng|Start coordinate point.|
|to|LatLng|End coordinate point.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<ComputeDistanceResult>`|Distance between the specified two coordinate points, in meters.|
###### Sample Code
```ts
async function example(){
    const distance: number = await HMSMap.computeDistanceBetween({lat: 15, lng: 10}, {lat: 25, lng: 15});  
}
```

##### setApiKey(apiKey:string)
Set apiKey of map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|apiKey|string|apiKey.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    const apiKey: string = "key";
    await HMSMap.setApiKey(apiKey); 
}
```
##### enableLogger()
This method enables the HMSLogger capability which is used for sending usage analytics of Map Kit SDK's methods to improve the service quality.

|Return Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|

###### Sample Code
```ts
async function example(){
    await HMSMap.enabledLogger(); 
}
```

##### disableLogger()
This method disables the HMSLogger capability which is used for sending usage analytics of Map Kit SDK's methods to improve the service quality.

|Return Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|

###### Sample Code
```ts
async function example(){
    await HMSMap.disableLogger(); 
}
```



### HuaweiMap
A class to obtain map object.After you create a map using getMap function of HMSMap, you can use instance methods as usual.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|scroll()|`void`|Scroll event for ionic framework.|
|destroyMap()|`Promise<void>`|Destroy the current map.|
|hideMap()|`Promise<void>`|Hide the current map.|
|on(event: MapEvent, callback: (val)=>void)|`Promise<void>`|Register map listeners. Pass a callback to run codes when the event triggered.|
|addCircle(circleOptions: CircleOptions)|`Promise<Circle>`|Adds a circle to a map. The longitude and latitude of the center and the radius are specified for the circle to indicate the surrounding area of a location.|
|addMarker(markerOptions: MarkerOptions)|`Promise<Marker>`|Adds a marker to a map. The marker icon is displayed at the specified position on the map.|
|addGroundOverlay(groundOverlayOptions: GroundOverlayOptions)|`Promise<GroundOverlay>`|Adds an image to a map.|
|addTileOverlay(tileOverlayOptions: TileOverlayOptions)|`Promise<TileOverlay>`|Adds a tile overlay to a map. Note that tile overlays are different from other overlays. If you recreate a map, tile overlays on the map will be automatically discarded and you need to manually add them again.|
|addPolygon(polygonOptions: PolygonOptions)|`Promise<Polygon>`|Adds a polygon to a map.|
|addPolyline(polylineOptions: PolylineOptions)|`Promise<Polyline>`|Adds a polyline to a map.|
|animateCamera(cameraUpdate: CameraUpdate, cancelableCallback?: CancelableCallback, durationMs?: number)|`Promise<void>`|Updates the camera position in animation mode. If getCameraPosition() is called during the animation, the current position of the camera will be returned. By default, the camera animation takes 250 milliseconds|
|moveCamera(cameraUpdate: CameraUpdate)|`Promise<void>`|Updates the camera position. The movement is instantaneous. If getCameraPosition() is called later, the new camera position will be returned.|
|clear()|`Promise<void>`|Removes all circles, markers, polylines, and ground overlays from a map.|
|resetMinMaxZoomPreference()|`Promise<void>`|Deletes all maximum and minimum zoom levels set previously.|
|stopAnimation()|`Promise<void>`|Stops the current animation process of the camera. When this method is called, the camera stops moving immediately and remains in that position.|
|getCameraPosition()|`Promise<CameraPosition>`|Obtains the current position of the camera. The CameraPosition object that is returned is a snapshot of the camera's current position and will not be automatically updated when the camera moves.|
|getMapType()|`Promise<MapType>`|Obtains the current map type. The value -1 indicates that the map type is not specified.|
|getMaxZoomLevel()|`Promise<number>`|Obtains the maximum zoom level of the map camera.|
|getMinZoomLevel()|`Promise<number>`|Obtains the minimum zoom level of the map camera.|
|getProjection()|`Projection`|Obtains a Projection object that can be used to convert between the pixel coordinates on the screen and the longitude/latitude coordinates on the map.|
|getUiSettings()|`UiSettings`|Obtains the UI and gesture controls of a map, which can determine whether to display the built-in UI (enabling the zoom, compass, and other functions) and whether to enable certain gestures such as scroll and zoom gestures.|
|isBuildingsEnabled()|`Promise<boolean>`|Checks whether the 3D building layer is enabled for a map.|
|isMyLocationEnabled()|`Promise<boolean>`|Checks whether the my-location layer is enabled for a map.|
|isTrafficEnabled()|`Promise<boolean>`|Checks whether the traffic status layer is enabled.|
|isIndoorEnabled()|`Promise<boolean>`|Currently not supported for the Map SDK|
|setBuildingsEnabled(buildingsEnabled: boolean)|`Promise<void>`|Sets whether to enable the 3D building layer.|
|setContentDescription(contentDescription: string)|`Promise<void>`|Adds content description to a map. If the auxiliary mode is enabled, voice description about the map will be provided.|
|setInfoWindowAdapter(infoWindowAdapter: InfoWindowAdapter)|`Promise<void>`|Sets a custom renderer for the content of an information window. The rendering state will not persist, similar to a state obtained by a map event listener. If a map is recreated (for example, the configuration is modified), you must call this method again to preserve the custom information window view.|
|setLatLngBoundsForCameraTarget(latLngBounds: LatLngBounds)|`Promise<void>`|Sets a LatLngBounds object to constraint the camera target so that the camera target does not move outside the bounds when a user scrolls the map. If this parameter is set to null, the map camera bounds will be cleared.|
|setLocationSource(locationSource: LocationSource)|`Promise<void>`|Sets the location source for the my-location layer.|
|setMapStyle(mapStyle: MapStyleOptions)|`Promise<void>`|Sets the map style. If null is passed, all custom map styles set previously will be cleared.|
|setMapType(mapType: MapType)|`Promise<void>`|Sets the map type.|
|setMarkersClustering(markersClustering: boolean)|`Promise<void>`|Sets whether a marker can be clustered.|
|setMaxZoomPreference(maxZoomPreference: number)|`Promise<void>`|Sets the preferred maximum zoom level of the camera. If the preferred maximum zoom level is lower than the current minimum zoom level, the SDK uses the preferred maximum zoom level as both the minimum and maximum zoom levels. Assume that the current minimum and maximum zoom levels are 6 and 15, respectively. If you set the preferred maximum zoom level to 4, the SDK uses the value 4 as both the minimum and maximum zoom levels. That is, the zoom level of the camera is fixed at 4.|
|setMinZoomPreference(minZoomPreference: number)|`Promise<void>`|Sets the preferred minimum zoom level of the camera. The value must be greater than or equal to the minimum zoom level (3) supported by the Map SDK. If the preferred minimum zoom level is higher than the current maximum zoom level, the SDK uses the preferred minimum zoom level as both the minimum and maximum zoom levels. Assume that the current minimum and maximum zoom levels are 4 and 10, respectively. If you set the preferred minimum zoom level to 15, the SDK uses the value 15 as both the minimum and maximum zoom levels. That is, the zoom level of the camera is fixed at 15.|
|setMyLocationEnabled(myLocationEnabled: boolean)|`Promise<void>`|Sets whether to enable the my-location layer. If the my-location layer is enabled and the location is available, the layer constantly draws the user's current location and bearing and displays the UI controls for the user to interact with their location (for example, to enable or disable the camera to track their location and bearing). To use the my-location layer function, you must apply for the ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION permission unless you have set a custom location source. If you have set a custom location source using setLocationSource(LocationSource), the Map SDK will not check whether the preceding permissions have been granted. However, you must ensure that the user has granted all permissions required for the custom location source.|
|setPadding(left: number, top: number, right: number, bottom: number)|`Promise<void>`|Sets padding on a map. You can call this method to define the visible region on a map so that a signal can be sent to the map indicating that some portions around the map edges may be obscured. For example, icons such as the zoom controls and compass will be moved to adapt to the visible region, and the camera will move in relative to the center of the visible region.|
|setTrafficEnabled(trafficEnabled: boolean)|`Promise<void>`|Sets whether to enable the traffic status layer.|
|getComponent(key: string)|`any`|Return the component passed via parameter key.|
|getId()|`number`|return id of map.|
|snapshot(onReadyCallback: (snapshot) => void)|`Promise<void>`|Takes a snapshot of a map. This method is equivalent to snapshot(SnapshotReadyCallback), but allows you to provide a pre-allocated Bitmap image. If the Bitmap image does not match the current map size, another Bitmap image matching the size will be allocated. In most cases, the object transferred by the callback method is the same as that provided in the parameter of this method. However, in some cases, the object provided in this method may not be used (for example, if the size of the view has changed at the time when the snapshot is actually taken). Therefore, you should trust only the Bitmap image passed by the callback method.|
|removeComponent(key: string)|`void`|Removes the component passed via parameter key.|
#### Public Methods

##### scroll()
Scroll event for ionic framework.
###### Return Type
|Type|Description|
|---|---|
|`void`|-|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.scroll();
}
```

##### destroyMap()
Destroy the current map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await map.destroyMap();
}
```

##### hideMap()
Hide the current map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await map.hideMap();
}
```

##### on(event: MapEvent, callback: (val) => void)
Registers map listener. Pass a callback to be called when the event triggered.
###### Parameters
|Name|Type|Description|
|---|---|---|
|event|MapEvent|Event name|
|callback|function|Callback to be called when the event triggered.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    map.on(MapEvent.ON_MAP_CLICK,(latLng)=>{
        console.log("Lat:",latLng.lat,"Lng:",latLng.lng);
    })
}
```

##### addCircle(circleOptions: CircleOptions)
Adds a circle to a map. The longitude and latitude of the center and the radius are specified for the circle to indicate the surrounding area of a location.
###### Parameters
|Name|Type|Description|
|---|---|---|
|circleOptions|CircleOptions|Attributes of a circle.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<Circle>`|Circle object.|
###### Sample Code
```ts
async function example(){
    let circleOptions = {"center": {"lat": 25, "lng": 44}, "radius": 5000};
    circle = await map.addCircle(circleOptions);
}
```

##### addMarker(markerOptions: MarkerOptions)
Adds a marker to a map. The marker icon is displayed at the specified position on the map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|markerOptions|MarkerOptions|Attributes of a marker.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<Marker>`|Marker object.|
###### Sample Code
```ts
async function example(){
    const markerOptions = {"position": {"lat": 36, "lng": 23}};
    let marker = await map.addMarker(markerOptions);
}
```

##### addGroundOverlay(groundOverlayOptions: GroundOverlayOptions)
Adds an image to a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|groundOverlayOptions|GroundOverlayOptions|Attributes of a ground overlay. An image and a position must be specified for the ground overlay.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<GroundOverlay>`|GroundOverlay object.|
###### Sample Code
```ts
async function example(){
    const groundOverlayOptions = { "position": {"latLng": {"lat": 38, "lng": 27},"width": 10,"height": 10},
        "image":{"hue":210},
        "transparency":0,
        "visible":true,
        "zIndex":4,
        "bearing":4,
    };

    let groundOverlay = await map.addGroundOverlay(groundOverlayOptions);
}
```

##### addTileOverlay(tileOverlayOptions: TileOverlayOptions)
Adds a tile overlay to a map. Note that tile overlays are different from other overlays. If you recreate a map, tile overlays on the map will be automatically discarded and you need to manually add them again.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tileOverlayOptions|TileOverlayOptions|Attributes of a tile overlay. A tile overlay must be specified. Otherwise, IllegalArgumentException will be thrown.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<TileOverlay>`|TileOverlay object.|
###### Sample Code
```ts
async function example(){
    const tileOverlayOptions = {
        tileProvider: {type: TileType.URL_TILE, data: {URL: 'https://a.tile.openstreetmap.org/${z}/${x}/${y}.png'}}
    };
    const tileOverlay = await map.addTileOverlay(tileOverlayOptions);
}
```

##### addPolygon(polygonOptions: PolygonOptions)
Adds a polygon to a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|polygonOptions|PolygonOptions|Attributes of a polygon.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<Polygon>`|Polygon object.|
###### Sample Code
```ts
async function example(){
     const polygonOptions = {"points": [{"lat": 25, "lng": 35}, {"lat": 26, "lng": 36}]};
     polygon = await map.addPolygon(polygonOptions);
 }
```

##### addPolyline(polylineOptions: PolylineOptions)
Adds a polyline to a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|polylineOptions|PolylineOptions|Attributes of a polyline.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<Polyline>`|Polyline object.|
###### Sample Code
```ts
async function example(){
    const polylineOptions = {
        points: [{lat: 51.5, lng: -0.1}, {lat: 40.7, lng: -74.0}],
        color: -65536,
        width: 5.0,
        clickable: true
    };
    polyline = await map.addPolyline(polylineOptions);
}
```

##### animateCamera(cameraUpdate: CameraUpdate, cancelableCallback?: CancelableCallback, durationMs?: number)
Updates the camera position in animation mode. If getCameraPosition() is called during the animation, the current position of the camera will be returned. By default, the camera animation takes 250 milliseconds.
###### Parameters
|Name|Type|Description|
|---|---|---|
|cameraUpdate|CameraUpdate|Camera position change.|
|cancelableCallback?|CancelableCallback|Callback executed when the animation stops. If the animation is completed properly, onFinish() will be called. Otherwise, onCancel() will be called. Do not update or move the camera in onCancel().|
|durationMs?|number|-Animation duration, in milliseconds. This parameter is mandatory. If it is not set, IllegalArgumentException will be thrown.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let position = {"target": {"lat": 38, "lng": 26}, "zoom": 6, "bearing": 30, "tilt": 0};
    await map.animateCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position),{
        onFinish: ()=> {
            console.log("Javascript onFinish called")
        },
        onCancel: ()=> {
            console.log("Javascript onCancel called")
        }
    },1000);
}
```

##### moveCamera(cameraUpdate: CameraUpdate)
Updates the camera position. The movement is instantaneous. If getCameraPosition() is called later, the new camera position will be returned.
###### Parameters
|Name|Type|Description|
|---|---|---|
|cameraUpdate|CameraUpdate|Camera position change.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let position = {"target": {"lat": 38, "lng": 26}, "zoom": 6, "bearing": 30, "tilt": 0};
    await map.moveCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position));
}
```

##### clear()
Removes all circles, markers, polylines, and ground overlays from a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{}); 
    map.clear();
}
```

##### resetMinMaxZoomPreference()
Deletes all maximum and minimum zoom levels set previously.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.resetMinMaxZoomPreference();
}
```

##### stopAnimation()
Stops the current animation process of the camera. When this method is called, the camera stops moving immediately and remains in that position.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.stopAnimation();
}
```

##### getCameraPosition()
Obtains the current position of the camera. The CameraPosition object that is returned is a snapshot of the camera's current position and will not be automatically updated when the camera moves.
###### Return Type
|Type|Description|
|---|---|
|`Promise<CameraPosition>`|CameraPosition object.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var cameraPosition: CameraPosition = map.getCameraPosition();
}
```

##### getMapType()
Obtains the current map type. The value -1 indicates that the map type is not specified. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<MapType>`|MapType object.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var mapType: MapType = map.getMapType();
}
```

##### getMaxZoomLevel()
Obtains the maximum zoom level of the map camera.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Maximum zoom level of the map camera, which is constant 20.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var maxZoom: number = await map.getMaxZoomLevel();
}
```

##### getMinZoomLevel()
Obtains the minimum zoom level of the map camera.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Minimum zoom level of the map camera, which is constant 3.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var minZoom: number = await map.getMinZoomLevel();
}
```

##### getProjection()
Obtains a Projection object that can be used to convert between the pixel coordinates on the screen and the longitude/latitude coordinates on the map.
###### Return Type
|Type|Description|
|---|---|
|`Projection`|Projection object.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var projection: Projection = map.getProjection();
}
```

##### getUiSettings()
Obtains the UI and gesture controls of a map, which can determine whether to display the built-in UI (enabling the zoom, compass, and other functions) and whether to enable certain gestures such as scroll and zoom gestures.
###### Return Type
|Type|Description|
|---|---|
|`UiSettings`|UiSettings object.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var UiSettings: UiSettings = map.getUiSettings();
}
```

##### isBuildingsEnabled()
Checks whether the 3D building layer is enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the 3D building layer is enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var buildingEnabled: boolean = map.isBuildingsEnabled();
}
```

##### isMyLocationEnabled()
Checks whether the my-location layer is enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the my-location layer is enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var myLocationEnabled: boolean = map.isMyLocationEnabled();
}
```

##### isTrafficEnabled()
Checks whether the traffic status layer is enabled. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the traffic status layer is enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var trafficEnabled: boolean = map.isTrafficEnabled();
}
```

##### isIndoorEnabled()
Currently not supported for the Map SDK
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|-|
###### Sample Code
```ts
async function example(){
    //Currently not supported.   
}
```

##### setBuildingsEnabled(buildingsEnabled: boolean)
Sets whether to enable the 3D building layer.
###### Parameters
|Name|Type|Description|
|---|---|---|
|buildingsEnabled|boolean|Indicates whether to enable the 3D building layer. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setBuildingsEnabled(true);
}
```

##### setContentDescription(contentDescription: string)
Adds content description to a map. If the auxiliary mode is enabled, voice description about the map will be provided. 
###### Parameters
|Name|Type|Description|
|---|---|---|
|contentDescription|string|Description text.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setContentDescription("desc");
}
```

##### setInfoWindowAdapter(infoWindowAdapter: InfoWindowAdapter)
Sets a custom renderer for the content of an information window. The rendering state will not persist, similar to a state obtained by a map event listener. If a map is recreated (for example, the configuration is modified), you must call this method again to preserve the custom information window view.
###### Parameters
|Name|Type|Description|
|---|---|---|
|infoWindowAdapter|InfoWindowAdapter|Custom information window view adapter.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setInfoWindowAdapter({file: "url", width: 100, height: 100});
}
```

##### setLatLngBoundsForCameraTarget(latLngBounds: LatLngBounds)
Sets a LatLngBounds object to constraint the camera target so that the camera target does not move outside the bounds when a user scrolls the map. If this parameter is set to null, the map camera bounds will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|latLngBounds|LatLngBounds|Bounds for constraining the camera target.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setLatLngBoundsForCameraTarget({"southwest": {"lat": 14, "lng": 33}, "northeast": {"lat": 27, "lng": 44}});
}
```

##### setLocationSource(locationSource: LocationSource)
Sets the location source for the my-location layer.
###### Parameters
|Name|Type|Description|
|---|---|---|
|locationSource|LocationSource|Location source. If this parameter is set to null, the default location source will be used.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    // Currently not supported.
}
```

##### setMapStyle(mapStyle: MapStyleOptions)
Sets the map style. If null is passed, all custom map styles set previously will be cleared. 
###### Parameters
|Name|Type|Description|
|---|---|---|
|mapStyle|MapStyleOptions|Map style attribute settings.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|true if the map style is set successfully; false otherwise. For example, if the JSON string fails to be parsed, the feature or element type cannot be recognized, or the style key is invalid, the map style fails to be set, and false is returned. In this case, the current style remains unchanged.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setMapStyle(null);
}
```

##### setMapType(mapType: MapType)
Sets the map type.
###### Parameters
|Name|Type|Description|
|---|---|---|
|mapType|MapType|Map type.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setMapType(MapType.MAP_TYPE_NORMAL);
}
```

##### setMarkersClustering(markersClustering: boolean)
Sets whether a marker can be clustered.
###### Parameters
|Name|Type|Description|
|---|---|---|
|markersClustering|boolean|Indicates whether a marker can be clustered. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setMarkersClustering(true);
}
```

##### setMaxZoomPreference(maxZoomPreference: number)
Sets the preferred maximum zoom level of the camera. If the preferred maximum zoom level is lower than the current minimum zoom level, the SDK uses the preferred maximum zoom level as both the minimum and maximum zoom levels. Assume that the current minimum and maximum zoom levels are 6 and 15, respectively. If you set the preferred maximum zoom level to 4, the SDK uses the value 4 as both the minimum and maximum zoom levels. That is, the zoom level of the camera is fixed at 4.
###### Parameters
|Name|Type|Description|
|---|---|---|
|maxZoomPreference|number|Preferred maximum zoom level of the camera.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setMaxZoomPreference(15);
}
```

##### setMinZoomPreference(minZoomPreference: number)
Sets the preferred minimum zoom level of the camera. The value must be greater than or equal to the minimum zoom level (3) supported by the Map SDK. If the preferred minimum zoom level is higher than the current maximum zoom level, the SDK uses the preferred minimum zoom level as both the minimum and maximum zoom levels. Assume that the current minimum and maximum zoom levels are 4 and 10, respectively. If you set the preferred minimum zoom level to 15, the SDK uses the value 15 as both the minimum and maximum zoom levels. That is, the zoom level of the camera is fixed at 15.
###### Parameters
|Name|Type|Description|
|---|---|---|
|minZoomPreference|number|Preferred minimum zoom level of the camera.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setMinZoomPreference(5);
}
```

##### setMyLocationEnabled(myLocationEnabled: boolean)
Sets whether to enable the my-location layer. If the my-location layer is enabled and the location is available, the layer constantly draws the user's current location and bearing and displays the UI controls for the user to interact with their location (for example, to enable or disable the camera to track their location and bearing). To use the my-location layer function, you must apply for the ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION permission unless you have set a custom location source. If you have set a custom location source using setLocationSource(LocationSource), the Map SDK will not check whether the preceding permissions have been granted. However, you must ensure that the user has granted all permissions required for the custom location source.
###### Parameters
|Name|Type|Description|
|---|---|---|
|myLocationEnabled|boolean|true: enable; false: disable.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setMyLocationEnabled(true);
}
```

##### setPadding(left: number, top: number, right: number, bottom: number)
Sets padding on a map. You can call this method to define the visible region on a map so that a signal can be sent to the map indicating that some portions around the map edges may be obscured. For example, icons such as the zoom controls and compass will be moved to adapt to the visible region, and the camera will move in relative to the center of the visible region.
###### Parameters
|Name|Type|Description|
|---|---|---|
|left|number|Distance from the visible region to the left edge of the map, in pixels.|
|top|number|Distance from the visible region to the top edge of the map, in pixels.|
|right|number|Distance from the visible region to the right edge of the map, in pixels.|
|bottom|number|Distance from the visible region to the bottom edge of the map, in pixels.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setPadding(10,5,5,10);
}
```

##### setTrafficEnabled(trafficEnabled: boolean)
Sets whether to enable the traffic status layer. 
###### Parameters
|Name|Type|Description|
|---|---|---|
|trafficEnabled|boolean|Indicates whether to enable the traffic status layer. The options are true (yes) and false (no). The default value is false.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    map.setTrafficEnabled(true);
}
```

##### getComponent(key: string)
Return the component passed via parameter key.
###### Parameters
|Name|Type|Description|
|---|---|---|
|key|string|id of component to be returned.|
###### Return Type
|Type|Description|
|---|---|
|`any`|Component object.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var circle: Circle = map.addCircle(circleOptions = {"center": {"lat": 40.7587658, "lng": 30.3146964},"radius": 10000});
    var component: any = map.getComponent(circle.getId());
}
```

##### getId()
Return id of map.
###### Return Type
|Type|Description|
|---|---|
|`number`|id of map.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var id: number = map.getId();
}
```

##### snapshot(onReadyCallback: (snapshot: SnapshotResult) => void)
Takes a snapshot of a map. This method is equivalent to snapshot(SnapshotReadyCallback), but allows you to provide a pre-allocated Bitmap image. If the Bitmap image does not match the current map size, another Bitmap image matching the size will be allocated. In most cases, the object transferred by the callback method is the same as that provided in the parameter of this method. However, in some cases, the object provided in this method may not be used (for example, if the size of the view has changed at the time when the snapshot is actually taken). Therefore, you should trust only the Bitmap image passed by the callback method.
###### Parameters
|Name|Type|Description|
|---|---|---|
|onReadyCallback|snapshot|Callback method called when a map snapshot is generated.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.snapshot((snapshot) => {
        console.log(JSON.stringify(snapshot));
    });
}
```

##### removeComponent(key: string)
Return the component passed via parameter key.
###### Parameters
|Name|Type|Description|
|---|---|---|
|key|string|id of component to be removed.|
###### Return Type
|Type|Description|
|---|---|
|`void`|-|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var circle: Circle = map.addCircle(circleOptions = {"center": {"lat": 40.7587658, "lng": 30.3146964},"radius": 10000});
    map.removeComponent(circle.getId());
}
```


### UiSettings
Sets the built-in UI and gesture controls of a map.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|isCompassEnabled()|`Promise<boolean>`|Checks whether the compass is enabled for a map.|
|isIndoorLevelPickerEnabled()|`Promise<boolean>`|Currently not supported for the Map SDK|
|isMapToolbarEnabled()|`Promise<boolean>`|Currently not supported for the Map SDK|
|isMyLocationButtonEnabled()|`Promise<boolean>`|Checks whether the my-location icon is enabled for a map.|
|isRotateGesturesEnabled()|`Promise<boolean>`|Checks whether rotate gestures are enabled for a map.|
|isScrollGesturesEnabled()|`Promise<boolean>`|Checks whether scroll gestures are enabled for a map.|
|isScrollGesturesEnabledDuringRotateOrZoom()|`Promise<boolean>`|Checks whether scroll gestures are enabled during rotation or zooming.|
|isTiltGesturesEnabled()|`Promise<boolean>`|Checks whether tilt gestures are enabled for a map.|
|isZoomControlsEnabled()|`Promise<boolean>`|Checks whether zoom controls are enabled.|
|isZoomGesturesEnabled()|`Promise<boolean>`|Checks whether zoom gestures are enabled for a map.|
|setAllGesturesEnabled(allGesturesEnabled: boolean)|`Promise<void>`|Sets whether to enable all gestures for a map.|
|setCompassEnabled(compassEnabled: boolean)|`Promise<void>`|Sets whether to enable the compass for a map. If the compass is enabled and the map is not oriented to the due north, a compass icon is displayed in the upper right corner of the map. A user can tap the compass icon to rotate the map to be oriented to the due north. If the compass is enabled and the map is oriented to the due north, the compass icon is hidden. If the compass is disabled, the compass icon will never be displayed.|
|setIndoorLevelPickerEnabled(indoorLevelPickerEnabled: boolean)|`Promise<void>`|Currently not supported for the Map SDK|
|setMapToolbarEnabled(mapToolbarEnabled: boolean)|`Promise<void>`|Currently not supported for the Map SDK|
|setMyLocationButtonEnabled(myLocationButtonEnabled: boolean)|`Promise<void>`|Sets whether to enable the my-location icon for a map.|
|setRotateGesturesEnabled(rotateGesturesEnabled: boolean)|`Promise<void>`|Sets whether to enable rotation gestures for a map.|
|setScrollGesturesEnabled(scrollGesturesEnabled: boolean)|`Promise<void>`|Sets whether to enable scroll gestures for a map.|
|setScrollGesturesEnabledDuringRotateOrZoom(scrollGesturesEnabledDuringRotateOrZoom: boolean)|`Promise<void>`|Sets whether to enable scroll gestures during rotation or zooming.|
|setTiltGesturesEnabled(tiltGesturesEnabled: boolean)|`Promise<void>`|Sets whether to enable tilt gestures for a map. If tilt gestures are enabled, users can use two fingers to swipe up vertically to tilt the camera. If tilt gestures are disabled, users cannot use gestures to tilt the camera.|
|setZoomControlsEnabled(zoomControlsEnabled: boolean)|`Promise<void>`|Sets whether to enable zoom controls for a map.|
|setZoomGesturesEnabled(zoomGesturesEnabled: boolean)|`Promise<void>`|Sets whether to enable zoom gestures for a map.|
#### Public Methods

##### isCompassEnabled()
Checks whether the compass is enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the compass is enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var compassEnabled: boolean = await map.getUiSettings().isCompassEnabled();
}
```

##### isIndoorLevelPickerEnabled()
Currently not supported for the Map SDK
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|Currently not supported for the Map SDK|
###### Sample Code
```ts
async function example(){
    //Currently not supported.  
}
```

##### isMapToolbarEnabled()
Currently not supported for the Map SDK
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|Currently not supported for the Map SDK|
###### Sample Code
```ts
async function example(){
    //Currently not supported.    
}
```

##### isMyLocationButtonEnabled()
Checks whether the my-location icon is enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the my-location icon is enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var myLocationButtonEnabled: boolean = await map.getUiSettings().isMyLocationButtonEnabled();        
}
```

##### isRotateGesturesEnabled()
Checks whether rotate gestures are enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if rotate gestures are enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var rotateGesturesEnabled: boolean = await map.getUiSettings().isRotateGesturesEnabled();    
}
```

##### isScrollGesturesEnabled()
Checks whether scroll gestures are enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if scroll gestures are enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var scrollGesturesEnabled: boolean = await map.getUiSettings().isScrollGesturesEnabled();        
}
```

##### isScrollGesturesEnabledDuringRotateOrZoom()
Checks whether scroll gestures are enabled during rotation or zooming.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if scroll gestures are enabled during rotation or zooming; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var scrollGesturesEnabledDuringRotateOrZoom: boolean = await map.getUiSettings().isScrollGesturesEnabledDuringRotateOrZoom();        

}
```

##### isTiltGesturesEnabled()
Checks whether tilt gestures are enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if tilt gestures are enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var tiltGesturesEnabled: boolean = await map.getUiSettings().isTiltGesturesEnabled();        

}
```

##### isZoomControlsEnabled()
Checks whether zoom controls are enabled.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if zoom controls are enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var zoomControlsEnabled: boolean = await map.getUiSettings().isZoomControlsEnabled();         
}
```

##### isZoomGesturesEnabled()
Checks whether zoom gestures are enabled for a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if zoom gestures are enabled; false otherwise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    var zoomGesturesEnabled: boolean = await map.getUiSettings().isZoomGesturesEnabled();         
        
}
```

##### setAllGesturesEnabled(allGesturesEnabled: boolean)
Sets whether to enable all gestures for a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|allGesturesEnabled|boolean|Indicates whether to enable all gestures. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setAllGesturesEnabled(true);         
        
}
```

##### setCompassEnabled(compassEnabled: boolean)
Sets whether to enable the compass for a map. If the compass is enabled and the map is not oriented to the due north, a compass icon is displayed in the upper right corner of the map. A user can tap the compass icon to rotate the map to be oriented to the due north. If the compass is enabled and the map is oriented to the due north, the compass icon is hidden. If the compass is disabled, the compass icon will never be displayed.
###### Parameters
|Name|Type|Description|
|---|---|---|
|compassEnabled|boolean|Indicates whether to enable the compass. true (default): yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setCompassEnabled(true);        
}
```

##### setIndoorLevelPickerEnabled(indoorLevelPickerEnabled: boolean)
Currently not supported for the Map SDK
###### Parameters
|Name|Type|Description|
|---|---|---|
|indoorLevelPickerEnabled|boolean|Currently not supported for the Map SDK|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setIndoorLevelPickerEnabled(true);        
           
}
```

##### setMapToolbarEnabled(mapToolbarEnabled: boolean)
Currently not supported for the Map SDK
###### Parameters
|Name|Type|Description|
|---|---|---|
|mapToolbarEnabled|boolean|Currently not supported for the Map SDK|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setMapToolbarEnabled(true);        
        
}
```

##### setMyLocationButtonEnabled(myLocationButtonEnabled: boolean)
Sets whether to enable the my-location icon for a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|myLocationButtonEnabled|boolean|Indicates whether to enable the my-location icon. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setMyLocationButtonEnabled(true);                   
}
```

##### setRotateGesturesEnabled(rotateGesturesEnabled: boolean)
Sets whether to enable rotation gestures for a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|rotateGesturesEnabled|boolean|Indicates whether to enable rotation gestures. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setRotateGesturesEnabled(true);
}
```

##### setScrollGesturesEnabled(scrollGesturesEnabled: boolean)
Sets whether to enable scroll gestures for a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|scrollGesturesEnabled|boolean|Indicates whether to enable scroll gestures. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setScrollGesturesEnabled(true);            
}
```

##### setScrollGesturesEnabledDuringRotateOrZoom(scrollGesturesEnabledDuringRotateOrZoom: boolean)
Sets whether to enable scroll gestures during rotation or zooming.
###### Parameters
|Name|Type|Description|
|---|---|---|
|scrollGesturesEnabledDuringRotateOrZoom|boolean|Indicates whether to enable scroll gestures during rotation or zooming. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setScrollGesturesEnabledDuringRotateOrZoom(true);                        
}
```

##### setTiltGesturesEnabled(tiltGesturesEnabled: boolean)
Sets whether to enable tilt gestures for a map. If tilt gestures are enabled, users can use two fingers to swipe up vertically to tilt the camera. If tilt gestures are disabled, users cannot use gestures to tilt the camera.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tiltGesturesEnabled|boolean|Indicates whether to enable tilt gestures. true (default): yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setTiltGesturesEnabled(true);                                    
}
```

##### setZoomControlsEnabled(zoomControlsEnabled: boolean)
Sets whether to enable zoom controls for a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zoomControlsEnabled|boolean|Indicates whether to enable zoom controls. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setZoomControlsEnabled(true);
}
```

##### setZoomGesturesEnabled(zoomGesturesEnabled: boolean)
Sets whether to enable zoom gestures for a map.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zoomGesturesEnabled|boolean|Indicates whether to enable zoom gestures. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.getUiSettings().setZoomGesturesEnabled(true);    
}
```

### Circle
A circle object on a map. A circle can either be solid or hollow.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getCenter()|`Promise<LatLng>`|Obtains the latitude and longitude of the center of a circle.|
|getFillColor()|`Promise<Color>`|Obtains the fill color of a circle.|
|getId()|`string`|Obtains the ID of a circle on a map. The ID will be unique among all circles on a map.|
|getRadius()|`Promise<number>`|Obtains the radius of a circle.|
|getStrokeColor()|`Promise<number>`|Obtains the stroke color of a circle's outline.|
|getStrokePattern()|`Promise<PatternItem[]>`|Obtains the stroke pattern of a circle's outline.|
|getStrokeWidth()|`Promise<number>`|Obtains the stroke width of a circle's outline.|
|getTag()|`Promise<any>`|Obtains the tag attribute (if it has been set) of a circle.|
|getZIndex()|`Promise<number>`|Obtains the z-index of a circle.|
|isClickable()|`Promise<boolean>`|Checks whether a circle is tappable.|
|isVisible()|`Promise<boolean>`|Checks whether a circle is visible.|
|remove()|`Promise<void>`|Removes a circle from a map. After the circle is removed, the behavior of its methods is invalid.|
|setCenter(center: LatLng)|`Promise<void>`|Sets the longitude and latitude of the center of a circle. The center cannot be null because there is no default value.|
|setFillColor(fillColor: Color)|`Promise<void>`|Sets the fill color of a circle. If it is set as transparent (Color.TRANSPARENT), the circle will not be filled.|
|setRadius(radius: number)|`Promise<void>`|Sets the radius of a circle.|
|setStrokeColor(strokeColor: number)|`Promise<void>`|Sets the stroke color of a circle's outline. If it is set as transparent, no outline will be drawn for the circle.|
|setStrokePattern(strokePattern: PatternItem[])|`Promise<void>`|Sets the stroke pattern of a circle's outline.|
|setStrokeWidth(strokeWidth: number)|`Promise<void>`|Sets the stroke width of a circle's outline.|
|setTag(tag: any)|`Promise<void>`|Sets the tag of a circle. If null is passed, the tag will be cleared.|
|setZIndex(zIndex: number)|`Promise<void>`|Sets the z-index of a circle. The z-index indicates the overlapping order of a circle. A circle with a larger z-index overlaps that with a smaller z-index. Circles with the same z-index overlap each other in a random order. By default, the z-index is 0.|
|setClickable(clickable: boolean)|`Promise<void>`|Sets whether a circle is tappable.|
|setVisible(visible: boolean)|`Promise<void>`|Sets whether a circle is visible. If the circle is invisible, it will not be drawn but all other states will be preserved. By default, a circle is visible.|
#### Public Methods

##### getCenter()
Obtains the latitude and longitude of the center of a circle.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng>`|Longitude and latitude of the center of a circle.|
###### Sample Code
```ts
async function example(){
    var latLng: LatLng = await circle.getCenter();
} 
```

##### getFillColor()
Obtains the fill color of a circle.
###### Return Type
|Type|Description|
|---|---|
|`Promise<Color>`|Color in ARGB format.|
###### Sample Code
```ts
async function example(){
    var color: Color = await circle.getFillColor();
}     
```

##### getId()
Obtains the ID of a circle on a map. The ID will be unique among all circles on a map.
###### Return Type
|Type|Description|
|---|---|
|`string`|ID of a circle.|
###### Sample Code
```ts
function example(){
    var id: string = circle.getId();
} 
```

##### getRadius()
Obtains the radius of a circle.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Radius of a circle, in meters.|
###### Sample Code
```ts
async function example(){
    var radius: number = await circle.getRadius();
} 
```

##### getStrokeColor()
Obtains the stroke color of a circle's outline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Color in ARGB format.|
###### Sample Code
```ts
async function example(){
    var strokeColor: number = await circle.getStrokeColor();
} 
```

##### getStrokePattern()
Obtains the stroke pattern of a circle's outline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<PatternItem[]>`|Stroke pattern of a circle's outline.|
###### Sample Code
```ts
async function example(){
     var strokePattern: StrokePattern = await circle.getStrokePattern()();
 } 
```

##### getStrokeWidth()
Obtains the stroke width of a circle's outline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Stroke width of a circle's outline, in pixels.|
###### Sample Code
```ts
async function example(){
    var strokeWidth: number = await circle.getStrokeWidth();
} 
```

##### getTag()
Obtains the tag attribute (if it has been set) of a circle. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<any>`|Tag of a circle. Object if a tag has been set; null otherwise.|
###### Sample Code
```ts
async function example(){
    var tag: any = await circle.getTag();
} 
```

##### getZIndex()
Obtains the z-index of a circle.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Z-index, which indicates the overlapping order of a circle.|
###### Sample Code
```ts
async function example(){
    var zIndex: number = await circle.getZIndex();
} 
```

##### isClickable()
Checks whether a circle is tappable.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|Whether a circle is tappable. true if a circle is tappable; false otherwise.|
###### Sample Code
```ts
async function example(){
    var clickable: boolean = await circle.isClickable();
} 
```

##### isVisible()
Checks whether a circle is visible.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|Whether a circle is visible. true if the circle is visible; false otherwise.|
###### Sample Code
```ts
async function example(){
    var visible: boolean = await circle.isVisible();
} 
```

##### remove()
Removes a circle from a map. After the circle is removed, the behavior of its methods is invalid.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.remove();
} 
```

##### setCenter(center: LatLng)
Sets the longitude and latitude of the center of a circle. The center cannot be null because there is no default value.
###### Parameters
|Name|Type|Description|
|---|---|---|
|center|LatLng|Center of a circle.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setCenter({lat:12,lng:33});
} 
```

##### setFillColor(fillColor: Color)
Sets the fill color of a circle. If it is set as transparent (Color.TRANSPARENT), the circle will not be filled.
###### Parameters
|Name|Type|Description|
|---|---|---|
|fillColor|Color|Color in ARGB format. By default, the fill color is transparent (0x00000000).|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setFillColor({color:Color.BLACK});
}
```

##### setRadius(radius: number)
Sets the radius of a circle.
###### Parameters
|Name|Type|Description|
|---|---|---|
|radius|number|Radius of a circle, in meters. The value must be greater than or equal to 0. The default value is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setRadius(10);
}
```

##### setStrokeColor(strokeColor: number)
Sets the stroke color of a circle's outline. If it is set as transparent, no outline will be drawn for the circle.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokeColor|number|Color in ARGB format. By default, the stroke color is black (0xff000000).|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setStrokeColor(Color.CYAN);
}
```

##### setStrokePattern(strokePattern: PatternItem[])
Sets the stroke pattern of a circle's outline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokePattern|PatternItem[]|PatternItem object set. The default value is null, indicating that the stroke is in the solid pattern.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setStrokePattern([{"type": 1, "length": 0}, {"type": 0, "length": 10}]);
}
```

##### setStrokeWidth(strokeWidth: number)
Sets the stroke width of a circle's outline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokeWidth|number|Stroke width, in pixels. The value must be greater than or equal to 0. The default value is 10.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setStrokeWidth(15);
}
```

##### setTag(tag: any)
Sets the tag of a circle. If null is passed, the tag will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tag|any|Tag of a circle.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setTag("myCircle");
}
```

##### setZIndex(zIndex: number)
Sets the z-index of a circle. The z-index indicates the overlapping order of a circle. A circle with a larger z-index overlaps that with a smaller z-index. Circles with the same z-index overlap each other in a random order. By default, the z-index is 0.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zIndex|number|Z-index, which indicates the overlapping order of a circle. The default value is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setZIndex(3);
}
```

##### setClickable(clickable: boolean)
Sets whether a circle is tappable.
###### Parameters
|Name|Type|Description|
|---|---|---|
|clickable|boolean|Indicates whether a circle is tappable.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setClickable(true);
}
```

##### setVisible(visible: boolean)
Sets whether a circle is visible. If the circle is invisible, it will not be drawn but all other states will be preserved. By default, a circle is visible.
###### Parameters
|Name|Type|Description|
|---|---|---|
|visible|boolean|Indicates whether a circle is visible. By default, a circle is visible.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await circle.setVisible(true);
}
```


### Marker
Defines an icon placed at a specified position on a map.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getAlpha()|`Promise<number>`|Obtains the transparency of a marker.|
|getId()|`string`|Obtains the ID of a marker on a map. The ID will be unique among all markers on the map.|
|getPosition()|`Promise<LatLng>`|Obtains the position of a marker.|
|getRotation()|`Promise<number>`|Obtains the rotation angle of a marker.|
|getSnippet()|`Promise<string>`|Obtains the text snippet of a marker.|
|getTag()|`Promise<any>`|Obtains the tag attribute (if it has been set) of a marker.|
|getTitle()|`Promise<string>`|Obtains the title of a marker.|
|getZIndex()|`Promise<number>`|Obtains the z-index of a marker.|
|isVisible()|`Promise<boolean>`|Checks whether a marker is visible.|
|isClusterable()|`Promise<boolean>`|Checks whether a marker can be clustered.|
|isDraggable()|`Promise<boolean>`|Checks whether users can long press a marker and drag it.|
|isFlat()|`Promise<boolean>`|Checks whether a marker is flatly attached to the map.|
|isInfoWindowShown()|`Promise<boolean>`|Checks whether an information window is currently displayed for a marker. This method will not consider whether the information window is actually visible on the screen.|
|startAnimation()|`Promise<void>`|Starts the animation of a marker.|
|remove()|`Promise<void>`|Removes a marker from the map.|
|hideInfoWindow()|`Promise<void>`|Hides the information window that is displayed for a marker. This method is invalid for invisible markers.|
|showInfoWindow()|`Promise<void>`|Displays an information window for a marker.|
|setAlpha(alpha: number)|`Promise<void>`|Sets the transparency of a marker.|
|setAnimation(animation: AnimationSet)|`Promise<void>`|Sets the animation of a marker.|
|setDraggable(draggable: boolean)|`Promise<void>`|Sets whether users can long press a marker and drag it.|
|setFlat(flat: boolean)|`Promise<void>`|Sets whether to flatly attach a marker to the map. If the marker is flatly attached to the map, it will stay on the map when the camera rotates or tilts. Different from a ground overlay, the marker will remain the same size when the camera zooms in or out. If the marker faces the camera, it will always be drawn facing the camera and rotates or tilts with the camera.|
|setIcon(icon: BitmapDescriptor)|`Promise<void>`|Sets the icon of a marker. If null is passed, the default marker will be used.|
|setInfoWindowAnchor(u: number, v: number)|`Promise<void>`|Sets the anchor point of a marker's information window. The coordinate system used is the same as that of the anchor point of a marker. By default, the top-middle point of the marker image is used as the anchor point. For details, please refer to setMarkerAnchor(float anchorU, float anchorV).|
|setMarkerAnchor(u: number, v: number)|`Promise<void>`|Sets the anchor point of a marker. The anchor point is used to anchor a marker image to the map. The coordinates (0, 0), (1, 0), (0, 1), and (1, 1) respectively indicate the top-left, top-right, bottom-left, and bottom-right corners of the marker image. The following figure shows a marker's anchor point X whose coordinates are (0.5, 0.3).|
|setPosition(latLng: LatLng)|`Promise<void>`|Sets the position coordinates of a marker.|
|setRotation(rotation: number)|`Promise<void>`|Sets the rotation angle of a marker, that is, the angle in which the marker rotates around the anchor point clockwise. The rotation axis is perpendicular to the marker. By default, the marker is north aligned, and the rotation angle is 0 degrees.|
|setSnippet(snippet: string)|`Promise<void>`|Sets the text snippet of a marker. If null is passed, the existing text snippet will be cleared.|
|setTitle(title: string)|`Promise<void>`|Sets the title of a marker. By default, the title is empty.|
|setTag(tag: any)|`Promise<void>`|Sets the tag of a marker. If null is passed, the existing tag will be cleared.|
|setVisible(visible: boolean)|`Promise<void>`|Sets whether a marker is visible.|
|setZIndex(zIndex: number)|`Promise<void>`|Sets the z-index of a marker. The z-index indicates the overlapping order of a marker. A marker with a larger z-index overlaps that with a smaller z-index. Markers with the same z-index overlap each other in a random order.|
#### Public Methods

##### getAlpha()
Obtains the transparency of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Transparency of a marker. The value ranges from 0 to 1.|
###### Sample Code
```ts
async function example(){
    let marker;
    const alpha: number = await marker.getAlpha();
}
```

##### getId()
Obtains the ID of a marker on a map. The ID will be unique among all markers on the map.
###### Return Type
|Type|Description|
|---|---|
|`string`|ID of a marker.|
###### Sample Code
```ts
async function example(){
    let marker;
    const id: string = marker.getId();    
}
```

##### getPosition()
Obtains the position of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng>`|Marker position.|
###### Sample Code
```ts
async function example(){
    let marker;
    const position: LatLng = await marker.getPosition();    
}
```

##### getRotation()
Obtains the rotation angle of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Rotation angle of a marker.|
###### Sample Code
```ts
async function example(){
    let marker;
    const rotation: number = await marker.getRotation();    
}
```

##### getSnippet()
Obtains the text snippet of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<string>`|Text snippet of a marker.|
###### Sample Code
```ts
async function example(){
    let marker;
    const snippet: string = await marker.getSnippet();    
}
```

##### getTag()
Obtains the tag attribute (if it has been set) of a marker. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<any>`|Object if a tag has been set; null otherwise.|
###### Sample Code
```ts
async function example(){
    let marker;
    const tag: any = await marker.getTag();    
}
```

##### getTitle()
Obtains the title of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<string>`|Title string of a marker.|
###### Sample Code
```ts
async function example(){
    let marker;
    const title: string = await marker.getTitle();    
}
```

##### getZIndex()
Obtains the z-index of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Z-index, which indicates the overlapping order of a marker.|
###### Sample Code
```ts
async function example(){
    let marker;
    const zIndex: number = await marker.getZIndex();    
}
```

##### isVisible()
Checks whether a marker is visible.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the marker is visible; false otherwise.|
###### Sample Code
```ts
async function example(){
    let marker;
    const visible: boolean = await marker.isVisible();    
}
```

##### isClusterable()
Checks whether a marker can be clustered.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the marker can be clustered; false otherwise.|
###### Sample Code
```ts
async function example(){
    let marker;
    const clusterable: boolean = await marker.isClusterable();    
}
```

##### isDraggable()
Checks whether users can long press a marker and drag it.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if users can long press a marker and drag it; false otherwise.|
###### Sample Code
```ts
async function example(){
    let marker;
    const draggable: boolean = await marker.isDraggable();    
}
```

##### isFlat()
Checks whether a marker is flatly attached to the map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if a marker is flatly attached to the map; false otherwise.|
###### Sample Code
```ts
async function example(){
    let marker;
    const flat: boolean = await marker.isFlat();    
}
```

##### isInfoWindowShown()
Checks whether an information window is currently displayed for a marker. This method will not consider whether the information window is actually visible on the screen.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if an information window is currently displayed; false otherwise.|
###### Sample Code
```ts
async function example(){
    let marker;
    const infoWindowShown: boolean = await marker.isInfoWindowShown();    
}
```

##### startAnimation()
Starts the animation of a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.startAnimation();    
}
```

##### remove()
Removes a marker from the map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.remove();    
}
```

##### hideInfoWindow()
Hides the information window that is displayed for a marker. This method is invalid for invisible markers.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.hideInfoWindow();    
}
```

##### showInfoWindow()
Displays an information window for a marker.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.showInfoWindow();    
}
```

##### setAlpha(alpha: number)
Sets the transparency of a marker.
###### Parameters
|Name|Type|Description|
|---|---|---|
|alpha|number|Transparency of a marker. The value ranges from 0 (completely transparent) to 1 (completely opaque). The default value is 1.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setAlpha(0.5);    
}
```

##### setAnimation(animation: AnimationSet)
Sets the animation of a marker.
###### Parameters
|Name|Type|Description|
|---|---|---|
|animation|AnimationSet|Animation.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    let animationSet: AnimationSet = new AnimationSet();
    await marker.setAnimation(animationSet);    
}
```

##### setDraggable(draggable: boolean)
Sets whether users can long press a marker and drag it.
###### Parameters
|Name|Type|Description|
|---|---|---|
|draggable|boolean|Indicates whether users can long press a marker and drag it. true: yes; false: no. The default value is false.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setDraggable(true);    
}
```

##### setFlat(flat: boolean)
Sets whether to flatly attach a marker to the map. If the marker is flatly attached to the map, it will stay on the map when the camera rotates or tilts. Different from a ground overlay, the marker will remain the same size when the camera zooms in or out. If the marker faces the camera, it will always be drawn facing the camera and rotates or tilts with the camera.
###### Parameters
|Name|Type|Description|
|---|---|---|
|flat|boolean|Indicates whether to flatly attach a marker to the map. true: yes; false (default): no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setFlat(true);    
}
```

##### setIcon(icon: BitmapDescriptor)
Sets the icon of a marker. If null is passed, the default marker will be used.
###### Parameters
|Name|Type|Description|
|---|---|---|
|icon|BitmapDescriptor|Object containing an icon.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    let descriptor: BitmapDescriptor;
    await marker.setAlpha(descriptor);    
}
```

##### setInfoWindowAnchor(u: number, v: number)
Sets the anchor point of a marker's information window. The coordinate system used is the same as that of the anchor point of a marker. By default, the top-middle point of the marker image is used as the anchor point. For details, please refer to setMarkerAnchor(float anchorU, float anchorV).
###### Parameters
|Name|Type|Description|
|---|---|---|
|u|number|Horizontal coordinate of the anchor point of an information window. The recommended value range is [0,1], expressed in a proportion of the information window width. The default value is 0.5.|
|v|number|Vertical coordinate of the anchor point of an information window. The recommended value range is [0,1], expressed in a proportion of the information window height. The default value is 1.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setInfoWindowAnchor(5,5);    
}
```

##### setMarkerAnchor(u: number, v: number)
Sets the anchor point of a marker. The anchor point is used to anchor a marker image to the map. The coordinates (0, 0), (1, 0), (0, 1), and (1, 1) respectively indicate the top-left, top-right, bottom-left, and bottom-right corners of the marker image. The following figure shows a marker's anchor point X whose coordinates are (0.5, 0.3).
###### Parameters
|Name|Type|Description|
|---|---|---|
|u|number|Horizontal coordinate of the anchor point of a marker. The recommended value range is [0,1], expressed in a proportion of the marker image width. The default value is 0.5.|
|v|number|Vertical coordinate of the anchor point of a marker. The recommended value range is [0,1], expressed in a proportion of the marker image height. The default value is 1.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setMarkerAnchor(10,10);    
}
```

##### setPosition(latLng: LatLng)
Sets the position coordinates of a marker.
###### Parameters
|Name|Type|Description|
|---|---|---|
|latLng|LatLng|Position coordinates of a marker.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setPosition({lat: 15, lng: 25});    
}
```

##### setRotation(rotation: number)
Sets the rotation angle of a marker, that is, the angle in which the marker rotates around the anchor point clockwise. The rotation axis is perpendicular to the marker. By default, the marker is north aligned, and the rotation angle is 0 degrees.
###### Parameters
|Name|Type|Description|
|---|---|---|
|rotation|number|Rotation angle of a marker. The default value is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setRotation(50);    
}
```

##### setSnippet(snippet: string)
Sets the text snippet of a marker. If null is passed, the existing text snippet will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|snippet|string|Text snippet of a marker.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setSnippet("mySnippet");    
}
```

##### setTitle(title: string)
Sets the title of a marker. By default, the title is empty.
###### Parameters
|Name|Type|Description|
|---|---|---|
|title|string|Title string. If this parameter is set to null, the existing title will be cleared.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setTitle("myTitle");    
}
```

##### setTag(tag: any)
Sets the tag of a marker. If null is passed, the existing tag will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tag|any|Tag of a marker.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setTag("myTag");    
}
```

##### setVisible(visible: boolean)
Sets whether a marker is visible.
###### Parameters
|Name|Type|Description|
|---|---|---|
|visible|boolean|Indicates whether a marker is visible. true: yes; false: no. The default value is true.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setVisible(true);    
}
```

##### setZIndex(zIndex: number)
Sets the z-index of a marker. The z-index indicates the overlapping order of a marker. A marker with a larger z-index overlaps that with a smaller z-index. Markers with the same z-index overlap each other in a random order.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zIndex|number|Z-index, which indicates the overlapping order of a marker. By default, the z-index is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let marker;
    await marker.setZIndex(5);    
}
```



### Polygon
Defines a polygon on the surface of the Earth. A polygon can be convex or concave. It can span the 180 meridian and have holes that are not filled in.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|	getFillColor()|`Promise<Color>`|Obtains the fill color of a polygon, in ARGB format.|
|	getHoles()|`Promise<LatLng[][]>`|Obtains holes in a polygon on a map.|
|	getId()|`string`|Obtains the ID of a polygon on a map. The ID will be unique among all polygons on the map.|
|	getPoints()|`Promise<LatLng[]>`|Obtains the vertex set of a polygon.|
|	getStrokeColor()|`Promise<Color>`|Obtains the stroke color of a polygon's outline, in ARGB format.|
|	getStrokeJointType()|`Promise<JointType>`|Obtains the joint type of a polygon.|
|	getStrokePattern()|`Promise<PatternItem[]>`|Obtains the stroke pattern of a polygon's outline.|
|	getStrokeWidth()|`Promise<number>`|Obtains the stroke width of a polygon's outline, in pixels.|
|	getTag()|`Promise<any>`|Obtains the tag attribute (if it has been set) of a polygon.|
|	getZIndex()|`Promise<number>`|Obtains the z-index of a polygon.|
|	isClickable()|`Promise<boolean>`|Checks whether a polygon is tappable.|
|	isVisible()|`Promise<boolean>`|Checks whether a polygon is visible.|
|	isGeodesic()|`Promise<boolean>`|Checks whether each segment of a polygon is drawn as a geodesic.|
|	remove()|`Promise<void>`|Removes the current object.|
|	setClickable(clickable: boolean)|`Promise<void>`|Sets whether a polygon is tappable.|
|	setFillColor(fillColor: Color)|`Promise<void>`|Sets the fill color of a polygon.|
|	setGeodesic(geodesic: boolean)|`Promise<void>`|Sets whether to draw each segment of a polygon as a geodesic.|
|	setHoles(holes: LatLng[][])|`Promise<void>`|Sets holes in a polygon.|
|	setPoints(points: LatLng[])|`Promise<void>`|Sets vertex coordinates of a polygon.|
|	setStrokeColor(strokeColor: Color)|`Promise<void>`|Sets the stroke color of a polygon's outline.|
|	setStrokeJointType(strokeJointType: JointType)|`Promise<void>`|Sets the joint type of a polygon.|
|	setStrokePattern(strokePattern: PatternItem[])|`Promise<void>`|Sets the stroke pattern of a polygon's outline.|
|	setStrokeWidth(strokeWidth: number)|`Promise<void>`|Sets the stroke width of a polygon's outline.|
|	setTag(tag: any)|`Promise<void>`|Sets the tag of a polygon. If null is passed, the existing tag will be cleared.|
|	setVisible(visible: boolean)|`Promise<void>`|Sets whether a polygon is visible. If the polygon is invisible, it will not be drawn but all other states will be preserved.|
|	setZIndex(zIndex: number)|`Promise<void>`|Sets the z-index of a polygon. The z-index indicates the overlapping order of a polygon. A polygon with a larger z-index overlaps that with a smaller z-index. Polygons with the same z-index overlap each other in a random order.|
#### Public Methods

##### getFillColor()
Obtains the fill color of a polygon, in ARGB format.
###### Return Type
|Type|Description|
|---|---|
|`Promise<Color>`|Color in ARGB format.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const fillColor: Color = await polygon.getFillColor();    
}
```

##### getHoles()
Obtains holes in a polygon on a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng[][]>`|Holes in a polygon.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const holes: LatLng[][] = await polygon.getHoles();      
}
```

##### getId()
Obtains the ID of a polygon on a map. The ID will be unique among all polygons on the map.
###### Return Type
|Type|Description|
|---|---|
|`string`|ID of a polygon.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const id: string = await polygon.getId();      
}
```

##### getPoints()
Obtains the vertex set of a polygon.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng[]>`|Vertex set of a polygon.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const points: LatLng[] = await polygon.getPoints();      
}
```

##### getStrokeColor()
Obtains the stroke color of a polygon's outline, in ARGB format.
###### Return Type
|Type|Description|
|---|---|
|`Promise<Color>`|Color in ARGB format.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const strokeColor: Color = await polygon.getStrokeColor();      
}
```

##### getStrokeJointType()
Obtains the joint type of a polygon.
###### Return Type
|Type|Description|
|---|---|
|`Promise<JointType>`|Joint type of a polygon.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const jointType: JointType = await polygon.getStrokeJointType();      
}
```

##### getStrokePattern()
Obtains the stroke pattern of a polygon's outline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<PatternItem[]>`|Stroke pattern of a polygon's outline.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const patternItems: PatternItem[] = await polygon.getStrokePattern();      
}
```

##### getStrokeWidth()
Obtains the stroke width of a polygon's outline, in pixels.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Stroke width of a polygon's outline, in pixels.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const strokeWidth: number = await polygon.getStrokeWidth();      
}
```

##### getTag()
Obtains the tag attribute (if it has been set) of a polygon. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<any>`|Object if a tag has been set; null otherwise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const tag: any = await polygon.getTag();      
}
```

##### getZIndex()
Obtains the z-index of a polygon.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Z-index, which indicates the overlapping order of a polygon.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const zIndex: number = await polygon.getZIndex();      
}
```

##### isClickable()
Checks whether a polygon is tappable.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if a polygon is tappable; false otherwise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const clickable: boolean = await polygon.isClickable();      
}
```

##### isVisible()
Checks whether a polygon is visible.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the polyline is visible; false otherwise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const visible: boolean = await polygon.isVisible();      
}
```

##### isGeodesic()
Checks whether each segment of a polygon is drawn as a geodesic.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if each segment is drawn as a geodesic; false otherwise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    const geodesic: boolean = await polygon.isGeodesic();      
}
```

##### remove()
Removes a polygon from a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.remove();      
}
```

##### setClickable(clickable: boolean)
Sets whether a polygon is tappable.
###### Parameters
|Name|Type|Description|
|---|---|---|
|clickable|boolean|Indicates whether a polygon is tappable. true: yes; false: no. The default value is false.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setClickable(true);     
}
```

##### setFillColor(fillColor: Color)
Sets the fill color of a polygon.
###### Parameters
|Name|Type|Description|
|---|---|---|
|fillColor|Color|Color in ARGB format. By default, the fill color is transparent (0x00000000).|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setFillColor(Color.DARK_GRAY);     
}
```

##### setGeodesic(geodesic: boolean)
Sets whether to draw each segment of a polygon as a geodesic.
###### Parameters
|Name|Type|Description|
|---|---|---|
|geodesic|boolean|Indicates whether to draw each segment of a polygon as a geodesic. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setGeodesic(true);     
}
```

##### setHoles(holes: LatLng[][])
Sets holes in a polygon.
###### Parameters
|Name|Type|Description|
|---|---|---|
|holes|LatLng[][]|Hole list. Each hole is a LatLng list.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    let holes = [
        [{"lat": 32, "lng": 1}, {"lat": 36, "lng": 54}],
        [{"lat": 22, "lng": 11}, {"lat": 26,"lng": 36}]

    ];
    await polygon.setHoles(holes);     
}
```

##### setPoints(points: LatLng[])
Sets vertex coordinates of a polygon.
###### Parameters
|Name|Type|Description|
|---|---|---|
|points|LatLng[]|Vertex coordinate set.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    let points = [{"lat": 11, "lng": 22}, {"lat": 32, "lng": 45}];
    await polygon.setPoints(points);    
}
```

##### setStrokeColor(strokeColor: Color)
Sets the stroke color of a polygon's outline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokeColor|Color|Color in ARGB format. By default, the stroke color is black (0xff000000).|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setStrokeColor(Color.WHITE);
}
```

##### setStrokeJointType(strokeJointType: JointType)
Sets the joint type of a polygon.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokeJointType|JointType|Joint type. The default value is DEFAULT.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setStrokeJointType(JointType.ROUND);    
}
```

##### setStrokePattern(strokePattern: PatternItem[])
Sets the stroke pattern of a polygon's outline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokePattern|PatternItem[]|PatternItem object set. The default value is null, indicating that the stroke is in the solid pattern.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    let strokePattern = [{"type": 1, "length": 0}, {"type": 0, "length": 10}];
    await polygon.setStrokePattern(strokePattern);    
}
```

##### setStrokeWidth(strokeWidth: number)
Sets the stroke width of a polygon's outline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|strokeWidth|number|Stroke width, in pixels. The default value is 10.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setStrokeWidth(10);    
}
```

##### setTag(tag: any)
Sets the tag of a polygon. If null is passed, the existing tag will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tag|any|Tag of a polygon.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setTag("myPolygon");    
}
```

##### setVisible(visible: boolean)
Sets whether a polygon is visible. If the polygon is invisible, it will not be drawn but all other states will be preserved.
###### Parameters
|Name|Type|Description|
|---|---|---|
|visible|boolean|Indicates whether a polygon is visible. By default, a polygon is visible.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setVisible(true);    
}
```

##### setZIndex(zIndex: number)
Sets the z-index of a polygon. The z-index indicates the overlapping order of a polygon. A polygon with a larger z-index overlaps that with a smaller z-index. Polygons with the same z-index overlap each other in a random order.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zIndex|number|Z-index, which indicates the overlapping order of a polygon. By default, the z-index is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polygon;
    await polygon.setZIndex(5);    
}
```



### Polyline
Defines a polyline, which is a list of vertices, where line segments are drawn between consecutive vertices.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|	getColor()|`Promise<Color>`|Obtains the stroke color of a polyline.|
|	getEndCap()|`Promise<Cap>`|Obtains the end vertex of a polyline.|
|	getStartCap()|`Promise<Cap>`|Obtains the start vertex of a polyline.|
|	getId()|`string`|Obtains the ID of a polyline on a map. The ID will be unique among all polylines on the map.|
|	getJointType()|`Promise<JointType>`|Obtains the joint type of all vertices of a polyline, except the start and end vertices.|
|	getPattern()|`Promise<PatternItem[]>`|Obtains the stroke pattern of a polyline.|
|	getPoints()|`Promise<LatLng[]>`|Obtains the vertex set of a polyline.|
|	getTag()|`Promise<any>`|Obtains the tag attribute (if it has been set) of a polyline.|
|	getWidth()|`Promise<number>`|Obtains the stroke width of a polyline. The default width is 10 pixels.|
|	getZIndex()|`Promise<number>`|Obtains the z-index of a polyline.|
|	isClickable()|`Promise<boolean>`|Checks whether a polyline is tappable.|
|	isGeodesic()|`Promise<boolean>`|Checks whether each segment of a polyline is drawn as a geodesic.|
|	isVisible()|`Promise<boolean>`|Checks whether a polyline is visible.|
|	remove()|`Promise<void>`|Removes a polyline from a map. After the polyline is removed, the operations of all its methods will be undefined.|
|	setClickable(clickable: boolean)|`Promise<void>`|Sets whether a polyline is tappable.|
|	setColor(color: Color)|`Promise<void>`|Sets the stroke color of a polyline.|
|	setStartCap(startCap: Cap)|`Promise<void>`|Sets the start vertex of a polyline.|
|	setEndCap(endCap: Cap)|`Promise<void>`|Sets the end vertex of a polyline.|
|	setGeodesic(geodesic: boolean)|`Promise<void>`|Sets whether to draw each segment of a polyline as a geodesic.|
|	setJointType(jointType: JointType)|`Promise<void>`|Sets the joint type of all vertices of a polyline, except the start and end vertices. For details of the allowed joint types, please refer to JointType. If the joint type is not set or not an allowed one, the default value DEFAULT will be used.|
|	setPattern(pattern: PatternItem[])|`Promise<void>`|Sets the stroke pattern of a polyline.|
|	setPoints(points: LatLng[])|`Promise<void>`|Sets the vertex coordinates of a polyline. By default, a straight line is drawn between the end vertex of the polyline and the set vertex coordinate point.|
|	setTag(tag: any)|`Promise<void>`|Sets the tag of a polyline. If null is passed, the existing tag will be cleared.|
|	setVisible(visible: boolean)|`Promise<void>`|Sets whether a polyline is visible. If the polyline is invisible, it will not be drawn but all other states will be preserved.|
|	setWidth(width: number)|`Promise<void>`|Sets the stroke width of a polyline.|
|	setZIndex(zIndex: number)|`Promise<void>`|Sets the z-index of a polyline. The z-index indicates the overlapping order of a polyline. A polyline with a larger z-index overlaps that with a smaller z-index. Polylines with the same z-index overlap each other in any order.|
#### Public Methods

##### getColor()
Obtains the stroke color of a polyline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<Color>`|Color in ARGB format.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const color: Color = await polyline.getColor();
}
```

##### getEndCap()
Obtains the end vertex of a polyline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<Cap>`|End vertex of a polyline.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const endCap: Cap = await polyline.getEndCap();    
}
```

##### getStartCap()
Obtains the start vertex of a polyline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<Cap>`|Start vertex of a polyline.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const startCap: Cap = await polyline.getStartCap();    
}
```

##### getId()
Obtains the ID of a polyline on a map. The ID will be unique among all polylines on the map.
###### Return Type
|Type|Description|
|---|---|
|`string`|ID of a polyline.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const id: string = await polyline.getId();    
}
```

##### getJointType()
Obtains the joint type of all vertices of a polyline, except the start and end vertices.
###### Return Type
|Type|Description|
|---|---|
|`Promise<JointType>`|Joint type of a polyline. The default value is DEFAULT.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const jointType: JointType = await polyline.getJointType();    
}
```

##### getPattern()
Obtains the stroke pattern of a polyline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<PatternItem[]>`|Stroke pattern of a polyline.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const patternItems: PatternItem[] = await polyline.getPattern();    
}
```

##### getPoints()
Obtains the vertex set of a polyline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng[]>`|Vertex set of a polyline.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const points: LatLng[] = await polyline.getPoints();    
}
```

##### getTag()
Obtains the tag attribute (if it has been set) of a polyline. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<any>`|Object if a tag has been set; null otherwise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const tag: any = await polyline.getTag();    
}
```

##### getWidth()
Obtains the stroke width of a polyline. The default width is 10 pixels. 
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Stroke width of a polyline, in pixels.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const width: number = await polyline.getWidth();    
}
```

##### getZIndex()
Obtains the z-index of a polyline.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Z-index, which indicates the overlapping order of a polyline.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const zIndex: number = await polyline.getZIndex();          
}
```

##### isClickable()
Checks whether a polyline is tappable.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the polyline is tappable; false otherwise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const clickable: boolean = await polyline.isClickable();    
}
```

##### isGeodesic()
Checks whether each segment of a polyline is drawn as a geodesic.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if each segment is drawn as a geodesic; false otherwise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const geodesic: boolean = await polyline.isGeodesic();    
}
```

##### isVisible()
Checks whether a polyline is visible.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the polyline is visible; false otherwise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    const visible: boolean = await polyline.isVisible();    
}
```

##### remove()
Removes a polyline from a map. After the polyline is removed, the operations of all its methods will be undefined.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.remove();    
}
```

##### setClickable(clickable: boolean)
Sets whether a polyline is tappable.
###### Parameters
|Name|Type|Description|
|---|---|---|
|clickable|boolean|Indicates whether a polyline is tappable. The default value is false.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setClickable(true);    
}
```

##### setColor(color: Color)
Sets the stroke color of a polyline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|color|Color|Color in ARGB format. By default, the stroke color is black (0xff000000).|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setColor(Color.BLACK);    
}
```

##### setStartCap(startCap: Cap)
Sets the start vertex of a polyline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|startCap|Cap|Start point. The default value is ButtCap.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    let startCap = new ButtCap();
    await polyline.setStartCap(startCap);    
}
```

##### setEndCap(endCap: Cap)
Sets the end vertex of a polyline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|endCap|Cap|End point. The default value is ButtCap.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    let endCap = new RoundCap();
    await polyline.setEndCap(endCap);
}
```

##### setGeodesic(geodesic: boolean)
Sets whether to draw each segment of a polyline as a geodesic.
###### Parameters
|Name|Type|Description|
|---|---|---|
|geodesic|boolean|Indicates whether to draw each segment of a polyline as a geodesic. true: yes; false: no.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setGeodesic(true);     
}
```

##### setJointType(jointType: JointType)
Sets the joint type of all vertices of a polyline, except the start and end vertices. For details of the allowed joint types, please refer to JointType. If the joint type is not set or not an allowed one, the default value DEFAULT will be used.
###### Parameters
|Name|Type|Description|
|---|---|---|
|jointType|JointType|Joint type. The default value is DEFAULT.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setJointType(JointType.ROUND);     
}
```

##### setPattern(pattern: PatternItem[])
Sets the stroke pattern of a polyline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|pattern|PatternItem[]|PatternItem object set. The default value is null, indicating that the stroke is in the solid pattern.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    let pattern = [{"type": 1, "length": 0}, {"type": 0, "length": 10}];
    await polyline.setPattern(pattern);     
}
```

##### setPoints(points: LatLng[])
Sets the vertex coordinates of a polyline. By default, a straight line is drawn between the end vertex of the polyline and the set vertex coordinate point. 
###### Parameters
|Name|Type|Description|
|---|---|---|
|points|LatLng[]|Vertex set of a polyline. By default, a polyline is not a closed area. To form a closed area, the start and end points of the polyline must be the same.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    let points = [{"lat": 25, "lng": 35}, {"lat": 26, "lng": 36}];
    await polyline.setPoints(points);
}
```

##### setTag(tag: any)
Sets the tag of a polyline. If null is passed, the existing tag will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tag|any|Tag of a polyline.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setTag("myPolyline");        
}
```

##### setVisible(visible: boolean)
Sets whether a polyline is visible. If the polyline is invisible, it will not be drawn but all other states will be preserved.
###### Parameters
|Name|Type|Description|
|---|---|---|
|visible|boolean|Indicates whether a polyline is visible. The default value is true.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setVisible(true);     
}
```

##### setWidth(width: number)
Sets the stroke width of a polyline.
###### Parameters
|Name|Type|Description|
|---|---|---|
|width|number|Stroke width of a polyline, in pixels. The default value is 10.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setWidth(20);     
}
```

##### setZIndex(zIndex: number)
Sets the z-index of a polyline. The z-index indicates the overlapping order of a polyline. A polyline with a larger z-index overlaps that with a smaller z-index. Polylines with the same z-index overlap each other in any order.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zIndex|number|Z-index, which indicates the overlapping order of a polyline. By default, the z-index is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let polyline;
    await polyline.setZIndex(3);     
}
```




### TileOverlay
Represents a tile overlay. A tile overlay is a set of images to be displayed on a map. It can be transparent and enable you to add new functions to an existing map.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getFadeIn()|`Promise<boolean>`|Checks whether a tile overlay fades in.|
|getId()|`string`|Obtains the ID of a tile overlay on a map. The ID will be unique among all tile overlays on the map.|
|getTransparency()|`Promise<number>`|Obtains the transparency of a tile overlay.|
|getZIndex()|`Promise<number>`|Obtains the z-index of a tile overlay.|
|isVisible()|`Promise<boolean>`|Checks whether a tile overlay is visible.|
|remove()|`Promise<void>`|Removes a tile overlay from a map.|
|clearTileCache()|`Promise<void>`|Clears the cache of a tile overlay.|
|setFadeIn(fadeIn: boolean)|`Promise<void>`|Sets whether a tile overlay fades in.|
|setTransparency(transparency: number)|`Promise<void>`|Sets the transparency of a tile overlay.|
|setZIndex(zIndex: number)|`Promise<void>`|Sets the z-index of a tile overlay. The z-index indicates the overlapping order of a tile overlay. A tile overlay with a larger z-index overlaps that with a smaller z-index. Tile overlays with the same z-index overlap each other in any order.|
|setVisible(visible: boolean)|`Promise<void>`|Sets whether a tile overlay is visible. If the tile overlay is invisible, it will not be drawn but all other states will be preserved. By default, a tile overlay is visible.|
#### Public Methods

##### getFadeIn()
Checks whether a tile overlay fades in.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|Indicates whether a tile overlay fades in.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;
    const fadeIn: boolean = await tileOverlay.getFadeIn();   
}
```

##### getId()
Obtains the ID of a tile overlay on a map. The ID will be unique among all tile overlays on the map.
###### Return Type
|Type|Description|
|---|---|
|`string`|ID of a tile overlay.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;
    const id: string = tileOverlay.getId();     
}
```

##### getTransparency()
Obtains the transparency of a tile overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Transparency of a tile overlay. The value ranges from 0 (completely opaque) to 1 (completely transparent).|
###### Sample Code
```ts
async function example(){
    let tileOverlay;
    const transparency: number = await tileOverlay.getTransparency();     
}
```

##### getZIndex()
Obtains the z-index of a tile overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Z-index, which indicates the overlapping order of a tile overlay.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;
    const zIndex: number = await tileOverlay.getZIndex();     
}
```

##### isVisible()
Checks whether a tile overlay is visible.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if the tile overlay is visible; false otherwise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;
    const visible: boolean = await tileOverlay.isVisible();     
}
```

##### remove()
Removes a tile overlay from a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;    
    await tileOverlay.remove();
}
```

##### clearTileCache()
Clears the cache of a tile overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;    
    await tileOverlay.clearTileCache();    
}
```

##### setFadeIn(fadeIn: boolean)
Sets whether a tile overlay fades in.
###### Parameters
|Name|Type|Description|
|---|---|---|
|fadeIn|boolean|Indicates whether a tile overlay fades in.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;    
    await tileOverlay.setFadeIn(true);    
}
```

##### setTransparency(transparency: number)
Sets the transparency of a tile overlay.
###### Parameters
|Name|Type|Description|
|---|---|---|
|transparency|number|Transparency of a tile overlay. The value ranges from 0 (completely opaque) to 1 (completely transparent). The default value is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;    
    await tileOverlay.setTransparency(0);    
}
```

##### setZIndex(zIndex: number)
Sets the z-index of a tile overlay. The z-index indicates the overlapping order of a tile overlay. A tile overlay with a larger z-index overlaps that with a smaller z-index. Tile overlays with the same z-index overlap each other in any order.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zIndex|number|Z-index, which indicates the overlapping order of a tile overlay. By default, the z-index is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;    
    await tileOverlay.setZIndex(7);    
}
```

##### setVisible(visible: boolean)
Sets whether a tile overlay is visible. If the tile overlay is invisible, it will not be drawn but all other states will be preserved. By default, a tile overlay is visible.
###### Parameters
|Name|Type|Description|
|---|---|---|
|visible|boolean|Indicates whether a tile overlay is visible. true: yes; false: no. The default value is true.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    let tileOverlay;    
    await tileOverlay.setVisible(true);    
}
```

### GroundOverlay
Defines an image that is fixed to a map.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getBearing()|`Promise<number>`|Obtains the bearing of a ground overlay.|
|getBounds()|`Promise<LatLngBounds>`|Obtains the bounds of a ground overlay.|
|getHeight()|`Promise<number>`|Obtains the height of a ground overlay.|
|getId()|`string`|Obtains the ID of a ground overlay on a map. The ID will be unique among all ground overlays on the map.|
|getPosition()|`Promise<LatLng>`|Obtains the position of a ground overlay.|
|getTag()|`Promise<any>`|Obtains the tag that has been set for a ground overlay.|
|getTransparency()|`Promise<number>`|Obtains the transparency of a ground overlay.|
|getWidth()|`Promise<number>`|Obtains the width of a ground overlay.|
|getZIndex()|`Promise<number>`|Obtains the z-index of a ground overlay.|
|isClickable()|`Promise<boolean>`|Checks whether a ground overlay is tappable.|
|isVisible()|`Promise<boolean>`|Checks whether a ground overlay is visible.|
|remove()|`Promise<void>`|Removes a ground overlay from a map.|
|setBearing(bearing: number)|`Promise<void>`|Sets the bearing of a ground overlay, in degrees clockwise from north.|
|setClickable(clickable: boolean)|`Promise<void>`|Sets whether a ground overlay is tappable.|
|setDimensions(width: any, height?: any)|`Promise<void>`|Sets the width and height of a ground overlay. The image will be scaled to fit the width and height.|
|setImage(imageDescriptor: BitmapDescriptor)|`Promise<void>`|Sets the image for a ground overlay. The new image will occupy the same bounds as the old image.|
|setPosition(position: LatLng)|`Promise<void>`|Changes the position of a ground overlay. All other attributes of the ground overlay remain unchanged.|
|setPositionFromBounds(positionLatLngBounds: LatLngBounds)|`Promise<void>`|Sets the position of a ground overlay by fitting it to specified longitude and latitude bounds. This method will ignore the bearing of the ground overlay when positioning it, but the bearing will still be used when the ground overlay is drawn.|
|setTag(tag: any)|`Promise<void>`|Sets the tag of a ground overlay. If null is passed, the tag will be cleared.|
|setTransparency(transparency: number)|`Promise<void>`|Sets the transparency of a ground overlay.|
|setVisible(visible: boolean)|`Promise<void>`|Sets whether a ground overlay is visible. If the ground overlay is invisible, it will not be drawn but all other states will be preserved.|
|setZIndex(zIndex: number)|`Promise<void>`|Sets the z-index of a ground overlay. The z-index indicates the overlapping order of a ground overlay. A ground overlay with a larger z-index overlaps that with a smaller z-index. Ground overlays with the same z-index overlap each other in a random order.|
#### Public Methods

##### getBearing()
Obtains the bearing of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Bearing of a ground overlay.|
###### Sample Code
```ts
async function example(){
    var bearing: number = await groundOverlay.getBearing();
}
```

##### getBounds()
Obtains the bounds of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLngBounds>`|Bounds of a ground overlay.|
###### Sample Code
```ts
async function example(){
    var bearing: number = await groundOverlay.getBounds();
}
```

##### getHeight()
Obtains the height of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Height of a ground overlay, in meters.|
###### Sample Code
```ts
async function example(){
    var bearing: number = await groundOverlay.getBounds();
}
```

##### getId()
Obtains the ID of a ground overlay on a map. The ID will be unique among all ground overlays on the map.
###### Return Type
|Type|Description|
|---|---|
|`string`|ID of a ground overlay.|
###### Sample Code
```ts
async function example(){
    var id: number = await groundOverlay.getId();
}
```

##### getPosition()
Obtains the position of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng>`|Longitude and latitude of a ground overlay.|
###### Sample Code
```ts
async function example(){
    var position: LatLng = await groundOverlay.getPosition();
}
```

##### getTag()
Obtains the tag that has been set for a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<any>`|Object if a tag has been set; null otherwise.|
###### Sample Code
```ts
async function example(){
    var tag: any = await groundOverlay.getTag();
}
```

##### getTransparency()
Obtains the transparency of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Transparency of a ground overlay. The value ranges from 0 to 1. The value 0 indicates opaque and the value 1 indicates transparent.|
###### Sample Code
```ts
async function example(){
    var transparency: number = await groundOverlay.getTransparency();
}
```

##### getWidth()
Obtains the width of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Width of a ground overlay, in meters.|
###### Sample Code
```ts
async function example(){
    var width: number = await groundOverlay.getWidth();
}
```

##### getZIndex()
Obtains the z-index of a ground overlay.
###### Return Type
|Type|Description|
|---|---|
|`Promise<number>`|Z-index, which indicates the overlapping order of a ground overlay.|
###### Sample Code
```ts
async function example(){
    var zIndex: number = await groundOverlay.getZIndex();
}
```

##### isClickable()
Checks whether a ground overlay is tappable.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if a ground overlay is tappable; false otherwise.|
###### Sample Code
```ts
async function example(){
    var clickable: boolean = await groundOverlay.isClickable();
}
```

##### isVisible()
Checks whether a ground overlay is visible.
###### Return Type
|Type|Description|
|---|---|
|`Promise<boolean>`|true if a ground overlay is visible; false otherwise.|
###### Sample Code
```ts
async function example(){
    var visible: boolean = await groundOverlay.isVisible();
}
```

##### remove()
Removes a ground overlay from a map.
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.remove();
}
```

##### setBearing(bearing: number)
Sets the bearing of a ground overlay, in degrees clockwise from north.
###### Parameters
|Name|Type|Description|
|---|---|---|
|bearing|number|Bearing of a ground overlay, in degrees clockwise from north. The value ranges from 0 to 360 (excluded). The default value is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setBearing(3);
}
```

##### setClickable(clickable: boolean)
Sets whether a ground overlay is tappable.
###### Parameters
|Name|Type|Description|
|---|---|---|
|clickable|boolean|Indicates whether a ground overlay is tappable. By default, a ground overlay is not tappable.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setClickable(true);
}
```

##### setDimensions(width: any, height?: any)
Sets the width and height of a ground overlay. The image will be scaled to fit the width and height.
###### Parameters
|Name|Type|Description|
|---|---|---|
|width|any|Width of a ground overlay, in meters.|
|height?|any|Height of a ground overlay, in meters.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setDimensions(15,10);
}
```

##### setImage(imageDescriptor: BitmapDescriptor)
Sets the image for a ground overlay. The new image will occupy the same bounds as the old image.
###### Parameters
|Name|Type|Description|
|---|---|---|
|imageDescriptor|BitmapDescriptor|Image object.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(bitmap: BitmapDescriptor){
    await groundOverlay.setImage(bitmap);
}
```

##### setPosition(position: LatLng)
Changes the position of a ground overlay. All other attributes of the ground overlay remain unchanged.
###### Parameters
|Name|Type|Description|
|---|---|---|
|position|LatLng|Position of a ground overlay. By default, the anchor point is half to the top and left of the image.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setPosition({lat:15,lng:25});
}
```

##### setPositionFromBounds(positionLatLngBounds: LatLngBounds)
Sets the position of a ground overlay by fitting it to specified longitude and latitude bounds. This method will ignore the bearing of the ground overlay when positioning it, but the bearing will still be used when the ground overlay is drawn.
###### Parameters
|Name|Type|Description|
|---|---|---|
|positionLatLngBounds|LatLngBounds|Bounds of a ground overlay.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setPositionFromBounds({"northeast": {"lat": 44, "lng": 55},"southwest": {"lat": 22, "lng": 33}});
}
```

##### setTag(tag: any)
Sets the tag of a ground overlay. If null is passed, the tag will be cleared.
###### Parameters
|Name|Type|Description|
|---|---|---|
|tag|any|Tag of a ground overlay.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setTag("myGroundOverlay");
}
```

##### setTransparency(transparency: number)
Sets the transparency of a ground overlay.
###### Parameters
|Name|Type|Description|
|---|---|---|
|transparency|number|Transparency of a ground overlay. The value ranges from 0 to 1. The value 0 indicates opaque and the value 1 indicates transparent. The default value is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setTransparency(0.5);
}
```

##### setVisible(visible: boolean)
Sets whether a ground overlay is visible. If the ground overlay is invisible, it will not be drawn but all other states will be preserved.
###### Parameters
|Name|Type|Description|
|---|---|---|
|visible|boolean|Indicates whether a ground overlay is visible. By default, a ground overlay is visible.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setVisible(true);
}
```

##### setZIndex(zIndex: number)
Sets the z-index of a ground overlay. The z-index indicates the overlapping order of a ground overlay. A ground overlay with a larger z-index overlaps that with a smaller z-index. Ground overlays with the same z-index overlap each other in a random order.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zIndex|number|Z-index, which indicates the overlapping order of a ground overlay. By default, the z-index is 0.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Empty Promise.|
###### Sample Code
```ts
async function example(){
    await groundOverlay.setZIndex(5);
}
```

### CameraUpdateFactory
Provides various methods for creating CameraUpdate objects that modify the camera of a map.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|newCameraPosition(cameraPosition: CameraPosition)|`CameraUpdate`|Sets a new position for the camera of a map. Actually, this will cause a change based on the longitude, latitude, zoom level, bearing, and tilt of a CameraPosition object.|
|newLatLng(latLng: LatLng)|`CameraUpdate`|Moves the camera to a desired longitude and latitude.|
|newLatLngBounds(latLngBounds: LatLngBounds, padding: number, width?: number, height?: number)|`CameraUpdate`|Centers a region on the screen by setting the width and height of the region, longitude and latitude bounds, and the padding between the region edges and the longitude/latitude bounding box edges.|
|newLatLngZoom(latLng: LatLng, zoom: number)|`CameraUpdate`|Sets the longitude and latitude of the center as well as the zoom level of a map's view.|
|scrollBy(xPixel: number, yPixel: number)|`CameraUpdate`|Moves the center of a map's view by pixel on the screen.|
|zoomBy(amount: number, focus?: Point)|`CameraUpdate`|Changes the zoom level of the camera by a specified incremental value and sets a specified point as the focus. The distance to the earth surface is shortened if amount has a positive value and prolonged if amount has a negative value. In the method, focus is the center point for zooming in or out.|
|zoomIn()|`CameraUpdate`|Increases the zoom level of the camera by 1.|
|zoomOut()|`CameraUpdate`|Decreases the zoom level of the camera by 1.|
|zoomTo(zoom: number)|`CameraUpdate`|Sets the zoom level of the camera to a specified value.|
#### Public Methods

##### newCameraPosition(cameraPosition: CameraPosition)
Sets a new position for the camera of a map. Actually, this will cause a change based on the longitude, latitude, zoom level, bearing, and tilt of a CameraPosition object.
###### Parameters
|Name|Type|Description|
|---|---|---|
|cameraPosition|CameraPosition|Camera position information.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position));    
}
```

##### newLatLng(latLng: LatLng)
Moves the camera to a desired longitude and latitude.
###### Parameters
|Name|Type|Description|
|---|---|---|
|latLng|LatLng|Desired longitude and latitude.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.newLatLng(latLng));    
}
```

##### newLatLngBounds(latLngBounds: LatLngBounds, padding: number, width?: number, height?: number)
Centers a region on the screen by setting the width and height of the region, longitude and latitude bounds, and the padding between the region edges and the longitude/latitude bounding box edges.
###### Parameters
|Name|Type|Description|
|---|---|---|
|latLngBounds|LatLngBounds|Longitude and latitude bounds to be displayed.|
|padding|number|Space between the region edges and bounding box edges, in pixels.|
|width?|number|Bounding box width, in pixels.|
|height?|number|Bounding box height, in pixels.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    const latLngBounds = {"southwest": {"lat": 11, "lng": 33}, "northeast": {"lat": 23, "lng": 44}};
    const padding = 5;
    await map.moveCamera(HMSMap.CameraUpdateFactory.newLatLngBounds(latLngBounds, padding));
}
```

##### newLatLngZoom(latLng: LatLng, zoom: number)
Sets the longitude and latitude of the center as well as the zoom level of a map's view.
###### Parameters
|Name|Type|Description|
|---|---|---|
|latLng|LatLng|Longitude and latitude of the center of a map's view.|
|zoom|number|Desired zoom level of the camera.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    let latLng = {"lat": 11, "lng": 33};
    let zoom = 5;
    await map.moveCamera(HMSMap.CameraUpdateFactory.newLatLngZoom(latLng, zoom));
}
```

##### scrollBy(xPixel: number, yPixel: number)
Moves the center of a map's view by pixel on the screen.
###### Parameters
|Name|Type|Description|
|---|---|---|
|xPixel|number|Number of pixels to scroll horizontally.|
|yPixel|number|Number of pixels to scroll vertically.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.scrollBy(33, 22));    
}
```

##### zoomBy(amount: number, focus?: Point)
Changes the zoom level of the camera by a specified incremental value and sets a specified point as the focus. The distance to the earth surface is shortened if amount has a positive value and prolonged if amount has a negative value. In the method, focus is the center point for zooming in or out.
###### Parameters
|Name|Type|Description|
|---|---|---|
|amount|number|Incremental value to change the zoom level.|
|focus?|Point|Coordinates of a point to be set as the focus.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.zoomBy(5, {x: 5, y: 12}));
}
```

##### zoomIn()
Increases the zoom level of the camera by 1.
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.zoomIn());
}
```

##### zoomOut()
Decreases the zoom level of the camera by 1.
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.zoomOut());
}
```

##### zoomTo(zoom: number)
Sets the zoom level of the camera to a specified value.
###### Parameters
|Name|Type|Description|
|---|---|---|
|zoom|number|Desired zoom level.|
###### Return Type
|Type|Description|
|---|---|
|`CameraUpdate`|CameraUpdate object, which is used to update the camera position.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    await map.moveCamera(HMSMap.CameraUpdateFactory.zoomTo(10));
}
```


### Projection
Final class extends Object and converts between the screen coordinates and longitude/latitude coordinates.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|fromScreenLocation(point: Point)|`Promise<LatLng>`|You can call this method to obtain the longitude and latitude of a location on the screen. The location on the screen is specified in screen pixels (instead of display pixels) relative to the top left corner of the map (instead of the top left corner of the screen).|
|getVisibleRegion()|`Promise<VisibleRegion>`|Obtains the visible region after conversion between the screen coordinates and longitude/latitude coordinates.|
|toScreenLocation(latLng: LatLng)|`Promise<Point>`|You can call this method to obtain a location on the screen corresponding to a longitude and latitude. The location on the screen is specified in screen pixels (instead of display pixels) relative to the top left corner of the map (instead of the top left corner of the screen).|
#### Public Methods

##### fromScreenLocation(point: Point)
You can call this method to obtain the longitude and latitude of a location on the screen. The location on the screen is specified in screen pixels (instead of display pixels) relative to the top left corner of the map (instead of the top left corner of the screen).
###### Parameters
|Name|Type|Description|
|---|---|---|
|point|Point|Coordinates of a location on the screen, in pixels.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<LatLng>`|LatLng object that contains the corresponding longitude and latitude.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    const latLng: LatLng = await map.getProjection().fromScreenLocation({x: 300, y: 600});
}
```

##### getVisibleRegion()
Obtains the visible region after conversion between the screen coordinates and longitude/latitude coordinates.
###### Return Type
|Type|Description|
|---|---|
|`Promise<VisibleRegion>`|Visible region.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    const vr: VisibleRegion = await map.getProjection().getVisibleRegion();
}
```

##### toScreenLocation(latLng: LatLng)
You can call this method to obtain a location on the screen corresponding to a longitude and latitude. The location on the screen is specified in screen pixels (instead of display pixels) relative to the top left corner of the map (instead of the top left corner of the screen).
###### Parameters
|Name|Type|Description|
|---|---|---|
|latLng|LatLng|Longitude and latitude of a location on the map.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<Point>`|Coordinates of a location on the screen, in pixels.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = await HMSMap.getMap("map",{});
    const point: Point = await map.getProjection().toScreenLocation({lat: 12, lng: 43});
}
```


### AnimationSet
An animation set.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|addRotateAnimation(animation: RotateAnimation)|`void`|Adds an rotate animation.|
|addScaleAnimation(animation: ScaleAnimation)|`void`|Adds an scale animation.|
|addTranslateAnimation(animation: TranslateAnimation)|`void`|Adds an translate animation.|
|addAlphaAnimation(animation: AlphaAnimation)|`void`|Adds an alpha animation.|
#### Public Methods

##### addRotateAnimation(animation: RotateAnimation)
Adds a rotate animation.
###### Parameters
|Name|Type|Description|
|---|---|---|
|animation|RotateAnimation|RotateAnimation object.|
###### Return Type
|Type|Description|
|---|---|
|`void`|-|
###### Sample Code
```ts
async function example(){
    let marker;
    const animationSet = new AnimationSet();
    animationSet.addRotateAnimation({
        fromDegree: 30, toDegree: 170, duration: 1200, repeatCount: 3,
        animationStart: () => {
            console.log('rotate animation started');
        },
        animationEnd: () => {
            console.log('rotate animation end');
        }
    });
    await marker.setAnimation(animationSet);
    await marker.startAnimation();    
}
```

##### addScaleAnimation(animation: ScaleAnimation)
Adds a scale animation.
###### Parameters
|Name|Type|Description|
|---|---|---|
|animation|ScaleAnimation|ScaleAnimation object.|
###### Return Type
|Type|Description|
|---|---|
|`void`|-|
###### Sample Code
```ts
async function example(){
    let marker;
    const animationSet = new AnimationSet();
    animationSet.addScaleAnimation({
        fromX:10, toX: 15, fromY:15, toY: 25,
        animationStart: () => {
            console.log('rotate animation started');
        },
        animationEnd: () => {
            console.log('rotate animation end');
        }
    });
    await marker.setAnimation(animationSet);
    await marker.startAnimation();    
}
```

##### addTranslateAnimation(animation: TranslateAnimation)
Adds a translate animation.
###### Parameters
|Name|Type|Description|
|---|---|---|
|animation|TranslateAnimation|TranslateAnimation object.|
###### Return Type
|Type|Description|
|---|---|
|`void`|-|
###### Sample Code
```ts
async function example(){
    let marker;
        const animationSet = new AnimationSet();
        animationSet.addTranslateAnimation({
            target: {lat: 15, lng: 25},
            animationStart: () => {
                console.log('rotate animation started');
            },
            animationEnd: () => {
                console.log('rotate animation end');
            }
        });
        await marker.setAnimation(animationSet);
        await marker.startAnimation();    
}
```

##### addAlphaAnimation(animation: AlphaAnimation)
Adds an alpha animation.
###### Parameters
|Name|Type|Description|
|---|---|---|
|animation|AlphaAnimation|AlphaAnimation object.|
###### Return Type
|Type|Description|
|---|---|
|`void`|-|
###### Sample Code
```ts
async function example(){
    let marker;
    const animationSet = new AnimationSet();
    animationSet.addAlphaAnimation({
        fromAlpha: 0.2, toAlpha: 0.8, duration: 1000, repeatCount: 4,
        animationStart: () => {
            console.log('rotate alpha started');
        },
        animationEnd: () => {
            console.log('rotate alpha end');
        }
    });
    await marker.setAnimation(animationSet);
    await marker.startAnimation();    
}
```


### MapStyleOptions
Defines the style of a HuaweiMap object.

#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|loadRawResourceStyle(resourceId: number)|MapStyleOptions|Obtains a MapStyleOptions object created based on raw resources.|
#### Public Methods
##### loadRawResourceStyle(resourceId: number)
Obtains a MapStyleOptions object created based on raw resources.
###### Parameters
|Name|Type|Description|
|---|---|---|
|resourceId|number|Raw resource ID.|
###### Return Type
|Type|Description|
|---|---|
|MapStyleOptions|MapStyleOptions object.|
###### Sample Code
```ts
async function example(){
    var map: HuaweiMap = HMSMap.getMap("map",{});
    const resourceId: number = 000; // Your resource file.
    const mapStyleOptions: MapStyleOptions = MapStyleOptions.loadRawResourceStyle(resourceId);
    await map.setMapStyle(mapStyleOptions);      
}
```

### Cap
Defines a cap that is applied at the start or end vertex of a polyline.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getType()|`number`|Return type of cap.|
#### Public Methods

##### getType()
Return type of cap.
###### Return Type
|Type|Description|
|---|---|
|`number`|Type id of cap.|

### ButtCap
Extends Cap and defines a cap that is squared off exactly at the start or end vertex of a polyline.
###### Sample Code
```ts
async function example(){
    const buttCap: ButtCap = new ButtCap();         
}
```
### RoundCap
Extends the Cap class and represents a semicircle with a radius equal to a half of the stroke width. The semicircle will be centered at the start or end vertex of a polyline.
```ts
async function example(){
    const roundCap: RoundCap = new RoundCap();         
}
```
### SquareCap
Extends Cap and sets the start or end vertex of a polyline to the square type.
```ts
async function example(){
    const squareCap: SquareCap = new SquareCap();         
}
```
### CustomCap
Extends the Cap class to customize the cap style for a polyline.
```ts
async function example(){
    const bitmapDescriptor: BitmapDescriptor = {asset: 'path to source file.'};
    const refWidth: number = 15;
    const customCap: CustomCap = new CustomCap(bitmapDescriptor, refWidth);   
}
```
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|getRefWidth()|`number`|Returns width of cap.|
|getBitmapDescriptor()|`BitmapDescriptor`|Returns bitmap image of cap.|
#### Public Methods

##### getRefWidth()
Returns width of cap.
###### Return Type
|Type|Description|
|---|---|
|`number`|Width of cap.|
###### Sample Code
```ts
async function example(){
    const customCap;
    const refWidth: number = customCap.getRefWidth();   
}
```

##### getBitmapDescriptor()
Returns bitmap image of cap
###### Return Type
|Type|Description|
|---|---|
|`BitmapDescriptor`|Bitmap image of cap.|
###### Sample Code
```ts
async function example(){
    let customCap;
    const bitmap: BitmapDescriptor = customCap.getBitmapDescriptor();     
}
```


### MapBounds
Interface for toolbar and footer section.

|Field|Type|Description|
|---|---|---|
|marginTop?|`number`|Toolbar height.|
|marginBottom?|`number`|Footer height.|

### HuaweiMapOptions
Defines attributes for a HuaweiMap object. These attributes can be used when you add a map to your app.

|Field|Type|Description|
|---|---|---|
|mapType?|`MapType`|Map type.|
|zoomControlsEnabled?|`boolean`|Indicates whether to enable the zoom function. true (default): yes; false: no.|
|compassEnabled?|`boolean`|Indicates whether to enable the compass. true (default): yes; false: no.|
|zoomGesturesEnabled?|`boolean`|Indicates whether to enable zoom gestures. true (default): yes; false: no.|
|scrollGesturesEnabled?|`boolean`|Indicates whether to enable scroll gestures. true (default): yes; false: no.|
|rotateGesturesEnabled?|`boolean`|Indicates whether to enable rotate gestures. true (default): yes; false: no.|
|tiltGesturesEnabled?|`boolean`|Indicates whether to enable tilt gestures. true (default): yes; false: no.|
|zOrderOnTop?|`boolean`|Indicates whether to place the surface of a map view on top of its window. true: yes; false: no.This parameter cannot be set for map containers TextureMapView, TextureMapFragment, and TextureSupportMapFragment.|
|liteMode?|`boolean`|Specifies whether to create a map in lite mode.|
|ambientEnabled?|`boolean`|True if the ambient mode is enabled; false otherwise.|
|minZoomPreference?|`number`|Preferred minimum zoom level.|
|maxZoomPreference?|`number`|Preferred maximum zoom level.|
|cameraPosition?|`CameraPosition`|Specifies the initial camera position for a map based on the cameraPosition parameter.|
|latLngBounds?|`LatLngBounds`|Bounds for constraining the camera target.|

### LatLngBounds
Defines a rectangular area using a pair of longitude and latitude.

|Field|Type|Description|
|---|---|---|
|southwest|`LatLng`|Southwest corner of the bound.|
|northeast|`LatLng`|Northeast corner of the bound.|

### CameraPosition
An object that encapsulates all camera attributes.

|Field|Type|Description|
|---|---|---|
|target|`LatLng`|Longitude and latitude of the location that the camera is pointing at.|
|zoom?|`number`|Zoom level near the center of the screen.|
|bearing?|`number`|Direction that the camera is pointing in.|
|tilt?|`number`|Angle of the camera from the nadir (directly facing the Earth's surface).|

### LatLng
Represents the longitude and latitude, in degrees.

|Field|Type|Description|
|---|---|---|
|lat|`number`|Latitude. The value ranges from –90 to 90.|
|lng|`number`|Longitude. The value ranges from –180 to 180 (excluded).|

### CircleOptions
Defines attributes for a circle.

|Field|Type|Description|
|---|---|---|
|center|`LatLng`|Center of a circle, which cannot be null.|
|clickable?|`boolean`|Indicates whether a circle is tappable. true: yes; false: no.|
|fillColor?|`Color`|Fill color of a circle, in ARGB format. By default, the fill color is transparent (0x00000000).|
|radius|`number`|Radius of a circle, in meters. By default, the radius is 0.|
|strokeColor?|`Color`|Stroke color of a circle's outline. By default, the stroke color is black (0xff000000).|
|strokeWidth?|`number`|Stroke width, in pixels. The value must be greater than or equal to 0. The default value is 10.|
|strokePattern?|`PatternItem[]`|Stroke pattern of a circle's outline. The default value is null, indicating that the stroke is in the solid pattern.|
|visible?|`boolean`|Indicates whether a circle is visible. true: yes; false: no. The default value is true.|
|zIndex?|`number`|Z-index, which indicates the overlapping order of a circle. By default, the z-index is 0.|

### POI (Point of Interest)
Defines attributes for a point of interest.

|Field|Type|Description|
|---|---|---|
|latLng|`LatLng`|Position of a POI.|
|name?|`string`|Name of a POI.|
|placeId?|`string`|ID of a POI.|

### PatternItem
Defines the stroke pattern of a polyline or the outline of a polygon or circle.

|Field|Type|Description|
|---|---|---|
|type|`PatternItemType`|Type of pattern item.|
|length|`number`|Length of the pattern item.|

### MarkerOptions
Defines attributes for a marker.

|Field|Type|Description|
|---|---|---|
|anchorMarker?|`Anchor`|The anchor point of a marker.|
|infoWindowAnchor?|`WindowAnchor`|The anchor point of a marker's information window.|
|infoWindowShown?|`boolean`|True if an information window is currently displayed; false otherwise.|
|alpha?|`number`|Transparency of a marker. The value ranges from 0 (completely transparent) to 1 (completely opaque). The default value is 1.|
|clusterable?|`boolean`|Indicates whether a marker can be clustered. true: yes; false: no. The default value is false.|
|draggable?|`boolean`|Indicates whether users can long press a marker and drag it. true: yes; false: no. The default value is false.|
|icon?|`BitmapDescriptor`|BitmapDescriptor object of an icon.|
|flat?|`boolean`|Indicates whether to flatly attach a marker to the map. true: flatly attaching to the map; false: facing the camera. The default value is false.|
|position|`LatLng`|Position coordinates of a marker.|
|rotation?|`number`|Rotation angle of a marker. The default value is 0.|
|snippet?|`string`|Text snippet of a marker.|
|title?|`string`|Title.|
|visible?|`boolean`|Indicates whether a marker is visible. true: yes; false: no. The default value is true.|
|zIndex?|`number`|Z-index, which indicates the overlapping order of a marker. By default, the z-index is 0.|

### ScaledSize
Defines bitmap's width and height property.

|Field|Type|Description|
|---|---|---|
|width|`number`|Width of the bitmap.|
|height|`number`|Height of the bitmap.|

### Asset
Defines an image in assets directory.

|Field|Type|Description|
|---|---|---|
|fileName|`string`|Name of the file in assets directory.|
|scaledSize|`ScaledSize`|A ScaleSized object defines width and height of the image.If this property is omitted, then the default value of the image will be used.|

### Resource
Defines an image in res directory.

|Field|Type|Description|
|---|---|---|
|fileName|`string`|Name of the file in res directory. File name must not contain extension. If your name of the image file is 'image.png', then you should give 'image'.|
|resourceType|`string`|Name of the directory in res contains image.|
|scaledSize|`ScaledSize`|A ScaleSized objet defines width and height of the image.If this property is omitted, then the default value of the image will be used.|

### BitmapDescriptor
Defines a bitmap image. Either one of the variants below can be used when a Bitmap is required.

|Field|Type|Description|
|---|---|---|
|hue?|`Hue`|Hue value.|
|asset?|`Asset`|An asset object defines an image in assets directory.|
|resource?|`Resource`|An resource object defines an image in res directory.|

### Anchor
Defines the anchor point of a marker. The anchor point is used to anchor a marker image to the map. The coordinates (0, 0), (1, 0), (0, 1), and (1, 1) respectively indicate the upper-left, upper-right, lower-left, and lower-right corners of the marker image.

|Field|Type|Description|
|---|---|---|
|u?|`number`|Horizontal coordinate of the anchor point of a marker. The recommended value range is [0,1], expressed in a proportion of the marker image width. The default value is 0.5.|
|v?|`number`|Vertical coordinate of the anchor point of a marker. The recommended value range is [0,1], expressed in a proportion of the marker image height. The default value is 1.|

### PolygonOptions
Defines attributes for a polygon.

|Field|Type|Description|
|---|---|---|
|points|`LatLng[]`|All vertices of a polygon.|
|holes?|`LatLng[][]`|Holes in a polygon.|
|clickable?|`boolean`|Indicates whether a polygon is tappable. By default, a polygon is not tappable.|
|geodesic?|`boolean`|Indicates whether to draw each segment of a polygon as a geodesic. true: yes; false: no.|
|fillColor?|`Color`|Color in ARGB format.|
|strokeColor?|`Color`|Color in ARGB format.|
|strokeJointType?|`JointType`|Joint type of a polygon.|
|strokePattern?|`PatternItem[]`|Stroke pattern of a polygon's outline.|
|strokeWidth?|`number`|Stroke width of a polygon's outline, in pixels.|
|visible?|`true`|Indicates whether a polygon is visible. By default, a polygon is visible.|
|zIndex?|`number`|Z-index, which indicates the overlapping order of a polygon. By default, the z-index is 0.|

### PolylineOptions
Defines attributes for a polyline.

|Field|Type|Description|
|---|---|---|
|points|`LatLng[]`|All vertices of a polyline.|
|clickable?|`boolean`|Indicates whether a polyline is tappable. true: yes; false (default): no.|
|color?|`Color`|Color in ARGB format. By default, the stroke color is black (0xff000000).|
|startCap?|`Cap`|Start point. The default value is ButtCap.|
|pattern?|`PatternItem[]`|PatternItem object set. The default value is null, indicating that the stroke is in the solid pattern.|
|endCap?|`Cap`|End point. The default value is ButtCap.|
|geodesic?|`boolean`|Indicates whether to draw each segment of a polyline as a geodesic. true: yes; false: no.|
|jointType?|`JointType`|Defines the joint type for a polyline or the outline of a polygon.|
|visible?|`boolean`|Indicates whether a polyline is visible. By default, a polyline is visible.|
|width?|`number`|Stroke width of a polyline, in pixels. The default value is 10.|
|zIndex?|`number`|Z-index, which indicates the overlapping order of a polyline. By default, the z-index is 0.|

### GroundOverlayOptions
Defines attributes for a ground overlay.

|Field|Type|Description|
|---|---|---|
|width?|`number`|Width of a ground overlay, in meters.|
|height?|`number`|Height of a ground overlay, in meters.|
|anchor?|`Anchor`|Sets the alignment (that is, anchor point) of a ground overlay.|
|bearing?|`number`|Bearing of a ground overlay, in degrees clockwise from north. The value ranges from 0 to 360 (excluded). The default value is 0.|
|clickable?|`boolean`|Indicates whether a ground overlay is tappable. By default, a ground overlay is not tappable.|
|image?|`BitmapDescriptor`|Image for a ground overlay.|
|visible?|`boolean`|Indicates whether a ground overlay is visible. By default, a ground overlay is visible.|
|transparency?|`number`|Transparency of the ground overlay. The default value is 0.|
|zIndex?|`number`|Z-index, which indicates the overlapping order of a ground overlay. By default, the z-index is 0.|
|position|`Position`|Position of an anchor point. By default, the anchor point is half to the top and left of the image.|
|bounds?|`LatLngBounds`|Bounds of a ground overlay.|

### Position
Defines position attributes.

|Field|Type|Description|
|---|---|---|
|latLng|`LatLng`|Defines the longitude and latitude, in degrees.|
|width|`number`|Width of a component object, in meters.|
|height?|`number`|Height of a component object, in meters.|

### URLTile
Defines URLTile attributes.

|Field|Type|Description|
|---|---|---|
|URL|`string`|URL path of the tile.|

### Tile
Defines Tile attributes.

|Field|Type|Description|
|---|---|---|
|x|`number`|x position of tile.|
|y|`number`|y position of tile.|
|width|`number`|Width of a tile, in pixels.|
|height|`number`|Height of a tile, in pixels.|
|zoom|`number`|Indicates that in which zoom level this tile will be shown.|
|path|`string`|Path of the tile.|

### RepetitiveTile
Defines RepetitiveTile attributes.

|Field|Type|Description|
|---|---|---|
|width|`number`|Width of a tile, in pixels.|
|height|`number`|Height of a tile, in pixels.|
|zoom|`number[]`|Indicates that in which zoom levels this tile will be shown.|
|path|`string`|Path of the tile.|

### TileProvider
Defines TileProvider attributes.

|Field|Type|Description|
|---|---|---|
|type|`TileType`|Type of the provider.|
|data|`Tile[] or URLTile or RepetitiveTile`|Data of the provider.|

### TileOverlayOptions
Defines TileOverlayOptions attributes.

|Field|Type|Description|
|---|---|---|
|tileProvider|`TileProvider`|Provider of tiles that will be shown on map.|
|fadeIn?|`boolean`|Indicates whether a tile overlay fades in. true: yes; false: no.|
|transparency?|`number`|Transparency of a tile overlay. The value ranges from 0 (completely opaque) to 1 (completely transparent). The default value is 0.|
|visible?|`boolean`|Indicates whether a tile overlay is visible. The options are true (yes) and false (no). The default value is true.|
|zIndex?|`number`|Z-index, which indicates the overlapping order of a tile overlay. By default, the z-index is 0.|

### Animation
Defines Animation attributes.

|Field|Type|Description|
|---|---|---|
|duration?|`number`|Animation duration, in milliseconds. The default value is 250.|
|repeatCount?|`number`|Number of times that an animation is replayed.|
|repeatMode?|`number`|Animation replay mode.|
|interpolator?|`Interpolator`|An interpolator defines the rate of change of an animation.|
|animationStart?|`Function`|A callback function called when animation is started.|
|animationEnd?|`Function`|A callback function called when animation is end.|

### RotateAnimation
Defines RotateAnimation attributes.

|Field|Type|Description|
|---|---|---|
|fromDegree|`number`|Beginning degree of rotation.|
|toDegree|`number`|End degree of rotation.|

### ScaleAnimation
Defines ScaleAnimation attributes.

|Field|Type|Description|
|---|---|---|
|fromX|`number`|Beginning x position.|
|toX|`number`|Ending x position.|
|fromY|`number`|Beginning y position.|
|toY|`number`|Ending y position.|

### TranslateAnimation
Defines TranslateAnimation attributes.

|Field|Type|Description|
|---|---|---|
|target|`LatLng`|Target LatLng.|

### AlphaAnimation
Defines AlphaAnimation attributes.

|Field|Type|Description|
|---|---|---|
|fromAlpha|`number`|Amount of alpha when the animation started.|
|toAlpha|`number`|Amount of alpha when the animation end.|

### CancelableCallback
Defines CancelableCallback attributes.

|Field|Type|Description|
|---|---|---|
|onFinish|Function|Called when a CameraUpdate task is complete.|
|onCancel|Function|Called when a CameraUpdate task is canceled.|

### InfoWindowAdapter
Defines InfoWindowAdapter attributes.

|Field|Type|Description|
|---|---|---|
|file|`string`|File path of infoWindow|
|width|`number`|Width of infoWindow html file.|
|height|`number`|Height of infoWindow html file.|

### Location
Location interface for current location of the user.

|Field|Type|Description|
|---|---|---|
|accuracy|`number`|Estimated horizontal accuracy of this location, radial, in meters.|
|altitude|`number`|Get the altitude if available, in meters above the WGS 84 reference ellipsoid. If this location does not have an altitude then 0.0 is returned.|
|bearing|`number`|Bearing is the horizontal direction of travel of this device, and is not related to the device orientation. It is guaranteed to be in the range (0.0, 360.0] if the device has a bearing.If this location does not have a bearing then 0.0 is returned.|
|elapsedRealtimeNanos|`number`|Elapsed real-time of fix, in nanoseconds since system boot.|
|latitude|`number`|Latitude, in degrees.|
|longitude|`number`|Longitude, in degrees.|
|provider|`string`|The name of the provider that generated this fix.|
|speed|`number`|Speed of this location in meters/second over ground.If this location does not have a speed then 0.0 is assigned to this variable.|
|time|`number`|UTC time of this fix, in milliseconds since January 1, 1970.|
|fromMockProvider|`boolean`|Mock provider of the location.|
|contents|`number`|Describe the kinds of special objects contained in this Parcelable instance's marshaled representation.|
|bearingAccuracyDegrees?|`number`|Estimated bearing accuracy of this location, in degrees.|
|speedAccuracyMetersPerSecond?|`number`|Estimated speed accuracy of this location, in meters per second.|
|verticalAccuracyMeters?|`number`|Estimated vertical accuracy of this location, in meters.|

### ComputeDistanceResult
Distance computing result.

|Field|Type|Description|
|---|---|---|
|result|`number`|Computed distance of latLngs|

### Point
Defines Point attributes.

|Field|Type|Description|
|---|---|---|
|x|`number`|x coordinate of point.|
|y|`number`|y coordinate of point.|

### SnapshotResult
Defines SnapshotResult attributes.

|Field|Type|Description|
|---|---|---|
|data|`string`|Data obtained from snapshot.|

### VisibleRegion
Defines VisibleRegion attributes.

|Field|Type|Description|
|---|---|---|
|farLeft|`LatLng`|Far left corner of the camera.|
|farRight|`LatLng`|Far right corner of the camera.|
|latLngBounds|`LatLngBounds`|Smallest bounding box that includes the visible region.|
|nearLeft|`LatLng`|Near left corner of the camera.|
|nearRight|`LatLng`|Near right corner of the camera.|

### Interpolator
An interpolator defines the rate of change of an animation.

|Field|Type|Description|
|---|---|---|
|type|`InterpolatorType`|Type of the interpolator.|
|args|`any`|An object if interpolator needs parameters.|

### Enum Color
Integer color values.

|Field|Value|Description|
|---|---|---|
|RED|-65536|RED.|
|DARK_GRAY|-12303292|DARK GRAY.|
|GRAY|-7829368|GRAY.|
|WHITE|-1|WHITE.|
|BLUE|-16776961|BLUE.|
|BLACK|-16777216|BLACK.|
|LITE_GRAY|-3355444|LITE GRAY.|
|MAGENTA|-65281|MAGENTA.|
|YELLOW|-256|YELLOW.|
|CYAN|-16711681|CYAN.|
|GREEN|-16711936|GREEN.|
|TRANSPARENT|0|TRANSPARENT.|

### Enum JointType
Joint types for a polyline or the outline of a polygon.

|Field|Value|Description|
|---|---|---|
|ROUND|2|Flat bevel.|
|BEVEL|1|Round.|
|DEFAULT|0|Default type.|

### Enum MapEvent
Huawei map events.

|Field|Value|Description|
|---|---|---|
|ON_INDOOR_BUILDINGS_FOCUSED|"onIndoorBuildingsFocused"|Currently not supported.|
|ON_INDOOR_LEVEL_ACTIVATED|"onIndoorLevelActivated"|Currently not supported.|
|ON_MAP_LOADED|"onMapLoaded"|Provides callbacks executed when the map loading is completed.|
|ON_CAMERA_IDLE|"onCameraIdle"|Listens for the end of camera movement.|
|ON_CAMERA_MOVE_CANCELED|"onCameraMoveCanceled"|Listens for the stop of camera movement or the beginning of camera movement due to a new reason.|
|ON_CAMERA_MOVE|"onCameraMove"|Listens for camera movement.|
|ON_CAMERA_MOVE_STARTED|"onCameraMoveStarted"|Listens for the beginning of camera movement.|
|ON_CIRCLE_CLICK|"onCircleClick"|Listens for the circle tap event.|
|ON_GROUND_OVERLAY_CLICK|"onGroundOverlayClick"|Listens for the group overlay tap event|
|ON_INFO_WINDOW_CLICK|"onInfoWindowClick"|Listens for the information window tap event.|
|ON_INFO_WINDOW_CLOSE|"onInfoWindowClose"|Listens for the information window closure event.|
|ON_INFO_WINDOW_LONG_CLICK|"onInfoWindowLongClick"|Listens for the long press event of an information window.|
|ON_MAP_CLICK|"onMapClick"|Listens for the map tap event.|
|ON_MAP_LONG_CLICK|"onMapLongClick"|Listens for the long press event of a map.|
|ON_MARKER_CLICK|"onMarkerClick"|Listens for the marker tap event.|
|ON_MARKER_DRAG_START|"onMarkerDragStart"|Called when a marker starts being dragged.|
|ON_MARKER_DRAG|"onMarkerDrag"|Called repeatedly when a marker is being dragged.|
|ON_MARKER_DRAG_END|"onMarkerDragEnd"|Called when marker dragging is complete.|
|ON_MY_LOCATION_BUTTON_CLICK|"onMyLocationButtonClick"|Listens for the my-location icon tap event.|
|ON_MY_LOCATION_CLICK|"onMyLocationClick"|Listens for my-location dot tap event.|
|ON_POI_CLICK|"onPoiClick"|Listens for the POI tap event.|
|ON_POLYGON_CLICK|"onPolygonClick"|Listens for the polygon tap event.|
|ON_POLYLINE_CLICK|"onPolylineClick"|Listens for the polyline tap event.|
|ON_CANCELABLE_CALLBACK_FINISH|"onCancelableCallbackFinish"|Provides callbacks executed when a task is finished or closed.|
|ON_CANCELABLE_CALLBACK_CANCEL|"onCancelableCallbackCancel"|Provides callbacks executed when a task is finished or closed.|
|ON_SNAPSHOT_READY_CALLBACK|"onSnapshotReadyCallback"|Executes a callback when a snapshot is generated.|

### Enum InterpolatorType
Interpolator values for marker animations.

|Field|Value|Description|
|---|---|---|
|LINEAR|0|An interpolator where the rate of change is constant.|
|ACCELERATE_DECELERATE|1|An interpolator where the rate of change starts and ends slowly but accelerates through the middle.|
|ACCELERATE|2|An interpolator where the rate of change starts out slowly and and then accelerates.|
|ANTICIPATE|3|An interpolator where the change starts backward then flings forward.|
|ANTICIPATE_OVERSHOOT|4|An interpolator where the change starts backward then flings forward and overshoots the target value and finally goes back to the final value.|
|BOUNCE|5|An interpolator where the change bounces at the end.|
|CYCLE|6|Repeats the animation for a specified number of cycles.|
|DECELERATE|7|An interpolator where the rate of change starts out quickly and and then decelerates.|
|OVERSHOOT|8|An interpolator where the change flings forward and overshoots the last value then comes back.|
|PATH|9|An interpolator that can traverse a Path that extends from Point (0, 0) to (1, 1).|

### Enum MapType
Map types.

|Field|Value|Description|
|---|---|---|
|MAP_TYPE_NONE|0|Empty map.|
|MAP_TYPE_SATELLITE|2|Satellite map without markers. (Currently not supported for the Map SDK)|
|MAP_TYPE_NORMAL|1|Basic map.|
|MAP_TYPE_HYBRID|4|Satellite map with a transparent layer of main streets. (Currently not supported for the Map SDK)|
|MAP_TYPE_TERRAIN|3|Terrain map. (Currently not supported for the Map SDK)|

### Enum Hue
Hue values of a bitmap image.

|Field|Value|Description|
|---|---|---|
|HUE_GREEN|120|GREEN.|
|HUE_AZURE|210|AZURE.|
|HUE_ROSE|330|ROSE.|
|HUE_CYAN|180|CYAN.|
|HUE_ORANGE|30|ORANGE.|
|HUE_MAGENTA|300|MAGENTA.|
|HUE_VIOLET|270|VIOLET.|
|HUE_YELLOW|60|YELLOW.|
|HUE_BLUE|240|BLUE.|
|HUE_RED|0|RED.|

### Enum PatternItemType
Pattern item types.

|Field|Value|Description|
|---|---|---|
|TYPE_GAP|2|Gap.|
|TYPE_DOT|1|Dot.|
|TYPE_DASH|0|Dash.|

### Enum CameraMoveStartedReason
Constants indicating camera movement reasons.

|Field|Value|Description|
|---|---|---|
|REASON_API_ANIMATION|2|Non-gesture animation started in response to a user operation.|
|REASON_DEVELOPER_ANIMATION|3|Animation that you started.|
|REASON_GESTURE|1|Animation started in response to user gestures on a map.|

### Enum TileType
TileProvider type values.

|Field|Value|Description|
|---|---|---|
|URL_TILE|0|URL Tile.|
|REPETITIVE_TILE|1|Repetitive Tile.|
|LOCAL_TILE|2|Local Tile.|

---

## 4. Configuration and Description

### Preparing for Release

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova Map Plugin's ProGuard rules need to be added to your project. These rules are as follows:

```
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

You can find the sample projects on [HMS Core > Examples > MAP Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei MAP Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
