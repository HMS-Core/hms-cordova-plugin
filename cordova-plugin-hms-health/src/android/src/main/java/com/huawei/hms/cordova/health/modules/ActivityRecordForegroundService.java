/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.os.Build;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;
import android.os.Message;
import android.util.Log;

import androidx.core.app.NotificationCompat;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.hihealth.ActivityRecordsController;
import com.huawei.hms.hihealth.HuaweiHiHealth;

/**
 * Defining a Frontend ActivityRecordForegroundService
 *
 * @since 2020-09-05
 */
public class ActivityRecordForegroundService extends Service {
    private static final String TAG = "ForegroundService";

    // Continue ActivityRecord Msg what
    private static final int MSG_WORKOUT_TIMEOUT = 1005;

    // delayed time
    private static final int WORKOUT_TIMEOUT = 540000;

    // Internal context object
    private Context context;

    // Handler to send continue workout msg
    private Handler mHandler;

    // Handler thread
    private HandlerThread mHandlerThread;

    // HMS Health ActivityRecordsController
    private ActivityRecordsController activityRecordsController;

    @Override
    public void onCreate() {
        super.onCreate();
        context = this;
        Log.i(TAG, "ActivityRecordForegroundService is create.");
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        // Binding a notification bar
        getNotification();
        initActivityRecordController();
        initHandler();
        // send continue ActivityRecord delayed message
        mHandler.sendEmptyMessageDelayed(MSG_WORKOUT_TIMEOUT, WORKOUT_TIMEOUT);
        return super.onStartCommand(intent, flags, startId);
    }

    /**
     * init ActivityRecordsController
     */
    public void initActivityRecordController() {
        activityRecordsController = HuaweiHiHealth.getActivityRecordsController(context);
    }

    /**
     * init handler to handle continue ActivityRecord msg
     */
    public void initHandler() {
        if (mHandlerThread == null) {
            Log.i(TAG, "mHandlerThread is null, begin to create");
            mHandlerThread = new HandlerThread("healthkit_workout_thread_handler");
            mHandlerThread.start();
            mHandler = new Handler(mHandlerThread.getLooper()) {
                @Override
                public void handleMessage(Message msg) {
                    Log.d(TAG, "meed handle js unbind msg: " + msg.what);
                    super.handleMessage(msg);
                    if (msg.what == MSG_WORKOUT_TIMEOUT) {
                        continueBackgroundActivityRecord();
                    }
                }
            };
        }
    }

    /**
     * Continue activity records run in background
     */
    public void continueBackgroundActivityRecord() {
        Log.i(TAG, "this is continue backgroundActivityRecord");

        // Call the related method of ActivityRecordsController to continue activity
        // records run in background.
        // The input parameter can be the ID string of ActivityRecord
        Task<Void> endTask = activityRecordsController.continueActivityRecord("ActivityRecordRun");
        endTask.addOnSuccessListener(new OnSuccessListener<Void>() {
            @Override
            public void onSuccess(Void aVoid) {
                Log.i(TAG, "Continue backgroundActivityRecord was successful!");
                mHandler.sendEmptyMessageDelayed(MSG_WORKOUT_TIMEOUT, WORKOUT_TIMEOUT);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                Log.i(TAG, "Continue BackgroundActivityRecord error " + e.getMessage());
            }
        });
    }

    /**
     * Bind the service to the notification bar so that the service can be changed
     * to a foreground service.
     */
    private void getNotification() {
        NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        Notification notification = new NotificationCompat.Builder(this, "1").setContentTitle("ActivityRecordRun")
            .setContentText("ActivityRecord Ongoing")
            .setWhen(System.currentTimeMillis())
            .setLargeIcon(BitmapFactory.decodeResource(getResources(),
                context.getResources().getIdentifier("ic_launcher", "mipmap", context.getPackageName())))
            .setSmallIcon(context.getResources().getIdentifier("ic_launcher", "mipmap", context.getPackageName()))
            .setContentIntent(PendingIntent.getActivity(this, 0, new Intent(this, ActivityRecordController.class), 0))
            .build();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel("1", "subscribeName",
                NotificationManager.IMPORTANCE_DEFAULT);
            channel.setDescription("description");
            notificationManager.createNotificationChannel(channel);
        }
        notification.flags = Notification.FLAG_ONGOING_EVENT;
        startForeground(1, notification);

    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        mHandler.removeCallbacksAndMessages(null);
        Log.i(TAG, "ActivityRecordForegroundService is destroy.");
    }
}
