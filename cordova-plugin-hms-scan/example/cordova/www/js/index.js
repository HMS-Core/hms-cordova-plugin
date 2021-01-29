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

var imageResult = "";

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
        this.receivedEvent('deviceready');
        document.getElementById("requestPermissions").addEventListener("click", requestPermissions);
        document.getElementById("checkPermissions").addEventListener("click", checkPermissions);
        document.getElementById("imagePicker").addEventListener("click", getFile);
        document.getElementById("defaultViewMode").addEventListener("click", defaultViewMode);
        document.getElementById("multiProcessorSynMode").addEventListener("click", multiProcessorSynMode);
        document.getElementById("multiProcessorAsynMode").addEventListener("click", multiProcessorAsynMode);
        document.getElementById("bitmapMode").addEventListener("click", bitmapMode);
        document.getElementById("generateBarcode").addEventListener("click", generateBarcode);
        document.getElementById("customViewMode").addEventListener("click", customViewMode);
        document.getElementById("asynModeWithImage").addEventListener("click", asynModeWithImage);
        document.getElementById("synModeWithImage").addEventListener("click", synModeWithImage);
        document.getElementById("decodeWithBitmap").addEventListener("click", decodeWithBitmap);
        document.getElementById("generateBarcode").addEventListener("click", generateBarcode);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

async function requestPermissions() {
    try {
        await HMSScan.requestPermissions({
            permissionList: ["CAMERA", "WRITE_EXTERNAL_STORAGE"],
        });
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function checkPermissions() {
    var permissionListInput = {
        permissionList: ["CAMERA", "WRITE_EXTERNAL_STORAGE"],
    }
    try {
        const result = await HMSScan.checkPermissions(permissionListInput);
        alert("Camera Permission: " + result.CAMERA.hasPermission + "\nWrite Ext Strg Permission: " + result.WRITE_EXTERNAL_STORAGE.hasPermission);
    } catch (ex) {
        alert(JSON.stringify(ex))
    }
}

function getFile() {
    fileChooser.open(function (uri) {
        imageResult = uri;
    }, function (e) {
        alert(e);
    });
}

async function bitmapMode() {
    try {
        const bitmapModeInput = {
            scanAreaWidth: 240,
            scanAreaHeight: 240,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
            enableScanArea: true,
            scanTips: "Place the code within the frame",
        };
        let result = await HMSScan.bitmapMode(bitmapModeInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function defaultViewMode() {
    try {
        const defaultViewModeInput = {
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.defaultViewMode(defaultViewModeInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function customViewMode() {
    try {
        const customViewModeInput = {
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
            scanAreaWidth: 240,
            scanAreaHeight: 240,
            enableFlushButton: true,
            enablePictureButton: false,
            scanAreaText: "Place the code within the frame",
        };
        let result = await HMSScan.customViewMode(customViewModeInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

function multiProcessorSynMode() {
    const multiProcessorSynModeInput = {
        scanAreaWidth: 240,
        scanAreaHeight: 240,
        enablePhotoButton: true,
        enableScanArea: true,
        textColor: HMSScan.Colors.WHITE,
        textSize: 30,
        strokeWidth: 10,
        rectColor: HMSScan.Colors.BLACK,
        scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
        rectStyle: 0,
    };
    HMSScan.multiProcessorSynMode(
        multiProcessorSynModeInput,
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) {
            console.log(JSON.stringify(err));
        }
    );
}

function multiProcessorAsynMode() {
    const multiProcessorAsynModeInput = {
        scanAreaWidth: 240,
        scanAreaHeight: 240,
        enablePhotoButton: true,
        enableScanArea: true,
        textColor: HMSScan.Colors.WHITE,
        textSize: 30,
        strokeWidth: 10,
        rectColor: HMSScan.Colors.BLACK,
        scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
        rectStyle: 0,
    };
    HMSScan.multiProcessorAsynMode(
        multiProcessorAsynModeInput,
        function (res) {
            console.log(JSON.stringify(res));
        }, function (err) {
            console.log(JSON.stringify(err));
        }
    );
}

async function synModeWithImage() {
    try {
        const synModeWithImageInput = {
            filePath: imageResult,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.synModeWithImage(synModeWithImageInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function asynModeWithImage() {
    try {
        const asynModeWithImageInput = {
            filePath: imageResult,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.asynModeWithImage(asynModeWithImageInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function decodeWithBitmap() {
    try {
        const decodeWithBitmapInput = {
            filePath: imageResult,
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE]
        };
        let result = await HMSScan.decodeWithBitmap(decodeWithBitmapInput);
        alert(JSON.stringify(result));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function generateBarcode() {
    try {
        const generateBarcodeInput = {
            inputContent: "Huawei",
            barcodeFormat: HMSScan.ScanTypes.QRCODE_SCAN_TYPE,
            barcodeHeight: 800,
            barcodeWidth: 800,
            bitmapBackgroundColor: HMSScan.Colors.WHITE,
            bitmapColor: HMSScan.Colors.BLACK,
            bitmapMargin: 1,
        };
        let result = await HMSScan.generateBarcode(generateBarcodeInput);
        document.getElementById("barcodeImg").src = "data:image/jpeg;base64," + result;
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

app.initialize();
