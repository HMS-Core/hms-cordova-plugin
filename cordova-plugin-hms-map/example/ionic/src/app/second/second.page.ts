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
import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {HuaweiMap, HMSMap, CameraUpdateFactory} from '@hmscore/ionic-native-hms-map/ngx';
@Component({
    selector: 'app-second',
    templateUrl: './second.page.html',
    styleUrls: ['./second.page.scss'],
})
export class SecondPage{
    private map: HuaweiMap;
    latInput: number;
    lngInput: number;
    durationInput: number;
    markerLatInput: number;
    markerLngInput: number;
    centerX: string;
    centerY: string;

    constructor(public navCtrl: NavController, private hmsMap: HMSMap) {
    }

    async ionViewDidEnter() {
        const mapOptions = {
            cameraPosition: {
                target: {lat: 40.7587658, lng: 30.3146964},
                zoom: 2
            }
        };
        this.map = await this.hmsMap.getMap('secondMap', mapOptions);
        await this.map.setMyLocationEnabled(true);
        await this.map.getUiSettings().setGestureScaleByMapCenter(true);
    }

    navigate() {
        this.map.destroyMap();
        this.navCtrl.navigateRoot('/home', {}).then(value => console.log(value));
    }

    async showMap() {
        this.map = await this.hmsMap.showMap('secondMap');
    }

    async hideMap() {
        await this.map.hideMap();
    }

    async animateCamera() {
        const latitude = this.latInput;
        const longitude = this.lngInput;
        const duration = this.durationInput;
        const position = {target: {lat: latitude, lng: longitude}, zoom: 6};
        await this.map.animateCamera(CameraUpdateFactory.newCameraPosition(position), {
            onFinish: () => {
                console.log('Javascript onFinish called');
            },
            onCancel: () => {
                console.log('Javascript onCancel called');
            }
        }, duration);
        await this.map.addMarker({position: {lat: latitude, lng: longitude}});
    }

    async moveCamera() {
        const latitude = this.latInput;
        const longitude = this.lngInput;
        const position = {target: {lat: latitude, lng: longitude}, zoom: 6};
        await this.map.moveCamera(CameraUpdateFactory.newCameraPosition(position));
        await this.map.addMarker({position: {lat: latitude, lng: longitude}});
    }

    async addMarker() {
        const latitude = this.markerLatInput;
        const longitude = this.markerLngInput;
        await this.map.addMarker({position: {lat: latitude, lng: longitude}});
    }

    async setPointToCenter() {
        const x = parseInt(this.centerX);
        const y = parseInt(this.centerY);
        await this.map.setPointToCenter(x, y);
    }

    async scrolling() {
        await this.map.scroll();
    }
}
