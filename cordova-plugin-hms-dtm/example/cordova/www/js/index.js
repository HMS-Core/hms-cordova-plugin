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

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

        HMSDtm.onCustomTag((result)=>{
            console.log(JSON.stringify(result));
            if(result.price==100){
                const newPrice = result.price - result.price/result.discount
                HMSDtm.setCustomVariable({"varName":"PantsPrice","value":newPrice})
            }
        })
        console.log('Received Event: ' + id);
    }

};

app.initialize();

document.getElementById('sendCustomEvent').onclick = async function onEvent() {
    const eventName = "Platform"
    const bundleObject = {
        "platformName":"Cordova"
    }
    console.log(await HMSDtm.onEvent(eventName, bundleObject));
}

document.getElementById('CustomTag').onclick = async function onEvent() {
    const eventName = "PurchaseShoes"
    const bundleObject = {}
    console.log(await HMSDtm.onEvent(eventName, bundleObject));
}

document.getElementById('setCustomVariableValue').onclick = async function onEvent() {
    const eventName = "SetPantsPrice"
    const bundleObject = {}
    console.log(await HMSDtm.onEvent(eventName, bundleObject));
    
}

document.getElementById('reportEventwithCustomVariable').onclick = async function onEvent() {
    const eventName = "PurchasePants"
    const bundleObject = {}
    console.log(await HMSDtm.onEvent(eventName, bundleObject));
    
}