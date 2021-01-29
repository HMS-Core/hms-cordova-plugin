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
document.addEventListener("deviceready", function () {
    document.getElementById("ttsAnalyserStart1").addEventListener("click", () => ttsAnalyserStart("Hello world!"));
    document.getElementById("ttsAnalyserStart2").addEventListener("click", () => ttsAnalyserStart("How are you?"));
    document.getElementById("ttsAnalyserStart3").addEventListener("click", () => ttsAnalyserStart("Welcome to TTS Application"));
    document.getElementById("ttsAnalyserStart4").addEventListener("click", () => ttsAnalyserStart("How can I get to Taksim?"));
    document.getElementById("ttsOfflineAnalyser").addEventListener("click", () => ttsOfflineAnalyser());
    document.getElementById("ttsAnalyserPause").addEventListener("click", () => ttsAnalyserPause());
    document.getElementById("ttsAnalyserResume").addEventListener("click", () => ttsAnalyserResume());
    document.getElementById("ttsAnalyserStop").addEventListener("click", () => ttsAnalyserStop());
}, false);

async function ttsAnalyserStart(textToSpeech) {
    var ttsReq = {
        text: textToSpeech,
        mlConfigs: {
            language: HMSMLKit.MLTtsConstants.TTS_EN_US,
            person: HMSMLKit.MLTtsConstants.TTS_SPEAKER_FEMALE_EN,
            speed: 1.0,
            volume: 1.0,
        },
        queuingMode: 0,

    };
    try {
        await HMSVoiceServiceProvider.ttsAnalyser(ttsReq);
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function ttsOfflineAnalyser() {
    var ttsReq = {
        text: "une mure mure murmure au mur",
        mlConfigs: {
            language: HMSMLKit.MLTtsConstants.TTS_LAN_FR_FR,
            person: HMSMLKit.MLTtsConstants.TTS_SPEAKER_OFFLINE_FR_FR_FEMALE_BEE,
            speed: 1.0,
            volume: 1.0,
            synthesizeMode: HMSMLKit.MLTtsConstants.TTS_OFFLINE_MODE
            
        },
        queuingMode: 0,

    };
    try {
        await HMSVoiceServiceProvider.ttsOfflineAnalyser(ttsReq);
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function ttsAnalyserPause() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserPause());
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function ttsAnalyserResume() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserResume());
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}

async function ttsAnalyserStop() {
    try {
        alert(await HMSVoiceServiceProvider.ttsAnalyserStop());
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
