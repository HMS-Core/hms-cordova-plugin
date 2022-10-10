/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.health.modules;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.health.basef.CordovaBaseModule;
import com.huawei.hms.cordova.health.basef.CordovaMethod;
import com.huawei.hms.cordova.health.basef.HMSLog;
import com.huawei.hms.cordova.health.basef.handler.CorPack;
import com.huawei.hms.cordova.health.basef.handler.Promise;
import com.huawei.hms.cordova.health.utils.Utils;
import com.huawei.hms.hihealth.HuaweiHiHealth;
import com.huawei.hms.hihealth.data.ScopeLangItem;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class ConsentsController extends CordovaBaseModule {
    private String TAG = ConsentsController.class.getSimpleName();

    private com.huawei.hms.hihealth.ConsentsController consentsController;

    private Activity activity;

    private Context context;

    public ConsentsController(Activity activity, Context context) {
        this.activity = activity;
        this.context = context;
        consentsController = HuaweiHiHealth.getConsentsController(activity);
    }

    @HMSLog
    @CordovaMethod
    public void getPermissions(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);

        String lang = jsonObject.getString("language");
        String appId = jsonObject.getString("appId");

        Task<ScopeLangItem> task = consentsController.get(lang, appId);

        task.addOnSuccessListener(result -> {
            Log.i(TAG, "getAppScopes success");
            promise.success(Utils.getJSONFromScopeLangItem(result));
        }).addOnFailureListener(e -> {
            Log.e(TAG, "getAppScopes exception");
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    @Deprecated
    public void revokeAll(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        String appId = args.getString(0);

        Task<Void> task = consentsController.revoke(appId);
        task.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "revokeApp success");
            promise.success();
        }).addOnFailureListener(e -> {
            Log.e(TAG, "revokeApp exception");
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    @Deprecated
    public void revoke(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);
        JSONArray scopes = jsonObject.getJSONArray("scopes");
        String appId = jsonObject.getString("appId");

        ArrayList<String> list = new ArrayList<>();
        int len = scopes.length();
        for (int i = 0; i < len; i++) {
            list.add(scopes.get(i).toString());
        }

        Task<Void> task = consentsController.revoke(appId, list);
        task.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "revokeScopes success");
            promise.success();
        }).addOnFailureListener(e -> {
            Log.e(TAG, "revokeApp exception");
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    public void cancelAuthorization(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject jsonObject = args.getJSONObject(0);
        JSONArray scopes = jsonObject.getJSONArray("scopes");
        String appId = jsonObject.getString("appId");

        ArrayList<String> list = new ArrayList<>();
        int len = scopes.length();
        for (int i = 0; i < len; i++) {
            list.add(scopes.get(i).toString());
        }

        Task<Void> task = consentsController.cancelAuthorization(appId, list);
        task.addOnSuccessListener(aVoid -> {
            Log.i(TAG, "cancelAuthorization success");
            promise.success();
        }).addOnFailureListener(e -> {
            Log.e(TAG, "cancelAuthorization exception");
            promise.error(e.getMessage());
        });
    }

    @HMSLog
    @CordovaMethod
    public void cancelAuthorizationAll(final CorPack corPack, JSONArray args, final Promise promise)
            throws JSONException {

        JSONObject jsonObject = args.getJSONObject(0);
        boolean deleteData = jsonObject.getBoolean("deleteData");

        Task<Void> task = consentsController.cancelAuthorization(deleteData);
        task.addOnSuccessListener(new OnSuccessListener<Void>() {
            @Override
            public void onSuccess(Void aVoid) {
                Log.i(TAG, "cancelAuthorization success");
                if (deleteData) {
                    Log.i(TAG, "clearUserData success");
                }
                promise.success();
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                Log.e(TAG, "cancelAuthorization exception");
                promise.error("Error");
            }
        });

    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent intent) {
    }

}
