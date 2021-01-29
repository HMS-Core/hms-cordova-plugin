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
import { AwarenessCapture,BeaconStatusFilter } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
  selector: 'app-capture-sample',
  templateUrl: './capture-sample.page.html',
  styleUrls: ['./capture-sample.page.scss'],
})
export class CaptureSamplePage implements OnInit {

  constructor(private hmsAwarenessKit: AwarenessCapture) { }

  ngOnInit() {
  }
  public async getHeadsetStatus() {
    try {
      const headsetStatusResult = await this.hmsAwarenessKit.getHeadsetStatus();
      alert(JSON.stringify(headsetStatusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getLocation() {
    try {
      const getLocationResult = await this.hmsAwarenessKit.getLocation();
      alert(JSON.stringify(getLocationResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getBehaviorStatus() {

    try {
      const behaviorStatusResult = await this.hmsAwarenessKit.getBehaviorStatus();
      alert(JSON.stringify(behaviorStatusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async querySupportingCapabilities() {
    try {
      const querySupportingCapabilitiesResult = await this.hmsAwarenessKit.querySupportingCapabilities();
      alert(JSON.stringify(querySupportingCapabilitiesResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getBluetoothStatus() {
    try {
      const bluetoothStatusResult = await this.hmsAwarenessKit.getBluetoothStatus(1);
      alert(JSON.stringify(bluetoothStatusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getBeaconStatus() {
    try {
      const beaconStatusRequest = {
        namespace: "sample namespace",
        type: "sample type",
        content: ['s', 'a', 'm', 'p', 'l', 'e']
      }
      const beaconStatusResult = await this.hmsAwarenessKit.getBeaconStatus(beaconStatusRequest);
      alert(JSON.stringify(beaconStatusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getApplicationStatus() {
    try {
      const applicationStatusResult = await this.hmsAwarenessKit.getApplicationStatus();
      alert(JSON.stringify(applicationStatusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getLightIntensity() {
    try {
      const statusResult = await this.hmsAwarenessKit.getLightIntensity();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getScreenStatus() {
    try {
      const statusResult = await this.hmsAwarenessKit.getScreenStatus();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getCurrentLocation() {
    try {
      const statusResult = await this.hmsAwarenessKit.getCurrentLocation();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getDarkModeStatus() {
    try {
      const statusResult = await this.hmsAwarenessKit.getDarkModeStatus();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getWifiStatus() {
    try {
      const statusResult = await this.hmsAwarenessKit.getWifiStatus();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getWeatherByDevice() {
    try {
      const statusResult = await this.hmsAwarenessKit.getWeatherByDevice();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getWeatherByPosition() {
    const weatherPositionRequest = {
      mCountry: "UK",
      mProvince: "London",
      mCity: "London",
      mDistrict: "",
      mCounty: "",
      mLocale: "en_US",
    }
    const statusResult = await this.hmsAwarenessKit.getWeatherByPosition(weatherPositionRequest);
    alert(JSON.stringify(statusResult));
  }
  public async getTimeCategories() {
    try {
      const statusResult = await this.hmsAwarenessKit.getTimeCategories();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getTimeCategoriesByIP() {
    try {
      const statusResult = await this.hmsAwarenessKit.getTimeCategoriesByIP();
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getTimeCategoriesByCountryCode() {
    try {
      const contryCode = "TR";
      const statusResult = await this.hmsAwarenessKit.getTimeCategoriesByCountryCode(contryCode);
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getTimeCategoriesByUser() {
    try {
      const locationRequest = {
        location: {
          latitude: 48.893478,
          longitude: 2.334595,
        }
      }
      const statusResult = await this.hmsAwarenessKit.getTimeCategoriesByUser(locationRequest);
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async getTimeCategoriesForFuture() {
    try {
      const timeStamp = 1613137801;
      const statusResult = await this.hmsAwarenessKit.getTimeCategoriesForFuture(timeStamp);
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  public async enableUpdateWindow() {
    try {
      const statusResult = await this.hmsAwarenessKit.enableUpdateWindow(true);
      alert(JSON.stringify(statusResult));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
}
