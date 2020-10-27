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

package com.huawei.hms.cordova.inapppurchases;

import android.content.Intent;
import android.content.IntentSender;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.inapppurchases.logger.HMSLogger;
import com.huawei.hms.cordova.inapppurchases.utils.Constants;
import com.huawei.hms.cordova.inapppurchases.utils.JSONUtils;
import com.huawei.hms.cordova.inapppurchases.utils.ObjectUtils;
import com.huawei.hms.iap.Iap;
import com.huawei.hms.iap.IapApiException;
import com.huawei.hms.iap.IapClient;
import com.huawei.hms.iap.entity.ConsumeOwnedPurchaseReq;
import com.huawei.hms.iap.entity.ConsumeOwnedPurchaseResult;
import com.huawei.hms.iap.entity.IsEnvReadyResult;
import com.huawei.hms.iap.entity.IsSandboxActivatedReq;
import com.huawei.hms.iap.entity.IsSandboxActivatedResult;
import com.huawei.hms.iap.entity.OrderStatusCode;
import com.huawei.hms.iap.entity.OwnedPurchasesReq;
import com.huawei.hms.iap.entity.OwnedPurchasesResult;
import com.huawei.hms.iap.entity.ProductInfoReq;
import com.huawei.hms.iap.entity.ProductInfoResult;
import com.huawei.hms.iap.entity.PurchaseIntentReq;
import com.huawei.hms.iap.entity.PurchaseIntentResult;
import com.huawei.hms.iap.entity.PurchaseResultInfo;
import com.huawei.hms.iap.entity.StartIapActivityReq;
import com.huawei.hms.iap.entity.StartIapActivityResult;
import com.huawei.hms.support.api.client.Status;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public final class HMSInAppPurchases extends CordovaPlugin {
    private static final String TAG = HMSInAppPurchases.class.getSimpleName();

    private final Map<Integer, Integer> typesForRequests = new HashMap<>();

    private int requestNumber;
    private IapClient iapClient;
    private CallbackContext callbackContext;
    private HMSLogger hmsLogger;

    @Override
    public void initialize(final CordovaInterface cordova, final CordovaWebView webView) {
        iapClient = Iap.getIapClient(cordova.getActivity());
        hmsLogger = HMSLogger.getInstance(cordova.getContext());
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext)
        throws JSONException {
        this.callbackContext = callbackContext;
        hmsLogger.startMethodExecutionTimer(action);

        if ("init".equals(action)) {
            init(callbackContext::success);
        } else if ("isEnvReady".equals(action)) {
            isEnvReady(callbackContext);
        } else if ("isSandboxActivated".equals(action)) {
            isSandboxActivated(callbackContext);
        } else if ("obtainOwnedPurchases".equals(action)) {
            obtainOwnedPurchases(args.getJSONObject(0), callbackContext);
        } else if ("obtainProductInfo".equals(action)) {
            obtainProductInfo(args.getJSONObject(0), callbackContext);
        } else if ("createPurchaseIntent".equals(action)) {
            createPurchaseIntent(args.getJSONObject(0), callbackContext);
        } else if ("consumeOwnedPurchase".equals(action)) {
            consumeOwnedPurchase(args.getJSONObject(0), callbackContext);
        } else if ("obtainOwnedPurchaseRecord".equals(action)) {
            obtainOwnedPurchaseRecord(args.getJSONObject(0), callbackContext);
        } else if ("startIapActivity".equals(action)) {
            startIapActivity(args.getString(0), callbackContext);
        } else if ("enableLogger".equals(action)) {
            hmsLogger.enableLogger();
            callbackContext.success();
        } else if ("disableLogger".equals(action)) {
            hmsLogger.disableLogger();
            callbackContext.success();
        } else {
            return false;
        }
        return true;
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        Log.d(TAG, "new onActivityResult, requestCode=" + requestCode + ", resultCode=" + resultCode);

        final CallbackContext inComingCallbackContext = callbackContext;
        callbackContext = null;

        if (inComingCallbackContext != null && typesForRequests.containsKey(requestCode)) {
            if (data == null) {
                Log.e("onActivityResult", "data is null");
                inComingCallbackContext.error(JSONUtils.error(Constants.ERR_INTENT_DATA_EMPTY));
            } else {
                final int requestType = ObjectUtils.safeUnboxInteger(typesForRequests.get(requestCode), -1);

                if (requestType == Constants.REQUEST_IS_ENVIRONMENT_READY) {
                    Log.i(TAG, "onActivityResult from isEnvReady");
                    final int returnCode = data.getIntExtra("returnCode", 1);

                    if (returnCode == 0) {
                        isEnvReady(inComingCallbackContext);
                    } else {
                        inComingCallbackContext.error(JSONUtils.error(Constants.ERR_CAN_NOT_LOG_IN));
                    }
                }
                if (requestType == Constants.REQUEST_CREATE_PURCHASE_INTENT) {
                    Log.i(TAG, "onActivityResult from createPurchaseIntent");
                    final PurchaseResultInfo purchaseResultInfo = iapClient.parsePurchaseResultInfoFromIntent(data);
                    inComingCallbackContext.success(JSONUtils.getJSONFromPurchaseResultInfo(purchaseResultInfo));
                }
                typesForRequests.remove(requestCode);
            }
        }
    }

    private void runJS(final CordovaInterface cordova, final CordovaWebView webView, final String jsCode,
        final Runnable onFinished) {
        Log.d(TAG, "runJS() start");

        cordova.getActivity().runOnUiThread(() -> webView.getEngine().evaluateJavascript(jsCode, result -> {
            if (onFinished != null) {
                onFinished.run();
            }
        }));
    }

    private void init(final Runnable onFinished) {
        try {
            runJS(cordova, webView,
                "hmsSetConstants('" + getServiceName() + "', " + Constants.getConstantsAsJsonString() + ")",
                onFinished);
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
    }

    private void isSandboxActivated(final CallbackContext callbackContext) {
        final Task<IsSandboxActivatedResult> task = iapClient.isSandboxActivated(new IsSandboxActivatedReq());
        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("isSandboxActivated");
            Log.i(TAG, "isSandboxActivated success");
            callbackContext.success(JSONUtils.getJSONFromIsSandboxActivatedResult(result));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("isSandboxActivated", e.getMessage());
            Log.e(TAG, "isSandboxActivated fail");
            handleError(e, callbackContext);
        });
    }

    private void isEnvReady(final CallbackContext callbackContext) {
        cordova.setActivityResultCallback(this);
        final Task<IsEnvReadyResult> task = iapClient.isEnvReady();
        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("isEnvReady");
            Log.i(TAG, "isEnvReady success");
            callbackContext.success(JSONUtils.getJSONFromIsEnvReadyResult(result));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("isEnvReady", e.getMessage());
            Log.i(TAG, "isEnvReady fail");
            handleError(e, callbackContext, Constants.REQUEST_IS_ENVIRONMENT_READY,
                new Integer[] {OrderStatusCode.ORDER_HWID_NOT_LOGIN});
        });
    }

    private void obtainOwnedPurchases(final JSONObject ownedPurchasesRequestJSON,
        final CallbackContext callbackContext) {
        final OwnedPurchasesReq req = JSONUtils.getOwnedPurchasesReqFromJSON(ownedPurchasesRequestJSON);
        final Task<OwnedPurchasesResult> task = iapClient.obtainOwnedPurchases(req);

        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("obtainOwnedPurchases");
            Log.i(TAG, "obtainOwnedPurchases success");
            callbackContext.success(JSONUtils.getJSONFromOwnedPurchasesResult(result));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("obtainOwnedPurchases", e.getMessage());
            Log.i(TAG, "obtainOwnedPurchases fail");
            handleError(e, callbackContext);
        });
    }

    private void obtainProductInfo(final JSONObject productInfoRequestJSON, final CallbackContext callbackContext) {
        final ProductInfoReq req = JSONUtils.getProductInfoReqFromJSON(productInfoRequestJSON);
        final Task<ProductInfoResult> task = iapClient.obtainProductInfo(req);

        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("obtainProductInfo");
            Log.i(TAG, "obtainProductInfo success");
            callbackContext.success(JSONUtils.getJSONFromProductInfoResult(result));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("obtainProductInfo", e.getMessage());
            Log.i(TAG, "obtainProductInfo fail");
            handleError(e, callbackContext);
        });
    }

    private void createPurchaseIntent(final JSONObject purchaseIntentRequestJSON,
        final CallbackContext callbackContext) {
        cordova.setActivityResultCallback(this);
        final PurchaseIntentReq req = JSONUtils.getPurchaseIntentReqFromJSON(purchaseIntentRequestJSON);
        final Task<PurchaseIntentResult> task = iapClient.createPurchaseIntent(req);
        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("createPurchaseIntent");
            Log.i(TAG, "createPurchaseIntent success");

            Status status = result.getStatus();
            if (status.hasResolution()) {
                handleResolution(status, callbackContext, Constants.REQUEST_CREATE_PURCHASE_INTENT);
                return;
            }

            callbackContext.success(JSONUtils.getJSONFromStatus(status));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("createPurchaseIntent", e.getMessage());
            Log.e(TAG, "createPurchaseIntent fail");
            handleError(e, callbackContext);
        });
    }

    private void consumeOwnedPurchase(final JSONObject consumeOwnedPurchaseRequestJSON,
        final CallbackContext callbackContext) {
        final ConsumeOwnedPurchaseReq req = JSONUtils.getConsumeOwnedPurchaseReqFromJSON(
            consumeOwnedPurchaseRequestJSON);
        final Task<ConsumeOwnedPurchaseResult> task = iapClient.consumeOwnedPurchase(req);

        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("consumeOwnedPurchase");
            Log.i(TAG, "consumeOwnedPurchase success");
            callbackContext.success(JSONUtils.getJSONFromConsumeOwnedPurchaseResult(result));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("consumeOwnedPurchase", e.getMessage());
            Log.e(TAG, "consumeOwnedPurchase fail");
            handleError(e, callbackContext);
        });
    }

    private void obtainOwnedPurchaseRecord(final JSONObject ownedPurchasesRequestJSON,
        final CallbackContext callbackContext) {
        final OwnedPurchasesReq req = JSONUtils.getOwnedPurchasesReqFromJSON(ownedPurchasesRequestJSON);
        final Task<OwnedPurchasesResult> task = iapClient.obtainOwnedPurchaseRecord(req);

        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("obtainOwnedPurchaseRecord");
            Log.i(TAG, "obtainOwnedPurchaseRecord success");
            callbackContext.success(JSONUtils.getJSONFromOwnedPurchasesResult(result));
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("obtainOwnedPurchaseRecord", e.getMessage());
            Log.e(TAG, "obtainOwnedPurchaseRecord fail");
            handleError(e, callbackContext);
        });
    }

    private void startIapActivity(final String productId, final CallbackContext callbackContext) {
        final StartIapActivityReq req = new StartIapActivityReq();

        if (productId.equals("")) {
            req.setType(StartIapActivityReq.TYPE_SUBSCRIBE_MANAGER_ACTIVITY);
        } else {
            req.setSubscribeProductId(productId);
            req.setType(StartIapActivityReq.TYPE_SUBSCRIBE_EDIT_ACTIVITY);
        }

        final Task<StartIapActivityResult> task = iapClient.startIapActivity(req);

        task.addOnSuccessListener(result -> {
            hmsLogger.sendSingleEvent("startIapActivity");
            Log.e(TAG, "startIapActivity success");
            result.startActivity(cordova.getActivity());
            callbackContext.success();
        }).addOnFailureListener(e -> {
            hmsLogger.sendSingleEvent("startIapActivity", e.getMessage());
            Log.e(TAG, "startIapActivity fail");
            handleError(e, callbackContext);
        });
    }

    private synchronized void handleResolution(final Status status, final CallbackContext callbackContext,
        final int requestType) {
        typesForRequests.put(++requestNumber, requestType);
        Log.d(TAG, "handleResolution with reqType=" + requestType + ", reqNumber=" + requestNumber);

        try {
            Log.d(TAG, "startResolutionForResult");
            status.startResolutionForResult(cordova.getActivity(), requestNumber);
        } catch (final IntentSender.SendIntentException e) {
            Log.d(TAG, "error while handleResolution, startResolutionForResult");
            typesForRequests.remove(requestNumber);
            callbackContext.error(e.getMessage());
        }
    }

    private void handleError(final Exception e, final CallbackContext callbackContext) {
        handleError(e, callbackContext, null, new Integer[] {});
    }

    private void handleError(final Exception e, final CallbackContext callbackContext, final Integer requestType,
        final Integer[] statusCodes) {
        if (e instanceof IapApiException) {
            final IapApiException apiException = (IapApiException) e;
            final Status status = apiException.getStatus();

            if (requestType != null && ((statusCodes.length == 0 && status.hasResolution()) || Arrays.asList(
                statusCodes).contains(status.getStatusCode()))) {
                handleResolution(status, callbackContext, requestType);
            } else {
                callbackContext.error(JSONUtils.getJSONFromStatus(status));
            }
        } else {
            callbackContext.error(e.getMessage());
        }
    }
}
