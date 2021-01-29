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
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'face',
    loadChildren: () => import('./face/face.module').then( m => m.FacePageModule)
  },
  {
    path: 'tts',
    loadChildren: () => import('./tts/tts.module').then( m => m.TtsPageModule)
  },
  {
    path: 'bcr',
    loadChildren: () => import('./bcr/bcr.module').then( m => m.BcrPageModule)
  },
  {
    path: 'text',
    loadChildren: () => import('./text/text.module').then( m => m.TextPageModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./document/document.module').then( m => m.DocumentPageModule)
  },
  {
    path: 'generalcard',
    loadChildren: () => import('./generalcard/generalcard.module').then( m => m.GeneralcardPageModule)
  },
  {
    path: 'translate',
    loadChildren: () => import('./translate/translate.module').then( m => m.TranslatePageModule)
  },
  {
    path: 'langdetect',
    loadChildren: () => import('./langdetect/langdetect.module').then( m => m.LangdetectPageModule)
  },
  {
    path: 'asr',
    loadChildren: () => import('./asr/asr.module').then( m => m.AsrPageModule)
  },
  {
    path: 'aft',
    loadChildren: () => import('./aft/aft.module').then( m => m.AftPageModule)
  },
  {
    path: 'imgseg',
    loadChildren: () => import('./imgseg/imgseg.module').then( m => m.ImgsegPageModule)
  },
  {
    path: 'object',
    loadChildren: () => import('./object/object.module').then( m => m.ObjectPageModule)
  },
  {
    path: 'classify',
    loadChildren: () => import('./classify/classify.module').then( m => m.ClassifyPageModule)
  },
  {
    path: 'landmark',
    loadChildren: () => import('./landmark/landmark.module').then( m => m.LandmarkPageModule)
  },
  {
    path: 'custommodel',
    loadChildren: () => import('./custommodel/custommodel.module').then( m => m.CustommodelPageModule)
  },
  {
    path: 'documentskewcorrection',
    loadChildren: () => import('./documentskewcorrection/documentskewcorrection.module').then( m => m.DocumentskewcorrectionPageModule)
  },
  {
    path: 'imgsuperresolution',
    loadChildren: () => import('./imgsuperresolution/imgsuperresolution.module').then( m => m.ImgsuperresolutionPageModule)
  },
  {
    path: 'liveface',
    loadChildren: () => import('./liveface/liveface.module').then( m => m.LivefacePageModule)
  },
  {
    path: 'livelivenessdetection',
    loadChildren: () => import('./livelivenessdetection/livelivenessdetection.module').then( m => m.LivelivenessdetectionPageModule)
  },
  {
    path: 'stillhandkey',
    loadChildren: () => import('./stillhandkey/stillhandkey.module').then( m => m.StillhandkeyPageModule)
  },
  {
    path: 'stillskeleton',
    loadChildren: () => import('./stillskeleton/stillskeleton.module').then( m => m.StillskeletonPageModule)
  },
  {
    path: 'stillscene',
    loadChildren: () => import('./stillscene/stillscene.module').then( m => m.StillscenePageModule)
  },
  {
    path: 'rtt',
    loadChildren: () => import('./rtt/rtt.module').then( m => m.RttPageModule)
  },
  {
    path: 'sounddect',
    loadChildren: () => import('./sounddect/sounddect.module').then( m => m.SounddectPageModule)
  },
  {
    path: 'textembedding',
    loadChildren: () => import('./textembedding/textembedding.module').then( m => m.TextembeddingPageModule)
  },
  {
    path: 'textimagesuperresolution',
    loadChildren: () => import('./textimagesuperresolution/textimagesuperresolution.module').then( m => m.TextimagesuperresolutionPageModule)
  },
  {
    path: 'formrecognition',
    loadChildren: () => import('./formrecognition/formrecognition.module').then( m => m.FormrecognitionPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }