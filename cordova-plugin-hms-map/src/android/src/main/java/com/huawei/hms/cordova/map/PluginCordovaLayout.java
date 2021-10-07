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

import android.content.Context;
import android.graphics.Rect;
import android.util.Log;
import android.view.MotionEvent;
import android.widget.FrameLayout;

import com.huawei.hms.cordova.map.maps.MapCapsule;
import com.huawei.hms.cordova.map.maps.MapCapsuleLayout;

import java.util.Collection;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

public class PluginCordovaLayout extends FrameLayout {
    private static String TAG = PluginCordovaLayout.class.getSimpleName();

    private Map<String, MapCapsule> capsuleMap = new ConcurrentHashMap<>();


    public PluginCordovaLayout(Context context) {
        super(context);
    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        /*
         * Not interested with this event because this event is related to mapView...
         **/
        float x = ev.getX();
        float y = ev.getY();
        for (MapCapsule mapCapsule : capsuleMap.values()) {
            if(!mapCapsule.isActive() || !mapCapsule.isClickable()) continue;
            MapCapsuleLayout layout = mapCapsule.getCapsuleLayout();
            float mapX = layout.getX();
            float mapY = layout.getY();
            int mapWidth = layout.getWidth();
            int mapHeight = layout.getHeight();
            boolean isMapClicked = isMapRectInClickedPoint(x, y, mapX, mapY, mapWidth, mapHeight)
                    && !isHTMLElementInterfering(mapCapsule.getHtmlElementOverlappingSet(), x, y);
            /*
             * if is map clicked then return false because webView shouldn't handle this click
             * this click should be handled by map view.
             **/
            if(isMapClicked) return false;
        }
        return super.dispatchTouchEvent(ev);
    }

    @Override
    public boolean onInterceptTouchEvent(MotionEvent ev) {
        return super.onInterceptTouchEvent(ev);
    }

    public void addCapsule(String divId, MapCapsule mapCapsule) {
        capsuleMap.put(divId, mapCapsule);
    }

    public void removeCapsule(String divId) {
        if(capsuleMap.containsKey(divId))
            capsuleMap.remove(divId);
    }

    private boolean isMapRectInClickedPoint(float x, float y, float mapX, float mapY, int mapWidth, int mapHeight) {
        return (x > mapX && x < mapWidth + mapX) && (mapY < y && y < mapHeight + mapY);
    }

    private boolean isHTMLElementInterfering(Set<Rect> htmlElements, float x, float y) {
        for (Iterator<Rect> it = htmlElements.iterator(); it.hasNext(); ) {
            Rect rect = it.next();

            if (rect.contains((int) x, (int) y)) {
                Log.d(TAG, "isHTMLElementInterfering: ---- Element interfered the touch action.");
                return true;
            }
        }
        return false;
    }
}
