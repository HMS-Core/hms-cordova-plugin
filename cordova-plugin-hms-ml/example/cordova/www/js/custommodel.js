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

    document.getElementById("remoteModel").addEventListener("click", () => remoteModel());
    document.getElementById("downloadModel").addEventListener("click", () => downloadModel());
    document.getElementById("getCustomModel").addEventListener("click", function () { getimgPicker("customModelSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }


async function remoteModel() {
    var customModelReq = {
        detectType: 2,
        filePath: $imageResult,
       /*modelFullName:"",
        modelName:"",
        labelFileName:"",
        bitmapHeight:"",
        bitmapWidth:"",
        outPutSize:"",*/

    };
    try {
        const result = await HMSMLKit.customModelAnalyser(customModelReq);
        alert(JSON.stringify(result));
        console.log(JSON.stringify(result));

    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function downloadModel() {
    var downloadModelReq = {
        detectType: 1,
        filePath: $imageResult,
        downloadStrategySetting: {
            setRegion: HMSMLKit.DownloadStrategyCustom.REGION_DR_CHINA,
            isWifiNeed:false
        }
    };
    try {
        const result = await HMSMLKit.customModelAnalyser(downloadModelReq);
        JSON.stringify(result)
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}




