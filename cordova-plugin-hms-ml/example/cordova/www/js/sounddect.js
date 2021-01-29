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
    document.getElementById("soundDectStart").addEventListener("click", () => soundDectStart());
    document.getElementById("soundDectStop").addEventListener("click", () => soundDectStop());
}, false);

async function soundDectStart() {
    var soundDectReq = {
        startType: true,
    };
    try {
        var res = await HMSVoiceServiceProvider.soundDectAnalyser(soundDectReq);
        if (res.eventName == "onSoundSuccessResult") {
            alert(JSON.stringify(res.soundType));
        }
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function soundDectStop() {
    var soundDectAnalyserInput = {
        startType: false,
    };
    try {
        alert(JSON.stringify(await HMSVoiceServiceProvider.soundDectAnalyser(soundDectAnalyserInput)));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
