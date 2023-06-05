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
})(ScanTypes || (ScanTypes = {}));
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 0] = "STROKE";
    RectStyle[RectStyle["FILL"] = 1] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 2] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBVTVELDJCQUFpQjs7OztJQWU1Qzs7OztPQUlHO0lBQ0gsK0JBQWEsYUFBQyxVQUF5QjtJQUV0QyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG1DQUFpQixhQUFDLFVBQXlCO0lBRTFDLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsb0NBQWtCLGFBQUMsV0FBNEI7SUFFOUMsQ0FBQztJQUVGOzs7T0FHRztJQUNILDhCQUFZO0lBSVo7OztPQUdHO0lBQ0gsK0JBQWE7SUFLYjs7Ozs7O09BTUc7SUFDSCxpQ0FBZSxhQUFDLFNBQXNCLEVBQUUsUUFBZ0IsRUFBRSxVQUFtQjtJQUk3RTs7Ozs7T0FLRztJQUNILDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUtyRDs7Ozs7T0FLRztJQUNILDhCQUFZLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjtJQUtyRDs7Ozs7T0FLRztJQUNILGtDQUFnQixhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLekQ7Ozs7T0FJRztJQUNILDZCQUFXLGFBQUMsa0JBQXNDO0lBS2xEOzs7OztPQUtHO0lBQ0gsb0NBQWtCLGFBQUMsUUFBZ0IsRUFBRSxTQUFzQjswQkFwSDNELDJCQUFNOzs7Ozs7MEJBRU4sOEJBQVM7Ozs7OzswQkFFVCw4QkFBUzs7Ozs7OzBCQUVULCtCQUFVOzs7Ozs7MEJBRVYseUNBQW9COzs7Ozs7Ozs7O2tCQXRDdEI7RUEyQjZCLGlCQUFpQjtTQUFqQyxPQUFPOztJQW1JZ0Isa0NBQWlCOzs7O0lBY25EOzs7OztPQUtHO0lBQ0gsOENBQXFCLGFBQUMsS0FBYSxFQUFFLDRCQUF1RDtJQUs1Rjs7Ozs7T0FLRztJQUNILCtDQUFzQixhQUFDLEtBQWEsRUFBRSw2QkFBd0Q7SUFLOUY7Ozs7O09BS0c7SUFDSCxtQ0FBVSxhQUFDLEtBQWEsRUFBRSxpQkFBb0M7SUFLOUQ7Ozs7O09BS0c7SUFDSCwyQkFBRSxhQUFDLFNBQWlCLEVBQUUsSUFBMEI7SUFLaEQ7OztPQUdHO0lBQ0gsd0NBQWU7MEJBM0RmLGtDQUFNOzs7Ozs7MEJBRU4scUNBQVM7Ozs7OzswQkFFVCxxQ0FBUzs7Ozs7OzBCQUVULHNDQUFVOzs7Ozs7MEJBRVYsZ0RBQW9COzs7Ozs7Ozs7O3lCQXpLdEI7RUE4Sm9DLGlCQUFpQjtTQUF4QyxjQUFjOztJQTJFSyw4QkFBaUI7Ozs7SUFjL0M7Ozs7O09BS0c7SUFDSCxtQ0FBYyxhQUFDLEtBQWEsRUFBRSxxQkFBNEM7SUFLMUU7OztPQUdHO0lBQ0gsbUNBQWM7SUFLZDs7O09BR0c7SUFDSCwwQ0FBcUI7SUFLckI7Ozs7O09BS0c7SUFDSCx1QkFBRSxhQUFDLFNBQWlCLEVBQUUsSUFBMEI7SUFLaEQ7OztPQUdHO0lBQ0gsMkNBQXNCO0lBS3RCOzs7T0FHRztJQUNILG9DQUFlOzBCQWhFZiw4QkFBTTs7Ozs7OzBCQUVOLGlDQUFTOzs7Ozs7MEJBRVQsaUNBQVM7Ozs7OzswQkFFVCxrQ0FBVTs7Ozs7OzBCQUVWLDRDQUFvQjs7Ozs7Ozs7OztxQkFwUHRCO0VBeU9nQyxpQkFBaUI7U0FBcEMsVUFBVTtBQW9IdkIsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixxREFBb0MsQ0FBQTtJQUNwQyxtRkFBa0UsQ0FBQTtBQUNwRSxDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFDRCxNQUFNLENBQU4sSUFBWSxvQkFLWDtBQUxELFdBQVksb0JBQW9CO0lBQzlCLCtCQUFPLENBQUE7SUFDUCwrQkFBTyxDQUFBO0lBQ1AsK0JBQU8sQ0FBQTtJQUNQLCtCQUFPLENBQUE7QUFDVCxDQUFDLEVBTFcsb0JBQW9CLEtBQXBCLG9CQUFvQixRQUsvQjtBQUNELE1BQU0sQ0FBTixJQUFZLE1BYVg7QUFiRCxXQUFZLE1BQU07SUFDaEIsc0NBQVksQ0FBQTtJQUNaLCtDQUFrQixDQUFBO0lBQ2xCLDBDQUFlLENBQUE7SUFDZixzQ0FBVSxDQUFBO0lBQ1YsMkNBQWdCLENBQUE7SUFDaEIsNkNBQWlCLENBQUE7SUFDakIsOENBQWlCLENBQUE7SUFDakIsOENBQWdCLENBQUE7SUFDaEIsMENBQWEsQ0FBQTtJQUNiLDJDQUFnQixDQUFBO0lBQ2hCLDZDQUFpQixDQUFBO0lBQ2pCLGlEQUFlLENBQUE7QUFDakIsQ0FBQyxFQWJXLE1BQU0sS0FBTixNQUFNLFFBYWpCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FnQlg7QUFoQkQsV0FBWSxTQUFTO0lBQ25CLGdFQUFvQixDQUFBO0lBQ3BCLDJEQUFpQixDQUFBO0lBQ2pCLG9FQUFzQixDQUFBO0lBQ3RCLGtFQUFxQixDQUFBO0lBQ3JCLGtFQUFxQixDQUFBO0lBQ3JCLHNFQUF3QixDQUFBO0lBQ3hCLHlFQUF3QixDQUFBO0lBQ3hCLGlFQUFxQixDQUFBO0lBQ3JCLCtEQUFvQixDQUFBO0lBQ3BCLGlFQUFxQixDQUFBO0lBQ3JCLGlFQUFvQixDQUFBO0lBQ3BCLDBFQUEwQixDQUFBO0lBQzFCLDBFQUEwQixDQUFBO0lBQzFCLGlFQUFvQixDQUFBO0lBQ3BCLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFoQlcsU0FBUyxLQUFULFNBQVMsUUFnQnBCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiw2Q0FBVSxDQUFBO0lBQ1YseUNBQVEsQ0FBQTtJQUNSLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjAtMjAyMS4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0hNU1NjYW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdITVNTY2FuJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNU1NjYW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENvbG9ycyA9IENvbG9ycztcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcblxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBuZWNlc3NhcnkgcGVybWlzc2lvbnMgYXJlIGdyYW50ZWQgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cbiAgICogQHBhcmFtICB7UGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcbiAgICovXG4gIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9O1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogT2J0YWlucyBhIHBlcm1pc3Npb24gdG8gdXNlIHRoZSBzZXJ2aWNlcy5cbiAgICogQHBhcmFtICB7UGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgcmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9O1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogT2J0YWlucyBhIHBlcm1pc3Npb25zIHRvIHVzZSB0aGUgc2VydmljZXMuXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb25bXX0gcGVybWlzc2lvbnMgUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIHJlcXVlc3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSE1TUGVybWlzc2lvbltdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH07XG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBFbmFibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBTY2FuIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIFNjYW4gU0RLJ3MgbWV0aG9kcyB0byBpbXByb3ZlIHRoZSBzZXJ2aWNlIHF1YWxpdHkuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBJbiBEZWZhdWx0IFZpZXcgbW9kZSwgU2NhbiBLaXQgc2NhbnMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBvciBmcm9tIGltYWdlcyBpbiB0aGUgYWxidW0sIGFuZCBhbHNvIHByb3ZpZGVzIGFjdGl2aXRpZXMgdGhhdCBjYW4gYmUgZGlyZWN0bHkgdXNlZC5cbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC4uXG4gICAqIEBwYXJhbSAge251bWJlcn0gdmlld1R5cGUgU2V0cyB0aGUgc2Nhbm5pbmcgVUkgdGl0bGUuXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IGVycm9yQ2hlY2sgU2V0cyB0aGUgZXJyb3IgbGlzdGVuZXIuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgZGVmYXVsdFZpZXdNb2RlKHNjYW5UeXBlczogU2NhblR5cGVzW10sIHZpZXdUeXBlOiBudW1iZXIsIGVycm9yQ2hlY2s6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogVGhpcyBzZXJ2aWNlIHdvcmtzIGFzeW5jaHJvbm91c2x5LCBkZWZpbmVzIHRoZSBiaXRtYXAgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIsIGFuZCByZXR1cm5zIHRoZSBTY2FuIHJlc3VsdHMuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgYW5hbHl6SW5Bc3luKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBUaGlzIHNlcnZpY2Ugd29ya3Mgc3luY2hyb25vdXNseSwgZGVmaW5lcyB0aGUgYml0bWFwIGdpdmVuIGFzIGEgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyB0aGUgU2NhbiByZXN1bHRzLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGFuYWx5c2VGcmFtZShmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogVGhlIHNlcnZpY2UgcmVjb2duaXRpb24gc2Nhbm5pbmcgYmFyY29kZXMgZnJvbSBpbWFnZXMgaW4gQml0bWFwIG1vZGUuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgZGVjb2RlV2l0aEJpdG1hcChmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogU2NhbiBLaXQgY2FuIGNvbnZlcnQgY2hhcmFjdGVyIHN0cmluZ3MgaW50byAxRCBvciAyRCBiYXJjb2RlcyBpbiAxMyBmb3JtYXRzLCBpbmNsdWRpbmcgRUFOLTgsIEVBTi0xMywgVVBDLUEsIFVQQy1FLCBDb2RhYmFyLCBDb2RlIDM5LCBDb2RlIDkzLCBDb2RlIDEyOCwgSVRGLCBRUiBjb2RlLCBEYXRhIE1hdHJpeCwgUERGNDE3LCBhbmQgQXp0ZWMuIEJlc2lkZXMgYSBjaGFyYWN0ZXIgc3RyaW5nLCB5b3Ugc3RpbGwgbmVlZCB0byBzcGVjaWZ5IHRoZSBmb3JtYXQgYW5kIHNpemUgZm9yIGdlbmVyYXRpbmcgYSBiYXJjb2RlLlxuICAgKiBAcGFyYW0gIHtCdWlsZEJpdG1hcFJlcXVlc3R9IGJ1aWxkQml0bWFwUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGJhcmNvZGUgZ2VuZXJhdGlvbiBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGJ1aWxkQml0bWFwKGJ1aWxkQml0bWFwUmVxdWVzdDogQnVpbGRCaXRtYXBSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogT2J0YWlucyB0aGUgYml0bWFwIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgZmlsZSBwYXRoLCBwZXJmb3JtcyBzYW1wbGluZyByYXRlIGNvbXByZXNzaW9uLCBhbmQgcmV0dXJucyB0aGUgYml0bWFwIHRoYXQgbWVldHMgdGhlIHNpemUgcmVxdWlyZW1lbnRzLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGRldGVjdEZvckhtc0RlY3RvcihmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNdWx0aVByb2Nlc3NvcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ011bHRpUHJvY2Vzc29yJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNdWx0aVByb2Nlc3NvciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ29sb3JzID0gQ29sb3JzO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgbW9kZSBpbiBzeW5jaHJvbm91cyBtb2RlLlxuICAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcbiAgICAqIEBwYXJhbSAge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cbiAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlKGRpdklkOiBzdHJpbmcsIG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3Q6IE11bHRpUHJvY2Vzc29yTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIGFzeW5jaHJvbm91cyBtb2RlXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxuICAgICogQHBhcmFtICB7TXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdH0gbXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIG11bHRpUHJvY2Vzc29yU3luTW9kZSBzZXJ2aWNlLlxuICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlKGRpdklkOiBzdHJpbmcsIG11bHRpUHJvY2Vzc29yQXN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogSXQgcmVjb2duaXplcyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIGluIEJpdG1hcCBtb2RlLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxuICAgKiBAcGFyYW0gIHtCaXRtYXBNb2RlUmVxdWVzdH0gYml0bWFwTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBCaXRtYXBNb2RlIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgYml0bWFwTW9kZShkaXZJZDogc3RyaW5nLCBiaXRtYXBNb2RlUmVxdWVzdDogQml0bWFwTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgLyoqXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIGFuZCBiaXRtYXAgbW9kZVxuICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZS4gXG4gICAgKiBAcGFyYW0gIHsodmFsdWU6IGFueSkgPT4gdm9pZH0gY2FsbCBNZXRob2QuXG4gICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogSXQgc3RvcHMgdGhlIGN1c3RvbSB2aWV3IG1vZGUgc2VydmljZS5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBzdG9wVmlld1NlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0N1c3RvbVZpZXcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdDdXN0b21WaWV3JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21WaWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBDb2xvcnMgPSBDb2xvcnM7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEluIEN1c3RvbWl6ZWQgVmlldyBtb2RlLCB5b3UgZG8gbm90IG5lZWQgdG8gd29ycnkgYWJvdXQgZGV2ZWxvcGluZyB0aGUgc2Nhbm5pbmcgcHJvY2VzcyBvciBjYW1lcmEgY29udHJvbC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcbiAgICogQHBhcmFtICB7Q3VzdG9tVmlld01vZGVSZXF1ZXN0fSBjdXN0b21WaWV3TW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBjdXN0b21WaWV3TW9kZSBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGN1c3RvbVZpZXdNb2RlKGRpdklkOiBzdHJpbmcsIGN1c3RvbVZpZXdNb2RlUmVxdWVzdDogQ3VzdG9tVmlld01vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogSXQgb3BlbnMgZmx1c2ggbGlnaHQuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgb3BlbkZsdXNoTGlnaHQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogSXQgcGF1c2UgdGhlIGNvbnRpbnVvdXNseSBzY2FuLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIHBhdXNlQ29udGludW91c2x5U2NhbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgLyoqXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIGFuZCBiaXRtYXAgbW9kZVxuICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZS4gXG4gICAgKiBAcGFyYW0gIHsodmFsdWU6IGFueSkgPT4gdm9pZH0gY2FsbCBNZXRob2QuXG4gICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogSXQgcmVzdW1lIHRoZSBjb250aW51b3VzbHkgc2Nhbi5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICByZXN1bWVDb250aW51b3VzbHlTY2FuKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEl0IHN0b3BzIHRoZSBjdXN0b20gdmlldyBtb2RlIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgc3RvcFZpZXdTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tVmlld01vZGVSZXF1ZXN0IHtcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcbiAgaXNDb250aW51b3VzbHlTY2FuPzogYm9vbGVhbjtcbiAgZW5hYmxlUmV0dXJuQml0bWFwPzogYm9vbGVhbjtcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0IHtcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xuICBlbmFibGVEcmF3U2NhblJlc3VsdD86IGJvb2xlYW47XG4gIHZpZXdBdHRyaWJ1dGVzPzogVmlld0F0dHJpYnV0ZXM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZpZXdBdHRyaWJ1dGVzIHtcbiAgdGV4dENvbG9yPzogQ29sb3JzO1xuICB0ZXh0U2l6ZT86IG51bWJlcjtcbiAgc3Ryb2tlV2l0ZGg/OiBudW1iZXI7XG4gIHJlY3RDb2xvcj86IENvbG9ycztcbiAgcmVjdFN0eWxlPzogUmVjdFN0eWxlO1xufVxuZXhwb3J0IGludGVyZmFjZSBCdWlsZEJpdG1hcFJlcXVlc3Qge1xuICBpbnB1dENvbnRlbnQ6IHN0cmluZztcbiAgYmFyY29kZUZvcm1hdDogU2NhblR5cGVzO1xuICBiYXJjb2RlV2lkdGg/OiBudW1iZXI7XG4gIGJhcmNvZGVIZWlnaHQ/OiBudW1iZXI7XG4gIGhtc0J1aWxkQml0bWFwT3B0aW9ucz86IEhNU0J1aWxkQml0bWFwT3B0aW9ucztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSE1TQnVpbGRCaXRtYXBPcHRpb25zIHtcbiAgYml0bWFwTWFyZ2luPzogbnVtYmVyO1xuICBiaXRtYXBDb2xvcj86IENvbG9ycztcbiAgYml0bWFwQmFja2dyb3VuZENvbG9yPzogQ29sb3JzO1xuICBxckVycm9yQ29ycmVjdGlvbkxldmVsPzogRXJyb3JDb3JyZWN0aW9uTGV2ZWwsXG4gIHFyTG9nb0JpdG1hcD86IHN0cmluZ1xufVxuZXhwb3J0IGludGVyZmFjZSBCaXRtYXBNb2RlUmVxdWVzdCB7XG4gIHNjYW5UeXBlczogU2NhblR5cGVzW107XG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2NhbkJvdW5kcyB7XG4gIG1hcmdpblRvcD86IG51bWJlcixcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyXG59XG5leHBvcnQgZW51bSBITVNQZXJtaXNzaW9uIHtcbiAgQ0FNRVJBID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQ0FNRVJBXCIsXG4gIFJFQURfRVhURVJOQUxfU1RPUkFHRSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRVwiXG59XG5leHBvcnQgZW51bSBFcnJvckNvcnJlY3Rpb25MZXZlbCB7XG4gIEwgPSBcIkxcIixcbiAgTSA9IFwiTVwiLFxuICBRID0gXCJRXCIsXG4gIEggPSBcIkhcIlxufVxuZXhwb3J0IGVudW0gQ29sb3JzIHtcbiAgUkVEID0gLTY1NTM2LFxuICBES0dSQVkgPSAtMTIzMDMyOTIsXG4gIEdSQVkgPSAtNzgyOTM2OCxcbiAgV0hJVEUgPSAtMSxcbiAgQkxVRSA9IC0xNjc3Njk2MSxcbiAgQkxBQ0sgPSAtMTY3NzcyMTYsXG4gIExUR1JBWSA9IC0zMzU1NDQ0LFxuICBNQUdFTlRBID0gLTY1MjgxLFxuICBZRUxMT1cgPSAtMjU2LFxuICBDWUFOID0gLTE2NzExNjgxLFxuICBHUkVFTiA9IC0xNjcxMTkzNixcbiAgVFJBTlNQQVJFTlQgPSAwXG59XG5leHBvcnQgZW51bSBTY2FuVHlwZXMge1xuICBPVEhFUl9TQ0FOX1RZUEUgPSAtMSxcbiAgQUxMX1NDQU5fVFlQRSA9IDAsXG4gIENPREUxMjhfU0NBTl9UWVBFID0gNjQsXG4gIENPREUzOV9TQ0FOX1RZUEUgPSAxNixcbiAgQ09ERTkzX1NDQU5fVFlQRSA9IDMyLFxuICBDT0RBQkFSX1NDQU5fVFlQRSA9IDQwOTYsXG4gIERBVEFNQVRSSVhfU0NBTl9UWVBFID0gNCxcbiAgRUFOMTNfU0NBTl9UWVBFID0gMTI4LFxuICBFQU44X1NDQU5fVFlQRSA9IDI1NixcbiAgSVRGMTRfU0NBTl9UWVBFID0gNTEyLFxuICBRUkNPREVfU0NBTl9UWVBFID0gMSxcbiAgVVBDQ09ERV9BX1NDQU5fVFlQRSA9IDEwMjQsXG4gIFVQQ0NPREVfRV9TQ0FOX1RZUEUgPSAyMDQ4LFxuICBQREY0MTdfU0NBTl9UWVBFID0gOCxcbiAgQVpURUNfU0NBTl9UWVBFID0gMixcbn1cbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XG4gIFNUUk9LRSA9IDAsXG4gIEZJTEwgPSAxLFxuICBGSUxMX0FORF9TVFJPS0UgPSAyLFxufVxuXG4vL0xheW91dFxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dEJvdW5kcyB7XG4gIG1hcmdpbkxlZnQ/OiBudW1iZXIsXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlclxufVxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbWFyZ2luTGVmdD86IG51bWJlcixcbiAgbWFyZ2luUmlnaHQ/OiBudW1iZXIsXG4gIG1hcmdpblRvcD86IG51bWJlcixcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyLFxuICBwYWdlWE9mZnNldD86IG51bWJlcixcbiAgcGFnZVlPZmZzZXQ/OiBudW1iZXJcbn0iXX0=