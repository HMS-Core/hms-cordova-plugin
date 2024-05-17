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

import { Component, OnInit } from '@angular/core';
declare var AwarenessBarrier;
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
    let headsetStatus = AwarenessBarrier.HeadsetStatus.CONNECTED;
    let barrierLabel = "headsetBarrierKeeping";
    AwarenessBarrier.HeadsetBarrier.keeping(headsetStatus)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addHeadsetBarrierKeepingCustom() {
    let headsetStatus = AwarenessBarrier.HeadsetStatus.DISCONNECTED;
    let barrierLabel = "headsetBarrierKeepingCustom";
    AwarenessBarrier.HeadsetBarrier.keeping(headsetStatus)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addHeadsetBarrierConnecting() {
    let barrierLabel = "headsetBarrierConnecting";
    AwarenessBarrier.HeadsetBarrier.connecting()
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addHeadsetBarrierDisconnecting() {
    let barrierLabel = "headsetBarrierDisconnecting";
    AwarenessBarrier.HeadsetBarrier.disconnecting()
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
}
