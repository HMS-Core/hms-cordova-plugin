package com.huawei.hms.cordova.analytics;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;
import com.huawei.hms.analytics.HiAnalyticsTools;
import com.huawei.hms.cordova.analytics.logger.HMSLogger;

import org.apache.cordova.CallbackContext;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Iterator;
import java.util.Map;

public class HMSAnalyticsWrapper {
    private String TAG = HMSAnalyticsWrapper.class.getSimpleName();

    private HiAnalyticsInstance analyticsInstance;

    private Context context;

    public HMSAnalyticsWrapper(Context context) {
        this.context = context;
        this.analyticsInstance = HiAnalytics.getInstance(context);
    }

    public void clearCachedData(CallbackContext cb) {
        analyticsInstance.clearCachedData();
        cb.success();
    }

    public void setAnalyticsEnabled(JSONObject params, CallbackContext cb) throws JSONException {
        boolean enabled = params.getBoolean("enabled");
        analyticsInstance.setAnalyticsEnabled(enabled);
        cb.success();
    }

    public void setUserId(JSONObject params, CallbackContext cb) throws JSONException {
        String userId = params.getString("userId");
        analyticsInstance.setUserId(userId);
        cb.success();
    }

    public void getAAID(CallbackContext cb) {
        analyticsInstance.getAAID().addOnSuccessListener(aaid -> {
            HMSLogger.getInstance(context).sendSingleEvent("getAAID");
            cb.success(aaid);
        }).addOnFailureListener(ex -> {
            HMSLogger.getInstance(context).sendSingleEvent("getAAID", "-1");
            cb.error(ex.getMessage());
        });
    }

    public void getUserProfiles(JSONObject params, CallbackContext cb) throws JSONException {
        boolean predefined = params.getBoolean("predefined");
        Map<String, String> userProfiles = analyticsInstance.getUserProfiles(predefined);
        cb.success(new JSONObject(userProfiles));
    }

    public void onEvent(JSONObject params, CallbackContext cb) throws JSONException {
        String eventId = params.getString("eventId");
        JSONObject val = params.getJSONObject("value");
        Bundle bundle = jsonToBundle(val);
        analyticsInstance.onEvent(eventId, bundle);
        cb.success();
    }

    private Bundle jsonToBundle(JSONObject jsonObject) throws JSONException {
        Bundle bundle = new Bundle();
        Iterator<String> iterator = jsonObject.keys();
        while (iterator.hasNext()) {
            String key = iterator.next();
            String val = jsonObject.getString(key);

            bundle.putString(key, val);
        }
        return bundle;
    }

    public void pageEnd(JSONObject params, CallbackContext cb) throws JSONException {
        String pageName = params.getString("pageName");
        analyticsInstance.pageEnd(pageName);
        cb.success();
    }

    public void pageStart(JSONObject params, CallbackContext cb) throws JSONException {
        String pageName = params.getString("pageName");
        String pageClassOverride = params.getString("pageClassOverride");
        analyticsInstance.pageStart(pageName, pageClassOverride);
        cb.success();
    }

    public void setMinActivitySessions(JSONObject params, CallbackContext cb) throws JSONException {
        long milliseconds = params.getLong("interval");
        analyticsInstance.setMinActivitySessions(milliseconds);
        cb.success();
    }

    public void setPushToken(JSONObject params, CallbackContext cb) throws JSONException {
        String token = params.getString("token");
        analyticsInstance.setPushToken(token);
        cb.success();
    }

    public void setSessionDuration(JSONObject params, CallbackContext cb) throws JSONException {
        long milliseconds = params.getLong("duration");
        analyticsInstance.setSessionDuration(milliseconds);
        cb.success();
    }

    public void setUserProfile(JSONObject params, CallbackContext cb) throws JSONException {
        String key = params.getString("key");
        String value = params.getString("value");
        analyticsInstance.setUserProfile(key, value);
        cb.success();
    }

    //---------------------------------------------------------------------------------------------
    // HiAnalyticsTools
    //---------------------------------------------------------------------------------------------

    public void enableLog(CallbackContext cb) {
        HiAnalyticsTools.enableLog();
        cb.success();
    }

    public void enableLogWithLevel(JSONObject params, CallbackContext cb) throws JSONException {
        String level = params.getString("logLevel");
        Integer intValueOfLevel;

        try {
            intValueOfLevel = LogLevel.valueOf(level).intValue;
        } catch (IllegalArgumentException ex) {
            Log.e(TAG, "Invalid log level. level = " + level);
            cb.error("Invalid log level. level = " + level);
            return;
        }
        HiAnalyticsTools.enableLog(intValueOfLevel);
        cb.success();
    }

    private enum LogLevel {
        DEBUG(3), INFO(4), WARN(5), ERROR(6);
        int intValue;
        LogLevel(int logLevel) {
            this.intValue = logLevel;
        }
    }

}
