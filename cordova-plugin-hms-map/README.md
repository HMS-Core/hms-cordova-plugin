# cordova-plugin-hms-map

## Contents

1. Introduction
2. Installation Guide
3. API Method Definition
4. Configure Description
5. Licensing and Terms

## 1. Introduction

This Cordova SDK code encapsulates the Huawei Maps Kit interface. It provides many APIs for your reference or use.

The package is described as follows:

- **src/main/com/huawei/hms/cordova/map**: core layer that exposes MapsKit SDK functionality to JS side.
- **www/**: Public interfaces for interacting MapsKit SDK through Cordova.

## 2. Installation Guide

## Cordova

1. Download the Cordova Map Plugin.

2. Add platform to project.


    ***`cordova platform add android`***


3. You can either install the plugin through npm or by downloading from downloads page, [Cordova Map Plugin](). <br>

    a. Run the following command in the root directory of your Cordova project to install it through npm. <br> 
        
    ***`cordova plugin add @hmscore/cordova-plugin-hms-map`*** <br>
        
    b. Run the following command in the root directory of your Cordova project to install it manually after downloading the plugin.<br>

    ***`cordova plugin add <CORDOVA_MAP_PLUGIN_PATH>`***


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
9. Then run the Cordova app.

    ***`cordova run android`***

## Ionic

1. Download the Cordova Map Plugin through npm or by downloading from downloads page, [Cordova Map Plugin](). 

   a. Run the following command in the root directory of your Ionic project to install it through npm. <br>

    ***`npm install @hmscore/cordova-plugin-hms-map`*** <br>

   b. Run the following command in the root directory of your Ionic project to install it manually after downloading the plugin.

    ***`npm install <CORDOVA_MAP_PLUGIN_PATH>`***

2. Check whether the Cordova Map SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project. <br>

    ***`npm install @ionic-native/core --save`***

4. Copy the "ionic/dist/hms-map" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [appId]`*** 
    
    > ***NOTE*** <br>
    > where appName is the name of your app, and appId is package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and Map service dependencies.

8. Add agconnect-services.json and jks file to the app directory in your Android project.

9. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

10. Then run the Ionic app.
        
    ***`ionic capacitor run android`***


***
## 3. Cordova/Ionic SDK API method definitions

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


### Constants

#### Enum PatternItemType

Pattern Item types.

|Field|Value|Description|
|---|---|---|
|TYPE_GAP|2| Gap.|
|TYPE_DOT|1| Dotted.|
|TYPE_DASH|0| Dashed.|

#### Enum JointType

Defines the joint type for a polyline or the outline of a polygon.

|Field|Value|Description|
|---|---|---|
|ROUND|2|Round. |
|BEVEL|1| Flat bevel.|
|DEFAULT|0| Default type.|

#### Enum CapType

 A Cap that is applied at the start or end vertex of a polyline.

|Field|Value|Description|
|---|---|---|
|TYPE_BUTT_CAP|0| Butt cap.|
|TYPE_SQUARE_CAP|1| Square cap.|
|TYPE_ROUND_CAP|2| Round cap.|
|TYPE_CUSTOM_CAP|3| Custom cap.|

#### Enum CameraMoveReason

Camera move reason constants.

|Field|Value|Description|
|---|---|---|
|REASON_DEVELOPER_ANIMATION|3|Animation that you started. |
|REASON_API_ANIMATION|2| Non-gesture animation started in response to a user operation.|
|REASON_GESTURE|1|Animation started in response to user gestures on a map. |

#### Enum Color

Integer color values.

|Field|Value|Description|
|---|---|---|
|RED|-65536| Red.|
|DKGRAY|-12303292| Dkgray.|
|GRAY|-7829368| Gray.|
|WHITE|-1| White.|
|BLUE|-16776961| Blue.|
|BLACK|-16777216| Black.|
|LTGRAY|-3355444| Ltgray.|
|MAGENTA|-65281| Magenta.|
|YELLOW|-256| Yellow.|
|CYAN|-16711681| Cyan.|
|GREEN|-16711936| Green.|
|TRANSPARENT|0| Transparent.|

#### Enum MapType

Map types.

|Field|Value|Description|
|---|---|---|
|MAP_TYPE_NONE|0| Empty grid map.|
|MAP_TYPE_SATELLITE|2| Satellite map without markers. (Currently not supported for the Map SDK)|
|MAP_TYPE_NORMAL|1| Basic map.|
|MAP_TYPE_HYBRID|4|Satellite map with a transparent layer of main streets. (Currently not supported for the Map SDK) |
|MAP_TYPE_TERRAIN|3|Terrain map. (Currently not supported for the Map SDK) |

#### Enum MarkerEvent

Marker events.

|Field|Value|Description|
|---|---|---|
|MARKER_DRAG|2| Marker drag event.|
|MARKER_DRAG_END|3| Marker drag event starting.|
|MARKER_DRAG_START|1| Marker drag event ending.|

#### Enum Hue

Creates the definition of a bitmap image.

|Field|Value|Description|
|---|---|---|
|HUE_GREEN|120| Green.|
|HUE_AZURE|210| Azure.|
|HUE_ROSE|330| Rose.|
|HUE_CYAN|180| Cyan.|
|HUE_ORANGE|30| Orange.|
|HUE_MAGENTA|300| Magenta.|
|HUE_VIOLET|270| Violet.|
|HUE_YELLOW|60| Yellow.|
|HUE_BLUE|240| Blue.|
|HUE_RED|0| Red.|

#### Enum CameraUpdateMethod

Camera update method names.

|Field|Value|Description|
|---|---|---|
|CAMERA_POSITION|"newCameraPosition"| Set camera position method name.|
|LATLNG|"newLatLng"| Set new latlng method name.|
|LATLNG_BOUNDS|"newLatLngBounds"| Set new latlngbound method name.|
|LATLNG_ZOOM|"newLatLngZoom"| Set new latlngzoom method name.|
|SCROLL_BY|"scrollBy"| Set scroll by method name.|
|ZOOM_BY|"zoomBy"| Set zoom by method name.|
|ZOOM_IN|"zoomIn"|Set zoom in method name.|
|ZOOM_OUT|"zoomOut"|Set zoom out method name.|
|ZOOM_TO| "zoomTo" |Set zoom to method name.|

#### Enum MapEvent

Huawei map events.

|Field|Value|Description|
|---|---|---|
|CIRCLE_CLICK|"circleClick"| Listens for the circle tap event.|
|MAP_CLICK|"mapClick"| Listens for the map tap event.|
|MAP_LONG_CLICK|"mapLongClick"|Listens for the long press event of a map. |
|INFO_WINDOW_CLICK|"infoWindowClick"| Listens for the information window tap event.|
|CAMERA_MOVE_STARTED|"cameraMoveStarted"|Listens for the beginning of camera movement. |
|POLYGON_CLICK|"polygonClick"|Listens for the polygon tap event. |
|POLYLINE_CLICK|"polylineClick"| Listens for the polyline tap event.|
|GROUND_OVERLAY_CLICK|"groundOverlayClick"|Listens for the groundoverlay tap event.|
|CAMERA_MOVE|"cameraMove"|Listens for camera movement. |
|CAMERA_IDLE|"cameraIdle"| Listens for the end of camera movement.|
|MAP_LOADED|"mapLoaded"|Provides callbacks executed when the map loading is completed. |
|MARKER_CLICK|"markerClick"| Listens for the marker tap event.|
|MY_LOCATION_BUTTON_CLICK|"myLocationButtonClick"|Listens for the my-location icon tap event. |
|MY_LOCATION_CLICK|"myLocationClick"| Listens for my-location dot tap event.|
|MARKER_DRAG|"markerDrag"|Listens for the marker drag event. |

***

## Data Types

#### LatLng

Defines the longitude and latitude, in degrees.


|Field|Type|Description|
|---|---|---|
|lat|`float`| Latitude. The value ranges from –90 to 90.|
|lng|`float`| Longitude. The value ranges from –180 to 180 (excluded).|

#### PatternItem

Describes the stroke pattern of a polyline or the outline of a polygon or circle.

|Field|Type|Description|
|---|---|---|
|type?|`PatternItemType`| Item pattern type.|
|length?|`float`| Length of the item.|

#### Anchor

Anchor type.

|Field|Type|Description|
|---|---|---|
|u|`float`| Horizontal coordinate of the anchor point of an information window.|
|v|`float`| Vertical coordinate of the anchor point of an information window.|

#### Bitmap

Defines a bitmap image. A bitmap image can be used as a marker icon or for a ground overlay.

|Field|Type|Description|
|---|---|---|
|hue?|`Hue`| Hue value.|
|asset?|`string`|Path of the image in the asset directory, which includes the image name. |
|fileName?|`string`|Local image file name. |
|path?|`string`| Absolute path to the image.|

#### LatLngBounds

Defines a rectangular area using a pair of longitude and latitude.

|Field|Type|Description|
|---|---|---|
|southwest|`LatLng`| Southwest corner of the bound.|
|northeast|`LatLng`|Northeast corner of the bound. |
|center?|`LatLng`| Longitude and latitude of the center of a LatLngBounds object.|

#### GroundOverlayPosition

Position of a ground overlay. 

|Field|Type|Description|
|---|---|---|
|width?|float|Width px.|
|height?|float|Height px.|
|latLng?|`LatLng`|Position of a ground overlay. By default, the anchor point is half to the top and left of the image. |
|latLngBounds?|`LatLngBounds`|Bounds of a ground overlay. |

#### CameraPosition

Camera attributes.

|Field|Type|Description|
|---|---|---|
|target?|`LatLng`|Longitude and latitude. |
|zoom?|`integer`| Zoom level.|
|bearing?|`double`|Number of degrees of the desired direction in which the camera points. |
|tilt?|`number`|Tilt angle, in degrees. |

#### Cap

Defines a cap that is applied at the start or end vertex of a polyline.

|Field|Type|Description|
|---|---|---|
|type?|`CapType`|Choose cap type.|
|refWidth?|`float`|If cap type is custom set this parameter ref width. |
|bitmapDescriptor?|`Bitmap`|If cap type is custom set this parameter. Bitmap Descriptor.|

#### CircleOptions

Defines attributes for a Circle object.

|Field|Type|Description|
|---|---|---|
|center?|`LatLng`|Center of a circle, which cannot be null. |
|clickable?|`boolean`|Indicates whether a circle is tappable. true: yes; false: no. |
|fillColor?|`Color`| Fill color of a circle, in ARGB format.|
|radius?|`double`| Radius of a circle, in meters. By default, the radius is 0.|
|strokeWidth?|`float`| Stroke width, in pixels. The value must be greater than or equal to 0. The default value is 10.|
|strokePattern?|`PatternItem`| Stroke pattern of a circle's outline. The default value is null, indicating that the stroke is in the solid pattern.|
|strokeColor?|`Color`|Stroke color of a circle's outline. |
|visible?|`boolean`| Indicates whether a circle is visible. true: yes; false: no. The default value is true.|
|zIndex?|`float`|Z-index, which indicates the overlapping order of a circle. By default, the z-index is 0. |


#### GroundOverlayOptions

Defines attributes for a GroundOverlay object.

|Field|Type|Description|
|---|---|---|
|anchor?|`Anchor`| Sets the alignment (that is, anchor point) of a ground overlay.|
|bearing?|`double`|Bearing of a ground overlay, in degrees clockwise from north. The value ranges from 0 to 360 (excluded). The default value is 0. |
|clickable?|`boolean`|Indicates whether a ground overlay is tappable. By default, a ground overlay is not tappable. |
|image?|`Bitmap`| GroundOverlayOptions object with the new image.|
|visible?|`boolean`|Indicates whether a ground overlay is visible. By default, a ground overlay is visible. |
|transparency?|`float`| Transparency of the ground overlay. The default value is 0.|
|zIndex?|`float`| Z-index, which indicates the overlapping order of a ground overlay. By default, the z-index is 0.|
|position?|`GroundOverlayPosition`|Position of an anchor point. By default, the anchor point is half to the top and left of the image. |

#### MarkerOptions

Defines attributes for a marker.

|Field|Type|Description|
|---|---|---|
|anchorMarker?|`Anchor`| Sets the anchor point of a marker. Since of the values of U and V are fixed, this method always sets the anchor point to the middle of the marker icon.|
|infoWindowAnchor?|`Anchor`|Sets the anchor point of a marker's information window. |
|alpha?|`float`|Transparency of a marker. The value ranges from 0 (completely transparent) to 1 (completely opaque). The default value is 1. |
|clusterable?|`boolean`| Indicates whether a marker can be clustered. true: yes; false: no. The default value is false.|
|draggable?|`boolean`| Indicates whether a marker can be dragged. true: yes; false: no. The default value is false.|
|icon?|`Bitmap`| Object containing a new icon.|
|flat?|`boolean`|Indicates whether to flatly attach a marker to the map. true: flatly attaching to the map; false: facing the camera. The default value is false. |
|position?|`LatLng`|Position coordinates of a marker. |
|rotation?|`float`| Rotation angle of a marker. The default value is 0.|
|snippet?|`string`|Text. |
|title?|`string`| Title.|
|visible?|`boolean`|Indicates whether a marker is visible. true: yes; false: no. The default value is true. |
|zIndex?|`float`|Z-index, which indicates the overlapping order of a marker. By default, the z-index is 0. |

#### PolygonOptions

Defines attributes for a polygon.

|Field|Type|Description|
|---|---|---|
|points?|`LatLng[]`| Coordinates of multiple vertices.|
|holes?|`LatLng[][]`|Multiple holes. |
|clickable?|`boolean`|Indicates whether a polygon is tappable. By default, a polygon is not tappable. |
|geodesic?|`boolean`| Indicates whether to draw each segment of a polygon as a geodesic. true: yes; false: no.|
|fillColor?|`Color`|Polygon color. |
|strokeColor?|`Color`| Border color of polygon.|
|strokeJointType?|`JointType`| Joint type. The default value is DEFAULT.|
|strokePattern?|`PatternItem`| Pattern item.|
|strokeWidth?|`float`|Stroke width of a polygon's outline, in pixels. The default value is 10. |
|visible?|`boolean`| Indicates whether a polygon is visible. By default, a polygon is visible.|
|zIndex?|`float`|Z-index, which indicates the overlapping order of a polygon. By default, the z-index is 0. |

#### PolylineOptions

Defines attributes for a polyline.

|Field|Type|Description|
|---|---|---|
|points?|`LatLng[]`|Coordinates of multiple vertices. |
|clickable?|`boolean`|Indicates whether a polyline is tappable. By default, a polyline is not tappable. |
|color?|`Color`| Polyline color.|
|endCap?|`Cap`|End point. The default value is ButtCap. |
|startCap?|`Cap`| Start point. The default value is ButtCap.|
|geodesic?|`boolean`|Indicates whether to draw each segment of a polyline as a geodesic. true: yes; false: no. |
|jointType?|`JointType`| Joint type. The default value is DEFAULT.|
|visible?|`boolean`|Indicates whether a polyline is visible. By default, a polyline is visible. |
|zIndex?|`float`|Z-index, which indicates the overlapping order of a polyline. By default, the z-index is 0. |
|width?|`float`| Width.|

#### ComputeDistance

Calculates the distance between two coordinate points.

|Field|Type|Description|
|---|---|---|
|from?|`LatLng`| Start coordinate point.|
|to?|`LatLng`| End coordinate point.|

### CameraUpdate

Defines camera movement parameters.

|Field|Type|Description|
|---|---|---|
|method|`CameraUpdateMethod`| Pick the method you want to call.|
|[other:string]|`[other:string]`| Parameters according to chosen function.|

- - #### CAMERA_POSITION Method Parameters

    |Field|Type|
    |---|---|
    |method|CameraUpdateMethod.CAMERA_POSITION|
    |target?|`LatLng`|
    |zoom|`float`|
    |bearing|`float`|
    |tilt|`float`|
- - #### LATLNG Method Parameters

    |Field|Type|
    |---|---|
    |method| CameraUpdateMethod.LATLNG|
    |lat?|`float`|
    |lng?|`float`|
    |tilt?|`float`|

- - #### LATLNG_BOUNDS Method Parameters

    You should use this method with southwest and northeast parameters or width and height parameters.

    |Field|Type|
    |---|---|
    |method| CameraUpdateMethod.LATLNG_BOUNDS|
    |southwest?|`float`|
    |northeast?|`float`|
    |width?|`float`|
    |height?|`float`|

- - #### LATLNG_ZOOM Method Parameters

    |Field|Type
    |---|---|
    |method|CameraUpdateMethod.LATLNG_ZOOM|
    |lat|`float`|
    |lng|`float`|
    |zoom|`float`|

- - #### SCROLL_BY Method Parameters

    |Field|Type
    |---|---|
    |method|CameraUpdateMethod.SCROLL_BY|
    |xPixel|`float`|
    |yPixel|`float`|

- - #### ZOOM_BY Method Parameters

    You should use use CameraUpdateMethod.ZOOM_BY with focus and amount parameters together or zoomTo parameter only.

    |Field|Type
    |---|---|
    |method|CameraUpdateMethod.ZOOM_BY|
    |focus?|`float`|
    |amount?|`float`|
    |zoomTo?|`float`|

- - #### ZOOM_IN Method Parameters

    |Field|Type
    |---|---|
    |method|CameraUpdateMethod.ZOOM_IN|

- - #### ZOOM_OUT Method Parameters
    |Field|Type
    |---|---|
    |method|CameraUpdateMethod.ZOOM_OUT|

- - #### ZOOM_TO Method Parameters
    |Field|Type
    |---|---|
    |method|CameraUpdateMethod.ZOOM_TO|


#### HuaweiMapOptions

|Field|Type|Description|
|---|---|---|
|mapType?|`MapType`|Map type. The default value is HuaweiMap.MAP_TYPE_NORMAL. |
|zoomControlsEnabled?|`boolean`| Indicates whether to enable the zoom function. true (default): yes; false: no.|
|compassEnabled?|`boolean`|Indicates whether to enable the compass. true (default): yes; false: no.|
|zoomGesturesEnabled?|`boolean`| Indicates whether to enable zoom gestures. true (default): yes; false: no.|
|scrollGesturesEnabled?|`boolean`|Indicates whether to enable scroll gestures. true (default): yes; false: no. |
|rotateGesturesEnabled?|`boolean`| Indicates whether to enable rotate gestures. true (default): yes; false: no.|
|tiltGesturesEnabled?|`boolean`|Indicates whether to enable tilt gestures. true (default): yes; false: no. |
|zOrderOnTop?|`boolean`| Indicates whether to place the surface of a map view on top of its window. true: yes; false: no.|
|liteMode?|`boolean`|Specifies whether to create a map in lite mode. |
|ambientEnabled?|`boolean`|true if the ambient mode is enabled; false otherwise. |
|minZoomPreference?|`number`| Preferred minimum zoom level.|
|maxZoomPreference?|`number`|Preferred maximum zoom level. |
|cameraPosition?|`CameraPosition`|Camera configuration.|
|latLngBounds?|`LatLngBounds`|Bounds for constraining the camera target. |

#### LocationPermissionResult

Checks the location permission.

|Field|Type|Description|
|---|---|---|
|hasLocationPermission|`boolean`|Location permission result. If given true otherwise false. |

#### ComputeDistanceResult

Compute distance result.

|Field|Type|Description|
|---|---|---|
|result|`double`| Double type result.  |

***

### HuaweiMap

#### Public Method Summary

|Field|Return Type|Description|
|---|---|---|
|set(propName:  string,  value:  any)|`Promise<void>`|Set value to specified PROPNAME. |
|set(propName: object)|`Promise<void>`|Set multiple properties at the same time. |
|get(propName?:  string)|`Promise<any>`|Get corresponding value of given property.|
|get()|`Promise<any>`|Get all the properties of the HuaweiMap.|
|on(eventName:  MapEvent,  handler:  (data: any,  data2?:  any) => void)|`Promise<void>`|Subscribe the given HuaweiMap event. |
|scroll()|`Promise<void>`| Map component scroll event for Ionic. Put this scroll function inside scroll event.|
|clear()|`Promise<void>`|Removes all circles, markers, polylines, and ground overlays from a map.|
|destroy()|`Promise<void>`|When you call this method you will destroy the map if it exists. Whenever you want to use map again you have to call init method.|
|hide()|`Promise<void>`|When you use this method, map will disappear and until you call show() method you can't see the map.|
|show()|`Promise<void>`|This method reveals hided map.|
|resetMinMaxZoomPreference()|`Promise<void>`|Deletes all maximum and minimum zoom levels set previously. |
|moveCamera(opts:  CameraUpdate)|`Promise<void>`| Updates the camera position. The movement is instantaneous.|
|animateCamera(opts:  CameraUpdate)|`Promise<void>`|Updates the camera position in animation mode.  |
|addPolyline(opts:  PolylineOptions)|`Promise<Polyline>`| Add polyline to map.|
|addPolygon(opts:  PolygonOptions)|`Promise<Polygon>`| Add polygon to map. |
|addMarker(opts:  MarkerOptions)|`Promise<Marker>`| Add marker to map.|
|addGroundOverlay(opts:  GroundOverlayOptions)|`Promise<GroundOverlay>`| Add ground overlay to map. |
|addCircle(opts:  CircleOptions)|`Promise<Circle>`| Add circle to map. |


### Marker

#### Public Functions

| Name                                 | Return Type            | Description                               |
|--------------------------------------|------------------------|-------------------------------------------|
| set(propName: String, value: Object) | `Promise<void>`              | Set given PROPNAME to VALUE.              |
| set(propValueMap: Object)            | `Promise<void>`              | Set multiple properties at the same time. |
| remove()                             | `Promise<void>`              | Remove the object from the map view.      |
| showInfoWindow()                     | `Promise<void>`              | Display the info window of the marker.    |
| hideInfoWindow()                     | `Promise<void>`              | Hide the info window of the marker.       |
| update()                             | `Promise<MarkerOptions>` | Get the updated properties of the marker. |

### Circle

#### Public Functions

| Name                                 | Return Type            | Description                               |
|--------------------------------------|------------------------|-------------------------------------------|
| set(propName: String, value: Object) | `Promise<void>`              | Set given PROPNAME to VALUE.              |
| set(propValueMap: Object)            | `Promise<void>`              | Set multiple properties at the same time. |
| remove()                             | `Promise<void>`              | Remove the object from the map view.      |
| update()                             | `Promise<CircleOptions>` | Get the updated properties of the circle. |

### GroundOverlay

#### Public Functions

| Name                                 | Return Type                   | Description                                       |
|--------------------------------------|-------------------------------|---------------------------------------------------|
| set(propName: String, value: Object) | `Promise<void>`                     | Set given PROPNAME to VALUE.                      |
| set(propValueMap: Object)            | `Promise<void>`                     | Set multiple properties at the same time.         |
| remove()                             | `Promise<void>`                     | Remove the object from the map view.              |
| update()                             | `Promise<GroundOverlayOptions>` | Get the updated properties of the ground overlay. |

### Polygon

#### Public Functions

| Name                                 | Return Type             | Description                                |
|--------------------------------------|-------------------------|--------------------------------------------|
| set(propName: String, value: Object) | `Promise<void>`               | Set given PROPNAME to VALUE.               |
| set(propValueMap: Object)            | `Promise<void>`               | Set multiple properties at the same time.  |
| remove()                             | `Promise<void>`               | Remove the object from the map view.       |
| update()                             | `Promise<PolygonOptions>` | Get the updated properties of the polygon. |

### Polyline

#### Public Functions

| Name                                 | Return Type             | Description                                 |
|--------------------------------------|-------------------------|---------------------------------------------|
| set(propName: String, value: Object) | `Promise<void>`               | Set given PROPNAME to VALUE.                |
| set(propValueMap: Object)            | `Promise<void>`               | Set multiple properties at the same time.   |
| remove()                             | `Promise<void>`               | Remove the object from the map view.        |
| update()                             | `Promise<PolygonOptions>` | Get the updated properties of the polyline. |



### HMSMap

#### Public Method Summary

|Parameters|Return Type|Description|
|---|---|---|
|init()|`Promise<void>`|Initializes map kit functionality.|
|setApiKey(apiKey:string)|`Promise<void>`|Sets the API key of the Map SDK.|
|create(divId:string, huaweiMapOptions:HuaweiMapOptions)|`Promise<HuaweiMap>`|Creates a HuaweiMap object with given properties.|
|computeDistanceBetween(arg:ComputeDistance)|`Promise<ComputeDistanceResult>`|Computes distance between FROM to TO.|
|hasLocationPermission()|`Promise<LocationPermissionResult>`|Checks the location permission and returns the result.|
|requestLocationPermission()|`Promise<void>`|Request for location permission.|
|loadMap(jsonMap: string)|`Promise<HuaweiMap>`|This method will convert your json huaweiMap string to huawei map object. And it is developed to help cordova developers to store huaweiMap in localStorage.|


## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
