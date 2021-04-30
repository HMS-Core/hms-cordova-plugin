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

import android.content.Context;
import android.os.Build;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.AnticipateInterpolator;
import android.view.animation.AnticipateOvershootInterpolator;
import android.view.animation.BounceInterpolator;
import android.view.animation.CycleInterpolator;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.Interpolator;
import android.view.animation.LinearInterpolator;
import android.view.animation.OvershootInterpolator;
import android.view.animation.PathInterpolator;

import com.huawei.hms.cordova.map.listeners.ComponentListener;
import com.huawei.hms.cordova.map.listeners.MarkerListener;
import com.huawei.hms.cordova.map.maps.MapCapsule;
import com.huawei.hms.cordova.map.utils.json.JsonToObject;
import com.huawei.hms.maps.model.LatLng;
import com.huawei.hms.maps.model.Marker;
import com.huawei.hms.maps.model.MarkerOptions;
import com.huawei.hms.maps.model.animation.AlphaAnimation;
import com.huawei.hms.maps.model.animation.Animation;
import com.huawei.hms.maps.model.animation.AnimationSet;
import com.huawei.hms.maps.model.animation.RotateAnimation;
import com.huawei.hms.maps.model.animation.ScaleAnimation;
import com.huawei.hms.maps.model.animation.TranslateAnimation;

import org.json.JSONException;
import org.json.JSONObject;

public final class MarkerCapsule extends MapComponent<Marker> {
    private Context context;

    public MarkerCapsule(MapCapsule mapCapsule, MarkerOptions options, ComponentListener listener) {
        super(mapCapsule, listener);
        component = mapCapsule.getHuaweiMap().addMarker(options);
        this.context = mapCapsule.getContext();
    }

    private void setCommonAnimationPropertiesFromJson(AnimationSet animationSet, Animation animation, String type, JSONObject json) {
        animation.setDuration(json.optLong("duration", 250));
        animation.setRepeatCount(json.optInt("repeatCount", 0));
        animation.setFillMode(json.optInt("fillMode", Animation.FILL_MODE_FORWARDS));
        animation.setRepeatMode(json.optInt("repeatMode", Animation.RESTART));
        if (json.has("interpolator")){
            Interpolator interpolator = getInterpolator(json.optJSONObject("interpolator"));
            animation.setInterpolator(interpolator);
            animationSet.setInterpolator(interpolator);
        }
        Animation.AnimationListener animationListener =
                ((MarkerListener) listener).buildAnimationListener(type, getCapsuleId(), getId(), json);
        animation.setAnimationListener(animationListener);
    }

    private AnimationSet createAnimationSetFromJsonObject(JSONObject json) {
        AnimationSet animationSet = new AnimationSet(true);
        Interpolator interpolator = null;
        if (json.has("rotateAnimation")) {
            JSONObject rotateAnimationJSONObject = json.optJSONObject("rotateAnimation");
            float fromDegree = (float) rotateAnimationJSONObject.optDouble("fromDegree");
            float toDegree = (float) rotateAnimationJSONObject.optDouble("toDegree");
            RotateAnimation rotateAnimation = new RotateAnimation(fromDegree, toDegree);
            setCommonAnimationPropertiesFromJson(animationSet, rotateAnimation, "Rotate", rotateAnimationJSONObject);
            animationSet.addAnimation(rotateAnimation);
        }
        if (json.has("alphaAnimation")) {
            JSONObject alphaAnimationJSONObject = json.optJSONObject("alphaAnimation");
            float fromAlpha = (float) alphaAnimationJSONObject.optDouble("fromAlpha");
            float toAlpha = (float) alphaAnimationJSONObject.optDouble("toAlpha");
            AlphaAnimation alphaAnimation = new AlphaAnimation(fromAlpha, toAlpha);
            setCommonAnimationPropertiesFromJson(animationSet, alphaAnimation, "Alpha", alphaAnimationJSONObject);
            animationSet.addAnimation(alphaAnimation);
        }
        if (json.has("translateAnimation")) {
            JSONObject translateAnimationJSONObject = json.optJSONObject("translateAnimation");
            LatLng target = JsonToObject.constructLatLng(translateAnimationJSONObject.optJSONObject("target"));
            TranslateAnimation translateAnimation = new TranslateAnimation(target);
            setCommonAnimationPropertiesFromJson(animationSet, translateAnimation, "Translate", translateAnimationJSONObject);
            animationSet.addAnimation(translateAnimation);
        }
        if (json.has("scaleAnimation")) {
            JSONObject scaleAnimationJSONObject = json.optJSONObject("scaleAnimation");
            float fromX = (float) scaleAnimationJSONObject.optDouble("fromX");
            float toX = (float) scaleAnimationJSONObject.optDouble("toX");
            float fromY = (float) scaleAnimationJSONObject.optDouble("fromY");
            float toY = (float) scaleAnimationJSONObject.optDouble("toY");
            ScaleAnimation scaleAnimation = new ScaleAnimation(fromX, toX, fromY, toY);
            setCommonAnimationPropertiesFromJson(animationSet, scaleAnimation, "Scale", scaleAnimationJSONObject);
            animationSet.addAnimation(scaleAnimation);
        }
        return animationSet;
    }

