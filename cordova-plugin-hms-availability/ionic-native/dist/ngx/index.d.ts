import { IonicNativePlugin } from '@ionic-native/core';
export declare class HMSAvailability extends IonicNativePlugin {
    /**
     * Checks whether HMS Core is installed.
     * @return {Promise<number>}
     */
    isHuaweiMobileServicesAvailable(minApkVersion?: number): Promise<number>;
    isHuaweiMobileNoticeAvailable(): Promise<number>;
    getApiMap(): Promise<ApiMap>;
    getServicesVersionCode(): Promise<number>;
    setServicesVersionCode(servicesVersionCode: number): Promise<void>;
    isUserResolvableError(errorCode: number): Promise<boolean>;
    getErrorString(errorCode: number): Promise<string>;
    resolveError(errorCode: number, requestCode: number): Promise<void>;
    showErrorDialogFragment(errorCode: number, requestCode: number, cancelListener?: () => void): Promise<boolean>;
    showErrorNotification(errorCode: number): Promise<void>;
}
export interface ApiMap {
    'HuaweiIap.API': number;
    'HuaweiID.API': number;
    'HuaweiGame.API': number;
    'HuaweiPay.API': number;
    'HuaweiSns.API': number;
    'HuaweiOpenDevice.API': number;
    'HuaweiPPSkit.API': number;
    'HuaweiPush.API': number;
}
