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
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
declare var HMSMLKit;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router,public platform: Platform) { }
  ionViewWillEnter() {
    this.platform.ready().then(() => { 
      var configInput={
        apiKey:"<API_KEY>"
    };
    HMSMLKit.serviceInitializer(configInput);
    });
  }
  
  ttsPage(){
    this.router.navigate(['tts']);
  }
  bcrPage(){
    this.router.navigate(['bcr']);
  }
  textPage(){
    this.router.navigate(['text']);
  }
  documentPage(){
    this.router.navigate(['document']);
  }
  gcrPage(){
    this.router.navigate(['generalcard']);
  }
  formRecogPage(){
    this.router.navigate(['formrecognition']);
  }
  translatePage(){
    this.router.navigate(['translate']);
  }
  langdetectPage(){
    this.router.navigate(['langdetect']);
  }
  asrPage(){
    this.router.navigate(['asr']);
  }
  aftPage(){
    this.router.navigate(['aft']);
  }
  imgsegPage(){
    this.router.navigate(['imgseg']);
  }
  productPage(){
    this.router.navigate(['product']);
  }
  facePage(){
    this.router.navigate(['face']);
  }
  faceLivePage(){
    this.router.navigate(['liveface']);
  }
  liveLivenessPage(){
    this.router.navigate(['livelivenessdetection']);
  }
  stillHandkeyPage(){
    this.router.navigate(['stillhandkey']);
  }
  stillSkeletonPage(){
    this.router.navigate(['stillskeleton']);
  }
  objectPage(){
    this.router.navigate(['object']);
  }
  classifyPage(){
    this.router.navigate(['classify']);
  }
  landmarkPage(){
    this.router.navigate(['landmark']);
  }
  textImgSuperresolutionPage(){
    this.router.navigate(['textimagesuperresolution']);
  }
  stillScenePage(){
    this.router.navigate(['stillscene']);
  }
  rttPage(){
    this.router.navigate(['rtt']);
  }
  soundDectPage(){
    this.router.navigate(['sounddect']);
  }
  textEmbeddingPage(){
    this.router.navigate(['textembedding']);
  }
  customModelPage(){
    this.router.navigate(['custommodel']);
  }
  documentSkewPage(){
    this.router.navigate(['documentskewcorrection']);
  }
  imgSuperresolutionPage(){
    this.router.navigate(['imgsuperresolution']);
  }


  public async requestPermissions() {
    try {
      await HMSMLKit.requestPermissions({
        permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
      });
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  public async checkPermissions() {
    var permissionListInput = {
      permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
    }
    try {
      const result = await HMSMLKit.hasPermissions(permissionListInput);
      alert("Camera Permission: " + result.camera.hasPermission + "\nRead External Storage Permission: " +
        result.readExternalStorage.hasPermission + "\nWrite External Storage Permission" + result.writeExternalStorage.hasPermission +
        "\nAudio Permission" + result.audio.hasPermission);
    } catch (ex) {
      alert(JSON.stringify(ex))
    }
  }
}