    JSONObject startAnimation() {
        component.startAnimation();
        return null;
    }

    JSONObject hideInfoWindow() {
        component.hideInfoWindow();
        return null;
    }

    JSONObject showInfoWindow() {
        component.showInfoWindow();
        return null;
    }

    JSONObject getAlpha() throws JSONException {
        return new JSONObject().put("value", component.getAlpha());
    }

    JSONObject getRotation() throws JSONException {
        return new JSONObject().put("value", component.getRotation());
    }

    JSONObject getSnippet() throws JSONException {
        return new JSONObject().put("value", component.getSnippet());
    }

    JSONObject getTitle() throws JSONException {
        return new JSONObject().put("value", component.getTitle());
    }

    JSONObject isVisible() throws JSONException {
        return new JSONObject().put("value", component.isVisible());
    }

    JSONObject getZIndex() throws JSONException {
        return new JSONObject().put("value", component.getZIndex());
    }

    JSONObject getTag() throws JSONException {
        return new JSONObject().put("value", component.getTag());
    }

    JSONObject getPosition() throws JSONException {
        return new JSONObject().put("value", new JSONObject().put("lat", component.getPosition().latitude).put("lng", component.getPosition().longitude));
    }

    JSONObject isClusterable() throws JSONException {
        return new JSONObject().put("value", component.isClusterable());
    }

    JSONObject isDraggable() throws JSONException {
        return new JSONObject().put("value", component.isDraggable());
    }

    JSONObject isFlat() throws JSONException {
        return new JSONObject().put("value", component.isFlat());
    }

    JSONObject isInfoWindowShown() throws JSONException {
        return new JSONObject().put("value", component.isInfoWindowShown());
    }

    void setAnimation(JSONObject json) {
        AnimationSet animationSet = createAnimationSetFromJsonObject(json.optJSONObject("animation"));
        component.setAnimation(animationSet);
    }

    void setDraggable(JSONObject json) {
        component.setDraggable(json.optBoolean("draggable"));
    }

    void setFlat(JSONObject json) {
        component.setFlat(json.optBoolean("flat"));
    }

    void setIcon(JSONObject json) {
        component.setIcon(JsonToObject.constructBitmapDescriptor(context, json.optJSONObject("icon")));
    }

    @Override
    public String getId() {
        return component.getId();
    }

    void setInfoWindowAnchor(JSONObject json) {
        component.setInfoWindowAnchor((float) json.optDouble("u"), (float) json.optDouble("v"));
    }

    void setPosition(JSONObject json) throws JSONException {
        component.setPosition(JsonToObject.constructLatLng(json.getJSONObject("position")));
    }

    void setTag(JSONObject json) {
        component.setTag(json.optString("tag"));
    }

    void setAlpha(JSONObject json) {
        component.setAlpha((float) json.optDouble("alpha"));
    }

    void setSnippet(JSONObject json) {
        component.setSnippet(json.optString("snippet"));
    }

    void setZIndex(JSONObject json) {
        component.setZIndex((float) json.optDouble("zIndex"));
    }

    @Override
    public void remove() {
        this.component.remove();
    }

    void setTitle(JSONObject json) {
        component.setTitle(json.optString("title"));
    }

    void setVisible(JSONObject json) {
        component.setVisible(json.optBoolean("visible"));
    }

    void setRotation(JSONObject json) {
        component.setRotation((float) json.optDouble("rotation"));
    }

    void setMarkerAnchor(JSONObject json) {
        component.setMarkerAnchor((float) json.optDouble("u"), (float) json.optDouble("v"));
    }

    private static Interpolator getInterpolator(JSONObject interpolator) {
        int type = interpolator.optInt("type", 0);
        switch (type) {
            case 1:
                return new AccelerateDecelerateInterpolator();
            case 2:
                return new AccelerateInterpolator();
            case 3:
                return new AnticipateInterpolator();
            case 4:
                return new AnticipateOvershootInterpolator();
            case 5:
                return new BounceInterpolator();
            case 6:
                if (interpolator.has("args") && interpolator.optJSONObject("args").has("cycles")) {
                    int cycles = interpolator.optJSONObject("args").optInt("cycles");
                    return new CycleInterpolator(cycles);
                }
                return null;
            case 7:
                return new DecelerateInterpolator();
            case 8:
                return new OvershootInterpolator();
            case 9:
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    if (interpolator.has("args")) {
                        JSONObject args = interpolator.optJSONObject("args");
                        if (args.has("controlX2") && args.has("controlY2")) {
                            float controlX1 = (float) args.optDouble("controlX1");
                            float controlY1 = (float) args.optDouble("controlY1");
                            float controlX2 = (float) args.optDouble("controlX2");
                            float controlY2 = (float) args.optDouble("controlY2");
                            return new PathInterpolator(controlX1, controlY1, controlX2, controlY2);
                        } else if (interpolator.has("controlX") && interpolator.has("controlY")) {
                            return new PathInterpolator((float) interpolator.optDouble("controlX"), (float) interpolator.optDouble("controlY"));
                        }
                    }
                }
                return null;
            case 0:
            default:
                return new LinearInterpolator();
        }
    }
}
