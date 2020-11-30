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
package com.huawei.hms.cordova.map.maps;

import android.content.Context;
import android.util.Log;

import com.huawei.hms.cordova.map.components.MapComponent;
import com.huawei.hms.cordova.map.listeners.MapListener;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.TextureMapView;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;


public final class MapCapsule {

    private final static String TAG = "MapCapsule";
    private static int id = 0;
    private final String divId;
    private int capsuleId;
    private TextureMapView textureMapView;
    private HuaweiMap huaweiMap;
    private Map<String, MapComponent> componentMap;
    private Context context;
    private PluginMapUISettings uiSettingsSetter;
    private PluginMapSetterGetter pluginMapSetterGetter;
    private PluginProjection pluginProjection;
    private MapListener mapListener;
    private MapCapsuleLayout capsuleLayout;

    private Map<String, String> registeredJSFunctions;

    public MapCapsule(Context mContext, MapListener mapListener, String divId, JSONObject mapOptions) {
        this.context = mContext;
        this.capsuleId = MapCapsule.getNewId();
        this.componentMap = new HashMap<>();
        this.mapListener = mapListener;
        this.divId = divId;
        this.textureMapView = new TextureMapView(mContext, JsonToObject.constructMapOptions(mapOptions.optJSONObject("mapOptions")));
        this.textureMapView.onCreate(null);
        this.uiSettingsSetter = new PluginMapUISettings(this);
        this.pluginMapSetterGetter = new PluginMapSetterGetter(this);
        this.pluginProjection = new PluginProjection(this);
        this.registeredJSFunctions = new HashMap<>();
        JSONObject json = mapOptions.optJSONObject("initialProps");
        InitialProps props = new InitialProps(json.optInt("x"),
                json.optInt("y"), json.optInt("width"), json.optInt("height"));
        props.setMarginTop(json.optInt("marginTop", 0));
        props.setMarginBottom(json.optInt("marginBottom", 0));
        this.capsuleLayout = new MapCapsuleLayout(textureMapView, context, props);
    }

    private synchronized static int getNewId(){
        return ++MapCapsule.id;
    }

    private void storeRegisteredJSEvents(String eventName, String function) {
        String newEvent = eventName.replace("setO", "o").replace("Listener", "");
        registeredJSFunctions.put(newEvent, function);
    }

    public JSONObject setMapListener(String eventName, JSONObject args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {

        Log.d(TAG, "setMapListener: " + args.optString("content"));
        storeRegisteredJSEvents(eventName, args.optString("content"));

        mapListener.bindListener(this.huaweiMap, eventName, this.capsuleId);
        return null;
    }

    public void addComponent(MapComponent mapComponent) {
        componentMap.put(mapComponent.getId(), mapComponent);
    }

    public boolean removeComponent(String componentId) {
        if (!componentMap.containsKey(componentId)) return false;
        componentMap.get(componentId).remove();
        componentMap.remove(componentId);
        return true;
    }

    public JSONObject moveCamera(String eventName, JSONObject json) throws JSONException {
        huaweiMap.moveCamera(JsonToObject.constructCameraUpdate(eventName, json));
        return null;
    }

    public JSONObject animateCamera(String eventName, JSONObject json) throws JSONException {
        int duration = json.optInt("duration", 250);
        huaweiMap.animateCamera(JsonToObject.constructCameraUpdate(eventName, json), duration,
                mapListener.cancelableCallback(capsuleId, json));
        return null;
    }

    public JSONObject setMapOptions(String optionType, String methodName, JSONObject args) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, JSONException {
        if (optionType.equals("setUiSettings")) return setMapUiSettings(methodName, args);
        else if (optionType.equals("getUiSettings")) return getMapUiSettings(methodName, args);
        else if (optionType.equals("setHuaweiMapOptions")) return setMapSettings(methodName, args);
        else if (optionType.equals("getHuaweiMapOptions")) return getMapSettings(methodName);
        else if (optionType.equals("moveCamera")) return moveCamera(methodName, args);
        else if (optionType.equals("animateCamera")) return animateCamera(methodName, args);
        else if (optionType.equals("setListener")) return setMapListener(methodName, args);
        else if (optionType.equals("projections")) return handleProjections(methodName, args);
        return null;
    }

    private JSONObject handleProjections(String methodName, JSONObject json) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        return pluginProjection.run(methodName, json);
    }

    private JSONObject getMapSettings(String methodName) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
        return pluginMapSetterGetter.run("getter", methodName, null);
    }

    public JSONObject setMapSettings(String methodName, JSONObject json) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        return pluginMapSetterGetter.run("setter", methodName, json);
    }

    public JSONObject setMapUiSettings(String methodName, JSONObject json) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        return uiSettingsSetter.run("setter", methodName, json);
    }

    public JSONObject getMapUiSettings(String methodName, JSONObject json) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        return uiSettingsSetter.run("getter", methodName, null);
    }

    public MapComponent getComponent(String id) {
        if (componentMap.containsKey(id)) {
            return componentMap.get(id);
        }
        return null;
    }

    public TextureMapView getTextureMapView() {
        return textureMapView;
    }

    public HuaweiMap getHuaweiMap() {
        return huaweiMap;
    }

    public void setHuaweiMap(HuaweiMap map) {
        this.huaweiMap = map;
    }

    public int getCapsuleId() {
        return capsuleId;
    }

    public MapListener getMapListener() {
        return mapListener;
    }

    public Map<String, MapComponent> getComponentMap() {
        return componentMap;
    }

    public Context getContext() {
        return context;
    }

    public MapCapsuleLayout getCapsuleLayout() {
        return capsuleLayout;
    }

    public Map<String, String> getRegisteredJSFunctions() {
        return registeredJSFunctions;
    }

    public String getDivId() {
        return divId;
    }
}
