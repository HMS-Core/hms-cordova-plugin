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

package com.huawei.hms.cordova.scan.basef.handler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

class CordovaModuleGroupHandler {
    private final Map<String, CordovaModuleHandler> lookupTable = new HashMap<>();

    public CordovaModuleGroupHandler(List<CordovaModuleHandler> cordovaModuleHandlerList) {
        fillLookupTable(cordovaModuleHandlerList);
    }

    private void fillLookupTable(List<CordovaModuleHandler> cordovaModuleHandlers) {
        for (CordovaModuleHandler cordovaModuleHandler : cordovaModuleHandlers) {
            String reference = cordovaModuleHandler.getInstance().getReference();
            lookupTable.put(reference, cordovaModuleHandler);
        }
    }

    boolean hasCordovaModuleHandler(String reference) {
        return lookupTable.containsKey(reference);
    }

    CordovaModuleHandler getCordovaModuleHandler(String reference) {
        return lookupTable.get(reference);
    }

    public Map<String, CordovaModuleHandler> getLookupTable() {
        return lookupTable;
    }

    void clear() {
        for (Map.Entry<String, CordovaModuleHandler> moduleHandler : lookupTable.entrySet())
            moduleHandler.getValue().clear();
        lookupTable.clear();
    }
}

