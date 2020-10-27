"use strict";
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
const cordova_1 = require("cordova");
/**
 * Provides methods to obtain HiAnalytics Kit functions both In Android & IOS Platforms.
 */
class HMSAnalyticsAPI {
    constructor() {
        this.HAParamType = HAParamType;
        this.HAEventType = HAEventType;
    }
    asyncExecute(action, param) {
        return new Promise((resolve, reject) => {
            cordova_1.exec(resolve, reject, 'cordova-plugin-hms-analytics', action, (param === undefined || param === null) ? [{}] : [param]);
        });
    }
    /**
     * Specifies whether to enable event collection.
     * If the function is disabled, no data is recorded.
     */
    setAnalyticsEnabled(enabled) {
        return this.asyncExecute('setAnalyticsEnabled', {
            enabled
        });
    }
    /**
     * Initializes Analytics Kit.
     * @note This method is only to support on iOS Platform.
     */
    config() {
        return this.asyncExecute('config', {});
    }
    /**
     * Obtains the app instance ID from AppGallery Connect.
     */
    getAAID() {
        return this.asyncExecute('getAAID', {});
    }
    /**
     * Report events.
     */
    onEvent(eventId, value) {
        return this.asyncExecute('onEvent', {
            eventId,
            value
        });
    }
    /**
     * Set a user ID.
     * @important: When the setUserId API is called, if the old userId is not empty
     * and is different from the new userId, a new session is generated.
     * If you do not want to use setUserId to identify a user
     * (for example, when a user signs out), set userId to **null**.
     */
    setUserId(userId) {
        return this.asyncExecute('setUserId', {
            userId
        });
    }
    /**
     * User attribute values remain unchanged throughout the app's lifecycle and session.
     * A maximum of 25 user attribute names are supported.
     * If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
     */
    setUserProfile(name, value) {
        return this.asyncExecute('setUserProfile', {
            key: name,
            value: value
        });
    }
    /**
     * Enables AB Testing. Predefined or custom user attributes are supported.
     */
    getUserProfiles(predefined) {
        return this.asyncExecute('getUserProfiles', {
            predefined
        });
    }
    /**
     * Enables the log method.
     * @note This method is only to support on Android Platform.
     */
    enableLog() {
        return this.asyncExecute('enableLog', {});
    }
    /**
     * Enables the debug log method and sets the minimum log level.
     * @note This method is only to support on Android Platform.
     */
    enableLogWithLevel(logLevel) {
        if (!(logLevel === 'DEBUG' || logLevel === 'INFO' || logLevel === 'WARN' || logLevel === 'ERROR')) {
            throw 'Invalid argument. Possible logLevels : DEBUG, INFO, WARN, ERROR';
        }
        return this.asyncExecute('enableLogWithLevel', {
            logLevel
        });
    }
    /**
     * Sets the push token, which is obtained using the Push Kit.
     * @note This method is only to support on Android Platform.
     */
    setPushToken(token) {
        return this.asyncExecute('setPushToken', {
            token
        });
    }
    /**
     * Sets the minimum interval for starting a new session.
     */
    setMinActivitySessions(interval) {
        return this.asyncExecute('setMinActivitySessions', {
            interval
        });
    }
    /**
     * Sets the session timeout interval.
     */
    setSessionDuration(duration) {
        return this.asyncExecute('setSessionDuration', {
            duration
        });
    }
    /**
     * Defines a custom page entry event.
     * @note This method is only to support on Android Platform.
     */
    pageStart(pageName, pageClassOverride) {
        return this.asyncExecute('pageStart', {
            pageName,
            pageClassOverride
        });
    }
    /**
     * Defines a custom page exit event.
     * @note This method is only to support on Android Platform.
     */
    pageEnd(pageName) {
        return this.asyncExecute('pageEnd', {
            pageName
        });
    }
    /**
     * Delete all collected data in the local cache, including the cached data that fails to be sent.
     */
    clearCachedData() {
        return this.asyncExecute('clearCachedData', {});
    }
    /**
     * Sets data reporting policies.
     * @note This method is only to support on iOS Platform.
     */
    setReportPolicies(reportPolicyType) {
        return this.asyncExecute('setReportPolicies', {
            reportPolicyType
        });
    }
    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of
     * AppLinking SDK's methods to improve the service quality.
     */
    enableLogger() {
        return this.asyncExecute('enableLoggler', {});
    }
    /**
     * This method disables HMSLogger capability which is used for sending usage analytics of
     * AppLinking SDK's methods to improve the service quality.
     */
    disableLogger() {
        return this.asyncExecute('disableLogger', {});
    }
}
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
var HAEventType;
(function (HAEventType) {
    HAEventType["CREATEPAYMENTINFO"] = "$CreatePaymentInfo";
    HAEventType["ADDPRODUCT2CART"] = "$AddProduct2Cart";
    HAEventType["ADDPRODUCT2WISHLIST"] = "$AddProduct2WishList";
    HAEventType["STARTAPP"] = "$StartApp";
    HAEventType["STARTCHECKOUT"] = "$StartCheckout";
    HAEventType["VIEWCAMPAIGN"] = "$ViewCampaign";
    HAEventType["VIEWCHECKOUTSTEP"] = "$ViewCheckoutStep";
    HAEventType["WINVIRTUALCOIN"] = "$WinVirtualCoin";
    HAEventType["COMPLETEPURCHASE"] = "$CompletePurchase";
    HAEventType["OBTAINLEADS"] = "$ObtainLeads";
    HAEventType["JOINUSERGROUP"] = "$JoinUserGroup";
    HAEventType["COMPLETELEVEL"] = "$CompleteLevel";
    HAEventType["STARTLEVEL"] = "$StartLevel";
    HAEventType["UPGRADELEVEL"] = "$UpgradeLevel";
    HAEventType["SIGNIN"] = "$SignIn";
    HAEventType["SIGNOUT"] = "$SignOut";
    HAEventType["SUBMITSCORE"] = "$SubmitScore";
    HAEventType["CREATEORDER"] = "$CreateOrder";
    HAEventType["REFUNDORDER"] = "$RefundOrder";
    HAEventType["DELPRODUCTFROMCART"] = "$DelProductFromCart";
    HAEventType["SEARCH"] = "$Search";
    HAEventType["VIEWCONTENT"] = "$ViewContent";
    HAEventType["UPDATECHECKOUTOPTION"] = "$UpdateCheckoutOption";
    HAEventType["SHARECONTENT"] = "$ShareContent";
    HAEventType["REGISTERACCOUNT"] = "$RegisterAccount";
    HAEventType["CONSUMEVIRTUALCOIN"] = "$ConsumeVirtualCoin";
    HAEventType["STARTTUTORIAL"] = "$StartTutorial";
    HAEventType["COMPLETETUTORIAL"] = "$CompleteTutorial";
    HAEventType["OBTAINACHIEVEMENT"] = "$ObtainAchievement";
    HAEventType["VIEWPRODUCT"] = "$ViewProduct";
    HAEventType["VIEWPRODUCTLIST"] = "$ViewProductList";
    HAEventType["VIEWSEARCHRESULT"] = "$ViewSearchResult";
    HAEventType["UPDATEMEMBERSHIPLEVEL"] = "$UpdateMembershipLevel";
    HAEventType["FILTRATEPRODUCT"] = "$FiltrateProduct";
    HAEventType["VIEWCATEGORY"] = "$ViewCategory";
    HAEventType["UPDATEORDER"] = "$UpdateOrder";
    HAEventType["CANCELORDER"] = "$CancelOrder";
    HAEventType["COMPLETEORDER"] = "$CompleteOrder";
    HAEventType["CANCELCHECKOUT"] = "$CancelCheckout";
    HAEventType["OBTAINVOUCHER"] = "$ObtainVoucher";
    HAEventType["CONTACTCUSTOMSERVICE"] = "$ContactCustomService";
    HAEventType["RATE"] = "$Rate";
    HAEventType["INVITE"] = "$Invite";
})(HAEventType || (HAEventType = {}));
/**
 * HAParamType types for provides the IDs of all predefined parameters,
 * including the IDs of predefined parameters and user attributes.
 */
