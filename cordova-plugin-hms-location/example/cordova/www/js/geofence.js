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
document.addEventListener('deviceready', onDeviceReady, false);
let geofenceService;
let dropDownList;
let geofenceList = []
let geofenceMap = new Map();
let geofenceListLog;

function onDeviceReady() {
    document.getElementById("createGeofenceList").onclick = createGeofenceList;
    document.getElementById("deleteGeofenceList").onclick = deleteGeofenceList;
    document.getElementById("addToGeofenceList").onclick = addToGeofenceList;
    geofenceListLog = document.getElementById("geofenceListLog");
    geofenceService = HMSLocation.getGeofenceService();
    dropDownList = document.getElementById("geoList");
}

async function addToGeofenceList() {
    const longitude = document.getElementById("longitude").value;
    const latitude = document.getElementById("latitude").value;
    const radius = document.getElementById("radius").value;
    const uniqueId = document.getElementById("uniqueId").value;
    const conversionsSelect = document.getElementById("conversions");
    const conversion = conversionsSelect.options[conversionsSelect.selectedIndex].value;
    const validContinueTime = document.getElementById("validContinueTime").value;
    const dwellDelayTime = document.getElementById("dwellDelayTime").value;
    const notificationInterval = document.getElementById("notificationInterval").value;
    const geofence = {
        longitude: 30.3992338,
        latitude: 40.7911111,
        radius: 200,
        uniqueId: 'geofence' + Math.random() * 10000,
        conversions: HMSLocation.GeofenceInitConversionType.ENTER_INIT_CONVERSION,
        validContinueTime: 10000.0,
        dwellDelayTime: 10,
        notificationInterval: 1,
    };
    if (longitude != "") {
        geofence.longitude = longitude;
    }
    if (latitude != "") {
        geofence.latitude = latitude;
    }
    if (radius != "") {
        geofence.radius = radius;
    }
    if (uniqueId != "") {
        geofence.uniqueId = uniqueId;
    }
    if (conversion != "") {
        geofence.conversions = conversion;
    }
    if (validContinueTime != "") {
        geofence.validContinueTime = validContinueTime;
    }
    if (dwellDelayTime != "") {
        geofence.dwellDelayTime = dwellDelayTime;
    }
    if (notificationInterval != "") {
        geofence.notificationInterval = notificationInterval;
    }
    geofenceList.push(geofence);
    geofenceMap.set(geofence.uniqueId, geofence);
    geofenceListLog.innerHTML = JSON.stringify(geofence) + geofenceListLog.innerHTML;
    longitude.value = "";
    latitude.value = "";
    radius.value = "";
    uniqueId.value = "";
    validContinueTime.value = "";
    dwellDelayTime.value = "";
    notificationInterval.value = "";
}

async function createGeofenceList() {
    try {
        let initConversion = HMSLocation.GeofenceInitConversionType.ENTER_INIT_CONVERSION;
        let coordinateType = HMSLocation.CoordinateType.COORDINATE_TYPE_WGS_84;
        const initConversionValue = document.getElementById("initConversion").value;
        if (initConversionValue != "") {
            initConversion = initConversionValue;
        }
        const coordinateTypeValue = document.getElementById("coordinateType").value;
        if (coordinateTypeValue != "") {
            coordinateType = coordinateTypeValue;
        }
        const requestCode = document.getElementById("requestCode").value;
        const result = await geofenceService.createGeofenceList(requestCode, geofenceList, initConversion, coordinateType);
        console.log(result);
        let option = document.createElement("option");
        option.text = "Request Code - " + requestCode;
        option.value = requestCode;
        dropDownList.add(option);

    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function deleteGeofenceList() {
    try {
        var selected = dropDownList.options[dropDownList.selectedIndex];
        dropDownList.remove(dropDownList.selectedIndex);
        const deleteGeofenceListResult = await geofenceService.deleteGeofenceList(selected.value);
        console.log(deleteGeofenceListResult);

    } catch (error) {
        alert(JSON.stringify(error));
    }
}