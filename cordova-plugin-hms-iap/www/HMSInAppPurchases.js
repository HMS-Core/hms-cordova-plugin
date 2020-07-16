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

const argscheck = require('cordova/argscheck');
const exec = require('cordova/exec');
const cordova = require('cordova');
const utils = require('./utils');

const HMSInAppPurchases = function () {
    console.log("HMSInAppPurchases instanced");
};

// /////////////////////////////////////////////////////////
// DATA TYPES
// /////////////////////////////////////////////////////////

const TypeObtainOwnedPurchases = {
    'priceType!': 'integer',
};
const TypeObtainProductInfo = {
    'priceType!': 'integer',
    'productList!': utils.arrayOf('string'),
};
const TypeCreatePurchaseIntent = {
    'priceType!': 'integer',
    'productId!': 'string',
    'developerPayload': 'string',
};
const TypeConsumeOwnedPurchase = {
    'inAppPurchaseData!': 'string',
    'developerChallenge': 'string',
};
const TypeObtainOwnedPurchaseRecord = {
    'priceType!': 'integer',
    'continuationToken': 'string'
};
const TypeUriParams = {
    'appId': 'string',
    'package': 'string',
    'sku': 'string'
};

// /////////////////////////////////////////////////////////
// INIT FUNCTIONS
// /////////////////////////////////////////////////////////

const exportedFunctions = [
    {name: 'init', type: []},
    {name: 'isSandboxReady', type: []},
    {name: 'isEnvironmentReady', type: []},
    {name: 'obtainOwnedPurchases', type: [TypeObtainOwnedPurchases]},
    {name: 'obtainProductInfo', type: [TypeObtainProductInfo]},
    {name: 'createPurchaseIntent', type: [TypeCreatePurchaseIntent]},
    {name: 'consumeOwnedPurchase', type: [TypeConsumeOwnedPurchase]},
    {name: 'obtainOwnedPurchaseRecord', type: [TypeObtainOwnedPurchaseRecord]},
    {name: 'startActivityWithUri', type: ['string']},
    {name: 'showSubscriptionsActivity', type: [TypeUriParams]},
];

utils.generateFunctionVariations(exportedFunctions, HMSInAppPurchases, 'HMSInAppPurchases');

module.exports = new HMSInAppPurchases();
