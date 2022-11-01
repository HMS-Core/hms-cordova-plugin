/*
  Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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
    if (!isAPKReady)
        await HMSAR.navigateToAppMarket();
    const hasPermission = await HMSAR.hasCameraPermission();
    if (!hasPermission)
        await HMSAR.requestCameraPermission();
}, false);

let arHand = null;
let arWorld = null;
let arFace = null;
let arBody = null;
let arWordBody = null;
let arSceneMesh = null;
let arAugmentedImage = null;
document.getElementById('start-hand-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arHand = new HMSAR.ARHandScene("scene");
    await arHand.startARScene({});
    await arHand.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
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

         document.getElementById('progress').innerHTML = "";
         document.getElementById('event').innerHTML = "";
    });
    await arHand.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arHand.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arHand.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-world-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arWorld = new HMSAR.ARWorldScene("scene");
    await arWorld.startARScene({objPath: "www/img/blub.obj", texturePath: "www/img/blub_texture.png"});
    await arWorld.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById('progress').innerHTML = "";
        document.getElementById('event').innerHTML = "";

    });
    await arWorld.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arWorld.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arWorld.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-face-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arFace = new HMSAR.ARFaceScene("scene");
    await arFace.startARScene({multiFace: true});
    await arFace.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById('progress').innerHTML = "";
        document.getElementById('event').innerHTML = "";
    });
    await arFace.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arFace.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arFace.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-body-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arBody = new HMSAR.ARBodyScene("scene");
    await arBody.startARScene();
    await arBody.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById('progress').innerHTML = "";
        document.getElementById('event').innerHTML = "";
    });
    await arBody.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arBody.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arBody.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-world-body-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arWordBody = new HMSAR.ARWorldBodyScene("scene");
    await arWordBody.startARScene({objPath: "www/img/blub.obj", texturePath: "www/img/blub_texture.png"});
    await arWordBody.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById('progress').innerHTML = "";
        document.getElementById('event').innerHTML = "";
    });
    await arWordBody.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arWordBody.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arWordBody.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-scene-mesh-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arSceneMesh = new HMSAR.ARSceneMeshScene("scene");
    await arSceneMesh.startARScene({objPath: "www/img/blub.obj", texturePath: "www/img/blub_texture.png"});
    await arSceneMesh.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById('progress').innerHTML = "";
        document.getElementById('event').innerHTML = "";
    });
    await arSceneMesh.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arSceneMesh.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arSceneMesh.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-augmented-image-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arAugmentedImage = new HMSAR.ARAugmentedImageScene("scene");
    const config = {
        augmentedImages:[{
            imgFileFromAsset: "www/img/image_default.png",
            widthInMeters: 0,
            imgName: "Tech Park"
        }]
    }
    await arAugmentedImage.startARScene(config);
    await arAugmentedImage.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
        document.getElementById('progress').innerHTML = "";
        document.getElementById('event').innerHTML = "";
    });
    await arAugmentedImage.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arAugmentedImage.on(HMSAR.Events.HANDLE_CAMERA_CONFIG_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arScenarAugmentedImageeMesh.on(HMSAR.Events.HANDLE_CAMERA_INTRINSICS_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
};

document.getElementById('start-health-scene').onclick = async () => {
    if (arHand != null) await arHand.destroy();
    if (arWorld != null) await arWorld.destroy();
    if (arFace != null) await arFace.destroy();
    if (arBody != null) await arBody.destroy();
    if (arWordBody != null) await arWordBody.destroy();
    if (arSceneMesh != null) await arSceneMesh.destroy();
    if (arAugmentedImage != null) await arAugmentedImage.destroy();
    arHand = null;
    arWorld = null;
    arFace = null;
    arBody = null;
    arWordBody = null;
    arSceneMesh = null;
    arAugmentedImage = null;
    arFace = new HMSAR.ARFaceScene("scene");
    await arFace.startARScene({enableHealthDevice:true});
    await arFace.on(HMSAR.Events.ON_DRAW_FRAME, (value) => {
        console.log(JSON.stringify(value));
    });
    await arFace.on(HMSAR.Events.HANDLE_MESSAGE_DATA, (value) => {
        console.log(JSON.stringify(value));
    });
    await arFace.on(HMSAR.Events.HANDLE_PROCESS_PROGRESS_EVENT, (value) => {
        document.getElementById('progress').innerHTML = JSON.stringify(value);
        console.log(JSON.stringify(value));
    });
    await arFace.on(HMSAR.Events.HANDLE_EVENT, (value) => {
        document.getElementById('event').innerHTML = JSON.stringify(value);
        console.log(JSON.stringify(value));
    });
    await arFace.on(HMSAR.Events.HANDLE_RESULT, (value) => {
        console.log(JSON.stringify(value));
    });

};


document.getElementById('move-me').onclick = async () => {
    const handConfig = {
        boxColor: {red: 255, green: 65, blue: 72, alpha: 1},
        draw: true,
        lineWidth: 30.5
    };
    await arHand.setConfig(handConfig);
};
