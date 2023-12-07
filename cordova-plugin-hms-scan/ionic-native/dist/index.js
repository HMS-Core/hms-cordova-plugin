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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var HMSScanOriginal = /** @class */ (function (_super) {
    __extends(HMSScanOriginal, _super);
    function HMSScanOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether necessary permissions are granted to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains a permission to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains a permissions to use the services.
     * @param  {Permission[]} permissions Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * Enables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * Disables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format..
     * @param  {number} viewType Sets the scanning UI title.
     * @param  {boolean} errorCheck Sets the error listener.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.defaultViewMode = function (scanTypes, viewType, errorCheck) { return cordova(this, "defaultViewMode", { "otherPromise": true }, arguments); };
    /**
     * This service works asynchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.analyzInAsyn = function (filePath, scanTypes) { return cordova(this, "analyzInAsyn", { "otherPromise": true }, arguments); };
    /**
     * This service works synchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.analyseFrame = function (filePath, scanTypes) { return cordova(this, "analyseFrame", { "otherPromise": true }, arguments); };
    /**
     * The service recognition scanning barcodes from images in Bitmap or YuvImage mode.
     * @param  {scanFrameOptions} scanFrameOptions Contains the settings of the barcode scanning
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {string} divId ScanArea
     * @param  {DecodeModeRequest} decodeModeRequest Contains the settings of the decodeMode service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.decode = function (scanFrameOptions, filePath, divId, customProps) { return cordova(this, "decode", { "otherPromise": true }, arguments); };
    /**
     * The service recognition scanning barcodes from images in Bitmap mode.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.decodeWithBitmap = function (filePath, scanTypes) { return cordova(this, "decodeWithBitmap", { "otherPromise": true }, arguments); };
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec. Besides a character string, you still need to specify the format and size for generating a barcode.
     * @param  {BuildBitmapRequest} buildBitmapRequest Contains the settings of the barcode generation service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.buildBitmap = function (buildBitmapRequest) { return cordova(this, "buildBitmap", { "otherPromise": true }, arguments); };
    /**
     * Obtains the bitmap from the corresponding file path, performs sampling rate compression, and returns the bitmap that meets the size requirements.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.detectForHmsDector = function (filePath, scanTypes) { return cordova(this, "detectForHmsDector", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the decode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    HMSScanOriginal.prototype.decodeOn = function (eventName, call) { return cordova(this, "decodeOn", {}, arguments); };
    /**
     * It stops the view mode service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.decodeStopViewService = function () { return cordova(this, "decodeStopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSScanOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: false,
        configurable: true
    });
    HMSScanOriginal.pluginName = "HMSScan";
    HMSScanOriginal.plugin = "cordova-plugin-hms-scan";
    HMSScanOriginal.pluginRef = "HMSScan";
    HMSScanOriginal.platforms = ["Android"];
    return HMSScanOriginal;
}(IonicNativePlugin));
var HMSScan = new HMSScanOriginal();
export { HMSScan };
var MultiProcessorOriginal = /** @class */ (function (_super) {
    __extends(MultiProcessorOriginal, _super);
    function MultiProcessorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
      * The service process of using the MultiProcessorOriginal mode in synchronous mode.
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    MultiProcessorOriginal.prototype.multiProcessorSynMode = function (divId, multiProcessorSynModeRequest) { return cordova(this, "multiProcessorSynMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessorOriginal mode in asynchronous mode
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    MultiProcessorOriginal.prototype.multiProcessorAsynMode = function (divId, multiProcessorAsynModeRequest) { return cordova(this, "multiProcessorAsynMode", { "otherPromise": true }, arguments); };
    /**
     * It recognizes barcodes using the camera in Bitmap mode.
     * @param  {string} divId ScanArea
     * @param  {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    MultiProcessorOriginal.prototype.bitmapMode = function (divId, bitmapModeRequest) { return cordova(this, "bitmapMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessorOriginal and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    MultiProcessorOriginal.prototype.on = function (eventName, call) { return cordova(this, "on", {}, arguments); };
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    MultiProcessorOriginal.prototype.stopViewService = function () { return cordova(this, "stopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(MultiProcessorOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: false,
        configurable: true
    });
    MultiProcessorOriginal.pluginName = "MultiProcessor";
    MultiProcessorOriginal.plugin = "cordova-plugin-hms-scan";
    MultiProcessorOriginal.pluginRef = "MultiProcessor";
    MultiProcessorOriginal.platforms = ["Android"];
    return MultiProcessorOriginal;
}(IonicNativePlugin));
var MultiProcessor = new MultiProcessorOriginal();
export { MultiProcessor };
var CustomViewOriginal = /** @class */ (function (_super) {
    __extends(CustomViewOriginal, _super);
    function CustomViewOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param  {string} divId ScanArea
     * @param  {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    CustomViewOriginal.prototype.customViewMode = function (divId, customViewModeRequest) { return cordova(this, "customViewMode", { "otherPromise": true }, arguments); };
    /**
     * It opens flush light.
     * @returns Promise<any>
     */
    CustomViewOriginal.prototype.openFlushLight = function () { return cordova(this, "openFlushLight", { "otherPromise": true }, arguments); };
    /**
     * It pause the continuously scan.
     * @returns Promise<any>
     */
    CustomViewOriginal.prototype.pauseContinuouslyScan = function () { return cordova(this, "pauseContinuouslyScan", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessorOriginal and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    CustomViewOriginal.prototype.on = function (eventName, call) { return cordova(this, "on", {}, arguments); };
    /**
     * It resume the continuously scan.
     * @returns Promise<any>
     */
    CustomViewOriginal.prototype.resumeContinuouslyScan = function () { return cordova(this, "resumeContinuouslyScan", { "otherPromise": true }, arguments); };
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    CustomViewOriginal.prototype.stopViewService = function () { return cordova(this, "stopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(CustomViewOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: false,
        configurable: true
    });
    CustomViewOriginal.pluginName = "CustomView";
    CustomViewOriginal.plugin = "cordova-plugin-hms-scan";
    CustomViewOriginal.pluginRef = "CustomView";
    CustomViewOriginal.platforms = ["Android"];
    return CustomViewOriginal;
}(IonicNativePlugin));
var CustomView = new CustomViewOriginal();
export { CustomView };
export var HMSPermission;
(function (HMSPermission) {
    HMSPermission["CAMERA"] = "android.permission.CAMERA";
    HMSPermission["READ_EXTERNAL_STORAGE"] = "android.permission.READ_EXTERNAL_STORAGE";
})(HMSPermission || (HMSPermission = {}));
export var ErrorCorrectionLevel;
(function (ErrorCorrectionLevel) {
    ErrorCorrectionLevel["L"] = "L";
    ErrorCorrectionLevel["M"] = "M";
    ErrorCorrectionLevel["Q"] = "Q";
    ErrorCorrectionLevel["H"] = "H";
})(ErrorCorrectionLevel || (ErrorCorrectionLevel = {}));
export var Colors;
(function (Colors) {
    Colors[Colors["RED"] = -65536] = "RED";
    Colors[Colors["DKGRAY"] = -12303292] = "DKGRAY";
    Colors[Colors["GRAY"] = -7829368] = "GRAY";
    Colors[Colors["WHITE"] = -1] = "WHITE";
    Colors[Colors["BLUE"] = -16776961] = "BLUE";
    Colors[Colors["BLACK"] = -16777216] = "BLACK";
    Colors[Colors["LTGRAY"] = -3355444] = "LTGRAY";
    Colors[Colors["MAGENTA"] = -65281] = "MAGENTA";
    Colors[Colors["YELLOW"] = -256] = "YELLOW";
    Colors[Colors["CYAN"] = -16711681] = "CYAN";
    Colors[Colors["GREEN"] = -16711936] = "GREEN";
    Colors[Colors["TRANSPARENT"] = 0] = "TRANSPARENT";
})(Colors || (Colors = {}));
export var ScanTypes;
(function (ScanTypes) {
    ScanTypes[ScanTypes["OTHER_SCAN_TYPE"] = -1] = "OTHER_SCAN_TYPE";
    ScanTypes[ScanTypes["ALL_SCAN_TYPE"] = 0] = "ALL_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE128_SCAN_TYPE"] = 64] = "CODE128_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE39_SCAN_TYPE"] = 16] = "CODE39_SCAN_TYPE";
    ScanTypes[ScanTypes["CODE93_SCAN_TYPE"] = 32] = "CODE93_SCAN_TYPE";
    ScanTypes[ScanTypes["CODABAR_SCAN_TYPE"] = 4096] = "CODABAR_SCAN_TYPE";
    ScanTypes[ScanTypes["DATAMATRIX_SCAN_TYPE"] = 4] = "DATAMATRIX_SCAN_TYPE";
    ScanTypes[ScanTypes["EAN13_SCAN_TYPE"] = 128] = "EAN13_SCAN_TYPE";
    ScanTypes[ScanTypes["EAN8_SCAN_TYPE"] = 256] = "EAN8_SCAN_TYPE";
    ScanTypes[ScanTypes["ITF14_SCAN_TYPE"] = 512] = "ITF14_SCAN_TYPE";
    ScanTypes[ScanTypes["QRCODE_SCAN_TYPE"] = 1] = "QRCODE_SCAN_TYPE";
    ScanTypes[ScanTypes["UPCCODE_A_SCAN_TYPE"] = 1024] = "UPCCODE_A_SCAN_TYPE";
    ScanTypes[ScanTypes["UPCCODE_E_SCAN_TYPE"] = 2048] = "UPCCODE_E_SCAN_TYPE";
    ScanTypes[ScanTypes["PDF417_SCAN_TYPE"] = 8] = "PDF417_SCAN_TYPE";
    ScanTypes[ScanTypes["AZTEC_SCAN_TYPE"] = 2] = "AZTEC_SCAN_TYPE";
    ScanTypes[ScanTypes["MULTI_FUNCTIONAL_SCAN_TYPE"] = 8192] = "MULTI_FUNCTIONAL_SCAN_TYPE";
})(ScanTypes || (ScanTypes = {}));
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 0] = "STROKE";
    RectStyle[RectStyle["FILL"] = 1] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 2] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBVTVELDJCQUFpQjs7OztJQWU1Qzs7OztPQUlHO0lBQ0gsK0JBQWEsYUFBQyxVQUF5QjtJQUV0QyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG1DQUFpQixhQUFDLFVBQXlCO0lBRTFDLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsb0NBQWtCLGFBQUMsV0FBNEI7SUFFOUMsQ0FBQztJQUVGOzs7T0FHRztJQUNILDhCQUFZO0lBSVo7OztPQUdHO0lBQ0gsK0JBQWE7SUFLYjs7Ozs7O09BTUc7SUFDSCxpQ0FBZSxhQUFDLFNBQXNCLEVBQUUsUUFBZ0IsRUFBRSxVQUFtQjtJQUk3RTs7Ozs7T0FLRztJQUNILDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUtyRDs7Ozs7T0FLRztJQUNILDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUtyRDs7Ozs7OztPQU9HO0lBQ0gsd0JBQU0sYUFBRSxnQkFBa0MsRUFBRSxRQUFpQixFQUFFLEtBQWMsRUFBRSxXQUErQjtJQUs5Rzs7Ozs7T0FLRztJQUNILGtDQUFnQixhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLekQ7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsa0JBQXNDO0lBS2xEOzs7OztPQUtHO0lBQ0gsb0NBQWtCLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUszRDs7Ozs7T0FLRztJQUNILDBCQUFRLGFBQUMsU0FBaUIsRUFBRSxJQUEwQjtJQUt0RDs7O09BR0c7SUFDSCx1Q0FBcUI7MEJBckpyQiwyQkFBTTs7Ozs7OzBCQUVOLDhCQUFTOzs7Ozs7MEJBRVQsOEJBQVM7Ozs7OzswQkFFVCwrQkFBVTs7Ozs7OzBCQUVW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dGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMy4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TU2NhbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdITVNTY2FuJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTY2FuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBDaGVja3Mgd2hldGhlciBuZWNlc3NhcnkgcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgKiBAcGFyYW0gIHtQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICovXHJcbiAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyBhIHBlcm1pc3Npb24gdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgKiBAcGFyYW0gIHtQZXJtaXNzaW9ufSBwZXJtaXNzaW9uIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICByZXF1ZXN0UGVybWlzc2lvbihwZXJtaXNzaW9uOiBITVNQZXJtaXNzaW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogT2J0YWlucyBhIHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICogQHBhcmFtICB7UGVybWlzc2lvbltdfSBwZXJtaXNzaW9ucyBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25zOiBITVNQZXJtaXNzaW9uW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBFbmFibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBTY2FuIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIERpc2FibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBTY2FuIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSW4gRGVmYXVsdCBWaWV3IG1vZGUsIFNjYW4gS2l0IHNjYW5zIGJhcmNvZGVzIHVzaW5nIHRoZSBjYW1lcmEgb3IgZnJvbSBpbWFnZXMgaW4gdGhlIGFsYnVtLCBhbmQgYWxzbyBwcm92aWRlcyBhY3Rpdml0aWVzIHRoYXQgY2FuIGJlIGRpcmVjdGx5IHVzZWQuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC4uXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSB2aWV3VHlwZSBTZXRzIHRoZSBzY2FubmluZyBVSSB0aXRsZS5cclxuICAgKiBAcGFyYW0gIHtib29sZWFufSBlcnJvckNoZWNrIFNldHMgdGhlIGVycm9yIGxpc3RlbmVyLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRlZmF1bHRWaWV3TW9kZShzY2FuVHlwZXM6IFNjYW5UeXBlc1tdLCB2aWV3VHlwZTogbnVtYmVyLCBlcnJvckNoZWNrOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugd29ya3MgYXN5bmNocm9ub3VzbHksIGRlZmluZXMgdGhlIGJpdG1hcCBnaXZlbiBhcyBhIHBhcmFtZXRlciwgYW5kIHJldHVybnMgdGhlIFNjYW4gcmVzdWx0cy5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYW5hbHl6SW5Bc3luKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugd29ya3Mgc3luY2hyb25vdXNseSwgZGVmaW5lcyB0aGUgYml0bWFwIGdpdmVuIGFzIGEgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyB0aGUgU2NhbiByZXN1bHRzLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBhbmFseXNlRnJhbWUoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHJlY29nbml0aW9uIHNjYW5uaW5nIGJhcmNvZGVzIGZyb20gaW1hZ2VzIGluIEJpdG1hcCBvciBZdXZJbWFnZSBtb2RlLlxyXG4gICAqIEBwYXJhbSAge3NjYW5GcmFtZU9wdGlvbnN9IHNjYW5GcmFtZU9wdGlvbnMgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBiYXJjb2RlIHNjYW5uaW5nXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxyXG4gICAqIEBwYXJhbSAge0RlY29kZU1vZGVSZXF1ZXN0fSBkZWNvZGVNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGRlY29kZU1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWNvZGUoIHNjYW5GcmFtZU9wdGlvbnM6IFNjYW5GcmFtZU9wdGlvbnMsIGZpbGVQYXRoPzogc3RyaW5nLCBkaXZJZD86IHN0cmluZywgY3VzdG9tUHJvcHM/OiBEZWNvZGVNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHJlY29nbml0aW9uIHNjYW5uaW5nIGJhcmNvZGVzIGZyb20gaW1hZ2VzIGluIEJpdG1hcCBtb2RlLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWNvZGVXaXRoQml0bWFwKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBTY2FuIEtpdCBjYW4gY29udmVydCBjaGFyYWN0ZXIgc3RyaW5ncyBpbnRvIDFEIG9yIDJEIGJhcmNvZGVzIGluIDEzIGZvcm1hdHMsIGluY2x1ZGluZyBFQU4tOCwgRUFOLTEzLCBVUEMtQSwgVVBDLUUsIENvZGFiYXIsIENvZGUgMzksIENvZGUgOTMsIENvZGUgMTI4LCBJVEYsIFFSIGNvZGUsIERhdGEgTWF0cml4LCBQREY0MTcsIGFuZCBBenRlYy4gQmVzaWRlcyBhIGNoYXJhY3RlciBzdHJpbmcsIHlvdSBzdGlsbCBuZWVkIHRvIHNwZWNpZnkgdGhlIGZvcm1hdCBhbmQgc2l6ZSBmb3IgZ2VuZXJhdGluZyBhIGJhcmNvZGUuXHJcbiAgICogQHBhcmFtICB7QnVpbGRCaXRtYXBSZXF1ZXN0fSBidWlsZEJpdG1hcFJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBiYXJjb2RlIGdlbmVyYXRpb24gc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBidWlsZEJpdG1hcChidWlsZEJpdG1hcFJlcXVlc3Q6IEJ1aWxkQml0bWFwUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgdGhlIGJpdG1hcCBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgcGF0aCwgcGVyZm9ybXMgc2FtcGxpbmcgcmF0ZSBjb21wcmVzc2lvbiwgYW5kIHJldHVybnMgdGhlIGJpdG1hcCB0aGF0IG1lZXRzIHRoZSBzaXplIHJlcXVpcmVtZW50cy5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGV0ZWN0Rm9ySG1zRGVjdG9yKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIGRlY29kZVxyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSBFdmVudCBuYW1lLiBcclxuICAgICogQHBhcmFtICB7KHZhbHVlOiBhbnkpID0+IHZvaWR9IGNhbGwgTWV0aG9kLlxyXG4gICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICovXHJcbiAgZGVjb2RlT24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHN0b3BzIHRoZSB2aWV3IG1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWNvZGVTdG9wVmlld1NlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTXVsdGlQcm9jZXNzb3InLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnTXVsdGlQcm9jZXNzb3InLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXVsdGlQcm9jZXNzb3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIG1vZGUgaW4gc3luY2hyb25vdXMgbW9kZS5cclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgICogQHBhcmFtICB7TXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdH0gbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIG11bHRpUHJvY2Vzc29yU3luTW9kZSBzZXJ2aWNlLlxyXG4gICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBtdWx0aVByb2Nlc3NvclN5bk1vZGUoZGl2SWQ6IHN0cmluZywgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdDogTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIG1vZGUgaW4gYXN5bmNocm9ub3VzIG1vZGVcclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgICogQHBhcmFtICB7TXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdH0gbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIG11bHRpUHJvY2Vzc29yU3luTW9kZSBzZXJ2aWNlLlxyXG4gICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlKGRpdklkOiBzdHJpbmcsIG11bHRpUHJvY2Vzc29yQXN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgcmVjb2duaXplcyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIGluIEJpdG1hcCBtb2RlLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICogQHBhcmFtICB7Qml0bWFwTW9kZVJlcXVlc3R9IGJpdG1hcE1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgQml0bWFwTW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGJpdG1hcE1vZGUoZGl2SWQ6IHN0cmluZywgYml0bWFwTW9kZVJlcXVlc3Q6IEJpdG1hcE1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBhbmQgYml0bWFwIG1vZGVcclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZS4gXHJcbiAgICAqIEBwYXJhbSAgeyh2YWx1ZTogYW55KSA9PiB2b2lkfSBjYWxsIE1ldGhvZC5cclxuICAgICogQHJldHVybnMgdm9pZFxyXG4gICAqL1xyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBzdG9wcyB0aGUgY3VzdG9tIHZpZXcgbW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BWaWV3U2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDdXN0b21WaWV3JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0N1c3RvbVZpZXcnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJbiBDdXN0b21pemVkIFZpZXcgbW9kZSwgeW91IGRvIG5vdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGRldmVsb3BpbmcgdGhlIHNjYW5uaW5nIHByb2Nlc3Mgb3IgY2FtZXJhIGNvbnRyb2wuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgKiBAcGFyYW0gIHtDdXN0b21WaWV3TW9kZVJlcXVlc3R9IGN1c3RvbVZpZXdNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGN1c3RvbVZpZXdNb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgY3VzdG9tVmlld01vZGUoZGl2SWQ6IHN0cmluZywgY3VzdG9tVmlld01vZGVSZXF1ZXN0OiBDdXN0b21WaWV3TW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBvcGVucyBmbHVzaCBsaWdodC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBvcGVuRmx1c2hMaWdodCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBwYXVzZSB0aGUgY29udGludW91c2x5IHNjYW4uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcGF1c2VDb250aW51b3VzbHlTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgYW5kIGJpdG1hcCBtb2RlXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWUuIFxyXG4gICAgKiBAcGFyYW0gIHsodmFsdWU6IGFueSkgPT4gdm9pZH0gY2FsbCBNZXRob2QuXHJcbiAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgKi9cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgcmVzdW1lIHRoZSBjb250aW51b3VzbHkgc2Nhbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICByZXN1bWVDb250aW51b3VzbHlTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHN0b3BzIHRoZSBjdXN0b20gdmlldyBtb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc3RvcFZpZXdTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVZpZXdNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBpc0NvbnRpbnVvdXNseVNjYW4/OiBib29sZWFuO1xyXG4gIGVuYWJsZVJldHVybkJpdG1hcD86IGJvb2xlYW47XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG4gIGVuYWJsZURyYXdTY2FuUmVzdWx0PzogYm9vbGVhbjtcclxuICB2aWV3QXR0cmlidXRlcz86IFZpZXdBdHRyaWJ1dGVzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVjb2RlTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcclxuICBlbmFibGVTY2FuQXJlYUJveD86IGJvb2xlYW47XHJcbiAgZW5hYmxlRHJhd1NjYW5SZXN1bHQ/OiBib29sZWFuO1xyXG4gIHZpZXdBdHRyaWJ1dGVzPzogVmlld0F0dHJpYnV0ZXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWaWV3QXR0cmlidXRlcyB7XHJcbiAgdGV4dENvbG9yPzogQ29sb3JzO1xyXG4gIHRleHRTaXplPzogbnVtYmVyO1xyXG4gIHN0cm9rZVdpdGRoPzogbnVtYmVyO1xyXG4gIHJlY3RDb2xvcj86IENvbG9ycztcclxuICByZWN0U3R5bGU/OiBSZWN0U3R5bGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuRnJhbWVPcHRpb25zIHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIG11bHRpTW9kZTogYm9vbGVhbjtcclxuICBwYXJzZVJlc3VsdDogYm9vbGVhbjtcclxuICBwaG90b01vZGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCdWlsZEJpdG1hcFJlcXVlc3Qge1xyXG4gIGlucHV0Q29udGVudDogc3RyaW5nO1xyXG4gIGJhcmNvZGVGb3JtYXQ6IFNjYW5UeXBlcztcclxuICBiYXJjb2RlV2lkdGg/OiBudW1iZXI7XHJcbiAgYmFyY29kZUhlaWdodD86IG51bWJlcjtcclxuICBobXNCdWlsZEJpdG1hcE9wdGlvbnM/OiBITVNCdWlsZEJpdG1hcE9wdGlvbnM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNCdWlsZEJpdG1hcE9wdGlvbnMge1xyXG4gIGJpdG1hcE1hcmdpbj86IG51bWJlcjtcclxuICBiaXRtYXBDb2xvcj86IENvbG9ycztcclxuICBiaXRtYXBCYWNrZ3JvdW5kQ29sb3I/OiBDb2xvcnM7XHJcbiAgcXJFcnJvckNvcnJlY3Rpb25MZXZlbD86IEVycm9yQ29ycmVjdGlvbkxldmVsLFxyXG4gIHFyTG9nb0JpdG1hcD86IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW107XHJcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcclxuICBlbmFibGVTY2FuQXJlYUJveD86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuQm91bmRzIHtcclxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGVudW0gSE1TUGVybWlzc2lvbiB7XHJcbiAgQ0FNRVJBID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQ0FNRVJBXCIsXHJcbiAgUkVBRF9FWFRFUk5BTF9TVE9SQUdFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFXCJcclxufVxyXG5leHBvcnQgZW51bSBFcnJvckNvcnJlY3Rpb25MZXZlbCB7XHJcbiAgTCA9IFwiTFwiLFxyXG4gIE0gPSBcIk1cIixcclxuICBRID0gXCJRXCIsXHJcbiAgSCA9IFwiSFwiXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sb3JzIHtcclxuICBSRUQgPSAtNjU1MzYsXHJcbiAgREtHUkFZID0gLTEyMzAzMjkyLFxyXG4gIEdSQVkgPSAtNzgyOTM2OCxcclxuICBXSElURSA9IC0xLFxyXG4gIEJMVUUgPSAtMTY3NzY5NjEsXHJcbiAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgTFRHUkFZID0gLTMzNTU0NDQsXHJcbiAgTUFHRU5UQSA9IC02NTI4MSxcclxuICBZRUxMT1cgPSAtMjU2LFxyXG4gIENZQU4gPSAtMTY3MTE2ODEsXHJcbiAgR1JFRU4gPSAtMTY3MTE5MzYsXHJcbiAgVFJBTlNQQVJFTlQgPSAwXHJcbn1cclxuZXhwb3J0IGVudW0gU2NhblR5cGVzIHtcclxuICBPVEhFUl9TQ0FOX1RZUEUgPSAtMSxcclxuICBBTExfU0NBTl9UWVBFID0gMCxcclxuICBDT0RFMTI4X1NDQU5fVFlQRSA9IDY0LFxyXG4gIENPREUzOV9TQ0FOX1RZUEUgPSAxNixcclxuICBDT0RFOTNfU0NBTl9UWVBFID0gMzIsXHJcbiAgQ09EQUJBUl9TQ0FOX1RZUEUgPSA0MDk2LFxyXG4gIERBVEFNQVRSSVhfU0NBTl9UWVBFID0gNCxcclxuICBFQU4xM19TQ0FOX1RZUEUgPSAxMjgsXHJcbiAgRUFOOF9TQ0FOX1RZUEUgPSAyNTYsXHJcbiAgSVRGMTRfU0NBTl9UWVBFID0gNTEyLFxyXG4gIFFSQ09ERV9TQ0FOX1RZUEUgPSAxLFxyXG4gIFVQQ0NPREVfQV9TQ0FOX1RZUEUgPSAxMDI0LFxyXG4gIFVQQ0NPREVfRV9TQ0FOX1RZUEUgPSAyMDQ4LFxyXG4gIFBERjQxN19TQ0FOX1RZUEUgPSA4LFxyXG4gIEFaVEVDX1NDQU5fVFlQRSA9IDIsXHJcbiAgTVVMVElfRlVOQ1RJT05BTF9TQ0FOX1RZUEUgPSA4MTkyLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XHJcbiAgU1RST0tFID0gMCxcclxuICBGSUxMID0gMSxcclxuICBGSUxMX0FORF9TVFJPS0UgPSAyLFxyXG59XHJcblxyXG4vL0xheW91dFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xyXG4gIG1hcmdpbkxlZnQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luUmlnaHQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlclxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIHg6IG51bWJlcixcclxuICB5OiBudW1iZXIsXHJcbiAgd2lkdGg6IG51bWJlcixcclxuICBoZWlnaHQ6IG51bWJlcixcclxuICBtYXJnaW5MZWZ0PzogbnVtYmVyLFxyXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXIsXHJcbiAgcGFnZVhPZmZzZXQ/OiBudW1iZXIsXHJcbiAgcGFnZVlPZmZzZXQ/OiBudW1iZXJcclxufVxyXG4iXX0=