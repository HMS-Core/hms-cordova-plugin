/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

#import "AppDelegate+HMSAnalyticsPlugin.h"
#import <HiAnalytics/HiAnalytics.h>
#import <objc/runtime.h>

@implementation AppDelegate (HMSAnalyticsPlugin)

NSString*const ROUTE_POLICY = @"AGC_ROUTE_POLICY";
NSString*const IS_ANALYTICS_ENABLED = @"IS_ANALYTICS_ENABLED";

+ (void)load {
    Method original = class_getInstanceMethod(self, @selector(application:didFinishLaunchingWithOptions:));
    Method swizzled = class_getInstanceMethod(self, @selector(application:hmsAnalyticsDidFinishLaunchingWithOptions:));
    method_exchangeImplementations(original, swizzled);
}

- (BOOL) isContainRoutePolicy:(NSString*)routePolicy routePolicyList:(NSMutableArray*)policyList
{
    for (NSString* str in policyList) {
        if ([str isEqualToString:routePolicy]) {
            return YES;
        }
    }
    return NO;
}

- (void) hiAnalyticsConfig
{
    NSBundle *mainBundle = [NSBundle mainBundle];
    NSString *routePolicy = [mainBundle objectForInfoDictionaryKey:ROUTE_POLICY];
    NSMutableArray *routePolicyList = [NSMutableArray arrayWithObjects:@"CN", @"DE", @"SG", @"RU", nil];
    if([self isContainRoutePolicy:routePolicy routePolicyList:routePolicyList]) {
        [HiAnalytics configWithRoutePolicy:routePolicy];
    } else {
        [HiAnalytics config];
    }
}

- (BOOL)application:(UIApplication*)application hmsAnalyticsDidFinishLaunchingWithOptions:(NSDictionary*)launchOptions {
    [self application:application hmsAnalyticsDidFinishLaunchingWithOptions:launchOptions];
    NSLog(@"Starting HMSAnalytics plugin");
    NSBundle *mainBundle = [NSBundle mainBundle];
    NSDictionary<NSString *, id> *infoDictionary = [mainBundle infoDictionary];
    NSObject *value = [infoDictionary objectForKey:IS_ANALYTICS_ENABLED];
    if(value == nil) {
        [self hiAnalyticsConfig];
    } else {
        BOOL isAnalyticsEnabled = [[mainBundle objectForInfoDictionaryKey:IS_ANALYTICS_ENABLED] boolValue];
        if(!isAnalyticsEnabled) {
            return YES;
        }
        [self hiAnalyticsConfig];
    }
    return YES;
}
@end
