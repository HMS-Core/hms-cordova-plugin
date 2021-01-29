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
  selector: 'app-sounddect',
  templateUrl: './sounddect.page.html',
  styleUrls: ['./sounddect.page.scss'],
})
export class SounddectPage {

  constructor() { }

  public async soundAnalyserStart() {
    var soundDectAnalyserInput = { 
      startType:true,     
    };
  try {
      var res=await HMSVoiceServiceProvider.soundDectAnalyser(soundDectAnalyserInput);
      if (res.eventName == "onSoundSuccessResult") {
          alert(JSON.stringify(res.soundType));
      }     
  } catch (Ex) {
      alert(Ex);
  }    
  }
  public async soundAnalyserStop() {
    var soundDectAnalyserInput = { 
      startType:false,     
    };
  try {
      alert(JSON.stringify( await HMSVoiceServiceProvider.soundDectAnalyser(soundDectAnalyserInput)));
      
  } catch (Ex) {
      alert(Ex);
  }
    
  }

}
