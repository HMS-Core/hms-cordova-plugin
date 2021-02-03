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

import { asyncExec } from './utils'

///////////////////////////////////////////////////////////////////////////
// HMSAnalytics
///////////////////////////////////////////////////////////////////////////

const HMSAnalytics: string = 'HMSAnalytics';
const HMSAnalyticsModule: string = 'HMSAnalyticsModule';

/**
 * Specifies whether to enable event logging.
 * The default value is true.
 * <p>
 * If event logging is disabled, no data is recorded or analyzed.
 * 
 * @param enabled : Indicates whether to enable event logging.
 */
export function setAnalyticsEnabled(enabled:boolean): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setAnalyticsEnabled',{'enabled':enabled}]);
}

/**
 * When the method is called, a new session is generated if the old value of id is not empty
 * and is different from the new value. If you do not want to use id to identify a user
 * (for example, when a user signs out), you must set id to null.
 *
 * @param id : User ID, a string containing a maximum of 256 characters.
 *           The value cannot be empty.
 *           {@param id} is used by Analytics Kit to associate user data.
 */
export function setUserId(userId:string): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setUserId',{'userId':userId}]);
}
/**
 * Sets user attributes.
 * The values of user attributes remain unchanged throughout the app lifecycle and during
 * each session.
 *
 * @param name  :  Name of a user attribute, a string containing a maximum of 256 characters.
 *              The value cannot be empty. It can consist of digits, letters,
 *              and underscores (_) and must start with a letter.
 * @param value : User attribute value, a string containing a maximum of 256 characters.
 */
export function setUserProfile(name:string,value:string): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setUserProfile',{'name':name,'value':value}]);
}
/**
 * Delete user profile.
 *
 * @param name  :  Name of a user attribute
 */
export function deleteUserProfile(name:string): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['deleteUserProfile',{'name':name}]);
}

/**
 * Sets the push token. After obtaining a push token through Push Kit, call this method
 * to save the push token so that you can use the audience defined by Analytics Kit
 * to create HCM notification tasks.
 *
 * @param token : Push token, a string containing a maximum of 256 characters.
 *              The value cannot be empty.
 * 
 * @note This method is only to support on Android Platform.
 */
export function setPushToken(token:string): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setPushToken',{'token':token}]);
}

/**
 * Sets the minimum interval for starting a new session.
 * A new session is generated when an app is switched back to the foreground after it
 * runs in the background for the specified minimum interval.
 * <p>
 * By default, the minimum interval is 30,000 milliseconds (that is, 30 seconds).
 *
 * @param milliseconds : Minimum interval for starting a session, in milliseconds.
 * 
 * @note This method is only to support on Android Platform.
 */
export function setMinActivitySessions(milliseconds:number): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setMinActivitySessions',{'milliseconds':milliseconds}]);
}

/**
 * Sets the session timeout interval.
 * A new session is generated when an app is running in the foreground but
 * the interval between two adjacent events exceeds the specified timeout interval.
 * By default, the timeout interval is 1,800,000 milliseconds (that is, 30 minutes).
 *
 * @param milliseconds : Session timeout interval, in milliseconds.
 */
export function setSessionDuration(milliseconds:number): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setSessionDuration',{'milliseconds':milliseconds}]);
}

/**
 * Records an event.
 *
 * @param eventId : Event ID, a string containing a maximum of 256 characters.
 *                The value cannot be empty or the ID of an automatically collected event.
 *                It can consist of digits, letters, and underscores (_) but cannot contain
 *                spaces or start with a digit.
 * @param params  :  Information carried in an event. The number of built-in key-value pairs
 */
export function onEvent(eventId: HAEventType | string, params: HAParamType | EventParams): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['onEvent',{'eventId':eventId,'params':params}]);
}

/**
 * Clears all collected data cached locally, including cached data that failed to be sent.
 */
export function clearCachedData(): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['clearCachedData']);
}

/**
 * Obtains the app instance ID from AppGallery Connect.
 */
export function getAAID(): Promise<string> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getAAID']);
}

/**
 * Obtains the automatically collected or custom user attributes.
 *
 * @param preDefined : Indicates whether to obtain the automatically collected or
 *                   custom user attributes.
 */
export function getUserProfiles(predefined:boolean): Promise<UserProfiles> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getUserProfiles',{'predefined':predefined}]);
}

/**
 * Customizes a page entry event.
 * This method applies only to non-activity pages because automatic collection is supported
 * for activity pages. If it is called for an activity page,
 * statistics on page entry and exit events will be inaccurate.
 * <p>
 * After this method is called, the pageEnd() API must be called.
 *
 * @param pageName          :          Name of the current page,
 *                          a string containing a maximum of 256 characters.
 * @param pageClassOverride : Class name of the current page,
 *                          a string containing a maximum of 256 characters.
 * 
 * @note This method is only to support on Android Platform.
 */
export function pageStart(pageName:string,pageClassOverride:string): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['pageStart',{'pageName':pageName,'pageClassOverride':pageClassOverride}]);
}

