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

import {
  Component
} from '@angular/core';
import {
  HMSAnalytics,
  HAEventType,
  HAParamType,
  LogLevelType,
  ReportPolicyType
} from '@hmscore/ionic-native-hms-analytics/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss'],
})
export class HomePage {
  boolSetAnalyticsEnabled: string = '';
  userId: string = '';
  name: string = '';
  value: string = '';
  deleteName: string = '';
  profile: string = '';
  milliSecondsForActivitySessions: number;
  milliSecondsForSessionDuration: number;
  selectedLevel: string = '';
  startPageName: string = '';
  startPageClassOverride: string = '';
  endPageName: string = '';
  reportPolicyType: string = '';
  restrictionIsEnabled: string = '';

  constructor(private hmsAnalytics: HMSAnalytics) {}
  
  /**
   * Specifies whether to enable event collection.
   * If the function is disabled, no data is recorded.
   */
  setAnalyticsEnabled() {
    if (this.boolSetAnalyticsEnabled === '') {
      alert("Please choose required field");
    } else {
      let enabled = (this.boolSetAnalyticsEnabled === "true");
      this.hmsAnalytics.setAnalyticsEnabled(enabled)
      .then(() => {
        alert("setAnalyticsEnabled :: Success");
      })
      .catch((error) => alert("setAnalyticsEnabled :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Set a user ID.
   * @important: When the setUserId API is called, if the old userId is not empty and is different from the new userId, a new session is generated.
   * If you do not want to use setUserId to identify a user (for example, when a user signs out), set userId to **null**.
   */
  setUserId() {
    if (this.userId === '') {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.setUserId(this.userId)
      .then(() => {
        alert("setUserId :: Success");
      })
      .catch((error) => alert("setUserId :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * User attribute values remain unchanged throughout the app's lifecycle and session.
   * A maximum of 25 user attribute names are supported.
   * If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
   */
  setUserProfile() {
    if (this.name === '' || this.value === '') {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.setUserProfile(this.name, this.value)
      .then(() => {
        alert("setUserProfile :: Success");
      })
      .catch((error) => alert("setUserProfile :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * User attribute name
   */
  deleteUserProfile() {
    if (this.deleteName === '') {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.deleteUserProfile(this.deleteName)
      .then(() => {
        alert("deleteUserProfile :: Success");
      })
      .catch((error) => alert("deleteUserProfile :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Sets the push token, which is obtained using the Push Kit.
   * @note This method is only to support on Android Platform.
   */
  setPushToken() {
    const pushToken = "AFcSAHhhnxdrMCYBxth2QOG9IgY2VydAM61DTThqNux3KBC_hgzQQTadfgtDv";
    this.hmsAnalytics.setPushToken(pushToken)
    .then(() => {
      alert("setPushToken :: Success");
    })
    .catch((error) => alert("setPushToken :: Error! " + JSON.stringify(error,null,1)));
  }

  /**
   * Sets the minimum interval for starting a new session.
   */
  setMinActivitySessions() {
    if (this.milliSecondsForActivitySessions === undefined) {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.setMinActivitySessions(this.milliSecondsForActivitySessions)
      .then(() => {
        alert("setMinActivitySessions :: Success");
      })
      .catch((error) => alert("setMinActivitySessions :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Sets the session timeout interval.
   */
  setSessionDuration() {
    if (this.milliSecondsForSessionDuration === undefined) {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.setSessionDuration(this.milliSecondsForSessionDuration)
      .then(() => {
        alert("setSessionDuration :: Success");
      })
      .catch((error) => alert("setSessionDuration :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Report custom events.
   */
  onEvent() {
    let name = 'event_name';
    let params = {
      "putInt": 123,
      "putDouble": 12.056565665612346789,
      "putLong": 2121455345345343,
      "putString": "string",
      "putBoolean1": true,
      "putBoolean2": false
    };
    this.hmsAnalytics.onEvent(name, params)
    .then(() => {
      alert("onEvent :: Success");
    })
    .catch((error) => alert("onEvent :: Error! " + JSON.stringify(error,null,1)));
  }

  /**
   * Report predefined events.
   */
  onPredefinedEvent() {
    let name = HAEventType.SUBMITSCORE;
    let params = {};
    params[HAParamType.SCORE] = 12;
    params[HAParamType.CATEGORY] = "SPORT";
    this.hmsAnalytics.onEvent(name, params)
    .then(() => {
      alert("onPredefinedEvent :: Success");
    })
    .catch((error) => alert("onPredefinedEvent :: Error! " + JSON.stringify(error,null,1)));
  }

  /**
   * Delete all collected data in the local cache, including the cached data that fails to be sent.
   */
  clearCachedData() {
    this.hmsAnalytics.clearCachedData()
    .then(() => {
      alert("clearCachedData :: Success");
    })
    .catch((error) => alert("clearCachedData :: Error! " + JSON.stringify(error,null,1)));
  }

  /**
   * Obtains the app instance ID from AppGallery Connect.
   */
  getAAID() {
    this.hmsAnalytics.getAAID()
    .then((aaid) => {
      alert("getAAID :: Success -> aaid: " + JSON.stringify(aaid,null,1));
    })
    .catch((error) => alert("getAAID :: Error! " + JSON.stringify(error,null,1)));
  }

  /**
   * Enables AB Testing. Predefined or custom user attributes are supported.
   */
  getUserProfiles() {
    if (this.profile === '') {
      alert("Please fill out requred field");
    } else {
      let predefined = (this.profile === "true");
      this.hmsAnalytics.getUserProfiles(predefined)
      .then((userProfiles) => {
        alert("getUserProfiles :: Success -> userProfiles: " + JSON.stringify(userProfiles,null,1));
      })
      .catch((error) => alert("getUserProfiles :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Defines a custom page entry event.
   * @note This method is only to support on Android Platform.
   */
  pageStart() {
    if (this.startPageName === '' || this.startPageClassOverride === '') {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.pageStart(this.startPageName, this.startPageClassOverride)
      .then(() => {
        alert("pageStart :: Success");
      })
      .catch((error) => alert("pageStart :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Defines a custom page exit event.
   * @note This method is only to support on Android Platform.
   */
  pageEnd() {
    if (this.endPageName === '') {
      alert("Please fill out requred field");
    } else {
      this.hmsAnalytics.pageEnd(this.endPageName)
      .then(() => {
        alert("pageEnd :: Success");
      })
      .catch((error) => alert("pageEnd :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Enables the debug log function and sets the minimum log level.
   * @note This method is only to support on Android Platform.
   */
  enableLog() {
    if (this.selectedLevel === '') {
      alert("Please choose required field");
    } else {
      let logLevelType;
      switch(this.selectedLevel) {
        case "INFO":
          logLevelType = LogLevelType.INFO;
          break;
        case "WARN":
          logLevelType = LogLevelType.WARN;
          break;
        case "ERROR":
          logLevelType = LogLevelType.ERROR;
          break;
        case "DEBUG":
        default:
          logLevelType = LogLevelType.DEBUG;
      }
      this.hmsAnalytics.enableLog(logLevelType)
      .then(() => {
        alert("enableLog :: Success");
      })
      .catch((error) => alert("enableLog :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Sets data reporting policies.
   */
  setReportPolicies() {
    const reportPolicies = {
      onScheduledTimePolicy: 300,
      onAppLaunchPolicy: true,
      onMoveBackgroundPolicy: true,
      onCacheThresholdPolicy: 350,
    };
    this.hmsAnalytics.setReportPolicies(reportPolicies)
    .then(() => {
      alert("setReportPolicies :: Success");
    })
    .catch((error) => alert("setReportPolicies :: Error! " + JSON.stringify(error,null,1)));
  }

  /**
   * Obtains the threshold for event reporting.
   */
  getReportPolicyThreshold() {
    if (this.reportPolicyType === '') {
      alert("Please choose required field");
    } else {
      let reportPolicyType;
      switch(this.reportPolicyType) {
        case "ON_SCHEDULED_TIME_POLICY":
            reportPolicyType = ReportPolicyType.ON_SCHEDULED_TIME_POLICY;
          break;
        case "ON_APP_LAUNCH_POLICY":
            reportPolicyType = ReportPolicyType.ON_APP_LAUNCH_POLICY;
          break;
        case "ON_MOVE_BACKGROUND_POLICY":
            reportPolicyType = ReportPolicyType.ON_MOVE_BACKGROUND_POLICY;
          break;
        case "ON_CACHE_THRESHOLD_POLICY":
            reportPolicyType = ReportPolicyType.ON_CACHE_THRESHOLD_POLICY;
            break;
        default:
            reportPolicyType = ReportPolicyType.ON_SCHEDULED_TIME_POLICY;
      }
      this.hmsAnalytics.getReportPolicyThreshold(reportPolicyType)
      .then((result) => {
        alert("getReportPolicyThreshold :: Success "+reportPolicyType+" ->Threshold:" + JSON.stringify(result,null,1));
      })
      .catch((error) => alert("getReportPolicyThreshold :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Specifies whether to enable restriction of HUAWEI Analytics.
   */
  setRestrictionEnabled() {
    if (this.restrictionIsEnabled === '') {
      alert("Please fill out requred field");
    } else {
      let isEnabled = (this.restrictionIsEnabled === "true");
      this.hmsAnalytics.setRestrictionEnabled(isEnabled)
      .then(() => {
        alert("setRestrictionEnabled :: Success");
      })
      .catch((error) => alert("setRestrictionEnabled :: Error! " + JSON.stringify(error,null,1)));
    }
  }

  /**
   * Obtains the restriction status of HUAWEI Analytics.
   */
  isRestrictionEnabled() {
    this.hmsAnalytics.isRestrictionEnabled()
    .then((result) => {
      alert("isRestrictionEnabled :: Success -> isRestrictionEnabled: " + JSON.stringify(result,null,1));
    })
    .catch((error) => alert("isRestrictionEnabled :: Error! " + JSON.stringify(error,null,1)));
  }
  
  /**
   * HAParamType types for provides the IDs of all predefined parameters, 
   * including the IDs of predefined parameters and user attributes.
   */
  HAParamType() {
    alert(JSON.stringify(HAParamType));
  }

  /**
   * HAEventType types for provides the IDs of all predefined events.
   */
  HAEventType() {
    alert(JSON.stringify(HAEventType));
  }
}