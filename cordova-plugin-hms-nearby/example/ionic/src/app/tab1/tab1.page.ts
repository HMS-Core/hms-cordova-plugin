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
import { HMSNearby, HMSNearbyEvent, Policy, DataType, TransferState, StatusCode } from '@hmscore/ionic-native-hms-nearby/ngx';
import { ToastController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { StringUtilsService } from '../_utils/string-utils.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private myName: string;
  private friendName: string;
  private textMessage: string;

  private connectionStatus: ConnectionStatus = ConnectionStatus.IDLE;
  ConnectionStatus = ConnectionStatus;
  currentEndpoint: string;

  messages = [];
  // messages = [
  //   {
  //     name: 'a',
  //     text: 'aasd',
  //     slot: 'end',
  //     align: 'right'
  //   },
  //   {
  //     name: 'a',
  //     text: 'aasd',
  //     slot: 'start',
  //     align: 'left'
  //   },
  // ];

  constructor(public toastController: ToastController, 
    private cd: ChangeDetectorRef, 
    private fileChooser: FileChooser, 
    private strUtils: StringUtilsService, 
    private hmsNearby: HMSNearby) {
    // add hms nearby event listeners
    this.addListeners();
  }


  startSearching() {
    if(!this.myName || !this.friendName){
      this.presentToast('Names cannot be empty');
      return;
    } 

    // start chat
    if (this.myName.localeCompare(this.friendName) > 0){
      // start broadcasting
      const serviceId = this.myName + this.friendName;
      this.startBroadcasting(this.myName, serviceId);
    } else  {
      // start scan
      const serviceId = this.friendName + this.myName;
      this.startScan(serviceId);
    } 
  }

  stopSearching() {
    // stop searching
    if (this.myName.localeCompare(this.friendName) > 0){
      this.stopBroadcasting();
    } else  {
      this.stopScan();
    }
  }

  endChat() {
    this.disconnect(this.currentEndpoint);
  }

  // change status
  setConnectionStatus(status: ConnectionStatus) {
    if(status == ConnectionStatus.CONNECTED){
      this.clearMessagePane();
    } 

    this.connectionStatus = status;
    this.cd.detectChanges();
  }

  // add message to list
  pushMessage(name, text, slot, align){
    this.messages.push({
      name: name,
      text: text,
      slot: slot,
      align: align
    });
    this.cd.detectChanges();
  }

  // clear message pane
  clearMessagePane(){
    this.messages = [];
    this.cd.detectChanges();
  }

  // add plugin listeners
  addListeners() {
    this.hmsNearby.on(HMSNearbyEvent.EVENT_CONNECTION_ON_ESTABLISH, (res) => {
      console.log("connection established: " + JSON.stringify(res));
      this.acceptConnect(res.endpointId);
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_CONNECTION_ON_RESULT, (res) => {
      console.log("connection result: " + JSON.stringify(res));
      
      if(res.statusCode == StatusCode.STATUS_SUCCESS) {
        this.setConnectionStatus(ConnectionStatus.CONNECTED);
        this.currentEndpoint = res.endpointId;
        this.presentToast('Connection success');
      } else {
        this.setConnectionStatus(ConnectionStatus.IDLE);
        this.presentToast('Connection rejected');
      }
      this.stopSearching();
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_CONNECTION_ON_DISCONNECT, (res) => {
      console.log("disconnected: " + JSON.stringify(res));
      this.setConnectionStatus(ConnectionStatus.IDLE);
      this.currentEndpoint = null;
      this.presentToast('Disconnected');
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_SCAN_ON_FOUND, (res) => {
      console.log("onFound: " + JSON.stringify(res));
      this.requestConnect(this.myName, res.endpointId);
    });

    this.hmsNearby.on(HMSNearbyEvent.EVENT_DATA_ON_RECEIVED, (res) => {
      console.log("onReceived: " + JSON.stringify(res));

      if (res.dataType === DataType.DATA_BYTES) {
        const text = this.strUtils.convertToString(res.data);
        console.log("text: " + text);
        this.pushMessage(this.friendName, text, 'start', 'left');
      } else if (res.dataType === DataType.DATA_FILE) {
        console.log("file receiving, name:" + res.dataId);
        this.pushMessage(this.friendName, 'File is receiving(Nearby/'+res.dataId+')', 'start', 'left');
      }
    });
    
    this.hmsNearby.on(HMSNearbyEvent.EVENT_DATA_ON_TRANSFER_UPDATE, (res) => {
      console.log("onTransferUpdate: " + JSON.stringify(res));
      if (res.status === TransferState.TRANSFER_STATE_SUCCESS) {
        // transfer success
      }
    });
  }

  // Connection
  startBroadcasting(name: string, serviceId: string) {
    this.hmsNearby.startBroadcasting(name, serviceId, Policy.POLICY_P2P).then(() => {
      console.log("Broadcasting started");
      this.setConnectionStatus(ConnectionStatus.SEARCHING);
    });
  }

  stopBroadcasting() {
    this.hmsNearby.stopBroadcasting().then(() => {
      console.log('Broadcasting Stopped');
      if (this.connectionStatus == ConnectionStatus.SEARCHING)
        this.setConnectionStatus(ConnectionStatus.IDLE);
    });
  }

  startScan(serviceId: string) {
    this.hmsNearby.startScan(serviceId, Policy.POLICY_P2P).then(() => {
      console.log("Scan started");
      this.setConnectionStatus(ConnectionStatus.SEARCHING);
    });
  }

  stopScan() {
    this.hmsNearby.stopScan().then(() => {
      console.log('Scan Stopped');
      if (this.connectionStatus == ConnectionStatus.SEARCHING)
        this.setConnectionStatus(ConnectionStatus.IDLE);
    });
  }

  acceptConnect(endpointId: string) {
    this.hmsNearby.acceptConnect(endpointId);
  }

  requestConnect(name: string, endpointId: string){
    this.hmsNearby.requestConnect(name, endpointId);
  }

  disconnect(endpointId: string) {
    this.hmsNearby.disconnect(endpointId).then((res) => {
      console.log("disconnected: " + JSON.stringify(res));
      this.setConnectionStatus(ConnectionStatus.IDLE);
      this.currentEndpoint = null;
      this.presentToast('Disconnected');
    });
  }

  // Data transfer
  sendText() {
    if (this.textMessage){
      const bytes = this.strUtils.convertToByteArray(this.textMessage);
      this.hmsNearby.sendBytes(bytes, [this.currentEndpoint]).then((res) => {
        this.pushMessage(this.myName, this.textMessage, 'end', 'right');
      });
    }
  }

  sendFile(uri: string) {
    this.hmsNearby.sendFile(uri, [this.currentEndpoint]).then((res) => {
      this.pushMessage(this.myName, 'Selected file is sending', 'end', 'right');
    }); 
  }

  chooseFile() {
    this.fileChooser.open({ "mime": "image/jpeg" }).then(uri => {
      console.log(uri);
      this.sendFile(uri);
    }).catch(e => console.log(e));
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}

enum ConnectionStatus {
  IDLE = 'Idle',
  SEARCHING = 'Searching',
  CONNECTED = 'Connected'
}
