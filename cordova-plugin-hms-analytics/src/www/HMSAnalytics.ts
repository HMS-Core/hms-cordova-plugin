/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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
 * Initialize an Analytics Kit instance.
 * <p>
 * 
 * @param routePolicy? : Data processing location.
 * The options are CN (China), DE (Germany), SG (Singapore), and RU (Russia).
 */
export function getInstance(routePolicy?: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getInstance', { 'routePolicy': routePolicy }]);
}

/**
 * Specifies whether to enable event logging.
 * The default value is true.
 * <p>
 * If event logging is disabled, no data is recorded or analyzed.
 * 
 * @param enabled : Indicates whether to enable event logging.
 */
export function setAnalyticsEnabled(enabled?: boolean): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setAnalyticsEnabled', { 'enabled': enabled }]);
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
export function setUserId(userId: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setUserId', { 'userId': userId }]);
}

/**
 * Sets a custom referrer.
 * @important: This method takes effect only when it is called for the first time.
 * @param id : Custom referrer, a string containing a maximum of 256 characters. The value cannot be    empty.
 */
export function setCustomReferrer(customReferrer: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setCustomReferrer', { 'customReferrer': customReferrer }]);
}

/**
 * Sets a custom referrer.
 * @param channel:App installation source, a string containing a maximum of 128 characters.
 * The value cannot be empty. The value can consist of only letters, digits, underscores (_), hyphens (-), and spaces. It cannot start or end with a space.
 */
export function setChannel(channel: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setChannel', { 'channel': channel }]);
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
export function setUserProfile(name: string, value: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setUserProfile', { 'name': name, 'value': value }]);
}


/**
 * Sets whether to collect system attributes. Currently, this method applies only to the userAgent attribute.
 * @param property  :  System attribute. Only userAgent is supported now.
 * @param enabled : Indicates whether to collect system attributes. The default value is true.
 * true: yes
 * false: no
 */
export function setPropertyCollection(property: string, enabled?: boolean): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setPropertyCollection', { 'property': property, 'enabled': enabled }]);
}

/**
 * Delete user profile.
 *
 * @param name  :  Name of a user attribute
 */
export function deleteUserProfile(name: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['deleteUserProfile', { 'name': name }]);
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
export function setPushToken(token: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setPushToken', { 'token': token }]);
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
export function setMinActivitySessions(milliseconds: number): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setMinActivitySessions', { 'milliseconds': milliseconds }]);
}

/**
 * Sets the session timeout interval.
 * A new session is generated when an app is running in the foreground but
 * the interval between two adjacent events exceeds the specified timeout interval.
 * By default, the timeout interval is 1,800,000 milliseconds (that is, 30 minutes).
 *
 * @param milliseconds : Session timeout interval, in milliseconds.
 */
export function setSessionDuration(milliseconds: number): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setSessionDuration', { 'milliseconds': milliseconds }]);
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
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['onEvent', { 'eventId': eventId, 'params': params }]);
}

/**
 * Clears all collected data cached locally, including cached data that failed to be sent.
 */
export function clearCachedData(): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['clearCachedData']);
}

/**
 * Obtains the AAID from AppGallery Connect.
 */
export function getAAID(): Promise<string> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getAAID']);
}

/**
 * Obtains the processing location of the uploaded data.
 */
export function getDataUploadSiteInfo(): Promise<string> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getDataUploadSiteInfo']);
}

/**
 * Obtains the automatically collected or custom user attributes.
 *
 * @param preDefined : Indicates whether to obtain the automatically collected or
 *                   custom user attributes.
 */
export function getUserProfiles(predefined: boolean): Promise<UserProfiles> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getUserProfiles', { 'predefined': predefined }]);
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
export function pageStart(pageName: string, pageClassOverride: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['pageStart', { 'pageName': pageName, 'pageClassOverride': pageClassOverride }]);
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
export function pageEnd(pageName: string): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['pageEnd', { 'pageName': pageName }]);
}

