/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HMSNearby, HMSPermission} from '@hmscore/ionic-native-hms-nearby/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private hmsNearby: HMSNearby
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.hmsNearby.requestPermissions([
          HMSPermission.PERMISSION_BLUETOOTH,
          HMSPermission.PERMISSION_BLUETOOTH_ADMIN,
          HMSPermission.PERMISSION_ACCESS_WIFI_STATE,
          HMSPermission.PERMISSION_CHANGE_WIFI_STATE,
          HMSPermission.PERMISSION_ACCESS_COARSE_LOCATION,
          HMSPermission.PERMISSION_ACCESS_FINE_LOCATION,
          HMSPermission.PERMISSION_READ_EXTERNAL_STORAGE,
          HMSPermission.PERMISSION_WRITE_EXTERNAL_STORAGE
      ]).then((res) => {
          console.log("request permissions result: " + res);
      });
    });

    
  }
}
