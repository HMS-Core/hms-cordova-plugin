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

import { AccountIcon, AuthAccount, AuthParams, SignInData } from './HMSCommonTypes'
import { asyncExec } from './utils'


export function signIn(signInData: SignInData): Promise<AuthAccount> {
    return asyncExec('HMSAccountAuthService', 'signIn', [signInData ? signInData : []]);
}

export function signOut(): Promise<void> {
    return asyncExec('HMSAccountAuthService', 'signOut', []);
}

export function cancelAuthorization(): Promise<void> {
    return asyncExec('HMSAccountAuthService', 'cancelAuthorization', []);
}

export function silentSignIn(authParams: AuthParams): Promise<AuthAccount> {
    return asyncExec('HMSAccountAuthService', 'silentSignIn', [authParams]);
}

export function getChannel(): Promise<AccountIcon> {
    return asyncExec('HMSAccountAuthService', 'getChannel', []);
}

export function getIndependentSignIn( accessToken:string ): Promise<AuthAccount> {
    return asyncExec('HMSAccountAuthService', 'getIndependentSignIn', [accessToken]);
}