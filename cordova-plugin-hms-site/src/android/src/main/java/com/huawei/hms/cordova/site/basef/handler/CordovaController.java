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

package com.huawei.hms.cordova.site.basef.handler;

import android.content.Intent;

import com.huawei.hms.cordova.site.basef.CordovaBaseModule;
import com.huawei.hms.cordova.site.basef.CordovaMethod;
import com.huawei.hms.cordova.site.basef.HMSLog;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class CordovaController {
    private static final String TAG = CordovaController.class.getSimpleName();
    private static final String NOT_CORDOVA_MODULE_ERR = " is not a cordova module. Please check if the given module extends" +
            " class CordovaBaseModule. If the class extends CordovaBaseModule then check the main cordova class, you have to register the module" +
            " inside the main cordova class. If everything is okay so far, then please check the action parameter sent from JavaScript and ensure that" +
            " exported cordova method in java is public. If the problem persists then contact the administrator. ";

    private final CordovaModuleGroupHandler groupHandler;
    private final CordovaEventRunner eventRunner;
    private final CordovaPlugin cordovaPlugin;
    private final HMSLogger hmsLogger;

    public CordovaController(CordovaPlugin cordovaPlugin, String service, String version, List<CordovaBaseModule> cordovaModules) {
        List<CordovaModuleHandler> moduleHandlerList = new ArrayList<>();
        for (CordovaBaseModule cordovaModule : cordovaModules) {
            CordovaModuleHandler moduleHandler = new CordovaModuleHandler(cordovaModule);
            moduleHandlerList.add(moduleHandler);
        }
        this.cordovaPlugin = cordovaPlugin;
        this.hmsLogger = HMSLogger.getInstance(cordovaPlugin.webView.getContext(), service, version);
        this.groupHandler = new CordovaModuleGroupHandler(moduleHandlerList);
        this.eventRunner = new CordovaEventRunner(cordovaPlugin.webView, hmsLogger, cordovaPlugin.cordova.getActivity());
        prepareEventsThenClear();
    }

    private void prepareEventsThenClear() {
        for (Map.Entry<String, CordovaModuleHandler> moduleHandlerEntry : groupHandler.getLookupTable().entrySet()) {
            List<Method> eventCache = moduleHandlerEntry.getValue().getEventCache();
            runAllEventMethods(moduleHandlerEntry.getValue().getInstance(), eventCache);
            moduleHandlerEntry.getValue().getEventCache().clear();  // Clear after running above
        }
    }

    private void runAllEventMethods(CordovaBaseModule instance, List<Method> eventCache) {
        for (Method method : eventCache) {
            try {
                method.invoke(instance, new CorPack(cordovaPlugin, eventRunner, hmsLogger));
                CorLog.info(TAG, "Event " + method.getName() + " is ready.");
            } catch (IllegalAccessException | InvocationTargetException e) {
                CorLog.err(TAG, "Event couldn't initialized. " + e.getMessage());
            }
        }
    }

    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {
        cordovaPlugin.cordova.getThreadPool().execute(() -> executeUtil(action, args, callbackContext));
        return true;
    }

    private void executeUtil(String action, JSONArray args, final CallbackContext callbackContext) {
        if (!groupHandler.hasCordovaModuleHandler(action)) {
            CorLog.err(TAG, action + NOT_CORDOVA_MODULE_ERR);
            callbackContext.error("Cordova module doesn't exist.");
            return;
        }
        CordovaModuleHandler moduleHandler = groupHandler.getCordovaModuleHandler(action);
        if (args.length() == 0 || (args.opt(0).getClass() != String.class) || !moduleHandler.hasModuleMethod(args.optString(0))) {
            CorLog.err(TAG, "Please ensure that the first parameter of arguments you have sent from JavaScript is the methodName and the action is the module name.");
            callbackContext.error("Function name doesn't exist.");
            return;
        }
        String methodName = args.optString(0);
        args.remove(0); // Remove the method name after you have it.
        Method method = moduleHandler.getModuleMethod(methodName);
        CorLog.info(TAG, String.format(Locale.ENGLISH, "Method %s is called from module %s.", methodName, action));
        CorPack corPack = new CorPack(cordovaPlugin, eventRunner, hmsLogger);
        boolean hasLogger = method.isAnnotationPresent(HMSLog.class);
        Promise promise = createPromiseFromCallbackContext(callbackContext, methodName, hasLogger);
        String[] rules = method.getAnnotation(CordovaMethod.class).rules();

        try {
            checkRulesOfMethodIfExists(moduleHandler, rules);
            method.invoke(moduleHandler.getInstance(), corPack, args, promise);
        } catch (IllegalAccessException | IllegalArgumentException e) {
            CorLog.err(TAG, String.format(Locale.ENGLISH, "Error occurred when method %s in module %s was called." +
                            " Exception class is %s and exception message is %s.",
                    methodName, action, e.getClass().getSimpleName(), e.toString()));
            promise.error(e.toString());
        } catch (InvocationTargetException e) {
            CorLog.err(TAG, String.format(Locale.ENGLISH, "When method %s in module %s was called 'Invocation Target Exception' occurred." +
                            " Invocation target exception means that called method was failed. Target exception is %s." +
                            " Custom error message of the target exception is '%s.'", methodName, action, e.getTargetException().getClass(),
                    e.getTargetException().getMessage()));
            // Capture custom runtime exception and send it via parsing.
            if (e.getTargetException() instanceof CorException)
                promise.error(((CorException) e.getTargetException()).getCorError());
            else
                promise.error(e.getTargetException().toString());
        }
    }

    private void checkRulesOfMethodIfExists(CordovaModuleHandler moduleHandler, String[] rules)
            throws InvocationTargetException, IllegalAccessException, IllegalArgumentException {
        Map<String, Method> ruleTable = moduleHandler.getRuleTable();
        for (String rule : rules) {
            if (ruleTable.containsKey(rule)) {
                Method ruleMethod = ruleTable.get(rule);
                ruleMethod.invoke(moduleHandler.getInstance());
            }
        }
    }

    private Promise createPromiseFromCallbackContext(final CallbackContext callbackContext, String methodName, boolean isActive) {
        return new Promise(callbackContext, methodName, hmsLogger, isActive);
    }

    public void onPause(boolean multitasking) {
        CorLog.debug(TAG, "onPause");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onPause(multitasking);
    }

    public void onDestroy() {
        CorLog.debug(TAG, "onDestroy");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onDestroy();
        groupHandler.clear();
    }

    public void onReset() {
        CorLog.debug(TAG, "onReset");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onReset();
    }

    public void onResume(boolean multitasking) {
        CorLog.debug(TAG, "onResume");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onResume(multitasking);
    }

    public void onStart() {
        CorLog.debug(TAG, "onStart");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onStart();
    }

    public void onStop() {
        CorLog.debug(TAG, "onStop");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onStop();
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        CorLog.debug(TAG, "onActivityResult");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults) {
        CorLog.debug(TAG, "onRequestPermissionResult");
        for (CordovaModuleHandler moduleHandler : groupHandler.getLookupTable().values())
            moduleHandler.getInstance().onRequestPermissionResult(requestCode, permissions, grantResults);
    }
}

