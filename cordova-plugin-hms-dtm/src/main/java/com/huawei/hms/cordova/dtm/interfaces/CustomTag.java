/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

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

import com.huawei.hms.cordova.dtm.HMSDtm;
import com.huawei.hms.cordova.dtm.logger.HMSLogger;
import com.huawei.hms.dtm.ICustomTag;

import java.util.Locale;
import java.util.Map;

public class CustomTag implements ICustomTag {

    @Override
    public void call(final Map<String, Object> map) {
        HMSLogger.getInstance(HMSDtm.getContex()).startMethodExecutionTimer("CustomTag");
        HMSDtm.getPlugin().cordova.getActivity().runOnUiThread(() -> {
            HMSDtm.getPlugin().webView.loadUrl(
                String.format(Locale.ENGLISH, "javascript:window['CUSTOM_TAG_EVENT'](%s);", HMSDtm.toJSONObject(map)));
            HMSLogger.getInstance(HMSDtm.getContex()).sendSingleEvent("CustomTag");
        });
    }
}