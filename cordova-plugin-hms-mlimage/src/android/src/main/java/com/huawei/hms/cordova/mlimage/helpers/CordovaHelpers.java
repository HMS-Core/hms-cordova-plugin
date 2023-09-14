/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mlimage.helpers;

import android.content.Context;

import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.json.JSONObject;

public class CordovaHelpers {
    private static final String TAG = CordovaHelpers.class.getSimpleName();

    public static PluginLayout.InitialProps initialPropsFrom(JSONObject json) {

        return new PluginLayout.InitialProps(json.optInt("x"), json.optInt("y"), json.optInt("width"),
            json.optInt("height"), json.optInt("marginLeft"), json.optInt("marginTop"), json.optInt("marginBottom"),
            json.optInt("marginRight"));
    }

    public static void frameController(MLFrame frame, Context context, Promise promise, String name) {
        if (frame == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
        }
    }

}
