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

'use strict';

const FSUtils = require('./FSUtils');

const PROJECT_GRADLE_FILE = 'platforms/android/build.gradle';
const APP_GRADLE_FILE = 'platforms/android/app/build.gradle';
const COMMENT = '//This line is added by cordova-plugin-hms-map plugin';
const NEW_LINE = '\n';

module.exports = function (context) {

    if (!FSUtils.exists(PROJECT_GRADLE_FILE)) {
        console.log('root gradle file does not exist. after_plugin_install script wont be executed.');
    }

    if (!FSUtils.exists(APP_GRADLE_FILE)) {
        console.log('app gradle file does not exist. after_plugin_install script wont be executed.');
    }

    const rootGradleContent = FSUtils.readFile(PROJECT_GRADLE_FILE, 'UTF-8');
    let lines = rootGradleContent.split(NEW_LINE);
    const depAddedLines = addAGConnectDependency(lines);
    const repoAddedLines = addHuaweiRepo(depAddedLines);
    FSUtils.writeFile(PROJECT_GRADLE_FILE, repoAddedLines.join(NEW_LINE));

    const appGradleContent = FSUtils.readFile(APP_GRADLE_FILE, 'UTF-8');
    lines = appGradleContent.split(NEW_LINE);
    const applyPluginAddedLines = addApplyPlugin(lines);
    FSUtils.writeFile(APP_GRADLE_FILE, applyPluginAddedLines.join(NEW_LINE));
}

function addApplyPlugin(lines) {
    const APPLY_PLUGIN = 'apply plugin: \'com.huawei.agconnect\' ' + COMMENT;
    const pattern = /apply plugin: 'com.android.application'/m;
    let index;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (pattern.test(line)) {
            index = i;
            break;
        }
    }
    lines.splice(index + 1, 0, APPLY_PLUGIN);
    return lines;
}

function addAGConnectDependency(lines) {
    const AG_CONNECT_DEPENDENCY = '\t\tclasspath \'com.huawei.agconnect:agcp:1.4.1.300\' ' + COMMENT;
    const pattern = /(\s*)classpath(\s+)\'com.android.tools.build:gradle:([0-9-\.\:]+)/m;
    let index;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (pattern.test(line)) {
            index = i;
            break;
        }
    }
    lines.splice(index + 1, 0, AG_CONNECT_DEPENDENCY);
    return lines;
}

function addHuaweiRepo(lines) {
    const HUAWEI_REPO = '\t\tmaven { url \'https://developer.huawei.com/repo/\' } ' + COMMENT;
    const pattern = /(\s*)jcenter\(\)/m;

    const indexList = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (pattern.test(line)) {
            indexList.push(i);
        }
    }

    for (let i = 0; i < indexList.length; i++) {
        lines.splice(indexList[i] + 1, 0, HUAWEI_REPO);
        if (i < indexList.length - 1) {
            indexList[i + 1] = indexList[i + 1] + 1;
        }
    }
    return lines;
}
