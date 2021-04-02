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
package com.huawei.hms.cordova.availability.basef.handler;

import android.content.Intent;
import android.util.Log;

import com.huawei.hms.cordova.availability.basef.CordovaBaseModule;
import com.huawei.hms.cordova.availability.basef.HMSLog;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class CordovaController {
    private static final String TAG = CordovaController.class.getSimpleName();
    private static final String NOT_CORDOVA_MODULE_ERR = " is not a cordova module. Please check if the given module extends" +
            " class CordovaBaseModule. If the class extends CordovaBaseModule then check the main cordova class, you have to register the module" +
            " inside the main cordova class. If everything is okay so far, then please check the action parameter sent from JavaScript and ensure that" +
            " exported cordova method in java is public. If the problem persists then contact the administrator. ";
    private final HMSLogger hmsLogger;
    private final CordovaEventRunner eventRunner;
    private final CordovaPlugin cordovaPlugin;
    private final List<String> moduleReferences = new ArrayList<>();
    private CordovaModuleGroupHandler groupHandler;

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
            List eventCache = groupHandler.getCordovaModuleHandler(ref).getEventCache();
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
        if (!groupHandler.hasCordovaModuleHandler(action)) {
            Log.e(TAG, action + NOT_CORDOVA_MODULE_ERR);
            callbackContext.error("Cordova module doesn't exist.");
            return false;
        }
        CordovaModuleHandler moduleHandler = groupHandler.getCordovaModuleHandler(action);
        if (args.length() == 0 || (args.opt(0).getClass() != String.class) || !moduleHandler.hasModuleMethod(args.optString(0))) {
            Log.e(TAG, "Please ensure that the first parameter of arguments you have sent from JavaScript is the methodName and the action is the module name.");
            callbackContext.error("Function name doesn't exist.");
            return false;
        }
        String methodName = args.optString(0);
        args.remove(0); // Remove the method name after you have it.
        Method method = moduleHandler.getModuleMethod(methodName);
        Log.i(TAG, String.format(Locale.ENGLISH, "Method %s is called from module %s.", methodName, action));
        boolean isLoggerActive = false;
        if (method.isAnnotationPresent(HMSLog.class)) {
            isLoggerActive = true;
            hmsLogger.startMethodExecutionTimer(methodName);
        }
        CorPack corPack = new CorPack(hmsLogger, cordovaPlugin, eventRunner);
        Promise promise = createPromiseFromCallbackContext(callbackContext, methodName, isLoggerActive);


        try {
            method.invoke(moduleHandler.getInstance(), corPack, args, promise);
            return true;
        } catch (IllegalAccessException | IllegalArgumentException e) {
            Log.e(TAG, String.format(Locale.ENGLISH, "Error occurred when method %s in module %s was called." +
                            " Exception class is %s and exception message is %s.",
                    methodName, action, e.getClass().getSimpleName(), e.toString()));
            promise.error(e.toString());
        } catch (InvocationTargetException e) {
            Log.e(TAG, String.format(Locale.ENGLISH, "When method %s in module %s was called 'Invocation Target Exception' occurred." +
                            " Invocation target exception means that called method was failed. Target exception is %s." +
                            " Custom error message of the target exceptions is '%s.'", methodName, action, e.getTargetException().getClass(),
                    e.getTargetException().getMessage()));
            promise.error(e.getTargetException().toString());
        }
        return false;
    }

    private Promise createPromiseFromCallbackContext(final CallbackContext callbackContext, String methodName, boolean isLoggerActive) {
        return new Promise(callbackContext, hmsLogger, methodName, isLoggerActive);
    }

    public void onPause(boolean multitasking) {
        Log.d(TAG, "onPause");
        for (String ref : moduleReferences) {
            groupHandler.getCordovaModuleHandler(ref).getInstance().onPause(multitasking);
        }
    }

    public void onDestroy() {
        Log.d(TAG, "onDestroy");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onDestroy();
        groupHandler.clear();
    }

    public void onReset() {
        Log.d(TAG, "onReset");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onReset();
    }

    public void onResume(boolean multitasking) {
        Log.d(TAG, "onResume");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onResume(multitasking);
    }

    public void onStart() {
        Log.d(TAG, "onStart");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onStart();
    }

    public void onStop() {
        Log.d(TAG, "onStop");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onStop();
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.d(TAG, "onActivityResult");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onActivityResult(requestCode, resultCode, data);
    }

    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) {
        Log.d(TAG, "onRequestPermissionResult");
        for (String ref : moduleReferences)
            groupHandler.getCordovaModuleHandler(ref).getInstance().onRequestPermissionResult(requestCode, permissions, grantResults);
    }
}

