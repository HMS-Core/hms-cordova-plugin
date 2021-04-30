/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.safetydetect;

import android.util.Log;

import com.huawei.hms.cordova.safetydetect.basef.CordovaBaseModule;
import com.huawei.hms.cordova.safetydetect.basef.CordovaMethod;
import com.huawei.hms.cordova.safetydetect.basef.HMSLog;
import com.huawei.hms.cordova.safetydetect.basef.handler.CorPack;
import com.huawei.hms.cordova.safetydetect.basef.handler.Promise;
import com.huawei.hms.cordova.safetydetect.helpers.HMSFailureResultHelper;
import com.huawei.hms.cordova.safetydetect.utils.HMSSafetyDetectUtils;
import com.huawei.hms.support.api.entity.core.CommonCode;
import com.huawei.hms.support.api.entity.safetydetect.MaliciousAppsData;
import com.huawei.hms.support.api.entity.safetydetect.SysIntegrityRequest;
import com.huawei.hms.support.api.entity.safetydetect.UrlCheckThreat;
import com.huawei.hms.support.api.safetydetect.SafetyDetect;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.nio.charset.Charset;
import java.util.List;

import static com.huawei.hms.cordova.safetydetect.utils.HMSSafetyDetectUtils.getSysIntegrityRequest;

public class SafetyDetectModule extends CordovaBaseModule {
    public static final String TAG = SafetyDetectModule.class.getSimpleName();
    private HMSFailureResultHelper failureResultHelper;

    public SafetyDetectModule() {
        failureResultHelper = new HMSFailureResultHelper();
    }

    @CordovaMethod
    @HMSLog
    public void enableAppsCheck(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .enableAppsCheck()
                .addOnSuccessListener(appsCheckResp -> {
                    try {
                        JSONObject enableAppsCheck = new JSONObject();
                        enableAppsCheck.put("isEnableAppsCheck", appsCheckResp.getResult());
                        promise.success(enableAppsCheck);
                    } catch (JSONException e) {
                        failureResultHelper.handleFailure(TAG, "enableAppsCheck", e, promise);
                    }
                }).addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "enableAppsCheck", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void isVerifyAppsCheck(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .isVerifyAppsCheck()
                .addOnSuccessListener(appsCheckResp -> {
                    try {
                        JSONObject verifyAppsCheck = new JSONObject();
                        verifyAppsCheck.put("isVerifyAppsEnabled", appsCheckResp.getResult());
                        promise.success(verifyAppsCheck);
                    } catch (JSONException e) {
                        failureResultHelper.handleFailure(TAG, "isVerifyAppsCheck", e, promise);
                    }
                }).addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "isVerifyAppsCheck", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void getMaliciousAppsList(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .getMaliciousAppsList()
                .addOnSuccessListener(maliciousAppsListResp -> {
                    List<MaliciousAppsData> appsDataList = maliciousAppsListResp.getMaliciousAppsList();
                    if (maliciousAppsListResp.getRtnCode() == CommonCode.OK) {
                        try {
                            promise.success(HMSSafetyDetectUtils.fromMaliciousAppsDataToJsonArray(appsDataList));
                        } catch (JSONException e) {
                            failureResultHelper.handleFailure(TAG, "getMaliciousAppsList", e, promise);
                        }
                    } else {
                        Log.e(TAG, "Get malicious apps list failed! Message: " + maliciousAppsListResp.getErrorReason());
                        new JSONArray().put(Integer.toString(maliciousAppsListResp.getRtnCode()))
                                .put(maliciousAppsListResp.getErrorReason());
                    }
                }).addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "getMaliciousAppsList", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void sysIntegrity(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final byte[] byteNonce = args.optString(0).getBytes(Charset.defaultCharset());
        final String appId = args.getString(1);

        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .sysIntegrity(byteNonce, appId)
                .addOnSuccessListener(response -> {
                    String jwsStr = response.getResult();
                    promise.success(jwsStr);
                }).addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "sysIntegrity", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void sysIntegrityWithRequest(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        SysIntegrityRequest sysIntegrityRequest = getSysIntegrityRequest(args);
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .sysIntegrity(sysIntegrityRequest)
                .addOnSuccessListener(sysIntegrityResponse -> promise.success(sysIntegrityResponse.getResult()))
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "getWifiDetectStatus", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void initUrlCheck(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .initUrlCheck()
                .addOnSuccessListener(success -> {
                    promise.success();
                }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "initUrlCheck", e, promise);
        });
    }

    @CordovaMethod
    @HMSLog
    public void urlCheck(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String url = args.getString(0);
        final String appId = args.getString(1);
        final JSONArray urlCheckThreats = args.getJSONArray(2);
        final int[] urlCheckThreatsArray = HMSSafetyDetectUtils.fromJsonArrayToUrlCheckThreats(urlCheckThreats);

        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .urlCheck(url, appId, urlCheckThreatsArray)
                .addOnSuccessListener(urlResponse -> {
                    List<UrlCheckThreat> urlCheckResponses = urlResponse.getUrlCheckResponse();
                    promise.success(HMSSafetyDetectUtils.fromUrlCheckThreatsToJsonArray(urlCheckResponses));
                }).addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "urlCheck", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void shutdownUrlCheck(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .shutdownUrlCheck()
                .addOnSuccessListener(success -> promise.success())
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "shutdownUrlCheck", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void initUserDetect(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .initUserDetect()
                .addOnSuccessListener(success -> promise.success())
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "initUserDetect", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void userDetection(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String appId = args.getString(0);
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .userDetection(appId)
                .addOnSuccessListener(userDetectResponse -> promise.success(userDetectResponse.getResponseToken()))
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "userDetection", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void shutdownUserDetect(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .shutdownUrlCheck()
                .addOnSuccessListener(success -> promise.success())
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "shutdownUserDetect", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void initAntiFraud(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String appId = args.getString(0);
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .initAntiFraud(appId)
                .addOnSuccessListener(success -> promise.success())
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "initAntiFraud", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void getRiskToken(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .getRiskToken()
                .addOnSuccessListener(riskTokenResponse -> promise.success(riskTokenResponse.getRiskToken()))
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "getRiskToken", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void releaseAntiFraud(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .releaseAntiFraud()
                .addOnSuccessListener(success -> promise.success())
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "releaseAntiFraud", e, promise));
    }

    @CordovaMethod
    @HMSLog
    public void getWifiDetectStatus(final CorPack corPack, final JSONArray args, final Promise promise) {
        SafetyDetect.getClient(corPack.getCordova().getActivity())
                .getWifiDetectStatus()
                .addOnSuccessListener(wifiDetectResponse -> promise.success(wifiDetectResponse.getWifiDetectStatus()))
                .addOnFailureListener(e -> failureResultHelper.handleFailure(TAG, "getWifiDetectStatus", e, promise));
    }

    @HMSLog
    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }
}
