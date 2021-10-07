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
export declare function isEnvReady(): Promise<IsEnvReadyResult>;
export declare function isSandboxActivated(): Promise<IsSandboxActivatedResult>;
export declare function obtainOwnedPurchases(ownedPurchasesRequest: OwnedPurchasesReq): Promise<OwnedPurchasesResult>;
export declare function obtainProductInfo(productInfoRequest: ProductInfoReq): Promise<ProductInfoResult>;
export declare function createPurchaseIntent(purchaseIntentRequest: PurchaseIntentReq): Promise<PurchaseIntentResult>;
export declare function consumeOwnedPurchase(consumeOwnedPurchaseRequest: ConsumeOwnedPurchaseReq): Promise<ConsumeOwnedPurchaseResult>;
export declare function obtainOwnedPurchaseRecord(ownedPurchasesRequest: OwnedPurchasesReq): Promise<OwnedPurchasesResult>;
export declare function startIapActivity(startIapActivityRequest: StartIapActivityReq): Promise<void>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
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
}
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
}
export interface ConsumeOwnedPurchaseResult {
    consumePurchaseData: string;
    dataSignature: string;
    errMsg: string;
    returnCode: number;
    status: Status;
}
export interface StartIapActivityReq {
    productId?: string;
}
