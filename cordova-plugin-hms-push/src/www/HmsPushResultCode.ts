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

// Success
export const SUCCESS = "0";

// Error
export const ERROR = "-1";

// Bundle is null exception
export const NULL_BUNDLE = "333";

// You do not have a token. Apply for a token.
export const ERROR_NO_TOKEN = "907122030";

// The current network is unavailable. Check the network connection.
export const ERROR_NO_NETWORK = "907122031";

// The token has expired. Delete the token and apply for a new one.
export const ERROR_TOKEN_INVALID = "907122032";

// If the Push service is unavailable contact Huawei technical support.
export const ERROR_SERVICE_NOT_AVAILABLE = "907122046";

// If the Push server returns an error contact Huawei technical support.
export const ERROR_PUSH_SERVER = "907122047";

// Unknown error. Contact Huawei technical support.
export const ERROR_UNKNOWN = "907122045";

// The number of subscribed topics exceeds 2000.
export const ERROR_TOPIC_EXCEED = "907122034";

// Failed to send the subscription topic. Contact Huawei technical support.
export const ERROR_TOPIC_SEND = "907122035";

// Push rights are not enabled. Enable the service and set push service parameters at AppGallery Connect.
export const ERROR_NO_RIGHT = "907122036";

// Failed to apply for the token. Contact Huawei technical support.
export const ERROR_GET_TOKEN_ERR = "907122037";

// No storage location is selected for the application or the storage location is invalid.
export const ERROR_STORAGE_LOCATION_EMPTY = "907122038";

// Failed to apply for a token. Cross-region token application is not allowed.
export const ERROR_NOT_ALLOW_CROSS_APPLY = "907122053";

// The message body size exceeds the maximum.
export const ERROR_SIZE = "907122041";

// The message contains invalid parameters.
export const ERROR_INVALID_PARAMETERS = "907122042";

// The number of sent messages reaches the upper limit. The messages will be discarded.
export const ERROR_TOO_MANY_MESSAGES = "907122043";

// The message lifetime expires before the message is successfully sent to the APP server.
export const ERROR_TTL_EXCEEDED = "907122044";

//  Huawei Mobile Services (APK) can't connect  Huawei Push  Kit.
export const ERROR_HMS_CLIENT_API = "907122048";

// The current EMUI version is too early to use the capability.
export const ERROR_OPERATION_NOT_SUPPORTED = "907122049";

// The operation cannot be performed in the main thread.
export const ERROR_MAIN_THREAD = "907122050";

// The device certificate authentication fails.
export const ERROR_HMS_DEVICE_AUTH_FAILED_SELF_MAPPING = "907122051";

// Failed to bind the service.
export const ERROR_BIND_SERVICE_SELF_MAPPING = "907122052";

// The SDK is being automatically initialized. Try again later.
export const ERROR_AUTO_INITIALIZING = "907122054";

/*The input parameter is incorrect. Check whether the related configuration information is correct.
 * Example= app_id in the agconnect - services.json file;
 * Check whether the build.gradle file is configured with the certificate signature.
 */
export const ERROR_ARGUMENTS_INVALID = "907135000";

// Internal Push error. Contact Huawei technical support engineers.
export const ERROR_INTERNAL_ERROR = "907135001";

// The service does not exist. The invoked interface does not exist.
export const ERROR_NAMING_INVALID = "907135002";

// The ApiClient object is invalid.
export const ERROR_CLIENT_API_INVALID = "907135003";

// Invoking AIDL times out. Contact Huawei technical support.
export const ERROR_EXECUTE_TIMEOUT = "907135004";

// The current area does not support this service.
export const ERROR_NOT_IN_SERVICE = "907135005";

// If the AIDL connection session is invalid contact Huawei technical support.
export const ERROR_SESSION_INVALID = "907135006";

// An error occurred when invoking an unspecified API.
export const ERROR_API_NOT_SPECIFIED = "1002";

/* Failed to invoke the gateway to query the application scope.
 * Check whether the current app has been created and enabled in AppGallery Connect.
 * If yes contact Huawei technical support.
 */
export const ERROR_GET_SCOPE_ERROR = "907135700";
/* Scope is not configured on the AppGallery Connect.
 * Check whether the current app has been created and enabled in AppGallery Connect.
 * If yes contact Huawei technical support.
 */
export const ERROR_SCOPE_LIST_EMPTY = "907135701";

/* The certificate fingerprint is not configured on the AppGallery Connect.
 * 1. Check whether your phone can access the Internet.
 * 2. Check whether the correct certificate fingerprint is configured in AppGallery Connect. For details see AppGallery Connect configuration in Development Preparations.
 * 3. If the check result is correct contact Huawei technical support.
 */
export const ERROR_CERT_FINGERPRINT_EMPTY = "907135702";

//Permission is not configured on the AppGallery Connect.
export const ERROR_PERMISSION_LIST_EMPTY = "907135703";

// The authentication information of the application does not exist.
export const ERROR_AUTH_INFO_NOT_EXIST = "6002";

// An error occurred during certificate fingerprint verification. Check whether the correct certificate fingerprint is configured in AppGallery Connect. For details see AppGallery Connect configuration in Development Preparations.
export const ERROR_CERT_FINGERPRINT_ERROR = "6003";

// Interface authentication= The permission does not exist and is not applied for in AppGallery Connect.
export const ERROR_PERMISSION_NOT_EXIST = "6004";

// Interface authentication= unauthorized.
export const ERROR_PERMISSION_NOT_AUTHORIZED = "6005";

// Interface authentication= The authorization expires.
export const ERROR_PERMISSION_EXPIRED = "6006";

