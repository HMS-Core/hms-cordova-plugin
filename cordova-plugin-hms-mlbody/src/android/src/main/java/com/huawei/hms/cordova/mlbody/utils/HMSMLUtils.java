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

package com.huawei.hms.cordova.mlbody.utils;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;

import com.huawei.hms.mlsdk.common.MLFrame;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

public class HMSMLUtils {
    private static String TAG = HMSMLUtils.class.getSimpleName();

    private HMSMLUtils() {
    }

    public static String bitmapToBase64(final Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }

    public static <T> JSONArray listToJSONArray(final List<T> list, final Mapper<T, JSONObject> mapper)
        throws JSONException {
        JSONArray array = new JSONArray();
        for (T item : list) {
            array.put(mapper.map(item));
        }
        return array;
    }

    public static MLFrame getFrame(final Context context, final JSONObject json) {
        try {
            if (json.has("filePath")) {
                String filePath = json.getString("filePath");
                Uri uri = Uri.parse(filePath);
                if (!Uri.EMPTY.equals(uri)) {
                    Bitmap bitmap = MediaStore.Images.Media.getBitmap(context.getContentResolver(), uri);
                    return new MLFrame.Creator().setBitmap(bitmap).create();
                }
            } else {
                Log.e(TAG, "getFrame: error -> invalid action");
            }
        } catch (IOException | JSONException e) {
            Log.e(TAG, "getFrame: error -> " + e.toString());
        }
        return null;
    }

    public static MLFrame getFrame2(final Context context, final JSONObject json) {
        try {
            if (json.has("filePath2")) {
                String filePath = json.getString("filePath2");
                Uri uriPath = Uri.parse(filePath);
                if (!Uri.EMPTY.equals(uriPath)) {
                    return MLFrame.fromFilePath(context, uriPath);
                }
            } else {
                Log.e(TAG, "getSecondFrame: error -> invalid action");
            }
        } catch (IOException | JSONException e) {
            Log.e(TAG, "getFrame: error -> " + e.toString());
        }
        return null;
    }

    public static int[] constructObjectToIntArray(JSONObject json) {

        int[] intArray = new int[json.length()];
        int i = 0;
        Iterator<String> keys = json.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            int intKey = Integer.parseInt(key);
            intArray[i] = intKey;
            i++;
        }
        return intArray;
    }

    public static String[] constructObjectToStringArray(JSONObject json) throws JSONException {

        String[] stringArray = new String[json.length()];
        int i = 0;
        Iterator<String> keys = json.keys();
        while (keys.hasNext()) {
            String key = keys.next();
            String value = json.getString(key);
            stringArray[i] = value;
            i++;
        }
        return stringArray;
    }

    public static int[] jsonArrayToArray(JSONArray jsonArray) throws JSONException {
        int[] array = new int[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++) {
            Object value = jsonArray.get(i);
            if (value instanceof JSONArray) {
                value = jsonArrayToArray((JSONArray) value);
            }
            array[i] = (int) value;
        }
        return array;
    }
}
