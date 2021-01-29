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
import { Component, OnInit } from '@angular/core';
import { BluetoothBarrier, BluetoothStatus, BlueoothDevice } from '@hmscore/ionic-native-hms-awareness/ngx';

@Component({
    selector: 'app-bluetooth-barrier',
    templateUrl: './bluetooth-barrier.page.html',
    styleUrls: ['./bluetooth-barrier.page.scss'],
})
export class BluetoothBarrierPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    public addBluetoothBarrierKeep() {
        let barrierlLabel = "BluetoothBarrierKeep";
        let bluetoothStatus = BluetoothStatus.CONNECTED;
        let deviceType = BlueoothDevice.DEVICE_CAR;
        BluetoothBarrier.keep(deviceType, bluetoothStatus)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
    public addBluetoothBarrierConnecting() {
        let barrierlLabel = "BluetoothBarrierConnecting";
        let deviceType = BlueoothDevice.DEVICE_CAR;
        BluetoothBarrier.connecting(deviceType)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
    public addBluetoothBarrierDisconnecting() {
        let barrierlLabel = "BluetoothBarrierDisconnecting";
        let deviceType = BlueoothDevice.DEVICE_CAR;
        BluetoothBarrier.disconnecting(deviceType)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
}
