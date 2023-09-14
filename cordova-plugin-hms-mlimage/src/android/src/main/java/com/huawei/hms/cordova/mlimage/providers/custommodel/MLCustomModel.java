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

package com.huawei.hms.cordova.mlimage.providers.custommodel;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Log;

import com.huawei.hmf.tasks.Continuation;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.common.MLException;
import com.huawei.hms.mlsdk.custom.MLCustomLocalModel;
import com.huawei.hms.mlsdk.custom.MLCustomRemoteModel;
import com.huawei.hms.mlsdk.custom.MLModelDataType;
import com.huawei.hms.mlsdk.custom.MLModelExecutor;
import com.huawei.hms.mlsdk.custom.MLModelExecutorSettings;
import com.huawei.hms.mlsdk.custom.MLModelExecutorSettings.Factory;
import com.huawei.hms.mlsdk.custom.MLModelInputOutputSettings;
import com.huawei.hms.mlsdk.custom.MLModelInputs;
import com.huawei.hms.mlsdk.model.download.MLLocalModelManager;
import com.huawei.hms.mlsdk.model.download.MLModelDownloadListener;
import com.huawei.hms.mlsdk.model.download.MLModelDownloadStrategy;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Serializable;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.TreeMap;

public class MLCustomModel extends CordovaBaseModule {
    private final static String TAG = MLCustomModel.class.getName();

    private static final int DOWNLOAD = 1;

    private static final long M = 1024 * 1024;

    private static final float IMAGE_MEAN = 127.0f;

    private static final float IMAGE_STD = 128.0f;

    private final ArrayList<String> mLabels = new ArrayList<>();

    private final Context context;

    private final Activity activity;

    private String MODEL_NAME = "mobilenet_v1_1_0_224_quant";

    private String LABEL_FILE_NAME = "labels_mobilenet_quant_v1_224.txt";

    private String MODEL_FULL_NAME = MODEL_NAME + ".ms";

    private int BITMAP_WIDTH = 224;

    private int OUTPUT_SIZE = 1001;

    private int BITMAP_HEIGHT = 224;

    private MLCustomLocalModel localModel;

    private MLCustomRemoteModel remoteModel;

    private TreeMap<String, Float> result;

    private MLModelExecutor mlModelExecutor;

    private boolean isDownload = false;

    private Promise promise;

    public MLCustomModel(CordovaInterface cordova) {
        this.context = cordova.getContext();
        this.activity = cordova.getActivity();
    }

    @HMSLog
    @CordovaMethod
    public void customModelAnalyser(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        JSONObject params = args.optJSONObject(0);
        readLabels(LABEL_FILE_NAME);
        Bitmap analysisBitmap = getBitmap(params.getString("filePath"), corPack.getCordova());
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inSampleSize = 16;
        int detectType = params.optInt("detectType", 0);
        if (detectType == 1) {
            isDownload = true;
        }
        switch (detectType) {
            case 0: {
                try {
                    stopModel(promise);
                } catch (IOException e) {
                    promise.error(e.getMessage());
                }
                break;
            }
            case 1:
                downloadModels(MODEL_NAME, DOWNLOAD, params);
                break;
            case 2:
                ownModel(params, analysisBitmap);
                break;
            default:
                promise.error("Error Code:" + MLException.ILLEGAL_PARAMETER);
                break;
        }
    }

    private void ownModel(final JSONObject params, final Bitmap bitmap) throws JSONException {
        MODEL_FULL_NAME = params.getString("modelFullName");
        MODEL_NAME = params.getString("modelName");
        LABEL_FILE_NAME = params.getString("labelFileName");
        BITMAP_HEIGHT = params.getInt("bitmapHeight");
        BITMAP_WIDTH = params.getInt("bitmapWidth");
        OUTPUT_SIZE = params.getInt("outPutSize");
        readLabels(LABEL_FILE_NAME);
        pictureAnalysis(bitmap, params);
    }

