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

import { asyncExec } from "./util";
import * as MLKit from "./interfaces";
export * from './interfaces'

export async function stillFaceAnalyser(
    faceReq: MLKit.faceReq
): Promise<MLKit.MLFace> {
    return asyncExec("HMSMLBody", "ACTION_STILL_FACE_ANALYSER", [
        faceReq,
    ]);
}

export async function stillFaceVerificationAnalyser(
    faceVerificationReq: MLKit.faceVerificationReq
): Promise<MLKit.MLFaceVerificationResult> {
    return asyncExec("HMSMLBody", "ACTION_STILL_FACE_VERIFICATION", [
        faceVerificationReq,
    ]);
}

export async function setFaceDetected(
    maxFaceVerificationReq: MLKit.maxFaceVerificationReq
): Promise<MLKit.MLFaceVerificationResult> {
    return asyncExec("HMSMLBody", "ACTION_STILL_FACE_VERIFICATION_FACEDETECTED",[
        maxFaceVerificationReq
    ]);
}
export function getFaceVerificationAnalyserSetting(): Promise<any> {
    return asyncExec("HMSMLBody","ACTION_STILL_FACE_VERIFICATION_ANALYSE_SETTING", [

    ]);
}

export function stopStillFaceVerificationAnalyser(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STOP_STILL_FACE_VERIFICATION", [

    ]);
}
export async function stillFaceAnalyserInfo(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_FACE_INFO", [

    ]);
}

export function stopStillFaceAnalyser(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STOP_STILL_FACE_ANALYSER",[

    ]);
}

export async function stillSkeletonAnalyser(
    stillSkeletonReq: MLKit.stillSkeletonReq | MLKit.stillSkeletonSimilarityReq
): Promise<MLKit.MLSkeleton> {
    return asyncExec("HMSMLBody", "ACTION_STILL_SKELETON_ANALYSE", [
        stillSkeletonReq,
    ]);
}
export async function liveLivenessAnalyser(
    livenessDetectionReq: MLKit.livenessDetectionReq
): Promise<MLKit.MLLivenessCaptureResult> {
    return asyncExec("HMSMLBody", "ACTION_LIVENESS_DETECTION", [
        livenessDetectionReq,
    ]);
}
export async function stillGestureAnalyser(
    stillGestureReq: MLKit.stillGestureReq
): Promise<MLKit.MLGesture> {
    return asyncExec("HMSMLBody", "ACTION_STILL_GESTURE_ANALYSE", [
        stillGestureReq,
    ]);
}
export function stopStillGestureAnalyser(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_GESTURE_ANALYSE_STOP", [

    ]);
}
export async function stillHandkeyAnalyser(
    stillHandKeypointReq: MLKit.stillHandKeypointReq
): Promise<MLKit.MLHandKeypoints> {
    return asyncExec("HMSMLBody", "ACTION_STILL_HANDKEYPOINT_ANALYSE", [
        stillHandKeypointReq
    ]);
}
export function stopStillHandKeyAnalyser(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_HANDKEYPOINT_ANALYSE_STOP", [

    ]);
}
export function getFaceAnalyserSetting(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_FACE_ANALYSER_SETTING", [

    ]);
}
export function getHandKeyAnalyserSetting(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_HANDKEYPOINT_ANALYSE_SETTING", [

    ]);
}
export function getGestureAnalyserSetting(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_GESTURE_ANALYSE_SETTING", [

    ]);
}
export function stopStillSkeletonAnalyser(): Promise<any> {
    return asyncExec("HMSMLBody", "ACTION_STILL_SKELETON_ANALYSE_STOP", [

    ]);
}
export async function interactiveLivenessAnalyser(interactiveLivenessDetectionReq: MLKit.interactiveLivenessDetectionReq): Promise<MLKit.MLInteractiveLivenessCaptureResult> {
    return asyncExec("HMSMLBody", "ACTION_INTERACTIVE_LIVENESS_DETECTION", [
        interactiveLivenessDetectionReq
    ]);
}
export async function customInteractiveLivenessAnalyser(customInteractiveLivenessDetectionReq: MLKit.customInteractiveLivenessDetectionReq): Promise<MLKit.MLInteractiveLivenessCaptureResult> {
    return asyncExec("HMSMLBody", "ACTION_CUSTOM_INTERACTIVE_LIVENESS_DETECTION", [
        customInteractiveLivenessDetectionReq
    ]);
}
