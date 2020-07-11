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

package com.huawei.hms.cordova.map.utils;

import android.graphics.Point;
import android.location.Location;
import android.util.Log;

import com.huawei.hms.cordova.map.helpers.Constants;
import com.huawei.hms.cordova.map.helpers.Consumer;
import com.huawei.hms.cordova.map.helpers.BiConsumer;
import com.huawei.hms.cordova.map.helpers.TriConsumer;
import com.huawei.hms.cordova.map.helpers.Mapper;
import com.huawei.hms.cordova.map.helpers.MapViewProps;
import com.huawei.hms.cordova.map.helpers.Padding;
import com.huawei.hms.maps.CameraUpdate;
import com.huawei.hms.maps.CameraUpdateFactory;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.HuaweiMapOptions;
import com.huawei.hms.maps.Projection;
import com.huawei.hms.maps.UiSettings;
import com.huawei.hms.maps.common.util.DistanceCalculator;
import com.huawei.hms.maps.model.BitmapDescriptor;
import com.huawei.hms.maps.model.BitmapDescriptorFactory;
import com.huawei.hms.maps.model.ButtCap;
import com.huawei.hms.maps.model.CameraPosition;
import com.huawei.hms.maps.model.Cap;
import com.huawei.hms.maps.model.Circle;
import com.huawei.hms.maps.model.CircleOptions;
import com.huawei.hms.maps.model.CustomCap;
import com.huawei.hms.maps.model.GroundOverlay;
import com.huawei.hms.maps.model.GroundOverlayOptions;
import com.huawei.hms.maps.model.IndoorBuilding;
import com.huawei.hms.maps.model.IndoorLevel;
import com.huawei.hms.maps.model.LatLng;
import com.huawei.hms.maps.model.LatLngBounds;
import com.huawei.hms.maps.model.Marker;
import com.huawei.hms.maps.model.MarkerOptions;
import com.huawei.hms.maps.model.PatternItem;
import com.huawei.hms.maps.model.Polygon;
import com.huawei.hms.maps.model.PolygonOptions;
import com.huawei.hms.maps.model.Polyline;
import com.huawei.hms.maps.model.PolylineOptions;
import com.huawei.hms.maps.model.RoundCap;
import com.huawei.hms.maps.model.SquareCap;
import com.huawei.hms.maps.model.VisibleRegion;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class MapUtils {
    public static final Map<String, BiConsumer<HuaweiMap, JSONObject>> SETTERS;
    public static final Map<String, Consumer<EventPack>> EVENTS;
    public static final Map<String, Consumer<ActionPack>> ACTIONS;
    public static final Map<String, Consumer<DispatcherPack>> DISPATCHER;
    // TODO: move this to another file
    public static final Map<String, TriConsumer<CordovaPlugin, JSONObject, CallbackContext>> STATIC_FUNCTIONS;

    private static final String TAG = MapUtils.class.getSimpleName();

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // fromJSONObject
    // /////////////////////////////////////////////////////////////////////////////////////////////

    public static final Mapper<JSONObject, LatLng> fromJSONObjectToLatLng = CordovaUtils.mapperWrapper(json ->
            new LatLng((float) json.getDouble("lat"), (float) json.getDouble("lng")));

    public static final Mapper<JSONObject, LatLngBounds> fromJSONObjectToLatLngBounds = CordovaUtils.mapperWrapper(json -> new LatLngBounds(
            fromJSONObjectToLatLng.map(json.getJSONObject("southwest")),
            fromJSONObjectToLatLng.map(json.getJSONObject("northeast"))));

    public static final Mapper<JSONObject, CameraPosition> fromJSONObjectToCameraPosition = CordovaUtils.mapperWrapper(json -> CameraPosition.builder()
            .target(fromJSONObjectToLatLng.map(json.optJSONObject("target")))
            .zoom((float) json.optDouble("zoom", 0.0))
            .bearing((float) json.optDouble("bearing", 0.0))
            .tilt((float) json.optDouble("tilt", 0.0))
            .build());

    public static final Mapper<JSONObject, HuaweiMapOptions> fromJSONObjectToHuaweiMapOptions = CordovaUtils.mapperWrapper(json -> new HuaweiMapOptions()
            .mapType(json.optInt("mapType", HuaweiMap.MAP_TYPE_NORMAL))
            .zoomControlsEnabled(json.optBoolean("zoomControlsEnabled", true))
            .compassEnabled(json.optBoolean("compassEnabled", true))
            .zoomGesturesEnabled(json.optBoolean("zoomGesturesEnabled", true))
            .scrollGesturesEnabled(json.optBoolean("scrollGesturesEnabled", true))
            .rotateGesturesEnabled(json.optBoolean("rotateGesturesEnabled", true))
            .tiltGesturesEnabled(json.optBoolean("tiltGesturesEnabled", true))
            .zOrderOnTop(json.optBoolean("zOrderOnTop", false))
            .liteMode(json.optBoolean("liteMode", false))
            .ambientEnabled(json.optBoolean("ambientEnabled", false))
            .minZoomPreference((float) json.optDouble("minZoomPreference", 0.0))
            .maxZoomPreference((float) json.optDouble("maxZoomPreference", 22.0))
            .camera(fromJSONObjectToCameraPosition.map(json.optJSONObject("cameraPosition")))
            .latLngBoundsForCameraTarget(fromJSONObjectToLatLngBounds.map(json.optJSONObject("latLngBounds"))));

    public static final Mapper<JSONObject, MapViewProps> fromJSONObjectToMapViewProps = CordovaUtils.mapperWrapper(json -> new MapViewProps()
            .width(json.getInt("width"))
            .height(json.getInt("height"))
            .paddingLeft(json.getInt("paddingLeft"))
            .paddingTop(json.getInt("paddingTop"))
            .borderLeft(json.getInt("borderLeft"))
            .borderTop(json.getInt("borderTop"))
            .position(json));

    public static final Mapper<JSONObject, Padding> fromJSONObjectToPadding = CordovaUtils.mapperWrapper(json -> {
        if (json.has("all")) {
            return new Padding(json.getInt("all"));
        } else if (json.has("horizontal") && json.has("vertical")) {
            return new Padding(json.getInt("horizontal"), json.getInt("vertical"));
        } else {
            return new Padding(
                    json.getInt("left"),
                    json.getInt("top"),
                    json.getInt("right"),
                    json.getInt("bottom")
            );
        }
    });

    private static final Mapper<JSONObject, BitmapDescriptor> fromJSONObjectToBitmapDescriptor = CordovaUtils.mapperWrapper(json -> {
        if (json.has("hue")) {
            return BitmapDescriptorFactory.defaultMarker((float) json.getDouble("hue"));
        } else if (json.has("asset")) {
            return BitmapDescriptorFactory.fromAsset(json.getString("asset"));
        } else if (json.has("fileName")) {
            return BitmapDescriptorFactory.fromFile(json.getString("fileName"));
        } else if (json.has("path")) {
            return BitmapDescriptorFactory.fromPath(json.getString("path"));
        }

        return BitmapDescriptorFactory.defaultMarker();
    });

    private static final Mapper<JSONObject, PatternItem> fromJSONObjectToPatternItem = CordovaUtils.mapperWrapper(json -> new PatternItem(
            json.optInt("type"),
            (float) json.getDouble("length")));

    private static final Mapper<JSONObject, CircleOptions> fromJSONObjectToCircleOptions = CordovaUtils.mapperWrapper(json -> new CircleOptions()
            .center(fromJSONObjectToLatLng.map(json.optJSONObject("center")))
            .clickable(json.optBoolean("clickable", false))
            .fillColor(CordovaUtils.parseColor(json, "fillColor", 0))
            .radius(json.optDouble("radius", 0.0D))
            .strokeColor(CordovaUtils.parseColor(json, "strokeColor", -16777216))
            .strokeWidth((float) json.optDouble("strokeWidth", 10.0F))
            .strokePattern(CordovaUtils.mapJSONArray(json.optJSONArray("strokePattern"), fromJSONObjectToPatternItem))
            .visible(json.optBoolean("visible", true))
            .zIndex((float) json.optDouble("zIndex", 0.0F)));

    private static final Mapper<JSONObject, MarkerOptions> fromJSONObjectToMarkerOptions = CordovaUtils.mapperWrapper(json -> {
        JSONObject anchor = CordovaUtils.optJSONObject(json, "anchorMarker", new JSONObject());
        JSONObject infoWindowAnchor = CordovaUtils.optJSONObject(json, "infoWindowAnchor", new JSONObject());

        return new MarkerOptions()
                .anchorMarker((float) anchor.optDouble("u", 0.5F), (float) anchor.optDouble("v", 1.0F))
                .infoWindowAnchor((float) infoWindowAnchor.optDouble("u", 0.5F), (float) infoWindowAnchor.optDouble("v", 0.0F))
                .alpha((float) json.optDouble("alpha", 1))
                .clusterable(json.optBoolean("clusterable", false))
                .draggable(json.optBoolean("draggable", false))
                .icon(fromJSONObjectToBitmapDescriptor.map(json.optJSONObject("icon")))
                .flat(json.optBoolean("flat", false))
                .position(fromJSONObjectToLatLng.map(json.optJSONObject("position")))
                .rotation((float) json.optDouble("rotation", 0.0F))
                .snippet(json.optString("snippet"))
                .title(json.optString("title"))
                .visible(json.optBoolean("visible", true))
                .zIndex((float) json.optDouble("zIndex", 0.0F));
    });

    private static final Mapper<JSONObject, PolygonOptions> fromJSONObjectToPolygonOptions = CordovaUtils.mapperWrapper(json -> {
        PolygonOptions polygonOptions = new PolygonOptions()
            .addAll(CordovaUtils.mapJSONArray(json.getJSONArray("points"), fromJSONObjectToLatLng))
            .clickable(json.optBoolean("clickable", false))
            .geodesic(json.optBoolean("geodesic", false))
            .fillColor(CordovaUtils.parseColor(json, "fillColor", 0))
            .strokeColor(CordovaUtils.parseColor(json, "strokeColor", -16777216))
            .strokeJointType(json.optInt("strokeJointType", 0))
            .strokePattern(CordovaUtils.mapJSONArray(json.getJSONArray("strokePattern"), fromJSONObjectToPatternItem))
            .strokeWidth((float) json.optDouble("strokeWidth", 10.0F))
            .visible(json.optBoolean("visible", true))
            .zIndex((float) json.optDouble("zIndex", 0.0F));

        List<List<LatLng>> holes = CordovaUtils.mapJSONArray(json.getJSONArray("holes"), JSONArray.class, (hole) -> CordovaUtils.mapJSONArray(hole, fromJSONObjectToLatLng));
        for (List<LatLng> hole: holes) {
            polygonOptions.addHole(hole);
        }

        return polygonOptions;
    });

    private static final Mapper<JSONObject, Cap> fromJSONObjectToCap = CordovaUtils.mapperWrapper(json -> {
        int type = json.getInt("type");

        if (type == Cap.TYPE_BUTT_CAP) {
            return new ButtCap();
        } else if (type == Cap.TYPE_SQUARE_CAP) {
            return new SquareCap();
        } else if (type == Cap.TYPE_ROUND_CAP) {
            return new RoundCap();
        } else if (type == Cap.TYPE_CUSTOM_CAP) {
            if (json.has("refWidth")) {
                return new CustomCap(fromJSONObjectToBitmapDescriptor.map(json.getJSONObject("bitmapDescriptor")), (float) json.getDouble("refWidth"));
            } else {
                return new CustomCap(fromJSONObjectToBitmapDescriptor.map(json.getJSONObject("bitmapDescriptor")));
            }
        }

        return null;
    });

    private static final Mapper<JSONObject, PolylineOptions> fromJSONObjectToPolylineOptions = CordovaUtils.mapperWrapper(json -> new PolylineOptions()
            .addAll(CordovaUtils.mapJSONArray(json.getJSONArray("points"), fromJSONObjectToLatLng))
            .clickable(json.optBoolean("clickable", false))
            .color(CordovaUtils.parseColor(json, "color", -16777216))
            .endCap(fromJSONObjectToCap.map(json.optJSONObject("endCap")))
            .startCap(fromJSONObjectToCap.map(json.optJSONObject("startCap")))
            .geodesic(json.optBoolean("geodesic", false))
            .jointType(json.optInt("jointType", 0))
            .visible(json.optBoolean("visible", true))
            .width((float) json.optDouble("width", 10.0F))
            .zIndex((float) json.optDouble("zIndex", 0.0F)));

    private static final Mapper<JSONObject, GroundOverlayOptions> fromJSONObjectToGroundOverlayOptions = CordovaUtils.mapperWrapper(json -> {
        JSONObject anchor = CordovaUtils.optJSONObject(json, "anchor", new JSONObject());

        GroundOverlayOptions groundOverlayOptions = new GroundOverlayOptions()
                .anchor((float) anchor.optDouble("u", 0.5F), (float) anchor.optDouble("v", 0.5F))
                .bearing((float) json.optDouble("bearing", 0.0F))
                .clickable(json.optBoolean("clickable", false))
                .image(fromJSONObjectToBitmapDescriptor.map(json.optJSONObject("image")))
                .visible(json.optBoolean("visible", true))
                .transparency((float) json.optDouble("transparency", 0.0F))
                .zIndex((float) json.optDouble("zIndex", 0.0F));

        JSONObject positionJSON = json.getJSONObject("position");
        if (positionJSON.has("width") && positionJSON.has("height")) {
            groundOverlayOptions.position(fromJSONObjectToLatLng.map(positionJSON.getJSONObject("latLng")),
                    (float) positionJSON.getDouble("width"),
                    (float) positionJSON.getDouble("height"));
        } else if (positionJSON.has("width")) {
            groundOverlayOptions.position(fromJSONObjectToLatLng.map(positionJSON.getJSONObject("latLng")),
                    (float) positionJSON.getDouble("width"));
        } else {
            groundOverlayOptions.positionFromBounds(fromJSONObjectToLatLngBounds.map(positionJSON.getJSONObject("latLngBounds")));
        }

        return groundOverlayOptions;
    });

    public static final Mapper<JSONObject, Point> fromJSONObjectToPoint = CordovaUtils.mapperWrapper(json -> new Point(json.getInt("x"), json.getInt("y")));

    public static final Mapper<JSONObject, CameraUpdate> fromJSONObjectToCameraUpdate = CordovaUtils.mapperWrapper(json -> {
        switch (json.getString("method")) {
            case "newCameraPosition":
                return CameraUpdateFactory.newCameraPosition(fromJSONObjectToCameraPosition.map(json));
            case "newLatLng":
                return CameraUpdateFactory.newLatLng(fromJSONObjectToLatLng.map(json));
            case "newLatLngBounds":
                if (json.has("width") && json.has("height")) {
                    return CameraUpdateFactory.newLatLngBounds(fromJSONObjectToLatLngBounds.map(json), json.getInt("width"), json.getInt("height"), json.getInt("padding"));
                } else {
                    return CameraUpdateFactory.newLatLngBounds(fromJSONObjectToLatLngBounds.map(json), json.getInt("padding"));
                }
            case "newLatLngZoom":
                return CameraUpdateFactory.newLatLngZoom(fromJSONObjectToLatLng.map(json), json.getInt("zoom"));
            case "scrollBy":
                return CameraUpdateFactory.scrollBy((float) json.getDouble("xPixel"), (float) json.getDouble("yPixel"));
            case "zoomBy":
                if (json.has("focus")) {
                    return CameraUpdateFactory.zoomBy((float) json.getDouble("amount"), fromJSONObjectToPoint.map(json.getJSONObject("focus")));
                } else {
                    return CameraUpdateFactory.zoomBy((float) json.getDouble("amount"));
                }
            case "zoomIn":
                return CameraUpdateFactory.zoomIn();
            case "zoomOut":
                return CameraUpdateFactory.zoomOut();
            case "zoomTo":
                return CameraUpdateFactory.zoomTo((float) json.getDouble("zoom"));
        }

        Log.e(TAG, "fromJSONObjectToCameraPosition :: malformed method name");
        return null;
    });

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // toJSONObject
    // /////////////////////////////////////////////////////////////////////////////////////////////

    public static final Mapper<LatLng, JSONObject> fromLatLngToJSONObject = CordovaUtils.mapperWrapper(latLng -> new JSONObject()
            .put("lat", latLng.latitude)
            .put("lng", latLng.longitude));

    public static final Mapper<LatLngBounds, JSONObject> fromLatLngBoundsToJSONObject = CordovaUtils.mapperWrapper(latLngBounds -> new JSONObject()
            .put("__objectType", "LatLngBounds")
            .put("__functions", CordovaUtils.arrayOf("including", "contains"))
            .put("center", fromLatLngToJSONObject.map(latLngBounds.getCenter()))
            .put("northeast", fromLatLngToJSONObject.map(latLngBounds.northeast))
            .put("southwest", fromLatLngToJSONObject.map(latLngBounds.southwest)));

    public static final Mapper<Circle, JSONObject> fromCircleToJSONObject = CordovaUtils.mapperWrapper(circle -> new JSONObject()
            .put("__objectType", "Circle")
            .put("__functions", CordovaUtils.arrayOf("set", "remove", "update"))
            .put("id", circle.getId())
            .put("center", fromLatLngToJSONObject.map(circle.getCenter()))
            .put("fillColor", circle.getFillColor())
            .put("radius", circle.getRadius())
            .put("strokeColor", circle.getStrokeColor())
            .put("strokeWidth", circle.getStrokeWidth())
            .put("strokePattern", circle.getStrokePattern())
            .put("isClickable", circle.isClickable())
            .put("isVisible", circle.isVisible())
            .put("zIndex", circle.getZIndex()));

    public static final Mapper<GroundOverlay, JSONObject> fromGroundOverlayToJSONObject = CordovaUtils.mapperWrapper(groundOverlay -> new JSONObject()
            .put("__objectType", "GroundOverlay")
            .put("__functions", CordovaUtils.arrayOf("set", "remove", "update"))
            .put("id", groundOverlay.getId())
            .put("bearing", groundOverlay.getBearing())
            .put("latLngBounds", fromLatLngBoundsToJSONObject.map(groundOverlay.getBounds()))
            .put("height", groundOverlay.getHeight())
            .put("id", groundOverlay.getId())
            .put("position", fromLatLngToJSONObject.map(groundOverlay.getPosition()))
            .put("transparency", groundOverlay.getTransparency())
            .put("width", groundOverlay.getWidth())
            .put("zIndex", groundOverlay.getZIndex())
            .put("isClickable", groundOverlay.isClickable())
            .put("isVisible", groundOverlay.isVisible()));

    public static final Mapper<Marker, JSONObject> fromMarkerToJSONObject = CordovaUtils.mapperWrapper(marker -> new JSONObject()
            .put("__objectType", "Marker")
            .put("__functions", CordovaUtils.arrayOf("set", "remove", "showInfoWindow", "hideInfoWindow", "update"))
            .put("id", marker.getId())
            .put("alpha", marker.getAlpha())
            .put("marker", fromLatLngToJSONObject.map(marker.getPosition()))
            .put("rotation", marker.getRotation())
            .put("snippet", marker.getSnippet())
            .put("title", marker.getTitle())
            .put("zIndex", marker.getZIndex())
            .put("isClusterable", marker.isClusterable())
            .put("isDraggable", marker.isDraggable())
            .put("isFlat", marker.isFlat())
            .put("isInfoWindowShown", marker.isInfoWindowShown())
            .put("isVisible", marker.isVisible()));

    public static final Mapper<PatternItem, JSONObject> fromPatternItemToJSONObject = CordovaUtils.mapperWrapper(patternItem -> new JSONObject()
            .put("type", patternItem.type)
            .put("length", patternItem.length));

    public static final Mapper<Polygon, JSONObject> fromPolygonToJSONObject = CordovaUtils.mapperWrapper(polygon -> new JSONObject()
            .put("__objectType", "Polygon")
            .put("__functions", CordovaUtils.arrayOf("set", "remove", "update"))
            .put("id", polygon.getId())
            .put("fillColor", polygon.getFillColor())
            .put("holes", new JSONArray(JavaUtils.map(polygon.getHoles(), (list) -> CordovaUtils.mapList(list, fromLatLngToJSONObject))))
            .put("points", CordovaUtils.mapList(polygon.getPoints(), fromLatLngToJSONObject))
            .put("strokeColor", polygon.getStrokeColor())
            .put("strokeWidth", polygon.getStrokeWidth())
            .put("strokeJointType", polygon.getStrokeJointType())
            .put("strokePattern", CordovaUtils.mapList(polygon.getStrokePattern(), fromPatternItemToJSONObject))
            .put("zIndex", polygon.getZIndex())
            .put("isClickable", polygon.isClickable())
            .put("isGeodesic", polygon.isGeodesic())
            .put("isVisible", polygon.isVisible()));

    public static final Mapper<Cap, JSONObject> fromCapToJSONObject = CordovaUtils.mapperWrapper(cap -> new JSONObject()
            .put("type", typeOf(cap)));

    public static final Mapper<Polyline, JSONObject> fromPolylineToJSONObject = CordovaUtils.mapperWrapper(polyline -> new JSONObject()
            .put("__objectType", "Polyline")
            .put("__functions", CordovaUtils.arrayOf("set", "remove", "update"))
            .put("id", polyline.getId())
            .put("jointType", polyline.getJointType())
            .put("points", CordovaUtils.mapList(polyline.getPoints(), fromLatLngToJSONObject))
            .put("startCap", fromCapToJSONObject.map(polyline.getStartCap()))
            .put("endCap", fromCapToJSONObject.map(polyline.getEndCap()))
            .put("pattern", CordovaUtils.mapList(polyline.getPattern(), fromPatternItemToJSONObject))
            .put("width", polyline.getWidth())
            .put("zIndex", polyline.getZIndex())
            .put("color", polyline.getColor())
            .put("isClickable", polyline.isClickable())
            .put("isGeodesic", polyline.isGeodesic())
            .put("isVisible", polyline.isVisible()));

    public static final Mapper<IndoorLevel, JSONObject> fromIndoorLevelToJSONObject = CordovaUtils.mapperWrapper(indoorLevel -> new JSONObject()
            .put("__objectType", "IndoorLevel")
            .put("__functions", CordovaUtils.arrayOf("activate"))
            .put("name", indoorLevel.getName())
            .put("shortName", indoorLevel.getShortName()));

    public static final Mapper<CameraPosition, JSONObject> fromCameraPositionToJSONObject = CordovaUtils.mapperWrapper(cameraPosition -> new JSONObject()
            .put("target", fromLatLngToJSONObject.map(cameraPosition.target))
            .put("zoom", cameraPosition.zoom)
            .put("bearing", cameraPosition.bearing)
            .put("tilt", cameraPosition.tilt));

    public static final Mapper<VisibleRegion, JSONObject> fromVisibleRegionToJSONObject = CordovaUtils.mapperWrapper(visibleRegion -> new JSONObject()
            .put("farLeft", fromLatLngToJSONObject.map(visibleRegion.farLeft))
            .put("farRight", fromLatLngToJSONObject.map(visibleRegion.farRight))
            .put("nearLeft", fromLatLngToJSONObject.map(visibleRegion.nearLeft))
            .put("nearRight", fromLatLngToJSONObject.map(visibleRegion.nearRight))
            .put("latLngBounds", fromLatLngBoundsToJSONObject.map(visibleRegion.latLngBounds)));

    public static final Mapper<IndoorBuilding, JSONObject> fromIndoorBuildingToJSONObject = CordovaUtils.mapperWrapper(indoorBuilding -> new JSONObject()
            .put("activeLevelIndex", indoorBuilding.getActiveLevelIndex())
            .put("defaultLevelIndex", indoorBuilding.getDefaultLevelIndex())
            .put("levels", CordovaUtils.mapList(indoorBuilding.getLevels(), fromIndoorLevelToJSONObject)));

    public static final Mapper<Projection, JSONObject> fromProjectionToJSONObject = CordovaUtils.mapperWrapper(projection -> new JSONObject()
            //.put("__objectType", "Projection")
            //.put("__functions", CordovaUtils.arrayOf("toScreenLocation", "fromScreenLocation"))
            .put("visibleRegion", fromVisibleRegionToJSONObject.map(projection.getVisibleRegion())));

    public static final Mapper<UiSettings, JSONObject> fromUiSettingsToJSONObject = CordovaUtils.mapperWrapper(uiSettings -> new JSONObject()
            .put("isCompassEnabled", uiSettings.isCompassEnabled())
            .put("isIndoorLevelPickerEnabled", uiSettings.isIndoorLevelPickerEnabled())
            .put("isMapToolbarEnabled", uiSettings.isMapToolbarEnabled())
            .put("isMyLocationButtonEnabled", uiSettings.isMyLocationButtonEnabled())
            .put("isRotateGesturesEnabled", uiSettings.isRotateGesturesEnabled())
            .put("isScrollGesturesEnabled", uiSettings.isScrollGesturesEnabled())
            .put("isScrollGesturesEnabledDuringRotateOrZoom", uiSettings.isScrollGesturesEnabledDuringRotateOrZoom())
            .put("isTiltGesturesEnabled", uiSettings.isTiltGesturesEnabled())
            .put("isZoomControlsEnabled", uiSettings.isZoomControlsEnabled())
            .put("isZoomGesturesEnabled", uiSettings.isZoomGesturesEnabled()));

    public static final Mapper<HuaweiMap, JSONObject> fromHuaweiMapToJSONObject = CordovaUtils.mapperWrapper(huaweiMap -> new JSONObject()
            .put("cameraPosition", fromCameraPositionToJSONObject.map(huaweiMap.getCameraPosition()))
            .put("focusedBuilding", fromIndoorBuildingToJSONObject.map(huaweiMap.getFocusedBuilding()))
            .put("projection", fromProjectionToJSONObject.map(huaweiMap.getProjection()))
            .put("uiSettings", fromUiSettingsToJSONObject.map(huaweiMap.getUiSettings()))
            .put("mapType", huaweiMap.getMapType())
            .put("maxZoomLevel", huaweiMap.getMaxZoomLevel())
            .put("minZoomLevel", huaweiMap.getMinZoomLevel())
            .put("isBuildingsEnabled", huaweiMap.isBuildingsEnabled())
            .put("isIndoorEnabled", huaweiMap.isIndoorEnabled())
            .put("isMyLocationEnabled", huaweiMap.isMyLocationEnabled())
            .put("isTrafficEnabled", huaweiMap.isTrafficEnabled()));

    public static final Mapper<Location, JSONObject> fromLocationToJSONObject = CordovaUtils.mapperWrapper(location -> new JSONObject()
            .put("accuracy", location.getAccuracy())
            .put("altitude", location.getAltitude())
            .put("bearing", location.getBearing())
            .put("elapsedRealtimeNanos", location.getElapsedRealtimeNanos())
            .put("latitude", location.getLatitude())
            .put("longitude", location.getLongitude())
            .put("provider", location.getProvider())
            .put("speed", location.getSpeed())
            .put("time", location.getTime())
            .put("isFromMockProvider", location.isFromMockProvider()));

    // TODO: add these maybe:
    //.put("bearingAccuracyDegrees", location.getBearingAccuracyDegrees())
    //.put("speedAccuracyMetersPerSecond", location.getSpeedAccuracyMetersPerSecond())
    //.put("verticalAccuracyMeters", location.getVerticalAccuracyMeters())

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Helpers
    // /////////////////////////////////////////////////////////////////////////////////////////////

    private static int typeOf(Cap cap) {
        if (cap instanceof ButtCap) {
            return Cap.TYPE_BUTT_CAP;
        } else if (cap instanceof SquareCap) {
            return Cap.TYPE_SQUARE_CAP;
        } else if (cap instanceof RoundCap) {
            return Cap.TYPE_ROUND_CAP;
        }
        return Cap.TYPE_CUSTOM_CAP;
    }

    // /////////////////////////////////////////////////////////////////////////////////////////////
    // Initialize everything
    // /////////////////////////////////////////////////////////////////////////////////////////////

    static {
        Map<String, BiConsumer<HuaweiMap, JSONObject>> setters = new HashMap<>();
        Map<String, Consumer<EventPack>> events = new HashMap<>();
        Map<String, Consumer<ActionPack>> actions = new HashMap<>();
        Map<String, Consumer<DispatcherPack>> dispatcher = new HashMap<>();
        Map<String, TriConsumer<CordovaPlugin, JSONObject, CallbackContext>> staticFunctions = new HashMap<>();

        setters.put("minZoomPreference", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setMinZoomPreference((float) json.getDouble("minZoomPreference"))));
        setters.put("maxZoomPreference", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setMaxZoomPreference((float) json.getDouble("maxZoomPreference"))));
        setters.put("myLocationEnabled", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setMyLocationEnabled(json.getBoolean("myLocationEnabled"))));
        setters.put("mapType", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setMapType(json.getInt("mapType"))));
        setters.put("buildingsEnabled", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setBuildingsEnabled(json.getBoolean("buildingsEnabled"))));
        setters.put("contentDescription", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setContentDescription(json.getString("contentDescription"))));
        setters.put("geoPoliticalView", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setGeoPoliticalView(json.getString("geoPoliticalView"))));
        setters.put("markersClustering", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setMarkersClustering(json.getBoolean("markersClustering"))));
        setters.put("trafficEnabled", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setTrafficEnabled(json.getBoolean("trafficEnabled"))));
        setters.put("watermarkEnabled", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setWatermarkEnabled(json.getBoolean("watermarkEnabled"))));
        setters.put("indoorEnabled", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setIndoorEnabled(json.getBoolean("indoorEnabled"))));
        setters.put("latLngBounds", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> huaweiMap.setLatLngBoundsForCameraTarget(fromJSONObjectToLatLngBounds.map(json.getJSONObject("latLngBounds")))));
        setters.put("padding", CordovaUtils.biConsumerWrapper((huaweiMap, json) -> fromJSONObjectToPadding.map(json.getJSONObject("padding")).using(p -> huaweiMap.setPadding(p.getLeft(), p.getTop(), p.getRight(), p.getBottom()))));

        events.put("circleClick", pack -> pack.huaweiMap.setOnCircleClickListener(circle -> pack.sendEvent(circle, fromCircleToJSONObject.map(circle))));
        events.put("mapClick", pack -> pack.huaweiMap.setOnMapClickListener(latLng -> pack.sendEvent(latLng, fromLatLngToJSONObject.map(latLng))));
        events.put("mapLongClick", pack -> pack.huaweiMap.setOnMapLongClickListener(latLng -> pack.sendEvent(latLng, fromLatLngToJSONObject.map(latLng))));
        events.put("infoWindowClick", pack -> pack.huaweiMap.setOnInfoWindowClickListener(marker -> pack.sendEvent(marker, fromMarkerToJSONObject.map(marker))));
        events.put("cameraMoveStarted", pack -> pack.huaweiMap.setOnCameraMoveStartedListener(reason -> pack.sendEvent(reason, CordovaUtils.keyValPair("reason", reason))));
        events.put("polygonClick", pack -> pack.huaweiMap.setOnPolygonClickListener(polygon -> pack.sendEvent(polygon, fromPolygonToJSONObject.map(polygon))));
        events.put("polylineClick", pack -> pack.huaweiMap.setOnPolylineClickListener(polyline -> pack.sendEvent(polyline, fromPolylineToJSONObject.map(polyline))));
        events.put("cameraMove", pack -> pack.huaweiMap.setOnCameraMoveListener(pack::sendEvent));
        events.put("cameraIdle", pack -> pack.huaweiMap.setOnCameraIdleListener(pack::sendEvent));
        events.put("mapLoaded", pack -> pack.huaweiMap.setOnMapLoadedCallback(pack::sendEvent));
        events.put("markerClick", pack -> pack.huaweiMap.setOnMarkerClickListener(marker -> {
            pack.sendEvent(marker, fromMarkerToJSONObject.map(marker));
            return true;
        }));
        events.put("myLocationButtonClick", pack -> pack.huaweiMap.setOnMyLocationButtonClickListener(() -> {
            pack.sendEvent();
            return true;
        }));
        events.put("myLocationClick", pack -> pack.huaweiMap.setOnMyLocationClickListener(location -> pack.sendEvent(location, fromLocationToJSONObject.map(location))));
        events.put("markerDrag", pack -> pack.huaweiMap.setOnMarkerDragListener(new HuaweiMap.OnMarkerDragListener() {
            @Override
            public void onMarkerDragStart(Marker marker) {
                pack.sendEvent(marker, fromMarkerToJSONObject.map(marker), CordovaUtils.keyValPair("event", Constants.MARKER_DRAG_START));
            }

            @Override
            public void onMarkerDrag(Marker marker) {
                pack.sendEvent(marker, fromMarkerToJSONObject.map(marker), CordovaUtils.keyValPair("event", Constants.MARKER_DRAG));
            }

            @Override
            public void onMarkerDragEnd(Marker marker) {
                pack.sendEvent(marker, fromMarkerToJSONObject.map(marker), CordovaUtils.keyValPair("event", Constants.MARKER_DRAG_END));
            }
        }));

        actions.put("addCircle", pack -> pack.handle(pack.huaweiMap::addCircle, fromJSONObjectToCircleOptions, fromCircleToJSONObject));
        actions.put("addGroundOverlay", pack -> pack.handle(pack.huaweiMap::addGroundOverlay, fromJSONObjectToGroundOverlayOptions, fromGroundOverlayToJSONObject));
        actions.put("addMarker", pack -> pack.handle(pack.huaweiMap::addMarker, fromJSONObjectToMarkerOptions, fromMarkerToJSONObject));
        actions.put("addPolygon", pack -> pack.handle(pack.huaweiMap::addPolygon, fromJSONObjectToPolygonOptions, fromPolygonToJSONObject));
        actions.put("addPolyline", pack -> pack.handle(pack.huaweiMap::addPolyline, fromJSONObjectToPolylineOptions, fromPolylineToJSONObject));
        actions.put("animateCamera", pack -> pack.handle(pack.huaweiMap::animateCamera, fromJSONObjectToCameraUpdate));
        actions.put("moveCamera", pack -> pack.handle(pack.huaweiMap::moveCamera, fromJSONObjectToCameraUpdate));
        actions.put("resetMinMaxZoomPreference", pack -> pack.handle(pack.huaweiMap::resetMinMaxZoomPreference));
        actions.put("clear", pack -> pack.handle(pack.huaweiMap::clear));

        dispatcher.put("Circle[set][position]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setStrokePattern, CordovaUtils.mapJSONArray(pack.args.optJSONArray("strokePattern"), fromJSONObjectToPatternItem))));
        dispatcher.put("Circle[set][center]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setCenter, fromJSONObjectToLatLng.map(pack.args.getJSONObject("center")))));
        dispatcher.put("Circle[set][clickable]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setClickable, pack.args.getBoolean("clickable"))));
        dispatcher.put("Circle[set][fillColor]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setFillColor, pack.args.getInt("fillColor"))));
        dispatcher.put("Circle[set][radius]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setRadius, pack.args.getDouble("radius"))));
        dispatcher.put("Circle[set][strokeColor]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setStrokeColor, pack.args.getInt("strokeColor"))));
        dispatcher.put("Circle[set][strokeWidth]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setStrokeWidth, (float) pack.args.getDouble("strokeWidth"))));
        dispatcher.put("Circle[set][visible]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setVisible, pack.args.getBoolean("visible"))));
        dispatcher.put("Circle[set][zIndex]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::setZIndex, (float) pack.args.get("zIndex"))));
        dispatcher.put("Circle[remove]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Circle.class)::remove)));
        dispatcher.put("Circle[update]", CordovaUtils.consumerWrapper(pack -> pack.handle(fromCircleToJSONObject.map(pack.obj(Circle.class)))));

        dispatcher.put("GroundOverlay[set][bearing]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setBearing((float) pack.args.getDouble("bearing"))));
        dispatcher.put("GroundOverlay[set][clickable]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setClickable(pack.args.getBoolean("clickable"))));
        dispatcher.put("GroundOverlay[set][image]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setImage(fromJSONObjectToBitmapDescriptor.map(pack.args.getJSONObject("image")))));
        dispatcher.put("GroundOverlay[set][position]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setPosition(fromJSONObjectToLatLng.map(pack.args.getJSONObject("position")))));
        dispatcher.put("GroundOverlay[set][positionFromBounds]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setPositionFromBounds(fromJSONObjectToLatLngBounds.map(pack.args.getJSONObject("positionFromBounds")))));
        dispatcher.put("GroundOverlay[set][transparency]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setTransparency((float) pack.args.getDouble("transparency"))));
        dispatcher.put("GroundOverlay[set][visible]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setVisible(pack.args.getBoolean("visible"))));
        dispatcher.put("GroundOverlay[set][zIndex]", CordovaUtils.consumerWrapper(pack -> pack.obj(GroundOverlay.class).setZIndex(pack.args.getInt("zIndex"))));
        dispatcher.put("GroundOverlay[remove]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(GroundOverlay.class)::remove)));
        dispatcher.put("GroundOverlay[update]", CordovaUtils.consumerWrapper(pack -> pack.handle(fromGroundOverlayToJSONObject.map(pack.obj(GroundOverlay.class)))));
        dispatcher.put("GroundOverlay[set][dimensions]", CordovaUtils.consumerWrapper(pack -> {
            if (pack.args.has("height")) {
                pack.obj(GroundOverlay.class).setDimensions((float) pack.args.getDouble("width"), (float) pack.args.getDouble("height"));
            } else {
                pack.obj(GroundOverlay.class).setDimensions((float) pack.args.getDouble("width"));
            }
        }));

        dispatcher.put("Marker[set][alpha]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setAlpha, (float) pack.args.getDouble("alpha"))));
        dispatcher.put("Marker[set][rotation]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setRotation, (float) pack.args.getDouble("rotation"))));
        dispatcher.put("Marker[set][icon]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setIcon, fromJSONObjectToBitmapDescriptor.map(pack.args))));
        dispatcher.put("Marker[set][position]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setPosition, fromJSONObjectToLatLng.map(pack.args))));
        dispatcher.put("Marker[set][flat]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setFlat, pack.args.getBoolean("flat"))));
        dispatcher.put("Marker[set][snippet]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setSnippet, pack.args.getString("snippet"))));
        dispatcher.put("Marker[set][title]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setTitle, pack.args.getString("title"))));
        dispatcher.put("Marker[set][draggable]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setDraggable, pack.args.getBoolean("draggable"))));
        dispatcher.put("Marker[set][visible]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setVisible, pack.args.getBoolean("visible"))));
        dispatcher.put("Marker[set][zIndex]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::setZIndex, (float) pack.args.getDouble("zIndex"))));
        dispatcher.put("Marker[remove]", CordovaUtils.consumerWrapper(pack -> pack.obj(Marker.class).remove()));
        dispatcher.put("Marker[hideInfoWindow]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::hideInfoWindow)));
        dispatcher.put("Marker[showInfoWindow]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Marker.class)::showInfoWindow)));
        dispatcher.put("Marker[set][markerAnchor]", CordovaUtils.consumerWrapper(pack -> pack.obj(Marker.class).setMarkerAnchor((float) pack.args.getDouble("u"), (float) pack.args.getDouble("v"))));
        dispatcher.put("Marker[set][infoWindowAnchor]", CordovaUtils.consumerWrapper(pack -> pack.obj(Marker.class).setInfoWindowAnchor((float) pack.args.getDouble("u"), (float) pack.args.getDouble("v"))));
        dispatcher.put("Marker[update]", CordovaUtils.consumerWrapper(pack -> pack.handle(fromMarkerToJSONObject.map(pack.obj(Marker.class)))));

        dispatcher.put("Polygon[set][points]", CordovaUtils.consumerWrapper(pack -> pack.obj(Polygon.class).setPoints(CordovaUtils.mapJSONArray(pack.args.getJSONArray("points"), fromJSONObjectToLatLng))));
        dispatcher.put("Polygon[set][holes]", CordovaUtils.consumerWrapper(pack -> pack.obj(Polygon.class).setHoles(CordovaUtils.mapJSONArray(pack.args.getJSONArray("holes"), JSONArray.class, (hole) -> CordovaUtils.mapJSONArray(hole, fromJSONObjectToLatLng)))));
        dispatcher.put("Polygon[set][strokeWidth]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setStrokeWidth, (float) pack.args.getDouble("strokeWidth"))));
        dispatcher.put("Polygon[set][strokePattern]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setStrokePattern, CordovaUtils.mapJSONArray(pack.args.optJSONArray("strokePattern"), fromJSONObjectToPatternItem))));
        dispatcher.put("Polygon[set][strokeColor]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setStrokeColor, pack.args.getInt("strokeColor"))));
        dispatcher.put("Polygon[set][strokeJointType]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setStrokeJointType, pack.args.getInt("strokeJointType"))));
        dispatcher.put("Polygon[set][fillColor]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setFillColor, pack.args.getInt("fillColor"))));
        dispatcher.put("Polygon[set][geodesic]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setGeodesic, pack.args.getBoolean("geodesic"))));
        dispatcher.put("Polygon[set][clickable]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setClickable, pack.args.getBoolean("clickable"))));
        dispatcher.put("Polygon[set][visible]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setVisible, pack.args.getBoolean("visible"))));
        dispatcher.put("Polygon[set][zIndex]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::setZIndex, (float) pack.args.getDouble("zIndex"))));
        dispatcher.put("Polygon[remove]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polygon.class)::remove)));
        dispatcher.put("Polygon[update]", CordovaUtils.consumerWrapper(pack -> pack.handle(fromPolygonToJSONObject.map(pack.obj(Polygon.class)))));

        dispatcher.put("Polyline[set][points]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setPoints, CordovaUtils.mapJSONArray(pack.args.getJSONArray("points"), fromJSONObjectToLatLng))));
        dispatcher.put("Polyline[set][pattern]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setPattern, CordovaUtils.mapJSONArray(pack.args.getJSONArray("pattern"), fromJSONObjectToPatternItem))));
        dispatcher.put("Polyline[set][startCap]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setStartCap, fromJSONObjectToCap.map(pack.args.getJSONObject("startCap")))));
        dispatcher.put("Polyline[set][endCap]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setEndCap, fromJSONObjectToCap.map(pack.args.getJSONObject("endCap")))));
        dispatcher.put("Polyline[set][color]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setColor, pack.args.getInt("color"))));
        dispatcher.put("Polyline[set][jointType]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setJointType, pack.args.getInt("jointType"))));
        dispatcher.put("Polyline[set][width]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setWidth, (float) pack.args.getDouble("width"))));
        dispatcher.put("Polyline[set][geodesic]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setGeodesic, pack.args.getBoolean("geodesic"))));
        dispatcher.put("Polyline[set][clickable]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setClickable, pack.args.getBoolean("clickable"))));
        dispatcher.put("Polyline[set][visible]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setVisible, pack.args.getBoolean("visible"))));
        dispatcher.put("Polyline[set][zIndex]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::setZIndex, (float) pack.args.getDouble("zIndex"))));
        dispatcher.put("Polyline[remove]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(Polyline.class)::remove)));
        dispatcher.put("Polyline[update]", CordovaUtils.consumerWrapper(pack -> pack.handle(fromPolylineToJSONObject.map(pack.obj(Polyline.class)))));

        dispatcher.put("LatLngBounds[including]", pack -> pack.handle(fromLatLngBoundsToJSONObject.map(fromJSONObjectToLatLngBounds.map(pack.incomingObject).including(fromJSONObjectToLatLng.map(pack.args)))));
        dispatcher.put("LatLngBounds[contains]", pack -> pack.handle(CordovaUtils.keyValPair("contains", fromJSONObjectToLatLngBounds.map(pack.incomingObject).contains(fromJSONObjectToLatLng.map(pack.args)))));

        dispatcher.put("IndoorLevel[activate]", CordovaUtils.consumerWrapper(pack -> pack.handle(pack.obj(IndoorLevel.class)::activate)));

        staticFunctions.put("computeDistanceBetween", CordovaUtils.triConsumerWrapper((plugin, json, cb) -> cb.success(
                CordovaUtils.keyValPair("result", DistanceCalculator.computeDistanceBetween(
                        fromJSONObjectToLatLng.map(json.getJSONObject("from")),
                        fromJSONObjectToLatLng.map(json.getJSONObject("to")))))
        ));
        staticFunctions.put("hasLocationPermission", CordovaUtils.triConsumerWrapper((plugin, json, cb) -> cb.success(
            CordovaUtils.keyValPair("hasLocationPermission", PermissionUtils.hasLocationPermission(plugin))
        )));
        staticFunctions.put("requestLocationPermission", CordovaUtils.triConsumerWrapper((plugin, json, cb) -> {
            PermissionUtils.requestLocationPermission(plugin);
            cb.success();
        }));

        SETTERS = Collections.unmodifiableMap(setters);
        EVENTS = Collections.unmodifiableMap(events);
        ACTIONS = Collections.unmodifiableMap(actions);
        DISPATCHER = Collections.unmodifiableMap(dispatcher);
        STATIC_FUNCTIONS = Collections.unmodifiableMap(staticFunctions);
    }
}
