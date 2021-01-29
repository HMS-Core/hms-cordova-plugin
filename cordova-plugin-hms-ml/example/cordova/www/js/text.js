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
var device = true;
document.addEventListener("DOMContentLoaded", function () {
    const detectType = document.getElementById("detectorType").value;
    document.getElementById("getTextAnalyserimgPicker").addEventListener("click", function () { getimgPicker("textSelectedImage"); });
    document.getElementById("ImageTextAnalyser").addEventListener("click", () => ImageTextAnalyser());
    document.getElementById("getTextAnalyserInfo").addEventListener("click", () => getTextAnalyserInfo());
    document.getElementById("stopTextAnalyser").addEventListener("click", () => stopTextAnalyser());
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }
 const detectType = document.getElementById("detectorType").value;
 async function ImageTextAnalyser() {
 
    var ImageTextReq = {
        ocrType: 1,
        analyseMode: 1,
        remoteTextSetting: {
            textDensityScene: HMSMLKit.MLRemoteTextSetting.OCR_COMPACT_SCENE,
            languageList: ["en", "zh", "tr"],
            borderType: HMSMLKit.MLRemoteTextSetting.ARC,
        },
        filePath: $imageResult,
    };
    var localTextReq={
        ocrType: 0,
        analyseMode: 0,
        localTextSetting: {
            language: "en"
        },
        filePath: $imageResult,
    }
    try {
        if (device == true) {
            const result = await HMSTextServiceProvider.imageTextAnalyser(localTextReq);
            console.log(JSON.stringify(result));
            document.getElementById("textView").value += JSON.stringify(result.stringValue);
        
           
        } else {
            const result = await HMSTextServiceProvider.imageTextAnalyser(ImageTextReq);
            console.log(JSON.stringify(result));
            document.getElementById("textView").value += JSON.stringify(result.stringValue);
        
        }
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getTextAnalyserInfo() {
    try {
        const result = await  HMSTextServiceProvider.getTextAnalyserInfo();
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function stopTextAnalyser() {
    try {
        const result = await HMSTextServiceProvider.stopTextAnalyser();
        alert(result)
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
var checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        document.getElementById("detectorType").value = "Device Detector";
        device = true;
    } else {
        document.getElementById("detectorType").value = "Plugin Detector";
        device = false;
    }
});