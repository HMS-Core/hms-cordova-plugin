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
import com.huawei.hms.maps.model.LatLng;
import com.huawei.hms.maps.model.Polygon;
import com.huawei.hms.maps.model.PolygonOptions;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class PolygonCapsule extends MapComponent<Polygon> {


    public PolygonCapsule(MapCapsule mapCapsule, PolygonOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addPolygon(options);
    }

    void setClickable(JSONObject json) {
        component.setClickable(json.optBoolean("clickable"));
    }

    void setGeodesic(JSONObject json) {
        component.setGeodesic(json.optBoolean("geodesic"));
    }

    void setVisible(JSONObject json) {
        component.setVisible(json.optBoolean("visible"));
    }

    JSONObject isClickable() throws JSONException {
        return new JSONObject().put("value", component.isClickable());
    }

    JSONObject getFillColor() throws JSONException {
        return new JSONObject().put("value", component.getFillColor());
    }

    JSONObject isGeodesic() throws JSONException {
        return new JSONObject().put("value", component.isGeodesic());
    }

    void setFillColor(JSONObject json) {
        component.setFillColor(json.optInt("fillColor"));
    }

    void setHoles(JSONObject json) {
        component.setHoles(JsonToObject.constructHoles(json.optJSONArray("holes")));
    }

    void setPoints(JSONObject json) {
        component.setPoints(JsonToObject.constructPoints(json.optJSONArray("points")));
    }

    JSONObject getHoles() throws JSONException {
        JSONArray outerArr = new JSONArray();
        for (int i = 0; i < component.getHoles().size(); i++) {
            JSONArray innerArr = new JSONArray();
            for (int j = 0; j < component.getHoles().get(i).size(); j++) {
                JSONObject elem = new JSONObject();
                elem.put("lat", component.getHoles().get(i).get(j).latitude);
                elem.put("lng", component.getHoles().get(i).get(j).longitude);
                innerArr.put(elem);
            }
            outerArr.put(innerArr);
        }
        return new JSONObject().put("value", outerArr);
    }

    JSONObject getStrokeColor() throws JSONException {
        return new JSONObject().put("value", component.getStrokeColor());
    }

    JSONObject getPoints() throws JSONException {
        List<LatLng> pointList = component.getPoints();
        JSONArray array = new JSONArray();
        for (LatLng latLng : pointList) {
            array.put(new JSONObject().put("lat", latLng.latitude).put("lng", latLng.longitude));
        }
        return new JSONObject().put("value", array);
    }

    void setStrokeColor(JSONObject json) {
        component.setStrokeColor(json.optInt("strokeColor"));
    }

    @Override
    public String getId() {
        return component.getId();
    }

    void setStrokePattern(JSONObject json) {
        component.setStrokePattern(JsonToObject.constructPatternItemList(json.optJSONArray("strokePattern")));
    }

    void setStrokeJointType(JSONObject json) {
        component.setStrokeJointType(json.optInt("strokeJointType"));
    }

    JSONObject getStrokeJointType() throws JSONException {
        return new JSONObject().put("value", component.getStrokeJointType());
    }

    JSONObject getStrokePattern() throws JSONException {
        JSONArray obj = new JSONArray();
        for (int i = 0; i < component.getStrokePattern().size(); i++) {
            JSONObject elem = new JSONObject();
            elem.put("type", component.getStrokePattern().get(i).type);
            elem.put("length", component.getStrokePattern().get(i).length);
            obj.put(elem);
        }
        return new JSONObject().put("value", obj);
    }

    JSONObject getStrokeWidth() throws JSONException {
        return new JSONObject().put("value", component.getStrokeWidth());
    }

    void setStrokeWidth(JSONObject json) {
        component.setStrokeWidth((float) json.optDouble("strokeWidth"));
    }

    void setTag(JSONObject json) {
        component.setTag(json.opt("tag"));
    }

    void setZIndex(JSONObject json) {
        component.setZIndex((float) json.optDouble("zIndex"));
    }

    JSONObject getTag() throws JSONException {
        return new JSONObject().put("value", component.getTag());
    }

    JSONObject isVisible() throws JSONException {
        return new JSONObject().put("value", component.isVisible());
    }

    JSONObject getZIndex() throws JSONException {
        return new JSONObject().put("value", component.getZIndex());
    }

    @Override
    public void remove() {
        this.component.remove();
    }
}
