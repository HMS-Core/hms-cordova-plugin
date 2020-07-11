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

package com.huawei.hms.cordova.mlkit.productvisionsearch;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.util.Log;
import android.widget.ImageView;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.productvisionsearch.MLProductVisionSearch;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProduct;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProductImage;
import com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzer;
import com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ProductVisionSearchAnalyse {
    private static final String TAG = ProductVisionSearchAnalyse.class.getName();
    private MLRemoteProductVisionSearchAnalyzer analyzer;
    private Bitmap bitmap;

    public void remoteAnalyzer(Context context, JSONObject params, CallbackContext callbackContext) throws JSONException, IOException {
        int largestNumOfReturns;
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }

        JSONObject productVisionSearchSetting = params.optJSONObject("productVisionSearchSetting");
        if (productVisionSearchSetting != null) {
            largestNumOfReturns = productVisionSearchSetting.optInt("largestNumOfReturns", 5);
        } else {
            largestNumOfReturns = 5;
        }
        MLRemoteProductVisionSearchAnalyzerSetting setting =
                new MLRemoteProductVisionSearchAnalyzerSetting.Factory().setLargestNumOfReturns(largestNumOfReturns).create();
        analyzer = MLAnalyzerFactory.getInstance().getRemoteProductVisionSearchAnalyzer(setting);
        Task<List<MLProductVisionSearch>> task = analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(productVisionSearchList -> {
            String result = HMSMLUtils.toJSON(productVisionSearchList);
            try {
                Log.i(TAG, "onSuccessResult: " + result);
                callbackContext.success(new JSONArray(result));

            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                Log.e(TAG, "error:" + e.getMessage());
            }
        }).addOnFailureListener(e -> {
            Log.i(TAG, "onFailure: " + e.getMessage());
            callbackContext.error(e.getMessage());
        });
    }

    public void stopProductVisionSearchAnalyser(CallbackContext callbackContext) {
        if (analyzer == null) {
            callbackContext.error("Analyser is not initialized.");
        } else {
            analyzer.stop();
            analyzer = null;
        }
    }


}
