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

import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.maps.model.BitmapDescriptor;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

class PluginMapUISettings {

    private final UiSettingsSetter setter = new UiSettingsSetter();
    private final UiSettingsGetter getter = new UiSettingsGetter();
    private MapCapsule mapCapsule;

    public PluginMapUISettings(MapCapsule mapCapsule) {
        this.mapCapsule = mapCapsule;
    }

    JSONObject run(String option, String methodName, JSONObject object) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        JSONObject json = null;
        if (option.equals("setter")) {
            setter.run(methodName, object);
        } else {
            json = getter.run(methodName);
        }
        return json;
    }

    ////////////////////////////////////////////// UI SETTINGS SETTER CAPSULE ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////// UI SETTINGS SETTER CAPSULE /////////////////////////////////////////////////////////////
    private class UiSettingsSetter {

        void setZoomGesturesEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setZoomGesturesEnabled(val.optBoolean("zoomGesturesEnabled"));
        }

        void setTiltGesturesEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setTiltGesturesEnabled(val.optBoolean("tiltGesturesEnabled"));
        }

        void setZoomControlsEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setZoomControlsEnabled(val.optBoolean("zoomControlsEnabled"));
        }

        void setScrollGesturesEnabledDuringRotateOrZoom(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setScrollGesturesEnabledDuringRotateOrZoom(val.optBoolean("scrollGesturesEnabledDuringRotateOrZoom"));
        }

        void setScrollGesturesEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setScrollGesturesEnabled(val.optBoolean("scrollGesturesEnabled"));
        }

        void setRotateGesturesEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setRotateGesturesEnabled(val.optBoolean("rotateGesturesEnabled"));
        }

        void setMyLocationButtonEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setMyLocationButtonEnabled(val.optBoolean("myLocationButtonEnabled"));
        }

        void setAllGesturesEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setAllGesturesEnabled(val.optBoolean("allGesturesEnabled"));
        }

        void setCompassEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setCompassEnabled(val.optBoolean("compassEnabled"));
        }

        void setIndoorLevelPickerEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setIndoorLevelPickerEnabled(val.optBoolean("indoorLevelPickerEnabled"));
        }

        void setMapToolbarEnabled(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setMapToolbarEnabled(val.optBoolean("mapToolbarEnabled"));
        }

        void setGestureScaleByMapCenter(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setGestureScaleByMapCenter(val.optBoolean("gestureScaleByMapCenterEnabled"));
        }

        void setMarkerClusterColor(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setMarkerClusterColor(val.optInt("markerClusterColor"));
        }

        void setMarkerClusterIcon(JSONObject val) {
            BitmapDescriptor bitmap = null;
            if (val.optJSONObject("markerClusterIcon") != null)
                bitmap = JsonToObject.constructBitmapDescriptor(mapCapsule.getContext(), val.optJSONObject("markerClusterIcon"));
            mapCapsule.getHuaweiMap().getUiSettings().setMarkerClusterIcon(bitmap);
        }

        void setMarkerClusterTextColor(JSONObject val) {
            mapCapsule.getHuaweiMap().getUiSettings().setMarkerClusterTextColor(val.optInt("markerClusterTextColor"));
        }

        void run(String methodName, JSONObject args) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            Method m = this.getClass().getDeclaredMethod(methodName, JSONObject.class);
            m.invoke(setter, args);
        }
    }

    ////////////////////////////////////////////// UI SETTINGS GETTER CAPSULE ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////// UI SETTINGS GETTER CAPSULE /////////////////////////////////////////////////////////////


    private class UiSettingsGetter {

        JSONObject isZoomGesturesEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isZoomGesturesEnabled());
        }

        JSONObject isTiltGesturesEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isTiltGesturesEnabled());
        }

        JSONObject isZoomControlsEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isZoomControlsEnabled());
        }

        JSONObject isScrollGesturesEnabledDuringRotateOrZoom() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isScrollGesturesEnabledDuringRotateOrZoom());
        }

        JSONObject isScrollGesturesEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isScrollGesturesEnabled());
        }

        JSONObject isRotateGesturesEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isRotateGesturesEnabled());
        }

        JSONObject isMyLocationButtonEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isMyLocationButtonEnabled());
        }

        JSONObject isAllGesturesEnabled() throws JSONException {
            JSONObject innerJson = new JSONObject().put("rotateGesturesEnabled", mapCapsule.getHuaweiMap().getUiSettings().isRotateGesturesEnabled())
                    .put("scrollGesturesEnabled", mapCapsule.getHuaweiMap().getUiSettings().isScrollGesturesEnabled())
                    .put("zoomGesturesEnabled", mapCapsule.getHuaweiMap().getUiSettings().isZoomGesturesEnabled())
                    .put("tiltGesturesEnabled", mapCapsule.getHuaweiMap().getUiSettings().isTiltGesturesEnabled())
                    .put("scrollGesturesEnabledDuringRotateOrZoom", mapCapsule.getHuaweiMap().getUiSettings().isScrollGesturesEnabledDuringRotateOrZoom());
            return new JSONObject().put("value", innerJson);
        }

        JSONObject isCompassEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isCompassEnabled());
        }

        JSONObject isIndoorLevelPickerEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isIndoorLevelPickerEnabled());
        }

        JSONObject isMapToolbarEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getUiSettings().isMapToolbarEnabled());
        }

        JSONObject run(String methodName) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            Method m = this.getClass().getDeclaredMethod(methodName);
            return (JSONObject) m.invoke(getter);
        }
    }
}
