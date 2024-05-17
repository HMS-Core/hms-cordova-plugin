/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var messageListConnection = [];
var endpointIds = [];
var currentReceivingFile;

var nearby_connection = {
  initialize: function () {
    document.addEventListener("deviceready", this.initModule.bind(this), false);
  },

  initModule: function () {
    this.addEventListeners();
    this.addClickListeners();
  },

  // refresh message pane
  refreshMessagePane: function () {
    var nHTML = "";
    messageListConnection.forEach(function (item) {
      nHTML += '<div class="msg ' + item.type + '">' + item.data + "</div>";
    });
    document.getElementById("msg-list").innerHTML = nHTML;
  },

  // clear all messages in message pane
  clearMessages: function () {
    messageListConnection = [];
    this.refreshMessagePane();
    console.log("connection :: messages cleared");
  },

  // add message to message pane
  pushMessage: function (messageObj) {
    messageListConnection.push(messageObj);
    this.refreshMessagePane();
  },

  addEventListeners: function () {
    HMSNearby.on(
      HMSNearby.HMSNearbyEvent.EVENT_CONNECTION_ON_ESTABLISH,
      (res) => {
        console.log(
          "listener :: EVENT_CONNECTION_ON_ESTABLISH triggered: " +
            JSON.stringify(res)
        );
        this.pushMessage({
          type: "msg-system",
          data: "Connection established",
        });
        // accept the connection
        HMSNearby.acceptConnect(res.endpointId)
          .then((res2) =>
            console.log("connection :: acceptConnect: " + JSON.stringify(res2))
          )
          .catch((err) =>
            alert("connection :: acceptConnectError: " + JSON.stringify(err))
          );
      }
    );
    HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_CONNECTION_ON_RESULT, (res) => {
      console.log(
        "listener :: EVENT_CONNECTION_ON_RESULT triggered: " +
          JSON.stringify(res)
      );

      if (res.statusCode == HMSNearby.StatusCode.STATUS_SUCCESS) {
        // Connection successfully established
        this.clearMessages();
        this.pushMessage({ type: "msg-system", data: "Connection Success!" });
        endpointIds.push(res.endpointId);
      } else {
        this.pushMessage({
          type: "msg-system",
          data: "Connection Error! Status Code: " + res.statusCode,
        });
      }
    });
    HMSNearby.on(
      HMSNearby.HMSNearbyEvent.EVENT_CONNECTION_ON_DISCONNECT,
      (res) => {
        console.log(
          "listener :: EVENT_CONNECTION_ON_DISCONNECT triggered: " +
            JSON.stringify(res)
        );

        // disconnected
        endpointIds.splice(
          endpointIds.findIndex((value) => value === res.endpointId),
          1
        );
        this.pushMessage({ type: "msg-system", data: "Connection Lost!" });
      }
    );

    HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_SCAN_ON_FOUND, async (res) => {
      console.log(
        "listener :: EVENT_SCAN_ON_FOUND triggered: " + JSON.stringify(res)
      );
      this.pushMessage({ type: "msg-system", data: "Nearby device found" });
      // request connect
      const channelPolicy = HMSNearby.ChannelPolicy.CHANNEL_HIGH_THROUGHPUT;
      HMSNearby.requestConnectEx("scanNameTest", res.endpointId, channelPolicy)
        .then((resRequest) =>
          console.log(
            "connection :: requestConnect: " + JSON.stringify(resRequest)
          )
        )
        .catch((err) =>
          alert("connection :: requestConnectError: " + JSON.stringify(err))
        );
    });
    HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_SCAN_ON_LOST, (res) => {
      console.log(
        "listener :: EVENT_SCAN_ON_LOST triggered: " + JSON.stringify(res)
      );
    });

    HMSNearby.on(HMSNearby.HMSNearbyEvent.EVENT_DATA_ON_RECEIVED, (res) => {
      console.log("listener :: EVENT_DATA_ON_RECEIVED triggered");

      if (res.dataType === HMSNearby.DataType.DATA_BYTES) {
        const text = String.fromCharCode.apply(String, res["data"]);
        console.log("listener :: bytes received, data: " + text);

        this.pushMessage({ type: "msg-received", data: text });
      } else if (res.dataType === HMSNearby.DataType.DATA_FILE) {
        console.log("listener :: file receiving, dataId: " + res.dataId);
        currentReceivingFile = res.dataId;
        this.pushMessage({ type: "msg-system", data: "File Receiving..." });
      }
    });
    HMSNearby.on(
      HMSNearby.HMSNearbyEvent.EVENT_DATA_ON_TRANSFER_UPDATE,
      async (res) => {
        console.log(
          "listener :: EVENT_DATA_ON_TRANSFER_UPDATE triggered: " +
            JSON.stringify(res)
        );

        if (res.status === HMSNearby.TransferState.TRANSFER_STATE_SUCCESS) {
          console.log("listener :: data transfer success");
          if (res.dataId == currentReceivingFile) {
            console.log(
              "listener :: file transfer success. dataId: " + res.dataId
            );
            this.pushMessage({
              type: "msg-system",
              data: "File Transfer Success!",
            });
            currentReceivingFile = null;
          }
        }
      }
    );
    console.log("connection :: event listeners added");
  },

  addClickListeners: function () {
    /* Connection */
    document.getElementById("btn-broadcast").addEventListener("click", () => {
      console.log("connection :: btn-broadcast clicked!");
      HMSNearby.startBroadcasting(
        "testBroadcast",
        "com.hms.nearbyservice",
        HMSNearby.Policy.POLICY_STAR
      )
        .then((res) =>
          alert("connection :: startBroadcastingResult: " + JSON.stringify(res))
        )
        .catch((err) =>
          alert("connection :: startBroadcastingError: " + JSON.stringify(err))
        );
    });
    document.getElementById("btn-scan").addEventListener("click", () => {
      console.log("connection :: btn-scan clicked!");
      HMSNearby.startScan("com.hms.nearbyservice", HMSNearby.Policy.POLICY_STAR)
        .then((res) =>
          alert("connection :: startScanResult: " + JSON.stringify(res))
        )
        .catch((err) =>
          alert("connection :: startScanError: " + JSON.stringify(err))
        );
    });

    document
      .getElementById("btn-broadcast-stop")
      .addEventListener("click", () => {
        console.log("connection :: btn-broadcast-stop clicked!");
        HMSNearby.stopBroadcasting()
          .then((res) =>
            alert(
              "connection :: stopBroadcastingResult: " + JSON.stringify(res)
            )
          )
          .catch((err) =>
            alert("connection :: stopBroadcastingError: " + JSON.stringify(err))
          );
      });

    document.getElementById("btn-scan-stop").addEventListener("click", () => {
      console.log("connection :: btn-scan-stop clicked!");
      HMSNearby.stopScan()
        .then((res) =>
          alert("connection :: stopScanResult: " + JSON.stringify(res))
        )
        .catch((err) =>
          alert("connection :: stopScanError: " + JSON.stringify(err))
        );
    });

    document
      .getElementById("btn-disconnect-all")
      .addEventListener("click", () => {
        console.log("connection :: btn-disconnect-all clicked!");
        HMSNearby.disconnectAll()
          .then((res) => {
            console.log("connection :: disconnectAll: " + JSON.stringify(res));
            endpointIds = [];
            this.pushMessage({ type: "msg-system", data: "Disconnected!" });
          })
          .catch((err) =>
            alert("connection :: disconnectAllError: " + JSON.stringify(err))
          );
      });

    /* Data Transfer */
    document.getElementById("btn-send").addEventListener("click", () => {
      console.log("connection :: btn-send clicked!");
      const inputText = document.getElementById("input-text").value;
      if (inputText !== undefined && inputText !== "") {
        const strBytes = str2Bin(inputText);
        console.log("connection :: string bytes: " + strBytes);
        HMSNearby.sendBytes(strBytes, endpointIds)
          .then(() => {
            console.log("connection :: '" + inputText + "' is sending");
            this.pushMessage({ type: "msg-sent", data: inputText });
          })
          .catch((err) =>
            alert("connection :: sendBytesError: " + JSON.stringify(err))
          );
      }
    });
    document.getElementById("btn-send-file").addEventListener("click", () => {
      console.log("connection :: btn-send-file clicked!");
      fileChooser.open({ mime: "image/jpeg" }, (uri) => {
        console.log("file selected: " + uri);
        HMSNearby.sendFile(uri, endpointIds)
          .then(() => {
            console.log("connection :: selected file is sending");
            this.pushMessage({ type: "msg-system", data: "File Sending..." });
          })
          .catch((err) =>
            alert("connection :: sendFileError: " + JSON.stringify(err))
          );
      });
    });

    console.log("connection :: click listeners added");
  },
};
nearby_connection.initialize();
