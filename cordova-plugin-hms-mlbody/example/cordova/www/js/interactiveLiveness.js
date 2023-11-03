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

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("interactiveLivenessDetection").addEventListener("click", () => interactiveLivenessDetection());
    document.getElementById("customInteractiveLivenessDetection").addEventListener("click", () => customInteractiveLivenessDetection());
}, false);

const screenWidth = screen.width;
const screenHeight = screen.height;

async function interactiveLivenessDetection() {
    try {
        var interactiveLivenessDetectionReq = {
            options: HMSMLBodyPlugin.Options.DETECT_MASK,
            detectionTimeOut: 10000
        };
        let result = await HMSMLBody.interactiveLivenessAnalyser(interactiveLivenessDetectionReq);
        alert("Success: " + JSON.stringify(result));
    } catch (Ex) {
        alert("Error: " +  JSON.stringify(Ex));
    }
}

async function customInteractiveLivenessDetection() {
    try {
        var statusCodes = {
           1001: "The face orientation is inconsistent with that of the phone.",
           1002: "No face is detected.",
           1003: "Multiple faces are detected.",
           1004: "The face deviates from the center of the face frame.",
           1005: "The face is too large.",
           1006: "The face is too small.",
           1007: "The face is blocked by the sunglasses.",
           1008: "The face is blocked by the mask.",
           1009: "The detected action is not the required one.",
           1014: "The continuity detection fails.",
           1018: "The light is dark.",
           1019: "The image is blurry.",
           1020: "The face is backlit.",
           1021: "The light is bright.",
           2000: "In progress",
           2002: "The face does not belong to a real person. ",
           2003: "Verification is performed: and the detected action is correct.",
           2004: "Verification succeeded.",
           2007: "The position of the face frame is not set before the algorithm is called.",
           5020: "The previous detection ended when it was not complete."
        }

        var interactiveLivenessDetectionReq = {
            detectionTimeOut: 10000,
            cameraFrame: {
                top: 0,
                bottom: screenHeight * 1.87,
                right: screenWidth * 3,
                left: 0
            },
            faceFrame: {
                top: 122,
                bottom:518,
                right: 396,
                left: 14
            },
            action: {
              actionArray: {
                 2: "Open mouth",
                 3: "Wink"
              },
              num: 1,
              isRandom:true,
            },
            textOptions: {
                textColor: HMSMLBody.Colors.RED,
                textSize: 15.0,
                autoSizeText: true,
                minTextSize: 15,
                maxTextSize: 20,
                granularity: 2,
            },
            textMargin: 1300,
            showStatusCode: true,
            statusCodes: statusCodes
        };

        let result = await HMSMLBody.customInteractiveLivenessAnalyser(interactiveLivenessDetectionReq);
        alert("Success: " + JSON.stringify(result));
    } catch (Ex) {
        alert("Error: " + JSON.stringify(Ex));
    }
}