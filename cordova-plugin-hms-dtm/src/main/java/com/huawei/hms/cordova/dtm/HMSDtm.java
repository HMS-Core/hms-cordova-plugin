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

package com.huawei.hms.cordova.dtm;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;
import com.huawei.hms.cordova.dtm.logger.HMSLogger;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class HMSDtm extends CordovaPlugin {
    public static final String TAG = HMSDtm.class.getSimpleName();
    private HiAnalyticsInstance analyticsInstance;
    private static CordovaPlugin mPlugin;
    private static final Map<String, String> ALL_RETURN_VALUES = new HashMap<>();

    public static Map<String, String> getMap() {
        return ALL_RETURN_VALUES;
    }

    public static CordovaPlugin getPlugin() {
        return mPlugin;
    }

    public static Context getContex() {
        return mPlugin.cordova.getContext();
    }

    public static void setPlugin(CordovaPlugin plugin) {
        mPlugin = plugin;
    }

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        analyticsInstance = HiAnalytics.getInstance(cordova.getActivity().getApplicationContext());
        setPlugin(this);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        HMSLogger.getInstance(cordova.getContext()).startMethodExecutionTimer(action);
        switch (action) {
            case "onEvent":
                onEvent(args.getString(0), args.getJSONObject(1), callbackContext);
                break;
            case "setCustomVariable":
                setCustomVariable(args.getJSONObject(0), callbackContext);
                break;
            case "enableLogger":
                enableLogger(callbackContext);
                break;
            case "disableLogger":
                disableLogger(callbackContext);
                break;
            default:
                return false;
        }
        return true;
    }

    private void enableLogger(CallbackContext callbackContext) {
        HMSLogger.getInstance(cordova.getContext()).enableLogger();
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
    }

    private void disableLogger(CallbackContext callbackContext) {
        HMSLogger.getInstance(cordova.getContext()).disableLogger();
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
    }

    private void onEvent(String eventName, JSONObject jsonObject, CallbackContext callbackContext) {
        Bundle bundle = jsonToBundle(jsonObject);
        analyticsInstance.onEvent(eventName, bundle);
        HMSLogger.getInstance(cordova.getContext()).sendSingleEvent("onEvent");
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
    }

    private void setCustomVariable(JSONObject jsonObject, CallbackContext callbackContext) throws JSONException {
        String name = jsonObject.getString("varName");
        String value = jsonObject.get("value").toString();
        ALL_RETURN_VALUES.put(name, value);
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, true));
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
}
