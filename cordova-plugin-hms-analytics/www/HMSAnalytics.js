"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HAParamType = exports.HAEventType = exports.HAUserProfileType = exports.LogLevelType = exports.ReportPolicyType = exports.disableLogger = exports.enableLogger = exports.enableLog = exports.isRestrictionEnabled = exports.setRestrictionEnabled = exports.getReportPolicyThreshold = exports.setReportPolicies = exports.pageEnd = exports.pageStart = exports.getUserProfiles = exports.getAAID = exports.clearCachedData = exports.onEvent = exports.setSessionDuration = exports.setMinActivitySessions = exports.setPushToken = exports.deleteUserProfile = exports.setUserProfile = exports.setUserId = exports.setAnalyticsEnabled = void 0;
const utils_1 = require("./utils");
///////////////////////////////////////////////////////////////////////////
// HMSAnalytics
///////////////////////////////////////////////////////////////////////////
const HMSAnalytics = 'HMSAnalytics';
const HMSAnalyticsModule = 'HMSAnalyticsModule';
/**
 * Specifies whether to enable event logging.
 * The default value is true.
 * <p>
 * If event logging is disabled, no data is recorded or analyzed.
 *
 * @param enabled : Indicates whether to enable event logging.
 */
function setAnalyticsEnabled(enabled) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setAnalyticsEnabled', { 'enabled': enabled }]);
}
exports.setAnalyticsEnabled = setAnalyticsEnabled;
/**
 * When the method is called, a new session is generated if the old value of id is not empty
 * and is different from the new value. If you do not want to use id to identify a user
 * (for example, when a user signs out), you must set id to null.
 *
 * @param id : User ID, a string containing a maximum of 256 characters.
 *           The value cannot be empty.
 *           {@param id} is used by Analytics Kit to associate user data.
 */
function setUserId(userId) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setUserId', { 'userId': userId }]);
}
exports.setUserId = setUserId;
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
function setUserProfile(name, value) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setUserProfile', { 'name': name, 'value': value }]);
}
exports.setUserProfile = setUserProfile;
/**
 * Delete user profile.
 *
 * @param name  :  Name of a user attribute
 */
function deleteUserProfile(name) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['deleteUserProfile', { 'name': name }]);
}
exports.deleteUserProfile = deleteUserProfile;
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
function setPushToken(token) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setPushToken', { 'token': token }]);
}
exports.setPushToken = setPushToken;
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
function setMinActivitySessions(milliseconds) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setMinActivitySessions', { 'milliseconds': milliseconds }]);
}
exports.setMinActivitySessions = setMinActivitySessions;
/**
 * Sets the session timeout interval.
 * A new session is generated when an app is running in the foreground but
 * the interval between two adjacent events exceeds the specified timeout interval.
 * By default, the timeout interval is 1,800,000 milliseconds (that is, 30 minutes).
 *
 * @param milliseconds : Session timeout interval, in milliseconds.
 */
function setSessionDuration(milliseconds) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setSessionDuration', { 'milliseconds': milliseconds }]);
}
exports.setSessionDuration = setSessionDuration;
/**
 * Records an event.
 *
 * @param eventId : Event ID, a string containing a maximum of 256 characters.
 *                The value cannot be empty or the ID of an automatically collected event.
 *                It can consist of digits, letters, and underscores (_) but cannot contain
 *                spaces or start with a digit.
 * @param params  :  Information carried in an event. The number of built-in key-value pairs
 */
function onEvent(eventId, params) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['onEvent', { 'eventId': eventId, 'params': params }]);
}
exports.onEvent = onEvent;
/**
 * Clears all collected data cached locally, including cached data that failed to be sent.
 */
function clearCachedData() {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['clearCachedData']);
}
exports.clearCachedData = clearCachedData;
/**
 * Obtains the app instance ID from AppGallery Connect.
 */
function getAAID() {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getAAID']);
}
exports.getAAID = getAAID;
/**
 * Obtains the automatically collected or custom user attributes.
 *
 * @param preDefined : Indicates whether to obtain the automatically collected or
 *                   custom user attributes.
 */
function getUserProfiles(predefined) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getUserProfiles', { 'predefined': predefined }]);
}
exports.getUserProfiles = getUserProfiles;
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
function pageStart(pageName, pageClassOverride) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['pageStart', { 'pageName': pageName, 'pageClassOverride': pageClassOverride }]);
}
exports.pageStart = pageStart;
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
function pageEnd(pageName) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['pageEnd', { 'pageName': pageName }]);
}
exports.pageEnd = pageEnd;
/**
 * Sets the automatic event reporting policy.
 *
 * @param reportPolicies : Policy for data reporting. Four policies are supported.
 *                       One or more policies can be specified.
 */
