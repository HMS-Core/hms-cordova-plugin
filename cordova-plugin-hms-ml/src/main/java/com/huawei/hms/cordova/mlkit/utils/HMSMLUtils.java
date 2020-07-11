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

package com.huawei.hms.cordova.mlkit.utils;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Point;
import android.graphics.Rect;
import android.net.Uri;
import android.util.Base64;
import android.util.Log;

import com.google.gson.Gson;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.objects.MLObject;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class HMSMLUtils {
    private static String TAG = HMSMLUtils.class.getSimpleName();

    private static Gson gson = new Gson();

    private HMSMLUtils() {
    }

    public static <T> String toJSON(T obj) {
        return gson.toJson(obj);
    }

    public static String bitmapToBase64(Bitmap bitmap) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
        byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }

    public static List<String> jsonArrayToList(JSONObject jsonObject) throws JSONException {
        JSONArray languageArray = jsonObject.optJSONArray("languageList");
        List<String> languageList = new ArrayList<>(languageArray.length());
        for (int i = 0; i < languageArray.length(); i++) {
            languageList.add(languageArray.getString(i));
        }
        return languageList;
    }

    public static <T> JSONArray listToJSONArray(List<T> list, Mapper<T, JSONObject> mapper) throws JSONException {
        JSONArray array = new JSONArray();
        for (T item : list) {
            array.put(mapper.map(item));
        }
        return array;
    }

    public static MLFrame getFrame(Context context, JSONObject json, CallbackContext callbackContext) {
        try {
            if (json.has("imagePath")) {
                Bitmap bitmap = BitmapFactory.decodeFile(json.optString("imagePath"));
                return MLFrame.fromBitmap(bitmap);

            } else if (json.has("bitmap")) {
                byte[] cleanImage = Base64.decode(json.optString("image")
                        .replace("data:image/png;base64,", "")
                        .replace("data:image/jpeg;base64,", ""), Base64.DEFAULT);
                return MLFrame.fromBitmap(BitmapFactory.decodeByteArray(cleanImage, 0, cleanImage.length));
            } else if (json.has("filePath")) {
                String filePath = json.getString("filePath");
                Uri uri = Uri.parse(filePath);
                if (!Uri.EMPTY.equals(uri)) {
                    return MLFrame.fromFilePath(context, uri);
                }
            }
        } catch (RuntimeException e) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            Log.e(TAG, "error" + e.getMessage());
            return null;
        } catch (Exception e) {
            Log.e(TAG, "error" + e.getMessage());
        }
        return null;
    }


}