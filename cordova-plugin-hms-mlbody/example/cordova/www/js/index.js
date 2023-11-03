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
            HMSMLBodyPlugin.serviceInitializer(config);
        } catch (ex) {
            console.log(JSON.stringify(ex));
        }

        document.getElementById("stillHandHref").addEventListener("click", function () { window.location = "stillhandkey.html" });
        document.getElementById("stillSkeletonHref").addEventListener("click", function () { window.location = "stillskeleton.html" });
        document.getElementById("stillGestureHref").addEventListener("click", function () { window.location = "stillgesture.html" });
        document.getElementById("stillFaceVerificationHref").addEventListener("click", function () { window.location = "stillfaceVerification.html" });
        document.getElementById("faceHref").addEventListener("click", function () { window.location = "face.html" });
        document.getElementById("livefaceHref").addEventListener("click", function () { window.location = "live.html" });
        document.getElementById("liveLivenessDetectionHref").addEventListener("click", function () { window.location = "livenessdetection.html" });
        document.getElementById("interactiveLivenessDetectionHref").addEventListener("click", function () { window.location = "interactiveLiveness.html" });
l
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