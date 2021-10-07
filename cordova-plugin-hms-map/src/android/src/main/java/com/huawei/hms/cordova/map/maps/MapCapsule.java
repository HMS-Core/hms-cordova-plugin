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

package com.huawei.hms.cordova.map.maps;

import android.content.Context;
import android.graphics.Rect;
import android.util.Log;

import com.huawei.hms.cordova.map.PluginCordovaLayout;
import com.huawei.hms.cordova.map.components.MapComponent;
import com.huawei.hms.cordova.map.listeners.MapListener;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.TextureMapView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public final class MapCapsule {
    private final static String TAG = MapCapsule.class.getSimpleName();

    private static int id = 0;
    private final String divId;
    private int capsuleId;
    private boolean isActive;
    private boolean isClickable;

    private TextureMapView textureMapView;
    private HuaweiMap huaweiMap;
    private Context context;
    private PluginMapUISettings uiSettingsSetter;
    private PluginMapSetterGetter pluginMapSetterGetter;
    private PluginProjection pluginProjection;
    private MapListener mapListener;
    private MapCapsuleLayout capsuleLayout;

    private Map<String, MapComponent> componentMap = new ConcurrentHashMap<>();
    private Set<Rect> htmlElementOverlappingSet = new HashSet<>();

    public MapCapsule(Context mContext, MapListener mapListener, String divId, JSONObject mapOptions) {
        this.context = mContext;
        this.capsuleId = MapCapsule.getNewId();
        this.mapListener = mapListener;
        this.divId = divId;
        this.textureMapView = new TextureMapView(mContext, JsonToObject.constructMapOptions(mapOptions.optJSONObject("mapOptions")));
        this.textureMapView.onCreate(null);
        this.uiSettingsSetter = new PluginMapUISettings(this);
        this.pluginMapSetterGetter = new PluginMapSetterGetter(this);
        this.pluginProjection = new PluginProjection(this);
        this.isActive = true;
        this.isClickable = true;

        InitialProps props = json2InitialProps(mapOptions.optJSONObject("initialProps"));
        this.capsuleLayout = new MapCapsuleLayout(textureMapView, context, props);
    }

    private InitialProps json2InitialProps(JSONObject j) {
        return new InitialProps(j.optInt("x"), j.optInt("y"), j.optInt("width"), j.optInt("height"));
    }

    public void addHTMLElements(List<Rect> rectList) {
        htmlElementOverlappingSet.addAll(rectList);
    }

    public void removeElements(List<Rect> rectList) {
        htmlElementOverlappingSet.removeAll(rectList);
    }

    private synchronized static int getNewId(){
        return ++MapCapsule.id;
    }


    public JSONObject setMapListener(String eventName) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException {
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
        switch (optionType) {
            case "setUiSettings":
                return setMapUiSettings(methodName, args);
            case "getUiSettings":
                return getMapUiSettings(methodName, args);
            case "setHuaweiMapOptions":
                return setMapSettings(methodName, args);
            case "getHuaweiMapOptions":
                return getMapSettings(methodName);
            case "moveCamera":
                return moveCamera(methodName, args);
            case "animateCamera":
                return animateCamera(methodName, args);
            case "setListener":
                return setMapListener(methodName);
            case "projections":
                return handleProjections(methodName, args);
        }
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

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isClickable() {
        return isClickable;
    }

    public void setClickable(boolean clickable) {
        isClickable = clickable;
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

    public String getDivId() {
        return divId;
    }

    public Set<Rect> getHtmlElementOverlappingSet() {
        return htmlElementOverlappingSet;
    }
}
