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

document.addEventListener("deviceready", onDeviceReady, false);
const $ = (id) => document.getElementById(id);

function onDeviceReady() {
    console.log("onDeviceReady");
}


/**
 * Specifies whether to enable event collection.
 * If the function is disabled, no data is recorded.
 */
$("setAnalyticsEnabled").onclick = async() => {
    const set_analytics_enabled = $("set_analytics_enabled").value;
    const enabled = (set_analytics_enabled === "true");
    HMSAnalytics.setAnalyticsEnabled(enabled)
        .then(() => {
            alert("setAnalyticsEnabled :: Success");
        })
        .catch((error) => alert("setAnalyticsEnabled :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Set a user ID.
 * @important: When the setUserId API is called, if the old userId is not empty and is different from the new userId, a new session is generated.
 * If you do not want to use setUserId to identify a user (for example, when a user signs out), set userId to **null**.
 */
$("setUserId").onclick = async() => {
    const userId = $("txt_user_id").value;
    if (userId === "") {
        alert("Please fill out empty area");
    } else {
        HMSAnalytics.setUserId(userId)
            .then(() => {
                alert("setUserId :: Success");
            })
            .catch((error) => alert("setUserId :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * User attribute values remain unchanged throughout the app's lifecycle and session.
 * A maximum of 25 user attribute names are supported.
 * If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
 */
$("setUserProfile").onclick = async() => {
    const name = $("user_profile_name").value;
    const value = $("user_profile_value").value;
    if (name === "" || value === "") {
        alert("Please fill out empty area");
    } else {
        HMSAnalytics.setUserProfile(name, value)
            .then(() => {
                alert("setUserProfile :: Success");
            })
            .catch((error) => alert("setUserProfile :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * User attribute name
 */
$("deleteUserProfile").onclick = async() => {
    const name = $("delete_user_profile_name").value;
    if (name === "") {
        alert("Please fill out empty area");
    } else {
        HMSAnalytics.deleteUserProfile(name)
            .then(() => {
                alert("deleteUserProfile :: Success");
            })
            .catch((error) => alert("deleteUserProfile :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * Sets the push token, which is obtained using the Push Kit.
 * @note This method is only to support on Android Platform.
 */
$("setPushToken").onclick = async() => {
    const pushToken = "AFcSAHhhnxdrMCYBxth2QOG9IgY2VydAM61DTThqNux3KBC_hgzQQTadfgtDv";
    HMSAnalytics.setPushToken(pushToken)
        .then(() => {
            alert("setPushToken :: Success");
        })
        .catch((error) => alert("setPushToken :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Sets the minimum interval for starting a new session.
 */
$("setMinActivitySessions").onclick = async() => {
    const txtMinActivitySessions = $("txt_min_activity_sessions").value;
    if (txtMinActivitySessions === "") {
        alert("Please fill out empty area");
    } else {
        const milliseconds = parseInt(txtMinActivitySessions, 10);
        HMSAnalytics.setMinActivitySessions(milliseconds)
            .then(() => {
                alert("setMinActivitySessions :: Success");
            })
            .catch((error) => alert("setMinActivitySessions :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * Sets the session timeout interval.
 */
$("setSessionDuration").onclick = async() => {
    const txt_session_duration = $("txt_session_duration").value;
    if (txt_session_duration === "") {
        alert("Please fill out empty area");
    } else {
        const milliseconds = parseInt(txt_session_duration, 10);
        HMSAnalytics.setSessionDuration(milliseconds)
            .then(() => {
                alert("setSessionDuration :: Success");
            })
            .catch((error) => alert("setSessionDuration :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * Report custom events.
 */
$("onEvent").onclick = async() => {
    const name = 'event_name';
    const params = {
        "putInt": 123,
        "putDouble": 12.056565665612346789,
        "putLong": 2121455345345343,
        "putString": "string",
        "putBoolean1": true,
        "putBoolean2": false
    };
    HMSAnalytics.onEvent(name, params)
        .then(() => {
            alert("onEvent :: Success");
        })
        .catch((error) => alert("onEvent :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Report predefined events.
 */
$("onPredefinedEvent").onclick = async() => {
    const name = HMSAnalytics.HAEventType.SUBMITSCORE;
    const params = {};
    params[HMSAnalytics.HAParamType.SCORE] = 12;
    params[HMSAnalytics.HAParamType.CATEGORY] = "SPORT";
    HMSAnalytics.onEvent(name, params)
        .then(() => {
            alert("onPredefinedEvent :: Success");
        })
        .catch((error) => alert("onPredefinedEvent :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Delete all collected data in the local cache, including the cached data that fails to be sent.
 */
$("clearCachedData").onclick = async() => {
    HMSAnalytics.clearCachedData()
        .then((result) => {
            alert("clearCachedData :: Success");
        })
        .catch((error) => alert("clearCachedData :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Obtains the app instance ID from AppGallery Connect.
 */
$("getAAID").onclick = async() => {
    HMSAnalytics.getAAID()
        .then((aaid) => {
            alert("getAAID :: Success -> aaid: " + JSON.stringify(aaid,null,1));
        })
        .catch((error) => alert("getAAID :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Enables AB Testing. Predefined or custom user attributes are supported.
 */
$("getUserProfiles").onclick = async() => {
    const user_profiles_predefined = $("user_profiles_predefined").value;
    const predefined = (user_profiles_predefined === "true");
    HMSAnalytics.getUserProfiles(predefined)
        .then((userProfiles) => {
            alert("getUserProfiles :: Success -> userProfiles: " + JSON.stringify(userProfiles,null,1));
        })
        .catch((error) => alert("getUserProfiles :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Defines a custom page entry event.
 * @note This method is only to support on Android Platform.
 */
$("pageStart").onclick = async() => {
    const pageName = $("txt_start_page_name").value;
    const pageClassOverride = $("txt_start_page_class_override").value;
    if (pageName === "" || pageClassOverride === "") {
        alert("Please fill out empty area");
    } else {
        HMSAnalytics.pageStart(pageName, pageClassOverride)
            .then((result) => {
                alert("pageStart :: Success");
            })
            .catch((error) => alert("pageStart :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * Defines a custom page exit event.
 * @note This method is only to support on Android Platform.
 */
$("pageEnd").onclick = async() => {
    const pageName = $("txt_end_page_name").value;
    if (pageName === "") {
        alert("Please fill out empty area");
    } else {
        HMSAnalytics.pageEnd(pageName)
            .then((result) => {
                alert("pageEnd :: Success");
            })
            .catch((error) => alert("pageEnd :: Error! " + JSON.stringify(error,null,1)));
    }
};

/**
 * Enables the debug log function and sets the minimum log level.
 * @note This method is only to support on Android Platform.
 */
$("enableLog").onclick = async() => {
    const enable_log_with_level = $("enable_log_with_level").value;
    let logLevelType;
    switch(enable_log_with_level) {
        case "INFO":
            logLevelType = HMSAnalytics.LogLevelType.INFO;
          break;
        case "WARN":
            logLevelType = HMSAnalytics.LogLevelType.WARN;
          break;
        case "ERROR":
            logLevelType = HMSAnalytics.LogLevelType.ERROR;
          break;
        case "DEBUG":
        default:
            logLevelType = HMSAnalytics.LogLevelType.DEBUG;
      }
    HMSAnalytics.enableLog(logLevelType)
        .then((result) => {
            alert("enableLog :: Success");
        })
        .catch((error) => alert("enableLog :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Sets data reporting policies.
 */
$("setReportPolicies").onclick = async() => {
    const reportPolicies = {
        onScheduledTimePolicy: 300,
        onAppLaunchPolicy: true,
        onMoveBackgroundPolicy: true,
        onCacheThresholdPolicy: 350
    }
    HMSAnalytics.setReportPolicies(reportPolicies)
        .then(() => {
            alert("setReportPolicies :: Success");
        })
        .catch((error) => alert("setReportPolicies :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Obtains the threshold for event reporting.
 */
$("getReportPolicyThreshold").onclick = async() => {
    const report_policy_type = $("report_policy_type").value;
    let reportPolicyType;
    switch(report_policy_type) {
        case "ON_SCHEDULED_TIME_POLICY":
            reportPolicyType = HMSAnalytics.ReportPolicyType.ON_SCHEDULED_TIME_POLICY;
          break;
        case "ON_APP_LAUNCH_POLICY":
            reportPolicyType = HMSAnalytics.ReportPolicyType.ON_APP_LAUNCH_POLICY;
          break;
        case "ON_MOVE_BACKGROUND_POLICY":
            reportPolicyType = HMSAnalytics.ReportPolicyType.ON_MOVE_BACKGROUND_POLICY;
          break;
        case "ON_CACHE_THRESHOLD_POLICY":
            reportPolicyType = HMSAnalytics.ReportPolicyType.ON_CACHE_THRESHOLD_POLICY;
            break;
        default:
            reportPolicyType = HMSAnalytics.ReportPolicyType.ON_SCHEDULED_TIME_POLICY;
      }
    HMSAnalytics.getReportPolicyThreshold(reportPolicyType)
        .then((result) => {
            alert("getReportPolicyThreshold :: Success -> "+reportPolicyType+" ->Threshold:" + JSON.stringify(result,null,1));
        })
        .catch((error) => alert("getReportPolicyThreshold :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Specifies whether to enable restriction of HUAWEI Analytics.
 */
$("setRestrictionEnabled").onclick = async() => {
    const restriction_is_enabled = $("restriction_is_enabled").value;
    const isEnabled = (restriction_is_enabled === "true");
    HMSAnalytics.setRestrictionEnabled(isEnabled)
        .then(() => {
            alert("setRestrictionEnabled :: Success");
        })
        .catch((error) => alert("setRestrictionEnabled :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * Obtains the restriction status of HUAWEI Analytics.
 */
$("isRestrictionEnabled").onclick = async() => {
    HMSAnalytics.isRestrictionEnabled()
        .then((result) => {
            alert("isRestrictionEnabled :: Success -> isRestrictionEnabled: " + JSON.stringify(result,null,1));
        })
        .catch((error) => alert("isRestrictionEnabled :: Error! " + JSON.stringify(error,null,1)));
};

/**
 * HAParamType types for provides the IDs of all predefined parameters, 
 * including the IDs of predefined parameters and user attributes.
 */
$("HAParamType").onclick = () => {
    alert(JSON.stringify(HMSAnalytics.HAParamType));
};
/**
 * HAEventType types for provides the IDs of all predefined events.
 */
$("HAEventType").onclick = () => {
    alert(JSON.stringify(HMSAnalytics.HAEventType));
};
