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
import { Component, OnInit } from '@angular/core';
declare var HMSVoiceServiceProvider;
@Component({
  selector: 'app-langdetect',
  templateUrl: './langdetect.page.html',
  styleUrls: ['./langdetect.page.scss'],
})
export class LangdetectPage {
  langDetectText: string = "";
  langCodeInput: string = "";
  probabilityInput: string = "";
  hashCodeInput: string = "";
  firstbestInput: string = "";

  constructor( ) { }

  public async getlocalLangDetection() {
    var localLangDetectionInput = {
      sourceText: this.langDetectText,
      trustedThreshold: 0.01
    };
    try {
      var langDetectResult = await HMSVoiceServiceProvider.localLangDetection(localLangDetectionInput);
      alert(langDetectResult);
    } catch (ex) {
      alert(ex)
    }
  }

  public async firstBestLangDetection() {
    console.log(this.langDetectText);
    var remoteLangDetectionInput = {
      sourceText: this.langDetectText,
      taskMode: 0,
      trustedThreshold: 0.6
    };
    try {
      var langDetectResult = await HMSVoiceServiceProvider.remoteLangDetection(remoteLangDetectionInput);
      this.firstbestInput = JSON.stringify(langDetectResult);
    } catch (ex) {
      alert(ex)
    }
  }


  public async probabilityLangDetection() {
    console.log(this.langDetectText);
    var remoteLangDetectionInput = {
      sourceText: this.langDetectText,
      taskMode: 1,
      trustedThreshold: 0.6   
    };
    try {
      var langDetectResult = await HMSVoiceServiceProvider.remoteLangDetection(remoteLangDetectionInput);
      this.langCodeInput = JSON.stringify(langDetectResult[0].langCode);
      this.probabilityInput = JSON.stringify(langDetectResult[0].probability);
      this.hashCodeInput = JSON.stringify(langDetectResult[0].hashCode);
    } catch (ex) {
      alert(ex)
    }
  }
  public async stopTranslatorService() {
    try {
      alert(await HMSVoiceServiceProvider.stopTranslatorService());
    } catch (ex) {
      alert(ex)
    }
  }


}
