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

/**
 * Provides methods to obtain HiAnalytics Kit functions both In Android & IOS Platforms.
 */
declare class HMSAnalyticsAPI {
    HAParamType: typeof HAParamType;
    HAEventType: typeof HAEventType;
    asyncExecute(action: string, param: any): Promise<any>;
    /**
     * Specifies whether to enable event collection.
     * If the function is disabled, no data is recorded.
     */
    setAnalyticsEnabled(enabled: boolean): Promise<void>;
    /**
     * Initializes Analytics Kit.
     * @note This method is only to support on iOS Platform.
     */
    config(): Promise<void>;
    /**
     * Obtains the app instance ID from AppGallery Connect.
     */
    getAAID(): Promise<string>;
    /**
     * Report events.
     */
    onEvent(eventId: HAEventType | string, value: HAParamType | EventParams): Promise<void>;
    /**
     * Set a user ID.
     * @important: When the setUserId API is called, if the old userId is not empty
     * and is different from the new userId, a new session is generated.
     * If you do not want to use setUserId to identify a user
     * (for example, when a user signs out), set userId to **null**.
     */
    setUserId(userId: string): Promise<void>;
    /**
     * User attribute values remain unchanged throughout the app's lifecycle and session.
     * A maximum of 25 user attribute names are supported.
     * If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
     */
    setUserProfile(name: string, value: string): Promise<void>;
    /**
     * Enables AB Testing. Predefined or custom user attributes are supported.
     */
    getUserProfiles(predefined: boolean): Promise<UserProfiles>;
    /**
     * Enables the log method.
     * @note This method is only to support on Android Platform.
     */
    enableLog(): Promise<void>;
    /**
     * Enables the debug log method and sets the minimum log level.
     * @note This method is only to support on Android Platform.
     */
    enableLogWithLevel(logLevel: LogLevel): Promise<void>;
    /**
     * Sets the push token, which is obtained using the Push Kit.
     * @note This method is only to support on Android Platform.
     */
    setPushToken(token: string): Promise<void>;
    /**
     * Sets the minimum interval for starting a new session.
     */
    setMinActivitySessions(interval: number): Promise<void>;
    /**
     * Sets the session timeout interval.
     */
    setSessionDuration(duration: number): Promise<void>;
    /**
     * Defines a custom page entry event.
     * @note This method is only to support on Android Platform.
     */
    pageStart(pageName: string, pageClassOverride: string): Promise<void>;
    /**
     * Defines a custom page exit event.
     * @note This method is only to support on Android Platform.
     */
    pageEnd(pageName: string): Promise<void>;
    /**
     * Delete all collected data in the local cache, including the cached data that fails to be sent.
     */
    clearCachedData(): Promise<void>;
    /**
     * Sets data reporting policies.
     * @note This method is only to support on iOS Platform.
     */
    setReportPolicies(reportPolicyType: HAReportPolicy): Promise<void>;
    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of
     * AppLinking SDK's methods to improve the service quality.
     */
    enableLogger(): Promise<void>;
    /**
     * This method disables HMSLogger capability which is used for sending usage analytics of
     * AppLinking SDK's methods to improve the service quality.
     */
    disableLogger(): Promise<void>;
}
interface GenericObject {
    [key: string]: string;
}
declare type UserProfiles = GenericObject;
declare type EventParams = GenericObject;
declare type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";
/**
 * HAReportPolicy types for sets data reporting policies.
 */
