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
  selector: 'app-location-barrier',
  templateUrl: './location-barrier.page.html',
  styleUrls: ['./location-barrier.page.scss'],
})
export class LocationBarrierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public addLocationBarrierEnter() {
    let barrierlLabel = "LocationBarrierEnter";
    let latitude = 40.909520;
    let longitude = 29.169720;
    let radius = 1000.0;
    AwarenessBarrier.LocationBarrier.enter(latitude, longitude, radius)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addLocationBarrierStay() {
    let barrierlLabel = "LocationBarrierStay";
    let latitude = 40.909520;
    let longitude = 29.169720;
    let radius = 1000.0;
    let mTimeOfDuration = 1000;
    AwarenessBarrier.LocationBarrier.stay(latitude, longitude, radius, mTimeOfDuration)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addLocationBarrierExit() {
    let barrierlLabel = "LocationBarrierExit";
    let latitude = 40.909520;
    let longitude = 29.169720;
    let radius = 1000.0;
    AwarenessBarrier.LocationBarrier.exit(latitude, longitude, radius)
      .subscribe((data) => {
        alert(JSON.stringify(data));
        console.log(JSON.stringify(data));
      }).catch((err) => {
        alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }


}
