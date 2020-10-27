"use strict";
/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableLogger = exports.enableLogger = exports.startIapActivity = exports.obtainOwnedPurchaseRecord = exports.consumeOwnedPurchase = exports.createPurchaseIntent = exports.obtainProductInfo = exports.obtainOwnedPurchases = exports.isSandboxActivated = exports.isEnvReady = void 0;
const utils_1 = require("./utils");
function isEnvReady() {
    return run('isEnvReady');
}
exports.isEnvReady = isEnvReady;
function isSandboxActivated() {
    return run('isSandboxActivated');
}
exports.isSandboxActivated = isSandboxActivated;
function obtainOwnedPurchases(priceType) {
    return run('obtainOwnedPurchases', [priceType]);
}
exports.obtainOwnedPurchases = obtainOwnedPurchases;
function obtainProductInfo(product) {
    return run('obtainProductInfo', [product]);
}
exports.obtainProductInfo = obtainProductInfo;
function createPurchaseIntent(purchaseIntent) {
    return run('createPurchaseIntent', [purchaseIntent]);
}
exports.createPurchaseIntent = createPurchaseIntent;
function consumeOwnedPurchase(ownedPurchase) {
    return run('consumeOwnedPurchase', [ownedPurchase]);
}
exports.consumeOwnedPurchase = consumeOwnedPurchase;
function obtainOwnedPurchaseRecord(ownedPurchaseRecord) {
    return run('obtainOwnedPurchaseRecord', [ownedPurchaseRecord]);
}
exports.obtainOwnedPurchaseRecord = obtainOwnedPurchaseRecord;
function startIapActivity(productId = "") {
    return run('startIapActivity', [productId]);
}
exports.startIapActivity = startIapActivity;
function enableLogger() {
    return run('enableLogger');
}
exports.enableLogger = enableLogger;
function disableLogger() {
    return run('disableLogger');
}
exports.disableLogger = disableLogger;
;
;
;
/**
 * HELPERS
 */
function run(funcName, args = []) {
    return utils_1.asyncExec('HMSInAppPurchases', funcName, args);
}
//# sourceMappingURL=HMSInAppPurchases.js.map