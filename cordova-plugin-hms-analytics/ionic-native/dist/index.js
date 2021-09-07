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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(HMSAnalyticsOriginal, _super);
    function HMSAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAnalyticsOriginal.prototype.setAnalyticsEnabled = function (enabled) { return cordova(this, "setAnalyticsEnabled", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setUserProfile = function (name, value) { return cordova(this, "setUserProfile", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.deleteUserProfile = function (name) { return cordova(this, "deleteUserProfile", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setPushToken = function (token) { return cordova(this, "setPushToken", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setMinActivitySessions = function (milliseconds) { return cordova(this, "setMinActivitySessions", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setSessionDuration = function (milliseconds) { return cordova(this, "setSessionDuration", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.onEvent = function (eventId, params) { return cordova(this, "onEvent", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.clearCachedData = function () { return cordova(this, "clearCachedData", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.getAAID = function () { return cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.getUserProfiles = function (predefined) { return cordova(this, "getUserProfiles", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.pageStart = function (pageName, pageClassOverride) { return cordova(this, "pageStart", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.pageEnd = function (pageName) { return cordova(this, "pageEnd", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setReportPolicies = function (reportPolicies) { return cordova(this, "setReportPolicies", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.getReportPolicyThreshold = function (reportPolicyType) { return cordova(this, "getReportPolicyThreshold", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setRestrictionEnabled = function (isEnabled) { return cordova(this, "setRestrictionEnabled", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.isRestrictionEnabled = function () { return cordova(this, "isRestrictionEnabled", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.addDefaultEventParams = function (params) { return cordova(this, "addDefaultEventParams", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.enableLog = function (logLevel) {
        if (logLevel === void 0) { logLevel = LogLevelType.DEBUG; }
        return cordova(this, "enableLog", { "otherPromise": true }, arguments);
    };
    HMSAnalyticsOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.pluginName = "HMSAnalytics";
    HMSAnalyticsOriginal.plugin = "cordova-plugin-hms-analytics";
    HMSAnalyticsOriginal.pluginRef = "HMSAnalytics";
    HMSAnalyticsOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSAnalyticsOriginal.platforms = ["Android", "iOS"];
    return HMSAnalyticsOriginal;
}(IonicNativePlugin));
var HMSAnalytics = new HMSAnalyticsOriginal();
export { HMSAnalytics };
/**
 * ReportPolicy types
 */
export var ReportPolicyType;
(function (ReportPolicyType) {
    ReportPolicyType["ON_SCHEDULED_TIME_POLICY"] = "ON_SCHEDULED_TIME_POLICY";
    ReportPolicyType["ON_APP_LAUNCH_POLICY"] = "ON_APP_LAUNCH_POLICY";
    ReportPolicyType["ON_MOVE_BACKGROUND_POLICY"] = "ON_MOVE_BACKGROUND_POLICY";
    ReportPolicyType["ON_CACHE_THRESHOLD_POLICY"] = "ON_CACHE_THRESHOLD_POLICY";
})(ReportPolicyType || (ReportPolicyType = {}));
///////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////
/**
 * HiAnalyticsTools log level enum.
 */
export var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["DEBUG"] = 3] = "DEBUG";
    LogLevelType[LogLevelType["INFO"] = 4] = "INFO";
    LogLevelType[LogLevelType["WARN"] = 5] = "WARN";
    LogLevelType[LogLevelType["ERROR"] = 6] = "ERROR";
})(LogLevelType || (LogLevelType = {}));
/**
* HAUserProfileType types for provides constants that define the names of all predefined user attributes.
*/
export var HAUserProfileType;
(function (HAUserProfileType) {
    HAUserProfileType["USERLEVEL"] = "user_level";
    HAUserProfileType["ISFULLLEVEL"] = "is_full_level";
})(HAUserProfileType || (HAUserProfileType = {}));
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
export var HAEventType;
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
})(HAEventType || (HAEventType = {}));
/**
* HAParamType types for provides the IDs of all predefined parameters,
* including the IDs of predefined parameters and user attributes.
*/
export var HAParamType;
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
    HAParamType["VIPTYPE"] = "$VipType";
    HAParamType["VIPSTATUS"] = "$VipStatus";
    HAParamType["VIPEXPIREDATE"] = "$VipExpireDate";
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
})(HAParamType || (HAParamType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQVV0QyxnQ0FBaUI7Ozs7SUFHakQsMENBQW1CLGFBQUMsT0FBZ0I7SUFLcEMsZ0NBQVMsYUFBQyxNQUFjO0lBS3hCLHFDQUFjLGFBQUMsSUFBWSxFQUFFLEtBQWE7SUFLMUMsd0NBQWlCLGFBQUMsSUFBWTtJQUs5QixtQ0FBWSxhQUFDLEtBQWE7SUFLMUIsNkNBQXNCLGFBQUMsWUFBb0I7SUFLM0MseUNBQWtCLGFBQUMsWUFBb0I7SUFLdkMsOEJBQU8sYUFBQyxPQUE2QixFQUFFLE1BQWlDO0lBS3hFLHNDQUFlO0lBS2YsOEJBQU87SUFLUCxzQ0FBZSxhQUFDLFVBQW1CO0lBS25DLGdDQUFTLGFBQUMsUUFBZ0IsRUFBRSxpQkFBeUI7SUFLckQsOEJBQU8sYUFBQyxRQUFnQjtJQUt4Qix3Q0FBaUIsYUFBQyxjQUE0QjtJQUs5QywrQ0FBd0IsYUFBQyxnQkFBa0M7SUFLM0QsNENBQXFCLGFBQUMsU0FBa0I7SUFLeEMsMkNBQW9CO0lBS3BCLDRDQUFxQixhQUFDLE1BQW1CO0lBS3pDLGdDQUFTLGFBQUMsUUFBMkM7UUFBM0MseUJBQUEsRUFBQSxXQUF5QixZQUFZLENBQUMsS0FBSzs7O0lBS3JELG1DQUFZO0lBS1osb0NBQWE7Ozs7Ozt1QkFsSWY7RUEyQmtDLGlCQUFpQjtTQUF0QyxZQUFZO0FBOEh6Qjs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDMUIseUVBQXFELENBQUE7SUFDckQsaUVBQTZDLENBQUE7SUFDN0MsMkVBQXVELENBQUE7SUFDdkQsMkVBQXVELENBQUE7QUFDekQsQ0FBQyxFQUxXLGdCQUFn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LCtCQUFnQixDQUFBO0lBQ2hCLHFDQUFzQixDQUFBO0lBQ3RCLDJDQUE0QixDQUFBO0lBQzVCLHFDQUFzQixDQUFBO0lBQ3RCLHFDQUFzQixDQUFBO0lBQ3RCLGlDQUFrQixDQUFBO0lBQ2xCLDZDQUE4QixDQUFBO0lBQzlCLCtDQUFnQyxDQUFBO0lBQ2hDLGlEQUFrQyxDQUFBO0lBQ2xDLG1DQUFvQixDQUFBO0lBQ3BCLDJDQUE0QixDQUFBO0lBQzVCLDJDQUE0QixDQUFBO0lBQzVCLHlDQUEwQixDQUFBO0lBQzFCLHlDQUEwQixDQUFBO0lBQzFCLHVDQUF3QixDQUFBO0lBQ3hCLHVDQUF3QixDQUFBO0lBQ3hCLHlDQUEwQixDQUFBO0lBQzFCLHFEQUFzQyxDQUFBO0lBQ3RDLDJDQUE0QixDQUFBO0lBQzVCLCtDQUFnQyxDQUFBO0lBQ2hDLGlEQUFrQyxDQUFBO0lBQ2xDLHlDQUEwQixDQUFBO0lBQzFCLHlDQUEwQixDQUFBO0lBQzFCLGlDQUFrQixDQUFBO0lBQ2xCLHFEQUFzQyxDQUFBO0lBQ3RDLG1DQUFvQixDQUFBO0lBQ3BCLDJDQUE0QixDQUFBO0lBQzVCLHFDQUFzQixDQUFBO0lBQ3RCLHFDQUFzQixDQUFBO0lBQ3RCLHFDQUFzQixDQUFBO0lBQ3RCLHFDQUFzQixDQUFBO0lBQ3RCLGlDQUFrQixDQUFBO0lBQ2xCLDZDQUE4QixDQUFBO0lBQzlCLDZDQUE4QixDQUFBO0lBQzlCLDZDQUE4QixDQUFBO0lBQzlCLCtCQUFnQixDQUFBO0lBQ2hCLGlEQUFrQyxDQUFBO0lBQ2xDLHFDQUFzQixDQUFBO0lBQ3RCLG1DQUFvQixDQUFBO0lBQ3BCLHFEQUFzQyxDQUFBO0lBQ3RDLHlDQUEwQixDQUFBO0lBQzFCLHlDQUEwQixDQUFBO0lBQzFCLGlDQUFrQixDQUFBO0lBQ2xCLDJDQUE0QixDQUFBO0lBQzVCLGlDQUFrQixDQUFBO0lBQ2xCLHlDQUEwQixDQUFBO0lBQzFCLHlDQUEwQixDQUFBO0lBQzFCLCtDQUFnQyxDQUFBO0lBQ2hDLHFDQUFzQixDQUFBO0lBQ3RCLDZDQUE4QixDQUFBO0lBQzlCLHlDQUEwQixDQUFBO0lBQzFCLDJCQUFZLENBQUE7SUFDWixpQ0FBa0IsQ0FBQTtJQUNsQixtQ0FBb0IsQ0FBQTtJQUNwQiwyQ0FBNEIsQ0FBQTtJQUM1Qix1Q0FBd0IsQ0FBQTtJQUN4QixtQ0FBb0IsQ0FBQTtJQUNwQiwyQ0FBNEIsQ0FBQTtJQUM1QixpQ0FBa0IsQ0FBQTtJQUNsQixxQ0FBc0IsQ0FBQTtJQUN0QixxQ0FBc0IsQ0FBQTtJQUN0QixxQ0FBc0IsQ0FBQTtJQUN0Qiw2QkFBYyxDQUFBO0lBQ2QscUNBQXNCLENBQUE7SUFDdEIscUNBQXNCLENBQUE7SUFDdEIsdUNBQXdCLENBQUE7SUFDeEIsdUNBQXdCLENBQUE7SUFDeEIsNkNBQThCLENBQUE7SUFDOUIsdUNBQXdCLENBQUE7SUFDeEIsbURBQW9DLENBQUE7SUFDcEMsK0RBQWdELENBQUE7SUFDaEQsbUNBQW9CLENBQUE7SUFDcEIsdUNBQXdCLENBQUE7SUFDeEIsK0NBQWdDLENBQUE7SUFDaEMsK0JBQWdCLENBQUE7SUFDaEIsdUNBQXdCLENBQUE7SUFDeEIsK0NBQWdDLENBQUE7SUFDaEMsNkJBQWMsQ0FBQTtJQUNkLDZCQUFjLENBQUE7SUFDZCxtQ0FBb0IsQ0FBQTtJQUNwQixxQ0FBc0IsQ0FBQTtJQUN0QiwrQ0FBZ0MsQ0FBQTtJQUNoQyxpQ0FBa0IsQ0FBQTtJQUNsQiwyQ0FBNEIsQ0FBQTtJQUM1QixtQ0FBb0IsQ0FBQTtJQUNwQiw2QkFBYyxDQUFBO0lBQ2QsaUNBQWtCLENBQUE7SUFDbEIsbURBQW9DLENBQUE7SUFDcEMsMkNBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQWpLVyxXQUFXLEtBQVgsV0FBVyxRQWlLdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU0FuYWx5dGljcycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWFuYWx5dGljcycsXHJcbiAgcGx1Z2luUmVmOiAnSE1TQW5hbHl0aWNzJyxcclxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0FuYWx5dGljcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRBbmFseXRpY3NFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFVzZXJQcm9maWxlKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkZWxldGVVc2VyUHJvZmlsZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0UHVzaFRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0TWluQWN0aXZpdHlTZXNzaW9ucyhtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRTZXNzaW9uRHVyYXRpb24obWlsbGlzZWNvbmRzOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25FdmVudChldmVudElkOiBIQUV2ZW50VHlwZSB8IHN0cmluZywgcGFyYW1zOiBIQVBhcmFtVHlwZSB8IEV2ZW50UGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNsZWFyQ2FjaGVkRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRVc2VyUHJvZmlsZXMocHJlZGVmaW5lZDogYm9vbGVhbik6IFByb21pc2U8VXNlclByb2ZpbGVzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHBhZ2VTdGFydChwYWdlTmFtZTogc3RyaW5nLCBwYWdlQ2xhc3NPdmVycmlkZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHBhZ2VFbmQocGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRSZXBvcnRQb2xpY2llcyhyZXBvcnRQb2xpY2llczogUmVwb3J0UG9saWN5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFJlcG9ydFBvbGljeVRocmVzaG9sZChyZXBvcnRQb2xpY3lUeXBlOiBSZXBvcnRQb2xpY3lUeXBlKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0UmVzdHJpY3Rpb25FbmFibGVkKGlzRW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBpc1Jlc3RyaWN0aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgYWRkRGVmYXVsdEV2ZW50UGFyYW1zKHBhcmFtczogRXZlbnRQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nKGxvZ0xldmVsOiBMb2dMZXZlbFR5cGUgPSBMb2dMZXZlbFR5cGUuREVCVUcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBEYXRhIFR5cGVzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyaWNPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgdHlwZSBVc2VyUHJvZmlsZXMgPSBHZW5lcmljT2JqZWN0O1xyXG5leHBvcnQgdHlwZSBFdmVudFBhcmFtcyA9IEdlbmVyaWNPYmplY3Q7XHJcbi8qKlxyXG4gKiBSZXBvcnRQb2xpY3kgdHlwZXMgZm9yIFNldHMgYXV0b21hdGljIGV2ZW50IHJlcG9ydGluZyBwb2xpY2llcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVwb3J0UG9saWN5IHtcclxuICBcIm9uU2NoZWR1bGVkVGltZVBvbGljeVwiID8gOiBudW1iZXIsXHJcbiAgXCJvbkFwcExhdW5jaFBvbGljeVwiID8gOiBib29sZWFuLFxyXG4gIFwib25Nb3ZlQmFja2dyb3VuZFBvbGljeVwiID8gOiBib29sZWFuLFxyXG4gIFwib25DYWNoZVRocmVzaG9sZFBvbGljeVwiID8gOiBudW1iZXJcclxufVxyXG4vKipcclxuICogUmVwb3J0UG9saWN5IHR5cGVzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBSZXBvcnRQb2xpY3lUeXBlIHtcclxuICBPTl9TQ0hFRFVMRURfVElNRV9QT0xJQ1kgPSBcIk9OX1NDSEVEVUxFRF9USU1FX1BPTElDWVwiLFxyXG4gIE9OX0FQUF9MQVVOQ0hfUE9MSUNZID0gXCJPTl9BUFBfTEFVTkNIX1BPTElDWVwiLFxyXG4gIE9OX01PVkVfQkFDS0dST1VORF9QT0xJQ1kgPSBcIk9OX01PVkVfQkFDS0dST1VORF9QT0xJQ1lcIixcclxuICBPTl9DQUNIRV9USFJFU0hPTERfUE9MSUNZID0gXCJPTl9DQUNIRV9USFJFU0hPTERfUE9MSUNZXCJcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIENvbnN0YW50c1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLyoqXHJcbiAqIEhpQW5hbHl0aWNzVG9vbHMgbG9nIGxldmVsIGVudW0uXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2dMZXZlbFR5cGUge1xyXG4gIERFQlVHID0gMyxcclxuICBJTkZPID0gNCxcclxuICBXQVJOID0gNSxcclxuICBFUlJPUiA9IDZcclxufVxyXG4vKipcclxuKiBIQVVzZXJQcm9maWxlVHlwZSB0eXBlcyBmb3IgcHJvdmlkZXMgY29uc3RhbnRzIHRoYXQgZGVmaW5lIHRoZSBuYW1lcyBvZiBhbGwgcHJlZGVmaW5lZCB1c2VyIGF0dHJpYnV0ZXMuXHJcbiovXHJcbmV4cG9ydCBlbnVtIEhBVXNlclByb2ZpbGVUeXBlIHtcclxuICBVU0VSTEVWRUwgPSBcInVzZXJfbGV2ZWxcIixcclxuICBJU0ZVTExMRVZFTCA9IFwiaXNfZnVsbF9sZXZlbFwiXHJcbn1cclxuLyoqXHJcbiAqIEhBRXZlbnRUeXBlIHR5cGVzIGZvciBwcm92aWRlcyB0aGUgSURzIG9mIGFsbCBwcmVkZWZpbmVkIGV2ZW50cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEhBRXZlbnRUeXBlIHtcclxuICBDUkVBVEVQQVlNRU5USU5GTyA9IFwiJENyZWF0ZVBheW1lbnRJbmZvXCIsXHJcbiAgQUREUFJPRFVDVDJDQVJUID0gXCIkQWRkUHJvZHVjdDJDYXJ0XCIsXHJcbiAgQUREUFJPRFVDVDJXSVNITElTVCA9IFwiJEFkZFByb2R1Y3QyV2lzaExpc3RcIixcclxuICBTVEFSVEFQUCA9IFwiJFN0YXJ0QXBwXCIsXHJcbiAgU1RBUlRDSEVDS09VVCA9IFwiJFN0YXJ0Q2hlY2tvdXRcIixcclxuICBWSUVXQ0FNUEFJR04gPSBcIiRWaWV3Q2FtcGFpZ25cIixcclxuICBWSUVXQ0hFQ0tPVVRTVEVQID0gXCIkVmlld0NoZWNrb3V0U3RlcFwiLFxyXG4gIFdJTlZJUlRVQUxDT0lOID0gXCIkV2luVmlydHVhbENvaW5cIixcclxuICBDT01QTEVURVBVUkNIQVNFID0gXCIkQ29tcGxldGVQdXJjaGFzZVwiLFxyXG4gIE9CVEFJTkxFQURTID0gXCIkT2J0YWluTGVhZHNcIixcclxuICBKT0lOVVNFUkdST1VQID0gXCIkSm9pblVzZXJHcm91cFwiLFxyXG4gIENPTVBMRVRFTEVWRUwgPSBcIiRDb21wbGV0ZUxldmVsXCIsXHJcbiAgU1RBUlRMRVZFTCA9IFwiJFN0YXJ0TGV2ZWxcIixcclxuICBVUEdSQURFTEVWRUwgPSBcIiRVcGdyYWRlTGV2ZWxcIixcclxuICBTSUdOSU4gPSBcIiRTaWduSW5cIixcclxuICBTSUdOT1VUID0gXCIkU2lnbk91dFwiLFxyXG4gIFNVQk1JVFNDT1JFID0gXCIkU3VibWl0U2NvcmVcIixcclxuICBDUkVBVEVPUkRFUiA9IFwiJENyZWF0ZU9yZGVyXCIsXHJcbiAgUkVGVU5ET1JERVIgPSBcIiRSZWZ1bmRPcmRlclwiLFxyXG4gIERFTFBST0RVQ1RGUk9NQ0FSVCA9IFwiJERlbFByb2R1Y3RGcm9tQ2FydFwiLFxyXG4gIFNFQVJDSCA9IFwiJFNlYXJjaFwiLFxyXG4gIFZJRVdDT05URU5UID0gXCIkVmlld0NvbnRlbnRcIixcclxuICBVUERBVEVDSEVDS09VVE9QVElPTiA9IFwiJFVwZGF0ZUNoZWNrb3V0T3B0aW9uXCIsXHJcbiAgU0hBUkVDT05URU5UID0gXCIkU2hhcmVDb250ZW50XCIsXHJcbiAgUkVHSVNURVJBQ0NPVU5UID0gXCIkUmVnaXN0ZXJBY2NvdW50XCIsXHJcbiAgQ09OU1VNRVZJUlRVQUxDT0lOID0gXCIkQ29uc3VtZVZpcnR1YWxDb2luXCIsXHJcbiAgU1RBUlRUVVRPUklBTCA9IFwiJFN0YXJ0VHV0b3JpYWxcIixcclxuICBDT01QTEVURVRVVE9SSUFMID0gXCIkQ29tcGxldGVUdXRvcmlhbFwiLFxyXG4gIE9CVEFJTkFDSElFVkVNRU5UID0gXCIkT2J0YWluQWNoaWV2ZW1lbnRcIixcclxuICBWSUVXUFJPRFVDVCA9IFwiJFZpZXdQcm9kdWN0XCIsXHJcbiAgVklFV1BST0RVQ1RMSVNUID0gXCIkVmlld1Byb2R1Y3RMaXN0XCIsXHJcbiAgVklFV1NFQVJDSFJFU1VMVCA9IFwiJFZpZXdTZWFyY2hSZXN1bHRcIixcclxuICBVUERBVEVNRU1CRVJTSElQTEVWRUwgPSBcIiRVcGRhdGVNZW1iZXJzaGlwTGV2ZWxcIixcclxuICBGSUxUUkFURVBST0RVQ1QgPSBcIiRGaWx0cmF0ZVByb2R1Y3RcIixcclxuICBWSUVXQ0FURUdPUlkgPSBcIiRWaWV3Q2F0ZWdvcnlcIixcclxuICBVUERBVEVPUkRFUiA9IFwiJFVwZGF0ZU9yZGVyXCIsXHJcbiAgQ0FOQ0VMT1JERVIgPSBcIiRDYW5jZWxPcmRlclwiLFxyXG4gIENPTVBMRVRFT1JERVIgPSBcIiRDb21wbGV0ZU9yZGVyXCIsXHJcbiAgQ0FOQ0VMQ0hFQ0tPVVQgPSBcIiRDYW5jZWxDaGVja291dFwiLFxyXG4gIE9CVEFJTlZPVUNIRVIgPSBcIiRPYnRhaW5Wb3VjaGVyXCIsXHJcbiAgQ09OVEFDVENVU1RPTVNFUlZJQ0UgPSBcIiRDb250YWN0Q3VzdG9tU2VydmljZVwiLFxyXG4gIFJBVEUgPSBcIiRSYXRlXCIsXHJcbiAgSU5WSVRFID0gXCIkSW52aXRlXCIsXHJcbiAgTk9WSUNFR1VJREVTVEFSVCA9IFwiJE5vdmljZUd1aWRlU3RhcnRcIixcclxuICBOT1ZJQ0VHVUlERUVORCA9IFwiJE5vdmljZUd1aWRlRW5kXCIsXHJcbiAgU1RBUlRHQU1FID0gXCIkU3RhcnRHYW1lXCIsXHJcbiAgRU5ER0FNRSA9IFwiJEVuZEdhbWVcIixcclxuICBXSU5QUk9QUyA9IFwiJFdpblByb3BzXCIsXHJcbiAgQ09OU1VNRVBST1BTID0gXCIkQ29uc3VtZVByb3BzXCIsXHJcbiAgQURERlJJRU5EID0gXCIkQWRkRnJpZW5kXCIsXHJcbiAgQUREQkxBQ0tMSVNUID0gXCIkQWRkQmxhY2tsaXN0XCIsXHJcbiAgVklFV0ZSSUVORExJU1QgPSBcIiRWaWV3RnJpZW5kTGlzdFwiLFxyXG4gIFFVSVRVU0VSR1JPVVAgPSBcIiRRdWl0VXNlckdyb3VwXCIsXHJcbiAgQ1JFQVRFVVNFUkdST1VQID0gXCIkQ3JlYXRlVXNlckdyb3VwXCIsXHJcbiAgRElTQkFORFVTRVJHUk9VUCA9IFwiJERpc2JhbmRVc2VyR3JvdXBcIixcclxuICBVUEdSQURFVVNFUkdST1VQID0gXCIkVXBncmFkZVVzZXJHcm91cFwiLFxyXG4gIFZJRVdVU0VSR1JPVVAgPSBcIiRWaWV3VXNlckdyb3VwXCIsXHJcbiAgSk9JTlRFQU0gPSBcIiRKb2luVGVhbVwiLFxyXG4gIFNFTkRNRVNTQUdFID0gXCIkU2VuZE1lc3NhZ2VcIixcclxuICBMRUFSTlNLSUxMID0gXCIkTGVhcm5Ta2lsbFwiLFxyXG4gIFVTRVNLSUxMID0gXCIkVXNlU2tpbGxcIixcclxuICBHRVRFUVVJUE1FTlQgPSBcIiRHZXRFcXVpcG1lbnRcIixcclxuICBMT1NFRVFVSVBNRU5UID0gXCIkTG9zZUVxdWlwbWVudFwiLFxyXG4gIEVOSEFOQ0VFUVVJUE1FTlQgPSBcIiRFbmhhbmNlRXF1aXBtZW50XCIsXHJcbiAgU1dJVENIQ0xBU1MgPSBcIiRTd2l0Y2hDbGFzc1wiLFxyXG4gIEFDQ0VQVFRBU0sgPSBcIiRBY2NlcHRUYXNrXCIsXHJcbiAgRklOSVNIVEFTSyA9IFwiJEZpbmlzaFRhc2tcIixcclxuICBBVFRFTkRBQ1RJVklUWSA9IFwiJEF0dGVuZEFjdGl2aXR5XCIsXHJcbiAgRklOSVNIQ1VUU0NFTkUgPSBcIiRGaW5pc2hDdXRzY2VuZVwiLFxyXG4gIFNLSVBDVVRTQ0VORSA9IFwiJFNraXBDdXRzY2VuZVwiLFxyXG4gIEdFVFBFVCA9IFwiJEdldFBldFwiLFxyXG4gIExPU0VQRVQgPSBcIiRMb3NlUGV0XCIsXHJcbiAgRU5IQU5DRVBFVCA9IFwiJEVuaGFuY2VQZXRcIixcclxuICBHRVRNT1VOVCA9IFwiJEdldE1vdW50XCIsXHJcbiAgTE9TRU1PVU5UID0gXCIkTG9zZU1vdW50XCIsXHJcbiAgRU5IQU5DRU1PVU5UID0gXCIkRW5oYW5jZU1vdW50XCIsXHJcbiAgQ1JFQVRFUk9MRSA9IFwiJENyZWF0ZVJvbGVcIixcclxuICBTSUdOSU5ST0xFID0gXCIkU2lnbkluUm9sZVwiLFxyXG4gIFNJR05PVVRST0xFID0gXCIkU2lnbk91dFJvbGVcIixcclxuICBTVEFSVEJBVFRMRSA9IFwiJFN0YXJ0QmF0dGxlXCIsXHJcbiAgRU5EQkFUVExFID0gXCIkRW5kQmF0dGxlXCIsXHJcbiAgU1RBUlREVU5HRU9OID0gXCIkU3RhcnREdW5nZW9uXCIsXHJcbiAgRklOSVNIRFVOR0VPTiA9IFwiJEZpbmlzaER1bmdlb25cIixcclxuICBWSUVXUEFDS0FHRSA9IFwiJFZpZXdQYWNrYWdlXCIsXHJcbiAgUkVERUVNID0gXCIkUmVkZWVtXCIsXHJcbiAgTU9ESUZZU0VUVElORyA9IFwiJE1vZGlmeVNldHRpbmdcIixcclxuICBXQVRDSFZJREVPID0gXCIkV2F0Y2hWaWRlb1wiLFxyXG4gIENMSUNLTUVTU0FHRSA9IFwiJENsaWNrTWVzc2FnZVwiLFxyXG4gIERSQVdDQVJEID0gXCIkRHJhd0NhcmRcIixcclxuICBWSUVXQ0FSRExJU1QgPSBcIiRWaWV3Q2FyZExpc3RcIixcclxuICBCSU5EQUNDT1VOVCA9IFwiJEJpbmRBY2NvdW50XCIsXHJcbiAgU1RBUlRFWEVSQ0lTRSA9IFwiJFN0YXJ0RXhlcmNpc2VcIixcclxuICBFTkRFWEVSQ0lTRSA9IFwiJEVuZEV4ZXJjaXNlXCIsXHJcbiAgU1RBUlRQTEFZTUVESUEgPSBcIiRTdGFydFBsYXlNZWRpYVwiLFxyXG4gIEVORFBMQVlNRURJQSA9IFwiJEVuZFBsYXlNZWRpYVwiLFxyXG4gIFNUQVJURVhBTUlORSA9IFwiJFN0YXJ0RXhhbWluZVwiLFxyXG4gIEVOREVYQU1JTkUgPSBcIiRFbmRFeGFtaW5lXCIsXHJcbiAgQ0hFQ0tJTiA9IFwiJENoZWNrSW5cIixcclxuICBDT01QRU5TQVRJT04gPSBcIiRDb21wZW5zYXRpb25cIixcclxuICBQT1NUID0gXCIkUG9zdFwiLFxyXG4gIFNIQVJFQVBQID0gXCIkU2hhcmVBcHBcIixcclxuICBJTVBST1ZFSU5GT1JNQVRJT04gPSBcIiRJbXByb3ZlSW5mb3JtYXRpb25cIlxyXG59XHJcblxyXG4vKipcclxuKiBIQVBhcmFtVHlwZSB0eXBlcyBmb3IgcHJvdmlkZXMgdGhlIElEcyBvZiBhbGwgcHJlZGVmaW5lZCBwYXJhbWV0ZXJzLCBcclxuKiBpbmNsdWRpbmcgdGhlIElEcyBvZiBwcmVkZWZpbmVkIHBhcmFtZXRlcnMgYW5kIHVzZXIgYXR0cmlidXRlcy5cclxuKi9cclxuZXhwb3J0IGVudW0gSEFQYXJhbVR5cGUge1xyXG4gIFNUT1JFTkFNRSA9IFwiJFN0b3JlTmFtZVwiLFxyXG4gIEJSQU5EID0gXCIkQnJhbmRcIixcclxuICBDQVRFR09SWSA9IFwiJENhdGVnb3J5XCIsXHJcbiAgUFJPRFVDVElEID0gXCIkUHJvZHVjdElkXCIsXHJcbiAgUFJPRFVDVE5BTUUgPSBcIiRQcm9kdWN0TmFtZVwiLFxyXG4gIFBST0RVQ1RGRUFUVVJFID0gXCIkUHJvZHVjdEZlYXR1cmVcIixcclxuICBQUklDRSA9IFwiJFByaWNlXCIsXHJcbiAgUVVBTlRJVFkgPSBcIiRRdWFudGl0eVwiLFxyXG4gIFJFVkVOVUUgPSBcIiRSZXZlbnVlXCIsXHJcbiAgQ1VSUk5BTUUgPSBcIiRDdXJyTmFtZVwiLFxyXG4gIFBMQUNFSUQgPSBcIiRQbGFjZUlkXCIsXHJcbiAgREVTVElOQVRJT04gPSBcIiREZXN0aW5hdGlvblwiLFxyXG4gIEVORERBVEUgPSBcIiRFbmREYXRlXCIsXHJcbiAgQk9PS0lOR0RBWVMgPSBcIiRCb29raW5nRGF5c1wiLFxyXG4gIFBBU1NFTkdFUlNOVU1CRVIgPSBcIiRQYXNzZW5nZXJzTnVtYmVyXCIsXHJcbiAgQk9PS0lOR1JPT01TID0gXCIkQm9va2luZ1Jvb21zXCIsXHJcbiAgT1JJR0lOQVRJTkdQTEFDRSA9IFwiJE9yaWdpbmF0aW5nUGxhY2VcIixcclxuICBCRUdJTkRBVEUgPSBcIiRCZWdpbkRhdGVcIixcclxuICBUUkFOU0FDVElPTklEID0gXCIkVHJhbnNhY3Rpb25JZFwiLFxyXG4gIENMQVNTID0gXCIkQ2xhc3NcIixcclxuICBDTElDS0lEID0gXCIkQ2xpY2tJZFwiLFxyXG4gIFBST01PVElPTk5BTUUgPSBcIiRQcm9tb3Rpb25OYW1lXCIsXHJcbiAgQ09OVEVOVCA9IFwiJENvbnRlbnRcIixcclxuICBFWFRFTkRQQVJBTSA9IFwiJEV4dGVuZFBhcmFtXCIsXHJcbiAgTUFURVJJQUxOQU1FID0gXCIkTWF0ZXJpYWxOYW1lXCIsXHJcbiAgTUFURVJJQUxTTE9UID0gXCIkTWF0ZXJpYWxTbG90XCIsXHJcbiAgTUVESVVNID0gXCIkTWVkaXVtXCIsXHJcbiAgU09VUkNFID0gXCIkU291cmNlXCIsXHJcbiAgS0VZV09SRFMgPSBcIiRLZXl3b3Jkc1wiLFxyXG4gIE9QVElPTiA9IFwiJE9wdGlvblwiLFxyXG4gIFNURVAgPSBcIiRTdGVwXCIsXHJcbiAgVklSVFVBTENVUlJOQU1FID0gXCIkVmlydHVhbEN1cnJOYW1lXCIsXHJcbiAgVk9VQ0hFUiA9IFwiJFZvdWNoZXJcIixcclxuICBQTEFDRSA9IFwiJFBsYWNlXCIsXHJcbiAgU0hJUFBJTkcgPSBcIiRTaGlwcGluZ1wiLFxyXG4gIFRBWEZFRSA9IFwiJFRheEZlZVwiLFxyXG4gIFVTRVJHUk9VUElEID0gXCIkVXNlckdyb3VwSWRcIixcclxuICBMRVZFTE5BTUUgPSBcIiRMZXZlbE5hbWVcIixcclxuICBSRVNVTFQgPSBcIiRSZXN1bHRcIixcclxuICBST0xFTkFNRSA9IFwiJFJvbGVOYW1lXCIsXHJcbiAgTEVWRUxJRCA9IFwiJExldmVsSWRcIixcclxuICBDSEFOTkVMID0gXCIkQ2hhbm5lbFwiLFxyXG4gIFNDT1JFID0gXCIkU2NvcmVcIixcclxuICBTRUFSQ0hLRVlXT1JEUyA9IFwiJFNlYXJjaEtleXdvcmRzXCIsXHJcbiAgQ09OVEVOVFRZUEUgPSBcIiRDb250ZW50VHlwZVwiLFxyXG4gIEFDSElFVkVNRU5USUQgPSBcIiRBY2hpZXZlbWVudElkXCIsXHJcbiAgRkxJR0hUTk8gPSBcIiRGbGlnaHROb1wiLFxyXG4gIFBPU0lUSU9OSUQgPSBcIiRQb3NpdGlvbklkXCIsXHJcbiAgUFJPRFVDVExJU1QgPSBcIiRQcm9kdWN0TGlzdFwiLFxyXG4gIEFDT1VOVFRZUEUgPSBcIiRBY291bnRUeXBlXCIsXHJcbiAgRVZUUkVTVUxUID0gXCIkRXZ0UmVzdWx0XCIsXHJcbiAgUFJFVkxFVkVMID0gXCIkUHJldkxldmVsXCIsXHJcbiAgQ1VSUlZMRVZFTCA9IFwiJEN1cnJ2TGV2ZWxcIixcclxuICBWT1VDSEVSUyA9IFwiJFZvdWNoZXJzXCIsXHJcbiAgTUFURVJJQUxTTE9UVFlQRSA9IFwiJE1hdGVyaWFsU2xvdFR5cGVcIixcclxuICBMSVNUSUQgPSBcIiRMaXN0SWRcIixcclxuICBGSUxURVJTID0gXCIkRmlsdGVyc1wiLFxyXG4gIFNPUlRTID0gXCIkU29ydHNcIixcclxuICBPUkRFUklEID0gXCIkT3JkZXJJZFwiLFxyXG4gIFBBWVRZUEUgPSBcIiRQYXlUeXBlXCIsXHJcbiAgUkVBU09OID0gXCIkUmVhc29uXCIsXHJcbiAgRVhQSVJFREFURSA9IFwiJEV4cGlyZURhdGVcIixcclxuICBWT1VDSEVSVFlQRSA9IFwiJFZvdWNoZXJUeXBlXCIsXHJcbiAgU0VSVklDRVRZUEUgPSBcIiRTZXJ2aWNlVHlwZVwiLFxyXG4gIERFVEFJTFMgPSBcIiREZXRhaWxzXCIsXHJcbiAgQ09NTUVOVFRZUEUgPSBcIiRDb21tZW50VHlwZVwiLFxyXG4gIFJFR0lTVE1FVEhPRCA9IFwiJFJlZ2lzdE1ldGhvZFwiLFxyXG4gIERVUkFUSU9OID0gXCIkRHVyYXRpb25cIixcclxuICBMRVZFTCA9IFwiJExldmVsXCIsXHJcbiAgUFVSQ0hBU0VFTlRSWSA9IFwiJFB1cmNoYXNlRW50cnlcIixcclxuICBQUk9QUyA9IFwiJFByb3BzXCIsXHJcbiAgRU5UUlkgPSBcIiRFbnRyeVwiLFxyXG4gIFZJUExFVkVMID0gXCIkVklQTGV2ZWxcIixcclxuICBGSVJTVFNJR05JTiA9IFwiJEZpcnN0U2lnbkluXCIsXHJcbiAgRElTQ09VTlQgPSBcIiREaXNjb3VudFwiLFxyXG4gIEZJUlNUUEFZID0gXCIkRmlyc3RQYXlcIixcclxuICBUQVNLSUQgPSBcIiRUYXNrSWRcIixcclxuICBGUklFTkROVU1CRVIgPSBcIiRGcmllbmROdW1iZXJcIixcclxuICBVU0VSR1JPVVBOQU1FID0gXCIkVXNlckdyb3VwTmFtZVwiLFxyXG4gIFVTRVJHUk9VUExFVkVMID0gXCIkVXNlckdyb3VwTGV2ZWxcIixcclxuICBNRU1CRVJTID0gXCIkTWVtYmVyc1wiLFxyXG4gIExFVkVMQkVGT1JFID0gXCIkTGV2ZWxCZWZvcmVcIixcclxuICBNRVNTQUdFVFlQRSA9IFwiJE1lc3NhZ2VUeXBlXCIsXHJcbiAgUk9MRUNPTUJBVCA9IFwiJFJvbGVDb21iYXRcIixcclxuICBJU1RPUExFVkVMID0gXCIkSXNUb3BMZXZlbFwiLFxyXG4gIFJPTEVDTEFTUyA9IFwiJFJvbGVDbGFzc1wiLFxyXG4gIFNLSUxMTkFNRSA9IFwiJFNraWxsTmFtZVwiLFxyXG4gIFNLSUxMTEVWRUwgPSBcIiRTa2lsbExldmVsXCIsXHJcbiAgU0tJTExMRVZFTEJFRk9SRSA9IFwiJFNraWxsTGV2ZWxCZWZvcmVcIixcclxuICBFUVVJUE1FTlRJRCA9IFwiJEVxdWlwbWVudElkXCIsXHJcbiAgRVFVSVBNRU5UTkFNRSA9IFwiJEVxdWlwbWVudE5hbWVcIixcclxuICBFUVVJUE1FTlRMRVZFTCA9IFwiJEVxdWlwbWVudExldmVsXCIsXHJcbiAgQ0xBU1NMSU1JVCA9IFwiJENsYXNzTGltaXRcIixcclxuICBMRVZFTExJTUlUID0gXCIkTGV2ZWxMaW1pdFwiLFxyXG4gIElTRlJFRSA9IFwiJElzRnJlZVwiLFxyXG4gIFRPVEFMQUZURVJDSEFOR0UgPSBcIiRUb3RhbEFmdGVyQ2hhbmdlXCIsXHJcbiAgUVVBTElUWSA9IFwiJFF1YWxpdHlcIixcclxuICBFTkhBTkNFVFlQRSA9IFwiJEVuaGFuY2VUeXBlXCIsXHJcbiAgTkVXQ0xBU1MgPSBcIiROZXdDbGFzc1wiLFxyXG4gIE9MRENMQVNTID0gXCIkT2xkQ2xhc3NcIixcclxuICBUQVNLVFlQRSA9IFwiJFRhc2tUeXBlXCIsXHJcbiAgVEFTS05BTUUgPSBcIiRUYXNrTmFtZVwiLFxyXG4gIFJFV0FSRCA9IFwiJFJld2FyZFwiLFxyXG4gIEFDVElWSVRZVFlQRSA9IFwiJEFjdGl2aXR5VHlwZVwiLFxyXG4gIEFDVElWSVRZTkFNRSA9IFwiJEFjdGl2aXR5TmFtZVwiLFxyXG4gIENVVFNDRU5FTkFNRSA9IFwiJEN1dHNjZW5lTmFtZVwiLFxyXG4gIFBFVElEID0gXCIkUGV0SWRcIixcclxuICBQRVRERUZBVUxUTkFNRSA9IFwiJFBldERlZmF1bHROYW1lXCIsXHJcbiAgUEVUTEVWRUwgPSBcIiRQZXRMZXZlbFwiLFxyXG4gIE1PVU5USUQgPSBcIiRNb3VudElkXCIsXHJcbiAgTU9VTlRERUZBVUxUTkFNRSA9IFwiJE1vdW50RGVmYXVsdE5hbWVcIixcclxuICBNT1VOVExFVkVMID0gXCIkTW91bnRMZXZlbFwiLFxyXG4gIFJPTEVHRU5ERVIgPSBcIiRSb2xlR2VuZGVyXCIsXHJcbiAgU0VSVkVSID0gXCIkU2VydmVyXCIsXHJcbiAgRklSU1RDUkVBVEUgPSBcIiRGaXJzdENyZWF0ZVwiLFxyXG4gIENPTUJBVCA9IFwiJENvbWJhdFwiLFxyXG4gIEJBVFRMRVRZUEUgPSBcIiRCYXR0bGVUeXBlXCIsXHJcbiAgQkFUVExFTkFNRSA9IFwiJEJhdHRsZU5hbWVcIixcclxuICBOVU1CRVJPRkNBUkRTID0gXCIkTnVtYmVyT2ZDYXJkc1wiLFxyXG4gIENBUkRMSVNUID0gXCIkQ2FyZExpc3RcIixcclxuICBQQVJUSUNJUEFOVFMgPSBcIiRQYXJ0aWNpcGFudHNcIixcclxuICBESUZGSUNVTFRZID0gXCIkRGlmZmljdWx0eVwiLFxyXG4gIE1WUCA9IFwiJE1WUFwiLFxyXG4gIERBTUFHRSA9IFwiJERhbWFnZVwiLFxyXG4gIFJBTktJTkcgPSBcIiRSYW5raW5nXCIsXHJcbiAgRFVOR0VPTk5BTUUgPSBcIiREdW5nZW9uTmFtZVwiLFxyXG4gIFdJTlJFQVNPTiA9IFwiJFdpblJlYXNvblwiLFxyXG4gIEJBTEFOQ0UgPSBcIiRCYWxhbmNlXCIsXHJcbiAgUEFDS0FHRVRZUEUgPSBcIiRQYWNrYWdlVHlwZVwiLFxyXG4gIEFNT1VOVCA9IFwiJEFtb3VudFwiLFxyXG4gIElURU1MSVNUID0gXCIkSXRlbUxpc3RcIixcclxuICBHSUZUVFlQRSA9IFwiJEdpZnRUeXBlXCIsXHJcbiAgR0lGVE5BTUUgPSBcIiRHaWZ0TmFtZVwiLFxyXG4gIFRZUEUgPSBcIiRUeXBlXCIsXHJcbiAgT0xEVkFMVUUgPSBcIiRPbGRWYWx1ZVwiLFxyXG4gIE5FV1ZBTFVFID0gXCIkTmV3VmFsdWVcIixcclxuICBWSURFT1RZUEUgPSBcIiRWaWRlb1R5cGVcIixcclxuICBWSURFT05BTUUgPSBcIiRWaWRlb05hbWVcIixcclxuICBNRVNTQUdFVElUTEUgPSBcIiRNZXNzYWdlVGl0bGVcIixcclxuICBPUEVSQVRJT04gPSBcIiRPcGVyYXRpb25cIixcclxuICBOVU1CRVJPRkRSQVdJTkcgPSBcIiROdW1iZXJPZkRyYXdpbmdcIixcclxuICBMRUZUUFVMTFNGT1JHVUFSQU5URUUgPSBcIiRMZWZ0UHVsbHNGb3JHdWFyYW50ZWVcIixcclxuICBWSVBUWVBFID0gXCIkVmlwVHlwZVwiLFxyXG4gIFZJUFNUQVRVUyA9IFwiJFZpcFN0YXR1c1wiLFxyXG4gIFZJUEVYUElSRURBVEUgPSBcIiRWaXBFeHBpcmVEYXRlXCIsXHJcbiAgRU5URVIgPSBcIiRFbnRlclwiLFxyXG4gIFNUQVJUREFURSA9IFwiJFN0YXJ0RGF0ZVwiLFxyXG4gIEVGRkVDVElWRVRJTUUgPSBcIiRFZmZlY3RpdmVUaW1lXCIsXHJcbiAgTkFNRSA9IFwiJE5hbWVcIixcclxuICBNT0RFID0gXCIkTW9kZVwiLFxyXG4gIFNVQkpFQ1QgPSBcIiRTdWJqZWN0XCIsXHJcbiAgQUNDVVJBQ1kgPSBcIiRBY2N1cmFjeVwiLFxyXG4gIENPTlRFTlRMRU5HVEggPSBcIiRDb250ZW50TGVuZ3RoXCIsXHJcbiAgUkVNQVJLID0gXCIkUmVtYXJrXCIsXHJcbiAgQ09OVEVOVE5BTUUgPSBcIiRDb250ZW50TmFtZVwiLFxyXG4gIFNFQ1RJT04gPSBcIiRTZWN0aW9uXCIsXHJcbiAgREFZUyA9IFwiJERheXNcIixcclxuICBQT1NUSUQgPSBcIiRQb3N0SWRcIixcclxuICBJTkZPUk1BVElPTlRZUEUgPSBcIiRJbmZvcm1hdGlvblR5cGVcIixcclxuICBJTkZPUk1BVElPTiA9IFwiJEluZm9ybWF0aW9uXCJcclxufSJdfQ==