/**
 * Sets the automatic event reporting policy.
 *
 * @param reportPolicies : Policy for data reporting. Four policies are supported.
 *                       One or more policies can be specified.
 */
export function setReportPolicies(reportPolicies: ReportPolicy): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setReportPolicies', { 'reportPolicies': reportPolicies }]);
}

/**
 * Obtains the threshold for event reporting.
 *
 * @param reportPolicyType : Event reporting policy name.
 * 
 * @note This method is only to support on Android Platform.
 */
export function getReportPolicyThreshold(reportPolicyType: ReportPolicyType): Promise<number> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['getReportPolicyThreshold', { 'reportPolicyType': reportPolicyType }]);
}

/**
 * Specifies whether to enable restriction of HUAWEI Analytics.
 * <p>
 * The default value is false, which indicates that HUAWEI Analytics is enabled by default.
 *
 * @param isEnabled : Indicates whether to enable restriction of HUAWEI Analytics.
 */
export function setRestrictionEnabled(isEnabled?: boolean): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setRestrictionEnabled', { 'isEnabled': isEnabled }]);
}

/**
 * Obtains the restriction status of HUAWEI Analytics.
 */
export function isRestrictionEnabled(): Promise<boolean> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['isRestrictionEnabled']);
}

/**
 * Sets whether to collect advertising identifiers.
 * 
 * @param isEnabled : Indicates whether to collect advertising identifiers.
 */
export function setCollectAdsIdEnabled(isEnabled?: boolean): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['setCollectAdsIdEnabled', { 'isEnabled': isEnabled }]);
}

/**
 * Adds default event parameters.
 * These parameters will be added to all events except the automatically collected events.
 * 
 * @param params : Default event parameters. 
 *              A maximum of 100 key-value pairs are supported. 
 *              The key in each key-value pair can contain a maximum of 256 characters and 
 *              can consist of only digits, letters, and underscores (_), but cannot start with a digit.
 */
