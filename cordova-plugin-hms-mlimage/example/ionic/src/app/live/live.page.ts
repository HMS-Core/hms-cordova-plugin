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
import { Component, OnInit } from '@angular/core';
declare var HMSMLImagePlugin;
@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage {
  name: string = "";
  constructor() { }


  public async liveAnalyserStart() {
     var mlClassification = null;	
     mlClassification = new HMSMLImagePlugin.liveEngineAnalyser("scene");
     var lensEngineReq={
        analyzerName:HMSMLImagePlugin.MLAnalyzerName.LIVECLASSIFICATION   
    }
	await mlClassification.startMLLive({ lensEngineReq });
	mlClassification.on(HMSMLImagePlugin.Events.CLASSIFICATION_TRANSACTOR_ON_RESULT, (value) => {
		console.log(JSON.stringify(value));
        document.getElementById('name').innerHTML = "Result: " + value[0].name;	
	});   
}
public liveAnalyserDestroy() {
  document.getElementById('name').innerHTML = "Result: ";
  HMSMLImagePlugin.destroy(
      function (res) {
          console.log(JSON.stringify(res));
      }, function (err) { console.log(JSON.stringify(err)); }
  );
}
}