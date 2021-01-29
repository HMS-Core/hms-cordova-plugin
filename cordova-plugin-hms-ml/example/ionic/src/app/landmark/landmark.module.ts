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

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { IonicModule } from "@ionic/angular";
import { HMSImageServiceProvider } from "@hmscore/ionic-native-hms-ml/ngx";
import { LandmarkPageRoutingModule } from "./landmark-routing.module";
import { LandmarkPage } from "./landmark.page";

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, LandmarkPageRoutingModule],
    declarations: [LandmarkPage],
    providers: [FileChooser, HMSImageServiceProvider]
})
export class LandmarkPageModule {}
