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
"use strict";

var FSUtils = require("./FSUtils");

var ROOT_GRADLE_FILE = "platforms/android/build.gradle";
var COMMENT = "//This line is added by cordova-plugin-hms-ml plugin";
var NEW_LINE = "\n";

module.exports = function (context) {
    if (!FSUtils.exists(ROOT_GRADLE_FILE)) {
        console.log(
            "root gradle file does not exist. before_plugin_uninstall script wont be executed."
        );
    }

    var rootGradleContent = FSUtils.readFile(ROOT_GRADLE_FILE, "UTF-8");
    var lines = rootGradleContent.split(NEW_LINE);

    var linesAfterRemove = removeLinesAddedByPlugin(lines);

    FSUtils.writeFile(ROOT_GRADLE_FILE, linesAfterRemove.join(NEW_LINE));
};

function removeLinesAddedByPlugin(lines) {
    var indexList = [];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.includes(COMMENT)) {
            indexList.push(i);
        }
    }

    for (var i = 0; i < indexList.length; i++) {
        lines.splice(indexList[i], 1);

        //if a line is removed, indexes are changed
        if (i !== indexList.length - 1) {
            for (var j = i + 1; j < indexList.length; j++) {
                indexList[j] = indexList[j] - 1;
            }
        }
    }

    return lines;
}
