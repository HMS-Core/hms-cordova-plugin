"use strict";
/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
exports.HAParamType = exports.HAEventType = exports.HAUserProfileType = exports.LogLevelType = exports.ReportPolicyType = exports.disableLogger = exports.enableLogger = exports.enableLog = exports.addDefaultEventParams = exports.setCollectAdsIdEnabled = exports.isRestrictionEnabled = exports.setRestrictionEnabled = exports.getReportPolicyThreshold = exports.setReportPolicies = exports.pageEnd = exports.pageStart = exports.getUserProfiles = exports.getAAID = exports.clearCachedData = exports.onEvent = exports.setSessionDuration = exports.setMinActivitySessions = exports.setPushToken = exports.deleteUserProfile = exports.setUserProfile = exports.setUserId = exports.setAnalyticsEnabled = exports.getInstance = void 0;
const utils_1 = require("./utils");
///////////////////////////////////////////////////////////////////////////
// HMSAnalytics
///////////////////////////////////////////////////////////////////////////
const HMSAnalytics = 'HMSAnalytics';
const HMSAnalyticsModule = 'HMSAnalyticsModule';
/**
 * Initialize an Analytics Kit instance.
 * <p>
 *
 * @param routePolicy? : Data processing location.
 * The options are CN (China), DE (Germany), SG (Singapore), and RU (Russia).
 */
function getInstance(routePolicy) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['getInstance', { 'routePolicy': routePolicy }]);
}
exports.getInstance = getInstance;
/**
 * Specifies whether to enable event logging.
 * The default value is true.
 * <p>
 * If event logging is disabled, no data is recorded or analyzed.
 *
 * @param enabled : Indicates whether to enable event logging.
 */
function setAnalyticsEnabled(enabled) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setAnalyticsEnabled', { 'enabled': enabled }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setUserId', { 'userId': userId }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setUserProfile', { 'name': name, 'value': value }]);
}
exports.setUserProfile = setUserProfile;
/**
 * Delete user profile.
 *
 * @param name  :  Name of a user attribute
 */
function deleteUserProfile(name) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['deleteUserProfile', { 'name': name }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setPushToken', { 'token': token }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setMinActivitySessions', { 'milliseconds': milliseconds }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setSessionDuration', { 'milliseconds': milliseconds }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['onEvent', { 'eventId': eventId, 'params': params }]);
}
exports.onEvent = onEvent;
/**
 * Clears all collected data cached locally, including cached data that failed to be sent.
 */
function clearCachedData() {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['clearCachedData']);
}
exports.clearCachedData = clearCachedData;
/**
 * Obtains the AAID from AppGallery Connect.
 */
function getAAID() {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['getAAID']);
}
exports.getAAID = getAAID;
/**
 * Obtains the automatically collected or custom user attributes.
 *
 * @param preDefined : Indicates whether to obtain the automatically collected or
 *                   custom user attributes.
 */
function getUserProfiles(predefined) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['getUserProfiles', { 'predefined': predefined }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['pageStart', { 'pageName': pageName, 'pageClassOverride': pageClassOverride }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['pageEnd', { 'pageName': pageName }]);
}
exports.pageEnd = pageEnd;
/**
 * Sets the automatic event reporting policy.
 *
 * @param reportPolicies : Policy for data reporting. Four policies are supported.
 *                       One or more policies can be specified.
 */
function setReportPolicies(reportPolicies) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setReportPolicies', { 'reportPolicies': reportPolicies }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['getReportPolicyThreshold', { 'reportPolicyType': reportPolicyType }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setRestrictionEnabled', { 'isEnabled': isEnabled }]);
}
exports.setRestrictionEnabled = setRestrictionEnabled;
/**
 * Obtains the restriction status of HUAWEI Analytics.
 */
function isRestrictionEnabled() {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['isRestrictionEnabled']);
}
exports.isRestrictionEnabled = isRestrictionEnabled;
/**
 * Sets whether to collect advertising identifiers.
 *
 * @param isEnabled : Indicates whether to collect advertising identifiers.
 */
