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
    document.getElementById("bankCardDetector").addEventListener("click", () => bankCardDetector(detectType));
    document.getElementById("stopBankCardDetector").addEventListener("click", () => stopBankCardDetector());
    document.getElementById("getBankCardPicker").addEventListener("click", function () { getimgPicker("bankCardSelectedImage"); });
}, false);

async function getimgPicker($selectedImage) {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
        document.getElementById($selectedImage).src=file.uri;
     })();
     
 }

const detectType = document.getElementById("detectorType").value;
async function bankCardDetector() {
    var bankCardSDKDetectorReq = {
        detectType: 0,
        filePath: $imageResult,
        mLBcrAnalyzerSetting: {
            langType: "zh",
            resultType: HMSMLKit.MLBcrResultConfig.RESULT_ALL
        },
    };
    var bankCardPluginDetectorReq = {
        detectType: 1,
        mLBcrCaptureConfig: {
            orientation: HMSMLKit.MLBcrCaptureConfig.ORIENTATION_AUTO,
            resultType: HMSMLKit.MLBcrResultConfig.RESULT_ALL
        },
    };
    try {
        if (device == true) {
            const result = await HMSTextServiceProvider.bankCardDetector(bankCardSDKDetectorReq);
            document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
            document.getElementById("cardNumber").value = JSON.stringify(result.number);
            document.getElementById("cardExpire").value = JSON.stringify(result.expire);
            document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
        } else {
            const result = await HMSTextServiceProvider.bankCardDetector(bankCardPluginDetectorReq);
            document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
            document.getElementById("cardNumber").value = JSON.stringify(result.number);
            document.getElementById("cardExpire").value = JSON.stringify(result.expire);
            document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
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