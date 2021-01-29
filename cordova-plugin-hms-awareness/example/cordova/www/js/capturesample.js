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
const $ = (x) => document.getElementById(x);
$('getHeadsetStatus').onclick = async () => {
    try {
        const headsetStatusResult = await AwarenessCapture.getHeadsetStatus();
        console.log(JSON.stringify(headsetStatusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getLocation').onclick = async () => {
    try {
        const getLocationResult = await AwarenessCapture.getLocation();
        console.log(JSON.stringify(getLocationResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getBehaviorStatus').onclick = async () => {
    try {
        const behaviorStatusResult = await AwarenessCapture.getBehaviorStatus();
        console.log(JSON.stringify(behaviorStatusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('querySupportingCapabilities').onclick = async () => {
    try {
        const querySupportingCapabilitiesResult = await AwarenessCapture.querySupportingCapabilities();
        console.log(JSON.stringify(querySupportingCapabilitiesResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getBluetoothStatus').onclick = async () => {
    try {
        const bluetoothStatusResult = await AwarenessCapture.getBluetoothStatus(AwarenessCapture.BluetoothDevice.DEVICE_CAR);
        console.log(JSON.stringify(bluetoothStatusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getBeaconStatus').onclick = async () => {
    try {
        const beaconStatusRequest = {
            namespace: "sample namespace",
            type: "sample type",
            content: ['s', 'a', 'm', 'p', 'l', 'e']
        }
        const beaconStatusResult = await AwarenessCapture.getBeaconStatus(beaconStatusRequest);
        console.log(JSON.stringify(beaconStatusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getApplicationStatus').onclick = async () => {
    try {
        const applicationStatusResult = await AwarenessCapture.getApplicationStatus();
        console.log(JSON.stringify(applicationStatusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getLightIntensity').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getLightIntensity();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getScreenStatus').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getScreenStatus();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getCurrentLocation').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getCurrentLocation();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getDarkModeStatus').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getDarkModeStatus();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getWifiStatus').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getWifiStatus();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getWeatherByDevice').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getWeatherByDevice();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getWeatherByPosition').onclick = async () => {
        const weatherPositionRequest = {
            mCountry: "UK",
            mProvince: "London",
            mCity: "London",
            mDistrict: "",
            mCounty: "",
            mLocale: "en_US",
        }
        const statusResult = await AwarenessCapture.getWeatherByPosition(weatherPositionRequest);
        console.log(JSON.stringify(statusResult));
}
$('getTimeCategories').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getTimeCategories();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getTimeCategoriesByIP').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.getTimeCategoriesByIP();
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getTimeCategoriesByCountryCode').onclick = async () => {
    try {
        const countryCode = "TR";
        const statusResult = await AwarenessCapture.getTimeCategoriesByCountryCode(countryCode);
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getTimeCategoriesByUser').onclick = async () => {
    try {
        const locationRequest = {
            location: {
                latitude: 48.893478,
                longitude: 2.334595,
            }
        }
        const statusResult = await AwarenessCapture.getTimeCategoriesByUser(locationRequest);
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('getTimeCategoriesForFuture').onclick = async () => {
    try {
        const timeStamp = 1607990400;
        const statusResult = await AwarenessCapture.getTimeCategoriesForFuture(timeStamp);
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}
$('enableUpdateWindow').onclick = async () => {
    try {
        const statusResult = await AwarenessCapture.enableUpdateWindow(true);
        console.log(JSON.stringify(statusResult));
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }
}