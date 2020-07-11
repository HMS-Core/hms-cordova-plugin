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

const HMSFusedLocation = function () {
    console.log("HMSFusedLocation instanced");
};

// /////////////////////////////////////////////////////////
// DATA TYPES
// /////////////////////////////////////////////////////////

const TypeLocationRequest = {
    priority: 'number',
    interval: 'float',
    numUpdates: 'number',
    fastestInterval: 'float',
    expirationTime: 'float',
    expirationTimeDuration: 'float',
    smallestDisplacement: 'float',
    maxWaitTime: 'float',
    needAddress: 'boolean',
    language: 'string',
    countryCode: 'string',
};

const TypeLocationSettingsRequest = {
    locationRequests: utils.arrayOf(TypeLocationRequest),
    needBle: 'boolean',
    alwaysShow: 'boolean',
};

const TypeLatLong = {
    longitude: 'float',
    latitude: 'float'
};

// /////////////////////////////////////////////////////////
// INIT FUNCTIONS
// /////////////////////////////////////////////////////////

const exportedFunctions = [
    {name: 'init', type: []},
    {name: 'getLastLocation', type: []},
    {name: 'flushLocations', type: []},
    {name: 'checkLocationSettings', type: [TypeLocationSettingsRequest]},
    {name: 'getLastLocationWithAddress', type: [TypeLocationRequest]},
    {name: 'getLocationAvailability', type: []},
    {name: 'setMockLocation', type: [TypeLatLong]},
    {name: 'setMockMode', type: ['boolean']},
    {name: 'requestLocationUpdates', type: [TypeLocationRequest]},
    {name: 'removeLocationUpdates', type: ['string']},
    {name: 'requestPermission', type: []},
    {name: 'hasPermission', type: []}
];

utils.generateFunctionVariations(exportedFunctions, HMSFusedLocation, 'HMSFusedLocation');

module.exports = new HMSFusedLocation();
