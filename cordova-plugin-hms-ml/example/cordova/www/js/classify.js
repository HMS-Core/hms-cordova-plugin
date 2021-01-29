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
var local = 0;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("imageClassificationAnalyser").addEventListener("click", () => imageClassificationAnalyser());
    document.getElementById("stopImageClassificationAnalyser").addEventListener("click", () => stopImageClassificationAnalyser());
    document.getElementById("getImageClassificationPicker").addEventListener("click", function () { getimgPicker("imageClassificationSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
   (async ()=>{
       const file=await chooser.getFile();
       $imageResult=file.uri;
       document.getElementById($selectedImage).src=file.uri;
    })();
    
}

async function imageClassificationAnalyser() {
    var imageClassificationReq = {
        ocrType: local,
        analyseMode: 0,
        localClassificationAnalyzerSetting: {
            possibility: 0.8,
        },
        remoteClassificationAnalyzerSetting: {
            maxResults: 0,
            possibility: 0.5,
        },
        filePath: $imageResult
    };
    try {
        var result = await HMSImageServiceProvider.imageClassificationAnalyser(imageClassificationReq);
        document.getElementById("Identity").value = JSON.stringify(result.result[0].identity);
        document.getElementById("Name").value = JSON.stringify(result.result[0].name);
        document.getElementById("Possibility").value = JSON.stringify(result.result[0].possibility);
        console.log(JSON.stringify(result.result[0]));
        alert(JSON.stringify(result.result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function stopImageClassificationAnalyser() {
    try {
        alert(await HMSImageServiceProvider.stopImageClassificationAnalyser())
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.getElementById("detectorType").value = "Local";
        local = 0;
    } else {
        document.getElementById("detectorType").value = "Remote";
        local = 1;
    }
});