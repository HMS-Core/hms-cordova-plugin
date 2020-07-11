# cordova-plugin-hms-map

## Contents

1. Introduction
2. Installation Guide
3. Cordova Example API Method Definition
4. Configure Description
5. Licensing and Terms

## 1. Introduction

This Cordova SDK code encapsulates the Huawei Maps Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

- **src/main/com/huawei/hms/cordova/map**: core layer that exposes MapsKit SDK functionality to JS side.
- **www/**: Public interfaces for interacting MapsKit SDK through Cordova.

## 2. Installation Guide

1. Download the Cordova Map Plugin.

2. Add platform to project.

```sh
cordova platform add android
```

3. Run the following command in the root directory of the Cordova project:

```sh
cordova plugin add PATH_TO_CORDOVA_ADS_PLUGIN
```

4. Check whether the Cordova Map Plugin is successfully added to plugins folder in the root directory of your Cordova project.

5. Add agconnect-services.json and jks file to root directory. You can see how to create jks file in this [link](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/iap-configuring-appGallery-connect).

6. Add build.json file to your project's root.

7. Enable Maps API on AppGallery Connect.

8. Add keystore file and build.json file to your project's root.

```json
{
    "android": {
        "debug": {
            "keystore": "<keystore>",
            "storePassword": "<password>",
            "alias": "<alias>",
            "password" : "<password>",
        },
        "release": {
            "keystore": "<keystore>",
            "storePassword": "<password>",
            "alias": "<alias>",
            "password" : "<password>",
        }
    }
}
```

## 3. Cordova SDK API method definitions

### Overview

| Module        | Description                            |
|---------------|----------------------------------------|
| HMSMap        | The entrance module.                   |
| HuaweiMap     | A map view object.                     |
| Marker        | A marker object on a map view.         |
| Circle        | A circle object on a map view.         |
| GroundOverlay | A ground overlay object on a map view. |
| Polygon       | A polygon object on a map view.        |
| Polyline      | A polyline object on a map view.       |
| LatLngBounds  | A latitude longitude bounds object.    |

### Constants

| Constant Name                                         |
|-------------------------------------------------------|
| `HMSMap.PatternItemTypes.TYPE_GAP`                    |
| `HMSMap.PatternItemTypes.TYPE_DOT`                    |
| `HMSMap.PatternItemTypes.TYPE_DASH`                   |
| `HMSMap.JointTypes.ROUND`                             |
| `HMSMap.JointTypes.BEVEL`                             |
| `HMSMap.JointTypes.DEFAULT`                           |
| `HMSMap.CapTypes.TYPE_BUTT_CAP`                       |
| `HMSMap.CapTypes.TYPE_SQUARE_CAP`                     |
| `HMSMap.CapTypes.TYPE_ROUND_CAP`                      |
| `HMSMap.CapTypes.TYPE_CUSTOM_CAP`                     |
| `HMSMap.CameraMoveReasons.REASON_DEVELOPER_ANIMATION` |
| `HMSMap.CameraMoveReasons.REASON_API_ANIMATION`       |
| `HMSMap.CameraMoveReasons.REASON_GESTURE`             |
| `HMSMap.Color.RED`                                    |
| `HMSMap.Color.DKGRAY`                                 |
| `HMSMap.Color.GRAY`                                   |
| `HMSMap.Color.WHITE`                                  |
| `HMSMap.Color.BLUE`                                   |
| `HMSMap.Color.BLACK`                                  |
| `HMSMap.Color.LTGRAY`                                 |
| `HMSMap.Color.MAGENTA`                                |
| `HMSMap.Color.YELLOW`                                 |
| `HMSMap.Color.CYAN`                                   |
| `HMSMap.Color.GREEN`                                  |
| `HMSMap.Color.TRANSPARENT`                            |
| `HMSMap.HUE_GREEN`                                    |
| `HMSMap.HUE_AZURE`                                    |
| `HMSMap.HUE_ROSE`                                     |
| `HMSMap.HUE_CYAN`                                     |
| `HMSMap.HUE_ORANGE`                                   |
| `HMSMap.HUE_MAGENTA`                                  |
| `HMSMap.HUE_VIOLET`                                   |
| `HMSMap.HUE_YELLOW`                                   |
| `HMSMap.HUE_BLUE`                                     |
| `HMSMap.HUE_RED`                                      |
| `HMSMap.MAP_TYPE_NONE`                                |
| `HMSMap.MAP_TYPE_SATELLITE`                           |
| `HMSMap.MAP_TYPE_NORMAL`                              |
| `HMSMap.MAP_TYPE_HYBRID`                              |
| `HMSMap.MAP_TYPE_TERRAIN`                             |

### Data Types

#### HuaweiMapOptions

| Field Name            | Type           |
|-----------------------|----------------|
| mapType               | integer        |
| zoomControlsEnabled   | boolean        |
| compassEnabled        | boolean        |
| zoomGesturesEnabled   | boolean        |
| scrollGesturesEnabled | boolean        |
| rotateGesturesEnabled | boolean        |
| zOrderOnTop           | boolean        |
| liteMode              | boolean        |
| ambientEnabled        | boolean        |
| minZoomPreference     | boolean        |
| camera                | CameraPosition |
| latLngBounds          | LatLngBounds   |


#### LatLng

| Field Name | Type  | Description |
|------------|-------|-------------|
| lat        | float | Latitude    |
| lng        | float | Longitude   |

#### PatternItem

| Field Name | Type    |
|------------|---------|
| type       | integer |
| length     | float   |

#### Anchor

| Field Name | Type  |
|------------|-------|
| u          | float |
| v          | float |

#### Bitmap

##### Variation 1

| Field Name | Type  |
|------------|-------|
| hue        | float |

##### Variation 2

| Field Name | Type   |
|------------|--------|
| asset      | string |

##### Variation 3

| Field Name | Type   |
|------------|--------|
| fileName   | string |

#### LatLngBounds

| Field Name | Type  |
|------------|-------|
| southwest  | float |
| northeast  | float |

#### Position

| Field Name | Type  |
|------------|-------|
| x          | float |
| y          | float |

#### Position

##### Variation 1

| Field Name | Type   |
|------------|--------|
| width      | float  |
| height     | float  |
| latLng     | LatLng |

##### Variation 2

| Field Name | Type   |
|------------|--------|
| width      | float  |
| latLng     | LatLng |

##### Variation 3

| Field Name   | Type   |
|--------------|--------|
| latLngBounds | LatLng |

#### Cap

| Field Name        | Type   |
|-------------------|--------|
| type              | float  |
| refWidth          | float  |
| bitmapDescriptior | Bitmap |

#### Padding

##### Variation 1

| Field Name | Type    |
|------------|---------|
| all        | integer |

##### Variation 2

| Field Name | Type    |
|------------|---------|
| horizontal | integer |
| vertical   | integer |

##### Variation 3

| Field Name | Type    |
|------------|---------|
| left       | integer |
| top        | integer |
| right      | integer |
| bottom     | integer |

#### CircleOptions

| Field Name    | Type        |
|---------------|-------------|
| center        | LatLng      |
| clickable     | boolean     |
| radius        | double      |
| strokeWidth   | float       |
| strokePAttern | PatternItem |
| visible       | boolean     |
| zIndex        | float       |

#### GroundOverlayOptions

| Field Name   | Type     |
|--------------|----------|
| anchor       | Anchor   |
| bearing      | double   |
| clickable    | boolean  |
| image        | Bitmap   |
| visible      | boolean  |
| transparency | float    |
| position     | Position |
| zIndex       | float    |

#### MarkerOptions

| Field Name       | Type    |
|------------------|---------|
| anchorMarker     | Anchor  |
| infoWindowAnchor | Anchor  |
| alpha            | float   |
| clusterable      | boolean |
| draggable        | boolean |
| icon             | Bitmap  |
| flat             | boolean |
| position         | LatLng  |
| rotation         | float   |
| snippet          | string  |
| title            | string  |
| visible          | boolean |
| zIndex           | float   |

#### PolygonOptions

| Field Name      | Type       |
|-----------------|------------|
| points          | [LatLng]   |
| holes           | [[LatLng]] |
| clickable       | boolean    |
| geodesic        | boolean    |
| strokeColor     | integer    |
| strokeJointType | integer    |
| strokeWidth     | float      |
| visible         | boolean    |
| zIndex          | float      |

#### PolylineOptions

| Field Name | Type     |
|------------|----------|
| points     | [LatLng] |
| clickable  | boolean  |
| endCap     | Cap      |
| startCap   | Cap      |
| geodesic   | boolean  |
| jointType  | integer  |
| visible    | boolean  |
| zIndex     | float    |

#### CameraPosition

| Field Name | Type  |
|------------|-------|
| zoom       | float |
| bearing    | float |
| tilt       | float |

#### CameraUpdate

| Field Name | Type   |
|------------|--------|
| method     | string |

Depending on the method, there may be other required fields.

##### newCameraPosition

| Field Name | Type   |
|------------|--------|
| method     | string |
| zoom       | float  |
| bearing    | float  |
| tilt       | float  |

##### newLatLng

| Field Name | Type   |
|------------|--------|
| method     | string |
| lat        | float  |
| lng        | float  |
| tilt       | float  |

##### newLatLngBounds

| Field Name | Type   |
|------------|--------|
| method     | string |
| southwest  | float  |
| northeast  | float  |

##### newLatLngBounds (Variation 2)

| Field Name | Type   |
|------------|--------|
| method     | string |
| southwest  | float  |
| northeast  | float  |
| width      | float  |
| height     | float  |

##### newCameraPosition

| Field Name | Type   |
|------------|--------|
| method     | string |
| zoom       | float  |
| bearing    | float  |
| tilt       | float  |

##### newLatLngZoom

| Field Name | Type   |
|------------|--------|
| method     | string |
| lat        | float  |
| lng        | float  |
| zoom       | float  |

##### scrollBy

| Field Name | Type   |
|------------|--------|
| method     | string |
| xPixel     | float  |
| yPixel     | float  |

##### zoomBy

| Field Name | Type   |
|------------|--------|
| method     | string |
| focus      | float  |
| amount     | float  |

##### zoomBy

| Field Name | Type   |
|------------|--------|
| method     | string |
| zoomTo     | float  |

### HMSMap

#### Public Functions

| Name                                               | Return Type        | Description                                |
|----------------------------------------------------|--------------------|--------------------------------------------|
| init()                                             | Promise[]          | Initializes map kit functionality.         |
| create(id: String, initialProps: HuaweiMapOptions) | Promise[HuaweiMap] | Creates a HuaweiMap with given properties. |
| computeDistanceBetween(from: LatLng, to: LatLng)   | Promise[Double]    | Computes distance between FROM to TO.      |

### HuaweiMap

#### Public Functions

| Name                                     | Return Type     | Description                                |
|------------------------------------------|-----------------|--------------------------------------------|
| set(propName: String, value: Object)     | Promise[]       | Set given PROPNAME to VALUE.               |
| set(propValueMap: Object)                | Promise[]       | Set multiple properties at the same time.  |
| get()                                    | Promise[Object] | Get all the properties of the HuaweiMap.   |
| get(propName: String)                    | Promise[Object] | Get corresponding value of given property. |
| on(eventName: String, handler: Function) | Promise[]       | Subscribe the given HuaweiMap event.       |

### Marker

#### Public Functions

| Name                                 | Return Type            | Description                               |
|--------------------------------------|------------------------|-------------------------------------------|
| set(propName: String, value: Object) | Promise[]              | Set given PROPNAME to VALUE.              |
| set(propValueMap: Object)            | Promise[]              | Set multiple properties at the same time. |
| remove()                             | Promise[]              | Remove the object from the map view.      |
| showInfoWindow()                     | Promise[]              | Display the info window of the marker.    |
| hideInfoWindow()                     | Promise[]              | Hide the info window of the marker.       |
| update()                             | Promise[MarkerOptions] | Get the updated properties of the marker. |

### Circle

#### Public Functions

| Name                                 | Return Type            | Description                               |
|--------------------------------------|------------------------|-------------------------------------------|
| set(propName: String, value: Object) | Promise[]              | Set given PROPNAME to VALUE.              |
| set(propValueMap: Object)            | Promise[]              | Set multiple properties at the same time. |
| remove()                             | Promise[]              | Remove the object from the map view.      |
| update()                             | Promise[CircleOptions] | Get the updated properties of the circle. |

### GroundOverlay

#### Public Functions

| Name                                 | Return Type                   | Description                                       |
|--------------------------------------|-------------------------------|---------------------------------------------------|
| set(propName: String, value: Object) | Promise[]                     | Set given PROPNAME to VALUE.                      |
| set(propValueMap: Object)            | Promise[]                     | Set multiple properties at the same time.         |
| remove()                             | Promise[]                     | Remove the object from the map view.              |
| update()                             | Promise[GroundOverlayOptions] | Get the updated properties of the ground overlay. |

### Polygon

#### Public Functions

| Name                                 | Return Type             | Description                                |
|--------------------------------------|-------------------------|--------------------------------------------|
| set(propName: String, value: Object) | Promise[]               | Set given PROPNAME to VALUE.               |
| set(propValueMap: Object)            | Promise[]               | Set multiple properties at the same time.  |
| remove()                             | Promise[]               | Remove the object from the map view.       |
| update()                             | Promise[PolygonOptions] | Get the updated properties of the polygon. |

### Polyline

#### Public Functions

| Name                                 | Return Type             | Description                                 |
|--------------------------------------|-------------------------|---------------------------------------------|
| set(propName: String, value: Object) | Promise[]               | Set given PROPNAME to VALUE.                |
| set(propValueMap: Object)            | Promise[]               | Set multiple properties at the same time.   |
| remove()                             | Promise[]               | Remove the object from the map view.        |
| update()                             | Promise[PolygonOptions] | Get the updated properties of the polyline. |

### IndoorLevel

#### Public Functions

| Name       | Return Type | Description |
|------------|-------------|-------------|
| activate() | Promise[]   | Activates.  |

### LatLngBounds

#### Public Functions

| Name                      | Return Type     | Description                                                   |
|---------------------------|-----------------|---------------------------------------------------------------|
| including(latLng: LatLng) | Promise[Result] | Whether LatLngBounds object includes the given LatLng or not. |
| contains(latLng: LatLng)  | Promise[Result] | Whether LatLngBounds object contains the given LatLng or not. |

## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
