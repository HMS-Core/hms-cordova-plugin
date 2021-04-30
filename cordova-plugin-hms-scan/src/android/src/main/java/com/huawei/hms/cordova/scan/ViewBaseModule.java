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

package com.huawei.hms.cordova.scan;

import android.Manifest;
import android.util.Log;

import com.huawei.hms.cordova.scan.backend.layout.OnViewLayoutScroll;
import com.huawei.hms.cordova.scan.backend.helpers.OnViewLifecycle;
import com.huawei.hms.cordova.scan.backend.layout.PluginLayout;
import com.huawei.hms.cordova.scan.backend.utils.CordovaUtils;
import com.huawei.hms.cordova.scan.basef.CordovaBaseModule;
import com.huawei.hms.cordova.scan.basef.CordovaMethod;
import com.huawei.hms.cordova.scan.basef.HMSLog;
import com.huawei.hms.cordova.scan.basef.handler.CorPack;
import com.huawei.hms.cordova.scan.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;

public class ViewBaseModule extends CordovaBaseModule implements OnViewLayoutScroll, OnViewLifecycle {
    private Map<Integer, Object> managerMap = new HashMap<>();
    private static final String TAG = ViewBaseModule.class.getName();
    private PluginLayout pluginLayout;
    private int moduleId = 0;
    private CustomViewModule customViewModule;
    private MultiProcessorModule multiProcessorModule;

    public ViewBaseModule(PluginLayout pluginLayout, HMSScan hmsScan) {
        this.pluginLayout = pluginLayout;
        hmsScan.setLayoutScroll(this);
        hmsScan.setOnViewLifecycle(this);
    }

    @CordovaMethod
    @HMSLog
    public void customViewMode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final boolean permissions = CordovaUtils.permissionCheck(corPack, promise, Manifest.permission.CAMERA);
        if (!permissions) {
            return;
        }
        if (customViewModule == null) {
            customViewModule = new CustomViewModule(corPack.getCordova(), pluginLayout, promise);
            customViewModule.customViewMode(corPack, args, promise);
            managerMap.put(moduleId++, customViewModule);
        }
    }

    @CordovaMethod
    @HMSLog
    public void pauseContinuouslyScan(final CorPack corPack, final JSONArray args, final Promise promise) {
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("pauseContinuouslyScan").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "pauseContinuouslyScan: error -> " + e.toString());
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void resumeContinuouslyScan(final CorPack corPack, final JSONArray args, final Promise promise) {
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("resumeContinuouslyScan").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "resumeContinuouslyScan: error -> " + e.toString());
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void openFlushLight(final CorPack corPack, final JSONArray args, final Promise promise) {
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("openFlushLight").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "openFlushLight: error -> " + e.toString());
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void stopViewService(final CorPack corPack, final JSONArray args, final Promise promise) {
        if (customViewModule != null) {
            customViewModule = null;
        }
        if (multiProcessorModule != null) {
            multiProcessorModule = null;
        }
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("stopViewService").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "stopViewService: error -> " + e.toString());
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void multiProcessorMode(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final boolean permissions = CordovaUtils.permissionCheck(corPack, promise, Manifest.permission.CAMERA);
        if (!permissions) {
            return;
        }
        if (multiProcessorModule == null) {
            multiProcessorModule = new MultiProcessorModule(corPack.getCordova(), pluginLayout);
            multiProcessorModule.multiProcessorMode(corPack, args, promise);
            managerMap.put(moduleId++, multiProcessorModule);
        }
    }

    @Override
    public void onScroll(int scrollX, int scrollY) {
        pluginLayout.updateScrollValues(scrollX, scrollY);
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("onScroll", int.class, int.class).invoke(entry.getValue(), scrollX, scrollY);
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "onScroll: error ->" + e.toString());
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void forceUpdateXAndY(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        Log.i(TAG, "forceUpdateXAndY: ");
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("forceUpdateXAndY", JSONArray.class).invoke(entry.getValue(), args);
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "forceUpdateXAndY: error -> " + e.toString());
            }
        }
    }

    public void pause(boolean multiTasking) {
        Log.i(TAG, "onPause: viewBase");
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("onPauseMethod").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "pause: error -> " + e.toString());
            }
        }
    }

    @Override
    public void resume(boolean multiTasking) {
        super.onResume(multiTasking);
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("onResumeMethod", boolean.class).invoke(entry.getValue(), multiTasking);
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "resume: error -> " + e.toString());
            }
        }
    }


    public void start() {
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("onStartMethod").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "start: error -> " + e.toString());
            }
        }
    }

    public void stop() {
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("onStopMethod").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "stop: error -> " + e.toString());
            }
        }
    }

    public void destroy() {
        for (Map.Entry<Integer, Object> entry : managerMap.entrySet()) {
            try {
                entry.getValue().getClass().getDeclaredMethod("onDestroyMethod").invoke(entry.getValue());
            } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
                Log.e(TAG, "destroy: error -> " + e.toString());
            }
        }
    }
}
