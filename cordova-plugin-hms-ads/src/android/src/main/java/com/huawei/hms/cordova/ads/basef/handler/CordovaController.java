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
package com.huawei.hms.cordova.ads.basef.handler;

import android.util.Log;

import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.HMSLog;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

public class CordovaController {
    private static final String TAG = CordovaController.class.getSimpleName();

    private CordovaModuleGroupHandler groupHandler;
    private final HMSLogger hmsLogger;
    private final CordovaEventRunner eventRunner;
    private final CordovaPlugin cordovaPlugin;
    private final List<String> moduleReferences = new ArrayList<>();

    public <T extends CordovaBaseModule> CordovaController(CordovaPlugin cordovaPlugin, String service, String version, List<T> cordovaModules) {
        List<CordovaModuleHandler> moduleHandlerList = new ArrayList<>();
        for (T cordovaModule : cordovaModules) {
            CordovaModuleHandler moduleHandler = new CordovaModuleHandler(cordovaModule);
            moduleHandlerList.add(moduleHandler);
            moduleReferences.add(cordovaModule.getReference());
        }
        this.cordovaPlugin = cordovaPlugin;
        this.groupHandler = new CordovaModuleGroupHandler(moduleHandlerList);
        this.hmsLogger = HMSLogger.getInstance(cordovaPlugin.webView.getContext(), service, version);
        this.eventRunner = new CordovaEventRunner(cordovaPlugin.webView, cordovaPlugin.cordova.getActivity(), hmsLogger);

        prepareEvents();
        clearEventCache();
    }

    private void prepareEvents() {
        for (String ref : moduleReferences) {
            List<Method> eventCache = groupHandler.getCordovaModuleHandler(ref).getEventCache();
            runAllEventMethods(groupHandler.getCordovaModuleHandler(ref).getInstance(), eventCache);
        }
    }

    private <T> void runAllEventMethods(T instance, List<Method> eventCache) {
        for (Method method : eventCache) {
            try {
                method.invoke(instance, new CorPack(hmsLogger, cordovaPlugin, eventRunner));
                Log.i(TAG, "Event " + method.getName() + " is ready.");
            } catch (IllegalAccessException | InvocationTargetException e) {
                Log.e(TAG, "Event couldn't initialized. " + e.getMessage());
            }
        }
    }

    private void clearEventCache() {
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getEventCache().clear();
    }

    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        try {
            CordovaModuleHandler moduleHandler = groupHandler.getCordovaModuleHandler(action);
            String methodName = args.getString(0); // JSONException if not exists
            Method method = moduleHandler.getModuleMethod(methodName);
            Log.i(TAG, "Method " + methodName + " called of module " + action + ".");
            args.remove(0);
            boolean isLoggerActive = false;
            if (method.isAnnotationPresent(HMSLog.class)) {
                isLoggerActive = true;
                hmsLogger.startMethodExecutionTimer(methodName);
            }
            CorPack corPack = new CorPack(hmsLogger, cordovaPlugin, eventRunner);
            Promise promise = createPromiseFromCallbackContext(callbackContext, methodName, isLoggerActive);
            method.invoke(moduleHandler.getInstance(), corPack, args, promise);
            return true;
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException | JSONException e) {
            Log.e(TAG, "Error captured when execute method run for reference= " + action);
            Log.e(TAG, e.getMessage() + ", " + e.getClass().getSimpleName());
            callbackContext.error(e.getMessage());
            return false;
        }
    }

    private Promise createPromiseFromCallbackContext(final CallbackContext callbackContext, String methodName, boolean isLoggerActive) {
        return new Promise(callbackContext, hmsLogger, methodName, isLoggerActive);
    }

    public void onPause(boolean multitasking) {
        Log.i(TAG, "onPause");
        for (String ref : moduleReferences) {
            groupHandler.getCordovaModuleHandler(ref).getInstance().onPause(multitasking);
        }
    }

    public void onDestroy() {
        Log.i(TAG, "onDestroy");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onDestroy();
        groupHandler.clear();
    }

    public void onReset() {
        Log.i(TAG, "onReset");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onReset();
    }

    public void onResume(boolean multitasking) {
        Log.i(TAG, "onResume");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onResume(multitasking);
    }

    public void onStart() {
        Log.i(TAG, "onStart");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onStart();
    }

    public void onStop() {
        Log.i(TAG, "onStop");
        for(String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onStop();
    }

}

