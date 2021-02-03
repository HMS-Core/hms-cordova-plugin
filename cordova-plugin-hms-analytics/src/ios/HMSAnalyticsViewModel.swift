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

import HiAnalytics

/// All the Analytics API's can be reached via AnalyticsViewModel class instance.
public class HMSAnalyticsViewModel {

    /// Enable event collection. No data will be collected when this function is disabled.
    /// - Parameters:
    ///   - enabled: Indicates whether to enable event collection. **YES: enabled (default); NO: disabled.**
    /// - Returns: Void
    func setAnalyticsEnabled(_ enabled: Bool) {
        HiAnalytics.setAnalyticsEnabled(enabled)
    }

    /// Set a user ID.
    /// - Parameters:
    ///   - userId: User ID, a string that contains a maximum of 256 characters. The value cannot be empty.
    ///  - Important: When the setUserId API is called, if the old userId is not empty and is different from the new userId, a new session is generated. If you do not want to use setUserId to identify a user (for example, when a user signs out), set userId to **nil**.
    /// - Returns: Void
    func setUserId(_ userId: String?) {
        guard let userId = userId else {
            HiAnalytics.setUserId(nil)
            return
        }
        HiAnalytics.setUserId(userId)
    }

    /// User attribute values remain unchanged throughout the app's lifecycle and session. A maximum of 25 user attribute names are supported. If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
    /// - Parameters:
    ///   - name: User attribute name, a string that contains a maximum of 256 characters excluding spaces and invisible characters. The value cannot be empty.
    ///   - value: Attribute value, a string that contains a maximum of 256 characters. The value cannot be empty.
    /// - Returns: Void
    func setUserProfile(_ name: String, _ value: String) {
        HiAnalytics.setUserProfile(name, setValue: value)
    }

    /// - Parameters:
    ///   - name: User attribute name
    /// - Returns: Void
    func deleteUserProfile(_ name: String) {
        HiAnalytics.setUserProfile(name, setValue: nil)
    }

    /// Set the session timeout interval. The app is running in the foreground. When the interval between two adjacent events exceeds the specified timeout interval, a new session is generated.
    /// - Parameters:
    ///   - milliseconds: Session timeout interval, in milliseconds.
    ///  - Important: The default value is 30 minutes.
    /// - Returns: Void
    func setSessionDuration(_ milliseconds: TimeInterval) {
        HiAnalytics.setSessionDuration(milliseconds)
    }

    /// Report custom events.
    ///
    /// - Parameters:
    ///   - eventId: Event ID, a string that contains a maximum of 256 characters excluding spaces and invisible characters. The value cannot be empty or set to the ID of an automatically collected event.
    ///   - params: Information carried in the event. The key value cannot contain spaces or invisible characters.
    /// - Returns: Void
    func onEvent(_ eventId: String, _ params: [String: Any]) {
        HiAnalytics.onEvent(eventId, setParams: params)
    }

    /// Delete all collected data in the local cache, including the cached data that fails to be sent.
    func clearCachedData() {
        HiAnalytics.clearCachedData()
    }

    /// Obtain the app instance ID from AppGallery Connect.
    func getAAID() -> String {
        return HiAnalytics.aaid()
    }

    /// Enable AB Testing. Predefined or custom user attributes are supported.
    /// - Parameters:
    ///   - predefined: Indicates whether to obtain predefined user attributes.
    /// - Returns: Predefined or custom user attributes.
    func getUserProfiles(_ predefined: Bool) -> [String: Any] {
        return HiAnalytics.userProfiles(predefined) ?? [:]
    }

    /// Sets data reporting policies.
    /// - Parameters:
    ///   - reportPolicies: HAReportPolicyType
    /// - Important:
    /// - **onScheduledTimePolicy**  -> Event reporting at scheduled time.
    /// - **onAppLaunchPolicy** -> Event reporting on app launch.
    /// - **onMoveBackgroundPolicy** -> Event reporting when the app moves to the background (enabled by default).
    /// - **onCacheThresholdPolicy** -> Event reporting when the specified threshold is reached (enabled by default). The default value is 200 (value range: 30 to 1000). This policy remains effective after being enabled.
    /// - Returns: Void
    func setReportPolicies(_ reportPolicies: [String: Any]) {
        let HAReportPolicyList = setReportPoliciesList(reportPolicies)
        HiAnalytics.setReportPolicies(HAReportPolicyList)
    }

    /// Specifies whether to enable restriction of HUAWEI Analytics.
    /// The default value is false, which indicates that HUAWEI Analytics is enabled by default.
    /// - Parameters:
    ///   - isEnabled : Indicates whether to enable restriction of HUAWEI Analytics.
    func setRestrictionEnabled(_ isEnabled: Bool) {
        HiAnalytics.setRestrictionEnabled(isEnabled)
    }

    /// Obtains the restriction status of HUAWEI Analytics.
    func isRestrictionEnabled() -> Bool {
        return HiAnalytics.isRestrictionEnabled()
    }

    private func setReportPoliciesList( _ reportPolicyType: [String: Any]) -> [HAReportPolicy] {
        var reportPoliciyList = [HAReportPolicy]()

        for key in reportPolicyType.keys {

            if key=="onScheduledTimePolicy" {
                guard let  onScheduledTime = reportPolicyType["onScheduledTimePolicy"] as? Int else {
                    print("Incorrect 'onScheduledTimePolicy' paramater.")
                    continue
                }
                reportPoliciyList.append(HAReportPolicy.onScheduledTime(onScheduledTime))
            } else if key=="onAppLaunchPolicy" && ((reportPolicyType["onAppLaunchPolicy"] as? Bool) == true) {
                guard let  _ = reportPolicyType["onAppLaunchPolicy"] as? Bool else {
                    print("Incorrect 'onAppLaunchPolicy' paramater.")
                    continue
                }
                reportPoliciyList.append(HAReportPolicy.onAppLaunch())
            } else if key=="onMoveBackgroundPolicy" && ((reportPolicyType["onMoveBackgroundPolicy"] as? Bool) == true) {
                guard let  _ = reportPolicyType["onMoveBackgroundPolicy"] as? Bool else {
                    print("Incorrect 'onMoveBackgroundPolicy' paramater.")
                    continue
                }
                reportPoliciyList.append(HAReportPolicy.onMoveBackground())
            } else if key=="onCacheThresholdPolicy" {
                guard let  onCacheThresholdTime = reportPolicyType["onCacheThresholdPolicy"] as? Int else {
                    print("Incorrect 'onCacheThresholdPolicy' paramater.")
                    continue
                }
                reportPoliciyList.append(HAReportPolicy.onCacheThresholdPolicy(onCacheThresholdTime))
            }
        }
        return reportPoliciyList
    }
}
