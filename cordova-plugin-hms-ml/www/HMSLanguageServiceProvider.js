/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextEmbeddingSetting = exports.textEmbeddingWordBatchVector = exports.textEmbeddingSimilarWords = exports.textEmbeddingSentenceSimilarity = exports.textEmbeddingWordSimilarity = exports.textEmbeddingSentencetoVector = exports.textEmbeddingWordtoVector = exports.textEmbeddingDictionaryInfo = exports.MLSpeechRealTimeTranscriptionConstants = exports.MLTtsError = exports.MLTtsAudioFragmentConstant = exports.MLBcrCaptureErrorCode = exports.CordovaErrors = exports.MLImageSegmentationSetting = exports.MLImageClassificationConfig = exports.MLLocalTextSetting = exports.MLRemoteTextSetting = exports.MLTextConfig = exports.MLImageSegmentationScene = exports.MLBcrCaptureConfig = exports.MLRemoteLandmarkSetting = exports.MLGcrCaptureUIConfig = exports.HandkeyPointConfig = exports.MLBcrResultConfig = exports.ImgSuperResolutionConfig = exports.MlObjectAnalyserConfig = exports.FEATURE = exports.DownloadStrategyCustom = exports.RectStyle = exports.MLSkeletonConfig = exports.MLFaceSetting = exports.Colors = exports.MLAftConstants = exports.MLTtsConstants = exports.LANGUAGE = void 0;
const util_1 = require("./util");
var Interfaces_1 = require("./Interfaces");
Object.defineProperty(exports, "LANGUAGE", { enumerable: true, get: function () { return Interfaces_1.LANGUAGE; } });
Object.defineProperty(exports, "MLTtsConstants", { enumerable: true, get: function () { return Interfaces_1.MLTtsConstants; } });
Object.defineProperty(exports, "MLAftConstants", { enumerable: true, get: function () { return Interfaces_1.MLAftConstants; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return Interfaces_1.Colors; } });
Object.defineProperty(exports, "MLFaceSetting", { enumerable: true, get: function () { return Interfaces_1.MLFaceSetting; } });
Object.defineProperty(exports, "MLSkeletonConfig", { enumerable: true, get: function () { return Interfaces_1.MLSkeletonConfig; } });
Object.defineProperty(exports, "RectStyle", { enumerable: true, get: function () { return Interfaces_1.RectStyle; } });
Object.defineProperty(exports, "DownloadStrategyCustom", { enumerable: true, get: function () { return Interfaces_1.DownloadStrategyCustom; } });
Object.defineProperty(exports, "FEATURE", { enumerable: true, get: function () { return Interfaces_1.FEATURE; } });
Object.defineProperty(exports, "MlObjectAnalyserConfig", { enumerable: true, get: function () { return Interfaces_1.MlObjectAnalyserConfig; } });
Object.defineProperty(exports, "ImgSuperResolutionConfig", { enumerable: true, get: function () { return Interfaces_1.ImgSuperResolutionConfig; } });
Object.defineProperty(exports, "MLBcrResultConfig", { enumerable: true, get: function () { return Interfaces_1.MLBcrResultConfig; } });
Object.defineProperty(exports, "HandkeyPointConfig", { enumerable: true, get: function () { return Interfaces_1.HandkeyPointConfig; } });
Object.defineProperty(exports, "MLGcrCaptureUIConfig", { enumerable: true, get: function () { return Interfaces_1.MLGcrCaptureUIConfig; } });
Object.defineProperty(exports, "MLRemoteLandmarkSetting", { enumerable: true, get: function () { return Interfaces_1.MLRemoteLandmarkSetting; } });
Object.defineProperty(exports, "MLBcrCaptureConfig", { enumerable: true, get: function () { return Interfaces_1.MLBcrCaptureConfig; } });
Object.defineProperty(exports, "MLImageSegmentationScene", { enumerable: true, get: function () { return Interfaces_1.MLImageSegmentationScene; } });
Object.defineProperty(exports, "MLTextConfig", { enumerable: true, get: function () { return Interfaces_1.MLTextConfig; } });
Object.defineProperty(exports, "MLRemoteTextSetting", { enumerable: true, get: function () { return Interfaces_1.MLRemoteTextSetting; } });
Object.defineProperty(exports, "MLLocalTextSetting", { enumerable: true, get: function () { return Interfaces_1.MLLocalTextSetting; } });
Object.defineProperty(exports, "MLImageClassificationConfig", { enumerable: true, get: function () { return Interfaces_1.MLImageClassificationConfig; } });
Object.defineProperty(exports, "MLImageSegmentationSetting", { enumerable: true, get: function () { return Interfaces_1.MLImageSegmentationSetting; } });
Object.defineProperty(exports, "CordovaErrors", { enumerable: true, get: function () { return Interfaces_1.CordovaErrors; } });
Object.defineProperty(exports, "MLBcrCaptureErrorCode", { enumerable: true, get: function () { return Interfaces_1.MLBcrCaptureErrorCode; } });
Object.defineProperty(exports, "MLTtsAudioFragmentConstant", { enumerable: true, get: function () { return Interfaces_1.MLTtsAudioFragmentConstant; } });
Object.defineProperty(exports, "MLTtsError", { enumerable: true, get: function () { return Interfaces_1.MLTtsError; } });
Object.defineProperty(exports, "MLSpeechRealTimeTranscriptionConstants", { enumerable: true, get: function () { return Interfaces_1.MLSpeechRealTimeTranscriptionConstants; } });
//Language Provider
function textEmbeddingDictionaryInfo(textEmbeddingDicInfoReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_DICINFO_ANALYSER", [textEmbeddingDicInfoReq]);
    });
}
exports.textEmbeddingDictionaryInfo = textEmbeddingDictionaryInfo;
function textEmbeddingWordtoVector(textEmbeddingWordtoVectorReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_WORDTOVECTOR_ANALYSER", [textEmbeddingWordtoVectorReq]);
    });
}
exports.textEmbeddingWordtoVector = textEmbeddingWordtoVector;
function textEmbeddingSentencetoVector(textEmbeddingSentencetoVectorReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_SENTENCETOVECTOR_ANALYSER", [textEmbeddingSentencetoVectorReq]);
    });
}
exports.textEmbeddingSentencetoVector = textEmbeddingSentencetoVector;
function textEmbeddingWordSimilarity(textEmbeddingWordSimilarityReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_WORDSIMILARTY_ANALYSER", [textEmbeddingWordSimilarityReq]);
    });
}
exports.textEmbeddingWordSimilarity = textEmbeddingWordSimilarity;
function textEmbeddingSentenceSimilarity(textEmbeddingSentenceSimilartyReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_SENTENCESIMILARTY_ANALYSER", [textEmbeddingSentenceSimilartyReq]);
    });
}
exports.textEmbeddingSentenceSimilarity = textEmbeddingSentenceSimilarity;
function textEmbeddingSimilarWords(textEmbeddingSimilarWordsReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_SIMILARWORDS_ANALYSER", [textEmbeddingSimilarWordsReq]);
    });
}
exports.textEmbeddingSimilarWords = textEmbeddingSimilarWords;
function textEmbeddingWordBatchVector(textEmbeddingWordBatchReq) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_WORDBATCH_ANALYSER", [textEmbeddingWordBatchReq]);
    });
}
exports.textEmbeddingWordBatchVector = textEmbeddingWordBatchVector;
function getTextEmbeddingSetting() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, util_1.asyncExec)("HMSLanguageServiceProvider", "ACTION_TEXTEMBEDDING_SETIING", []);
    });
}
exports.getTextEmbeddingSetting = getTextEmbeddingSetting;
//# sourceMappingURL=HMSLanguageServiceProvider.js.map