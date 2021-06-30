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
})(HAParamType || (HAParamType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVXRDLGdDQUFpQjs7OztJQUdqRCwwQ0FBbUIsYUFBQyxPQUFnQjtJQUtwQyxnQ0FBUyxhQUFDLE1BQWM7SUFLeEIscUNBQWMsYUFBQyxJQUFZLEVBQUUsS0FBYTtJQUsxQyx3Q0FBaUIsYUFBQyxJQUFZO0lBSzlCLG1DQUFZLGFBQUMsS0FBYTtJQUsxQiw2Q0FBc0IsYUFBQyxZQUFvQjtJQUszQyx5Q0FBa0IsYUFBQyxZQUFvQjtJQUt2Qyw4QkFBTyxhQUFDLE9BQTZCLEVBQUUsTUFBaUM7SUFLeEUsc0NBQWU7SUFLZiw4QkFBTztJQUtQLHNDQUFlLGFBQUMsVUFBbUI7SUFLbkMsZ0NBQVMsYUFBQyxRQUFnQixFQUFFLGlCQUF5QjtJQUtyRCw4QkFBTyxhQUFDLFFBQWdCO0lBS3hCLHdDQUFpQixhQUFDLGNBQTRCO0lBSzlDLCtDQUF3QixhQUFDLGdCQUFrQztJQUszRCw0Q0FBcUIsYUFBQyxTQUFrQjtJQUt4QywyQ0FBb0I7SUFLcEIsNENBQXFCLGFBQUMsTUFBbUI7SUFLekMsZ0NBQVMsYUFBQyxRQUEyQztRQUEzQyx5QkFBQSxFQUFBLFdBQXlCLFlBQVksQ0FBQyxLQUFLOzs7SUFLckQsbUNBQVk7SUFLWixvQ0FBYTs7Ozs7O3VCQWxJZjtFQTJCa0MsaUJBQWlCO1NBQXRDLFlBQVk7QUE4SHpCOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBS1g7QUFMRCxXQUFZLGdCQUFnQjtJQUMxQix5RUFBcUQsQ0FBQTtJQUNyRCxpRUFBNkMsQ0FBQTtJQUM3QywyRUFBdUQsQ0FBQTtJQUN2RCwyRUFBdUQsQ0FBQTtBQUN6RCxDQUFDLEVBTFcsZ0JBQWdCLEtBQWhC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Z0IsQ0FBQTtJQUNoQixxQ0FBc0IsQ0FBQTtJQUN0QixpQ0FBa0IsQ0FBQTtJQUNsQiwyQ0FBNEIsQ0FBQTtJQUM1Qix1Q0FBd0IsQ0FBQTtJQUN4QixpQ0FBa0IsQ0FBQTtJQUNsQixxQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBb0IsQ0FBQTtJQUNwQixtQ0FBb0IsQ0FBQTtJQUNwQiwrQkFBZ0IsQ0FBQTtJQUNoQixpREFBa0MsQ0FBQTtJQUNsQywyQ0FBNEIsQ0FBQTtJQUM1QiwrQ0FBZ0MsQ0FBQTtJQUNoQyxxQ0FBc0IsQ0FBQTtJQUN0Qix5Q0FBMEIsQ0FBQTtJQUMxQiwyQ0FBNEIsQ0FBQTtJQUM1Qix5Q0FBMEIsQ0FBQTtJQUMxQix1Q0FBd0IsQ0FBQTtJQUN4Qix1Q0FBd0IsQ0FBQTtJQUN4Qix5Q0FBMEIsQ0FBQTtJQUMxQixxQ0FBc0IsQ0FBQTtJQUN0QixxREFBc0MsQ0FBQTtJQUN0QyxpQ0FBa0IsQ0FBQTtJQUNsQixtQ0FBb0IsQ0FBQTtJQUNwQiwrQkFBZ0IsQ0FBQTtJQUNoQixtQ0FBb0IsQ0FBQTtJQUNwQixtQ0FBb0IsQ0FBQTtJQUNwQixpQ0FBa0IsQ0FBQTtJQUNsQix5Q0FBMEIsQ0FBQTtJQUMxQiwyQ0FBNEIsQ0FBQTtJQUM1QiwyQ0FBNEIsQ0FBQTtJQUM1QixtQ0FBb0IsQ0FBQTtJQUNwQiwyQ0FBNEIsQ0FBQTtJQUM1Qiw2Q0FBOEIsQ0FBQTtJQUM5QixxQ0FBc0IsQ0FBQTtJQUN0QiwrQkFBZ0IsQ0FBQTtJQUNoQiwrQ0FBZ0MsQ0FBQTtJQUNoQywrQkFBZ0IsQ0FBQTtJQUNoQiwrQkFBZ0IsQ0FBQTtJQUNoQixxQ0FBc0IsQ0FBQTtJQUN0QiwyQ0FBNEIsQ0FBQTtJQUM1QixxQ0FBc0IsQ0FBQTtJQUN0QixxQ0FBc0IsQ0FBQTtJQUN0QixpQ0FBa0IsQ0FBQTtJQUNsQiw2Q0FBOEIsQ0FBQTtJQUM5QiwrQ0FBZ0MsQ0FBQTtJQUNoQyxpREFBa0MsQ0FBQTtJQUNsQyxtQ0FBb0IsQ0FBQTtJQUNwQiwyQ0FBNEIsQ0FBQTtJQUM1QiwyQ0FBNEIsQ0FBQTtJQUM1Qix5Q0FBMEIsQ0FBQTtJQUMxQix5Q0FBMEIsQ0FBQTtJQUMxQix1Q0FBd0IsQ0FBQTtJQUN4Qix1Q0FBd0IsQ0FBQTtJQUN4Qix5Q0FBMEIsQ0FBQTtJQUMxQixxREFBc0MsQ0FBQTtJQUN0QywyQ0FBNEIsQ0FBQTtJQUM1QiwrQ0FBZ0MsQ0FBQTtJQUNoQyxpREFBa0MsQ0FBQTtJQUNsQyx5Q0FBMEIsQ0FBQTtJQUMxQix5Q0FBMEIsQ0FBQTtJQUMxQixpQ0FBa0IsQ0FBQTtJQUNsQixxREFBc0MsQ0FBQTtJQUN0QyxtQ0FBb0IsQ0FBQTtJQUNwQiwyQ0FBNEIsQ0FBQTtJQUM1QixxQ0FBc0IsQ0FBQTtJQUN0QixxQ0FBc0IsQ0FBQTtJQUN0QixxQ0FBc0IsQ0FBQTtJQUN0QixxQ0FBc0IsQ0FBQTtJQUN0QixpQ0FBa0IsQ0FBQTtJQUNsQiw2Q0FBOEIsQ0FBQTtJQUM5Qiw2Q0FBOEIsQ0FBQTtJQUM5Qiw2Q0FBOEIsQ0FBQTtJQUM5QiwrQkFBZ0IsQ0FBQTtJQUNoQixpREFBa0MsQ0FBQTtJQUNsQyxxQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBb0IsQ0FBQTtJQUNwQixxREFBc0MsQ0FBQTtJQUN0Qyx5Q0FBMEIsQ0FBQTtJQUMxQix5Q0FBMEIsQ0FBQTtJQUMxQixpQ0FBa0IsQ0FBQTtJQUNsQiwyQ0FBNEIsQ0FBQTtJQUM1QixpQ0FBa0IsQ0FBQTtJQUNsQix5Q0FBMEIsQ0FBQTtJQUMxQix5Q0FBMEIsQ0FBQTtJQUMxQiwrQ0FBZ0MsQ0FBQTtJQUNoQyxxQ0FBc0IsQ0FBQTtJQUN0Qiw2Q0FBOEIsQ0FBQTtJQUM5Qix5Q0FBMEIsQ0FBQTtJQUMxQiwyQkFBWSxDQUFBO0lBQ1osaUNBQWtCLENBQUE7SUFDbEIsbUNBQW9CLENBQUE7SUFDcEIsMkNBQTRCLENBQUE7SUFDNUIsdUNBQXdCLENBQUE7SUFDeEIsbUNBQW9CLENBQUE7SUFDcEIsMkNBQTRCLENBQUE7SUFDNUIsaUNBQWtCLENBQUE7SUFDbEIscUNBQXNCLENBQUE7SUFDdEIscUNBQXNCLENBQUE7SUFDdEIscUNBQXNCLENBQUE7SUFDdEIsNkJBQWMsQ0FBQTtJQUNkLHFDQUFzQixDQUFBO0lBQ3RCLHFDQUFzQixDQUFBO0lBQ3RCLHVDQUF3QixDQUFBO0lBQ3hCLHVDQUF3QixDQUFBO0lBQ3hCLDZDQUE4QixDQUFBO0lBQzlCLHVDQUF3QixDQUFBO0lBQ3hCLG1EQUFvQyxDQUFBO0lBQ3BDLCtEQUFnRCxDQUFBO0FBQ2xELENBQUMsRUEvSVcsV0FBVyxLQUFYLFdBQVcsUUErSXRCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU0FuYWx5dGljcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1hbmFseXRpY3MnLFxuICBwbHVnaW5SZWY6ICdITVNBbmFseXRpY3MnLFxuICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW5cIixcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNBbmFseXRpY3MgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2V0QW5hbHl0aWNzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2V0VXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZGVsZXRlVXNlclByb2ZpbGUobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2V0UHVzaFRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzZXRNaW5BY3Rpdml0eVNlc3Npb25zKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2V0U2Vzc2lvbkR1cmF0aW9uKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgb25FdmVudChldmVudElkOiBIQUV2ZW50VHlwZSB8IHN0cmluZywgcGFyYW1zOiBIQVBhcmFtVHlwZSB8IEV2ZW50UGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgY2xlYXJDYWNoZWREYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGdldEFBSUQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBnZXRVc2VyUHJvZmlsZXMocHJlZGVmaW5lZDogYm9vbGVhbik6IFByb21pc2U8VXNlclByb2ZpbGVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcGFnZVN0YXJ0KHBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VDbGFzc092ZXJyaWRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBwYWdlRW5kKHBhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBzZXRSZXBvcnRQb2xpY2llcyhyZXBvcnRQb2xpY2llczogUmVwb3J0UG9saWN5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0UmVwb3J0UG9saWN5VGhyZXNob2xkKHJlcG9ydFBvbGljeVR5cGU6IFJlcG9ydFBvbGljeVR5cGUpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNldFJlc3RyaWN0aW9uRW5hYmxlZChpc0VuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBpc1Jlc3RyaWN0aW9uRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBhZGREZWZhdWx0RXZlbnRQYXJhbXMocGFyYW1zOiBFdmVudFBhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGVuYWJsZUxvZyhsb2dMZXZlbDogTG9nTGV2ZWxUeXBlID0gTG9nTGV2ZWxUeXBlLkRFQlVHKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBEYXRhIFR5cGVzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJpY09iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmV4cG9ydCB0eXBlIFVzZXJQcm9maWxlcyA9IEdlbmVyaWNPYmplY3Q7XG5leHBvcnQgdHlwZSBFdmVudFBhcmFtcyA9IEdlbmVyaWNPYmplY3Q7XG4vKipcbiAqIFJlcG9ydFBvbGljeSB0eXBlcyBmb3IgU2V0cyBhdXRvbWF0aWMgZXZlbnQgcmVwb3J0aW5nIHBvbGljaWVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcG9ydFBvbGljeSB7XG4gIFwib25TY2hlZHVsZWRUaW1lUG9saWN5XCIgPyA6IG51bWJlcixcbiAgXCJvbkFwcExhdW5jaFBvbGljeVwiID8gOiBib29sZWFuLFxuICBcIm9uTW92ZUJhY2tncm91bmRQb2xpY3lcIiA/IDogYm9vbGVhbixcbiAgXCJvbkNhY2hlVGhyZXNob2xkUG9saWN5XCIgPyA6IG51bWJlclxufVxuLyoqXG4gKiBSZXBvcnRQb2xpY3kgdHlwZXNcbiAqL1xuZXhwb3J0IGVudW0gUmVwb3J0UG9saWN5VHlwZSB7XG4gIE9OX1NDSEVEVUxFRF9USU1FX1BPTElDWSA9IFwiT05fU0NIRURVTEVEX1RJTUVfUE9MSUNZXCIsXG4gIE9OX0FQUF9MQVVOQ0hfUE9MSUNZID0gXCJPTl9BUFBfTEFVTkNIX1BPTElDWVwiLFxuICBPTl9NT1ZFX0JBQ0tHUk9VTkRfUE9MSUNZID0gXCJPTl9NT1ZFX0JBQ0tHUk9VTkRfUE9MSUNZXCIsXG4gIE9OX0NBQ0hFX1RIUkVTSE9MRF9QT0xJQ1kgPSBcIk9OX0NBQ0hFX1RIUkVTSE9MRF9QT0xJQ1lcIlxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENvbnN0YW50c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIEhpQW5hbHl0aWNzVG9vbHMgbG9nIGxldmVsIGVudW0uXG4gKi9cbmV4cG9ydCBlbnVtIExvZ0xldmVsVHlwZSB7XG4gIERFQlVHID0gMyxcbiAgSU5GTyA9IDQsXG4gIFdBUk4gPSA1LFxuICBFUlJPUiA9IDZcbn1cbi8qKlxuKiBIQVVzZXJQcm9maWxlVHlwZSB0eXBlcyBmb3IgcHJvdmlkZXMgY29uc3RhbnRzIHRoYXQgZGVmaW5lIHRoZSBuYW1lcyBvZiBhbGwgcHJlZGVmaW5lZCB1c2VyIGF0dHJpYnV0ZXMuXG4qL1xuZXhwb3J0IGVudW0gSEFVc2VyUHJvZmlsZVR5cGUge1xuICBVU0VSTEVWRUwgPSBcInVzZXJfbGV2ZWxcIixcbiAgSVNGVUxMTEVWRUwgPSBcImlzX2Z1bGxfbGV2ZWxcIlxufVxuLyoqXG4gKiBIQUV2ZW50VHlwZSB0eXBlcyBmb3IgcHJvdmlkZXMgdGhlIElEcyBvZiBhbGwgcHJlZGVmaW5lZCBldmVudHMuXG4gKi9cbmV4cG9ydCBlbnVtIEhBRXZlbnRUeXBlIHtcbiAgQ1JFQVRFUEFZTUVOVElORk8gPSBcIiRDcmVhdGVQYXltZW50SW5mb1wiLFxuICBBRERQUk9EVUNUMkNBUlQgPSBcIiRBZGRQcm9kdWN0MkNhcnRcIixcbiAgQUREUFJPRFVDVDJXSVNITElTVCA9IFwiJEFkZFByb2R1Y3QyV2lzaExpc3RcIixcbiAgU1RBUlRBUFAgPSBcIiRTdGFydEFwcFwiLFxuICBTVEFSVENIRUNLT1VUID0gXCIkU3RhcnRDaGVja291dFwiLFxuICBWSUVXQ0FNUEFJR04gPSBcIiRWaWV3Q2FtcGFpZ25cIixcbiAgVklFV0NIRUNLT1VUU1RFUCA9IFwiJFZpZXdDaGVja291dFN0ZXBcIixcbiAgV0lOVklSVFVBTENPSU4gPSBcIiRXaW5WaXJ0dWFsQ29pblwiLFxuICBDT01QTEVURVBVUkNIQVNFID0gXCIkQ29tcGxldGVQdXJjaGFzZVwiLFxuICBPQlRBSU5MRUFEUyA9IFwiJE9idGFpbkxlYWRzXCIsXG4gIEpPSU5VU0VSR1JPVVAgPSBcIiRKb2luVXNlckdyb3VwXCIsXG4gIENPTVBMRVRFTEVWRUwgPSBcIiRDb21wbGV0ZUxldmVsXCIsXG4gIFNUQVJUTEVWRUwgPSBcIiRTdGFydExldmVsXCIsXG4gIFVQR1JBREVMRVZFTCA9IFwiJFVwZ3JhZGVMZXZlbFwiLFxuICBTSUdOSU4gPSBcIiRTaWduSW5cIixcbiAgU0lHTk9VVCA9IFwiJFNpZ25PdXRcIixcbiAgU1VCTUlUU0NPUkUgPSBcIiRTdWJtaXRTY29yZVwiLFxuICBDUkVBVEVPUkRFUiA9IFwiJENyZWF0ZU9yZGVyXCIsXG4gIFJFRlVORE9SREVSID0gXCIkUmVmdW5kT3JkZXJcIixcbiAgREVMUFJPRFVDVEZST01DQVJUID0gXCIkRGVsUHJvZHVjdEZyb21DYXJ0XCIsXG4gIFNFQVJDSCA9IFwiJFNlYXJjaFwiLFxuICBWSUVXQ09OVEVOVCA9IFwiJFZpZXdDb250ZW50XCIsXG4gIFVQREFURUNIRUNLT1VUT1BUSU9OID0gXCIkVXBkYXRlQ2hlY2tvdXRPcHRpb25cIixcbiAgU0hBUkVDT05URU5UID0gXCIkU2hhcmVDb250ZW50XCIsXG4gIFJFR0lTVEVSQUNDT1VOVCA9IFwiJFJlZ2lzdGVyQWNjb3VudFwiLFxuICBDT05TVU1FVklSVFVBTENPSU4gPSBcIiRDb25zdW1lVmlydHVhbENvaW5cIixcbiAgU1RBUlRUVVRPUklBTCA9IFwiJFN0YXJ0VHV0b3JpYWxcIixcbiAgQ09NUExFVEVUVVRPUklBTCA9IFwiJENvbXBsZXRlVHV0b3JpYWxcIixcbiAgT0JUQUlOQUNISUVWRU1FTlQgPSBcIiRPYnRhaW5BY2hpZXZlbWVudFwiLFxuICBWSUVXUFJPRFVDVCA9IFwiJFZpZXdQcm9kdWN0XCIsXG4gIFZJRVdQUk9EVUNUTElTVCA9IFwiJFZpZXdQcm9kdWN0TGlzdFwiLFxuICBWSUVXU0VBUkNIUkVTVUxUID0gXCIkVmlld1NlYXJjaFJlc3VsdFwiLFxuICBVUERBVEVNRU1CRVJTSElQTEVWRUwgPSBcIiRVcGRhdGVNZW1iZXJzaGlwTGV2ZWxcIixcbiAgRklMVFJBVEVQUk9EVUNUID0gXCIkRmlsdHJhdGVQcm9kdWN0XCIsXG4gIFZJRVdDQVRFR09SWSA9IFwiJFZpZXdDYXRlZ29yeVwiLFxuICBVUERBVEVPUkRFUiA9IFwiJFVwZGF0ZU9yZGVyXCIsXG4gIENBTkNFTE9SREVSID0gXCIkQ2FuY2VsT3JkZXJcIixcbiAgQ09NUExFVEVPUkRFUiA9IFwiJENvbXBsZXRlT3JkZXJcIixcbiAgQ0FOQ0VMQ0hFQ0tPVVQgPSBcIiRDYW5jZWxDaGVja291dFwiLFxuICBPQlRBSU5WT1VDSEVSID0gXCIkT2J0YWluVm91Y2hlclwiLFxuICBDT05UQUNUQ1VTVE9NU0VSVklDRSA9IFwiJENvbnRhY3RDdXN0b21TZXJ2aWNlXCIsXG4gIFJBVEUgPSBcIiRSYXRlXCIsXG4gIElOVklURSA9IFwiJEludml0ZVwiLFxuICBOT1ZJQ0VHVUlERVNUQVJUID0gXCIkTm92aWNlR3VpZGVTdGFydFwiLFxuICBOT1ZJQ0VHVUlERUVORCA9IFwiJE5vdmljZUd1aWRlRW5kXCIsXG4gIFNUQVJUR0FNRSA9IFwiJFN0YXJ0R2FtZVwiLFxuICBFTkRHQU1FID0gXCIkRW5kR2FtZVwiLFxuICBXSU5QUk9QUyA9IFwiJFdpblByb3BzXCIsXG4gIENPTlNVTUVQUk9QUyA9IFwiJENvbnN1bWVQcm9wc1wiLFxuICBBRERGUklFTkQgPSBcIiRBZGRGcmllbmRcIixcbiAgQUREQkxBQ0tMSVNUID0gXCIkQWRkQmxhY2tsaXN0XCIsXG4gIFZJRVdGUklFTkRMSVNUID0gXCIkVmlld0ZyaWVuZExpc3RcIixcbiAgUVVJVFVTRVJHUk9VUCA9IFwiJFF1aXRVc2VyR3JvdXBcIixcbiAgQ1JFQVRFVVNFUkdST1VQID0gXCIkQ3JlYXRlVXNlckdyb3VwXCIsXG4gIERJU0JBTkRVU0VSR1JPVVAgPSBcIiREaXNiYW5kVXNlckdyb3VwXCIsXG4gIFVQR1JBREVVU0VSR1JPVVAgPSBcIiRVcGdyYWRlVXNlckdyb3VwXCIsXG4gIFZJRVdVU0VSR1JPVVAgPSBcIiRWaWV3VXNlckdyb3VwXCIsXG4gIEpPSU5URUFNID0gXCIkSm9pblRlYW1cIixcbiAgU0VORE1FU1NBR0UgPSBcIiRTZW5kTWVzc2FnZVwiLFxuICBMRUFSTlNLSUxMID0gXCIkTGVhcm5Ta2lsbFwiLFxuICBVU0VTS0lMTCA9IFwiJFVzZVNraWxsXCIsXG4gIEdFVEVRVUlQTUVOVCA9IFwiJEdldEVxdWlwbWVudFwiLFxuICBMT1NFRVFVSVBNRU5UID0gXCIkTG9zZUVxdWlwbWVudFwiLFxuICBFTkhBTkNFRVFVSVBNRU5UID0gXCIkRW5oYW5jZUVxdWlwbWVudFwiLFxuICBTV0lUQ0hDTEFTUyA9IFwiJFN3aXRjaENsYXNzXCIsXG4gIEFDQ0VQVFRBU0sgPSBcIiRBY2NlcHRUYXNrXCIsXG4gIEZJTklTSFRBU0sgPSBcIiRGaW5pc2hUYXNrXCIsXG4gIEFUVEVOREFDVElWSVRZID0gXCIkQXR0ZW5kQWN0aXZpdHlcIixcbiAgRklOSVNIQ1VUU0NFTkUgPSBcIiRGaW5pc2hDdXRzY2VuZVwiLFxuICBTS0lQQ1VUU0NFTkUgPSBcIiRTa2lwQ3V0c2NlbmVcIixcbiAgR0VUUEVUID0gXCIkR2V0UGV0XCIsXG4gIExPU0VQRVQgPSBcIiRMb3NlUGV0XCIsXG4gIEVOSEFOQ0VQRVQgPSBcIiRFbmhhbmNlUGV0XCIsXG4gIEdFVE1PVU5UID0gXCIkR2V0TW91bnRcIixcbiAgTE9TRU1PVU5UID0gXCIkTG9zZU1vdW50XCIsXG4gIEVOSEFOQ0VNT1VOVCA9IFwiJEVuaGFuY2VNb3VudFwiLFxuICBDUkVBVEVST0xFID0gXCIkQ3JlYXRlUm9sZVwiLFxuICBTSUdOSU5ST0xFID0gXCIkU2lnbkluUm9sZVwiLFxuICBTSUdOT1VUUk9MRSA9IFwiJFNpZ25PdXRSb2xlXCIsXG4gIFNUQVJUQkFUVExFID0gXCIkU3RhcnRCYXR0bGVcIixcbiAgRU5EQkFUVExFID0gXCIkRW5kQmF0dGxlXCIsXG4gIFNUQVJURFVOR0VPTiA9IFwiJFN0YXJ0RHVuZ2VvblwiLFxuICBGSU5JU0hEVU5HRU9OID0gXCIkRmluaXNoRHVuZ2VvblwiLFxuICBWSUVXUEFDS0FHRSA9IFwiJFZpZXdQYWNrYWdlXCIsXG4gIFJFREVFTSA9IFwiJFJlZGVlbVwiLFxuICBNT0RJRllTRVRUSU5HID0gXCIkTW9kaWZ5U2V0dGluZ1wiLFxuICBXQVRDSFZJREVPID0gXCIkV2F0Y2hWaWRlb1wiLFxuICBDTElDS01FU1NBR0UgPSBcIiRDbGlja01lc3NhZ2VcIixcbiAgRFJBV0NBUkQgPSBcIiREcmF3Q2FyZFwiLFxuICBWSUVXQ0FSRExJU1QgPSBcIiRWaWV3Q2FyZExpc3RcIlxufVxuXG4vKipcbiogSEFQYXJhbVR5cGUgdHlwZXMgZm9yIHByb3ZpZGVzIHRoZSBJRHMgb2YgYWxsIHByZWRlZmluZWQgcGFyYW1ldGVycywgXG4qIGluY2x1ZGluZyB0aGUgSURzIG9mIHByZWRlZmluZWQgcGFyYW1ldGVycyBhbmQgdXNlciBhdHRyaWJ1dGVzLlxuKi9cbmV4cG9ydCBlbnVtIEhBUGFyYW1UeXBlIHtcbiAgU1RPUkVOQU1FID0gXCIkU3RvcmVOYW1lXCIsXG4gIEJSQU5EID0gXCIkQnJhbmRcIixcbiAgQ0FURUdPUlkgPSBcIiRDYXRlZ29yeVwiLFxuICBQUk9EVUNUSUQgPSBcIiRQcm9kdWN0SWRcIixcbiAgUFJPRFVDVE5BTUUgPSBcIiRQcm9kdWN0TmFtZVwiLFxuICBQUk9EVUNURkVBVFVSRSA9IFwiJFByb2R1Y3RGZWF0dXJlXCIsXG4gIFBSSUNFID0gXCIkUHJpY2VcIixcbiAgUVVBTlRJVFkgPSBcIiRRdWFudGl0eVwiLFxuICBSRVZFTlVFID0gXCIkUmV2ZW51ZVwiLFxuICBDVVJSTkFNRSA9IFwiJEN1cnJOYW1lXCIsXG4gIFBMQUNFSUQgPSBcIiRQbGFjZUlkXCIsXG4gIERFU1RJTkFUSU9OID0gXCIkRGVzdGluYXRpb25cIixcbiAgRU5EREFURSA9IFwiJEVuZERhdGVcIixcbiAgQk9PS0lOR0RBWVMgPSBcIiRCb29raW5nRGF5c1wiLFxuICBQQVNTRU5HRVJTTlVNQkVSID0gXCIkUGFzc2VuZ2Vyc051bWJlclwiLFxuICBCT09LSU5HUk9PTVMgPSBcIiRCb29raW5nUm9vbXNcIixcbiAgT1JJR0lOQVRJTkdQTEFDRSA9IFwiJE9yaWdpbmF0aW5nUGxhY2VcIixcbiAgQkVHSU5EQVRFID0gXCIkQmVnaW5EYXRlXCIsXG4gIFRSQU5TQUNUSU9OSUQgPSBcIiRUcmFuc2FjdGlvbklkXCIsXG4gIENMQVNTID0gXCIkQ2xhc3NcIixcbiAgQ0xJQ0tJRCA9IFwiJENsaWNrSWRcIixcbiAgUFJPTU9USU9OTkFNRSA9IFwiJFByb21vdGlvbk5hbWVcIixcbiAgQ09OVEVOVCA9IFwiJENvbnRlbnRcIixcbiAgRVhURU5EUEFSQU0gPSBcIiRFeHRlbmRQYXJhbVwiLFxuICBNQVRFUklBTE5BTUUgPSBcIiRNYXRlcmlhbE5hbWVcIixcbiAgTUFURVJJQUxTTE9UID0gXCIkTWF0ZXJpYWxTbG90XCIsXG4gIE1FRElVTSA9IFwiJE1lZGl1bVwiLFxuICBTT1VSQ0UgPSBcIiRTb3VyY2VcIixcbiAgS0VZV09SRFMgPSBcIiRLZXl3b3Jkc1wiLFxuICBPUFRJT04gPSBcIiRPcHRpb25cIixcbiAgU1RFUCA9IFwiJFN0ZXBcIixcbiAgVklSVFVBTENVUlJOQU1FID0gXCIkVmlydHVhbEN1cnJOYW1lXCIsXG4gIFZPVUNIRVIgPSBcIiRWb3VjaGVyXCIsXG4gIFBMQUNFID0gXCIkUGxhY2VcIixcbiAgU0hJUFBJTkcgPSBcIiRTaGlwcGluZ1wiLFxuICBUQVhGRUUgPSBcIiRUYXhGZWVcIixcbiAgVVNFUkdST1VQSUQgPSBcIiRVc2VyR3JvdXBJZFwiLFxuICBMRVZFTE5BTUUgPSBcIiRMZXZlbE5hbWVcIixcbiAgUkVTVUxUID0gXCIkUmVzdWx0XCIsXG4gIFJPTEVOQU1FID0gXCIkUm9sZU5hbWVcIixcbiAgTEVWRUxJRCA9IFwiJExldmVsSWRcIixcbiAgQ0hBTk5FTCA9IFwiJENoYW5uZWxcIixcbiAgU0NPUkUgPSBcIiRTY29yZVwiLFxuICBTRUFSQ0hLRVlXT1JEUyA9IFwiJFNlYXJjaEtleXdvcmRzXCIsXG4gIENPTlRFTlRUWVBFID0gXCIkQ29udGVudFR5cGVcIixcbiAgQUNISUVWRU1FTlRJRCA9IFwiJEFjaGlldmVtZW50SWRcIixcbiAgRkxJR0hUTk8gPSBcIiRGbGlnaHROb1wiLFxuICBQT1NJVElPTklEID0gXCIkUG9zaXRpb25JZFwiLFxuICBQUk9EVUNUTElTVCA9IFwiJFByb2R1Y3RMaXN0XCIsXG4gIEFDT1VOVFRZUEUgPSBcIiRBY291bnRUeXBlXCIsXG4gIEVWVFJFU1VMVCA9IFwiJEV2dFJlc3VsdFwiLFxuICBQUkVWTEVWRUwgPSBcIiRQcmV2TGV2ZWxcIixcbiAgQ1VSUlZMRVZFTCA9IFwiJEN1cnJ2TGV2ZWxcIixcbiAgVk9VQ0hFUlMgPSBcIiRWb3VjaGVyc1wiLFxuICBNQVRFUklBTFNMT1RUWVBFID0gXCIkTWF0ZXJpYWxTbG90VHlwZVwiLFxuICBMSVNUSUQgPSBcIiRMaXN0SWRcIixcbiAgRklMVEVSUyA9IFwiJEZpbHRlcnNcIixcbiAgU09SVFMgPSBcIiRTb3J0c1wiLFxuICBPUkRFUklEID0gXCIkT3JkZXJJZFwiLFxuICBQQVlUWVBFID0gXCIkUGF5VHlwZVwiLFxuICBSRUFTT04gPSBcIiRSZWFzb25cIixcbiAgRVhQSVJFREFURSA9IFwiJEV4cGlyZURhdGVcIixcbiAgVk9VQ0hFUlRZUEUgPSBcIiRWb3VjaGVyVHlwZVwiLFxuICBTRVJWSUNFVFlQRSA9IFwiJFNlcnZpY2VUeXBlXCIsXG4gIERFVEFJTFMgPSBcIiREZXRhaWxzXCIsXG4gIENPTU1FTlRUWVBFID0gXCIkQ29tbWVudFR5cGVcIixcbiAgUkVHSVNUTUVUSE9EID0gXCIkUmVnaXN0TWV0aG9kXCIsXG4gIERVUkFUSU9OID0gXCIkRHVyYXRpb25cIixcbiAgTEVWRUwgPSBcIiRMZXZlbFwiLFxuICBQVVJDSEFTRUVOVFJZID0gXCIkUHVyY2hhc2VFbnRyeVwiLFxuICBQUk9QUyA9IFwiJFByb3BzXCIsXG4gIEVOVFJZID0gXCIkRW50cnlcIixcbiAgVklQTEVWRUwgPSBcIiRWSVBMZXZlbFwiLFxuICBGSVJTVFNJR05JTiA9IFwiJEZpcnN0U2lnbkluXCIsXG4gIERJU0NPVU5UID0gXCIkRGlzY291bnRcIixcbiAgRklSU1RQQVkgPSBcIiRGaXJzdFBheVwiLFxuICBUQVNLSUQgPSBcIiRUYXNrSWRcIixcbiAgRlJJRU5ETlVNQkVSID0gXCIkRnJpZW5kTnVtYmVyXCIsXG4gIFVTRVJHUk9VUE5BTUUgPSBcIiRVc2VyR3JvdXBOYW1lXCIsXG4gIFVTRVJHUk9VUExFVkVMID0gXCIkVXNlckdyb3VwTGV2ZWxcIixcbiAgTUVNQkVSUyA9IFwiJE1lbWJlcnNcIixcbiAgTEVWRUxCRUZPUkUgPSBcIiRMZXZlbEJlZm9yZVwiLFxuICBNRVNTQUdFVFlQRSA9IFwiJE1lc3NhZ2VUeXBlXCIsXG4gIFJPTEVDT01CQVQgPSBcIiRSb2xlQ29tYmF0XCIsXG4gIElTVE9QTEVWRUwgPSBcIiRJc1RvcExldmVsXCIsXG4gIFJPTEVDTEFTUyA9IFwiJFJvbGVDbGFzc1wiLFxuICBTS0lMTE5BTUUgPSBcIiRTa2lsbE5hbWVcIixcbiAgU0tJTExMRVZFTCA9IFwiJFNraWxsTGV2ZWxcIixcbiAgU0tJTExMRVZFTEJFRk9SRSA9IFwiJFNraWxsTGV2ZWxCZWZvcmVcIixcbiAgRVFVSVBNRU5USUQgPSBcIiRFcXVpcG1lbnRJZFwiLFxuICBFUVVJUE1FTlROQU1FID0gXCIkRXF1aXBtZW50TmFtZVwiLFxuICBFUVVJUE1FTlRMRVZFTCA9IFwiJEVxdWlwbWVudExldmVsXCIsXG4gIENMQVNTTElNSVQgPSBcIiRDbGFzc0xpbWl0XCIsXG4gIExFVkVMTElNSVQgPSBcIiRMZXZlbExpbWl0XCIsXG4gIElTRlJFRSA9IFwiJElzRnJlZVwiLFxuICBUT1RBTEFGVEVSQ0hBTkdFID0gXCIkVG90YWxBZnRlckNoYW5nZVwiLFxuICBRVUFMSVRZID0gXCIkUXVhbGl0eVwiLFxuICBFTkhBTkNFVFlQRSA9IFwiJEVuaGFuY2VUeXBlXCIsXG4gIE5FV0NMQVNTID0gXCIkTmV3Q2xhc3NcIixcbiAgT0xEQ0xBU1MgPSBcIiRPbGRDbGFzc1wiLFxuICBUQVNLVFlQRSA9IFwiJFRhc2tUeXBlXCIsXG4gIFRBU0tOQU1FID0gXCIkVGFza05hbWVcIixcbiAgUkVXQVJEID0gXCIkUmV3YXJkXCIsXG4gIEFDVElWSVRZVFlQRSA9IFwiJEFjdGl2aXR5VHlwZVwiLFxuICBBQ1RJVklUWU5BTUUgPSBcIiRBY3Rpdml0eU5hbWVcIixcbiAgQ1VUU0NFTkVOQU1FID0gXCIkQ3V0c2NlbmVOYW1lXCIsXG4gIFBFVElEID0gXCIkUGV0SWRcIixcbiAgUEVUREVGQVVMVE5BTUUgPSBcIiRQZXREZWZhdWx0TmFtZVwiLFxuICBQRVRMRVZFTCA9IFwiJFBldExldmVsXCIsXG4gIE1PVU5USUQgPSBcIiRNb3VudElkXCIsXG4gIE1PVU5UREVGQVVMVE5BTUUgPSBcIiRNb3VudERlZmF1bHROYW1lXCIsXG4gIE1PVU5UTEVWRUwgPSBcIiRNb3VudExldmVsXCIsXG4gIFJPTEVHRU5ERVIgPSBcIiRSb2xlR2VuZGVyXCIsXG4gIFNFUlZFUiA9IFwiJFNlcnZlclwiLFxuICBGSVJTVENSRUFURSA9IFwiJEZpcnN0Q3JlYXRlXCIsXG4gIENPTUJBVCA9IFwiJENvbWJhdFwiLFxuICBCQVRUTEVUWVBFID0gXCIkQmF0dGxlVHlwZVwiLFxuICBCQVRUTEVOQU1FID0gXCIkQmF0dGxlTmFtZVwiLFxuICBOVU1CRVJPRkNBUkRTID0gXCIkTnVtYmVyT2ZDYXJkc1wiLFxuICBDQVJETElTVCA9IFwiJENhcmRMaXN0XCIsXG4gIFBBUlRJQ0lQQU5UUyA9IFwiJFBhcnRpY2lwYW50c1wiLFxuICBESUZGSUNVTFRZID0gXCIkRGlmZmljdWx0eVwiLFxuICBNVlAgPSBcIiRNVlBcIixcbiAgREFNQUdFID0gXCIkRGFtYWdlXCIsXG4gIFJBTktJTkcgPSBcIiRSYW5raW5nXCIsXG4gIERVTkdFT05OQU1FID0gXCIkRHVuZ2Vvbk5hbWVcIixcbiAgV0lOUkVBU09OID0gXCIkV2luUmVhc29uXCIsXG4gIEJBTEFOQ0UgPSBcIiRCYWxhbmNlXCIsXG4gIFBBQ0tBR0VUWVBFID0gXCIkUGFja2FnZVR5cGVcIixcbiAgQU1PVU5UID0gXCIkQW1vdW50XCIsXG4gIElURU1MSVNUID0gXCIkSXRlbUxpc3RcIixcbiAgR0lGVFRZUEUgPSBcIiRHaWZ0VHlwZVwiLFxuICBHSUZUTkFNRSA9IFwiJEdpZnROYW1lXCIsXG4gIFRZUEUgPSBcIiRUeXBlXCIsXG4gIE9MRFZBTFVFID0gXCIkT2xkVmFsdWVcIixcbiAgTkVXVkFMVUUgPSBcIiROZXdWYWx1ZVwiLFxuICBWSURFT1RZUEUgPSBcIiRWaWRlb1R5cGVcIixcbiAgVklERU9OQU1FID0gXCIkVmlkZW9OYW1lXCIsXG4gIE1FU1NBR0VUSVRMRSA9IFwiJE1lc3NhZ2VUaXRsZVwiLFxuICBPUEVSQVRJT04gPSBcIiRPcGVyYXRpb25cIixcbiAgTlVNQkVST0ZEUkFXSU5HID0gXCIkTnVtYmVyT2ZEcmF3aW5nXCIsXG4gIExFRlRQVUxMU0ZPUkdVQVJBTlRFRSA9IFwiJExlZnRQdWxsc0Zvckd1YXJhbnRlZVwiXG59Il19