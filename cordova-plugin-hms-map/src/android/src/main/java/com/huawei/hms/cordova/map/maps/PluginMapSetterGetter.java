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

import android.graphics.Bitmap;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.LinearLayout;

import com.huawei.hms.cordova.map.utils.HtmlUtils;
import com.huawei.hms.cordova.map.utils.PxToPixelConverter;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.model.MapStyleOptions;
import com.huawei.hms.maps.model.Marker;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Locale;

class PluginMapSetterGetter {
    private static final String TAG = PluginMapSetterGetter.class.getSimpleName();
    private final HuaweiMapSetter huaweiMapSetter = new HuaweiMapSetter();
    private final HuaweiMapGetter huaweiMapGetter = new HuaweiMapGetter();
    private MapCapsule mapCapsule;

    public PluginMapSetterGetter(MapCapsule mapCapsule) {
        this.mapCapsule = mapCapsule;
    }

    JSONObject run(String option, String methodName, JSONObject object) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        JSONObject json;
        if (option.equals("getter")) {
            json = huaweiMapGetter.run(methodName);
        } else {
            json = huaweiMapSetter.run(methodName, object);
        }
        return json;
    }
    ////////////////////////////////////////////////////////////HUAWEI MAP SETTERS CAPSULE///////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////HUAWEI MAP SETTERS CAPSULE/////////////////////////////////////////////////

    private class HuaweiMapSetter {
        void setLocationSource() {
        }

        void setMarkersClustering(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setMarkersClustering(json.getBoolean("markersClustering"));
        }

        void setBuildingsEnabled(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setBuildingsEnabled(json.getBoolean("buildingsEnabled"));
        }

        void setPadding(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setPadding(json.getInt("left"), json.getInt("top"), json.getInt("right"), json.getInt("bottom"));
        }

        void setTrafficEnabled(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setTrafficEnabled(json.optBoolean("trafficEnabled"));
        }

        void setWatermarkEnabled(JSONObject json) {
            mapCapsule.getHuaweiMap().setWatermarkEnabled(json.optBoolean("watermarkEnabled"));
        }

        void setMinZoomPreference(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setMinZoomPreference((float) json.getDouble("minZoomPreference"));
        }

        void setMaxZoomPreference(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setMaxZoomPreference((float) json.getDouble("maxZoomPreference"));
        }

        void setMapType(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setMapType(json.getInt("mapType"));
        }

        void setMapStyle(JSONObject json) throws JSONException {
            String filename = json.getString("mapStyle");
            if (filename.endsWith(".json")){
                filename = filename.substring(0, filename.length() - 5);
            }
            int styleId = mapCapsule.getContext().getResources().getIdentifier(filename, "raw", mapCapsule.getContext().getPackageName());
            mapCapsule.getHuaweiMap().setMapStyle(MapStyleOptions.loadRawResourceStyle(mapCapsule.getContext(), styleId));
        }

        void setLatLngBoundsForCameraTarget(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setLatLngBoundsForCameraTarget(JsonToObject.constructLatLngBounds(json.getJSONObject("latLngBounds")));
        }

        void setLanguage(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setLanguage(json.getString("language"));
        }

        void setInfoWindowAdapter(JSONObject json) {
            mapCapsule.getHuaweiMap().setInfoWindowAdapter(new HuaweiMap.InfoWindowAdapter() {
                @Override
                public View getInfoContents(Marker marker) {
                    return null;
                }

                @Override
                public View getInfoWindow(Marker marker) {
                    LinearLayout parent = new LinearLayout(mapCapsule.getContext());
                    WebView webView = new WebView(mapCapsule.getContext());
                    webView.getSettings().setSavePassword(false);
                    webView.getSettings().setJavaScriptEnabled(true);
                    JSONObject params = json.optJSONObject("infoWindowAdapter");
                    String fileName = params.optString("file");
                    int width = PxToPixelConverter.pxToPixel(params.optInt("width", ViewGroup.LayoutParams.WRAP_CONTENT));
                    int height = PxToPixelConverter.pxToPixel(params.optInt("height", ViewGroup.LayoutParams.WRAP_CONTENT));
                    String html = HtmlUtils.htmlFileToString(mapCapsule.getContext(), fileName);
                    String markerInfoWindowScript = String.format(Locale.ENGLISH,
                            "<script>function getMarkerInfo(){return %s;}</script>",
                            ObjectToJson.constructJsonFromMarker(marker));
                    if (!html.contains("<head>")) html += HtmlUtils.HTML_HEAD_TAG + html;
                    html = html.replace("<head>", "<head>" + markerInfoWindowScript);
                    webView.loadData(html, "text/html; charset=utf-8", "UTF-8");
                    parent.addView(webView, width, height);
                    return parent;
                }
            });
        }

        void setIndoorEnabled(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setIndoorEnabled(json.optBoolean("indoorEnabled"));
        }

        void setContentDescription(JSONObject json) {
            mapCapsule.getHuaweiMap().setContentDescription(json.optString("contentDescription"));
        }

        void setMyLocationEnabled(JSONObject json) throws JSONException {
            mapCapsule.getHuaweiMap().setMyLocationEnabled(json.optBoolean("myLocationEnabled"));
        }

        void setPointToCenter(JSONObject json) throws JSONException {
            int x = PxToPixelConverter.pxToPixel(json.optInt("x"));
            int y = PxToPixelConverter.pxToPixel(json.optInt("y"));
            mapCapsule.getHuaweiMap().setPointToCenter(x, y);
        }

        JSONObject run(String methodName, JSONObject object) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            Method m = this.getClass().getDeclaredMethod(methodName, JSONObject.class);
            return (JSONObject) m.invoke(this, object);
        }
    }
    ///////////////////////////////////////////////////////////////HUAWEI MAP GETTERS CAPSULE///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////HUAWEI MAP GETTERS CAPSULE//////////////////////////////////////////////////////////

    private class HuaweiMapGetter {
        JSONObject clear() {
            mapCapsule.getHuaweiMap().clear();
            mapCapsule.getComponentMap().clear();
            return null;
        }

        JSONObject stopAnimation() {
            mapCapsule.getHuaweiMap().stopAnimation();
            return null;
        }

        JSONObject snapshot() {
            mapCapsule.getHuaweiMap().snapshot(bitmap -> {
                try {
                    ByteArrayOutputStream stream = new ByteArrayOutputStream();
                    bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream);
                    byte[] bitmapArray = stream.toByteArray();
                    String data = new StringBuilder()
                            .append("data:image/png;base64,")
                            .append(Base64.encodeToString(bitmapArray, Base64.NO_WRAP))
                            .toString();
                    mapCapsule.getMapListener().snapshotReadyCallback(mapCapsule.getCapsuleId(), new JSONObject().put("data", data));
                } catch (JSONException e) {
                    Log.d(TAG, e.getMessage());
                }
            });
            return null;
        }

        JSONObject resetMinMaxZoomPreference() {
            mapCapsule.getHuaweiMap().resetMinMaxZoomPreference();
            return null;
        }

        public JSONObject getCameraPosition() throws JSONException {
            return new JSONObject().put("value", ObjectToJson.constructJsonFromCameraPosition(mapCapsule.getHuaweiMap().getCameraPosition()));
        }

        public JSONObject getMapType() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getMapType());
        }

        public JSONObject getMaxZoomLevel() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getMaxZoomLevel());
        }

        public JSONObject getMinZoomLevel() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().getMinZoomLevel());
        }

        public JSONObject isBuildingsEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().isBuildingsEnabled());
        }

        public JSONObject isMyLocationEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().isMyLocationEnabled());
        }

        public JSONObject isTrafficEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().isTrafficEnabled());
        }

        public JSONObject isIndoorEnabled() throws JSONException {
            return new JSONObject().put("value", mapCapsule.getHuaweiMap().isIndoorEnabled());
        }

        JSONObject run(String methodName) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
            Method m = this.getClass().getDeclaredMethod(methodName);
            return (JSONObject) m.invoke(this);
        }
    }
}
