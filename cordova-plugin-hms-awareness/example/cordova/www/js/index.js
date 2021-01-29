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
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        document.getElementById("goCaptureSample").addEventListener("click", function () { window.location = "capturesample.html" });
        document.getElementById("goBarrierSample").addEventListener("click", function () { window.location = "barriersample.html" });
        document.getElementById("hasPermission").addEventListener("click", hasPermission);
        document.getElementById("requestPermissions").addEventListener("click", requestPermissions);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};
async function hasPermission() {
    try {
        const permission = await HMSAwareness.hasPermission(HMSAwareness.HMSPermission.PERMISSION_ACCESS_FINE_LOCATION);
        alert(JSON.stringify(permission));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
async function requestPermissions() {
    try {
        await HMSAwareness.requestPermissions(HMSAwareness.HMSPermission.PERMISSION_ACCESS_FINE_LOCATION,
            HMSAwareness.HMSPermission.PERMISSION_HUAWEI_ACTIVITY_RECOGNITION,
            HMSAwareness.HMSPermission.PERMISSION_ACTIVITY_RECOGNITION,
            HMSAwareness.HMSPermission.PERMISSION_BLUETOOTH,
            HMSAwareness.HMSPermission.PERMISSION_CHANGE_WIFI_STATE,
            HMSAwareness.HMSPermission.PERMISSION_ACCESS_COARSE_LOCATION,
            HMSAwareness.HMSPermission.PERMISSION_ACCESS_BACKGROUND_LOCATION
        );
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
app.initialize();