/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var $imageResult = null;
var device = true;

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("documentSkewCorrectionStart").addEventListener("click", () => documentSkewCorrectionStart());
    document.getElementById("getDocumentskew").addEventListener("click", function () { getimgPicker("documentSkewCorrectionSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }

async function documentSkewCorrectionStart() {
    var documentSkewCorrectionReq = {
        filePath: $imageResult
    };
    try {
        const result = await HMSImageServiceProvider.documentSkewCorrectionAnalyser(documentSkewCorrectionReq);
        document.getElementById("dscImage").src = "data:image/jpeg;base64," + result.bitmap;
    } catch (ex) {
        alert(JSON.stringify(Ex));
    }
}




