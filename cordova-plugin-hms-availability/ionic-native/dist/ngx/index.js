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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSAvailability = /** @class */ (function (_super) {
    __extends(HMSAvailability, _super);
    function HMSAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSAvailability.prototype.isHuaweiMobileServicesAvailable = function (minApkVersion) { return cordova(this, "isHuaweiMobileServicesAvailable", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.isHuaweiMobileNoticeAvailable = function () { return cordova(this, "isHuaweiMobileNoticeAvailable", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.getApiMap = function () { return cordova(this, "getApiMap", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.getServicesVersionCode = function () { return cordova(this, "getServicesVersionCode", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.setServicesVersionCode = function (servicesVersionCode) { return cordova(this, "setServicesVersionCode", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.isUserResolvableError = function (errorCode) { return cordova(this, "isUserResolvableError", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.getErrorString = function (errorCode) { return cordova(this, "getErrorString", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.resolveError = function (errorCode, requestCode) { return cordova(this, "resolveError", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.showErrorDialogFragment = function (errorCode, requestCode, cancelListener) { return cordova(this, "showErrorDialogFragment", { "otherPromise": true }, arguments); };
    HMSAvailability.prototype.showErrorNotification = function (errorCode) { return cordova(this, "showErrorNotification", { "otherPromise": true }, arguments); };
    HMSAvailability.pluginName = "HMSAvailability";
    HMSAvailability.plugin = "cordova-plugin-hms-availability";
    HMSAvailability.pluginRef = "HMSAvailability";
    HMSAvailability.repo = "";
    HMSAvailability.platforms = ["Android", "iOS"];
    HMSAvailability = __decorate([
        Injectable()
    ], HMSAvailability);
    return HMSAvailability;
}(IonicNativePlugin));
export { HMSAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1hdmFpbGFiaWxpdHkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztFQWNFOztBQUVGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyw4QkFBb0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFVakMsbUNBQWlCOzs7O0lBTWxELHlEQUErQixhQUFDLGFBQXNCO0lBS3RELHVEQUE2QjtJQUs3QixtQ0FBUztJQUtULGdEQUFzQjtJQUt0QixnREFBc0IsYUFBQyxtQkFBMkI7SUFLbEQsK0NBQXFCLGFBQUMsU0FBaUI7SUFLdkMsd0NBQWMsYUFBQyxTQUFpQjtJQUtoQyxzQ0FBWSxhQUFDLFNBQWlCLEVBQUUsV0FBbUI7SUFLbkQsaURBQXVCLGFBQUMsU0FBaUIsRUFBRSxXQUFtQixFQUFFLGNBQTJCO0lBSzNGLCtDQUFxQixhQUFDLFNBQWlCOzs7Ozs7SUFuRDlCLGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZTswQkEzQjVCO0VBMkJxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29weXJpZ2h0IDIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0hNU0F2YWlsYWJpbGl0eScsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taG1zLWF2YWlsYWJpbGl0eScsXG4gICAgcGx1Z2luUmVmOiAnSE1TQXZhaWxhYmlsaXR5JyxcbiAgICByZXBvOiAnJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSE1TQXZhaWxhYmlsaXR5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIEhNUyBDb3JlIGlzIGluc3RhbGxlZC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcj59XG4gICAgICovXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgaXNIdWF3ZWlNb2JpbGVTZXJ2aWNlc0F2YWlsYWJsZShtaW5BcGtWZXJzaW9uPzogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGlzSHVhd2VpTW9iaWxlTm90aWNlQXZhaWxhYmxlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBnZXRBcGlNYXAoKTogUHJvbWlzZTxBcGlNYXA+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGdldFNlcnZpY2VzVmVyc2lvbkNvZGUoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHNldFNlcnZpY2VzVmVyc2lvbkNvZGUoc2VydmljZXNWZXJzaW9uQ29kZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAQ29yZG92YSh7b3RoZXJQcm9taXNlOiB0cnVlfSlcbiAgICBpc1VzZXJSZXNvbHZhYmxlRXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIGdldEVycm9yU3RyaW5nKGVycm9yQ29kZTogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIEBDb3Jkb3ZhKHtvdGhlclByb21pc2U6IHRydWV9KVxuICAgIHJlc29sdmVFcnJvcihlcnJvckNvZGU6IG51bWJlciwgcmVxdWVzdENvZGU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgc2hvd0Vycm9yRGlhbG9nRnJhZ21lbnQoZXJyb3JDb2RlOiBudW1iZXIsIHJlcXVlc3RDb2RlOiBudW1iZXIsIGNhbmNlbExpc3RlbmVyPzogKCkgPT4gdm9pZCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQENvcmRvdmEoe290aGVyUHJvbWlzZTogdHJ1ZX0pXG4gICAgc2hvd0Vycm9yTm90aWZpY2F0aW9uKGVycm9yQ29kZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmludGVyZmFjZSBBcGlNYXAge1xuICAgICdIdWF3ZWlJYXAuQVBJJzogbnVtYmVyLFxuICAgICdIdWF3ZWlJRC5BUEknOiBudW1iZXIsXG4gICAgJ0h1YXdlaUdhbWUuQVBJJzogbnVtYmVyLFxuICAgICdIdWF3ZWlQYXkuQVBJJzogbnVtYmVyLFxuICAgICdIdWF3ZWlTbnMuQVBJJzogbnVtYmVyLFxuICAgICdIdWF3ZWlPcGVuRGV2aWNlLkFQSSc6IG51bWJlcixcbiAgICAnSHVhd2VpUFBTa2l0LkFQSSc6IG51bWJlcixcbiAgICAnSHVhd2VpUHVzaC5BUEknOiBudW1iZXJcbn1cbiJdfQ==
