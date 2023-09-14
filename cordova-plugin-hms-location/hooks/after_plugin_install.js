/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

var ROOT_BUILD_GRADLE_FILE = "platforms/android/build.gradle";
var ROOT_REPOSITORIES_GRADLE_FILE = "platforms/android/repositories.gradle";
var APP_REPOSITORIES_GRADLE_FILE = "platforms/android/app/repositories.gradle";
var APP_ANDROID_MANIFEST_FILE = "platforms/android/app/src/main/AndroidManifest.xml" 
var COMMENT = "//This line is added by cordova-plugin-hms-location plugin";
var NEW_LINE = "\n";

var TARGET_ATTRIBUTE = 'android:requestLegacyExternalStorage';
var TARGET_VALUE = TARGET_ATTRIBUTE+'="true"';
var TARGET_REGEX = new RegExp(TARGET_ATTRIBUTE+'="([^"]+)"');

module.exports = function (context) {
    if (!FSUtils.exists(ROOT_BUILD_GRADLE_FILE)) {
        console.log("root gradle file does not exist. after_plugin_install script wont be executed.");
    }

    var rootGradleContent = FSUtils.readFile(ROOT_BUILD_GRADLE_FILE, "UTF-8");
    var lines = rootGradleContent.split(NEW_LINE);

    var depAddedLines = addAGConnectDependency(lines);
    var repoAddedLines = addHuaweiRepo(depAddedLines);

    FSUtils.writeFile(ROOT_BUILD_GRADLE_FILE, repoAddedLines.join(NEW_LINE));

    addAndroidManifestAttribute(APP_ANDROID_MANIFEST_FILE);
    updateRepositoriesGradle(ROOT_REPOSITORIES_GRADLE_FILE);
    updateRepositoriesGradle(APP_REPOSITORIES_GRADLE_FILE);
};

function addAndroidManifestAttribute(param){
    if (FSUtils.exists(param)) {
        var data = FSUtils.readFile(param, 'utf8');
        var result;
        if(!data.match(TARGET_ATTRIBUTE)) { 
          result = data.replace(/<application/g, '<application ' + TARGET_VALUE); 
        }else if (data.match(TARGET_REGEX) && !data.match(TARGET_VALUE)){
          result = data.replace(TARGET_REGEX, TARGET_VALUE);
        }
    
        if(result){
            FSUtils.writeFile(param, result, 'utf8', function (err) {
            if (err) throw new Error('Unable to write AndroidManifest.xml: ' + err);
          })
        };
    } else {
        console.log("Check Android Manifest file exist or not.")
    }
}

function addAGConnectDependency(lines) {
    var AG_CONNECT_DEPENDENCY = "classpath 'com.huawei.agconnect:agcp:1.9.0.300' " + COMMENT;
    var pattern = /(\s*)classpath(\s+)[\',\"]com.android.tools.build:gradle.*[^\]\n]/m;
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
    var HUAWEI_REPO = "maven { url 'https://developer.huawei.com/repo/' } " + COMMENT;
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

function updateRepositoriesGradle(file) {
    if (FSUtils.exists(file)) {
        var repoGradleContent = FSUtils.readFile(file, "UTF-8");
        if (repoGradleContent.indexOf("developer.huawei.com/repo") === -1) {
            var lastIndexOfCurlyBracket = repoGradleContent.lastIndexOf("}");

            repoGradleContent =
                repoGradleContent.substring(0, lastIndexOfCurlyBracket) +
                "    maven { url 'https://developer.huawei.com/repo/' } "+COMMENT+" \n}" +
                repoGradleContent.substring(lastIndexOfCurlyBracket + 1);

            FSUtils.writeFile(file, repoGradleContent);
        }
    }
}
