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

package com.huawei.hms.cordova.mlimage.transactors;

import android.util.Log;

import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLAnalyzer.Result;

import org.json.JSONException;
import org.json.JSONObject;

public class CompositeAnalyzerTransactor implements MLAnalyzer.MLTransactor<Object> {
    private static String TAG = CompositeAnalyzerTransactor.class.getSimpleName();

    private final Promise promise;

    public CompositeAnalyzerTransactor(final Promise promise) {
        this.promise = promise;
    }

    @Override
    public void destroy() {

    }

    @Override
    public void transactResult(Result<Object> result) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.putOpt("frameProperty", TextUtils.propertyFunc(result.getFrameProperty()));
            jsonObject.putOpt("analyseList", TextUtils.fromSparseArrayCompositeToJSON(result.getAnalyseList()));
            jsonObject.putOpt("isAnalyzerAvaliable", result.isAnalyzerAvaliable());
            promise.success(jsonObject);
        } catch (JSONException e) {
            Log.e(TAG, " compositeAnalyzerTransactor :" + e.getMessage());
        }

    }
}
