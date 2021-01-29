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
  selector: 'app-translate',
  templateUrl: './translate.page.html',
  styleUrls: ['./translate.page.scss'],
})
export class TranslatePage {
  translateInputText: string = "";
  translateOutputText: string = "";
  constructor() { }

  public async  localTranslator() {
    var localtranslateInput = {
        USE_SYNC:false,
        targetLangCode: "zh",
        sourceLangCode: "en",
        sourceText: this.translateInputText,
    };
    try {
        const result = await HMSVoiceServiceProvider.localTranslator(localtranslateInput);
        this.translateOutputText = result;
    } catch (ex) {
        alert(ex)
    }
}

  public async remoteTranslator() {
    var translateInput = {
        USE_SYNC:false,
        targetLangCode: "zh",
        sourceLangCode: "",
        sourceText: this.translateInputText,
    };
    try {
        const result = await HMSVoiceServiceProvider.remoteTranslator(translateInput);
        this.translateOutputText = result;
    } catch (ex) {
        alert(ex)
    }
}

public async downloadlocal() {
    var translateInput = {
        USE_SYNC:false,
        targetLangCode: "zh",
        sourceLangCode: "en",
        langcode: "zh",
        sourceText: this.translateInputText,
        
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorDownloadModel(translateInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
public async getCloudLang() {
    var translateInput = {
        USE_SYNC:false        
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorRemoteAllLang(translateInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
public async getLocalLang() {
    var translateInput = {
        USE_SYNC:false       
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorLocalAllLang(translateInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(ex)
    }
}
public async deletelocal() {
    var translateInput = {
        USE_SYNC:false,
        targetLangCode: "zh",
        sourceLangCode: "en",
        langcode: "zh",
        sourceText: this.translateInputText,
        
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorDeleteModel(translateInput);
        alert(JSON.stringify(result));
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
