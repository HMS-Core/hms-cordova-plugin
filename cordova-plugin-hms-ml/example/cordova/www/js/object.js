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
    document.getElementById("objectAnalyser").addEventListener("click", () => objectAnalyser());
    document.getElementById("getObjectAnalyserPicker").addEventListener("click", function () { getimgPicker("objectSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }
async function objectAnalyser() {
    var objectReq = {
        filePath: $imageResult,
        mlObjectAnalyserSetting: {
            isClassificationAllowed: true,
            isMultipleResultsAllowed: true
        }
    };
    try {
        var result = await HMSImageServiceProvider.objectAnalyser(objectReq);
        document.getElementById("tracingIdentity").value = JSON.stringify(result.result[0].tracingIdentity);
        document.getElementById("typeIdentity").value = JSON.stringify(result.result[0].typeIdentity);
        document.getElementById("typePossibility").value = JSON.stringify(result.result[0].typePossibility);
        document.getElementById("border").value = JSON.stringify(result.result[0].border);
        
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}