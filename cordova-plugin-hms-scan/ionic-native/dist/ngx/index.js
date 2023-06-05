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
import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var HMSScan = /** @class */ (function (_super) {
    __extends(HMSScan, _super);
    function HMSScan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether necessary permissions are granted to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.hasPermission = function (permission) { return cordova(this, "hasPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains a permission to use the services.
     * @param  {Permission} permission Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.requestPermission = function (permission) { return cordova(this, "requestPermission", { "otherPromise": true }, arguments); };
    ;
    /**
     * Obtains a permissions to use the services.
     * @param  {Permission[]} permissions Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.requestPermissions = function (permissions) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * Enables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSScan.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    /**
     * Disables the HMSLogger capability which is used for sending usage analytics of Scan SDK's methods to improve the service quality.
     * @returns Promise<any>
     */
    HMSScan.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format..
     * @param  {number} viewType Sets the scanning UI title.
     * @param  {boolean} errorCheck Sets the error listener.
     * @returns Promise<any>
     */
    HMSScan.prototype.defaultViewMode = function (scanTypes, viewType, errorCheck) { return cordova(this, "defaultViewMode", { "otherPromise": true }, arguments); };
    /**
     * This service works asynchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.analyzInAsyn = function (filePath, scanTypes) { return cordova(this, "analyzInAsyn", { "otherPromise": true }, arguments); };
    /**
     * This service works synchronously, defines the bitmap given as a parameter, and returns the Scan results.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.analyseFrame = function (filePath, scanTypes) { return cordova(this, "analyseFrame", { "otherPromise": true }, arguments); };
    /**
     * The service recognition scanning barcodes from images in Bitmap mode.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.decodeWithBitmap = function (filePath, scanTypes) { return cordova(this, "decodeWithBitmap", { "otherPromise": true }, arguments); };
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec. Besides a character string, you still need to specify the format and size for generating a barcode.
     * @param  {BuildBitmapRequest} buildBitmapRequest Contains the settings of the barcode generation service.
     * @returns Promise<any>
     */
    HMSScan.prototype.buildBitmap = function (buildBitmapRequest) { return cordova(this, "buildBitmap", { "otherPromise": true }, arguments); };
    /**
     * Obtains the bitmap from the corresponding file path, performs sampling rate compression, and returns the bitmap that meets the size requirements.
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {ScanTypes[]} scanTypes Sets the barcode scanning format.
     * @returns Promise<any>
     */
    HMSScan.prototype.detectForHmsDector = function (filePath, scanTypes) { return cordova(this, "detectForHmsDector", { "otherPromise": true }, arguments); };
    Object.defineProperty(HMSScan.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: false,
        configurable: true
    });
    HMSScan.pluginName = "HMSScan";
    HMSScan.plugin = "cordova-plugin-hms-scan";
    HMSScan.pluginRef = "HMSScan";
    HMSScan.platforms = ["Android"];
    HMSScan.decorators = [
        { type: Injectable }
    ];
    return HMSScan;
}(IonicNativePlugin));
export { HMSScan };
var MultiProcessor = /** @class */ (function (_super) {
    __extends(MultiProcessor, _super);
    function MultiProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
      * The service process of using the MultiProcessor mode in synchronous mode.
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    MultiProcessor.prototype.multiProcessorSynMode = function (divId, multiProcessorSynModeRequest) { return cordova(this, "multiProcessorSynMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor mode in asynchronous mode
      * @param  {string} divId ScanArea
      * @param  {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @returns Promise<any>
     */
    MultiProcessor.prototype.multiProcessorAsynMode = function (divId, multiProcessorAsynModeRequest) { return cordova(this, "multiProcessorAsynMode", { "otherPromise": true }, arguments); };
    /**
     * It recognizes barcodes using the camera in Bitmap mode.
     * @param  {string} divId ScanArea
     * @param  {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    MultiProcessor.prototype.bitmapMode = function (divId, bitmapModeRequest) { return cordova(this, "bitmapMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    MultiProcessor.prototype.on = function (eventName, call) { return cordova(this, "on", {}, arguments); };
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    MultiProcessor.prototype.stopViewService = function () { return cordova(this, "stopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(MultiProcessor.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: false,
        configurable: true
    });
    MultiProcessor.pluginName = "MultiProcessor";
    MultiProcessor.plugin = "cordova-plugin-hms-scan";
    MultiProcessor.pluginRef = "MultiProcessor";
    MultiProcessor.platforms = ["Android"];
    MultiProcessor.decorators = [
        { type: Injectable }
    ];
    return MultiProcessor;
}(IonicNativePlugin));
export { MultiProcessor };
var CustomView = /** @class */ (function (_super) {
    __extends(CustomView, _super);
    function CustomView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param  {string} divId ScanArea
     * @param  {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    CustomView.prototype.customViewMode = function (divId, customViewModeRequest) { return cordova(this, "customViewMode", { "otherPromise": true }, arguments); };
    /**
     * It opens flush light.
     * @returns Promise<any>
     */
    CustomView.prototype.openFlushLight = function () { return cordova(this, "openFlushLight", { "otherPromise": true }, arguments); };
    /**
     * It pause the continuously scan.
     * @returns Promise<any>
     */
    CustomView.prototype.pauseContinuouslyScan = function () { return cordova(this, "pauseContinuouslyScan", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor and bitmap mode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    CustomView.prototype.on = function (eventName, call) { return cordova(this, "on", {}, arguments); };
    /**
     * It resume the continuously scan.
     * @returns Promise<any>
     */
    CustomView.prototype.resumeContinuouslyScan = function () { return cordova(this, "resumeContinuouslyScan", { "otherPromise": true }, arguments); };
    /**
     * It stops the custom view mode service.
     * @returns Promise<any>
     */
    CustomView.prototype.stopViewService = function () { return cordova(this, "stopViewService", { "otherPromise": true }, arguments); };
    Object.defineProperty(CustomView.prototype, "Colors", {
        get: function () { return cordovaPropertyGet(this, "Colors"); },
        set: function (value) { cordovaPropertySet(this, "Colors", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: false,
        configurable: true
    });
    CustomView.pluginName = "CustomView";
    CustomView.plugin = "cordova-plugin-hms-scan";
    CustomView.pluginRef = "CustomView";
    CustomView.platforms = ["Android"];
    CustomView.decorators = [
        { type: Injectable }
    ];
    return CustomView;
}(IonicNativePlugin));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOztJQVU1RCwyQkFBaUI7Ozs7SUFlNUM7Ozs7T0FJRztJQUNILCtCQUFhLGFBQUMsVUFBeUI7SUFFdEMsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxtQ0FBaUIsYUFBQyxVQUF5QjtJQUUxQyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG9DQUFrQixhQUFDLFdBQTRCO0lBRTlDLENBQUM7SUFFRjs7O09BR0c7SUFDSCw4QkFBWTtJQUlaOzs7T0FHRztJQUNILCtCQUFhO0lBS2I7Ozs7OztPQU1HO0lBQ0gsaUNBQWUsYUFBQyxTQUFzQixFQUFFLFFBQWdCLEVBQUUsVUFBbUI7SUFJN0U7Ozs7O09BS0c7SUFDSCw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLckQ7Ozs7O09BS0c7SUFDSCw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLckQ7Ozs7O09BS0c7SUFDSCxrQ0FBZ0IsYUFBQyxRQUFnQixFQUFFLFNBQXNCO0lBS3pEOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLGtCQUFzQztJQUtsRDs7Ozs7T0FLRztJQUNILG9DQUFrQixhQUFDLFFBQWdCLEVBQUUsU0FBc0I7MEJBcEgzRCwyQkFBTTs7Ozs7OzBCQUVOLDhCQUFTOzs7Ozs7MEJBRVQsOEJBQVM7Ozs7OzswQkFFVCwrQkFBVTs7Ozs7OzBCQUVWLHlDQUFvQjs7Ozs7Ozs7Ozs7Z0JBWnJCLFVBQVU7O2tCQTFCWDtFQTJCNkIsaUJBQWlCO1NBQWpDLE9BQU87O0lBbUlnQixrQ0FBaUI7Ozs7SUFjbkQ7Ozs7O09BS0c7SUFDSCw4Q0FBcUIsYUFBQyxLQUFhLEVBQUUsNEJBQXVEO0lBSzVGOzs7OztPQUtHO0lBQ0gsK0NBQXNCLGFBQUMsS0FBYSxFQUFFLDZCQUF3RDtJQUs5Rjs7Ozs7T0FLRztJQUNILG1DQUFVLGFBQUMsS0FBYSxFQUFFLGlCQUFvQztJQUs5RDs7Ozs7T0FLRztJQUNILDJCQUFFLGFBQUMsU0FBaUIsRUFBRSxJQUEwQjtJQUtoRDs7O09BR0c7SUFDSCx3Q0FBZTswQkEzRGYsa0NBQU07Ozs7OzswQkFFTixxQ0FBUzs7Ozs7OzBCQUVULHFDQUFTOzs7Ozs7MEJBRVQsc0NBQVU7Ozs7OzswQkFFVixnREFBb0I7Ozs7Ozs7Ozs7O2dCQVpyQixVQUFVOzt5QkE3Slg7RUE4Sm9DLGlCQUFpQjtTQUF4QyxjQUFjOztJQTJFSyw4QkFBaUI7Ozs7SUFjL0M7Ozs7O09BS0c7SUFDSCxtQ0FBYyxhQUFDLEtBQWEsRUFBRSxxQkFBNEM7SUFLMUU7OztPQUdHO0lBQ0gsbUNBQWM7SUFLZDs7O09BR0c7SUFDSCwwQ0FBcUI7SUFLckI7Ozs7O09BS0c7SUFDSCx1QkFBRSxhQUFDLFNBQWlCLEVBQUUsSUFBMEI7SUFLaEQ7OztPQUdHO0lBQ0gsMkNBQXNCO0lBS3RCOzs7T0FHRztJQUNILG9DQUFlOzBCQWhFZiw4QkFBTTs7Ozs7OzBCQUVOLGlDQUFTOzs7Ozs7MEJBRVQsaUNBQVM7Ozs7OzswQkFFVCxrQ0FBVTs7Ozs7OzBCQUVWLDRDQUFvQjs7Ozs7Ozs7Ozs7Z0JBWnJCLFVBQVU7O3FCQXhPWDtFQXlPZ0MsaUJBQWlCO1NBQXBDLFVBQVU7QUFvSHZCLE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIscURBQW9DLENBQUE7SUFDcEMsbUZBQWtFLENBQUE7QUFDcEUsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBQ0QsTUFBTSxDQUFOLElBQVksb0JBS1g7QUFMRCxXQUFZLG9CQUFvQjtJQUM5QiwrQkFBTyxDQUFBO0lBQ1AsK0JBQU8sQ0FBQTtJQUNQLCtCQUFPLENBQUE7SUFDUCwrQkFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFLL0I7QUFDRCxNQUFNLENBQU4sSUFBWSxNQWFYO0FBYkQsV0FBWSxNQUFNO0lBQ2hCLHNDQUFZLENBQUE7SUFDWiwrQ0FBa0IsQ0FBQTtJQUNsQiwwQ0FBZSxDQUFBO0lBQ2Ysc0NBQVUsQ0FBQTtJQUNWLDJDQUFnQixDQUFBO0lBQ2hCLDZDQUFpQixDQUFBO0lBQ2pCLDhDQUFpQixDQUFBO0lBQ2pCLDhDQUFnQixDQUFBO0lBQ2hCLDBDQUFhLENBQUE7SUFDYiwyQ0FBZ0IsQ0FBQTtJQUNoQiw2Q0FBaUIsQ0FBQTtJQUNqQixpREFBZSxDQUFBO0FBQ2pCLENBQUMsRUFiVyxNQUFNLEtBQU4sTUFBTSxRQWFqQjtBQUNELE1BQU0sQ0FBTixJQUFZLFNBZ0JYO0FBaEJELFdBQVksU0FBUztJQUNuQixnRUFBb0IsQ0FBQTtJQUNwQiwyREFBaUIsQ0FBQTtJQUNqQixvRUFBc0IsQ0FBQTtJQUN0QixrRUFBcUIsQ0FBQTtJQUNyQixrRUFBcUIsQ0FBQTtJQUNyQixzRUFBd0IsQ0FBQTtJQUN4Qix5RUFBd0IsQ0FBQTtJQUN4QixpRUFBcUIsQ0FBQTtJQUNyQiwrREFBb0IsQ0FBQTtJQUNwQixpRUFBcUIsQ0FBQTtJQUNyQixpRUFBb0IsQ0FBQTtJQUNwQiwwRUFBMEIsQ0FBQTtJQUMxQiwwRUFBMEIsQ0FBQTtJQUMxQixpRUFBb0IsQ0FBQTtJQUNwQiwrREFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBaEJXLFNBQVMsS0FBVCxTQUFTLFFBZ0JwQjtBQUNELE1BQU0sQ0FBTixJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDbkIsNkNBQVUsQ0FBQTtJQUNWLHlDQUFRLENBQUE7SUFDUiwrREFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdITVNTY2FuJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnSE1TU2NhbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBITVNTY2FuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBDb2xvcnMgPSBDb2xvcnM7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XG5cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIGFyZSBncmFudGVkIHRvIHVzZSB0aGUgc2VydmljZXMuXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXG4gICAqL1xuICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfTtcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIE9idGFpbnMgYSBwZXJtaXNzaW9uIHRvIHVzZSB0aGUgc2VydmljZXMuXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfTtcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIE9idGFpbnMgYSBwZXJtaXNzaW9ucyB0byB1c2UgdGhlIHNlcnZpY2VzLlxuICAgKiBAcGFyYW0gIHtQZXJtaXNzaW9uW119IHBlcm1pc3Npb25zIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICByZXF1ZXN0UGVybWlzc2lvbnMocGVybWlzc2lvbnM6IEhNU1Blcm1pc3Npb25bXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9O1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogRW5hYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgU2NhbiBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBITVNMb2dnZXIgY2FwYWJpbGl0eSB3aGljaCBpcyB1c2VkIGZvciBzZW5kaW5nIHVzYWdlIGFuYWx5dGljcyBvZiBTY2FuIFNESydzIG1ldGhvZHMgdG8gaW1wcm92ZSB0aGUgc2VydmljZSBxdWFsaXR5LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogSW4gRGVmYXVsdCBWaWV3IG1vZGUsIFNjYW4gS2l0IHNjYW5zIGJhcmNvZGVzIHVzaW5nIHRoZSBjYW1lcmEgb3IgZnJvbSBpbWFnZXMgaW4gdGhlIGFsYnVtLCBhbmQgYWxzbyBwcm92aWRlcyBhY3Rpdml0aWVzIHRoYXQgY2FuIGJlIGRpcmVjdGx5IHVzZWQuXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuLlxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHZpZXdUeXBlIFNldHMgdGhlIHNjYW5uaW5nIFVJIHRpdGxlLlxuICAgKiBAcGFyYW0gIHtib29sZWFufSBlcnJvckNoZWNrIFNldHMgdGhlIGVycm9yIGxpc3RlbmVyLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGRlZmF1bHRWaWV3TW9kZShzY2FuVHlwZXM6IFNjYW5UeXBlc1tdLCB2aWV3VHlwZTogbnVtYmVyLCBlcnJvckNoZWNrOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIFRoaXMgc2VydmljZSB3b3JrcyBhc3luY2hyb25vdXNseSwgZGVmaW5lcyB0aGUgYml0bWFwIGdpdmVuIGFzIGEgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyB0aGUgU2NhbiByZXN1bHRzLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGFuYWx5ekluQXN5bihmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogVGhpcyBzZXJ2aWNlIHdvcmtzIHN5bmNocm9ub3VzbHksIGRlZmluZXMgdGhlIGJpdG1hcCBnaXZlbiBhcyBhIHBhcmFtZXRlciwgYW5kIHJldHVybnMgdGhlIFNjYW4gcmVzdWx0cy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBhbmFseXNlRnJhbWUoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIFRoZSBzZXJ2aWNlIHJlY29nbml0aW9uIHNjYW5uaW5nIGJhcmNvZGVzIGZyb20gaW1hZ2VzIGluIEJpdG1hcCBtb2RlLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGRlY29kZVdpdGhCaXRtYXAoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIFNjYW4gS2l0IGNhbiBjb252ZXJ0IGNoYXJhY3RlciBzdHJpbmdzIGludG8gMUQgb3IgMkQgYmFyY29kZXMgaW4gMTMgZm9ybWF0cywgaW5jbHVkaW5nIEVBTi04LCBFQU4tMTMsIFVQQy1BLCBVUEMtRSwgQ29kYWJhciwgQ29kZSAzOSwgQ29kZSA5MywgQ29kZSAxMjgsIElURiwgUVIgY29kZSwgRGF0YSBNYXRyaXgsIFBERjQxNywgYW5kIEF6dGVjLiBCZXNpZGVzIGEgY2hhcmFjdGVyIHN0cmluZywgeW91IHN0aWxsIG5lZWQgdG8gc3BlY2lmeSB0aGUgZm9ybWF0IGFuZCBzaXplIGZvciBnZW5lcmF0aW5nIGEgYmFyY29kZS5cbiAgICogQHBhcmFtICB7QnVpbGRCaXRtYXBSZXF1ZXN0fSBidWlsZEJpdG1hcFJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBiYXJjb2RlIGdlbmVyYXRpb24gc2VydmljZS5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBidWlsZEJpdG1hcChidWlsZEJpdG1hcFJlcXVlc3Q6IEJ1aWxkQml0bWFwUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIE9idGFpbnMgdGhlIGJpdG1hcCBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgcGF0aCwgcGVyZm9ybXMgc2FtcGxpbmcgcmF0ZSBjb21wcmVzc2lvbiwgYW5kIHJldHVybnMgdGhlIGJpdG1hcCB0aGF0IG1lZXRzIHRoZSBzaXplIHJlcXVpcmVtZW50cy5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cbiAgICogQHBhcmFtICB7U2NhblR5cGVzW119IHNjYW5UeXBlcyBTZXRzIHRoZSBiYXJjb2RlIHNjYW5uaW5nIGZvcm1hdC5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBkZXRlY3RGb3JIbXNEZWN0b3IoZmlsZVBhdGg6IHN0cmluZywgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTXVsdGlQcm9jZXNzb3InLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdNdWx0aVByb2Nlc3NvcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlQcm9jZXNzb3IgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENvbG9ycyA9IENvbG9ycztcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIG1vZGUgaW4gc3luY2hyb25vdXMgbW9kZS5cbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXG4gICAgKiBAcGFyYW0gIHtNdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0fSBtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlIHNlcnZpY2UuXG4gICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIG11bHRpUHJvY2Vzc29yU3luTW9kZShkaXZJZDogc3RyaW5nLCBtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICAvKipcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgbW9kZSBpbiBhc3luY2hyb25vdXMgbW9kZVxuICAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcbiAgICAqIEBwYXJhbSAge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cbiAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgbXVsdGlQcm9jZXNzb3JBc3luTW9kZShkaXZJZDogc3RyaW5nLCBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlUmVxdWVzdDogTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEl0IHJlY29nbml6ZXMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBpbiBCaXRtYXAgbW9kZS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcbiAgICogQHBhcmFtICB7Qml0bWFwTW9kZVJlcXVlc3R9IGJpdG1hcE1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgQml0bWFwTW9kZSBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIGJpdG1hcE1vZGUoZGl2SWQ6IHN0cmluZywgYml0bWFwTW9kZVJlcXVlc3Q6IEJpdG1hcE1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIC8qKlxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBhbmQgYml0bWFwIG1vZGVcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWUuIFxuICAgICogQHBhcmFtICB7KHZhbHVlOiBhbnkpID0+IHZvaWR9IGNhbGwgTWV0aG9kLlxuICAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEl0IHN0b3BzIHRoZSBjdXN0b20gdmlldyBtb2RlIHNlcnZpY2UuXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgc3RvcFZpZXdTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDdXN0b21WaWV3JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnQ3VzdG9tVmlldycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tVmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgQ29sb3JzID0gQ29sb3JzO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBJbiBDdXN0b21pemVkIFZpZXcgbW9kZSwgeW91IGRvIG5vdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGRldmVsb3BpbmcgdGhlIHNjYW5uaW5nIHByb2Nlc3Mgb3IgY2FtZXJhIGNvbnRyb2wuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXG4gICAqIEBwYXJhbSAge0N1c3RvbVZpZXdNb2RlUmVxdWVzdH0gY3VzdG9tVmlld01vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgY3VzdG9tVmlld01vZGUgc2VydmljZS5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBjdXN0b21WaWV3TW9kZShkaXZJZDogc3RyaW5nLCBjdXN0b21WaWV3TW9kZVJlcXVlc3Q6IEN1c3RvbVZpZXdNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEl0IG9wZW5zIGZsdXNoIGxpZ2h0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIG9wZW5GbHVzaExpZ2h0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEl0IHBhdXNlIHRoZSBjb250aW51b3VzbHkgc2Nhbi5cbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAqL1xuICBwYXVzZUNvbnRpbnVvdXNseVNjYW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIC8qKlxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBhbmQgYml0bWFwIG1vZGVcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWUuIFxuICAgICogQHBhcmFtICB7KHZhbHVlOiBhbnkpID0+IHZvaWR9IGNhbGwgTWV0aG9kLlxuICAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgLyoqXG4gICAqIEl0IHJlc3VtZSB0aGUgY29udGludW91c2x5IHNjYW4uXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxuICAgKi9cbiAgcmVzdW1lQ29udGludW91c2x5U2NhbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIC8qKlxuICAgKiBJdCBzdG9wcyB0aGUgY3VzdG9tIHZpZXcgbW9kZSBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICovXG4gIHN0b3BWaWV3U2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVZpZXdNb2RlUmVxdWVzdCB7XG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XG4gIGlzQ29udGludW91c2x5U2Nhbj86IGJvb2xlYW47XG4gIGVuYWJsZVJldHVybkJpdG1hcD86IGJvb2xlYW47XG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCB7XG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcbiAgZW5hYmxlRHJhd1NjYW5SZXN1bHQ/OiBib29sZWFuO1xuICB2aWV3QXR0cmlidXRlcz86IFZpZXdBdHRyaWJ1dGVzO1xufVxuZXhwb3J0IGludGVyZmFjZSBWaWV3QXR0cmlidXRlcyB7XG4gIHRleHRDb2xvcj86IENvbG9ycztcbiAgdGV4dFNpemU/OiBudW1iZXI7XG4gIHN0cm9rZVdpdGRoPzogbnVtYmVyO1xuICByZWN0Q29sb3I/OiBDb2xvcnM7XG4gIHJlY3RTdHlsZT86IFJlY3RTdHlsZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRCaXRtYXBSZXF1ZXN0IHtcbiAgaW5wdXRDb250ZW50OiBzdHJpbmc7XG4gIGJhcmNvZGVGb3JtYXQ6IFNjYW5UeXBlcztcbiAgYmFyY29kZVdpZHRoPzogbnVtYmVyO1xuICBiYXJjb2RlSGVpZ2h0PzogbnVtYmVyO1xuICBobXNCdWlsZEJpdG1hcE9wdGlvbnM/OiBITVNCdWlsZEJpdG1hcE9wdGlvbnM7XG59XG5leHBvcnQgaW50ZXJmYWNlIEhNU0J1aWxkQml0bWFwT3B0aW9ucyB7XG4gIGJpdG1hcE1hcmdpbj86IG51bWJlcjtcbiAgYml0bWFwQ29sb3I/OiBDb2xvcnM7XG4gIGJpdG1hcEJhY2tncm91bmRDb2xvcj86IENvbG9ycztcbiAgcXJFcnJvckNvcnJlY3Rpb25MZXZlbD86IEVycm9yQ29ycmVjdGlvbkxldmVsLFxuICBxckxvZ29CaXRtYXA/OiBzdHJpbmdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwTW9kZVJlcXVlc3Qge1xuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdO1xuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xuICBlbmFibGVTY2FuQXJlYUJveD86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNjYW5Cb3VuZHMge1xuICBtYXJnaW5Ub3A/OiBudW1iZXIsXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlclxufVxuZXhwb3J0IGVudW0gSE1TUGVybWlzc2lvbiB7XG4gIENBTUVSQSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLFxuICBSRUFEX0VYVEVSTkFMX1NUT1JBR0UgPSBcImFuZHJvaWQucGVybWlzc2lvbi5SRUFEX0VYVEVSTkFMX1NUT1JBR0VcIlxufVxuZXhwb3J0IGVudW0gRXJyb3JDb3JyZWN0aW9uTGV2ZWwge1xuICBMID0gXCJMXCIsXG4gIE0gPSBcIk1cIixcbiAgUSA9IFwiUVwiLFxuICBIID0gXCJIXCJcbn1cbmV4cG9ydCBlbnVtIENvbG9ycyB7XG4gIFJFRCA9IC02NTUzNixcbiAgREtHUkFZID0gLTEyMzAzMjkyLFxuICBHUkFZID0gLTc4MjkzNjgsXG4gIFdISVRFID0gLTEsXG4gIEJMVUUgPSAtMTY3NzY5NjEsXG4gIEJMQUNLID0gLTE2Nzc3MjE2LFxuICBMVEdSQVkgPSAtMzM1NTQ0NCxcbiAgTUFHRU5UQSA9IC02NTI4MSxcbiAgWUVMTE9XID0gLTI1NixcbiAgQ1lBTiA9IC0xNjcxMTY4MSxcbiAgR1JFRU4gPSAtMTY3MTE5MzYsXG4gIFRSQU5TUEFSRU5UID0gMFxufVxuZXhwb3J0IGVudW0gU2NhblR5cGVzIHtcbiAgT1RIRVJfU0NBTl9UWVBFID0gLTEsXG4gIEFMTF9TQ0FOX1RZUEUgPSAwLFxuICBDT0RFMTI4X1NDQU5fVFlQRSA9IDY0LFxuICBDT0RFMzlfU0NBTl9UWVBFID0gMTYsXG4gIENPREU5M19TQ0FOX1RZUEUgPSAzMixcbiAgQ09EQUJBUl9TQ0FOX1RZUEUgPSA0MDk2LFxuICBEQVRBTUFUUklYX1NDQU5fVFlQRSA9IDQsXG4gIEVBTjEzX1NDQU5fVFlQRSA9IDEyOCxcbiAgRUFOOF9TQ0FOX1RZUEUgPSAyNTYsXG4gIElURjE0X1NDQU5fVFlQRSA9IDUxMixcbiAgUVJDT0RFX1NDQU5fVFlQRSA9IDEsXG4gIFVQQ0NPREVfQV9TQ0FOX1RZUEUgPSAxMDI0LFxuICBVUENDT0RFX0VfU0NBTl9UWVBFID0gMjA0OCxcbiAgUERGNDE3X1NDQU5fVFlQRSA9IDgsXG4gIEFaVEVDX1NDQU5fVFlQRSA9IDIsXG59XG5leHBvcnQgZW51bSBSZWN0U3R5bGUge1xuICBTVFJPS0UgPSAwLFxuICBGSUxMID0gMSxcbiAgRklMTF9BTkRfU1RST0tFID0gMixcbn1cblxuLy9MYXlvdXRcblxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRCb3VuZHMge1xuICBtYXJnaW5MZWZ0PzogbnVtYmVyLFxuICBtYXJnaW5SaWdodD86IG51bWJlcixcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIG1hcmdpbkxlZnQ/OiBudW1iZXIsXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlcixcbiAgcGFnZVhPZmZzZXQ/OiBudW1iZXIsXG4gIHBhZ2VZT2Zmc2V0PzogbnVtYmVyXG59Il19