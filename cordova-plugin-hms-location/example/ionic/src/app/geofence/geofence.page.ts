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
import {Component} from '@angular/core';
import {CoordinateType, Events, GeofenceInitConversionType, HMSLocation} from '@hmscore/ionic-native-hms-location/ngx';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-geofence',
    templateUrl: './geofence.page.html',
    styleUrls: ['./geofence.page.scss'],
})
export class GeofencePage {
    longitude: any;
    latitude: any;
    radius: any;
    uniqueId: any;
    validContinueTime: any;
    dwellDelayTime: any;
    notificationInterval: any;
    initConversion: any;
    coordinateType: any;
    requestCode: any;
    private geofenceListLog;
    private geofenceService;
    private dropDownList;
    private geofenceList = [];
    private geofenceMap = new Map();
    private conversionsSelect;

    constructor(private platform: Platform, private hmsLocation: HMSLocation) {
        platform.ready().then(value => {
            this.geofenceService = this.hmsLocation.getGeofenceService();
            this.geofenceListLog = document.getElementById('geofenceListLog');
            this.dropDownList = document.getElementById('geoList');
            this.conversionsSelect = document.getElementById('conversions');
            hmsLocation.addListener(Events.GEOFENCE_RESULT, (data: []) => {
                console.log(JSON.stringify(data));
            });
        });
    }

    async addToGeofenceList() {
        const conversion: any = this.conversionsSelect.options[this.conversionsSelect.selectedIndex].value;
        const geofence = {
            longitude: 30.3992338,
            latitude: 40.7911111,
            radius: 200,
            uniqueId: 'geofence' + Math.random() * 10000,
            conversions: GeofenceInitConversionType.ENTER_INIT_CONVERSION,
            validContinueTime: 10000.0,
            dwellDelayTime: 10,
            notificationInterval: 1,
        };
        if (this.longitude !== '' && this.longitude !== undefined) {
            geofence.longitude = parseInt(this.longitude, 10);
        }
        if (this.latitude !== '' && this.latitude !== undefined) {
            console.log(this.latitude);
            geofence.latitude = parseInt(this.latitude, 10);
        }
        if (this.radius !== '' && this.radius !== undefined) {
            geofence.radius = parseInt(this.radius, 10);
        }
        if (this.uniqueId !== '' && this.uniqueId !== undefined) {
            geofence.uniqueId = this.uniqueId;
        }
        if (conversion !== '' && conversion !== undefined) {
            geofence.conversions = parseInt(conversion, 10);
        }
        if (this.validContinueTime !== '' && this.validContinueTime !== undefined) {
            geofence.validContinueTime = parseInt(this.validContinueTime, 10);
        }
        if (this.dwellDelayTime !== '' && this.dwellDelayTime !== undefined) {
            geofence.dwellDelayTime = parseInt(this.dwellDelayTime, 10);
        }
        if (this.notificationInterval !== '' && this.notificationInterval !== undefined) {
            geofence.notificationInterval = parseInt(this.notificationInterval, 10);
        }
        this.geofenceList.push(geofence);
        this.geofenceMap.set(geofence.uniqueId, geofence);
        this.geofenceListLog.innerHTML = JSON.stringify(geofence) + this.geofenceListLog.innerHTML;
    }

    async createGeofenceList() {
        let initConversion = GeofenceInitConversionType.ENTER_INIT_CONVERSION;
        let coordinateType = CoordinateType.COORDINATE_TYPE_WGS_84;
        if (this.initConversion !== '' && this.initConversion !== undefined) {
            initConversion = parseInt(this.initConversion, 10);
        }
        if (this.coordinateType !== '' && this.coordinateType !== undefined) {
            coordinateType = parseInt(this.coordinateType, 10);
        }
        const requestCode = parseInt(this.requestCode, 10);
        const result = await this.geofenceService.createGeofenceList(requestCode, this.geofenceList, initConversion, coordinateType);
        console.log(result);
        const option: any = document.createElement('option');
        option.text = 'Request Code - ' + requestCode;
        option.value = requestCode;
        this.dropDownList.add(option);
        this.cleanInputs();
    }

    async deleteGeofenceList() {
        const selected: any = this.dropDownList.options[this.dropDownList.selectedIndex];
        this.dropDownList.remove(this.dropDownList.selectedIndex);
        const deleteGeofenceListResult = await this.geofenceService.deleteGeofenceList(selected.value);
        console.log(deleteGeofenceListResult);
    }

    private cleanInputs() {
        this.longitude = '';
        this.latitude = '';
        this.radius = '';
        this.uniqueId = '';
        this.validContinueTime = '';
        this.dwellDelayTime = '';
        this.notificationInterval = '';
        this.initConversion = '';
        this.coordinateType = '';
        this.requestCode = '';
        this.geofenceListLog.innerHTML = '';
    }
}
