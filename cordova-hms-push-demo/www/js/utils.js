/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

function clearLog() {
  let obj = document.querySelector("#logs");
  obj.innerText = "";
}

function addLog(tag, message) {
  let obj = document.querySelector("#logs");
  message = message === undefined ? "" : message;
  obj.innerText = tag + message + " \n" + obj.innerText;
}

function defaultSuccessCallback(message) {
  addLog("Success: ", message);
  message = message === undefined ? "" : message;
  console.log(message);
  alert("Success: " + message);
}
function defaultErrorCallback(message) {
  addLog("Error: ", message);
  message = message === undefined ? "" : message;
  console.log(message);
  alert("Error: " + message);
}

function defaultExceptionCallback(message) {
  console.log(message);
  alert(JSON.stringify("<EXCEPTION> " + message, "\n", 4));
}
