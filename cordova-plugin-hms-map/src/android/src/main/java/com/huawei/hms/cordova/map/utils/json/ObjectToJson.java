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

package com.huawei.hms.cordova.map.utils.json;

import android.graphics.Point;
import android.location.Location;
import android.os.Build;

import com.huawei.hms.maps.UiSettings;
import com.huawei.hms.maps.model.ButtCap;
import com.huawei.hms.maps.model.CameraPosition;
import com.huawei.hms.maps.model.Cap;
import com.huawei.hms.maps.model.Circle;
import com.huawei.hms.maps.model.CustomCap;
import com.huawei.hms.maps.model.GroundOverlay;
import com.huawei.hms.maps.model.IndoorBuilding;
import com.huawei.hms.maps.model.IndoorLevel;
import com.huawei.hms.maps.model.LatLng;
import com.huawei.hms.maps.model.LatLngBounds;
import com.huawei.hms.maps.model.Marker;
import com.huawei.hms.maps.model.PatternItem;
import com.huawei.hms.maps.model.PointOfInterest;
import com.huawei.hms.maps.model.Polygon;
import com.huawei.hms.maps.model.Polyline;
import com.huawei.hms.maps.model.RoundCap;
import com.huawei.hms.maps.model.VisibleRegion;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public final class ObjectToJson {


    public static JSONObject constructJsonFromCameraPosition(CameraPosition cameraPosition) throws JSONException {
        return new JSONObject()
                .put("bearing", cameraPosition.bearing)
                .put("zoom", cameraPosition.zoom)
                .put("tilt", cameraPosition.tilt)
                .put("target", constructJsonFromLatLng(cameraPosition.target));
    }

    public static JSONObject constructJsonFromLatLng(LatLng latLng) {
        try {
            return new JSONObject().put("lat", latLng.latitude).put("lng", latLng.longitude);
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONObject constructJsonFromHuaweiMapUiSettings(UiSettings settings) throws JSONException {
        return new JSONObject()
                .put("compassEnabled", settings.isCompassEnabled())
                .put("indoorLevelPickerEnabled", settings.isIndoorLevelPickerEnabled())
                .put("mapToolbarEnabled", settings.isMapToolbarEnabled())
                .put("myLocationEnabled", settings.isMyLocationButtonEnabled())
                .put("rotateGesturesEnabled", settings.isRotateGesturesEnabled())
                .put("scrollGesturesEnabled", settings.isScrollGesturesEnabled())
                .put("tiltGesturesEnabled", settings.isTiltGesturesEnabled())
                .put("scrollGesturesEnabledDuringRotateOrZoom", settings.isScrollGesturesEnabledDuringRotateOrZoom())
                .put("zoomControlsEnabled", settings.isZoomControlsEnabled())
                .put("zoomGesturesEnabled", settings.isZoomGesturesEnabled());
    }

    public static JSONObject constructJsonFromCap(Cap cap) throws JSONException {
        int type = Cap.TYPE_SQUARE_CAP;
        if (cap instanceof CustomCap)
            return new JSONObject().put("refWidth", ((CustomCap) cap).refWidth).put("type", Cap.TYPE_CUSTOM_CAP);
        else if (cap instanceof ButtCap) type = Cap.TYPE_BUTT_CAP;
        else if (cap instanceof RoundCap) type = Cap.TYPE_ROUND_CAP;

        return new JSONObject().put("type", type);
    }

    public static JSONObject constructJsonFromMarker(Marker marker) {
        try {
            return new JSONObject()
                    .put("id", marker.getId())
                    .put("tag", marker.getTag())
                    .put("title", marker.getTitle())
                    .put("snippet", marker.getSnippet())
                    .put("rotation", marker.getRotation())
                    .put("flat", marker.isFlat())
                    .put("draggable", marker.isDraggable())
                    .put("zIndex", marker.getZIndex())
                    .put("visible", marker.isVisible())
                    .put("alpha", marker.getAlpha())
                    .put("position", constructJsonFromLatLng(marker.getPosition()))
                    .put("clusterable", marker.isClusterable())
                    .put("infoWindowShown", marker.isInfoWindowShown());
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONObject constructJsonFromCircle(Circle circle) {
        try {
            return new JSONObject()
                    .put("id", circle.getId())
                    .put("strokePattern", constructJsonFromStrokePattern(circle.getStrokePattern()))
                    .put("zIndex", circle.getZIndex())
                    .put("visible", circle.isVisible())
                    .put("tag", circle.getTag())
                    .put("strokeWidth", circle.getStrokeWidth())
                    .put("strokeColor", circle.getStrokeColor())
                    .put("radius", circle.getRadius())
                    .put("fillColor", circle.getFillColor())
                    .put("clickable", circle.isClickable())
                    .put("center", constructJsonFromLatLng(circle.getCenter()));
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONArray constructJsonFromStrokePattern(List<PatternItem> strokePattern) {
        JSONArray arr = new JSONArray();
        for (PatternItem item : strokePattern) {
            arr.put(constructJsonFromPatternItem(item));
        }
        return arr;
    }

    public static JSONObject constructJsonFromPatternItem(PatternItem item) {
        try {
            return new JSONObject()
                    .put("length", item.length)
                    .put("type", item.type);
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONObject constructJsonFromGroundOverlay(GroundOverlay groundOverlay) {
        try {
            return new JSONObject()
                    .put("id", groundOverlay.getId())
                    .put("height", groundOverlay.getHeight())
                    .put("width", groundOverlay.getWidth())
                    .put("bounds", constructJsonFromBounds(groundOverlay.getBounds()))
                    .put("position", constructJsonFromLatLng(groundOverlay.getPosition()))
                    .put("transparency", groundOverlay.getTransparency())
                    .put("tag", groundOverlay.getTag())
                    .put("bearing", groundOverlay.getBearing())
                    .put("visible", groundOverlay.isVisible())
                    .put("clickable", groundOverlay.isClickable())
                    .put("zIndex", groundOverlay.getZIndex());
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONObject constructJsonFromBounds(LatLngBounds bounds) throws JSONException {
        if (bounds == null) return null;
        return new JSONObject()
                .put("northeast", constructJsonFromLatLng(bounds.northeast))
                .put("southwest", constructJsonFromLatLng(bounds.southwest));
    }

    public static JSONObject constructJsonFromPolyline(Polyline polyline) {
        try {
            return new JSONObject()
                    .put("id", polyline.getId())
                    .put("width", polyline.getWidth())
                    .put("jointType", polyline.getJointType())
                    .put("points", constructJsonFromPoints(polyline.getPoints()))
                    .put("color", polyline.getColor())
                    .put("zIndex", polyline.getZIndex())
                    .put("strokePattern", constructJsonFromStrokePattern(polyline.getPattern()))
                    .put("tag", polyline.getTag())
                    .put("geodesic", polyline.isGeodesic())
                    .put("visible", polyline.isVisible())
                    .put("startCap", constructJsonFromCap(polyline.getStartCap()))
                    .put("endCap", constructJsonFromCap(polyline.getEndCap()))
                    .put("clickable", polyline.isClickable());
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONArray constructJsonFromPoints(List<LatLng> points) {
        JSONArray arr = new JSONArray();
        for (LatLng latLng : points) {
            arr.put(constructJsonFromLatLng(latLng));
        }
        return arr;
    }


    public static JSONObject constructJsonFromPolygon(Polygon polygon) {
        try {
            return new JSONObject()
                    .put("tag", polygon.getTag())
                    .put("zIndex", polygon.getZIndex())
                    .put("holes", constructJsonFromHoles(polygon.getHoles()))
                    .put("strokeWidth", polygon.getStrokeWidth())
                    .put("strokeJointType", polygon.getStrokeJointType())
                    .put("visible", polygon.isVisible())
                    .put("points", constructJsonFromPoints(polygon.getPoints()))
                    .put("strokePattern", constructJsonFromStrokePattern(polygon.getStrokePattern()))
                    .put("geodesic", polygon.isGeodesic())
                    .put("clickable", polygon.isClickable())
                    .put("strokeColor", polygon.getStrokeColor())
                    .put("fillColor", polygon.getFillColor())
                    .put("id", polygon.getId());
        } catch (JSONException e) {
            return null;
        }
    }

    private static JSONArray constructJsonFromHoles(List<List<LatLng>> holes) {
        JSONArray outerArray = new JSONArray();
        for (List<LatLng> list : holes) {
            JSONArray innerArray = new JSONArray();
            for (LatLng latLng : list) {
                innerArray.put(constructJsonFromLatLng(latLng));
            }
            outerArray.put(innerArray);
        }
        return outerArray;
    }

    public static JSONObject constructJsonFromPOI(PointOfInterest pointOfInterest) {
        try {
            return new JSONObject()
                    .put("latLng", pointOfInterest.latLng)
                    .put("name", pointOfInterest.name)
                    .put("placeId", pointOfInterest.placeId);
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONObject constructJsonFromIndoorBuilding(IndoorBuilding indoorBuilding) {
        try {
            return new JSONObject()
                    .put("activeLevelIndex", indoorBuilding.getActiveLevelIndex())
                    .put("defaultLevelIndex", indoorBuilding.getDefaultLevelIndex())
                    .put("levels", constructJsonFromLevels(indoorBuilding.getLevels()))
                    .put("underground", indoorBuilding.isUnderground());
        } catch (JSONException e) {
            return null;
        }
    }

    private static JSONArray constructJsonFromLevels(List<IndoorLevel> levels) throws JSONException {
        JSONArray arr = new JSONArray();
        for (IndoorLevel level : levels) {
            arr.put(constructJsonFromIndoorLevel(level));
        }
        return arr;
    }

    private static JSONObject constructJsonFromIndoorLevel(IndoorLevel level) throws JSONException {
        return new JSONObject()
                .put("name", level.getName())
                .put("shortName", level.getShortName());
    }

    public static JSONObject constructJsonFromLocation(Location location) {
        JSONObject json = new JSONObject();
        try {
            json.put("accuracy", location.getAccuracy())
                    .put("altitude", location.getAltitude())
                    .put("bearing", location.getBearing())
                    .put("elapsedRealtimeNanos", location.getElapsedRealtimeNanos())
                    .put("latitude", location.getLatitude())
                    .put("longitude", location.getLongitude())
                    .put("provider", location.getProvider())
                    .put("speed", location.getSpeed())
                    .put("time", location.getTime())
                    .put("fromMockProvider", location.isFromMockProvider())
                    .put("contents", location.describeContents());
            if (Build.VERSION.SDK_INT >= 26) {
                json.put("bearingAccuracyDegrees", location.getBearingAccuracyDegrees())
                        .put("speedAccuracyMetersPerSecond", location.getSpeedAccuracyMetersPerSecond())
                        .put("verticalAccuracyMeters", location.getVerticalAccuracyMeters());
            }
            return json;
        } catch (JSONException e) {
            return null;
        }
    }

    public static JSONObject constructJsonFromVisibleRegion(VisibleRegion visibleRegion) throws JSONException {
        return new JSONObject()
                .put("farLeft", constructJsonFromLatLng(visibleRegion.farLeft))
                .put("farRight", constructJsonFromLatLng(visibleRegion.farRight))
                .put("latLngBounds", constructJsonFromBounds(visibleRegion.latLngBounds))
                .put("nearLeft", constructJsonFromLatLng(visibleRegion.nearLeft))
                .put("nearRight", constructJsonFromLatLng(visibleRegion.nearRight));
    }

    public static JSONObject constructJsonFromPoint(Point point) throws JSONException {
        return new JSONObject().put("x", point.x).put("y", point.y);
    }
}
