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
package com.huawei.hms.cordova.location.utils;

import android.app.ActivityManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.util.Log;

import androidx.core.app.NotificationCompat;

import com.huawei.hms.cordova.location.basef.handler.CorPack;
import com.huawei.hms.cordova.location.helpers.LocationBroadcastReceiver;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class LocationUtils {
    private static final String TAG = LocationUtils.class.getSimpleName();

    public static PendingIntent getPendingIntent(Context context, String action, int requestCode, int flag) {
        Intent intent = new Intent(context, LocationBroadcastReceiver.class);
        intent.setPackage(context.getPackageName());
        intent.setAction(action);
        return PendingIntent.getBroadcast(context, requestCode, intent, flag);
    }

    public static Notification buildNotification(Context context, JSONObject json) throws JSONException {
        String notificationChannelId = "com.huawei.hms.location.cordova.LOCATION_NOTIFICATION";
        NotificationManager manager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(context, notificationChannelId);
        String channelName = json.getString("channelName");
        int priority = json.getInt("priority");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(notificationChannelId, channelName, priority);
            channel.setLightColor(Color.BLUE);
            channel.setLockscreenVisibility(Notification.VISIBILITY_PRIVATE);
            manager.createNotificationChannel(channel);
            notificationBuilder = notificationBuilder.setChannelId(notificationChannelId);
        }
        return fillNotificationBuilder(context, notificationBuilder, json);
    }

    private static Notification fillNotificationBuilder(Context context, NotificationCompat.Builder builder, JSONObject json) throws JSONException {
        if (json.has("contentTitle")) {
            builder = builder.setContentTitle(json.getString("contentTitle"));
        }
        if (json.has("color"))
            builder = builder.setColor(json.getInt("color"));
        if (json.has("colorized"))
            builder = builder.setColorized(json.getBoolean("colorized"));
        if (json.has("contentInfo")) {
            builder = builder.setContentInfo(json.getString("contentInfo"));
        }
        if (json.has("contentText")) {
            builder = builder.setContentText(json.getString("contentText"));
        }
        if (json.has("smallIcon")) {
            int resourceId = context.getResources().getIdentifier(json.getString("smallIcon"), "drawable", context.getPackageName());
            builder = builder.setSmallIcon(resourceId);
        }
        if (json.has("largeIcon")) {
            Bitmap bitmap = createBitmapFrom(context, json.getString("largeIcon"));
            builder = builder.setLargeIcon(bitmap);
        }
        if (json.has("sound")) {
            String sourceName = json.getString("sound");
            int resourceId = context.getResources().getIdentifier(sourceName, "raw", context.getPackageName());
            Uri soundUri = Uri.parse(String.format(Locale.ENGLISH, "android.resource://%s/%s", context.getPackageName(), resourceId));
            builder = builder.setSound(soundUri);
        }
        if (json.has("onGoing"))
            builder = builder.setOngoing(json.getBoolean("onGoing"));
        if (json.has("subText")) {
            builder = builder.setSubText(json.getString("subText"));
        }
        if (json.has("vibrate")) {
            long[] pattern = convertJSONToVibrate(json.getJSONArray("vibrate"));
            builder = builder.setVibrate(pattern);
        }
        if (json.has("visibility"))
            builder = builder.setVisibility(json.getInt("visibility"));
        return builder.setOngoing(true)
                .setPriority(json.getInt("priority"))
                .setCategory(json.getString("category")).build();
    }

    private static long[] convertJSONToVibrate(JSONArray patternJA) throws JSONException {
        int length = patternJA.length();
        long[] pattern = new long[length];
        for (int i = 0; i < length; i++) {
            pattern[i] = patternJA.getLong(i);
        }
        return pattern;
    }

    private static Bitmap createBitmapFrom(Context context, String path) {
        Bitmap bitmap = null;
        try {
            bitmap = BitmapFactory.decodeStream(context.getAssets().open(path));
        } catch (IOException | OutOfMemoryError e) {
            Log.d(TAG, e.getLocalizedMessage());
        }
        return bitmap;
    }

    public static boolean isApplicationInForeground(Context context) {
        ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> processInfos = activityManager.getRunningAppProcesses();
        if (processInfos == null) return false;
        for (ActivityManager.RunningAppProcessInfo processInfo : processInfos) {
            if (processInfo.pkgList.length < 1) return false;
            if (processInfo.processName.equals(context.getPackageName())
                    && processInfo.importance == ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND) {
                return true;
            }
        }
        return false;
    }

    public static void saveBackgroundTask(Context context, String key, String function) {
        String myAppId = context.getApplicationInfo().uid + "";
        SharedPreferences.Editor sharedPreferences = context.getSharedPreferences(context.getPackageName() + "." + myAppId, Context.MODE_PRIVATE).edit();
        sharedPreferences.putString(key, function).apply();
    }

    public static void deleteBackgroundTask(Context context, String key) {
        String myAppId = context.getApplicationInfo().uid + "";
        SharedPreferences.Editor sharedPreferences = context.getSharedPreferences(context.getPackageName() + "." + myAppId, Context.MODE_PRIVATE).edit();
        sharedPreferences.remove(key).apply();
    }

    public static boolean hasLocationPermission(final CorPack corPack) {
        boolean hasLocationPermission = corPack.hasPermission(Constants.Permission.ACCESS_COARSE_LOCATION) && corPack.hasPermission(Constants.Permission.ACCESS_FINE_LOCATION);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            hasLocationPermission = hasLocationPermission && corPack.hasPermission(Constants.Permission.ACCESS_BACKGROUND_LOCATION);
        }
        return hasLocationPermission;
    }
}
