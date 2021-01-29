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
    document.getElementById("addHeadsetBarrierKeeping").addEventListener("click", addHeadsetBarrierKeeping);
    document.getElementById("addHeadsetBarrierKeepingCustom").addEventListener("click", addHeadsetBarrierKeepingCustom);
    document.getElementById("addHeadsetBarrierConnecting").addEventListener("click", addHeadsetBarrierConnecting);
    document.getElementById("addHeadsetBarrierDisconnecting").addEventListener("click", addHeadsetBarrierDisconnecting);
    document.getElementById("deleteBarrierWithLabels").addEventListener("click", deleteBarrierWithLabels);
}, false);

function addHeadsetBarrierKeeping() {
    let headsetStatus = AwarenessBarrier.HeadsetStatus.CONNECTED;
    AwarenessBarrier.setBackgroundFile('www/background.js');
    let barrierLabel = "headsetBarrierKeeping";
    AwarenessBarrier.HeadsetBarrier.keeping(headsetStatus).runInBackground(barrierLabel);
}
function addHeadsetBarrierKeepingCustom() {
    let headsetStatus = AwarenessBarrier.HeadsetStatus.DISCONNECTED;
    let barrierLabel = "headsetBarrierKeepingCustom";
    AwarenessBarrier.HeadsetBarrier.keeping(headsetStatus)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
function addHeadsetBarrierConnecting() {
    let barrierLabel = "headsetBarrierConnecting";
    AwarenessBarrier.HeadsetBarrier.connecting()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
function addHeadsetBarrierDisconnecting() {
    let barrierLabel = "headsetBarrierDisconnecting";
    AwarenessBarrier.HeadsetBarrier.disconnecting()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierLabel);
}
function deleteBarrierWithLabels() {
    let barrierLabels = ["headsetBarrierKeeping"];
    AwarenessBarrier.deleteBarrierWithLabels(
        function (res) {
            console.log(JSON.stringify(res))
        }, function (err) {
            console.log(JSON.stringify(err));
        }, barrierLabels
    );
}