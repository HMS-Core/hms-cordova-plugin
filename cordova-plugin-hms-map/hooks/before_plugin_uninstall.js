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
        console.log('root gradle file does not exist. before_plugin_uninstall script wont be executed.');
    }

    const projectGradleContent = FSUtils.readFile(PROJECT_GRADLE_FILE, 'UTF-8');
    let lines = projectGradleContent.split(NEW_LINE);
    const linesAfterRemove = removeLinesAddedByPlugin(lines);
    FSUtils.writeFile(PROJECT_GRADLE_FILE, linesAfterRemove.join(NEW_LINE));

    const appGradleContent = FSUtils.readFile(APP_GRADLE_FILE, 'UTF-8');
    lines = appGradleContent.split(NEW_LINE);
    const linesAfterRemoveAppGradle = removeLinesAddedByPlugin(lines);
    FSUtils.writeFile(APP_GRADLE_FILE, linesAfterRemoveAppGradle.join(NEW_LINE));

}

function removeLinesAddedByPlugin(lines) {
    const indexList = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes(COMMENT)) {
            indexList.push(i);
        }
    }

    for (let i = 0; i < indexList.length; i++) {
        lines.splice(indexList[i], 1);
        //if a line is removed, indexes are changed
        if (i !== indexList.length - 1) {
            for (let j = i + 1; j < indexList.length; j++) {
                indexList[j] = indexList[j] - 1;
            }
        }
    }
    return lines;
}
