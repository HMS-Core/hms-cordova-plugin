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

document.addEventListener('deviceready', onDeviceReady, false);
let map;
async function onDeviceReady(){
    document.getElementById("showMap").onclick = showMap;
    document.getElementById("hideMap").onclick = hideMap;
    document.getElementById("navigateToFirst").onclick = navigateToFirst;
    document.getElementById("animate-camera").onclick = animateCamera;
    document.getElementById("move-camera").onclick = moveCamera;
    document.getElementById("add-marker").onclick = addMarker;
    let mapOptions = {"cameraPosition": {"target": {"lat": 40.7587658, "lng": 30.3146964}, "zoom": 2}};
    map = await HMSMap.getMap("secondMap", mapOptions);
    await map.setMyLocationEnabled(true);
    await map.setMarkersClustering(true);
}

async function addMarker(){
    const lat = document.getElementById("marker-lat").value;
    const lng = document.getElementById("marker-lng").value;
    await map.addMarker({"position": {"lat": lat, "lng": lng}});
}

async function animateCamera(){
    const lat = document.getElementById("lat-input").value;
    const lng = document.getElementById("lng-input").value;
    const duration = document.getElementById("duration-input").value;
    const position = {"target":{"lat":lat,"lng":lng}, "zoom": 6};
    await map.animateCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position),{
        onFinish: ()=> {
            console.log("Javascript onFinish called")
        }
    },duration);
    await map.addMarker({"position": {"lat": lat, "lng": lng}});
}

async function moveCamera(){
    const lat = document.getElementById("lat-input").value;
    const lng = document.getElementById("lng-input").value;
    const duration = document.getElementById("duration-input").value;
    const position = {"target":{"lat":lat,"lng":lng}, "zoom": 6};
    await map.moveCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position));
    await map.addMarker({"position": {"lat": lat, "lng": lng}});
}

async function showMap(){
    map = await HMSMap.showMap("secondMap");
}
async function hideMap(){
    await map.hideMap();
}

async function navigateToFirst(){
    window.location.href="index.html";
    map.hideMap();
};

