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
     * The service recognition scanning barcodes from images in Bitmap or YuvImage mode.
     * @param  {scanFrameOptions} scanFrameOptions Contains the settings of the barcode scanning
     * @param  {string} filePath The URI of the photo requested to be scanned by the service.
     * @param  {string} divId ScanArea
     * @param  {DecodeModeRequest} decodeModeRequest Contains the settings of the decodeMode service.
     * @returns Promise<any>
     */
    HMSScan.prototype.decode = function (scanFrameOptions, filePath, divId, customProps) { return cordova(this, "decode", { "otherPromise": true }, arguments); };
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
    /**
     * The service process of using the decode
      * @param  {string} eventName Event name.
      * @param  {(value: any) => void} call Method.
      * @returns void
     */
    HMSScan.prototype.decodeOn = function (eventName, call) { return cordova(this, "decodeOn", {}, arguments); };
    /**
     * It stops the view mode service.
     * @returns Promise<any>
     */
    HMSScan.prototype.decodeStopViewService = function () { return cordova(this, "decodeStopViewService", { "otherPromise": true }, arguments); };
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
    ScanTypes[ScanTypes["MULTI_FUNCTIONAL_SCAN_TYPE"] = 8192] = "MULTI_FUNCTIONAL_SCAN_TYPE";
})(ScanTypes || (ScanTypes = {}));
export var RectStyle;
(function (RectStyle) {
    RectStyle[RectStyle["STROKE"] = 0] = "STROKE";
    RectStyle[RectStyle["FILL"] = 1] = "FILL";
    RectStyle[RectStyle["FILL_AND_STROKE"] = 2] = "FILL_AND_STROKE";
})(RectStyle || (RectStyle = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL25hdGl2ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDOztJQVU1RCwyQkFBaUI7Ozs7SUFlNUM7Ozs7T0FJRztJQUNILCtCQUFhLGFBQUMsVUFBeUI7SUFFdEMsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxtQ0FBaUIsYUFBQyxVQUF5QjtJQUUxQyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG9DQUFrQixhQUFDLFdBQTRCO0lBRTlDLENBQUM7SUFFRjs7O09BR0c7SUFDSCw4QkFBWTtJQUlaOzs7T0FHRztJQUNILCtCQUFhO0lBS2I7Ozs7OztPQU1HO0lBQ0gsaUNBQWUsYUFBQyxTQUFzQixFQUFFLFFBQWdCLEVBQUUsVUFBbUI7SUFJN0U7Ozs7O09BS0c7SUFDSCw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLckQ7Ozs7O09BS0c7SUFDSCw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLckQ7Ozs7Ozs7T0FPRztJQUNILHdCQUFNLGFBQUUsZ0JBQWtDLEVBQUUsUUFBaUIsRUFBRSxLQUFjLEVBQUUsV0FBK0I7SUFLOUc7Ozs7O09BS0c7SUFDSCxrQ0FBZ0IsYUFBQyxRQUFnQixFQUFFLFNBQXNCO0lBS3pEOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLGtCQUFzQztJQUtsRDs7Ozs7T0FLRztJQUNILG9DQUFrQixhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLM0Q7Ozs7O09BS0c7SUFDSCwwQkFBUSxhQUFDLFNBQWlCLEVBQUUsSUFBMEI7SUFLdEQ7OztPQUdHO0lBQ0gsdUNBQXFCOzBCQXJKckIsMkJBQU07Ozs7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Q25CLDZDQUFVLENBQUE7SUFDVix5Q0FBUSxDQUFBO0lBQ1IsK0RBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjMuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU1NjYW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TU2NhbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TU2NhbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcclxuXHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdoZXRoZXIgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIGFyZSBncmFudGVkIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICogQHBhcmFtICB7UGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgYSBwZXJtaXNzaW9uIHRvIHVzZSB0aGUgc2VydmljZXMuXHJcbiAgICogQHBhcmFtICB7UGVybWlzc2lvbn0gcGVybWlzc2lvbiBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb24ocGVybWlzc2lvbjogSE1TUGVybWlzc2lvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIE9idGFpbnMgYSBwZXJtaXNzaW9ucyB0byB1c2UgdGhlIHNlcnZpY2VzLlxyXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb25bXX0gcGVybWlzc2lvbnMgUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogSE1TUGVybWlzc2lvbltdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgU2NhbiBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBEaXNhYmxlcyB0aGUgSE1TTG9nZ2VyIGNhcGFiaWxpdHkgd2hpY2ggaXMgdXNlZCBmb3Igc2VuZGluZyB1c2FnZSBhbmFseXRpY3Mgb2YgU2NhbiBTREsncyBtZXRob2RzIHRvIGltcHJvdmUgdGhlIHNlcnZpY2UgcXVhbGl0eS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEluIERlZmF1bHQgVmlldyBtb2RlLCBTY2FuIEtpdCBzY2FucyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIG9yIGZyb20gaW1hZ2VzIGluIHRoZSBhbGJ1bSwgYW5kIGFsc28gcHJvdmlkZXMgYWN0aXZpdGllcyB0aGF0IGNhbiBiZSBkaXJlY3RseSB1c2VkLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuLlxyXG4gICAqIEBwYXJhbSAge251bWJlcn0gdmlld1R5cGUgU2V0cyB0aGUgc2Nhbm5pbmcgVUkgdGl0bGUuXHJcbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gZXJyb3JDaGVjayBTZXRzIHRoZSBlcnJvciBsaXN0ZW5lci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWZhdWx0Vmlld01vZGUoc2NhblR5cGVzOiBTY2FuVHlwZXNbXSwgdmlld1R5cGU6IG51bWJlciwgZXJyb3JDaGVjazogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIHdvcmtzIGFzeW5jaHJvbm91c2x5LCBkZWZpbmVzIHRoZSBiaXRtYXAgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIsIGFuZCByZXR1cm5zIHRoZSBTY2FuIHJlc3VsdHMuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGFuYWx5ekluQXN5bihmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIHdvcmtzIHN5bmNocm9ub3VzbHksIGRlZmluZXMgdGhlIGJpdG1hcCBnaXZlbiBhcyBhIHBhcmFtZXRlciwgYW5kIHJldHVybnMgdGhlIFNjYW4gcmVzdWx0cy5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYW5hbHlzZUZyYW1lKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSByZWNvZ25pdGlvbiBzY2FubmluZyBiYXJjb2RlcyBmcm9tIGltYWdlcyBpbiBCaXRtYXAgb3IgWXV2SW1hZ2UgbW9kZS5cclxuICAgKiBAcGFyYW0gIHtzY2FuRnJhbWVPcHRpb25zfSBzY2FuRnJhbWVPcHRpb25zIENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgYmFyY29kZSBzY2FubmluZ1xyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZVBhdGggVGhlIFVSSSBvZiB0aGUgcGhvdG8gcmVxdWVzdGVkIHRvIGJlIHNjYW5uZWQgYnkgdGhlIHNlcnZpY2UuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgKiBAcGFyYW0gIHtEZWNvZGVNb2RlUmVxdWVzdH0gZGVjb2RlTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBkZWNvZGVNb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGVjb2RlKCBzY2FuRnJhbWVPcHRpb25zOiBTY2FuRnJhbWVPcHRpb25zLCBmaWxlUGF0aD86IHN0cmluZywgZGl2SWQ/OiBzdHJpbmcsIGN1c3RvbVByb3BzPzogRGVjb2RlTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSByZWNvZ25pdGlvbiBzY2FubmluZyBiYXJjb2RlcyBmcm9tIGltYWdlcyBpbiBCaXRtYXAgbW9kZS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGVjb2RlV2l0aEJpdG1hcChmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogU2NhbiBLaXQgY2FuIGNvbnZlcnQgY2hhcmFjdGVyIHN0cmluZ3MgaW50byAxRCBvciAyRCBiYXJjb2RlcyBpbiAxMyBmb3JtYXRzLCBpbmNsdWRpbmcgRUFOLTgsIEVBTi0xMywgVVBDLUEsIFVQQy1FLCBDb2RhYmFyLCBDb2RlIDM5LCBDb2RlIDkzLCBDb2RlIDEyOCwgSVRGLCBRUiBjb2RlLCBEYXRhIE1hdHJpeCwgUERGNDE3LCBhbmQgQXp0ZWMuIEJlc2lkZXMgYSBjaGFyYWN0ZXIgc3RyaW5nLCB5b3Ugc3RpbGwgbmVlZCB0byBzcGVjaWZ5IHRoZSBmb3JtYXQgYW5kIHNpemUgZm9yIGdlbmVyYXRpbmcgYSBiYXJjb2RlLlxyXG4gICAqIEBwYXJhbSAge0J1aWxkQml0bWFwUmVxdWVzdH0gYnVpbGRCaXRtYXBSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgYmFyY29kZSBnZW5lcmF0aW9uIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYnVpbGRCaXRtYXAoYnVpbGRCaXRtYXBSZXF1ZXN0OiBCdWlsZEJpdG1hcFJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBPYnRhaW5zIHRoZSBiaXRtYXAgZnJvbSB0aGUgY29ycmVzcG9uZGluZyBmaWxlIHBhdGgsIHBlcmZvcm1zIHNhbXBsaW5nIHJhdGUgY29tcHJlc3Npb24sIGFuZCByZXR1cm5zIHRoZSBiaXRtYXAgdGhhdCBtZWV0cyB0aGUgc2l6ZSByZXF1aXJlbWVudHMuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRldGVjdEZvckhtc0RlY3RvcihmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBkZWNvZGVcclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZS4gXHJcbiAgICAqIEBwYXJhbSAgeyh2YWx1ZTogYW55KSA9PiB2b2lkfSBjYWxsIE1ldGhvZC5cclxuICAgICogQHJldHVybnMgdm9pZFxyXG4gICAqL1xyXG4gIGRlY29kZU9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBzdG9wcyB0aGUgdmlldyBtb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGVjb2RlU3RvcFZpZXdTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ011bHRpUHJvY2Vzc29yJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ011bHRpUHJvY2Vzc29yJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE11bHRpUHJvY2Vzc29yIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIHN5bmNocm9ub3VzIG1vZGUuXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICAqIEBwYXJhbSAge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cclxuICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlKGRpdklkOiBzdHJpbmcsIG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3Q6IE11bHRpUHJvY2Vzc29yTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIGFzeW5jaHJvbm91cyBtb2RlXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICAqIEBwYXJhbSAge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cclxuICAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgbXVsdGlQcm9jZXNzb3JBc3luTW9kZShkaXZJZDogc3RyaW5nLCBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlUmVxdWVzdDogTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHJlY29nbml6ZXMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBpbiBCaXRtYXAgbW9kZS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxyXG4gICAqIEBwYXJhbSAge0JpdG1hcE1vZGVSZXF1ZXN0fSBiaXRtYXBNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIEJpdG1hcE1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBiaXRtYXBNb2RlKGRpdklkOiBzdHJpbmcsIGJpdG1hcE1vZGVSZXF1ZXN0OiBCaXRtYXBNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgYW5kIGJpdG1hcCBtb2RlXHJcbiAgICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWUuIFxyXG4gICAgKiBAcGFyYW0gIHsodmFsdWU6IGFueSkgPT4gdm9pZH0gY2FsbCBNZXRob2QuXHJcbiAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgKi9cclxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbDogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgc3RvcHMgdGhlIGN1c3RvbSB2aWV3IG1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wVmlld1NlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ3VzdG9tVmlldycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdDdXN0b21WaWV3JywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVZpZXcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSW4gQ3VzdG9taXplZCBWaWV3IG1vZGUsIHlvdSBkbyBub3QgbmVlZCB0byB3b3JyeSBhYm91dCBkZXZlbG9waW5nIHRoZSBzY2FubmluZyBwcm9jZXNzIG9yIGNhbWVyYSBjb250cm9sLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGl2SWQgU2NhbkFyZWEgXHJcbiAgICogQHBhcmFtICB7Q3VzdG9tVmlld01vZGVSZXF1ZXN0fSBjdXN0b21WaWV3TW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBjdXN0b21WaWV3TW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGN1c3RvbVZpZXdNb2RlKGRpdklkOiBzdHJpbmcsIGN1c3RvbVZpZXdNb2RlUmVxdWVzdDogQ3VzdG9tVmlld01vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgb3BlbnMgZmx1c2ggbGlnaHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgb3BlbkZsdXNoTGlnaHQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgcGF1c2UgdGhlIGNvbnRpbnVvdXNseSBzY2FuLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHBhdXNlQ29udGludW91c2x5U2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIGFuZCBiaXRtYXAgbW9kZVxyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSBFdmVudCBuYW1lLiBcclxuICAgICogQHBhcmFtICB7KHZhbHVlOiBhbnkpID0+IHZvaWR9IGNhbGwgTWV0aG9kLlxyXG4gICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICovXHJcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHJlc3VtZSB0aGUgY29udGludW91c2x5IHNjYW4uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVzdW1lQ29udGludW91c2x5U2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBzdG9wcyB0aGUgY3VzdG9tIHZpZXcgbW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN0b3BWaWV3U2VydmljZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21WaWV3TW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgaXNDb250aW51b3VzbHlTY2FuPzogYm9vbGVhbjtcclxuICBlbmFibGVSZXR1cm5CaXRtYXA/OiBib29sZWFuO1xyXG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcclxuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlQcm9jZXNzb3JNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBzY2FuRnJhbWVTaXplPzogbnVtYmVyO1xyXG4gIGVuYWJsZVNjYW5BcmVhQm94PzogYm9vbGVhbjtcclxuICBlbmFibGVEcmF3U2NhblJlc3VsdD86IGJvb2xlYW47XHJcbiAgdmlld0F0dHJpYnV0ZXM/OiBWaWV3QXR0cmlidXRlcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERlY29kZU1vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG4gIGVuYWJsZURyYXdTY2FuUmVzdWx0PzogYm9vbGVhbjtcclxuICB2aWV3QXR0cmlidXRlcz86IFZpZXdBdHRyaWJ1dGVzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlld0F0dHJpYnV0ZXMge1xyXG4gIHRleHRDb2xvcj86IENvbG9ycztcclxuICB0ZXh0U2l6ZT86IG51bWJlcjtcclxuICBzdHJva2VXaXRkaD86IG51bWJlcjtcclxuICByZWN0Q29sb3I/OiBDb2xvcnM7XHJcbiAgcmVjdFN0eWxlPzogUmVjdFN0eWxlO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NhbkZyYW1lT3B0aW9ucyB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBtdWx0aU1vZGU6IGJvb2xlYW47XHJcbiAgcGFyc2VSZXN1bHQ6IGJvb2xlYW47XHJcbiAgcGhvdG9Nb2RlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQnVpbGRCaXRtYXBSZXF1ZXN0IHtcclxuICBpbnB1dENvbnRlbnQ6IHN0cmluZztcclxuICBiYXJjb2RlRm9ybWF0OiBTY2FuVHlwZXM7XHJcbiAgYmFyY29kZVdpZHRoPzogbnVtYmVyO1xyXG4gIGJhcmNvZGVIZWlnaHQ/OiBudW1iZXI7XHJcbiAgaG1zQnVpbGRCaXRtYXBPcHRpb25zPzogSE1TQnVpbGRCaXRtYXBPcHRpb25zO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSE1TQnVpbGRCaXRtYXBPcHRpb25zIHtcclxuICBiaXRtYXBNYXJnaW4/OiBudW1iZXI7XHJcbiAgYml0bWFwQ29sb3I/OiBDb2xvcnM7XHJcbiAgYml0bWFwQmFja2dyb3VuZENvbG9yPzogQ29sb3JzO1xyXG4gIHFyRXJyb3JDb3JyZWN0aW9uTGV2ZWw/OiBFcnJvckNvcnJlY3Rpb25MZXZlbCxcclxuICBxckxvZ29CaXRtYXA/OiBzdHJpbmdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcE1vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdO1xyXG4gIHNjYW5GcmFtZVNpemU/OiBudW1iZXI7XHJcbiAgZW5hYmxlU2NhbkFyZWFCb3g/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2NhbkJvdW5kcyB7XHJcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlclxyXG59XHJcbmV4cG9ydCBlbnVtIEhNU1Blcm1pc3Npb24ge1xyXG4gIENBTUVSQSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQVwiLFxyXG4gIFJFQURfRVhURVJOQUxfU1RPUkFHRSA9IFwiYW5kcm9pZC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRVwiXHJcbn1cclxuZXhwb3J0IGVudW0gRXJyb3JDb3JyZWN0aW9uTGV2ZWwge1xyXG4gIEwgPSBcIkxcIixcclxuICBNID0gXCJNXCIsXHJcbiAgUSA9IFwiUVwiLFxyXG4gIEggPSBcIkhcIlxyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9ycyB7XHJcbiAgUkVEID0gLTY1NTM2LFxyXG4gIERLR1JBWSA9IC0xMjMwMzI5MixcclxuICBHUkFZID0gLTc4MjkzNjgsXHJcbiAgV0hJVEUgPSAtMSxcclxuICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gIEJMQUNLID0gLTE2Nzc3MjE2LFxyXG4gIExUR1JBWSA9IC0zMzU1NDQ0LFxyXG4gIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgWUVMTE9XID0gLTI1NixcclxuICBDWUFOID0gLTE2NzExNjgxLFxyXG4gIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gIFRSQU5TUEFSRU5UID0gMFxyXG59XHJcbmV4cG9ydCBlbnVtIFNjYW5UeXBlcyB7XHJcbiAgT1RIRVJfU0NBTl9UWVBFID0gLTEsXHJcbiAgQUxMX1NDQU5fVFlQRSA9IDAsXHJcbiAgQ09ERTEyOF9TQ0FOX1RZUEUgPSA2NCxcclxuICBDT0RFMzlfU0NBTl9UWVBFID0gMTYsXHJcbiAgQ09ERTkzX1NDQU5fVFlQRSA9IDMyLFxyXG4gIENPREFCQVJfU0NBTl9UWVBFID0gNDA5NixcclxuICBEQVRBTUFUUklYX1NDQU5fVFlQRSA9IDQsXHJcbiAgRUFOMTNfU0NBTl9UWVBFID0gMTI4LFxyXG4gIEVBTjhfU0NBTl9UWVBFID0gMjU2LFxyXG4gIElURjE0X1NDQU5fVFlQRSA9IDUxMixcclxuICBRUkNPREVfU0NBTl9UWVBFID0gMSxcclxuICBVUENDT0RFX0FfU0NBTl9UWVBFID0gMTAyNCxcclxuICBVUENDT0RFX0VfU0NBTl9UWVBFID0gMjA0OCxcclxuICBQREY0MTdfU0NBTl9UWVBFID0gOCxcclxuICBBWlRFQ19TQ0FOX1RZUEUgPSAyLFxyXG4gIE1VTFRJX0ZVTkNUSU9OQUxfU0NBTl9UWVBFID0gODE5MixcclxufVxyXG5leHBvcnQgZW51bSBSZWN0U3R5bGUge1xyXG4gIFNUUk9LRSA9IDAsXHJcbiAgRklMTCA9IDEsXHJcbiAgRklMTF9BTkRfU1RST0tFID0gMixcclxufVxyXG5cclxuLy9MYXlvdXRcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0Qm91bmRzIHtcclxuICBtYXJnaW5MZWZ0PzogbnVtYmVyLFxyXG4gIG1hcmdpblJpZ2h0PzogbnVtYmVyLFxyXG4gIG1hcmdpblRvcD86IG51bWJlcixcclxuICBtYXJnaW5Cb3R0b20/OiBudW1iZXJcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgbWFyZ2luTGVmdD86IG51bWJlcixcclxuICBtYXJnaW5SaWdodD86IG51bWJlcixcclxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyLFxyXG4gIHBhZ2VYT2Zmc2V0PzogbnVtYmVyLFxyXG4gIHBhZ2VZT2Zmc2V0PzogbnVtYmVyXHJcbn1cclxuIl19