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
    document.getElementById("productAnalyser").addEventListener("click", () => productAnalyser(detectType));
    document.getElementById("getproductPicker").addEventListener("click", function () { getimgPicker("productSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }

const detectType = document.getElementById("detectorType").value;
async function productAnalyser() {
    var productReq = {
        filePath: $imageResult,
        detectType:0
    };
    var productPluginReq = {
        detectType:1
    };
    try {
        if (device == true) {
            const result = await HMSImageServiceProvider.productVisionAnalyser(productReq);
            alert(JSON.stringify(result));
           
        } else {
            const result = await HMSImageServiceProvider.productVisionAnalyser(productPluginReq);
            alert(JSON.stringify(result));
        }
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