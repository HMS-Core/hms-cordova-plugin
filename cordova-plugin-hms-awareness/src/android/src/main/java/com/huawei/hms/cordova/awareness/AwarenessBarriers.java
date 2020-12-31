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


package com.huawei.hms.cordova.awareness;

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;
import android.os.Build;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.cordova.awareness.backend.helpers.Pair;
import com.huawei.hms.cordova.awareness.backend.providers.BarrierUtils;
import com.huawei.hms.cordova.awareness.backend.utils.JSONUtils;
import com.huawei.hms.cordova.awareness.basef.CordovaBaseModule;
import com.huawei.hms.cordova.awareness.basef.CordovaMethod;
import com.huawei.hms.cordova.awareness.basef.HMSLog;
import com.huawei.hms.cordova.awareness.basef.handler.CorPack;
import com.huawei.hms.cordova.awareness.basef.handler.Promise;
import com.huawei.hms.kit.awareness.Awareness;
import com.huawei.hms.kit.awareness.BarrierClient;
import com.huawei.hms.kit.awareness.barrier.AwarenessBarrier;
import com.huawei.hms.kit.awareness.barrier.BarrierQueryRequest;
import com.huawei.hms.kit.awareness.barrier.BarrierQueryResponse;
import com.huawei.hms.kit.awareness.barrier.BarrierStatus;
import com.huawei.hms.kit.awareness.barrier.BarrierStatusMap;

import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

public class AwarenessBarriers extends CordovaBaseModule {
    private final String TAG = AwarenessBarriers.class.getName();
    private final BarrierClient barrierClient;

    private Context context;
    private Promise promise;
    private String backgroundFileName = null;

    private com.huawei.hms.kit.awareness.barrier.AwarenessBarrier awarenessBarrier;
    private BarrierReceiver mBarrierReceiver;
    private Pair<Integer, PendingIntent> intentData;

    private Map<String, Integer> barrierLabelRequests;

    AwarenessBarriers(Context context) {
        this.context = context;
        this.barrierLabelRequests = new HashMap<>();
        barrierClient = Awareness.getBarrierClient(context);
    }

    @CordovaMethod
    @HMSLog
    public void setBackgroundFile(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.backgroundFileName = args.getString(0);
        promise.success();
    }

    @CordovaMethod
    @HMSLog
    public void queryBarriersWithBarrierKeys(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String[] barrierLabels = JSONUtils.getBarrierLabels(args.getJSONArray(0), promise);
        final BarrierQueryRequest barrierQueryRequest = BarrierQueryRequest.forBarriers(barrierLabels);

        barrierClient.queryBarriers(barrierQueryRequest)
                .addOnSuccessListener(queryResponse -> promise.success(JSONUtils.barrierStatusMapToJSONObject(queryResponse)))
                .addOnFailureListener(e -> promise.error(e.toString()));
    }

    @CordovaMethod
    @HMSLog
    public void queryBarriersWithAllBarriers(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final BarrierQueryRequest barrierQueryRequest = BarrierQueryRequest.all();

        barrierClient.queryBarriers(barrierQueryRequest)
                .addOnSuccessListener(queryResponse -> promise.success(JSONUtils.barrierStatusMapToJSONObject(queryResponse)))
                .addOnFailureListener(e -> promise.error(e.toString()));
    }


    @CordovaMethod
    @HMSLog
    public void barrierUpdateRequestForBarriers(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String[] barrierLabels = JSONUtils.getBarrierLabels(args.getJSONArray(0), promise);
        BarrierQueryRequest.forBarriers(barrierLabels);
        promise.success();
    }

    @SuppressWarnings("ResultOfMethodCallIgnored")
    @CordovaMethod
    @HMSLog
    public void barrierUpdateRequestForAllBarriers(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        BarrierQueryRequest.all();
        promise.success();
    }


