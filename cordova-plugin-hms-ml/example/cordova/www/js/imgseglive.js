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
    document.getElementById("imgsegliveanalyserStart").addEventListener("click", () => imgsegliveanalyserStart());
    document.getElementById("destroy").addEventListener("click", () => destroy());
}, false);
let mlSeg = null;
async function imgsegliveanalyserStart() {
    var liveImgSegmentationReq = {
        imageSegmentationSetting: {
            analyserType: HMSMLKit.MLImageSegmentationSetting.BODY_SEG,
            isExact: false,
            scene: HMSMLKit.MLImageSegmentationScene.FOREGROUND_ONLY,
            analyseMode: 1
        }
    };
    mlSeg = null;	
	mlSeg = new HMSImageServiceProvider.liveImgSegmentationAnalyser("scene");
	await mlSeg.startMLImgLive({liveImgSegmentationReq});
	await mlSeg.on((value) => {
		console.log(JSON.stringify(value));		
	});
    
};
function destroy() {
    HMSImageServiceProvider.liveImgSegAnalyserDestroy(
       function (res) {
           console.log(JSON.stringify(res));
       }, function (err) { console.log(JSON.stringify(err)); }
   );
}