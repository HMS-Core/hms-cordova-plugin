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

package com.huawei.hms.cordova.iap;

import android.app.Activity;
import android.content.Intent;
import android.content.IntentSender;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.iap.basef.CordovaBaseModule;
import com.huawei.hms.cordova.iap.basef.CordovaMethod;
import com.huawei.hms.cordova.iap.basef.HMSLog;
import com.huawei.hms.cordova.iap.basef.handler.CorPack;
import com.huawei.hms.cordova.iap.basef.handler.Promise;
import com.huawei.hms.cordova.iap.utils.Constants;
import com.huawei.hms.cordova.iap.utils.JSONUtils;
import com.huawei.hms.cordova.iap.utils.ObjectUtils;
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

public final class InAppPurchases extends CordovaBaseModule implements OnActivityResultCallback {
    private static final String TAG = InAppPurchases.class.getSimpleName();

    private final Map<Integer, Integer> typesForRequests = new HashMap<>();

    private int requestNumber;
    private IapClient iapClient;
    private CordovaPlugin plugin;
    private Promise promise;

    public InAppPurchases (HMSInAppPurchases hmsiap) {
        plugin = hmsiap;
        iapClient = Iap.getIapClient(hmsiap.cordova.getActivity());
        hmsiap.setOnActivityResultCallback(this);
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        Log.d(TAG, "new onActivityResult, requestCode=" + requestCode + ", resultCode=" + resultCode);

        if (this.promise != null && typesForRequests.containsKey(requestCode)) {
            if (data == null) {
                Log.e("onActivityResult", "data is null");
                this.promise.error(JSONUtils.error(Constants.ERR_INTENT_DATA_EMPTY));
            } else {
                final int requestType = ObjectUtils.safeUnboxInteger(typesForRequests.get(requestCode), -1);

                if (requestType == Constants.REQUEST_IS_ENVIRONMENT_READY) {
                    Log.i(TAG, "onActivityResult from isEnvReady");
                    final int returnCode = data.getIntExtra("returnCode", 1);

                    if (returnCode != 0) {
                        promise.error(resultCode);
                    } else {
                        promise.error(JSONUtils.error(Constants.ERR_CAN_NOT_LOG_IN));
                    }
                }
                if (requestType == Constants.REQUEST_CREATE_PURCHASE_INTENT) {
                    Log.i(TAG, "onActivityResult from createPurchaseIntent");
                    final PurchaseResultInfo purchaseResultInfo = iapClient.parsePurchaseResultInfoFromIntent(data);
                    promise.success(JSONUtils.getJSONFromPurchaseResultInfo(purchaseResultInfo));
                }
                typesForRequests.remove(requestCode);
            }
        }
    }

