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

import android.graphics.Point;

import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.model.LatLng;
import com.huawei.hms.maps.model.VisibleRegion;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class PluginProjection {
    private MapCapsule mapCapsule;

    public PluginProjection(MapCapsule mapCapsule) {
        this.mapCapsule = mapCapsule;
    }

    JSONObject run(String methodName, JSONObject object) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Method m = this.getClass().getDeclaredMethod(methodName, JSONObject.class);
        return (JSONObject) m.invoke(this, object);

    }

    public JSONObject fromScreenLocation(JSONObject json) throws JSONException {
        LatLng latLng = mapCapsule.getHuaweiMap().getProjection().fromScreenLocation(JsonToObject.constructPoint(json.getJSONObject("point")));
        return ObjectToJson.constructJsonFromLatLng(latLng);
    }

    public JSONObject toScreenLocation(JSONObject json) throws JSONException {
        Point point = mapCapsule.getHuaweiMap().getProjection().toScreenLocation(JsonToObject.constructLatLng(json.getJSONObject("latLng")));
        return ObjectToJson.constructJsonFromPoint(point);
    }

    public JSONObject getVisibleRegion(JSONObject json) throws JSONException {
        VisibleRegion visibleRegion = mapCapsule.getHuaweiMap().getProjection().getVisibleRegion();
        return ObjectToJson.constructJsonFromVisibleRegion(visibleRegion);
    }
}
