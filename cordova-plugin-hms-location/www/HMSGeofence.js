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

const HMSGeofence = function () {
    console.log("HMSGeofence instanced");
};

// /////////////////////////////////////////////////////////
// DATA TYPES
// /////////////////////////////////////////////////////////

const TypeGeofence = {
    longitude: 'float',
    latitude: 'float',
    radius: 'float',
    uniqueId: 'string',
    conversions: 'number',
    validContinueTime: 'float',
    dwellDelayTime: 'number',
    notificationInterval: 'number',
};

// /////////////////////////////////////////////////////////
// INIT FUNCTIONS
// /////////////////////////////////////////////////////////

const exportedFunctions = [
    {name: 'init', type: []},
    {name: 'createGeofenceList', type: [utils.arrayOf(TypeGeofence), 'integer', 'integer']},
    {name: 'deleteGeofenceList', type: ['integer']},
];

utils.generateFunctionVariations(exportedFunctions, HMSGeofence, 'HMSGeofence');

module.exports = new HMSGeofence();
