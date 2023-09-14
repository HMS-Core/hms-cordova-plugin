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
var $imageResult = null;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getCompositeAnalyser").addEventListener("click", () => getCompositeAnalyser());
    document.getElementById("getCompositePicker").addEventListener("click", function () { getimgPicker(); });
}, false);

async function getimgPicker() {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
     })();
     
 }

async function getCompositeAnalyser() {
    var compositeAnalyserReq = {
       filePath: $imageResult,
       analyzerNames: [
            HMSMLImagePlugin.MLStillCompositerName.CLASSIFICATION,
            HMSMLImagePlugin.MLStillCompositerName.FACE
        ],
        analyserSetting: {
            featureType: HMSMLImagePlugin.MLFaceSetting.TYPE_FEATURES,
            keyPointType: HMSMLImagePlugin.MLFaceSetting.TYPE_KEYPOINTS,
            maxSizeFaceOnly: false,
            minFaceProportion: 1.0,
            performanceType: HMSMLImagePlugin.MLFaceSetting.TYPE_PRECISION,
            shapeType: HMSMLImagePlugin.MLFaceSetting.TYPE_SHAPES,
            tracingAllowed: false,
        },
    };
    try {
        const result = await HMSMLImagePlugin.initializeCompositeAnalyzer(compositeAnalyserReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}