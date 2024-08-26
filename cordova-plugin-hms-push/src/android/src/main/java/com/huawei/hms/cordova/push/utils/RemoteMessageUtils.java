/*
    Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.push.utils;

import com.huawei.hms.push.RemoteMessage;
import com.huawei.hms.cordova.push.constants.Core;
import com.huawei.hms.cordova.push.constants.RemoteMessageAttributes;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.Arrays;
import java.util.Iterator;

public class RemoteMessageUtils {

    public static JSONObject fromMap(RemoteMessage message) throws JSONException {

        JSONObject params = new JSONObject();

        params.put(RemoteMessageAttributes.COLLAPSE_KEY, message.getCollapseKey());
        params.put(RemoteMessageAttributes.DATA, message.getData());
        params.put(RemoteMessageAttributes.DATA_OF_MAP, message.getDataOfMap() + "");
        params.put(RemoteMessageAttributes.MESSAGE_ID, message.getMessageId());
        params.put(RemoteMessageAttributes.MESSAGE_TYPE, message.getMessageType());
        params.put(RemoteMessageAttributes.ORIGINAL_URGENCY, message.getOriginalUrgency() + "");
        params.put(RemoteMessageAttributes.URGENCY, message.getUrgency() + "");
        params.put(RemoteMessageAttributes.TTL, message.getTtl() + "");
        params.put(RemoteMessageAttributes.SENT_TIME, message.getSentTime() + "");
        params.put(RemoteMessageAttributes.TO, message.getTo());
        params.put(RemoteMessageAttributes.FROM, message.getFrom());
        params.put(RemoteMessageAttributes.TOKEN, message.getToken());
        params.put(RemoteMessageAttributes.RECEIPT_MODE, message.getReceiptMode() + "");
        params.put(RemoteMessageAttributes.SEND_MODE, message.getSendMode() + "");
        params.put(RemoteMessageAttributes.CONTENTS, message.describeContents() + "");
        params.put(RemoteMessageAttributes.ANALYTIC_INFO, message.getAnalyticInfo() + "");
        params.put(RemoteMessageAttributes.ANALYTIC_INFO_MAP, message.getAnalyticInfoMap() + "");

        if (message.getNotification() != null) {
            RemoteMessage.Notification notification = message.getNotification();
            params.put(RemoteMessageAttributes.TITLE, notification.getTitle());
            params.put(RemoteMessageAttributes.TITLE_LOCALIZATION_KEY, notification.getTitleLocalizationKey());
            params.put(RemoteMessageAttributes.TITLE_LOCALIZATION_ARGS,
                Arrays.toString(notification.getTitleLocalizationArgs()));
            params.put(RemoteMessageAttributes.BODY_LOCALIZATION_KEY, notification.getBodyLocalizationKey());
            params.put(RemoteMessageAttributes.BODY_LOCALIZATION_ARGS,
                Arrays.toString(notification.getBodyLocalizationArgs()));
            params.put(RemoteMessageAttributes.BODY, notification.getBody());
            params.put(RemoteMessageAttributes.ICON, notification.getIcon());
            params.put(RemoteMessageAttributes.SOUND, notification.getSound());
            params.put(RemoteMessageAttributes.TAG, notification.getTag());
            params.put(RemoteMessageAttributes.COLOR, notification.getColor());
            params.put(RemoteMessageAttributes.CLICK_ACTION, notification.getClickAction());
            params.put(RemoteMessageAttributes.CHANNEL_ID, notification.getChannelId());
            params.put(RemoteMessageAttributes.IMAGE_URL, notification.getImageUrl() + "");
            params.put(RemoteMessageAttributes.LINK, notification.getLink() + "");
            params.put(RemoteMessageAttributes.NOTIFY_ID, notification.getNotifyId() + "");
            params.put(RemoteMessageAttributes.WHEN, notification.getWhen() + "");
            params.put(RemoteMessageAttributes.LIGHT_SETTINGS, Arrays.toString(notification.getLightSettings()));
            params.put(RemoteMessageAttributes.BADGE_NUMBER, notification.getBadgeNumber() + "");
            params.put(RemoteMessageAttributes.IMPORTANCE, notification.getImportance() + "");
            params.put(RemoteMessageAttributes.TICKER, notification.getTicker());
            params.put(RemoteMessageAttributes.VIBRATE_CONFIG, Arrays.toString(notification.getVibrateConfig()));
            params.put(RemoteMessageAttributes.VISIBILITY, notification.getVisibility() + "");
            params.put(RemoteMessageAttributes.INTENT_URI, notification.getIntentUri());
            params.put(RemoteMessageAttributes.IS_AUTO_CANCEL, notification.isAutoCancel() + "");
            params.put(RemoteMessageAttributes.IS_LOCAL_ONLY, notification.isLocalOnly() + "");
            params.put(RemoteMessageAttributes.IS_DEFAULT_LIGHT, notification.isDefaultLight() + "");
            params.put(RemoteMessageAttributes.IS_DEFAULT_SOUND, notification.isDefaultSound() + "");
            params.put(RemoteMessageAttributes.IS_DEFAULT_VIBRATE, notification.isDefaultVibrate() + "");
        }

        return params;
    }

    public static RemoteMessage toRemoteMessage(JSONObject params) throws JSONException {

        String to = params.getString(RemoteMessageAttributes.TO);
        if (to == null || to.equals("")) {
            to = Core.REMOTE_MESSAGE_UPLINK_TO;
        }

        RemoteMessage.Builder builder = new RemoteMessage.Builder(to);

        String messageId = params.has(RemoteMessageAttributes.MESSAGE_ID) ? params.getString(
            RemoteMessageAttributes.MESSAGE_ID) : NotificationConfigUtils.generateNotificationId();
        String messageType = params.has(RemoteMessageAttributes.MESSAGE_TYPE) ? params.getString(
            RemoteMessageAttributes.MESSAGE_TYPE) : null;
        int ttl = params.has(RemoteMessageAttributes.TTL) ? params.getInt(RemoteMessageAttributes.TTL) : 120;
        String collapseKey = params.has(RemoteMessageAttributes.COLLAPSE_KEY) ? params.getString(
            RemoteMessageAttributes.COLLAPSE_KEY) : null;
        int receiptMode = params.has(RemoteMessageAttributes.RECEIPT_MODE) ? params.getInt(
            RemoteMessageAttributes.RECEIPT_MODE) : 1;
        int sendMode = params.has(RemoteMessageAttributes.SEND_MODE)
            ? params.getInt(RemoteMessageAttributes.SEND_MODE)
            : 1;

        JSONObject map = params.has(RemoteMessageAttributes.DATA) ? (JSONObject) params.get(
            RemoteMessageAttributes.DATA) : null;
        if (map != null) {
            builder.setData(MapUtils.toStringMap(map));
        }

        Iterator<String> it = params.keys();
        while (it.hasNext()) {
            it.next();
        }

        builder.setCollapseKey(collapseKey);
        builder.setMessageId(messageId);
        builder.setReceiptMode(receiptMode);
        builder.setSendMode(sendMode);
        builder.setMessageType(messageType);
        builder.setTtl(ttl);

        return builder.build();
    }

}
