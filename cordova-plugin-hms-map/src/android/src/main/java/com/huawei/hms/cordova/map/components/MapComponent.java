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
import android.util.Log;

import com.huawei.hms.cordova.map.listeners.ComponentListener;
import com.huawei.hms.cordova.map.maps.MapCapsule;

import org.json.JSONObject;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Locale;

public abstract class MapComponent<T> {

    private static final String TAG = MapComponent.class.getSimpleName();
    protected T component;
    protected int capsuleId;
    protected ComponentListener listener;

    public MapComponent(MapCapsule mapCapsule, ComponentListener listener) {
        this.capsuleId = mapCapsule.getCapsuleId();
        this.listener = listener;
    }

    /**
     * Removes this component from map.
     */
    public abstract void remove();

    public void setProperty(String methodName, JSONObject json) {
        try {
            Method method = this.getClass().getDeclaredMethod(methodName, JSONObject.class);
            method.invoke(this, json);
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            Log.e(TAG, String.format(Locale.ENGLISH, "Error at %s, cause: %s", methodName, e));
        }
    }

    public JSONObject getProperty(String methodName) {
        try {
            Method method = this.getClass().getDeclaredMethod(methodName);
            return (JSONObject) method.invoke(this);
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            return null;
        }
    }

    /**
     * Returns string id of this component.
     * @return id of component
     */
    public abstract String getId();

    /**
     * Returns string id of mapCapsule that has this component.
     * @return id of mapCapsule
     */
    public int getCapsuleId() {
        return capsuleId;
    }
}
