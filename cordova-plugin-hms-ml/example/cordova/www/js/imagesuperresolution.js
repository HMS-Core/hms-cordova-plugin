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
    document.getElementById("imageSuperResolution1x").addEventListener("click", () => imageSuperResolution());
    document.getElementById("imageSuperResolution3x").addEventListener("click", () => imageSuperResolution3X());
    document.getElementById("getSuperResolutionImagePicker").addEventListener("click", function () { getimgPicker("superResolutionImageOriginal"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }
async function imageSuperResolution() {
    var imageSuperResolutionReq = {
        filePath: $imageResult,
        detectType: 0,
        imgSuperResolutionSetting: {
            scaleType: 1.0
        }
    };
    try {
        let result = await HMSImageServiceProvider.imageSuperResolution(imageSuperResolutionReq);
        document.getElementById("superResolutionImage").src = "data:image/jpeg;base64," + result.bitmap;
    } catch (ex) {
        alert(JSON.stringify(Ex));
    }
}
async function imageSuperResolution3X() {
    var imageSuperResolutionInput = {
        filePath: $imageResult,
        detectType: 1,
        imgSuperResolutionSetting: {
            scaleType: 3.0
        }
    };
    try {
        let result = await HMSImageServiceProvider.imageSuperResolution(imageSuperResolutionInput);
        document.getElementById("superResolutionImage").src = "data:image/jpeg;base64," + result[0].result;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}