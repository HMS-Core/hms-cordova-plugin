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
    document.getElementById("addWifiBarrierKeeping").addEventListener("click", addWifiBarrierKeeping);
    document.getElementById("addWifiBarrierConnecting").addEventListener("click", addWifiBarrierConnecting);
    document.getElementById("addWifiBarrierDisconnecting").addEventListener("click", addWifiBarrierDisconnecting);
    document.getElementById("addWifiBarrierEnabling").addEventListener("click", addWifiBarrierEnabling);
    document.getElementById("addWifiBarrierDisabling").addEventListener("click", addWifiBarrierDisabling);
}, false);

const addWifiBarrierKeeping = () => {
    let barrierlLabel = "WifiBarrierKeeping";
    let wifiStatus = AwarenessBarrier.WifiStatus.CONNECTED;
    let bssid = "";
    let ssid = "";
    AwarenessBarrier.WifiBarrier.keeping(wifiStatus, bssid, ssid)
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
const addWifiBarrierConnecting = () => {
    let barrierlLabel = "WifiBarrierConnecting";
    let bssid = "";
    let ssid = "";
    AwarenessBarrier.WifiBarrier.connecting(bssid, ssid)
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
const addWifiBarrierDisconnecting = () => {
    let barrierlLabel = "WifiBarrierDisconnecting";
    let bssid = "";
    let ssid = "";
    AwarenessBarrier.WifiBarrier.disconnecting(bssid, ssid)
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
const addWifiBarrierEnabling = () => {
    let barrierlLabel = "WifiBarrierEnabling";
    AwarenessBarrier.WifiBarrier.enabling()
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
const addWifiBarrierDisabling = () => {
    let barrierlLabel = "WifiBarrierDisabling";
    AwarenessBarrier.WifiBarrier.disabling()
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}


