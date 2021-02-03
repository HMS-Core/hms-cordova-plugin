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

package com.huawei.hms.cordova.site.basef.handler;

import static android.os.Build.DEVICE;

import android.content.Context;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.util.Log;

import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.support.hianalytics.HiAnalyticsUtils;
import com.huawei.hms.utils.HMSBIInitializer;

import java.lang.ref.WeakReference;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

final class HMSLogger {
    private static final String TAG = "HMSLogger";

    private final String version;
    private final String service;

    private static final String SUCCESS = "0";
    private static final String UNKNOWN = "UNKNOWN";
    private static final String NOT_AVAILABLE = "NOT_AVAILABLE";

    private static final String SINGLE_EVENT_ID = "60000";
    private static final String PERIODIC_EVENT_ID = "60001";

    private static final String NETWORK_TYPE_WIFI = "WIFI";

    private static volatile HMSLogger instance;

    private final WeakReference<Context> weakContext;
    private final HiAnalyticsUtils hiAnalyticsUtils;
    private final ConnectivityManager connectivityManager;

    private final Map<String, Object> singleEventMap = new HashMap<>();
    private final Map<String, Object> periodicEventMap = new HashMap<>();
    private final Map<String, Long> allCountMap = new HashMap<>();
    private final Map<String, Long> failCountMap = new HashMap<>();
    private final Map<String, Long> startTimeMap = new HashMap<>();
    private final Map<String, Long> firstReceiveTimeMap = new HashMap<>();
    private final Map<String, Long> lastReceiveTimeMap = new HashMap<>();
    private final Map<String, Map<String, Long>> resultCodeCountMap = new HashMap<>();
    private final Map<Integer, String> networkTypeMap = createNetworkTypeMap();

    private boolean isEnabled = false;

    private HMSLogger(final Context context, String service, String version) {
        weakContext = new WeakReference<>(context);
        this.service = service;
        this.version = version;
        hiAnalyticsUtils = HiAnalyticsUtils.getInstance();
        connectivityManager = objectCast(context.getSystemService(Context.CONNECTIVITY_SERVICE),
                ConnectivityManager.class);
        HiAnalyticsUtils.getInstance().enableLog();
        initHMSBI(HMSBIInitializer.getInstance(context));
        setupEventMap(singleEventMap);
        setupEventMap(periodicEventMap);


        enableLogger();
    }

    static synchronized HMSLogger getInstance(final Context context, String service, String version){
        if (instance == null) {
            synchronized (HMSLogger.class) {
                if (instance == null) {
                    instance = new HMSLogger(context, service, version);
                }
            }
        }
        return instance;
    }

    private Context getContext() {
        return weakContext.get();
    }

    synchronized void enableLogger() {
        isEnabled = true;
        Log.d(TAG, "HMS Plugin Dotting is Enabled!");
    }

    synchronized void disableLogger() {
        isEnabled = false;
        Log.d(TAG, "HMS Plugin Dotting is Disabled!");
    }

    synchronized void startMethodExecutionTimer(final String methodName) {
        startTimeMap.put(methodName, System.currentTimeMillis());
    }

    synchronized void sendSingleEvent(final String methodName) {
        sendEvent(SINGLE_EVENT_ID, methodName, SUCCESS);
    }

    synchronized void sendSingleEvent(final String methodName, final String errorCode) {
        sendEvent(SINGLE_EVENT_ID, methodName, errorCode);
    }

    synchronized void sendPeriodicEvent(final String methodName) {
        sendEvent(PERIODIC_EVENT_ID, methodName, SUCCESS);
    }

    synchronized void sendPeriodicEvent(final String methodName, final String errorCode) {
        sendEvent(PERIODIC_EVENT_ID, methodName, errorCode);
    }

    private void initHMSBI(final HMSBIInitializer initializer) {
        if (!initializer.isInit()) {
            initializer.initBI();
        }
    }

    private synchronized void sendEvent(final String eventId, final String methodName, final String resultCode) {
        if (isEnabled) {
            final long currentTime = System.currentTimeMillis();

            if (eventId.equals(SINGLE_EVENT_ID)) {
                putToSingleEventMap(methodName, resultCode, currentTime);
                hiAnalyticsUtils.onNewEvent(getContext(), SINGLE_EVENT_ID, singleEventMap);

                Log.d(TAG, "singleEventMap -> " + singleEventMap);
            } else {
                putToPeriodicEventMap(methodName, resultCode, currentTime);
                hiAnalyticsUtils.onNewEvent(getContext(), PERIODIC_EVENT_ID, periodicEventMap);

                Log.d(TAG, "periodicEventMap -> " + periodicEventMap);
            }
        }
    }

    private String getAppId() {
        try {
            return AGConnectServicesConfig.fromContext(getContext()).getString("client/app_id");
        } catch (final NullPointerException e) {
            Log.d(TAG, "AgConnect is not found. Setting appId value to " + NOT_AVAILABLE);
        }
        return NOT_AVAILABLE;
    }

