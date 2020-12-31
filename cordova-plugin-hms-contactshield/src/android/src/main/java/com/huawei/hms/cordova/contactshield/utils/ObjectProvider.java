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
package com.huawei.hms.cordova.contactshield.utils;

import android.app.PendingIntent;
import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.util.Log;

import com.google.gson.Gson;
import com.huawei.hms.contactshield.ContactShieldSetting;
import com.huawei.hms.contactshield.DiagnosisConfiguration;
import com.huawei.hms.cordova.contactshield.constants.IntentAction;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ObjectProvider {
    private static final String TAG = ObjectProvider.class.getSimpleName();

    public static ContactShieldSetting getContactShieldSetting(int incubationPeriod) {
        return new ContactShieldSetting.Builder().setIncubationPeriod(incubationPeriod).build();
    }

    public static DiagnosisConfiguration getDiagnosisConfiguration(final JSONObject diagnosisConfigJson, final Gson gson) {
        return gson.fromJson(diagnosisConfigJson.toString(), DiagnosisConfiguration.class);
    }

    public static List<File> getFileList(final ContentResolver resolver, final JSONArray filePaths) throws JSONException, IOException {
        if (filePaths != null) {
            final List<File> files = new ArrayList<>();
            for (int i = 0; i < filePaths.length(); i++) {
                String filePath = filePaths.getString(i);
                if (filePath.startsWith("content://")) {
                    InputStream is = null;
                    FileOutputStream os = null;
                    try {
                        Uri uri = Uri.parse(filePaths.getString(i));
                        is = resolver.openInputStream(uri);
                        File tempFile = File.createTempFile("contact_shield_", null);
                        os = new FileOutputStream(tempFile);
                        copy(is, os);
                        files.add(tempFile);
                    } catch (FileNotFoundException ex) {
                        Log.i(TAG, ex.toString());
                    } catch (IOException ex) {
                        Log.i(TAG, ex.toString());
                    } catch (Exception ex) {
                        Log.i(TAG, ex.toString());
                    } finally {
                        if (os != null) {
                            try {
                                os.close();
                            } catch (IOException ex) {
                                Log.i(TAG, ex.toString());
                            }
                        }
                        if (is != null) {
                            try {
                                is.close();
                            } catch (IOException ex) {
                                Log.i(TAG, ex.toString());
                            }
                        }
                    }
                } else {
                    final File file = new File(filePaths.getString(i));
                    files.add(file);
                }
            }
            return files;
        }
        return Collections.emptyList();
    }

    public static void copy(InputStream source, OutputStream target) throws IOException {
        byte[] buf = new byte[8192];
        int length;
        while ((length = source.read(buf)) > 0) {
            target.write(buf, 0, length);
        }
    }

    public static PendingIntent getPendingIntent(final Context context, final String action, final int requestCode) {
        final Intent intent = new Intent(action).setPackage(context.getPackageName());
        return PendingIntent.getBroadcast(context, requestCode, intent, PendingIntent.FLAG_UPDATE_CURRENT);
    }

    public static IntentFilter getIntentFilter() {
        final IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction(IntentAction.CHECK_CONTACT_STATUS_OLD);
        intentFilter.addAction(IntentAction.CHECK_CONTACT_STATUS);
        return intentFilter;
    }
}
