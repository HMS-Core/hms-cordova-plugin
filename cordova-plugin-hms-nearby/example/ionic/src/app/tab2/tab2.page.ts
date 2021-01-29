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
import { ChangeDetectorRef, Component } from '@angular/core';
import { HMSNearby, HMSNearbyEvent, Message, PutOption, GetOption,
   MessagePolicyDistanceType, MessagePolicyFindingMode, MessagePolicyTtlSeconds,
   GET_OPTION_DEFAULT, MESSAGE_POLICY_BLE_ONLY, MESSAGE_PICKER_INCLUDE_ALL_TYPES } from '@hmscore/ionic-native-hms-nearby/ngx';
import { ToastController } from '@ionic/angular';
import { StringUtilsService } from '../_utils/string-utils.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textMessage;
  Status = Status;
  currentStatus = Status.IDLE;
  messages = [];

  getOptions = [
    {
      name: 'Default',
      value: GET_OPTION_DEFAULT
    },
    {
      name: 'BLE Only',
      value: {
        policy: MESSAGE_POLICY_BLE_ONLY,
        picker: MESSAGE_PICKER_INCLUDE_ALL_TYPES
      }
    },
    {
      name: 'Custom',
      value: {
        picker: {
          namespaceTypes: [
            {
              namespace: 'testnamespace',
              type: 'testType'
            }
          ]
        },
        policy: {
          ttlSeconds: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE
        }
      }
    }
  ];
  currentGetOption = GET_OPTION_DEFAULT;

  distanceTypes = [
    {
      name: 'Default',
      value: MessagePolicyDistanceType.POLICY_DISTANCE_TYPE_DEFAULT
    },
    {
      name: 'Earshot',
      value: MessagePolicyDistanceType.POLICY_DISTANCE_TYPE_EARSHOT
    }
  ];
  findingModes = [
    {
      name: 'Default',
      value: MessagePolicyFindingMode.POLICY_FINDING_MODE_DEFAULT
    },
    {
      name: 'Broadcast',
      value: MessagePolicyFindingMode.POLICY_FINDING_MODE_BROADCAST
    },
    {
      name: 'Scan',
      value: MessagePolicyFindingMode.POLICY_FINDING_MODE_SCAN
    }
  ];
  ttlSeconds = [
    {
      name: 'Default',
      value: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_DEFAULT
    },
    {
      name: 'Max',
      value: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_MAX
    },
    {
      name: 'Infinite',
      value: MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_INFINITE
    }
  ];

  currentDistanceType = MessagePolicyDistanceType.POLICY_DISTANCE_TYPE_DEFAULT;
  currentFindingMode = MessagePolicyFindingMode.POLICY_FINDING_MODE_DEFAULT;
  currentTtlSeconds = MessagePolicyTtlSeconds.POLICY_TTL_SECONDS_DEFAULT;

  constructor(private hmsNearby: HMSNearby, private strUtils: StringUtilsService, public toastController: ToastController, private cd: ChangeDetectorRef) {
    // add hms nearby event listeners
    this.addListeners();
  }

  // add plugin listeners
  addListeners() {
    this.hmsNearby.on(HMSNearbyEvent.EVENT_MESSAGE_ON_FOUND, (res: Message) => {
      console.log('Message found: ' + JSON.stringify(res));

      const text = this.strUtils.convertToString(res.content);
      console.log("text: " + text);
      
      const message = {
        namespace: res.namespace,
        type: res.type,
        text: text
      }
      this.messages.push(message);
      this.cd.detectChanges();
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_MESSAGE_ON_LOST, (res) => {
      console.log('Message lost: ' + JSON.stringify(res));

      const text = this.strUtils.convertToString(res.content);

      const index = this.messages.findIndex(item => (item.namespace === res.namespace && item.type === res.type && item.text === text));
      if (index === -1) {
          console.log("Index not found for message: " + text);
          return;
      }
      this.messages.splice(index, 1);
      this.cd.detectChanges();
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED, (res) => {
      console.log('Message Ble Signal Changed: ' + JSON.stringify(res));
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_MESSAGE_ON_DISTANCE_CHANGED, (res) => {
      console.log('Message Distance Changed: ' + JSON.stringify(res));
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_GET_ON_TIMEOUT, (res) => {
      console.log('Get on Timeout: ' + JSON.stringify(res));
      this.currentStatus = Status.IDLE;
    });

    console.log('listeners added');
  }

  putMessage() {
    const message: Message = {
      content: this.strUtils.convertToByteArray(this.textMessage),
      type: 'testType'
    }

    const putOption: PutOption = {
      policy: {
        distanceType: this.currentDistanceType,
        findingMode: this.currentFindingMode,
        ttlSeconds: this.currentTtlSeconds
      }
    }
    this.hmsNearby.put(message, putOption).then((res) => {
      console.log('Message put success: ' + res);
      this.presentToast('Message put success');
    }).catch(e => {
      console.log('Message put error: ' + e);
      this.presentToast('Message put error');
    });
  }

  unputMessage() {
    const message: Message = {
      content: this.strUtils.convertToByteArray(this.textMessage),
      type: 'testType'
    }
    this.hmsNearby.unput(message).then((res) => {
      console.log('Message unput success: ' + res);
      this.presentToast('Message unput success');
    }).catch(e => {
      console.log('Message unput error: ' + e);
      this.presentToast('Message unput error');
    });
  }

  getMessages() {
    this.messages = [];
    console.log("current get option: " + JSON.stringify(this.currentGetOption));
    
    this.hmsNearby.get(this.currentGetOption).then((res) => {
      console.log('Message get success: ' + res);
      this.currentStatus = Status.SEARCHING;
    });
  }

  ungetMessages() {
    this.hmsNearby.unget().then((res) => {
      console.log('Message unget success: ' + res);
      this.currentStatus = Status.IDLE;
    });
  }

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