    private String getAppVersionName(final String packageName) {
        try {
            return getContext().getPackageManager().getPackageInfo(packageName, 0).versionName;
        } catch (final PackageManager.NameNotFoundException e) {
            Log.e(TAG, "getAppVersionName ->  Could not get appVersionName!");
            return NOT_AVAILABLE;
        }
    }

    private String getNetworkType() {
        if (connectivityManager != null) {
            final NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();
            if (networkInfo != null && networkInfo.isConnected()) {
                final int networkType = networkInfo.getType();
                if (ConnectivityManager.TYPE_WIFI == networkType) {
                    return NETWORK_TYPE_WIFI;
                } else if (ConnectivityManager.TYPE_MOBILE == networkType) {
                    final int networkSubType = networkInfo.getSubtype();
                    return getOrDefault(networkTypeMap, networkSubType, UNKNOWN);
                } else {
                    return UNKNOWN;
                }
            } else {
                return NOT_AVAILABLE;
            }
        } else {
            return NOT_AVAILABLE;
        }
    }

    private void setupEventMap(final Map<String, Object> map) {
        map.put("version", version);
        map.put("service", service);
        map.put("appid", getAppId());
        map.put("package", getContext().getPackageName());
        map.put("cpAppVersion", getAppVersionName(getContext().getPackageName()));
        map.put("model", DEVICE);
    }

    private void putToSingleEventMap(final String methodName, final String resultCode, final long currentTime) {
        final long startTime = getOrDefault(startTimeMap, methodName, currentTime);
        final int costTime = (int) (currentTime - startTime);
        singleEventMap.put("apiName", methodName);
        singleEventMap.put("result", resultCode);
        singleEventMap.put("callTime", currentTime);
        singleEventMap.put("costTime", costTime);
        singleEventMap.put("networkType", getNetworkType());
    }

    private void putToPeriodicEventMap(final String methodName, final String resultCode, final long currentTime) {
        increaseResultCodeCount(methodName, resultCode);
        increaseMapValue(methodName, allCountMap);

        if (!resultCode.equals(SUCCESS)) {
            increaseMapValue(methodName, failCountMap);
        }

        final long firstReceiveTime = getOrDefault(firstReceiveTimeMap, methodName, currentTime);
        periodicEventMap.put("callTime", firstReceiveTime);

        final long lastReceiveTime = getOrDefault(lastReceiveTimeMap, methodName, currentTime);
        final int costTime = (int) (currentTime - lastReceiveTime);
        periodicEventMap.put("costTime", costTime);

        periodicEventMap.put("apiName", methodName);
        periodicEventMap.put("result", resultCodeCountMap.get(methodName));

        final long allCount = getOrDefault(allCountMap, methodName, 0L);
        periodicEventMap.put("allCnt", allCount);

        final long failCount = getOrDefault(failCountMap, methodName, 0L);
        periodicEventMap.put("failCnt", failCount);

        periodicEventMap.put("lastCallTime", currentTime);
        periodicEventMap.put("networkType", getNetworkType());

        putIfAbsent(firstReceiveTimeMap, methodName, currentTime);
        lastReceiveTimeMap.put(methodName, currentTime);
    }

    private Map<Integer, String> createNetworkTypeMap() {
        final Map<Integer, String> map = new HashMap<>();

        map.put(0, UNKNOWN);
        map.put(1, "2G");
        map.put(2, "2G");
        map.put(3, "3G");
        map.put(4, "3G");
        map.put(5, "3G");
        map.put(6, "3G");
        map.put(7, "2G");
        map.put(8, "3G");
        map.put(9, "3G");
        map.put(10, "3G");
        map.put(11, "2G");
        map.put(12, "3G");
        map.put(13, "4G");
        map.put(14, "3G");
        map.put(15, "3G");
        map.put(16, "2G");
        map.put(17, "3G");
        map.put(18, "3G");
        map.put(19, "4G");
        map.put(20, "5G");

        return Collections.unmodifiableMap(map);
    }

    private void increaseResultCodeCount(final String methodName, final String resultCode) {
        final Map<String, Long> map = getOrDefault(resultCodeCountMap, methodName, new HashMap<>());

        increaseMapValue(resultCode, map);
        resultCodeCountMap.put(methodName, map);
    }

    private void increaseMapValue(final String key, final Map<String, Long> map) {
        map.put(key, getOrDefault(map, key, 0L) + 1);
    }

    private <K, V> V getOrDefault(final Map<K, V> map, final K key, final V defaultValue) {
        return map.containsKey(key) ? map.get(key) : defaultValue;
    }

    private <K, V> void putIfAbsent(final Map<K, V> map, final K key, final V value) {
        if (!map.containsKey(key)) {
            map.put(key, value);
        }
    }

    private <S, D> D objectCast(final S source, final Class<D> clazz) {
        return clazz.cast(source);
    }
}
