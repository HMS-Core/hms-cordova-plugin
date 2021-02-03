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

var ROOT_GRADLE_FILE = "platforms/android/build.gradle";
var COMMENT = "//This line is added by cordova-plugin-hms-analytics plugin";
var NEW_LINE = "\n";

module.exports = function (context) {
    if (!FSUtils.exists(ROOT_GRADLE_FILE)) {
        console.log(
            "root gradle file does not exist. after_plugin_install script wont be executed."
        );
    }

    var rootGradleContent = FSUtils.readFile(ROOT_GRADLE_FILE, "UTF-8");
    var lines = rootGradleContent.split(NEW_LINE);

    var depAddedLines = addAGConnectDependency(lines);
    var repoAddedLines = addHuaweiRepo(depAddedLines);

    FSUtils.writeFile(ROOT_GRADLE_FILE, repoAddedLines.join(NEW_LINE));
};

function addAGConnectDependency(lines) {
    var AG_CONNECT_DEPENDENCY =
        "classpath 'com.huawei.agconnect:agcp:1.4.2.301' " + COMMENT;
    var pattern = /(\s*)classpath(\s+)\'com.android.tools.build:gradle:([0-9-\.\:]+)/m;
    var index;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (pattern.test(line)) {
            index = i;
            break;
        }
    }

    lines.splice(index + 1, 0, AG_CONNECT_DEPENDENCY);
    return lines;
}

function addHuaweiRepo(lines) {
    var HUAWEI_REPO =
        "maven { url 'https://developer.huawei.com/repo/' } " + COMMENT;
    var pattern = /(\s*)jcenter\(\)/m;
    var indexList = [];

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (pattern.test(line)) {
            indexList.push(i);
        }
    }

    for (var i = 0; i < indexList.length; i++) {
        lines.splice(indexList[i] + 1, 0, HUAWEI_REPO);
        if (i < indexList.length - 1) {
            indexList[i + 1] = indexList[i + 1] + 1;
        }
    }

    return lines;
}
