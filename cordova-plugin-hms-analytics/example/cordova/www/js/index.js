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

var app = (function () {
    var init = function () {
        document.addEventListener('deviceready', onDeviceReady, false);
    };

    var onDeviceReady = function () {

        document.getElementById('btnSetAnalyticsEnabled').addEventListener('click', onSetAnalyticsEnabled);
        document.getElementById('btnConfig').addEventListener('click', onConfig);
        document.getElementById('btnGetAAID').addEventListener('click', onGetAAID);
        document.getElementById('btnOnEvent').addEventListener('click', onEvent);
        document.getElementById('btnsendPredefinedEvent').addEventListener('click', onSendPredefinedEvent);
        document.getElementById('btnSetUserId').addEventListener('click', onSetUserId);
        document.getElementById('btnSetUserProfile').addEventListener('click', onSetUserProfile);
        document.getElementById('btnGetUserProfiles').addEventListener('click', onGetUserProfiles);
        document.getElementById('btnSetPushToken').addEventListener('click', onSetPushToken);
        document.getElementById('btnSetMinActivitySessions').addEventListener('click', onSetMinActivitySessions);
        document.getElementById('btnSetSessionDuration').addEventListener('click', onSetSessionDuration);
        document.getElementById('btnClearCachedData').addEventListener('click', onClearCachedData);
        document.getElementById('btnEnableLog').addEventListener('click', onEnableLog);
        document.getElementById('btnEnableLogWithLevel').addEventListener('click', onEnableLogWithLevel);
        document.getElementById('btnPageStart').addEventListener('click', onPageStart);
        document.getElementById('btnPageEnd').addEventListener('click', onPageEnd);
        document.getElementById('btnshowHAParamType').addEventListener('click', onShowHAParamType);
        document.getElementById('btnshowHAEventType').addEventListener('click', onShowHAEventType);
        document.getElementById('btnSetReportPolicies').addEventListener('click', onSetReportPolicies);

    };

    init();

})();

/**
 * Specifies whether to enable event collection.
 * If the function is disabled, no data is recorded.
 */
async function onSetAnalyticsEnabled() {

    const set_analytics_enabled = document.getElementById("set_analytics_enabled").value;
    const bool_set_analytics_enabled = (set_analytics_enabled == "true");
    try {
        const result = await HMSAnalytics.setAnalyticsEnabled(bool_set_analytics_enabled);
        alert("enableLog -> Success : " + bool_set_analytics_enabled);
    } catch (err) {
        alert('enableLog -> Error : ' + err)
    }
}

/**
 * Initializes Analytics Kit for iOS Platform.
 * @note This method is only to support on iOS Platform.
 */
async function onConfig() {
    try {
        const result = await HMSAnalytics.config();
        alert("HMS config -> Success ");
    } catch (err) {
        alert('HMS config -> Error : ' + err)
    }
}

/**
 * Obtains the app instance ID from AppGallery Connect.
 */
async function onGetAAID() {
    try {
        const aaid = await HMSAnalytics.getAAID();
        alert('getAAID -> Success -> aaid : ' + aaid);
    } catch (err) {
        alert('getAAID -> Error : ' + err);
    }
}

/**
 * Report custom events.
 */
async function onEvent() {
    const name = 'event_name';
    const value = {
        "my_event_key": "my_event_value",
        "my_event_key_two": "my_event_value_two"
    };

    try {
        const event = await HMSAnalytics.onEvent(name, value);
        alert('onEvent -> Success');
    } catch (err) {
        alert('onEvent -> Error : ' + err);
    }
}

/**
 * Report predefined events.
 */
async function onSendPredefinedEvent() {
    const event_name = HMSAnalytics.HAEventType.SUBMITSCORE;
    const event_value = {}
    event_value[HMSAnalytics.HAParamType.SCORE] = 12;
    event_value[HMSAnalytics.HAParamType.CATEGORY] = "SPORT";
    try {
        const event = await HMSAnalytics.onEvent(event_name, event_value);
        alert('sendPredefinedEvent -> Success');
    } catch (err) {
        alert('sendPredefinedEvent -> Error : ' + err);
    }
}

/**
 * Set a user ID.
 * @important: When the setUserId API is called, if the old userId is not empty and is different from the new userId, a new session is generated.
 * If you do not want to use setUserId to identify a user (for example, when a user signs out), set userId to **null**.
 */
async function onSetUserId() {
    const txtUserId = document.getElementById("txt_user_id").value;
    if (txtUserId == "") {
        alert("Please fill out empty area");
    } else {
        try {
            const setUserId = await HMSAnalytics.setUserId(txtUserId);
            alert('setUserId -> Success');
        } catch (err) {
            alert('setUserId -> Error : ' + err);
        }
    }
}

/**
 * User attribute values remain unchanged throughout the app's lifecycle and session.
 * A maximum of 25 user attribute names are supported.
 * If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
 */
async function onSetUserProfile() {
    const txtUserProfileName = document.getElementById("user_profile_name").value;
    const txtUserProfileValue = document.getElementById("user_profile_value").value;

    if (txtUserProfileName === "" || txtUserProfileValue === "") {
        alert("Please fill out empty area");
    } else {
        try {
            const setUserProfile = await HMSAnalytics.setUserProfile(txtUserProfileName, txtUserProfileValue);
            alert('setUserProfile -> Success');
        } catch (err) {
            alert('setUserProfile -> Error : ' + err);
        }
    }
}

/**
 * Enables AB Testing. Predefined or custom user attributes are supported.
 */
