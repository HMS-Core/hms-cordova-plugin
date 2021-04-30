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

import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Point;
import android.graphics.Rect;
import android.graphics.drawable.BitmapDrawable;
import android.util.Log;

import com.huawei.hms.cordova.map.utils.PxToPixelConverter;
import com.huawei.hms.maps.CameraUpdate;
import com.huawei.hms.maps.CameraUpdateFactory;
import com.huawei.hms.maps.HuaweiMap;
import com.huawei.hms.maps.HuaweiMapOptions;
import com.huawei.hms.maps.model.BitmapDescriptor;
import com.huawei.hms.maps.model.BitmapDescriptorFactory;
import com.huawei.hms.maps.model.ButtCap;
import com.huawei.hms.maps.model.CameraPosition;
import com.huawei.hms.maps.model.Cap;
import com.huawei.hms.maps.model.CircleOptions;
import com.huawei.hms.maps.model.CustomCap;
import com.huawei.hms.maps.model.GroundOverlayOptions;
import com.huawei.hms.maps.model.LatLng;
import com.huawei.hms.maps.model.LatLngBounds;
import com.huawei.hms.maps.model.MarkerOptions;
import com.huawei.hms.maps.model.PatternItem;
import com.huawei.hms.maps.model.PointOfInterest;
import com.huawei.hms.maps.model.PolygonOptions;
import com.huawei.hms.maps.model.PolylineOptions;
import com.huawei.hms.maps.model.RoundCap;
import com.huawei.hms.maps.model.SquareCap;
import com.huawei.hms.maps.model.Tile;
import com.huawei.hms.maps.model.TileOverlayOptions;
import com.huawei.hms.maps.model.TileProvider;
import com.huawei.hms.maps.model.UrlTileProvider;
import com.huawei.hms.maps.model.animation.AlphaAnimation;
import com.huawei.hms.maps.model.animation.AnimationSet;
import com.huawei.hms.maps.model.animation.RotateAnimation;
import com.huawei.hms.maps.model.animation.ScaleAnimation;
import com.huawei.hms.maps.model.animation.TranslateAnimation;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class JsonToObject {
    private static final String TAG = JsonToObject.class.getSimpleName();

    public static JSONObject optJSONObject(JSONObject json, String key, JSONObject fallback) {
        JSONObject result = json.optJSONObject(key);
        if (result == null) {
            return fallback;
        }
        return result;
    }

    public static HuaweiMapOptions constructMapOptions(JSONObject json) {
        if (json == null) return new HuaweiMapOptions();
        return new HuaweiMapOptions()
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
                .camera(constructCameraPosition(json.optJSONObject("cameraPosition")))
                .latLngBoundsForCameraTarget(constructLatLngBounds(json.optJSONObject("latLngBounds")));
    }

    public static CameraPosition constructCameraPosition(JSONObject json) {
        if (json == null) return null;
        LatLng target = constructLatLng(json.optJSONObject("target"));
        if (target == null) return null;
        return CameraPosition.builder()
                .target(target)
                .zoom((float) json.optDouble("zoom", 0.0))
                .bearing((float) json.optDouble("bearing", 0.0))
                .tilt((float) json.optDouble("tilt", 0.0))
                .build();
    }

    public static LatLng constructLatLng(JSONObject json) {
        if (json != null && json.has("lat") && json.has("lng")) {
            return new LatLng((float) json.optDouble("lat"), (float) json.optDouble("lng"));
        }
        return null;
    }

    public static LatLngBounds constructLatLngBounds(JSONObject json) {
        if (json == null) return null;
        LatLng southwest = constructLatLng(json.optJSONObject("southwest"));
        LatLng northeast = constructLatLng(json.optJSONObject("northeast"));

        if (southwest == null || northeast == null) return null;
        return new LatLngBounds(southwest, northeast);
    }

    public static CircleOptions constructCircleOptions(JSONObject json) {
        return new CircleOptions()
                .center(constructLatLng(json.optJSONObject("center")))
                .clickable(json.optBoolean("clickable", false))
                .fillColor(json.optInt("fillColor", 0))
                .radius(json.optDouble("radius", 0.0D))
                .strokeColor(json.optInt("strokeColor", -16777216))
                .strokeWidth((float) json.optDouble("strokeWidth", 10.0F))
                .strokePattern(constructPatternItemList(json.optJSONArray("strokePattern")))
                .visible(json.optBoolean("visible", true))
                .zIndex((float) json.optDouble("zIndex", 0.0F));
    }

    public static List<PatternItem> constructPatternItemList(JSONArray json) {
        List<PatternItem> list = new ArrayList<>();
        if (json != null) {
            for (int i = 0; i < json.length(); i++) {
                PatternItem item = constructPatternItem(json.optJSONObject(i));
                if (item != null) list.add(item);
            }
        }
        return list;
    }

    public static MarkerOptions constructMarkerOptions(Context context, JSONObject json) {
        JSONObject anchor = optJSONObject(json, "anchorMarker", new JSONObject());
        JSONObject infoWindowAnchor = optJSONObject(json, "infoWindowAnchor", new JSONObject());
        return new MarkerOptions()
                .anchorMarker((float) anchor.optDouble("u", 0.5F), (float) anchor.optDouble("v", 1.0F))
                .infoWindowAnchor((float) infoWindowAnchor.optDouble("u", 0.5F), (float) infoWindowAnchor.optDouble("v", 0.0F))
                .alpha((float) json.optDouble("alpha", 1))
                .clusterable(json.optBoolean("clusterable", false))
                .draggable(json.optBoolean("draggable", false))
                .icon(constructBitmapDescriptor(context, json.optJSONObject("icon")))
                .flat(json.optBoolean("flat", false))
                .position(constructLatLng(json.optJSONObject("position")))
                .rotation((float) json.optDouble("rotation", 0.0F))
                .snippet(json.optString("snippet"))
                .title(json.optString("title"))
                .visible(json.optBoolean("visible", true))
                .zIndex((float) json.optDouble("zIndex", 0.0F));
    }

    public static BitmapDescriptor constructBitmapDescriptor(Context context, JSONObject json) throws OutOfMemoryError {
        if (json != null) {
            if (json.has("hue")) {
                return BitmapDescriptorFactory.defaultMarker((float) json.optDouble("hue"));
            } else if (json.has("asset") || json.has("resource")) {
                try {
                    Bitmap bitmap = null;
                    if (json.has("asset")) {
                        JSONObject asset = json.optJSONObject("asset");
                        AssetManager manager = context.getAssets();
                        try (InputStream inputStream = manager.open(asset.optString("fileName"));
                        ) {
                            bitmap = BitmapFactory.decodeStream(inputStream);
                        } catch (final OutOfMemoryError e) {
                            Log.d(TAG, e.getLocalizedMessage());
                        }
                    } else {
                        JSONObject resource = json.optJSONObject("resource");
                        String fileName = resource.optString("fileName");
                        String resourceType = resource.optString("resourceType");
                        String packageName = context.getPackageName();
                        int resID = context.getResources().getIdentifier(fileName, resourceType, packageName);
                        BitmapDrawable bitmapDrawable = (BitmapDrawable) context.getResources().getDrawable(resID);
                        bitmap = bitmapDrawable.getBitmap();
                    }
                    JSONObject scaledSize = null;
                    if (json.has("asset") && json.optJSONObject("asset").has("scaledSize"))
                        scaledSize = json.optJSONObject("asset").optJSONObject("scaledSize");
                    if (json.has("resource") && json.optJSONObject("resource").has("scaledSize"))
                        scaledSize = json.optJSONObject("resource").optJSONObject("scaledSize");
                    if (scaledSize != null) {
                        bitmap = Bitmap.createScaledBitmap(bitmap,
                                scaledSize.optInt("width"),
                                scaledSize.optInt("height"),
                                false);
                    }
                    return BitmapDescriptorFactory.fromBitmap(bitmap);
                } catch (Resources.NotFoundException | IOException e) {
                    Log.e(TAG, "Resource is not found." + e.getLocalizedMessage());
                }
            }
        }
        return BitmapDescriptorFactory.defaultMarker();
    }

    public static PatternItem constructPatternItem(JSONObject json) {
        if (json != null && json.has("type") && json.has("length")) {
            return new PatternItem(json.optInt("type"), (float) json.optDouble("length"));
        }
        return null;
    }

    public static PointOfInterest constructPOI(JSONObject json) throws JSONException {
        return new PointOfInterest(constructLatLng(json.getJSONObject("latLng")), json.getString("name"), json.getString("placeId"));
    }

    public static List<LatLng> constructPoints(JSONArray arr) {
        List<LatLng> points = new ArrayList<>();
        if (arr != null) {
            for (int i = 0; i < arr.length(); i++) {
                LatLng latLng = constructLatLng(arr.optJSONObject(i));
                if (latLng != null) points.add(latLng);
            }
        }
        return points;
    }

    public static PolygonOptions constructPolygonOptions(JSONObject json) throws JSONException {
        PolygonOptions polygonOptions = new PolygonOptions()
                .addAll(constructPoints(json.getJSONArray("points")))
                .clickable(json.optBoolean("clickable", false))
                .geodesic(json.optBoolean("geodesic", false))
                .fillColor(json.optInt("fillColor", 0))
                .strokeColor(json.optInt("strokeColor", -16777216))
                .strokeJointType(json.optInt("strokeJointType", 0))
                .strokePattern(constructPatternItemList(json.optJSONArray("strokePattern")))
                .strokeWidth((float) json.optDouble("strokeWidth", 10.0F))
                .visible(json.optBoolean("visible", true))
                .zIndex((float) json.optDouble("zIndex", 0.0F));
        List<List<LatLng>> holes = constructHoles(json.optJSONArray("holes"));
        for (int i = 0; i < holes.size(); i++) {
            polygonOptions.addHole(holes.get(i));
        }
        return polygonOptions;
    }

    public static List<List<LatLng>> constructHoles(JSONArray arr) {
        List<List<LatLng>> holes = new ArrayList<>();
        if (arr != null) {
            for (int i = 0; i < arr.length(); i++) {
                List<LatLng> list = constructPoints(arr.optJSONArray(i));
                holes.add(list);
            }
        }
        return holes;
    }

    public static Cap constructCap(Context context, JSONObject json) {
        if (json != null) {
            int type = json.optInt("type");
            switch (type) {
                case Cap.TYPE_BUTT_CAP:
                    return new ButtCap();
                case Cap.TYPE_SQUARE_CAP:
                    return new SquareCap();
                case Cap.TYPE_ROUND_CAP:
                    return new RoundCap();
                case Cap.TYPE_CUSTOM_CAP:
                    if (json.has("refWidth")) {
                        return new CustomCap(constructBitmapDescriptor(context, json.optJSONObject("bitmapDescriptor")), (float) json.optDouble("refWidth"));
                    } else {
                        return new CustomCap(constructBitmapDescriptor(context, json.optJSONObject("bitmapDescriptor")));
                    }
            }
        }
        return null;
    }

    public static PolylineOptions constructPolylineOptions(Context context, JSONObject json) {
        return new PolylineOptions()
                .addAll(constructPoints(json.optJSONArray("points")))
                .clickable(json.optBoolean("clickable", false))
                .color(json.optInt("color", -16777216))
                .endCap(constructCap(context, json.optJSONObject("endCap")))
                .startCap(constructCap(context, json.optJSONObject("startCap")))
                .geodesic(json.optBoolean("geodesic", false))
                .jointType(json.optInt("jointType", 0))
                .visible(json.optBoolean("visible", true))
                .width((float) json.optDouble("width", 10.0F))
                .zIndex((float) json.optDouble("zIndex", 0.0F));
    }

    public static GroundOverlayOptions constructGroundOverlayOptions(Context context, JSONObject json) throws JSONException {
        JSONObject anchor = optJSONObject(json, "anchor", new JSONObject());
        GroundOverlayOptions groundOverlayOptions = new GroundOverlayOptions()
                .anchor((float) anchor.optDouble("u", 0.5F), (float) anchor.optDouble("v", 0.5F))
                .bearing((float) json.optDouble("bearing", 0.0F))
                .clickable(json.optBoolean("clickable", false))
                .image(constructBitmapDescriptor(context, json.optJSONObject("image")))
                .visible(json.optBoolean("visible", true))
                .transparency((float) json.optDouble("transparency", 0.0F))
                .zIndex((float) json.optDouble("zIndex", 0.0F));
        if (json.has("position")) {
            JSONObject positionJSON = json.getJSONObject("position");
            if (positionJSON.has("width") && positionJSON.has("height")) {
                groundOverlayOptions.position(constructLatLng(positionJSON.getJSONObject("latLng")),
                        (float) positionJSON.getDouble("width"),
                        (float) positionJSON.getDouble("height"));
            } else if (positionJSON.has("width")) {
                groundOverlayOptions.position(constructLatLng(positionJSON.getJSONObject("latLng")),
                        (float) positionJSON.getDouble("width"));
            }
        } 
        if (json.has("bounds")) {
            groundOverlayOptions.positionFromBounds(constructLatLngBounds(json.getJSONObject("bounds")));
        }
        return groundOverlayOptions;
    }

    private static TileProvider constructTileProvider(JSONObject json, Context context) throws JSONException {
        if (json.getInt("type") == 0) {
            return getURLTileProvider(json.getJSONObject("data"));
        } else if (json.getInt("type") == 1) {
            return getRepetitiveTileProvider(context, json.getJSONObject("data"));
        } else if (json.getInt("type") == 2) {
            return getTileProvider(context, json.getJSONArray("data"));
        }
        return null;
    }

    private static TileProvider getTileProvider(Context context, JSONArray tiles) throws JSONException {
        HashMap<List<Integer>, List<Object>> map = new HashMap<>();
        for (int i = 0; i < tiles.length(); i++) {
            JSONObject tile = tiles.getJSONObject(i);
            List<Integer> set = Arrays.asList(tile.optInt("x"), tile.optInt("y"), tile.optInt("zoom"));
            map.put(set, Arrays.asList(tile.optString("path"), tile.optInt("width"), tile.optInt("height")));
        }
        return (x, y, zoom) -> {
            List<Integer> list = Arrays.asList(x, y, zoom);
            if (map.containsKey(list)) {
                String path = (String) map.get(list).get(0);
                int width = (int) map.get(list).get(1);
                int height = (int) map.get(list).get(2);
                Bitmap bitmap = null;
                try {
                    bitmap = BitmapFactory.decodeStream(context.getAssets().open(path));
                } catch (IOException | OutOfMemoryError e) {
                    Log.d(TAG, e.getLocalizedMessage());
                }
                byte[] image = convertBitmapToByteArray(bitmap);
                return new Tile(width, height, image);
            }
            return null;
        };
    }

    private static TileProvider getURLTileProvider(JSONObject data) throws JSONException {
        String path = data.getString("URL");
        return new UrlTileProvider(256, 256) {
            @Override
            public URL getTileUrl(int x, int y, int zoom) {
                try {
                    return new URL(path
                            .replace("${z}", zoom + "")
                            .replace("${x}", x + "")
                            .replace("${y}", y + ""));
                } catch (MalformedURLException | OutOfMemoryError e) {
                    Log.d(TAG, e.getMessage());
                }
                return null;
            }
        };
    }

    private static TileProvider getRepetitiveTileProvider(Context context, JSONObject data) throws JSONException {
        String path = data.getString("path");
        JSONArray zoomLevels = data.getJSONArray("zoom");
        Map<Integer, Boolean> zoomMap = new HashMap<>();
        for (int i = 0; i < zoomLevels.length(); i++) {
            zoomMap.put(zoomLevels.getInt(i), true);
        }
        int width = data.getInt("width");
        int height = data.getInt("height");
        return (x, y, zoom) -> {
            if (zoomMap.containsKey(zoom) || zoomLevels.length() == 0) {
                Bitmap bitmap = null;
                try {
                    bitmap = BitmapFactory.decodeStream(context.getAssets().open(path));
                } catch (IOException | OutOfMemoryError e) {
                    Log.d(TAG, e.getLocalizedMessage());
                }
                byte[] image = convertBitmapToByteArray(bitmap);
                return new Tile(width, height, image);
            } else {
                return null;
            }
        };
    }

    private static byte[] convertBitmapToByteArray(Bitmap bitmap) {
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream);
        return stream.toByteArray();
    }

    public static AnimationSet constructAnimationSet(JSONObject json) {
        AnimationSet animationSet = new AnimationSet(true);
        if (json.has("rotateAnimation")) {
            JSONObject rotateAnimation = json.optJSONObject("rotateAnimation");
            animationSet.addAnimation(
                    new RotateAnimation(
                            (float) rotateAnimation.optDouble("fromDegree"),
                            (float) rotateAnimation.optDouble("toDegree")));
        }
        if (json.has("scaleAnimation")) {
            JSONObject scaleAnimation = json.optJSONObject("scaleAnimation");
            animationSet.addAnimation(
                    new ScaleAnimation(
                            (float) scaleAnimation.optDouble("fromX"),
                            (float) scaleAnimation.optDouble("toX"),
                            (float) scaleAnimation.optDouble("fromY"),
                            (float) scaleAnimation.optDouble("toY")));
        }
        if (json.has("alphaAnimation")) {
            JSONObject alphaAnimation = json.optJSONObject("alphaAnimation");
            animationSet.addAnimation(
                    new AlphaAnimation(
                            (float) alphaAnimation.optDouble("fromAlpha"),
                            (float) alphaAnimation.optDouble("toAlpha")));
        }
        if (json.has("translateAnimation")) {
            JSONObject translateAnimation = json.optJSONObject("translateAnimation");
            animationSet.addAnimation(
                    new TranslateAnimation(constructLatLng(translateAnimation.optJSONObject("target"))));
        }
        return animationSet;
    }

    public static TileOverlayOptions constructTileOverlayOptions(JSONObject json, Context context) throws JSONException {
        return new TileOverlayOptions()
                .tileProvider(constructTileProvider(json.getJSONObject("tileProvider"), context))
                .fadeIn(json.optBoolean("fadeIn", false))
                .transparency((float) json.optDouble("transparency", 0))
                .visible(json.optBoolean("visible", true))
                .zIndex((float) json.optDouble("zIndex", 0));
    }

    public static CameraUpdate constructCameraUpdate(String eventName, JSONObject json) throws JSONException {
        if (eventName.equals("newCameraPosition")) {
            return CameraUpdateFactory.newCameraPosition(constructCameraPosition(json.getJSONObject("cameraPosition")));
        } else if (eventName.equals("newLatLng")) {
            return CameraUpdateFactory.newLatLng(constructLatLng(json.getJSONObject("latLng")));
        } else if (eventName.equals("newLatLngBounds")) {
            if (!json.has("width") && !json.has("width"))
                return CameraUpdateFactory.newLatLngBounds(constructLatLngBounds(json.getJSONObject("bounds")), json.getInt("padding"));
            return CameraUpdateFactory.newLatLngBounds(constructLatLngBounds(json.getJSONObject("bounds")), json.getInt("width"), json.getInt("height"), json.getInt("padding"));
        } else if (eventName.equals("newLatLngZoom")) {
            return CameraUpdateFactory.newLatLngZoom(constructLatLng(json.getJSONObject("latLng")), (float) json.getDouble("zoom"));
        } else if (eventName.equals("zoomBy")) {
            if (json.has("focus"))
                return CameraUpdateFactory.zoomBy((float) json.getDouble("amount"), constructPoint(json.getJSONObject("focus")));
            return CameraUpdateFactory.zoomBy((float) json.getDouble("amount"));
        } else if (eventName.equals("zoomIn")) {
            return CameraUpdateFactory.zoomIn();
        } else if (eventName.equals("zoomOut")) {
            return CameraUpdateFactory.zoomOut();
        } else if (eventName.equals("zoomTo")) {
            return CameraUpdateFactory.zoomTo((float) json.getDouble("zoom"));
        } else if (eventName.equals("scrollBy")) {
            return CameraUpdateFactory.scrollBy((float) json.getDouble("xPixel"), (float) json.getDouble("yPixel"));
        }
        return null;
    }

    public static Point constructPoint(JSONObject json) throws JSONException {
        return new Point(json.getInt("x"), json.getInt("y"));
    }

    public static Rect json2Rect(JSONObject json) {
        Rect r = new Rect();
        if (json == null) return r;

        r.left = PxToPixelConverter.pxToPixel(json.optInt("left"));
        r.top = PxToPixelConverter.pxToPixel(json.optInt("top"));
        r.right = PxToPixelConverter.pxToPixel(json.optInt("right"));
        r.bottom = PxToPixelConverter.pxToPixel(json.optInt("bottom"));
        return r;
    }

    public static List<Rect> jsonArray2RectArray(JSONArray jsonArr) {
        List<Rect> rects = new ArrayList<>();
        if (jsonArr == null) return rects;

        for (int i = 0; i < jsonArr.length(); i++) {
            rects.add(json2Rect(jsonArr.optJSONObject(i)));
        }
        return rects;
    }
}
