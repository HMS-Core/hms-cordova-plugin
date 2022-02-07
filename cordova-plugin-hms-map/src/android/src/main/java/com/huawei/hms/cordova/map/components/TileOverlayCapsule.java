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
import com.huawei.hms.maps.model.TileOverlay;
import com.huawei.hms.maps.model.TileOverlayOptions;

import org.json.JSONException;
import org.json.JSONObject;

public class TileOverlayCapsule extends MapComponent<TileOverlay> {


    public TileOverlayCapsule(MapCapsule mapCapsule, TileOverlayOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addTileOverlay(options);
    }

    void setVisible(JSONObject json) {
        component.setVisible(json.optBoolean("visible"));
    }

    JSONObject getFadeIn() throws JSONException {
        return new JSONObject().put("value", component.getFadeIn());
    }

    void setFadeIn(JSONObject json) {
        component.setFadeIn(json.optBoolean("fadeIn"));
    }

    JSONObject getTransparency() throws JSONException {
        return new JSONObject().put("value", component.getTransparency());
    }

    void setTransparency(JSONObject json) {
        component.setTransparency((float) json.optDouble("transparency"));
    }

    JSONObject getZIndex() throws JSONException {
        return new JSONObject().put("value", component.getZIndex());
    }

    void setZIndex(JSONObject json) {
        component.setZIndex((float) json.optDouble("zIndex"));
    }

    JSONObject clearTileCache() {
        component.clearTileCache();
        return null;
    }

    @Override
    public String getId() {
        return component.getId();
    }

    JSONObject isVisible() throws JSONException {
        return new JSONObject().put("value", component.isVisible());
    }

    @Override
    public void remove() {
        this.component.remove();
    }
}
