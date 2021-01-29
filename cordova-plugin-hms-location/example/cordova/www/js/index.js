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

//import {HMSLocationKit, HMSFusedLocation, HMSLocationUtils} from 'cordova-plugin-hms-location';

const $ = (x) => document.getElementById(x);

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Initialize LocationKit
    HMSLocationKit.init();
    HMSFusedLocation.init();
    HMSActivityIdentification.init();
    HMSGeofence.init();

    // Device ready effect
    var parentElement = $('deviceready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
};


const newLocationRequest = () => { return {
    id: "locationRequest" + Math.random() * 10000,
    priority:
    HMSFusedLocation.PriorityConstants.PRIORITY_HIGH_ACCURACY,
    interval: 3,
    numUpdates: 1,
    fastestInterval: 1000.0,
    expirationTime: 1000.0,
    expirationTimeDuration: 1000.0,
    smallestDisplacement: 0.0,
    maxWaitTime: 1000.0,
    needAddress: true,
    language: "en",
    countryCode: "en",
}};

$('getLastLocation').onclick = async () => {
    try {
        const lastLocation = await HMSFusedLocation.getLastLocation();
        console.log({lastLocation});
        $('getLastLocationResult').innerHTML = JSON.stringify(lastLocation, null, 1);
    } catch (ex) {
        $('getLastLocationResult').innerHTML = JSON.stringify(ex, null, 1);
    }
};

