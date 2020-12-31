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

package com.huawei.hms.cordova.mlkit.providers.languageproviders;

import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.utils.MLError;
import com.huawei.hms.mlsdk.textembedding.MLTextEmbeddingAnalyzer;
import com.huawei.hms.mlsdk.textembedding.MLTextEmbeddingAnalyzerFactory;
import com.huawei.hms.mlsdk.textembedding.MLTextEmbeddingException;
import com.huawei.hms.mlsdk.textembedding.MLTextEmbeddingSetting;
import com.huawei.hms.mlsdk.textembedding.MLVocabularyVersion;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class MLTextEmbeddingAnalyser extends HMSProvider {
    private static final String TAG = MLTextEmbeddingAnalyser.class.getName();
    private MLTextEmbeddingAnalyzer analyzer;
    private CallbackContext callbackContext;
    private JSONObject params;
    private MLTextEmbeddingSetting setting;

    public MLTextEmbeddingAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeTextEmbeddingAnalyser(final String action, final CallbackContext callbackContext,
        final JSONObject params) throws JSONException {
        this.params = params;
        this.callbackContext = callbackContext;
        JSONObject textSetting = params.optJSONObject("textEmbeddingSetting");
        String language = textSetting.getString("language");
        setting = new MLTextEmbeddingSetting.Factory().setLanguage(language).create();
        this.analyzer = MLTextEmbeddingAnalyzerFactory.getInstance().getMLTextEmbeddingAnalyzer(setting);
        switch (action) {
            case "ACTION_TEXTEMBEDDING_DICINFO_ANALYSER":
                dicInfo();
                break;
            case "ACTION_TEXTEMBEDDING_WORDTOVECTOR_ANALYSER":
                word2vector();
                break;
            case "ACTION_TEXTEMBEDDING_SENTENCETOVECTOR_ANALYSER":
                sentence2vector();
                break;
            case "ACTION_TEXTEMBEDDING_WORDSIMILARTY_ANALYSER":
                wordSimilarity();
                break;
            case "ACTION_TEXTEMBEDDING_SENTENCESIMILARTY_ANALYSER":
                sentenceSimilarity();
                break;
            case "ACTION_TEXTEMBEDDING_SIMILARWORDS_ANALYSER":
                multipleSimilarity();
                break;
            case "ACTION_TEXTEMBEDDING_WORDBATCH_ANALYSER":
                wordBatchVector();
                break;
            default:
                Log.e(TAG, "textEmbeddingAnalyseInitializer: error -> invalid action");
                break;
        }
    }

    public void getTextEmbediingSetting(final CallbackContext callbackContext) throws JSONException {
        JSONObject object = new JSONObject();
        object.putOpt("language", setting.getLanguage());
        callbackContext.success(object);
        HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyserSetting");
    }

    private void wordBatchVector() throws JSONException {
        if (!params.has("batchText") || params.isNull("batchText")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("textEmbeddingAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
        String batchText = params.getString("batchText");
        final Set<String> stringSet = new HashSet<>();
        if (!batchText.isEmpty()) {
            List<String> stringList = Arrays.asList(batchText.split(","));
            stringSet.addAll(stringList);
        }

        Task<Map<String, Float[]>> wordVectorBatchTask = analyzer.analyseWordVectorBatch(stringSet);
        wordVectorBatchTask.addOnSuccessListener(wordsVector -> {
            JSONObject jsonObject = new JSONObject(wordsVector);
            callbackContext.success(jsonObject);
            HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser");
        }).addOnFailureListener(e -> {
            if (e instanceof MLTextEmbeddingException) {
                MLTextEmbeddingException embeddingException = (MLTextEmbeddingException) e;
                embeddingException.getErrCode();
                embeddingException.getMessage();
                callbackContext.error(embeddingException.getMessage());
            } else {
                callbackContext.error(e.getMessage());
            }
            HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser", "-1");
        });
    }

    private void multipleSimilarity() throws JSONException {
        if (!params.has("multipleText") || params.isNull("multipleText") || !params.has("similarityNumber")
            || params.isNull("similarityNumber")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("textEmbeddingAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
        String multipleText = params.getString("multipleText");
        int similarityNumber = params.getInt("similarityNumber");
        Task<List<String>> multipleSimilarityWordsTask = analyzer.analyseSimilarWords(multipleText.trim(),
            similarityNumber);
        multipleSimilarityWordsTask.addOnSuccessListener(
            words -> handleResult(new JSONArray(words), "result", true, null))
            .addOnFailureListener(e -> handleResult(null, null, false, e));
    }

    private void sentenceSimilarity() throws JSONException {
        if (!params.has("sentenceText1") || params.isNull("sentenceText1") || !params.has("sentenceText2")
            || params.isNull("sentenceText2")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("textEmbeddingAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }
        String sentenceText1 = params.getString("sentenceText1");
        String sentenceText2 = params.getString("sentenceText2");
        Task<Float> sentencesSimilarityTask = analyzer.analyseSentencesSimilarity(sentenceText1, sentenceText2);
        sentencesSimilarityTask.addOnSuccessListener(
            sentencesSimilarity -> handleResult(sentencesSimilarity, "sentenceSimilarity", true, null))
            .addOnFailureListener(e -> handleResult(null, null, false, e));
    }

    private void wordSimilarity() throws JSONException {
        if (!params.has("wordText1") || params.isNull("wordText1") || !params.has("wordText2") || params.isNull(
            "wordText2")) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ILLEGAL_PARAMETER));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("textEmbeddingAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
            return;
        }

        String wordText1 = params.getString("wordText1");
        String wordText2 = params.getString("wordText2");
        Task<Float> wordsSimilarityTask = analyzer.analyseWordsSimilarity(wordText1.trim(), wordText2.trim());
        wordsSimilarityTask.addOnSuccessListener(
            wordsSimilarity -> handleResult(wordsSimilarity, "wordSimilarity", true, null)).addOnFailureListener(e -> {
            handleResult(null, null, false, e);
        });
    }

    private void sentence2vector() throws JSONException {
        if (!params.has("sentenceText") || params.isNull("sentenceText")) {
            callbackContext.error("Illegal argument. sentenceText field is mandatory and it must not be null.");
            HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser", "-1");
            return;
        }
        String sentenceText = params.getString("sentenceText");
        Task<Float[]> sentenceVectorTask = analyzer.analyseSentenceVector(sentenceText);
        sentenceVectorTask.addOnSuccessListener(sentenceVector -> {
            try {
                JSONObject sentence2word = new JSONObject();
                JSONObject jsonResult = new JSONObject();
                jsonResult.putOpt("sentence", sentenceText);
                jsonResult.putOpt("vector", new JSONArray(sentenceVector).toString());
                sentence2word.putOpt("result", jsonResult);
                callbackContext.success(sentence2word);
                HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser");
            } catch (JSONException e) {
                Log.e(TAG, "sentence2vector: error ->", e);
            }
        }).addOnFailureListener(e -> handleResult(null, null, false, e));
    }

    private void word2vector() throws JSONException {
        if (!params.has("wordText") || params.isNull("wordText")) {
            callbackContext.error("Illegal argument. wordText field is mandatory and it must not be null.");
            HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser", "-1");
            return;
        }
        String wordText = params.getString("wordText");
        Task<Float[]> wordVectorTask = analyzer.analyseWordVector(wordText.trim());
        wordVectorTask.addOnSuccessListener(wordVector -> {
            try {
                JSONObject word2vector = new JSONObject();
                JSONObject wordTextResult = new JSONObject();
                wordTextResult.putOpt("wordText", wordText);
                wordTextResult.putOpt("vector", new JSONArray(wordVector).toString());
                word2vector.putOpt("result", wordTextResult);
                callbackContext.success(word2vector);
                HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser");
            } catch (JSONException e) {
                Log.e(TAG, "word2vector: error ->", e);
            }
        }).addOnFailureListener(e -> handleResult(null, null, false, e));
    }

    private void dicInfo() {
        Task<MLVocabularyVersion> vocabularyVersionTask = analyzer.getVocabularyVersion();
        vocabularyVersionTask.addOnSuccessListener(dictionaryVersionVo -> {
            try {
                JSONObject dicInfo = new JSONObject();
                dicInfo.putOpt("dictionaryDimension", dictionaryVersionVo.getDictionaryDimension());
                dicInfo.putOpt("dictionarySize", dictionaryVersionVo.getDictionarySize());
                dicInfo.putOpt("versionNo", dictionaryVersionVo.getVersionNo());
                callbackContext.success(dicInfo);
            } catch (JSONException e) {
                Log.e(TAG, "dicInfo: error ->", e);
            }
        }).addOnFailureListener(e -> handleResult(null, null, false, e));
    }

    public void handleResult(Object object, String jsonName, boolean success, Exception ex) {
        if (success) {
            try {
                JSONObject result = new JSONObject();
                result.putOpt(jsonName, object);
                callbackContext.success(result);
                HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser");
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser", e.getMessage());
            }
        } else {
            if (ex instanceof MLTextEmbeddingException) {
                callbackContext.error(
                    MLError.toErrorJSON(((MLTextEmbeddingException) ex).getErrCode(), ex.getMessage()));
                HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser", ex.getMessage());
            } else {
                Log.e(TAG, "handleResult: error ->", ex);
                HMSLogger.getInstance(getContext()).sendSingleEvent("textEmbeddingAnalyser", ex.getMessage());
            }
        }
    }

}