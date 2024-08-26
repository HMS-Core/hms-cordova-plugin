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
import { Component } from '@angular/core';
import { GetFromLocationNameRequest, GetFromLocationRequest, HMSLocation, HWLocation } from '@hmscore/ionic-native-hms-location/ngx';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-geocoder',
    templateUrl: './geocoder.page.html',
    styleUrls: ['./geocoder.page.scss'],
})
export class GeocoderPage {

    longitude: any;
    latitude: any;
    maxResults: any;

    locationName: any;
    locationNameMaxResults: any;
    lowerLeftLatitude: any;
    lowerLeftLongitude: any;
    upperRightLatitude: any;
    upperRightLongitude: any;

    private getFromLocationLog;
    private getFromLocationNameLog;
    private geocoderService;
    constructor(private platform: Platform, private hmsLocation: HMSLocation) {
        platform.ready().then(value => {
            this.geocoderService = hmsLocation.getGeocoderService("zh", "CN");
            this.getFromLocationLog = document.getElementById('getFromLocationLog');
            this.getFromLocationNameLog = document.getElementById('getFromLocationNameLog');
        }).catch(reason => console.log(reason));
    }

    async getFromLocation() {
        try {
            const getFromLocationRequest: GetFromLocationRequest = {
                longitude: 116.501717,
                latitude: 39.985071,
                maxResults: 3
            };
            if (this.longitude !== '' && this.longitude !== undefined) {
                getFromLocationRequest.longitude = this.longitude;
            }
            if (this.latitude !== '' && this.latitude !== undefined) {
                getFromLocationRequest.latitude = parseInt(this.latitude, 10);
            }
            if (this.maxResults !== '' && this.maxResults !== undefined) {
                getFromLocationRequest.maxResults = this.maxResults;
            }
            const hwLocationList: HWLocation[] = await this.geocoderService.getFromLocation(getFromLocationRequest);
            this.getFromLocationLog.innerHTML = JSON.stringify(hwLocationList);
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }
    async getFromLocationName() {
        try {
            const getFromLocationNameRequest: GetFromLocationNameRequest = {
                locationName: "Changjiang Community, Huannan Road, Binjiang District, Hangzhou City, Zhejiang Province",
                maxResults: 3
            };
            if (this.locationName !== '' && this.locationName !== undefined) {
                getFromLocationNameRequest.locationName = this.locationName;
            }
            if (this.locationNameMaxResults !== '' && this.locationNameMaxResults !== undefined) {
                getFromLocationNameRequest.maxResults = parseInt(this.locationNameMaxResults, 10);
            }
            if (this.lowerLeftLatitude !== '' && this.lowerLeftLatitude !== undefined) {
                getFromLocationNameRequest.corner.lowerLeftLatitude = this.lowerLeftLatitude;
            }
            if (this.lowerLeftLongitude !== '' && this.lowerLeftLongitude !== undefined) {
                getFromLocationNameRequest.corner.lowerLeftLongitude = this.lowerLeftLongitude;
            }
            if (this.upperRightLatitude !== '' && this.upperRightLatitude !== undefined) {
                getFromLocationNameRequest.corner.upperRightLatitude = this.upperRightLatitude;
            }
            if (this.upperRightLongitude !== '' && this.upperRightLongitude !== undefined) {
                getFromLocationNameRequest.corner.upperRightLongitude = this.upperRightLongitude;
            }
            const hwLocationList: HWLocation[] = await this.geocoderService.getFromLocationName(getFromLocationNameRequest);
            this.getFromLocationNameLog.innerHTML = JSON.stringify(hwLocationList);
        } catch (error) {
            alert(JSON.stringify(error));
        }
    }
}
