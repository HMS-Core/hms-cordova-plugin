/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.map.components;

import static com.huawei.hms.cordova.map.utils.json.JsonToObject.constructObjectToMap;
import static com.huawei.hms.cordova.map.utils.json.JsonToObject.constructObjectToMap2;
import static com.huawei.hms.cordova.map.utils.json.JsonToObject.constructStringToRadiusUnit;

import android.content.Context;

import com.huawei.hms.cordova.map.listeners.ComponentListener;
import com.huawei.hms.cordova.map.maps.MapCapsule;
import com.huawei.hms.maps.model.HeatMap;
import com.huawei.hms.maps.model.HeatMapOptions;

import org.json.JSONException;
import org.json.JSONObject;

public class HeatMapCapsule extends MapComponent<HeatMap> {
    private final Context context;

    public HeatMapCapsule(String id, MapCapsule mapCapsule, HeatMapOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addHeatMap(id, options);
        this.context = mapCapsule.getContext();
    }

    void changeDataSet(JSONObject json) throws JSONException {
        this.component.changeDataSet(json.getString("jsonData"));
    }

    void changeDataSetId(JSONObject json) throws JSONException {
        this.component.changeDataSet(context, json.getInt("resourceId"));
    }

    @Override
    public String getId() {
        return component.getId();
    }

    public JSONObject getRadiusUnit() throws JSONException {
        return new JSONObject().put("value", component.getRadiusUnit());
    }

    void setRadiusUnit(JSONObject json) throws JSONException {
        this.component.setRadiusUnit(constructStringToRadiusUnit(json.getString("radiusUnit")));
    }

    @Override
    public void remove() {
        this.component.remove();
    }

    void setColor(JSONObject json) throws JSONException {
        this.component.setColor(constructObjectToMap2(json.getJSONObject("color")));
    }

    void setIntensity(JSONObject jsonobject) throws JSONException {
        this.component.setIntensity((float) jsonobject.getDouble("intensity"));
    }

    void setIntensities(JSONObject jsonobject) throws JSONException {
        this.component.setIntensity(constructObjectToMap(jsonobject.getJSONObject("intensities")));
    }

    void setOpacity(JSONObject jsonobject) throws JSONException {
        this.component.setOpacity((float) jsonobject.getDouble("opacity"));
    }

    void setOpacities(JSONObject jsonobject) throws JSONException {
        this.component.setOpacity(constructObjectToMap(jsonobject.getJSONObject("opacities")));
    }

    void setRadius(JSONObject jsonobject) throws JSONException {
        this.component.setRadius((float) jsonobject.getDouble("radius"));
    }

    void setRadiuses(JSONObject jsonobject) throws JSONException {
        this.component.setRadius(constructObjectToMap(jsonobject.getJSONObject("radiuses")));
    }

    void setVisible(JSONObject jsonobject) throws JSONException {
        this.component.setVisible(jsonobject.getBoolean("visible"));
    }
}
