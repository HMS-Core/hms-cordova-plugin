/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
let getFromLocationLog;
let getFromLocationNameLog;
let geocoderService;

function onDeviceReady() {
    document.getElementById("getFromLocation").onclick = getFromLocation;
    document.getElementById("getFromLocationName").onclick = getFromLocationName;
    getFromLocationLog = document.getElementById("getFromLocationLog");
    getFromLocationNameLog = document.getElementById("getFromLocationNameLog");
    
    geocoderService = HMSLocation.getGeocoderService("en", "US");
}

async function getFromLocation() {
    const longitude = document.getElementById("longitude").value;
    const latitude = document.getElementById("latitude").value;
    const maxResults = document.getElementById("locationMaxResults").value;
    const getFromLocationRequest = {
        longitude: 116.501717,
        latitude: 39.985071,
        maxResults: 3
    };
    if (longitude != "") {
        getFromLocationRequest.longitude = longitude;
    }
    if (latitude != "") {
        getFromLocationRequest.latitude = latitude;
    }
    if (maxResults != "") {
        getFromLocationRequest.maxResults = maxResults;
    }
    try {
        let hwLocationList = await geocoderService.getFromLocation(getFromLocationRequest);
        getFromLocationLog.innerHTML = JSON.stringify(hwLocationList) + getFromLocationLog.innerHTML;
        longitude.value = "";
        latitude.value = "";
        maxResults.value = "";
    } catch (error) {
        alert("getFromLocation :: error :: " + JSON.stringify(error));
    }
}


async function getFromLocationName() {
    const locationName = document.getElementById("locationName").value;
    const maxResults = document.getElementById("locationNameMaxResults").value;
    const lowerLeftLatitude = document.getElementById("lowerLeftLatitude").value;
    const lowerLeftLongitude = document.getElementById("lowerLeftLongitude").value;
    const upperRightLatitude = document.getElementById("upperRightLatitude").value;
    const upperRightLongitude = document.getElementById("upperRightLongitude").value;
    const getFromLocationNameRequest = {
        locationName: "Changjiang Community, Huannan Road, Binjiang District, Hangzhou City, Zhejiang Province",
        maxResults: 3
    };
    if (locationName != "") {
        getFromLocationNameRequest.locationName = locationName;
    }
    if (maxResults != "") {
        getFromLocationNameRequest.maxResults = maxResults;
    }
    if (lowerLeftLatitude != "") {
        getFromLocationNameRequest.corner.lowerLeftLatitude = lowerLeftLatitude;
    }
    if (lowerLeftLongitude != "") {
        getFromLocationNameRequest.corner.lowerLeftLongitude = lowerLeftLongitude;
    }
    if (upperRightLatitude != "") {
        getFromLocationNameRequest.corner.upperRightLatitude = upperRightLatitude;
    }
    if (upperRightLongitude != "") {
        getFromLocationNameRequest.corner.upperRightLongitude = upperRightLongitude;
    }
    try {
        let hwLocationList = await geocoderService.getFromLocationName(getFromLocationNameRequest);
        getFromLocationNameLog.innerHTML = JSON.stringify(hwLocationList);
        locationName.value = "";
        maxResults.value = "";
        lowerLeftLatitude.value = "";
        lowerLeftLongitude.value = "";
        upperRightLatitude.value = "";
        upperRightLongitude.value = "";
    } catch (error) {
        alert("getFromLocationName :: error :: " + JSON.stringify(error));
    }
}
