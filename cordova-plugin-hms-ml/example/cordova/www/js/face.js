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
var $imageResult = null;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("stillFaceAnalyser").addEventListener("click", () => stillFaceAnalyser());
    document.getElementById("stilFaceAnalyserInfo").addEventListener("click", () => stilFaceAnalyserInfo());
    document.getElementById("stopStillFaceAnalyser").addEventListener("click", () => stopStillFaceAnalyser());
    document.getElementById("getFaceAnalyserPicker").addEventListener("click", function () { getimgPicker("faceSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }
async function stillFaceAnalyser() {
    var faceReq = {
        mlFaceAnalyserSetting: {
            featureType: HMSMLKit.MLFaceSetting.TYPE_FEATURES,
            keyPointType: HMSMLKit.MLFaceSetting.TYPE_KEYPOINTS,
            maxSizeFaceOnly: false,
            minFaceProportion: 1.0,
            performanceType: HMSMLKit.MLFaceSetting.TYPE_PRECISION,
            shapeType: HMSMLKit.MLFaceSetting.TYPE_SHAPES,
            tracingAllowed: false,
        },
        analyseMode: 0,
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSFaceBodyProvider.stillFaceAnalyser(faceReq)));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function stilFaceAnalyserInfo() {
    try {
        alert(JSON.stringify(await HMSFaceBodyProvider.stilFaceAnalyserInfo()));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function stopStillFaceAnalyser() {
    try {
        alert(await HMSFaceBodyProvider.stopStillFaceAnalyser());
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}