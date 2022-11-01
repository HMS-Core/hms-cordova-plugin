/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { Component } from '@angular/core';
import { HMSAR, ARHandScene, ARHand, ARWorldScene, ARBodyScene, ARFaceScene, ARAugmentedImageScene, ARWorldBodyScene, ARSceneMeshScene, Events } from '@hmscore/ionic-native-hms-ar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arWorldScene = null;
  arHandScene: ARHandScene = null;
  arFaceScene = null;
  arBodyScene = null;
  arWorldBodyScene = null;
  arSceneMeshScene = null;
  arAugmentedImageScene = null;

  constructor(private hmsAR: HMSAR) {
  }

  async ionViewDidEnter() {
    const isAREngineApkReady = await this.hmsAR.isAREngineServiceAPKReady();
    if(!isAREngineApkReady)
      await this.hmsAR.navigateToAppMarket();
    const hasCameraPermission = await this.hmsAR.hasCameraPermission();
    if(!hasCameraPermission)
      await this.hmsAR.requestCameraPermission();
  }

  async startHandScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arHandScene = new ARHandScene("scene");
    await this.arHandScene.startARScene();
    await this.arHandScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      const type = value[0].gestureType;
      if (type == 0) {
        console.log("Box moves to top.");
        const currentTop = parseInt(document.getElementById('move-me').style.top);
        document.getElementById('move-me').style.top = `${currentTop + 1}px`;
      } else if (type == 1) {
        console.log("Box moves to bottom.");
        const currentTop = parseInt(document.getElementById('move-me').style.top);
        document.getElementById('move-me').style.top = `${currentTop - 1}px`;
      }
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arHandScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arHandScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arHandScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startBodyScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arBodyScene = new ARBodyScene("scene");
    await this.arBodyScene.startARScene();
    await this.arBodyScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arBodyScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arBodyScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arBodyScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startWorldScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arWorldScene = new ARWorldScene("scene");
    // If you use capacitor run time, path must start with public. Example: public/assets/blub_texture.png
    await this.arWorldScene.startARScene({ texturePath: "www/assets/blub_texture.png", objPath: "www/assets/blub.obj" });
    await this.arWorldScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arWorldScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arWorldScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arWorldScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startFaceScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arFaceScene = new ARFaceScene("scene");
    await this.arFaceScene.startARScene();
    await this.arFaceScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arFaceScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arFaceScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arFaceScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startWorldBodyScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arWorldBodyScene = new ARWorldBodyScene("scene");
    // If you use capacitor run time, path must start with public. Example: public/assets/blub_texture.png
    await this.arWorldBodyScene.startARScene({ texturePath: "www/assets/blub_texture.png", objPath: "www/assets/blub.obj" });
    await this.arWorldBodyScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arWorldBodyScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arWorldBodyScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arWorldBodyScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startSceneMeshScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arSceneMeshScene = new ARSceneMeshScene("scene");
    // If you use capacitor run time, path must start with public. Example: public/assets/blub_texture.png
    await this.arSceneMeshScene.startARScene({ texturePath: "www/assets/blub_texture.png", objPath: "www/assets/blub.obj" });
    await this.arSceneMeshScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arSceneMeshScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arSceneMeshScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arSceneMeshScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startAugmentedImageScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arAugmentedImageScene = new ARAugmentedImageScene("scene");
    // If you use capacitor run time, path must start with public. Example: public/assets/image_default.png
    const config = {
      augmentedImages:[{
          imgFileFromAsset: "www/assets/image_default.png",
          widthInMeters: 0,
          imgName: "Tech Park"
      }]
    }
    await this.arAugmentedImageScene.startARScene(config);
    await this.arAugmentedImageScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
      document.getElementById('progress').innerHTML = "";
      document.getElementById('event').innerHTML = "";
    });
    await this.arAugmentedImageScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arAugmentedImageScene.on(Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arAugmentedImageScene.on(Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startHealthScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    if (this.arWorldBodyScene != null) await this.arWorldBodyScene.destroy();
    if (this.arSceneMeshScene != null) await this.arSceneMeshScene.destroy();
    if (this.arAugmentedImageScene != null) await this.arAugmentedImageScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldBodyScene = null;
    this.arSceneMeshScene = null;
    this.arAugmentedImageScene = null;
    this.arFaceScene = new ARFaceScene("scene");
    await this.arFaceScene.startARScene({enableHealthDevice:true});
    await this.arFaceScene.on(Events.ON_DRAW_FRAME, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arFaceScene.on(Events.HANDLE_MESSAGE_DATA, (value) => {
      console.log(JSON.stringify(value));
    });
    await this.arFaceScene.on(Events.HANDLE_PROCESS_PROGRESS_EVENT, (value) => {
      document.getElementById('progress').innerHTML = JSON.stringify(value);
      console.log(JSON.stringify(value));
    });
    await this.arFaceScene.on(Events.HANDLE_EVENT, (value) => {
      document.getElementById('event').innerHTML = JSON.stringify(value);
      console.log(JSON.stringify(value));
    });
    await this.arFaceScene.on(Events.HANDLE_RESULT, (value) => {
      console.log(JSON.stringify(value));
    });
  }


  async moveMe() {
    const handConfig = {
      boxColor: { red: 255, green: 65, blue: 72, alpha: 1 },
      draw: true,
      lineWidth: 30.5
    };
    await this.arHandScene.setConfig(handConfig);
  }

}
