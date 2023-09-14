/*
    Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.

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
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "imgseg",
    loadChildren: () =>
      import("./imgseg/imgseg.module").then((m) => m.ImgsegPageModule),
  },
  {
    path: "object",
    loadChildren: () =>
      import("./object/object.module").then((m) => m.ObjectPageModule),
  },
  {
    path: "classify",
    loadChildren: () =>
      import("./classify/classify.module").then((m) => m.ClassifyPageModule),
  },
  {
    path: "landmark",
    loadChildren: () =>
      import("./landmark/landmark.module").then((m) => m.LandmarkPageModule),
  },
  {
    path: "custommodel",
    loadChildren: () =>
      import("./custommodel/custommodel.module").then((m) => m.CustommodelPageModule),
  },
  {
    path: "documentskewcorrection",
    loadChildren: () =>
      import("./documentskewcorrection/documentskewcorrection.module").then((m) => m.DocumentskewcorrectionPageModule),
  },
  {
    path: "imgsuperresolution",
    loadChildren: () =>
      import("./imgsuperresolution/imgsuperresolution.module").then((m) => m.ImgsuperresolutionPageModule),
  },
  {
    path: "live",
    loadChildren: () =>
      import("./live/live.module").then((m) => m.LivePageModule),
  },
  {
    path: "stillscene",
    loadChildren: () =>
      import("./stillscene/stillscene.module").then((m) => m.StillscenePageModule),
  },
  {
    path: "textimagesuperresolution",
    loadChildren: () =>
      import("./textimagesuperresolution/textimagesuperresolution.module").then((m) => m.TextimagesuperresolutionPageModule),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./product/product.module").then((m) => m.ProductPageModule),
  },
  {
    path: "composite",
    loadChildren: () =>
      import("./composite/composite.module").then((m) => m.CompositePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