/**
 * Customizes a page end event.
 * This method applies only to non-activity pages because automatic collection is supported
 * for activity pages. If it is called for an activity page,
 * statistics on page entry and exit events will be inaccurate.
 * <p>
 * Before this method is called, the pageStart() API must be called.
 *
 * @param pageName : Name of the current page,
 *                 a string containing a maximum of 256 characters.
 *                 It must be the same as the value of pageName passed in pageStart().
 * 
 * @note This method is only to support on Android Platform.
 */
export function pageEnd(pageName:string): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['pageEnd',{'pageName':pageName}]);
}

/**
 * Sets the automatic event reporting policy.
 *
 * @param reportPolicies : Policy for data reporting. Four policies are supported.
 *                       One or more policies can be specified.
 */
export function setReportPolicies(reportPolicies:ReportPolicy): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setReportPolicies',{'reportPolicies':reportPolicies}]);
}

/**
 * Obtains the threshold for event reporting.
 *
 * @param reportPolicyType : Event reporting policy name.
 * 
 * @note This method is only to support on Android Platform.
 */
export function getReportPolicyThreshold(reportPolicyType:ReportPolicyType): Promise<number> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getReportPolicyThreshold',{'reportPolicyType':reportPolicyType}]);
}

/**
 * Specifies whether to enable restriction of HUAWEI Analytics.
 * <p>
 * The default value is false, which indicates that HUAWEI Analytics is enabled by default.
 *
 * @param isEnabled : Indicates whether to enable restriction of HUAWEI Analytics.
 */
export function setRestrictionEnabled(isEnabled:boolean): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setRestrictionEnabled',{'isEnabled':isEnabled}]);
}

/**
 * Obtains the restriction status of HUAWEI Analytics.
 */
export function isRestrictionEnabled(): Promise<boolean> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['isRestrictionEnabled']);
}

/**
 * Enables the debug log function and sets the minimum log level.
 * Default log level DEBUG.
 *
 * @param level : Level of recorded debug logs.
 * 
 * @note This method is only to support on Android Platform.
 * 
 * @note You can adjust the log level by adding arguments on iOS platform.
 *      The available options include -HALogLevelDebug, -HALogLevelInfo, -HALogLevelWarn, and -HALogLevelError.
 *      For example, if you want to set the log level to -HALogLevelDebug:
 *          1- Choose Product > Scheme > Edit Scheme from the Xcode menu.
 *          2- On the Arguments page, click + to add the -HALogLevelDebug parameter.
 */
export function enableLog(logLevel:LogLevelType=LogLevelType.DEBUG): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['enableLog',{'logLevel':logLevel}]);
}

// HMSLogger

/**
 * This method enables HMSLogger capability which is used for sending usage analytics of 
 * Analytics SDK's methods to improve the service quality.
 * 
 * @note This method is only to support on Android Platform.
 */
export function enableLogger(): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['enableLogger']);
}

/**
 * This method disables HMSLogger capability which is used for sending usage analytics of 
 * Analytics SDK's methods to improve the service quality.
 * 
 * @note This method is only to support on Android Platform.
 */
export function disableLogger(): Promise<void> {
	return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['disableLogger']);
}

///////////////////////////////////////////////////////////////
// Data Types
///////////////////////////////////////////////////////////////
interface GenericObject {
    [key: string]: any;
}
export type UserProfiles = GenericObject;
export type EventParams = GenericObject;
/**
 * ReportPolicy types for Sets automatic event reporting policies.
 */
export interface ReportPolicy {
    "onScheduledTimePolicy" ? : number,
    "onAppLaunchPolicy" ? : boolean,
    "onMoveBackgroundPolicy" ? : boolean,
    "onCacheThresholdPolicy" ? : number
}

///////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////
/**
 * ReportPolicy types
 */
export enum ReportPolicyType {
    ON_SCHEDULED_TIME_POLICY = "ON_SCHEDULED_TIME_POLICY",
    ON_APP_LAUNCH_POLICY = "ON_APP_LAUNCH_POLICY",
    ON_MOVE_BACKGROUND_POLICY = "ON_MOVE_BACKGROUND_POLICY",
    ON_CACHE_THRESHOLD_POLICY = "ON_CACHE_THRESHOLD_POLICY"
}
/**
 * HiAnalyticsTools log level enum.
 */
export enum LogLevelType {
    DEBUG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6
}
/**
 * HAUserProfileType types for provides constants that define the names of all predefined user attributes.
 */
export enum HAUserProfileType {
    USERLEVEL = "user_level"
}
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
export enum HAEventType {
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
    INVITE = "$Invite",
    NOVICEGUIDESTART = "$NoviceGuideStart",
    NOVICEGUIDEEND = "$NoviceGuideEnd",
    STARTGAME = "$StartGame",
    ENDGAME = "$EndGame",
    WINPROPS = "$WinProps",
    CONSUMEPROPS = "$ConsumeProps"
}
/**
 * HAParamType types for provides the IDs of all predefined parameters, 
 * including the IDs of predefined parameters and user attributes.
 */
export enum HAParamType {
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
    ACHIEVEMENTID = "$AchievementId",
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
    REGISTMETHOD = "$RegistMethod",
    DURATION = "$Duration",
    LEVEL = "$Level",
    PURCHASEENTRY = "$PurchaseEntry",
    PROPS = "$Props",
    ENTRY = "$Entry"
}