    @CordovaMethod
    @HMSLog
    public void addHeadsetBarrierKeeping(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addHeadsetBarrierKeepingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addHeadsetBarrierConnecting(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addHeadsetBarrierConnectingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addHeadsetBarrierDisconnecting(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addHeadsetBarrierDisconnectingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addAmbientLightBarrierRange(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addAmbientLightBarrierRangeUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addAmbientLightBarrierAbove(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addAmbientLightBarrierAboveUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addAmbientLightBarrierBelow(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addAmbientLightBarrierBelowUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addWifiBarrierKeeping(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addWifiBarrierKeepingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addWifiBarrierConnecting(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addWifiBarrierConnectingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addWifiBarrierDisconnecting(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addWifiBarrierDisconnectingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addWifiBarrierEnabling(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addWifiBarrierEnablingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addWifiBarrierDisabling(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addWifiBarrierDisablingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBluetoothBarrierKeep(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBluetoothBarrierKeepUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBluetoothBarrierConnecting(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBluetoothBarrierConnectingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBluetoothBarrierDisconnecting(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBluetoothBarrierDisconnectingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBehaviorBarrierKeeping(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBehaviorBarrierKeepingUtil(args.getJSONArray(1));
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBehaviorBarrierBeginning(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBehaviorBarrierBeginningUtil(args.getJSONArray(1));
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBehaviorBarrierEnding(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBehaviorBarrierEndingUtil(args.getJSONArray(1));
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addLocationBarrierEnter(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addLocationBarrierEnterUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addLocationBarrierStay(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addLocationBarrierStayUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addLocationBarrierExit(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addLocationBarrierExitUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addScreenBarrierKeeping(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addScreenBarrierKeepingUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addScreenBarrierScreenOn(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addScreenBarrierScreenOnUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addScreenBarrierScreenOff(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addScreenBarrierScreenOffUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addScreenBarrierScreenUnlock(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addScreenBarrierScreenUnlockUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addTimeBarrierDuringPeriodOfDay(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addTimeBarrierDuringPeriodOfDayUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addTimeBarrierDuringPeriodOfWeek(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addTimeBarrierDuringPeriodOfWeekUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addTimeBarrierDuringTimePeriod(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addTimeBarrierDuringTimePeriodUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addTimeBarrierInTimeCategory(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addTimeBarrierInTimeCategoryUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addTimeBarrierInSunriseOrSunsetPeriod(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addTimeBarrierTimeInSunriseOrSunsetPeriodUtil(args);
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBeaconBarrierKeep(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBeaconBarrierUtil(args, "keep");
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBeaconBarrierDiscover(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBeaconBarrierUtil(args, "discover");
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    @CordovaMethod
    @HMSLog
    public void addBeaconBarrierMissed(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        awarenessBarrier = BarrierUtils.addBeaconBarrierUtil(args, "missed");
        if(args.get(0) instanceof JSONObject) {
            startBackgroundService(corPack.getCordovaWebView().getContext(), args.getJSONObject(0));
            return;
        }
        final String barrierLabel = args.getString(0);
        buildBroadcastReceiver(barrierLabel, promise);
    }

    private void startBackgroundService(Context context, JSONObject params) throws JSONException {
        Intent intent = new Intent(context, BarrierService.class);
        intent.putExtra("barrier", awarenessBarrier);
        intent.putExtra("barrierLabel", params.getString("barrierLabel"));
        intent.putExtra("filename", backgroundFileName);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) context.startForegroundService(intent);
        else context.startService(intent);
    }

    @CordovaMethod
    @HMSLog
    public void stopBackgroundService(final CorPack corPack, JSONArray args, final Promise promise) {
        Intent intent = new Intent(corPack.getCordovaWebView().getContext(), BarrierService.class);
        corPack.getCordova().getContext().stopService(intent);
        promise.success();
    }

    private void buildBroadcastReceiver(String barrierLabel, Promise promise) {
        if (intentData != null) {
            if (!barrierLabelRequests.containsKey(barrierLabel)) {
                intentData = buildPendingIntent(barrierLabel);
                barrierLabelRequests.put(barrierLabel, intentData.get0());
            }
            BarrierUtils.addBarrier(context, barrierLabel, awarenessBarrier, intentData.get1(), promise);
        } else {
            intentData = buildPendingIntent(barrierLabel);
            BarrierUtils.addBarrier(context, barrierLabel, awarenessBarrier, intentData.get1(), promise);
        }
    }

    private Pair<Integer, PendingIntent> buildPendingIntent(String action) {
        Intent intent = new Intent(action);
        intent.setPackage(context.getApplicationContext().getPackageName());
        intent.setAction(action);
        PendingIntent pendingIntent = PendingIntent.getBroadcast(context,
                0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        this.barrierLabelRequests.put(action, 0);
        mBarrierReceiver = new BarrierReceiver();
        context.registerReceiver(mBarrierReceiver, new IntentFilter(action));
        return Pair.create(0, pendingIntent);
    }

    final class BarrierReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (intent != null) {
                BarrierStatus barrierStatus = BarrierStatus.extract(intent);
                PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, JSONUtils.barrierStatusTOJSON(barrierStatus));
                pluginResult.setKeepCallback(true);
                promise.sendPluginResult(pluginResult);
            }
        }
    }

    @CordovaMethod
    @HMSLog
    public void deleteBarrierWithLabels(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        final String[] barrierLabels = JSONUtils.getBarrierLabels(args.getJSONArray(0), promise);
        for (String barrierLabel : barrierLabels) {
            BarrierUtils.deleteBarrier(context, promise, barrierLabel);
        }
    }

    @CordovaMethod
    @HMSLog
    public void deleteAllBarriers(final CorPack corPack, final JSONArray args, final Promise promise) {
        BarrierUtils.deleteAllBarriers(corPack.getCordova().getContext(), promise);
    }

    @CordovaMethod
    @HMSLog
    public void unRegisterReceiver(final CorPack corPack, final JSONArray args, final Promise promise) {
        if (mBarrierReceiver != null) {
            context.unregisterReceiver(mBarrierReceiver);
            BarrierUtils.deleteAllBarriers(corPack.getCordova().getContext(), promise);
        }
    }

    @CordovaMethod
    @HMSLog
    public void addCombinationBarrier(final CorPack corPack, final JSONArray args, final Promise promise) throws JSONException {
        this.promise = promise;
        final String barrierLabel = args.getString(1);
        final JSONObject root = args.getJSONObject(0);
        awarenessBarrier = addCombinationBarrierUtil(Objects.requireNonNull(root.optJSONArray("children")),
                new ArrayList<>(), root.optString("type"));
        buildBroadcastReceiver(barrierLabel, promise);
    }


    public AwarenessBarrier addCombinationBarrierUtil(JSONArray args, Collection<AwarenessBarrier> coll, String type) throws JSONException {
        for (int i = 0; i < args.length(); i++) {
            JSONObject current = args.optJSONObject(i);
            if (current.has("type")) {
                if (current.optString("type").equals("not")) {
                    String method = Objects.requireNonNull(current.optJSONArray("children"))
                            .getJSONObject(0).optString("method");
                    AwarenessBarrier awar = BarrierUtils.findAwareness(method, current.optJSONArray("params"));
                    if (awar != null) {
                        coll.add(AwarenessBarrier.not(awar));
                    }
                } else {
                    AwarenessBarrier innerCombinationBarrier = addCombinationBarrierUtil(Objects.requireNonNull
                            (current.optJSONArray("children")), new ArrayList<>(), current.getString("type"));
                    coll.add(innerCombinationBarrier);
                }
            } else {
                String method = current.optString("method");
                AwarenessBarrier awareness = BarrierUtils.findAwareness(method, current.optJSONArray("params"));
                coll.add(awareness);
            }
        }
        if (type.equals("and")) {
            return AwarenessBarrier.and(coll);
        } else {
            return AwarenessBarrier.or(coll);
        }
    }
}
