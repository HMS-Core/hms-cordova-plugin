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

import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.TEXT_TRANSACTOR_ON_DESTROY;
import static com.huawei.hms.cordova.mlimage.helpers.LensEngineConstants.TEXT_TRANSACTOR_ON_RESULT;

import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.text.MLText;

import org.apache.cordova.PluginResult;

public class TextAnalyzerTransactor implements MLAnalyzer.MLTransactor<MLText.Block> {
    private static String TAG = TextAnalyzerTransactor.class.getSimpleName();

    private final Promise promise;

    private final CorPack corPack;

    public TextAnalyzerTransactor(Promise promise, CorPack corPack) {
        this.promise = promise;
        this.corPack = corPack;
    }

    @Override
    public void destroy() {
        corPack.getEventRunner().sendEvent(TEXT_TRANSACTOR_ON_DESTROY);
    }

    @Override
    public void transactResult(MLAnalyzer.Result<MLText.Block> results) {
        SparseArray<MLText.Block> items = results.getAnalyseList();
        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK,
            TextUtils.fromSparseArrayMLTextBlockToJSON(items));
        pluginResult.setKeepCallback(true);
        Log.i(TAG, "ocrTransactResult : " + TextUtils.fromSparseArrayMLTextBlockToJSON(items));
        promise.sendPluginResult(pluginResult);
        corPack.getEventRunner()
            .sendEvent(TEXT_TRANSACTOR_ON_RESULT, TextUtils.fromSparseArrayMLTextBlockToJSON(items));
    }
}
