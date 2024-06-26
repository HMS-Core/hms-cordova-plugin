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
  selector: 'app-behavior-barrier',
  templateUrl: './behavior-barrier.page.html',
  styleUrls: ['./behavior-barrier.page.scss'],
})
export class BehaviorBarrierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public addBehaviorBarrierKeeping() {
    let barrierlLabel = "BehaviorBarrierKeeping";
    AwarenessBarrier.BehaviorBarrier.keeping(AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_WALKING, AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_STILL)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addBehaviorBarrierBeginning() {
    let barrierlLabel = "BehaviorBarrierBeginning";
    AwarenessBarrier.BehaviorBarrier.beginning(AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_WALKING, AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_STILL)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addBehaviorBarrierEnding() {
    let barrierlLabel = "BehaviorBarrierEnding";
    AwarenessBarrier.BehaviorBarrier.ending(AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_WALKING, AwarenessBarrier.BehaviorBarrierConstant.BEHAVIOR_STILL)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }

}