function setCollectAdsIdEnabled(isEnabled) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['setCollectAdsIdEnabled', { 'isEnabled': isEnabled }]);
}
exports.setCollectAdsIdEnabled = setCollectAdsIdEnabled;
/**
 * Adds default event parameters.
 * These parameters will be added to all events except the automatically collected events.
 *
 * @param params : Default event parameters.
 *              A maximum of 100 key-value pairs are supported.
 *              The key in each key-value pair can contain a maximum of 256 characters and
 *              can consist of only digits, letters, and underscores (_), but cannot start with a digit.
 */
function addDefaultEventParams(params) {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['addDefaultEventParams', { 'params': params }]);
}
exports.addDefaultEventParams = addDefaultEventParams;
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['enableLog', { 'logLevel': logLevel }]);
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
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['enableLogger']);
}
exports.enableLogger = enableLogger;
/**
 * This method disables HMSLogger capability which is used for sending usage analytics of
 * Analytics SDK's methods to improve the service quality.
 *
 * @note This method is only to support on Android Platform.
 */
function disableLogger() {
    return (0, utils_1.asyncExec)(HMSAnalytics, HMSAnalyticsModule, ['disableLogger']);
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
    HAUserProfileType["ISFULLLEVEL"] = "is_full_level";
    HAUserProfileType["ISMEMBER"] = "is_member";
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
    HAEventType["ADDFRIEND"] = "$AddFriend";
    HAEventType["ADDBLACKLIST"] = "$AddBlacklist";
    HAEventType["VIEWFRIENDLIST"] = "$ViewFriendList";
    HAEventType["QUITUSERGROUP"] = "$QuitUserGroup";
    HAEventType["CREATEUSERGROUP"] = "$CreateUserGroup";
    HAEventType["DISBANDUSERGROUP"] = "$DisbandUserGroup";
    HAEventType["UPGRADEUSERGROUP"] = "$UpgradeUserGroup";
    HAEventType["VIEWUSERGROUP"] = "$ViewUserGroup";
    HAEventType["JOINTEAM"] = "$JoinTeam";
    HAEventType["SENDMESSAGE"] = "$SendMessage";
    HAEventType["LEARNSKILL"] = "$LearnSkill";
    HAEventType["USESKILL"] = "$UseSkill";
    HAEventType["GETEQUIPMENT"] = "$GetEquipment";
    HAEventType["LOSEEQUIPMENT"] = "$LoseEquipment";
    HAEventType["ENHANCEEQUIPMENT"] = "$EnhanceEquipment";
    HAEventType["SWITCHCLASS"] = "$SwitchClass";
    HAEventType["ACCEPTTASK"] = "$AcceptTask";
    HAEventType["FINISHTASK"] = "$FinishTask";
    HAEventType["ATTENDACTIVITY"] = "$AttendActivity";
    HAEventType["FINISHCUTSCENE"] = "$FinishCutscene";
    HAEventType["SKIPCUTSCENE"] = "$SkipCutscene";
    HAEventType["GETPET"] = "$GetPet";
    HAEventType["LOSEPET"] = "$LosePet";
    HAEventType["ENHANCEPET"] = "$EnhancePet";
    HAEventType["GETMOUNT"] = "$GetMount";
    HAEventType["LOSEMOUNT"] = "$LoseMount";
    HAEventType["ENHANCEMOUNT"] = "$EnhanceMount";
    HAEventType["CREATEROLE"] = "$CreateRole";
    HAEventType["SIGNINROLE"] = "$SignInRole";
    HAEventType["SIGNOUTROLE"] = "$SignOutRole";
    HAEventType["STARTBATTLE"] = "$StartBattle";
    HAEventType["ENDBATTLE"] = "$EndBattle";
    HAEventType["STARTDUNGEON"] = "$StartDungeon";
    HAEventType["FINISHDUNGEON"] = "$FinishDungeon";
    HAEventType["VIEWPACKAGE"] = "$ViewPackage";
    HAEventType["REDEEM"] = "$Redeem";
    HAEventType["MODIFYSETTING"] = "$ModifySetting";
    HAEventType["WATCHVIDEO"] = "$WatchVideo";
    HAEventType["CLICKMESSAGE"] = "$ClickMessage";
    HAEventType["DRAWCARD"] = "$DrawCard";
    HAEventType["VIEWCARDLIST"] = "$ViewCardList";
    HAEventType["BINDACCOUNT"] = "$BindAccount";
    HAEventType["STARTEXERCISE"] = "$StartExercise";
    HAEventType["ENDEXERCISE"] = "$EndExercise";
    HAEventType["STARTPLAYMEDIA"] = "$StartPlayMedia";
    HAEventType["ENDPLAYMEDIA"] = "$EndPlayMedia";
    HAEventType["STARTEXAMINE"] = "$StartExamine";
    HAEventType["ENDEXAMINE"] = "$EndExamine";
    HAEventType["CHECKIN"] = "$CheckIn";
    HAEventType["COMPENSATION"] = "$Compensation";
    HAEventType["POST"] = "$Post";
    HAEventType["SHAREAPP"] = "$ShareApp";
    HAEventType["IMPROVEINFORMATION"] = "$ImproveInformation";
    HAEventType["VIEWHOUSELIST"] = "$ViewHouseList";
    HAEventType["VIEWHOUSEDETAIL"] = "$ViewHouseDetail";
    HAEventType["EXCHANGEGOODS"] = "$ExchangeGoods";
    HAEventType["BINDDEVICE"] = "$BindDevice";
    HAEventType["UNBINDDEVICE"] = "$UnBindDevice";
    HAEventType["RESERVEMAINTENANCE"] = "$ReserveMaintenance";
    HAEventType["DEVICEMISSINGREPORT"] = "$DeviceMissingReport";
    HAEventType["STARTBOOKING"] = "$StartBooking";
    HAEventType["LEARNTARGET"] = "$LearnTarget";
    HAEventType["LANGUAGETEST"] = "$LanguageTest";
    HAEventType["STARTTRAINING"] = "$StartTraining";
    HAEventType["ENDTRAINING"] = "$EndTraining";
    HAEventType["REGISTERACTIVITY"] = "$RegisterActivity";
    HAEventType["EXITACTIVITY"] = "$ExitActivity";
    HAEventType["COMPLETEACTIVITY"] = "$CompleteActivity";
    HAEventType["ENTERACCOUNTOPENING"] = "$EnterAccountOpening";
    HAEventType["SUBMITACCOUNTOPENING"] = "$SubmitAccountOpening";
    HAEventType["BANDCARD"] = "$BandCard";
    HAEventType["BANKTRANSFERIN"] = "$BankTransferIn";
    HAEventType["BANKTRANSFEROUT"] = "$BankTransferOut";
    HAEventType["VIEWSTOCKDETAIL"] = "$ViewStockDetail";
    HAEventType["TRADESTOCKS"] = "$TradeStocks";
    HAEventType["VIEWFINANCEPAGE"] = "$ViewFinancePage";
    HAEventType["PURCHASEFINANCE"] = "$PurchaseFinance";
    HAEventType["REDEMPTIONFINANCE"] = "$RedemptionFinance";
    HAEventType["FUNDTRADING"] = "$FundTrading";
    HAEventType["FIXEDINVESTMENT"] = "$Fixedinvestment";
    HAEventType["APPLYNEW"] = "$ApplyNew";
    HAEventType["VIEWINFORMATIONSECTION"] = "$ViewInformationSection";
    HAEventType["VIEWINFORMATION"] = "$ViewInformation";
    HAEventType["MODULARCLICK"] = "$ModularClick";
    HAEventType["PAGEVIEW"] = "$PageView";
    HAEventType["DISPLAYVOUCHER"] = "$DisplayVoucher";
    HAEventType["BOOKCOURSE"] = "$BookCourse";
    HAEventType["LEARNCOURSES"] = "$LearnCourses";
    HAEventType["TRYOUT"] = "$Tryout";
    HAEventType["ANSWER"] = "$Answer";
    HAEventType["COMMENTCONTENT"] = "$CommentContent";
    HAEventType["LIKECONTENT"] = "$LikeContent";
    HAEventType["DELETEPRODUCT2WISHLIST"] = "$DeleteProduct2WishList";
    HAEventType["ADCLICK"] = "$AdClick";
    HAEventType["ADDISPLAY"] = "$AdDisplay";
    HAEventType["ENABLEMEMBER"] = "$EnableMember";
    HAEventType["CANCELMEMBER"] = "$CancelMember";
    HAEventType["CLICKPURCHASE"] = "$ClickPurchase";
    HAEventType["VIEWFUNDPAGE"] = "$ViewFundPage";
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
    HAParamType["OCCURREDDATE"] = "$OccurredDate";
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
    HAParamType["INVITER"] = "$Inviter";
    HAParamType["VIPLEVEL"] = "$VIPLevel";
    HAParamType["FIRSTSIGNIN"] = "$FirstSignIn";
    HAParamType["DISCOUNT"] = "$Discount";
    HAParamType["FIRSTPAY"] = "$FirstPay";
    HAParamType["TASKID"] = "$TaskId";
    HAParamType["FRIENDNUMBER"] = "$FriendNumber";
    HAParamType["USERGROUPNAME"] = "$UserGroupName";
    HAParamType["USERGROUPLEVEL"] = "$UserGroupLevel";
    HAParamType["MEMBERS"] = "$Members";
    HAParamType["LEVELBEFORE"] = "$LevelBefore";
    HAParamType["MESSAGETYPE"] = "$MessageType";
    HAParamType["ROLECOMBAT"] = "$RoleCombat";
    HAParamType["ISTOPLEVEL"] = "$IsTopLevel";
    HAParamType["ROLECLASS"] = "$RoleClass";
    HAParamType["SKILLNAME"] = "$SkillName";
    HAParamType["SKILLLEVEL"] = "$SkillLevel";
    HAParamType["SKILLLEVELBEFORE"] = "$SkillLevelBefore";
    HAParamType["EQUIPMENTID"] = "$EquipmentId";
    HAParamType["EQUIPMENTNAME"] = "$EquipmentName";
    HAParamType["EQUIPMENTLEVEL"] = "$EquipmentLevel";
    HAParamType["CLASSLIMIT"] = "$ClassLimit";
    HAParamType["LEVELLIMIT"] = "$LevelLimit";
    HAParamType["ISFREE"] = "$IsFree";
    HAParamType["TOTALAFTERCHANGE"] = "$TotalAfterChange";
    HAParamType["QUALITY"] = "$Quality";
    HAParamType["ENHANCETYPE"] = "$EnhanceType";
    HAParamType["NEWCLASS"] = "$NewClass";
    HAParamType["OLDCLASS"] = "$OldClass";
    HAParamType["TASKTYPE"] = "$TaskType";
    HAParamType["TASKNAME"] = "$TaskName";
    HAParamType["REWARD"] = "$Reward";
    HAParamType["ACTIVITYTYPE"] = "$ActivityType";
    HAParamType["ACTIVITYNAME"] = "$ActivityName";
    HAParamType["CUTSCENENAME"] = "$CutsceneName";
    HAParamType["PETID"] = "$PetId";
    HAParamType["PETDEFAULTNAME"] = "$PetDefaultName";
    HAParamType["PETLEVEL"] = "$PetLevel";
    HAParamType["MOUNTID"] = "$MountId";
    HAParamType["MOUNTDEFAULTNAME"] = "$MountDefaultName";
    HAParamType["MOUNTLEVEL"] = "$MountLevel";
    HAParamType["ROLEGENDER"] = "$RoleGender";
    HAParamType["SERVER"] = "$Server";
    HAParamType["FIRSTCREATE"] = "$FirstCreate";
    HAParamType["COMBAT"] = "$Combat";
    HAParamType["BATTLETYPE"] = "$BattleType";
    HAParamType["BATTLENAME"] = "$BattleName";
    HAParamType["NUMBEROFCARDS"] = "$NumberOfCards";
    HAParamType["CARDLIST"] = "$CardList";
    HAParamType["PARTICIPANTS"] = "$Participants";
    HAParamType["DIFFICULTY"] = "$Difficulty";
    HAParamType["MVP"] = "$MVP";
    HAParamType["DAMAGE"] = "$Damage";
    HAParamType["RANKING"] = "$Ranking";
    HAParamType["DUNGEONNAME"] = "$DungeonName";
    HAParamType["WINREASON"] = "$WinReason";
    HAParamType["BALANCE"] = "$Balance";
    HAParamType["PACKAGETYPE"] = "$PackageType";
    HAParamType["AMOUNT"] = "$Amount";
    HAParamType["ITEMLIST"] = "$ItemList";
    HAParamType["GIFTTYPE"] = "$GiftType";
    HAParamType["GIFTNAME"] = "$GiftName";
    HAParamType["TYPE"] = "$Type";
    HAParamType["OLDVALUE"] = "$OldValue";
    HAParamType["NEWVALUE"] = "$NewValue";
    HAParamType["VIDEOTYPE"] = "$VideoType";
    HAParamType["VIDEONAME"] = "$VideoName";
    HAParamType["MESSAGETITLE"] = "$MessageTitle";
    HAParamType["OPERATION"] = "$Operation";
    HAParamType["NUMBEROFDRAWING"] = "$NumberOfDrawing";
    HAParamType["LEFTPULLSFORGUARANTEE"] = "$LeftPullsForGuarantee";
    HAParamType["VIPTYPE"] = "$VIPType";
    HAParamType["VIPSTATUS"] = "$VIPStatus";
    HAParamType["VIPEXPIREDATE"] = "$VIPExpireDate";
    HAParamType["ENTER"] = "$Enter";
    HAParamType["STARTDATE"] = "$StartDate";
    HAParamType["EFFECTIVETIME"] = "$EffectiveTime";
    HAParamType["NAME"] = "$Name";
    HAParamType["MODE"] = "$Mode";
    HAParamType["SUBJECT"] = "$Subject";
    HAParamType["ACCURACY"] = "$Accuracy";
    HAParamType["CONTENTLENGTH"] = "$ContentLength";
    HAParamType["REMARK"] = "$Remark";
    HAParamType["CONTENTNAME"] = "$ContentName";
    HAParamType["SECTION"] = "$Section";
    HAParamType["DAYS"] = "$Days";
    HAParamType["POSTID"] = "$PostId";
    HAParamType["INFORMATIONTYPE"] = "$InformationType";
    HAParamType["INFORMATION"] = "$Information";
    HAParamType["FEATURE"] = "$Feature";
    HAParamType["ROOMS"] = "$Rooms";
    HAParamType["SALEPRICE"] = "$SalePrice";
    HAParamType["RENTFEE"] = "$RentFee";
    HAParamType["RENTTYPE"] = "$RentType";
    HAParamType["PAGENAME"] = "$PageName";
    HAParamType["SERIES"] = "$Series";
    HAParamType["MODEL"] = "$Model";
    HAParamType["DEVICETYPE"] = "$DeviceType";
    HAParamType["DEVICENAME"] = "$DeviceName";
    HAParamType["BINDDURATION"] = "$BindDuration";
    HAParamType["DEALERNAME"] = "$DealerName";
    HAParamType["ARRIVALDATE"] = "$ArrivalDate";
    HAParamType["BUYERTYPE"] = "$BuyerType";
    HAParamType["SEAT"] = "$Seat";
    HAParamType["ENERGY"] = "$Energy";
    HAParamType["CONFIGURATION"] = "$Configuration";
    HAParamType["ISLOAN"] = "$IsLoan";
    HAParamType["LOANPRODUCTNAME"] = "$LoanProductName";
    HAParamType["LOANCHANNEL"] = "$LoanChannel";
    HAParamType["REPAYMENTMETHOD"] = "$RepaymentMethod";
    HAParamType["ACTION"] = "$Action";
    HAParamType["PAGE"] = "$Page";
    HAParamType["INDEX"] = "$Index";
    HAParamType["MODULE"] = "$Module";
    HAParamType["SOURCEPAGE"] = "$SourcePage";
    HAParamType["SOURCEPAGENAME"] = "$SourcePageName";
    HAParamType["SOURCELOCATION"] = "$SourceLocation";
    HAParamType["CITY"] = "$City";
    HAParamType["FROMCITY"] = "$FromCity";
    HAParamType["TOCITY"] = "$ToCity";
    HAParamType["DEPARTUREDATE"] = "$DepartureDate";
    HAParamType["RETURNDATE"] = "$ReturnDate";
    HAParamType["TRIPTYPE"] = "$TripType";
    HAParamType["SEARCHHOTEL"] = "$SearchHotel";
    HAParamType["SPECIALTICKET"] = "$SpecialTicket";
    HAParamType["HASBABY"] = "$HasBaby";
    HAParamType["HASCHILDREN"] = "$HasChildren";
    HAParamType["COUNTRY"] = "$Country";
    HAParamType["STAR"] = "$Star";
    HAParamType["CHECKINDATE"] = "$CheckinDate";
    HAParamType["CHECKOUTDATE"] = "$CheckoutDate";
    HAParamType["ALDULTCOUNT"] = "$AldultCount";
    HAParamType["BABYCOUNT"] = "$BabyCount";
    HAParamType["CHILDRENCOUNT"] = "$ChildrenCount";
    HAParamType["FROM"] = "$From";
    HAParamType["CARMODE"] = "$CarMode";
    HAParamType["CARTIME"] = "$CarTime";
    HAParamType["FLIGHTID"] = "$FlightID";
    HAParamType["SEARCHRESULT"] = "$SearchResult";
    HAParamType["PRODUCT"] = "$Product";
    HAParamType["DEPARTURETIME"] = "$DepartureTime";
    HAParamType["ARRIVETIME"] = "$ArriveTime";
    HAParamType["DEPARTUREAIRPORT"] = "$DepartureAirport";
    HAParamType["ARRIVEEAIRPORT"] = "$ArriveeAirport";
    HAParamType["AIRLINE"] = "$Airline";
    HAParamType["FLIGHTTYPE"] = "$FlightType";
    HAParamType["DIRECTFLIGHT"] = "$DirectFlight";
    HAParamType["TRAINTYPE"] = "$TrainType";
    HAParamType["FROMSTATION"] = "$FromStation";
    HAParamType["BEDTYPE"] = "$BedType";
    HAParamType["BREAKFAST"] = "$Breakfast";
    HAParamType["ARRIVEDATE"] = "$ArriveDate";
    HAParamType["TRAINID"] = "$TrainID";
    HAParamType["HOTELID"] = "$HotelID";
    HAParamType["HOTELNAME"] = "$HotelName";
    HAParamType["TRIPTAG"] = "$TripTag";
    HAParamType["HOTELTYPE"] = "$HotelType";
    HAParamType["CABIN"] = "$Cabin";
    HAParamType["ROOMTYPE"] = "$RoomType";
    HAParamType["CARTYPE"] = "$CarType";
    HAParamType["SUPPLIER"] = "$Supplier";
    HAParamType["STUDENTCOUNT"] = "$StudentCount";
    HAParamType["ROOMCOUNT"] = "$RoomCount";
    HAParamType["PERSONCOUNT"] = "$PersonCount";
    HAParamType["VOUCHERID"] = "$VoucherID";
    HAParamType["VOUCHERNAME"] = "$VoucherName";
    HAParamType["VOUCHERPRICE"] = "$VoucherPrice";
    HAParamType["USERTYPE"] = "$UserType";
    HAParamType["TARGET"] = "$Target";
    HAParamType["ISCOMPELETED"] = "$IsCompeleted";
    HAParamType["USERLEVEL"] = "$UserLevel";
    HAParamType["TIME"] = "$Time";
    HAParamType["DISTANCE"] = "$Distance";
    HAParamType["CALORIECONSUMED"] = "$CalorieConsumed";
    HAParamType["PROGRESS"] = "$Progress";
    HAParamType["MULTIPLEACCOUNTS"] = "$MultipleAccounts";
    HAParamType["ACCOUNTTYPE"] = "$AccountType";
    HAParamType["FAILUREREASON"] = "$FailureReason";
    HAParamType["AUTHORITY"] = "$Authority";
    HAParamType["CARDTYPE"] = "$CardType";
    HAParamType["ISSUEBANK"] = "$IssueBank";
    HAParamType["TRANSFORMAMOUNT"] = "$TransformAmount";
    HAParamType["BANKNAME"] = "$BankName";
    HAParamType["SOURCEMODULE"] = "$SourceModule";
    HAParamType["STOCKCODE"] = "$Stockcode";
    HAParamType["STOCKNAME"] = "$Stockname";
    HAParamType["MARKETCODE"] = "$MarketCode";
    HAParamType["MARKETNAME"] = "$MarketName";
    HAParamType["VIEWTYPE"] = "$ViewType";
    HAParamType["TRENDCYCLE"] = "$TrendCycle";
    HAParamType["TRANSACTIONTYPE"] = "$TransactionType";
    HAParamType["CURRENCY"] = "$Currency";
    HAParamType["MONEY"] = "$Money";
    HAParamType["FINANCEID"] = "$FinanceId";
    HAParamType["FINANCENAME"] = "$FinanceName";
    HAParamType["FINANCETYPE"] = "$FinanceType";
    HAParamType["FINANCERATE"] = "$FinanceRate";
    HAParamType["FINANCETIMELIMIT"] = "$FinanceTimeLimit";
    HAParamType["FINANCEAMOUNTMIN"] = "$FinanceAmountMin";
    HAParamType["FINANCERISKLEV"] = "$FinanceRiskLev";
    HAParamType["PURCHASEAMOUNT"] = "$PurchaseAmount";
    HAParamType["HANDLINGFEES"] = "$HandlingFees";
    HAParamType["REDEMPTIONAMOUNT"] = "$RedemptionAmount";
    HAParamType["RETURNAMOUNT"] = "$ReturnAmount";
    HAParamType["FUNDCODE"] = "$FundCode";
    HAParamType["FUNDTYPE"] = "$FundType";
    HAParamType["FUNDNAME"] = "$FundName";
    HAParamType["FUNDRISKLEV"] = "$FundRiskLev";
    HAParamType["CHARGERATE"] = "$ChargeRate";
    HAParamType["PAYMENTMETHOD"] = "$PaymentMethod";
    HAParamType["FIXEDCYCLE"] = "$FixedCycle";
    HAParamType["ENTRANCE"] = "$Entrance";
    HAParamType["CODE"] = "$code";
    HAParamType["NEWSTOPIC"] = "$NewsTopic";
    HAParamType["INFORMATIONSOURCE"] = "$InformationSource";
    HAParamType["COMMENTSNUMBER"] = "$CommentsNumber";
    HAParamType["FORWARDINGNUMBER"] = "$forwardingNumber";
    HAParamType["LIKES"] = "$Likes";
    HAParamType["TITLE"] = "$Title";
    HAParamType["SEARCHTYPE"] = "$SearchType";
    HAParamType["LOCATION"] = "$Location";
    HAParamType["ID"] = "$Id";
    HAParamType["PLAYMODE"] = "$PlayMode";
    HAParamType["LISTS"] = "$Lists";
    HAParamType["ADLOCATION"] = "$Adlocation";
    HAParamType["ADCATEGORY"] = "$AdCategory";
    HAParamType["ADTHEME"] = "$AdTheme";
    HAParamType["BUTTONNAME"] = "$ButtonName";
    HAParamType["USERID"] = "$UserID";
    HAParamType["PAGECATEGORY"] = "$PageCategory";
    HAParamType["RATING"] = "$Rating";
    HAParamType["PERFORMANCE"] = "$Performance";
    HAParamType["TRADINGRULES"] = "$TradingRules";
    HAParamType["PORTFOLIO"] = "$Portfolio";
    HAParamType["INVESTMENTMANAGER"] = "$InvestmentManager";
    HAParamType["FUNDSIZE"] = "$FundSize";
})(HAParamType = exports.HAParamType || (exports.HAParamType = {}));
