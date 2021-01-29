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
import { Router } from '@angular/router';
import { HMSAwareness, HMSPermission } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private hmsAwareneess: HMSAwareness, private router: Router) { }

  public async hasPermission() {
    try {
      const permission = await this.hmsAwareneess.hasPermission(HMSPermission.PERMISSION_ACCESS_FINE_LOCATION);
      alert(JSON.stringify(permission));
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  
  public async requestPermissions() {
    try {
      await this.hmsAwareneess.requestPermissions(HMSPermission.PERMISSION_ACCESS_FINE_LOCATION, HMSPermission.PERMISSION_ACCESS_COARSE_LOCATION);
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  }
  goCaptureSample() {
    this.router.navigate(['capture-sample']);
  }
  goBarrierSample() {
    this.router.navigate(['barrier-sample']);
  }
}
