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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("barrierCombination").addEventListener("click", barrierCombination);
}, false);

const barrierCombination = () => {
    let barrierCombinationLabel = "barrierCombinationLabelCustom";
    AwarenessBarrier.CombinationBarrier.and(AwarenessBarrier.HeadsetBarrier.disconnecting(),
        AwarenessBarrier.WifiBarrier.keeping(1), AwarenessBarrier.CombinationBarrier.not(AwarenessBarrier.ScreenBarrier.screenOff()))
        .subscribe((data) => {
            alert(JSON.stringify(data));
            console.log(JSON.stringify(data));
        }).catch(err => {
            aler(JSON.stringify(err));
            console.log(JSON.stringify(err));
        }).run(barrierCombinationLabel);
}
