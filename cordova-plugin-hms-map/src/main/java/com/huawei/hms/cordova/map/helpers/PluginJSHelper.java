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
package com.huawei.hms.cordova.map.helpers;

import android.util.Log;

import com.huawei.hms.cordova.map.components.MapComponentType;
import com.huawei.hms.cordova.map.maps.MapCapsule;

import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

public class PluginJSHelper {

    private static final String TAG = "PluginJSHelper";
    private CordovaWebView webView;
    private Map<String, String> registeredJSEventsCodesForMap;
    private Map<String, String> comp;
    private int capsuleId;
    private String divId;
    private Set<String> components;

    public PluginJSHelper(CordovaWebView webView, MapCapsule capsule) {
        this.webView = webView;
        this.capsuleId = capsule.getCapsuleId();
        this.divId = capsule.getDivId();
        this.components = capsule.getComponentMap().keySet();
        registeredJSEventsCodesForMap = capsule.getRegisteredJSFunctions();
        comp = new HashMap<>();
    }

    /*
     * When cordova user navigates to another page or when the user does anything to
     * reset current window. Our all registered listeners are gone. That means
     * in java still we have our listeners running but in JS the functions actually not
     * under window. So in this function we are going to register back those functions to window.
     * */
    private String constructJSCodeToRegisterEventFrom(EventProperties properties) {
        StringBuilder stringBuilder = new StringBuilder()
                .append("javascript:window.subscribeHMSEvent('")
                .append(properties.event)
                .append("_")
                .append(properties.capsuleId);

        if (properties.hasComponentId())
            stringBuilder.append("_").append(properties.componentId);

        stringBuilder.append("',")
                .append(properties.function)
                .append(");");

        Log.d(TAG, "constructJSCodeToRegisterEventFrom: " + stringBuilder.toString());
        return stringBuilder.toString();
    }


    private void runJSToRegisterMapListenersUnderWindow(int capsuleId) {
        for (Map.Entry<String, String> entry : registeredJSEventsCodesForMap.entrySet()) {
            EventProperties properties = new EventProperties(entry.getKey(), capsuleId, entry.getValue());
            webView.loadUrl(constructJSCodeToRegisterEventFrom(properties));
        }
    }

    private void runJSToRegisterComponentListenersUnderWindow(int capsuleId, String componentId) {
        for (Map.Entry<String, String> entry : comp.entrySet()) {
            EventProperties properties = new EventProperties(entry.getKey(), capsuleId, entry.getValue());
            properties.componentId = componentId;
            webView.loadUrl(constructJSCodeToRegisterEventFrom(properties));
        }
    }

    public void syncListeners() {
        runJSToRegisterMapListenersUnderWindow(capsuleId);
        runJSToRegisterComponentListenersUnderWindow(capsuleId, "componentId");
    }

    private JSONObject componentJSONObjectFrom(String component) throws JSONException {
        String type = "UNKNOWN";
        if (component.startsWith("Circle")) type = MapComponentType.CIRCLE.getName();
        else if (component.startsWith("Marker")) type = MapComponentType.MARKER.getName();
        else if (component.startsWith("Polygon")) type = MapComponentType.POLYGON.getName();
        else if (component.startsWith("Polyline")) type = MapComponentType.POLYLINE.getName();
        else if (component.startsWith("GroundOverlay"))
            type = MapComponentType.GROUND_OVERLAY.getName();
        else if (component.startsWith("TileOverlay"))
            type = MapComponentType.TILE_OVERLAY.getName();
        Log.d(TAG, "componentJSONObjectFrom: ---->>  " + String.format(Locale.ENGLISH,"_type: %s, _id: %s", type, component));
        return new JSONObject().put("_type", type).put("_id", component);
    }

    private JSONArray mapsComponentsInfoJSONArray() throws JSONException {
        JSONArray compArrayJson = new JSONArray();
        for (String component : this.components) {
            Log.d(TAG, "mapsComponentsInfoJSONArray: " + component);
            compArrayJson.put(componentJSONObjectFrom(component));
            Log.d(TAG, "mapsComponentsInfoJSONArray: " + compArrayJson.toString());
        }
        return compArrayJson;
    }

    private void runJSToFillPluginComponentsHashMap() throws JSONException {
        webView.loadUrl(String.format(Locale.ENGLISH, "javascript: HMSMap.sync(%d, '%s', %s);",
                this.capsuleId, this.divId, mapsComponentsInfoJSONArray()));
    }

    public void syncComponents() throws JSONException {
        runJSToFillPluginComponentsHashMap();
    }

    private static class EventProperties {
        String event;
        int capsuleId;
        String function;
        String componentId = null;

        EventProperties(String event, int capsuleId, String function) {
            this.event = event;
            this.capsuleId = capsuleId;
            this.function = function;
        }

        boolean hasComponentId() {
            return componentId != null;
        }

    }

}
