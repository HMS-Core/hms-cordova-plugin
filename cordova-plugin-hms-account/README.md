# CORDOVA PLUGIN HMS ACCOUNT

  

1. Contents

2. Introduction

3. Installation Guide

4. Cordova SDK API Method Definition

5. Configure Description

6. Licensing and Terms

## 1. Contents

The Cordova SDK code encapsulates the Huawei Account Kit interface. It provides many APIs for your reference or use.

The Cordova SDK code package is described as follows:

**src/main/java/com/huawei/hms/cordova/account**: Core layer that exposes AccountSDK functionality to JS side.

**www**: Public interfaces for interacting AccountSDK through Cordova.

## 2. Installation Guide


1. Download the Cordova Account SDK Plugin.

2.  Add Platform To Project.

    ***`cordova platform add android`***

3. Run the following command in the root directory of the Cordova project:

	***`cordova plugin add PATH_TO_CORDOVA_ACCOUNT_SDK`***

4. Check whether the Cordova Account SDK is successfully added to Plugin folder in the root directory of the Cordova project.

5. Add agconnect-services.json and jks file to root directory. 

6. Add build.json file to your project's root.

7. Then run the Cordova app.
        
    ***`cordova run android`***

## 3. Cordova SDK API Method And Constant Definition

### Module Overview 

 |Module |Definition |
|-------------------------------|-----------------------------|
`HMSAccount` | A module for interacting with the Huawei Sign In API. |
`HMSHuaweiIdAuthManager` |A module is used to entry point for the Huawei Sign In API.  |
`HMSHuaweiIdAuthTool` |A module for obtaining and clearing authorization information. |
`HMSNetworkTool` |A module is used to construct a cookie and a url with specific parameters.|
`HMSReadSMSManager` |A module for Huawei ID SMS Service.|
`HMSHuaweiIdAuthButton` |A module is used to processing the the visual elements of the button for sign in. |


  ###  HMSAccount
  
  #### Functions
  
 Return Type |Methods |Definition |
|---------------------|---------------------|-----------------------|
|Promise\<AuthHuaweiId\>|`signIn` |This API is called to sign in to the apps with HUAWEI IDs securely. |
|Promise<>|`signOut` |This API is called to sign out of a HUAWEI ID from an app. |
|Promise<>|`cancelAuthorization` |This API is called to cancel HUAWEI sign-in authorization.|
|Promise\<AuthHuaweiId\>|`silentSignIn` |This API is called to silent authorization. The API will not display the related page.|

#### signIn (authParams)
This API is called for HUAWEI sign-in.

 Parameter| Type | Description |
|----------------|----------|-----------|
| authParams | String[]| Object to customize the authorization.
<br> 

Return | Description|
|----------------|---------------------|
| Promise\<AuthHuaweiId\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |

#### signOut()
This API is called to sign out of a HUAWEI ID from an app. After sign-out, the HMS SDK deletes the cached HUAWEI ID information.

Return | Description|
|----------------|---------------------|
| Promise<> | If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

#### cancelAuthorization()
This API is called to cancel HUAWEI sign-in authorization.

Return | Description|
|----------------|---------------------|
Promise<>| If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

#### silentSignIn()
This API is called to return the information (or error information) about the HUAWEI ID used by a user who has signed in to an app. During this process, no user page will be displayed to the HUAWEI ID user.

Return | Description|
|----------------|---------------------|
Promise\<AuthHuaweiId\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |

### Constants

 Name | Definition |
|----------------|---------------------|
| `HMSAccount.SCOPE_PROFILE` | Requests a HUAWEI ID user to authorize profile information to an app. |
| `HMSAccount.SCOPE_ID_TOKEN` | Requests a HUAWEI ID user to authorize ID token to an app. |
| `HMSAccount.SCOPE_ACCESS_TOKEN` | Requests a HUAWEI ID user to authorize access token to an app. |
| `HMSAccount.SCOPE_MOBILE_NUMBER` | Requests a HUAWEI ID user to authorize mobile number to an app. |
| `HMSAccount.SCOPE_EMAIL` | Requests a HUAWEI ID user to authorize email address to an app. |
| `HMSAccount.SCOPE_SHIPPING_ADDRESS` | Requests a HUAWEI ID user to authorize shipping address to an app. |
| `HMSAccount.SCOPE_UID` | Requests a HUAWEI ID user to authorize uId token to an app. |
| `HMSAccount.SCOPE_ID` | Requests a HUAWEI ID user to authorize ID to an app.|
| `HMSAccount.SCOPE_AUTHORIZATION_CODE` | Requests a HUAWEI ID user to authorize authorization code to an app. |




### HMSHuaweiIdAuthManager

  #### Functions
  
 Return Type |Methods |Definition |
|----------------|---------------|-----------------------|
|Promise<>|`addAuthScopes` |This API is called to request the permission specified by scopeList from a HUAWEI ID. |
|Promise\<ContainScopesResult\>|`containScopes` |This API is called to check whether the user with the designated HUAWEI ID has been assigned all permissions specified by scopeList. |
|Promise\<AuthHuaweiId\>|`getAuthResultWithScope` |This API is called to obtain the AuthHuaweiId instance. |
|Promise\<AuthHuaweiId\>|`getAuthResult` |This API is called to obtain the latest authorization information. |

#### addAuthScopes(requestCode, scopeList)
This API is called to request the permission specified by scopeList from a HUAWEI ID.

 Parameter| Type | Description |
|----------------|----------|-----------|
| requestCode |Integer| Request Id.|
|scopeList|String[]| Authorization scope list.|

<br>

 |Return Type |Description|
|----------------|-----------------------|
|Promise<>| If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|

#### containScopes(authHuaweiId, scopeList)
This API is called to checks whether the designated HUAWEI ID has been assigned all permissions specified by scopeList.

| Parameter| Type | Description |
|-----------|----------|-----------|
| authHuaweiId | AuthHuaweiId | Authorized HUAWEI ID information. |
| scopeList | String[] | Authorization scope list. |

<br>

 Return |Description |
|----------------|-------------------|
|Promise\<ContainScopesResult\> | If the operation is successful, promise resolves to an object that contains boolean result, like {"containScopes": false }. Otherwise it throws an error. |

#### getAuthResultWithScope(scopeList)
This API is called to obtain the AuthHuaweiId.

 Parameter| Type | Description |
|----------------|----------|-----------|
|scopeList| String[]| Authorization scope list.|

<br>

 Return | Description |
|----------------|-------------------|
| Promise\<AuthHuaweiId\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error. |



#### getAuthResult()
This API is called to obtain information about the HUAWEI ID used for the previous sign-in and authorization.

 Return | Description |
|----------------|-------------------|
| Promise\<AuthHuaweiId\> | If the operation is successful, promise resolves to a AuthHuaweiId object. Otherwise it throws an error.|

### HMSHuaweiIdAuthTool
  #### Functions
  
 Return Type |Methods |Definition |
|----------------|---------------------|-----------------------|
|Promise\<String\>|`requestUnionId` |This API is called to obtain a unionId. |
|Promise\<String\>|`requestAccessToken` |This API is called to obtain a token.|
|Promise<>|`deleteAuthInfo` |This API is called to clear the local cache. |

#### requestUnionId(huaweiAccountName)
Obtains a unionId.

|Parameter| Type | Description |
|----------------|----------|-----------|
|huaweiAccountName | String| HUAWEI ID Name.|

<br>

|Return |Description|
|----------------|-----------------------|
| Promise\<String\> | If the operation is successful, promise resolves to a String that contains union id. Otherwise it throws an error.|

#### requestAccessToken(account, scopeList)
Obtains a token.

| Parameter| Type | Description |
|------------|----------|-----------|
| account |  Account | HUAWEI ID for which you need to obtain a token. It contains name and type properties.|
| scopeList| String[] | HUAWEI ID authorization scope. This array takes Scope values.|

<br>

| Return | Description |
|--------------|---------------|
 Promise\<String\> | If the operation is successful, promise resolves to a String that contains a access token. Otherwise it throws an error.|

#### deleteAuthInfo(accessToken)
Clears the local cache.

| Parameter| Type | Description |
|----------------|----------|-----------|
|accessToken | String| Token to be clear. |

<br>

 |Return |Description |
|----------------|-----------------------|
|Promise<>|If the operation is successful, promise will resolve successfully. Otherwise it throws an error.|


### HMSNetworkTool

#### Functions
  
| Return Type |Methods |Definition |
|----------------|---------------------|-----------------------|
|Promise\<String\>|`buildNetworkCookie` |This API is called to construct a cookie by combining input values. |
|Promise\<String\>|`buildNetworkURL` |This API is called to cookie url based on the domain name and isUseHttps.|


#### buildNetworkCookie(cookie)
Constructs a cookie by combining input values.

| Parameter| Type | Description |
|----------------|----------|-----------|
| cookie| Cookie| It is an object that contains cookieName, cookieValue, domain, path, isHttpOnly, isSecure, maxAge. |

<br>

| Return| Description |
|----------------|-----------------------|
|Promise\<String\> |If the operation is successful, promise resolves to a String that contains a cookie. Otherwise it throws an error. |


