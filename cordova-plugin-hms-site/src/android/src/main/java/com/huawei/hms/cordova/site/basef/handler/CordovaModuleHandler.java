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

import com.huawei.hms.cordova.site.basef.CordovaBaseModule;
import com.huawei.hms.cordova.site.basef.CordovaEvent;
import com.huawei.hms.cordova.site.basef.CordovaMethod;
import com.huawei.hms.cordova.site.basef.CordovaRule;

import java.lang.reflect.Method;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class CordovaModuleHandler {
    private final Map<String, Method> lookupTable = new HashMap<>();
    private final List<Method> eventCache = new ArrayList<>();
    private final Map<String, Method> ruleTable = new HashMap<>();
    private final CordovaBaseModule instance;

    public CordovaModuleHandler(CordovaBaseModule moduleInstance) {
        this.instance = moduleInstance;
        fillLookupTable();
    }

    private void fillLookupTable() {
        Method[] methods = this.instance.getClass().getMethods();
        for (Method method : methods) {
            if (method.isAnnotationPresent(CordovaMethod.class))
                lookupTable.put(method.getName(), method);
            if (method.isAnnotationPresent(CordovaEvent.class))
                eventCache.add(method);
            if (method.isAnnotationPresent(CordovaRule.class))
                ruleTable.put(method.getName(), method);
        }
    }


    Method getModuleMethod(String action) {
        return lookupTable.get(action);
    }

    boolean hasModuleMethod(String action) {
        return lookupTable.containsKey(action);
    }

    List<Method> getEventCache() {
        return eventCache;
    }

    CordovaBaseModule getInstance() {
        return instance;
    }

    public Map<String, Method> getLookupTable() {
        return lookupTable;
    }

    public Map<String, Method> getRuleTable() {
        return ruleTable;
    }

    public void clear() {
        eventCache.clear();
        lookupTable.clear();
        ruleTable.clear();
    }
}

