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
    document.getElementById("livehandAnalyserStart").addEventListener("click", () => liveHandAnalyserStart());
    document.getElementById("livegestureanalyserStart").addEventListener("click", () => liveGestureanalyserStart());
    document.getElementById("liveSkeletonanalyserStart").addEventListener("click", () => liveSkeletonanalyserStart());
    document.getElementById("liveFaceanalyserStart").addEventListener("click", () => liveFaceanalyserStart());
    document.getElementById("destroy").addEventListener("click", () => destroy());
    document.getElementById("photo").addEventListener("click", () => photo());
}, false);
let mlFace = null;
let mlHand = null;
let mlGesture = null;

async function liveHandAnalyserStart() {
    mlHand = null;
    mlHand = new HMSMLBodyPlugin.liveEngineAnalyser("scene");
    var lensEngineReq = {
        analyzerName: HMSMLBodyPlugin.MLAnalyzerName.LIVEHAND,
        analyzerSetting: {
            sceneType: HMSMLBodyPlugin.HandkeyPointConfig.TYPE_ALL,
            maxHandResults: 2,
        },
        graphicSetting: {
            idPaintnewSetting: {
                color: HMSMLBodyPlugin.Colors.RED
            }
        }
    }
    await mlHand.startMLLive({ lensEngineReq });
    await mlHand.on(HMSMLBodyPlugin.Events.HAND_TRANSACTOR_ON_RESULT, (value) => {
        console.log(JSON.stringify(value));


    });
};
async function liveGestureanalyserStart() {
    mlGesture = null;
    mlGesture = new HMSMLBodyPlugin.gestureliveEngineAnalyser("scene");
    var lensEngineReq = {
        analyzerName: HMSMLBodyPlugin.MLAnalyzerName.LIVEGESTURE,
        graphicSetting: {
            idPaintnewSetting: {
                color: HMSMLBodyPlugin.Colors.RED
            }
        }
    }
    await mlGesture.startMLLive({ lensEngineReq });
    await mlGesture.on(HMSMLBodyPlugin.Events.GESTURE_TRANSACTOR_ON_RESULT, (value) => {
        console.log(JSON.stringify(value));

    });
};
async function liveSkeletonanalyserStart() {
    mlFace = null;
    mlFace = new HMSMLBodyPlugin.gestureliveEngineAnalyser("scene");
    var lensEngineReq = {
        analyzerName: HMSMLBodyPlugin.MLAnalyzerName.LIVESKELETON,
        graphicSetting: {
            idPaintnewSetting: {
                color: HMSMLBodyPlugin.Colors.RED
            }
        }
    }
    await mlFace.startMLLive({ lensEngineReq });
    await mlFace.on(HMSMLBodyPlugin.Events.SKELETON_TRANSACTOR_ON_RESULT, (value) => {
        console.log(JSON.stringify(value));

    });
};

async function liveFaceanalyserStart() {
    mlFace = null;
    mlFace = new HMSMLBodyPlugin.liveEngineAnalyser("scene");
    var lensEngineReq = {
        analyzerName: HMSMLBodyPlugin.MLAnalyzerName.LIVEFACE,
        graphicSetting: {
            idPaintnewSetting: {
                color: HMSMLBodyPlugin.Colors.RED
            }
        }
    }
    await mlFace.startMLLive({ lensEngineReq });
    await mlFace.on(HMSMLBodyPlugin.Events.FACE_TRANSACTOR_ON_RESULT, (value) => {
        console.log(JSON.stringify(value));
    });
};

function destroy() {
    HMSMLBodyPlugin.destroy(
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
async function photo() {
    try {
        const result = await HMSMLBodyPlugin.photograph();
        document.getElementById("image").src = "data:image/jpeg;base64," + result.bitmap;
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }

}