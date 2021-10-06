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

export declare enum Theme {
    THEME_NO_TITLE = 0,
    THEME_FULL_TITLE = 1
}
export declare enum ColorPolicy {
    COLOR_POLICY_BLUE = 0,
    COLOR_POLICY_RED = 1,
    COLOR_POLICY_WHITE = 2,
    COLOR_POLICY_WHITE_WITH_BORDER = 3,
    COLOR_POLICY_BLACK = 4,
    COLOR_POLICY_GRAY = 5
}
export declare enum CornerRadius {
    CORNER_RADIUS_LARGE = -1,
    CORNER_RADIUS_MEDIUM = -2,
    CORNER_RADIUS_SMALL = -3
}
export declare function getHuaweiIdAuthButton(edittedButton: string, theme: Theme, colorPolicy: ColorPolicy, cornerRadius: CornerRadius): void;
