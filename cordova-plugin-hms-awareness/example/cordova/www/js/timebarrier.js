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

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addTimeBarrierDuringPeriodOfDay").addEventListener("click", addTimeBarrierDuringPeriodOfDay);
    document.getElementById("addTimeBarrierDuringPeriodOfWeek").addEventListener("click", addTimeBarrierDuringPeriodOfWeek);
    document.getElementById("addTimeBarrierDuringTimePeriod").addEventListener("click", addTimeBarrierDuringTimePeriod);
    document.getElementById("addTimeBarrierInTimeCategory").addEventListener("click", addTimeBarrierInTimeCategory);
    document.getElementById("addTimeBarrierInSunriseOrSunsetPeriod").addEventListener("click", addTimeBarrierInSunriseOrSunsetPeriod);
}, false);

const oneHourMilliSecond = 60 * 60 * 1000;

function addTimeBarrierDuringPeriodOfDay() {
    let barrierlLabel = "TimeBarrierDuringPeriodOfDay";
    let timeZone;
    let startTimeOfDay = 11 * oneHourMilliSecond;
    let stopTimeOfDay = 12 * oneHourMilliSecond;
    AwarenessBarrier.TimeBarrier.duringPeriodOfDay(timeZone, startTimeOfDay, stopTimeOfDay)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}

function addTimeBarrierDuringPeriodOfWeek() {
    let barrierlLabel = "TimeBarrierDuringPeriodOfWeek";
    let dayCode = AwarenessBarrier.TimeBarrierConstants.THURSDAY_CODE;
    let timeZone;
    let startTimeOfSpecifiedDay = 11 * oneHourMilliSecond;
    let stopTimeOfSpecifiedDay = 12 * oneHourMilliSecond;
    AwarenessBarrier.TimeBarrier.duringPeriodOfWeek(dayCode, timeZone, startTimeOfSpecifiedDay, stopTimeOfSpecifiedDay)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addTimeBarrierDuringTimePeriod() {
    let barrierlLabel = "TimeBarrierDuringTimePeriod";
    const tenSecondsMillis = 10 * 1000;
    let startTimeStamp = Date.now();
    let stopTimeStamp = startTimeStamp + tenSecondsMillis;
    AwarenessBarrier.TimeBarrier.duringTimePeriod(startTimeStamp, stopTimeStamp)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addTimeBarrierInTimeCategory() {
    let barrierlLabel = "TimeBarrierInTimeCategory";
    let timeCategory = AwarenessBarrier.TimeBarrierConstants.TIME_CATEGORY_WEEKEND;
    AwarenessBarrier.TimeBarrier.inTimeCategory(timeCategory)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
function addTimeBarrierInSunriseOrSunsetPeriod() {
    let barrierlLabel = "TimeBarrierInSunriseOrSunsetPeriod";
    let timeInstant = AwarenessBarrier.TimeBarrierConstants.SUNSET_CODE;
    let startTimeOffset = -oneHourMilliSecond;
    let stopTimeOffset = oneHourMilliSecond;
    AwarenessBarrier.TimeBarrier.inSunriseOrSunsetPeriod(timeInstant, startTimeOffset, stopTimeOffset)
        .subscribe((data) => {
            console.log(JSON.stringify(data));
        }).catch((err) => {
            console.log(JSON.stringify(err));
        }).run(barrierlLabel);
}
