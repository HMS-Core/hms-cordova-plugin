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
  selector: 'app-ambientlight-barrier',
  templateUrl: './ambientlight-barrier.page.html',
  styleUrls: ['./ambientlight-barrier.page.scss'],
})
export class AmbientlightBarrierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public addAmbientLightBarrierRange() {
    let barrierLabel = "AmbientLightBarrierRange";
    let lowLuxValue = 500.0;
    let highLuxValue = 2500.0;
    AwarenessBarrier.AmbientLightBarrier.range(lowLuxValue, highLuxValue)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addAmbientLightBarrierAbove() {
    let barrierLabel = "AmbientLightBarrierAbove";
    let highLuxValue = 2500.0;
    AwarenessBarrier.AmbientLightBarrier.above(highLuxValue)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
  public addAmbientLightBarrierBelow() {
    let barrierLabel = "AmbientLightBarrierBelow";
    let lowLuxValue = 500.0;
    AwarenessBarrier.AmbientLightBarrier.below(lowLuxValue)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierLabel);
  }
}