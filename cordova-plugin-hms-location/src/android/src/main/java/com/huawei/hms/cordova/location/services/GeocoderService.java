/*
 * Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.location.services;

import com.huawei.hms.cordova.location.basef.CordovaBaseModule;
import com.huawei.hms.cordova.location.basef.CordovaMethod;
import com.huawei.hms.cordova.location.basef.HMSLog;
import com.huawei.hms.cordova.location.basef.handler.CorPack;
import com.huawei.hms.cordova.location.basef.handler.Promise;
import com.huawei.hms.cordova.location.utils.json.ObjectToJSON;
import com.huawei.hms.location.GetFromLocationNameRequest;
import com.huawei.hms.location.GetFromLocationRequest;
import com.huawei.hms.location.HWLocation;
import com.huawei.hms.location.LocationServices;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Locale;

public class GeocoderService extends CordovaBaseModule {
    com.huawei.hms.location.GeocoderService geocoderService;

    @CordovaMethod
    @HMSLog
    public void getFromLocation(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Locale locale = new Locale(args.getString(3), args.getString(4));
        geocoderService = LocationServices.getGeocoderService(corPack.getCordova().getActivity(), locale);
        GetFromLocationRequest getFromLocationRequest = new GetFromLocationRequest(args.getDouble(0), args.getDouble(1),
            args.getInt(2));
        geocoderService.getFromLocation(getFromLocationRequest).addOnSuccessListener((List<HWLocation> hwLocations) -> {
            cb.success(ObjectToJSON.convertHWLocationListToJSONArray(hwLocations));
        }).addOnFailureListener(e -> cb.error(e.getMessage()));

    }

    @CordovaMethod
    @HMSLog
    public void getFromLocationName(final CorPack corPack, JSONArray args, final Promise cb) throws JSONException {
        Locale locale = new Locale(args.getString(3), args.getString(4));
        geocoderService = LocationServices.getGeocoderService(corPack.getCordova().getActivity(), locale);
        GetFromLocationNameRequest getFromLocationNameRequest;
        if (args.isNull(2)) {
            getFromLocationNameRequest = new GetFromLocationNameRequest(args.getString(0), args.getInt(1));
        } else {
            JSONObject corner = args.getJSONObject(2);
            getFromLocationNameRequest = new GetFromLocationNameRequest(args.getString(0), args.getInt(1),
                corner.getDouble("lowerLeftLatitude"), corner.getDouble("lowerLeftLongitude"),
                corner.getDouble("upperRightLatitude"), corner.getDouble("upperRightLongitude"));
        }
        geocoderService.getFromLocationName(getFromLocationNameRequest)
            .addOnSuccessListener((List<HWLocation> hwLocations) -> {
                cb.success(ObjectToJSON.convertHWLocationListToJSONArray(hwLocations));
            })
            .addOnFailureListener(e -> cb.error(e.getMessage()));
    }
}
