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
import { __decorate, __extends } from "tslib";
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
     * @returns Promise<any>
     */
    HMSScan.prototype.defaultViewMode = function (scanTypes) { return cordova(this, "defaultViewMode", { "otherPromise": true }, arguments); };
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HMSScan.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
        configurable: true
    });
    HMSScan.pluginName = "HMSScan";
    HMSScan.plugin = "cordova-plugin-hms-scan";
    HMSScan.pluginRef = "HMSScan";
    HMSScan.platforms = ["Android"];
    HMSScan = __decorate([
        Injectable()
    ], HMSScan);
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiProcessor.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
        configurable: true
    });
    MultiProcessor.pluginName = "MultiProcessor";
    MultiProcessor.plugin = "cordova-plugin-hms-scan";
    MultiProcessor.pluginRef = "MultiProcessor";
    MultiProcessor.platforms = ["Android"];
    MultiProcessor = __decorate([
        Injectable()
    ], MultiProcessor);
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "ScanTypes", {
        get: function () { return cordovaPropertyGet(this, "ScanTypes"); },
        set: function (value) { cordovaPropertySet(this, "ScanTypes", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "RectStyle", {
        get: function () { return cordovaPropertyGet(this, "RectStyle"); },
        set: function (value) { cordovaPropertySet(this, "RectStyle", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "Permission", {
        get: function () { return cordovaPropertyGet(this, "Permission"); },
        set: function (value) { cordovaPropertySet(this, "Permission", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomView.prototype, "ErrorCorrectionLevel", {
        get: function () { return cordovaPropertyGet(this, "ErrorCorrectionLevel"); },
        set: function (value) { cordovaPropertySet(this, "ErrorCorrectionLevel", value); },
        enumerable: true,
        configurable: true
    });
    CustomView.pluginName = "CustomView";
    CustomView.plugin = "cordova-plugin-hms-scan";
    CustomView.pluginRef = "CustomView";
    CustomView.platforms = ["Android"];
    CustomView = __decorate([
        Injectable()
    ], CustomView);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1zY2FuL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBK0I1RCwyQkFBaUI7Ozs7SUFlNUM7Ozs7T0FJRztJQUNILCtCQUFhLGFBQUMsVUFBeUI7SUFFdEMsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxtQ0FBaUIsYUFBQyxVQUF5QjtJQUUxQyxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG9DQUFrQixhQUFDLFdBQTRCO0lBRTlDLENBQUM7SUFFRjs7O09BR0c7SUFDSCw4QkFBWTtJQUlaOzs7T0FHRztJQUNILCtCQUFhO0lBS2I7Ozs7T0FJRztJQUNILGlDQUFlLGFBQUMsU0FBc0I7SUFJdEM7Ozs7O09BS0c7SUFDSCw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLckQ7Ozs7O09BS0c7SUFDSCw4QkFBWSxhQUFDLFFBQWdCLEVBQUUsU0FBc0I7SUFLckQ7Ozs7O09BS0c7SUFDSCxrQ0FBZ0IsYUFBQyxRQUFnQixFQUFFLFNBQXNCO0lBS3pEOzs7O09BSUc7SUFDSCw2QkFBVyxhQUFDLGtCQUFzQztJQUtsRDs7Ozs7T0FLRztJQUNILG9DQUFrQixhQUFDLFFBQWdCLEVBQUUsU0FBc0I7MEJBbEgzRCwyQkFBTTs7Ozs7OzBCQUVOLDhCQUFTOzs7Ozs7MEJBRVQsOEJBQVM7Ozs7OzswQkFFVCwrQkFBVTs7Ozs7OzBCQUVWLHlDQUFvQjs7Ozs7Ozs7OztJQVhULE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFoRHBCO0VBZ0Q2QixpQkFBaUI7U0FBakMsT0FBTzs7SUFpSWdCLGtDQUFpQjs7OztJQWNu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cmlnaHQgMjAyMC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG4vKipcclxuICogQG5hbWUgSE1TU2NhblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBTY2FuIFBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgSE1TIENvcmUgU2NhbiBTREsgYW5kIENvcmRvdmEgcGxhdGZvcm0uIFRoaXMgcGx1Z2luIGRlbW9uc3RyYXRlcyB3aWRlLXJhbmdpbmcgZnVuY3Rpb25hbGl0eSBvZiB0aGUgSE1TIENvcmUgU2NhbiBTREsuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEhNU1NjYW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2htcy1zY2FuJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBobXNTY2FuOiBITVNTY2FuKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaG1zU2Nhbi5kZWZhdWx0Vmlld01vZGUoUmVxdWVzdClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNTY2FuJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0hNU1NjYW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU1NjYW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENvbG9ycyA9IENvbG9ycztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBTY2FuVHlwZXMgPSBTY2FuVHlwZXM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUmVjdFN0eWxlID0gUmVjdFN0eWxlO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBlcm1pc3Npb24gPSBITVNQZXJtaXNzaW9uO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVycm9yQ29ycmVjdGlvbkxldmVsID0gRXJyb3JDb3JyZWN0aW9uTGV2ZWw7XHJcblxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyBhcmUgZ3JhbnRlZCB0byB1c2UgdGhlIHNlcnZpY2VzLlxyXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PiBcclxuICAgKi9cclxuICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBPYnRhaW5zIGEgcGVybWlzc2lvbiB0byB1c2UgdGhlIHNlcnZpY2VzLlxyXG4gICAqIEBwYXJhbSAge1Blcm1pc3Npb259IHBlcm1pc3Npb24gUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKHBlcm1pc3Npb246IEhNU1Blcm1pc3Npb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBPYnRhaW5zIGEgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBzZXJ2aWNlcy5cclxuICAgKiBAcGFyYW0gIHtQZXJtaXNzaW9uW119IHBlcm1pc3Npb25zIFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICByZXF1ZXN0UGVybWlzc2lvbnMocGVybWlzc2lvbnM6IEhNU1Blcm1pc3Npb25bXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgdGhlIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIFNjYW4gU0RLJ3MgbWV0aG9kcyB0byBpbXByb3ZlIHRoZSBzZXJ2aWNlIHF1YWxpdHkuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZXMgdGhlIEhNU0xvZ2dlciBjYXBhYmlsaXR5IHdoaWNoIGlzIHVzZWQgZm9yIHNlbmRpbmcgdXNhZ2UgYW5hbHl0aWNzIG9mIFNjYW4gU0RLJ3MgbWV0aG9kcyB0byBpbXByb3ZlIHRoZSBzZXJ2aWNlIHF1YWxpdHkuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJbiBEZWZhdWx0IFZpZXcgbW9kZSwgU2NhbiBLaXQgc2NhbnMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBvciBmcm9tIGltYWdlcyBpbiB0aGUgYWxidW0sIGFuZCBhbHNvIHByb3ZpZGVzIGFjdGl2aXRpZXMgdGhhdCBjYW4gYmUgZGlyZWN0bHkgdXNlZC5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0Li5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWZhdWx0Vmlld01vZGUoc2NhblR5cGVzOiBTY2FuVHlwZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIHdvcmtzIGFzeW5jaHJvbm91c2x5LCBkZWZpbmVzIHRoZSBiaXRtYXAgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIsIGFuZCByZXR1cm5zIHRoZSBTY2FuIHJlc3VsdHMuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGFuYWx5ekluQXN5bihmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhpcyBzZXJ2aWNlIHdvcmtzIHN5bmNocm9ub3VzbHksIGRlZmluZXMgdGhlIGJpdG1hcCBnaXZlbiBhcyBhIHBhcmFtZXRlciwgYW5kIHJldHVybnMgdGhlIFNjYW4gcmVzdWx0cy5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYW5hbHlzZUZyYW1lKGZpbGVQYXRoOiBzdHJpbmcsIHNjYW5UeXBlczogU2NhblR5cGVzW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSByZWNvZ25pdGlvbiBzY2FubmluZyBiYXJjb2RlcyBmcm9tIGltYWdlcyBpbiBCaXRtYXAgbW9kZS5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGZpbGVQYXRoIFRoZSBVUkkgb2YgdGhlIHBob3RvIHJlcXVlc3RlZCB0byBiZSBzY2FubmVkIGJ5IHRoZSBzZXJ2aWNlLlxyXG4gICAqIEBwYXJhbSAge1NjYW5UeXBlc1tdfSBzY2FuVHlwZXMgU2V0cyB0aGUgYmFyY29kZSBzY2FubmluZyBmb3JtYXQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZGVjb2RlV2l0aEJpdG1hcChmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogU2NhbiBLaXQgY2FuIGNvbnZlcnQgY2hhcmFjdGVyIHN0cmluZ3MgaW50byAxRCBvciAyRCBiYXJjb2RlcyBpbiAxMyBmb3JtYXRzLCBpbmNsdWRpbmcgRUFOLTgsIEVBTi0xMywgVVBDLUEsIFVQQy1FLCBDb2RhYmFyLCBDb2RlIDM5LCBDb2RlIDkzLCBDb2RlIDEyOCwgSVRGLCBRUiBjb2RlLCBEYXRhIE1hdHJpeCwgUERGNDE3LCBhbmQgQXp0ZWMuIEJlc2lkZXMgYSBjaGFyYWN0ZXIgc3RyaW5nLCB5b3Ugc3RpbGwgbmVlZCB0byBzcGVjaWZ5IHRoZSBmb3JtYXQgYW5kIHNpemUgZm9yIGdlbmVyYXRpbmcgYSBiYXJjb2RlLlxyXG4gICAqIEBwYXJhbSAge0J1aWxkQml0bWFwUmVxdWVzdH0gYnVpbGRCaXRtYXBSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgYmFyY29kZSBnZW5lcmF0aW9uIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYnVpbGRCaXRtYXAoYnVpbGRCaXRtYXBSZXF1ZXN0OiBCdWlsZEJpdG1hcFJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBPYnRhaW5zIHRoZSBiaXRtYXAgZnJvbSB0aGUgY29ycmVzcG9uZGluZyBmaWxlIHBhdGgsIHBlcmZvcm1zIHNhbXBsaW5nIHJhdGUgY29tcHJlc3Npb24sIGFuZCByZXR1cm5zIHRoZSBiaXRtYXAgdGhhdCBtZWV0cyB0aGUgc2l6ZSByZXF1aXJlbWVudHMuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBmaWxlUGF0aCBUaGUgVVJJIG9mIHRoZSBwaG90byByZXF1ZXN0ZWQgdG8gYmUgc2Nhbm5lZCBieSB0aGUgc2VydmljZS5cclxuICAgKiBAcGFyYW0gIHtTY2FuVHlwZXNbXX0gc2NhblR5cGVzIFNldHMgdGhlIGJhcmNvZGUgc2Nhbm5pbmcgZm9ybWF0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRldGVjdEZvckhtc0RlY3RvcihmaWxlUGF0aDogc3RyaW5nLCBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdNdWx0aVByb2Nlc3NvcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLXNjYW4nLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdNdWx0aVByb2Nlc3NvcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVByb2Nlc3NvciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUGVybWlzc2lvbiA9IEhNU1Blcm1pc3Npb247XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFcnJvckNvcnJlY3Rpb25MZXZlbDtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgbW9kZSBpbiBzeW5jaHJvbm91cyBtb2RlLlxyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxyXG4gICAgKiBAcGFyYW0gIHtNdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0fSBtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlIHNlcnZpY2UuXHJcbiAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIG11bHRpUHJvY2Vzc29yU3luTW9kZShkaXZJZDogc3RyaW5nLCBtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3Nvck1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgbW9kZSBpbiBhc3luY2hyb25vdXMgbW9kZVxyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxyXG4gICAgKiBAcGFyYW0gIHtNdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0fSBtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlIHNlcnZpY2UuXHJcbiAgICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIG11bHRpUHJvY2Vzc29yQXN5bk1vZGUoZGl2SWQ6IHN0cmluZywgbXVsdGlQcm9jZXNzb3JBc3luTW9kZVJlcXVlc3Q6IE11bHRpUHJvY2Vzc29yTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCByZWNvZ25pemVzIGJhcmNvZGVzIHVzaW5nIHRoZSBjYW1lcmEgaW4gQml0bWFwIG1vZGUuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaXZJZCBTY2FuQXJlYSBcclxuICAgKiBAcGFyYW0gIHtCaXRtYXBNb2RlUmVxdWVzdH0gYml0bWFwTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBCaXRtYXBNb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYml0bWFwTW9kZShkaXZJZDogc3RyaW5nLCBiaXRtYXBNb2RlUmVxdWVzdDogQml0bWFwTW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIGFuZCBiaXRtYXAgbW9kZVxyXG4gICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSBFdmVudCBuYW1lLiBcclxuICAgICogQHBhcmFtICB7KHZhbHVlOiBhbnkpID0+IHZvaWR9IGNhbGwgTWV0aG9kLlxyXG4gICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICovXHJcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGw6ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHN0b3BzIHRoZSBjdXN0b20gdmlldyBtb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgc3RvcFZpZXdTZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0N1c3RvbVZpZXcnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnQ3VzdG9tVmlldycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WaWV3IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQZXJtaXNzaW9uID0gSE1TUGVybWlzc2lvbjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVycm9yQ29ycmVjdGlvbkxldmVsO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEluIEN1c3RvbWl6ZWQgVmlldyBtb2RlLCB5b3UgZG8gbm90IG5lZWQgdG8gd29ycnkgYWJvdXQgZGV2ZWxvcGluZyB0aGUgc2Nhbm5pbmcgcHJvY2VzcyBvciBjYW1lcmEgY29udHJvbC5cclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpdklkIFNjYW5BcmVhIFxyXG4gICAqIEBwYXJhbSAge0N1c3RvbVZpZXdNb2RlUmVxdWVzdH0gY3VzdG9tVmlld01vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgY3VzdG9tVmlld01vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBjdXN0b21WaWV3TW9kZShkaXZJZDogc3RyaW5nLCBjdXN0b21WaWV3TW9kZVJlcXVlc3Q6IEN1c3RvbVZpZXdNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IG9wZW5zIGZsdXNoIGxpZ2h0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIG9wZW5GbHVzaExpZ2h0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IHBhdXNlIHRoZSBjb250aW51b3VzbHkgc2Nhbi5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBwYXVzZUNvbnRpbnVvdXNseVNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBhbmQgYml0bWFwIG1vZGVcclxuICAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZS4gXHJcbiAgICAqIEBwYXJhbSAgeyh2YWx1ZTogYW55KSA9PiB2b2lkfSBjYWxsIE1ldGhvZC5cclxuICAgICogQHJldHVybnMgdm9pZFxyXG4gICAqL1xyXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCByZXN1bWUgdGhlIGNvbnRpbnVvdXNseSBzY2FuLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHJlc3VtZUNvbnRpbnVvdXNseVNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgc3RvcHMgdGhlIGN1c3RvbSB2aWV3IG1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzdG9wVmlld1NlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tVmlld01vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIGlzQ29udGludW91c2x5U2Nhbj86IGJvb2xlYW47XHJcbiAgZW5hYmxlUmV0dXJuQml0bWFwPzogYm9vbGVhbjtcclxuICBlbmFibGVTY2FuQXJlYUJveD86IGJvb2xlYW47XHJcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpUHJvY2Vzc29yTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcclxuICBlbmFibGVTY2FuQXJlYUJveD86IGJvb2xlYW47XHJcbiAgZW5hYmxlRHJhd1NjYW5SZXN1bHQ/OiBib29sZWFuO1xyXG4gIHZpZXdBdHRyaWJ1dGVzPzogVmlld0F0dHJpYnV0ZXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBWaWV3QXR0cmlidXRlcyB7XHJcbiAgdGV4dENvbG9yPzogQ29sb3JzO1xyXG4gIHRleHRTaXplPzogbnVtYmVyO1xyXG4gIHN0cm9rZVdpdGRoPzogbnVtYmVyO1xyXG4gIHJlY3RDb2xvcj86IENvbG9ycztcclxuICByZWN0U3R5bGU/OiBSZWN0U3R5bGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCdWlsZEJpdG1hcFJlcXVlc3Qge1xyXG4gIGlucHV0Q29udGVudDogc3RyaW5nO1xyXG4gIGJhcmNvZGVGb3JtYXQ6IFNjYW5UeXBlcztcclxuICBiYXJjb2RlV2lkdGg/OiBudW1iZXI7XHJcbiAgYmFyY29kZUhlaWdodD86IG51bWJlcjtcclxuICBobXNCdWlsZEJpdG1hcE9wdGlvbnM/OiBITVNCdWlsZEJpdG1hcE9wdGlvbnM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBITVNCdWlsZEJpdG1hcE9wdGlvbnMge1xyXG4gIGJpdG1hcE1hcmdpbj86IG51bWJlcjtcclxuICBiaXRtYXBDb2xvcj86IENvbG9ycztcclxuICBiaXRtYXBCYWNrZ3JvdW5kQ29sb3I/OiBDb2xvcnM7XHJcbiAgcXJFcnJvckNvcnJlY3Rpb25MZXZlbD86IEVycm9yQ29ycmVjdGlvbkxldmVsLFxyXG4gIHFyTG9nb0JpdG1hcD86IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW107XHJcbiAgc2NhbkZyYW1lU2l6ZT86IG51bWJlcjtcclxuICBlbmFibGVTY2FuQXJlYUJveD86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuQm91bmRzIHtcclxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGVudW0gSE1TUGVybWlzc2lvbiB7XHJcbiAgQ0FNRVJBID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uQ0FNRVJBXCIsXHJcbiAgUkVBRF9FWFRFUk5BTF9TVE9SQUdFID0gXCJhbmRyb2lkLnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFXCJcclxufVxyXG5leHBvcnQgZW51bSBFcnJvckNvcnJlY3Rpb25MZXZlbCB7XHJcbiAgTCA9IFwiTFwiLFxyXG4gIE0gPSBcIk1cIixcclxuICBRID0gXCJRXCIsXHJcbiAgSCA9IFwiSFwiXHJcbn1cclxuZXhwb3J0IGVudW0gQ29sb3JzIHtcclxuICBSRUQgPSAtNjU1MzYsXHJcbiAgREtHUkFZID0gLTEyMzAzMjkyLFxyXG4gIEdSQVkgPSAtNzgyOTM2OCxcclxuICBXSElURSA9IC0xLFxyXG4gIEJMVUUgPSAtMTY3NzY5NjEsXHJcbiAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgTFRHUkFZID0gLTMzNTU0NDQsXHJcbiAgTUFHRU5UQSA9IC02NTI4MSxcclxuICBZRUxMT1cgPSAtMjU2LFxyXG4gIENZQU4gPSAtMTY3MTE2ODEsXHJcbiAgR1JFRU4gPSAtMTY3MTE5MzYsXHJcbiAgVFJBTlNQQVJFTlQgPSAwXHJcbn1cclxuZXhwb3J0IGVudW0gU2NhblR5cGVzIHtcclxuICBPVEhFUl9TQ0FOX1RZUEUgPSAtMSxcclxuICBBTExfU0NBTl9UWVBFID0gMCxcclxuICBDT0RFMTI4X1NDQU5fVFlQRSA9IDY0LFxyXG4gIENPREUzOV9TQ0FOX1RZUEUgPSAxNixcclxuICBDT0RFOTNfU0NBTl9UWVBFID0gMzIsXHJcbiAgQ09EQUJBUl9TQ0FOX1RZUEUgPSA0MDk2LFxyXG4gIERBVEFNQVRSSVhfU0NBTl9UWVBFID0gNCxcclxuICBFQU4xM19TQ0FOX1RZUEUgPSAxMjgsXHJcbiAgRUFOOF9TQ0FOX1RZUEUgPSAyNTYsXHJcbiAgSVRGMTRfU0NBTl9UWVBFID0gNTEyLFxyXG4gIFFSQ09ERV9TQ0FOX1RZUEUgPSAxLFxyXG4gIFVQQ0NPREVfQV9TQ0FOX1RZUEUgPSAxMDI0LFxyXG4gIFVQQ0NPREVfRV9TQ0FOX1RZUEUgPSAyMDQ4LFxyXG4gIFBERjQxN19TQ0FOX1RZUEUgPSA4LFxyXG4gIEFaVEVDX1NDQU5fVFlQRSA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gUmVjdFN0eWxlIHtcclxuICBTVFJPS0UgPSAwLFxyXG4gIEZJTEwgPSAxLFxyXG4gIEZJTExfQU5EX1NUUk9LRSA9IDIsXHJcbn1cclxuXHJcbi8vTGF5b3V0XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dEJvdW5kcyB7XHJcbiAgbWFyZ2luTGVmdD86IG51bWJlcixcclxuICBtYXJnaW5SaWdodD86IG51bWJlcixcclxuICBtYXJnaW5Ub3A/OiBudW1iZXIsXHJcbiAgbWFyZ2luQm90dG9tPzogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3aWR0aDogbnVtYmVyLFxyXG4gIGhlaWdodDogbnVtYmVyLFxyXG4gIG1hcmdpbkxlZnQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luUmlnaHQ/OiBudW1iZXIsXHJcbiAgbWFyZ2luVG9wPzogbnVtYmVyLFxyXG4gIG1hcmdpbkJvdHRvbT86IG51bWJlcixcclxuICBwYWdlWE9mZnNldD86IG51bWJlcixcclxuICBwYWdlWU9mZnNldD86IG51bWJlclxyXG59XHJcbiJdfQ==