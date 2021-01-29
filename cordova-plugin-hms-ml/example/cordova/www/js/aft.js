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
var $audioResult = null;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("aftAnalyserStart").addEventListener("click", () => aftAnalyserStart());
    document.getElementById("getAudioFilePicker").addEventListener("click", () => getAudioFilePicker());
}, false);

function getAudioFilePicker() {
    (async () => {
        const file = await chooser.getFile();
        $audioResult = file.uri;
    })();
}

async function aftAnalyserStart() {
    var aftReq = {
        audioPath: $audioResult,
        aftSetting: {
            languageCode: "en-US",
            punctuationEnabled: true,
            wordTimeOffsetEnabled: true,
            sentenceTimeOffsetEnabled: true
        }
    };
    try {
        let result = await HMSVoiceServiceProvider.aftAnalyser(aftReq);
        document.getElementById("textViewAFT").value = JSON.stringify(result.text);
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}