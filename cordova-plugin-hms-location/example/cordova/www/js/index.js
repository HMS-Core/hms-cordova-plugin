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

async function onDeviceReady() {
    document.getElementById("locationPage").onclick = locationPage;
    document.getElementById("geofencePage").onclick = geofencePage;
    document.getElementById("activityConversionPage").onclick = activityConversionPage;
    document.getElementById("activityIdentificationPage").onclick = activityIdentificationPage;
}

function locationPage() {
    window.location.href = "location_page.html";
}

function geofencePage() {
    window.location.href = "geofence.html";
}

function activityConversionPage() {
    window.location.href = "activity_conversion_page.html";
}

function activityIdentificationPage() {
    window.location.href = "activity_identification_page.html";
}
