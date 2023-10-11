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
export {
    MLProductConfig,
    MLFormRecogitionConfig,
    ImgSuperResolutionConfig,
    MLBcrResultConfig,
    MLGcrCaptureUIConfig,
    MLBcrCaptureConfig,
    MLTextConfig,
    MLRemoteTextSetting,
    MLLocalTextSetting,
    MLText,
    MLDocument,
    MLBankCard,
    MLGcrCaptureResult,
    MLFormRecogitionResult,
    MLVnIcrCaptureResult,
    MLCnIcrCaptureResult,
    MLIcrCaptureResult,
    MLBcrCaptureResult,
    CordovaErrors,
    MLBcrCaptureErrorCode,
    Colors,
    RecMode
} from "./interfaces";

//Text Provider

export async function imageTextAnalyser(
    ImageTextReq: MLKit.localImageTextReq | MLKit.remoteImageTextReq
): Promise<MLKit.MLText> {
    return asyncExec("HMSMLText", "ACTION_IMAGE_TEXT_ANALYSER", [
        ImageTextReq,
    ]);
}
export async function stopTextAnalyser(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_STOP_TEXT_ANALYSER", []);
}
export async function getTextAnalyserInfo(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_GET_IMAGE_TEXT_INFO",
        []
    );
}
export async function documentImageAnalyser(
    documentImageReq: MLKit.documentImageAnalyserReq
): Promise<MLKit.MLDocument> {
    return asyncExec(
        "HMSMLText",
        "ACTION_DOCUMENT_IMAGE_ANALYSER",
        [documentImageReq]
    );
}
export async function closeDocumentImageAnalyser(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_CLOSE_DOCUMENT_IMAGE_ANALYSER",
        []
    );
}
export async function stopDocumentImageAnalyser(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_STOP_DOCUMENT_IMAGE_ANALYSER",
        []
    );
}
export async function getDocumentImageAnalyserSetting(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_GET_DOCUMENT_IMAGE_ANALYSER_SETTING",
        []
    );
}
export async function getTextAnalyserSetting(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_GET_IMAGE_TEXT_SETTING",
        []
    );
}
export async function getGCRSetting(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_GET_GCR_SETTING", []);
}
export async function stopFormRecognitionAnalyser(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_FORM_RECOGNITION_STOP",
        []
    );
}
export async function bankCardDetector(
    bankCardDetecterReq:
        | MLKit.bankCardSDKDetectorReq
        | MLKit.bankCardPluginDetectorReq
): Promise<MLKit.MLBankCard> {
    return asyncExec("HMSMLText", "ACTION_BANK_CARD_DETECTOR", [
        bankCardDetecterReq,
    ]);
}
export async function stopBankCardDetector(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_STOP_BANK_CARD_DETECTOR",
        []
    );
}

export async function setResultCallbackBcr(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_BANK_CARD_SET_RESULT_CALLBACK",
        []
    );
}
export async function setResultTypeBcr(
    mLBcrCaptureConfig: MLKit.mLBcrCaptureConfig
): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_BANK_CARD_SET_RESULT_TYPE",
        []
    );
}
export async function setRecModeBcr(
    mLBcrCaptureConfig: MLKit.mLBcrCaptureConfig
): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_BANK_CARD_SET_RECMODE",
        []
    );
}

export async function getBankCardDetectorSetting(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_GET_BANK_CARD_SETTING",
        []
    );
}

export async function generalCardDetector(
    generalCardDetectorReq: MLKit.generalCardDetectorReq
): Promise<MLKit.MLGcrCaptureResult> {
    return asyncExec(
        "HMSMLText",
        "ACTION_GENERALCARD_PLUGIN_DETECTOR",
        [generalCardDetectorReq]
    );
}

export async function formRecognitionAnalyser(
    formRecognizerAnalyserReq: MLKit.formRecognizerAnalyserReq
): Promise<MLKit.MLFormRecogitionResult> {
    return asyncExec("HMSMLText", "ACTION_FORM_RECOGNITION", [
        formRecognizerAnalyserReq,
    ]);
}

export async function icrVnCardDetector(
    icrVnDetectorReq: MLKit.icrVnDetectorReq
): Promise<MLKit.MLVnIcrCaptureResult> {
    return asyncExec("HMSMLText", "ACTION_ICRVN_PLUGIN_DETECTOR", [
        icrVnDetectorReq,
    ]);
}

export async function icrVnCardCreate(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_ICRVN_CREATE", []);
}

export async function getIcrVnCapture(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_ICRVN_CAPTURE", []);
}

export async function geticrVnCardInstance(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_ICRVN_GET_INSTANCE", []);
}

export async function icrCnCardCreate(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_ICRCN_CREATE", []);
}

export async function geticrCnCardInstance(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_ICRCN_GET_INSTANCE", []);
}

export async function getIcrCnCapture(): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_ICRCN_CAPTURE", []);
}

export async function icrCnCardDetector(
    icrCnDetectorReq: MLKit.icrCnDetectorReq
): Promise<MLKit.MLCnIcrCaptureResult> {
    return asyncExec("HMSMLText", "ACTION_ICRCN_PLUGIN_DETECTOR", [
        icrCnDetectorReq,
    ]);
}

export async function icrLocalAnalyser(
    localAnalyserReq: MLKit.localAnalyserReq
): Promise<MLKit.MLIcrCaptureResult> {
    return asyncExec("HMSMLText", "ACTION_LOCAL_ANALYSER", [
        localAnalyserReq,
    ]);
}

export async function icrLocalAnalyserCreateIdCard(
    createIdCardReq: MLKit.createIdCardReq
): Promise<any> {
    return asyncExec("HMSMLText", "ACTION_LOCAL_ANALYSER_CREATE", [
        createIdCardReq,
    ]);
}

export async function icrLocalAnalyserStop(): Promise<any> {
    return asyncExec(
        "HMSMLText",
        "ACTION_LOCAL_ANALYSER_STOP",
        []
    );
}

export async function startCustomizedView(userProps: MLKit.CustomViewModeRequest): Promise<MLKit.MLBankCard> {
    return asyncExec('HMSMLText', 'startCustomizedView', [userProps]);
};

export async function switchLight(): Promise<void> {
    return asyncExec('HMSMLText', 'switchLight', []);
};

export async function getLightStatus(): Promise<any> {
    return asyncExec('HMSMLText', 'getLightStatus', []);
};
