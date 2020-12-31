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
import * as MLKit from './Interfaces';
export { MLBounds, faceReq, MLFace, MLconfig, LANGUAGE, MLTtsConstants, Colors, MLFaceSetting, MLSkeletonConfig, RectStyle, DownloadStrategyCustom, FEATURE, MlObjectAnalyserConfig, ImgSuperResolutionConfig, MLBcrResultConfig, HandkeyPointConfig, MLGcrCaptureUIConfig, MLRemoteLandmarkSetting, MLBcrCaptureConfig, MLImageSegmentationScene, MLTextConfig, MLRemoteTextSetting, MLLocalTextSetting, MLImageClassificationConfig, MLImageSegmentationSetting } from './Interfaces';
export declare function textEmbeddingDictionaryInfo(textEmbeddingDicInfoReq: MLKit.textEmbeddingDicInfoReq): Promise<MLKit.MLVocabularyVersion>;
export declare function textEmbeddingWordtoVector(textEmbeddingWordtoVectorReq: MLKit.textEmbeddingWordtoVectorReq): Promise<MLKit.MLWordtoVectorResult>;
export declare function textEmbeddingSentencetoVector(textEmbeddingSentencetoVectorReq: MLKit.textEmbeddingSentencetoVectorReq): Promise<MLKit.MlSentencetoVectorResult>;
export declare function textEmbeddingWordSimilarity(textEmbeddingWordSimilarityReq: MLKit.textEmbeddingWordSimilarityReq): Promise<MLKit.MLWordSimilarityResult>;
export declare function textEmbeddingSentenceSimilarity(textEmbeddingSentenceSimilartyReq: MLKit.textEmbeddingSentenceSimilarityReq): Promise<MLKit.MLSentenceSimilarityResult>;
export declare function textEmbeddingSimilarWords(textEmbeddingSimilarWordsReq: MLKit.textEmbeddingSimilarWordsReq): Promise<MLKit.MLSimilarWordsResult>;
export declare function textEmbeddingWordBatchVector(textEmbeddingWordBatchReq: MLKit.textEmbeddingWordBatchReq): Promise<any>;
export declare function getTextEmbeddingSetting(): Promise<any>;
