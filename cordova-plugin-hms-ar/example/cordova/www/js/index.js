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

document.addEventListener('deviceready', async () => {
	const isAPKReady = await HMSAR.isAREngineServiceAPKReady();
	if(!isAPKReady)
		await HMSAR.navigateToAppMarket();
	const hasPermission = await HMSAR.hasCameraPermission();
	if(!hasPermission)
		await HMSAR.requestCameraPermission();
},false);

let arHand = null;
let arWorld = null;
let arFace = null;
let arBody = null;
document.getElementById('start-hand-scene').onclick = async () => {
	if (arHand != null) await arHand.destroy();
	if (arWorld != null) await arWorld.destroy();
	if (arFace != null) await arFace.destroy();
	if (arBody != null) await arBody.destroy();
	arHand = null;
	arWorld = null;
	arFace = null;
	arBody = null;
	arHand = new HMSAR.ARHandScene("scene");
	await arHand.startARScene({});
	await arHand.on((value) => {
		console.log(JSON.stringify(value));
		const type = value[0].gestureType;
		if (type == 0) {
			console.log("Box moves to top.");
			const currentTop = parseInt(document.getElementById('move-me').style.top);
			document.getElementById('move-me').style.top = `${currentTop + 1}px`;
		} else if (type == 1) {
			console.log("Box moves to bottom.");
			const currentTop = parseInt(document.getElementById('move-me').style.top);
			document.getElementById('move-me').style.top = `${currentTop - 1}px`;
		}
	});
};

document.getElementById('start-world-scene').onclick = async () => {
	if (arHand != null) await arHand.destroy();
	if (arWorld != null) await arWorld.destroy();
	if (arFace != null) await arFace.destroy();
	if (arBody != null) await arBody.destroy();
	arHand = null;
	arWorld = null;
	arFace = null;
	arBody = null;
	arWorld = new HMSAR.ARWorldScene("scene");
	await arWorld.startARScene({objPath:"www/img/blub.obj", texturePath:"www/img/blub_texture.png"});
	await arWorld.on((value) => {
		console.log(JSON.stringify(value));
	});
};

document.getElementById('start-face-scene').onclick = async () => {
	if (arHand != null) await arHand.destroy();
	if (arWorld != null) await arWorld.destroy();
	if (arFace != null) await arFace.destroy();
	if (arBody != null) await arBody.destroy();
	arHand = null;
	arWorld = null;
	arFace = null;
	arBody = null;
	arFace = new HMSAR.ARFaceScene("scene");
	await arFace.startARScene();
	await arFace.on((value) => {
		console.log(JSON.stringify(value));
	});
};

document.getElementById('start-body-scene').onclick = async () => {
	if (arHand != null) await arHand.destroy();
	if (arWorld != null) await arWorld.destroy();
	if (arFace != null) await arFace.destroy();
	if (arBody != null) await arBody.destroy();
	arHand = null;
	arWorld = null;
	arFace = null;
	arBody = null;
	arBody = new HMSAR.ARBodyScene("scene");
	await arBody.startARScene();
	await arBody.on((value) => {
	    console.log(JSON.stringify(value));
	});
};

document.getElementById('move-me').onclick = async () => {
	const handConfig = {
		boxColor: { red: 255, green: 65, blue: 72, alpha: 1 },
		draw: true,
		lineWidth: 30.5
	};
	await arHand.setConfig(handConfig);
};