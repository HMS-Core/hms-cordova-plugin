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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialPropsOfHTMLElementFrom = void 0;
function getInitialPropsOfHTMLElementFrom(divId = "") {
    const element = document.getElementById(divId);
    if (element === null)
        return {};
    const initialProps = {};
    const computedStyle = window.getComputedStyle(element, null);
    const boundingClientRect = element.getBoundingClientRect();
    initialProps['x'] = boundingClientRect.x;
    initialProps['y'] = boundingClientRect.y;
    initialProps['pageXOffset'] = window.pageXOffset;
    initialProps['pageYOffset'] = window.pageYOffset;
    initialProps['width'] = parseInt(computedStyle.width);
    initialProps['height'] = parseInt(computedStyle.height);
    return initialProps;
}
exports.getInitialPropsOfHTMLElementFrom = getInitialPropsOfHTMLElementFrom;
//# sourceMappingURL=layout.js.map