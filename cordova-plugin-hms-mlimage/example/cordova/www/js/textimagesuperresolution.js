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
    document.getElementById("getTextImageSuper").addEventListener("click", () => getTextImageSuper());
    document.getElementById("getTextImageSuperPicker").addEventListener("click", function () { getimgPicker(); });
}, false);

async function getimgPicker() {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
     })();
     
 }

async function getTextImageSuper() {
    var textImageSuperResolutionReq = {
        filePath: $imageResult,
    };
    try {
        const result = await HMSMLImage.textImageSuperResolution(textImageSuperResolutionReq)
        document.getElementById("superImg").src = "data:image/jpeg;base64," + result.superBitmap;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

