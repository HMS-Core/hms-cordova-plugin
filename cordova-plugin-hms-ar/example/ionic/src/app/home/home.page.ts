/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
import { HmsAR, ARHandScene, ARHand, ARWorldScene, ARBodyScene, ARFaceScene } from '@ionic-native/hms-ar/ngx'

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

  constructor(private hmsAR: HmsAR) {
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
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arHandScene = new ARHandScene("scene");
    await this.arHandScene.startARScene();
    await this.arHandScene.on((value: ARHand[]) => {
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
    });
  }

  async startBodyScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arBodyScene = new ARBodyScene("scene");
    await this.arBodyScene.startARScene();
  }

  async startWorldScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arWorldScene = new ARWorldScene("scene");
    this.arWorldScene.startARScene({ texturePath: "public/assets/blub_texture.png", objPath: "public/assets/blub.obj" });
    await this.arWorldScene.on((value) => {
      console.log(JSON.stringify(value));
    });
  }

  async startFaceScene() {
    if (this.arHandScene != null) await this.arHandScene.destroy();
    if (this.arWorldScene != null) await this.arWorldScene.destroy();
    if (this.arFaceScene != null) await this.arFaceScene.destroy();
    if (this.arBodyScene != null) await this.arBodyScene.destroy();
    this.arHandScene = null;
    this.arWorldScene = null;
    this.arFaceScene = null;
    this.arBodyScene = null;
    this.arFaceScene = new ARFaceScene("scene");
    this.arFaceScene.startARScene();
    await this.arFaceScene.on((value) => {
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