#### buildNetworkURL(domainInfo)
Returns cookie url based on the domain name and isUseHttps.

| Parameter| Type | Description |
|----------------|----------|-----------|
|domainInfo| DomainInfo| The parameter that contains a domain name and isUseHttps info. |

<br>

| Return|Description|
|----------------|-----------------------|
|Promise\<String\>| If the operation is successful, promise resolves to a String that contains a cookie url. Otherwise it throws an error.|

### HMSReadSMSManager

#### Functions
  
| Return Type |Methods |Definition |
|----------------|---------------------|-----------------------|
|Promise\<String\>| `smsVerificationCode` |This API is called to enable the service of reading SMS messages until the SMS messages that meet the rules (Timeout five minutes). |
|Promise\<String\>| `obtainHashCode` |This API is called to obtain hash code.  |

#### smsVerificationCode() 
With this function,app can automatically retrieve SMS verification codes without requesting the permission of reading SMS messages. In case of get SMS Message, returned the SMS Message.

| Return |Description|
|----------------|---------------------|
|Promise\<String\>| If the operation is successful, promise resolves to a String that contains a content of SMS. Otherwise it throws an error.|

#### obtainHashCode()
Obtains hash code which indicates the hash value generated by the HMS SDK based on app package name to uniquely identify app.

| Return |Description|
|----------------|-------------------|
|Promise\<String\>|If the operation is successful, promise resolves to a String that contains a hash value. Otherwise it throws an error.|

### HMSHuaweiIdAuthButton

#### Functions
  
| Return Type |Methods |Definition |
|----------------|---------------------|-----------------------|
| void | `getHuaweiIdAuthButton` |This API is called to creating a specific button for login. |

#### getHuaweiIdAuthButton(buttonId, theme, colorPolicy, cornerRadius)
Authenticates user identities. Note that this class only processes the the visual elements of the button.

| Parameter| Type | Option |Description |
|-------|---------|----------|-----------|
|buttonId|String||Id of div that is used for HuaweiIdAuthButton.|
| theme|Integer|0|Button without any title.|
|theme| Integer |1 | Button with an icon and a title.|
|colorPolicy|Integer| 0| Blue button.|
|colorPolicy|Integer|1| Red button.|
|colorPolicy|Integer|2|White button.|
|colorPolicy|Integer|3|White button with strokes.|
|colorPolicy|Integer|4|Black button.|
|colorPolicy|Integer|5|Gray button.|
|cornerRadius|Integer|-1|Button with large rounded corners.|
|cornerRadius|Integer|-2|Button with medium-sized rounded corners.|
|cornerRadius|Integer|-3|Button with small rounded corners|

### Data Types

#### AuthHuaweiId
|Field Name| Type| Description |
|--------------|-----|---------|
openId|String|openId.
|uid |String|uid.
displayName|String|Nickname.
photoUrl|String|Obtains the picture url.
accessToken|String|Access token.
|serviceCountryCode|String|Service country code.
status|Integer|User status. 1: Normal; 2: Dbank suspended; 3: Deregistered, 4: All services are suspended.
gender|Integer|User Gender. -1: Unknown, 0: male, 1: female, 2: confidential.
scopes|String[]|Authorized scopes.
serverAuthCode|String|serverAuthCode.
unionId|String|unionId.
countryCode|String|Registration country code.

#### Account
|Field Name| Type| Description |
|--------------|-----|---------|
|type|String|Type of HUAWEI ID Account.
|name|String|Name of the HUAWEI ID Account.|

#### Cookie
|Field Name| Type| Description |
|--------------|-----|---------|
|cookieName|String|Cookie name.|
cookieValue|String|Cookie value.
|domain|String|Cookie domain name.
|path|String|Page path for accessing the cookie.
|isHttpOnly|Boolean|Value true indicates that the cookie information is contained only in the HTTP request header and cannot be accessed through document.cookie.
|isSecure|Boolean|Value true indicates that the cookie can be transmitted only through HTTPS, and value false indicates that the cookie can be transmitted through HTTP.
|maxAge|Long|Cookie lifetime, in seconds.

#### DomainInfo
|Field Name| Type| Description |
|--------------|-----|---------|
|domain|String|Domain name.|
|isUseHttps|Boolean|Value true indicates HTTPS, and value false indicates HTTP.|

### ContainScopesResult
|Field Name| Type| Description |
|--------------|-----|---------|
|containScopes|Boolean|true: The HUAWEI ID has all the permissions specified by scopeArr. false: The HUAWEI ID does not have all the permissions specified by scopeArr.|


## 4. Configure Description

No.

## 5. Licensing and Terms

Apache 2.0 license.