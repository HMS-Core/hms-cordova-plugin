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
var $audioResult = null;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("livefaceanalyserStart").addEventListener("click", () => livefaceanalyserStart());
    document.getElementById("destroy").addEventListener("click", () => destroy());
     document.getElementById("photo").addEventListener("click", () => photo());
}, false);
let mlFace = null;
async function livefaceanalyserStart() {
    mlFace = null;	
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
};
 function destroy() {
    HMSMLKit.destroy(
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
async function photo() {
         try {
               const result = await HMSMLKit.photograph();
               document.getElementById("image").src = "data:image/jpeg;base64," + result.bitmap;
               console.log(JSON.stringify(res));
         } catch (Ex) {
               alert(JSON.stringify(Ex));
         }

}