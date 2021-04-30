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
import {Platform} from '@ionic/angular';
import {
    BackgroundManager,
    Events,
    FusedLocationService,
    HMSLocation,
    LatLng,
    LocationResult,
    NavigationRequestConstants,
    PriorityConstants,
    RequestType
} from '@hmscore/ionic-native-hms-location/ngx';

@Component({
    selector: 'app-location',
    templateUrl: './location.page.html',
    styleUrls: ['./location.page.scss'],
})
export class LocationPage {
    addRequestCode: string;
    removeRequestCode: any;
    addRequestCodeEx: any;
    latitude: any;
    longitude: any;
    private fusedClient: FusedLocationService;
    private locationUpdateRequests = [];
    private newElement;

    constructor(private platform: Platform, private hmsLocation: HMSLocation) {
        platform.ready().then(value => {
            this.fusedClient = hmsLocation.getFusedLocationProviderClient();
            if (this.fusedClient == null) {
                console.log('null');
            }
            this.newElement = document.createElement('label');
            this.newElement.classList.add('alert');
            this.newElement.classList.add('d-block');
            this.newElement.classList.add('text-center');
            this.newElement.role = 'alert';
            hmsLocation.addListener(Events.ON_LOCATION_RESULT, (data: LocationResult) => {
                console.log(JSON.stringify(data));
                const log = document.getElementById('locationUpdateLogs');
                log.innerHTML = JSON.stringify(data) + log.innerHTML;
            });
        });
    }

    async requestLocationPermission() {
        const button = document.getElementById('requestLocationPermission');
        const result = await this.fusedClient.requestLocationPermission();
        if (result === true) {
            this.newElement.innerHTML = 'Permission is granted.';
            this.newElement.classList.remove('alert-danger');
            this.newElement.classList.add('alert-success');
        } else {
            this.newElement.innerHTML = 'Permission is denied.';
            this.newElement.classList.remove('alert-success');
            this.newElement.classList.add('alert-danger');
        }
        button.parentNode.insertBefore(this.newElement, button.nextSibling);
    }

    async hasLocationPermission() {
        const button = document.getElementById('hasLocationPermission');
        const isGranted = await this.fusedClient.hasLocationPermission();
        if (isGranted === true) {
            this.newElement.innerHTML = 'TRUE';
            this.newElement.classList.remove('alert-danger');
            this.newElement.classList.add('alert-success');
        } else {
            this.newElement.innerHTML = 'FALSE';
            this.newElement.classList.remove('alert-success');
            this.newElement.classList.add('alert-danger');
        }
        button.parentNode.insertBefore(this.newElement, button.nextSibling);
    }

    async requestLocationUpdates() {
        const request = {id: 'locationRequest' + Math.random() * 10000, priority: PriorityConstants.PRIORITY_HIGH_ACCURACY, interval: 3000};
        const requestCodeValue = parseInt(this.addRequestCode, 10);
        console.log(requestCodeValue);
        const isSuccess = await this.fusedClient.requestLocationUpdates(requestCodeValue, request, (locationResult) => {
            console.log('Background event is called.' + JSON.stringify(locationResult));
            const notification = {
                contentTitle: 'Current Location',
                category: 'service',
                priority: 4,
                channelName: 'MyChannel',
                smallIcon: 'splash',
                contentText: 'Lat: ' + locationResult.lastLocation.latitude + ' - Lng: ' + locationResult.lastLocation.longitude
            };
            BackgroundManager.notify(1, JSON.stringify(notification));
            // BackgroundManager.makeToast('Lat: ' + locationResult.lastLocation.latitude + ' - Lng: ' + locationResult.lastLocation.longitude, 1000);
        });
        this.locationUpdateRequests.push(requestCodeValue);
    }

    async removeLocationUpdates() {
        const log = document.getElementById('removeLocationUpdatesLog');
        const requestCode = parseInt(this.removeRequestCode, 10);
        const selectElem: any = document.getElementById('removeTypeSelect');
        let type: RequestType;
        if (selectElem.options[selectElem.selectedIndex].value === RequestType.LOCATION_CALLBACK) {
            type = RequestType.LOCATION_CALLBACK;
        } else {
            type = RequestType.PENDING_INTENT;
        }
        await this.fusedClient.removeLocationUpdates(requestCode, type);
        log.innerHTML = 'Location provider with request code ' + requestCode + ' is removed.' + log.innerHTML;
        this.locationUpdateRequests.length = 0;
    }

    async requestLocationUpdatesEx() {
        const requestCodeValue = parseInt(this.addRequestCodeEx, 10);
        const request = {id: 'locationRequest' + Math.random() * 10000, priority: PriorityConstants.PRIORITY_HIGH_ACCURACY, interval: 1000};
        const isSuccess = await this.fusedClient.requestLocationUpdatesEx(requestCodeValue, request);
        this.locationUpdateRequests.push(requestCodeValue);
    }

    async getLastLocation() {
        const log = document.getElementById('getLastLocationLog');
        const lastLocation = await this.fusedClient.getLastLocation();
        log.innerHTML = JSON.stringify(lastLocation);
    }

    async getLastLocationWithAddress() {
        const log = document.getElementById('getLastLocationWithAddressLog');
        const request = {id: 'locationRequest' + Math.random() * 10000, priority: PriorityConstants.PRIORITY_HIGH_ACCURACY, interval: 1000};
        const getLastLocationWithAddressResult = await this.fusedClient.getLastLocationWithAddress(request);
        log.innerHTML = JSON.stringify(getLastLocationWithAddressResult);
    }

    async getLocationAvailability() {
        const log = document.getElementById('getLocationAvailabilityLog');
        const locationAvailability = await this.fusedClient.getLocationAvailability();
        log.innerHTML = JSON.stringify(locationAvailability);
    }

    async flushLocations() {
        const log = document.getElementById('flushLocationsLog');
        const flushLocationsResult = await this.fusedClient.flushLocations();
        log.innerHTML = flushLocationsResult + '';
    }

    async checkLocationSettings() {
        const log = document.getElementById('checkLocationSettingsLog');
        const request = {id: 'locationRequest' + Math.random() * 10000, priority: PriorityConstants.PRIORITY_HIGH_ACCURACY, interval: 1000};
        const locationSettingsResult = await this.fusedClient.checkLocationSettings({
            alwaysShow: true,
            needBle: true,
            locationRequests: [request]
        });
        log.innerHTML = JSON.stringify(locationSettingsResult);
    }

    async getNavigationContextState() {
        const log = document.getElementById('getNavigationContextStateLog');
        const getNavigationContextStateResult = await this.fusedClient.getNavigationContextState(NavigationRequestConstants.IS_SUPPORT_EX);
        log.innerHTML = JSON.stringify(getNavigationContextStateResult);
    }

    async setMockLocation() {
        const latitudeValue = parseInt(this.latitude, 10);
        const longitudeValue = parseInt(this.longitude, 10);
        const log = document.getElementById('setMockLocationLogs');
        const latLng: LatLng = {latitude: latitudeValue, longitude: longitudeValue};
        const setMockLocationResult = await this.fusedClient.setMockLocation(latLng);
        console.log('Result: ' + setMockLocationResult);
        log.innerHTML = setMockLocationResult + ' ';
    }

    async setMockMode() {
        const log = document.getElementById('setMockModeLogs');
        const result = await this.fusedClient.setMockMode(true);
        log.innerHTML = result + '';
    }

}
