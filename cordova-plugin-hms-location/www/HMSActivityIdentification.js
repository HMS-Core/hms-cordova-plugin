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

const cordova = require('cordova');
const utils = require('./utils');

const HMSActivityIdentification = function () {
    console.log("HMSActivityIdentification instanced");
};

// /////////////////////////////////////////////////////////
// DATA TYPES
// /////////////////////////////////////////////////////////

const TypeActivityConversionInfo = {
    conversionType: 'integer',
    activityType: 'integer'
};

const TypeActivityConversionRequest = utils.arrayOf(TypeActivityConversionInfo);

// /////////////////////////////////////////////////////////
// INIT FUNCTIONS
// /////////////////////////////////////////////////////////

const exportedFunctions = [
    {name: 'init', type: []},
    {name: 'createActivityConversionUpdates', type: TypeActivityConversionRequest},
    {name: 'createActivityIdentificationUpdates', type: ['integer']},
    {name: 'deleteActivityConversionUpdates', type: ['integer']},
    {name: 'deleteActivityIdentificationUpdates', type: ['integer']},
    {name: 'requestPermission', type: []},
    {name: 'hasPermission', type: []}
];

utils.generateFunctionVariations(exportedFunctions, HMSActivityIdentification, 'HMSActivityIdentification');

module.exports = new HMSActivityIdentification();
