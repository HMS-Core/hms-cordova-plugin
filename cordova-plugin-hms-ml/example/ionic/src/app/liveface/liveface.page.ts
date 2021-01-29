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
declare var HMSMLKit;
@Component({
  selector: 'app-liveface',
  templateUrl: './liveface.page.html',
  styleUrls: ['./liveface.page.scss'],
})
export class LivefacePage {
  constructor() { }

 
  public async liveFaceAnalyser() {
     var mlFace = null;	
    mlFace = new HMSMLKit.liveEngineAnalyser("scene");
    var lensEngineReq={
        analyzerName:HMSMLKit.MLAnalyzerName.LIVEHAND,
        analyzerSetting:{
            sceneType : HMSMLKit.HandkeyPointConfig.TYPE_ALL,
            maxHandResults:2,
        },
        graphicSetting:{
            idPaintnewSetting:{
                color:HMSMLKit.Colors.RED
            }
        }
    }
	await mlFace.startMLLive({lensEngineReq});
	await mlFace.on((value) => {
		console.log(JSON.stringify(value));
		
		
	});
}
public liveFaceAnalyserDestroy() {
  HMSMLKit.destroy(
      function (res) {
          console.log(JSON.stringify(res));
      }, function (err) { console.log(JSON.stringify(err)); }
  );
}
}