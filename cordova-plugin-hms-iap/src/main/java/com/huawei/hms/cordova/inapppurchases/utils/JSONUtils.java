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

package com.huawei.hms.cordova.inapppurchases.utils;

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

public class JSONUtils {
    private static final String TAG = JSONUtils.class.getSimpleName();

    private static <T> String convertString(T j) {
        return j.toString();
    }

    public interface Mapper<T, R> {
        /**
         * Used to map classes.
         *
         * @param in T.
         * @return R
         */
        R map(T in);
    }

    private static <T, R> JSONArray mapList(List<T> list, Mapper<T, R> mapper) {
        JSONArray array = new JSONArray();
        for (T item : list) array.put(mapper.map(item));
        return array;
    }

    private static <T, R> List<T> mapJSONArray(JSONArray jsonArray, Mapper<R, T> mapper) {
        List<T> list = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            try {
                list.add(mapper.map((R) jsonArray.get(i)));
            } catch (JSONException e) {
                Log.e(TAG, e.getMessage());
            }
        }
        return list;
    }

    public static JSONObject getJSONFromStatus(Status obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("errorString", obj.getErrorString());
            j.put("statusCode", obj.getStatusCode());
            j.put("statusMessage", obj.getStatusMessage());
            j.put("hasResolution", obj.hasResolution());
            j.put("isCanceled", obj.isCanceled());
            j.put("isInterrupted", obj.isInterrupted());
            j.put("isSuccess", obj.isSuccess());
            j.put("hasResolution", obj.hasResolution());
            j.put("describeContents", obj.describeContents());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromConsumeOwnedPurchaseReq(ConsumeOwnedPurchaseReq obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("developerChallenge", obj.getDeveloperChallenge());
            j.put("purchaseToken", obj.getPurchaseToken());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static ConsumeOwnedPurchaseReq getConsumeOwnedPurchaseReqFromJSON(JSONObject j) {
        ConsumeOwnedPurchaseReq obj = new ConsumeOwnedPurchaseReq();
        try {
            obj.setDeveloperChallenge(j.getString("developerChallenge"));
            obj.setPurchaseToken(getInAppPurchaseDataFromJSON(j).getPurchaseToken());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return obj;
    }

    public static JSONObject getJSONFromConsumeOwnedPurchaseResult(ConsumeOwnedPurchaseResult obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("consumePurchaseData", obj.getConsumePurchaseData());
            j.put("dataSignature", obj.getDataSignature());
            j.put("errMsg", obj.getErrMsg());
            j.put("returnCode", obj.getReturnCode());
            j.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromInAppPurchaseData(InAppPurchaseData obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("appInfo", obj.getAppInfo());
            j.put("applicationId", obj.getApplicationId());
            j.put("cancelledSubKeepDays", obj.getCancelledSubKeepDays());
            j.put("cancelReason", obj.getCancelReason());
            j.put("cancelTime", obj.getCancelTime());
            j.put("country", obj.getCountry());
            j.put("currency", obj.getCurrency());
            j.put("daysLasted", obj.getDaysLasted());
            j.put("developerPayload", obj.getDeveloperPayload());
            j.put("expirationDate", obj.getExpirationDate());
            j.put("expirationIntent", obj.getExpirationIntent());
            j.put("introductoryFlag", obj.getIntroductoryFlag());
            j.put("lastOrderId", obj.getLastOrderId());
            j.put("notifyClosed", obj.getNotifyClosed());
            j.put("numOfDiscount", obj.getNumOfDiscount());
            j.put("numOfPeriods", obj.getNumOfPeriods());
            j.put("orderID", obj.getOrderID());
            j.put("oriPurchaseTime", obj.getOriPurchaseTime());
            j.put("packageName", obj.getPackageName());
            j.put("price", obj.getPrice());
            j.put("priceConsentStatus", obj.getPriceConsentStatus());
            j.put("productGroup", obj.getProductGroup());
            j.put("productId", obj.getProductId());
            j.put("productName", obj.getProductName());
            j.put("purchaseState", obj.getPurchaseState());
            j.put("purchaseTime", obj.getPurchaseTime());
            j.put("purchaseToken", obj.getPurchaseToken());
            j.put("purchaseType", obj.getPurchaseType());
            j.put("quantity", obj.getQuantity());
            j.put("renewPrice", obj.getRenewPrice());
            j.put("renewStatus", obj.getRenewStatus());
            j.put("retryFlag", obj.getRetryFlag());
            j.put("subscriptionId", obj.getSubscriptionId());
            j.put("trialFlag", obj.getTrialFlag());
            j.put("isAutoRenewing", obj.isAutoRenewing());
            j.put("isSubValid", obj.isSubValid());
            j.put("cancelledSubKeepDays", obj.getCancelledSubKeepDays());
            j.put("kind", obj.getKind());
            j.put("developerChallenge", obj.getDeveloperChallenge());
            j.put("consumptionState", obj.getConsumptionState());
            j.put("payOrderId", obj.getPayOrderId());
            j.put("payType", obj.getPayType());
            j.put("deferFlag", obj.getDeferFlag());
            j.put("oriSubscriptionId", obj.getOriSubscriptionId());
            j.put("cancelWay", obj.getCancelWay());
            j.put("cancellationTime", obj.getCancellationTime());
            j.put("resumeTime", obj.getResumeTime());

        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static InAppPurchaseData getInAppPurchaseDataFromJSON(JSONObject j) throws JSONException {
        return new InAppPurchaseData(j.getString("inAppPurchaseData"));
    }

    public static JSONObject getJSONFromIsEnvReadyResult(IsEnvReadyResult obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("returnCode", obj.getReturnCode());
            j.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromIsSandboxActivatedResult(IsSandboxActivatedResult obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("errMsg", obj.getErrMsg());
            j.put("isSandboxApk", obj.getIsSandboxApk());
            j.put("isSandboxUser", obj.getIsSandboxUser());
            j.put("returnCode", obj.getReturnCode());
            j.put("versionFrMarket", obj.getVersionFrMarket());
            j.put("versionInApk", obj.getVersionInApk());
            j.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromOwnedPurchasesReq(OwnedPurchasesReq obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("continuationToken", obj.getContinuationToken());
            j.put("priceType", obj.getPriceType());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static OwnedPurchasesReq getOwnedPurchasesReqFromJSON(JSONObject j) {
        OwnedPurchasesReq obj = new OwnedPurchasesReq();
        try {
            obj.setPriceType(j.getInt("priceType"));
            if (j.has("continuationToken")) {
                obj.setContinuationToken(j.getString("continuationToken"));
            }
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return obj;
    }

    public static JSONObject getJSONFromOwnedPurchasesResult(OwnedPurchasesResult obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("continuationToken", obj.getContinuationToken());
            j.put("errMsg", obj.getErrMsg());
            j.put("itemList", new JSONArray(obj.getItemList()));
            j.put("inAppPurchaseDataList", new JSONArray(obj.getInAppPurchaseDataList()));
            j.put("inAppSignature", new JSONArray(obj.getInAppSignature()));
            j.put("placedInappPurchaseDataList", new JSONArray(obj.getPlacedInappPurchaseDataList()));
            j.put("placedInappSignatureList", new JSONArray(obj.getPlacedInappSignatureList()));
            j.put("returnCode", obj.getReturnCode());
            j.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromProductInfo(ProductInfo obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("productId", obj.getProductId());
            j.put("priceType", obj.getPriceType());
            j.put("price", obj.getPrice());
            j.put("microsPrice", obj.getMicrosPrice());
            j.put("originalLocalPrice", obj.getOriginalLocalPrice());
            j.put("originalMicroPrice", obj.getOriginalMicroPrice());
            j.put("currency", obj.getCurrency());
            j.put("productName", obj.getProductName());
            j.put("productDesc", obj.getProductDesc());
            j.put("subPeriod", obj.getSubPeriod());
            j.put("subSpecialPrice", obj.getSubSpecialPrice());
            j.put("subSpecialPriceMicros", obj.getSubSpecialPriceMicros());
            j.put("subSpecialPeriod", obj.getSubSpecialPeriod());
            j.put("subSpecialPeriodCycles", obj.getSubSpecialPeriodCycles());
            j.put("subFreeTrialPeriod", obj.getSubFreeTrialPeriod());
            j.put("subGroupId", obj.getSubGroupId());
            j.put("subGroupTitle", obj.getSubGroupTitle());
            j.put("subProductLevel", obj.getSubProductLevel());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromProductInfoReq(ProductInfoReq obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("priceType", obj.getPriceType());
            j.put("productIds", new JSONArray(obj.getProductIds()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static ProductInfoReq getProductInfoReqFromJSON(JSONObject j) {
        ProductInfoReq obj = new ProductInfoReq();
        try {
            obj.setPriceType(j.getInt("priceType"));
            obj.setProductIds(mapJSONArray(j.getJSONArray("productList"), JSONUtils::convertString));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return obj;
    }

    public static JSONObject getJSONFromProductInfoResult(ProductInfoResult obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("returnCode", obj.getReturnCode());
            j.put("errMsg", obj.getErrMsg());
            j.put("productInfoList", mapList(obj.getProductInfoList(), JSONUtils::getJSONFromProductInfo));
            j.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromPurchaseIntentReq(PurchaseIntentReq obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("priceType", obj.getPriceType());
            j.put("productId", obj.getProductId());
            j.put("developerPayload", obj.getDeveloperPayload());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static PurchaseIntentReq getPurchaseIntentReqFromJSON(JSONObject j) {
        PurchaseIntentReq obj = new PurchaseIntentReq();
        try {
            obj.setPriceType(j.getInt("priceType"));
            obj.setProductId(j.getString("productId"));
            obj.setDeveloperPayload(j.getString("developerPayload"));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return obj;
    }

    public static JSONObject getJSONFromPurchaseIntentResult(PurchaseIntentResult obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("returnCode", obj.getReturnCode());
            j.put("errMsg", obj.getErrMsg());
            j.put("paymentData", obj.getPaymentData());
            j.put("paymentSignature", obj.getPaymentSignature());
            j.put("status", getJSONFromStatus(obj.getStatus()));
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject getJSONFromPurchaseResultInfo(PurchaseResultInfo obj) {
        JSONObject j = new JSONObject();
        try {
            j.put("returnCode", obj.getReturnCode());
            j.put("errMsg", obj.getErrMsg());
            j.put("inAppPurchaseData", obj.getInAppPurchaseData());
            j.put("inAppDataSignature", obj.getInAppDataSignature());
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }

    public static JSONObject error(int errorCode) {
        JSONObject j = new JSONObject();
        try {
            j.put("errorCode", errorCode);
        } catch (JSONException e) {
            Log.e(TAG, e.getMessage());
        }
        return j;
    }
}
