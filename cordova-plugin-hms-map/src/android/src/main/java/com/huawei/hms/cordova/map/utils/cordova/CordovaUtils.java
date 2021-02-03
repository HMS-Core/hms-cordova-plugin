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

package com.huawei.hms.cordova.map.utils.cordova;

import com.huawei.hms.cordova.map.maps.MapEvents;

import org.apache.cordova.CordovaWebView;
import org.json.JSONObject;

import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

public class CordovaUtils {
    private static volatile CordovaUtils cordovaUtils = null;
    private CordovaWebView webView;
    private Set<String> componentEvents = new HashSet<>();
    private static final String RUN_HMS_EVENT_PREFIX = "javascript:window.runHMSEvent";

    private CordovaUtils(CordovaWebView webView) {
        this.webView = webView;
        fillSetWithComponentEvents();
    }

    public static synchronized CordovaUtils getInstance(CordovaWebView webView) {
        if (cordovaUtils == null) {
            synchronized (CordovaUtils.class) {
                if (cordovaUtils == null) cordovaUtils = new CordovaUtils(webView);
            }
        }
        return cordovaUtils;
    }

    public static void destroy(){
        cordovaUtils = null;
    }

    private void fillSetWithComponentEvents() {
        componentEvents.add(MapEvents.ON_CIRCLE_CLICK);
        componentEvents.add(MapEvents.ON_MARKER_CLICK);
        componentEvents.add(MapEvents.ON_MARKER_DRAG);
        componentEvents.add(MapEvents.ON_MARKER_DRAG_START);
        componentEvents.add(MapEvents.ON_MARKER_DRAG_END);
        componentEvents.add(MapEvents.ON_POLYGON_CLICK);
        componentEvents.add(MapEvents.ON_POLYLINE_CLICK);
        componentEvents.add(MapEvents.ON_GROUND_OVERLAY_CLICK);
        componentEvents.add(MapEvents.ON_INFO_WINDOW_CLICK);
        componentEvents.add(MapEvents.ON_INFO_WINDOW_CLOSE);
        componentEvents.add(MapEvents.ON_INFO_WINDOW_LONG_CLICK);
    }

    public void evaluateJs(String event, int capsuleId, String componentId, JSONObject json) {
        if (json == null)
            webView.loadUrl(String.format(Locale.ENGLISH, "%s('%s_%d_%s');", RUN_HMS_EVENT_PREFIX, event, capsuleId, componentId));
        else
            webView.loadUrl(String.format(Locale.ENGLISH, "%s('%s_%d_%s',%s);", RUN_HMS_EVENT_PREFIX, event, capsuleId, componentId, json));
    }

    public boolean evaluateJs(String event, int capsuleId, JSONObject json) {
        if (json == null)
            webView.loadUrl(String.format(Locale.ENGLISH, "%s('%s_%d');", RUN_HMS_EVENT_PREFIX, event, capsuleId));
        else if (componentEvents.contains(event))
            webView.loadUrl(codeToSendMapComponentToJavaScriptInsteadOfJson(event, capsuleId, json.optString("id")));
        else
            webView.loadUrl(String.format(Locale.ENGLISH, "%s('%s_%d',%s);", RUN_HMS_EVENT_PREFIX, event, capsuleId, json));
        return true;
    }

    private String codeToSendMapComponentToJavaScriptInsteadOfJson(String event, int capsuleId, String componentId) {
        return String.format(Locale.ENGLISH, "%s('%s_%d',HMSMap.maps.get(%d).getComponent('%s'));", RUN_HMS_EVENT_PREFIX, event, capsuleId, capsuleId, componentId);
    }
}
