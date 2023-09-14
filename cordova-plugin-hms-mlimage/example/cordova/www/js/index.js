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
var $imageResult = null;
var selectedImage;
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        try {
            var config = {
                apiKey: "<your_apiKey>",
                accessToken: "<your_accessToken>",
            };
            HMSMLImagePlugin.serviceInitializer(config);
        } catch (ex) {
            console.log(JSON.stringify(ex));
        }

        document.getElementById("classifyHref").addEventListener("click", function () { window.location = "classify.html" });
        document.getElementById("customModelHref").addEventListener("click", function () { window.location = "custommodel.html" });
        document.getElementById("documentSkewCorrectionHref").addEventListener("click", function () { window.location = "documentskewcorrection.html" });
        document.getElementById("imageSuperResolutionHref").addEventListener("click", function () { window.location = "imagesuperresolution.html" });
        document.getElementById("imgsegHref").addEventListener("click", function () { window.location = "imgseg.html" });
        document.getElementById("landmarkHref").addEventListener("click", function () { window.location = "landmark.html" });
        document.getElementById("liveHref").addEventListener("click", function () { window.location = "live.html" })
        document.getElementById("objectHref").addEventListener("click", function () { window.location = "object.html" });
        document.getElementById("productHref").addEventListener("click", function () { window.location = "product.html" });
        document.getElementById("sceneHref").addEventListener("click", function () { window.location = "stillscene.html" });
        document.getElementById("textImageSuperResolutionHref").addEventListener("click", function () { window.location = "textimagesuperresolution.html" });
        document.getElementById("compositeHref").addEventListener("click", function () { window.location = "composite.html" });
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    }
};

app.initialize();