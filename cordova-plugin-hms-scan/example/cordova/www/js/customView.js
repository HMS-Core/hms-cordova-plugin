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
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("customViewMode").addEventListener("click", () => customViewMode());
	document.getElementById("stopViewService").addEventListener("click", () => stopViewService());
	document.getElementById("wrapperButton").addEventListener("click", () => myFunc());
	document.getElementById("openFlushLight").addEventListener("click", () => openFlushLight());
	document.getElementById("pauseContinuouslyScan").addEventListener("click", () => pauseContinuouslyScan());
	document.getElementById("resumeContinuouslyScan").addEventListener("click", () => resumeContinuouslyScan());

}, false);

async function customViewMode() {
	const customScanRequest = {
		scanTypes: [HMSScan.ScanTypes.ALL_SCAN_TYPE],
		scanFrameSize: 200,
		enableReturnBitmap: false,
		isContinuouslyScan: false,
		enableScanAreaBox: true,
	}

	CustomView.on("scanResultClickListener", (value) => {
		console.log(JSON.stringify(value));
	});
	await CustomView.customViewMode("scene", customScanRequest);
};
async function stopViewService() {
	await CustomView.stopViewService();
};
async function openFlushLight() {
	await CustomView.openFlushLight();
};
async function pauseContinuouslyScan() {
	await CustomView.pauseContinuouslyScan();
};
async function resumeContinuouslyScan() {
	await CustomView.resumeContinuouslyScan();
};
function myFunc() {
	let block; block = document.createElement('div'); block.innerHTML = 'This demo DIV block was inserted into the page using JavaScript. This demonstrates how MapView reacts to dynamic page changes.'; block.style.height = '100px'; const containerBlock = document.getElementById('wrapper'); containerBlock.appendChild(block);
}
