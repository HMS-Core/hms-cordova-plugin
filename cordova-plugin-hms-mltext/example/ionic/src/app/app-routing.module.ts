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
    path: "icrVn",
    loadChildren: () =>
      import("./icrVn/icrVn.module").then((m) => m.icrVnPageModule),
  },

  {
    path: "icrCn",
    loadChildren: () =>
      import("./icrCn/icrCn.module").then((m) => m.icrCnPageModule),
  },
  {
    path: "bcr",
    loadChildren: () => import("./bcr/bcr.module").then((m) => m.BcrPageModule),
  },
  {
    path: "text",
    loadChildren: () =>
      import("./text/text.module").then((m) => m.TextPageModule),
  },
  {
    path: "document",
    loadChildren: () =>
      import("./document/document.module").then((m) => m.DocumentPageModule),
  },
  {
    path: "generalcard",
    loadChildren: () =>
      import("./generalcard/generalcard.module").then(
        (m) => m.GeneralcardPageModule
      ),
  },
  {
    path: "formrecognition",
    loadChildren: () =>
      import("./formrecognition/formrecognition.module").then(
        (m) => m.FormrecognitionPageModule
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