var HAParamType;
(function (HAParamType) {
    HAParamType["STORENAME"] = "$StoreName";
    HAParamType["BRAND"] = "$Brand";
    HAParamType["CATEGORY"] = "$Category";
    HAParamType["PRODUCTID"] = "$ProductId";
    HAParamType["PRODUCTNAME"] = "$ProductName";
    HAParamType["PRODUCTFEATURE"] = "$ProductFeature";
    HAParamType["PRICE"] = "$Price";
    HAParamType["QUANTITY"] = "$Quantity";
    HAParamType["REVENUE"] = "$Revenue";
    HAParamType["CURRNAME"] = "$CurrName";
    HAParamType["PLACEID"] = "$PlaceId";
    HAParamType["DESTINATION"] = "$Destination";
    HAParamType["ENDDATE"] = "$EndDate";
    HAParamType["BOOKINGDAYS"] = "$BookingDays";
    HAParamType["PASSENGERSNUMBER"] = "$PassengersNumber";
    HAParamType["BOOKINGROOMS"] = "$BookingRooms";
    HAParamType["ORIGINATINGPLACE"] = "$OriginatingPlace";
    HAParamType["BEGINDATE"] = "$BeginDate";
    HAParamType["TRANSACTIONID"] = "$TransactionId";
    HAParamType["CLASS"] = "$Class";
    HAParamType["CLICKID"] = "$ClickId";
    HAParamType["PROMOTIONNAME"] = "$PromotionName";
    HAParamType["CONTENT"] = "$Content";
    HAParamType["EXTENDPARAM"] = "$ExtendParam";
    HAParamType["MATERIALNAME"] = "$MaterialName";
    HAParamType["MATERIALSLOT"] = "$MaterialSlot";
    HAParamType["MEDIUM"] = "$Medium";
    HAParamType["SOURCE"] = "$Source";
    HAParamType["KEYWORDS"] = "$Keywords";
    HAParamType["OPTION"] = "$Option";
    HAParamType["STEP"] = "$Step";
    HAParamType["VIRTUALCURRNAME"] = "$VirtualCurrName";
    HAParamType["VOUCHER"] = "$Voucher";
    HAParamType["PLACE"] = "$Place";
    HAParamType["SHIPPING"] = "$Shipping";
    HAParamType["TAXFEE"] = "$TaxFee";
    HAParamType["USERGROUPID"] = "$UserGroupId";
    HAParamType["LEVELNAME"] = "$LevelName";
    HAParamType["RESULT"] = "$Result";
    HAParamType["ROLENAME"] = "$RoleName";
    HAParamType["LEVELID"] = "$LevelId";
    HAParamType["CHANNEL"] = "$Channel";
    HAParamType["SCORE"] = "$Score";
    HAParamType["SEARCHKEYWORDS"] = "$SearchKeywords";
    HAParamType["CONTENTTYPE"] = "$ContentType";
    HAParamType["FLIGHTNO"] = "$FlightNo";
    HAParamType["POSITIONID"] = "$PositionId";
    HAParamType["PRODUCTLIST"] = "$ProductList";
    HAParamType["ACOUNTTYPE"] = "$AcountType";
    HAParamType["OCCURREDTIME"] = "$OccurredTime";
    HAParamType["EVTRESULT"] = "$EvtResult";
    HAParamType["PREVLEVEL"] = "$PrevLevel";
    HAParamType["CURRVLEVEL"] = "$CurrvLevel";
    HAParamType["VOUCHERS"] = "$Vouchers";
    HAParamType["MATERIALSLOTTYPE"] = "$MaterialSlotType";
    HAParamType["LISTID"] = "$ListId";
    HAParamType["FILTERS"] = "$Filters";
    HAParamType["SORTS"] = "$Sorts";
    HAParamType["ORDERID"] = "$OrderId";
    HAParamType["PAYTYPE"] = "$PayType";
    HAParamType["REASON"] = "$Reason";
    HAParamType["EXPIREDATE"] = "$ExpireDate";
    HAParamType["VOUCHERTYPE"] = "$VoucherType";
    HAParamType["SERVICETYPE"] = "$ServiceType";
    HAParamType["DETAILS"] = "$Details";
    HAParamType["COMMENTTYPE"] = "$CommentType";
    HAParamType["REGISTMETHOD"] = "$RegistMethod";
})(HAParamType || (HAParamType = {}));
module.exports = new HMSAnalyticsAPI();
//# sourceMappingURL=HMSAnalytics.js.map