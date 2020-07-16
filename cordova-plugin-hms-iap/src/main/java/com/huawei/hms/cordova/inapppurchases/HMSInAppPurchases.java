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

package com.huawei.hms.cordova.inapppurchases;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import android.content.IntentSender;
import android.util.Log;
import android.util.Pair;
import android.net.Uri;
import android.content.ActivityNotFoundException;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.iap.Iap;
import com.huawei.hms.iap.IapApiException;
import com.huawei.hms.iap.IapClient;
import com.huawei.hms.iap.entity.ConsumeOwnedPurchaseReq;
import com.huawei.hms.iap.entity.ConsumeOwnedPurchaseResult;
import com.huawei.hms.iap.entity.InAppPurchaseData;
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
import com.huawei.hms.support.api.client.Status;

import com.huawei.hms.cordova.inapppurchases.utils.JSONUtils;
import com.huawei.hms.cordova.inapppurchases.utils.Constants;
import com.huawei.hms.cordova.inapppurchases.utils.HMSCordovaPlugin;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;


public class HMSInAppPurchases extends HMSCordovaPlugin {
    private static final String TAG = HMSInAppPurchases.class.getSimpleName();

    private static final Integer REQUEST_IS_ENVIRONMENT_READY = 111;
    private static final Integer REQUEST_CREATE_PURCHASE_INTENT = 222;

    private IapClient iapClient;
    private Map<Integer, Pair<CallbackContext, Integer>> callbacksForRequests;
    private int requestNumber = 0;

