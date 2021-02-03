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

import com.huawei.hms.cordova.map.listeners.ComponentListener;
import com.huawei.hms.cordova.map.maps.MapCapsule;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.model.Circle;
import com.huawei.hms.maps.model.CircleOptions;

import org.json.JSONException;
import org.json.JSONObject;

public final class CircleCapsule extends MapComponent<Circle> {

    public CircleCapsule(MapCapsule mapCapsule, CircleOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addCircle(options);
    }

    void setClickable(JSONObject json) {
        component.setClickable(json.optBoolean("clickable"));
    }

    void setVisible(JSONObject json) {
        component.setVisible(json.optBoolean("visible"));
    }

    void setCenter(JSONObject json) {
        component.setCenter(JsonToObject.constructLatLng(json.optJSONObject("center")));
    }

    void setFillColor(JSONObject json) {
        component.setFillColor(json.optInt("fillColor"));
    }

    void setRadius(JSONObject json) {
        component.setRadius(json.optDouble("radius"));
    }

    void setStrokeColor(JSONObject json) {
        component.setStrokeColor(json.optInt("strokeColor"));
    }

    void setStrokeWidth(JSONObject json) {
        component.setStrokeWidth((float) json.optDouble("strokeWidth"));
    }

    void setStrokePattern(JSONObject json) throws JSONException {
        component.setStrokePattern(JsonToObject.constructPatternItemList(json.getJSONArray("strokePattern")));
    }

    void setTag(JSONObject json) {
        component.setTag(json.opt("tag"));
    }

    void setZIndex(JSONObject json) {
        component.setZIndex((float) json.optDouble("zIndex"));
    }

    JSONObject isVisible() throws JSONException {
        return new JSONObject().put("value", component.isVisible());
    }

    JSONObject isClickable() throws JSONException {
        return new JSONObject().put("value", component.isClickable());
    }

    @Override
    public String getId() {
        return component.getId();
    }

    JSONObject getStrokeWidth() throws JSONException {
        return new JSONObject().put("value", component.getStrokeWidth());
    }

    JSONObject getStrokeColor() throws JSONException {
        return new JSONObject().put("value", component.getStrokeColor());
    }

    JSONObject getStrokePattern() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromStrokePattern(component.getStrokePattern()));
    }

    JSONObject getTag() throws JSONException {
        return new JSONObject().put("value", component.getTag());
    }

    JSONObject getFillColor() throws JSONException {
        return new JSONObject().put("value", component.getFillColor());
    }

    JSONObject getCenter() throws JSONException {
        JSONObject center = new JSONObject().put("lat", component.getCenter().latitude).put("lng", component.getCenter().longitude);
        return new JSONObject().put("value", center);
    }

    JSONObject getRadius() throws JSONException {
        return new JSONObject().put("value", component.getRadius());
    }

    @Override
    public void remove() {
        this.component.remove();
    }

    JSONObject getZIndex() throws JSONException {
        return new JSONObject().put("value", component.getZIndex());
    }
}
