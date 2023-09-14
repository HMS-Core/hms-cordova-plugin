/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
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

package com.huawei.hms.cordova.mlimage.providers.imageproviders.product;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlimage.utils.PlatformUtils;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCapture;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCaptureConfig;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCaptureFactory;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.productvisionsearch.MLProductVisionSearch;
import com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzer;
import com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzerSetting;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class MLProductVisionAnalyser extends CordovaBaseModule {
    private static final String TAG = MLProductVisionAnalyser.class.getName();

    private final Context context;

    private final CordovaInterface cordovaInterface;

    private MLRemoteProductVisionSearchAnalyzer analyzer;

    private Promise promise;

    public MLProductVisionAnalyser(CordovaInterface cordova) {
        this.context = cordova.getContext();
        this.cordovaInterface = cordova;
    }

    @HMSLog
    @CordovaMethod
    public void productVisionAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        this.promise = promise;
        JSONObject params = args.optJSONObject(0);
        corPack.getCordova().getThreadPool().execute(() -> {
            int detectType = params.optInt("detectType", 0);
            switch (detectType) {
                case 0:
                    remoteAnalyser(params);
                    break;
                case 1:
                    pluginAnalyser(params, corPack.getCordovaWebView());
                    break;
                default:
                    promise.error(CordovaErrors.ILLEGAL_PARAMETER);
                    break;
            }
        });
    }

    private void pluginAnalyser(JSONObject params, CordovaWebView webView) {
        JSONObject mlProductSettingJSON = params.optJSONObject("mlProductSetting");
        MLProductVisionSearchCaptureConfig config;
        if (mlProductSettingJSON != null) {
            int largestNumOfReturns = mlProductSettingJSON.optInt("largestNumOfReturns", 1);
            String productSetId = mlProductSettingJSON.optString("productSetId", "vmall");
            int region = mlProductSettingJSON.optInt("region", MLProductVisionSearchCaptureConfig.REGION_DR_CHINA);
            config = new MLProductVisionSearchCaptureConfig.Factory().setLargestNumOfReturns(largestNumOfReturns)
                .setProductFragment(new MLProductFragment(promise, cordovaInterface))
                .setProductSetId(productSetId)
                .setRegion(region)
                .create();
        } else {
            config = new MLProductVisionSearchCaptureConfig.Factory().setLargestNumOfReturns(16)
                .setRegion(MLProductVisionSearchCaptureConfig.REGION_DR_CHINA)
                .setProductFragment(new MLProductFragment(promise, cordovaInterface))
                .create();
        }

        MLProductVisionSearchCapture capture = MLProductVisionSearchCaptureFactory.getInstance().create(config);
        capture.startCapture((Activity) webView.getContext());

    }

    private void remoteAnalyser(JSONObject params) {
        JSONObject mlProductSettingJSON = params.optJSONObject("mlProductSetting");
        MLRemoteProductVisionSearchAnalyzerSetting setting;
        if (mlProductSettingJSON != null) {
            int largestNumOfReturns = mlProductSettingJSON.optInt("largestNumOfReturns", 1);
            String productSetId = mlProductSettingJSON.optString("productSetId", "vmall");
            int region = mlProductSettingJSON.optInt("region",
                MLRemoteProductVisionSearchAnalyzerSetting.REGION_DR_CHINA);
            setting = new MLRemoteProductVisionSearchAnalyzerSetting.Factory().setLargestNumOfReturns(
                largestNumOfReturns).setProductSetId(productSetId).setRegion(region).create();
        } else {
            setting = new MLRemoteProductVisionSearchAnalyzerSetting.Factory().setLargestNumOfReturns(1)
                .setProductSetId("vmall")
                .setRegion(MLRemoteProductVisionSearchAnalyzerSetting.REGION_DR_CHINA)
                .create();
        }
        this.analyzer = MLAnalyzerFactory.getInstance().getRemoteProductVisionSearchAnalyzer(setting);
        MLFrame frame = HMSMLUtils.getFrame(context, params);

        CordovaHelpers.frameController(frame, context, promise, "productAnalyser");

        Task<List<MLProductVisionSearch>> task = this.analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(mlProductVisionSearches -> {
            try {
                JSONObject jsonObject = new JSONObject();
                jsonObject.putOpt("result", TextUtils.mlProductListTOJSON(mlProductVisionSearches));
                promise.success(jsonObject);
            } catch (JSONException e) {
                Log.e(TAG, "" + e.getMessage());
                promise.error(e.getMessage());
            }
        }).addOnFailureListener(PlatformUtils.failureListener(promise));

    }

    @HMSLog
    @CordovaMethod
    public void productAnalyserStop(final CorPack corPack, JSONArray args, final Promise promise) {
        if (this.analyzer == null) {
            promise.error(CordovaErrors.ANALYSIS_FAILURE);
            return;
        }
        corPack.getCordova().getThreadPool().execute(() -> {
            this.analyzer.stop();
            this.analyzer = null;
            promise.success("Product Analyser is closed ");
        });
    }
}
