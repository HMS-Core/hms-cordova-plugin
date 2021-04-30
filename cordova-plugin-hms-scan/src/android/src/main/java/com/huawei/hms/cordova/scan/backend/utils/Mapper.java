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

package com.huawei.hms.cordova.scan.backend.utils;

import org.json.JSONException;

@FunctionalInterface
public interface Mapper<X, Y> {
    /**
     * A simple mapping between X and Y.
     *
     * @param in X
     * @return Y
     * @throws JSONException Exception that may be thrown from JSONObject
     */
    Y map(X in) throws JSONException;
}
