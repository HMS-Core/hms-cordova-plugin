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
    document.getElementById("documentImageAnalyser").addEventListener("click", () => getDocumentImageAnalyser());
    document.getElementById("stopDocumentImageAnalyser").addEventListener("click", () => stopDocumentImageAnalyser());
    document.getElementById("getDocumentImagePicker").addEventListener("click", function () { getimgPicker(); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
     })();
     
 }

async function getDocumentImageAnalyser() {
    var documentImageReq = {
        documentSetting: {
            borderType: HMSMLTextPlugin.MLRemoteTextSetting.ARC,
            possibleLanguages: ["en", "zh", "tr"],
            enableFingerprintVerification: true,
        },
        filePath: $imageResult,
    };
    try {
        const result = await HMSMLText.documentImageAnalyser(documentImageReq);
        document.getElementById("textView").value = JSON.stringify(result.stringValue);
    } catch (Ex) {
        alert(JSON.stringify(Ex))
    }
}

async function stopDocumentImageAnalyser() {
    try {
        const result = await HMSMLText.stopDocumentImageAnalyser();
        alert(result)
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}