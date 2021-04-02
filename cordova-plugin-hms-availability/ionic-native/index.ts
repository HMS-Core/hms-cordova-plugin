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

import {Injectable} from '@angular/core';
import {Cordova, IonicNativePlugin, Plugin} from '@ionic-native/core';

@Plugin({
    pluginName: 'HMSAvailability',
    plugin: 'cordova-plugin-hms-availability',
    pluginRef: 'HMSAvailability',
    repo: '',
    platforms: ['Android', 'iOS'],
})
@Injectable()
export class HMSAvailability extends IonicNativePlugin {
    /**
     * Checks whether HMS Core is installed.
     * @return {Promise<number>}
     */
    @Cordova({otherPromise: true})
    isHuaweiMobileServicesAvailable(minApkVersion?: number): Promise<number> {
        return;
    }

    @Cordova({otherPromise: true})
    isHuaweiMobileNoticeAvailable(): Promise<number> {
        return;
    }

    @Cordova({otherPromise: true})
    getApiMap(): Promise<ApiMap> {
        return;
    }

    @Cordova({otherPromise: true})
    getServicesVersionCode(): Promise<number> {
        return;
    }

    @Cordova({otherPromise: true})
    setServicesVersionCode(servicesVersionCode: number): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    isUserResolvableError(errorCode: number): Promise<boolean> {
        return;
    }

    @Cordova({otherPromise: true})
    getErrorString(errorCode: number): Promise<string> {
        return;
    }

    @Cordova({otherPromise: true})
    resolveError(errorCode: number, requestCode: number): Promise<void> {
        return;
    }

    @Cordova({otherPromise: true})
    showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void): Promise<boolean> {
        return;
    }

    @Cordova({otherPromise: true})
    showErrorNotification(errorCode: number): Promise<void> {
        return;
    }
}

interface ApiMap {
    'HuaweiIap.API': number,
    'HuaweiID.API': number,
    'HuaweiGame.API': number,
    'HuaweiPay.API': number,
    'HuaweiSns.API': number,
    'HuaweiOpenDevice.API': number,
    'HuaweiPPSkit.API': number,
    'HuaweiPush.API': number
}
