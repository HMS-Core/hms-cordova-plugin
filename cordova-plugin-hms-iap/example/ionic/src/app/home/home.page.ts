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
import { HMSInAppPurchases } from '@hmscore/ionic-native-hms-iap/ngx';

const DEVELOPERPAYLOAD = "HMSCoreDeveloper"
const DEVELOPERCHALLENGE = "HMSCoreDeveloperChallenge"
const PRICETYPE = {
  CONSUMABLE: 0,
  NONCONSUMABLE: 1,
  SUBSCRIPTION: 2,
}

const PRODUCTS = {
  consumable: {
    type: PRICETYPE.CONSUMABLE,
    products: [{
      id: 'test',
      name: 'Consumable Item'
    }]
  },
  nonconsumable: {
    type: PRICETYPE.NONCONSUMABLE,
    products: [{
      id: 'non_consumable_item_1',
      name: 'Non Consumable Item'
    },]
  },
  subscription: {
    type: PRICETYPE.SUBSCRIPTION,
    products: [{
      id: 'subscription_item_1',
      name: 'Subscription Item'
    },]
  },
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products = {
    consumable: [],
    nonconsumable: [],
    subscription: [],
    purchased_consumable: [],
    purchased_nonconsumable: [],
    purchased_subscription: [],
    purchased_record_consumable: [],
    purchased_record_subscription: [],
  };

  constructor(private iap: HMSInAppPurchases) { }

  ngOnInit() {
    this.iap.isEnvReady().then(environment => {
      console.log(environment);
    }).catch(err => {
      console.log(err);
    })
    this.iap.isSandboxActivated().then(sandbox => {
      console.log(sandbox);
      this.getProductsInformation();
    }).catch(err => {
      console.log(err);
    })
  }

  getProductsInformation = () => {
    Object.keys(PRODUCTS).map(async pType => {
      await this.obtainProductInfoFromType(pType)
      await this.obtainOwnedPurchasesFromType(pType)
      if (pType === 'consumable' || pType === 'subscription') {
        await this.obtainOwnedPurchaseRecordFromType(pType)
      }
    })
  }

  obtainProductInfoFromType = async (pType) => {
    try {
      let message = await this.iap.obtainProductInfo({
        priceType: PRODUCTS[pType].type,
        productList: PRODUCTS[pType].products.map(p => p.id)
      });
      console.log(message);
      message.productInfoList.map(p => this.createAvailableProductOnList(p, pType))
    } catch (err) {
      console.log(err);
    }
  }

  createAvailableProductOnList = (product, productType) => {
    switch (productType) {
      case "consumable":
        this.products.consumable.push(product);
        break;
      case "nonconsumable":
        this.products.nonconsumable.push(product);
        break;
      case "subscription":
        this.products.subscription.push(product);
        break;
      default:
        break;
    }
  }

  createPurchaseIntent = async (product, productType) => {
    try {
      let message = await this.iap.createPurchaseIntent({
        priceType: product.priceType,
        productId: product.productId,
        reservedInfor: null,
        developerPayload: DEVELOPERPAYLOAD
      });

      console.log(message);
      alert(message);
      alert(JSON.stringify(message));

      if (message.returnCode === 0) {// if successful
        this.products = {
          consumable: [],
          nonconsumable: [],
          subscription: [],
          purchased_consumable: [],
          purchased_nonconsumable: [],
          purchased_subscription: [],
          purchased_record_consumable: [],
          purchased_record_subscription: [],
        };
        this.ngOnInit();
      } else {
        alert('Purchase was not successful.')
      }
    } catch (err) {
      console.log(err);
    }
  }

  obtainOwnedPurchasesFromType = async (pType) => {
    try {
      let message = await this.iap.obtainOwnedPurchases({
        priceType: PRODUCTS[pType].type
      });
      console.log(message);
      message.itemList.map((pId, ind) => this.createPurchasedProductOnList(pId, message.inAppPurchaseDataList[ind], pType))
    } catch (err) {
      console.log(err);
    }
  }

  createPurchasedProductOnList = (productId, purchaseData, productType) => {
    let product = this.getProduct(productId, productType);
    product.purchaseData = purchaseData;
    switch (productType) {
      case "consumable":
        this.products.purchased_consumable.push(product);
        break;
      case "nonconsumable":
        this.products.purchased_nonconsumable.push(product);
        break;
      case "subscription":
        this.products.purchased_subscription.push(product);
        break;
      default:
        break;
    }
  }

  consumeOwnedPurchase = async (productId, purchaseData, productType) => {
    try {
      let message = await this.iap.consumeOwnedPurchase({
        inAppPurchaseData: purchaseData,
        developerChallenge: DEVELOPERCHALLENGE,
      });

      if (message.returnCode === 0) {// if successful
        this.products = {
          consumable: [],
          nonconsumable: [],
          subscription: [],
          purchased_consumable: [],
          purchased_nonconsumable: [],
          purchased_subscription: [],
          purchased_record_consumable: [],
          purchased_record_subscription: [],
        };
        this.ngOnInit();
      } else {
        alert(JSON.stringify(message, null, 4))
        console.log('Consume was not successful.')
      }
    } catch (err) {
      console.log(err);
    }
  }

  obtainOwnedPurchaseRecordFromType = async (pType) => {
    try {
      let message = await this.iap.obtainOwnedPurchaseRecord({
        priceType: PRODUCTS[pType].type
      });
      console.log(message);
      message.itemList.map(pId => this.createPurchasedRecordProductOnList(pId, pType))
    } catch (err) {
      console.log(err);
    }
  }

  createPurchasedRecordProductOnList = (productId, productType) => {
    const product = this.getProduct(productId, productType)
    switch (productType) {
      case "consumable":
        this.products.purchased_record_consumable.push(product);
        break;
      case "subscription":
        this.products.purchased_record_subscription.push(product);
        break;
      default:
        break;
    }
  }

  editSubscription = (id) => {
    this.iap.startIapActivity({ productId: id }).then(() => {
      console.log('done');
    }).catch(error => {
      console.log(error);
    })
  }

  manageSubscriptions = () => {
    this.iap.startIapActivity({}).then(() => {
      console.log('done');
    }).catch(error => {
      console.log(error);
    })
  }

  getProduct = (productId, productType) => {
    const pList = PRODUCTS[productType].products.filter(p => p.id === productId)
    return pList.length > 0 ? pList[0] : { id: 'id', name: 'name' }
  }
}
