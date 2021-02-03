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

@objc(CordovaHMSAnalytics) class CordovaHMSAnalytics: CDVPlugin {
    /// All the HiAnalytics API's can be reached via HMSAnalyticsViewModel class instance
    private lazy var viewModel: HMSAnalyticsViewModel = HMSAnalyticsViewModel()
    private let ERROR_PARAMETER_MESSAGE = "Error arguments paramater. methodName : "
    override func pluginInitialize() {
        super.pluginInitialize()
    }
    enum MethodName: String {
        case setAnalyticsEnabled
        case setUserId
        case setUserProfile
        case deleteUserProfile
        case setSessionDuration
        case onEvent
        case clearCachedData
        case getAAID
        case getUserProfiles
        case setReportPolicies
        case setRestrictionEnabled
        case isRestrictionEnabled
    }
    // MARK: - HMSAnalyticsModule
    @objc(HMSAnalyticsModule:)
    func HMSAnalyticsModule(command: CDVInvokedUrlCommand) {
        HMSAnalyticsLog.debug(#function) {
            guard let methodName = command.arguments[0] as? String else {
                sendError(
                    message: "Error HMSAnalyticsModule name paramater. Should be module name: HMSAnalyticsModule",
                    command.methodName, command.callbackId
                )
                return
            }
            HMSAnalyticsLog.showInPanel(message: methodName, type: .call)
            switch methodName {
            case MethodName.setAnalyticsEnabled.rawValue:
                // MARK: - setAnalyticsEnabled
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let enabled = argsArray["enabled"] as? Bool else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.setAnalyticsEnabled(enabled)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.setUserId.rawValue:
                // MARK: - setUserId
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    let userId = argsArray["userId"] as? String
                    viewModel.setUserId(userId)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.setUserProfile.rawValue:
                // MARK: - setUserProfile
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let name = argsArray["name"] as? String else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    guard let value = argsArray["value"] as? String else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.setUserProfile(name, value)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.deleteUserProfile.rawValue:
                // MARK: - deleteUserProfile
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let name = argsArray["name"] as? String else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.deleteUserProfile(name)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.setSessionDuration.rawValue:
                // MARK: - setSessionDuration
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let milliseconds = argsArray["milliseconds"] as? Double else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.setSessionDuration(TimeInterval(milliseconds))
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.onEvent.rawValue:
                // MARK: - onEvent
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let eventId = argsArray["eventId"] as? String else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    guard let params = argsArray["params"] as? [String: Any] else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.onEvent(eventId, params)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.clearCachedData.rawValue:
                // MARK: - clearCachedData
                viewModel.clearCachedData()
                sendSuccess(methodName: methodName, callbackId: command.callbackId)
            case MethodName.getAAID.rawValue:
                // MARK: - getAAID
                self.commandDelegate.send(CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: viewModel.getAAID()
                ), callbackId: command.callbackId)
                HMSAnalyticsLog.showInPanel(message: methodName, type: .success)
            case MethodName.getUserProfiles.rawValue:
                // MARK: - getUserProfiles
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let predefined = argsArray["predefined"] as? Bool else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    self.commandDelegate.send(CDVPluginResult(
                        status: CDVCommandStatus_OK,
                        messageAs: viewModel.getUserProfiles(predefined)
                    ), callbackId: command.callbackId)
                    HMSAnalyticsLog.showInPanel(message: methodName, type: .success)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.setReportPolicies.rawValue:
                // MARK: - setReportPolicies
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let reportPolicies = argsArray["reportPolicies"] as? [String: Any] else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.setReportPolicies(reportPolicies)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.setRestrictionEnabled.rawValue:
                // MARK: - setRestrictionEnabled
                if command.arguments.count > 1 {
                    let argsArray = command.arguments[1] as? NSDictionary ?? [:]
                    guard let isEnabled = argsArray["isEnabled"] as? Bool else {
                        sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                        return
                    }
                    viewModel.setRestrictionEnabled(isEnabled)
                    sendSuccess(methodName: methodName, callbackId: command.callbackId)
                } else {
                    sendError(message: ERROR_PARAMETER_MESSAGE, methodName, command.callbackId)
                }
            case MethodName.isRestrictionEnabled.rawValue:
                // MARK: - isRestrictionEnabled
                print("isRestrictionEnabled")
                self.commandDelegate.send(CDVPluginResult(
                    status: CDVCommandStatus_OK,
                    messageAs: viewModel.isRestrictionEnabled()
                ), callbackId: command.callbackId)
                HMSAnalyticsLog.showInPanel(message: methodName, type: .success)

            default:
                sendError(message: "Error method name. methodName : ", methodName, command.callbackId)
            }
        }
    }

    private func sendSuccess(methodName: String, callbackId: String) {
        self.commandDelegate.send(CDVPluginResult(
            status: CDVCommandStatus_OK
        ), callbackId: callbackId)
        HMSAnalyticsLog.showInPanel(message: methodName, type: .success)
    }
    private func sendError(message: String, _ methodName: String, _ callbackId: String) {
        self.commandDelegate!.send(CDVPluginResult(
            status: CDVCommandStatus_ERROR,
            messageAs: message + methodName
        ), callbackId: callbackId)
        HMSAnalyticsLog.showInPanel(message: methodName, type: .fail)
    }
}
