/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
document.addEventListener('deviceready', onDeviceReady, false);
const activityConversionUpdateRequests = [];
const activityConversions = [];
let activityService;
let conversionTypeSelect = document.getElementById("conversionTypeSelect");
let activityTypeSelect = document.getElementById("activityTypeSelect");
let conversionListLog = document.getElementById("conversionListLog");
let conversionEventLog = document.getElementById("conversionEventLog");

function onDeviceReady() {
    document.getElementById("createActivityConversionUpdates").onclick = createActivityConversionUpdates;
    document.getElementById("deleteActivityConversionUpdates").onclick = deleteActivityConversionUpdates;
    document.getElementById("addToList").onclick = addToList;
    activityService = HMSLocation.getActivityIdentificationService();
}

function addToList() {
    let currentConversionType;
    let currentActivityType;
    let selectedValue = conversionTypeSelect.options[conversionTypeSelect.selectedIndex].value;
    if (selectedValue == HMSLocation.ConversionType.ENTER_ACTIVITY_CONVERSION) {
        currentConversionType = HMSLocation.ConversionType.ENTER_ACTIVITY_CONVERSION;
    } else {
        currentConversionType = HMSLocation.ConversionType.EXIT_ACTIVITY_CONVERSION;
    }
    selectedValue = activityTypeSelect.options[activityTypeSelect.selectedIndex].value;
    if (selectedValue == HMSLocation.ActivityType.VEHICLE) {
        currentActivityType = HMSLocation.ActivityType.VEHICLE;
    } else if (selectedValue == HMSLocation.ActivityType.BIKE) {
        currentActivityType = HMSLocation.ActivityType.BIKE;
    } else if (selectedValue == HMSLocation.ActivityType.FOOT) {
        currentActivityType = HMSLocation.ActivityType.FOOT;
    } else if (selectedValue == HMSLocation.ActivityType.STILL) {
        currentActivityType = HMSLocation.ActivityType.STILL;
    } else if (selectedValue == HMSLocation.ActivityType.OTHERS) {
        currentActivityType = HMSLocation.ActivityType.OTHERS;
    } else if (selectedValue == HMSLocation.ActivityType.WALKING) {
        currentActivityType = HMSLocation.ActivityType.WALKING;
    } else {
        currentActivityType = HMSLocation.ActivityType.RUNNING;
    }
    const item = {conversionType: currentConversionType, activityType: currentActivityType};
    activityConversions.push(item);
    conversionListLog.innerHTML = JSON.stringify(item) + "<br>" + conversionListLog.innerHTML;
}

async function createActivityConversionUpdates() {
    const requestCodeValue = document.getElementById("addRequestCode").value;
    const isSuccess = await activityService.createActivityConversionUpdates(requestCodeValue, activityConversions, (data) => {
        console.log(JSON.stringify(data));
    });
    console.log(isSuccess);
    activityConversionUpdateRequests.push(requestCodeValue);
    activityConversions.length = 0;
    conversionListLog.innerHTML = "";
}

async function deleteActivityConversionUpdates() {
    const requestCodeValue = document.getElementById("deleteRequestCode").value;
    await activityService.deleteActivityConversionUpdates(requestCodeValue);
}
