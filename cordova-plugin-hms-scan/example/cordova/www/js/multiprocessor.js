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
document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("multiProcessorSynMode").addEventListener("click", () => multiProcessorSynMode());
        document.getElementById("multiProcessorAsynMode").addEventListener("click", () => multiProcessorAsynMode());
        document.getElementById("stopViewService").addEventListener("click", () => stopViewService());
}, false);

async function multiProcessorSynMode() {
        const multiProcessorSynModeRequest = {
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

        MultiProcessor.on("scanResultClickListener", (value) => {
                console.log(JSON.stringify(value));
        });
        await MultiProcessor.multiProcessorSynMode("scene", multiProcessorSynModeRequest);
};
async function multiProcessorAsynMode() {
        const multiProcessorAsynModeRequest = {
                scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
                scanFrameSize: 200,
                enableScanAreaBox: true,
                enableDrawScanResult: true,
                viewAttributes: {
                        textColor: HMSScan.Colors.WHITE,
                        textSize: 20,
                        strokeWidth: 10,
                        rectColor: HMSScan.Colors.BLACK,
                        rectStyle: HMSScan.RectStyle.FILL_AND_STROKE,
                }
        }

        MultiProcessor.on("scanResultClickListener", (value) => {
                console.log(JSON.stringify(value));
        });
        await MultiProcessor.multiProcessorAsynMode("scene", multiProcessorAsynModeRequest);
};
async function stopViewService() {
        await MultiProcessor.stopViewService();
};