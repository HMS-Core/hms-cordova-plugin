/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

import { AuthHuaweiId, AuthParams, SignInData } from './HMSCommonTypes'
import { asyncExec } from './utils'


export function signIn(signInData: SignInData, packageName:String): Promise<AuthHuaweiId> {
  return asyncExec('HMSAccount', 'HMSAuthService', ['signIn',signInData ? signInData : [],packageName]);
}

export function signOut(): Promise<void> {
  return asyncExec('HMSAccount', 'HMSAuthService', ['signOut']);
}

export function cancelAuthorization(): Promise<void> {
  return asyncExec('HMSAccount', 'HMSAuthService', ['cancelAuthorization']);
}

export function silentSignIn(authParams: AuthParams,packageName:String): Promise<AuthHuaweiId> {
  return asyncExec('HMSAccount', 'HMSAuthService', ['silentSignIn',authParams,packageName]);
}

export function enableLogger(): Promise<void> {
  return asyncExec('HMSAccount', 'HMSAuthService', ['enableLogger']);
}

export function disableLogger(): Promise<void> {
  return asyncExec('HMSAccount', 'HMSAuthService', ['disableLogger']);
}



