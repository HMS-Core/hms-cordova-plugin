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

'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var HMSInAppPurchases = /** @class */ (function (_super) {
    tslib.__extends(HMSInAppPurchases, _super);
    function HMSInAppPurchases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSInAppPurchases.prototype.isEnvReady = function (isSupportAppTouch) { return core.cordova(this, "isEnvReady", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.isSandboxActivated = function () { return core.cordova(this, "isSandboxActivated", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.obtainOwnedPurchases = function (obtainOwnedPurchasesReq) { return core.cordova(this, "obtainOwnedPurchases", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.obtainProductInfo = function (product) { return core.cordova(this, "obtainProductInfo", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.createPurchaseIntent = function (purchaseIntentReq) { return core.cordova(this, "createPurchaseIntent", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.consumeOwnedPurchase = function (consumeOwnedPurchaseReq) { return core.cordova(this, "consumeOwnedPurchase", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.obtainOwnedPurchaseRecord = function (obtainOwnedPurchaseRecordReq) { return core.cordova(this, "obtainOwnedPurchaseRecord", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.startIapActivity = function (startIapActivityReq) { return core.cordova(this, "startIapActivity", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.enablePendingPurchase = function () { return core.cordova(this, "enablePendingPurchase", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.enableLogger = function () { return core.cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.prototype.disableLogger = function () { return core.cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSInAppPurchases.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSInAppPurchases, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HMSInAppPurchases.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSInAppPurchases });
    HMSInAppPurchases.pluginName = "HMSInAppPurchases";
    HMSInAppPurchases.plugin = "cordova-plugin-hms-iap";
    HMSInAppPurchases.pluginRef = "HMSInAppPurchases";
    HMSInAppPurchases.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSInAppPurchases.platforms = ["Android"];
    HMSInAppPurchases = tslib.__decorate([], HMSInAppPurchases);
    return HMSInAppPurchases;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: HMSInAppPurchases, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isEnvReady: [], isSandboxActivated: [], obtainOwnedPurchases: [], obtainProductInfo: [], createPurchaseIntent: [], consumeOwnedPurchase: [], obtainOwnedPurchaseRecord: [], startIapActivity: [], enablePendingPurchase: [], enableLogger: [], disableLogger: [] } });
exports.SignAlgorithmConstants = void 0;
(function (SignAlgorithmConstants) {
    SignAlgorithmConstants["SIGNATURE_ALGORITHM_SHA256WITHRSA_PSS"] = "SHA256WithRSA/PSS";
})(exports.SignAlgorithmConstants || (exports.SignAlgorithmConstants = {}));

exports.HMSInAppPurchases = HMSInAppPurchases;
