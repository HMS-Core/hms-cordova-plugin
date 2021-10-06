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

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById("serviceAvailabilityButton").onclick = checkServiceAvailability;
    document.getElementById("isHuaweiMobileNoticeAvailableButton").onclick = isHuaweiMobileNoticeAvailable;
    document.getElementById("getApiMapButton").onclick = getApiMap;
    document.getElementById("getServicesVersionCodeButton").onclick = getServicesVersionCode;
    document.getElementById("setServicesVersionCodeButton").onclick = setServicesVersionCode;
    document.getElementById("isUserResolvableErrorButton").onclick = isUserResolvableError;
    document.getElementById("getErrorStringButton").onclick = getErrorString;
    document.getElementById("showErrorDialogFragmentButton").onclick = showErrorDialogFragment;
    document.getElementById("showErrorNotificationButton").onclick = showErrorNotification;
    document.getElementById("resolveErrorButton").onclick = resolveError;
}

async function checkServiceAvailability() {
    const result = await HMSAvailability.isHuaweiMobileServicesAvailable(1005300);
    alert(result);
}

async function getApiMap() {
    const map = await HMSAvailability.getApiMap();
    alert(JSON.stringify(map));
}

async function getErrorString() {
    const result = await HMSAvailability.getErrorString(2);
    alert(result);
}

async function getServicesVersionCode() {
    const code = await HMSAvailability.getServicesVersionCode();
    alert(code);
}

async function isHuaweiMobileNoticeAvailable() {
    const result = await HMSAvailability.isHuaweiMobileNoticeAvailable();
    alert(result);
}

async function isUserResolvableError() {
    const result = await HMSAvailability.isUserResolvableError(1);
    alert(result);
}

async function resolveError() {
    await HMSAvailability.resolveError(2, 111);
}

async function setServicesVersionCode() {
    await HMSAvailability.setServicesVersionCode(50000000);
    const newVersionCode = await HMSAvailability.getServicesVersionCode();
    alert(newVersionCode);
}

async function showErrorDialogFragment() {
    await HMSAvailability.showErrorDialogFragment(2, 111, () => {
        alert("OnCancel called");
    });
}

async function showErrorNotification() {
    await HMSAvailability.showErrorNotification(2);
}