    private Bitmap getBitmap(final String path, final CordovaInterface cordovaInterface) {
        Uri imageUri = Uri.parse(path);
        if (imageUri == null) {
            Log.e(TAG, "getBitmap: null");
        }
        Bitmap bitmap = null;
        try {
            bitmap = MediaStore.Images.Media.getBitmap(cordovaInterface.getActivity().getContentResolver(), imageUri);
        } catch (IOException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }

        return bitmap;
    }

    private void readLabels(final String assetFileName) {
        try {
            InputStream is = context.getAssets().open(assetFileName);
            try (BufferedReader br = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
                String readString;
                while ((readString = br.readLine()) != null) {
                    mLabels.add(readString);
                }
                br.close();
            } catch (IOException e) {
                Log.e(TAG, "readLabels: error ->" + e.toString());
            }
            is.close();
        } catch (IOException error) {
            Log.e(TAG, "Asset file doesn't exist: " + error.getMessage());
        }
    }

    private void showProcess(final long alreadyDownLength, final long totalLength, final int location) {
        double downDone = alreadyDownLength * 1.0 / M;
        double downTotal = totalLength * 1.0 / M;
        String downD = String.format(Locale.ENGLISH, "%.2f", downDone);
        String downT = String.format(Locale.ENGLISH, "%.2f", downTotal);

        String text = downD + "M" + "/" + downT + "M";
        Log.e(TAG, "string format:" + downD);
        updateButton(text, location);
        if (downD.equals(downT)) {
            updateButton("Download", location);
        }
    }

    private void updateButton(final String text, final int buttonSwitch) {
        JSONObject update = new JSONObject();
        activity.runOnUiThread(() -> {
            if (buttonSwitch == DOWNLOAD) {
                try {
                    update.putOpt("text", text);
                    promise.success(update);
                } catch (JSONException e) {
                    promise.error(e.getMessage());
                }
            }
        });
    }

    private void pictureAnalysis(final Bitmap bitmap, JSONObject params) {
        localModel = new MLCustomLocalModel.Factory(MODEL_NAME).setAssetPathFile(MODEL_FULL_NAME).create();
        remoteModel = new MLCustomRemoteModel.Factory(MODEL_NAME).create();
        downloadModels(MODEL_NAME, DOWNLOAD, params);
        MLLocalModelManager.getInstance()
            .isModelExist(remoteModel)
            .continueWithTask((Continuation<Boolean, Task<Void>>) task -> {
                if (!task.isSuccessful()) {
                    throw task.getException();
                }
                boolean isDownloaded = task.getResult();
                MLModelExecutorSettings settings;
                if (isDownloaded) {
                    settings = new Factory(remoteModel).create();
                } else {
                    settings = new Factory(localModel).create();
                }
                try {
                    final MLModelExecutor modelExecutor = MLModelExecutor.getInstance(settings);
                    executorImpl(modelExecutor, bitmap);
                } catch (MLException e) {
                    promise.error("modelExecuter :" + e.getMessage());
                }
                return null;
            });
    }

