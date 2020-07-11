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

import android.annotation.TargetApi;
import android.os.Build;
import android.util.Log;

import com.huawei.hms.cordova.map.helpers.Consumer;
import com.huawei.hms.cordova.map.helpers.Mapper;
import com.huawei.hms.maps.HuaweiMap;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;


public class EventPack {
    public CordovaInterface cordovaInterface;
    public CordovaWebView cordovaWebView;
    public HuaweiMap huaweiMap;
    public String eventName;
    public String mapId;

    private static final String TAG = MapUtils.class.getSimpleName();

    public static EventPack create(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView, HuaweiMap huaweiMap, String eventName, String mapId) {
        EventPack eventPack = new EventPack();
        eventPack.cordovaInterface = cordovaInterface;
        eventPack.cordovaWebView = cordovaWebView;
        eventPack.huaweiMap = huaweiMap;
        // Events are sent with mapId appended at the end, so that receivers can subscribe to specific map's events:
        eventPack.eventName = eventName + "-" + mapId;
        eventPack.mapId = mapId;
        return eventPack;
    }

    public void sendEvent() {
        sendEvent(null, null, null);
    }

    public <T> void sendEvent(T obj, JSONObject json) {
        sendEvent(obj, json, null);
    }

    public <T> void sendEvent(T obj, JSONObject json, JSONObject extra) {
        Log.d(TAG, JavaUtils.format("sendEvent() :: obj=%s, json=%s, extra=%s", obj, json, extra));

        if (obj != null && json != null) {
            try {
                // FIXME: move createId to util?
                json.put("__objectId", ActionPack.createId(obj, mapId));
            } catch (JSONException | NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
                Log.d(TAG, "sendEvent() :: not an object with id, moving on...");
            }
        }

        JSONObject params = json == null ? new JSONObject() : json;
        if (extra != null) {
            params = CordovaUtils.extendJSONWith(json, extra);
        }

        // FIXME: Here the result is returned from JS but there is no way to wait this callback.
        // Because the callback also runs in the same thread, any method of waiting it
        // will cause a deadlock. Probably nothing we can do here. So we are simply returning true,
        // because in most cases this will be what the user wants.
        CordovaUtils.sendEvent(cordovaInterface, cordovaWebView, eventName, params /*, callback */);
    }
}
