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
package com.huawei.hms.cordova.ads.ad.banner;

import com.huawei.hms.ads.BannerAdSize;

import java.util.HashMap;
import java.util.Map;

public enum PluginBannerAdSize {
    BANNER_SIZE_360_57(BannerAdSize.BANNER_SIZE_360_57, "BANNER_SIZE_360_57"),
    BANNER_SIZE_360_144(BannerAdSize.BANNER_SIZE_360_144, "BANNER_SIZE_360_144"),
    BANNER_SIZE_320_50(BannerAdSize.BANNER_SIZE_320_50, "BANNER_SIZE_320_50"),
    BANNER_SIZE_DYNAMIC(BannerAdSize.BANNER_SIZE_DYNAMIC, "BANNER_SIZE_DYNAMIC"),
    BANNER_SIZE_468_60(BannerAdSize.BANNER_SIZE_468_60, "BANNER_SIZE_468_60"),
    BANNER_SIZE_INVALID(BannerAdSize.BANNER_SIZE_INVALID, "BANNER_SIZE_INVALID"),
    BANNER_SIZE_320_100(BannerAdSize.BANNER_SIZE_320_100, "BANNER_SIZE_320_100"),
    BANNER_SIZE_728_90(BannerAdSize.BANNER_SIZE_728_90, "BANNER_SIZE_728_90"),
    BANNER_SIZE_300_250(BannerAdSize.BANNER_SIZE_300_250, "BANNER_SIZE_300_250"),
    BANNER_SIZE_SMART(BannerAdSize.BANNER_SIZE_SMART, "BANNER_SIZE_SMART"),
    BANNER_SIZE_160_600(BannerAdSize.BANNER_SIZE_160_600, "BANNER_SIZE_160_600");

    BannerAdSize adSize;
    String adSizeString;
    private static final Map<BannerAdSize, PluginBannerAdSize> AD_SIZE_MAP = new HashMap<>();

    PluginBannerAdSize(BannerAdSize adSize, String adSizeString) {
        this.adSize = adSize;
        this.adSizeString = adSizeString;
    }

    public static String fromBannerAdSize(BannerAdSize adSize) {
        return AD_SIZE_MAP.get(adSize).adSizeString;
    }

    static {
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_360_57, BANNER_SIZE_360_57);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_360_144, BANNER_SIZE_360_144);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_320_50, BANNER_SIZE_320_50);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_DYNAMIC, BANNER_SIZE_DYNAMIC);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_468_60, BANNER_SIZE_468_60);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_INVALID, BANNER_SIZE_INVALID);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_320_100, BANNER_SIZE_320_100);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_728_90, BANNER_SIZE_728_90);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_300_250, BANNER_SIZE_300_250);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_SMART, BANNER_SIZE_SMART);
        AD_SIZE_MAP.put(BannerAdSize.BANNER_SIZE_160_600, BANNER_SIZE_160_600);
    }
}
