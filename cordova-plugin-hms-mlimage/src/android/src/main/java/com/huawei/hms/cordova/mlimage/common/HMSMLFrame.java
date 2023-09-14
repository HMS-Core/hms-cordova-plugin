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

package com.huawei.hms.cordova.mlimage.common;

import android.content.Context;

import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlimage.utils.HMSMLUtils;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HMSMLFrame extends CordovaBaseModule {
    private static final String TAG = HMSMLFrame.class.getSimpleName();

    private Promise promise;

    private MLFrame frame;

    private Context context;

    public HMSMLFrame(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    @HMSLog
    @CordovaMethod
    public void mlFrame(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.optJSONObject(0);
        String actionName = params.getString("actionName");
        this.promise = promise;
        this.frame = HMSMLUtils.getFrame(context, params);

        CordovaHelpers.frameController(frame, context, promise, "initializeMLFrame");
        switch (actionName) {
            case "getPreviewBitmap":
                getPreviewBitmap();
                break;
            case "readBitmap":
                readBitmap();
                break;
            case "rotate":
                rotate(params);
                break;
            default:
                promise.error(CordovaErrors.ILLEGAL_PARAMETER);
                break;
        }
    }

    private void getPreviewBitmap() {
        promise.success(HMSMLUtils.bitmapToBase64(frame.getPreviewBitmap()));
    }

    private void readBitmap() {
        promise.success(HMSMLUtils.bitmapToBase64(frame.readBitmap()));
    }

    private void rotate(final JSONObject params) throws JSONException {
        int quadrant = params.getInt("quadrant");
        promise.success(HMSMLUtils.bitmapToBase64(frame.rotate(frame.readBitmap(), quadrant)));
    }
}
