
# CORDOVA PLUGIN HMS IAP

## Contents

1. Introduction

2. Installation Guide

3. Cordova Plugin API Method Definition

4. Configure Description

5. Licensing and Terms

## 1. Introduction

The Cordova Plugin code encapsulates the Huawei in-app purchases client interface. It provides many APIs for your reference or use.

The Cordova Plugin code package is described as follows:  

**src/main/com/huawei/hms/cordova/inapppurchases**: core layer, bridging InAppPurchasesSDK bottom-layer code;

**www/HMSInAppPurchases.js**: external interface definition layer, which is used to define interface classes or reference files.

## 2. Installation Guide

1. Download the Cordova In-App Purchases Plugin.

2. Add Platform To Project.

   ***`cordova platform add android`***

3. Run the following command in the root directory of the Cordova project:

   ***`cordova plugin add PATH_TO_CORDOVA_INAPP_PURCHASES_PLUGIN`***

4. Check whether the Cordova In-App Purchases Plugin is successfully added to Plugin folder in the root directory of the Cordova project.

5. Add agconnect-services.json and jks file to root directory. You can see how to create jks file in this [link](https://developer.huawei.com/consumer/en/doc/development/HMS-Guides/iap-configuring-appGallery-connect).

6. Add build.json file to your project's root.

7. Enable In-App Purchases API on AppGallery Connect.

8. Add some products on AppGallery Connect.

9. Then run the Cordova app.

    ***`cordova run android`***

## 3. Cordova Plugin API method definition

|Method(using Promise) |Method(using Callback) |Definition |
|----------------------------|------------------------------|--------------------------------------------------------------|
[`isSandboxReady`](#issandboxready-or-cbissandboxreadysuccess-error)             |[`cbIsSandboxReady`](#issandboxready-or-cbissandboxreadysuccess-error)            |This API is called to check whether the sign-in HUAWEI ID and app APK version meets the requirements of the sandbox testing(sandbox testing is not available for individual developers outside of China). |
[`isEnvironmentReady`](#isenvironmentready-or-cbisenvironmentreadysuccess-error) |[`cbIsEnvironmentReady`](#isenvironmentready-or-cbisenvironmentreadysuccess-error)        |This API is called to check whether the currently signed-in HUAWEI ID is located in a country or region where HUAWEI IAP is available. |
[`obtainOwnedPurchases`](#obtainownedpurchasesownedpurchasesrequest-or-cbobtainownedpurchasesownedpurchasesrequest-success-error)       |[`cbObtainOwnedPurchases`](#obtainownedpurchasesownedpurchasesrequest-or-cbobtainownedpurchasesownedpurchasesrequest-success-error)      |This API is called to query information about all purchased in-app products, including consumables, non-consumables, and auto-renewable subscriptions. |
[`obtainProductInfo`](#obtainproductinfoproductinforequest-or-cbobtainproductinfoproductinforequestsuccess-error)          |[`cbObtainProductInfo`](#obtainproductinfoproductinforequest-or-cbobtainproductinfoproductinforequestsuccess-error)          |This API is called to obtain in-app product details configured in AppGallery Connect. |
[`createPurchaseIntent`](#createpurchaseintentpurchaseintentrequest-or-cbcreatepurchaseintentpurchaseintentrequestsuccess-error)       |[`cbCreatePurchaseIntent`](#createpurchaseintentpurchaseintentrequest-or-cbcreatepurchaseintentpurchaseintentrequestsuccess-error)      |This API is called to create orders for PMS products, including consumables, non-consumables, and subscriptions. |
[`consumeOwnedPurchase`](#consumeownedpurchaseconsumeownedpurchaserequest-or-cbconsumeownedpurchaseconsumeownedpurchaserequestsuccess-error)       |[`cbConsumeOwnedPurchase`](#consumeownedpurchaseconsumeownedpurchaserequest-or-cbconsumeownedpurchaseconsumeownedpurchaserequestsuccess-error)      |This API is called to consume a consumable after the consumable is delivered to a user who has completed payment. |
[`obtainOwnedPurchaseRecord`](#obtainownedpurchaserecordownedpurchasesrequest-or-cbobtainownedpurchaserecordownedpurchasesrequest-success-error)  |[`cbObtainOwnedPurchaseRecord`](#obtainownedpurchaserecordownedpurchasesrequest-or-cbobtainownedpurchaserecordownedpurchasesrequest-success-error) |This API is called to obtain the historical consumption information about a consumable or all subscription receipts of a subscription. |

## Public Functions

### **`isSandboxReady()`** or **`cbIsSandboxReady(success, error)`**

This API is called to check whether the sign-in HUAWEI ID and app APK version meets the requirements of the sandbox testing(sandbox testing is not available for individual developers outside of China).

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`success` | Function | A callback function. It is called when function is executed successfully.|
|`error`| Function | A callback function. It is called when function is failed.|

---

### **`isEnvironmentReady()`** or **`cbIsEnvironmentReady(success, error)`**

This API is called to check whether the currently signed-in HUAWEI ID is located in a country or region where HUAWEI IAP is available.

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`success` | Function | A callback function. It is called when function is executed successfully. It gets an argument of [`IsEnvReadyResult`](#isenvreadyresult) object|
|`error`| Function | A callback function. It is called when function is failed. It gets an argument of [`Status`](#status) object|

---

### **`obtainOwnedPurchases(ownedPurchasesRequest)`** or **`cbObtainOwnedPurchases(ownedPurchasesRequest, success, error)`**

This API is called to query information about all purchased in-app products, including consumables, non-consumables, and auto-renewable subscriptions.

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`ownedPurchasesRequest` |[`OwnedPurchasesReq`](#ownedpurchasesreq) | Request object that must have `priceType` as key and integer(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value. Ex: `{ 'priceType': 1 }`|
|`success` | Function | A callback function. It is called when function is executed successfully. It gets an argument of [`OwnedPurchasesResult`](#ownedpurchasesresult) object|
|`error`| Function | A callback function. It is called when function is failed. It gets an argument of [`Status`](#status) object|

---

### **`obtainProductInfo(productInfoRequest)`** or **`cbObtainProductInfo(productInfoRequest,success, error)`**

This API is called to obtain in-app product details configured in AppGallery Connect.

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`productInfoRequest` | [`ProductInfoReq`](#productinforeq) | Request object that must have `priceType` as key and integer(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value. and `productList` as key and list of strings of ids of products as value. Ex: `{ 'priceType': 0, 'productList': ['consumable_1','consumable_2'] }`|
|`success` | Function | A callback function. It is called when function is executed successfully. It gets an argument of [`ProductInfoResult`](#productinforesult) object|
|`error`| Function | A callback function. It is called when function is failed. It gets an argument of [`Status`](#status) object|

---

### **`createPurchaseIntent(purchaseIntentRequest)`** or **`cbCreatePurchaseIntent(purchaseIntentRequest,success, error)`**

This API is called to create orders for PMS products, including consumables, non-consumables, and subscriptions.

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`purchaseIntentRequest` | [`PurchaseIntentReq`](#purchaseintentreq) | Request object that must have `priceType` as key and integer(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value, and `productId` as key and string of id of the product to be purchased as value, may have `developerPayload` as key and string decided by developer as value  Ex: `{ 'priceType': 0, 'productId': 'consumable_1', 'developerPayload': 'HMSDevPayload'}`|
|`success` | Function | A callback function. It is called when function is executed successfully. It gets an argument of [`PurchaseResultInfo`](#purchaseresultinfo) object|
|`error`| Function | A callback function. It is called when function is failed. It gets an argument of [`Status`](#status) object|

---

### **`consumeOwnedPurchase(consumeOwnedPurchaseRequest)`** or **`cbConsumeOwnedPurchase(consumeOwnedPurchaseRequest,success, error)`**

This API is called to consume a consumable after the consumable is delivered to a user who has completed payment.

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`consumeOwnedPurchaseRequest` | [`ConsumeOwnedPurchaseReq`](#consumeOwnedPurchaseReq) | Request object that must have `inAppPurchaseData` as key and JSON string that contains purchase order details of the product to be consumed(it can be obtained by using result object of `createPurchaseIntent`  or `obtainOwnedPurchases` functions ) as value, may have `developerChallenge` as key and string decided by developer as value  Ex: `{ 'inAppPurchaseData': "{'autoRenewing':false,'orderId':'0000.000','packageName':'com.mycompany.aa.bb.cc.yy.demo','applicationId':000000,'kind':0,'productId':'consumable_1','productName':'Consumable Product 1','purchaseTime':000000,'purchaseTimeMillis':000000,'purchaseState':0,'developerPayload':'HMSDevPayload','purchaseToken':'012345678cdef.1.0123bcdef','developerChallenge':'HMSDevChallenge','responseCode':'0','consumptionState':1,'confirmed':1,'currency':'TRY','price':6,'country':'TR','payOrderId':'WPXXXXX','payType':'24'}, 'developerChallenge': 'HMSDevChallenge'}`|
|`success` | Function | A callback function. It is called when function is executed successfully. It gets an argument of [`ConsumeOwnedPurchaseResult`](#consumeownedpurchaseresult) object|
|`error`| Function | A callback function. It is called when function is failed. It gets an argument of [`Status`](#status) object|

---

### **`obtainOwnedPurchaseRecord(ownedPurchasesRequest)`** or **`cbObtainOwnedPurchaseRecord(ownedPurchasesRequest, success, error)`**

This API is called to obtain the historical consumption information about a consumable or all subscription receipts of a subscription.

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`ownedPurchasesRequest` | [`OwnedPurchasesReq`](#ownedpurchasesreq) | Request object that must have `priceType` as key and integer(`0` for Consumable or `1` for Non-Consumable or `2` for Subscription type of product) as value. Ex: `{ 'priceType': 1 }`|
|`success` | Function | A callback function. It is called when function is executed successfully. It gets an argument of [`OwnedPurchasesResult`](#ownedpurchasesresult) object |
|`error`| Function | A callback function. It is called when function is failed. It gets an argument of [`Status`](#status) object|

---

### Example usage of the functions

#### Using Callback

```javascript
HMSInAppPurchases.cbObtainOwnedPurchases({
   priceType:1,
   },
   (successMessage)=>{ //Success callback
      console.log(successMessage);
   },
   (errorMessage)=>{ //Error callback
      console.log(errorMessage);
   }
)
```

#### Using Promise

```javascript
try {
   let message = await HMSInAppPurchases.obtainOwnedPurchases({
      priceType: 1
   });
   console.log(message);
} catch (err) {
   defaultErrorHandler(err);
}
```

---

## Data Types

### **`Status`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`errorString` | `string` | The error description.|
|`statusCode` | `integer` | The status code. `0`: success, `1`: failure, `404`: no resource found, and `500`: internal error.|
|`statusMessage` | `string` | The status description.|
|`hasResolution` | `boolean` | True if whether there is a pending intent that will resolve the issue.|
|`isCanceled` | `boolean` | True if the process cancelled.|
|`isInterrupted` | `boolean` | True if the process interrupted.|
|`isSuccess` | `boolean` | True if the process succeeded.|

---

### **`OwnedPurchasesReq`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`priceType` | `integer` | The type of a product.|

---

### **`ProductInfoReq`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`priceType` | `integer` | The type of a product to be queried.|
|`productList` | `string[]` | The ID list of products to be queried.|

---

### **`PurchaseIntentReq`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`priceType` | `integer` | The type of a product.|
|`productId` | `string` | The ID of the product to be paid.|
|`developerPayload` | `string` | The information stored on the merchant side.|

---

### **`ConsumeOwnedPurchaseReq`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`inAppPurchaseData` | `string` | JSON string of [`InAppPurchaseData`](#inapppurchasedata) object.|
|`developerChallenge` | `string` | The challenge customized by a developer.|

---

### **`IsSandboxActivatedResult`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`returnCode` | `integer` | Query result code.|
|`errMsg` | `string` | Result code description.|
|`isSandboxUser` | `boolean` | True if A sandbox account is used.|
|`isSandboxApk` | `boolean` | True if the app APK version meets the requirements of the sandbox testing.|
|`versionInApk` | `string` | App version information.|
|`versionFrMarket` | `string` | The information about the app version that is last released in HUAWEI AppGallery Connect.|
|`status` | [`Status`](#status) | Status based on the task processing result.|

---

### **`IsEnvReadyResult`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`returnCode` | `integer` | Query result code.|
|`status` | [`Status`](#status) | Status based on the task processing result.|

---

### **`OwnedPurchasesResult`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`continuationToken` | `string` | Data location flag.|
|`errMsg` | `string` | Result code description.|
|`itemList` | `string[]` | The ID list of found products.|
|`inAppPurchaseDataList` | `string[]` |  The information about products that have been purchased but not consumed or about all existing subscription relationships of users, which is returned using the [`obtainOwnedPurchases`](#obtainownedpurchasesownedpurchasesrequest-or-cbobtainownedpurchasesownedpurchasesrequest-success-error) method or the historical consumable information or all subscription receipts, which are returned using the [`obtainOwnedPurchaseRecord`](#obtainownedpurchaserecordownedpurchasesrequest-or-cbobtainownedpurchaserecordownedpurchasesrequest-success-error) method. The value is an array of JSON string of [`InAppPurchaseData`](#inapppurchasedata)|
|`inAppSignature` | `string[]` |  a signature character string of each character string in `inAppPurchaseDataList`|
|`placedInappPurchaseDataList` | `string[]` | Subscription relationship information about a user who has performed subscription switchover. The value is an array of JSON string of [`InAppPurchaseData`](#inapppurchasedata) object |
|`placedInappSignatureList` | `string[]` | The signature character string of each character string in `placedInappPurchaseDataList`|
|`returnCode` | `integer` | Query result code.|
|`status` | [`Status`](#status) | Status based on the task processing result.|

---

### **`ProductInfoResult`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`returnCode` | `integer` | Query result code.|
|`errMsg` | `string` | Result code description.|
|`productInfoList` | [`ProductInfo[]`](#productinfo) | The list of in-app products that are successfully found.|
|`status` | [`Status`](#status) | Status based on the task processing result.|

---

### **`PurchaseIntentResult`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`returnCode` | `integer` | Query result code.|
|`errMsg` | `string` | Result code description.|
|`paymentData` | `string` | JSON string that contains purchase order details.|
|`paymentSignature` | `string` | The signature character string generated after purchase data. |
|`status` | [`Status`](#status) | Status based on the task processing result.|

---

### **`ConsumeOwnedPurchaseResult`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`consumePurchaseData` | `string` | JSON string that contains consumption result data.|
|`dataSignature` | `string` | The signature character string generated after consumption data. |
|`errMsg` | `string` | Result code description.|
|`returnCode` | `integer` | Query result code.|
|`status` | [`Status`](#status) | Status based on the task processing result.|

---

### **`PurchaseResultInfo`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`returnCode` | `integer` | Query result code.|
|`errMsg` | `string` | Result code description.|
|`inAppPurchaseData` | `string` | JSON string of [`InAppPurchaseData`](#inapppurchasedata) object that contains purchase order details.|
|`inAppDataSignature` | `string` |  The signed character string generated by signing the purchase data.|

---

### **`ProductInfo`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
|`productId` | `string` | ID of the product |
|`priceType` | `integer` | The type of the product |
|`price` | `string` | Displayed price of a product. |
|`microsPrice` | `integer` | Product price in micro unit. |
|`originalLocalPrice` | `string` | Original price of a product |
|`originalMicroPrice` | `integer` | Original price of a product in micro unit. |
|`currency` | `string` | Product currency |
|`productName` | `string` | Product name |
|`productDesc` | `string` | Product description. |
|`subPeriod` | `string` | Unit of a subscription period. |
|`subSpecialPrice` | `string` | Promotional price of a subscription. |
|`subSpecialPriceMicros` | `integer` | Promotional price of a subscription in micro unit. |
|`subSpecialPeriod` | `string` | Promotion period unit of a subscription |
|`subSpecialPeriodCycles` | `integer` | Promotion period unit of a subscription |
|`subFreeTrialPeriod` | `string` | Free trial period of a subscription. |
|`subGroupId` | `string` | ID of the subscription group to which a subscription belongs. |
|`subGroupTitle` | `string` | Description of the subscription group to which a subscription belongs. |
|`subProductLevel` | `integer` | Level of a subscription in its subscription group. |

---

### **`InAppPurchaseData`**

| Parameter | Type | Definition |
|-----------|--------------------|-----------------------------|
| `appInfo` | `string` | App information |
| `applicationId` | `number` | Application ID |
| `cancelledSubKeepDays` | `integer` | Number of days for retaining a subscription relationship after the subscription is canceled. |
| `cancelReason` | `integer` | Cause of subscription cancellation. |
| `cancelTime` | `number` | Timestamp of the subscription cancellation time. |
| `country` | `string` | Country code, which is used to identify a country. |
| `currency` | `string` | Currency |
| `daysLasted` | `number` | Days of paid service, excluding the free trial period and promotion period. |
| `developerPayload` | `string` | The payload provided by developer. |
| `expirationDate` | `number` | Timestamp of the subscription expiration time. |
| `expirationIntent` | `integer` | Reason why a subscription expires. |
| `introductoryFlag` | `integer` | Indicates whether a subscription is in the promotion period. |
| `lastOrderId` | `string` | Order ID generated by the payment server during fee deduction on the previous renewal date. |
| `notifyClosed` | `integer` | Indicates whether a user has disabled subscription notifications. |
| `numOfDiscount` | `number` | Number of successful renewal periods with promotion. |
| `numOfPeriods` | `number` | Number of successful standard renewal periods (that is, renewal periods without promotion). |
| `orderID` | `string` | Order ID on the Huawei payment server, which uniquely identifies a transaction and is generated by the Huawei payment server during payment. |
| `oriPurchaseTime` | `number` | Timestamp of the first fee deduction time, milliseconds since 00:00:00 on January 1, 1970. |
| `packageName` | `string` | App installation package name. |
| `price` | `number` | Value after the actual price of an in-app product is multiplied by 100. |
| `priceConsentStatus` | `integer` | User opinion on the price increase of an in-app product. |
| `productGroup` | `string` | ID of the subscription group to which a subscription benumbers |
| `productId` | `string` | In-app product ID. |
| `productName` | `string` | In-app product name. |
| `purchaseState` | `integer` | Transaction status. |
| `purchaseTime` | `number` | Timestamp of the purchase time, milliseconds since 00:00:00 on January 1, 1970. |
| `purchaseToken` | `string` | Purchase token, which uniquely identifies the mapping between an in-app product and a user and is generated by the Huawei payment server when the payment is complete. |
| `purchaseType` | `integer` | Purchase type. |
| `quantity` | `integer` | Purchase quantity. |
| `renewPrice` | `number` | Price used upon the next renewal. |
| `renewStatus` | `integer` | Renewal status. |
| `retryFlag` | `integer` | Indicates whether the system still tries to renew an expired subscription. |
| `subscriptionId` | `string` | Subscription ID. |
| `trialFlag` | `integer` | Indicates whether a subscription is in the free trial period. |
| `isAutoRenewing` | `boolean` | Purchase auto renewing status. |
| `isSubValid` | `boolean` | Valid if a user has been charged for an in-app product, the in-app product has not expired, and no refund has been made. |
| `cancelledSubKeepDays` | `integer` | Number of days for retaining a subscription relationship after the subscription is canceled. |
| `kind` | `integer` | Product type |
| `developerChallenge` | `string` | Challenge defined when an app initiates a consumption request, which uniquely identifies the consumption request. This parameter exists only for one-off products. |
| `consumptionState` | `integer` | Consumption status, which exists only for one-off products. |
| `payOrderId` | `string` | Merchant ID, which uniquely identifies a transaction and is generated by the Huawei IAP server during payment. |
| `payType` | `string` | Payment method.  |
| `deferFlag` | `integer` | Indicates whether to postpone the settlement date. The value 1 indicates that the settlement date is postponed. |
| `oriSubscriptionId` | `string` | Original subscription ID. |
| `cancelWay` | `integer` | Subscription cancellation initiator. |
| `cancellationTime` | `number` | Subscription cancellation time in UTC. |
| `resumeTime` | `number` | Time when a subscription is resumed. |
---

## 4. Configure Description

No
  
## 5. Licensing and Terms

Apache 2.0 license.
