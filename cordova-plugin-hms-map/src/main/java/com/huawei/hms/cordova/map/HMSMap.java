/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.map;

import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.graphics.Color;
import android.util.Pair;
import android.view.Gravity;
import android.util.Log;
import android.content.pm.PackageManager;

import android.widget.FrameLayout;

import com.huawei.hms.api.ConnectionResult;
import com.huawei.hms.api.HuaweiApiAvailability;
import com.huawei.hms.cordova.map.helpers.Constants;
import com.huawei.hms.cordova.map.helpers.Consumer;
import com.huawei.hms.cordova.map.helpers.HMSCordovaPlugin;
import com.huawei.hms.cordova.map.utils.PermissionUtils;
import com.huawei.hms.cordova.map.utils.ActionPack;
import com.huawei.hms.cordova.map.utils.CordovaUtils;
import com.huawei.hms.cordova.map.utils.DispatcherPack;
import com.huawei.hms.cordova.map.utils.ErrorCodes;
import com.huawei.hms.cordova.map.utils.EventPack;
import com.huawei.hms.cordova.map.helpers.MapViewProps;
import com.huawei.hms.cordova.map.utils.JavaUtils;
import com.huawei.hms.cordova.map.utils.MapUtils;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.HuaweiMapOptions;
import com.huawei.hms.maps.MapView;
import com.huawei.hms.maps.OnMapReadyCallback;
import com.huawei.hms.maps.model.BitmapDescriptorFactory;
import com.huawei.hms.maps.model.Cap;
import com.huawei.hms.maps.model.JointType;
import com.huawei.hms.maps.model.PatternItem;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;


public class HMSMap extends HMSCordovaPlugin {
    public static final String TAG = HMSMap.class.getSimpleName();

    private Map<String, Pair<MapView, HuaweiMap>> mapViews;
    private Map<String, Object> elementContainer;

    public HMSMap() { }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Cordova stuff
    // /////////////////////////////////////////////////////////////////////////////////////////////

    public void pluginInitialize() {
        super.pluginInitialize();

        if (HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(webView.getContext()) != ConnectionResult.SUCCESS) {
            Log.e(TAG, "Huawei API is not available.");
        }

        // Init
        mapViews = new HashMap<>();
        elementContainer = new HashMap<>();
    }

    @Override
    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.d(TAG, JavaUtils.format("executer :: action=%s, args=%s", action, args.toString()));

