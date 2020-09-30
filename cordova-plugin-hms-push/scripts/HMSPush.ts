/*
  Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
  */
 import { asyncExec as exec } from './utils'
import {RemoteMessageBuilder} from './RemoteMessageBuilder'
export {CordovaRemoteMessage} from './CordovaRemoteMessage'
export {RemoteMessageBuilder}
export {HmsPushResultCode} from './HmsPushResultCode'


 let HMSPush: string = "HMSPush";

 export function init(){
     runHmsInstance("init")
 }
 export function turnOnPush(): Promise<string> {
     return runHmsMessaging("turnOnPush");
 }
 
 export function turnOffPush(): Promise<string> {
     return runHmsMessaging("turnOffPush");
 }
 
 export function getId(): Promise<string> {
     return runHmsInstance("getId");
 }
 
 export function getAAID(): Promise<string> {
     return runHmsInstance("getAAID");
 }
 
 export function getToken(): Promise<string> {
     return runHmsInstance("getToken");
 }
 
 export function getCreationTime(): Promise<string> {
     return runHmsInstance("getCreationTime");
 }
 
 export function deleteAAID(): Promise<string> {
     return runHmsInstance("deleteAAID");
 }
 
 export function deleteToken(): Promise<string> {
     return runHmsInstance("deleteToken");
 }
 
 export function subscribe(args: string): Promise<string> {
     return runHmsMessaging("subscribe", args);
 }
 
 export function unsubscribe(args: string): Promise<string> {
     return runHmsMessaging("unsubscribe", args);
 }
 
 export function setAutoInitEnabled(args: string): Promise<string> {
     return runHmsMessaging("setAutoInitEnabled", args);
 }
 
 export function isAutoInitEnabled(args: string): Promise<string> {
     return runHmsMessaging("isAutoInitEnabled");
 }
 
 export function sendRemoteMessage(args: any):Promise<any> {
     return runHmsMessaging("sendRemoteMessage", args)
 }

 export function getInitialNotification():Promise<any>{
    return runHmsMessaging("getInitialNotification")
}

export function enableLogger():Promise<any>{
    return runHmsInstance("enableLogger")
}

export function disableLogger():Promise<any>{
    return runHmsInstance("disableLogger")
}

export function getOdid():Promise<any>{
    return runHmsInstance("getOdid")
}
 
function runHmsMessaging(funcName:string, args?:any) {
    return exec(HMSPush,'ACTION_HMS_PUSH_MESSAGING', [funcName,args]);
}

function runHmsInstance(funcName:string, args?:any) {
    return exec(HMSPush, 'ACTION_HMS_PUSH_INSTANCE_ID', [funcName,args]);
}
 
