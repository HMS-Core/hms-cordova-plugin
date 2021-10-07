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

import com.huawei.hms.iap.IapClient;
import com.huawei.hms.iap.entity.InAppPurchaseData;
import com.huawei.hms.iap.entity.OrderStatusCode;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public final class Constants {
    public static final int ERR_CAN_NOT_LOG_IN = 722;
    public static final int ERR_INTENT_DATA_EMPTY = 723;
    public static final int REQUEST_IS_ENVIRONMENT_READY = 111;
    public static final int REQUEST_CREATE_PURCHASE_INTENT = 222;

    private static final Map<String, Integer> CONSTANTS_MAP = new HashMap<>();

    static {
        CONSTANTS_MAP.put("ORDER_STATE_IAP_NOT_ACTIVATED", OrderStatusCode.ORDER_STATE_IAP_NOT_ACTIVATED);
        CONSTANTS_MAP.put("ORDER_STATE_PRODUCT_INVALID", OrderStatusCode.ORDER_STATE_PRODUCT_INVALID);
        CONSTANTS_MAP.put("ORDER_STATE_CALLS_FREQUENT", OrderStatusCode.ORDER_STATE_CALLS_FREQUENT);
        CONSTANTS_MAP.put("ORDER_STATE_PMS_TYPE_NOT_MATCH", OrderStatusCode.ORDER_STATE_PMS_TYPE_NOT_MATCH);
        CONSTANTS_MAP.put("ORDER_STATE_PRODUCT_COUNTRY_NOT_SUPPORTED",
            OrderStatusCode.ORDER_STATE_PRODUCT_COUNTRY_NOT_SUPPORTED);
        CONSTANTS_MAP.put("ORDER_ACCOUNT_AREA_NOT_SUPPORTED", OrderStatusCode.ORDER_ACCOUNT_AREA_NOT_SUPPORTED);
        CONSTANTS_MAP.put("ORDER_HIGH_RISK_OPERATIONS", OrderStatusCode.ORDER_HIGH_RISK_OPERATIONS);
        CONSTANTS_MAP.put("ORDER_HWID_NOT_LOGIN", OrderStatusCode.ORDER_HWID_NOT_LOGIN);
        CONSTANTS_MAP.put("ORDER_NOT_ACCEPT_AGREEMENT", OrderStatusCode.ORDER_NOT_ACCEPT_AGREEMENT);
        CONSTANTS_MAP.put("ORDER_PRODUCT_CONSUMED", OrderStatusCode.ORDER_PRODUCT_CONSUMED);
        CONSTANTS_MAP.put("ORDER_PRODUCT_NOT_OWNED", OrderStatusCode.ORDER_PRODUCT_NOT_OWNED);
        CONSTANTS_MAP.put("ORDER_PRODUCT_OWNED", OrderStatusCode.ORDER_PRODUCT_OWNED);
        CONSTANTS_MAP.put("ORDER_STATE_CANCEL", OrderStatusCode.ORDER_STATE_CANCEL);
        CONSTANTS_MAP.put("ORDER_STATE_FAILED", OrderStatusCode.ORDER_STATE_FAILED);
        CONSTANTS_MAP.put("ORDER_STATE_NET_ERROR", OrderStatusCode.ORDER_STATE_NET_ERROR);
        CONSTANTS_MAP.put("ORDER_STATE_PARAM_ERROR", OrderStatusCode.ORDER_STATE_PARAM_ERROR);
        CONSTANTS_MAP.put("ORDER_STATE_SUCCESS", OrderStatusCode.ORDER_STATE_SUCCESS);
        CONSTANTS_MAP.put("ORDER_VR_UNINSTALL_ERROR", OrderStatusCode.ORDER_VR_UNINSTALL_ERROR);

        // InAppPurchaseData
        CONSTANTS_MAP.put("PURCHASE_DATA_NOT_PRESENT", InAppPurchaseData.NOT_PRESENT);

        // PurchaseState
        CONSTANTS_MAP.put("PURCHASE_STATE_CANCELED", InAppPurchaseData.PurchaseState.CANCELED);
        CONSTANTS_MAP.put("PURCHASE_STATE_INITIALIZED", InAppPurchaseData.PurchaseState.INITIALIZED);
        CONSTANTS_MAP.put("PURCHASE_STATE_PURCHASED", InAppPurchaseData.PurchaseState.PURCHASED);
        CONSTANTS_MAP.put("PURCHASE_STATE_REFUNDED", InAppPurchaseData.PurchaseState.REFUNDED);

        // PriceType
        CONSTANTS_MAP.put("PRICE_TYPE_IN_APP_CONSUMABLE", IapClient.PriceType.IN_APP_CONSUMABLE);
        CONSTANTS_MAP.put("PRICE_TYPE_IN_APP_NONCONSUMABLE", IapClient.PriceType.IN_APP_NONCONSUMABLE);
        CONSTANTS_MAP.put("PRICE_TYPE_IN_APP_SUBSCRIPTION", IapClient.PriceType.IN_APP_SUBSCRIPTION);

        // Errors
        CONSTANTS_MAP.put("ERR_CAN_NOT_LOG_IN", ERR_CAN_NOT_LOG_IN);
        CONSTANTS_MAP.put("ERR_INTENT_DATA_EMPTY", ERR_INTENT_DATA_EMPTY);
    }

    private Constants() {
    }

    public static String getConstantsAsJsonString() throws JSONException {
        final JSONObject jsonObject = new JSONObject();
        for (final Map.Entry<String, Integer> pairs : CONSTANTS_MAP.entrySet()) {
            jsonObject.put(pairs.getKey(), pairs.getValue());
        }
        return jsonObject.toString();
    }
}
