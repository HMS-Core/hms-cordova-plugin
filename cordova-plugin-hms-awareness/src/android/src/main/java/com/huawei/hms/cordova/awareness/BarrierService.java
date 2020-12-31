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

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Color;
import android.os.Build;
import android.os.IBinder;
import android.text.Html;
import android.util.Log;
import android.webkit.WebView;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationCompat;

import com.huawei.hms.kit.awareness.Awareness;
import com.huawei.hms.kit.awareness.barrier.AwarenessBarrier;
import com.huawei.hms.kit.awareness.barrier.BarrierUpdateRequest;

import static com.huawei.hms.cordova.awareness.HtmlUtils.addInitialBarrierListener;
import static com.huawei.hms.cordova.awareness.HtmlUtils.readFile;
import static com.huawei.hms.cordova.awareness.HtmlUtils.wrapInsideScriptTag;


public class BarrierService extends Service {
    private BarrierReceiver barrierReceiver;
    private PendingIntent pendingIntent;
    private final static String NOTIFICATION_CHANNEL_ID = "com.huawei.hms.cordova.awareness";
    private final static String CHANNEL_NAME = "HMS Awareness Background Service";

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    private void startForegroundForApiLevelBiggerThanOreo() {
        NotificationChannel chan = new NotificationChannel(NOTIFICATION_CHANNEL_ID, CHANNEL_NAME, NotificationManager.IMPORTANCE_NONE);
        chan.setLightColor(Color.BLUE);
        chan.setLockscreenVisibility(Notification.VISIBILITY_PRIVATE);
        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        assert manager != null;
        manager.createNotificationChannel(chan);
        startForeground(2, createNotification());
    }

    private WebView initializeWebViewForBackgroundProcessing(String filename) {
        WebView webView = new WebView(this);
        webView.getSettings().setSavePassword(false);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setAllowContentAccess(true);
        String htmlContent = "";
        if (filename == null) htmlContent = wrapInsideScriptTag(addInitialBarrierListener());
        else htmlContent = wrapInsideScriptTag(addInitialBarrierListener() + readFile(this, filename));
        webView.loadData(htmlContent, "text/html; charset=utf-8", "UTF-8");
        return webView;
    }

    private Notification createNotification() {
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID);
        return notificationBuilder.setContentTitle("App is running in background")
                .setOngoing(true)
                .setPriority(NotificationManager.IMPORTANCE_MIN)
                .setCategory(Notification.CATEGORY_SERVICE)
                .build();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        AwarenessBarrier awarenessBarrier = intent.getParcelableExtra("barrier");
        String barrierLabel = intent.getStringExtra("barrierLabel");
        if (awarenessBarrier == null || barrierLabel == null)
            return super.onStartCommand(intent, flags, startId);

        if (barrierReceiver == null) {
            String filename = intent.getStringExtra("filename");
            String intentUuid = getApplication().getPackageName() + "BARRIER_RECEIVER_ACTION";
            pendingIntent = PendingIntent.getBroadcast(this, 0, new Intent(intentUuid), PendingIntent.FLAG_UPDATE_CURRENT);
            barrierReceiver = new BarrierReceiver(initializeWebViewForBackgroundProcessing(filename));
            registerReceiver(barrierReceiver, new IntentFilter(intentUuid));
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O)
            startForegroundForApiLevelBiggerThanOreo();
        else startForeground(2, createNotification());

        BarrierUpdateRequest request = new BarrierUpdateRequest.Builder().addBarrier(barrierLabel, awarenessBarrier, pendingIntent).build();
        Awareness.getBarrierClient(this).updateBarriers(request)
                .addOnSuccessListener(command -> Log.d("TAG", "onStartCommand: "))
                .addOnFailureListener(command -> Log.e("TAG", "onStartCommand: "));

        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        unregisterReceiver(barrierReceiver);
    }
}
