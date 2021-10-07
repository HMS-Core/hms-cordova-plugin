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

package com.huawei.hms.cordova.iap.utils;

import android.util.Log;

import com.huawei.hms.iap.entity.ConsumeOwnedPurchaseReq;
import com.huawei.hms.iap.entity.ConsumeOwnedPurchaseResult;
import com.huawei.hms.iap.entity.InAppPurchaseData;
import com.huawei.hms.iap.entity.IsEnvReadyResult;
import com.huawei.hms.iap.entity.IsSandboxActivatedResult;
import com.huawei.hms.iap.entity.OwnedPurchasesReq;
import com.huawei.hms.iap.entity.OwnedPurchasesResult;
import com.huawei.hms.iap.entity.ProductInfo;
import com.huawei.hms.iap.entity.ProductInfoReq;
import com.huawei.hms.iap.entity.ProductInfoResult;
import com.huawei.hms.iap.entity.PurchaseIntentReq;
import com.huawei.hms.iap.entity.PurchaseIntentResult;
import com.huawei.hms.iap.entity.PurchaseResultInfo;
import com.huawei.hms.support.api.client.Status;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public final class JSONUtils {
    private static final String TAG = JSONUtils.class.getSimpleName();

    private JSONUtils() {
    }

    private static <T, R> JSONArray mapList(final List<T> list, final Mapper<T, R> mapper) {
        final JSONArray jsonArray = new JSONArray();
        for (final T item : list) {
            jsonArray.put(mapper.map(item));
        }
        return jsonArray;
    }

    private static List<String> mapJSONArray(final JSONArray jsonArray) {
        final List<String> list = new ArrayList<>();

        for (int i = 0; i < jsonArray.length(); i++) {
            try {
                list.add(jsonArray.getString(i));
            } catch (final JSONException e) {
                Log.e(TAG, e.toString());
            }
        }
        return list;
    }

    public static JSONObject getJSONFromStatus(final Status obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("errorString", obj.getErrorString());
            jsonObject.put("statusCode", obj.getStatusCode());
            jsonObject.put("statusMessage", obj.getStatusMessage());
            jsonObject.put("hasResolution", obj.hasResolution());
            jsonObject.put("isCanceled", obj.isCanceled());
            jsonObject.put("isInterrupted", obj.isInterrupted());
            jsonObject.put("isSuccess", obj.isSuccess());
            jsonObject.put("describeContents", obj.describeContents());
            jsonObject.put("hashCode", obj.hashCode());
            jsonObject.put("toString", obj.toString());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromConsumeOwnedPurchaseReq(final ConsumeOwnedPurchaseReq obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("developerChallenge", obj.getDeveloperChallenge());
            jsonObject.put("purchaseToken", obj.getPurchaseToken());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static ConsumeOwnedPurchaseReq getConsumeOwnedPurchaseReqFromJSON(final JSONObject jsonObject) {
        final ConsumeOwnedPurchaseReq consumeOwnedPurchaseReq = new ConsumeOwnedPurchaseReq();
        try {
            consumeOwnedPurchaseReq.setDeveloperChallenge(jsonObject.getString("developerChallenge"));
            consumeOwnedPurchaseReq.setPurchaseToken(getInAppPurchaseDataFromJSON(jsonObject).getPurchaseToken());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return consumeOwnedPurchaseReq;
    }

    public static JSONObject getJSONFromConsumeOwnedPurchaseResult(final ConsumeOwnedPurchaseResult obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("consumePurchaseData", obj.getConsumePurchaseData());
            jsonObject.put("dataSignature", obj.getDataSignature());
            jsonObject.put("errMsg", obj.getErrMsg());
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromInAppPurchaseData(final InAppPurchaseData obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("appInfo", obj.getAppInfo());
            jsonObject.put("applicationId", obj.getApplicationId());
            jsonObject.put("cancelledSubKeepDays", obj.getCancelledSubKeepDays());
            jsonObject.put("cancelReason", obj.getCancelReason());
            jsonObject.put("cancelTime", obj.getCancelTime());
            jsonObject.put("country", obj.getCountry());
            jsonObject.put("currency", obj.getCurrency());
            jsonObject.put("daysLasted", obj.getDaysLasted());
            jsonObject.put("developerPayload", obj.getDeveloperPayload());
            jsonObject.put("expirationDate", obj.getExpirationDate());
            jsonObject.put("expirationIntent", obj.getExpirationIntent());
            jsonObject.put("introductoryFlag", obj.getIntroductoryFlag());
            jsonObject.put("lastOrderId", obj.getLastOrderId());
            jsonObject.put("notifyClosed", obj.getNotifyClosed());
            jsonObject.put("numOfDiscount", obj.getNumOfDiscount());
            jsonObject.put("numOfPeriods", obj.getNumOfPeriods());
            jsonObject.put("orderID", obj.getOrderID());
            jsonObject.put("oriPurchaseTime", obj.getOriPurchaseTime());
            jsonObject.put("packageName", obj.getPackageName());
            jsonObject.put("price", obj.getPrice());
            jsonObject.put("priceConsentStatus", obj.getPriceConsentStatus());
            jsonObject.put("productGroup", obj.getProductGroup());
            jsonObject.put("productId", obj.getProductId());
            jsonObject.put("productName", obj.getProductName());
            jsonObject.put("purchaseState", obj.getPurchaseState());
            jsonObject.put("purchaseTime", obj.getPurchaseTime());
            jsonObject.put("purchaseToken", obj.getPurchaseToken());
            jsonObject.put("purchaseType", obj.getPurchaseType());
            jsonObject.put("quantity", obj.getQuantity());
            jsonObject.put("renewPrice", obj.getRenewPrice());
            jsonObject.put("renewStatus", obj.getRenewStatus());
            jsonObject.put("retryFlag", obj.getRetryFlag());
            jsonObject.put("subscriptionId", obj.getSubscriptionId());
            jsonObject.put("trialFlag", obj.getTrialFlag());
            jsonObject.put("isAutoRenewing", obj.isAutoRenewing());
            jsonObject.put("isSubValid", obj.isSubValid());
            jsonObject.put("cancelledSubKeepDays", obj.getCancelledSubKeepDays());
            jsonObject.put("kind", obj.getKind());
            jsonObject.put("developerChallenge", obj.getDeveloperChallenge());
            jsonObject.put("consumptionState", obj.getConsumptionState());
            jsonObject.put("payOrderId", obj.getPayOrderId());
            jsonObject.put("payType", obj.getPayType());
            jsonObject.put("deferFlag", obj.getDeferFlag());
            jsonObject.put("oriSubscriptionId", obj.getOriSubscriptionId());
            jsonObject.put("cancelWay", obj.getCancelWay());
            jsonObject.put("cancellationTime", obj.getCancellationTime());
            jsonObject.put("resumeTime", obj.getResumeTime());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static InAppPurchaseData getInAppPurchaseDataFromJSON(final JSONObject jsonObject) throws JSONException {
        return new InAppPurchaseData(jsonObject.getString("inAppPurchaseData"));
    }

    public static JSONObject getJSONFromIsEnvReadyResult(final IsEnvReadyResult obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromIsSandboxActivatedResult(final IsSandboxActivatedResult obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("errMsg", obj.getErrMsg());
            jsonObject.put("isSandboxApk", obj.getIsSandboxApk());
            jsonObject.put("isSandboxUser", obj.getIsSandboxUser());
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("versionFrMarket", obj.getVersionFrMarket());
            jsonObject.put("versionInApk", obj.getVersionInApk());
            jsonObject.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromOwnedPurchasesReq(final OwnedPurchasesReq obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("continuationToken", obj.getContinuationToken());
            jsonObject.put("priceType", obj.getPriceType());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static OwnedPurchasesReq getOwnedPurchasesReqFromJSON(final JSONObject jsonObject) {
        final OwnedPurchasesReq ownedPurchasesReq = new OwnedPurchasesReq();
        try {
            ownedPurchasesReq.setPriceType(jsonObject.getInt("priceType"));
            ownedPurchasesReq.setContinuationToken(jsonObject.optString("continuationToken"));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return ownedPurchasesReq;
    }

    public static JSONObject getJSONFromOwnedPurchasesResult(final OwnedPurchasesResult obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("continuationToken", obj.getContinuationToken());
            jsonObject.put("errMsg", obj.getErrMsg());
            jsonObject.put("itemList", new JSONArray(obj.getItemList()));
            jsonObject.put("inAppPurchaseDataList", new JSONArray(obj.getInAppPurchaseDataList()));
            jsonObject.put("inAppSignature", new JSONArray(obj.getInAppSignature()));
            jsonObject.put("placedInappPurchaseDataList", new JSONArray(obj.getPlacedInappPurchaseDataList()));
            jsonObject.put("placedInappSignatureList", new JSONArray(obj.getPlacedInappSignatureList()));
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromProductInfo(final ProductInfo obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("productId", obj.getProductId());
            jsonObject.put("priceType", obj.getPriceType());
            jsonObject.put("price", obj.getPrice());
            jsonObject.put("microsPrice", obj.getMicrosPrice());
            jsonObject.put("originalLocalPrice", obj.getOriginalLocalPrice());
            jsonObject.put("originalMicroPrice", obj.getOriginalMicroPrice());
            jsonObject.put("currency", obj.getCurrency());
            jsonObject.put("productName", obj.getProductName());
            jsonObject.put("productDesc", obj.getProductDesc());
            jsonObject.put("status", obj.getStatus());
            jsonObject.put("subPeriod", obj.getSubPeriod());
            jsonObject.put("subSpecialPrice", obj.getSubSpecialPrice());
            jsonObject.put("subSpecialPriceMicros", obj.getSubSpecialPriceMicros());
            jsonObject.put("subSpecialPeriod", obj.getSubSpecialPeriod());
            jsonObject.put("subSpecialPeriodCycles", obj.getSubSpecialPeriodCycles());
            jsonObject.put("subFreeTrialPeriod", obj.getSubFreeTrialPeriod());
            jsonObject.put("subGroupId", obj.getSubGroupId());
            jsonObject.put("subGroupTitle", obj.getSubGroupTitle());
            jsonObject.put("subProductLevel", obj.getSubProductLevel());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromProductInfoReq(final ProductInfoReq obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("priceType", obj.getPriceType());
            jsonObject.put("productIds", new JSONArray(obj.getProductIds()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static ProductInfoReq getProductInfoReqFromJSON(final JSONObject jsonObject) {
        final ProductInfoReq productInfoReq = new ProductInfoReq();
        try {
            productInfoReq.setPriceType(jsonObject.getInt("priceType"));
            productInfoReq.setProductIds(mapJSONArray(jsonObject.getJSONArray("productList")));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return productInfoReq;
    }

    public static JSONObject getJSONFromProductInfoResult(final ProductInfoResult obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("errMsg", obj.getErrMsg());
            jsonObject.put("productInfoList", mapList(obj.getProductInfoList(), JSONUtils::getJSONFromProductInfo));
            jsonObject.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromPurchaseIntentReq(final PurchaseIntentReq obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("priceType", obj.getPriceType());
            jsonObject.put("productId", obj.getProductId());
            jsonObject.put("developerPayload", obj.getDeveloperPayload());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static PurchaseIntentReq getPurchaseIntentReqFromJSON(final JSONObject jsonObject) {
        final PurchaseIntentReq purchaseIntentReq = new PurchaseIntentReq();
        try {
            purchaseIntentReq.setPriceType(jsonObject.getInt("priceType"));
            purchaseIntentReq.setProductId(jsonObject.getString("productId"));
            purchaseIntentReq.setDeveloperPayload(jsonObject.getString("developerPayload"));
            purchaseIntentReq.setReservedInfor(jsonObject.getString("reservedInfor"));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return purchaseIntentReq;
    }

    public static JSONObject getJSONFromPurchaseIntentResult(final PurchaseIntentResult obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("errMsg", obj.getErrMsg());
            jsonObject.put("paymentData", obj.getPaymentData());
            jsonObject.put("paymentSignature", obj.getPaymentSignature());
            jsonObject.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromPurchaseResultInfo(final PurchaseResultInfo obj) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("returnCode", obj.getReturnCode());
            jsonObject.put("errMsg", obj.getErrMsg());
            jsonObject.put("inAppPurchaseData", obj.getInAppPurchaseData());
            jsonObject.put("inAppDataSignature", obj.getInAppDataSignature());
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }

    public static JSONObject error(final int errorCode) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("errorCode", errorCode);
        } catch (final JSONException e) {
            Log.e(TAG, e.toString());
        }
        return jsonObject;
    }
}
