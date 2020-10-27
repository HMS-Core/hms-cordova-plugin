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

import { asyncExec } from "./utils";

export function isEnvReady(): Promise<IsEnvReadyResult> {
  return run('isEnvReady');
}

export function isSandboxActivated(): Promise<IsSandboxActivatedResult> {
  return run('isSandboxActivated');
}

export function obtainOwnedPurchases(priceType: OwnedPurchasesReq): Promise<OwnedPurchasesResult> {
  return run('obtainOwnedPurchases', [priceType])
}

export function obtainProductInfo(product: ProductInfoReq): Promise<ProductInfoResult> {
  return run('obtainProductInfo', [product])
}

export function createPurchaseIntent(purchaseIntent: PurchaseIntentReq): Promise<PurchaseIntentResult> {
  return run('createPurchaseIntent', [purchaseIntent])
}

export function consumeOwnedPurchase(ownedPurchase: ConsumeOwnedPurchaseReq): Promise<ConsumeOwnedPurchaseResult> {
  return run('consumeOwnedPurchase', [ownedPurchase])
}

export function obtainOwnedPurchaseRecord(ownedPurchaseRecord: OwnedPurchasesReq): Promise<OwnedPurchasesResult> {
  return run('obtainOwnedPurchaseRecord', [ownedPurchaseRecord])
}

export function startIapActivity(productId: string = ""): Promise<void> {
  return run('startIapActivity', [productId])
}

export function enableLogger(): Promise<void> {
  return run('enableLogger');
}

export function disableLogger(): Promise<void> {
  return run('disableLogger');
}

/**
 * INTERFACES
 */
export interface Status {
  errorString: string;
  statusCode: number;
  statusMessage: string;
  hasResolution: boolean;
  isCanceled: boolean;
  isInterrupted: boolean;
  isSuccess: boolean;
  describeContents: number;
}
 export interface IsEnvReadyResult {
  returnCode: number;
  status: Status;
}
export interface IsSandboxActivatedResult {
  returnCode: number;
  errMsg: string;
  isSandboxUser: boolean;
  isSandboxApk: boolean;
  versionInApk: string;
  versionFrMarket: string;
  status: Status;
}
export interface OwnedPurchasesReq {
  priceType: number;
  continuationToken?: string;
};
export interface OwnedPurchasesResult {
  continuationToken: string;
  errMsg: string;
  itemList: string[];
  inAppPurchaseDataList: string[];
  inAppSignature: string[];
  placedInappPurchaseDataList: string[];
  placedInappSignatureList: string[];
  returnCode: number;
  status: Status;
}
export interface ProductInfoReq {
  priceType: number;
  productList: string[];
};
export interface ProductInfoResult {
  returnCode: number;
  errMsg: string;
  productInfoList: ProductInfoList[];
  status: Status;
}
export interface ProductInfoList {
  productId: string;
  priceType: number;
  price: string;
  microsPrice: number;
  originalLocalPrice: string;
  originalMicroPrice: number;
  currency: string;
  productName: string;
  productDesc: string;
  subSpecialPriceMicros: number;
  subSpecialPeriodCycles: number;
  subProductLevel: number;
}
export interface PurchaseIntentReq {
  priceType: number;
  productId: string;
  developerPayload: string;
  reservedInfor: string;
}
export interface PurchaseIntentResult {
  returnCode: number;
  errMsg: string;
  inAppPurchaseData: string;
  inAppDataSignature: string;
}
export interface ConsumeOwnedPurchaseReq {
  inAppPurchaseData: string;
  developerChallenge: string;
};
export interface ConsumeOwnedPurchaseResult {
  consumePurchaseData: string;
  dataSignature: string;
  errMsg: string;
  returnCode: number;
  status: Status;
}

/**
 * HELPERS
 */
function run(funcName: string, args: any[]=[]) {
  return asyncExec('HMSInAppPurchases', funcName, args);
}