        if ("initMap".equals(action)) {
            initMap(args.getString(0), args.getJSONObject(1), callbackContext);
        } else if ("setMapViewProps".equals(action)) {
            setMapViewProps(args.getString(0), args.getJSONObject(1), callbackContext);
        } else if ("setProps".equals(action)) {
            setProps(args.getString(0), args.getJSONObject(1), callbackContext);
        } else if ("getProps".equals(action)) {
            getProps(args.getString(0), callbackContext);
        } else if ("registerEvent".equals(action)) {
            registerEvent(args.getString(0), args.getString(1), callbackContext);
        } else if ("runAction".equals(action)) {
            runAction(args.getString(0), args.getString(1), args.getJSONObject(2), callbackContext);
        } else if ("dispatchFunction".equals(action)) {
            dispatchFunction(args.getString(0), args.getString(1), args.getJSONObject(2), args.getJSONObject(3), callbackContext);
        } else if ("executeStatic".equals(action)) {
            MapUtils.STATIC_FUNCTIONS.get(args.getString(0)).run(this, args.getJSONObject(1), callbackContext);
        } else {
            return false;
        }
        return true;
    }

    @Override
    public JSONObject getConstants() throws JSONException {
        JSONObject constants = new JSONObject();
        JSONObject patternItemTypes = CordovaUtils.extendJSONWith(new JSONObject(), JavaUtils.mapOfConstants(PatternItem.class, "TYPE"));
        JSONObject jointTypes = CordovaUtils.extendJSONWith(new JSONObject(), JavaUtils.mapOfConstants(JointType.class));
        JSONObject capTypes = CordovaUtils.extendJSONWith(new JSONObject(), JavaUtils.mapOfConstants(Cap.class, "TYPE"));
        JSONObject cameraMoveReasons = CordovaUtils.extendJSONWith(new JSONObject(), JavaUtils.mapOfConstants(HuaweiMap.OnCameraMoveStartedListener.class, "REASON"));
        JSONObject colors = CordovaUtils.extendJSONWith(new JSONObject(), JavaUtils.mapOfConstants(Color.class));

        constants.put("PatternItemTypes", patternItemTypes);
        constants.put("JointTypes", jointTypes);
        constants.put("CapTypes", capTypes);
        constants.put("CameraMoveReasons", cameraMoveReasons);
        constants.put("Color", colors);
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(BitmapDescriptorFactory.class));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(HuaweiMap.class, "MAP_TYPE"));
        CordovaUtils.extendJSONWith(constants, JavaUtils.mapOfConstants(Constants.class));

        return constants;
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Exposed functions
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private void initMap(String id, JSONObject json, final CallbackContext callbackContext) {
        Log.d(TAG, "initializing map with " + json.toString());

        HuaweiMapOptions huaweiMapOptions = MapUtils.fromJSONObjectToHuaweiMapOptions.map(json);
        MapViewProps mapViewProps = MapUtils.fromJSONObjectToMapViewProps.map(json);

        Log.d(TAG, "mapViewProps :: " + mapViewProps.toString());
        Log.d(TAG, "huaweiMapOptions :: " + huaweiMapOptions.toString());

        if (mapViews.containsKey(id)) {
            Log.d(TAG, ErrorCodes.MAP_WITH_ID_ALREADY_EXISTS.asJSON().toString());
            callbackContext.error(ErrorCodes.MAP_WITH_ID_ALREADY_EXISTS.asJSON());
            return;
        }

        MapView mapView = new MapView(webView.getContext(), huaweiMapOptions);
        mapViews.put(id, Pair.create(mapView, null));

        cordova.getActivity().runOnUiThread(() -> {
            mapView.onCreate(null);

            // Put the map somewhere inside the frame
            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(mapViewProps.width(), mapViewProps.height());
            params.gravity = Gravity.TOP;
            params.setMargins(mapViewProps.position().x, mapViewProps.position().y, 0, 0);
            mapView.setLayoutParams(params);
            getLayout().addView(mapView);

            mapView.getMapAsync(huaweiMap -> {
                mapViews.put(id, Pair.create(mapView, huaweiMap));
                callbackContext.success();
            });
        });
    }

    private void setMapViewProps(String mapId, JSONObject json, final CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("setMapViewProps :: mapId=%s, props=%s", mapId, json.toString()));

        MapViewProps mapViewProps = MapUtils.fromJSONObjectToMapViewProps.map(json);

        MapView mapView = mapViews.get(mapId).first;
        cordova.getActivity().runOnUiThread(() -> {
            FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) mapView.getLayoutParams();
            layoutParams.setMargins(mapViewProps.position().x, mapViewProps.position().y, 0, 0);
            getLayout().updateViewLayout(mapView, layoutParams);
            callbackContext.success();
            Log.d(TAG, "setMapViewProps ends.");
        });
    }

    private void setProps(String mapId, JSONObject json, final CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("setProps :: mapId=%s, props=%s", mapId, json.toString()));

        runWithMap(mapId, huaweiMap -> {
            // For each given option, call the corresponding setter
            for (Iterator<String> it = json.keys(); it.hasNext();) {
                String key = it.next();
                if (MapUtils.SETTERS.containsKey(key)) {
                    MapUtils.SETTERS.get(key).run(huaweiMap, json);
                    callbackContext.success();
                }
            }

            Log.d(TAG, "setProps ends.");
        });
    }

    private void getProps(String mapId, final CallbackContext callbackContext) {
        Log.d(TAG, "getProps :: mapId=" + mapId);

        runWithMap(mapId, huaweiMap -> {
            callbackContext.success(MapUtils.fromHuaweiMapToJSONObject.map(huaweiMap));
            Log.d(TAG, "getProps ends.");
        });
    }

    private void registerEvent(String mapId, String eventName, final CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("registerEvent :: mapId=%s, eventName=%s", mapId, eventName));

        runWithMap(mapId, huaweiMap -> {
            Log.d(TAG, "registering event ...");
            if (MapUtils.EVENTS.containsKey(eventName)) {
                Log.d(TAG, "found event....");
                MapUtils.EVENTS.get(eventName).run(EventPack.create(cordova, webView, huaweiMap, eventName, mapId));
                callbackContext.success();
            } else {
                callbackContext.error(ErrorCodes.EVENT_DOES_NOT_EXIST.asJSON());
            }

            Log.d(TAG, "registerEvent ends.");
        });
    }

    // TODO: args should be JSONArray, works for now but maybe in future
    private void runAction(String mapId, String action, JSONObject args, final CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("runAction :: mapId=%s, action=%s, args=%s", mapId, action, args.toString()));

        runWithMap(mapId, huaweiMap -> {
            if (MapUtils.ACTIONS.containsKey(action)) {
                MapUtils.ACTIONS.get(action).run(ActionPack.create(mapId, huaweiMap, elementContainer, args, callbackContext));
            } else {
                callbackContext.error(ErrorCodes.ACTION_DOES_NOT_EXIST.asJSON());
            }

            Log.d(TAG, "runAction ends.");
        });
    }

    private void dispatchFunction(String mapId, String funcName, JSONObject incomingObject, JSONObject args, final CallbackContext callbackContext) {
        Log.d(TAG, JavaUtils.format("dispatchFunction :: mapId=%s, object=%s, args=%s", mapId, incomingObject.toString(), args.toString()));

        runWithMap(mapId, huaweiMap -> {
            String objectType = incomingObject.optString("__objectType");;
            String objectId = incomingObject.optString("__objectId");

            if (objectType.isEmpty() || objectId.isEmpty()) {
                //TODO: handle err
                callbackContext.error(1);
                return;
            }

            Object realObj = elementContainer.get(objectId);
            DispatcherPack pack = DispatcherPack.create(realObj, incomingObject, args, callbackContext);
            if (funcName.equals("set")) {
                for (Iterator<String> it = args.keys(); it.hasNext();) {
                    String key = it.next();
                    String accessor = JavaUtils.format("%s[%s][%s]", objectType, funcName, key);
                    if (MapUtils.DISPATCHER.containsKey(accessor)) {
                        MapUtils.DISPATCHER.get(accessor).run(pack);
                    }
                }
            } else {
                String accessor = JavaUtils.format("%s[%s]", objectType, funcName);
                if (MapUtils.DISPATCHER.containsKey(accessor)) {
                    MapUtils.DISPATCHER.get(accessor).run(pack);
                }
            }
            Log.d(TAG, "dispatchFunction ends.");
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Internal stuff
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private FrameLayout getLayout() {
        return (FrameLayout) webView.getView().getParent();
    }

    private void runWithMap(String id, OnMapReadyCallback cb) {
        cordova.getActivity().runOnUiThread(() -> {
            Pair<MapView, HuaweiMap> mapPair = mapViews.get(id);
            if (mapPair != null && mapPair.second != null) {
                cb.onMapReady(mapPair.second);
            } else {
                Log.e(TAG, JavaUtils.format("runWithMap :: null mapView with id=%s", id));
            }
        });
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Map lifecycles
    // /////////////////////////////////////////////////////////////////////////////////////////////

    @Override
    public void onStart() {
        runLifecycleFunc(MapView::onStart);
    }

    @Override
    public void onResume(boolean multitasking) {
        runLifecycleFunc(MapView::onResume);
    }

    @Override
    public void onPause(boolean multitasking) {
        runLifecycleFunc(MapView::onPause);
    }

    @Override
    public void onStop() {
        runLifecycleFunc(MapView::onStop);
    }

    @Override
    public void onDestroy() {
        runLifecycleFunc(MapView::onDestroy);
    }

    private void runLifecycleFunc(Consumer<MapView> func) {
        JavaUtils.forEach(mapViews.values(), pair -> cordova.getActivity().runOnUiThread(() -> func.run(pair.first)));
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Handle Permissions
    // /////////////////////////////////////////////////////////////////////////////////////////////

    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) {
        for(int r: grantResults) {
            if (r == PackageManager.PERMISSION_DENIED) {
                CordovaUtils.sendEvent(cordova, webView, "permissionResult", CordovaUtils.keyValPair("granted", false));
                return;
            }
        }

        if (requestCode == PermissionUtils.REQUEST_LOCATION) {
            CordovaUtils.sendEvent(cordova, webView, "permissionResult", CordovaUtils.keyValPair("granted", true));
        }
    }
}
