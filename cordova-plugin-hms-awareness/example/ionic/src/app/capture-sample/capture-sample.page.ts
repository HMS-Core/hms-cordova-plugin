/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
import { AwarenessCapture, BluetoothDevice } from '@hmscore/ionic-native-hms-awareness/ngx';
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
    this.hmsAwarenessKit.getHeadsetStatus()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getLocation() {
    this.hmsAwarenessKit.getLocation()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getBehaviorStatus() {
    this.hmsAwarenessKit.getBehaviorStatus()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async querySupportingCapabilities() {
    this.hmsAwarenessKit.querySupportingCapabilities()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getBluetoothStatus() {
    this.hmsAwarenessKit.getBluetoothStatus(BluetoothDevice.DEVICE_CAR)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getBeaconStatus() {
    const beaconStatusRequest = {
      namespace: "sample namespace",
      type: "sample type",
      content: ['s', 'a', 'm', 'p', 'l', 'e']
    }
    this.hmsAwarenessKit.getBeaconStatus(beaconStatusRequest)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getApplicationStatus() {
    this.hmsAwarenessKit.getApplicationStatus()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getLightIntensity() {
    this.hmsAwarenessKit.getLightIntensity()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getScreenStatus() {
    this.hmsAwarenessKit.getScreenStatus()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getCurrentLocation() {
    this.hmsAwarenessKit.getCurrentLocation()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getDarkModeStatus() {
    this.hmsAwarenessKit.getDarkModeStatus()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getWifiStatus() {
    this.hmsAwarenessKit.getWifiStatus()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getWeatherByDevice() {
    this.hmsAwarenessKit.getWeatherByDevice()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
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
    this.hmsAwarenessKit.getWeatherByPosition(weatherPositionRequest)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getTimeCategories() {
    this.hmsAwarenessKit.getTimeCategories()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getTimeCategoriesByIP() {
    this.hmsAwarenessKit.getTimeCategoriesByIP()
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getTimeCategoriesByCountryCode() {
    const countryCode = "TR";
    this.hmsAwarenessKit.getTimeCategoriesByCountryCode(countryCode)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getTimeCategoriesByUser() {
    const locationRequest = {
      location: {
        latitude: 48.893478,
        longitude: 2.334595,
      }
    }
    this.hmsAwarenessKit.getTimeCategoriesByUser(locationRequest)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async getTimeCategoriesForFuture() {
    const timeStamp = 1733743189000;
    this.hmsAwarenessKit.getTimeCategoriesForFuture(timeStamp)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
  public async enableUpdateWindow() {
    this.hmsAwarenessKit.enableUpdateWindow(true)
      .then((res) => alert(JSON.stringify(res)))
      .catch((err) => alert(JSON.stringify(err)));
  }
}
