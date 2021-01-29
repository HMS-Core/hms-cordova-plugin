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
import { TimeBarrier, TimeBarrierConstants } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
  selector: 'app-time-barrier',
  templateUrl: './time-barrier.page.html',
  styleUrls: ['./time-barrier.page.scss'],
})
export class TimeBarrierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addTimeBarrierDuringPeriodOfDay() {
    const oneHourMilliSecond = 60 * 60 * 1000;
    let barrierlLabel = "TimeBarrierDuringPeriodOfDay";
    let timeZone;
    let startTimeOfDay = 11 * oneHourMilliSecond;
    let stopTimeOfDay = 12 * oneHourMilliSecond;
    TimeBarrier.duringPeriodOfDay(timeZone, startTimeOfDay, stopTimeOfDay)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }

  public addTimeBarrierDuringPeriodOfWeek() {
    const oneHourMilliSecond = 60 * 60 * 1000;
    let barrierlLabel = "TimeBarrierDuringPeriodOfWeek";
    let dayCode = TimeBarrierConstants.THURSDAY_CODE;
    let timeZone;
    let startTimeOfSpecifiedDay = 11 * oneHourMilliSecond;
    let stopTimeOfSpecifiedDay = 12 * oneHourMilliSecond;
    TimeBarrier.duringPeriodOfWeek(dayCode, timeZone, startTimeOfSpecifiedDay, stopTimeOfSpecifiedDay)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addTimeBarrierDuringTimePeriod() {
    let barrierlLabel = "TimeBarrierDuringTimePeriod";
    const tenSecondsMillis = 10 * 1000;
    let startTimeStamp = Date.now();
    let stopTimeStamp = startTimeStamp + tenSecondsMillis;
    TimeBarrier.duringTimePeriod(startTimeStamp, stopTimeStamp)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addTimeBarrierInTimeCategory() {
    let barrierlLabel = "TimeBarrierInTimeCategory";
    let timeCategory = TimeBarrierConstants.TIME_CATEGORY_WEEKEND;
    TimeBarrier.inTimeCategory(timeCategory)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addTimeBarrierInSunriseOrSunsetPeriod() {
    const oneHourMilliSecond = 60 * 60 * 1000;
    let barrierlLabel = "TimeBarrierInSunriseOrSunsetPeriod";
    let timeInstant = TimeBarrierConstants.SUNSET_CODE;
    let startTimeOffset = -oneHourMilliSecond;
    let stopTimeOffset = oneHourMilliSecond;
    TimeBarrier.inSunriseOrSunsetPeriod(timeInstant, startTimeOffset, stopTimeOffset)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }

}
