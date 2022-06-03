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

import { asyncExec } from "./utils";

export function isEnvReady(
  isSupportAppTouch?: boolean
): Promise<IsEnvReadyResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "isEnvReady",
    { isSupportAppTouch: isSupportAppTouch },
  ]);
}
export function isSandboxActivated(): Promise<IsSandboxActivatedResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "isSandboxActivated",
  ]);
}
export function obtainOwnedPurchases(
  ownedPurchasesRequest: OwnedPurchasesReq
): Promise<OwnedPurchasesResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "obtainOwnedPurchases",
    ownedPurchasesRequest,
  ]);
}
export function obtainProductInfo(
  productInfoRequest: ProductInfoReq
): Promise<ProductInfoResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "obtainProductInfo",
    productInfoRequest,
  ]);
}
export function createPurchaseIntent(
  purchaseIntentRequest: PurchaseIntentReq
): Promise<PurchaseIntentResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "createPurchaseIntent",
    purchaseIntentRequest,
  ]);
}
export function consumeOwnedPurchase(
  consumeOwnedPurchaseRequest: ConsumeOwnedPurchaseReq
): Promise<ConsumeOwnedPurchaseResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "consumeOwnedPurchase",
    consumeOwnedPurchaseRequest,
  ]);
}
export function obtainOwnedPurchaseRecord(
  ownedPurchasesRequest: OwnedPurchasesReq
): Promise<OwnedPurchasesResult> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "obtainOwnedPurchaseRecord",
    ownedPurchasesRequest,
  ]);
}
export function startIapActivity(
  startIapActivityRequest: StartIapActivityReq
): Promise<void> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "startIapActivity",
    startIapActivityRequest,
  ]);
}
export function enableLogger(): Promise<void> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", ["enableLogger"]);
}
export function disableLogger(): Promise<void> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", ["disableLogger"]);
}
export function enablePendingPurchase(): Promise<void> {
  return asyncExec("HMSInAppPurchases", "InAppPurchases", [
    "enablePendingPurchase",
  ]);
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
  country: string;
  carrierId: string;
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
  signatureAlgorithm?: string;
  priceType: number;
  continuationToken?: string;
}
export interface OwnedPurchasesResult {
  signatureAlgorithm?: string;
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
}
export interface ProductInfoResult {
  returnCode: number;
  errMsg: string;
  productInfoList: ProductInfo[];
  status: Status;
}
export interface ProductInfo {
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
  status: number;
  offerUsedStatus: number;
  subGroupTitle: string;
  subPeriod: string;
  subSpecialPeriod: string;
  subSpecialPrice: string;
  subFreeTrialPeriod: string;
  subGroupId: string;
}
export interface PurchaseIntentReq {
  signatureAlgorithm?: string;
  priceType: number;
  productId: string;
  developerPayload: string;
  reservedInfor: string;
}
export interface PurchaseIntentResult {
  returnCode: number;
  errMsg: string;
  signatureAlgorithm?: string;
  status: Status;
}

export interface PurchaseResultInfo {
  returnCode: number;
  errMsg: string;
  inAppPurchaseData: string;
  inAppDataSignature: string;
  signatureAlgorithm?: string;
}
export interface ConsumeOwnedPurchaseReq {
  signatureAlgorithm?: string;
  inAppPurchaseData: string;
  developerChallenge: string;
}
export interface ConsumeOwnedPurchaseResult {
  signatureAlgorithm?: string;
  consumePurchaseData: string;
  dataSignature: string;
  errMsg: string;
  returnCode: number;
  status: Status;
}
export interface StartIapActivityReq {
  productId?: string;
}

export enum SignAlgorithmConstants {
  SIGNATURE_ALGORITHM_SHA256WITHRSA_PSS = "SHA256WithRSA/PSS",
}
