/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitmapmodePageRoutingModule } from './bitmapmode-routing.module';
import { MultiProcessor } from '@ionic-native/hms-scan/ngx'
import { BitmapmodePage } from './bitmapmode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitmapmodePageRoutingModule
  ],
  declarations: [BitmapmodePage],
  providers:[MultiProcessor]
})
export class BitmapmodePageModule {}