async function onGetUserProfiles() {
    const user_profiles = document.getElementById("user_profiles").value;
    const bool_user_profiles = (user_profiles == "true");
    try {
        const userProfiles = await HMSAnalytics.getUserProfiles(bool_user_profiles);
        alert('getUserProfiles -> Success -> userProfile : ' + JSON.stringify(userProfiles));
    } catch (err) {
        alert('getUserProfiles -> Error : ' + err);
    }
}

/**
 * Sets the push token, which is obtained using the Push Kit.
 * @note This method is only to support on Android Platform.
 */
async function onSetPushToken() {
    const txtPushToken = "AFcSAHhhnxdrMCYBxth2QOG9IgY2VydAM61DTThqNux3KBC_hgzQQTadfgtDv"
    try {
        const setPushToken = await HMSAnalytics.setPushToken(txtPushToken);
        alert('setPushToken -> Success : ' + txtPushToken);
    } catch (err) {
        alert('setPushToken -> Error : ' + err);
    }
}

/**
 * Sets the minimum interval for starting a new session.
 */
async function onSetMinActivitySessions() {
    const txtMinActivitySessions = document.getElementById("txt_min_activity_sessions").value;
    const num_min_activity_sessions = parseInt(txtMinActivitySessions, 10);
    if (txtMinActivitySessions == "") {
        alert("Please fill out empty area");
    } else {
        try {
            const setMinActivitySessions = await HMSAnalytics.setMinActivitySessions(num_min_activity_sessions);
            alert('setMinActivitySessions -> Success');
        } catch (err) {
            alert('setMinActivitySessions -> Error : ' + err);
        }
    }
}

/**
 * Sets the session timeout interval.
 */
async function onSetSessionDuration() {

    const txt_session_duration = document.getElementById("txt_session_duration").value;
    const num_session_duration = parseInt(txt_session_duration, 10);

    if (txt_session_duration == "") {
        alert("Please fill out empty area");
    } else {
        try {
            const setSessionDuration = await HMSAnalytics.setSessionDuration(num_session_duration);
            alert('setSessionDuration -> Success');
        } catch (err) {
            alert('setSessionDuration -> Error : ' + err);
        }
    }
}

/**
 * Delete all collected data in the local cache, including the cached data that fails to be sent.
 */
async function onClearCachedData() {

    try {
        const clearCachedData = await HMSAnalytics.clearCachedData();
        alert('clearCachedData -> Success');
    } catch (err) {
        alert('clearCachedData -> Error : ' + err);
    }
}

/**
 * Enables the log function.
 * @note This method is only to support on Android Platform.
 */
async function onEnableLog() {
    try {
        const enableLog = await HMSAnalytics.enableLog();
        alert("enableLog -> Success");
    } catch (err) {
        alert('enableLog -> Error : ' + err)
    }
}


/**
 * Enables the debug log function and sets the minimum log level.
 * @note This method is only to support on Android Platform.
 */
async function onEnableLogWithLevel() {
    const enable_log_with_level = document.getElementById("enable_log_with_level").value;
    if (enable_log_with_level == "DEBUG" || enable_log_with_level == "INFO" || enable_log_with_level == "WARN" || enable_log_with_level == "ERROR") {
        try {
            const enableLogWithLevel = await HMSAnalytics.enableLogWithLevel(enable_log_with_level);
            alert('enableLogWithLevel -> Success');
        } catch (err) {
            alert('enableLogWithLevel -> Error : ' + err);
        }

    } else {
        alert("Wrong Input Format");
    }
}

/**
 * Defines a custom page entry event.
 * @note This method is only to support on Android Platform.
 */
async function onPageStart() {

    const txt_start_page_name = document.getElementById("txt_start_page_name").value;
    const txt_start_page_class_override = document.getElementById("txt_start_page_class_override").value;
    if (txt_start_page_name == "" || txt_start_page_class_override == "") {
        alert("Please fill out empty area");
    } else {
        try {

            const pageStart = await HMSAnalytics.pageStart(txt_start_page_name, txt_start_page_class_override);
            alert('pageStart -> Success');
        } catch (err) {
            alert('pageStart -> Error : ' + err);
        }
    }
}

/**
 * Defines a custom page exit event.
 * @note This method is only to support on Android Platform.
 */
async function onPageEnd() {

    const txt_end_page_name = document.getElementById("txt_end_page_name").value;
    if (txt_end_page_name == "") {
        alert("Please fill out empty area");
    } else {
        try {

            const pageEnd = await HMSAnalytics.pageEnd(txt_end_page_name);
            alert('pageEnd -> Success' + pageEnd);
        } catch (err) {
            alert('pageEnd -> Error : ' + err);
        }
    }
}

function onShowHAParamType() {
    alert(JSON.stringify(HMSAnalytics.HAParamType));
}

function onShowHAEventType() {
    alert(JSON.stringify(HMSAnalytics.HAEventType));
}

/**
 * Sets data reporting policies.
 * @note This method is only to support on iOS Platform.
 */
async function onSetReportPolicies() {
    const reportPolicies = {
        onScheduledTimePolicy: 300,
        onAppLaunchPolicy: true,
        onMoveBackgroundPolicy: true,
        onCacheThresholdPolicy: 350,
    }
    try {
        const result = await HMSAnalytics.setReportPolicies(reportPolicies);
        alert("HMS setReportPolicies -> Success");
    } catch (err) {
        alert('HMS setReportPolicies -> Error : ' + err)
    }
}