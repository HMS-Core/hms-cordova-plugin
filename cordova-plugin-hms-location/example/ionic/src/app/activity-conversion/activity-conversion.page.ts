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
import {ActivityConversionResponse, ActivityType, ConversionType, Events, HMSLocation} from '@hmscore/ionic-native-hms-location/ngx';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-activity-conversion',
    templateUrl: './activity-conversion.page.html',
    styleUrls: ['./activity-conversion.page.scss'],
})
export class ActivityConversionPage {
    addRequestCode: any;
    deleteRequestCode: any;
    private activityConversionUpdateRequests = [];
    private activityConversions = [];
    private activityService;
    private conversionTypeSelect: any;
    private activityTypeSelect: any;
    private conversionListLog;
    private conversionEventLog;
    private newElement: any;

    constructor(private platform: Platform, private hmsLocation: HMSLocation) {
        platform.ready().then(value => {
            this.conversionTypeSelect = document.getElementById('conversionTypeSelect');
            this.activityTypeSelect = document.getElementById('activityTypeSelect');
            this.conversionListLog = document.getElementById('conversionListLog');
            this.conversionEventLog = document.getElementById('conversionEventLog');
            this.newElement = document.createElement('label');
            this.activityService = hmsLocation.getActivityIdentificationService();
            this.newElement.classList.add('alert');
            this.newElement.classList.add('d-block');
            this.newElement.classList.add('text-center');
            this.newElement.role = 'alert';
            hmsLocation.addListener(Events.ACTIVITY_CONVERSION_RESULT, (data: ActivityConversionResponse) => {
                const conversionEventLog = document.getElementById('conversionEventLog');
                conversionEventLog.innerHTML = JSON.stringify(data) + conversionEventLog.innerHTML;
            });
        }).catch(reason => console.log(reason));
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
        console.log(isGranted);
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

    addToList() {
        let currentConversionType;
        let currentActivityType;
        let selectedValue: any = this.conversionTypeSelect.options[this.conversionTypeSelect.selectedIndex].value;
        if (selectedValue === ConversionType.ENTER_ACTIVITY_CONVERSION.toString()) {
            currentConversionType = ConversionType.ENTER_ACTIVITY_CONVERSION;
        } else {
            currentConversionType = ConversionType.EXIT_ACTIVITY_CONVERSION;
        }
        console.log(this.activityTypeSelect.options[this.activityTypeSelect.selectedIndex].value);
        selectedValue = this.activityTypeSelect.options[this.activityTypeSelect.selectedIndex].value;
        if (selectedValue === ActivityType.VEHICLE.toString()) {
            currentActivityType = ActivityType.VEHICLE;
        } else if (selectedValue === ActivityType.BIKE.toString()) {
            currentActivityType = ActivityType.BIKE;
        } else if (selectedValue === ActivityType.FOOT.toString()) {
            currentActivityType = ActivityType.FOOT;
        } else if (selectedValue === ActivityType.STILL.toString()) {
            currentActivityType = ActivityType.STILL;
        } else if (selectedValue === ActivityType.OTHERS.toString()) {
            currentActivityType = ActivityType.OTHERS;
        } else if (selectedValue === ActivityType.WALKING.toString()) {
            currentActivityType = ActivityType.WALKING;
        } else {
            currentActivityType = ActivityType.RUNNING;
        }
        const item = {conversionType: currentConversionType, activityType: currentActivityType};
        this.activityConversions.push(item);
        this.conversionListLog.innerHTML = JSON.stringify(item) + '<br>' + this.conversionListLog.innerHTML;
    }

    async createActivityConversionUpdates() {
        const requestCodeValue = parseInt(this.addRequestCode, 10);
        const isSuccess = await this.activityService.createActivityConversionUpdates(requestCodeValue, this.activityConversions, (data) => {
            console.log(JSON.stringify(data));
        });
        this.activityConversionUpdateRequests.push(requestCodeValue);
        this.activityConversions.length = 0;
        this.conversionListLog.innerHTML = '';
        this.addRequestCode = '';
    }

    async deleteActivityConversionUpdates() {
        const requestCodeValue = parseInt(this.deleteRequestCode, 10);
        await this.activityService.deleteActivityConversionUpdates(requestCodeValue);
        this.cleanInputs();
    }

    private cleanInputs() {
        this.conversionListLog.innerHTML = '';
        this.addRequestCode = '';
        this.deleteRequestCode = '';
        this.conversionEventLog.innerHTML = '';
    }
}
