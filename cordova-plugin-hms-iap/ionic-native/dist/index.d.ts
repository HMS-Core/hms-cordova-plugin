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

import { IonicNativePlugin } from "@ionic-native/core";
/**
 * @name HMSInAppPurchases
 * @description
 * Huawei's In-App Purchases (IAP) service integrates multiple payment methods for global payment and allows you to easily offer in-app purchases.
 */
export declare class HMSInAppPurchasesOriginal extends IonicNativePlugin {
  /**
   * Checks whether the currently signed-in HUAWEI ID is located in a country or region where HUAWEI IAP is available.
   * @return {Promise<IsEnvReadyResult>}
   */
  isEnvReady(isSupportAppTouch?: boolean): Promise<IsEnvReadyResult>;
  /**
   * Checks whether the sign-in HUAWEI ID and app APK version meets the requirements of the sandbox testing.
   * @return {Promise<IsSandboxActivatedResult>}
   */
  isSandboxActivated(): Promise<IsSandboxActivatedResult>;
  /**
   * Queries information about all purchased in-app products, including consumables, non-consumables, and auto-renewable subscriptions.
   * @param priceType
   * @return {Promise<OwnedPurchasesResult>}
   */
  obtainOwnedPurchases(
    obtainOwnedPurchasesReq: OwnedPurchasesReq
  ): Promise<OwnedPurchasesResult>;
  /**
   * Obtains in-app product details configured in AppGallery Connect.
   * @param product
   * @return {Promise<ProductInfoResult>}
   */
  obtainProductInfo(product: ProductInfoReq): Promise<ProductInfoResult>;
  /**
   * Creates orders for PMS products, including consumables, non-consumables, and subscriptions.
   * @param purchaseIntent
   * @return {Promise<PurchaseIntentResult>}
   */
  createPurchaseIntent(
    purchaseIntentReq: PurchaseIntentReq
  ): Promise<PurchaseIntentResult>;
  /**
   * Consumes a consumable after the consumable is delivered to a user who has completed payment.
   * @param ownedPurchase
   * @return {Promise<ConsumeOwnedPurchaseResult>}
   */
  consumeOwnedPurchase(
    consumeOwnedPurchaseReq: ConsumeOwnedPurchaseReq
  ): Promise<ConsumeOwnedPurchaseResult>;
  /**
   * Obtains the historical consumption information about a consumable or all subscription receipts of a subscription.
   * @param ownedPurchaseRecord
   * @return {Promise<OwnedPurchasesResult>}
   */
  obtainOwnedPurchaseRecord(
    obtainOwnedPurchaseRecordReq: OwnedPurchasesReq
  ): Promise<OwnedPurchasesResult>;
  /**
   * Brings up in-app payment pages, including Subscription Editing Page and Subscription Management Page
   * @param uri
   * @return {Promise<void>}
   */
  startIapActivity(startIapActivityReq: StartIapActivityReq): Promise<void>;
  /**
   * To implement pending purchase in your app, call this method before a purchase request is made.
   * @return {Promise<void>}
   */
  enablePendingPurchase(): Promise<void>;
  /**
   *Enables the HMSLogger capability which is used for sending usage analytics of IAP SDK's methods to improve the service quality.
   * @return {Promise<void>}
   */
  enableLogger(): Promise<void>;
  /**
   * Disables the HMSLogger capability which is used for sending usage analytics of IAP SDK's methods to improve the service quality.
   * @return {Promise<void>}
   */
  disableLogger(): Promise<void>;
}
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
export declare enum SignAlgorithmConstants {
  SIGNATURE_ALGORITHM_SHA256WITHRSA_PSS = "SHA256WithRSA/PSS",
}

export declare const HMSInAppPurchases: HMSInAppPurchasesOriginal;
