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
var nearby_wifi = {
    initialize: function () {
        document.addEventListener('deviceready', this.initModule.bind(this), false);
    },

    initModule: function () {
        this.addEventListeners();
        this.addClickListeners();
    },

    addEventListeners: function () {

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_WIFI_ON_FOUND, (res) => {
            console.log('listener :: EVENT_WIFI_ON_FOUND triggered: ' + JSON.stringify(res));

            HMSNearby.shareWifiConfig(res['endpointId']).then((res2) => {
                console.log("wifi :: shareWifiConfig: " + JSON.stringify(res2))
            }).catch(e => {
                console.log("wifi :: error: " + JSON.stringify(e))
            })

        });

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_WIFI_ON_LOST, (res) => {
            console.log('listener :: EVENT_WIFI_ON_LOST triggered: ' + JSON.stringify(res));
        });

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_WIFI_ON_FETCH_AUTH_CODE, (res) => {
            console.log('listener :: EVENT_WIFI_ON_FETCH_AUTH_CODE triggered: ' + JSON.stringify(res));
            alert("authCode: " + res['authCode']);
        });

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_WIFI_ON_SHARE_RESULT, (res) => {
            console.log('listener :: EVENT_WIFI_ON_SHARE_RESULT triggered: ' + JSON.stringify(res));
        });

        console.log('wifi :: event listeners added');
    },

    addClickListeners: function () {
        document.getElementById("btn-wifi-share").addEventListener('click', () => {
            console.log("wifi :: btn-wifi-share clicked!");

            HMSNearby.startWifiShare(HMSNearby.WifiSharePolicy.POLICY_SHARE)
                .then((res) => {
                    alert('wifi :: startWifiShare POLICY_SHARE: ' + JSON.stringify(res));
                });
        });

        document.getElementById("btn-wifi-set").addEventListener('click', () => {
            console.log("wifi :: btn-wifi-set clicked!");

            HMSNearby.startWifiShare(HMSNearby.WifiSharePolicy.POLICY_SET)
                .then((res) => {
                    alert('wifi :: startWifiShare POLICY_SET: ' + JSON.stringify(res));
                });
        });

        document.getElementById("btn-wifi-stop").addEventListener('click', () => {
            console.log("wifi :: btn-wifi-stop clicked!");
            HMSNearby.stopWifiShare().then((res) => {
                alert('wifi :: stopWifiShare: ' + JSON.stringify(res));
            });
        });

        console.log('wifi :: click listeners added');
    }
}
nearby_wifi.initialize();
