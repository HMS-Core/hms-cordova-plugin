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
    document.getElementById("goHeadsetBarrier").addEventListener("click", function () { window.location = "headsetbarrier.html" });
    document.getElementById("goBluetoohBarrier").addEventListener("click", function () { window.location = "bluetoothbarrier.html" });
    document.getElementById("goAmbientLightBarrier").addEventListener("click", function () { window.location = "ambientLight.html" });
    document.getElementById("goBeaconBarrier").addEventListener("click", function () { window.location = "beaconbarrier.html" });
    document.getElementById("goBehaviorBarrier").addEventListener("click", function () { window.location = "behaviorbarrier.html" });
    document.getElementById("goLocationBarrier").addEventListener("click", function () { window.location = "locationbarrier.html" });
    document.getElementById("goScreenBarrier").addEventListener("click", function () { window.location = "screenbarrier.html" });
    document.getElementById("goWifiBarrier").addEventListener("click", function () { window.location = "wifibarrier.html" });
    document.getElementById("goTimeBarrier").addEventListener("click", function () { window.location = "timebarrier.html" });
    document.getElementById("goCombinationBarrier").addEventListener("click", function () { window.location = "barrierCombination.html" });
    document.getElementById("deleteAllBarriers").addEventListener("click", deleteAllBarriers);
    document.getElementById("deleteBarrierWithLabels").addEventListener("click", deleteBarrierWithLabels);
    document.getElementById("unRegisterReceiver").addEventListener("click", unRegisterReceiver);
}, false);


function deleteAllBarriers() {
    AwarenessBarrier.deleteAllBarriers(
        function (res) {
            console.log(JSON.stringify(res))
        }, function (err) { console.log(JSON.stringify(err)); }
    );
}
function unRegisterReceiver() {
    AwarenessBarrier.unRegisterReceiver(
        function (res) {
            console.log(JSON.stringify(res))
        }, function (err) { console.log(JSON.stringify(err)); }
    );
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