    private void executorImpl(final MLModelExecutor modelExecutor, Bitmap bitmap) {
        JSONObject custom = new JSONObject();
        final Bitmap inputBitmap = Bitmap.createScaledBitmap(bitmap, BITMAP_WIDTH, BITMAP_HEIGHT, true);
        int batchNum = 0;
        final byte[][][][] input = new byte[1][BITMAP_HEIGHT][BITMAP_WIDTH][3];
        Log.d(TAG, "interpret pre process");

        for (int i = 0; i < BITMAP_WIDTH; i++) {
            for (int j = 0; j < BITMAP_HEIGHT; j++) {
                int pixel = inputBitmap.getPixel(i, j);
                input[batchNum][j][i][0] = (byte) Color.red(pixel);
                input[batchNum][j][i][1] = (byte) Color.green(pixel);
                input[batchNum][j][i][2] = (byte) Color.blue(pixel);
            }
        }
        MLModelInputs inputs = null;
        try {
            inputs = new MLModelInputs.Factory().add(input).create();
        } catch (MLException e) {
            Log.e(TAG, "add inputs failed! " + e.getMessage());
        }

        MLModelInputOutputSettings inOutSettings = null;
        try {
            inOutSettings = new MLModelInputOutputSettings.Factory().setInputFormat(0, MLModelDataType.BYTE,
                    new int[] {1, 3, BITMAP_HEIGHT, BITMAP_WIDTH})
                .setOutputFormat(0, MLModelDataType.BYTE, new int[] {1, OUTPUT_SIZE})
                .create();
        } catch (MLException e) {
            Log.e(TAG, "set input output format failed! " + e.getMessage());
        }

        Log.d(TAG, "interpret start");
        this.mlModelExecutor = modelExecutor;
        modelExecutor.exec(inputs, inOutSettings).addOnSuccessListener(mlModelOutputs -> {
            try {
                byte[][] output = mlModelOutputs.getOutput(0);
                byte[] probabilities = output[0];
                float[] pro = new float[probabilities.length];
                for (int i = 0; i < pro.length; i++) {
                    pro[i] = probabilities[i] / 255f;
                }

                prepareResult(pro);

                custom.putOpt("result", result);
                promise.success(custom);

            } catch (IllegalArgumentException | JSONException e) {
                promise.error(e.getMessage());
            }

            try {
                modelExecutor.close();
            } catch (IOException ex) {
                promise.error(ex.getMessage());
            }
        }).addOnFailureListener(e -> {
            promise.error(e.getMessage());
            try {
                modelExecutor.close();
            } catch (IOException ex) {
                Log.e(TAG, "close failed! " + ex.getMessage());
                promise.error(ex.getMessage());
            }
        });
    }

    private void stopModel(final Promise promise) throws IOException {
        if (this.mlModelExecutor == null) {
            promise.error("Error");
        } else {
            this.mlModelExecutor.close();
            promise.success();
        }
    }

    private void downloadModels(String remoteModelName, final int location, JSONObject params) {
        final MLCustomRemoteModel customRemoteModel = new MLCustomRemoteModel.Factory(remoteModelName).create();
        if (isDownload) {
            JSONObject downloadSetting = params.optJSONObject("downloadStrategySetting");
            MLModelDownloadStrategy downloadStrategy;
            if (downloadSetting != null) {
                downloadStrategy = TextUtils.toObject(downloadSetting, MLModelDownloadStrategy.class);
            } else {
                downloadStrategy = new MLModelDownloadStrategy.Factory().needWifi()
                    .setRegion(MLModelDownloadStrategy.REGION_DR_CHINA)
                    .create();
            }
            final MLModelDownloadListener modelDownloadListener = (alreadyDownLength, totalLength) -> showProcess(
                alreadyDownLength, totalLength, location);
            MLLocalModelManager.getInstance().downloadModel(customRemoteModel, downloadStrategy, modelDownloadListener);
            promise.success("Succesful");
            isDownload = false;
        } else {
            final MLModelDownloadStrategy strategy = new MLModelDownloadStrategy.Factory().needWifi()
                .setRegion(MLModelDownloadStrategy.REGION_DR_CHINA)
                .create();
            final MLModelDownloadListener modelDownloadListener = (alreadyDownLength, totalLength) -> showProcess(
                alreadyDownLength, totalLength, location);
            MLLocalModelManager.getInstance().downloadModel(customRemoteModel, strategy, modelDownloadListener);
        }

    }

    private void prepareResult(float[] probabilities) {
        Map<String, Float> localResult = new HashMap<>();
        ValueComparator compare = new ValueComparator(localResult);
        for (int i = 0; i < OUTPUT_SIZE; i++) {
            localResult.put(mLabels.get(i), probabilities[i]);
        }
        result = new TreeMap<>(compare);
        result.putAll(localResult);

    }

    static class ValueComparator implements Comparator<String>, Serializable {
        private static final long serialVersionUID = 1L;

        Map<String, Float> base;

        ValueComparator(Map<String, Float> base) {
            this.base = base;
        }

        @Override
        public int compare(String o1, String o2) {
            if (base.get(o1) >= base.get(o2)) {
                return -1;
            } else {
                return 1;
            }
        }
    }
}
