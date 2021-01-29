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

import {
  Component
} from '@angular/core';
import {
  HMSAnalytics,
  HAEventType,
  HAParamType
} from '@ionic-native/hms-analytics'

@Component({
  selector: 'app-home',
  templateUrl: 'analytics.page.html',
  styleUrls: ['analytics.page.scss'],
})
export class HomePage {
  selectedLevel: any;
  boolSetAnalyticsEnabled: any;
  userId: string;
  name: string;
  value: string;
  token: string;
  milliSecondsForActivitySessions: number;
  milliSecondsForSessionDuration: number;
  profile: any;
  startPageName: string;
  startPageClassOverride: string;
  endPageName: string;

  constructor() {}

  async onSetAnalyticsEnabled() {
    if (this.boolSetAnalyticsEnabled == null || this.boolSetAnalyticsEnabled == undefined) {
      alert("Please choose required field");
    } else {
      let boolSetAnalyticsEnabled = (this.boolSetAnalyticsEnabled == "true");
      HMSAnalytics.setAnalyticsEnabled(boolSetAnalyticsEnabled).then(data => {
        alert('setAnalyticsEnabled -> Successs');
      }).catch(function (e) {
        alert('setAnalyticsEnabled -> Error : ' + e);
      })
    }
  }

  async onConfig() {
    HMSAnalytics.config().then(data => {
      alert('config -> Success');
    }).catch(function (e) {
      alert('config -> Error : ' + e);
    })
  }

  async onGetAAID() {
    HMSAnalytics.getAAID().then(data => {
      alert('getAAID -> Success -> aaid : ' + data);
    }).catch(function (e) {
      alert('getAAID -> Error : ' + e);
    })
  }

  async onEvent() {
    let name = 'event_name';
    let value = {
      "my_event_key": "my_event_value"
    };

    HMSAnalytics.onEvent(name, value).then(data => {
      alert('onEvent -> Success');
    }).catch(function (e) {
      alert('onEvent -> Error : ' + e);
    })
  }

  async onSendPredefinedEvent() {
    let event_name = HAEventType.SUBMITSCORE;
    let event_value = {}
    event_value[HAParamType.SCORE] = 12;

    HMSAnalytics.onEvent(event_name, event_value).then(data => {
      alert('onEvent -> Success');
    }).catch(function (e) {
      alert('onEvent -> Error : ' + e);
    })

  }

  async onSetUserId() {
    if (this.userId == null || this.userId == undefined || this.userId == '') {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.setUserId(this.userId).then(data => {
        alert('setUserId -> Success');
      }).catch(function (e) {
        alert('setUserId -> Error : ' + e);
      });
    }
  }

  async onSetUserProfile() {
    if (this.name == null || this.name == undefined || this.name == '' || this.value == null || this.value == undefined || this.value == '') {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.setUserProfile(this.name, this.value).then(data => {
        alert('setUserProfile -> Success');
      }).catch(function (e) {
        alert('setUserProfile -> Error : ' + e);
      });
    }
  }

  async onGetUserProfiles() {
    if (this.profile == null || this.profile == undefined || this.profile == '') {
      alert("Please fill out requred field");
    } else {
      let predefined = (this.profile == "true");
      HMSAnalytics.getUserProfiles(predefined).then(data => {
        alert('getUserProfiles -> Success -> userProfile : ' + JSON.stringify(data));
      }).catch(function (e) {
        alert('getUserProfiles -> Error : ' + e);
      })
    }
  }

  async onSetPushToken() {
    if (this.token == null || this.token == undefined || this.token == '') {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.setPushToken(this.token).then(data => {
        alert('setPushToken -> Success');
      }).catch(function (e) {
        alert('setPushToken -> Error : ' + e);
      });
    }

  }

  async onSetMinActivitySession() {
    if (this.milliSecondsForActivitySessions == null || this.milliSecondsForActivitySessions == undefined) {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.setMinActivitySessions(this.milliSecondsForActivitySessions).then(data => {
        alert('setMinActivitySessions -> Success');
      }).catch(function (e) {
        alert('setMinActivitySessions -> Error : ' + e);
      })
    }
  }

  async onSetSessionDuration() {
    if (this.milliSecondsForSessionDuration == null || this.milliSecondsForSessionDuration == undefined) {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.setSessionDuration(this.milliSecondsForSessionDuration).then(data => {
        alert('setSessionDuration -> Success');
      }).catch(function (e) {
        alert('setSessionDuration -> Error : ' + e);
      })
    }
  }

  async onClearCachedData() {
    HMSAnalytics.clearCachedData().then(data => {
      alert('clearCachedData -> Success');
    }).catch(function (e) {
      alert('clearCachedData -> Error : ' + e);
    })
  }

  async onEnableLog() {
    HMSAnalytics.enableLog().then(data => {
      alert('enableLog -> Success');
    }).catch(function (e) {
      alert('enableLog -> Error : ' + e);
    });

  }

  async onEnableLogWithLevel() {
    if (this.selectedLevel == null || this.selectedLevel == undefined) {
      alert("Please choose required field");
    } else {
      HMSAnalytics.enableLogWithLevel(this.selectedLevel).then(data => {
        alert('enableLogWithLevel -> Success');
      }).catch(function (e) {
        alert('enableLogWithLevel -> Error : ' + e);
      });

    }
  }

  async onPageStart() {
    if (this.startPageName == null || this.startPageName == undefined || this.startPageName == '' || this.startPageClassOverride == null || this.startPageClassOverride == undefined || this.startPageClassOverride == '') {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.pageStart(this.startPageName, this.startPageClassOverride).then(data => {
        alert('pageStart -> Success');
      }).catch(function (e) {
        alert('pageStart -> Error : ' + e);
      })
    }
  }

  async onPageEnd() {
    if (this.endPageName == null || this.endPageName == undefined || this.endPageName == '') {
      alert("Please fill out requred field");
    } else {
      HMSAnalytics.pageEnd(this.endPageName).then(data => {
        alert('pageEnd -> Success');
      }).catch(function (e) {
        alert('pageEnd -> Error : ' + e);
      })
    }
  }

  onShowHAParamType() {
    alert(JSON.stringify(HAParamType));
  }

  onShowHAEventType() {
    alert(JSON.stringify(HAEventType));
  }

  async onSetReportPolicies() {
    const reportPolicies = {
      onScheduledTimePolicy: 300,
      onAppLaunchPolicy: true,
      onMoveBackgroundPolicy: true,
      onCacheThresholdPolicy: 0,
    }
    HMSAnalytics.setReportPolicies(reportPolicies).then(data => {
      alert('setReportPolicies -> Success');
    }).catch(function (e) {
      alert('setReportPolicies -> Error : ' + e);
    })
  }
}