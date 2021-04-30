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
let fusedClient;
const locationUpdateRequests = [];
let newElement = document.createElement("label");
newElement.classList.add('alert');
newElement.classList.add('d-block');
newElement.classList.add('text-center');
newElement.role = 'alert';
const log = document.getElementById("locationUpdateLogs");

async function onDeviceReady() {
    fusedClient = HMSLocation.getFusedLocationProviderClient();
    document.getElementById("requestLocationUpdates").onclick = requestLocationUpdates;
    document.getElementById("getLastLocation").onclick = getLastLocation;
    document.getElementById("getLastLocationWithAddress").onclick = getLastLocationWithAddress;
    document.getElementById("getLocationAvailability").onclick = getLocationAvailability;
    document.getElementById("flushLocations").onclick = flushLocations;
    document.getElementById("checkLocationSettings").onclick = checkLocationSettings;
    document.getElementById("getNavigationContextState").onclick = getNavigationContextState;
    document.getElementById("hasLocationPermission").onclick = hasLocationPermission;
    document.getElementById("removeLocationUpdates").onclick = removeLocationUpdates;
    document.getElementById("requestLocationUpdatesEx").onclick = requestLocationUpdatesEx;
    document.getElementById("setMockLocation").onclick = setMockLocation;
    document.getElementById("setMockMode").onclick = setMockMode;
    document.getElementById("requestLocationPermission").onclick = requestLocationPermission;
}

async function requestLocationPermission() {
    const button = document.getElementById("requestLocationPermission");
    const result = await fusedClient.requestLocationPermission();
    createPermissionLayout(result, newElement, "Permission is granted.", "Permission is denied.");
    button.parentNode.insertBefore(newElement, button.nextSibling);
}

async function requestLocationUpdates() {
    const request = {
        id: "locationRequest" + Math.random() * 10000,
        priority: HMSLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
        interval: 1000
    }
    const requestCodeValue = document.getElementById("addRequestCode").value;
    const isSuccess = await fusedClient.requestLocationUpdates(requestCodeValue, request, (locationResult) => {
        console.log("Background event is called." + JSON.stringify(locationResult));
        const notification = {
            contentTitle: "Current Location",
            category: "service",
            priority: 4,
            channelName: "MyChannel",
            smallIcon: "huawei",
            contentText: "Lat: " + locationResult.lastLocation.latitude + " - Lng: " + locationResult.lastLocation.longitude
        };
        BackgroundManager.makeToast("Lat: " + locationResult.lastLocation.latitude + " - Lng: " + locationResult.lastLocation.longitude, 1000);
    });
    console.log(isSuccess);
    locationUpdateRequests.push(requestCodeValue);
}

async function getLastLocation() {
    const log = document.getElementById("getLastLocationLog");
    const lastLocation = await fusedClient.getLastLocation();
    log.innerHTML = JSON.stringify(lastLocation);
}

async function getLastLocationWithAddress() {
    const log = document.getElementById("getLastLocationWithAddressLog");
    const request = {
        id: "locationRequest" + Math.random() * 10000,
        priority: HMSLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
        interval: 1000
    }
    const getLastLocationWithAddressResult = await fusedClient.getLastLocationWithAddress(request);
    log.innerHTML = JSON.stringify(getLastLocationWithAddressResult);
}

async function getLocationAvailability() {
    const log = document.getElementById("getLocationAvailabilityLog");
    const locationAvailability = await fusedClient.getLocationAvailability();
    log.innerHTML = JSON.stringify(locationAvailability);
}

async function flushLocations() {
    const log = document.getElementById("flushLocationsLog");
    const flushLocationsResult = await fusedClient.flushLocations();
    console.log(JSON.stringify(flushLocationsResult));
    log.innerHTML = "Completed";
}

async function checkLocationSettings() {
    const log = document.getElementById("checkLocationSettingsLog");
    const request = {
        id: "locationRequest" + Math.random() * 10000,
        priority: HMSLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
        interval: 1000
    }
    const locationSettingsResult = await fusedClient.checkLocationSettings({
        alwaysShow: true,
        needBle: true,
        locationRequests: [request]
    });
    log.innerHTML = JSON.stringify(locationSettingsResult);
}

async function getNavigationContextState() {
    const log = document.getElementById("getNavigationContextStateLog");
    const getNavigationContextStateResult = await fusedClient.getNavigationContextState(HMSLocation.NavigationRequestConstants.IS_SUPPORT_EX);
    log.innerHTML = JSON.stringify(getNavigationContextStateResult);
}

async function hasLocationPermission() {
    const button = document.getElementById("hasLocationPermission");
    const isGranted = await fusedClient.hasLocationPermission();
    createPermissionLayout(isGranted, newElement, "TRUE", "FALSE");
    button.parentNode.insertBefore(newElement, button.nextSibling);
}

async function removeLocationUpdates() {
    const log = document.getElementById("removeLocationUpdatesLog");
    const requestCode = document.getElementById("removeRequestCode").value;
    const selectElem = document.getElementById("removeTypeSelect");
    await fusedClient.removeLocationUpdates(requestCode, selectElem.options[selectElem.selectedIndex].value);
    log.innerHTML = "Location provider with request code " + requestCode + " is removed." + log.innerHTML;
    locationUpdateRequests.length = 0;
}

async function requestLocationUpdatesEx() {
    const requestCodeValue = document.getElementById("addRequestCodeEx").value;
    const log = document.getElementById("locationUpdateLogs");
    const request = {
        id: "locationRequest" + Math.random() * 10000,
        priority: HMSLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
        interval: 1000
    }
    const isSuccess = await fusedClient.requestLocationUpdatesEx(requestCodeValue, request);
    console.log(isSuccess);
    locationUpdateRequests.push(requestCodeValue);
}

async function setMockLocation() {
    const latitudeValue = document.getElementById("latitude").value;
    const longitudeValue = document.getElementById("longitude").value;
    const log = document.getElementById("setMockLocationLogs");
    const latLng = {latitude: latitudeValue, longitude: longitudeValue};
    const setMockLocationResult = await fusedClient.setMockLocation(latLng);
    console.log("Result: " + setMockLocationResult);
    log.innerHTML = "Completed.";
}

async function setMockMode() {
    const log = document.getElementById("setMockModeLogs");
    const setMockModeResult = await fusedClient.setMockMode(true);
    console.log(setMockLocationResult);
    log.innerHTML = setMockModeResult;
}
