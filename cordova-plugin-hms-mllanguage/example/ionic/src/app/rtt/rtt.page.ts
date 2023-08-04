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
declare var HMSMLLanguage;
@Component({
  selector: 'app-rtt',
  templateUrl: './rtt.page.html',
  styleUrls: ['./rtt.page.scss'],
})
export class RttPage {
  
  rttOutput: string = "";
  constructor() { }

  public rttAnalyserStart() {
    var rttAnalyserInput = {
      mLSpeechRealTimeTranscriptionConfig: {
          setLanguage: "en-US",
          enablePunctuation: true,
          enableSentenceTimeOffset: true,
          enableWordTimeOffset: true,
      }
    };
    HMSMLLanguage.rttAnalyserStart(
      rttAnalyserInput,
      function (res) {
          console.log(JSON.stringify(res));
          if (res.eventName == "onResults") {
            console.log(JSON.stringify(res));
            this.rttOutput = JSON.stringify(res)+"";
          } else if (res.hasOwnProperty("partialResult")) {
            console.log(JSON.stringify(res));
            this.rttOutput = JSON.stringify(res)+"";
          }
      }, function (err) { console.log(err); }
  );
    
  }
  public rttAnalyserStop() {
    HMSMLLanguage.rttAnalyserStop(
      function (res) {
          alert("rttAnalyserStop: " + JSON.stringify(res));
      }, function (err) { console.log(err); }
  );   
  }
}