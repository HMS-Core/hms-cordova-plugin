/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

var imageData = "";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("selectImage").addEventListener("click", getFile);
    document.getElementById("decodeWithImage").addEventListener("click", function() {decode(true)});
    document.getElementById("decodeWithCamera").addEventListener("click", function() {decode(false)});
    document.getElementById("stopViewService").addEventListener("click", stopViewService);
}, false);

function getFile() {
    fileChooser.open(function (uri) {
        imageData = uri;
    }, function (e) {
        alert(e);
    });
}

async function decode(photoMode){

    const scanFrameOptions = {
        scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
        multiMode: true,
        parseResult: true,
        photoMode: photoMode,
    }

    if(photoMode){
        const filePath = imageData;
            HMSScan.decode(scanFrameOptions, filePath)
                .then((res) => {alert(JSON.stringify(res))})
                .catch((err) => alert(JSON.stringify(err)));
    }
    else{
        const decodeModeRequest = {
            scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
            scanFrameSize: 200,
            enableScanAreaBox: true,
            enableDrawScanResult: true,
            viewAttributes: {
                    textColor: HMSScan.Colors.WHITE,
                    textSize: 30,
                    strokeWidth: 10,
                    rectColor: HMSScan.Colors.BLACK,
                    rectStyle: HMSScan.RectStyle.STROKE,
            }
        }
        HMSScan.decodeOn("scanResultClickListener", (value) => {
            alert(JSON.stringify(value));
        });
        await HMSScan.decode(scanFrameOptions, "", "scene", decodeModeRequest);
    }
}

async function stopViewService() {
    await HMSScan.decodeStopViewService();
};