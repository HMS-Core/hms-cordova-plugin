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
    document.getElementById("addScreenBarrierKeeping").addEventListener("click", addScreenBarrierKeeping);
    document.getElementById("addScreenBarrierOn").addEventListener("click", addScreenBarrierOn);
    document.getElementById("addScreenBarrierOff").addEventListener("click", addScreenBarrierOff);
    document.getElementById("addScreenBarrierUnlock").addEventListener("click", addScreenBarrierUnlock);
    document.getElementById("stopBackgroundService").addEventListener("click", stopBackgroundService);
}, false);

function stopBackgroundService(){
	AwarenessBarrier.stopBackgroundService();
}

function addScreenBarrierKeeping() {
    let barrierlLabel = "ScreenBarrierKeeping";
    let screenStatus = AwarenessBarrier.ScreenStatus.SCREENON;
	AwarenessBarrier.setBackgroundFile('www/background.js');
    AwarenessBarrier.ScreenBarrier.keeping(screenStatus).runInBackground(barrierlLabel);
}
function addScreenBarrierOn() {
    let barrierlLabel = "ScreenBarrierOn";
    AwarenessBarrier.ScreenBarrier.screenOn()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addScreenBarrierOff() {
    let barrierlLabel = "ScreenBarrierOff";
    AwarenessBarrier.ScreenBarrier.screenOff()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addScreenBarrierUnlock() {
    let barrierlLabel = "ScreenBarrierUnlock";
    AwarenessBarrier.ScreenBarrier.screenUnlock()
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
