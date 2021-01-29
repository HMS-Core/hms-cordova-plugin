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
    document.getElementById("stillskeletonnalyserStart").addEventListener("click", () => stillskeletonnalyserStart());
    document.getElementById("getSkeletonAnalyserPicker").addEventListener("click", function () { getimgPicker("skeletonSelectedImage"); });

}, false);


async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }

async function stillskeletonnalyserStart() {
    var stillSkeletonReq = {
        filePath: $imageResult,
    };
    try {
        alert(JSON.stringify(await HMSFaceBodyProvider.stillSkeletonAnalyser(stillSkeletonReq)));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}