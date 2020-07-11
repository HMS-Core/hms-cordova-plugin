/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.ads.utils;

import android.util.Log;
import com.huawei.hms.ads.identifier.AdIdVerifyException;
import com.huawei.hms.ads.identifier.AdvertisingIdClient;
import com.huawei.hms.cordova.ads.helpers.BiConsumer;
import java.io.IOException;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

public class OaidUtils {
    private static final String TAG = OaidUtils.class.getSimpleName();

    public static void verifyAdId(CordovaInterface cordova, String adId, boolean isLimitAdTracking, CallbackContext callback) {
        cordova.getThreadPool().execute(() -> {
            try {
                boolean result = AdvertisingIdClient.verifyAdId(cordova.getContext(), adId, isLimitAdTracking);
                callback.success(CordovaUtils.keyValPair("result", result));
            } catch (AdIdVerifyException e) {
                Log.e(TAG, "verifyAdId() :: error");
                callback.error(e.getMessage());
            }
        });
    }

    public static class OaidResult {
        String id;
        boolean isLimitAdTracingEnabled;

        OaidResult(String id, boolean isLimitAdTracingEnabled) {
            this.id = id;
            this.isLimitAdTracingEnabled = isLimitAdTracingEnabled;
        }

        public JSONObject toJSONObject() {
            try {
                return new JSONObject()
                        .put("id", this.id)
                        .put("isLimitAdTracingEnabled", this.isLimitAdTracingEnabled);
            } catch (JSONException ignored) {
                return null;
            }
        }
    }

    public static void getAdvertisingIdInfo(CordovaInterface cordova, BiConsumer<Boolean, OaidResult> callback) {
        cordova.getThreadPool().execute(() -> {
            try {
                AdvertisingIdClient.Info info = AdvertisingIdClient.getAdvertisingIdInfo(cordova.getContext());
                callback.run(true, new OaidResult(info.getId(), info.isLimitAdTrackingEnabled()));
            } catch (IOException e) {
                Log.e(TAG, "getAdvertisingIdInfo IOException : " + e.getMessage());
                callback.run(false, null);
            }
        });
    }
}
