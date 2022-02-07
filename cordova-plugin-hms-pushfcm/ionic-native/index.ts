/*
    Copyright 2021-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

import { Injectable } from "@angular/core";
import { Plugin, Cordova, IonicNativePlugin } from "@ionic-native/core";

@Plugin({
    pluginName: "HMSPushFcmProxy",
    plugin: "@hmscore/cordova-plugin-hms-pushfcm",
    pluginRef: "HMSPushFcmProxy",
    repo: "https://github.com/HMS-Core/hms-cordova-plugin",
    platforms: ["Android"],
})
@Injectable()
export class HMSPushFcmProxy extends IonicNativePlugin {

    @Cordova({ otherPromise: true })
    init(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    isProxyInitEnabled(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    setCountryCode(countryCode: string): Promise<void> {
        return;
    }

    @Cordova({ otherPromise: true })
    enableLogger(): Promise<boolean> {
        return;
    }

    @Cordova({ otherPromise: true })
    disableLogger(): Promise<boolean> {
        return;
    }
}