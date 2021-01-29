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
    document.getElementById("asrAnalyserStart").addEventListener("click", () => asrAnalyserStart());
}, false);

function asrAnalyserStart() {
    var asrReq = {
        language: HMSMLKit.LANGUAGE.LAN_EN_US,
        feature: HMSMLKit.FEATURE.FEATURE_ALLINONE
    };
    document.getElementById('servicesDiv').style.backgroundColor = 'Red';
    HMSVoiceServiceProvider.asrAnalyser(
        asrReq,
        function (res) {
            console.log(JSON.stringify(res));
            if (res.eventName == "onResults") {
                alert(res.result);
                document.getElementById('servicesDiv').style.backgroundColor = 'honeydew';
            }
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
