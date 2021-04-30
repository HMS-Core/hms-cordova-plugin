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
import {ActivityIdentificationResponse, Events, HMSLocation} from '@hmscore/ionic-native-hms-location/ngx';

@Component({
    selector: 'app-activity-identification',
    templateUrl: './activity-identification.page.html',
    styleUrls: ['./activity-identification.page.scss'],
})
export class ActivityIdentificationPage {
    intervalMillis: any;
    addRequestCode: any;
    deleteRequestCode: any;
    private activityIdentificationUpdateRequests = [];
    private activityService;
    private newElement: any = document.createElement('label');

    constructor(private hmsLocation: HMSLocation) {
        console.log('constructor');
        this.activityService = hmsLocation.getActivityIdentificationService();
        this.newElement.classList.add('alert');
        this.newElement.classList.add('d-block');
        this.newElement.classList.add('text-center');
        this.newElement.role = 'alert';
        hmsLocation.addListener(Events.ACTIVITY_IDENTIFICATION_RESULT, (data: ActivityIdentificationResponse) => {
            console.log(JSON.stringify(data));
            const log = document.getElementById('identificationEventLog');
            log.innerHTML = JSON.stringify(data) + log.innerHTML;
        });
    }

    async requestActivityIdentificationPermission() {
        const button = document.getElementById('requestActivityIdentificationPermission');
        const result = await this.activityService.requestActivityRecognitionPermission();
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

    async hasPermission() {
        const button = document.getElementById('hasPermission');
        const isGranted = await this.activityService.hasActivityRecognitionPermission();
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

    async createActivityIdentificationUpdates() {
        let intervalMillisValue = 2000;
        if (this.intervalMillis !== '' && this.intervalMillis !== undefined) {
            intervalMillisValue = parseInt(this.intervalMillis, 10);
        }
        const requestCodeValue = parseInt(this.addRequestCode, 10);
        const isSuccess = await this.activityService.createActivityIdentificationUpdates(requestCodeValue, intervalMillisValue, (data) => {
            console.log(JSON.stringify(data));
        });
        console.log(isSuccess);
        this.activityIdentificationUpdateRequests.push(requestCodeValue);
        document.getElementById('identificationEventLog').innerHTML = '';
    }

    async deleteActivityIdentificationUpdates() {
        const requestCodeValue = parseInt(this.deleteRequestCode, 10);
        const isSuccess = await this.activityService.deleteActivityIdentificationUpdates(requestCodeValue);
        console.log(isSuccess);
        document.getElementById('identificationEventLog').innerHTML = '';
    }
}
