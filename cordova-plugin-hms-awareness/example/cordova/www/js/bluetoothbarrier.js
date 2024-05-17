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
    document.getElementById("addBluetoothBarrierKeeping").addEventListener("click", addBluetoothBarrierKeep);
    document.getElementById("addBluetoothBarrierConnecting").addEventListener("click", addBluetoothBarrierConnecting);
    document.getElementById("addBluetoothBarrierDisconnecting").addEventListener("click", addBluetoothBarrierDisconnecting);
}, false);

const addBluetoothBarrierKeep = () => {
    let barrierlLabel = "BluetoothBarrierKeep";
    let bluetoothStatus = AwarenessBarrier.BluetoothStatus.CONNECTED;
    let deviceType = AwarenessBarrier.BluetoothDevice.DEVICE_CAR;
    AwarenessBarrier.BluetoothBarrier.keep(deviceType, bluetoothStatus)
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
const addBluetoothBarrierConnecting = () => {
    let barrierlLabel = "BluetoothBarrierConnecting";
    let deviceType = AwarenessBarrier.BluetoothDevice.DEVICE_CAR;
    AwarenessBarrier.BluetoothBarrier.connecting(deviceType)
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
const addBluetoothBarrierDisconnecting = () => {
    let barrierlLabel = "BluetoothBarrierDisconnecting";
    let deviceType = AwarenessBarrier.BluetoothDevice.DEVICE_CAR;
    AwarenessBarrier.BluetoothBarrier.disconnecting(deviceType)
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch((err) => {
            alert(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
