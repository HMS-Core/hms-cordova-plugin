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

package com.huawei.hms.cordova.map;

import android.graphics.Color;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.huawei.hms.cordova.map.components.CircleCapsule;
import com.huawei.hms.cordova.map.components.GroundOverlayCapsule;
import com.huawei.hms.cordova.map.components.MapComponent;
import com.huawei.hms.cordova.map.components.MapComponentType;
import com.huawei.hms.cordova.map.components.MarkerCapsule;
import com.huawei.hms.cordova.map.components.PolygonCapsule;
import com.huawei.hms.cordova.map.components.PolylineCapsule;
import com.huawei.hms.cordova.map.components.TileOverlayCapsule;
import com.huawei.hms.cordova.map.helpers.PluginJSHelper;
import com.huawei.hms.cordova.map.listeners.ComponentListener;
import com.huawei.hms.cordova.map.listeners.MapListener;
import com.huawei.hms.cordova.map.listeners.MarkerListener;
import com.huawei.hms.cordova.map.maps.MapCapsule;
import com.huawei.hms.cordova.map.utils.ErrorCodes;
import com.huawei.hms.cordova.map.utils.MapKitUtils;
import com.huawei.hms.cordova.map.utils.PluginPermissionUtils;
import com.huawei.hms.cordova.map.utils.cordova.CordovaUtils;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;

