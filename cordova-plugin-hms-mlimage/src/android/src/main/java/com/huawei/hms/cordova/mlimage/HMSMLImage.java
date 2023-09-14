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

package com.huawei.hms.cordova.mlimage;

import android.content.Intent;

import com.huawei.hms.cordova.mlimage.basef.handler.CordovaController;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.classification.MLImageClassificationAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.documentskewcorrection.MLDocumentSkewCorrectionAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.imagesuperresolution.MLImageSuperResolutionAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.imgseg.MLImageSegmentationAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.landmark.MLImageLandMarkAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.object.MLImageObjectAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.product.MLProductVisionAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.scenedetection.MLStillSceneDetectionAnalyser;
import com.huawei.hms.cordova.mlimage.providers.imageproviders.textimagesuperresolution.MLTextImageSuperResolutionAnalyser;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;

import java.util.Arrays;

public class HMSMLImage extends CordovaPlugin {

    public static final String TAG = HMSMLImage.class.getSimpleName();

    private static final String SERVICE = "HMSMLImage";

    private static final String VERSION = "3.11.0.300";

    private CordovaController cordovaController;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordovaController = new CordovaController(this, SERVICE, VERSION,
            Arrays.asList(new MLImageClassificationAnalyser(cordova), new MLImageSegmentationAnalyser(cordova),
                new MLImageLandMarkAnalyser(cordova), new MLImageObjectAnalyser(cordova),
                new MLDocumentSkewCorrectionAnalyser(cordova), new MLImageSuperResolutionAnalyser(cordova),
                new MLStillSceneDetectionAnalyser(cordova), new MLTextImageSuperResolutionAnalyser(cordova),
                new MLProductVisionAnalyser(cordova)));
    }

    @Override
    public boolean execute(final String action, final JSONArray args, final CallbackContext callbackContext) {
        return cordovaController.execute(action, args, callbackContext);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        cordovaController.onActivityResult(requestCode, resultCode, intent);
    }

    @Override
    public void onPause(final boolean multitasking) {
        super.onPause(multitasking);
        cordovaController.onPause(multitasking);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        cordovaController.onDestroy();
    }

    @Override
    public void onReset() {
        super.onReset();
        cordovaController.onReset();
    }

    @Override
    public void onResume(final boolean multitasking) {
        super.onResume(multitasking);
        cordovaController.onResume(multitasking);
    }

    @Override
    public void onStart() {
        super.onStart();
        cordovaController.onStart();
    }

    @Override
    public void onStop() {
        super.onStop();
        cordovaController.onStop();
    }
}
