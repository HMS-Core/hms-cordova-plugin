/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.dtm.interfaces;

import android.util.Log;
import com.huawei.hms.cordova.dtm.HMSDTMModule;
import com.huawei.hms.dtm.ICustomVariable;
import java.util.Map;

public class CustomVariable implements ICustomVariable {

    private static final String TAG = CustomVariable.class.getSimpleName();

    @Override
    public String getValue(Map<String, Object> map) {
        String returnValue = "";
        String name = "";
        Object value = map.get("varName");
        if (!(value instanceof String) || ((String) value).isEmpty()) {
            Log.w(TAG, "toString | Non-empty String expected for varName");
        } else {
            name = value.toString();
        }
        if (HMSDTMModule.getMap().containsKey(name)) {
            returnValue = HMSDTMModule.getMap().get(name);
        }
        return returnValue;
    }
}
