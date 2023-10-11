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
var device = true;

document.addEventListener("DOMContentLoaded", function () {
    const detectType = document.getElementById("detectorType").value;
    document.getElementById("bankCardDetector").addEventListener("click", () => bankCardDetector(detectType));
    document.getElementById("stopBankCardDetector").addEventListener("click", () => stopBankCardDetector());
    document.getElementById("getBankCardPicker").addEventListener("click", function () { getimgPicker(); });
    document.getElementById("startCustomViewMode").addEventListener("click", () => startCustomViewMode());
}, false);

async function getimgPicker() {
    (async ()=>{
        const file=await chooser.getFile();
        $imageResult=file.uri;
     })();

 }

const detectType = document.getElementById("detectorType").value;
async function bankCardDetector() {
    var bankCardSDKDetectorReq = {
        detectType: 0,
        filePath: $imageResult,
        mLBcrAnalyzerSetting: {
            langType: "zh",
            resultType: HMSMLTextPlugin.MLBcrResultConfig.RESULT_ALL
        },
    };
    var bankCardPluginDetectorReq = {
        detectType: 1,
        mLBcrCaptureConfig: {
            orientation: HMSMLTextPlugin.MLBcrCaptureConfig.ORIENTATION_AUTO,
            resultType: HMSMLTextPlugin.MLBcrResultConfig.RESULT_ALL
        },
    };
    try {
        if (device == true) {
            const result = await HMSMLText.bankCardDetector(bankCardSDKDetectorReq);
            document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
            document.getElementById("cardNumber").value = JSON.stringify(result.number);
            document.getElementById("cardExpire").value = JSON.stringify(result.expire);
            document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
        } else {
            const result = await HMSMLText.bankCardDetector(bankCardPluginDetectorReq);
            document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
            document.getElementById("cardNumber").value = JSON.stringify(result.number);
            document.getElementById("cardExpire").value = JSON.stringify(result.expire);
            document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
        }
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function stopBankCardDetector() {
    try {
        const result = await HMSMLText.stopBankCardDetector();
        alert(result)
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}


async function startCustomViewMode() {
    var customViewModeRequest = {
        isTitleAvailable: true,
        title: "Place the card within the frame",
        heightFactor: 0.8,
        widthFactor: 0.8,
        isFlashAvailable: true,
        resultType: HMSMLText.MLBcrResultConfig.RESULT_ALL,
        recMode: HMSMLText.RecMode.WEAK_MODE,
    };
    const result =  await HMSMLText.startCustomizedView(customViewModeRequest);
    document.getElementById("bankCardImage").src = "data:image/jpeg;base64," + result.originalBitmap;
    document.getElementById("cardNumber").value = JSON.stringify(result.number);
    document.getElementById("cardExpire").value = JSON.stringify(result.expire);
    document.getElementById("imageUri").value = JSON.stringify(result.originalBitmap);
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