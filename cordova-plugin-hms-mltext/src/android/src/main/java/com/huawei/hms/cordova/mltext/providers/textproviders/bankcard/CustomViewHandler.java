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

package com.huawei.hms.cordova.mltext.providers.textproviders.bankcard;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.ImageView;

import androidx.annotation.NonNull;

import com.huawei.hms.cordova.mltext.interfaces.HMSProvider;
import com.huawei.hms.cordova.mltext.logger.HMSLogger;
import com.huawei.hms.mlplugin.card.bcr.CustomView;
import com.huawei.hms.mlplugin.card.bcr.MLBcrCaptureResult;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONException;
import org.json.JSONObject;

public class CustomViewHandler extends HMSProvider {
    private Context mContext;

    private Activity mActivity;

    private HMSLogger logger;

    private static MLBcrCaptureResult cardResult;

    private CordovaInterface mCordova;

    private CordovaPlugin mPlugin;

    private int[] img = {getDrawableId(getContext(), "FLASH_LIGHT_ON"), getDrawableId(getContext(), "FLASH_LIGHT_OFF")};

    private static final int REQUEST_CODE_SCAN_CUSTOMIZED = 14;

    @SuppressLint("StaticFieldLeak")
    private static CustomView remoteView;

    @SuppressLint("StaticFieldLeak")
    private static ImageView flashImage;

    private CallbackContext mCallbackContext;

    private int getDrawableId(Context context, String resourceName) {
        try {
            return context.getResources()
                .getIdentifier((String) CustomViewActivity.class.getDeclaredField(resourceName).get(null), "drawable",
                    context.getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e("PluginNativeAdManager", e.getMessage());
            return -1;
        }
    }

    public static void setViews(CustomView remoteView, ImageView flashImage) {
        CustomViewHandler.remoteView = remoteView;
        CustomViewHandler.flashImage = flashImage;
    }

    public static void setCardResult(MLBcrCaptureResult result) {
        cardResult = result;
    }

    public CustomViewHandler(@NonNull Context context, Activity activity, CordovaInterface cordova,
        CordovaPlugin plugin) {
        super(context);
        this.mContext = context;
        this.mActivity = activity;
        this.mCordova = cordova;
        this.mPlugin = plugin;

        logger = HMSLogger.getInstance(mContext);
    }

    public void startCustomizedView(JSONObject jsonObject, CallbackContext context) throws JSONException {
        this.mCallbackContext = context;

        mCordova.setActivityResultCallback(mPlugin);

        int resultType = 0;
        if (jsonObject.has("resultType")) {
            resultType = jsonObject.getInt("resultType");
        }

        int recMode = 0;
        if (jsonObject.has("recMode")) {
            recMode = jsonObject.getInt("recMode");
        }

        boolean isFlashAvailable = false;
        if (jsonObject.has("isFlashAvailable")) {
            isFlashAvailable = jsonObject.getBoolean("isFlashAvailable");
        }

        boolean isTitleAvailable = true;
        if (jsonObject.has("isTitleAvailable")) {
            isTitleAvailable = jsonObject.getBoolean("isTitleAvailable");
        }

        String title = "Place the card within the frame";
        if (jsonObject.has("title")) {
            title = jsonObject.getString("title");
        }
        float heightFactor = 0.63084f;
        if (jsonObject.has("heightFactor")) {
            heightFactor = (float) jsonObject.getDouble("heightFactor");
        }

        float widthFactor = 0.8f;
        if (jsonObject.has("widthFactor")) {
            widthFactor = (float) jsonObject.getDouble("widthFactor");
        }

        Intent intent = new Intent(mContext, CustomViewActivity.class);

        intent.putExtra("widthFactor", widthFactor);
        intent.putExtra("heightFactor", heightFactor);
        intent.putExtra("resultType", resultType);
        intent.putExtra("recMode", recMode);

        intent.putExtra("isFlashAvailable", isFlashAvailable);
        intent.putExtra("isTitleAvailable", isTitleAvailable);
        intent.putExtra("title", title);

        mActivity.startActivityForResult(intent, REQUEST_CODE_SCAN_CUSTOMIZED);
    }

    public void switchLight(final CallbackContext callbackContext) {
        if (remoteView != null) {
            remoteView.switchLight();
            if (remoteView.getLightStatus()) {
                flashImage.setImageResource(img[1]);
            } else {
                flashImage.setImageResource(img[0]);
            }
            callbackContext.success();
        } else {
            callbackContext.error("View is null");
        }
    }

    public void getLightStatus(final CallbackContext callbackContext) {
        if (remoteView != null) {
            callbackContext.success(String.valueOf(remoteView.getLightStatus()));
        } else {
            callbackContext.error("View is null");
        }
    }
}
