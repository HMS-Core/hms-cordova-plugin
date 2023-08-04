import * as MLLanguagePlugin from "./interfaces";
export { appSettingReq, LANGUAGE, MLTtsConstants, MLAftConstants, Colors, RectStyle, FEATURE, CordovaErrors, MLTtsAudioFragmentConstant, MLTtsAudioFragment, MLTtsSpeaker, MLTtsError, MLSpeechRealTimeTranscriptionConstants, syncRequestLocalLangDetect, } from "./interfaces";
export declare function serviceInitializer(params: MLLanguagePlugin.configReq): Promise<any>;
export declare function appSetting(appSettingReq: MLLanguagePlugin.appSettingReq): Promise<any>;
export declare function setUserRegion(region: number): Promise<void>;
export declare function getCountryCode(): Promise<String>;
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
