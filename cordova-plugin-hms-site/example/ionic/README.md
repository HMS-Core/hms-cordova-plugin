# IONIC HMS SITE DEMO


## Contents

1. Introduction

2. Installation Guide

3. Ionic Example API Method Definition

4. Configure Description

5. Licensing and Terms

  

## 1. Introduction

The Cordova SDK code encapsulates the Huawei site client interface. It provides many APIs for your reference or use.

## 2. Installation Guide

1. Download the Cordova Site SDK Plugin through npm or by downloading from downloads page. Run the following command in the root directory of your Cordova project to install it through npm.<br><br>

    ***`npm install @hmscore/cordova-plugin-hms-site`***

2. Check whether the Cordova Site SDK is successfully added to the node_modules directory.

3. If you want full Ionic support with code completion etc, install"@ionic-native/core" in your project. <br>

    ***`npm install @ionic-native/core --save-dev`***

4. Copy the "ionic/dist/hms-site" folder from library to "node_modules/@ionic-native" folder under your Ionic project.

5. Compile ionic project.

    a. ***`ionic build`***

    b. ***`npx cap init [appName] [package_name]`*** 
    
    > ***NOTE*** <br>
    > where appName is the name of your app, and package_name in your agconnect-services.json file (ex: com.example.app).

6. Add a native platform to your project.

    ***`ionic capacitor add android`***

7. Make sure your project has a build.gradle file with a maven repository address and agconnect service dependencies.

    <img src=".docs/images/dependencies_app.png" width="500" >

8. Add the plug-in configuration to the build.gradle file in the app directory. And add site service implementation into to dependencies.

    <img src=".docs/images/appbuildgradle.png" width="500" >
    <br>
    <img src=".docs/images/versionSite.PNG" width="500" >



9. Add agconnect-services.json and jks file to the app directory in your Android project.

    <img src=".docs/images/agconnect_hms.PNG" width="250" >


10. To update dependencies, and copy any web assets to your project, add following code.

    ***`npx capacitor sync`***

11. Then run the Ionic app.
        
    ***`ionic capacitor run android`***

    After this command, the demo will be opened android studio. Just run it.


## 3. Ionic Example API Method Definition

 No. Developer can flexibly develop projects based on the example code.

## 4. Configure Description

No.


## 5. Licensing and Terms

Apache 2.0 license.