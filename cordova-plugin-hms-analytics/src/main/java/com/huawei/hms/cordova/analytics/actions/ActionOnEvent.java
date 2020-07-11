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

package com.huawei.hms.cordova.analytics.actions;

import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.analytics.HiAnalyticsInstance;
import com.huawei.hms.analytics.type.HAParamType;
import com.huawei.hms.cordova.analytics.utils.HMSAnalyticsUtils;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.Map;

public class ActionOnEvent implements Action {

    private String TAG = ActionOnEvent.class.getSimpleName();

    private HiAnalyticsInstance instance;

    private Map<String, String> haParamTypes;

    public ActionOnEvent(HiAnalyticsInstance instance) {
        this.instance = instance;

        try {
            haParamTypes = HMSAnalyticsUtils.getConstants(HAParamType.class);
        } catch (IllegalAccessException e) {
            Log.e(TAG, "Can not get the constants of HAEventType");
        }
    }

    @Override
    public void execute(JSONObject params, CallbackContext cb) throws JSONException {
        String key = params.getString("key");
        JSONObject val = params.getJSONObject("value");
        Bundle bundle = jsonToBundle(val);
        instance.onEvent(key, bundle);
        cb.success();
    }

    private Bundle jsonToBundle(JSONObject jsonObject) throws JSONException {
        Bundle bundle = new Bundle();
        Iterator<String> iterator = jsonObject.keys();
        while (iterator.hasNext()) {
            String key = iterator.next();
            String val = jsonObject.getString(key);

            if (haParamTypes != null && haParamTypes.get(key) != null) {
                key = haParamTypes.get(key);
            }

            bundle.putString(key, val);
        }
        return bundle;
    }
}
