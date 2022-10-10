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

package com.huawei.hms.cordova.health.constants;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class HiHealthStatusCodesConstants {

    public static final int SUCCESS = 0;

    public static final int INTERNAL_ERROR = 8;

    public static final int NO_DATA_COLLECTOR_ERROR = -50000;

    public static final int EXISTED_RECORDER_ERROR = -50001;

    public static final int NO_SAVED_DEVICE_ERROR = -50002;

    public static final int NO_MONITOR_ERROR = -50003;

    public static final int NO_AUTHORITY_ERROR = 50000;

    public static final int DUPLICATED_DATA_TYPE_ERROR = 50001;

    public static final int MISMATCH_DATA_TYPE_ERROR = 50002;

    public static final int NOT_EXIST_DATA_TYPE_ERROR = 50003;

    public static final int APP_MISMATCH_ERROR = 50004;

    public static final int UNKNOWN_AUTH_ERROR = 50005;

    public static final int NO_BLE_PERMISSION_ERROR = 50006;

    public static final int UNSUPPORTED_PLATFORM_ERROR = 50007;

    public static final int TRY_AGAIN_ERROR = 50008;

    public static final int ACTIVITY_RECORD_ENDED_ERROR = 50009;

    public static final int APP_NOT_ENABLED_ERROR = 50010;

    public static final int API_EXCEPTION_ERROR = 50011;

    public static final int POLYMERIZED_NOT_SUPPORTED_ERROR = 50012;

    public static final int UNSUPPORTED_ACCOUNT_ERROR = 50013;

    public static final int BLUETOOTH_FORBIDDEN_ERROR = 50014;

    public static final int MISMATCH_PACKAGE_NAME_ERROR = 50015;

    public static final int NONEXISTENT_DATA_COLLECTOR_ERROR = 50018;

    public static final int SAMPLE_SET_TIMESTAMP_ERROR = 50019;

    public static final int ACTIVITY_RECORD_TIMESTAMPS_ERROR = 50020;

    public static final int USELESS_SAMPLE_POINT_ERROR = 50021;

    public static final int USELESS_TIMESTAMP_ERROR = 50022;

    public static final int UNSUPPORTED_DATA_TYPE_ERROR = 50023;

    public static final int NEED_APP_TRUSTLIST_ERROR = 50024;

    public static final int DATA_IS_TOO_LARGE = 50025;

    public static final int SYSTEM_VERSION_IS_INVALID = 50026;

    public static final int AGGREGATION_DATA_TYPE_NOT_ALLOWED = 50027;

    public static final int DATA_FIELD_MUST_FILLED = 50028;

    public static final int UNUSED_DATA_TYPE_NOT_ALLOWED = 50029;

    public static final int NO_NETWORK = 50030;

    public static final int INPUT_PARAM_MISSING = 50031;

    public static final int API_FUNCTION_UNAVAILABLE = 50032;

    public static final int APP_HEALTH_NOT_INSTALLED = 50033;

    public static final int APP_HEALTH_NOT_MATCH = 50034;

    public static final int LISTENER_ALREADY_EXIST = 50035;

    public static final int LISTENER_NOT_EXIST = 50036;

    public static final int HEALTH_APP_NOT_AUTHORISED = 50037;

    public static final int NON_HEALTH_USER = 50038;

    public static final int HEALTH_APP_INVALID_PACKAGENAME = 50039;

    public static final int UNTRUST_COUNTRY_CODE = 50040;

    public static final int ERROR_APP_PACKAGE_NAME = 50041;

    public static final int NO_ACTIVITY_PERMISSION = 50042;

    public static final int DATA_MIGRATION_ING = 50043;

    public static final int READ_LATEST_NOT_SUPPORTED_ERROR = 50044;

    public static final int HUAWEIID_NOT_LOGGED_IN = 50045;

    public static final int NO_REQUIRED_PERMISSION = 50046;

    public static final int HUAWEI_ID_SIGNIN_ERROR = 50047;

    public static final int USER_OF_BETA_APP_EXCEED_RANGE = 50048;

    public static final int INVALID_CONTEXT = 50049;

    public static final int HEALTH_RECORDS_NOT_EXIST = 50050;

    public static final int HEALTH_RECORDS_NOT_SUPPORT = 50051;

    public static final int DICT_PARSE_ERROR = 50052;

    public static final int DEVICES_NOT_SUPPORT = 50053;

    public static final int INVALID_ACTIVITY_TYPE_IN_ACTIVITY_RECORD = 50054;

    public static final int ACTIVITY_SUMMARY_DATATYPE_NOT_SUPPORT = 50057;

    public static final int INTERFACE_NOT_SUPPORT_IN_REGION = 50058;

    public static final int QUERY_TIME_EXCEED_LIMIT = 50059;

    public static final int DISABLE_DATA_OPERATION = 50061;

    public static final int APPLICATION_NOT_FORGROUND = 50062;

    public static final int HMS_CORE_VER_NOT_MATCH = 50063;

    public static final int APP_ALREADY_IN_WORKOUT = 50300;

    public static final int CALL_POWER_KIT_ERROR = 50301;

    public static final int MISS_MUST_DATA_TYPE = 50302;

    public static final int RECORD_NOT_SUPPORT_DATA_TYPE = 50303;

    public static final int WORK_OUT_TIME_OUT = 51000;

    public static final int WORK_OUT_BE_OCCUPIED = 51001;

    static final Map<Integer, String> ERROR_MSGS = new HashMap<>();

    static {
        ERROR_MSGS.put(SUCCESS, "SUCCESS");
        ERROR_MSGS.put(INTERNAL_ERROR, "INTERNAL_ERROR");
        ERROR_MSGS.put(NO_DATA_COLLECTOR_ERROR, "Success with no data collector");
        ERROR_MSGS.put(EXISTED_RECORDER_ERROR, "Success with already recorded");
        ERROR_MSGS.put(NO_SAVED_DEVICE_ERROR, "Success with no saved device");
        ERROR_MSGS.put(NO_MONITOR_ERROR, "Success with monitor not registered for fitness data updates");
        ERROR_MSGS.put(NO_AUTHORITY_ERROR, "Application requires user authorization");
        ERROR_MSGS.put(DUPLICATED_DATA_TYPE_ERROR, "The data type already exists");
        ERROR_MSGS.put(MISMATCH_DATA_TYPE_ERROR, "Data type does not match package name");
        ERROR_MSGS.put(NOT_EXIST_DATA_TYPE_ERROR, "Data type not exist");
        ERROR_MSGS.put(APP_MISMATCH_ERROR, "App mismatch");
        ERROR_MSGS.put(UNKNOWN_AUTH_ERROR, "Unknown authorization error");
        ERROR_MSGS.put(NO_BLE_PERMISSION_ERROR, "Missing ble device permission");
        ERROR_MSGS.put(UNSUPPORTED_PLATFORM_ERROR, "Unsupported platform");
        ERROR_MSGS.put(TRY_AGAIN_ERROR, "Temporary error");
        ERROR_MSGS.put(ACTIVITY_RECORD_ENDED_ERROR, "The activity record already has an end time");
        ERROR_MSGS.put(APP_NOT_ENABLED_ERROR, "Application not enabled");
        ERROR_MSGS.put(API_EXCEPTION_ERROR, "Api exception, please retry later");
        ERROR_MSGS.put(POLYMERIZED_NOT_SUPPORTED_ERROR, "Polymerize not supported");
        ERROR_MSGS.put(UNSUPPORTED_ACCOUNT_ERROR, "Unsupported account");
        ERROR_MSGS.put(BLUETOOTH_FORBIDDEN_ERROR, "Bluetooth is forbidden");
        ERROR_MSGS.put(MISMATCH_PACKAGE_NAME_ERROR, "Data collector does not match the application's package name");
        ERROR_MSGS.put(NONEXISTENT_DATA_COLLECTOR_ERROR, "Data collector not found");
        ERROR_MSGS.put(SAMPLE_SET_TIMESTAMP_ERROR, "Sample set timestamp inconsistent with update time range");
        ERROR_MSGS.put(ACTIVITY_RECORD_TIMESTAMPS_ERROR, "Invalid activity record timestamps");
        ERROR_MSGS.put(USELESS_SAMPLE_POINT_ERROR, "Invalid sample point");
        ERROR_MSGS.put(USELESS_TIMESTAMP_ERROR, "Invalid timestamp");
        ERROR_MSGS.put(UNSUPPORTED_DATA_TYPE_ERROR, "The data type is unsupported");
        ERROR_MSGS.put(NEED_APP_TRUSTLIST_ERROR, "Need application trust list");
        ERROR_MSGS.put(DATA_IS_TOO_LARGE, "Data is too large,please check time range");
        ERROR_MSGS.put(SYSTEM_VERSION_IS_INVALID, "Not support current system version");
        ERROR_MSGS.put(AGGREGATION_DATA_TYPE_NOT_ALLOWED,
                "Statistical aggregation data type, it is not allowed to directly use the inserted data");
        ERROR_MSGS.put(DATA_FIELD_MUST_FILLED, "The dataType of  insert data has required field must be filled");
        ERROR_MSGS.put(UNUSED_DATA_TYPE_NOT_ALLOWED, "unused data type");
        ERROR_MSGS.put(NO_NETWORK, "no internet access, please retry later");
        ERROR_MSGS.put(INPUT_PARAM_MISSING, "api input param missing");
        ERROR_MSGS.put(API_FUNCTION_UNAVAILABLE, "api function is unavailable.");
        ERROR_MSGS.put(APP_HEALTH_NOT_INSTALLED, "health app not installed.");
        ERROR_MSGS.put(APP_HEALTH_NOT_MATCH, "health app versionCode not match.");
        ERROR_MSGS.put(LISTENER_ALREADY_EXIST, "RealTime listener already exist.");
        ERROR_MSGS.put(LISTENER_NOT_EXIST, "RealTime listener not exist.");
        ERROR_MSGS.put(HEALTH_APP_NOT_AUTHORISED, "Health app not authorise to health kit.");
        ERROR_MSGS.put(NON_HEALTH_USER, "The data type is not supported");
        ERROR_MSGS.put(HEALTH_APP_INVALID_PACKAGENAME, "The function does not have the required permission.");
        ERROR_MSGS.put(UNTRUST_COUNTRY_CODE, "The Huawei account is not logged in.");
        ERROR_MSGS.put(ERROR_APP_PACKAGE_NAME, "The user of the beta application exceed the range.");
        ERROR_MSGS.put(NO_ACTIVITY_PERMISSION,
                "Invalid context. Currently, the service context cannot be transferred to trigger forcible upgrade. Please use the activity context.");
        ERROR_MSGS.put(DATA_MIGRATION_ING, "Invalid healthRecordId. Enter an existing healthRecordId and try again.");
        ERROR_MSGS.put(READ_LATEST_NOT_SUPPORTED_ERROR,
                "Invalid DataType. The current version supports tachycardia, bradycardia, health.record.sleep and their associated data types. please check.");
        ERROR_MSGS.put(HUAWEIID_NOT_LOGGED_IN,
                "An error occurs when the data dictionary is parsed. Please contact Huawei technical support.");
        ERROR_MSGS.put(NO_REQUIRED_PERMISSION,
                "The device hardware may not support the step sensor. please try another device.");
        ERROR_MSGS.put(HUAWEI_ID_SIGNIN_ERROR,
                "invalid activityType filled in, may not support ActivityRecordsController API, please check.");
        ERROR_MSGS.put(USER_OF_BETA_APP_EXCEED_RANGE, "JS Api exception, please retry later.");
        ERROR_MSGS.put(INVALID_CONTEXT, "JS Api param error, please check the input params.");
        ERROR_MSGS.put(HEALTH_RECORDS_NOT_EXIST, "Activity summary not support this dataType");
        ERROR_MSGS.put(HEALTH_RECORDS_NOT_SUPPORT, "This interface is not supported in this region.");
        ERROR_MSGS.put(DICT_PARSE_ERROR, "The query time in this api exceed the limit 30 days, please check it");
        ERROR_MSGS.put(DEVICES_NOT_SUPPORT, "The interface you called do not support on the device");
        ERROR_MSGS.put(INVALID_ACTIVITY_TYPE_IN_ACTIVITY_RECORD,
                "Disable data reading and writing while screen locked");
        ERROR_MSGS.put(ACTIVITY_SUMMARY_DATATYPE_NOT_SUPPORT,
                "Currently, only the following data types can be written into activity records:");
        ERROR_MSGS.put(INTERFACE_NOT_SUPPORT_IN_REGION,
                "Check whether the user is in a country or region that supports only Android SDK access.");
        ERROR_MSGS.put(QUERY_TIME_EXCEED_LIMIT,
                "Check the time range for data query. It is recommended that you set a time range within 31 days.");
        ERROR_MSGS.put(DISABLE_DATA_OPERATION,
                "Call APIs for reading or writing data when the screen is unlocked. Reading or writing data is not supported by the Health SDK when the screen is locked");
        ERROR_MSGS.put(APPLICATION_NOT_FORGROUND,
                "The app that calls the API currently is not a frontend app. Switch the app to the frontend and then try again.");
        ERROR_MSGS.put(HMS_CORE_VER_NOT_MATCH, "Install the latest version of HMS Core (APK) before calling the API.");
        ERROR_MSGS.put(APP_ALREADY_IN_WORKOUT, "End the activity record running in the background.");
        ERROR_MSGS.put(CALL_POWER_KIT_ERROR,
                "Make sure you are using a Huawei phone running EMUI 11.0 or later, or HarmonyOS.");
        ERROR_MSGS.put(MISS_MUST_DATA_TYPE,
                "Check whether mandatory data types associated with activity or health records are missing by referring to the development guide.");
        ERROR_MSGS.put(RECORD_NOT_SUPPORT_DATA_TYPE, "");
        ERROR_MSGS.put(WORK_OUT_TIME_OUT,
                "By default, an activity record is allowed to run in the background for 10 minutes. If you do not renew the application after the 10-minute period ends, the activity record will be canceled.");
        ERROR_MSGS.put(WORK_OUT_BE_OCCUPIED,
                "The user starts a new activity record in the background using a third-party app, and the current activity record is canceled.");
    }

    public HiHealthStatusCodesConstants() {
    }

    public static JSONObject toErrorJSON(final int errorCode) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", ERROR_MSGS.get(errorCode));
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", e.getMessage());
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(final int errorCode, final Throwable t) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", t.getMessage());
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", e.getMessage());
        }
        return new JSONObject();
    }

    public static JSONObject toErrorJSON(final int errorCode, final String t) {
        try {
            return new JSONObject().put("errorCode", errorCode).put("errorMessage", t);
        } catch (JSONException e) {
            Log.e("toErrorJSON get error: ", e.getMessage());
        }
        return new JSONObject();
    }
}
