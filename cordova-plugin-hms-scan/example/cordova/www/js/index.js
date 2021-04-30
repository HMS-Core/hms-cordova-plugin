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

var imageResult = "";

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        document.getElementById("hasPermission").addEventListener("click", hasPermission);
        document.getElementById("requestPermission").addEventListener("click", requestPermission);
        document.getElementById("requestPermissions").addEventListener("click", requestPermissions);

        document.getElementById("imagePicker").addEventListener("click", getFile);
        document.getElementById("defaultViewMode").addEventListener("click", defaultViewMode);
        document.getElementById("analyzInAsyn").addEventListener("click", analyzInAsyn);
        document.getElementById("analyseFrame").addEventListener("click", analyseFrame);
        document.getElementById("decodeWithBitmap").addEventListener("click", decodeWithBitmap);
        document.getElementById("decodeWithBitmap").addEventListener("click", decodeWithBitmap);
        document.getElementById("detectForHmsDector").addEventListener("click", detectForHmsDector);
        document.getElementById("buildBitmap").addEventListener("click", buildBitmap);
        
        document.getElementById("customViewPage").addEventListener("click", function () { window.location = "customView.html" });
        document.getElementById("multiProcessorPage").addEventListener("click", function () { window.location = "multiprocessor.html" });
        document.getElementById("bitmapMode").addEventListener("click", function () { window.location = "bitmapMode.html" });
    },
};

async function hasPermission() {
    const permission = HMSScan.HMSPermission.CAMERA;
    HMSScan.hasPermission(permission)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)))
}

async function requestPermission() {
    const permission = HMSScan.HMSPermission.CAMERA;
    HMSScan.requestPermission(permission)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}

async function requestPermissions() {
    HMSScan.requestPermissions([HMSScan.HMSPermission.CAMERA, HMSScan.HMSPermission.READ_EXTERNAL_STORAGE])
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}

function getFile() {
    fileChooser.open(function (uri) {
        imageResult = uri;
    }, function (e) {
        alert(e);
    });
}

async function defaultViewMode() {
    const scanTypes = [HMSScan.ScanTypes.ALL_SCAN_TYPE];
    HMSScan.defaultViewMode(scanTypes)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}

async function analyseFrame() {
    const filePath = imageResult;
    scanTypes = [HMSScan.ScanTypes.ALL_SCAN_TYPE];
    HMSScan.analyseFrame(filePath, scanTypes)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}

async function analyzInAsyn() {
    const filePath = imageResult;
    const scanTypes = [HMSScan.ScanTypes.ALL_SCAN_TYPE];
    HMSScan.analyzInAsyn(filePath, scanTypes)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}

async function decodeWithBitmap() {
    const filePath = imageResult;
    const scanTypes = [HMSScan.ScanTypes.ALL_SCAN_TYPE];
    HMSScan.decodeWithBitmap(filePath, scanTypes)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}

async function buildBitmap() {
    const buildBitmapRequest = {
        inputContent: "Huawei",
        barcodeFormat: HMSScan.ScanTypes.QRCODE_SCAN_TYPE,
        barcodeHeight: 400,
        barcodeWidth: 400,
        hmsBuildBitmapOptions: {
            bitmapMargin: 1,
            bitmapColor: HMSScan.Colors.BLACK,
            bitmapBackgroundColor: HMSScan.Colors.WHITE,
            qrErrorCorrectionLevel: HMSScan.ErrorCorrectionLevel.M,
            qrLogoBitmap: imageResult
        }
    }
    HMSScan.buildBitmap(buildBitmapRequest)
        .then((res) => document.getElementById("barcodeImg").src = "data:image/jpeg;base64," + res)
        .catch((err) => alert(JSON.stringify(err)));
}

async function detectForHmsDector() {
    const filePath = imageResult;
    const scanTypes = [HMSScan.ScanTypes.ALL_SCAN_TYPE];
    HMSScan.detectForHmsDector(filePath, scanTypes)
        .then((res) => alert(JSON.stringify(res)))
        .catch((err) => alert(JSON.stringify(err)));
}
app.initialize();
