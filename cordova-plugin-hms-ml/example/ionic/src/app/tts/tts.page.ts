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
declare var HMSVoiceServiceProvider;
@Component({
  selector: 'app-tts',
  templateUrl: './tts.page.html',
  styleUrls: ['./tts.page.scss'],
})
export class TtsPage {
  textToSpeech: string = "";
  constructor( ) { }
  public async ttsAnalyser1() {
    this.textToSpeech = "Hello world!";
    this.ttsAnalyserStart(this.textToSpeech);
  }
  public async ttsAnalyser2() {
    this.textToSpeech = "How are you?";
    this.ttsAnalyserStart(this.textToSpeech);
  }
  public async ttsAnalyser3() {
    this.textToSpeech = "Welcome to TTS Application";
    this.ttsAnalyserStart(this.textToSpeech);
  }
  public async ttsAnalyser4() {
    this.textToSpeech = "How can I get to Taksim?";
    this.ttsAnalyserStart(this.textToSpeech);
  }

  public async ttsAnalyserStart(textToSpeech) {
    var ttsAnalyserInput = {
      text: textToSpeech,
        mlConfigs: {
            language: HMSVoiceServiceProvider.MLTtsConstants.TTS_EN_US,
            person: HMSVoiceServiceProvider.MLTtsConstants.TTS_SPEAKER_FEMALE_EN,
            speed: 1.0,
            volume: 1.0,
            synthesizeMode: HMSVoiceServiceProvider.MLTtsConstants.TTS_ONLINE_MODE
        },
        queuingMode: 0
    };
    try {
      await HMSVoiceServiceProvider.ttsAnalyser(ttsAnalyserInput);
    } catch (ex) {
      alert(ex)
    }
  }
  public async ttsAnalyserDownload() {
    var ttsAnalyserInput = {
      text: "Hello Huawei!",
        mlConfigs: {
            language: HMSVoiceServiceProvider.MLTtsConstants.TTS_EN_US,
            person: HMSVoiceServiceProvider.MLTtsConstants.TTS_SPEAKER_OFFLINE_EN_US_FEMALE_BEE,
            speed: 1.0,
            volume: 1.0,
            synthesizeMode: HMSVoiceServiceProvider.MLTtsConstants.TTS_OFFLINE_MODE

        },
        queuingMode: 0
    };
    try {
      await HMSVoiceServiceProvider.ttsOfflineAnalyser(ttsAnalyserInput);
    } catch (ex) {
      alert(ex)
    }
  }
  public async ttsAnalyserPause() {
    try {
      alert(await HMSVoiceServiceProvider.ttsAnalyserPause());
    } catch (ex) {
      alert(ex)
    }
  }
  public async ttsAnalyserResume() {
    try {
      alert(await HMSVoiceServiceProvider.ttsAnalyserResume());
    } catch (ex) {
      alert(ex)
    }
  }
  public async ttsAnalyserStop() {
    try {
      alert(await HMSVoiceServiceProvider.ttsAnalyserStop());
    } catch (ex) {
      alert(ex)
    }
  }


}
