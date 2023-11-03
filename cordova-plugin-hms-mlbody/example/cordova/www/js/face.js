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
    document.getElementById("stillFaceAnalyser").addEventListener("click", () => stillFaceAnalyser());
    document.getElementById("stillFaceAnalyserInfo").addEventListener("click", () => stillFaceAnalyserInfo());
    document.getElementById("stopStillFaceAnalyser").addEventListener("click", () => stopStillFaceAnalyser());
    document.getElementById("getFaceAnalyserPicker").addEventListener("click", function () { getimgPicker(); });
}, false);

async function getimgPicker() {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
     })();
 }



async function stillFaceAnalyser() {
    var faceReq = {
        mlFaceAnalyserSetting: {
            featureType: HMSMLBodyPlugin.MLFaceSetting.TYPE_FEATURES,
            keyPointType: HMSMLBodyPlugin.MLFaceSetting.TYPE_KEYPOINTS,
            maxSizeFaceOnly: false,
            minFaceProportion: 1.0,
            performanceType: HMSMLBodyPlugin.MLFaceSetting.TYPE_PRECISION,
            shapeType: HMSMLBodyPlugin.MLFaceSetting.TYPE_SHAPES,
            tracingAllowed: false,
        },
        analyseMode: 0,
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSMLBody.stillFaceAnalyser(faceReq)));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function stillFaceAnalyserInfo() {
    try {
        alert(JSON.stringify(await HMSMLBody.stillFaceAnalyserInfo()));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function stopStillFaceAnalyser() {
    try {
        alert(await HMSMLBody.stopStillFaceAnalyser());
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}