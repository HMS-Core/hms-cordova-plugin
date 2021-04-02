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

import { AuthHuaweiId, ContainScopesResult, AuthHuaweiIdBuilder, AuthScopeList } from './HMSCommonTypes';
export declare function getAuthResult(): Promise<AuthHuaweiId>;
export declare function getAuthResultWithScope(authScopeList: AuthScopeList[]): Promise<AuthHuaweiId>;
export declare function containScopes(authHuaweiId: AuthHuaweiIdBuilder, authScopeList: AuthScopeList[]): Promise<ContainScopesResult>;
export declare function addAuthScopes(requestCode: number, authScopeList: AuthScopeList[]): Promise<void>;
