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
var messageListMessage = [];

var nearby_message = {
    initialize: function () {
        document.addEventListener('deviceready', this.initModule.bind(this), false);
    },

    initModule: function () {
        this.addEventListeners();
        this.addClickListeners();
    },

    refreshMessagePane: function () {
        var nHTML = '';
        messageListMessage.forEach(function(item) {
            nHTML += '<div class="msg">' + item.content + '</div>';
        });
        document.getElementById("msg-list2").innerHTML = nHTML;
    },

    clearMessages: function () {
        messageListMessage = [];
        this.refreshMessagePane();
        console.log('message :: messages cleared');
    },

    addEventListeners: function () {
        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_MESSAGE_ON_FOUND, (res) => {
            console.log("listener :: EVENT_MESSAGE_ON_FOUND: " + JSON.stringify(res));

            const content = String.fromCharCode.apply(String, res.content)
            console.log("listener :: messageContent: " + content);

            messageListMessage.push({namespace: res.namespace, content: content});
            this.refreshMessagePane();
        });

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_MESSAGE_ON_LOST, (res) => {
            console.log("listener :: EVENT_MESSAGE_ON_LOST: " + JSON.stringify(res));
            const content = String.fromCharCode.apply(String, res.content)
            console.log("listener :: messageContent: " + content);

            const index = messageListMessage.findIndex(item => (item.namespace === res.namespace && item.content === content));
            if (index === -1) {
                console.log("listener :: EVENT_MESSAGE_ON_LOST index not found for message: " + content);
                return;
            }

            messageListMessage.splice(index, 1);
            this.refreshMessagePane();
            console.log("listener :: EVENT_MESSAGE_ON_LOST message deleted: " + content);

        });

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED, (res) => {
            console.log("listener :: EVENT_MESSAGE_ON_BLE_SIGNAL_CHANGED: " + JSON.stringify(res));
        });

        HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_MESSAGE_ON_DISTANCE_CHANGED, (res) => {
            console.log("listener :: EVENT_MESSAGE_ON_DISTANCE_CHANGED: " + JSON.stringify(res));
        });

        console.log('message :: event listeners added');
    },

    addClickListeners: function () {

        function getInputData() {
            var strBytes = null;
            const inputText = document.getElementById("input-text2").value;
            if (inputText !== undefined && inputText !== "") {
                strBytes = str2Bin(inputText);
            }
            return strBytes;
        }

        document.getElementById("btn-put").addEventListener('click', () => {
            console.log("message :: btn-put clicked!");

            const content = getInputData();
            if (content == null) {
                console.log('message :: input text is null');
                return;
            }

            const message = {
                content: content
            }
            HMSNearby.put(message).then((res) => {
                alert('message :: putResult: ' + JSON.stringify(res));
            }).catch(e => {
                console.log('message :: putError: ' + JSON.stringify(e));
            });

        });

        document.getElementById("btn-unput").addEventListener('click', () => {
            console.log("message :: btn-unput clicked!");
            const content = getInputData();
            if (content == null) {
                console.log('message :: input text is null');
                return;
            }
            const message = {
                content: content
            }
            HMSNearby.unput(message).then((res) => {
                alert('message :: unputResult: ' + JSON.stringify(res));
            }).catch(e => {
                console.log('message :: unputError: ' + JSON.stringify(e));
            });
        });

        document.getElementById("btn-get").addEventListener('click', () => {
            console.log("message :: btn-get clicked!");
            this.clearMessages();

            HMSNearby.get(HMSNearby.GET_OPTION_DEFAULT).then((res) => {
                alert('message :: getResult: ' + JSON.stringify(res));
            }).catch(e => {
                console.log('message :: getError: ' + JSON.stringify(e));
            })

        });

        document.getElementById("btn-unget").addEventListener('click', () => {
            console.log("message :: btn-unget clicked!");
            HMSNearby.unget().then((res) => {
                alert('message :: ungetResult: ' + JSON.stringify(res));
            }).catch(e => {
                console.log('message :: ungetError: ' + JSON.stringify(e));
            });
        });

    }
}

nearby_message.initialize();
