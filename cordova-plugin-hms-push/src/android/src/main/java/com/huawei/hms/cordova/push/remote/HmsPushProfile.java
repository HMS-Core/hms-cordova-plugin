/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push.remote;

import android.content.Context;

import com.huawei.hms.cordova.push.basef.CordovaBaseModule;
import com.huawei.hms.cordova.push.basef.CordovaMethod;
import com.huawei.hms.cordova.push.basef.HMSLog;
import com.huawei.hms.cordova.push.basef.handler.CorPack;
import com.huawei.hms.cordova.push.basef.handler.Promise;
import com.huawei.hms.push.HmsProfile;

import org.json.JSONArray;
import org.json.JSONException;

public class HmsPushProfile extends CordovaBaseModule {
    private HmsProfile hmsProfile;

    public HmsPushProfile(Context context) {
        hmsProfile = HmsProfile.getInstance(context);
    }

    @HMSLog
    @CordovaMethod
    public void isSupportProfile(final CorPack corPack, JSONArray args, final Promise promise) {
        promise.success(hmsProfile.isSupportProfile());
    }

    @HMSLog
    @CordovaMethod
    public void addProfile(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsProfile.addProfile(args.getInt(0), args.getString(1))
            .addOnSuccessListener(aVoid -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void addProfileWithSubjectId(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        hmsProfile.addProfile(args.getString(0), args.getInt(1), args.getString(2))
            .addOnSuccessListener(aVoid -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void deleteProfile(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        hmsProfile.deleteProfile(args.getString(0))
            .addOnSuccessListener(aVoid -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }

    @HMSLog
    @CordovaMethod
    public void deleteProfileWithSubjectId(final CorPack corPack, JSONArray args, final Promise promise)
        throws JSONException {
        hmsProfile.deleteProfile(args.getString(0), args.getString(1))
            .addOnSuccessListener(aVoid -> promise.success(true))
            .addOnFailureListener(error -> promise.error(error.getLocalizedMessage()));
    }
}
