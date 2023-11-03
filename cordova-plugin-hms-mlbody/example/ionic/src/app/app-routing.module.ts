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
    path: "face",
    loadChildren: () =>
      import("./face/face.module").then((m) => m.FacePageModule),
  },
  {
    path: "faceVerification",
    loadChildren: () =>
      import("./faceVerification/faceVerification.module").then(
        (m) => m.FaceVerificationPageModule
      ),
  },
  {
    path: "gesture",
    loadChildren: () =>
      import("./gesture/gesture.module").then((m) => m.GesturePageModule),
  },
  {
    path: "livegesture",
    loadChildren: () =>
      import("./livegesture/livegesture.module").then(
        (m) => m.LivegesturePageModule
      ),
  },
  {
    path: "liveface",
    loadChildren: () =>
      import("./liveface/liveface.module").then((m) => m.LivefacePageModule),
  },
  {
    path: "livelivenessdetection",
    loadChildren: () =>
      import("./livelivenessdetection/livelivenessdetection.module").then(
        (m) => m.LivelivenessdetectionPageModule
      ),
  },
  {
    path: "stillhandkey",
    loadChildren: () =>
      import("./stillhandkey/stillhandkey.module").then(
        (m) => m.StillhandkeyPageModule
      ),
  },
  {
    path: "livehandkey",
    loadChildren: () =>
      import("./livehandkey/livehandkey.module").then(
        (m) => m.LivehandkeyPageModule
      ),
  },
  {
    path: "stillskeleton",
    loadChildren: () =>
      import("./stillskeleton/stillskeleton.module").then(
        (m) => m.StillskeletonPageModule
      ),
  },
  {
    path: "liveskeleton",
    loadChildren: () =>
      import("./liveskeleton/liveskeleton.module").then(
        (m) => m.liveskeletonPageModule
      ),
  },
  {
    path: "interactivelivenessdetection",
    loadChildren: () =>
      import("./interactivelivenessdetection/interactivelivenessdetection.module").then(
        (m) => m.InteractivelivenessdetectionPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
