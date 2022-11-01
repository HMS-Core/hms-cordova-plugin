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

package com.huawei.hms.cordova.dtm;

import android.os.Bundle;
import android.util.Log;
import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;
import com.huawei.hms.cordova.dtm.basef.CordovaBaseModule;
import com.huawei.hms.cordova.dtm.basef.CordovaMethod;
import com.huawei.hms.cordova.dtm.basef.HMSLog;
import com.huawei.hms.cordova.dtm.basef.handler.CorPack;
import com.huawei.hms.cordova.dtm.basef.handler.Promise;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class HMSDTMModule extends CordovaBaseModule {
    private static final String TAG = HMSDTMModule.class.getSimpleName();
    private static final Map<String, String> ALL_RETURN_VALUES = new HashMap<>();
    private HiAnalyticsInstance analyticsInstance;

    public HMSDTMModule(final CordovaInterface cordovaInterface) {
        this.analyticsInstance=HiAnalytics.getInstance(cordovaInterface.getActivity().getApplicationContext());
    }

    public static Map<String, String> getMap() {
        return ALL_RETURN_VALUES;
    }

    public static JSONObject toJSONObject(Map<String, Object> map) {

        JSONObject jsonObject = new JSONObject();
        Iterator iterator = map.entrySet().iterator();

        while (iterator.hasNext()) {
            Map.Entry pair = (Map.Entry) iterator.next();
            Object value = pair.getValue();
            try {
                if (value == null) {
                    jsonObject.put((String) pair.getKey(), null);
                } else if (value instanceof Boolean) {
                    jsonObject.put((String) pair.getKey(), (Boolean) value);
                } else if (value instanceof Double) {
                    jsonObject.put((String) pair.getKey(), (Double) value);
                } else if (value instanceof Integer) {
                    jsonObject.put((String) pair.getKey(), (Integer) value);
                } else if (value instanceof String) {
                    jsonObject.put((String) pair.getKey(), (String) value);
                }
            } catch (JSONException ex) {
                Log.i("toJSONObject", ex.getLocalizedMessage());
            }

            iterator.remove();
        }

        return jsonObject;
    }

    @HMSLog
    @CordovaMethod
    public void onEvent(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String eventName = args.getString(0);
        JSONObject jsonObject = args.getJSONObject(1);
        Bundle bundle = jsonToBundle(jsonObject);
        analyticsInstance.onEvent(eventName, bundle);
        promise.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
    }

    @HMSLog
    @CordovaMethod
    public void setCustomVariable(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);
        String name = jsonObject.getString("varName");
        String value = jsonObject.get("value").toString();
        ALL_RETURN_VALUES.put(name, value);
        promise.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
    }

    @HMSLog
    @CordovaMethod
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }

    private Bundle jsonToBundle(JSONObject jsonObject) {
        if (jsonObject == null) {
            return null;
        }

        Iterator iterator = jsonObject.keys();
        if (!iterator.hasNext()) {
            return null;
        }
        Bundle bundle = new Bundle();
        while (iterator.hasNext()) {
            String key = (String) iterator.next();
            Object value;
            try {
                if (jsonObject.isNull(key)) {
                    value = null;
                } else {
                    value = jsonObject.get(key);
                }

                if (value == null) {
                    bundle.putString(key, null);
                } else if (value instanceof Boolean) {
                    bundle.putBoolean(key, jsonObject.getBoolean(key));
                } else if (value instanceof Number) {
                    bundle.putDouble(key, jsonObject.getDouble(key));
                } else if (value instanceof String) {
                    bundle.putString(key, jsonObject.getString(key));
                }
            } catch (JSONException ex) {
                Log.i("jsonToBundle", ex.getLocalizedMessage());
            }
        }

        return bundle;

    }
}
