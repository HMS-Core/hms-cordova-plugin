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

import { exec } from 'cordova';

/**
 * Provides methods to obtain HiAnalytics Kit functions both In Android & IOS Platforms.
 */
class HMSAnalyticsAPI {

    HAParamType = HAParamType;
    HAEventType = HAEventType;

    asyncExecute(action: string, param: any): Promise < any > {
        return new Promise((resolve, reject) => {
            exec(resolve, reject, 'cordova-plugin-hms-analytics', action,
                (param === undefined || param === null) ? [{}] : [param]);
        });
    }

    /**
     * Specifies whether to enable event collection.
     * If the function is disabled, no data is recorded.
     */
    setAnalyticsEnabled(enabled: boolean): Promise < void > {
        return this.asyncExecute('setAnalyticsEnabled', {
            enabled
        });
    }

    /**
     * Initializes Analytics Kit.
     * @note This method is only to support on iOS Platform.
     */
    config(): Promise < void > {
        return this.asyncExecute('config', {});
    }

    /**
     * Obtains the app instance ID from AppGallery Connect.
     */
    getAAID(): Promise < string > {
        return this.asyncExecute('getAAID', {});
    }

    /**
     * Report events.
     */
    onEvent(eventId: HAEventType | string, value: HAParamType | EventParams): Promise < void > {

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
    setUserId(userId: string): Promise < void > {
        return this.asyncExecute('setUserId', {
            userId
        });
    }

    /**
     * User attribute values remain unchanged throughout the app's lifecycle and session.
     * A maximum of 25 user attribute names are supported.
     * If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
     */
    setUserProfile(name: string, value: string): Promise < void > {
        return this.asyncExecute('setUserProfile', {
            key: name,
            value: value
        });
    }

    /**
     * Enables AB Testing. Predefined or custom user attributes are supported.
     */
    getUserProfiles(predefined: boolean): Promise < UserProfiles > {
        return this.asyncExecute('getUserProfiles', {
            predefined
        });
    }

    /**
     * Enables the log method.
     * @note This method is only to support on Android Platform.
     */
    enableLog(): Promise < void > {
        return this.asyncExecute('enableLog', {});
    }

    /**
     * Enables the debug log method and sets the minimum log level.
     * @note This method is only to support on Android Platform.
     */
    enableLogWithLevel(logLevel: LogLevel): Promise < void > {
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
    setPushToken(token: string): Promise < any > {
        return this.asyncExecute('setPushToken', {
            token
        });
    }

    /**
     * Sets the minimum interval for starting a new session.
     */
    setMinActivitySessions(interval: number): Promise < void > {
        return this.asyncExecute('setMinActivitySessions', {
            interval
        });
    }

    /**
     * Sets the session timeout interval.
     */
    setSessionDuration(duration: number): Promise < void > {
        return this.asyncExecute('setSessionDuration', {
            duration
        });
    }

    /**
     * Defines a custom page entry event.
     * @note This method is only to support on Android Platform.
     */
    pageStart(pageName: string, pageClassOverride: string): Promise < void > {
        return this.asyncExecute('pageStart', {
            pageName,
            pageClassOverride
        });
    }

    /**
     * Defines a custom page exit event.
     * @note This method is only to support on Android Platform.
     */
    pageEnd(pageName: string): Promise < void > {
        return this.asyncExecute('pageEnd', {
            pageName
        });
    }

    /**
     * Delete all collected data in the local cache, including the cached data that fails to be sent.
     */
    clearCachedData(): Promise < void > {
        return this.asyncExecute('clearCachedData', {});
    }

    /**
     * Sets data reporting policies.
     * @note This method is only to support on iOS Platform.
     */
    setReportPolicies(reportPolicyType: HAReportPolicy): Promise < void > {
        return this.asyncExecute('setReportPolicies', {
            reportPolicyType
        });
    }

    /**
     * This method enables HMSLogger capability which is used for sending usage analytics of 
     * AppLinking SDK's methods to improve the service quality.
     */
    enableLogger(): Promise < void > {
        return this.asyncExecute('enableLoggler', {});
    }

    /**
     * This method disables HMSLogger capability which is used for sending usage analytics of 
     * AppLinking SDK's methods to improve the service quality.
     */
    disableLogger(): Promise < void > {
        return this.asyncExecute('disableLogger', {});
    }
}

interface GenericObject {
    [key: string]: string;
}

type UserProfiles = GenericObject;
type EventParams = GenericObject;

type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

/**
 * HAReportPolicy types for sets data reporting policies.
 */
interface HAReportPolicy {
    "onScheduledTimePolicy" ? : number,
    "onAppLaunchPolicy" ? : boolean,
    "onMoveBackgroundPolicy" ? : boolean,
    "onCacheThresholdPolicy" ? : number
}
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
enum HAEventType {
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
enum HAParamType {
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
export = new HMSAnalyticsAPI();