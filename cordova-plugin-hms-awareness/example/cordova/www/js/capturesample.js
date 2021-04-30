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
const $ = (x) => document.getElementById(x);
$('getHeadsetStatus').onclick = async () => {
    AwarenessCapture.getHeadsetStatus()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));

}
$('getLocation').onclick = async () => {
    AwarenessCapture.getLocation()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getBehaviorStatus').onclick = async () => {
    AwarenessCapture.getBehaviorStatus()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('querySupportingCapabilities').onclick = async () => {
    AwarenessCapture.querySupportingCapabilities()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getBluetoothStatus').onclick = async () => {
    AwarenessCapture.getBluetoothStatus(AwarenessCapture.BluetoothDevice.DEVICE_CAR)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getBeaconStatus').onclick = async () => {
    const beaconStatusRequest = {
        namespace: "sample namespace",
        type: "sample type",
        content: ['s', 'a', 'm', 'p', 'l', 'e']
    }
    AwarenessCapture.getBeaconStatus(beaconStatusRequest)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getApplicationStatus').onclick = async () => {
    AwarenessCapture.getApplicationStatus()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getLightIntensity').onclick = async () => {
    AwarenessCapture.getLightIntensity()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getScreenStatus').onclick = async () => {
    AwarenessCapture.getScreenStatus()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getCurrentLocation').onclick = async () => {
    AwarenessCapture.getCurrentLocation()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getDarkModeStatus').onclick = async () => {
    AwarenessCapture.getDarkModeStatus()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getWifiStatus').onclick = async () => {
    AwarenessCapture.getWifiStatus()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getWeatherByDevice').onclick = async () => {
    AwarenessCapture.getWeatherByDevice()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
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
    AwarenessCapture.getWeatherByPosition(weatherPositionRequest)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getTimeCategories').onclick = async () => {
    AwarenessCapture.getTimeCategories()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getTimeCategoriesByIP').onclick = async () => {
    AwarenessCapture.getTimeCategoriesByIP()
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getTimeCategoriesByCountryCode').onclick = async () => {
    const countryCode = "TR";
    AwarenessCapture.getTimeCategoriesByCountryCode(countryCode)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getTimeCategoriesByUser').onclick = async () => {
    const locationRequest = {
        location: {
            latitude: 48.893478,
            longitude: 2.334595,
        }
    }
    AwarenessCapture.getTimeCategoriesByUser(locationRequest)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
$('getTimeCategoriesForFuture').onclick = async () => {
    const timeStamp = 1607990400;
    AwarenessCapture.getTimeCategoriesForFuture(timeStamp)
    .then((res) => alert(JSON.stringify(res)))
    .catch((err) => alert(JSON.stringify(err)));
}
$('enableUpdateWindow').onclick = async () => {
    AwarenessCapture.enableUpdateWindow()
    .then((res) => alert(JSON.stringify(res)))
    .catch((err) => alert(JSON.stringify(err)));
}