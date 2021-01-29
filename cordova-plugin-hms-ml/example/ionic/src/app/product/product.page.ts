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
import { FileChooser } from '@ionic-native/file-chooser/ngx';
declare var HMSImageServiceProvider;
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage  {
  toogleName: string = "";
  toggle: boolean = false;
  filePath: string = "";
  constructor(private fileChooser: FileChooser) { 
    this.toogleName = "Device";
  }

  public async changeToogle() {
    if (this.toggle == false) {
      this.toogleName = "Plugin";
    } else {
      this.toogleName = "Device";
    }
  }
  public async getFile() {
    this.fileChooser.open()
      .then(uri => this.filePath = uri)
      .catch(e => console.log(e));
  }

  public async productStart() {
    var productReq = {
      detectType: 0,
      filePath: this.filePath
    };
    var pluginProductReq = {
      detectType: 1,
      filePath: this.filePath
    };
    try {
      if (this.toggle == false) {
        var result = await  HMSImageServiceProvider.productVisionAnalyser(productReq);
      } else {
         result = await  HMSImageServiceProvider.productVisionAnalyser(pluginProductReq);
      }
      alert(JSON.stringify(result));
    } catch (ex) {
      alert(ex)
    }
  }
  

}
