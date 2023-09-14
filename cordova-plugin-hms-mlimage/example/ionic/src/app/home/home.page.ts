/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
declare var HMSMLImagePlugin;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private router: Router, public platform: Platform) {}
  ionViewWillEnter() {
    this.platform.ready().then(() => {
      var configInput = {
        apiKey: "<your_apiKey>",
      };
      HMSMLImagePlugin.serviceInitializer(configInput);
    });
  }

  classifyPage() {
    this.router.navigate(["classify"]);
  }
  customModelPage() {
    this.router.navigate(["custommodel"]);
  }
  documentSkewPage() {
    this.router.navigate(["documentskewcorrection"]);
  }
  imgsegPage() {
    this.router.navigate(["imgseg"]);
  }
  imgSuperresolutionPage() {
    this.router.navigate(["imgsuperresolution"]);
  }
  landmarkPage() {
    this.router.navigate(["landmark"]);
  }
  livePage() {
    this.router.navigate(["live"]);
  }
  objectPage() {
    this.router.navigate(["object"]);
  }
  productPage() {
    this.router.navigate(["product"]);
  }
  stillScenePage() {
    this.router.navigate(["stillscene"]);
  }
  textImgSuperresolutionPage() {
    this.router.navigate(["textimagesuperresolution"]);
  }
  compositePage() {
    this.router.navigate(["composite"]);
  }
}
