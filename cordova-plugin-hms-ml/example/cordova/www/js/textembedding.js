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
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dicInfo").addEventListener("click", () => getDictionaryInfo());
    document.getElementById("wordTextBtn").addEventListener("click", () => getWordText());
    document.getElementById("wordBatchBtn").addEventListener("click", () => getBatchText());
    document.getElementById("sentenceTextBtn").addEventListener("click", () => getSentenceText());
    document.getElementById("wordSimilarity").addEventListener("click", () => getWordSimilarity());
    document.getElementById("sentenceSimilarity").addEventListener("click", () => getSentenceSimilarity());
    document.getElementById("similarWords").addEventListener("click", () => getSimilarWords());
}, false);

async function getDictionaryInfo() {
    var textEmbeddingDicInfoReq = {
        textEmbeddingSetting:{
            language:"en"
        },
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingDictionaryInfo(textEmbeddingDicInfoReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getBatchText() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        batchText: document.getElementById("wordBatch").value,
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingWordBatchVector(textEmbeddingReq);
        alert(JSON.stringify(result));
        console.log(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getWordText() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        wordText: document.getElementById("wordText").value,
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingWordtoVector(textEmbeddingReq);
        alert(JSON.stringify(result.result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getSentenceText() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        sentenceText: document.getElementById("sentenceText").value,
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingSentencetoVector(textEmbeddingReq);
        alert(JSON.stringify(result.result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getWordSimilarity() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        wordText1:document.getElementById("wordText1").value,
        wordText2:document.getElementById("wordText2").value
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingWordSimilarity(textEmbeddingReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getSentenceSimilarity() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        sentenceText1:document.getElementById("sentenceText1").value,
        sentenceText2:document.getElementById("sentenceText2").value
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingSentenceSimilarity(textEmbeddingReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}
async function getSimilarWords() {
    var textEmbeddingReq = {
        textEmbeddingSetting:{
            language:"en"
        },
        multipleText:document.getElementById("multipleText").value,
        similarityNumber:document.getElementById("similartyNumber").value
    };
    try {
        var result = await HMSLanguageServiceProvider.textEmbeddingSimilarWords(textEmbeddingReq);
        alert(JSON.stringify(result));
    } catch (Ex) {
        alert(JSON.stringify(Ex));
    }
}