function setReportPolicies(reportPolicies) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setReportPolicies', { 'reportPolicies': reportPolicies }]);
}
exports.setReportPolicies = setReportPolicies;
/**
 * Obtains the threshold for event reporting.
 *
 * @param reportPolicyType : Event reporting policy name.
 *
 * @note This method is only to support on Android Platform.
 */
function getReportPolicyThreshold(reportPolicyType) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getReportPolicyThreshold', { 'reportPolicyType': reportPolicyType }]);
}
exports.getReportPolicyThreshold = getReportPolicyThreshold;
/**
 * Specifies whether to enable restriction of HUAWEI Analytics.
 * <p>
 * The default value is false, which indicates that HUAWEI Analytics is enabled by default.
 *
 * @param isEnabled : Indicates whether to enable restriction of HUAWEI Analytics.
 */
function setRestrictionEnabled(isEnabled) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setRestrictionEnabled', { 'isEnabled': isEnabled }]);
}
exports.setRestrictionEnabled = setRestrictionEnabled;
/**
 * Obtains the restriction status of HUAWEI Analytics.
 */
function isRestrictionEnabled() {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['isRestrictionEnabled']);
}
exports.isRestrictionEnabled = isRestrictionEnabled;
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
function enableLog(logLevel = LogLevelType.DEBUG) {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['enableLog', { 'logLevel': logLevel }]);
}
exports.enableLog = enableLog;
// HMSLogger
/**
 * This method enables HMSLogger capability which is used for sending usage analytics of
 * Analytics SDK's methods to improve the service quality.
 *
 * @note This method is only to support on Android Platform.
 */
function enableLogger() {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['enableLogger']);
}
exports.enableLogger = enableLogger;
/**
 * This method disables HMSLogger capability which is used for sending usage analytics of
 * Analytics SDK's methods to improve the service quality.
 *
 * @note This method is only to support on Android Platform.
 */
function disableLogger() {
    return utils_1.asyncExec(HMSAnalytics, HMSAnalyticsModule, ['disableLogger']);
}
exports.disableLogger = disableLogger;
///////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////
/**
 * ReportPolicy types
 */
var ReportPolicyType;
(function (ReportPolicyType) {
    ReportPolicyType["ON_SCHEDULED_TIME_POLICY"] = "ON_SCHEDULED_TIME_POLICY";
    ReportPolicyType["ON_APP_LAUNCH_POLICY"] = "ON_APP_LAUNCH_POLICY";
    ReportPolicyType["ON_MOVE_BACKGROUND_POLICY"] = "ON_MOVE_BACKGROUND_POLICY";
    ReportPolicyType["ON_CACHE_THRESHOLD_POLICY"] = "ON_CACHE_THRESHOLD_POLICY";
})(ReportPolicyType = exports.ReportPolicyType || (exports.ReportPolicyType = {}));
/**
 * HiAnalyticsTools log level enum.
 */
var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["DEBUG"] = 3] = "DEBUG";
    LogLevelType[LogLevelType["INFO"] = 4] = "INFO";
    LogLevelType[LogLevelType["WARN"] = 5] = "WARN";
    LogLevelType[LogLevelType["ERROR"] = 6] = "ERROR";
})(LogLevelType = exports.LogLevelType || (exports.LogLevelType = {}));
/**
 * HAUserProfileType types for provides constants that define the names of all predefined user attributes.
 */
var HAUserProfileType;
(function (HAUserProfileType) {
    HAUserProfileType["USERLEVEL"] = "user_level";
})(HAUserProfileType = exports.HAUserProfileType || (exports.HAUserProfileType = {}));
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
    HAEventType["NOVICEGUIDESTART"] = "$NoviceGuideStart";
    HAEventType["NOVICEGUIDEEND"] = "$NoviceGuideEnd";
    HAEventType["STARTGAME"] = "$StartGame";
    HAEventType["ENDGAME"] = "$EndGame";
    HAEventType["WINPROPS"] = "$WinProps";
    HAEventType["CONSUMEPROPS"] = "$ConsumeProps";
})(HAEventType = exports.HAEventType || (exports.HAEventType = {}));
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
    HAParamType["ACHIEVEMENTID"] = "$AchievementId";
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
    HAParamType["DURATION"] = "$Duration";
    HAParamType["LEVEL"] = "$Level";
    HAParamType["PURCHASEENTRY"] = "$PurchaseEntry";
    HAParamType["PROPS"] = "$Props";
    HAParamType["ENTRY"] = "$Entry";
})(HAParamType = exports.HAParamType || (exports.HAParamType = {}));
//# sourceMappingURL=HMSAnalytics.js.map