/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("goHeadsetBarrier").addEventListener("click", () => { window.location = "headsetbarrier.html" });
    document.getElementById("goBluetoohBarrier").addEventListener("click", () => { window.location = "bluetoothbarrier.html" });
    document.getElementById("goAmbientLightBarrier").addEventListener("click", () => { window.location = "ambientLight.html" });
    document.getElementById("goBeaconBarrier").addEventListener("click", () => { window.location = "beaconbarrier.html" });
    document.getElementById("goBehaviorBarrier").addEventListener("click", () => { window.location = "behaviorbarrier.html" });
    document.getElementById("goLocationBarrier").addEventListener("click", () => { window.location = "locationbarrier.html" });
    document.getElementById("goScreenBarrier").addEventListener("click", () => { window.location = "screenbarrier.html" });
    document.getElementById("goWifiBarrier").addEventListener("click", () => { window.location = "wifibarrier.html" });
    document.getElementById("goTimeBarrier").addEventListener("click", () => { window.location = "timebarrier.html" });
    document.getElementById("goCombinationBarrier").addEventListener("click", () => { window.location = "barrierCombination.html" });
    document.getElementById("deleteAllBarriers").addEventListener("click", deleteAllBarriers);
    document.getElementById("deleteBarrierWithLabels").addEventListener("click", deleteBarrierWithLabels);
    document.getElementById("unRegisterReceiver").addEventListener("click", unRegisterReceiver);
}, false);


const deleteAllBarriers = () => {
    AwarenessBarrier.deleteAllBarriers(
        (res) => {
            alert(JSON.stringify(res));
            console.log(JSON.stringify(res));
        }, (err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }
    );
}
const unRegisterReceiver = () => {
    AwarenessBarrier.unRegisterReceiver(
        (res) => {
            alert(JSON.stringify(res));
            console.log(JSON.stringify(res));
        }, (err) => { console.log(JSON.stringify(err)); }
    );
}

const deleteBarrierWithLabels = () => {
    let barrierLabels = ["headsetBarrierKeeping"];
    AwarenessBarrier.deleteBarrierWithLabels(
        (res) => {
            alert(JSON.stringify(res));
            console.log(JSON.stringify(res))
        }, (err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }, barrierLabels
    );
}