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

import { Component, OnInit, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  HMSFusedLocation,
  HMSActivityIdentification,
  HMSGeofence,
  HMSLocationKit,
  LocationRequest,
  PriorityConstants,
  Events,
  NavigationRequestConstants,
  Activities,
  ActivityConversions,
  GeofenceRequestConstants
} from '@ionic-native/hms-location/ngx';

const asStr = (x) => JSON.stringify(x, null, 2);

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  locationHasPermissionResult = '';
  locationRequestPermissionResult = '';
  getLastLocationResult = '';
  getLocationAvailabilityResult = '';
  getNavigationContextStateResult = '';
  getLastLocationWithAddressResult = '';
  flushLocationsResult = '';
  checkLocationSettingsResult = '';
  enableMockModeResult = '';
  disableMockModeResult = '';
  mockLat: string;
  mockLong: string;
  setMockLocationResult = '';
  requestLocationUpdatesResult = '';
  registerLocationUpdateResult = '';
  locationUpdateRequests = [];
  removeLocationUpdateResult = '';

  activityHasPermissionResult = '';
  acitvityRequestPermissionResult = '';
  createActivityConversionUpdatesResult = '';
  registerActivityConversionUpdatesResult = '';
  activityConversionRequestCode = '';
  deleteActivityConversionResult = '';
  createActivityIdentificationUpdatesResult = '';
  registerActivityIdentificationUpdatesResult = '';
  activityIdentificationRequestCode = '';
  deleteActivityIdentificationResult = '';

  createGeofenceListResult = '';
  geofenceRequestCode = '';
  deleteGeofenceListResult = '';
  registerGeofenceUpdatesResult = '';

  constructor(
    private platform: Platform,
    private fusedLocation: HMSFusedLocation,
    private activityIdentification: HMSActivityIdentification,
    private geofence: HMSGeofence,
    private hmsLocationKit: HMSLocationKit,
    private ngZone: NgZone
  ) {
      this.platform.ready().then(() => {
      console.log("Platform is ready.");
    })
  }

  ngOnInit() {
    this.hmsLocationKit.init();
  }

  //
  // Fused Location
  //

  async runFunction(fn: () => any, field: string) {
    console.log(`Updating ${field}`);

    let result = "";
    try {
      result = asStr(await fn());
    } catch (ex) {
      result = asStr(ex);
    }
    console.log(result);
    this[field] = result;
    return field;
  }

  newLocationRequest(): LocationRequest {
    return {
      id: "locationRequest" + Math.random() * 10000,
      priority: PriorityConstants.PRIORITY_HIGH_ACCURACY,
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
    }
  }

  hasPermission() {
    this.runFunction(() => this.fusedLocation.hasPermission(), 'locationHasPermissionResult');
  }

  requestLocationPermission() {
    this.runFunction(() => this.fusedLocation.requestPermission(), 'locationRequestPermissionResult');
  }

  getLastLocation() {
    this.runFunction(() => this.fusedLocation.getLastLocation(), 'getLastLocationResult');
  }

  getLocationAvailability() {
    this.runFunction(() => this.fusedLocation.getLocationAvailability(), 'getLocationAvailabilityResult');
  }

  getNavigationContextState() {
    this.runFunction(() => this.fusedLocation.getNavigationContextState(NavigationRequestConstants.IS_SUPPORT_EX), 'getNavigationContextStateResult');
  }

  getLastLocationWithAddress() {
    this.runFunction(() => this.fusedLocation.getLastLocationWithAddress(this.newLocationRequest()), 'getLastLocationWithAddressResult');
  }

  flushLocations() {
    this.runFunction(() => this.fusedLocation.flushLocations(), 'flushLocationsResult');
  }

  checkLocationSettings() {
    this.runFunction(() => this.fusedLocation.checkLocationSettings({
            alwaysShow: true,
            needBle: true,
            locationRequests: []
        }), 'checkLocationSettingsResult');
  }

  enableMockMode() {
    this.runFunction(() => this.fusedLocation.setMockMode(true), 'enableMockModeResult');
  }
  
  disableMockMode() {
    this.runFunction(() => this.fusedLocation.setMockMode(false), 'disableMockModeResult');
  }

  setMockLocation() {
    this.runFunction(() => this.fusedLocation.setMockLocation({
      latitude: parseFloat(this.mockLat),
      longitude: parseFloat(this.mockLong)
    }), 'setMockLocationResult');
  }
  
  async requestLocationUpdates() {
    this.fusedLocation.requestLocationUpdates({
      id: "locationRequest" + Math.random() * 10000,
      priority: PriorityConstants.PRIORITY_HIGH_ACCURACY,
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
    }).then(requestLocationUpdatesResult => {
      this.locationUpdateRequests.push(requestLocationUpdatesResult.id);
      this['requestLocationUpdatesResult'] = JSON.stringify(requestLocationUpdatesResult, null, 1);
    }).catch(function (e) {
      this['requestLocationUpdatesResult'] = JSON.stringify(e, null, 1);
    });
  }

  async registerLocationUpdates(){
    window.registerHMSEvent(Events.SCANNING_RESULT, (result) =>
    this.ngZone.run(() => this.registerLocationUpdateResult = asStr(result)));

  }

  async removeLocationUpdateRequests() {
    try {
      console.log("Removing location update requests...");
      this.locationUpdateRequests.forEach(async requestCode => {
          const result = await this.fusedLocation.removeLocationUpdates(requestCode);
          console.log({requestCode, result});
      });
      window.unregisterHMSEvent(this.fusedLocation.Events.SCANNING_RESULT,(result) => {
        this['removeLocationUpdateResult'] = JSON.stringify(result, null, 1);
      });
      this.locationUpdateRequests.length = 0; // clear the array
    } catch (ex) {
      console.log(JSON.stringify(ex));
    }
  }

  //
  // Activity Identification
  //

  hasActivityPermission() {
    this.runFunction(() => this.activityIdentification.hasPermission(), 'activityHasPermissionResult');
  }

  requestAcitvityPermission() {
    this.runFunction(() => this.activityIdentification.requestPermission(), 'acitvityRequestPermissionResult');
  }

  createActivityConversionUpdates() {
    const activityConversions = [
        // STILL
        {
            conversionType: ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: Activities.STILL
        },
        {
            conversionType: ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: Activities.STILL
        },

        // ON FOOT
        {
            conversionType: ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: Activities.FOOT
        },
        {
            conversionType: ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: Activities.FOOT
        },

        // RUNNING
        {
            conversionType: ActivityConversions.ENTER_ACTIVITY_CONVERSION,
            activityType: Activities.RUNNING
        },
        {
            conversionType: ActivityConversions.EXIT_ACTIVITY_CONVERSION,
            activityType: Activities.RUNNING
        }
    ];
    this.runFunction(
      () => this.activityIdentification.createActivityConversionUpdates(activityConversions),
      'createActivityConversionUpdatesResult'
    );
  }

  registerActivityConversionUpdates() {
    window.registerHMSEvent(Events.ACTIVITY_CONVERSION_RESULT, (result) =>
      this.ngZone.run(() => this.registerActivityConversionUpdatesResult = asStr(result)));
  }

  deleteActivityConversionUpdates() {
    this.runFunction(() => this.activityIdentification.deleteActivityConversionUpdates(parseInt(this.activityConversionRequestCode)), 'deleteActivityConversionResult');
  }

  createActivityIdentificationUpdates() {
    this.runFunction(
      () => this.activityIdentification.createActivityIdentificationUpdates(2000),
      'createActivityIdentificationUpdatesResult'
    );
  }

  registerActivityIdentificationUpdates() {
    window.registerHMSEvent(Events.ACTIVITY_IDENTIFICATION_RESULT, (result) =>
      this.ngZone.run(() => this.registerActivityIdentificationUpdatesResult = asStr(result)));
  }

  deleteActivityIdentificationUpdates() {
    this.runFunction(() => this.activityIdentification.deleteActivityIdentificationUpdates(parseInt(this.activityIdentificationRequestCode)), 'deleteActivityIdentificationResult');
  }

  //
  // Geofences
  //

    createGeofenceList() {
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

      this.runFunction(
          () => this.geofence.createGeofenceList(
            [geofence1, geofence2],
            GeofenceRequestConstants.DWELL_INIT_CONVERSION,
            GeofenceRequestConstants.COORDINATE_TYPE_WGS_84
          ),
          'createGeofenceListResult'
      );

  }

  deleteGeofenceList() {
    this.runFunction(() => this.geofence.deleteGeofenceList(parseInt(this.geofenceRequestCode)), 'deleteGeofenceListResult');
  }

  registerGeofenceUpdates() {
    window.registerHMSEvent(Events.GEOFENCE_RESULT, (result) =>
      this.ngZone.run(() => this.registerGeofenceUpdatesResult = asStr(result)));
  }
}
