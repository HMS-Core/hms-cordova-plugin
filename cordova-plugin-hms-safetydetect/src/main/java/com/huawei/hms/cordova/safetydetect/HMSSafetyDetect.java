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

package com.huawei.hms.cordova.safetydetect;

import android.util.Log;

import com.huawei.hms.cordova.safetydetect.helpers.HMSFailureResultHelper;
import com.huawei.hms.cordova.safetydetect.logger.HMSLogger;
import com.huawei.hms.cordova.safetydetect.utils.HMSSafetyDetectUtils;
import com.huawei.hms.support.api.entity.core.CommonCode;
import com.huawei.hms.support.api.entity.safetydetect.MaliciousAppsData;
import com.huawei.hms.support.api.entity.safetydetect.UrlCheckThreat;
import com.huawei.hms.support.api.safetydetect.SafetyDetect;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.nio.charset.Charset;
import java.util.List;

public class HMSSafetyDetect extends CordovaPlugin {
    public static final String TAG = HMSSafetyDetect.class.getSimpleName();
    private HMSLogger logger;
    private HMSFailureResultHelper failureResultHelper;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        logger = HMSLogger.getInstance(cordova.getContext());
        failureResultHelper = new HMSFailureResultHelper(logger);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        logger.startMethodExecutionTimer(action);
        if ("enableAppsCheck".equals(action)) {
            enableAppsCheck(callbackContext);
            return true;
        } else if ("isVerifyAppsCheck".equals(action)) {
            isVerifyAppsCheck(callbackContext);
            return true;
        } else if ("getMaliciousAppsList".equals(action)) {
            getMaliciousAppsList(callbackContext);
            return true;
        } else if ("sysIntegrity".equals(action)) {
            sysIntegrity(args, callbackContext);
            return true;
        } else if ("initUrlCheck".equals(action)) {
            initUrlCheck(callbackContext);
            return true;
        } else if ("urlCheck".equals(action)) {
            urlCheck(args, callbackContext);
            return true;
        } else if ("shutdownUrlCheck".equals(action)) {
            shutdownUrlCheck(callbackContext);
            return true;
        } else if ("initUserDetect".equals(action)) {
            initUserDetect(callbackContext);
            return true;
        } else if ("userDetection".equals(action)) {
            userDetection(args, callbackContext);
            return true;
        } else if ("shutdownUserDetect".equals(action)) {
            shutdownUserDetect(callbackContext);
            return true;
        } else if ("initAntiFraud".equals(action)) {
            initAntiFraud(args, callbackContext);
            return true;
        } else if ("getRiskToken".equals(action)) {
            getRiskToken(callbackContext);
            return true;
        } else if ("releaseAntiFraud".equals(action)) {
            releaseAntiFraud(callbackContext);
            return true;
        } else if ("getWifiDetectStatus".equals(action)) {
            getWifiDetectStatus(callbackContext);
            return true;
        } else if ("enableLogger".equals(action)) {
            enableLogger(callbackContext);
            return true;
        } else if ("disableLogger".equals(action)) {
            disableLogger(callbackContext);
            return true;
        }
        return false;
    }
    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMS AppsCheck
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void enableAppsCheck(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).enableAppsCheck().addOnSuccessListener(appsCheckResp -> {
            boolean isEnableAppsCheck = appsCheckResp.getResult();
            if (isEnableAppsCheck) {
                try {
                    Log.i(TAG, "The AppsCheck feature is enabled.");
                    JSONObject enableAppsCheck = new JSONObject();
                    enableAppsCheck.put("isEnableAppsCheck", isEnableAppsCheck);
                    callbackContext.success(enableAppsCheck);
                    logger.sendSingleEvent("enableAppsCheck");
                } catch (JSONException e) {
                    failureResultHelper.handleFailure(TAG, "enableAppsCheck", e, callbackContext);
                }
            }
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "enableAppsCheck", e, callbackContext);
        });
    }

    private void isVerifyAppsCheck(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).isVerifyAppsCheck().addOnSuccessListener(appsCheckResp -> {
            boolean isVerifyAppsEnabled = appsCheckResp.getResult();
            if (isVerifyAppsEnabled) {
                try {
                    JSONObject verifyAppsCheck = new JSONObject();
                    verifyAppsCheck.put("isVerifyAppsEnabled", isVerifyAppsEnabled);
                    callbackContext.success(verifyAppsCheck);
                    logger.sendSingleEvent("isVerifyAppsCheck");
                } catch (JSONException e) {
                    failureResultHelper.handleFailure(TAG, "isVerifyAppsCheck", e, callbackContext);
                }
            }
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "isVerifyAppsCheck", e, callbackContext);

        });
    }

    private void getMaliciousAppsList(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity())
            .getMaliciousAppsList()
            .addOnSuccessListener(maliciousAppsListResp -> {
                List<MaliciousAppsData> appsDataList = maliciousAppsListResp.getMaliciousAppsList();
                if (maliciousAppsListResp.getRtnCode() == CommonCode.OK) {
                    try {
                        callbackContext.success(HMSSafetyDetectUtils.fromMaliciousAppsDataToJsonArray(appsDataList));
                        logger.sendSingleEvent("getMaliciousAppsList");
                    } catch (JSONException e) {
                        failureResultHelper.handleFailure(TAG, "getMaliciousAppsList", e, callbackContext);
                    }
                } else {
                    logger.sendSingleEvent("getMaliciousAppsList",
                        Integer.toString(maliciousAppsListResp.getRtnCode()));
                    Log.e(TAG, "Get malicious apps list failed! Message: " + maliciousAppsListResp.getErrorReason());
                    new JSONArray().put(Integer.toString(maliciousAppsListResp.getRtnCode()))
                        .put(maliciousAppsListResp.getErrorReason()).toString();
                }
            })
            .addOnFailureListener(e -> {
                failureResultHelper.handleFailure(TAG, "getMaliciousAppsList", e, callbackContext);

            });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMS SysIntegrity
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void sysIntegrity(JSONArray args, CallbackContext callbackContext) throws JSONException {
        byte[] byteNonce = args.optString(0).getBytes(Charset.defaultCharset());
        String appId = args.getString(1);

        if (appId == null || appId.isEmpty() || byteNonce.length <= 0) {
            callbackContext.error("Empty Parameter!");
            return;
        }

        SafetyDetect.getClient(cordova.getActivity()).sysIntegrity(byteNonce, appId).addOnSuccessListener(response -> {
            String jwsStr = response.getResult();
            callbackContext.success(jwsStr);
            logger.sendSingleEvent("sysIntegrity");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "sysIntegrity", e, callbackContext);
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMS UrlCheck
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void initUrlCheck(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).initUrlCheck().addOnSuccessListener(success -> {
            callbackContext.success();
            logger.sendSingleEvent("initUrlCheck");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "initUrlCheck", e, callbackContext);

        });
    }

    private void urlCheck(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String url = args.getString(0);
        String appId = args.getString(1);
        JSONArray urlCheckThreats = args.getJSONArray(2);

        if ((url == null || url.isEmpty()) || (appId == null || appId.isEmpty()) || (urlCheckThreats == null
            || urlCheckThreats.length() == 0)) {
            callbackContext.error("Empty Parameter!");
            return;
        }
        SafetyDetect.getClient(cordova.getActivity())
            .urlCheck(url, appId, HMSSafetyDetectUtils.fromJsonArrayToUrlCheckThreats(urlCheckThreats))
            .addOnSuccessListener(urlResponse -> {
                List<UrlCheckThreat> urlCheckResponses = urlResponse.getUrlCheckResponse();
                try {
                    callbackContext.success(HMSSafetyDetectUtils.fromUrlCheckThreatsToJsonArray(urlCheckResponses));
                    logger.sendSingleEvent("urlCheck");
                } catch (JSONException e) {
                    failureResultHelper.handleFailure(TAG, "urlCheck", e, callbackContext);                
                }
            })
            .addOnFailureListener(e -> {
                failureResultHelper.handleFailure(TAG, "urlCheck", e, callbackContext);
            });
    }

    private void shutdownUrlCheck(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).shutdownUrlCheck().addOnSuccessListener(success -> {
            callbackContext.success();
            logger.sendSingleEvent("shutdownUrlCheck");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "shutdownUrlCheck", e, callbackContext);

        });
    }
    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMS UserDetect
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void initUserDetect(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).initUserDetect().addOnSuccessListener(success -> {
            callbackContext.success();
            logger.sendSingleEvent("initUserDetect");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "initUserDetect", e, callbackContext);
        });
    }

    private void userDetection(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String appId = args.getString(0);
        if (appId == null || appId.isEmpty()) {
            callbackContext.error("Empty Parameter!");
            return;
        }

        SafetyDetect.getClient(cordova.getActivity()).userDetection(appId).addOnSuccessListener(userDetectResponse -> {
            String responseToken = userDetectResponse.getResponseToken();
            if (!responseToken.isEmpty()) {
                callbackContext.success(responseToken);
                logger.sendSingleEvent("userDetection");
            }
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "userDetection", e, callbackContext);
        });
    }

    private void shutdownUserDetect(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).shutdownUrlCheck().addOnSuccessListener(success -> {
            callbackContext.success();
            logger.sendSingleEvent("shutdownUserDetect");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "shutdownUserDetect", e, callbackContext);
        });
    }

    private void initAntiFraud(JSONArray args, CallbackContext callbackContext) throws JSONException {
        String appId = args.getString(0);
        if (appId == null || appId.isEmpty()) {
            callbackContext.error("Empty Parameter!");
            return;
        }

        SafetyDetect.getClient(cordova.getActivity()).initAntiFraud(appId).addOnSuccessListener(success -> {
            callbackContext.success();
            logger.sendSingleEvent("initAntiFraud");

        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "initAntiFraud", e, callbackContext);

        });
    }

    private void getRiskToken(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).getRiskToken().addOnSuccessListener(riskTokenResponse -> {
            callbackContext.success(riskTokenResponse.getRiskToken());
            logger.sendSingleEvent("getRiskToken");

        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "getRiskToken", e, callbackContext);

        });
    }

    private void releaseAntiFraud(CallbackContext callbackContext) {
        SafetyDetect.getClient(cordova.getActivity()).releaseAntiFraud().addOnSuccessListener(success -> {
            callbackContext.success();
            logger.sendSingleEvent("releaseAntiFraud");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "releaseAntiFraud", e, callbackContext);

        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMS WifiDetect
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void getWifiDetectStatus(CallbackContext callbackContext) {
        Log.i(TAG, "Start to getWifiDetectStatus!");

        SafetyDetect.getClient(cordova.getActivity()).getWifiDetectStatus().addOnSuccessListener(wifiDetectResponse -> {
            int wifiDetectStatus = wifiDetectResponse.getWifiDetectStatus();
            callbackContext.success(wifiDetectStatus);
            logger.sendSingleEvent("getWifiDetectStatus");
        }).addOnFailureListener(e -> {
            failureResultHelper.handleFailure(TAG, "getWifiDetectStatus", e, callbackContext);
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // HMS Logger
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void enableLogger(CallbackContext callbackContext) {
        try {
            logger.enableLogger();
            callbackContext.success();
            logger.sendSingleEvent("enableLogger");
        } catch (Exception e) {
            failureResultHelper.handleFailure(TAG, "enableLogger", e, callbackContext);
        }
    }

    private void disableLogger(CallbackContext callbackContext) {
        try {
            logger.disableLogger();
            callbackContext.success();
            logger.sendSingleEvent("disableLogger");
        } catch (Exception e) {
            failureResultHelper.handleFailure(TAG, "disableLogger", e, callbackContext);
        }
    }
}
