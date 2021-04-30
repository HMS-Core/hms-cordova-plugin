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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.defaultViewMode = function (scanTypes) { return cordova(this, "defaultViewMode", { "otherPromise": true }, arguments); };
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
    Object.defineProperty(HMSScanOriginal.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScanOriginal.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessorOriginal.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomViewOriginal.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
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
})(ScanTypes || (ScanTypes = {}));
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 0] = "STROKE";
    RectStyle[RectStyle["FILL"] = 1] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 2] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1zY2FuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQzs7SUErQjVELDJCQUFpQjs7OztJQWU1Qzs7OztPQUlHO0lBQ0gsK0JBQWEsYUFBQyxVQUF5QjtJQUV0QyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG1DQUFpQixhQUFDLFVBQXlCO0lBRTFDLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsb0NBQWtCLGFBQUMsV0FBNEI7SUFFOUMsQ0FBQztJQUVGOzs7T0FHRztJQUNILDhCQUFZO0lBSVo7OztPQUdHO0lBQ0gsK0JBQWE7SUFLYjs7OztPQUlHO0lBQ0gsaUNBQWUsYUFBQyxTQUFzQjtJQUl0Qzs7Ozs7T0FLRztJQUNILDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUtyRDs7Ozs7T0FLRztJQUNILDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUtyRDs7Ozs7T0FLRztJQUNILGtDQUFnQixhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLekQ7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsa0JBQXNDO0lBS2xEOzs7OztPQUtHO0lBQ0gsb0NBQWtCLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjswQkFsSDNELDJCQUFNOzs7Ozs7MEJBRU4sOEJBQVM7Ozs7OzswQkFFVCw4QkFBUzs7Ozs7OzBCQUVULCtCQUFVOzs7Ozs7MEJBRVYseUNBQW9COzs7Ozs7Ozs7O2tCQTNEdEI7RUFnRDZCLGlCQUFpQjtTQUFqQyxPQUFPOztJQWlJZ0Isa0NBQWlCOzs7O0lBY25EOzs7OztPQUtHO0lBQ0gsOENBQXFCLGFBQUMsS0FBYSxFQUFFLDRCQUF1RDtJQUs1Rjs7Ozs7T0FLRztJQUNILCtDQUFzQixhQUFDLEtBQWEsRUFBRSw2QkFBd0Q7SUFLOUY7Ozs7O09BS0c7SUFDSCxtQ0FBVSxhQUFDLEtBQWEsRUFBRSxpQkFBb0M7SUFLOUQ7Ozs7O09BS0c7SUFDSCwyQkFBRSxhQUFDLFNBQWlCLEVBQUUsSUFBMEI7SUFLaEQ7OztPQUdHO0lBQ0gsd0NBQWU7MEJBM0RmLGtDQUFNOzs7Ozs7MEJBRU4scUNBQVM7Ozs7OzswQkFFVCxxQ0FBUzs7Ozs7OzBCQUVULHNDQUFVOzs7Ozs7MEJBRVYsZ0RBQW9COzs7Ozs7Ozs7O3lCQTVMdEI7RUFpTG9DLGlCQUFpQjtTQUF4QyxjQUFjOztJQTJFSyw4QkFBaUI7Ozs7SUFjL0M7Ozs7O09BS0c7SUFDSCxtQ0FBYyxhQUFDLEtBQWEsRUFBRSxxQkFBNEM7SUFLMUU7OztPQUdHO0lBQ0gsbUNBQWM7SUFLZDs7O09BR0c7SUFDSCwwQ0FBcUI7SUFLckI7Ozs7O09BS0c7SUFDSCx1QkFBRSxhQUFDLFNBQWlCLEVBQUUsSUFBMEI7SUFLaEQ7OztPQUdHO0lBQ0gsMkNBQXNCO0lBS3RCOzs7T0FHRztJQUNILG9DQUFlOzBCQWhFZiw4QkFBTTs7Ozs7OzBCQUVOLGlDQUFTOzs7Ozs7MEJBRVQsaUNBQVM7Ozs7OzswQkFFVCxrQ0FBVTs7Ozs7OzBCQUVWLDRDQUFvQjs7Ozs7Ozs7OztxQkF2UXRCO0VBNFBnQyxpQkFBaUI7U0FBcEMsVUFBVTtBQW9IdkIsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixxREFBb0MsQ0FBQTtJQUNwQyxtRkFBa0UsQ0FBQTtBQUNwRSxDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxvQkFLWDtBQUxELFdBQVksb0JBQW9CO0lBQzlCLCtCQUFPLENBQUE7SUFDUCwrQkFBTyxDQUFBO0lBQ1AsK0JBQU8sQ0FBQTtJQUNQLCtCQUFPLENBQUE7QUFDVCxDQUFDLEVBTFcsb0JBQW9CLEtBQXBCLG9CQUFvQixRQUsvQjtBQUNELE1BQU0sQ0FBTixJQUFZLE1BYVg7QUFiRCxXQUFZLE1BQU07SUFDaEIsc0NBQVksQ0FBQTtJQUNaLCtDQUFrQixDQUFBO0lBQ2xCLDBDQUFlLENBQUE7SUFDZixzQ0FBVSxDQUFBO0lBQ1YsMkNBQWdCLENBQUE7SUFDaEIsNkNBQWlCLENBQUE7SUFDakIsOENBQWlCLENBQUE7SUFDakIsOENBQWdCLENBQUE7SUFDaEIsMENBQWEsQ0FBQTtJQUNiLDJDQUFnQixDQUFBO0lBQ2hCLDZDQUFpQixDQUFBO0lBQ2pCLGlEQUFlLENBQUE7QUFDakIsQ0FBQyxFQWJXLE1BQU0sS0FBTixNQUFNLFFBYWpCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FnQlg7QUFoQkQsV0FBWSxTQUFTO0lBQ25CLGdFQUFvQixDQUFBO0lBQ3BCLDJEQUFpQixDQUFBO0lBQ2pCLG9FQUFzQixDQUFBO0lBQ3RCLGtFQUFxQixDQUFBO0lBQ3JCLGtFQUFxQixDQUFBO0lBQ3JCLHNFQUF3QixDQUFBO0lBQ3hCLHlFQUF3QixDQUFBO0lBQ3hCLGlFQUFxQixDQUFBO0lBQ3JCLCtEQUFvQixDQUFBO0lBQ3BCLGlFQUFxQixDQUFBO0lBQ3JCLGlFQUFvQixDQUFBO0lBQ3BCLDBFQUEwQixDQUFBO0lBQzFCLDBFQUEwQixDQUFBO0lBQzFCLGlFQUFvQixDQUFBO0lBQ3BCLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFoQlcsU0FBUyxLQUFULFNBQVMsUUFnQnBCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiw2Q0FBVSxDQUFBO0lBQ1YseUNBQVEsQ0FBQTtJQUNSLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkNvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcbi8qKlxyXG4gKiBAbmFtZSBITVNTY2FuXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIFNjYW4gUGx1Z2luIGVuYWJsZXMgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBITVMgQ29yZSBTY2FuIFNESyBhbmQgQ29yZG92YSBwbGF0Zm9ybS4gVGhpcyBwbHVnaW4gZGVtb25zdHJhdGVzIHdpZGUtcmFuZ2luZyBmdW5jdGlvbmFsaXR5IG9mIHRoZSBITVMgQ29yZSBTY2FuIFNESy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSE1TU2NhbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaG1zLXNjYW4nO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhtc1NjYW46IEhNU1NjYW4pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5obXNTY2FuLmRlZmF1bHRWaWV3TW9kZShSZXF1ZXN0KVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU1NjYW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TU2NhbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TU2NhbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcclxuXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIGFyZSBncmFudGVkIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICogQHBhcmFtICB7UGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgYSBwZXJtaXNzaW9uIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICogQHBhcmFtICB7UGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgYSBwZXJtaXNzaW9ucyB0byB1c2UgdGhlIHNlcnZpY2VzLlxyXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb25bXX0gcGVybWlzc2lvbnMgUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSE1TUGVybWlzc2lvbltdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgU2NhbiBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBEaXNhYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgU2NhbiBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEluIERlZmF1bHQgVmlldyBtb2RlLCBTY2FuIEtpdCBzY2FucyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIG9yIGZyb20gaW1hZ2VzIGluIHRoZSBhbGJ1bSwgYW5kIGFsc28gcHJvdmlkZXMgYWN0aXZpdGllcyB0aGF0IGNhbiBiZSBkaXJlY3RseSB1c2VkLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRlZmF1bHRWaWV3TW9kZShzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugd29ya3MgYXN5bmNocm9ub3VzbHksIGRlZmluZXMgdGhlIGJpdG1hcCBnaXZlbiBhcyBhIHBhcmFtZXRlciwgYW5kIHJldHVybnMgdGhlIFNjYW4gcmVzdWx0cy5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYW5hbHl6SW5Bc3luKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGlzIHNlcnZpY2Ugd29ya3Mgc3luY2hyb25vdXNseSwgZGVmaW5lcyB0aGUgYml0bWFwIGdpdmVuIGFzIGEgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyB0aGUgU2NhbiByZXN1bHRzLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBhbmFseXNlRnJhbWUoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHJlY29nbml0aW9uIHNjYW5uaW5nIGJhcmNvZGVzIGZyb20gaW1hZ2VzIGluIEJpdG1hcCBtb2RlLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWNvZGVXaXRoQml0bWFwKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBTY2FuIEtpdCBjYW4gY29udmVydCBjaGFyYWN0ZXIgc3RyaW5ncyBpbnRvIDFEIG9yIDJEIGJhcmNvZGVzIGluIDEzIGZvcm1hdHMsIGluY2x1ZGluZyBFQU4tOCwgRUFOLTEzLCBVUEMtQSwgVVBDLUUsIENvZGFiYXIsIENvZGUgMzksIENvZGUgOTMsIENvZGUgMTI4LCBJVEYsIFFSIGNvZGUsIERhdGEgTWF0cml4LCBQREY0MTcsIGFuZCBBenRlYy4gQmVzaWRlcyBhIGNoYXJhY3RlciBzdHJpbmcsIHlvdSBzdGlsbCBuZWVkIHRvIHNwZWNpZnkgdGhlIGZvcm1hdCBhbmQgc2l6ZSBmb3IgZ2VuZXJhdGluZyBhIGJhcmNvZGUuXHJcbiAgICogQHBhcmFtICB7QnVpbGRCaXRtYXBSZXF1ZXN0fSBidWlsZEJpdG1hcFJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBiYXJjb2RlIGdlbmVyYXRpb24gc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBidWlsZEJpdG1hcChidWlsZEJpdG1hcFJlcXVlc3Q6IEJ1aWxkQml0bWFwUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgdGhlIGJpdG1hcCBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgcGF0aCwgcGVyZm9ybXMgc2FtcGxpbmcgcmF0ZSBjb21wcmVzc2lvbiwgYW5kIHJldHVybnMgdGhlIGJpdG1hcCB0aGF0IG1lZXRzIHRoZSBzaXplIHJlcXVpcmVtZW50cy5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGV0ZWN0Rm9ySG1zRGVjdG9yKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ011bHRpUHJvY2Vzc29yJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ011bHRpUHJvY2Vzc29yJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE11bHRpUHJvY2Vzc29yIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIHN5bmNocm9ub3VzIG1vZGUuXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICAqIEBwYXJhbSAge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cclxuICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlKGRpdklkOiBzdHJpbmcsIG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3Q6IE11bHRpUHJvY2Vzc29yTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIGFzeW5jaHJvbm91cyBtb2RlXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICAqIEBwYXJhbSAge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cclxuICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgbXVsdGlQcm9jZXNzb3JBc3luTW9kZShkaXZJZDogc3RyaW5nLCBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlUmVxdWVzdDogTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHJlY29nbml6ZXMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBpbiBCaXRtYXAgbW9kZS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxyXG4gICAqIEBwYXJhbSAge0JpdG1hcE1vZGVSZXF1ZXN0fSBiaXRtYXBNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIEJpdG1hcE1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBiaXRtYXBNb2RlKGRpdklkOiBzdHJpbmcsIGJpdG1hcE1vZGVSZXF1ZXN0OiBCaXRtYXBNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgYW5kIGJpdG1hcCBtb2RlXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWUuIFxyXG4gICAgKiBAcGFyYW0gIHsodmFsdWU6IGFueSkgPT4gdm9pZH0gY2FsbCBNZXRob2QuXHJcbiAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgKi9cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgc3RvcHMgdGhlIGN1c3RvbSB2aWV3IG1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wVmlld1NlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ3VzdG9tVmlldycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdDdXN0b21WaWV3JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVZpZXcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSW4gQ3VzdG9taXplZCBWaWV3IG1vZGUsIHlvdSBkbyBub3QgbmVlZCB0byB3b3JyeSBhYm91dCBkZXZlbG9waW5nIHRoZSBzY2FubmluZyBwcm9jZXNzIG9yIGNhbWVyYSBjb250cm9sLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICogQHBhcmFtICB7Q3VzdG9tVmlld01vZGVSZXF1ZXN0fSBjdXN0b21WaWV3TW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBjdXN0b21WaWV3TW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGN1c3RvbVZpZXdNb2RlKGRpdklkOiBzdHJpbmcsIGN1c3RvbVZpZXdNb2RlUmVxdWVzdDogQ3VzdG9tVmlld01vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgb3BlbnMgZmx1c2ggbGlnaHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgb3BlbkZsdXNoTGlnaHQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgcGF1c2UgdGhlIGNvbnRpbnVvdXNseSBzY2FuLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHBhdXNlQ29udGludW91c2x5U2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIGFuZCBiaXRtYXAgbW9kZVxyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSBFdmVudCBuYW1lLiBcclxuICAgICogQHBhcmFtICB7KHZhbHVlOiBhbnkpID0+IHZvaWR9IGNhbGwgTWV0aG9kLlxyXG4gICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICovXHJcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHJlc3VtZSB0aGUgY29udGludW91c2x5IHNjYW4uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVzdW1lQ29udGludW91c2x5U2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBzdG9wcyB0aGUgY3VzdG9tIHZpZXcgbW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BWaWV3U2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21WaWV3TW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgaXNDb250aW51b3VzbHlTY2FuPzogYm9vbGVhbjtcclxuICBlbmFibGVSZXR1cm5CaXRtYXA/OiBib29sZWFuO1xyXG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcclxuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xyXG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcclxuICBlbmFibGVEcmF3U2NhblJlc3VsdD86IGJvb2xlYW47XHJcbiAgdmlld0F0dHJpYnV0ZXM/OiBWaWV3QXR0cmlidXRlcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdBdHRyaWJ1dGVzIHtcclxuICB0ZXh0Q29sb3I/OiBDb2xvcnM7XHJcbiAgdGV4dFNpemU/OiBudW1iZXI7XHJcbiAgc3Ryb2tlV2l0ZGg/OiBudW1iZXI7XHJcbiAgcmVjdENvbG9yPzogQ29sb3JzO1xyXG4gIHJlY3RTdHlsZT86IFJlY3RTdHlsZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1aWxkQml0bWFwUmVxdWVzdCB7XHJcbiAgaW5wdXRDb250ZW50OiBzdHJpbmc7XHJcbiAgYmFyY29kZUZvcm1hdDogU2NhblR5cGVzO1xyXG4gIGJhcmNvZGVXaWR0aD86IG51bWJlcjtcclxuICBiYXJjb2RlSGVpZ2h0PzogbnVtYmVyO1xyXG4gIGhtc0J1aWxkQml0bWFwT3B0aW9ucz86IEhNU0J1aWxkQml0bWFwT3B0aW9ucztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEhNU0J1aWxkQml0bWFwT3B0aW9ucyB7XHJcbiAgYml0bWFwTWFyZ2luPzogbnVtYmVyO1xyXG4gIGJpdG1hcENvbG9yPzogQ29sb3JzO1xyXG4gIGJpdG1hcEJhY2tncm91bmRDb2xvcj86IENvbG9ycztcclxuICBxckVycm9yQ29ycmVjdGlvbkxldmVsPzogRXJyb3JDb3JyZWN0aW9uTGV2ZWwsXHJcbiAgcXJMb2dvQml0bWFwPzogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXBNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXTtcclxuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xyXG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5Cb3VuZHMge1xyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcclxufVxyXG5leHBvcnQgZW51bSBITVNQZXJtaXNzaW9uIHtcclxuICBDQU1FUkEgPSBcImFuZHJvaWQucGVybWlzc2lvbi5DQU1FUkFcIixcclxuICBSRUFEX0VYVEVSTkFMX1NUT1JBR0UgPSBcImFuZHJvaWQucGVybWlzc2lvbi5SRUFEX0VYVEVSTkFMX1NUT1JBR0VcIlxyXG59XHJcbmV4cG9ydCBlbnVtIEVycm9yQ29ycmVjdGlvbkxldmVsIHtcclxuICBMID0gXCJMXCIsXHJcbiAgTSA9IFwiTVwiLFxyXG4gIFEgPSBcIlFcIixcclxuICBIID0gXCJIXCJcclxufVxyXG5leHBvcnQgZW51bSBDb2xvcnMge1xyXG4gIFJFRCA9IC02NTUzNixcclxuICBES0dSQVkgPSAtMTIzMDMyOTIsXHJcbiAgR1JBWSA9IC03ODI5MzY4LFxyXG4gIFdISVRFID0gLTEsXHJcbiAgQkxVRSA9IC0xNjc3Njk2MSxcclxuICBCTEFDSyA9IC0xNjc3NzIxNixcclxuICBMVEdSQVkgPSAtMzM1NTQ0NCxcclxuICBNQUdFTlRBID0gLTY1MjgxLFxyXG4gIFlFTExPVyA9IC0yNTYsXHJcbiAgQ1lBTiA9IC0xNjcxMTY4MSxcclxuICBHUkVFTiA9IC0xNjcxMTkzNixcclxuICBUUkFOU1BBUkVOVCA9IDBcclxufVxyXG5leHBvcnQgZW51bSBTY2FuVHlwZXMge1xyXG4gIE9USEVSX1NDQU5fVFlQRSA9IC0xLFxyXG4gIEFMTF9TQ0FOX1RZUEUgPSAwLFxyXG4gIENPREUxMjhfU0NBTl9UWVBFID0gNjQsXHJcbiAgQ09ERTM5X1NDQU5fVFlQRSA9IDE2LFxyXG4gIENPREU5M19TQ0FOX1RZUEUgPSAzMixcclxuICBDT0RBQkFSX1NDQU5fVFlQRSA9IDQwOTYsXHJcbiAgREFUQU1BVFJJWF9TQ0FOX1RZUEUgPSA0LFxyXG4gIEVBTjEzX1NDQU5fVFlQRSA9IDEyOCxcclxuICBFQU44X1NDQU5fVFlQRSA9IDI1NixcclxuICBJVEYxNF9TQ0FOX1RZUEUgPSA1MTIsXHJcbiAgUVJDT0RFX1NDQU5fVFlQRSA9IDEsXHJcbiAgVVBDQ09ERV9BX1NDQU5fVFlQRSA9IDEwMjQsXHJcbiAgVVBDQ09ERV9FX1NDQU5fVFlQRSA9IDIwNDgsXHJcbiAgUERGNDE3X1NDQU5fVFlQRSA9IDgsXHJcbiAgQVpURUNfU0NBTl9UWVBFID0gMixcclxufVxyXG5leHBvcnQgZW51bSBSZWN0U3R5bGUge1xyXG4gIFNUUk9LRSA9IDAsXHJcbiAgRklMTCA9IDEsXHJcbiAgRklMTF9BTkRfU1RST0tFID0gMixcclxufVxyXG5cclxuLy9MYXlvdXRcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcclxuICBtYXJnaW5MZWZ0PzogbnVtYmVyLFxyXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgbWFyZ2luTGVmdD86IG51bWJlcixcclxuICBtYXJnaW5SaWdodD86IG51bWJlcixcclxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyLFxyXG4gIHBhZ2VYT2Zmc2V0PzogbnVtYmVyLFxyXG4gIHBhZ2VZT2Zmc2V0PzogbnVtYmVyXHJcbn1cclxuIl19