    public HMSInAppPurchases() {}

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);

        callbacksForRequests = new HashMap<>();
        iapClient = Iap.getIapClient(cordova.getActivity());

    }

    @Override
    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("isSandboxReady".equals(action))
            isSandboxReady(callbackContext);
        else if ("isEnvironmentReady".equals(action))
            isEnvironmentReady(callbackContext);
        else if ("obtainOwnedPurchases".equals(action))
            obtainOwnedPurchases(args.getJSONObject(0), callbackContext);
        else if ("obtainProductInfo".equals(action))
            obtainProductInfo(args.getJSONObject(0), callbackContext);
        else if ("createPurchaseIntent".equals(action))
            createPurchaseIntent(args.getJSONObject(0), callbackContext);
        else if ("consumeOwnedPurchase".equals(action))
            consumeOwnedPurchase(args.getJSONObject(0), callbackContext);
        else if ("obtainOwnedPurchaseRecord".equals(action))
            obtainOwnedPurchaseRecord(args.getJSONObject(0), callbackContext);
        else if ("startActivityWithUri".equals(action))
            startActivityWithUri(args.getString(0), callbackContext);
        else if ("showSubscriptionsActivity".equals(action))
            showSubscriptionsActivity(args.getJSONObject(0), callbackContext);
        else
            return false;

        return true;
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        JSONObject constants = new JSONObject();

        // OrderStatusCode
        constants.put("ORDER_ACCOUNT_AREA_NOT_SUPPORTED", OrderStatusCode.ORDER_ACCOUNT_AREA_NOT_SUPPORTED);
        constants.put("ORDER_HIGH_RISK_OPERATIONS", OrderStatusCode.ORDER_HIGH_RISK_OPERATIONS);
        constants.put("ORDER_HWID_NOT_LOGIN", OrderStatusCode.ORDER_HWID_NOT_LOGIN);
        constants.put("ORDER_NOT_ACCEPT_AGREEMENT", OrderStatusCode.ORDER_NOT_ACCEPT_AGREEMENT);
        constants.put("ORDER_PRODUCT_CONSUMED", OrderStatusCode.ORDER_PRODUCT_CONSUMED);
        constants.put("ORDER_PRODUCT_NOT_OWNED", OrderStatusCode.ORDER_PRODUCT_NOT_OWNED);
        constants.put("ORDER_PRODUCT_OWNED", OrderStatusCode.ORDER_PRODUCT_OWNED);
        constants.put("ORDER_STATE_CANCEL", OrderStatusCode.ORDER_STATE_CANCEL);
        constants.put("ORDER_STATE_FAILED", OrderStatusCode.ORDER_STATE_FAILED);
        constants.put("ORDER_STATE_NET_ERROR", OrderStatusCode.ORDER_STATE_NET_ERROR);
        constants.put("ORDER_STATE_PARAM_ERROR", OrderStatusCode.ORDER_STATE_PARAM_ERROR);
        constants.put("ORDER_STATE_SUCCESS", OrderStatusCode.ORDER_STATE_SUCCESS);
        constants.put("ORDER_VR_UNINSTALL_ERROR", OrderStatusCode.ORDER_VR_UNINSTALL_ERROR);

        // InAppPurchaseData
        constants.put("PURCHASE_DATA_NOT_PRESENT", InAppPurchaseData.NOT_PRESENT);

        // PurchaseState
        constants.put("PURCHASE_STATE_CANCELED", InAppPurchaseData.PurchaseState.CANCELED);
        constants.put("PURCHASE_STATE_INITIALIZED", InAppPurchaseData.PurchaseState.INITIALIZED);
        constants.put("PURCHASE_STATE_PURCHASED", InAppPurchaseData.PurchaseState.PURCHASED);
        constants.put("PURCHASE_STATE_REFUNDED", InAppPurchaseData.PurchaseState.REFUNDED);

        // PriceType
        constants.put("PRICE_TYPE_IN_APP_CONSUMABLE", IapClient.PriceType.IN_APP_CONSUMABLE);
        constants.put("PRICE_TYPE_IN_APP_NONCONSUMABLE", IapClient.PriceType.IN_APP_NONCONSUMABLE);
        constants.put("PRICE_TYPE_IN_APP_SUBSCRIPTION", IapClient.PriceType.IN_APP_SUBSCRIPTION);

        // Errors
        constants.put("ERR_CAN_NOT_LOG_IN", Constants.ERR_CAN_NOT_LOG_IN);
        constants.put("ERR_INTENT_DATA_EMPTY", Constants.ERR_INTENT_DATA_EMPTY);

        return constants;
    }

    private void isSandboxReady(final CallbackContext callbackContext) {
        Task<IsSandboxActivatedResult> task = iapClient.isSandboxActivated(new IsSandboxActivatedReq());
        task.addOnSuccessListener(result -> {
            Log.i(TAG, "isSandboxActivated success");
            callbackContext.success(JSONUtils.getJSONFromIsSandboxActivatedResult(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "isSandboxActivated fail");
            handleError(e, callbackContext);
        });
    }

    private void isEnvironmentReady(final CallbackContext callbackContext) {
        cordova.setActivityResultCallback(this);
        Task<IsEnvReadyResult> task = iapClient.isEnvReady();
        task.addOnSuccessListener(result -> {
            Log.i(TAG, "isEnvironmentReady success");
            callbackContext.success(JSONUtils.getJSONFromIsEnvReadyResult(result));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "isEnvironmentReady fail");
            handleError(e, callbackContext, REQUEST_IS_ENVIRONMENT_READY, new Integer[]{OrderStatusCode.ORDER_HWID_NOT_LOGIN});
        });
    }

    private void obtainOwnedPurchases(final JSONObject ownedPurchasesRequestJSON, final CallbackContext callbackContext) {
        OwnedPurchasesReq req = JSONUtils.getOwnedPurchasesReqFromJSON(ownedPurchasesRequestJSON);
        Task<OwnedPurchasesResult> task = iapClient.obtainOwnedPurchases(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "obtainOwnedPurchases success");
            callbackContext.success(JSONUtils.getJSONFromOwnedPurchasesResult(result));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "obtainOwnedPurchases fail");
            handleError(e, callbackContext);
        });
    }

    private void obtainProductInfo(final JSONObject productInfoRequestJSON, final CallbackContext callbackContext) {
        ProductInfoReq req = JSONUtils.getProductInfoReqFromJSON(productInfoRequestJSON);
        Task<ProductInfoResult> task = iapClient.obtainProductInfo(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "obtainProductInfo success");
            callbackContext.success(JSONUtils.getJSONFromProductInfoResult(result));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "obtainProductInfo fail");
            handleError(e, callbackContext);
        });
    }

    private void createPurchaseIntent(final JSONObject purchaseIntentRequestJSON, final CallbackContext callbackContext) {
        cordova.setActivityResultCallback(this);
        PurchaseIntentReq req = JSONUtils.getPurchaseIntentReqFromJSON(purchaseIntentRequestJSON);
        Task<PurchaseIntentResult> task = iapClient.createPurchaseIntent(req);
        task.addOnSuccessListener(result -> {
            Log.i(TAG, "createPurchaseIntent success");

            Status status = result.getStatus();
            if (status.hasResolution()) {
                handleResolution(status, callbackContext, REQUEST_CREATE_PURCHASE_INTENT);
                return;
            }

            callbackContext.success(JSONUtils.getJSONFromStatus(status));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "createPurchaseIntent fail");
            handleError(e, callbackContext);
        });
    }

    private void consumeOwnedPurchase(final JSONObject consumeOwnedPurchaseRequestJSON, final CallbackContext callbackContext) {
        ConsumeOwnedPurchaseReq req = JSONUtils.getConsumeOwnedPurchaseReqFromJSON(consumeOwnedPurchaseRequestJSON);
        Task<ConsumeOwnedPurchaseResult> task = iapClient.consumeOwnedPurchase(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "consumeOwnedPurchase success");
            callbackContext.success(JSONUtils.getJSONFromConsumeOwnedPurchaseResult(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "consumeOwnedPurchase fail");
            handleError(e, callbackContext);
        });
    }

    private void obtainOwnedPurchaseRecord(final JSONObject ownedPurchasesRequestJSON, final CallbackContext callbackContext) {
        OwnedPurchasesReq req = JSONUtils.getOwnedPurchasesReqFromJSON(ownedPurchasesRequestJSON);
        Task<OwnedPurchasesResult> task = iapClient.obtainOwnedPurchaseRecord(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "obtainOwnedPurchaseRecord success");
            callbackContext.success(JSONUtils.getJSONFromOwnedPurchasesResult(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "obtainOwnedPurchaseRecord fail");
            handleError(e, callbackContext);
        });
    }

    private void startActivityWithUri(final String uri, final CallbackContext callbackContext) {
        Log.d(TAG, "startActivityWithUri");

        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.setData(Uri.parse(uri));
        try {
            cordova.getActivity().getApplicationContext().startActivity(intent);
            callbackContext.success();
        } catch (ActivityNotFoundException e) {
            Log.e(TAG, "startActivityWithUri() :: ActivityNotFound, " + e.getMessage());
            callbackContext.error(Constants.ERR_ACTIVITY_NOT_FOUND);
        }
    }

    private void showSubscriptionsActivity(final JSONObject params, final CallbackContext callbackContext) throws JSONException  {
        Uri.Builder uriBuilder = Uri.parse("pay://com.huawei.hwid.external/subscriptions").buildUpon();

        if (params.has("appId"))
            uriBuilder.appendQueryParameter("appid", params.getString("appId"));
        if (params.has("package"))
            uriBuilder.appendQueryParameter("package", params.getString("package"));
        if (params.has("sku"))
            uriBuilder.appendQueryParameter("sku", params.getString("sku"));

        startActivityWithUri(uriBuilder.build().toString(), callbackContext);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.d(TAG, "new onActivityResult, requestCode=" + requestCode + ", resultCode=" + resultCode);

        if (!callbacksForRequests.containsKey(requestCode)) {
            Log.e(TAG, "No callbacks for given request!");
            return;
        }

        CallbackContext callbackContext = callbacksForRequests.get(requestCode).first;
        int requestType = callbacksForRequests.get(requestCode).second;

        if (data == null) {
            Log.e("onActivityResult", "data is null");
            callbackContext.error(JSONUtils.error(Constants.ERR_INTENT_DATA_EMPTY));
            return;
        }

        if (requestType == REQUEST_IS_ENVIRONMENT_READY) {
            Log.i(TAG, "onActivityResult from isEnvironmentReady");

            int returnCode = data.getIntExtra("returnCode", 1);
            if (returnCode == 0) {
                isEnvironmentReady(callbackContext);
            } else {
                callbackContext.error(JSONUtils.error(Constants.ERR_CAN_NOT_LOG_IN));
            }
        } else if (requestType == REQUEST_CREATE_PURCHASE_INTENT) {
            Log.i(TAG, "onActivityResult from createPurchaseIntent");

            PurchaseResultInfo purchaseResultInfo = iapClient.parsePurchaseResultInfoFromIntent(data);
            callbackContext.success(JSONUtils.getJSONFromPurchaseResultInfo(purchaseResultInfo));
        }

        callbacksForRequests.remove(requestCode);
    }

    private synchronized void handleResolution(final Status status, final CallbackContext callbackContext, final Integer requestType) {
        requestNumber++;
        callbacksForRequests.put(requestNumber, Pair.create(callbackContext, requestType));

        Log.d(TAG, "handleResolution with reqType=" + requestType + ", reqNumber=" + requestNumber);

        try {
            Log.d(TAG, "startResolutionForResult");
            status.startResolutionForResult(cordova.getActivity(), requestNumber);
        } catch (IntentSender.SendIntentException exp) {
            Log.d(TAG, "error while handleResolution, startResolutionForResult");
            callbacksForRequests.remove(requestNumber);
            callbackContext.error(exp.getMessage());
        }
    }

    private void handleError(final Exception e, final CallbackContext callbackContext) {
        handleError(e, callbackContext, null, new Integer[]{});
    }

    private void handleError(final Exception e, final CallbackContext callbackContext, final Integer requestType, Integer[] statusCodes) {
        if (e instanceof IapApiException) {
            IapApiException apiException = (IapApiException) e;
            Status status = apiException.getStatus();

            if (requestType != null &&
                    ((statusCodes.length == 0 && status.hasResolution()) || Arrays.asList(statusCodes).contains(status.getStatusCode()))) {
                handleResolution(status, callbackContext, requestType);
                return;
            }

            callbackContext.error(JSONUtils.getJSONFromStatus(status));
            return;
        }

        callbackContext.error(e.getMessage());
    }
}
