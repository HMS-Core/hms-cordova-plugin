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

package com.huawei.hms.cordova.map.listeners;

import android.util.Log;

import com.huawei.hms.cordova.map.maps.MapEvents;
import com.huawei.hms.cordova.map.utils.cordova.CordovaUtils;
import com.huawei.hms.cordova.map.utils.json.ObjectToJson;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.model.IndoorBuilding;
import com.huawei.hms.maps.model.Marker;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public final class MapListener {

    private static final String TAG = MapListener.class.getSimpleName();
    private static volatile MapListener instance;
    private CordovaUtils cordovaUtils;

    private MapListener(CordovaUtils cordovaUtils) {
        this.cordovaUtils = cordovaUtils;
    }

    public static synchronized MapListener getInstance(CordovaUtils cordovaUtils) {
        if (instance == null) {
            synchronized (MapListener.class) {
                if (instance == null) instance = new MapListener(cordovaUtils);
            }
        }
        return instance;
    }

    public static void destroy(){
        instance = null;
    }

    public void bindListener(HuaweiMap map, String eventName, int capsuleId) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Method method = this.getClass().getDeclaredMethod(eventName, HuaweiMap.class, int.class);
        method.invoke(this, map, capsuleId);
    }

    private void setOnMarkerClickListener(HuaweiMap map, int capsuleId) {
        map.setOnMarkerClickListener(marker -> cordovaUtils.evaluateJs(MapEvents.ON_MARKER_CLICK, capsuleId, ObjectToJson.constructJsonFromMarker(marker)));
    }

    /**
     * We are using reflection to set listeners because we didn't want to create
     * a complex structure with if elses. But in here if listeners exists with
     * multiple functions inside reflection can't find them. Actually as you can guess
     * we can set all of the functions when we run the listener function because it is already
     * initializing its inner functions but the problem here is JavaScript don't know that
     * so instead of writing some ugly code we tried to write a better ugly code here and we
     * did set listeners seperate but also not seperate but it doesn't matter with the code
     * because the listener name is still the same.
     */
    private void setOnMarkerDragStartListener(HuaweiMap map, int capsuleId) {
        setOnMarkerDragOriginal(map, capsuleId);
    }

    private void setOnMarkerDragEndListener(HuaweiMap map, int capsuleId) {
        setOnMarkerDragOriginal(map, capsuleId);
    }

    private void setOnMarkerDragListener(HuaweiMap map, int capsuleId) {
        setOnMarkerDragOriginal(map, capsuleId);
    }

    private void setOnMarkerDragOriginal(HuaweiMap map, int capsuleId) {
        map.setOnMarkerDragListener(new HuaweiMap.OnMarkerDragListener() {
            @Override
            public void onMarkerDragStart(Marker marker) {
                cordovaUtils.evaluateJs(MapEvents.ON_MARKER_DRAG_START, capsuleId, ObjectToJson.constructJsonFromMarker(marker));
            }

            @Override
            public void onMarkerDrag(Marker marker) {
                cordovaUtils.evaluateJs(MapEvents.ON_MARKER_DRAG, capsuleId, ObjectToJson.constructJsonFromMarker(marker));
            }

            @Override
            public void onMarkerDragEnd(Marker marker) {
                cordovaUtils.evaluateJs(MapEvents.ON_MARKER_DRAG_END, capsuleId, ObjectToJson.constructJsonFromMarker(marker));
            }
        });
    }

    private void setOnPolygonClickListener(HuaweiMap map, int capsuleId) {
        map.setOnPolygonClickListener(polygon -> cordovaUtils.evaluateJs(MapEvents.ON_POLYGON_CLICK, capsuleId, ObjectToJson.constructJsonFromPolygon(polygon)));
    }

    private void setOnCircleClickListener(HuaweiMap map, int capsuleId) {
        map.setOnCircleClickListener(circle -> cordovaUtils.evaluateJs(MapEvents.ON_CIRCLE_CLICK, capsuleId, ObjectToJson.constructJsonFromCircle(circle)));
    }

    private void setOnGroundOverlayClickListener(HuaweiMap map, int capsuleId) {
        map.setOnGroundOverlayClickListener(groundOverlay -> cordovaUtils.evaluateJs(MapEvents.ON_GROUND_OVERLAY_CLICK, capsuleId, ObjectToJson.constructJsonFromGroundOverlay(groundOverlay)));
    }

    private void setOnPolylineClickListener(HuaweiMap map, int capsuleId) {
        map.setOnPolylineClickListener(polyline -> cordovaUtils.evaluateJs(MapEvents.ON_POLYLINE_CLICK, capsuleId, ObjectToJson.constructJsonFromPolyline(polyline)));
    }

    private void setOnPoiClickListener(HuaweiMap map, int capsuleId) {
        map.setOnPoiClickListener(pointOfInterest -> cordovaUtils.evaluateJs(MapEvents.ON_POI_CLICK, capsuleId, ObjectToJson.constructJsonFromPOI(pointOfInterest)));
    }

    private void setOnMapClickListener(HuaweiMap map, int capsuleId) {
        map.setOnMapClickListener(latLng -> cordovaUtils.evaluateJs(MapEvents.ON_MAP_CLICK, capsuleId, ObjectToJson.constructJsonFromLatLng(latLng)));
    }

    private void setOnMapLongClickListener(HuaweiMap map, int capsuleId) {
        map.setOnMapLongClickListener(latLng -> cordovaUtils.evaluateJs(MapEvents.ON_MAP_LONG_CLICK, capsuleId, ObjectToJson.constructJsonFromLatLng(latLng)));
    }

    private void setOnCameraIdleListener(HuaweiMap map, int capsuleId) {
        map.setOnCameraIdleListener(() -> cordovaUtils.evaluateJs(MapEvents.ON_CAMERA_IDLE, capsuleId, null));
    }

    private void setOnCameraMoveListener(HuaweiMap map, int capsuleId) {
        map.setOnCameraMoveListener(() -> cordovaUtils.evaluateJs(MapEvents.ON_CAMERA_MOVE, capsuleId, null));
    }

    private void setOnCameraMoveStartedListener(HuaweiMap map, int capsuleId) {
        map.setOnCameraMoveStartedListener(i -> {
            try {
                cordovaUtils.evaluateJs(MapEvents.ON_CAMERA_MOVE_STARTED, capsuleId, new JSONObject().put("reason", i));
            } catch (JSONException e) {
                Log.d(TAG, e.getMessage());
            }
        });
    }

    private void setOnCameraMoveCancelListener(HuaweiMap map, int capsuleId) {
        map.setOnCameraMoveCanceledListener(() ->
                cordovaUtils.evaluateJs(MapEvents.ON_CAMERA_MOVE_CANCELED, capsuleId, null));
    }

    private void setOnIndoorLevelActivated(HuaweiMap map, int capsuleId) {
        setOnIndoorStateChangeOriginal(map, capsuleId);
    }

    private void setOnIndoorBuildingsFocused(HuaweiMap map, int capsuleId) {
        setOnIndoorStateChangeOriginal(map, capsuleId);
    }

    private void setOnIndoorStateChangeOriginal(HuaweiMap map, int capsuleId) {
        map.setOnIndoorStateChangeListener(new HuaweiMap.OnIndoorStateChangeListener() {
            @Override
            public void onIndoorBuildingFocused() {
                cordovaUtils.evaluateJs(MapEvents.ON_INDOOR_BUILDINGS_FOCUSED, capsuleId, null);
            }

            @Override
            public void onIndoorLevelActivated(IndoorBuilding indoorBuilding) {
                cordovaUtils.evaluateJs(MapEvents.ON_INDOOR_LEVEL_ACTIVATED, capsuleId, ObjectToJson.constructJsonFromIndoorBuilding(indoorBuilding));
            }
        });
    }

    private void setOnInfoWindowClickListener(HuaweiMap map, int capsuleId) {
        map.setOnInfoWindowClickListener(marker -> cordovaUtils.evaluateJs(MapEvents.ON_INFO_WINDOW_CLICK, capsuleId, ObjectToJson.constructJsonFromMarker(marker)));
    }

    private void setOnInfoWindowCloseListener(HuaweiMap map, int capsuleId) {
        map.setOnInfoWindowCloseListener(marker -> cordovaUtils.evaluateJs(MapEvents.ON_INFO_WINDOW_CLOSE, capsuleId, ObjectToJson.constructJsonFromMarker(marker)));
    }

    private void setOnInfoWindowLongClickListener(HuaweiMap map, int capsuleId) {
        map.setOnInfoWindowLongClickListener(marker -> cordovaUtils.evaluateJs(MapEvents.ON_INFO_WINDOW_LONG_CLICK, capsuleId, ObjectToJson.constructJsonFromMarker(marker)));
    }

    private void setOnMyLocationButtonClickListener(HuaweiMap map, int capsuleId) {
        map.setOnMyLocationButtonClickListener(() -> cordovaUtils.evaluateJs(MapEvents.ON_MY_LOCATION_BUTTON_CLICK, capsuleId, null));
    }

    private void setOnMyLocationClickListener(HuaweiMap map, int capsuleId) {
        map.setOnMyLocationClickListener(location -> cordovaUtils.evaluateJs(MapEvents.ON_MY_LOCATION_CLICK, capsuleId, ObjectToJson.constructJsonFromLocation(location)));
    }

    private void setOnMapLoadedCallback(HuaweiMap map, int capsuleId) {
        map.setOnMapLoadedCallback(() -> cordovaUtils.evaluateJs(MapEvents.ON_MAP_LOADED, capsuleId, null));
    }

    public HuaweiMap.CancelableCallback cancelableCallback(int capsuleId, JSONObject json) {
        return new HuaweiMap.CancelableCallback() {
            @Override
            public void onFinish() {
                if (json.has("isOnFinish"))
                    cordovaUtils.evaluateJs(MapEvents.ON_CANCELABLE_CALLBACK_FINISH, capsuleId, null);
            }

            @Override
            public void onCancel() {
                if (json.has("isOnCancel"))
                    cordovaUtils.evaluateJs(MapEvents.ON_CANCELABLE_CALLBACK_CANCEL, capsuleId, null);
            }
        };
    }

    public void snapshotReadyCallback(int capsuleId, JSONObject json) {
        cordovaUtils.evaluateJs(MapEvents.ON_SNAPSHOT_READY_CALLBACK, capsuleId, json);
    }
}