    @HMSLog
    @CordovaMethod
    public void isSandboxActivated(final CorPack corPack, JSONArray args, final Promise promise) {
        final Task<IsSandboxActivatedResult> task = iapClient.isSandboxActivated(new IsSandboxActivatedReq());
        task.addOnSuccessListener(result -> {
            Log.i(TAG, "isSandboxActivated success");
            promise.success(JSONUtils.getJSONFromIsSandboxActivatedResult(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "isSandboxActivated fail");
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    public void isEnvReady(final CorPack corPack, JSONArray args, final Promise promise) {
        this.promise = promise;
        plugin.cordova.setActivityResultCallback(plugin);
        final Task<IsEnvReadyResult> task = iapClient.isEnvReady();
        task.addOnSuccessListener(result -> {
            Log.i(TAG, "isEnvReady success");
            promise.success(JSONUtils.getJSONFromIsEnvReadyResult(result));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "isEnvReady fail");
            handleError(e, promise, Constants.REQUEST_IS_ENVIRONMENT_READY,
                new Integer[] {OrderStatusCode.ORDER_HWID_NOT_LOGIN});
        });
    }

    @HMSLog
    @CordovaMethod
    public void obtainOwnedPurchases(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject ownedPurchasesRequest = args.getJSONObject(0);
        final OwnedPurchasesReq req = JSONUtils.getOwnedPurchasesReqFromJSON(ownedPurchasesRequest);
        final Task<OwnedPurchasesResult> task = iapClient.obtainOwnedPurchases(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "obtainOwnedPurchases success");
            promise.success(JSONUtils.getJSONFromOwnedPurchasesResult(result));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "obtainOwnedPurchases fail");
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    public void obtainProductInfo(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject productInfoRequest = args.getJSONObject(0);
        final ProductInfoReq req = JSONUtils.getProductInfoReqFromJSON(productInfoRequest);
        final Task<ProductInfoResult> task = iapClient.obtainProductInfo(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "obtainProductInfo success");
            promise.success(JSONUtils.getJSONFromProductInfoResult(result));
        }).addOnFailureListener(e -> {
            Log.i(TAG, "obtainProductInfo fail");
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    public void createPurchaseIntent(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        plugin.cordova.setActivityResultCallback(plugin);
        JSONObject purchaseIntentRequest = args.getJSONObject(0);
        final PurchaseIntentReq req = JSONUtils.getPurchaseIntentReqFromJSON(purchaseIntentRequest);
        final Task<PurchaseIntentResult> task = iapClient.createPurchaseIntent(req);
        task.addOnSuccessListener(result -> {
            Log.i(TAG, "createPurchaseIntent success");

            Status status = result.getStatus();
            if (status.hasResolution()) {
                handleResolution(status, promise, Constants.REQUEST_CREATE_PURCHASE_INTENT);
                return;
            }
        }).addOnFailureListener(e -> {
            Log.e(TAG, "createPurchaseIntent fail");
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    public void consumeOwnedPurchase(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject consumeOwnedPurchaseRequest = args.getJSONObject(0);
        final ConsumeOwnedPurchaseReq req = JSONUtils.getConsumeOwnedPurchaseReqFromJSON(consumeOwnedPurchaseRequest);
        final Task<ConsumeOwnedPurchaseResult> task = iapClient.consumeOwnedPurchase(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "consumeOwnedPurchase success");
            promise.success(JSONUtils.getJSONFromConsumeOwnedPurchaseResult(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "consumeOwnedPurchase fail");
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    public void obtainOwnedPurchaseRecord(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject ownedPurchasesRequest = args.getJSONObject(0);
        final OwnedPurchasesReq req = JSONUtils.getOwnedPurchasesReqFromJSON(ownedPurchasesRequest);
        final Task<OwnedPurchasesResult> task = iapClient.obtainOwnedPurchaseRecord(req);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "obtainOwnedPurchaseRecord success");
            promise.success(JSONUtils.getJSONFromOwnedPurchasesResult(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "obtainOwnedPurchaseRecord fail");
            handleError(e, promise);
        });
    }

    @HMSLog
    @CordovaMethod
    public void startIapActivity(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        final StartIapActivityReq req = new StartIapActivityReq();

        String productId = null;

        try {
            productId = args.get(0) == null ? null : args.getJSONObject(0).getString("productId");
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
        }

        if(productId == null) {
            req.setType(StartIapActivityReq.TYPE_SUBSCRIBE_MANAGER_ACTIVITY);
        } else {
            req.setSubscribeProductId(productId);
            req.setType(StartIapActivityReq.TYPE_SUBSCRIBE_EDIT_ACTIVITY);
        }

        final Task<StartIapActivityResult> task = iapClient.startIapActivity(req);

        task.addOnSuccessListener(result -> {
            Log.e(TAG, "startIapActivity success");
            result.startActivity(plugin.cordova.getActivity());
            promise.success();
        }).addOnFailureListener(e -> {
            Log.e(TAG, "startIapActivity fail");
            handleError(e, promise);
        });
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
        corPack.enableLogger();
        promise.success();
    }

    private synchronized void handleResolution(final Status status, final Promise promise, final int requestType) {
        typesForRequests.put(++requestNumber, requestType);
        Log.d(TAG, "handleResolution with reqType=" + requestType + ", reqNumber=" + requestNumber);

        try {
            Log.d(TAG, "startResolutionForResult");
            status.startResolutionForResult(plugin.cordova.getActivity(), requestNumber);
        } catch (final IntentSender.SendIntentException e) {
            Log.d(TAG, "error while handleResolution, startResolutionForResult");
            typesForRequests.remove(requestNumber);
            promise.error(e.getMessage());
        }
    }

    private void handleError(final Exception e, final Promise promise) {
        handleError(e, promise, null, new Integer[] {});
    }

    private void handleError(final Exception e, final Promise promise, final Integer requestType, final Integer[] statusCodes) {
        if (e instanceof IapApiException) {
            final IapApiException apiException = (IapApiException) e;
            final Status status = apiException.getStatus();

            if (requestType != null && ((statusCodes.length == 0 && status.hasResolution()) || Arrays.asList(
                statusCodes).contains(status.getStatusCode()))) {
                handleResolution(status, promise, requestType);
            } else {
                promise.error(JSONUtils.getJSONFromStatus(status));
            }
        } else {
            promise.error(e.getMessage());
        }
    }
}
