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
import { HMSNearby, HMSNearbyEvent, WifiSharePolicy} from '@hmscore/ionic-native-hms-nearby/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Status = Status;
  currentStatus: Status = Status.IDLE;

  wifiSharePolicies = [
    {
      name: 'Share',
      value: WifiSharePolicy.POLICY_SHARE
    },
    {
      name: 'Set',
      value: WifiSharePolicy.POLICY_SET
    }
  ];
  currentPolicy:WifiSharePolicy = WifiSharePolicy.POLICY_SHARE;

  constructor(private hmsNearby: HMSNearby, public toastController: ToastController) {
    // add hms nearby event listeners
    this.addListeners();
  }

  // add hms wifi listeners
  addListeners() {
    // on wifi found
    this.hmsNearby.on(HMSNearbyEvent.EVENT_WIFI_ON_FOUND, (res) => {
      console.log('Wifi on found: ' + JSON.stringify(res));

      // share config
      this.hmsNearby.shareWifiConfig(res.endpointId).then((res2) => {
        console.log('Share wifi config success: ' + res2);
      }).catch(e => {
        console.log('Share wifi config error: ' + e);
      });
    });

    // on wifi lost
    this.hmsNearby.on(HMSNearbyEvent.EVENT_WIFI_ON_LOST, (res) => {
      console.log('Wifi on lost: ' + JSON.stringify(res));
    });

    // on fetch auth code
    this.hmsNearby.on(HMSNearbyEvent.EVENT_WIFI_ON_FETCH_AUTH_CODE, (res) => {
      console.log('Wifi on fetch auth code: ' + JSON.stringify(res));

      this.presentToast('authCode: ' + res.authCode);
    });

    // on result
    this.hmsNearby.on(HMSNearbyEvent.EVENT_WIFI_ON_SHARE_RESULT, (res) => {
      console.log('Wifi on share result: ' + JSON.stringify(res));
      
      if (res.statusCode == 0) {
        this.presentToast('Wifi successfully shared');
      }
    });

    console.log('listeners added');
  }

  // start wifi share with policy share / set
  startWifiShare() {
    this.hmsNearby.startWifiShare(this.currentPolicy).then((res) => {
      console.log('Start wifi share success: ' + res);
      this.presentToast('Start wifi share success');
      this.currentStatus = Status.SEARCHING;
    }).catch(e => {
      console.log('Start wifi share error: ' + e);
      this.presentToast('Start wifi share error');
    });
  }

  // stop wifi share
  stopWifiShare() {
    this.hmsNearby.stopWifiShare().then((res) => {
      console.log('Wifi share stop success: ' + res);
      this.presentToast('Wifi share stop success');
      this.currentStatus = Status.IDLE;
    }).catch(e => {
      console.log('Wifi share stop error: ' + e);
      this.presentToast('Wifi share stop error');
    });
  }

  // present toast message
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}

enum Status {
  IDLE = 'Idle',
  SEARCHING = 'Searching'
}
