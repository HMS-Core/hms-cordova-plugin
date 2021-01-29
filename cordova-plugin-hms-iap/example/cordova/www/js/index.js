/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

document.addEventListener('deviceready', () => checkEnvironmentReady(), false);

const DEVELOPERPAYLOAD = "HMSCoreDeveloper"
const DEVELOPERCHALLENGE = "HMSCoreDeveloperChallenge"
const PRICETYPE = {
    CONSUMABLE : 0,
    NONCONSUMABLE : 1,
    SUBSCRIPTION : 2,
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

const getProduct = (productId, productType)=>{
    const pList = PRODUCTS[productType].products.filter(p=>p.id===productId)
    return pList.length>0 ? pList[0] : {id:'id', name:'name'}
}

function defaultErrorHandler(message) {
    console.log(message);
    alert("Error: " + JSON.stringify(message, null, 4));
}

const createAvailableProductOnList = (product, productType)=>{
    var listNode = document.getElementById(`list-${productType}-available`);
    var productEl = createElementFromHTML(
        `<li id='${productType}-${product.productId}-available'>
            <div class="title">${product.productName}</div>
            <div class="content">${product.productDesc}</div>
            <div class="price">${product.price}</div>
        </li>`
    );
    productEl.onclick = () => {
        if (confirm(`Do you want to purchase ${product.productName} for ${product.price}?`)) {
            createPurchaseIntent(product, productType);
        }
    };
    listNode.appendChild(productEl)
}

const createPurchasedProductOnList = (productId, purchaseData, productType)=>{
    const product = getProduct(productId, productType)
    var listNode = document.getElementById(`list-${productType}-purchased`);
    var productEl = createElementFromHTML(
        `<li id='${productType}-${product.id}-purchased'>
            <div class="title">${product.name}</div>
        </li>`
    );
    productEl.onclick = () => {
        if (productType === 'consumable' && confirm(`Do you want to consume ${product.name}?`)) {
            consumeOwnedPurchase(product.id, purchaseData, productType);
        }
    };
    listNode.appendChild(productEl)
}

const createPurchasedRecordProductOnList = (productId, productType)=>{
    const product = getProduct(productId, productType)
    var listNode = document.getElementById(`list-${productType}-purchased-record`);
    var productEl = createElementFromHTML(
        `<li id='${productType}-${product.id}-purchased-record'>
            <div class="title">${product.name}</div>
        </li>`
    );
    productEl.onclick = ()=>{
        console.log(product)
    }
    listNode.appendChild(productEl)
}

const createPurchaseIntent = async (product, productType) => {
    try {
        let message = await HMSInAppPurchases.createPurchaseIntent({
            priceType: product.priceType,
            productId: product.productId,
            developerPayload: DEVELOPERPAYLOAD
        });

        console.log(message);

        if (message.returnCode === 0) {// if successful
            createPurchasedProductOnList(product.productId, message.inAppPurchaseData, productType)
        } else {
            alert(JSON.stringify(message, null, 4))
            console.log('Purchase was not successful.')
        }
    } catch (err) {
        defaultErrorHandler(err);
    }
}

const consumeOwnedPurchase = async (productId, purchaseData, productType) => {
    try {
        let message = await HMSInAppPurchases.consumeOwnedPurchase({
            inAppPurchaseData: purchaseData,
            developerChallenge: DEVELOPERCHALLENGE,
        });

        if (message.returnCode === 0) {// if successful
            document.getElementById(`${productType}-${productId}-purchased`).remove()
            createPurchasedRecordProductOnList(productId, productType)
        } else {
            alert(JSON.stringify(message, null, 4))
            console.log('Consume was not successful.')
        }
    } catch (err) {
        defaultErrorHandler(err);
    }
}

const obtainProductInfoFromType = async (pType) => {
    try {
        let message = await HMSInAppPurchases.obtainProductInfo({
            priceType: PRODUCTS[pType].type,
            productList: PRODUCTS[pType].products.map(p=>p.id)
        });
        console.log(message);
        message.productInfoList.map(p=>createAvailableProductOnList(p, pType))
    } catch (err) {
        defaultErrorHandler(err);
    }
}

const obtainOwnedPurchasesFromType = async (pType)=> {
    try {
        let message = await HMSInAppPurchases.obtainOwnedPurchases({
            priceType: PRODUCTS[pType].type
        });
        console.log(message);
        message.itemList.map((pId,ind)=>createPurchasedProductOnList(pId, message.inAppPurchaseDataList[ind], pType))
    } catch (err) {
        defaultErrorHandler(err);
    }
}

const obtainOwnedPurchaseRecordFromType = async (pType) => {
    try {
        let message = await HMSInAppPurchases.obtainOwnedPurchaseRecord({
            priceType: PRODUCTS[pType].type
        });
        console.log(message);
        message.itemList.map(pId=>createPurchasedRecordProductOnList(pId, pType))
    } catch (err) {
        defaultErrorHandler(err);
    }
}


const getProductsInformation = () =>{
    Object.keys(PRODUCTS).map(async pType => {
        await obtainProductInfoFromType(pType)
        await obtainOwnedPurchasesFromType(pType)
        if (pType ==='consumable' || pType ==='subscription') {
            await obtainOwnedPurchaseRecordFromType(pType)
        }
    })
}


const checkEnvironmentReady = async () => {
    try {
        let message = await HMSInAppPurchases.isEnvReady();
        console.log(message);
        let sandbox = await HMSInAppPurchases.isSandboxActivated();
        console.log(sandbox);
        getProductsInformation()
        alert("Success(HMSInAppPurchases.isEnvReady): " + JSON.stringify(message, null, 4));
    } catch (errMsg) {
        console.log(errMsg);
        alert("Error(HMSInAppPurchases.isEnvReady): " +errMsg+ + JSON.stringify(errMsg, null, 4));
        checkEnvironmentReady()
    }
}

//
// Utility
//

function createElementFromHTML(str) {
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    return div.firstChild;
}