export function addDefaultEventParams(params: EventParams): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['addDefaultEventParams', { 'params': params }]);
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
export function enableLog(logLevel: LogLevelType = LogLevelType.DEBUG): Promise<void> {
    return asyncExec(HMSAnalytics, HMSAnalyticsModule, ['enableLog', { 'logLevel': logLevel }]);
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
    "onScheduledTimePolicy"?: number,
    "onAppLaunchPolicy"?: boolean,
    "onMoveBackgroundPolicy"?: boolean,
    "onCacheThresholdPolicy"?: number
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
    USERLEVEL = "user_level",
    ISFULLLEVEL = "is_full_level",
    ISMEMBER = "is_member"
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
    REGISTERFAILED = "$RegisterFailed",
    PERMISSIONAPPLICATION = "$PermissionApplication",
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
    VIPCLICK = "$VipCclick",
    VIPFAILED = "$VipFailed",
    VIPSUC = "$VipSuc",
    OBTAINVOUCHER = "$ObtainVoucher",
    CONTACTCUSTOMSERVICE = "$ContactCustomService",
    RATE = "$Rate",
    INVITE = "$Invite",
    NOVICEGUIDESTART = "$NoviceGuideStart",
    NOVICEGUIDEEND = "$NoviceGuideEnd",
    STARTGAME = "$StartGame",
    ENDGAME = "$EndGame",
    WINPROPS = "$WinProps",
    CONSUMEPROPS = "$ConsumeProps",
    ADDFRIEND = "$AddFriend",
    ADDBLACKLIST = "$AddBlacklist",
    VIEWFRIENDLIST = "$ViewFriendList",
    QUITUSERGROUP = "$QuitUserGroup",
    CREATEUSERGROUP = "$CreateUserGroup",
    DISBANDUSERGROUP = "$DisbandUserGroup",
    UPGRADEUSERGROUP = "$UpgradeUserGroup",
    VIEWUSERGROUP = "$ViewUserGroup",
    JOINTEAM = "$JoinTeam",
    SENDMESSAGE = "$SendMessage",
    LEARNSKILL = "$LearnSkill",
    USESKILL = "$UseSkill",
    GETEQUIPMENT = "$GetEquipment",
    LOSEEQUIPMENT = "$LoseEquipment",
    ENHANCEEQUIPMENT = "$EnhanceEquipment",
    SWITCHCLASS = "$SwitchClass",
    ACCEPTTASK = "$AcceptTask",
    FINISHTASK = "$FinishTask",
    ATTENDACTIVITY = "$AttendActivity",
    FINISHCUTSCENE = "$FinishCutscene",
    SKIPCUTSCENE = "$SkipCutscene",
    GETPET = "$GetPet",
    LOSEPET = "$LosePet",
    ENHANCEPET = "$EnhancePet",
    GETMOUNT = "$GetMount",
    LOSEMOUNT = "$LoseMount",
    ENHANCEMOUNT = "$EnhanceMount",
    CREATEROLE = "$CreateRole",
    SIGNINROLE = "$SignInRole",
    SIGNOUTROLE = "$SignOutRole",
    STARTBATTLE = "$StartBattle",
    ENDBATTLE = "$EndBattle",
    STARTDUNGEON = "$StartDungeon",
    FINISHDUNGEON = "$FinishDungeon",
    VIEWPACKAGE = "$ViewPackage",
    REDEEM = "$Redeem",
    MODIFYSETTING = "$ModifySetting",
    WATCHVIDEO = "$WatchVideo",
    CLICKMESSAGE = "$ClickMessage",
    DRAWCARD = "$DrawCard",
    VIEWCARDLIST = "$ViewCardList",
    BINDACCOUNT = "$BindAccount",
    STARTEXERCISE = "$StartExercise",
    ENDEXERCISE = "$EndExercise",
    STARTPLAYMEDIA = "$StartPlayMedia",
    ENDPLAYMEDIA = "$EndPlayMedia",
    STARTEXAMINE = "$StartExamine",
    ENDEXAMINE = "$EndExamine",
    CHECKIN = "$CheckIn",
    COMPENSATION = "$Compensation",
    POST = "$Post",
    SHAREAPP = "$ShareApp",
    IMPROVEINFORMATION = "$ImproveInformation",
    VIEWHOUSELIST = "$ViewHouseList",
    VIEWHOUSEDETAIL = "$ViewHouseDetail",
    EXCHANGEGOODS = "$ExchangeGoods",
    BINDDEVICE = "$BindDevice",
    UNBINDDEVICE = "$UnBindDevice",
    RESERVEMAINTENANCE = "$ReserveMaintenance",
    DEVICEMISSINGREPORT = "$DeviceMissingReport",
    STARTBOOKING = "$StartBooking",
    LEARNTARGET = "$LearnTarget",
    LANGUAGETEST = "$LanguageTest",
    STARTTRAINING = "$StartTraining",
    ENDTRAINING = "$EndTraining",
    REGISTERACTIVITY = "$RegisterActivity",
    EXITACTIVITY = "$ExitActivity",
    COMPLETEACTIVITY = "$CompleteActivity",
    ENTERACCOUNTOPENING = "$EnterAccountOpening",
    SUBMITACCOUNTOPENING = "$SubmitAccountOpening",
    BANDCARD = "$BandCard",
    BANKTRANSFERIN = "$BankTransferIn",
    BANKTRANSFEROUT = "$BankTransferOut",
    VIEWSTOCKDETAIL = "$ViewStockDetail",
    TRADESTOCKS = "$TradeStocks",
    VIEWFINANCEPAGE = "$ViewFinancePage",
    PURCHASEFINANCE = "$PurchaseFinance",
    REDEMPTIONFINANCE = "$RedemptionFinance",
    FUNDTRADING = "$FundTrading",
    FIXEDINVESTMENT = "$Fixedinvestment",
    APPLYNEW = "$ApplyNew",
    VIEWINFORMATIONSECTION = "$ViewInformationSection",
    VIEWINFORMATION = "$ViewInformation",
    MODULARCLICK = "$ModularClick",
    PAGEVIEW = "$PageView",
    DISPLAYVOUCHER = "$DisplayVoucher",
    BOOKCOURSE = "$BookCourse",
    LEARNCOURSES = "$LearnCourses",
    TRYOUT = "$Tryout",
    ANSWER = "$Answer",
    COMMENTCONTENT = "$CommentContent",
    LIKECONTENT = "$LikeContent",
    DELETEPRODUCT2WISHLIST = "$DeleteProduct2WishList",
    ADCLICK = "$AdClick",
    ADDISPLAY = "$AdDisplay",
    ENABLEMEMBER = "$EnableMember",
    CANCELMEMBER = "$CancelMember",
    CLICKPURCHASE = "$ClickPurchase",
    VIEWFUNDPAGE = "$ViewFundPage"
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
    OCCURREDDATE = "$OccurredDate",
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
    ENTRY = "$Entry",
    INVITER = "$Inviter",
    VIPLEVEL = "$VIPLevel",
    FIRSTSIGNIN = "$FirstSignIn",
    DISCOUNT = "$Discount",
    FIRSTPAY = "$FirstPay",
    TASKID = "$TaskId",
    VIPCLICK = "$VipCclick",
    VIPLOCATION = "$VipLocation",
    VIPFAILED = "$VipFailed",
    VIPMONEY = "$VipMoney",
    REGISTERFAILED = "$RegisterFailed",
    PERMISSIONAPPLICATION=  "$PermissionApplication",
    FRIENDNUMBER = "$FriendNumber",
    USERGROUPNAME = "$UserGroupName",
    USERGROUPLEVEL = "$UserGroupLevel",
    MEMBERS = "$Members",
    LEVELBEFORE = "$LevelBefore",
    MESSAGETYPE = "$MessageType",
    ROLECOMBAT = "$RoleCombat",
    ISTOPLEVEL = "$IsTopLevel",
    ROLECLASS = "$RoleClass",
    SKILLNAME = "$SkillName",
    SKILLLEVEL = "$SkillLevel",
    SKILLLEVELBEFORE = "$SkillLevelBefore",
    EQUIPMENTID = "$EquipmentId",
    EQUIPMENTNAME = "$EquipmentName",
    EQUIPMENTLEVEL = "$EquipmentLevel",
    CLASSLIMIT = "$ClassLimit",
    LEVELLIMIT = "$LevelLimit",
    ISFREE = "$IsFree",
    TOTALAFTERCHANGE = "$TotalAfterChange",
    QUALITY = "$Quality",
    ENHANCETYPE = "$EnhanceType",
    NEWCLASS = "$NewClass",
    OLDCLASS = "$OldClass",
    TASKTYPE = "$TaskType",
    TASKNAME = "$TaskName",
    REWARD = "$Reward",
    ACTIVITYTYPE = "$ActivityType",
    ACTIVITYNAME = "$ActivityName",
    CUTSCENENAME = "$CutsceneName",
    PETID = "$PetId",
    PETDEFAULTNAME = "$PetDefaultName",
    PETLEVEL = "$PetLevel",
    MOUNTID = "$MountId",
    MOUNTDEFAULTNAME = "$MountDefaultName",
    MOUNTLEVEL = "$MountLevel",
    ROLEGENDER = "$RoleGender",
    SERVER = "$Server",
    FIRSTCREATE = "$FirstCreate",
    COMBAT = "$Combat",
    BATTLETYPE = "$BattleType",
    BATTLENAME = "$BattleName",
    NUMBEROFCARDS = "$NumberOfCards",
    CARDLIST = "$CardList",
    PARTICIPANTS = "$Participants",
    DIFFICULTY = "$Difficulty",
    MVP = "$MVP",
    DAMAGE = "$Damage",
    RANKING = "$Ranking",
    DUNGEONNAME = "$DungeonName",
    WINREASON = "$WinReason",
    BALANCE = "$Balance",
    PACKAGETYPE = "$PackageType",
    AMOUNT = "$Amount",
    ITEMLIST = "$ItemList",
    GIFTTYPE = "$GiftType",
    GIFTNAME = "$GiftName",
    TYPE = "$Type",
    OLDVALUE = "$OldValue",
    NEWVALUE = "$NewValue",
    VIDEOTYPE = "$VideoType",
    VIDEONAME = "$VideoName",
    MESSAGETITLE = "$MessageTitle",
    OPERATION = "$Operation",
    NUMBEROFDRAWING = "$NumberOfDrawing",
    LEFTPULLSFORGUARANTEE = "$LeftPullsForGuarantee",
    VIPTYPE = "$VIPType",
    VIPSTATUS = "$VIPStatus",
    VIPEXPIREDATE = "$VIPExpireDate",
    ENTER = "$Enter",
    STARTDATE = "$StartDate",
    EFFECTIVETIME = "$EffectiveTime",
    NAME = "$Name",
    MODE = "$Mode",
    SUBJECT = "$Subject",
    ACCURACY = "$Accuracy",
    CONTENTLENGTH = "$ContentLength",
    REMARK = "$Remark",
    CONTENTNAME = "$ContentName",
    SECTION = "$Section",
    DAYS = "$Days",
    POSTID = "$PostId",
    INFORMATIONTYPE = "$InformationType",
    INFORMATION = "$Information",
    FEATURE = "$Feature",
    ROOMS = "$Rooms",
    SALEPRICE = "$SalePrice",
    RENTFEE = "$RentFee",
    RENTTYPE = "$RentType",
    PAGENAME = "$PageName",
    SERIES = "$Series",
    MODEL = "$Model",
    DEVICETYPE = "$DeviceType",
    DEVICENAME = "$DeviceName",
    BINDDURATION = "$BindDuration",
    DEALERNAME = "$DealerName",
    ARRIVALDATE = "$ArrivalDate",
    BUYERTYPE = "$BuyerType",
    SEAT = "$Seat",
    ENERGY = "$Energy",
    CONFIGURATION = "$Configuration",
    ISLOAN = "$IsLoan",
    LOANPRODUCTNAME = "$LoanProductName",
    LOANCHANNEL = "$LoanChannel",
    REPAYMENTMETHOD = "$RepaymentMethod",
    ACTION = "$Action",
    PAGE = "$Page",
    INDEX = "$Index",
    MODULE = "$Module",
    SOURCEPAGE = "$SourcePage",
    SOURCEPAGENAME = "$SourcePageName",
    SOURCELOCATION = "$SourceLocation",
    CITY = "$City",
    FROMCITY = "$FromCity",
    TOCITY = "$ToCity",
    DEPARTUREDATE = "$DepartureDate",
    RETURNDATE = "$ReturnDate",
    TRIPTYPE = "$TripType",
    SEARCHHOTEL = "$SearchHotel",
    SPECIALTICKET = "$SpecialTicket",
    HASBABY = "$HasBaby",
    HASCHILDREN = "$HasChildren",
    COUNTRY = "$Country",
    STAR = "$Star",
    CHECKINDATE = "$CheckinDate",
    CHECKOUTDATE = "$CheckoutDate",
    ALDULTCOUNT = "$AldultCount",
    BABYCOUNT = "$BabyCount",
    CHILDRENCOUNT = "$ChildrenCount",
    FROM = "$From",
    CARMODE = "$CarMode",
    CARTIME = "$CarTime",
    FLIGHTID = "$FlightID",
    SEARCHRESULT = "$SearchResult",
    PRODUCT = "$Product",
    DEPARTURETIME = "$DepartureTime",
    ARRIVETIME = "$ArriveTime",
    DEPARTUREAIRPORT = "$DepartureAirport",
    ARRIVEEAIRPORT = "$ArriveeAirport",
    AIRLINE = "$Airline",
    FLIGHTTYPE = "$FlightType",
    DIRECTFLIGHT = "$DirectFlight",
    TRAINTYPE = "$TrainType",
    FROMSTATION = "$FromStation",
    BEDTYPE = "$BedType",
    BREAKFAST = "$Breakfast",
    ARRIVEDATE = "$ArriveDate",
    TRAINID = "$TrainID",
    HOTELID = "$HotelID",
    HOTELNAME = "$HotelName",
    TRIPTAG = "$TripTag",
    HOTELTYPE = "$HotelType",
    CABIN = "$Cabin",
    ROOMTYPE = "$RoomType",
    CARTYPE = "$CarType",
    SUPPLIER = "$Supplier",
    STUDENTCOUNT = "$StudentCount",
    ROOMCOUNT = "$RoomCount",
    PERSONCOUNT = "$PersonCount",
    VOUCHERID = "$VoucherID",
    VOUCHERNAME = "$VoucherName",
    VOUCHERPRICE = "$VoucherPrice",
    USERTYPE = "$UserType",
    TARGET = "$Target",
    ISCOMPELETED = "$IsCompeleted",
    USERLEVEL = "$UserLevel",
    TIME = "$Time",
    DISTANCE = "$Distance",
    CALORIECONSUMED = "$CalorieConsumed",
    PROGRESS = "$Progress",
    MULTIPLEACCOUNTS = "$MultipleAccounts",
    ACCOUNTTYPE = "$AccountType",
    FAILUREREASON = "$FailureReason",
    AUTHORITY = "$Authority",
    CARDTYPE = "$CardType",
    ISSUEBANK = "$IssueBank",
    TRANSFORMAMOUNT = "$TransformAmount",
    BANKNAME = "$BankName",
    SOURCEMODULE = "$SourceModule",
    STOCKCODE = "$Stockcode",
    STOCKNAME = "$Stockname",
    MARKETCODE = "$MarketCode",
    MARKETNAME = "$MarketName",
    VIEWTYPE = "$ViewType",
    TRENDCYCLE = "$TrendCycle",
    TRANSACTIONTYPE = "$TransactionType",
    CURRENCY = "$Currency",
    MONEY = "$Money",
    FINANCEID = "$FinanceId",
    FINANCENAME = "$FinanceName",
    FINANCETYPE = "$FinanceType",
    FINANCERATE = "$FinanceRate",
    FINANCETIMELIMIT = "$FinanceTimeLimit",
    FINANCEAMOUNTMIN = "$FinanceAmountMin",
    FINANCERISKLEV = "$FinanceRiskLev",
    PURCHASEAMOUNT = "$PurchaseAmount",
    HANDLINGFEES = "$HandlingFees",
    REDEMPTIONAMOUNT = "$RedemptionAmount",
    RETURNAMOUNT = "$ReturnAmount",
    FUNDCODE = "$FundCode",
    FUNDTYPE = "$FundType",
    FUNDNAME = "$FundName",
    FUNDRISKLEV = "$FundRiskLev",
    CHARGERATE = "$ChargeRate",
    PAYMENTMETHOD = "$PaymentMethod",
    FIXEDCYCLE = "$FixedCycle",
    ENTRANCE = "$Entrance",
    CODE = "$code",
    NEWSTOPIC = "$NewsTopic",
    INFORMATIONSOURCE = "$InformationSource",
    COMMENTSNUMBER = "$CommentsNumber",
    FORWARDINGNUMBER = "$forwardingNumber",
    LIKES = "$Likes",
    TITLE = "$Title",
    SEARCHTYPE = "$SearchType",
    LOCATION = "$Location",
    ID = "$Id",
    PLAYMODE = "$PlayMode",
    LISTS = "$Lists",
    ADLOCATION = "$Adlocation",
    ADCATEGORY = "$AdCategory",
    ADTHEME = "$AdTheme",
    BUTTONNAME = "$ButtonName",
    USERID = "$UserID",
    PAGECATEGORY = "$PageCategory",
    RATING = "$Rating",
    PERFORMANCE = "$Performance",
    TRADINGRULES = "$TradingRules",
    PORTFOLIO = "$Portfolio",
    INVESTMENTMANAGER = "$InvestmentManager",
    FUNDSIZE = "$FundSize"
}