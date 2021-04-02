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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableLogger = exports.enableLogger = exports.startIapActivity = exports.obtainOwnedPurchaseRecord = exports.consumeOwnedPurchase = exports.createPurchaseIntent = exports.obtainProductInfo = exports.obtainOwnedPurchases = exports.isSandboxActivated = exports.isEnvReady = void 0;
const utils_1 = require("./utils");
function isEnvReady() {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["isEnvReady"]);
}
exports.isEnvReady = isEnvReady;
function isSandboxActivated() {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["isSandboxActivated"]);
}
exports.isSandboxActivated = isSandboxActivated;
function obtainOwnedPurchases(ownedPurchasesRequest) {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["obtainOwnedPurchases", ownedPurchasesRequest]);
}
exports.obtainOwnedPurchases = obtainOwnedPurchases;
function obtainProductInfo(productInfoRequest) {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["obtainProductInfo", productInfoRequest]);
}
exports.obtainProductInfo = obtainProductInfo;
function createPurchaseIntent(purchaseIntentRequest) {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["createPurchaseIntent", purchaseIntentRequest]);
}
exports.createPurchaseIntent = createPurchaseIntent;
function consumeOwnedPurchase(consumeOwnedPurchaseRequest) {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["consumeOwnedPurchase", consumeOwnedPurchaseRequest]);
}
exports.consumeOwnedPurchase = consumeOwnedPurchase;
function obtainOwnedPurchaseRecord(ownedPurchasesRequest) {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["obtainOwnedPurchaseRecord", ownedPurchasesRequest]);
}
exports.obtainOwnedPurchaseRecord = obtainOwnedPurchaseRecord;
function startIapActivity(startIapActivityRequest) {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["startIapActivity", startIapActivityRequest]);
}
exports.startIapActivity = startIapActivity;
function enableLogger() {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["enableLogger"]);
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return utils_1.asyncExec("HMSInAppPurchases", "InAppPurchases", ["disableLogger"]);
}
exports.disableLogger = disableLogger;
//# sourceMappingURL=HMSInAppPurchases.js.map