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
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generalCardDetector").addEventListener("click", () => generalCardDetector());
    document.getElementById("getGeneralCardPicker").addEventListener("click", function () { getimgPicker("generalCardImage"); });
}, false);


async function generalCardDetector() {
    var generalCardDetectorReq = {
        gcrCaptureConfig: {
            language: "en",
        },
        gcrCaptureUIConfig: {
            orientation: HMSMLKit.MLGcrCaptureUIConfig.ORIENTATION_AUTO,
            tipTextColor: HMSMLKit.Colors.GREEN,
            tipText: "Scan a card",
            scanBoxCornerColor: HMSMLKit.Colors.BLUE,
        }
    };
    try {
        const result = await HMSTextServiceProvider.generalCardDetector(generalCardDetectorReq);
        alert(JSON.stringify(result.text));
        console.log(JSON.stringify(result));
        document.getElementById("detectedGeneralCardImage").src = "data:image/jpeg;base64," + result.cardBitmap;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}