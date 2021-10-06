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
import { Component, OnInit } from '@angular/core';
import { HmsContactShield, HMSPermission, ContactShieldEngine } from '@hmscore/ionic-native-hms-contactshield/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private engine: HmsContactShield, private fileChooser: FileChooser) {
  }

  ngOnInit() {
    this.engine.registerReceiver();
    console.log("registerReceiver called");
  }

  async hasPermission() {
    try {
      const permission = HMSPermission.BLUETOOTH;
      const res = await this.engine.hasPermission(permission);
      alert(JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async requestPermissions() {
    try {
      const permission = [HMSPermission.BLUETOOTH,
      HMSPermission.ACCESS_NETWORK_STATE,
      HMSPermission.BLUETOOTH,
      HMSPermission.BLUETOOTH_ADMIN,
      HMSPermission.ACCESS_COARSE_LOCATION,
      HMSPermission.ACCESS_FINE_LOCATION];
      await this.engine.requestPermissions(permission);
      alert("requestPermissions-> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async startContactShield() {
    console.log('startContactShield clicked!');

    try {
      const incubationPeriod = 14;
      await this.engine.startContactShield(incubationPeriod);
      alert("startContactShield -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async clearData() {
    console.log('clearData clicked!');
    try {
      await this.engine.clearData();
      alert("clearData-> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }


  async getStatus() {
    try {
      const res = await this.engine.getStatus();
      alert("getStatus -> success " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  async getContactShieldVersion() {
    try {
      const res = await this.engine.getContactShieldVersion();
      alert("getContactShieldVersion -> success " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  async getDeviceCalibrationConfidence() {
    try {
      const res = await this.engine.getDeviceCalibrationConfidence();
      alert("getDeviceCalibrationConfidence -> success " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  async isSupportScanningWithoutLocation() {
    try {
      const res = await this.engine.isSupportScanningWithoutLocation();
      alert("isSupportScanningWithoutLocation -> success " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async setSharedKeysDataMapping() {
    try {
      const params = {
        daysSinceCreationToContagiousness: {
          1: 2,
        },
        defaultContagiousness: 1,
        defaultReportType: 0
      }
      await this.engine.setSharedKeysDataMapping(params);
      alert("setSharedKeysDataMapping -> success ");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  async getSharedKeysDataMapping() {
    try {
      const res = await this.engine.getSharedKeysDataMapping();
      alert("getSharedKeysDataMapping -> success " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  async getDailySketch() {
    try {
      const dailySketch = {};
      const res = await this.engine.getDailySketch(null);
      alert("getDailySketch -> success " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  async putSharedKeyFilesKeys() {
    try {
      const uri = await this.fileChooser.open();
      const args = {
        token: "TOKEN_TEST",
        diagnosisConfiguration: {},
        fileList: [uri],
        publicKeys: ["123", "1345"],
      };
      const res = await this.engine.putSharedKeyFilesKeys(args);
      alert("putSharedKeyFilesKeys -> success " + res);
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async putSharedKeyFilesProvider() {
    try {
      const uri = await this.fileChooser.open();

      const fileList = [uri];
      const res = await this.engine.putSharedKeyFilesProvider(fileList);
      alert(res);
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async getContactDetail() {
    console.log('getContactDetail clicked!');
    try {
      const token = "TOKEN_TEST";
      const res = await this.engine.getContactDetail(token);
      alert("getContactDetail -> success, " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async getContactSketch() {
    console.log('getContactSketch clicked!');

    try {
      const token = "TOKEN_TEST";
      const res = await this.engine.getContactSketch(token);
      alert("getContactSketch -> success, " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async getContactWindow() {
    console.log('getContactWindow clicked!');

    try {
      const token = ContactShieldEngine.TOKEN_A;
      const res = await this.engine.getContactWindow(token);
      alert("getContactWindow -> success, " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async getPeriodicKey() {
    console.log('getPeriodicKey clicked!');

    try {
      const res = await this.engine.getPeriodicKey();
      alert("getPeriodicKey -> success, " + JSON.stringify(res));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  handleCallback() {
    console.log('handleCallback clicked!');

    this.engine.handleCallback("onHasContact", (data) => {
      alert("Event -> onHasContact, " + data)
    })

    this.engine.handleCallback("onNoContact", (data) => {
      alert("Event -> onNoContact, " + data)
    })
  }


  async isContactShieldRunning() {
    console.log('isContactShieldRunning clicked!');

    try {
      const res = await this.engine.isContactShieldRunning();
      alert("isContactShieldRunning -> success, " + res);
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async startContactShieldOld() {
    console.log('startContactShieldOld clicked!');

    try {
      const incubationPeriod = 14;
      const res = await this.engine.startContactShieldOld(incubationPeriod);
      alert("startContactShieldOld -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async startContactShieldNoPersistent() {
    console.log('startContactShieldNoPersistent clicked!');

    try {
      const incubationPeriod = 14;
      await this.engine.startContactShieldNoPersistent(incubationPeriod);
      alert("startContactShieldNoPersistent -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async stopContactShield() {
    console.log('stopContactShield clicked!');

    try {
      await this.engine.stopContactShield();
      alert("stopContactShield -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async unregisterReceiver() {
    console.log('unregisterReceiver clicked!');

    try {
      await this.engine.unregisterReceiver();
      alert("unregisterReceiver -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }


  async putSharedKeyFilesOld() {
    console.log('putSharedKeyFilesOld clicked!');

    try {
      const uri = await this.fileChooser.open();

      console.log(uri)

      const args = {
        token: "TOKEN_TEST",
        diagnosisConfiguration: {},
        fileList: [uri]
      };

      const result = await this.engine.putSharedKeyFilesOld(args);
      alert(result);
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async putSharedKeyFiles() {
    console.log('putSharedKeyFiles clicked!');

    try {
      const uri = await this.fileChooser.open()
      const args = {
        token: "TOKEN_TEST",
        diagnosisConfiguration: {},
        fileList: [uri]
      };

      const result = await this.engine.putSharedKeyFiles(args);
      alert(result);
    } catch (e) {
      alert(JSON.stringify(e))
    }

  }

  async enableLogger() {
    console.log('enableLogger clicked!');

    try {
      await this.engine.enableLogger();
      alert("enableLogger -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }

  async disableLogger() {
    console.log('disableLogger clicked!');

    try {
      await this.engine.disableLogger();
      alert("disableLogger -> success");
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
}
