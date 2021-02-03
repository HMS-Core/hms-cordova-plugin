/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

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
package com.huawei.hms.cordova.analytics;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.analytics.type.ReportPolicy;
import com.huawei.hms.cordova.analytics.basef.CordovaBaseModule;
import com.huawei.hms.cordova.analytics.basef.CordovaMethod;
import com.huawei.hms.cordova.analytics.basef.HMSLog;
import com.huawei.hms.cordova.analytics.basef.handler.CorPack;
import com.huawei.hms.cordova.analytics.basef.handler.Promise;
import com.huawei.hms.cordova.analytics.presenter.HMSAnalyticsContract;
import com.huawei.hms.cordova.analytics.viewmodel.HMSAnalyticsViewModel;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.ref.WeakReference;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class HMSAnalyticsModule extends CordovaBaseModule {
    private static final String TAG = HMSAnalyticsModule.class.getSimpleName();

    //Weak Context Instance
    private final WeakReference<Context> weakContext;
    //ViewModel instance
    private final HMSAnalyticsContract.Presenter viewModel;

    public HMSAnalyticsModule(Context context) {
        this.weakContext = new WeakReference<>(context);
        this.viewModel = new HMSAnalyticsViewModel(getContext());
    }

    private Context getContext() {
        return weakContext.get();
    }

    @CordovaMethod
    @HMSLog
    public void setAnalyticsEnabled(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setAnalyticsEnabled(params.getBoolean("enabled"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setUserId(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        if (!params.isNull("userId")) {
            viewModel.setUserId(params.getString("userId"));
        } else {
            viewModel.setUserId(null);
        }
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setUserProfile(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setUserProfile(params.getString("name"), params.getString("value"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void deleteUserProfile(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setUserProfile(params.getString("name"), null);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setPushToken(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setPushToken(params.getString("token"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setMinActivitySessions(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setMinActivitySessions(params.getLong("milliseconds"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setSessionDuration(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setSessionDuration(params.getLong("milliseconds"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void onEvent(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.onEvent(params.getString("eventId"), jsonToBundle(params.getJSONObject("params")));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void clearCachedData(final CorPack corPack, JSONArray args, final Promise promise) {
        viewModel.clearCachedData();
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getAAID(final CorPack corPack, JSONArray args, final Promise promise) {
        viewModel.getAAID(new HMSAnalyticsModule.HMSAnalyticsResultHandler<>(promise));
    }

    @CordovaMethod
    @HMSLog
    public void getUserProfiles(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.getUserProfiles(new HMSAnalyticsModule.HMSAnalyticsResultHandler<>(promise), params.getBoolean("predefined"));
    }

    @CordovaMethod
    @HMSLog
    public void pageStart(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.pageStart(params.getString("pageName"), params.getString("pageClassOverride"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void pageEnd(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.pageEnd(params.getString("pageName"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void setReportPolicies(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setReportPolicies(jsonToSetReportPolicy(params.getJSONObject("reportPolicies")));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void getReportPolicyThreshold(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.getReportPolicyThreshold(new HMSAnalyticsModule.HMSAnalyticsResultHandler<>(promise), getReportPolicyType(params.getString("reportPolicyType")));
    }

    @CordovaMethod
    @HMSLog
    public void setRestrictionEnabled(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.setRestrictionEnabled(params.getBoolean("isEnabled"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void isRestrictionEnabled(final CorPack corPack, JSONArray args, final Promise promise) {
        viewModel.isRestrictionEnabled(new HMSAnalyticsModule.HMSAnalyticsResultHandler<>(promise));
    }

    @CordovaMethod
    @HMSLog
    public void enableLog(final CorPack corPack, JSONArray args, final Promise promise) throws JSONException {
        JSONObject params = args.getJSONObject(0);
        viewModel.enableLog(params.getInt("logLevel"));
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void enableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.enableLogger();
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void disableLogger(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.disableLogger();
        promise.success();
    }
    /* Private Inner Class */

    /**
     * HMSAnalyticsResultHandler static nested class is a helper class for reaching {@link HMSAnalyticsContract.ResultListener}.
     */
    private static final class HMSAnalyticsResultHandler<Object> implements HMSAnalyticsContract.ResultListener<Object> {

        private final Promise promise;

        HMSAnalyticsResultHandler(final Promise promise) {
            this.promise = promise;
        }

        @Override
        public void onSuccess(Object result) {
            if (result instanceof JSONObject) {
                promise.success((JSONObject) result);
            } else if (result instanceof String) {
                promise.success((String) result);
            } else if (result instanceof Boolean) {
                promise.success((Boolean) result);
            } else if (result instanceof Long) {
                promise.success((Long) result);
            } else {
                promise.success();
            }
        }

        @Override
        public void onFail(Exception exception) {
            promise.error(exception.getMessage());
        }
    }

    private Set<ReportPolicy> jsonToSetReportPolicy(JSONObject reportPolicies) throws JSONException {
        Set<ReportPolicy> policies = new HashSet<>();
        if (reportPolicies.has("onScheduledTimePolicy")) {
            ReportPolicy rp = ReportPolicy.ON_SCHEDULED_TIME_POLICY;
            rp.setThreshold(reportPolicies.getLong("onScheduledTimePolicy"));
            policies.add(rp);
        }
        if (reportPolicies.has("onAppLaunchPolicy") && reportPolicies.getBoolean("onAppLaunchPolicy")) {
            policies.add(ReportPolicy.ON_APP_LAUNCH_POLICY);
        }
        if (reportPolicies.has("onMoveBackgroundPolicy") && reportPolicies.getBoolean("onMoveBackgroundPolicy")) {
            policies.add(ReportPolicy.ON_MOVE_BACKGROUND_POLICY);
        }
        if (reportPolicies.has("onCacheThresholdPolicy")) {
            ReportPolicy rp = ReportPolicy.ON_CACHE_THRESHOLD_POLICY;
            rp.setThreshold(reportPolicies.getLong("onCacheThresholdPolicy"));
            policies.add(rp);
        }
        return policies;
    }

    private ReportPolicy getReportPolicyType(String reportPolicyType) {
        return ReportPolicy.valueOf(reportPolicyType);
    }

    private Bundle jsonToBundle(JSONObject jsonObject) throws JSONException {
        Bundle bundle = new Bundle();
        Iterator<String> iterator = jsonObject.keys();
        while (iterator.hasNext()) {
            String key = iterator.next();
            Object val = jsonObject.get(key);
            if (val instanceof Integer) {
                bundle.putInt(key, (Integer) val);
            } else if (val instanceof Double) {
                bundle.putDouble(key, (Double) val);
            } else if (val instanceof Long) {
                bundle.putLong(key, (Long) val);
            } else if (val instanceof String) {
                bundle.putString(key, (String) val);
            } else if (val instanceof Boolean) {
                bundle.putBoolean(key, (Boolean) val);
            } else {
                Log.e(TAG, "unable to transform json to bundle " + key);
            }
        }
        return bundle;
    }
}
