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

const sendBarrierInfoToRemoteServer = (barrierInfo) => {
    const url = "<YOUR_URL>";
    const options = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: barrierInfo,
        method: "POST"
    };
    fetch(url, options)
        .then(res => {
            alert(JSON.stringify(res));
            console.log(JSON.stringify(res));
        })
        .catch(error => {
            alert(JSON.stringify(error));
            console.log(JSON.stringify(error));
        });
}

addBarrierListener('ScreenBarrierKeeping', (barrierInfo) => {
    alert(JSON.stringify(barrierInfo));
    console.log(JSON.stringify(barrierInfo));
    sendBarrierInfoToRemoteServer(barrierInfo);
});

addBarrierListener('headsetBarrierKeeping', (barrierInfo) => {
    alert(JSON.stringify(barrierInfo));
    console.log(JSON.stringify(barrierInfo));
});

