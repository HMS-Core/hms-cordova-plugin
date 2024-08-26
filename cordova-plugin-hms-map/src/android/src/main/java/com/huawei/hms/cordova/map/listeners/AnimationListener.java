/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.map.listeners;

import com.huawei.hms.cordova.map.utils.cordova.CordovaUtils;
import com.huawei.hms.maps.model.animation.Animation;

import org.json.JSONObject;

import java.util.Locale;

public final class AnimationListener implements ComponentListener {

    private static volatile AnimationListener instance = null;

    private final CordovaUtils cordovaUtils;

    private AnimationListener(CordovaUtils utils) {
        this.cordovaUtils = utils;
    }

    public static synchronized AnimationListener getInstance(CordovaUtils utils) {
        if (instance == null) {
            synchronized (AnimationListener.class) {
                if (instance == null) {
                    instance = new AnimationListener(utils);
                }
            }
        }
        return instance;
    }

    public Animation.AnimationListener buildAnimationListener(String event, int capsuleId, String componentId,
        JSONObject json) {
        return new Animation.AnimationListener() {
            @Override
            public void onAnimationStart() {
                if (json.has("isAnimationStart")) {
                    cordovaUtils.evaluateJs(String.format(Locale.ENGLISH, "on%sAnimationStart", event), capsuleId,
                        componentId, null);
                }
            }

            @Override
            public void onAnimationEnd() {
                if (json.has("isAnimationEnd")) {
                    cordovaUtils.evaluateJs(String.format(Locale.ENGLISH, "on%sAnimationEnd", event), capsuleId,
                        componentId, null);
                }
            }
        };
    }
}
