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
    document.getElementById("addBeaconBarrierKeep").addEventListener("click", addBeaconBarrierKeep);
    document.getElementById("addBeaconBarrierDiscover").addEventListener("click", addBeaconBarrierDiscover);
    document.getElementById("addBeaconBarrierMissed").addEventListener("click", addBeaconBarrierMissed);
}, false);

function addBeaconBarrierKeep() {
    let barrierlLabel = "BeaconBarrierKeep";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    AwarenessBarrier.BeaconBarrier.keep(namespace, type, content)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addBeaconBarrierDiscover() {
    let barrierlLabel = "BeaconBarrierDiscover";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    AwarenessBarrier.BeaconBarrier.discover(namespace, type, content)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addBeaconBarrierMissed() {
    let barrierlLabel = "BeaconBarrierMissed";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    AwarenessBarrier.BeaconBarrier.missed(namespace, type, content)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
