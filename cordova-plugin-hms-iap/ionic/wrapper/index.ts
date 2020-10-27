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

import { Injectable } from '@angular/core';
import { Plugin, Cordova,  IonicNativePlugin } from '@ionic-native/core';

/**
 * @name HMSInAppPurchases
 * @description
 * Huawei's In-App Purchases (IAP) service integrates multiple payment methods for global payment and allows you to easily offer in-app purchases.
 *
 * @usage
 * ```typescript
 * import { HMSInAppPurchases } from '@ionic-native/hms-in-app-purchases';
 *
 *
 * constructor(private hMSInAppPurchases: HMSInAppPurchases) { }
 */
@Plugin({
  pluginName: 'HMSInAppPurchases',
  plugin: 'cordova-plugin-hms-iap', // npm package name, example: cordova-plugin-camera
  pluginRef: 'HMSInAppPurchases', // the variable reference to call the plugin, example: navigator.geolocation
  //repo: '', // the github repository URL for the plugin
  //install: '', // OPTIONAL install command, in case the plugin requires variables
  //installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class HMSInAppPurchases extends IonicNativePlugin {

  /**
   * Checks whether the currently signed-in HUAWEI ID is located in a country or region where HUAWEI IAP is available.
   * @return {Promise<IsEnvReadyResult>}
   */
  @Cordova({ otherPromise: true })
  isEnvReady(): Promise<IsEnvReadyResult> {
    return;
  }

  
  /**
   * Checks whether the sign-in HUAWEI ID and app APK version meets the requirements of the sandbox testing.
   * @return {Promise<IsSandboxActivatedResult>}
   */
  @Cordova({ otherPromise: true })
  isSandboxActivated(): Promise<IsSandboxActivatedResult> {
    return;
  }

  /**
   * Queries information about all purchased in-app products, including consumables, non-consumables, and auto-renewable subscriptions.
   * @param priceType
   * @return {Promise<OwnedPurchasesResult>}
   */
  @Cordova({ otherPromise: true })
  obtainOwnedPurchases(priceType: OwnedPurchasesReq): Promise<OwnedPurchasesResult> {
    return;
  }
  
  /**
   * Obtains in-app product details configured in AppGallery Connect.
   * @param product
   * @return {Promise<ProductInfoResult>}
   */
  @Cordova({ otherPromise: true })
  obtainProductInfo(product: ProductInfoReq): Promise<ProductInfoResult> {
    return;
  }

  /**
   * Creates orders for PMS products, including consumables, non-consumables, and subscriptions.
   * @param purchaseIntent
   * @return {Promise<PurchaseIntentResult>}
   */
  @Cordova({ otherPromise: true })
  createPurchaseIntent(purchaseIntent: PurchaseIntentReq): Promise<PurchaseIntentResult> {
    return;
  }

  /**
   * Consumes a consumable after the consumable is delivered to a user who has completed payment.
   * @param ownedPurchase
   * @return {Promise<ConsumeOwnedPurchaseResult>}
   */
  @Cordova({ otherPromise: true })
  consumeOwnedPurchase(ownedPurchase: ConsumeOwnedPurchaseReq): Promise<ConsumeOwnedPurchaseResult> {
    return;
  }

  /**
   * Obtains the historical consumption information about a consumable or all subscription receipts of a subscription.
   * @param ownedPurchaseRecord
   * @return {Promise<OwnedPurchasesResult>}
   */
  @Cordova({ otherPromise: true })
  obtainOwnedPurchaseRecord(ownedPurchaseRecord: OwnedPurchasesReq): Promise<OwnedPurchasesResult> {
    return;
  }

  /**
   * Brings up in-app payment pages, including Subscription Editing Page and Subscription Management Page
   * @param uri
   * @return {Promise<void>}
   */
  @Cordova({ otherPromise: true })
  startIapActivity(productId: string = ""): Promise<void> {
    return;
  }

}

// /////////////////////////////////////////////////////////
// INTERFACES
// /////////////////////////////////////////////////////////

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
};
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