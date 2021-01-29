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
import { Router } from '@angular/router';
import { BarrierManager } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
  selector: 'app-barrier-sample',
  templateUrl: './barrier-sample.page.html',
  styleUrls: ['./barrier-sample.page.scss'],
})
export class BarrierSamplePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goHeadsetBarrier() {
    this.router.navigate(['headset-barrier']);
  }
  goBluetoohBarrier() {
    this.router.navigate(['bluetooth-barrier']);
  }
  goAmbientLightBarrier() {
    this.router.navigate(['ambientlight-barrier']);
  }
  goBeaconBarrier() {
    this.router.navigate(['beacon-barrier']);
  }
  goBehaviorBarrier() {
    this.router.navigate(['behavior-barrier']);
  }
  goLocationBarrier() {
    this.router.navigate(['location-barrier']);
  }
  goScreenBarrier() {
    this.router.navigate(['screen-barrier']);
  }
  goWifiBarrier() {
    this.router.navigate(['wifi-barrier']);
  }
  goTimeBarrier() {
    this.router.navigate(['time-barrier']);
  }
  goCombinationBarrier() {
    this.router.navigate(['barrier-combination']);
  }
  public deleteAllBarriersfunc() {
    BarrierManager.deleteAllBarriers(
      function (res) {
        console.log(JSON.stringify(res))
      }, function (err) { console.log(JSON.stringify(err)); }
    );
  }
  public unRegisterReceiverfunc() {
    BarrierManager.unRegisterReceiver(
      function (res) {
        console.log(JSON.stringify(res))
      }, function (err) { console.log(JSON.stringify(err)); }
    );
  }

  public deleteBarrierWithLabelsfunc() {
    let barrierLabels = ["WifiBarrierKeeping", "WifiBarrierConnecting"];
    BarrierManager.deleteBarrierWithLabels(
      function (res) {
        console.log(JSON.stringify(res))
      }, function (err) {
        console.log(JSON.stringify(err));
      }, barrierLabels
    );
  }
}
