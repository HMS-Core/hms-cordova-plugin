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

import { Component } from "@angular/core";
import {
  HMSNearby,
  HMSNearbyEvent, 
  AuthCodeUpdate,
  EndpointId,
  ScanEndpointInfo,
  BeaconOption,
  BeaconType,
} from "@hmscore/ionic-native-hms-nearby/ngx";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  Status = Status;
  currentStatus: Status = Status.IDLE;
 

  constructor(
    private hmsNearby: HMSNearby,
    public toastController: ToastController
  ) {
    
  }
 

 // registerScanTask
 registerScanTask() {
  var beaconOption = {
    beaconId: "beaconId",
    beaconType: 1,
    namespace: "namespace",
    type: "type",
};
  this.hmsNearby
    .registerScanTask(beaconOption)
    .then((res) => {
      alert("registerScanTask: " + JSON.stringify(res));  
    })
    .catch((e) => {
      alert("registerScanTask error: " + e); 
    });
}

// unRegisterScanTask
unRegisterScanTask() {
  this.hmsNearby
    .unRegisterScanTask()
    .then((res) => {
      alert("unRegisterScanTask: " + JSON.stringify(res));  
    })
    .catch((e) => {
      alert("unRegisterScanTask error: " + e); 
    });
}


// getRawBeaconConditions
getRawBeaconConditions() {
  this.hmsNearby
    .getRawBeaconConditions()
    .then((res) => {
      alert("getRawBeaconConditions: " + JSON.stringify(res));  
    })
    .catch((e) => {
      alert("getRawBeaconConditions error: " + e); 
    });
}


// getRawBeaconConditionsWithBeaconType
getRawBeaconConditionsWithBeaconType() {
  var beaconType = { 
    beaconType: 1
  };
  this.hmsNearby
    .getRawBeaconConditionsWithBeaconType(beaconType)
    .then((res) => {
      alert("getRawBeaconConditionsWithBeaconType: " + JSON.stringify(res));  
    })
    .catch((e) => {
      alert("getRawBeaconConditionsWithBeaconType error: " + e); 
    });
}

// getBeaconMsgConditions
getBeaconMsgConditions() {
  this.hmsNearby
    .getBeaconMsgConditions()
    .then((res) => {
      alert("getBeaconMsgConditions: " + JSON.stringify(res));  
    })
    .catch((e) => {
      alert("getBeaconMsgConditions error: " + e); 
    });
}

  // present toast message
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
}

enum Status {
  IDLE = "Idle",
  SEARCHING = "Searching",
}
