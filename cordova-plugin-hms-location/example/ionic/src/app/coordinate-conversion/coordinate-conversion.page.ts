/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import { Component } from '@angular/core';
import { HMSLocation, LonLat } from '@hmscore/ionic-native-hms-location/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-coordinate-conversion',
    templateUrl: './coordinate-conversion.page.html',
    styleUrls: ['./coordinate-conversion.page.scss'],
})
export class CoordinateConversionPage {

    longitude: any;
    latitude: any;
    coordinateType: any;

    private getConvertCoordinateLog;
    private coordinateConversionService;
    constructor(private platform: Platform, private hmsLocation: HMSLocation) {
        platform.ready().then(value => {
            this.coordinateConversionService = hmsLocation.getCoordinateConversionService();
            this.getConvertCoordinateLog = document.getElementById('getConvertCoordinateLog');
        }).catch(reason => console.log(reason));
    }

    async convertCoordinate() {
        try {
            const convertLonLat: LonLat = await this.coordinateConversionService.convertCoord(this.longitude, this.latitude, this.coordinateType);
            this.getConvertCoordinateLog.innerHTML = JSON.stringify(convertLonLat);
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }

}
