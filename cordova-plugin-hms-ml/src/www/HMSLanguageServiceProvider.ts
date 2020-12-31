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
import { MLBounds,faceReq,MLFace,MLconfig,LANGUAGE,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';
import { asyncExec } from './util'
import * as MLKit from './Interfaces';
export{MLBounds,faceReq,MLFace,MLconfig,LANGUAGE,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';

//Language Provider
export async function  textEmbeddingDictionaryInfo(textEmbeddingDicInfoReq: MLKit.textEmbeddingDicInfoReq): Promise<MLKit.MLVocabularyVersion> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_DICINFO_ANALYSER', [textEmbeddingDicInfoReq]);
     
  }
  export async function textEmbeddingWordtoVector(textEmbeddingWordtoVectorReq: MLKit.textEmbeddingWordtoVectorReq): Promise<MLKit.MLWordtoVectorResult> {
   
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_WORDTOVECTOR_ANALYSER', [textEmbeddingWordtoVectorReq]);
     
  }
  export async function textEmbeddingSentencetoVector(textEmbeddingSentencetoVectorReq: MLKit.textEmbeddingSentencetoVectorReq): Promise<MLKit.MlSentencetoVectorResult> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_SENTENCETOVECTOR_ANALYSER', [textEmbeddingSentencetoVectorReq]);
     
  }
  export async function textEmbeddingWordSimilarity(textEmbeddingWordSimilarityReq: MLKit.textEmbeddingWordSimilarityReq): Promise<MLKit.MLWordSimilarityResult> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_WORDSIMILARTY_ANALYSER', [textEmbeddingWordSimilarityReq]);
     
  }
  export async function textEmbeddingSentenceSimilarity(textEmbeddingSentenceSimilartyReq: MLKit.textEmbeddingSentenceSimilarityReq): Promise<MLKit.MLSentenceSimilarityResult> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_SENTENCESIMILARTY_ANALYSER', [textEmbeddingSentenceSimilartyReq]);
     
  }
  export async function textEmbeddingSimilarWords(textEmbeddingSimilarWordsReq: MLKit.textEmbeddingSimilarWordsReq): Promise<MLKit.MLSimilarWordsResult> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_SIMILARWORDS_ANALYSER', [textEmbeddingSimilarWordsReq]);
     
  }
  export async function textEmbeddingWordBatchVector(textEmbeddingWordBatchReq: MLKit.textEmbeddingWordBatchReq): Promise<any> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_WORDBATCH_ANALYSER', [textEmbeddingWordBatchReq]);
     
  }
  export async function getTextEmbeddingSetting(): Promise<any> {
    return asyncExec('HMSLanguageServiceProvider', 'ACTION_TEXTEMBEDDING_SETIING', []);
     
  }
  