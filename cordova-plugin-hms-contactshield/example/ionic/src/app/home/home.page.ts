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
import { Component, OnInit } from '@angular/core';
import { HmsContactShield, Permission, ContactShieldEngine } from '@hmscore/ionic-native-hms-contactshield/ngx';
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


  async hasBluetoothPermission() {
    console.log('hasPermission clicked!');

    const permission: Permission = Permission.BLUETOOTH;

    try {
      const res = await this.engine.hasPermission(permission);
      alert('hasPermission -> success, ' + JSON.stringify(res));
    } catch (ex) {
      alert('hasPermission -> Error : ' + JSON.stringify(ex));
    }
  }

  async requestBluetoothPermission() {
    console.log('requestPermission clicked!');

    const permission: Permission = Permission.BLUETOOTH;

    try {
      await this.engine.requestPermission(permission);
      alert('requestPermission -> success');
    } catch (ex) {
      alert('requestPermission -> Error : ' + JSON.stringify(ex));
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
