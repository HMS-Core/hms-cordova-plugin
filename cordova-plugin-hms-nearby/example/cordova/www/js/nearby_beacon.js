/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var nearby_beacon = {
  initialize: function () {
    document.addEventListener("deviceready", this.initModule.bind(this), false);
  },

  initModule: function () {
    this.addClickListeners();
  },


  addClickListeners: function () {
    document.getElementById("btn-registerScanTask").addEventListener("click", () => {
      var reqOpt = {
        beaconId: "beaconId",
        beaconType: 1,
        namespace: "namespace",
        type: "type",
    };
      HMSNearby.registerScanTask(reqOpt)
        .then((res) =>
          alert("registerScanTask: " + JSON.stringify(res))
        )
        .catch((err) =>
          alert("registerScanTask Error: " + JSON.stringify(err))
        );
    }); 
    

    document.getElementById("btn-unRegisterScanTask").addEventListener("click", async() => {
      await HMSNearby.unRegisterScanTask()
        .then((res) => alert("unRegisterScanTask: " + JSON.stringify(res)))
        .catch((err) =>
          alert("unRegisterScanTask Error: " + JSON.stringify(err))
        );
      
      
    });
    
    
    document.getElementById("btn-getBeaconMsgConditions").addEventListener("click", () => {
      HMSNearby.getBeaconMsgConditions()
        .then((res) => alert("getBeaconMsgConditions: " + JSON.stringify(res)))
        .catch((err) =>
          alert("getBeaconMsgConditions Error: " + JSON.stringify(err))
        );
    });

    
    document.getElementById("btn-getRawBeaconConditions").addEventListener("click", () => {
      HMSNearby.getRawBeaconConditions()
        .then((res) => alert("getRawBeaconConditions: " + JSON.stringify(res)))
        .catch((err) =>
          alert("getRawBeaconConditions Error: " + JSON.stringify(err))
        );
    });

    
    document.getElementById("btn-getRawBeaconConditionsWithBeaconType").addEventListener("click", () => {
      var reqOpt = { 
        beaconType: 1
    };
      HMSNearby.getRawBeaconConditionsWithBeaconType(reqOpt)
        .then((res) => alert("getRawBeaconConditionsWithBeaconType: " + JSON.stringify(res)))
        .catch((err) =>
          alert("getRawBeaconConditionsWithBeaconType Error: " + JSON.stringify(err))
        );
    });

    console.log("beacon :: click listeners added");
  },
};
nearby_beacon.initialize();
