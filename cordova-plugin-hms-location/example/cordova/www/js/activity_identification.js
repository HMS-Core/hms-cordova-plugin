/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
const activityIdentificationUpdateRequests = [];
const activityIdentifications = [];
let activityService;
let intervalMillis = document.getElementById("intervalMillis");
let identificationEventLog = document.getElementById("identificationEventLog");
let newElement = document.createElement("label");
newElement.classList.add('alert');
newElement.classList.add('d-block');
newElement.classList.add('text-center');
newElement.role = 'alert';

function onDeviceReady() {
    document.getElementById("createActivityIdentificationUpdates").onclick = createActivityIdentificationUpdates;
    document.getElementById("deleteActivityIdentificationUpdates").onclick = deleteActivityIdentificationUpdates;
    activityService = HMSLocation.getActivityIdentificationService();
}

async function createActivityIdentificationUpdates() {
    try{
    let intervalMillisValue = 2000;
    if (intervalMillis.value !== "") {
        intervalMillisValue = intervalMillis.value;
    }
    const requestCodeValue = document.getElementById("addRequestCode").value;
    const isSuccess = await activityService.createActivityIdentificationUpdates(requestCodeValue, intervalMillisValue, (data) => {
        console.log(JSON.stringify(data));
    });
    console.log(isSuccess);
    activityIdentificationUpdateRequests.push(requestCodeValue);
    identificationEventLog.innerHTML = "";
    
} catch (error) {
    alert(JSON.stringify(error));
}
}

async function deleteActivityIdentificationUpdates() {
    try{
    const requestCodeValue = document.getElementById("deleteRequestCode").value;
    const isSuccess = await activityService.deleteActivityIdentificationUpdates(requestCodeValue);
    console.log(isSuccess);
    identificationEventLog.innerHTML = "";
    
} catch (error) {
    alert(JSON.stringify(error));
}
}
