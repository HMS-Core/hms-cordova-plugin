/*
    Copyright 2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.ads.vast;

import com.huawei.hms.ads.vast.adapter.SdkFactory;
import com.huawei.hms.ads.vast.adapter.VastSdkConfiguration;
import com.huawei.hms.ads.vast.domain.event.AdContent;
import com.huawei.hms.ads.vast.domain.event.VastAdContent;
import com.huawei.hms.ads.vast.player.api.VastAdPlayer;
import com.huawei.hms.ads.vast.player.model.CreativeResource;
import com.huawei.hms.cordova.ads.Converter;
import com.huawei.hms.cordova.ads.basef.CordovaBaseModule;
import com.huawei.hms.cordova.ads.basef.CordovaMethod;
import com.huawei.hms.cordova.ads.basef.HMSLog;
import com.huawei.hms.cordova.ads.basef.handler.CorPack;
import com.huawei.hms.cordova.ads.basef.handler.Promise;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class VastModule extends CordovaBaseModule {

    @CordovaMethod
    @HMSLog
    public void initVast(CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);
        SdkFactory.init(corPack.getCordovaWebView().getContext(),
            Converter.fromJSONObjectToVastSdkConfiguration(jsonObject));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getVastSdkConfiguration(CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        VastSdkConfiguration vastSdkConfiguration = SdkFactory.getConfiguration();
        promise.success(Converter.fromVastSdkConfigurationToJson(vastSdkConfiguration));
    }

    @CordovaMethod
    @HMSLog
    public void updateSdkServerConfig(CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String slotId = args.getString(0);
        SdkFactory.updateSdkServerConfig(slotId);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void userAcceptAdLicense(CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        Boolean isAcceptLicense = args.getBoolean(0);
        SdkFactory.userAcceptAdLicense(isAcceptLicense);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getEventProcessor(CorPack corPack, JSONArray args, final Promise promise) {
        CreativeResource currentPlayerCreative = VastAdPlayer.getInstance().getCurrentLinearCreative();
        SdkFactory.getEventProcessor()
            .onAcceptInvitationLinear(currentPlayerCreative.getTrackingEvents(),
                getAdContentByCreative(currentPlayerCreative));

        SdkFactory.getEventProcessor()
            .onRewind(currentPlayerCreative.getTrackingEvents(), getAdContentByCreative(currentPlayerCreative), 5000,
                currentPlayerCreative.getDuration());

        promise.success();
    }

    private AdContent getAdContentByCreative(CreativeResource playerResource) {
        return VastAdContent.createByRequestId(playerResource.getRequestId())
            .setSlotId(playerResource.getSlotId())
            .setAssetUri(playerResource.getUrl())
            .setCreativeType(playerResource.getType())
            .setShowId(playerResource.getShowId())
            .setCreativeId(playerResource.getContentId())
            .setCreativeExtensionMap(playerResource.getTypeToCreativeExtension())
            .setAdExtensionMap(playerResource.getAdExtensionMap());
    }
}
