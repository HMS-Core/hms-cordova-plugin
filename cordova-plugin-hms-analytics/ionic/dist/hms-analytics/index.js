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

var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAnalyticsOriginal = /** @class */ (function(_super) {
    __extends(HMSAnalyticsOriginal, _super);

    function HMSAnalyticsOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HAParamType = HAParamType;
        _this.HAEventType = HAEventType;
        return _this;
    }
    HMSAnalyticsOriginal.prototype.setAnalyticsEnabled = function(enabled) { return cordova(this, "setAnalyticsEnabled", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.config = function () { return cordova(this, "config", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.getAAID = function() { return cordova(this, "getAAID", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.onEvent = function(eventId, value) { return cordova(this, "onEvent", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setUserId = function(userId) { return cordova(this, "setUserId", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setUserProfile = function(name, value) { return cordova(this, "setUserProfile", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.getUserProfiles = function(predefined) { return cordova(this, "getUserProfiles", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.enableLog = function() { return cordova(this, "enableLog", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.enableLogWithLevel = function(logLevel) { return cordova(this, "enableLogWithLevel", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setPushToken = function(token) { return cordova(this, "setPushToken", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setMinActivitySessions = function(interval) { return cordova(this, "setMinActivitySessions", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setSessionDuration = function(duration) { return cordova(this, "setSessionDuration", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.clearCachedData = function() { return cordova(this, "clearCachedData", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.pageStart = function(pageName, pageClassOverride) { return cordova(this, "pageStart", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.pageEnd = function(pageName) { return cordova(this, "pageEnd", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.setReportPolicies = function(reportPolicyType) { return cordova(this, "setReportPolicies", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.enableLogger = function() { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.prototype.disableLogger = function() { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSAnalyticsOriginal.pluginName = "HmsAnalytics";
    HMSAnalyticsOriginal.plugin = "cordova-plugin-hms-analytics";
    HMSAnalyticsOriginal.pluginRef = "HMSAnalytics";
    HMSAnalyticsOriginal.platforms = ["Android","iOS"];
    return HMSAnalyticsOriginal;
}(IonicNativePlugin));
var HMSAnalytics = new HMSAnalyticsOriginal();
export { HMSAnalytics };

export var HAEventType;
(function(HAEventType) {
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
export var HAParamType;
(function(HAParamType) {
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
})(HAParamType || (HAParamType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQVUxRixnQ0FBaUI7OztRQUVqRCxpQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixpQkFBVyxHQUFHLFdBQVcsQ0FBQzs7O0lBRzFCLGdDQUFTO0lBS1QseUNBQWtCLGFBQUMsUUFBZTtJQUtsQyxnQ0FBUyxhQUFDLE1BQWM7SUFLeEIscUNBQWMsYUFBQyxJQUFZLEVBQUUsS0FBYTtJQUsxQyxtQ0FBWSxhQUFDLEtBQWE7SUFLMUIsNkNBQXNCLGFBQUMsUUFBZ0I7SUFLdkMseUNBQWtCLGFBQUMsUUFBZ0I7SUFLbkMseUNBQWtCLGFBQUMsWUFBb0IsRUFBRSxtQkFBMkI7SUFLcEUsOEJBQU8sYUFBQyxHQUF5QixFQUFFLEtBQTJCO0lBSzlELHNDQUFlO0lBS2YsOEJBQU87SUFLUCxzQ0FBZSxhQUFDLFVBQW1COzs7Ozt1QkF4RnJDO0VBMkJrQyxpQkFBaUI7U0FBdEMsWUFBWTtBQWdGekIsTUFBTSxDQUFOLElBQVksV0FnQ1g7QUFoQ0QsV0FBWSxXQUFXO0lBQ3JCLHVEQUF3QyxDQUFBO0lBQ3hDLG1EQUFvQyxDQUFBO0lBQ3BDLDJEQUE0QyxDQUFBO0lBQzVDLHFDQUFzQixDQUFBO0lBQ3RCLCtDQUFnQyxDQUFBO0lBQ2hDLDZDQUE4QixDQUFBO0lBQzlCLHFEQUFzQyxDQUFBO0lBQ3RDLGlEQUFrQyxDQUFBO0lBQ2xDLHFEQUFzQyxDQUFBO0lBQ3RDLDJDQUE0QixDQUFBO0lBQzVCLCtDQUFnQyxDQUFBO0lBQ2hDLCtDQUFnQyxDQUFBO0lBQ2hDLHlDQUEwQixDQUFBO0lBQzFCLDZDQUE4QixDQUFBO0lBQzlCLGlDQUFrQixDQUFBO0lBQ2xCLDJDQUE0QixDQUFBO0lBQzVCLDJDQUE0QixDQUFBO0lBQzVCLDJDQUE0QixDQUFBO0lBQzVCLHlEQUEwQyxDQUFBO0lBQzFDLGlDQUFrQixDQUFBO0lBQ2xCLDJDQUE0QixDQUFBO0lBQzVCLDZEQUE4QyxDQUFBO0lBQzlDLDZDQUE4QixDQUFBO0lBQzlCLG1EQUFvQyxDQUFBO0lBQ3BDLHlEQUEwQyxDQUFBO0lBQzFDLCtDQUFnQyxDQUFBO0lBQ2hDLHFEQUFzQyxDQUFBO0lBQ3RDLHVEQUF3QyxDQUFBO0lBQ3hDLDJDQUE0QixDQUFBO0lBQzVCLG1EQUFvQyxDQUFBO0lBQ3BDLHFEQUFzQyxDQUFBO0FBQ3hDLENBQUMsRUFoQ1csV0FBVyxLQUFYLFdBQVcsUUFnQ3RCO0FBQ0QsTUFBTSxDQUFOLElBQVksV0FrRFg7QUFsREQsV0FBWSxXQUFXO0lBQ3JCLHVDQUF3QixDQUFBO0lBQ3hCLCtCQUFnQixDQUFBO0lBQ2hCLHFDQUFzQixDQUFBO0lBQ3RCLHVDQUF3QixDQUFBO0lBQ3hCLDJDQUE0QixDQUFBO0lBQzVCLGlEQUFrQyxDQUFBO0lBQ2xDLCtCQUFnQixDQUFBO0lBQ2hCLHFDQUFzQixDQUFBO0lBQ3RCLG1DQUFvQixDQUFBO0lBQ3BCLHFDQUFzQixDQUFBO0lBQ3RCLG1DQUFvQixDQUFBO0lBQ3BCLDJDQUE0QixDQUFBO0lBQzVCLG1DQUFvQixDQUFBO0lBQ3BCLDJDQUE0QixDQUFBO0lBQzVCLHFEQUFzQyxDQUFBO0lBQ3RDLDZDQUE4QixDQUFBO0lBQzlCLHFEQUFzQyxDQUFBO0lBQ3RDLHVDQUF3QixDQUFBO0lBQ3hCLCtDQUFnQyxDQUFBO0lBQ2hDLCtCQUFnQixDQUFBO0lBQ2hCLG1DQUFvQixDQUFBO0lBQ3BCLCtDQUFnQyxDQUFBO0lBQ2hDLG1DQUFvQixDQUFBO0lBQ3BCLDJDQUE0QixDQUFBO0lBQzVCLDZDQUE4QixDQUFBO0lBQzlCLDZDQUE4QixDQUFBO0lBQzlCLGlDQUFrQixDQUFBO0lBQ2xCLGlDQUFrQixDQUFBO0lBQ2xCLHFDQUFzQixDQUFBO0lBQ3RCLGlDQUFrQixDQUFBO0lBQ2xCLDZCQUFjLENBQUE7SUFDZCxtREFBb0MsQ0FBQTtJQUNwQyxtQ0FBb0IsQ0FBQTtJQUNwQiwrQkFBZ0IsQ0FBQTtJQUNoQixxQ0FBc0IsQ0FBQTtJQUN0QixpQ0FBa0IsQ0FBQTtJQUNsQiwyQ0FBNEIsQ0FBQTtJQUM1Qix1Q0FBd0IsQ0FBQTtJQUN4QixpQ0FBa0IsQ0FBQTtJQUNsQixxQ0FBc0IsQ0FBQTtJQUN0QixtQ0FBb0IsQ0FBQTtJQUNwQixtQ0FBb0IsQ0FBQTtJQUNwQiwrQkFBZ0IsQ0FBQTtJQUNoQixpREFBa0MsQ0FBQTtJQUNsQywyQ0FBNEIsQ0FBQTtJQUM1QiwrQ0FBZ0MsQ0FBQTtJQUNoQyxxQ0FBc0IsQ0FBQTtJQUN0Qix5Q0FBMEIsQ0FBQTtJQUMxQiwyQ0FBNEIsQ0FBQTtBQUM5QixDQUFDLEVBbERXLFdBQVcsS0FBWCxXQUFXLFFBa0R0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSG1zQW5hbHl0aWNzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtYW5hbHl0aWNzJyxcclxuICBwbHVnaW5SZWY6ICdITVNBbmFseXRpY3MnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TQW5hbHl0aWNzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBIQVBhcmFtVHlwZSA9IEhBUGFyYW1UeXBlO1xyXG4gIEhBRXZlbnRUeXBlID0gSEFFdmVudFR5cGU7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dXaXRoTGV2ZWwobG9nTGV2ZWw6IExldmVsKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRVc2VyUHJvZmlsZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0UHVzaFRva2VuKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0TWluQWN0aXZpdHlTZXNzaW9ucyhpbnRlcnZhbDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldFNlc3Npb25EdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldEN1cnJlbnRBY3Rpdml0eShhY3Rpdml0eU5hbWU6IHN0cmluZywgc2NyZWVuQ2xhc3NPdmVycmlkZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uRXZlbnQoa2V5OiBIQUV2ZW50VHlwZSB8IHN0cmluZywgdmFsdWU6IEhBUGFyYW1UeXBlIHwgUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGNsZWFyQ2FjaGVkRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZ2V0QUFJRCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBnZXRVc2VyUHJvZmlsZXMocHJlZGVmaW5lZDogYm9vbGVhbik6IFByb21pc2U8UGFyYW1zIHwgUHJvZmlsZXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGVzIHtcclxuICBcIl9zeXNfbGFuZ3VhZ2VcIjogc3RyaW5nO1xyXG4gIFwiX2FwcF92ZXJcIjogc3RyaW5nO1xyXG4gIFwiX21vZGVsXCI6IHN0cmluZztcclxuICBcIl9vc192ZXJcIjogc3RyaW5nO1xyXG4gIFwiX21hbnVmYWN0dXJlclwiOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIExldmVsID0gXCJERUJVR1wiIHwgXCJJTkZPXCIgfCBcIldBUk5cIiB8IFwiRVJST1JcIjtcclxuZXhwb3J0IGVudW0gSEFFdmVudFR5cGUge1xyXG4gIENSRUFURVBBWU1FTlRJTkZPID0gXCIkQ3JlYXRlUGF5bWVudEluZm9cIixcclxuICBBRERQUk9EVUNUMkNBUlQgPSBcIiRBZGRQcm9kdWN0MkNhcnRcIixcclxuICBBRERQUk9EVUNUMldJU0hMSVNUID0gXCIkQWRkUHJvZHVjdDJXaXNoTGlzdFwiLFxyXG4gIFNUQVJUQVBQID0gXCIkU3RhcnRBcHBcIixcclxuICBTVEFSVENIRUNLT1VUID0gXCIkU3RhcnRDaGVja291dFwiLFxyXG4gIFZJRVdDQU1QQUlHTiA9IFwiJFZpZXdDYW1wYWlnblwiLFxyXG4gIFZJRVdDSEVDS09VVFNURVAgPSBcIiRWaWV3Q2hlY2tvdXRTdGVwXCIsXHJcbiAgV0lOVklSVFVBTENPSU4gPSBcIiRXaW5WaXJ0dWFsQ29pblwiLFxyXG4gIENPTVBMRVRFUFVSQ0hBU0UgPSBcIiRDb21wbGV0ZVB1cmNoYXNlXCIsXHJcbiAgT0JUQUlOTEVBRFMgPSBcIiRPYnRhaW5MZWFkc1wiLFxyXG4gIEpPSU5VU0VSR1JPVVAgPSBcIiRKb2luVXNlckdyb3VwXCIsXHJcbiAgQ09NUExFVEVMRVZFTCA9IFwiJENvbXBsZXRlTGV2ZWxcIixcclxuICBTVEFSVExFVkVMID0gXCIkU3RhcnRMZXZlbFwiLFxyXG4gIFVQR1JBREVMRVZFTCA9IFwiJFVwZ3JhZGVMZXZlbFwiLFxyXG4gIFNJR05JTiA9IFwiJFNpZ25JblwiLFxyXG4gIFNVQk1JVFNDT1JFID0gXCIkU3VibWl0U2NvcmVcIixcclxuICBDUkVBVEVPUkRFUiA9IFwiJENyZWF0ZU9yZGVyXCIsXHJcbiAgUkVGVU5ET1JERVIgPSBcIiRSZWZ1bmRPcmRlclwiLFxyXG4gIERFTFBST0RVQ1RGUk9NQ0FSVCA9IFwiJERlbFByb2R1Y3RGcm9tQ2FydFwiLFxyXG4gIFNFQVJDSCA9IFwiJFNlYXJjaFwiLFxyXG4gIFZJRVdDT05URU5UID0gXCIkVmlld0NvbnRlbnRcIixcclxuICBVUERBVEVDSEVDS09VVE9QVElPTiA9IFwiJFVwZGF0ZUNoZWNrb3V0T3B0aW9uXCIsXHJcbiAgU0hBUkVDT05URU5UID0gXCIkU2hhcmVDb250ZW50XCIsXHJcbiAgUkVHSVNURVJBQ0NPVU5UID0gXCIkUmVnaXN0ZXJBY2NvdW50XCIsXHJcbiAgQ09OU1VNRVZJUlRVQUxDT0lOID0gXCIkQ29uc3VtZVZpcnR1YWxDb2luXCIsXHJcbiAgU1RBUlRUVVRPUklBTCA9IFwiJFN0YXJ0VHV0b3JpYWxcIixcclxuICBDT01QTEVURVRVVE9SSUFMID0gXCIkQ29tcGxldGVUdXRvcmlhbFwiLFxyXG4gIE9CVEFJTkFDSElFVkVNRU5UID0gXCIkT2J0YWluQWNoaWV2ZW1lbnRcIixcclxuICBWSUVXUFJPRFVDVCA9IFwiJFZpZXdQcm9kdWN0XCIsXHJcbiAgVklFV1BST0RVQ1RMSVNUID0gXCIkVmlld1Byb2R1Y3RMaXN0XCIsXHJcbiAgVklFV1NFQVJDSFJFU1VMVCA9IFwiJFZpZXdTZWFyY2hSZXN1bHRcIlxyXG59XHJcbmV4cG9ydCBlbnVtIEhBUGFyYW1UeXBlIHtcclxuICBTVE9SRU5BTUUgPSBcIiRTdG9yZU5hbWVcIixcclxuICBCUkFORCA9IFwiJEJyYW5kXCIsXHJcbiAgQ0FURUdPUlkgPSBcIiRDYXRlZ29yeVwiLFxyXG4gIFBST0RVQ1RJRCA9IFwiJFByb2R1Y3RJZFwiLFxyXG4gIFBST0RVQ1ROQU1FID0gXCIkUHJvZHVjdE5hbWVcIixcclxuICBQUk9EVUNURkVBVFVSRSA9IFwiJFByb2R1Y3RGZWF0dXJlXCIsXHJcbiAgUFJJQ0UgPSBcIiRQcmljZVwiLFxyXG4gIFFVQU5USVRZID0gXCIkUXVhbnRpdHlcIixcclxuICBSRVZFTlVFID0gXCIkUmV2ZW51ZVwiLFxyXG4gIENVUlJOQU1FID0gXCIkQ3Vyck5hbWVcIixcclxuICBQTEFDRUlEID0gXCIkUGxhY2VJZFwiLFxyXG4gIERFU1RJTkFUSU9OID0gXCIkRGVzdGluYXRpb25cIixcclxuICBFTkREQVRFID0gXCIkRW5kRGF0ZVwiLFxyXG4gIEJPT0tJTkdEQVlTID0gXCIkQm9va2luZ0RheXNcIixcclxuICBQQVNTRU5HRVJTTlVNQkVSID0gXCIkUGFzc2VuZ2Vyc051bWJlclwiLFxyXG4gIEJPT0tJTkdST09NUyA9IFwiJEJvb2tpbmdSb29tc1wiLFxyXG4gIE9SSUdJTkFUSU5HUExBQ0UgPSBcIiRPcmlnaW5hdGluZ1BsYWNlXCIsXHJcbiAgQkVHSU5EQVRFID0gXCIkQmVnaW5EYXRlXCIsXHJcbiAgVFJBTlNBQ1RJT05JRCA9IFwiJFRyYW5zYWN0aW9uSWRcIixcclxuICBDTEFTUyA9IFwiJENsYXNzXCIsXHJcbiAgQ0xJQ0tJRCA9IFwiJENsaWNrSWRcIixcclxuICBQUk9NT1RJT05OQU1FID0gXCIkUHJvbW90aW9uTmFtZVwiLFxyXG4gIENPTlRFTlQgPSBcIiRDb250ZW50XCIsXHJcbiAgRVhURU5EUEFSQU0gPSBcIiRFeHRlbmRQYXJhbVwiLFxyXG4gIE1BVEVSSUFMTkFNRSA9IFwiJE1hdGVyaWFsTmFtZVwiLFxyXG4gIE1BVEVSSUFMU0xPVCA9IFwiJE1hdGVyaWFsU2xvdFwiLFxyXG4gIE1FRElVTSA9IFwiJE1lZGl1bVwiLFxyXG4gIFNPVVJDRSA9IFwiJFNvdXJjZVwiLFxyXG4gIEtFWVdPUkRTID0gXCIkS2V5d29yZHNcIixcclxuICBPUFRJT04gPSBcIiRPcHRpb25cIixcclxuICBTVEVQID0gXCIkU3RlcFwiLFxyXG4gIFZJUlRVQUxDVVJSTkFNRSA9IFwiJFZpcnR1YWxDdXJyTmFtZVwiLFxyXG4gIFZPVUNIRVIgPSBcIiRWb3VjaGVyXCIsXHJcbiAgUExBQ0UgPSBcIiRQbGFjZVwiLFxyXG4gIFNISVBQSU5HID0gXCIkU2hpcHBpbmdcIixcclxuICBUQVhGRUUgPSBcIiRUYXhGZWVcIixcclxuICBVU0VSR1JPVVBJRCA9IFwiJFVzZXJHcm91cElkXCIsXHJcbiAgTEVWRUxOQU1FID0gXCIkTGV2ZWxOYW1lXCIsXHJcbiAgUkVTVUxUID0gXCIkUmVzdWx0XCIsXHJcbiAgUk9MRU5BTUUgPSBcIiRSb2xlTmFtZVwiLFxyXG4gIExFVkVMSUQgPSBcIiRMZXZlbElkXCIsXHJcbiAgQ0hBTk5FTCA9IFwiJENoYW5uZWxcIixcclxuICBTQ09SRSA9IFwiJFNjb3JlXCIsXHJcbiAgU0VBUkNIS0VZV09SRFMgPSBcIiRTZWFyY2hLZXl3b3Jkc1wiLFxyXG4gIENPTlRFTlRUWVBFID0gXCIkQ29udGVudFR5cGVcIixcclxuICBBQ0hJRVZFTUVOVElEID0gXCIkQWNoaWV2ZW1lbnRJZFwiLFxyXG4gIEZMSUdIVE5PID0gXCIkRmxpZ2h0Tm9cIixcclxuICBQT1NJVElPTklEID0gXCIkUG9zaXRpb25JZFwiLFxyXG4gIFBST0RVQ1RMSVNUID0gXCIkUHJvZHVjdExpc3RcIlxyXG59XHJcbiJdfQ==