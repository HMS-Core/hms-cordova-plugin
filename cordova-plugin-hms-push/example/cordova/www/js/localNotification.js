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

document.addEventListener("deviceready", this.initiliaze.bind(this), false);

function initiliaze() {
  initListener();
  let titleText = "HMSPush";
  let messageText = "This is Local Notification";
  let bigText = "This is a bigText";
  let subText = "This is a subText";
  let tagText = null;
  const thiz = (x) => document.getElementById(x);

  const defaultNotification = {
    [HmsLocalNotification.Attr.title]: "Notification Title",
    [HmsLocalNotification.Attr.message]: "Notification Message", // (required)
    [HmsLocalNotification.Attr.ticker]: "Optional Ticker",
    [HmsLocalNotification.Attr.showWhen]: true,
    // [HmsLocalNotification.Attr.largeIconUrl]: 'https://developer.huawei.com/Enexport/sites/default/images/en/Develop/hms/push/push2-tuidedao.png',
    [HmsLocalNotification.Attr.largeIcon]: "ic_launcher",
    [HmsLocalNotification.Attr.smallIcon]: "ic_notification",
    [HmsLocalNotification.Attr.bigText]: "This is a bigText",
    [HmsLocalNotification.Attr.subText]: "This is a subText",
    [HmsLocalNotification.Attr.color]: "white",
    [HmsLocalNotification.Attr.vibrate]: false,
    [HmsLocalNotification.Attr.vibrateDuration]: 1000,
    [HmsLocalNotification.Attr.tag]: "hms_tag",
    [HmsLocalNotification.Attr.groupSummary]: false,
    [HmsLocalNotification.Attr.ongoing]: false,
    [HmsLocalNotification.Attr.importance]: HmsLocalNotification.Importance.MAX,
    [HmsLocalNotification.Attr.dontNotifyInForeground]: false,
    [HmsLocalNotification.Attr.autoCancel]: false,
    [HmsLocalNotification.Attr.actions]: '["Yes", "No"]',
    [HmsLocalNotification.Attr.invokeApp]: true,
    // [HmsLocalNotification.Attr.channelId]: 'huawei-hms-cordova-push-channel-id', // Please read the documentation before using this param
  };

  thiz("title").onchange = (event) => {
    titleText = event.target.value;
    console.log(titleText);
  };

  thiz("tag").onchange = (event) => {
    tagText = event.target.value;
    console.log("tagtext", tagText);
  };

  thiz("bigText").onchange = (event) => {
    bigText = event.target.value;
    console.log("bigext", bigText);
  };

  thiz("subText").onchange = (event) => {
    subText = event.target.value;
    console.log("subtext", subText);
  };

  thiz("message").onchange = (event) => {
    messageText = event.target.value;
    console.log("messageText", messageText);
  };

  thiz("localNotification").onclick = () => {
    HmsLocalNotification.localNotification({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
    })
      .then((result) => defaultSuccessHandler("localNotification", result))
      .catch((error) => defaultExceptionHandler("localNotification", error));
  };

  thiz("localNotificationSchedule").onclick = () => {
    HmsLocalNotification.localNotificationSchedule({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
      [HmsLocalNotification.Attr.fireDate]: new Date(
        Date.now() + 60 * 1000
      ).getTime(), // in 1 min
      [HmsLocalNotification.Attr.allowWhileIdle]: true,
    })
      .then((result) =>
        defaultSuccessHandler("localNotification-Schedule", result)
      )
      .catch((error) =>
        defaultExceptionHandler("localNotification-Schedule", error)
      );
  };

  thiz("localNotificationVibrate").onclick = () => {
    HmsLocalNotification.localNotification({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
      [HmsLocalNotification.Attr.vibrate]: true,
      [HmsLocalNotification.Attr.vibrateDuration]: 5000,
    })
      .then((result) =>
        defaultSuccessHandler("localNotification-Vibrate", result)
      )
      .catch((error) =>
        defaultExceptionHandler("localNotification-Vibrate", error)
      );
  };

  thiz("localNotificationRepeat").onclick = () => {
    HmsLocalNotification.localNotification({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
      [HmsLocalNotification.Attr.repeatType]:
        HmsLocalNotification.RepeatType.MINUTE,
    })
      .then((result) =>
        defaultSuccessHandler("localNotification-Repeat", result)
      )
      .catch((error) =>
        defaultExceptionHandler("localNotification-Repeat", error)
      );
  };

  thiz("localNotificationSound").onclick = () => {
    HmsLocalNotification.localNotification({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
      [HmsLocalNotification.Attr.playSound]: true,
      [HmsLocalNotification.Attr.soundName]: "huawei_bounce.mp3",
    })
      .then((result) =>
        defaultSuccessHandler("localNotification-Sound", result)
      )
      .catch((error) =>
        defaultExceptionHandler("localNotification-Sound", error)
      );
  };

  thiz("localNotificationOngoing").onclick = () => {
    HmsLocalNotification.localNotification({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
      [HmsLocalNotification.Attr.ongoing]: true,
    })
      .then((result) =>
        defaultSuccessHandler("localNotification-Ongoing", result)
      )
      .catch((error) =>
        defaultExceptionHandler("localNotification-Ongoing", error)
      );
  };

  thiz("localNotificationBigImage").onclick = () => {
    HmsLocalNotification.localNotification({
      ...defaultNotification,
      [HmsLocalNotification.Attr.title]: titleText,
      [HmsLocalNotification.Attr.message]: messageText,
      [HmsLocalNotification.Attr.bigText]: bigText,
      [HmsLocalNotification.Attr.subText]: subText,
      [HmsLocalNotification.Attr.tag]: tagText,
      [HmsLocalNotification.Attr.bigPictureUrl]:
        "https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png",
    })
      .then((result) =>
        defaultSuccessHandler("localNotification-BigImage", result)
      )
      .catch((error) =>
        defaultExceptionHandler("localNotification-BigImage", error)
      );
  };

  thiz("cancelAllNotifications").onclick = () => {
    HmsLocalNotification.cancelAllNotifications()
      .then((result) => defaultSuccessHandler("cancelAllNotifications", result))
      .catch((error) =>
        defaultExceptionHandler("cancelAllNotifications", error)
      );
  };

  thiz("cancelNotifications").onclick = () => {
    HmsLocalNotification.cancelNotifications()
      .then((result) => defaultSuccessHandler("cancelNotifications", result))
      .catch((error) => defaultExceptionHandler("cancelNotifications", error));
  };

  thiz("cancelScheduledNotifications").onclick = () => {
    HmsLocalNotification.cancelScheduledNotifications()
      .then((result) =>
        defaultSuccessHandler("cancelScheduledNotifications", result)
      )
      .catch((error) =>
        defaultExceptionHandler("cancelScheduledNotifications", error)
      );
  };

  thiz("cancelNotificationsWithTag").onclick = () => {
    HmsLocalNotification.cancelNotificationsWithTag("tag")
      .then((result) =>
        defaultSuccessHandler("cancelNotificationsWithTag", result)
      )
      .catch((error) =>
        defaultExceptionHandler("cancelNotificationsWithTag", error)
      );
  };

  thiz("getNotifications").onclick = () => {
    HmsLocalNotification.getNotifications()
      .then((result) => defaultSuccessHandler("getNotifications", result))
      .catch((error) => defaultExceptionHandler("getNotifications", error));
  };

  thiz("getScheduledNotifications").onclick = () => {
    HmsLocalNotification.getScheduledNotifications()
      .then((result) =>
        defaultSuccessHandler("getScheduledNotifications", result)
      )
      .catch((error) =>
        defaultExceptionHandler("getScheduledNotifications", error)
      );
  };

  thiz("getChannels").onclick = () => {
    HmsLocalNotification.getChannels()
      .then((result) => defaultSuccessHandler("getChannels", result))
      .catch((error) => defaultExceptionHandler("getChannels", error));
  };

  thiz("channelExists").onclick = () => {
    HmsLocalNotification.channelExists("huawei-hms-cordova-push-channel-id-4")
      .then((result) => defaultSuccessHandler("channelExists", result))
      .catch((error) => defaultExceptionHandler("channelExists", error));
  };

  thiz("channelBlocked").onclick = () => {
    HmsLocalNotification.channelBlocked("huawei-hms-cordova-push-channel-id-4")
      .then((result) => defaultSuccessHandler("channelBlocked", result))
      .catch((error) => defaultExceptionHandler("channelBlocked", error));
  };

  thiz("deleteChannel").onclick = () => {
    HmsLocalNotification.deleteChannel("huawei-hms-cordova-push-channel-id-4")
      .then((result) => defaultSuccessHandler("deleteChannel", result))
      .catch((error) => defaultExceptionHandler("deleteChannel", error));
  };
}
