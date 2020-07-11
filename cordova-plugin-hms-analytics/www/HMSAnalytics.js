/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var exec = require('cordova/exec');

var HMSAnalyticsAPI = function () {
    init();
}

var execute = (success, error, action, param) => {
    exec(success, error, 'cordova-plugin-hms-analytics', action, (param === undefined || param === null) ? [{}] : [param]);
};

var asyncExecute = (action, param) => {
    return new Promise((resolve, reject) => {
        exec(resolve, reject, 'cordova-plugin-hms-analytics', action, (param === undefined || param === null) ? [{}] : [param]);
    });
};

var init = async () => {
    //set constants
    HMSAnalyticsAPI.prototype.HAEventType = await asyncExecute('ACTION_GET_HA_EVENT_TYPE');
    HMSAnalyticsAPI.prototype.HAParamType = await asyncExecute('ACTION_GET_HA_PARAM_TYPE');
}

HMSAnalyticsAPI.prototype.enableLogWithLevel = (logLevel, success, error) => {
    if (!(logLevel === 'DEBUG' || logLevel === 'INFO' || logLevel === 'WARN' || logLevel === 'ERROR')) {
        throw 'Invalid argument. Possible logLevels : DEBUG, INFO, WARN, ERROR';
    }

    execute(success, error, 'ACTION_ENABLE_LOG_WITH_LEVEL', { logLevel: logLevel });
};

HMSAnalyticsAPI.prototype.enableLog = (success, error) => {
    execute(success, error, 'ACTION_ENABLE_LOG');
};

HMSAnalyticsAPI.prototype.setUserId = (userId, success, error) => {
    execute(success, error, 'ACTION_SET_USER_ID', { userId });
};

HMSAnalyticsAPI.prototype.setUserProfile = (name, value, success, error) => {
    execute(success, error, 'ACTION_SET_USER_PROFILE', { key: name, value: value });
};

HMSAnalyticsAPI.prototype.setPushToken = (token, success, error) => {
    execute(success, error, 'ACTION_SET_PUSH_TOKEN', { token: token });
};

HMSAnalyticsAPI.prototype.setMinActivitySessions = (interval, success, error) => {
    execute(success, error, 'ACTION_SET_MIN_ACTIVITY_SESSIONS', { interval: interval });
};

HMSAnalyticsAPI.prototype.setSessionDuration = (duration, success, error) => {
    execute(success, error, 'ACTION_SET_SESSION_DURATION', { duration: duration });
};

HMSAnalyticsAPI.prototype.setCurrentActivity = (activityName, screenClassOverride, success, error) => {
    execute(success, error, 'ACTION_SET_CURRENT_ACTIVITY', { activityName: activityName, screenClassOverride: screenClassOverride });
};

HMSAnalyticsAPI.prototype.onEvent = (key, value, success, error) => {
    execute(success, error, 'ACTION_SEND_EVENT', { key: key, value: value });
};

HMSAnalyticsAPI.prototype.clearCachedData = (success, error) => {
    execute(success, error, 'ACTION_CLEAR_CACHED_DATA');
};

HMSAnalyticsAPI.prototype.getAAID = (success, error) => {
    execute(success, error, 'ACTION_GET_AAID');
};

HMSAnalyticsAPI.prototype.getUserProfiles = (predefined, success, error) => {
    execute(success, error, 'ACTION_GET_USER_PROFILES', { predefined: predefined });
};

module.exports = new HMSAnalyticsAPI();
