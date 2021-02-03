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

package com.huawei.hms.cordova.map.components;

import android.content.Context;

import com.huawei.hms.cordova.map.listeners.ComponentListener;
import com.huawei.hms.cordova.map.maps.MapCapsule;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.model.GroundOverlay;
import com.huawei.hms.maps.model.GroundOverlayOptions;

import org.json.JSONException;
import org.json.JSONObject;

public final class GroundOverlayCapsule extends MapComponent<GroundOverlay> {
    private Context context;

    public GroundOverlayCapsule(MapCapsule mapCapsule, GroundOverlayOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addGroundOverlay(options);
        this.context = mapCapsule.getContext();
    }

    JSONObject isVisible() throws JSONException {
        return new JSONObject().put("value", component.isVisible());
    }

    JSONObject getHeight() throws JSONException {
        return new JSONObject().put("value", component.getHeight());
    }

    JSONObject getBearing() throws JSONException {
        return new JSONObject().put("value", component.getBearing());
    }

    JSONObject getPosition() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromLatLng(component.getPosition()));
    }

    void setClickable(JSONObject json) {
        component.setClickable(json.optBoolean("clickable"));
    }

    void setDimensions(JSONObject json) {
        // if v and v1 are exists call the second function otherwise call the first function.
        if (!json.has("height")) component.setDimensions((float) json.optDouble("width"));
        else
            component.setDimensions((float) json.optDouble("width"), (float) json.optDouble("height"));
    }

    void setVisible(JSONObject json) {
        component.setVisible(json.optBoolean("visible"));
    }

    void setBearing(JSONObject json) {
        component.setBearing((float) json.optDouble("bearing"));
    }

    JSONObject getBounds() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromBounds(component.getBounds()));
    }

    JSONObject getTag() throws JSONException {
        return new JSONObject().put("value", component.getTag());
    }

    JSONObject getTransparency() throws JSONException {
        return new JSONObject().put("value", component.getTransparency());
    }

    JSONObject getZIndex() throws JSONException {
        return new JSONObject().put("value", component.getZIndex());
    }

    void setPosition(JSONObject json) throws JSONException {
        component.setPosition(JsonToObject.constructLatLng(json.getJSONObject("position")));
    }

    void setTag(JSONObject json) {
        component.setTag(json.opt("tag"));
    }


    void setTransparency(JSONObject json) {
        component.setTransparency((float) json.optDouble("transparency"));
    }

    void setImage(JSONObject json) {
        component.setImage(JsonToObject.constructBitmapDescriptor(context,json.optJSONObject("image")));
    }

    JSONObject isClickable() throws JSONException {
        return new JSONObject().put("value", component.isClickable());
    }

    JSONObject getWidth() throws JSONException {
        return new JSONObject().put("value", component.getWidth());
    }

    void setPositionFromBounds(JSONObject json) {
        component.setPositionFromBounds(JsonToObject.constructLatLngBounds(json.optJSONObject("bounds")));
    }

    void setZIndex(JSONObject json) {
        component.setZIndex((float) json.optDouble("zIndex"));
    }

    @Override
    public void remove() {
        this.component.remove();
    }

    @Override
    public String getId() {
        return component.getId();
    }

}
