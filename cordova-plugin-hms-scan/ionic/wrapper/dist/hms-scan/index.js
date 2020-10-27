/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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
import { Observable } from 'rxjs';
var HMSScanOriginal = /** @class */ (function (_super) {
    __extends(HMSScanOriginal, _super);
    function HMSScanOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It checks the permissions required to use this Kit.
     * @param {CheckPermissionInput} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.checkPermissions = function (permissionListInput) { return cordova(this, "checkPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * It gets the necessary permissions
     * @param {RequestPermissionInput} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.requestPermissions = function (permissionListInput) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param {DefaultViewModeRequest} defaultViewModeRequest Contains the settings of the defaultViewMode service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.defaultViewMode = function (defaultViewModeRequest) { return cordova(this, "defaultViewMode", { "otherPromise": true }, arguments); };
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.customViewMode = function (customViewModeRequest) { return cordova(this, "customViewMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor mode in synchronous mode
     * @param {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @param {any} success A callback function. It is called when function is executed successfully. It returns the results of barcode result.
      * @param {any} error A callback function. It is called when function is failed.
      * @returns callback
     */
    HMSScanOriginal.prototype.multiProcessorSynMode = function (multiProcessorSynModeRequest) { return cordova(this, "multiProcessorSynMode", { "observable": true }, arguments); };
    /**
     * The service process of using the MultiProcessor mode in asynchronous mode
      * @param {MultiProcessorAsynModeRequest} multiProcessorAsynMode Contains the settings of the multiProcessorAsynMode service.
      * @param {any} success A callback function. It is called when function is executed successfully. It returns the results of barcode result.
      * @param {any} error A callback function. It is called when function is failed.
      * @returns callback
     */
    HMSScanOriginal.prototype.multiProcessorAsynMode = function (multiProcessorAsynModeRequest) { return cordova(this, "multiProcessorAsynMode", { "observable": true }, arguments); };
    /**
     * Service that defines barcodes from given image objects with Asynmode.
     * @param {AsynModeWithImageRequest} asynModeWithImageRequest Contains the settings of the asynModeWithImage service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.asynModeWithImage = function (asynModeWithImageRequest) { return cordova(this, "asynModeWithImage", { "otherPromise": true }, arguments); };
    /**
     * Service that defines barcodes from given image objects with Synmode.
     * @param {SynModeWithImageRequest} synModeWithImageRequest Contains the settings of the synModeWithImage service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.synModeWithImage = function (synModeWithImageRequest) { return cordova(this, "synModeWithImage", { "otherPromise": true }, arguments); };
    /**
     * Service that defines barcodes from given bitmap.
     * @param {DecodeBitmapRequest} decodeBitmapRequest Contains the settings of the decodeWithBitmap service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.decodeWithBitmap = function (decodeBitmapRequest) { return cordova(this, "decodeWithBitmap", { "otherPromise": true }, arguments); };
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec.
     * @param {GenerateBarcodeRequest} generateBarcodeRequest Barcode generation options.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.generateBarcode = function (generateBarcodeRequest) { return cordova(this, "generateBarcode", { "otherPromise": true }, arguments); };
    /**
     *
      It recognizes barcodes using the camera in Bitmap mode.
     * @param {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    HMSScanOriginal.prototype.bitmapMode = function (bitmapModeRequest) { return cordova(this, "bitmapMode", { "otherPromise": true }, arguments); };
    HMSScanOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    ;
    HMSScanOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    ;
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
    HMSScanOriginal.pluginName = "HMSScan";
    HMSScanOriginal.plugin = "cordova-plugin-hms-scan";
    HMSScanOriginal.pluginRef = "HMSScan";
    HMSScanOriginal.platforms = ["Android"];
    return HMSScanOriginal;
}(IonicNativePlugin));
var HMSScan = new HMSScanOriginal();
export { HMSScan };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1zY2FuL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQkEsT0FBTyxzRUFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZCTCwyQkFBaUI7Ozs7SUFVNUM7Ozs7T0FJRztJQUNILGtDQUFnQixhQUFDLG1CQUF5QztJQUV6RCxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILG9DQUFrQixhQUFDLG1CQUEyQztJQUU3RCxDQUFDO0lBSUY7Ozs7T0FJRztJQUNILGlDQUFlLGFBQUMsc0JBQThDO0lBSTlEOzs7O09BSUc7SUFDSCxnQ0FBYyxhQUFDLHFCQUE0QztJQUkzRDs7Ozs7O09BTUc7SUFDSCx1Q0FBcUIsYUFBQyw0QkFBMEQ7SUFLaEY7Ozs7OztPQU1HO0lBQ0gsd0NBQXNCLGFBQUMsNkJBQTREO0lBS25GOzs7O09BSUc7SUFDSCxtQ0FBaUIsYUFBQyx3QkFBa0Q7SUFLcEU7Ozs7T0FJRztJQUNILGtDQUFnQixhQUFDLHVCQUFnRDtJQUtqRTs7OztPQUlHO0lBQ0gsa0NBQWdCLGFBQUMsbUJBQTRDO0lBSTdEOzs7O09BSUc7SUFDSCxpQ0FBZSxhQUFDLHNCQUE4QztJQUs5RDs7Ozs7T0FLRztJQUNILDRCQUFVLGFBQUMsaUJBQW9DO0lBUS9DLDhCQUFZO0lBRVgsQ0FBQztJQU1GLCtCQUFhO0lBRVosQ0FBQzswQkFwSUYsMkJBQU07Ozs7OzswQkFFTiw4QkFBUzs7Ozs7OzBCQUVULDhCQUFTOzs7Ozs7Ozs7O2tCQXREWDtFQStDNkIsaUJBQWlCO1NBQWpDLE9BQU87QUErTXBCLE1BQU0sQ0FBTixJQUFZLE1BYVg7QUFiRCxXQUFZLE1BQU07SUFDaEIsc0NBQVksQ0FBQTtJQUNaLCtDQUFrQixDQUFBO0lBQ2xCLDBDQUFlLENBQUE7SUFDZixzQ0FBVSxDQUFBO0lBQ1YsMkNBQWdCLENBQUE7SUFDaEIsNkNBQWlCLENBQUE7SUFDakIsOENBQWlCLENBQUE7SUFDakIsOENBQWdCLENBQUE7SUFDaEIsMENBQWEsQ0FBQTtJQUNiLDJDQUFnQixDQUFBO0lBQ2hCLDZDQUFpQixDQUFBO0lBQ2pCLGlEQUFlLENBQUE7QUFDakIsQ0FBQyxFQWJXLE1BQU0sS0FBTixNQUFNLFFBYWpCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FnQlg7QUFoQkQsV0FBWSxTQUFTO0lBQ25CLGdFQUFvQixDQUFBO0lBQ3BCLDJEQUFpQixDQUFBO0lBQ2pCLG9FQUFzQixDQUFBO0lBQ3RCLGtFQUFxQixDQUFBO0lBQ3JCLGtFQUFxQixDQUFBO0lBQ3JCLHNFQUF3QixDQUFBO0lBQ3hCLHlFQUF3QixDQUFBO0lBQ3hCLGlFQUFxQixDQUFBO0lBQ3JCLCtEQUFvQixDQUFBO0lBQ3BCLGlFQUFxQixDQUFBO0lBQ3JCLGlFQUFvQixDQUFBO0lBQ3BCLDBFQUEwQixDQUFBO0lBQzFCLDBFQUEwQixDQUFBO0lBQzFCLGlFQUFvQixDQUFBO0lBQ3BCLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFoQlcsU0FBUyxLQUFULFNBQVMsUUFnQnBCO0FBQ0QsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiw2Q0FBVSxDQUFBO0lBQ1YseUNBQVEsQ0FBQTtJQUNSLCtEQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC4gSHVhd2VpIFRlY2hub2xvZ2llcyBDby4sIEx0ZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXHJcbiAgICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuXHJcbiAgICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICAgIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICAgIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gICAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEhNU1NjYW5cclxuICogQGRlc2NyaXB0aW9uIENvcmRvdmEgU2NhbiBQbHVnaW4gZW5hYmxlcyBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIEhNUyBDb3JlIFNjYW4gU0RLIGFuZCBDb3Jkb3ZhIHBsYXRmb3JtLiBUaGlzIHBsdWdpbiBkZW1vbnN0cmF0ZXMgd2lkZS1yYW5naW5nIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEhNUyBDb3JlIFNjYW4gU0RLLlxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBITVNTY2FuIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9obXMtc2Nhbic7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaG1zU2NhbjogSE1TU2NhbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmhtc1NjYW4uZGVmYXVsdFZpZXdNb2RlKFJlcXVlc3QpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNTY2FuJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtc2NhbicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0hNU1NjYW4nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TU2NhbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ29sb3JzID0gQ29sb3JzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFNjYW5UeXBlcyA9IFNjYW5UeXBlcztcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSZWN0U3R5bGUgPSBSZWN0U3R5bGU7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSXQgY2hlY2tzIHRoZSBwZXJtaXNzaW9ucyByZXF1aXJlZCB0byB1c2UgdGhpcyBLaXQuXHJcbiAgICogQHBhcmFtIHtDaGVja1Blcm1pc3Npb25JbnB1dH0gcGVybWlzc2lvbkxpc3RJbnB1dCBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+IFxyXG4gICAqL1xyXG4gIGNoZWNrUGVybWlzc2lvbnMocGVybWlzc2lvbkxpc3RJbnB1dDogQ2hlY2tQZXJtaXNzaW9uSW5wdXQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBnZXRzIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnNcclxuICAgKiBAcGFyYW0ge1JlcXVlc3RQZXJtaXNzaW9uSW5wdXR9IHBlcm1pc3Npb25MaXN0SW5wdXQgUmVwcmVzZW50cyB0aGUgbGlzdCBpbiB3aGljaCBwZXJtaXNzaW9uIG5hbWVzIGFyZSBrZXB0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHJlcXVlc3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uTGlzdElucHV0OiBSZXF1ZXN0UGVybWlzc2lvbklucHV0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG5cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJbiBEZWZhdWx0IFZpZXcgbW9kZSwgU2NhbiBLaXQgc2NhbnMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBvciBmcm9tIGltYWdlcyBpbiB0aGUgYWxidW0sIGFuZCBhbHNvIHByb3ZpZGVzIGFjdGl2aXRpZXMgdGhhdCBjYW4gYmUgZGlyZWN0bHkgdXNlZC5cclxuICAgKiBAcGFyYW0ge0RlZmF1bHRWaWV3TW9kZVJlcXVlc3R9IGRlZmF1bHRWaWV3TW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBkZWZhdWx0Vmlld01vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWZhdWx0Vmlld01vZGUoZGVmYXVsdFZpZXdNb2RlUmVxdWVzdDogRGVmYXVsdFZpZXdNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogSW4gQ3VzdG9taXplZCBWaWV3IG1vZGUsIHlvdSBkbyBub3QgbmVlZCB0byB3b3JyeSBhYm91dCBkZXZlbG9waW5nIHRoZSBzY2FubmluZyBwcm9jZXNzIG9yIGNhbWVyYSBjb250cm9sLlxyXG4gICAqIEBwYXJhbSB7Q3VzdG9tVmlld01vZGVSZXF1ZXN0fSBjdXN0b21WaWV3TW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBjdXN0b21WaWV3TW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGN1c3RvbVZpZXdNb2RlKGN1c3RvbVZpZXdNb2RlUmVxdWVzdDogQ3VzdG9tVmlld01vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogVGhlIHNlcnZpY2UgcHJvY2VzcyBvZiB1c2luZyB0aGUgTXVsdGlQcm9jZXNzb3IgbW9kZSBpbiBzeW5jaHJvbm91cyBtb2RlXHJcbiAgICogQHBhcmFtIHtNdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0fSBtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgbXVsdGlQcm9jZXNzb3JTeW5Nb2RlIHNlcnZpY2UuXHJcbiAgICAqIEBwYXJhbSB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiBiYXJjb2RlIHJlc3VsdC5cclxuICAgICogQHBhcmFtIHthbnl9IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGZhaWxlZC5cclxuICAgICogQHJldHVybnMgY2FsbGJhY2tcclxuICAgKi9cclxuICBtdWx0aVByb2Nlc3NvclN5bk1vZGUobXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdDogTXVsdGlQcm9jZXNzb3JTeW5Nb2RlUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIGFzeW5jaHJvbm91cyBtb2RlXHJcbiAgICAqIEBwYXJhbSB7TXVsdGlQcm9jZXNzb3JBc3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yQXN5bk1vZGUgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlIHNlcnZpY2UuXHJcbiAgICAqIEBwYXJhbSB7YW55fSBzdWNjZXNzIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHN1Y2Nlc3NmdWxseS4gSXQgcmV0dXJucyB0aGUgcmVzdWx0cyBvZiBiYXJjb2RlIHJlc3VsdC5cclxuICAgICogQHBhcmFtIHthbnl9IGVycm9yIEEgY2FsbGJhY2sgZnVuY3Rpb24uIEl0IGlzIGNhbGxlZCB3aGVuIGZ1bmN0aW9uIGlzIGZhaWxlZC5cclxuICAgICogQHJldHVybnMgY2FsbGJhY2tcclxuICAgKi9cclxuICBtdWx0aVByb2Nlc3NvckFzeW5Nb2RlKG11bHRpUHJvY2Vzc29yQXN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3NvckFzeW5Nb2RlUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFNlcnZpY2UgdGhhdCBkZWZpbmVzIGJhcmNvZGVzIGZyb20gZ2l2ZW4gaW1hZ2Ugb2JqZWN0cyB3aXRoIEFzeW5tb2RlLlxyXG4gICAqIEBwYXJhbSB7QXN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0fSBhc3luTW9kZVdpdGhJbWFnZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBhc3luTW9kZVdpdGhJbWFnZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGFzeW5Nb2RlV2l0aEltYWdlKGFzeW5Nb2RlV2l0aEltYWdlUmVxdWVzdDogQXN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogU2VydmljZSB0aGF0IGRlZmluZXMgYmFyY29kZXMgZnJvbSBnaXZlbiBpbWFnZSBvYmplY3RzIHdpdGggU3lubW9kZS5cclxuICAgKiBAcGFyYW0ge1N5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0fSBzeW5Nb2RlV2l0aEltYWdlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIHN5bk1vZGVXaXRoSW1hZ2Ugc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBzeW5Nb2RlV2l0aEltYWdlKHN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0OiBTeW5Nb2RlV2l0aEltYWdlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFNlcnZpY2UgdGhhdCBkZWZpbmVzIGJhcmNvZGVzIGZyb20gZ2l2ZW4gYml0bWFwLlxyXG4gICAqIEBwYXJhbSB7RGVjb2RlQml0bWFwUmVxdWVzdH0gZGVjb2RlQml0bWFwUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGRlY29kZVdpdGhCaXRtYXAgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBkZWNvZGVXaXRoQml0bWFwKGRlY29kZUJpdG1hcFJlcXVlc3Q6IERlY29kZVdpdGhCaXRtYXBSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBTY2FuIEtpdCBjYW4gY29udmVydCBjaGFyYWN0ZXIgc3RyaW5ncyBpbnRvIDFEIG9yIDJEIGJhcmNvZGVzIGluIDEzIGZvcm1hdHMsIGluY2x1ZGluZyBFQU4tOCwgRUFOLTEzLCBVUEMtQSwgVVBDLUUsIENvZGFiYXIsIENvZGUgMzksIENvZGUgOTMsIENvZGUgMTI4LCBJVEYsIFFSIGNvZGUsIERhdGEgTWF0cml4LCBQREY0MTcsIGFuZCBBenRlYy5cclxuICAgKiBAcGFyYW0ge0dlbmVyYXRlQmFyY29kZVJlcXVlc3R9IGdlbmVyYXRlQmFyY29kZVJlcXVlc3QgQmFyY29kZSBnZW5lcmF0aW9uIG9wdGlvbnMuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgZ2VuZXJhdGVCYXJjb2RlKGdlbmVyYXRlQmFyY29kZVJlcXVlc3Q6IEdlbmVyYXRlQmFyY29kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBcclxuICAgIEl0IHJlY29nbml6ZXMgYmFyY29kZXMgdXNpbmcgdGhlIGNhbWVyYSBpbiBCaXRtYXAgbW9kZS5cclxuICAgKiBAcGFyYW0ge0JpdG1hcE1vZGVSZXF1ZXN0fSBiaXRtYXBNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIEJpdG1hcE1vZGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBiaXRtYXBNb2RlKGJpdG1hcE1vZGVSZXF1ZXN0OiBCaXRtYXBNb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgSE1TTG9nZ2VyLiBITVNMb2dnZXIgaXMgZW5hYmxlZCBieSBkZWZhdWx0LlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZW5hYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICAvKipcclxuICAgKiBEaXNhYmxlcyBITVNMb2dnZXIuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0UGVybWlzc2lvbklucHV0IHtcclxuICBwZXJtaXNzaW9uTGlzdDogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrUGVybWlzc2lvbklucHV0IHtcclxuICBwZXJtaXNzaW9uTGlzdDogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWaWV3TW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21WaWV3TW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgc2NhbkFyZWFXaWR0aD86IG51bWJlciB8IG51bGw7XHJcbiAgc2NhbkFyZWFIZWlnaHQ/OiBudW1iZXIgfCBudWxsO1xyXG4gIGVuYWJsZUZsdXNoQnV0dG9uPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgZW5hYmxlUGljdHVyZUJ1dHRvbj86IGJvb2xlYW4gfCBudWxsO1xyXG4gIHNjYW5BcmVhVGV4dD86IHN0cmluZyB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0IHtcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIGVuYWJsZVNjYW5BcmVhPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgZW5hYmxlUGhvdG9CdXR0b24/OiBib29sZWFuIHwgbnVsbDtcclxuICB0ZXh0Q29sb3I/OiBDb2xvcnMgfCBudWxsXHJcbiAgdGV4dFNpemU/OiBudW1iZXIgfCBudWxsO1xyXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyIHwgbnVsbDtcclxuICByZWN0Q29sb3I/OiBDb2xvcnMgfCBudWxsO1xyXG4gIHJlY3RTdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XHJcbiAgc2NhbkFyZWFXaWR0aD86IG51bWJlciB8IG51bGw7XHJcbiAgc2NhbkFyZWFIZWlnaHQ/OiBudW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlQcm9jZXNzb3JBc3luTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgZW5hYmxlU2NhbkFyZWE/OiBib29sZWFuIHwgbnVsbDtcclxuICBlbmFibGVQaG90b0J1dHRvbj86IGJvb2xlYW4gfCBudWxsO1xyXG4gIHRleHRDb2xvcj86IENvbG9ycyB8IG51bGxcclxuICB0ZXh0U2l6ZT86IG51bWJlciB8IG51bGw7XHJcbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXIgfCBudWxsXHJcbiAgcmVjdENvbG9yPzogQ29sb3JzIHwgbnVsbFxyXG4gIHJlY3RTdHlsZT86IFJlY3RTdHlsZSB8IG51bGw7XHJcbiAgc2NhbkFyZWFXaWR0aD86IG51bWJlciB8IG51bGw7XHJcbiAgc2NhbkFyZWFIZWlnaHQ/OiBudW1iZXIgfCBudWxsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0IHtcclxuICBmaWxlUGF0aDogc3RyaW5nO1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTeW5Nb2RlV2l0aEltYWdlUmVxdWVzdCB7XHJcbiAgZmlsZVBhdGg6IHN0cmluZztcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVjb2RlV2l0aEJpdG1hcFJlcXVlc3Qge1xyXG4gIGZpbGVQYXRoOiBzdHJpbmc7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdlbmVyYXRlQmFyY29kZVJlcXVlc3Qge1xyXG4gIGJhcmNvZGVIZWlnaHQ/OiBudW1iZXIgfCBudWxsO1xyXG4gIGJhcmNvZGVXaWR0aD86IG51bWJlciB8IG51bGw7XHJcbiAgYml0bWFwQmFja2dyb3VuZENvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxuICBiaXRtYXBDb2xvcj86IENvbG9ycyB8IG51bGw7XHJcbiAgYml0bWFwTWFyZ2luPzogbnVtYmVyIHwgbnVsbDtcclxuICBiYXJjb2RlRm9ybWF0OiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBpbnB1dENvbnRlbnQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJpdG1hcE1vZGVSZXF1ZXN0IHtcclxuICBzY2FuQXJlYVdpZHRoPzogbnVtYmVyO1xyXG4gIHNjYW5BcmVhSGVpZ2h0PzogbnVtYmVyO1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgZW5hYmxlU2NhbkFyZWE/OiBib29sZWFuO1xyXG4gIHNjYW5UaXBzPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBlbnVtIENvbG9ycyB7XHJcbiAgUkVEID0gLTY1NTM2LFxyXG4gIERLR1JBWSA9IC0xMjMwMzI5MixcclxuICBHUkFZID0gLTc4MjkzNjgsXHJcbiAgV0hJVEUgPSAtMSxcclxuICBCTFVFID0gLTE2Nzc2OTYxLFxyXG4gIEJMQUNLID0gLTE2Nzc3MjE2LFxyXG4gIExUR1JBWSA9IC0zMzU1NDQ0LFxyXG4gIE1BR0VOVEEgPSAtNjUyODEsXHJcbiAgWUVMTE9XID0gLTI1NixcclxuICBDWUFOID0gLTE2NzExNjgxLFxyXG4gIEdSRUVOID0gLTE2NzExOTM2LFxyXG4gIFRSQU5TUEFSRU5UID0gMFxyXG59XHJcbmV4cG9ydCBlbnVtIFNjYW5UeXBlcyB7XHJcbiAgT1RIRVJfU0NBTl9UWVBFID0gLTEsXHJcbiAgQUxMX1NDQU5fVFlQRSA9IDAsXHJcbiAgQ09ERTEyOF9TQ0FOX1RZUEUgPSA2NCxcclxuICBDT0RFMzlfU0NBTl9UWVBFID0gMTYsXHJcbiAgQ09ERTkzX1NDQU5fVFlQRSA9IDMyLFxyXG4gIENPREFCQVJfU0NBTl9UWVBFID0gNDA5NixcclxuICBEQVRBTUFUUklYX1NDQU5fVFlQRSA9IDQsXHJcbiAgRUFOMTNfU0NBTl9UWVBFID0gMTI4LFxyXG4gIEVBTjhfU0NBTl9UWVBFID0gMjU2LFxyXG4gIElURjE0X1NDQU5fVFlQRSA9IDUxMixcclxuICBRUkNPREVfU0NBTl9UWVBFID0gMSxcclxuICBVUENDT0RFX0FfU0NBTl9UWVBFID0gMTAyNCxcclxuICBVUENDT0RFX0VfU0NBTl9UWVBFID0gMjA0OCxcclxuICBQREY0MTdfU0NBTl9UWVBFID0gOCxcclxuICBBWlRFQ19TQ0FOX1RZUEUgPSAyLFxyXG59XHJcbmV4cG9ydCBlbnVtIFJlY3RTdHlsZSB7XHJcbiAgU1RST0tFID0gMCxcclxuICBGSUxMID0gMSxcclxuICBGSUxMX0FORF9TVFJPS0UgPSAyLFxyXG59XHJcbiJdfQ==
