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

import android.util.Log;

import com.huawei.hms.cordova.map.helpers.Consumer;
import com.huawei.hms.cordova.map.helpers.Mapper;
import com.huawei.hms.maps.HuaweiMap;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class ActionPack {
    public static final String TAG = ActionPack.class.getSimpleName();

    public String mapId;
    public HuaweiMap huaweiMap;
    public Map<String, Object> elementContainer;
    public JSONObject args;
    public CallbackContext callback;
    private static AtomicInteger objectId = new AtomicInteger(0);

    public static ActionPack create(String mapId, HuaweiMap huaweiMap, Map<String, Object> elementContainer, JSONObject args, CallbackContext callback) {
        ActionPack actionPack = new ActionPack();
        actionPack.huaweiMap = huaweiMap;
        actionPack.mapId = mapId;
        actionPack.elementContainer = elementContainer;
        actionPack.args = args;
        actionPack.callback = callback;
        return actionPack;
    }

    public static <T> String createId(T element, String mapId) throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        String id = JavaUtils.format("%s-%s-%s", mapId, element.getClass().getSimpleName(), element.getClass().getMethod("getId").invoke(element));
        Log.d(TAG, "Created an id: " + id);
        return id;
    }

    public <T, X> void handle(Mapper<X, T> action, Mapper<JSONObject, X> mapperFrom, Mapper<T, JSONObject> mapperTo) {
        T element = action.map(mapperFrom.map(args));
        String id;
        try {
            id = createId(element, mapId);
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            Log.w(TAG, "Can't create id, using default strategy.");
            id = String.valueOf(objectId.getAndIncrement());
        }
        elementContainer.put(id, element);
        try {
            callback.success(mapperTo.map(element).put("__objectId", id));
        } catch (JSONException ex) {
            callback.error(ErrorCodes.genericError(ex));
        }
    }

    public <X> void handle(Consumer<X> consumer, Mapper<JSONObject, X> mapperFrom) {
        consumer.run(mapperFrom.map(args));
        callback.success();
    }

    public void handle(Runnable runnable) {
        runnable.run();
        callback.success();
    }
}
