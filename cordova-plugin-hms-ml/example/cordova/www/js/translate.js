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
    document.getElementById("remoteAllLang").addEventListener("click", () => remoteAllLang());
    document.getElementById("localAllLang").addEventListener("click", () => localAllLang());
    document.getElementById("remoteTranslator").addEventListener("click", () => remoteTranslator());
    document.getElementById("localTranslator").addEventListener("click", () => localTranslator());
    document.getElementById("downloadlocal").addEventListener("click", () => downloadlocal());
    document.getElementById("deletelocal").addEventListener("click", () => deletelocal());
    document.getElementById("stopTranslatorService").addEventListener("click", () => stopTranslatorService());
}, false);
async function remoteTranslator() {
    var remotetranslateReq = {
        targetLangCode: "zh",
        sourceLangCode: "",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.remoteTranslator(remotetranslateReq);
        document.getElementById("textView2").value = result;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function localTranslator() {
    var localtranslateReq = {
        targetLangCode: "zh",
        sourceLangCode: "en",
        sourceText: document.getElementById("textView1").value,
    };
    try {
        const result = await HMSVoiceServiceProvider.localTranslator(localtranslateReq);
        document.getElementById("textView2").value = result;
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function downloadlocal() {
    var dowloadTranslateReq = {
        langcode: "zh"
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorDownloadModel(dowloadTranslateReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function deletelocal() {
    var deleteTranslateReq = {
        langcode: "zh"
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorDeleteModel(deleteTranslateReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function remoteAllLang() {
    var remoteAllLangReq = {
        useSync: "true"
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorRemoteAllLang(remoteAllLangReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function localAllLang() {
    var localAllLangReq = {
        useSync: "false"
    };
    try {
        const result = await HMSVoiceServiceProvider.translatorLocalAllLang(localAllLangReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function stopTranslatorService() {
    try {
        alert(await HMSVoiceServiceProvider.stopTranslatorService());
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
