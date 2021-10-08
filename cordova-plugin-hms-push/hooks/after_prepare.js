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

"use strict";

var FSUtils = require("./FSUtils");

var DEST_DIR = "platforms/android/app/";
var FILE_NAME = "agconnect-services.json";

module.exports = function (context) {
    var platforms = context.opts.platforms;

    if (platforms.includes("android")) {
        copyAGConnect();
    }
};

function copyAGConnect() {
    if (!FSUtils.exists(FILE_NAME)) {
        console.log("agconnect-services.json does not exists!");
        return;
    }

    if (!FSUtils.exists(DEST_DIR)) {
        console.log("destination does not exist. dest : " + DEST_DIR);
        return;
    }

    FSUtils.copyFile(FILE_NAME, DEST_DIR + FILE_NAME);
}
