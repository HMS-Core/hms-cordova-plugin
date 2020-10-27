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

import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
import { Observable } from 'rxjs';
var HMSScan = /** @class */ (function (_super) {
    __extends(HMSScan, _super);
    function HMSScan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * It checks the permissions required to use this Kit.
     * @param {CheckPermissionInput} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.checkPermissions = function (permissionListInput) { return cordova(this, "checkPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * It gets the necessary permissions
     * @param {RequestPermissionInput} permissionListInput Represents the list in which permission names are kept.
     * @returns Promise<any>
     */
    HMSScan.prototype.requestPermissions = function (permissionListInput) { return cordova(this, "requestPermissions", { "otherPromise": true }, arguments); };
    ;
    /**
     * In Default View mode, Scan Kit scans barcodes using the camera or from images in the album, and also provides activities that can be directly used.
     * @param {DefaultViewModeRequest} defaultViewModeRequest Contains the settings of the defaultViewMode service.
     * @returns Promise<any>
     */
    HMSScan.prototype.defaultViewMode = function (defaultViewModeRequest) { return cordova(this, "defaultViewMode", { "otherPromise": true }, arguments); };
    /**
     * In Customized View mode, you do not need to worry about developing the scanning process or camera control.
     * @param {CustomViewModeRequest} customViewModeRequest Contains the settings of the customViewMode service.
     * @returns Promise<any>
     */
    HMSScan.prototype.customViewMode = function (customViewModeRequest) { return cordova(this, "customViewMode", { "otherPromise": true }, arguments); };
    /**
     * The service process of using the MultiProcessor mode in synchronous mode
     * @param {MultiProcessorSynModeRequest} multiProcessorSynModeRequest Contains the settings of the multiProcessorSynMode service.
      * @param {any} success A callback function. It is called when function is executed successfully. It returns the results of barcode result.
      * @param {any} error A callback function. It is called when function is failed.
      * @returns callback
     */
    HMSScan.prototype.multiProcessorSynMode = function (multiProcessorSynModeRequest) { return cordova(this, "multiProcessorSynMode", { "observable": true }, arguments); };
    /**
     * The service process of using the MultiProcessor mode in asynchronous mode
      * @param {MultiProcessorAsynModeRequest} multiProcessorAsynMode Contains the settings of the multiProcessorAsynMode service.
      * @param {any} success A callback function. It is called when function is executed successfully. It returns the results of barcode result.
      * @param {any} error A callback function. It is called when function is failed.
      * @returns callback
     */
    HMSScan.prototype.multiProcessorAsynMode = function (multiProcessorAsynModeRequest) { return cordova(this, "multiProcessorAsynMode", { "observable": true }, arguments); };
    /**
     * Service that defines barcodes from given image objects with Asynmode.
     * @param {AsynModeWithImageRequest} asynModeWithImageRequest Contains the settings of the asynModeWithImage service.
     * @returns Promise<any>
     */
    HMSScan.prototype.asynModeWithImage = function (asynModeWithImageRequest) { return cordova(this, "asynModeWithImage", { "otherPromise": true }, arguments); };
    /**
     * Service that defines barcodes from given image objects with Synmode.
     * @param {SynModeWithImageRequest} synModeWithImageRequest Contains the settings of the synModeWithImage service.
     * @returns Promise<any>
     */
    HMSScan.prototype.synModeWithImage = function (synModeWithImageRequest) { return cordova(this, "synModeWithImage", { "otherPromise": true }, arguments); };
    /**
     * Service that defines barcodes from given bitmap.
     * @param {DecodeBitmapRequest} decodeBitmapRequest Contains the settings of the decodeWithBitmap service.
     * @returns Promise<any>
     */
    HMSScan.prototype.decodeWithBitmap = function (decodeBitmapRequest) { return cordova(this, "decodeWithBitmap", { "otherPromise": true }, arguments); };
    /**
     * Scan Kit can convert character strings into 1D or 2D barcodes in 13 formats, including EAN-8, EAN-13, UPC-A, UPC-E, Codabar, Code 39, Code 93, Code 128, ITF, QR code, Data Matrix, PDF417, and Aztec.
     * @param {GenerateBarcodeRequest} generateBarcodeRequest Barcode generation options.
     * @returns Promise<any>
     */
    HMSScan.prototype.generateBarcode = function (generateBarcodeRequest) { return cordova(this, "generateBarcode", { "otherPromise": true }, arguments); };
    /**
     *
      It recognizes barcodes using the camera in Bitmap mode.
     * @param {BitmapModeRequest} bitmapModeRequest Contains the settings of the BitmapMode service.
     * @returns Promise<any>
     */
    HMSScan.prototype.bitmapMode = function (bitmapModeRequest) { return cordova(this, "bitmapMode", { "otherPromise": true }, arguments); };
    HMSScan.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    ;
    HMSScan.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1zY2FuL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTs7QUFFRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFDNUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE2QkwsMkJBQWlCOzs7O0lBVTVDOzs7O09BSUc7SUFDSCxrQ0FBZ0IsYUFBQyxtQkFBeUM7SUFFekQsQ0FBQztJQUVGOzs7O09BSUc7SUFDSCxvQ0FBa0IsYUFBQyxtQkFBMkM7SUFFN0QsQ0FBQztJQUlGOzs7O09BSUc7SUFDSCxpQ0FBZSxhQUFDLHNCQUE4QztJQUk5RDs7OztPQUlHO0lBQ0gsZ0NBQWMsYUFBQyxxQkFBNEM7SUFJM0Q7Ozs7OztPQU1HO0lBQ0gsdUNBQXFCLGFBQUMsNEJBQTBEO0lBS2hGOzs7Ozs7T0FNRztJQUNILHdDQUFzQixhQUFDLDZCQUE0RDtJQUtuRjs7OztPQUlHO0lBQ0gsbUNBQWlCLGFBQUMsd0JBQWtEO0lBS3BFOzs7O09BSUc7SUFDSCxrQ0FBZ0IsYUFBQyx1QkFBZ0Q7SUFLakU7Ozs7T0FJRztJQUNILGtDQUFnQixhQUFDLG1CQUE0QztJQUk3RDs7OztPQUlHO0lBQ0gsaUNBQWUsYUFBQyxzQkFBOEM7SUFLOUQ7Ozs7O09BS0c7SUFDSCw0QkFBVSxhQUFDLGlCQUFvQztJQVEvQyw4QkFBWTtJQUVYLENBQUM7SUFNRiwrQkFBYTtJQUVaLENBQUM7MEJBcElGLDJCQUFNOzs7Ozs7MEJBRU4sOEJBQVM7Ozs7OzswQkFFVCw4QkFBUzs7Ozs7Ozs7OztJQVBFLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkEvQ3BCO0VBK0M2QixpQkFBaUI7U0FBakMsT0FBTztBQStNcEIsTUFBTSxDQUFOLElBQVksTUFhWDtBQWJELFdBQVksTUFBTTtJQUNoQixzQ0FBWSxDQUFBO0lBQ1osK0NBQWtCLENBQUE7SUFDbEIsMENBQWUsQ0FBQTtJQUNmLHNDQUFVLENBQUE7SUFDViwyQ0FBZ0IsQ0FBQTtJQUNoQiw2Q0FBaUIsQ0FBQTtJQUNqQiw4Q0FBaUIsQ0FBQTtJQUNqQiw4Q0FBZ0IsQ0FBQTtJQUNoQiwwQ0FBYSxDQUFBO0lBQ2IsMkNBQWdCLENBQUE7SUFDaEIsNkNBQWlCLENBQUE7SUFDakIsaURBQWUsQ0FBQTtBQUNqQixDQUFDLEVBYlcsTUFBTSxLQUFOLE1BQU0sUUFhakI7QUFDRCxNQUFNLENBQU4sSUFBWSxTQWdCWDtBQWhCRCxXQUFZLFNBQVM7SUFDbkIsZ0VBQW9CLENBQUE7SUFDcEIsMkRBQWlCLENBQUE7SUFDakIsb0VBQXNCLENBQUE7SUFDdEIsa0VBQXFCLENBQUE7SUFDckIsa0VBQXFCLENBQUE7SUFDckIsc0VBQXdCLENBQUE7SUFDeEIseUVBQXdCLENBQUE7SUFDeEIsaUVBQXFCLENBQUE7SUFDckIsK0RBQW9CLENBQUE7SUFDcEIsaUVBQXFCLENBQUE7SUFDckIsaUVBQW9CLENBQUE7SUFDcEIsMEVBQTBCLENBQUE7SUFDMUIsMEVBQTBCLENBQUE7SUFDMUIsaUVBQW9CLENBQUE7SUFDcEIsK0RBQW1CLENBQUE7QUFDckIsQ0FBQyxFQWhCVyxTQUFTLEtBQVQsU0FBUyxRQWdCcEI7QUFDRCxNQUFNLENBQU4sSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDZDQUFVLENBQUE7SUFDVix5Q0FBUSxDQUFBO0lBQ1IsK0RBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSE1TU2NhblxyXG4gKiBAZGVzY3JpcHRpb24gQ29yZG92YSBTY2FuIFBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgSE1TIENvcmUgU2NhbiBTREsgYW5kIENvcmRvdmEgcGxhdGZvcm0uIFRoaXMgcGx1Z2luIGRlbW9uc3RyYXRlcyB3aWRlLXJhbmdpbmcgZnVuY3Rpb25hbGl0eSBvZiB0aGUgSE1TIENvcmUgU2NhbiBTREsuXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEhNU1NjYW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2htcy1zY2FuJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBobXNTY2FuOiBITVNTY2FuKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaG1zU2Nhbi5kZWZhdWx0Vmlld01vZGUoUmVxdWVzdClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hNU1NjYW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1zY2FuJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnSE1TU2NhbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNTY2FuIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDb2xvcnMgPSBDb2xvcnM7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgU2NhblR5cGVzID0gU2NhblR5cGVzO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJlY3RTdHlsZSA9IFJlY3RTdHlsZTtcclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJdCBjaGVja3MgdGhlIHBlcm1pc3Npb25zIHJlcXVpcmVkIHRvIHVzZSB0aGlzIEtpdC5cclxuICAgKiBAcGFyYW0ge0NoZWNrUGVybWlzc2lvbklucHV0fSBwZXJtaXNzaW9uTGlzdElucHV0IFJlcHJlc2VudHMgdGhlIGxpc3QgaW4gd2hpY2ggcGVybWlzc2lvbiBuYW1lcyBhcmUga2VwdC5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT4gXHJcbiAgICovXHJcbiAgY2hlY2tQZXJtaXNzaW9ucyhwZXJtaXNzaW9uTGlzdElucHV0OiBDaGVja1Blcm1pc3Npb25JbnB1dCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEl0IGdldHMgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9uc1xyXG4gICAqIEBwYXJhbSB7UmVxdWVzdFBlcm1pc3Npb25JbnB1dH0gcGVybWlzc2lvbkxpc3RJbnB1dCBSZXByZXNlbnRzIHRoZSBsaXN0IGluIHdoaWNoIHBlcm1pc3Npb24gbmFtZXMgYXJlIGtlcHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgcmVxdWVzdFBlcm1pc3Npb25zKHBlcm1pc3Npb25MaXN0SW5wdXQ6IFJlcXVlc3RQZXJtaXNzaW9uSW5wdXQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcblxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIEluIERlZmF1bHQgVmlldyBtb2RlLCBTY2FuIEtpdCBzY2FucyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIG9yIGZyb20gaW1hZ2VzIGluIHRoZSBhbGJ1bSwgYW5kIGFsc28gcHJvdmlkZXMgYWN0aXZpdGllcyB0aGF0IGNhbiBiZSBkaXJlY3RseSB1c2VkLlxyXG4gICAqIEBwYXJhbSB7RGVmYXVsdFZpZXdNb2RlUmVxdWVzdH0gZGVmYXVsdFZpZXdNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGRlZmF1bHRWaWV3TW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRlZmF1bHRWaWV3TW9kZShkZWZhdWx0Vmlld01vZGVSZXF1ZXN0OiBEZWZhdWx0Vmlld01vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBJbiBDdXN0b21pemVkIFZpZXcgbW9kZSwgeW91IGRvIG5vdCBuZWVkIHRvIHdvcnJ5IGFib3V0IGRldmVsb3BpbmcgdGhlIHNjYW5uaW5nIHByb2Nlc3Mgb3IgY2FtZXJhIGNvbnRyb2wuXHJcbiAgICogQHBhcmFtIHtDdXN0b21WaWV3TW9kZVJlcXVlc3R9IGN1c3RvbVZpZXdNb2RlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGN1c3RvbVZpZXdNb2RlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgY3VzdG9tVmlld01vZGUoY3VzdG9tVmlld01vZGVSZXF1ZXN0OiBDdXN0b21WaWV3TW9kZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBUaGUgc2VydmljZSBwcm9jZXNzIG9mIHVzaW5nIHRoZSBNdWx0aVByb2Nlc3NvciBtb2RlIGluIHN5bmNocm9ub3VzIG1vZGVcclxuICAgKiBAcGFyYW0ge011bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3R9IG11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3QgQ29udGFpbnMgdGhlIHNldHRpbmdzIG9mIHRoZSBtdWx0aVByb2Nlc3NvclN5bk1vZGUgc2VydmljZS5cclxuICAgICogQHBhcmFtIHthbnl9IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBJdCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIGJhcmNvZGUgcmVzdWx0LlxyXG4gICAgKiBAcGFyYW0ge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAgKiBAcmV0dXJucyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG11bHRpUHJvY2Vzc29yU3luTW9kZShtdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0OiBNdWx0aVByb2Nlc3NvclN5bk1vZGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFRoZSBzZXJ2aWNlIHByb2Nlc3Mgb2YgdXNpbmcgdGhlIE11bHRpUHJvY2Vzc29yIG1vZGUgaW4gYXN5bmNocm9ub3VzIG1vZGVcclxuICAgICogQHBhcmFtIHtNdWx0aVByb2Nlc3NvckFzeW5Nb2RlUmVxdWVzdH0gbXVsdGlQcm9jZXNzb3JBc3luTW9kZSBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIG11bHRpUHJvY2Vzc29yQXN5bk1vZGUgc2VydmljZS5cclxuICAgICogQHBhcmFtIHthbnl9IHN1Y2Nlc3MgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5LiBJdCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIGJhcmNvZGUgcmVzdWx0LlxyXG4gICAgKiBAcGFyYW0ge2FueX0gZXJyb3IgQSBjYWxsYmFjayBmdW5jdGlvbi4gSXQgaXMgY2FsbGVkIHdoZW4gZnVuY3Rpb24gaXMgZmFpbGVkLlxyXG4gICAgKiBAcmV0dXJucyBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG11bHRpUHJvY2Vzc29yQXN5bk1vZGUobXVsdGlQcm9jZXNzb3JBc3luTW9kZVJlcXVlc3Q6IE11bHRpUHJvY2Vzc29yQXN5bk1vZGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogU2VydmljZSB0aGF0IGRlZmluZXMgYmFyY29kZXMgZnJvbSBnaXZlbiBpbWFnZSBvYmplY3RzIHdpdGggQXN5bm1vZGUuXHJcbiAgICogQHBhcmFtIHtBc3luTW9kZVdpdGhJbWFnZVJlcXVlc3R9IGFzeW5Nb2RlV2l0aEltYWdlUmVxdWVzdCBDb250YWlucyB0aGUgc2V0dGluZ3Mgb2YgdGhlIGFzeW5Nb2RlV2l0aEltYWdlIHNlcnZpY2UuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgYXN5bk1vZGVXaXRoSW1hZ2UoYXN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0OiBBc3luTW9kZVdpdGhJbWFnZVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICAvKipcclxuICAgKiBTZXJ2aWNlIHRoYXQgZGVmaW5lcyBiYXJjb2RlcyBmcm9tIGdpdmVuIGltYWdlIG9iamVjdHMgd2l0aCBTeW5tb2RlLlxyXG4gICAqIEBwYXJhbSB7U3luTW9kZVdpdGhJbWFnZVJlcXVlc3R9IHN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgc3luTW9kZVdpdGhJbWFnZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIHN5bk1vZGVXaXRoSW1hZ2Uoc3luTW9kZVdpdGhJbWFnZVJlcXVlc3Q6IFN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgLyoqXHJcbiAgICogU2VydmljZSB0aGF0IGRlZmluZXMgYmFyY29kZXMgZnJvbSBnaXZlbiBiaXRtYXAuXHJcbiAgICogQHBhcmFtIHtEZWNvZGVCaXRtYXBSZXF1ZXN0fSBkZWNvZGVCaXRtYXBSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgZGVjb2RlV2l0aEJpdG1hcCBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGRlY29kZVdpdGhCaXRtYXAoZGVjb2RlQml0bWFwUmVxdWVzdDogRGVjb2RlV2l0aEJpdG1hcFJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFNjYW4gS2l0IGNhbiBjb252ZXJ0IGNoYXJhY3RlciBzdHJpbmdzIGludG8gMUQgb3IgMkQgYmFyY29kZXMgaW4gMTMgZm9ybWF0cywgaW5jbHVkaW5nIEVBTi04LCBFQU4tMTMsIFVQQy1BLCBVUEMtRSwgQ29kYWJhciwgQ29kZSAzOSwgQ29kZSA5MywgQ29kZSAxMjgsIElURiwgUVIgY29kZSwgRGF0YSBNYXRyaXgsIFBERjQxNywgYW5kIEF6dGVjLlxyXG4gICAqIEBwYXJhbSB7R2VuZXJhdGVCYXJjb2RlUmVxdWVzdH0gZ2VuZXJhdGVCYXJjb2RlUmVxdWVzdCBCYXJjb2RlIGdlbmVyYXRpb24gb3B0aW9ucy5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBnZW5lcmF0ZUJhcmNvZGUoZ2VuZXJhdGVCYXJjb2RlUmVxdWVzdDogR2VuZXJhdGVCYXJjb2RlUmVxdWVzdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAgSXQgcmVjb2duaXplcyBiYXJjb2RlcyB1c2luZyB0aGUgY2FtZXJhIGluIEJpdG1hcCBtb2RlLlxyXG4gICAqIEBwYXJhbSB7Qml0bWFwTW9kZVJlcXVlc3R9IGJpdG1hcE1vZGVSZXF1ZXN0IENvbnRhaW5zIHRoZSBzZXR0aW5ncyBvZiB0aGUgQml0bWFwTW9kZSBzZXJ2aWNlLlxyXG4gICAqIEByZXR1cm5zIFByb21pc2U8YW55PlxyXG4gICAqL1xyXG4gIGJpdG1hcE1vZGUoYml0bWFwTW9kZVJlcXVlc3Q6IEJpdG1hcE1vZGVSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRW5hYmxlcyBITVNMb2dnZXIuIEhNU0xvZ2dlciBpcyBlbmFibGVkIGJ5IGRlZmF1bHQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIERpc2FibGVzIEhNU0xvZ2dlci5cclxuICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RQZXJtaXNzaW9uSW5wdXQge1xyXG4gIHBlcm1pc3Npb25MaXN0OiBBcnJheTxzdHJpbmc+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tQZXJtaXNzaW9uSW5wdXQge1xyXG4gIHBlcm1pc3Npb25MaXN0OiBBcnJheTxzdHJpbmc+O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZpZXdNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbVZpZXdNb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBzY2FuQXJlYVdpZHRoPzogbnVtYmVyIHwgbnVsbDtcclxuICBzY2FuQXJlYUhlaWdodD86IG51bWJlciB8IG51bGw7XHJcbiAgZW5hYmxlRmx1c2hCdXR0b24/OiBib29sZWFuIHwgbnVsbDtcclxuICBlbmFibGVQaWN0dXJlQnV0dG9uPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgc2NhbkFyZWFUZXh0Pzogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpUHJvY2Vzc29yU3luTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbiAgZW5hYmxlU2NhbkFyZWE/OiBib29sZWFuIHwgbnVsbDtcclxuICBlbmFibGVQaG90b0J1dHRvbj86IGJvb2xlYW4gfCBudWxsO1xyXG4gIHRleHRDb2xvcj86IENvbG9ycyB8IG51bGxcclxuICB0ZXh0U2l6ZT86IG51bWJlciB8IG51bGw7XHJcbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXIgfCBudWxsO1xyXG4gIHJlY3RDb2xvcj86IENvbG9ycyB8IG51bGw7XHJcbiAgcmVjdFN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcclxuICBzY2FuQXJlYVdpZHRoPzogbnVtYmVyIHwgbnVsbDtcclxuICBzY2FuQXJlYUhlaWdodD86IG51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNdWx0aVByb2Nlc3NvckFzeW5Nb2RlUmVxdWVzdCB7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBlbmFibGVTY2FuQXJlYT86IGJvb2xlYW4gfCBudWxsO1xyXG4gIGVuYWJsZVBob3RvQnV0dG9uPzogYm9vbGVhbiB8IG51bGw7XHJcbiAgdGV4dENvbG9yPzogQ29sb3JzIHwgbnVsbFxyXG4gIHRleHRTaXplPzogbnVtYmVyIHwgbnVsbDtcclxuICBzdHJva2VXaWR0aD86IG51bWJlciB8IG51bGxcclxuICByZWN0Q29sb3I/OiBDb2xvcnMgfCBudWxsXHJcbiAgcmVjdFN0eWxlPzogUmVjdFN0eWxlIHwgbnVsbDtcclxuICBzY2FuQXJlYVdpZHRoPzogbnVtYmVyIHwgbnVsbDtcclxuICBzY2FuQXJlYUhlaWdodD86IG51bWJlciB8IG51bGw7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBc3luTW9kZVdpdGhJbWFnZVJlcXVlc3Qge1xyXG4gIGZpbGVQYXRoOiBzdHJpbmc7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN5bk1vZGVXaXRoSW1hZ2VSZXF1ZXN0IHtcclxuICBmaWxlUGF0aDogc3RyaW5nO1xyXG4gIHNjYW5UeXBlczogU2NhblR5cGVzW10gfCBTY2FuVHlwZXM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEZWNvZGVXaXRoQml0bWFwUmVxdWVzdCB7XHJcbiAgZmlsZVBhdGg6IHN0cmluZztcclxuICBzY2FuVHlwZXM6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXJhdGVCYXJjb2RlUmVxdWVzdCB7XHJcbiAgYmFyY29kZUhlaWdodD86IG51bWJlciB8IG51bGw7XHJcbiAgYmFyY29kZVdpZHRoPzogbnVtYmVyIHwgbnVsbDtcclxuICBiaXRtYXBCYWNrZ3JvdW5kQ29sb3I/OiBDb2xvcnMgfCBudWxsO1xyXG4gIGJpdG1hcENvbG9yPzogQ29sb3JzIHwgbnVsbDtcclxuICBiaXRtYXBNYXJnaW4/OiBudW1iZXIgfCBudWxsO1xyXG4gIGJhcmNvZGVGb3JtYXQ6IFNjYW5UeXBlc1tdIHwgU2NhblR5cGVzO1xyXG4gIGlucHV0Q29udGVudDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQml0bWFwTW9kZVJlcXVlc3Qge1xyXG4gIHNjYW5BcmVhV2lkdGg/OiBudW1iZXI7XHJcbiAgc2NhbkFyZWFIZWlnaHQ/OiBudW1iZXI7XHJcbiAgc2NhblR5cGVzOiBTY2FuVHlwZXNbXSB8IFNjYW5UeXBlcztcclxuICBlbmFibGVTY2FuQXJlYT86IGJvb2xlYW47XHJcbiAgc2NhblRpcHM/OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGVudW0gQ29sb3JzIHtcclxuICBSRUQgPSAtNjU1MzYsXHJcbiAgREtHUkFZID0gLTEyMzAzMjkyLFxyXG4gIEdSQVkgPSAtNzgyOTM2OCxcclxuICBXSElURSA9IC0xLFxyXG4gIEJMVUUgPSAtMTY3NzY5NjEsXHJcbiAgQkxBQ0sgPSAtMTY3NzcyMTYsXHJcbiAgTFRHUkFZID0gLTMzNTU0NDQsXHJcbiAgTUFHRU5UQSA9IC02NTI4MSxcclxuICBZRUxMT1cgPSAtMjU2LFxyXG4gIENZQU4gPSAtMTY3MTE2ODEsXHJcbiAgR1JFRU4gPSAtMTY3MTE5MzYsXHJcbiAgVFJBTlNQQVJFTlQgPSAwXHJcbn1cclxuZXhwb3J0IGVudW0gU2NhblR5cGVzIHtcclxuICBPVEhFUl9TQ0FOX1RZUEUgPSAtMSxcclxuICBBTExfU0NBTl9UWVBFID0gMCxcclxuICBDT0RFMTI4X1NDQU5fVFlQRSA9IDY0LFxyXG4gIENPREUzOV9TQ0FOX1RZUEUgPSAxNixcclxuICBDT0RFOTNfU0NBTl9UWVBFID0gMzIsXHJcbiAgQ09EQUJBUl9TQ0FOX1RZUEUgPSA0MDk2LFxyXG4gIERBVEFNQVRSSVhfU0NBTl9UWVBFID0gNCxcclxuICBFQU4xM19TQ0FOX1RZUEUgPSAxMjgsXHJcbiAgRUFOOF9TQ0FOX1RZUEUgPSAyNTYsXHJcbiAgSVRGMTRfU0NBTl9UWVBFID0gNTEyLFxyXG4gIFFSQ09ERV9TQ0FOX1RZUEUgPSAxLFxyXG4gIFVQQ0NPREVfQV9TQ0FOX1RZUEUgPSAxMDI0LFxyXG4gIFVQQ0NPREVfRV9TQ0FOX1RZUEUgPSAyMDQ4LFxyXG4gIFBERjQxN19TQ0FOX1RZUEUgPSA4LFxyXG4gIEFaVEVDX1NDQU5fVFlQRSA9IDIsXHJcbn1cclxuZXhwb3J0IGVudW0gUmVjdFN0eWxlIHtcclxuICBTVFJPS0UgPSAwLFxyXG4gIEZJTEwgPSAxLFxyXG4gIEZJTExfQU5EX1NUUk9LRSA9IDIsXHJcbn1cclxuIl19