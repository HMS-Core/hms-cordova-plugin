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
var backgroundLocationResult;
async function onDeviceReady() {

    HMSLocation.addListener(HMSLocation.Events.ON_LOCATION_RESULT, (data) => {
        console.log(JSON.stringify(data));
        const log = document.getElementById('locationUpdateLogs');
        log.innerHTML = JSON.stringify(data) + log.innerHTML;
        backgroundLocationResult = data;
    });

    HMSLocation.addListener(HMSLocation.Events.GEOFENCE_RESULT, (data) => {
        const location = geofenceMap.get(data[0].uniqueId);
        console.log(JSON.stringify(location));
    });

    HMSLocation.addListener(HMSLocation.Events.ACTIVITY_CONVERSION_RESULT, (data) => {
        let conversionEventLog = document.getElementById("conversionEventLog");
        conversionEventLog.innerHTML = JSON.stringify(data) + conversionEventLog.innerHTML;
    });

    HMSLocation.addListener(HMSLocation.Events.ACTIVITY_IDENTIFICATION_RESULT, (data) => {
        let identificationEventLog = document.getElementById("identificationEventLog");
        identificationEventLog.innerHTML = JSON.stringify(data) + identificationEventLog.innerHTML;
    });

}
