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
import { HeadsetBarrier, HeadsetStatus, BarrierManager } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
  selector: 'app-headset-barrier',
  templateUrl: './headset-barrier.page.html',
  styleUrls: ['./headset-barrier.page.scss'],
})
export class HeadsetBarrierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public addHeadsetBarrierKeeping() {
    let headsetStatus = HeadsetStatus.CONNECTED;
    let barrierLabel = "headsetBarrierKeeping";
    HeadsetBarrier.keeping(headsetStatus)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addHeadsetBarrierKeepingCustom() {
    let headsetStatus = HeadsetStatus.DISCONNECTED;
    let barrierLabel = "headsetBarrierKeepingCustom";
    HeadsetBarrier.keeping(headsetStatus)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addHeadsetBarrierConnecting() {
    let barrierLabel = "headsetBarrierConnecting";
    HeadsetBarrier.connecting()
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addHeadsetBarrierDisconnecting() {
    let barrierLabel = "headsetBarrierDisconnecting";
    HeadsetBarrier.disconnecting()
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public deleteBarrierWithLabelsfunc() {
    let barrierLabels = ["headsetBarrierKeepingCustom"];
    BarrierManager.deleteBarrierWithLabels(
      function (res) {
        console.log(JSON.stringify(res))
      }, function (err) {
        console.log(JSON.stringify(err));
      }, barrierLabels
    );
  }

}
