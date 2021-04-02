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
import {HMSAvailability} from '@hmscore/ionic-native-hms-availability/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private hmsAvailability: HMSAvailability) {
    }

    async checkServiceAvailability() {
        const result = await this.hmsAvailability.isHuaweiMobileServicesAvailable(1005300);
        alert(result);
    }

    async isHuaweiMobileNoticeAvailable() {
        const result = await this.hmsAvailability.isHuaweiMobileNoticeAvailable();
        alert(result);
    }

    async getApiMap() {
        const result = await this.hmsAvailability.getApiMap();
        alert(JSON.stringify(result));
    }

    async getServicesVersionCode() {
        const code = await this.hmsAvailability.getServicesVersionCode();
        alert(code);
    }

    async setServicesVersionCode() {
        await this.hmsAvailability.setServicesVersionCode(50000000);
        const newVersionCode = await this.hmsAvailability.getServicesVersionCode();
        alert(newVersionCode);
    }

    async isUserResolvableError() {
        const result = await this.hmsAvailability.isUserResolvableError(1);
        alert(result);
    }

    async getErrorString() {
        const result = await this.hmsAvailability.getErrorString(2);
        alert(result);
    }

    async resolveError() {
        await this.hmsAvailability.resolveError(2, 111);
    }

    async showErrorDialogFragment() {
        await this.hmsAvailability.showErrorDialogFragment(2, 111, () => {
            alert('OnCancel called');
        });
    }

    async showErrorNotification() {
        await this.hmsAvailability.showErrorNotification(2);
    }
}
