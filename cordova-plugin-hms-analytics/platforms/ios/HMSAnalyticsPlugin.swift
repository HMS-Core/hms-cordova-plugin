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

@objc(HMSAnalyticsPlugin) class HMSAnalyticsPlugin : CDVPlugin { 
    /// All the Analytics API's can be reached via AnalyticsViewModel class instance
    private lazy var HMSAnalyticsViewModel: AnalyticsViewModel = AnalyticsViewModel();
    
    @objc(config:)
    func config(command: CDVInvokedUrlCommand) {
        Log.debug(#function) {
            var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
            HMSAnalyticsViewModel.config()
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK
            )
            self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    /// Enable event collection. No data will be collected when this function is disabled.
    /// - Parameters:
    ///   - enabled: Indicates whether to enable event collection. **YES: enabled (default); NO: disabled.**
    @objc(setAnalyticsEnabled:)
    func setAnalyticsEnabled(command: CDVInvokedUrlCommand) {
        Log.debug(#function) {
            var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
            guard let args = command.arguments[0] as?  [String : Any] else{
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Error arguments paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
                return
            }
            guard let enabled = args["enabled"] as? Bool else{
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Incorrect 'enabled' paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                return
            }
            HMSAnalyticsViewModel.setAnalyticsEnabled(enabled)
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK
            )
            self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    /// Sets data reporting policies.
    /// - Parameters:
    ///   - reportPolicyType: HAReportPolicy type.
    ///   - timer: Scheduled time interval, in seconds (value range: 60 to 1800).
    /// - Important:
    /// - **onScheduledTimePolicy**  -> Event reporting at scheduled time.
    /// - **onAppLaunchPolicy** -> Event reporting on app launch.
    /// - **onMoveBackgroundPolicy** -> Event reporting when the app moves to the background (enabled by default).
    /// - **onCacheThresholdPolicy** -> Event reporting when the specified threshold is reached (enabled by default). The default value is 200 (value range: 30 to 1000). This policy remains effective after being enabled.
    @objc(setReportPolicies:)
    func setReportPolicies(command: CDVInvokedUrlCommand) {
        self.commandDelegate!.run(inBackground: {
            Log.debug(#function) {
                var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
                guard let args = command.arguments[0] as?  [String : Any] else{
                    pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR,
                                                    messageAs: "Error arguments paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                guard let reportPolicyType = args["reportPolicyType"] as? [String : Any] else {
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Incorrect 'reportPolicyType' paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
                    return
                }
                self.HMSAnalyticsViewModel.setReportPolicies(reportPolicyType)
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
            }
        })
    }
    
    /// Report custom events.
    /// - Parameters:
    ///   - eventId: Event ID, a string that contains a maximum of 256 characters excluding spaces and invisible characters. The value cannot be empty or set to the ID of an automatically collected event.
    ///   - params: Information carried in the event. The key value cannot contain spaces or invisible characters.
    @objc(onEvent:)
    func onEvent(command: CDVInvokedUrlCommand) {
        Log.debug(#function) {
            var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR)
            guard let args = command.arguments[0] as?  [String : Any] else{
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Error arguments paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                return
            }
            guard let eventId = args["eventId"] as? String else {
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Incorrect 'eventId' paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                return
            }
            guard let params = args["value"] as? NSDictionary else{
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Incorrect 'value' paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                return
            }
            
            HMSAnalyticsViewModel.onEvent(eventId, params: params)
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK
            )
            self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    /// Obtain the app instance ID from AppGallery Connect.
    @objc(getAAID:)
    func aaid(command: CDVInvokedUrlCommand) {
        Log.debug(#function) {
            var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK,
                messageAs: HMSAnalyticsViewModel.aaid()
            );
            self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
        }
    }
    
    /// Set a user ID.
    /// - Parameters:
    ///   - userId: User ID, a string that contains a maximum of 256 characters. The value cannot be empty.
    @objc(setUserId:)
    func setUserId(command: CDVInvokedUrlCommand) {
        self.commandDelegate!.run(inBackground: {
            Log.debug(#function) {
                var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
                guard let args = command.arguments[0] as?  [String : Any] else {
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Error arguments paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                guard let userId = args["userId"] as? String else{
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Incorrect 'userId' paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                self.HMSAnalyticsViewModel.setUserId(userId)
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
            }
            
        })
    }
    
    /// User attribute values remain unchanged throughout the app's lifecycle and session. A maximum of 25 user attribute names are supported. If an attribute name is duplicate with an existing one, the attribute names needs to be changed.
    /// - Parameters:
    ///   - name: User attribute name, a string that contains a maximum of 256 characters excluding spaces and invisible characters. The value cannot be empty.
    ///   - value: Attribute value, a string that contains a maximum of 256 characters. The value cannot be empty.
    @objc(setUserProfile:)
    func setUserProfile(command: CDVInvokedUrlCommand) {
        self.commandDelegate!.run(inBackground: {
            Log.debug(#function) {
                var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
                
                guard let args = command.arguments[0] as?  [String : Any] else{
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Error arguments paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                guard let name = args["key"] as? String else{
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Incorrect 'key' paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                guard let value = args["value"] as? String else{
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Incorrect 'value' paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                self.HMSAnalyticsViewModel.setUserProfile(name, value: value)
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
            }
        })
    }
    
    /// Enable AB Testing. Predefined or custom user attributes are supported.
    /// - Parameters:
    ///   - predefined: Indicates whether to obtain predefined user attributes.
    @objc(getUserProfiles:)
    func userProfiles(command: CDVInvokedUrlCommand) {
        self.commandDelegate!.run(inBackground: {
            Log.debug(#function) {
                var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
                
                guard let args = command.arguments[0] as?  [String : Any] else{
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Error arguments paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                guard let predefined = args["predefined"] as? Bool else{
                    pluginResult = CDVPluginResult (
                        status: CDVCommandStatus_ERROR,
                        messageAs: "Incorrect 'predefined' paramater. methodName : " + command.methodName
                    )
                    self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                    return
                }
                self.HMSAnalyticsViewModel.userProfiles(predefined) { [weak self] (result, error) in
                    guard self != nil else {return}
                    if let error = error {
                        let pluginResult = CDVPluginResult (
                            status: CDVCommandStatus_ERROR,
                            messageAs: error.localizedDescription
                        );
                        self?.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
                        return
                    }
                    if let result = result{
                        print(result)
                        pluginResult = CDVPluginResult(
                            status: CDVCommandStatus_OK,
                            messageAs: (result as? [String : Any])
                        )
                        self?.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
                    }
                }
            }
        })
    }
    
    /// Set the session timeout interval. The app is running in the foreground. When the interval between two adjacent events exceeds the specified timeout interval, a new session is generated.
    /// - Parameters:
    ///   - milliseconds: Session timeout interval, in milliseconds.
    @objc(setSessionDuration:)
    func setSessionDuration(command: CDVInvokedUrlCommand) {
        Log.debug(#function) {
            var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR)
            guard let args = command.arguments[0] as? [String : Any] else{
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Error arguments paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                return
            }
            guard let milliseconds = args["duration"] as? Int else{
                pluginResult = CDVPluginResult (
                    status: CDVCommandStatus_ERROR,
                    messageAs: "Incorrect 'duration' paramater. methodName : " + command.methodName
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
                return
            }
            HMSAnalyticsViewModel.setSessionDuration(TimeInterval(milliseconds ))
            pluginResult = CDVPluginResult(
                status: CDVCommandStatus_OK
            )
            self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
        }
    }
    
    /// Delete all collected data in the local cache, including the cached data that fails to be sent.
    @objc(clearCachedData:)
    func clearCachedData(command: CDVInvokedUrlCommand) {
        self.commandDelegate!.run(inBackground: {
            Log.debug(#function) {
                var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR)
                self.HMSAnalyticsViewModel.clearCachedData()
                pluginResult = CDVPluginResult(
                    status: CDVCommandStatus_OK
                )
                self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
            }
        })
    }
    
    //Not supported on iOS platform.
    @objc(enableLogger:)
    func enableLogger(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
    
    //Not supported on iOS platform.
    @objc(disableLogger:)
    func disableLogger(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
    
    //Not supported on iOS platform.
    @objc(enableLog:)
    func enableLog(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
    
    //Not supported on iOS platform.
    @objc(enableLogWithLevel:)
    func enableLogWithLevel(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
    
    //Not supported on iOS platform.
    @objc(setPushToken:)
    func setPushToken(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
    
    //Not supported on iOS platform.
    @objc(setMinActivitySessions:)
    func setMinActivitySessions(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
    
    //Not supported on iOS platform.
    @objc(pageStart:)
    func pageStart(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
    }
    
    //Not supported on iOS platform.
    @objc(pageEnd:)
    func pageEnd(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: "Not supported on iOS platform. methodName : " + command.methodName
        )
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId)
    }
}