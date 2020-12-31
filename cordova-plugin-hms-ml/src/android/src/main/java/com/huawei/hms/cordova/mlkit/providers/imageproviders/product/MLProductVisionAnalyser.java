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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.product;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlkit.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlkit.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlkit.logger.HMSLogger;
import com.huawei.hms.cordova.mlkit.logger.HMSMethod;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.PlatformUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCapture;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCaptureConfig;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCaptureFactory;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.productvisionsearch.MLProductVisionSearch;
import com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzer;
import com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;

public class MLProductVisionAnalyser extends HMSProvider {
    private static final String TAG = MLProductVisionAnalyser.class.getName();
    private Context context;
    private MLRemoteProductVisionSearchAnalyzer analyzer;
    private CordovaInterface cordovaInterface;
    private CallbackContext callbackContext;

    public MLProductVisionAnalyser(Context ctx) {
        super(ctx);
    }

    public void initializeProductVisionAnalyser(final JSONObject params, final Context context,
        final CallbackContext callbackContext, final CordovaInterface cordovaInterface, final CordovaWebView webView) {
        this.callbackContext = callbackContext;
        this.context = context;
        this.cordovaInterface = cordovaInterface;
        int detectType = params.optInt("detectType", 0);
        switch (detectType) {
            case 0:
                remoteAnalyser(params);
                break;
            case 1:
                pluginAnalyser(params, webView);
                break;
            default:
                callbackContext.error(CordovaErrors.ILLEGAL_PARAMETER);
                HMSLogger.getInstance(cordovaInterface.getContext())
                    .sendSingleEvent("productVisionAnalyser", String.valueOf(CordovaErrors.ILLEGAL_PARAMETER));
                break;
        }
    }

    private void pluginAnalyser(JSONObject params, CordovaWebView webView) {
        JSONObject mlProductSettingJSON = params.optJSONObject("mlProductSetting");
        MLProductVisionSearchCaptureConfig config;
        if (mlProductSettingJSON != null) {
            int largestNumOfReturns = mlProductSettingJSON.optInt("largestNumOfReturns", 1);
            String productSetId = mlProductSettingJSON.optString("productSetId", "vmall");
            int region = mlProductSettingJSON.optInt("region", MLProductVisionSearchCaptureConfig.REGION_DR_CHINA);
            config = new MLProductVisionSearchCaptureConfig.Factory().setLargestNumOfReturns(largestNumOfReturns)
                .setProductFragment(new MLProductFragment(getContext(), this.callbackContext, cordovaInterface))
                .setProductSetId(productSetId)
                .setRegion(region)
                .create();
        } else {
            config = new MLProductVisionSearchCaptureConfig.Factory().setLargestNumOfReturns(16)
                .setRegion(MLProductVisionSearchCaptureConfig.REGION_DR_CHINA)
                .setProductFragment(new MLProductFragment(getContext(), this.callbackContext, cordovaInterface))
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

        CordovaHelpers.frameController(frame, getContext(), callbackContext, "productAnalyser");
        HMSMethod method = new HMSMethod("productAnalyser");

        Task<List<MLProductVisionSearch>> task = this.analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(mlProductVisionSearches -> {
            try {
                JSONObject jsonObject = new JSONObject();
                jsonObject.putOpt("result", TextUtils.mlProductListTOJSON(mlProductVisionSearches));
                HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("productAnalyser");
                callbackContext.success(jsonObject);
            } catch (JSONException e) {
                Log.e(TAG, "" + e.getMessage());
                callbackContext.error(e.getMessage());
            }
        }).addOnFailureListener(PlatformUtils.failureListener(method, getActivity(), callbackContext));

    }

    public void stopProduct(final CallbackContext callbackContext) {
        if (this.analyzer == null) {
            callbackContext.error(CordovaErrors.ANALYSIS_FAILURE);
            HMSLogger.getInstance(cordovaInterface.getContext())
                .sendSingleEvent("productAnalyserStop", String.valueOf(CordovaErrors.ANALYSIS_NULL));
        } else {
            this.analyzer.stop();
            this.analyzer = null;
            callbackContext.success("Product Analyser is closed ");
            HMSLogger.getInstance(cordovaInterface.getContext()).sendSingleEvent("productAnalyserStop");
        }
    }

}
