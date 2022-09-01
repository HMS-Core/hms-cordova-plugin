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

package com.huawei.hms.cordova.contactshield.handlers;

import com.huawei.hms.contactshield.ContactShieldCallback;
import com.huawei.hms.cordova.contactshield.basef.handler.CorPack;

public class ContactShieldCallbackHandler implements ContactShieldCallback {
    private final CorPack corPack;

    public ContactShieldCallbackHandler(CorPack corpack) {
        this.corPack = corpack;
    }

    @Override
    public void onHasContact(String s) {
        corPack.getEventRunner().sendEvent("onHasContact", s);
    }

    @Override
    public void onNoContact(String s) {
        corPack.getEventRunner().sendEvent("onNoContact", s);
    }
}
