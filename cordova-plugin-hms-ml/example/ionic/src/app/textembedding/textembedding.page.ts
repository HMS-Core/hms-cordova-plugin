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
import { Component } from '@angular/core';
declare var HMSLanguageServiceProvider;
@Component({
  selector: 'app-textembedding',
  templateUrl: './textembedding.page.html',
  styleUrls: ['./textembedding.page.scss'],
})
export class TextembeddingPage{

  wordtext: string = "";
  batchText:string="";
  sentencetext: string = "";
  wordtext1: string = "";
  wordtext2: string = "";
  sentencetext1: string = "";
  sentencetext2: string = "";
  word: string = "";
  number: string = "";
  constructor() { }

  public async dicInfo() {

    var textEmbeddingDicInfoReq = {
      textEmbeddingSetting:{
          language:"en"
      }
    };
    try {
      var result = await HMSLanguageServiceProvider.textEmbeddingDictionaryInfo(textEmbeddingDicInfoReq);
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(ex)
    }
  
  }
  public async wordText() {
    var textEmbeddingInput  = {
      textEmbeddingSetting:{
          language:"en"
      },
      wordText: this.wordtext,
  };
  try {
      var result = await HMSLanguageServiceProvider.textEmbeddingWordtoVector(textEmbeddingInput);
      alert(JSON.stringify(result.result));
  } catch (ex) {
      alert(ex)
  }

  }
  public async wordBatch() {
    var textEmbeddingInput  = {
      textEmbeddingSetting:{
          language:"en"
      },
      batchText: this.batchText,
  };
  try {
      var result = await HMSLanguageServiceProvider.textEmbeddingWordBatchVector(textEmbeddingInput);
      alert(JSON.stringify(result));
  } catch (ex) {
      alert(ex)
  }

  }
  public async sentenceText() {
    
    var textEmbeddingInput = {
      textEmbeddingSetting:{
          language:"en"
      },
      sentenceText: this.sentencetext,
  };
  try {
      var result = await HMSLanguageServiceProvider.textEmbeddingSentencetoVector(textEmbeddingInput);
      alert(JSON.stringify(result));
  } catch (ex) {
      alert(ex)
  }
  }
  public async wordSimilarity() {
    var textEmbeddingInput  = {
      textEmbeddingSetting:{
          language:"en"
      },
      wordText1:this.wordtext1,
      wordText2:this.wordtext2
  };
  try {
      var result = await HMSLanguageServiceProvider.textEmbeddingWordSimilarty(textEmbeddingInput);
      alert(JSON.stringify(result));
  } catch (ex) {
      alert(ex)
  }

  }
  public async sentenceSimilarity() {
    var textEmbeddingInput  = {
      textEmbeddingSetting:{
          language:"en"
      },
      sentenceText1:this.sentencetext1,
      sentenceText2:this.sentencetext2
  };
  try {
      var result = await HMSLanguageServiceProvider.textEmbeddingSentenceSimilarty(textEmbeddingInput);
      alert(JSON.stringify(result));
  } catch (ex) {
      alert(ex)
  }

  }
  public async similarWords() {
    var textEmbeddingInput = {
      textEmbeddingSetting:{
          language:"en"
      },
      multipleText:this.word,
      similarityNumber:Number(this.number)
  };
  try {
      var result = await HMSLanguageServiceProvider.textEmbeddingSimilarWords(textEmbeddingInput);
      alert(JSON.stringify(result));
  } catch (ex) {
      alert(ex)
  }

  }

}