import com.huawei.hms.maps.MapsInitializer;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class HMSMap extends CordovaPlugin {
    private String TAG = HMSMap.class.getSimpleName();
    private CordovaUtils cordovaUtils;
    private HMSLogger hmsLogger;
    private PluginLayout pluginLayout;
    private PluginCordovaLayout pluginCordovaLayout;
    public Map<String, MapCapsule> maps = new HashMap<>();

/////////////////////////////////////////////////////////PLUGIN SECTION/////////////////////////////////////////////////
/////////////////////////////////////////////////////////PLUGIN SECTION/////////////////////////////////////////////////

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        MapsInitializer.initialize(cordova.getContext());
        hmsLogger = HMSLogger.getInstance(cordova.getContext());
        cordovaUtils = CordovaUtils.getInstance(webView);
        Log.d(TAG, "initialize: initialized");

        pluginLayout = new PluginLayout(cordova.getContext());
        pluginCordovaLayout = new PluginCordovaLayout(cordova.getContext());

        cordova.getActivity().runOnUiThread(()->{
                webView.getView().setBackgroundColor(Color.TRANSPARENT);
                ViewGroup viewGroup = getWebViewRootLayout();
                viewGroup.removeView(webView.getView());
                viewGroup.addView(pluginCordovaLayout, 
                    new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
                viewGroup.setBackgroundColor(Color.WHITE);
                pluginCordovaLayout.addView(webView.getView(), 
                    new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
                viewGroup.addView(pluginLayout, 
                    new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
                pluginCordovaLayout.bringToFront();
        });


        webView.getView().getViewTreeObserver().addOnScrollChangedListener(() -> {
            for (MapCapsule mapCapsule : maps.values()) {
                mapCapsule.getCapsuleLayout()
                        .scrollXAndY(-webView.getView().getScrollX(), -webView.getView().getScrollY());
            }
        });
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        MapListener.destroy();
        CordovaUtils.destroy();
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        try {
            Method m = this.getClass().getDeclaredMethod(action, JSONArray.class, CallbackContext.class);
            m.invoke(this, args, callbackContext);
        } catch (InvocationTargetException | NoSuchMethodException | IllegalAccessException e) {
            return false;
        }
        return true;
    }

    private void initPlugin(JSONArray args, final CallbackContext callbackContext) {
        callbackContext.success();
    }

    private void updateOverlappingHTMLElements(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        String mapDivId = args.getString(0);
        JSONArray diffToAdd = args.getJSONArray(1);
        JSONArray diffToDelete = args.getJSONArray(2);

        MapCapsule mapCapsule = maps.get(mapDivId);
        if (mapCapsule == null) {
            callbackContext.error(ErrorCodes.NO_MAP_FOUND.toString());
            return;
        }

        mapCapsule.removeElements(JsonToObject.jsonArray2RectArray(diffToDelete));
        mapCapsule.addHTMLElements(JsonToObject.jsonArray2RectArray(diffToAdd));
        callbackContext.success();
    }

/////////////////////////////////////////////////////////HMS_LOGGER SECTION/////////////////////////////////////////////
/////////////////////////////////////////////////////////HMS_LOGGER SECTION/////////////////////////////////////////////

    private void enableLogger(JSONArray args, CallbackContext callbackContext) {
        if (hmsLogger != null) {
            hmsLogger.enableLogger();
            callbackContext.success();
        } else {
            callbackContext.error(ErrorCodes.HMS_LOGGER_IS_NULL.toString());
        }
    }

    private void disableLogger(JSONArray args, CallbackContext callbackContext) {
        if (hmsLogger != null) {
            hmsLogger.disableLogger();
            callbackContext.success();
        } else {
            callbackContext.error(ErrorCodes.HMS_LOGGER_IS_NULL.toString());
        }
    }
/////////////////////////////////////////////////////////MAP SECTION////////////////////////////////////////////////////
/////////////////////////////////////////////////////////MAP SECTION////////////////////////////////////////////////////

    private void initMap(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        final String mapId = args.getString(0);
        if (maps.containsKey(mapId)) {
            cordova.getActivity().runOnUiThread(() -> callbackContext.success(mapId));
            hmsLogger.sendSingleEvent("initMap");
            return;
        }
        cordova.getActivity().runOnUiThread(() -> {
            MapListener mapListener = MapListener.getInstance(cordovaUtils);
            MapCapsule mapCapsule = new MapCapsule(webView.getContext(), mapListener, mapId, args.optJSONObject(1));
            View view = mapCapsule.getCapsuleLayout().getView(); // 1
            pluginLayout.addView(view);
            mapCapsule.getTextureMapView().getMapAsync(huaweiMap -> {
                mapCapsule.setHuaweiMap(huaweiMap);
                maps.put(mapId, mapCapsule);
                pluginCordovaLayout.addCapsule(mapId, mapCapsule);
                callbackContext.success(mapCapsule.getCapsuleId());
            });
            hmsLogger.sendSingleEvent("initMap");
        });
    }

    private void showMap(JSONArray args, CallbackContext callbackContext) {
        String divId = args.optString(0);
        if (maps.containsKey(divId)) {
            cordova.getActivity().runOnUiThread(() -> {
                PluginJSHelper jsHelper = new PluginJSHelper(webView, maps.get(divId));
                jsHelper.syncComponents();
                maps.get(divId).getTextureMapView().setVisibility(View.VISIBLE);
                maps.get(divId).getTextureMapView().onResume();
                maps.get(divId).setActive(true);
                maps.get(divId).setClickable(true);
                hmsLogger.sendSingleEvent("showMap");
                callbackContext.success(maps.get(divId).getCapsuleId());
            });
        } else {
            hmsLogger.sendSingleEvent("showMap", ErrorCodes.NO_MAP_FOUND.toString());
            callbackContext.error(ErrorCodes.NO_MAP_FOUND.toString());
        }
    }

    private void hideMap(JSONArray args, CallbackContext callbackContext) {
        String divId = args.optString(0);
        if (maps.containsKey(divId)) {
            cordova.getActivity().runOnUiThread(() -> {
                maps.get(divId).getTextureMapView().setVisibility(View.INVISIBLE);
                maps.get(divId).getTextureMapView().onPause();
                maps.get(divId).setActive(false);
                maps.get(divId).setClickable(false);
                hmsLogger.sendSingleEvent("hideMap");
                callbackContext.success();
            });
        } else {
            hmsLogger.sendSingleEvent("hideMap", ErrorCodes.NO_MAP_FOUND.toString());
            callbackContext.error(ErrorCodes.NO_MAP_FOUND.toString());
        }
    }

    private void destroyMap(JSONArray args, CallbackContext callbackContext) {
        String divId = args.optString(0);
        if (maps.containsKey(divId)) {
            cordova.getActivity().runOnUiThread(() -> {
                View parentOfMapView = maps.get(divId).getCapsuleLayout().getView();
                pluginLayout.removeView(parentOfMapView);
                maps.get(divId).getTextureMapView().onDestroy();
                maps.get(divId).getComponentMap().clear();
                maps.remove(divId);
                pluginCordovaLayout.removeCapsule(divId);
                hmsLogger.sendSingleEvent("destroyMap");
                callbackContext.success();
            });
        } else {
            hmsLogger.sendSingleEvent("destroyMap", ErrorCodes.NO_MAP_FOUND.toString());
            callbackContext.error(ErrorCodes.NO_MAP_FOUND.toString());
        }
    }

    private void mapOptions(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        final String mapId = args.getString(0);
        final String optionType = args.getString(1);
        final String command = args.getString(2);
        final JSONObject arguments = args.getJSONObject(3);
        if (!isMapExistsWithTheGivenId(mapId, callbackContext)) return;
        cordova.getActivity().runOnUiThread(() -> {
            MapCapsule mapCapsule = maps.get(mapId);
            try {
                JSONObject obj = mapCapsule.setMapOptions(optionType, command, arguments);
                if (obj != null)
                    callbackContext.success(obj);
                else callbackContext.success();
            } catch (Exception e) {
                // You can catch every error throwed from function here instead of just catching the exception.
                hmsLogger.sendSingleEvent(command, e.getMessage());
                callbackContext.error(e.getMessage());
            }
        });
        hmsLogger.sendSingleEvent("mapOptions");
    }

    private boolean isMapExistsWithTheGivenId(final String mapId, final CallbackContext callbackContext) {
        if (!maps.containsKey(mapId)) {
            hmsLogger.sendSingleEvent("isMapExistsWithTheGivenId", ErrorCodes.NO_MAP_FOUND.toString());
            callbackContext.error(ErrorCodes.NO_MAP_FOUND.toString());
            return false;
        }
        hmsLogger.sendSingleEvent("isMapExistsWithTheGivenId");
        return true;
    }

    private ViewGroup getWebViewRootLayout() {
        return ((ViewGroup) webView.getView().getParent());
    }

    private void setApiKey(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (args.getString(0) == null || args.getString(0).isEmpty()) {
            hmsLogger.sendSingleEvent("setApiKey", ErrorCodes.INVALID_API_KEY.toString());
            callbackContext.error(ErrorCodes.INVALID_API_KEY.toString());
            return;
        }
        MapKitUtils.setApiKey(args.getJSONObject(0));
        hmsLogger.sendSingleEvent("setApiKey");
        callbackContext.success();
    }

    private void computeDistanceBetween(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        hmsLogger.sendSingleEvent("computeDistanceBetween");
        callbackContext.success(MapKitUtils.computeDistanceBetween(args.getJSONObject(0)));
    }

    private void requestPermission(JSONArray args, final CallbackContext callbackContext) {
        PluginPermissionUtils.requestLocationPermission(this);
        callbackContext.success();
    }

    private void hasPermission(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        JSONObject result = new JSONObject().put("result", PluginPermissionUtils.hasLocationPermission(this));
        callbackContext.success(result);
    }

    private void forceUpdateXAndY(JSONArray args, final CallbackContext callbackContext) {
        String mapId = args.optString(0);
        int x = args.optInt(1);
        int y = args.optInt(2);
        maps.get(mapId).getCapsuleLayout().updateXAndY(x, y);
        hmsLogger.sendSingleEvent("forceUpdateXAndY");
        callbackContext.success();
    }

    private void forceUpdateWidthAndHeight(JSONArray args, final CallbackContext callbackContext) {
        String mapId = args.optString(0);
        int width = args.optInt(1);
        int height = args.optInt(2);
        this.cordova.getActivity().runOnUiThread(() -> {
            maps.get(mapId).getCapsuleLayout().updateWidthAndHeight(width, height);
            hmsLogger.sendSingleEvent("forceUpdateWidthAndHeight");
            callbackContext.success();
        });
    }

    private void setMapPointersEnabled(JSONArray args, final CallbackContext callbackContext) {
        String mapId = args.optString(0);
        boolean isMapPointersEnabled = args.optBoolean(1);
        maps.get(mapId).setClickable(isMapPointersEnabled);
        callbackContext.success();
    }

    private void isMapPointersEnabled(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        String mapId = args.optString(0);
        JSONObject result = new JSONObject().put("result", maps.get(mapId).isClickable());
        callbackContext.success(result);
    }

/////////////////////////////////////////////////////////COMPONENT SECTION//////////////////////////////////////////////
/////////////////////////////////////////////////////////COMPONENT SECTION//////////////////////////////////////////////

    private void addComponent(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        final String mapId = args.getString(0);
        if (!isMapExistsWithTheGivenId(mapId, callbackContext)) {
            hmsLogger.sendSingleEvent("addComponent", ErrorCodes.NO_MAP_FOUND.toString());
            return;
        }
        cordova.getActivity().runOnUiThread(() -> {
            MapCapsule mapCapsule = maps.get(mapId);
            MapComponent component = createComponentToAddOnMap(mapCapsule,
                    MapComponentType.valueOf(args.optString(1)), args.optJSONObject(2));
            mapCapsule.addComponent(component);
            hmsLogger.sendSingleEvent("addComponent");
            callbackContext.success(component.getId());
        });
    }

    private void removeComponent(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        final String mapId = args.getString(0);
        final String componentId = args.getString(1);
        if (!isMapExistsWithTheGivenId(mapId, callbackContext)) {
            hmsLogger.sendSingleEvent("removeComponent", ErrorCodes.NO_MAP_FOUND.toString());
            return;
        }
        cordova.getActivity().runOnUiThread(() -> {
            MapCapsule mapCapsule = maps.get(mapId);
            if (mapCapsule.removeComponent(componentId)) {
                hmsLogger.sendSingleEvent("removeComponent");
                callbackContext.success();
            } else {
                hmsLogger.sendSingleEvent("removeComponent", ErrorCodes.COMPONENT_IS_NOT_FOUND.toString());
                callbackContext.error(ErrorCodes.COMPONENT_IS_NOT_FOUND.toString());
            }
        });
    }

    private void componentOptions(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        // Check if the component with the specified id exists or not.
        // Because when you remove a component and if user tries to use it still. you have to send an error.
        final String mapId = args.getString(0);
        final String componentId = args.getString(1);
        final String command = args.getString(2);
        final String methodName = args.getString(3);
        final JSONObject arg = args.getJSONObject(4);
        if (!isMapExistsWithTheGivenId(mapId, callbackContext)) {
            hmsLogger.sendSingleEvent("componentOptions");
            return;
        }
        cordova.getActivity().runOnUiThread(() -> {
            MapCapsule mapCapsule = maps.get(mapId);
            MapComponent component = mapCapsule.getComponent(componentId);
            if (component == null) {
                hmsLogger.sendSingleEvent(methodName, ErrorCodes.COMPONENT_IS_NOT_FOUND.toString());
                callbackContext.error(ErrorCodes.COMPONENT_IS_NOT_FOUND.toString());
                return;
            }
            JSONObject object = null;
            if (command.equals("set"))
                component.setProperty(methodName, arg);
            else
                object = component.getProperty(methodName);
            hmsLogger.sendSingleEvent(methodName);
            if (object != null) callbackContext.success(object);
            else callbackContext.success();
        });
    }

    private MapComponent createComponentToAddOnMap(MapCapsule map, MapComponentType type, JSONObject json) {
        MapComponent mapComponent = null;
        ComponentListener componentListener;
        try {
            if (type == MapComponentType.MARKER) {
                componentListener = MarkerListener.getInstance(cordovaUtils);
                mapComponent = new MarkerCapsule(map, JsonToObject.constructMarkerOptions(map.getContext(), json), componentListener);
            } else if (type == MapComponentType.CIRCLE)
                mapComponent = new CircleCapsule(map, JsonToObject.constructCircleOptions(json), null);
            else if (type == MapComponentType.GROUND_OVERLAY)
                mapComponent = new GroundOverlayCapsule(map, JsonToObject.constructGroundOverlayOptions(map.getContext(), json), null);
            else if (type == MapComponentType.POLYGON)
                mapComponent = new PolygonCapsule(map, JsonToObject.constructPolygonOptions(json), null);
            else if (type == MapComponentType.POLYLINE)
                mapComponent = new PolylineCapsule(map, JsonToObject.constructPolylineOptions(map.getContext(), json), null);
            else if (type == MapComponentType.TILE_OVERLAY)
                mapComponent = new TileOverlayCapsule(map, JsonToObject.constructTileOverlayOptions(json, map.getContext()), null);
            hmsLogger.sendSingleEvent("createComponentToAddOnMap");
        } catch (JSONException e) {
            hmsLogger.sendSingleEvent("createComponentToAddOnMap", e.getMessage());
        }
        return mapComponent;
    }
}
