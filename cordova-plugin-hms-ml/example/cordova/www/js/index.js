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
                apiKey: "<API_KEY>"
            };
            HMSMLKit.serviceInitializer(config);
        } catch (ex) {
            console.log(JSON.stringify(ex));
        }

        document.getElementById("requestPermissions").addEventListener("click", requestPermissions);
        document.getElementById("checkPermissions").addEventListener("click", checkPermissions);
        document.getElementById("documentSkewCorrectionHref").addEventListener("click", function () { window.location = "documentskewcorrection.html" });
        document.getElementById("stillHandHref").addEventListener("click", function () { window.location = "stillhandkey.html" });
        document.getElementById("customModelHref").addEventListener("click", function () { window.location = "custommodel.html" });
        document.getElementById("stillSkeletonHref").addEventListener("click", function () { window.location = "stillskeleton.html" });
        document.getElementById("ttsHref").addEventListener("click", function () { window.location = "tts.html" });
        document.getElementById("formRecogHref").addEventListener("click", function () { window.location = "formrecog.html" });
        document.getElementById("bcrHref").addEventListener("click", function () { window.location = "bcr.html" });
        document.getElementById("textHref").addEventListener("click", function () { window.location = "text.html" });
        document.getElementById("docHref").addEventListener("click", function () { window.location = "doc.html" });
        document.getElementById("translateHref").addEventListener("click", function () { window.location = "translate.html" });
        document.getElementById("langdetectHref").addEventListener("click", function () { window.location = "langdetect.html" });
        document.getElementById("aftHref").addEventListener("click", function () { window.location = "aft.html" });
        document.getElementById("soundHref").addEventListener("click", function () { window.location = "sounddect.html" });
        document.getElementById("imgsegHref").addEventListener("click", function () { window.location = "imgseg.html" });
        document.getElementById("faceHref").addEventListener("click", function () { window.location = "face.html" });
        document.getElementById("livefaceHref").addEventListener("click", function () { window.location = "live.html" });
        document.getElementById("objectHref").addEventListener("click", function () { window.location = "object.html" });
        document.getElementById("sceneHref").addEventListener("click", function () { window.location = "stillscene.html" });
        document.getElementById("classifyHref").addEventListener("click", function () { window.location = "classify.html" });
        document.getElementById("productHref").addEventListener("click", function () { window.location = "product.html" });
        document.getElementById("landmarkHref").addEventListener("click", function () { window.location = "landmark.html" });
        document.getElementById("generalCardHref").addEventListener("click", function () { window.location = "gcr.html" });
        document.getElementById("asrHref").addEventListener("click", function () { window.location = "asr.html" });
        document.getElementById("rttAnalyserHref").addEventListener("click", function () { window.location = "rttAnalyser.html" });
        document.getElementById("textEmbeddingHref").addEventListener("click", function () { window.location = "textembedding.html" });
        document.getElementById("imageSuperResolutionHref").addEventListener("click", function () { window.location = "imagesuperresolution.html" });
        document.getElementById("textImageSuperResolutionHref").addEventListener("click", function () { window.location = "textimagesuperresolution.html" });
        document.getElementById("liveLivenessDetectionHref").addEventListener("click", function () { window.location = "livenessdetection.html" });

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

async function requestPermissions() {
    try {
        await HMSMLKit.requestPermissions({
            permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
        });
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}
async function checkPermissions() {
    var permissionListReq = {
        permissionList: ["camera", "readExternalStorage", "audio", "writeExternalStorage"],
    }
    try {
        const result = await HMSMLKit.hasPermissions(permissionListReq);
        alert("Camera Permission: " + result.camera.hasPermission + "\nRead External Storage Permission: " +
            result.readExternalStorage.hasPermission + "\nWrite External Storage Permission" + result.writeExternalStorage.hasPermission +
            "\nAudio Permission" + result.audio.hasPermission);
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}

app.initialize();