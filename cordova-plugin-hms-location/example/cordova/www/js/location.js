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
    document.getElementById("removeLocationUpdates").onclick = removeLocationUpdates;
    document.getElementById("requestLocationUpdatesEx").onclick = requestLocationUpdatesEx;
    document.getElementById("setMockLocation").onclick = setMockLocation;
    document.getElementById("setMockMode").onclick = setMockMode;
    document.getElementById("enableBackgroundLocation").onclick = enableBackgroundLocation;
    document.getElementById("disableBackgroundLocation").onclick = disableBackgroundLocation;
    document.getElementById("setLogConfig").onclick = setLogConfig;
    document.getElementById("getLogConfig").onclick = getLogConfig;
}

async function requestLocationUpdates() {
    try {
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
                smallIcon: "<set_your_icon_folder_name_in_drawable_folder>",
                contentText: "Lat: " + locationResult.lastLocation.latitude + " - Lng: " + locationResult.lastLocation.longitude
            };
            BackgroundManager.makeToast("Lat: " + locationResult.lastLocation.latitude + " - Lng: " + locationResult.lastLocation.longitude, 1000);
        });
        console.log(isSuccess);
        locationUpdateRequests.push(requestCodeValue);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function getLastLocation() {
    try {
        const log = document.getElementById("getLastLocationLog");
        const lastLocation = await fusedClient.getLastLocation();
        log.innerHTML = JSON.stringify(lastLocation);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function getLastLocationWithAddress() {
    try {
        const log = document.getElementById("getLastLocationWithAddressLog");
        const request = {
            id: "locationRequest" + Math.random() * 10000,
            priority: HMSLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
            interval: 1000
        }
        const getLastLocationWithAddressResult = await fusedClient.getLastLocationWithAddress(request);
        log.innerHTML = JSON.stringify(getLastLocationWithAddressResult);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function getLocationAvailability() {
    try {
        const log = document.getElementById("getLocationAvailabilityLog");
        const locationAvailability = await fusedClient.getLocationAvailability();
        log.innerHTML = JSON.stringify(locationAvailability);
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function flushLocations() {
    try {
        const log = document.getElementById("flushLocationsLog");
        const flushLocationsResult = await fusedClient.flushLocations();
        console.log(JSON.stringify(flushLocationsResult));
        log.innerHTML = "Completed";
    } catch (error) {
        alert(JSON.stringify(error));
    }
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
    try {
        const log = document.getElementById("getNavigationContextStateLog");
        const getNavigationContextStateResult = await fusedClient.getNavigationContextState(HMSLocation.NavigationRequestConstants.IS_SUPPORT_EX);
        log.innerHTML = JSON.stringify(getNavigationContextStateResult);
    } catch (error) {
        alert(JSON.stringify(error));
    }
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
    try {
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
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function setMockLocation() {
    try {
        const latitudeValue = document.getElementById("latitude").value;
        const longitudeValue = document.getElementById("longitude").value;
        const log = document.getElementById("setMockLocationLog");
        const latLng = {
            latitude: latitudeValue,
            longitude: longitudeValue
        };
        const setMockLocationResult = await fusedClient.setMockLocation(latLng);
        console.log("Result: " + setMockLocationResult);
        log.innerHTML = "Completed.";
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function setMockMode() {
    try {
        const log = document.getElementById("setMockModeLog");
        const setMockModeResult = await fusedClient.setMockMode(true);
        console.log(setMockModeResult);
        log.innerHTML = setMockModeResult;
    } catch (error) {
        alert(JSON.stringify(error));
    }
}

async function enableBackgroundLocation() {
    const log = document.getElementById("enableBackgroundLocationLog");
    try {
        let notificationId = 1;
        const notification = {
            contentTitle: 'Current Location',
            category: 'service',
            priority: 2,
            channelName: 'MyChannel',
            smallIcon: '<set_your_icon_folder_name_in_drawable_folder>',
            contentText: "Lat: " + backgroundLocationResult.lastLocation.latitude + " - Lng: " + backgroundLocationResult.lastLocation.longitude
        };
        await fusedClient.enableBackgroundLocation(notificationId, notification);
        log.innerHTML = "enabled";
    } catch (error) {
        log.innerHTML = JSON.stringify(error);
    }
}
function disableBackgroundLocation() {
    const log = document.getElementById("disableBackgroundLocationLog");
    fusedClient.disableBackgroundLocation();
    log.innerHTML = "disabled";
}
async function setLogConfig() {
    try {
        let logConfigSettings = {
            logConfigSettingsFile: {
                fileExpiredTime: 4,
                fileNum: 19,
                fileSize: 2
            },
            logPath: "/storage/emulated/0/log"
        }
        await fusedClient.setLogConfig(logConfigSettings);
        alert("success :: setLogConfig");
    } catch (error) {
        alert("error :: setLogConfig : " + JSON.stringify(error));
    }
}
async function getLogConfig() {
    const log = document.getElementById("getLogConfigLog");
    try {
        const getLogConfig = await fusedClient.getLogConfig();
        log.innerHTML = JSON.stringify(getLogConfig);
    } catch (error) {
        log.innerHTML = error;
    }
}