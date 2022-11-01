/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

import com.huawei.hiar.ARConfigBase;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigAugmentedImage;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBase;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBasePointLine;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBaseWorld;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBody;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigFace;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigHand;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigSceneMesh;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigWorld;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigWorldBody;
import com.huawei.hms.plugin.ar.core.config.ColorRGBA;
import com.huawei.hms.plugin.ar.core.model.AugmentedImageDBModel;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class Converter {

    public static JSONArray listToJSONArray(List<Map<String, Object>> listOfMaps) {
        return new JSONArray(listOfMaps);
    }

    public static ARPluginConfigBase configFrom(String sceneType, JSONObject json) {
        if (sceneType.equals("ARWorld")) {
            return configWorldFrom(json);
        } else if (sceneType.equals("ARFace")) {
            return configFaceFrom(json);
        } else if (sceneType.equals("ARBody")) {
            return configBodyFrom(json);
        } else if (sceneType.equals("ARHand")) {
            return configHandFrom(json);
        } else if (sceneType.equals("ARWorldBody")) {
            return configWorldBodyFrom(json);
        } else if (sceneType.equals("ARAugmentedImage")) {
            return configAugmentedImageFrom(json);
        } else {
            return configSceneMeshFrom(json);
        }
    }

    private static ARPluginConfigWorld configWorldFrom(JSONObject json) {
        ARPluginConfigWorld configWorld = new ARPluginConfigWorld();
        if (json == null) {
            return configWorld;
        }

        setWorldConfig(json, configWorld);

        if (json.has("augmentedImages")) {
            JSONArray paramsAI = json.optJSONArray("augmentedImages");
            configWorld.setAugmentedImageDBModels(Converter.toAugmentedImageDBModelList(paramsAI));
        }
        if (json.has("planeFindingMode")) {
            configWorld.setPlaneFindingMode(Converter.intToPlaneFindingModeEnum(json.optInt("planeFindingMode")));
        }
        return configWorld;
    }

    private static ARPluginConfigFace configFaceFrom(JSONObject json) {
        ARPluginConfigFace configFace = new ARPluginConfigFace();
        if (json == null) {
            return configFace;
        }
        configFace.setDrawFace(json.optBoolean("drawFace", true));
        if (json.has("texturePath")) {
            configFace.setTexturePath(json.optString("texturePath"));
        }
        if (json.has("pointSize")) {
            configFace.setPointSize((float) json.optDouble("pointSize"));
        }
        if (json.has("depthColor")) {
            configFace.setDepthColor(colorRGBAFrom(json.optJSONObject("depthColor")));
        }
        if (json.has("cameraLensFacing")) {
            if (json.optInt("cameraLensFacing") == ARConfigBase.CameraLensFacing.REAR.ordinal()) {
                configFace.setCameraLensFacing(ARConfigBase.CameraLensFacing.REAR);
            }
        }
        if (json.has("enableHealthDevice")) {
            configFace.setHealth(json.optBoolean("enableHealthDevice"));
        }
        if (json.has("multiFace")) {
            configFace.setMultiFace(json.optBoolean("multiFace"));
        }
        setCommonConfig(json, configFace);
        return configFace;
    }

    private static ARPluginConfigHand configHandFrom(JSONObject json) {
        ARPluginConfigHand configHand = new ARPluginConfigHand();
        if (json == null) {
            return configHand;
        }
        configHand.setDrawBox(json.optBoolean("drawBox", true));
        if (json.has("lineWidth")) {
            configHand.setLineWidth((float) json.optDouble("lineWidth"));
        }
        if (json.has("boxColor")) {
            configHand.setBoxColor(colorRGBAFrom(json.optJSONObject("boxColor")));
        }
        if (json.has("cameraLensFacing")) {
            if (json.optInt("cameraLensFacing") == ARConfigBase.CameraLensFacing.REAR.ordinal()) {
                configHand.setCameraLensFacing(ARConfigBase.CameraLensFacing.REAR);
            }
        }
        if (json.has("lineWidthSkeleton")) {
            configHand.setLineWidthSkeleton((float) json.optDouble("lineWidthSkeleton"));
        }

        setPointLineConfig(json, configHand);
        return configHand;
    }

    private static ARPluginConfigBody configBodyFrom(JSONObject json) {
        ARPluginConfigBody configBody = new ARPluginConfigBody();
        if (json == null) {
            return configBody;
        }
        setPointLineConfig(json, configBody);
        return configBody;
    }

    private static ColorRGBA colorRGBAFrom(JSONObject json) {
        return new ColorRGBA(json.optInt("red", 0), json.optInt("green", 0), json.optInt("blue", 0),
            json.optInt("alpha", 0));
    }

    public static PluginLayoutManager.InitialProps initialPropsFrom(JSONObject json) {
        return new PluginLayoutManager.InitialProps(json.optInt("x"), json.optInt("y"), json.optInt("width"),
            json.optInt("height"), json.optInt("marginLeft"), json.optInt("marginTop"), json.optInt("marginBottom"),
            json.optInt("marginRight"));
    }

    private static ARPluginConfigWorldBody configWorldBodyFrom(JSONObject json) {
        ARPluginConfigWorldBody configWorldBody = new ARPluginConfigWorldBody();
        if (json == null) {
            return configWorldBody;
        }

        setWorldConfig(json, configWorldBody);
        if (json.has("planeFindingMode")) {
            configWorldBody.setPlaneFindingMode(Converter.intToPlaneFindingModeEnum(json.optInt("planeFindingMode")));
        }

        return configWorldBody;
    }

    public static ARConfigBase.PlaneFindingMode intToPlaneFindingModeEnum(int val) {
        if (val == ARConfigBase.PlaneFindingMode.DISABLED.ordinal()) {
            return ARConfigBase.PlaneFindingMode.DISABLED;
        } else if (val == ARConfigBase.PlaneFindingMode.VERTICAL_ONLY.ordinal()) {
            return ARConfigBase.PlaneFindingMode.VERTICAL_ONLY;
        } else if (val == ARConfigBase.PlaneFindingMode.HORIZONTAL_ONLY.ordinal()) {
            return ARConfigBase.PlaneFindingMode.HORIZONTAL_ONLY;
        } else {
            return ARConfigBase.PlaneFindingMode.ENABLE;
        }
    }

    private static ARPluginConfigSceneMesh configSceneMeshFrom(JSONObject json) {
        ARPluginConfigSceneMesh configSceneMesh = new ARPluginConfigSceneMesh();
        if (json == null) {
            return configSceneMesh;
        }
        if (json.has("objPath")) {
            configSceneMesh.setObjPath(json.optString("objPath"));
        }
        if (json.has("texturePath")) {
            configSceneMesh.setTexturePath(json.optString("texturePath"));
        }
        setCommonConfig(json, configSceneMesh);
        return configSceneMesh;
    }

    private static ARPluginConfigAugmentedImage configAugmentedImageFrom(JSONObject json) {
        ARPluginConfigAugmentedImage configImageConfig = new ARPluginConfigAugmentedImage();
        if (json == null) {
            return configImageConfig;
        }
        if (json.has("augmentedImages")) {
            JSONArray paramsAI = json.optJSONArray("augmentedImages");
            configImageConfig.setAugmentedImageDBModels(Converter.toAugmentedImageDBModelList(paramsAI));
        }
        setPointLineConfig(json, configImageConfig);
        return configImageConfig;
    }

    private static void setCommonConfig(JSONObject json, ARPluginConfigBase configPlugin) {
        if (json.has("semantic")) {
            JSONObject paramsSemantic = json.optJSONObject("semantic");
            if (paramsSemantic.has("mode")) {
                configPlugin.setSemanticMode(paramsSemantic.optInt("mode"));
            }
            if (paramsSemantic.has("showSemanticModeSupportedInfo")) {
                configPlugin.setShowSemanticSupportedInfo(paramsSemantic.optBoolean("showSemanticModeSupportedInfo"));
            }
        }
        if (json.has("lightMode")) {
            configPlugin.setLightMode(json.optInt("lightMode"));
        }
        if (json.has("focusMode")) {
            configPlugin.setFocusMode(Converter.intToFocusModeEnum(json.optInt("focusMode")));
        }
        if (json.has("powerMode")) {
            configPlugin.setPowerMode(Converter.intToPowerModeEnum(json.optInt("powerMode")));
        }
        if (json.has("updateMode")) {
            configPlugin.setUpdateMode(Converter.intToUpdateModeEnum(json.optInt("updateMode")));
        }
    }

    public static ARConfigBase.FocusMode intToFocusModeEnum(int val) {
        if (val == ARConfigBase.FocusMode.FIXED_FOCUS.ordinal()) {
            return ARConfigBase.FocusMode.FIXED_FOCUS;
        }
        return ARConfigBase.FocusMode.AUTO_FOCUS;
    }

    public static ARConfigBase.PowerMode intToPowerModeEnum(int val) {
        if (val == ARConfigBase.PowerMode.NORMAL.ordinal()) {
            return ARConfigBase.PowerMode.NORMAL;
        } else if (val == ARConfigBase.PowerMode.POWER_SAVING.ordinal()) {
            return ARConfigBase.PowerMode.POWER_SAVING;
        } else if (val == ARConfigBase.PowerMode.ULTRA_POWER_SAVING.ordinal()) {
            return ARConfigBase.PowerMode.ULTRA_POWER_SAVING;
        } else {
            return ARConfigBase.PowerMode.PERFORMANCE_FIRST;
        }
    }

    public static ARConfigBase.UpdateMode intToUpdateModeEnum(int val) {
        if (val == ARConfigBase.UpdateMode.BLOCKING.ordinal()) {
            return ARConfigBase.UpdateMode.BLOCKING;
        }
        return ARConfigBase.UpdateMode.LATEST_CAMERA_IMAGE;
    }

    public static List<AugmentedImageDBModel> toAugmentedImageDBModelList(JSONArray paramsAI) {
        AugmentedImageDBModel[] array = new AugmentedImageDBModel[paramsAI.length()];
        for (int i = 0; i < paramsAI.length(); i++) {
            JSONObject item = paramsAI.optJSONObject(i);
            AugmentedImageDBModel augmentedImageDBModel = new AugmentedImageDBModel();
            if (item.has("imgFileFromAsset")) {
                augmentedImageDBModel.setImgFileFromAsset(item.optString("imgFileFromAsset"));
            }
            if (item.has("widthInMeters")) {
                augmentedImageDBModel.setWidthInMeters(item.optInt("widthInMeters"));
            }
            if (item.has("imgName")) {
                augmentedImageDBModel.setImgName(item.optString("imgName"));
            }
            array[i] = augmentedImageDBModel;
        }
        return Arrays.asList(array);
    }

    private static void setWorldConfig(JSONObject json, ARPluginConfigBaseWorld configWorld) {
        if (json.has("objPath")) {
            configWorld.setObjPath(json.optString("objPath"));
        }
        if (json.has("texturePath")) {
            configWorld.setTexturePath(json.optString("texturePath"));
        }
        if (json.has("labelDraw")) {
            configWorld.setLabelDraw(json.optBoolean("labelDraw"));
        }
        if (json.has("imageOther")) {
            configWorld.setImageOther(json.optString("imageOther"));
        }
        if (json.has("imageWall")) {
            configWorld.setImageWall(json.optString("imageWall"));
        }
        if (json.has("imageFloor")) {
            configWorld.setImageFloor(json.optString("imageFloor"));
        }
        if (json.has("imageSeat")) {
            configWorld.setImageSeat(json.optString("imageSeat"));
        }
        if (json.has("imageTable")) {
            configWorld.setImageTable(json.optString("imageTable"));
        }
        if (json.has("imageCeiling")) {
            configWorld.setImageCeiling(json.optString("imageCeiling"));
        }
        if (json.has("imageDoor")) {
            configWorld.setImageDoor(json.optString("imageDoor"));
        }
        if (json.has("imageWindow")) {
            configWorld.setImageWindow(json.optString("imageWindow"));
        }
        if (json.has("imageBed")) {
            configWorld.setImageBed(json.optString("imageBed"));
        }
        if (json.has("textOther")) {
            configWorld.setTextOther(json.optString("textOther"));
        }
        if (json.has("textWall")) {
            configWorld.setTextWall(json.optString("textWall"));
        }
        if (json.has("textFloor")) {
            configWorld.setTextFloor(json.optString("textFloor"));
        }
        if (json.has("textSeat")) {
            configWorld.setTextSeat(json.optString("textSeat"));
        }
        if (json.has("textTable")) {
            configWorld.setTextTable(json.optString("textTable"));
        }
        if (json.has("textCeiling")) {
            configWorld.setTextCeiling(json.optString("textCeiling"));
        }
        if (json.has("textDoor")) {
            configWorld.setTextDoor(json.optString("textDoor"));
        }
        if (json.has("textWindow")) {
            configWorld.setTextWindow(json.optString("textWindow"));
        }
        if (json.has("textBed")) {
            configWorld.setTextBed(json.optString("textBed"));
        }
        if (json.has("colorOther")) {
            configWorld.setColorOther(colorRGBAFrom(json.optJSONObject("colorOther")));
        }
        if (json.has("colorWall")) {
            configWorld.setColorWall(colorRGBAFrom(json.optJSONObject("colorWall")));
        }
        if (json.has("colorFloor")) {
            configWorld.setColorFloor(colorRGBAFrom(json.optJSONObject("colorFloor")));
        }
        if (json.has("colorSeat")) {
            configWorld.setColorSeat(colorRGBAFrom(json.optJSONObject("colorSeat")));
        }
        if (json.has("colorTable")) {
            configWorld.setColorTable(colorRGBAFrom(json.optJSONObject("colorTable")));
        }
        if (json.has("colorCeiling")) {
            configWorld.setColorCeiling(colorRGBAFrom(json.optJSONObject("colorCeiling")));
        }
        if (json.has("colorDoor")) {
            configWorld.setColorDoor(colorRGBAFrom(json.optJSONObject("colorDoor")));
        }
        if (json.has("colorWindow")) {
            configWorld.setColorWindow(colorRGBAFrom(json.optJSONObject("colorWindow")));
        }
        if (json.has("colorBed")) {
            configWorld.setColorBed(colorRGBAFrom(json.optJSONObject("colorBed")));
        }
        if (json.has("maxMapSize")) {
            configWorld.setMaxMapSize(json.optInt("maxMapSize"));
        }

        setPointLineConfig(json, configWorld);
    }

    private static void setPointLineConfig(JSONObject json, ARPluginConfigBasePointLine configPlugin) {
        if (json.has("drawLine")) {
            configPlugin.setDrawLine(json.optBoolean("drawLine"));
        }
        if (json.has("drawPoint")) {
            configPlugin.setDrawPoint(json.optBoolean("drawPoint"));
        }
        if (json.has("lineWidth")) {
            configPlugin.setLineWidth((float) json.optDouble("lineWidth"));
        }
        if (json.has("pointSize")) {
            configPlugin.setPointSize((float) json.optDouble("pointSize"));
        }
        if (json.has("lineColor")) {
            configPlugin.setLineColor(colorRGBAFrom(json.optJSONObject("lineColor")));
        }
        if (json.has("pointColor")) {
            configPlugin.setPointColor(colorRGBAFrom(json.optJSONObject("pointColor")));
        }
        setCommonConfig(json, configPlugin);
    }

}
