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
    document.getElementById("probabilityDetect").addEventListener("click", () => getremoteLangDetection(1));
    document.getElementById("firstBestDetect").addEventListener("click", () => getremoteLangDetection(0));
    document.getElementById("localLangDetect").addEventListener("click", () => getlocalLangDetection());

    document.getElementById("stopTranslatorService").addEventListener("click", () => stopTranslatorService());
}, false);

async function getlocalLangDetection() {
    var localLangDetectionReq = {
        sourceText: document.getElementById("sourceLangText").value,
        trustedThreshold: 0.01
    };
    try {
        var langDetectResult = await HMSVoiceServiceProvider.localLangDetection(localLangDetectionReq);
        document.getElementById("localResult").value = JSON.stringify(langDetectResult);
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function getremoteLangDetection(taskModes) {
    var mode = taskModes;
    var remoteLangDetectionReq = {
        sourceText: document.getElementById("sourceLangText").value,
        taskMode: taskModes,
        trustedThreshold: 0.6,
    };
    try {
        var langDetectResult = await HMSVoiceServiceProvider.remoteLangDetection(remoteLangDetectionReq);
        if (mode == 0) {
            document.getElementById("result").value = JSON.stringify(langDetectResult);
        } else if (mode == 1) {
            document.getElementById("langCode").value = JSON.stringify(langDetectResult.result[0].langCode);
            document.getElementById("probability").value = JSON.stringify(langDetectResult.result[0].probability);
        }
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function stopTranslatorService() {
    try {
        alert(await HMSVoiceServiceProvider.stopLangDetectionService());
    } catch (ex) {
        alert(JSON.stringify(Ex));
    }
}