$('requestPermission').onclick = async () => {
    try {
        const permissionResult = await HMSFusedLocation.requestPermission();
        console.log({permissionResult});
        $('requestPermissionResult').innerHTML = JSON.stringify(permissionResult, null, 1);
    } catch (ex) {
         $('requestPermissionResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('hasPermission').onclick = async () => {
    try {
        const hasPermissionResult = await HMSFusedLocation.hasPermission();
        console.log({hasPermissionResult});
        $('hasPermissionResult').innerHTML = JSON.stringify(hasPermissionResult, null, 1);
    } catch (ex) {
        $('hasPermissionResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('getLocationAvailability').onclick = async () => {
    try {
        const locationAvailability = await HMSFusedLocation.getLocationAvailability();
        console.log({locationAvailability});
        $('getLocationAvailabilityResult').innerHTML = JSON.stringify(locationAvailability, null, 1);
    } catch (ex) {
        $('getLocationAvailabilityResult').innerHTML = JSON.stringify(locationAvailability, null, 1);
    }

};

$('flushLocations').onclick = async () => {
    try {
        const flushLocationsResult = await HMSFusedLocation.flushLocations();
        console.log({flushLocationsResult});
        $('flushLocationsResult').innerHTML = JSON.stringify(flushLocationsResult, null, 1);
    } catch (ex) {
        $('flushLocationsResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('checkLocationSettings').onclick = async () => {
    try {
        const locationSettingsResult = await HMSFusedLocation.checkLocationSettings({
            alwaysShow: true,
            needBle: true,
            locationRequests: [newLocationRequest()]
        });
        console.log({locationSettingsResult});
        $('checkLocationSettingsResult').innerHTML = JSON.stringify(locationSettingsResult, null, 1);
    } catch (ex) {
            $('checkLocationSettingsResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('getNavigationContextState').onclick = async () => {
    try {
        const getNavigationContextStateResult = await HMSFusedLocation.getNavigationContextState(HMSFusedLocation.NavigationRequestConstants.IS_SUPPORT_EX);
        console.log({getNavigationContextStateResult});
        $('getNavigationContextStateResult').innerHTML = JSON.stringify(getNavigationContextStateResult, null, 1);
    } catch (ex) {
        $('getNavigationContextStateResult').innerHTML = JSON.stringify(ex, null, 1);
    }
};

$('getLastLocationWithAddress').onclick = async () => {
    try {
        const getLastLocationWithAddressResult = await HMSFusedLocation.getLastLocationWithAddress(newLocationRequest());
        console.log({getLastLocationWithAddressResult});
        $('getLastLocationWithAddressResult').innerHTML = JSON.stringify(getLastLocationWithAddressResult, null, 1);
    } catch (ex) {
        $('getLastLocationWithAddressResult').innerHTML = JSON.stringify(ex, null, 1);
    }
};

$('enableMockMode').onclick = async () => {
    try {
        const setMockModeResult = await HMSFusedLocation.setMockMode(true);
        console.log({setMockModeResult});
        $('enableMockModeResult').innerHTML = JSON.stringify(setMockModeResult, null, 1);
    } catch (ex) {
        console.log(JSON.stringify(ex));
        $('enableMockModeResult').innerHTML = JSON.stringify(ex, null, 1);
    
    }
};

$('disableMockMode').onclick = async () => {
    try {
        const setMockModeResult = await HMSFusedLocation.setMockMode(false);
        console.log({setMockModeResult});
        $('disableMockModeResult').innerHTML = JSON.stringify(setMockModeResult, null, 1);
    } catch (ex) {
        console.log(JSON.stringify(ex));
        $('disableMockModeResult').innerHTML = JSON.stringify(ex, null, 1);
    
    }

};

$('setMockLocation').onclick = async () => {
    try {
        const setMockLocationResult = await HMSFusedLocation.setMockLocation({
            latitude: parseFloat($("mockLat").value),
            longitude: parseFloat($("mockLong").value)
        });
        console.log({setMockLocationResult});
        $('setMockLocationResult').innerHTML = JSON.stringify(setMockLocationResult, null, 1);
    } catch (ex) {
        console.log(JSON.stringify(ex));
    }

};

const locationUpdateRequests = [];
$('requestLocationUpdates').onclick = async () => {
    try {
        const requestLocationUpdatesResult = await HMSFusedLocation.requestLocationUpdates(newLocationRequest());
        console.log({requestLocationUpdatesResult});
        locationUpdateRequests.push(requestLocationUpdatesResult.id);
        $('requestLocationUpdatesResult').innerHTML = JSON.stringify(requestLocationUpdatesResult, null, 1);
    } catch (ex) {
        $('requestLocationUpdatesResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('registerLocationUpdates').onclick = async () => {
    registerHMSEvent(HMSFusedLocation.Events.SCANNING_RESULT, (result) => {
       console.log('new location update');
       $('locationUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    })
};

$('removeLocationUpdateRequests').onclick = async () => {
    try {
        console.log("Removing location update requests...");
        locationUpdateRequests.forEach(async requestCode => {
            const result = await HMSFusedLocation.removeLocationUpdates(requestCode);
            console.log({requestCode, result});
        });
        unregisterHMSEvent(HMSFusedLocation.Events.SCANNING_RESULT);
        locationUpdateRequests.length = 0; // clear the array
    } catch (ex) {
       console.log(JSON.stringify(ex));
    }

};

$('hasActivityPermission').onclick = async () => {
    try {
        const hasActivityPermissionResult = await HMSActivityIdentification.hasPermission();
        console.log({hasActivityPermissionResult});
        $('hasActivityPermissionResult').innerHTML = JSON.stringify(hasActivityPermissionResult, null, 1);
    } catch (ex) {
        $('hasActivityPermissionResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('requestActivityIdentificationPermission').onclick = async () => {
    try {
        const getPermResult = await HMSActivityIdentification.requestPermission();
        console.log(getPermResult);
        $('requestActivityIdentificationPermissionResult').innerHTML = JSON.stringify(getPermResult, null, 1);
    } catch (ex) {
        $('requestActivityIdentificationPermissionResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

const activityConversionUpdateRequests = [];
$('createActivityConversionUpdates').onclick = async () => {
    const activityConversions = [
        // STILL
        {
            conversionType: HMSActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.STILL
        },
        {
            conversionType: HMSActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.STILL
        },

        // ON FOOT
        {
            conversionType: HMSActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.FOOT
        },
        {
            conversionType: HMSActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.FOOT
        },

        // RUNNING
        {
            conversionType: HMSActivityIdentification.ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.RUNNING
        },
        {
            conversionType: HMSActivityIdentification.ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: HMSActivityIdentification.Activities.RUNNING
        }
    ];
    try {
        const activityConversionResult = await HMSActivityIdentification.createActivityConversionUpdates(activityConversions);
        console.log({activityConversionResult});
        activityConversionUpdateRequests.push(activityConversionResult.requestCode);
        $('createActivityConversionUpdatesResult').innerHTML = JSON.stringify(activityConversionResult, null, 1);
    } catch (ex) {
        $('createActivityConversionUpdatesResult').innerHTML = JSON.stringify(ex, null, 1);
    }
};

const activityIdentificationUpdateRequests = [];
$('createActivityIdentificationUpdates').onclick = async () => {
    try {
        const activityIdentificationUpdates = await HMSActivityIdentification.createActivityIdentificationUpdates(2000);
        console.log({activityIdentificationUpdates});
        activityIdentificationUpdateRequests.push(activityIdentificationUpdates.requestCode);
        $('createActivityIdentificationUpdatesResult').innerHTML = JSON.stringify(activityIdentificationUpdates, null, 1);
    } catch (ex) {
        $('createActivityIdentificationUpdatesResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('registerActivityIdentificationUpdates').onclick = async () => {
    registerHMSEvent(HMSActivityIdentification.Events.ACTIVITY_IDENTIFICATION_RESULT, (result) => {
         console.log('new activity identification');
         $('activityIdentificationUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    });

};

$('registerActivityConversionUpdates').onclick = async () => {
    registerHMSEvent(HMSActivityIdentification.Events.ACTIVITY_CONVERSION_RESULT, (result) => {
        console.log('new activity conversion');
        $('activityConversionUpdateResult').innerHTML = JSON.stringify(result, null, 1);
     });

};

$('deleteActivityIdentificationUpdates').onclick = async () => {
        console.log('Deleting activity identification updates...');
        $('deleteActivityIdentificationResult').innerHTML='' ;
        activityIdentificationUpdateRequests.forEach(async requestCode => {
            const result = await HMSActivityIdentification.deleteActivityIdentificationUpdates(requestCode);
            console.log({requestCode, result});
            $('deleteActivityIdentificationResult').innerHTML += JSON.stringify({requestCode, result}, null, 1);
        });
        unregisterHMSEvent(HMSActivityIdentification.Events.ACTIVITY_IDENTIFICATION_RESULT); // clear registeredEvents
        activityIdentificationUpdateRequests.length = 0; // clear the array

};

$('deleteActivityConversionUpdates').onclick = async () => {
    console.log('Deleting activity conversion updates...');
    $('deleteActivityConversionResult').innerHTML = '';
    activityConversionUpdateRequests.forEach(async requestCode => {
        const result = await HMSActivityIdentification.deleteActivityConversionUpdates(requestCode);
        console.log({requestCode, result});
        $('deleteActivityConversionResult').innerHTML += JSON.stringify({requestCode, result}, null, 1);
    
    });
    unregisterHMSEvent(HMSActivityIdentification.Events.ACTIVITY_CONVERSION_RESULT); // clear registeredEvents
    activityConversionUpdateRequests.length = 0; // clear the array

};

$('createGeofenceList').onclick = async () => {
    const geofence1 = {
        longitude: 42.0,
        latitude: 29.0,
        radius: 20.0,
        uniqueId: 'geofence' + Math.random() * 10000,
        conversions: 1,
        validContinueTime: 10000.0,
        dwellDelayTime: 10,
        notificationInterval: 1,
    };

    const geofence2 = {
        longitude: 32.0,
        latitude: 37.0,
        radius: 340000.0,
        uniqueId: 'geofence' + Math.random() * 10000,
        conversions: 4,
        validContinueTime: 100000.0,
        dwellDelayTime: 5000,
        notificationInterval: 0,
    };
    try {
        const createGeofenceListResult = await HMSGeofence.createGeofenceList(
            [geofence1, geofence2],
            HMSGeofence.GeofenceRequestConstants.DWELL_INIT_CONVERSION,
            HMSGeofence.GeofenceRequestConstants.COORDINATE_TYPE_WGS_84
        );
        console.log({createGeofenceListResult});
        $('createGeofenceListResult').innerHTML = JSON.stringify(createGeofenceListResult, null, 1);
    } catch (ex) {
        $('createGeofenceListResult').innerHTML = JSON.stringify(ex, null, 1);
    }

};

$('deleteGeofenceList').onclick = async () => {
    try {
        const deleteGeofenceListResult = await HMSGeofence.deleteGeofenceList(parseInt($('geofenceRequestCode').value));
        console.log({deleteGeofenceListResult});
        $('deleteGeofenceListResult').innerHTML = JSON.stringify(deleteGeofenceListResult, null, 1);
    } catch (ex) {
        $('deleteGeofenceListResult').innerHTML = JSON.stringify(ex, null, 1);
    }
};

$('registerGeofenceUpdates').onclick = async () => {
    registerHMSEvent(HMSGeofence.Events.GEOFENCE_RESULT, (result) => {
        console.log('new geofence update');
        $('geofenceUpdateResult').innerHTML = JSON.stringify(result, null, 1);
    });
};