# Cordova Plugin HMS AR

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation Guide](#2-installation-guide)
- [2.1. Cordova](#21-cordova)
- [2.2. Ionic](#22-ionic)
    - [2.2.1. With Cordova Runtime](#221-with-cordova-runtime)
    - [2.2.2. With Capacitor Runtime](#222-with-capacitor-runtime)
- [3. API Reference](#3-api-reference)
- [4. Configuration and Description](#4-configuration-and-description)
- [5. Sample Project](#5-sample-project)
- [6. Questions or Issues](#6-questions-or-issues)
- [7. Licensing and Terms](#7-licensing-and-terms)

---

## 1. Introduction

This plugin enables communication between Huawei AR SDK and Cordova platform. It exposes all functionality provided by Huawei AR SDK.

---

## 2. Installation Guide

### 2.1. Cordova

1. Install Cordova CLI.

    ```bash 
    npm install -g cordova
    ```

2. Create a new Cordova project or use existing Cordova project.

    - To create new Cordova project, you can use **`cordova create path [id [name [config]]] [options]`** command. For more details please follow [CLI Reference - Apache Cordova](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html#cordova-create-command).

3. Add the **Android platform** to the project if haven't done before.

    ```bash
    cordova platform add android
    ```

4. Install `HMS AR plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    cordova plugin add @hmscore/cordova-plugin-hms-ar
    ```

    b. Or download the plugin from [Plugin > Augmented Reality > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    cordova plugin add <hms_cordova_ar_plugin_path>
    ```

5. Run the application.

    ```bash
    cordova run android --device
    ```

### 2.2. Ionic

1. Install Ionic CLI.

    ```bash
    npm install -g @ionic/cli
    ```

2. Create a new Ionic project or use existing Ionic project.

    - To create a new Ionic project, you can use **`ionic start <name> <template> [options]`** command. For more details please follow [ionic start - Ionic Documentation](https://ionicframework.com/docs/cli/commands/start).

#### 2.2.1. With Cordova Runtime

1. Enable the **Cordova integration** if haven't done before.

    ```bash
    ionic integrations enable cordova
    ```

2. Add the **Android platform** to the project if haven't done before.

    ```bash
    ionic cordova platform add android
    ```

3. Install `HMS AR plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

    a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    ionic cordova plugin add @hmscore/cordova-plugin-hms-ar
    ```

    b. Or download the plugin from [Plugin > AR Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    ionic cordova plugin add <hms_cordova_ar_plugin_path>
    ```

4. Copy **hms-ar** folder from **`node_modules/@hmscore/cordova-plugin-hms-ar/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

5. Run the application.

   ```bash
   ionic cordova run android --device
   ```

#### 2.2.2. With Capacitor Runtime

1. Enable the **Capacitor integration** if haven't done before.

   ```bash
   ionic integrations enable capacitor
   ```

2. Install `HMS AR plugin` to the project. You can either install the plugin through `npm` or by `downloading from HMS Core Plugin page`.

   a. Run the following command in the root directory of your project to install it through **npm**.

    ```bash
    npm install @hmscore/cordova-plugin-hms-ar
    ```

   b. Or download the plugin from [Plugin > Augmented Reality Kit > Cordova Plugin](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page and run the following command in the root directory of your project to **install it manually**.

    ```bash
    npm install <hms_cordova_ar_plugin_path>
    ```

3. Copy **hms-ar** folder from **`node_modules/@hmscore/cordova-plugin-hms-ar/ionic/dist`** directory to **`node_modules/@ionic-native`** directory.

4. Build Ionic app to generate resource files.

    ```bash
    ionic build
    ```

5. Add the **Android platform** to the project if haven't done before.

    ```bash
    npx cap add android
    ```

6. Open the **`build.gradle`** file in the **`<project_root>/android`** directory. Add **Huawei's maven repositories** and **agconnect classpath** to the file.

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

7. Open the project in Android Studio and run it.

    ```bash
    npx cap open android
    ```

---

## 3. API Reference

### Overview
The Cordova AR Plugin enables communication between the HUAWEI AR Engine SDK and the Cordova platform. This plugin exposes all functionalities provided by the HUAWEI AR Engine SDK. Detailed information about classes, data types, methods and constants provided by this plugin can be found in HMSAR, ARScene, ARHandScene, ARWorldScene, ARFaceScene, ARBodyScene, Data Types and Constants.

|Entry Class|Description|
|---|---|
|HMSAR|Contains methods for setting up the AR Engine.|
|ARScene|Base class for ar scenes.|
|ARHandScene|This class is derived from ARScene. Use this class to have ar hand functionality.|
|ARFaceScene|This class is derived from ARScene. Use this class to have ar face functionality.|
|ARWorldScene|This class is derived from ARScene. Use this class to have ar world functionality.|
|ARBodyScene|This class is derived from ARScene. Use this class to have ar body functionality.|
|Data Types|Data types for interaction with Huawei AR Engine Cordova Plugin APIs.|
|Constants|Constant values for the HUAWEI AR Engine SDK.|

### HMSAR
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|requestCameraPermission()|`Promise<void>`|Requests for camera permission.|
|hasCameraPermission()|`Promise<boolean>`|Checks whether the camera permission is granted.|
|isAREngineServiceAPKReady()|`Promise<boolean>`|Checks whether the ar engine service apk is downloaded.|
|navigateToAppMarket()|`Promise<void>`|Navigate client to app gallery engine service apk download page.|
|enableLogger()|`Promise<void>`|Enables HMS Plugin Method Analytics.|
|disableLogger()|`Promise<void>`|Disables HMS Plugin Method Analytics.|

#### Public Methods

##### isAREngineServiceApkReady
The AR Engine needs the AR Engine Service APK installed on the device before using the AR capabilities. This method checks if the service APK is already installed on the device.

|Return Type|Description|
|---|---|
|`Promise<boolean>`|True if the AR Engine Service APK is installed and ready, false otherwise.|

###### Call Example
```ts
async function checkServiceApk(){
  bool result = await HMSAR.isAREngineServiceAPKReady();
  // Navigate to the AppGallery for AR Engine Service APK Download if result is false
}
```

##### navigateToAppMarketPage
Opens the HUAWEI AR Engine Service APK AppGallery Page. If the device does not support the AR Engine, AppGallery would display application not available message. 

|Return Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|

###### Call Example
```ts
async function checkServiceApk(){
  const isApkReady = await HMSAR.isAREngineServiceAPKReady();
  if(!isApkReady)
    await HMSAR.navigateToAppMarket();
}
```

##### hasCameraPermission
Checks if the camera permission is given.

|Return Type|Description|
|---|---|
|`Promise<boolean>`|True if the camera permission is given, false otherwise|

###### Call Example
```ts
async function checkCameraPermission(){
  bool result = await HMSAR.hasCameraPermission();
  // Request for camera permission if result is false.
}
```

##### requestCameraPermission
Requests the camera permission which is required to display the ARScene.

|Return Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|

###### Call Example
```ts
async function requestCameraPermission(){
  const result = await HMSAR.hasCameraPermission();
  if(!result) {
    HMSAR.requestCameraPermission();
  }
}
```

##### enableLogger
This method enables the HMSLogger capability which is used for sending usage analytics of AR Engine SDK's methods to improve the service quality.

|Return Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|

###### Call Example
```ts
HMSAR.enableLogger(); // Enables HMSLogger
```

##### disableLogger
This method disables the HMSLogger capability which is used for sending usage analytics of AR Engine SDK's methods to improve the service quality.

|Return Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|

###### Call Example
```ts
HMSAR.disableLogger(); // Disables HMSLogger
```

### ARScene
Abstract class for ar scenes.
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|on(call:(value)=>void)  |`Promise<void>`|Register a callback method on gl surface view's onDrawFrame method. |
|setConfig(config:  any)|`Promise<void>`| Sets config to the current active ar scene.|
|startARScene(config: any, bounds: SceneBounds)|`Promise<void>` | Starts ar scene.|
|destroy()| `Promise<void>`| Destroys ar scene.|
|scroll()|`Promise<void>`|ARScene component scroll capability only useful for ionic.|


### ARHandScene
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|on(call:(value: ARHand)=>void)  |`Promise<void>`|Register a callback method on gl surface view's onDrawFrame method. |
|setConfig(config:  ARHandConfig)|`Promise<void>`| Sets config to the current active ar scene.|
|startARScene(config: ARHandConfig, bounds: SceneBounds)|`Promise<void>` | Starts ar scene.|
|destroy()| `Promise<void>`| Destroys ar scene.|
|scroll()|`Promise<void>`|ARScene component scroll capability only useful for ionic.|

#### Public Methods

##### startARScene(config: ARHandConfig, bounds: SceneBounds)
Starts ar scene with the initial configuration or without configuration.
###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARHandConfig|Configuration options for ar scene.|
|bounds|SceneBounds|Bounds where the ar scene will disappear.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```html
	<html>
	...
	...
		<div id="scene" style="width:100%;height:400px;"></div>
	...
	...
	<html>
```
```ts
async function example(){
    const arHand = new HMSAR.ARHandScene("scene");
    await arHand.startARScene();
}
```

##### setConfig(config: ARHandConfig)
Sets configuration to ar scene while ar scene already running.

###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARHandConfig|Configuration options for ar scene.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    // arHandScene should be started.
    const config = {
        boxColor: {red:255, green:65, blue:72, alpha:1},
        draw: true,
        lineWidth: 30.5
    };
    await arHand.setConfig(config);
}
```

##### destroy()
Destroys ar scene.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arHand.destroy();
}
```

##### scroll()
ARScene component scroll capability only useful for ionic.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arHand.scroll();
}
```


### ARWorldScene
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|on(call:(value:ARPlane)=>void)  |`Promise<void>`|Register a callback method on gl surface view's onDrawFrame method. |
|setConfig(config:  ARWorldConfig)|`Promise<void>`| Set config to the current active ar scene.|
|startARScene(config: ARWorldConfig, bounds: SceneBounds)|`Promise<void>` | Start ar scene.|
|destroy()| `Promise<void>`| Destroy ar scene.|
|scroll()|`Promise<void>`|ARScene component scroll capability only useful for ionic.|

#### Public Methods


##### startARScene(config: ARWorldConfig, bounds: SceneBounds)
Start ar scene with the initial configuration or without configuration.
###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARWorldConfig|Configuration options for ar scene.|
|bounds|SceneBounds|Bounds where the ar scene will disappear.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```html
	<html>
	...
	...
		<div id="scene" style="width:100%;height:400px;"></div>
	...
	...
	<html>
```
```ts
async function example(){
    const arWorld = new HMSAR.ARWorldScene("scene");
    // Ionic Capacitor runtime example file path  ----  objPath: "public/assets/blub.obj"
    // Ionic Cordova runtime example file path    ----  objPath: "www/assets/blub.obj"
    await arWorld.startARScene({objPath: "<obj-file-path>", texturePath: "<texture-path>"});
}
```

##### setConfig(config: ARWorldConfig)
Set configuration to ar scene while ar scene already running.

###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARWorldConfig|Configuration options for ar scene.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    // arWorldScene should be started.
    // Ionic Capacitor runtime example file path  ----  objPath: "public/assets/blub.obj"
    // Ionic Cordova runtime example file path    ----  objPath: "www/assets/blub.obj"
    const config = {objPath: "<obj-file-path>", texturePath:"<texture-path>"};
    await arWorld.setConfig(config);
}
```

##### destroy()
Destroy ar scene.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arWorld.destroy();
}
```

##### scroll()
ARScene component scroll capability only useful for ionic.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arWorld.scroll();
}
```

### ARFaceScene
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|on(call:(value: ARFace)=>void)  |`Promise<void>`|Register a callback method on gl surface view's onDrawFrame method. |
|setConfig(config:  ARFaceConfig)|`Promise<void>`| Set config to the current active ar scene.|
|startARScene(config: ARFaceConfig, bounds: SceneBounds)|`Promise<void>` | Start ar scene.|
|destroy()| `Promise<void>`| Destroy ar scene.|
|scroll()|`Promise<void>`|ARScene component scroll capability only useful for ionic.|

#### Public Methods

##### startARScene(config: ARFaceConfig, bounds: SceneBounds)
Start ar scene with the initial configuration or without configuration.

###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARFaceConfig|Configuration options for ar scene.|
|bounds|SceneBounds|Bounds where the ar scene will disappear.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```html
	<html>
	...
	...
		<div id="scene" style="width:100%;height:400px;"></div>
	...
	...
	<html>
```
```ts
async function example(){
    const arFace = new HMSAR.ARFaceScene("scene");
    await arFace.startARScene();
}
```

##### setConfig(config: ARFaceConfig)
Set configuration to ar scene while ar scene already running.

###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARFaceConfig|Configuration options for ar scene.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    // arFaceScene should be started.
    // Ionic Capacitor runtime example file path  ----  objPath: "public/assets/texture.png"
    const config = {
        texturePath: "<desired_path>"
    };
    await arFace.setConfig(config);
}
```

##### destroy()
Destroys ar scene.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arFace.destroy();
}
```

##### scroll()
ARScene component scroll capability only useful for ionic.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arFace.scroll();
}
```

### ARBodyScene
#### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|on(call:(value: ARBody)=>void)  |`Promise<void>`|Register a callback method on gl surface view's onDrawFrame method. |
|setConfig(config:  ARBodyConfig)|`Promise<void>`| Set config to the current active ar scene.|
|startARScene(config: ARBodyConfig, bounds: SceneBounds)|`Promise<void>` | Start ar scene.|
|destroy()| `Promise<void>`| Destroy ar scene.|
|scroll()|`Promise<void>`|ARScene component scroll capability only useful for ionic.|

#### Public Methods


##### startARScene(config: ARBodyConfig, bounds: SceneBounds)
Starts ar scene with the initial configuration or without configuration.

###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARBodyConfig|Configuration options for ar scene.|
|bounds|SceneBounds|Bounds where the ar scene will disappear.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```html
	<html>
	...
	...
		<div id="scene" style="width:100%;height:400px;"></div>
	...
	...
	<html>
```
```ts
async function example(){
    const arBody = new HMSAR.ARBodyScene("scene");
    await arBody.startARScene();
}
```

##### setConfig(config: ARBodyConfig)
Sets configuration to ar scene while ar scene already running.
###### Parameters
|Name|Type|Description|
|---|---|---|
|config| ARBodyConfig|Configuration options for ar scene.|
###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    // arBodyScene should be started.
    const config = {
        lineWidth: 7,
        lineColor: {red:255, green: 255, blue: 255, alpha:1},
        pointSize: 15
    };
    await arBody.setConfig(config);
}
```

##### destroy()
Destroys ar scene.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arBody.destroy();
}
```

##### scroll()
ARScene component scroll capability only useful for ionic.

###### Return Type
|Type|Description|
|---|---|
|`Promise<void>`|Promise result of an execution that returns no value.|
###### Call Example
```ts
async function example(){
    await arBody.scroll();
}
```

### ColorRGBA
|Field|Type|Description|
|---|---|---|
|red|`number`| Red color range between 0-255.|
|green|`number`| Green color range between 0-255.|
|blue|`number`| Blue color range between 0-255.|
|alpha|`number`| Alpha.|

### ARHandConfig
|Field|Type|Description|
|---|---|---|
|drawBox|`boolean`| If set to true a box will be displayed around hand when hand gestures captured.|
|boxColor|`ColorRGBA`| Color of hand box.|
|lineWidth|`number`| Line width of hand box.|

### ARWorldConfig
|Field|Type|Description|
|---|---|---|
|objPath|`string`|Virtual object file path. When object file given you can put that object to ar scene. |
|texturePath|`string`|Virtual object texture file path.|
|labelDraw|`boolean`|If set to true label will be drawn when plane detected.|
|imageOther|`string`|Image when other plane type detected.|
|imageWall|`string`|Image when wall detected.|
|imageFloor|`string`|Image when floor detected.|
|imageSeat|`string`|Image when seat detected.|
|imageTable|`string`|Image when table detected.|
|imageCeiling|`string`|Image when ceiling detected.|
|textOther|`string`|Text when other plane type detected.|
|textWall|`string`|Text when wall detected.|
|textFloor|`string`|Text when floor detected.|
|textSeat|`string`|Text when seat detected.|
|textTable|`string`|Text when table detected.|
|textCeiling|`string`|Text when ceiling detected.|
|colorOther|`ColorRGBA`|Color when other plane detected.|
|colorWall|`ColorRGBA`|Color when wall detected.|
|colorFloor|`ColorRGBA`|Color when floor detected.|
|colorSeat|`ColorRGBA`|Color when seat detected.|
|colorTable|`ColorRGBA`|Color when table detected.|
|colorCeiling|`ColorRGBA`|Color when ceiling detected.|

### ARFaceConfig
|Field|Type|Description|
|---|---|---|
|pointSize|`number`| Face points size.|
|depthColor|`ColorRGBA`| Face depth points color.|
|texturePath|`string`| Face texture path.|

### ARBodyConfig
|Field|Type|Description|
|---|---|---|
|drawLine|`boolean`|If set to true skeleton connection lines will be drawn when person detected. |
|drawPoint|`boolean`|If set to true skeleton connection point will be drawn when person detected. |
|lineWidth|`number`| Line width of skeleton connection lines.|
|pointSize|`number`| Point size of skeleton connection points.|
|lineColor|`ColorRGBA`| Skeleton connection line color.|
|pointColor|`ColorRGBA`| Skeleton connection point color.|

### Anchor
|Field|Type|Description|
|---|---|---|
|pose|`ARPose`| Returns the location and pose of the anchor point in the world coordinate system.|
|trackingState|`number`| Status of the current trackable. |

### ARFaceBlendShapes
|Field|Type|Description|
|---|---|---|
|blendShapeCount|`number`| Number of blend shapes.|
|blendShapeData|`number[]`| The value ranges from 0 to 1, indicating the expression degree of each blend shape.|
|blendShapeType|`string[]`| An array of blend shape types.|
|blendShapeDataMap|`any`|  Key indicates the string corresponding to the blend shape enumeration type, and the value indicates the blend shape expression degree, ranging from [0, 1].|

### ARPose
|Field|Type|Description|
|---|---|---|
|translation|`number[]`|Indicates the translation from the destination coordinate system to the local coordinate system. |
|rotation|`number[]`| Indicates the rotation variable, which is a Hamilton quaternion.|

### ARHand
|Field|Type|Description|
|---|---|---|
|gestureType|`number`| Different static gestures can be identified based on whether deep flow inspection is enabled. |
|handType|`ARHandType`| The hand type, which can left hand, right hand, or unknown (if left/right hand recognition is not supported). |
|anchors|`Anchor[]`|Represents an anchor at a fixed location and a specified direction in an actual environment. HUAWEI AR Engine continuously updates this value so that the location and direction remains unchanged even when the environment changes. |
|gestureHandBox|`number[]`| The rectangle that covers the hand, in the format of [x0,y0,0,x1,y1,0]. (x0,y0) indicates the upper left corner, (x1,y1) indicates the lower right corner, and x/y is based on the OpenGL NDC coordinate system.|
|gestureCenter|`number[]`| Coordinates of the center point of a hand in the format of [x,y,0]. The point is the center coordinates of the bounding rectangle of the hand. |
|handSkeletonArray|`number[]`| The coordinates of a hand skeleton point in the format of [x0,y0,z0,x1,y1,z1, ...].|
|handSkeletonConnection|`number[]`| The connection data of a hand skeleton point, which is the index of the skeleton point type.|
|handSkeletonTypes|`number[]`|  The list of hand skeleton point types.|
|gestureCoordinateSystem|`ARCoordinateSystemType`| Coordinate type used by the current gesture posture. For example, COORDINATE_SYSTEM_TYPE_2D_IMAGE indicates the OpenGL NDC coordinate system.|
|skeletonCoordinateSystem|`ARCoordinateSystemType`| Coordinate system of the hand skeleton data: COORDINATE_SYSTEM_TYPE_2D_IMAGE indicates 2D hand tracking, and COORDINATE_SYSTEM_TYPE_3D_CAMERA indicates 3D hand tracking.|
|trackingState|`TrackingState`| Status of the current trackable. |

### ARPlane
|Field|Type|Description|
|---|---|---|
|centerPose|`ARPose`|The pose transformed from the local coordinate system of a plane to the world coordinate system. |
|extentX|`number`|The length of the plane's bounding rectangle measured along the local X-axis of the coordinate system centered on the plane, such as the width of the rectangle. |
|extentZ|`number`|The length of the plane's bounding rectangle measured along the local Z-axis of the coordinate system centered on the plane, such as the height of the rectangle. |
|planePolygon|`number[]`| The 2D vertices of the detected plane, in the format of [x1, z1, x2, z2, ...]. |
|label|`SemanticPlaneLabel`| The semantic type of the current plane, such as desktop or floor. |
|trackingState|`TrackingState`|Status of the current trackable.  |
|anchors|`Anchor[]`|Represents an anchor at a fixed location and a specified direction in an actual environment. HUAWEI AR Engine continuously updates this value so that the location and direction remains unchanged even when the environment changes.|
|type| `PlaneType` | Detected plane type.|

### ARFace
|Field|Type|Description|
|---|---|---|
|anchors|`Anchor[]`|Represents an anchor at a fixed location and a specified direction in an actual environment. HUAWEI AR Engine continuously updates this value so that the location and direction remains unchanged even when the environment changes. |
|faceBlendShapes|`ARFaceBlendShapes`|  The facial blend shapes, which contain several expression parameters.|
|pose|`ARPose[]`| The pose of a face mesh center in the camera coordinate system, a right-handed coordinate system. The origin is located at the nose tip, the center of a face, X+ points leftwards, Y+ points up, and Z+ points from the inside to the outside with the face as the reference.|
|trackingState|`TrackingState`|Status of the current trackable.  |

### ARBody
|Field|Type|Description|
|---|---|---|
|bodyAction|`number`| Body action type, including six preset static postures.|
|anchors|`Anchor[]`|Represents an anchor at a fixed location and a specified direction in an actual environment. HUAWEI AR Engine continuously updates this value so that the location and direction remains unchanged even when the environment changes. |
|bodySkeletonTypes|`number[]`| An array of body skeleton types, including the head, neck, left shoulder, and right shoulder.|
|skeletonPoint2D|`number[]`|The 2D coordinates of a skeleton point measured with the screen center as the origin, in the format of [x0,y0,0,x1,y1,0]. The coordinates are normalized device coordinates (NDC) of OpenGL, and the value range of x/y is [-1,1].  |
|skeletonPoint3D|`number[]`| The 3D coordinates of a skeleton point, in the format of [x0,y0,z0,x1,y1,z1...].|
|skeletonConfidince|`number[]`| The confidence of each skeleton point. The number of values are the same as that of skeleton points, and each element indicates the confidence within the range [0,1].|
|bodySkeletonConnection|`number[]`|The connection data of a skeleton point, which is the index of the skeleton point type.  |
|skeletonPointIsExist2D|`number[]`| 0 or 1 to indicate that whether the 2D coordinates of a skeleton point are valid. The value 0 indicates that the data is invalid, while 1 indicates that the data is valid. |
|skeletonPointIsExist3D|`number[]`| 0 or 1 to indicate that whether the 3D coordinates of a skeleton point are valid. The value 0 indicates that the data is invalid, while 1 indicates that the data is valid. |
|coordinateSystemType|`ARCoordinateSystemType`| The coordinate system type.|
|trackingState|`TrackingState`|Status of the current trackable.  |

### Public Method Summary
|Method|Return Type|Description|
|---|---|---|
|requestCameraPermission()|`Promise<void>`|Request for camera permission.|
|hasCameraPermission()|`Promise<boolean>`|Check if camera permission granted.|
|isAREngineServiceAPKReady()|`Promise<boolean>`|Check if ar engine service apk ready.|

### Constants

#### Enum TrackingState
|Field|Description|
|---|---|
|UNKNOWN_STATE| Unknown State.|
|TRACKING| Tracking status.|
|PAUSED| Paused status.|
|STOPPED| Stopped status. |

#### Enum ARHandType 
|Field|Description|
|---|---|
|AR_HAND_UNKNOWN| Unknown or the hand type cannot be distinguished.|
|AR_HAND_RIGHT| Right hand.|
|AR_HAND_LEFT| Left hand.|

#### Enum SemanticPlaneLabel 
|Field|Description|
|---|---|
|PLANE_OTHER| Others.|
|PLANE_WALL| Wall.|
|PLANE_FLOOR| Floor.|
|PLANE_SEAT| Seat.|
|PLANE_TABLE| Table.|
|PLANE_CEILING| Ceiling.|

#### Enum PlaneType
|Field|Description|
|---|---|
|HORIZONTAL_UPWARD_FACING| A horizontal plane facing up (such as the ground and desk platform).|
|HORIZONTAL_DOWNWARD_FACING| A horizontal plane facing down (such as the ceiling).|
|VERTICAL_FACING| A vertical plane.|
|UNKNOWN_FACING| Unsupported type.|

#### Enum ARCoordinateSystemType
|Field|Description|
|---|---|
|COORDINATE_SYSTEM_TYPE_UNKNOWN| Unknown coordinate system.|
|COORDINATE_SYSTEM_TYPE_3D_WORLD| World coordinate system.|
|COORDINATE_SYSTEM_TYPE_3D_SELF| Local coordinate system.|
|COORDINATE_SYSTEM_TYPE_2D_IMAGE| OpenGL NDC coordinate system.|
|COORDINATE_SYSTEM_TYPE_3D_CAMERA| Camera coordinate system.|

---

## 4. Configuration and Description

### Preparing for Release

Before building the APK, configure the obfuscation configuration file to prevent the HMS Core SDK from being obfuscated.

**NOTE**: This step is required only if you want to minify and obfuscate your app. By default obfuscation is disabled in Cordova and Ionic apps.

The obfuscation is done by **ProGuard.** By default, in Cordova and Ionic apps ProGuard is disabled. Even though ProGuard is not available, ProGuard support can be added through 3rd party ProGuard plugins. If ProGuard is enabled in your project, the Huawei Cordova AR plugin's ProGuard rules need to be added to your project. These rules are as follows:

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

You can find the sample projects on [HMS Core > Examples > AR Kit](https://developer.huawei.com/consumer/en/doc/overview/HMS-Core-Plugin) page.

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

Huawei AR Kit Cordova Plugin is licensed under the [Apache 2.0 license](LICENCE).
