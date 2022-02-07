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
import com.huawei.hms.maps.model.Polyline;
import com.huawei.hms.maps.model.PolylineOptions;

import org.json.JSONException;
import org.json.JSONObject;

public class PolylineCapsule extends MapComponent<Polyline> {
    private Context context;

    public PolylineCapsule(MapCapsule mapCapsule, PolylineOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addPolyline(options);
        this.context = mapCapsule.getContext();
    }

    @Override
    public void remove() {
        this.component.remove();
    }

    @Override
    public String getId() {
        return component.getId();
    }

    void setTag(JSONObject json) {
        component.setTag(json.opt("tag"));
    }

    void setPattern(JSONObject json) {
        component.setPattern(JsonToObject.constructPatternItemList(json.optJSONArray("pattern")));
    }

    JSONObject getStartCap() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromCap(component.getStartCap()));
    }

    JSONObject getEndCap() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromCap(component.getEndCap()));
    }

    void setEndCap(JSONObject json) {
        component.setEndCap(JsonToObject.constructCap(context, json.optJSONObject("cap")));
    }

    void setVisible(JSONObject json) {
        component.setVisible(json.optBoolean("visible"));
    }

    JSONObject getZIndex() throws JSONException {
        return new JSONObject().put("value", component.getZIndex());
    }

    JSONObject isClickable() throws JSONException {
        return new JSONObject().put("value", component.isClickable());
    }

    void setStartCap(JSONObject json) {
        component.setStartCap(JsonToObject.constructCap(context, json.optJSONObject("cap")));
    }

    void setWidth(JSONObject json) {
        component.setWidth((float) json.optDouble("width"));
    }

    JSONObject getColor() throws JSONException {
        return new JSONObject().put("value", component.getColor());
    }

    JSONObject getJointType() throws JSONException {
        return new JSONObject().put("value", component.getJointType());
    }

    void setColor(JSONObject json) {
        component.setColor(json.optInt("color"));
    }

    void setZIndex(JSONObject json) {
        component.setZIndex((float) json.optDouble("zIndex"));
    }

    JSONObject isGeodesic() throws JSONException {
        return new JSONObject().put("value", component.isGeodesic());
    }

    JSONObject getPoints() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromPoints(component.getPoints()));
    }

    void setJointType(JSONObject json) {
        component.setJointType(json.optInt("jointType"));
    }

    void setPoints(JSONObject json) {
        component.setPoints(JsonToObject.constructPoints(json.optJSONArray("points")));
    }

    JSONObject getPattern() throws JSONException {
        return new JSONObject().put("value", ObjectToJson.constructJsonFromStrokePattern(component.getPattern()));
    }

    JSONObject getTag() throws JSONException {
        return new JSONObject().put("value", component.getTag());
    }

    void setClickable(JSONObject json) {
        component.setClickable(json.optBoolean("clickable"));
    }

    void setGeodesic(JSONObject json) {
        component.setGeodesic(json.optBoolean("geodesic"));
    }

    JSONObject isVisible() throws JSONException {
        return new JSONObject().put("value", component.isVisible());
    }

    JSONObject getWidth() throws JSONException {
        return new JSONObject().put("value", component.getWidth());
    }
}
