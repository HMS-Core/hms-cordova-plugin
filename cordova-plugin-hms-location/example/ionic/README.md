# ionic-hms-location-demo

## Contents

1. Introduction

2. Installation Guide

3. Cordova Example API Method Definition

4. Configure Description

5. Licensing and Terms


## 1. Introduction

This is a demo that demonstrates how to use HMS LocationKit SDK with a Ionic application.

## 2. Installation Guide

### Ionic - Capacitor

1. Install the dependencies.

```shell
npm install
npm install @ionic-native/core --save-dev
```

2. Install the plugin.

```shell
npm install @hmscore/cordova-plugin-hms-location
```

3. Copy the folder `node_modules/@hmscore/cordova-plugin-hms-location/ionic/dist/hms-location` into `node_modules/@ionic-native` folder under your Ionic project.

4. Add `android` platform.

```shell
npx cap init [appName] [appId]
ionic build
npx capacitor add android
```

5. Run the project in Android Studio.

```shell
ionic capacitor run android
```

## 3. Cordova Example API Method Definition

No. Developer can flexibly develop projects based on the example code.

## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.
