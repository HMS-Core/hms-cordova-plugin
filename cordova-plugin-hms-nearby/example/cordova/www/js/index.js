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
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        function openPage(pageName) {
            var page = document.getElementById(pageName);
            page.setAttribute('style', 'display:block;');

            if (pageName !== 'page-connection')
                document.getElementById('page-connection').setAttribute('style', 'display:none;');

            if (pageName !== 'page-message')
                document.getElementById('page-message').setAttribute('style', 'display:none;');

            if (pageName !== 'page-wifi')
                document.getElementById('page-wifi').setAttribute('style', 'display:none;');

        }

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        openPage('page-connection');

        document.getElementById('btn-connection').addEventListener('click', () => {
            console.log("index :: btn-connection clicked!");
            openPage('page-connection');
        });

        document.getElementById('btn-message').addEventListener('click', () => {
            console.log("index :: btn-message clicked!");
            openPage('page-message');
        });

        document.getElementById('btn-wifi').addEventListener('click', () => {
            console.log("index :: btn-wifi clicked!");
            openPage('page-wifi');
        });

        HMSNearby.enableLogger();

        HMSNearby.requestPermissions([
            HMSNearby.HMSPermission.PERMISSION_BLUETOOTH,
            HMSNearby.HMSPermission.PERMISSION_BLUETOOTH_ADMIN,
            HMSNearby.HMSPermission.PERMISSION_ACCESS_WIFI_STATE,
            HMSNearby.HMSPermission.PERMISSION_CHANGE_WIFI_STATE,
            HMSNearby.HMSPermission.PERMISSION_ACCESS_COARSE_LOCATION,
            HMSNearby.HMSPermission.PERMISSION_ACCESS_FINE_LOCATION,
            HMSNearby.HMSPermission.PERMISSION_READ_EXTERNAL_STORAGE,
            HMSNearby.HMSPermission.PERMISSION_WRITE_EXTERNAL_STORAGE
        ]).then((res) => {
            console.log("index :: request permissions result: " + res);
        });
    }
};

app.initialize();

function str2Bin(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
    }
    return result;
}
