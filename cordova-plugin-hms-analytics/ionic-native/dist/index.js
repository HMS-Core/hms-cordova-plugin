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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
})(HAParamType || (HAParamType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLW5hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBVXRDLGdDQUFpQjs7OztJQUdqRCwwQ0FBbUIsYUFBQyxPQUFnQjtJQUtwQyxnQ0FBUyxhQUFDLE1BQWM7SUFLeEIscUNBQWMsYUFBQyxJQUFZLEVBQUUsS0FBYTtJQUsxQyx3Q0FBaUIsYUFBQyxJQUFZO0lBSzlCLG1DQUFZLGFBQUMsS0FBYTtJQUsxQiw2Q0FBc0IsYUFBQyxZQUFvQjtJQUszQyx5Q0FBa0IsYUFBQyxZQUFvQjtJQUt2Qyw4QkFBTyxhQUFDLE9BQTZCLEVBQUUsTUFBaUM7SUFLeEUsc0NBQWU7SUFLZiw4QkFBTztJQUtQLHNDQUFlLGFBQUMsVUFBbUI7SUFLbkMsZ0NBQVMsYUFBQyxRQUFnQixFQUFFLGlCQUF5QjtJQUtyRCw4QkFBTyxhQUFDLFFBQWdCO0lBS3hCLHdDQUFpQixhQUFDLGNBQTRCO0lBSzlDLCtDQUF3QixhQUFDLGdCQUFrQztJQUszRCw0Q0FBcUIsYUFBQyxTQUFrQjtJQUt4QywyQ0FBb0I7SUFLcEIsZ0NBQVMsYUFBQyxRQUEyQztRQUEzQyx5QkFBQSxFQUFBLFdBQXlCLFlBQVksQ0FBQyxLQUFLOzs7SUFLckQsbUNBQVk7SUFLWixvQ0FBYTs7Ozs7O3VCQTdIZjtFQTJCa0MsaUJBQWlCO1NBQXRDLFlBQVk7QUF5SHpCOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBS1g7QUFMRCxXQUFZLGdCQUFnQjtJQUMxQix5RUFBcUQsQ0FBQTtJQUNyRCxpRUFBNkMsQ0FBQTtJQUM3QywyRUFBdUQsQ0FBQTtJQUN2RCwyRUFBdUQsQ0FBQTtBQUN6RCxDQUFDLEVBTFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUszQjtBQUVE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biAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TQW5hbHl0aWNzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYW5hbHl0aWNzJyxcclxuICBwbHVnaW5SZWY6ICdITVNBbmFseXRpY3MnLFxyXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0hNUy1Db3JlL2htcy1jb3Jkb3ZhLXBsdWdpblwiLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQW5hbHl0aWNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldEFuYWx5dGljc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0VXNlclByb2ZpbGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRlbGV0ZVVzZXJQcm9maWxlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRQdXNoVG9rZW4odG9rZW46IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRNaW5BY3Rpdml0eVNlc3Npb25zKG1pbGxpc2Vjb25kczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFNlc3Npb25EdXJhdGlvbihtaWxsaXNlY29uZHM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbkV2ZW50KGV2ZW50SWQ6IEhBRXZlbnRUeXBlIHwgc3RyaW5nLCBwYXJhbXM6IEhBUGFyYW1UeXBlIHwgRXZlbnRQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgY2xlYXJDYWNoZWREYXRhKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRBQUlEKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGdldFVzZXJQcm9maWxlcyhwcmVkZWZpbmVkOiBib29sZWFuKTogUHJvbWlzZTxVc2VyUHJvZmlsZXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcGFnZVN0YXJ0KHBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VDbGFzc092ZXJyaWRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgcGFnZUVuZChwYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFJlcG9ydFBvbGljaWVzKHJlcG9ydFBvbGljaWVzOiBSZXBvcnRQb2xpY3kpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0UmVwb3J0UG9saWN5VGhyZXNob2xkKHJlcG9ydFBvbGljeVR5cGU6IFJlcG9ydFBvbGljeVR5cGUpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRSZXN0cmljdGlvbkVuYWJsZWQoaXNFbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGlzUmVzdHJpY3Rpb25FbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2cobG9nTGV2ZWw6IExvZ0xldmVsVHlwZSA9IExvZ0xldmVsVHlwZS5ERUJVRyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIERhdGEgVHlwZXNcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJpY09iamVjdCB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcbmV4cG9ydCB0eXBlIFVzZXJQcm9maWxlcyA9IEdlbmVyaWNPYmplY3Q7XHJcbmV4cG9ydCB0eXBlIEV2ZW50UGFyYW1zID0gR2VuZXJpY09iamVjdDtcclxuLyoqXHJcbiAqIFJlcG9ydFBvbGljeSB0eXBlcyBmb3IgU2V0cyBhdXRvbWF0aWMgZXZlbnQgcmVwb3J0aW5nIHBvbGljaWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBSZXBvcnRQb2xpY3kge1xyXG4gIFwib25TY2hlZHVsZWRUaW1lUG9saWN5XCIgPyA6IG51bWJlcixcclxuICBcIm9uQXBwTGF1bmNoUG9saWN5XCIgPyA6IGJvb2xlYW4sXHJcbiAgXCJvbk1vdmVCYWNrZ3JvdW5kUG9saWN5XCIgPyA6IGJvb2xlYW4sXHJcbiAgXCJvbkNhY2hlVGhyZXNob2xkUG9saWN5XCIgPyA6IG51bWJlclxyXG59XHJcbi8qKlxyXG4gKiBSZXBvcnRQb2xpY3kgdHlwZXNcclxuICovXHJcbmV4cG9ydCBlbnVtIFJlcG9ydFBvbGljeVR5cGUge1xyXG4gIE9OX1NDSEVEVUxFRF9USU1FX1BPTElDWSA9IFwiT05fU0NIRURVTEVEX1RJTUVfUE9MSUNZXCIsXHJcbiAgT05fQVBQX0xBVU5DSF9QT0xJQ1kgPSBcIk9OX0FQUF9MQVVOQ0hfUE9MSUNZXCIsXHJcbiAgT05fTU9WRV9CQUNLR1JPVU5EX1BPTElDWSA9IFwiT05fTU9WRV9CQUNLR1JPVU5EX1BPTElDWVwiLFxyXG4gIE9OX0NBQ0hFX1RIUkVTSE9MRF9QT0xJQ1kgPSBcIk9OX0NBQ0hFX1RIUkVTSE9MRF9QT0xJQ1lcIlxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ29uc3RhbnRzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vKipcclxuICogSGlBbmFseXRpY3NUb29scyBsb2cgbGV2ZWwgZW51bS5cclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ0xldmVsVHlwZSB7XHJcbiAgREVCVUcgPSAzLFxyXG4gIElORk8gPSA0LFxyXG4gIFdBUk4gPSA1LFxyXG4gIEVSUk9SID0gNlxyXG59XHJcbi8qKlxyXG4qIEhBVXNlclByb2ZpbGVUeXBlIHR5cGVzIGZvciBwcm92aWRlcyBjb25zdGFudHMgdGhhdCBkZWZpbmUgdGhlIG5hbWVzIG9mIGFsbCBwcmVkZWZpbmVkIHVzZXIgYXR0cmlidXRlcy5cclxuKi9cclxuZXhwb3J0IGVudW0gSEFVc2VyUHJvZmlsZVR5cGUge1xyXG4gIFVTRVJMRVZFTCA9IFwidXNlcl9sZXZlbFwiXHJcbn1cclxuLyoqXHJcbiAqIEhBRXZlbnRUeXBlIHR5cGVzIGZvciBwcm92aWRlcyB0aGUgSURzIG9mIGFsbCBwcmVkZWZpbmVkIGV2ZW50cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEhBRXZlbnRUeXBlIHtcclxuICBDUkVBVEVQQVlNRU5USU5GTyA9IFwiJENyZWF0ZVBheW1lbnRJbmZvXCIsXHJcbiAgQUREUFJPRFVDVDJDQVJUID0gXCIkQWRkUHJvZHVjdDJDYXJ0XCIsXHJcbiAgQUREUFJPRFVDVDJXSVNITElTVCA9IFwiJEFkZFByb2R1Y3QyV2lzaExpc3RcIixcclxuICBTVEFSVEFQUCA9IFwiJFN0YXJ0QXBwXCIsXHJcbiAgU1RBUlRDSEVDS09VVCA9IFwiJFN0YXJ0Q2hlY2tvdXRcIixcclxuICBWSUVXQ0FNUEFJR04gPSBcIiRWaWV3Q2FtcGFpZ25cIixcclxuICBWSUVXQ0hFQ0tPVVRTVEVQID0gXCIkVmlld0NoZWNrb3V0U3RlcFwiLFxyXG4gIFdJTlZJUlRVQUxDT0lOID0gXCIkV2luVmlydHVhbENvaW5cIixcclxuICBDT01QTEVURVBVUkNIQVNFID0gXCIkQ29tcGxldGVQdXJjaGFzZVwiLFxyXG4gIE9CVEFJTkxFQURTID0gXCIkT2J0YWluTGVhZHNcIixcclxuICBKT0lOVVNFUkdST1VQID0gXCIkSm9pblVzZXJHcm91cFwiLFxyXG4gIENPTVBMRVRFTEVWRUwgPSBcIiRDb21wbGV0ZUxldmVsXCIsXHJcbiAgU1RBUlRMRVZFTCA9IFwiJFN0YXJ0TGV2ZWxcIixcclxuICBVUEdSQURFTEVWRUwgPSBcIiRVcGdyYWRlTGV2ZWxcIixcclxuICBTSUdOSU4gPSBcIiRTaWduSW5cIixcclxuICBTSUdOT1VUID0gXCIkU2lnbk91dFwiLFxyXG4gIFNVQk1JVFNDT1JFID0gXCIkU3VibWl0U2NvcmVcIixcclxuICBDUkVBVEVPUkRFUiA9IFwiJENyZWF0ZU9yZGVyXCIsXHJcbiAgUkVGVU5ET1JERVIgPSBcIiRSZWZ1bmRPcmRlclwiLFxyXG4gIERFTFBST0RVQ1RGUk9NQ0FSVCA9IFwiJERlbFByb2R1Y3RGcm9tQ2FydFwiLFxyXG4gIFNFQVJDSCA9IFwiJFNlYXJjaFwiLFxyXG4gIFZJRVdDT05URU5UID0gXCIkVmlld0NvbnRlbnRcIixcclxuICBVUERBVEVDSEVDS09VVE9QVElPTiA9IFwiJFVwZGF0ZUNoZWNrb3V0T3B0aW9uXCIsXHJcbiAgU0hBUkVDT05URU5UID0gXCIkU2hhcmVDb250ZW50XCIsXHJcbiAgUkVHSVNURVJBQ0NPVU5UID0gXCIkUmVnaXN0ZXJBY2NvdW50XCIsXHJcbiAgQ09OU1VNRVZJUlRVQUxDT0lOID0gXCIkQ29uc3VtZVZpcnR1YWxDb2luXCIsXHJcbiAgU1RBUlRUVVRPUklBTCA9IFwiJFN0YXJ0VHV0b3JpYWxcIixcclxuICBDT01QTEVURVRVVE9SSUFMID0gXCIkQ29tcGxldGVUdXRvcmlhbFwiLFxyXG4gIE9CVEFJTkFDSElFVkVNRU5UID0gXCIkT2J0YWluQWNoaWV2ZW1lbnRcIixcclxuICBWSUVXUFJPRFVDVCA9IFwiJFZpZXdQcm9kdWN0XCIsXHJcbiAgVklFV1BST0RVQ1RMSVNUID0gXCIkVmlld1Byb2R1Y3RMaXN0XCIsXHJcbiAgVklFV1NFQVJDSFJFU1VMVCA9IFwiJFZpZXdTZWFyY2hSZXN1bHRcIixcclxuICBVUERBVEVNRU1CRVJTSElQTEVWRUwgPSBcIiRVcGRhdGVNZW1iZXJzaGlwTGV2ZWxcIixcclxuICBGSUxUUkFURVBST0RVQ1QgPSBcIiRGaWx0cmF0ZVByb2R1Y3RcIixcclxuICBWSUVXQ0FURUdPUlkgPSBcIiRWaWV3Q2F0ZWdvcnlcIixcclxuICBVUERBVEVPUkRFUiA9IFwiJFVwZGF0ZU9yZGVyXCIsXHJcbiAgQ0FOQ0VMT1JERVIgPSBcIiRDYW5jZWxPcmRlclwiLFxyXG4gIENPTVBMRVRFT1JERVIgPSBcIiRDb21wbGV0ZU9yZGVyXCIsXHJcbiAgQ0FOQ0VMQ0hFQ0tPVVQgPSBcIiRDYW5jZWxDaGVja291dFwiLFxyXG4gIE9CVEFJTlZPVUNIRVIgPSBcIiRPYnRhaW5Wb3VjaGVyXCIsXHJcbiAgQ09OVEFDVENVU1RPTVNFUlZJQ0UgPSBcIiRDb250YWN0Q3VzdG9tU2VydmljZVwiLFxyXG4gIFJBVEUgPSBcIiRSYXRlXCIsXHJcbiAgSU5WSVRFID0gXCIkSW52aXRlXCIsXHJcbiAgTk9WSUNFR1VJREVTVEFSVCA9IFwiJE5vdmljZUd1aWRlU3RhcnRcIixcclxuICBOT1ZJQ0VHVUlERUVORCA9IFwiJE5vdmljZUd1aWRlRW5kXCIsXHJcbiAgU1RBUlRHQU1FID0gXCIkU3RhcnRHYW1lXCIsXHJcbiAgRU5ER0FNRSA9IFwiJEVuZEdhbWVcIixcclxuICBXSU5QUk9QUyA9IFwiJFdpblByb3BzXCIsXHJcbiAgQ09OU1VNRVBST1BTID0gXCIkQ29uc3VtZVByb3BzXCJcclxufVxyXG5cclxuLyoqXHJcbiogSEFQYXJhbVR5cGUgdHlwZXMgZm9yIHByb3ZpZGVzIHRoZSBJRHMgb2YgYWxsIHByZWRlZmluZWQgcGFyYW1ldGVycywgXHJcbiogaW5jbHVkaW5nIHRoZSBJRHMgb2YgcHJlZGVmaW5lZCBwYXJhbWV0ZXJzIGFuZCB1c2VyIGF0dHJpYnV0ZXMuXHJcbiovXHJcbmV4cG9ydCBlbnVtIEhBUGFyYW1UeXBlIHtcclxuICBTVE9SRU5BTUUgPSBcIiRTdG9yZU5hbWVcIixcclxuICBCUkFORCA9IFwiJEJyYW5kXCIsXHJcbiAgQ0FURUdPUlkgPSBcIiRDYXRlZ29yeVwiLFxyXG4gIFBST0RVQ1RJRCA9IFwiJFByb2R1Y3RJZFwiLFxyXG4gIFBST0RVQ1ROQU1FID0gXCIkUHJvZHVjdE5hbWVcIixcclxuICBQUk9EVUNURkVBVFVSRSA9IFwiJFByb2R1Y3RGZWF0dXJlXCIsXHJcbiAgUFJJQ0UgPSBcIiRQcmljZVwiLFxyXG4gIFFVQU5USVRZID0gXCIkUXVhbnRpdHlcIixcclxuICBSRVZFTlVFID0gXCIkUmV2ZW51ZVwiLFxyXG4gIENVUlJOQU1FID0gXCIkQ3Vyck5hbWVcIixcclxuICBQTEFDRUlEID0gXCIkUGxhY2VJZFwiLFxyXG4gIERFU1RJTkFUSU9OID0gXCIkRGVzdGluYXRpb25cIixcclxuICBFTkREQVRFID0gXCIkRW5kRGF0ZVwiLFxyXG4gIEJPT0tJTkdEQVlTID0gXCIkQm9va2luZ0RheXNcIixcclxuICBQQVNTRU5HRVJTTlVNQkVSID0gXCIkUGFzc2VuZ2Vyc051bWJlclwiLFxyXG4gIEJPT0tJTkdST09NUyA9IFwiJEJvb2tpbmdSb29tc1wiLFxyXG4gIE9SSUdJTkFUSU5HUExBQ0UgPSBcIiRPcmlnaW5hdGluZ1BsYWNlXCIsXHJcbiAgQkVHSU5EQVRFID0gXCIkQmVnaW5EYXRlXCIsXHJcbiAgVFJBTlNBQ1RJT05JRCA9IFwiJFRyYW5zYWN0aW9uSWRcIixcclxuICBDTEFTUyA9IFwiJENsYXNzXCIsXHJcbiAgQ0xJQ0tJRCA9IFwiJENsaWNrSWRcIixcclxuICBQUk9NT1RJT05OQU1FID0gXCIkUHJvbW90aW9uTmFtZVwiLFxyXG4gIENPTlRFTlQgPSBcIiRDb250ZW50XCIsXHJcbiAgRVhURU5EUEFSQU0gPSBcIiRFeHRlbmRQYXJhbVwiLFxyXG4gIE1BVEVSSUFMTkFNRSA9IFwiJE1hdGVyaWFsTmFtZVwiLFxyXG4gIE1BVEVSSUFMU0xPVCA9IFwiJE1hdGVyaWFsU2xvdFwiLFxyXG4gIE1FRElVTSA9IFwiJE1lZGl1bVwiLFxyXG4gIFNPVVJDRSA9IFwiJFNvdXJjZVwiLFxyXG4gIEtFWVdPUkRTID0gXCIkS2V5d29yZHNcIixcclxuICBPUFRJT04gPSBcIiRPcHRpb25cIixcclxuICBTVEVQID0gXCIkU3RlcFwiLFxyXG4gIFZJUlRVQUxDVVJSTkFNRSA9IFwiJFZpcnR1YWxDdXJyTmFtZVwiLFxyXG4gIFZPVUNIRVIgPSBcIiRWb3VjaGVyXCIsXHJcbiAgUExBQ0UgPSBcIiRQbGFjZVwiLFxyXG4gIFNISVBQSU5HID0gXCIkU2hpcHBpbmdcIixcclxuICBUQVhGRUUgPSBcIiRUYXhGZWVcIixcclxuICBVU0VSR1JPVVBJRCA9IFwiJFVzZXJHcm91cElkXCIsXHJcbiAgTEVWRUxOQU1FID0gXCIkTGV2ZWxOYW1lXCIsXHJcbiAgUkVTVUxUID0gXCIkUmVzdWx0XCIsXHJcbiAgUk9MRU5BTUUgPSBcIiRSb2xlTmFtZVwiLFxyXG4gIExFVkVMSUQgPSBcIiRMZXZlbElkXCIsXHJcbiAgQ0hBTk5FTCA9IFwiJENoYW5uZWxcIixcclxuICBTQ09SRSA9IFwiJFNjb3JlXCIsXHJcbiAgU0VBUkNIS0VZV09SRFMgPSBcIiRTZWFyY2hLZXl3b3Jkc1wiLFxyXG4gIENPTlRFTlRUWVBFID0gXCIkQ29udGVudFR5cGVcIixcclxuICBBQ0hJRVZFTUVOVElEID0gXCIkQWNoaWV2ZW1lbnRJZFwiLFxyXG4gIEZMSUdIVE5PID0gXCIkRmxpZ2h0Tm9cIixcclxuICBQT1NJVElPTklEID0gXCIkUG9zaXRpb25JZFwiLFxyXG4gIFBST0RVQ1RMSVNUID0gXCIkUHJvZHVjdExpc3RcIixcclxuICBBQ09VTlRUWVBFID0gXCIkQWNvdW50VHlwZVwiLFxyXG4gIE9DQ1VSUkVEVElNRSA9IFwiJE9jY3VycmVkVGltZVwiLFxyXG4gIEVWVFJFU1VMVCA9IFwiJEV2dFJlc3VsdFwiLFxyXG4gIFBSRVZMRVZFTCA9IFwiJFByZXZMZXZlbFwiLFxyXG4gIENVUlJWTEVWRUwgPSBcIiRDdXJydkxldmVsXCIsXHJcbiAgVk9VQ0hFUlMgPSBcIiRWb3VjaGVyc1wiLFxyXG4gIE1BVEVSSUFMU0xPVFRZUEUgPSBcIiRNYXRlcmlhbFNsb3RUeXBlXCIsXHJcbiAgTElTVElEID0gXCIkTGlzdElkXCIsXHJcbiAgRklMVEVSUyA9IFwiJEZpbHRlcnNcIixcclxuICBTT1JUUyA9IFwiJFNvcnRzXCIsXHJcbiAgT1JERVJJRCA9IFwiJE9yZGVySWRcIixcclxuICBQQVlUWVBFID0gXCIkUGF5VHlwZVwiLFxyXG4gIFJFQVNPTiA9IFwiJFJlYXNvblwiLFxyXG4gIEVYUElSRURBVEUgPSBcIiRFeHBpcmVEYXRlXCIsXHJcbiAgVk9VQ0hFUlRZUEUgPSBcIiRWb3VjaGVyVHlwZVwiLFxyXG4gIFNFUlZJQ0VUWVBFID0gXCIkU2VydmljZVR5cGVcIixcclxuICBERVRBSUxTID0gXCIkRGV0YWlsc1wiLFxyXG4gIENPTU1FTlRUWVBFID0gXCIkQ29tbWVudFR5cGVcIixcclxuICBSRUdJU1RNRVRIT0QgPSBcIiRSZWdpc3RNZXRob2RcIixcclxuICBEVVJBVElPTiA9IFwiJER1cmF0aW9uXCIsXHJcbiAgTEVWRUwgPSBcIiRMZXZlbFwiLFxyXG4gIFBVUkNIQVNFRU5UUlkgPSBcIiRQdXJjaGFzZUVudHJ5XCIsXHJcbiAgUFJPUFMgPSBcIiRQcm9wc1wiLFxyXG4gIEVOVFJZID0gXCIkRW50cnlcIlxyXG59Il19