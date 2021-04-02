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

var data = {
    "key":"value"
};

onGetItemResponse((result)=>{
    console.log(JSON.stringify(result));
});

onBackgroundRemoteMessageReceived((remoteMessage)=>{
    const jsonData = JSON.parse(remoteMessage.data);
    const headlessNotification = {
                "title": "[Headless] " + jsonData.title,
                "message": jsonData.message.replace("{{name}}","YourName")
            };
    const notification = JSON.stringify(headlessNotification);
    HmsLocalNotification.backgroundLocalNotification(notification);
});

HmsPush.setItem("test",JSON.stringify(data));
HmsPush.getItem("test");
HmsPush.removeItem("test");