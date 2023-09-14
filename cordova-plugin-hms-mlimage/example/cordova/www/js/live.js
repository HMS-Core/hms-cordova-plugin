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
var $audioResult = null;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("liveAnalyserStart").addEventListener("click", () => liveAnalyserStart());
    document.getElementById("destroy").addEventListener("click", () => destroy());
    document.getElementById("photo").addEventListener("click", () => photo());
}, false);

let mlClassification = null;

async function liveAnalyserStart() {
    mlClassification = null;
    mlClassification = new HMSMLImagePlugin.liveEngineAnalyser("scene");
    var lensEngineReq = {
        analyzerName: HMSMLImagePlugin.MLAnalyzerName.LIVECLASSIFICATION
    }
    await mlClassification.startMLLive({ lensEngineReq });
    await mlClassification.on(HMSMLImagePlugin.Events.CLASSIFICATION_TRANSACTOR_ON_RESULT, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById("name").value = value[0].name;
    });
};

async function destroy() {
    try {
        await HMSMLImagePlugin.destroy();
    } catch (Ex) {
        alert("destroy error: " + JSON.stringify(Ex));
    }
}
async function photo() {
    try {
        const result = await HMSMLImagePlugin.photograph();
        document.getElementById("image").src = "data:image/jpeg;base64," + result.bitmap;
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}