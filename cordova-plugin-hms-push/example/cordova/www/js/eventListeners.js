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

function initListener() {
    HmsPushEvent.onRemoteMessageReceived((result) => {
        addLog("REMOTE_DATA_MESSAGE_RECEIVED", JSON.stringify(result, "\n", 4));
        HmsLocalNotification.localNotification({
            [HmsLocalNotification.Attr.title]: "DataMessage Received",
            [HmsLocalNotification.Attr.message]: new HmsPush.CordovaRemoteMessage(
                result.msg
            ).getDataOfMap(),
        });
    });

    HmsPushEvent.onTokenError((result) => {
        addLog("ON_TOKEN_ERROR_EVENT", JSON.stringify(result, "\n", 4));
    });

    HmsPushEvent.onTokenReceived((result) => {
        addLog("TOKEN_RECEIVED_EVENT", JSON.stringify(result, "\n", 4));
    });

    HmsPushEvent.onLocalNotificationAction((result) => {
        addLog("LOCAL_NOTIFICATION_ACTION_EVENT", JSON.stringify(result, "\n", 4));
        const notification = JSON.parse(result.dataJSON);
        if (notification.action === "Yes") {
            HmsLocalNotification.cancelNotificationsWithId([notification.id]);
        }
        addLog("onLocalNotificationAction-Clicked", notification.action);
    });

    HmsPushEvent.onNotificationOpenedApp((result) => {
        addLog("NOTIFICATION_OPENED_EVENT", JSON.stringify(result, "\n", 4));
        if (result.uriPage !== null && result.uriPage === "app://app2")
            openCustomIntent();
    });

    HmsPushEvent.onPushMessageSent((result) => {
        addLog("ON_PUSH_MESSAGE_SENT", JSON.stringify(result, "\n", 4));
    });

    HmsPushEvent.onPushMessageSentDelivered((result) => {
        addLog("ON_PUSH_MESSAGE_SENT_DELIVERED", JSON.stringify(result, "\n", 4));
    });

    HmsPushEvent.onPushMessageSentError((result) => {
        addLog("ON_PUSH_MESSAGE_SENT_ERROR", JSON.stringify(result, "\n", 4));
    });    

    HmsPushEvent.onMultiSenderTokenReceivedEvent((result) => {
        addLog("ON_MULTI_SENDER_TOKEN_RECEIVED_EVENT", JSON.stringify(result, "\n", 4));
    });

    HmsPushEvent.onMultiSenderTokenErrorEvent((result) => {
        addLog("ON_MULTI_SENDER_TOKEN_ERROR_EVENT", JSON.stringify(result, "\n", 4));
    });

}
