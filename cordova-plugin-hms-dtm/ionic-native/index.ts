/*
    Copyright 2020- 2022. Huawei Technologies Co., Ltd. All rights reserved.
 
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
 
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
 
/**
 * @name HMSDtm
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { HMSDtm } from '@ionic-native/hms-dtm';
 *
 *
 * constructor(private hmsDtm: HMSDtm) { }
 *
 * ...
 *
 *
 * this.hmsDtm.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'HMSDtm',
  plugin: 'com-plugin-hms-dtm', // npm package name, example: cordova-plugin-camera
  pluginRef: 'HMSDtm', // the variable reference to call the plugin, example: navigator.geolocation
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSDtm extends IonicNativePlugin {
 
  @Cordova({ otherPromise: true })
    /**
   * This method is used to listen CustomTag interface class. This listener returns CustomTag values if condition provided
   * @returns Promise<object>
   * @params callback() => {}
   */
  onCustomTag(callback: (data:any) => void): Promise<object> {
    return;
  }
 
  @Cordova({ otherPromise: true })
  setCustomVariable(customVariableObject:CustomVariableObject): Promise<boolean> {
    return;
  }
 
  @Cordova({ otherPromise: true })
  onEvent(eventName:string,bundleObject:BundleObject): Promise<any> {
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
 
interface BundleObject {
  [key:string]:string | number | boolean;
}
 
interface CustomVariableObject{
  varName:string,
  value:string | number | boolean;
}