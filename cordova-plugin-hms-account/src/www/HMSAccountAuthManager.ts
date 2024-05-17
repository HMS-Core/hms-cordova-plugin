/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

import { AuthAccount, ContainScopesResult, AuthBuilder, AuthScopeList } from './HMSCommonTypes'
import { asyncExec } from './utils'

export function getAuthResult(packageName:String): Promise<AuthAccount> {
  return asyncExec('HMSAccount', 'HMSAuthManager', ['getAuthResult',packageName]);
}

export function getAuthResultWithScope(authScopeList: AuthScopeList[],packageName:String): Promise<AuthAccount> {
  return asyncExec('HMSAccount', 'HMSAuthManager', ['getAuthResultWithScope',authScopeList,packageName]);
}

export function containScopes(authAccount: AuthBuilder, authScopeList: AuthScopeList[],packageName:String): Promise<ContainScopesResult> {
  return asyncExec('HMSAccount', 'HMSAuthManager', ['containScopes',authAccount, authScopeList,packageName]);
}

export function addAuthScopes(requestCode: number, authScopeList: AuthScopeList[],packageName:String): Promise<void> {
  return asyncExec('HMSAccount', 'HMSAuthManager', ['addAuthScopes',requestCode, authScopeList,packageName]);
}
