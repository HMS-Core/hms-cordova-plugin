/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSDTMOriginal = /** @class */ (function (_super) {
    __extends(HMSDTMOriginal, _super);
    function HMSDTMOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * This method is used to listen CustomTag interface class. This listener returns CustomTag values if condition provided
   * @returns Promise<object>
   * @params callback() => {}
   */
    HMSDTMOriginal.prototype.onCustomTag = function (callback) { return cordova(this, "onCustomTag", { "otherPromise": true }, arguments); };
    HMSDTMOriginal.prototype.setCustomVariable = function (customVariableObject) { return cordova(this, "setCustomVariable", { "otherPromise": true }, arguments); };
    HMSDTMOriginal.prototype.onEvent = function (eventName, bundleObject) { return cordova(this, "onEvent", { "otherPromise": true }, arguments); };
    HMSDTMOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSDTMOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSDTMOriginal.pluginName = "HMSDTM";
    HMSDTMOriginal.plugin = "com-plugin-hms-dtm";
    HMSDTMOriginal.pluginRef = "HMSDTM";
    HMSDTMOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSDTMOriginal.platforms = ["Android"];
    return HMSDTMOriginal;
}(IonicNativePlugin));
var HMSDTM = new HMSDTMOriginal();
export { HMSDTM };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1kdG0vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlCQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1CNUMsMEJBQWlCOzs7O0lBR3pDOzs7O0tBSUM7SUFDSCw0QkFBVyxhQUFDLFFBQTRCO0lBS3hDLGtDQUFpQixhQUFDLG9CQUF5QztJQUszRCx3QkFBTyxhQUFDLFNBQWdCLEVBQUMsWUFBeUI7SUFLbEQsNkJBQVk7SUFLWiw4QkFBYTs7Ozs7O2lCQWhFZjtFQW9DNEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IDIwMjAuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbiBpbnRlcmZhY2UgQnVuZGxlT2JqZWN0IHtcclxuICBba2V5OnN0cmluZ106c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEN1c3RvbVZhcmlhYmxlT2JqZWN0e1xyXG4gIHZhck5hbWU6c3RyaW5nLFxyXG4gIHZhbHVlOnN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNEVE0nLFxyXG4gIHBsdWdpbjogJ2NvbS1wbHVnaW4taG1zLWR0bScsIFxyXG4gIHBsdWdpblJlZjogJ0hNU0RUTScsIFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBITVNEVE0gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGxpc3RlbiBDdXN0b21UYWcgaW50ZXJmYWNlIGNsYXNzLiBUaGlzIGxpc3RlbmVyIHJldHVybnMgQ3VzdG9tVGFnIHZhbHVlcyBpZiBjb25kaXRpb24gcHJvdmlkZWRcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPG9iamVjdD5cclxuICAgKiBAcGFyYW1zIGNhbGxiYWNrKCkgPT4ge31cclxuICAgKi9cclxuICBvbkN1c3RvbVRhZyhjYWxsYmFjazogKGRhdGE6YW55KSA9PiB2b2lkKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0Q3VzdG9tVmFyaWFibGUoY3VzdG9tVmFyaWFibGVPYmplY3Q6Q3VzdG9tVmFyaWFibGVPYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgb25FdmVudChldmVudE5hbWU6c3RyaW5nLGJ1bmRsZU9iamVjdDpCdW5kbGVPYmplY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGRpc2FibGVMb2dnZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==