interface HAReportPolicy {
    "onScheduledTimePolicy"?: number;
    "onAppLaunchPolicy"?: boolean;
    "onMoveBackgroundPolicy"?: boolean;
    "onCacheThresholdPolicy"?: number;
}
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
declare enum HAEventType {
    CREATEPAYMENTINFO = "$CreatePaymentInfo",
    ADDPRODUCT2CART = "$AddProduct2Cart",
    ADDPRODUCT2WISHLIST = "$AddProduct2WishList",
    STARTAPP = "$StartApp",
    STARTCHECKOUT = "$StartCheckout",
    VIEWCAMPAIGN = "$ViewCampaign",
    VIEWCHECKOUTSTEP = "$ViewCheckoutStep",
    WINVIRTUALCOIN = "$WinVirtualCoin",
    COMPLETEPURCHASE = "$CompletePurchase",
    OBTAINLEADS = "$ObtainLeads",
    JOINUSERGROUP = "$JoinUserGroup",
    COMPLETELEVEL = "$CompleteLevel",
    STARTLEVEL = "$StartLevel",
    UPGRADELEVEL = "$UpgradeLevel",
    SIGNIN = "$SignIn",
    SIGNOUT = "$SignOut",
    SUBMITSCORE = "$SubmitScore",
    CREATEORDER = "$CreateOrder",
    REFUNDORDER = "$RefundOrder",
    DELPRODUCTFROMCART = "$DelProductFromCart",
    SEARCH = "$Search",
    VIEWCONTENT = "$ViewContent",
    UPDATECHECKOUTOPTION = "$UpdateCheckoutOption",
    SHARECONTENT = "$ShareContent",
    REGISTERACCOUNT = "$RegisterAccount",
    CONSUMEVIRTUALCOIN = "$ConsumeVirtualCoin",
    STARTTUTORIAL = "$StartTutorial",
    COMPLETETUTORIAL = "$CompleteTutorial",
    OBTAINACHIEVEMENT = "$ObtainAchievement",
    VIEWPRODUCT = "$ViewProduct",
    VIEWPRODUCTLIST = "$ViewProductList",
    VIEWSEARCHRESULT = "$ViewSearchResult",
    UPDATEMEMBERSHIPLEVEL = "$UpdateMembershipLevel",
    FILTRATEPRODUCT = "$FiltrateProduct",
    VIEWCATEGORY = "$ViewCategory",
    UPDATEORDER = "$UpdateOrder",
    CANCELORDER = "$CancelOrder",
    COMPLETEORDER = "$CompleteOrder",
    CANCELCHECKOUT = "$CancelCheckout",
    OBTAINVOUCHER = "$ObtainVoucher",
    CONTACTCUSTOMSERVICE = "$ContactCustomService",
    RATE = "$Rate",
    INVITE = "$Invite"
}
/**
 * HAParamType types for provides the IDs of all predefined parameters,
 * including the IDs of predefined parameters and user attributes.
 */
declare enum HAParamType {
    STORENAME = "$StoreName",
    BRAND = "$Brand",
    CATEGORY = "$Category",
    PRODUCTID = "$ProductId",
    PRODUCTNAME = "$ProductName",
    PRODUCTFEATURE = "$ProductFeature",
    PRICE = "$Price",
    QUANTITY = "$Quantity",
    REVENUE = "$Revenue",
    CURRNAME = "$CurrName",
    PLACEID = "$PlaceId",
    DESTINATION = "$Destination",
    ENDDATE = "$EndDate",
    BOOKINGDAYS = "$BookingDays",
    PASSENGERSNUMBER = "$PassengersNumber",
    BOOKINGROOMS = "$BookingRooms",
    ORIGINATINGPLACE = "$OriginatingPlace",
    BEGINDATE = "$BeginDate",
    TRANSACTIONID = "$TransactionId",
    CLASS = "$Class",
    CLICKID = "$ClickId",
    PROMOTIONNAME = "$PromotionName",
    CONTENT = "$Content",
    EXTENDPARAM = "$ExtendParam",
    MATERIALNAME = "$MaterialName",
    MATERIALSLOT = "$MaterialSlot",
    MEDIUM = "$Medium",
    SOURCE = "$Source",
    KEYWORDS = "$Keywords",
    OPTION = "$Option",
    STEP = "$Step",
    VIRTUALCURRNAME = "$VirtualCurrName",
    VOUCHER = "$Voucher",
    PLACE = "$Place",
    SHIPPING = "$Shipping",
    TAXFEE = "$TaxFee",
    USERGROUPID = "$UserGroupId",
    LEVELNAME = "$LevelName",
    RESULT = "$Result",
    ROLENAME = "$RoleName",
    LEVELID = "$LevelId",
    CHANNEL = "$Channel",
    SCORE = "$Score",
    SEARCHKEYWORDS = "$SearchKeywords",
    CONTENTTYPE = "$ContentType",
    FLIGHTNO = "$FlightNo",
    POSITIONID = "$PositionId",
    PRODUCTLIST = "$ProductList",
    ACOUNTTYPE = "$AcountType",
    OCCURREDTIME = "$OccurredTime",
    EVTRESULT = "$EvtResult",
    PREVLEVEL = "$PrevLevel",
    CURRVLEVEL = "$CurrvLevel",
    VOUCHERS = "$Vouchers",
    MATERIALSLOTTYPE = "$MaterialSlotType",
    LISTID = "$ListId",
    FILTERS = "$Filters",
    SORTS = "$Sorts",
    ORDERID = "$OrderId",
    PAYTYPE = "$PayType",
    REASON = "$Reason",
    EXPIREDATE = "$ExpireDate",
    VOUCHERTYPE = "$VoucherType",
    SERVICETYPE = "$ServiceType",
    DETAILS = "$Details",
    COMMENTTYPE = "$CommentType",
    REGISTMETHOD = "$RegistMethod"
}
declare const _default: HMSAnalyticsAPI;
export = _default;
