/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.mlkit;

import android.util.Log;

import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.providers.languageproviders.MLTextEmbeddingAnalyser;
import com.huawei.hms.cordova.mlkit.utils.PermissionUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSLanguageServiceProvider extends CordovaPlugin {

    public static final String TAG = HMSTextServiceProvider.class.getSimpleName();
    private MLTextEmbeddingAnalyser textEmbeddingAnalyse;

    public void pluginInitialize() {
        textEmbeddingAnalyse = CordovaHelpers.initializeProvider(new MLTextEmbeddingAnalyser(cordova.getContext()),
            cordova, this);
    }

    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        JSONObject params = args.optJSONObject(0);
        try {
            if (action.equals("ACTION_TEXTEMBEDDING_DICINFO_ANALYSER") || action.equals(
                "ACTION_TEXTEMBEDDING_WORDTOVECTOR_ANALYSER") || action.equals(
                "ACTION_TEXTEMBEDDING_SENTENCETOVECTOR_ANALYSER") || action.equals(
                "ACTION_TEXTEMBEDDING_WORDSIMILARTY_ANALYSER") || action.equals(
                "ACTION_TEXTEMBEDDING_SENTENCESIMILARTY_ANALYSER") || action.equals(
                "ACTION_TEXTEMBEDDING_SIMILARWORDS_ANALYSER") || action.equals(
                "ACTION_TEXTEMBEDDING_WORDBATCH_ANALYSER")) {
                boolean readExternalStorage = PermissionUtils.hasPermission("readExternalStorage", this);
                boolean writeExternalStorage = PermissionUtils.hasPermission("writeExternalStorage", this);
                if (writeExternalStorage && readExternalStorage) {
                    HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("textEmbeddingAnalyser");
                    if (textEmbeddingAnalyse!=null){
                        textEmbeddingAnalyse.initializeTextEmbeddingAnalyser(action, callbackContext, params);
                        return true;
                    }

                }
                return false;
            }
            if (action.equals("ACTION_TEXTEMBEDDING_SETIING")) {
                HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer("textEmbeddingAnalyserSetting");
                if (textEmbeddingAnalyse!=null){
                    textEmbeddingAnalyse.getTextEmbediingSetting(callbackContext);
                    return true;
                }
            }
        } catch (JSONException e) {
            Log.e(TAG, "initializer: -> JSONException " + e.getMessage());
        }
        return false;
    }

}
