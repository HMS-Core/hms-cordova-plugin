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
import { WifiBarrier, WifiStatus } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
    selector: 'app-wifi-barrier',
    templateUrl: './wifi-barrier.page.html',
    styleUrls: ['./wifi-barrier.page.scss'],
})
export class WifiBarrierPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    public addWifiBarrierKeeping() {
        let barrierlLabel = "WifiBarrierKeeping";
        let wifiStatus = WifiStatus.CONNECTED;
        let bssid = "";
        let ssid = "";
        WifiBarrier.keeping(wifiStatus, bssid, ssid)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
    public addWifiBarrierConnecting() {
        let barrierlLabel = "WifiBarrierConnecting";
        let bssid = "";
        let ssid = "";
        WifiBarrier.connecting(bssid, ssid)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
    public addWifiBarrierDisconnecting() {
        let barrierlLabel = "WifiBarrierDisconnecting";
        let bssid = "";
        let ssid = "";
        WifiBarrier.disconnecting(bssid, ssid)
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
    public addWifiBarrierEnabling() {
        let barrierlLabel = "WifiBarrierEnabling";
        WifiBarrier.enabling()
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
    public addWifiBarrierDisabling() {
        let barrierlLabel = "WifiBarrierDisabling";
        WifiBarrier.disabling()
            .subscribe((data) => {
                console.log(JSON.stringify(data));
            }).catch((err) => {
                console.log(JSON.stringify(err));
            }).run(barrierlLabel);
    }
}
