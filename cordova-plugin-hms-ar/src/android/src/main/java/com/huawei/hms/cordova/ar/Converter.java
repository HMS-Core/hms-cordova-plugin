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

package com.huawei.hms.cordova.ar;

import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBase;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBody;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigFace;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigHand;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigWorld;
import com.huawei.hms.plugin.ar.core.config.ColorRGBA;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;

public class Converter {

    public static JSONArray listToJSONArray(List<Map<String, Object>> listOfMaps) {
        return new JSONArray(listOfMaps);
    }

    public static ARPluginConfigBase configFrom(String sceneType, JSONObject json) {
        if (sceneType.equals("ARWorld")) return configWorldFrom(json);
        else if (sceneType.equals("ARFace")) return configFaceFrom(json);
        else if (sceneType.equals("ARBody")) return configBodyFrom(json);
        else return configHandFrom(json);
    }

    private static ARPluginConfigWorld configWorldFrom(JSONObject json) {
        ARPluginConfigWorld configWorld = new ARPluginConfigWorld();
        if (json == null) return configWorld;
        if (json.has("objPath")) configWorld.setObjPath(json.optString("objPath"));
        if (json.has("texturePath")) configWorld.setTexturePath(json.optString("texturePath"));
        if (json.has("labelDraw")) configWorld.setLabelDraw(json.optBoolean("labelDraw"));
        if (json.has("imageOther")) configWorld.setImageOther(json.optString("imageOther"));
        if (json.has("imageWall")) configWorld.setImageWall(json.optString("imageWall"));
        if (json.has("imageFloor")) configWorld.setImageFloor(json.optString("imageFloor"));
        if (json.has("imageSeat")) configWorld.setImageSeat(json.optString("imageSeat"));
        if (json.has("imageTable")) configWorld.setImageTable(json.optString("imageTable"));
        if (json.has("imageCeiling")) configWorld.setImageCeiling(json.optString("imageCeiling"));
        if (json.has("textOther")) configWorld.setTextOther(json.optString("textOther"));
        if (json.has("textWall")) configWorld.setTextWall(json.optString("textWall"));
        if (json.has("textFloor")) configWorld.setTextFloor(json.optString("textFloor"));
        if (json.has("textSeat")) configWorld.setTextSeat(json.optString("textSeat"));
        if (json.has("textTable")) configWorld.setTextTable(json.optString("textTable"));
        if (json.has("textCeiling")) configWorld.setTextCeiling(json.optString("textCeiling"));
        if (json.has("colorOther"))
            configWorld.setColorOther(colorRGBAFrom(json.optJSONObject("colorOther")));
        if (json.has("colorWall"))
            configWorld.setColorWall(colorRGBAFrom(json.optJSONObject("colorWall")));
        if (json.has("colorFloor"))
            configWorld.setColorFloor(colorRGBAFrom(json.optJSONObject("colorFloor")));
        if (json.has("colorSeat"))
            configWorld.setColorSeat(colorRGBAFrom(json.optJSONObject("colorSeat")));
        if (json.has("colorTable"))
            configWorld.setColorTable(colorRGBAFrom(json.optJSONObject("colorTable")));
        if (json.has("colorCeiling"))
            configWorld.setColorCeiling(colorRGBAFrom(json.optJSONObject("colorCeiling")));
        return configWorld;
    }

    private static ARPluginConfigFace configFaceFrom(JSONObject json) {
        ARPluginConfigFace configFace = new ARPluginConfigFace();
        if (json == null) return configFace;
        configFace.setDrawFace(json.optBoolean("drawFace", true));
        if (json.has("texturePath")) configFace.setTexturePath(json.optString("texturePath"));
        if (json.has("pointSize")) configFace.setPointSize((float) json.optDouble("pointSize"));
        if (json.has("depthColor"))
            configFace.setDepthColor(colorRGBAFrom(json.optJSONObject("depthColor")));
        return configFace;
    }

    private static ARPluginConfigHand configHandFrom(JSONObject json) {
        ARPluginConfigHand configHand = new ARPluginConfigHand();
        if (json == null) return configHand;
        configHand.setDrawBox(json.optBoolean("drawBox", true));
        if (json.has("lineWidth")) configHand.setLineWidth((float) json.optDouble("lineWidth"));
        if (json.has("boxColor"))
            configHand.setBoxColor(colorRGBAFrom(json.optJSONObject("boxColor")));
        return configHand;
    }

    private static ARPluginConfigBody configBodyFrom(JSONObject json) {
        ARPluginConfigBody configBody = new ARPluginConfigBody();
        if (json == null) return configBody;
        configBody.setDrawPoint(json.optBoolean("drawPoint", true));
        configBody.setDrawLine(json.optBoolean("drawLine", true));
        if (json.has("lineWidth")) configBody.setLineWidth((float) json.optDouble("lineWidth"));
        if (json.has("pointSize")) configBody.setPointSize((float) json.optDouble("pointSize"));
        if (json.has("lineColor"))
            configBody.setLineColor(colorRGBAFrom(json.optJSONObject("lineColor")));
        if (json.has("pointColor"))
            configBody.setPointColor(colorRGBAFrom(json.optJSONObject("pointColor")));
        return configBody;
    }

    private static ColorRGBA colorRGBAFrom(JSONObject json) {
        return new ColorRGBA(json.optInt("red", 0), json.optInt("green", 0),
                json.optInt("blue", 0), json.optInt("alpha", 0));
    }

    public static PluginLayoutManager.InitialProps initialPropsFrom(JSONObject json) {
        return new PluginLayoutManager.InitialProps(
                json.optInt("x"),
                json.optInt("y"),
                json.optInt("width"),
                json.optInt("height"),
                json.optInt("marginLeft"),
                json.optInt("marginTop"),
                json.optInt("marginBottom"),
                json.optInt("marginRight")
        );
    }
}
