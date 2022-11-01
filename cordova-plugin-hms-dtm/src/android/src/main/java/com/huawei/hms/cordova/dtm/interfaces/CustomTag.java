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

import com.huawei.hms.cordova.dtm.HMSDTM;
import com.huawei.hms.cordova.dtm.HMSDTMModule;
import com.huawei.hms.dtm.ICustomTag;
import java.util.Locale;
import java.util.Map;

public class CustomTag implements ICustomTag {


    @Override
    public void call(final Map<String, Object> map) {
        HMSDTM.getPlugin().cordova.getActivity().runOnUiThread(() -> {
            HMSDTM.getPlugin().webView.loadUrl(String.format(Locale.ENGLISH, "javascript:window['CUSTOM_TAG_EVENT'](%s);",
                HMSDTMModule.toJSONObject(map)));
        });
    }

}
