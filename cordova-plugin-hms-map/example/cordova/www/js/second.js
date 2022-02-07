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
    document.getElementById("addMarkersAndMove").onclick = addMarkersAndMove;
    document.getElementById("changeClusterColor").onclick = changeClusterColor;
    document.getElementById("changeClusterIcon").onclick = changeClusterIcon;
    document.getElementById("clearClusterStyle").onclick = clearClusterStyle;
    document.getElementById("changeLogoPosition").onclick = changeLogoPosition;
    document.getElementById("changeLogoPadding").onclick = changeLogoPadding;
    document.getElementById("clearLogoSettings").onclick = clearLogoSettings;
    document.getElementById("changeStyle").onclick = changeStyle;

    let mapOptions = {"cameraPosition": {"target": {"lat": 40.7587658, "lng": 30.3146964}, "zoom": 2}};
    map = await HMSMap.getMap("secondMap", mapOptions);
    await map.setMyLocationEnabled(true);
    await map.setMarkersClustering(true);
}

async function addMarkersAndMove() {
    const position = {"target":{"lat":48.893478,"lng":2.334595}, "zoom": 10};
    await map.moveCamera(HMSMap.CameraUpdateFactory.newCameraPosition(position));

    // Add the marker to the cluster.
    await map.addMarker({"position": {"lat": 48.891478, "lng": 2.334595}, clusterable: true});
    await map.addMarker({"position": {"lat": 48.892478, "lng": 2.334595}, clusterable: true});
    await map.addMarker({"position": {"lat": 48.893478, "lng": 2.334595}, clusterable: true});
    await map.addMarker({"position": {"lat": 48.894478, "lng": 2.334595}, clusterable: true});
    await map.addMarker({"position": {"lat": 48.895478, "lng": 2.334595}, clusterable: true});
    await map.addMarker({"position": {"lat": 48.896478, "lng": 2.334595}, clusterable: true});

    await map.setMarkersClustering(true);
}

async function changeClusterColor() {
    await clearClusterStyle();
    await map.getUiSettings().setMarkerClusterColor(HMSMap.Color.RED);
}

async function changeClusterIcon() {
    const textColor = 0xff000000; // black
    const iconBitmap = {
        "asset": {
            "fileName": "www/icon/cluster-triangle.png",
            "scaledSize": {
                "width": 120,
                "height": 120
            }
        }
    }
    await map.getUiSettings().setMarkerClusterIcon(iconBitmap);
    await map.getUiSettings().setMarkerClusterTextColor(textColor);
}

async function clearClusterStyle() {
    await map.getUiSettings().setMarkerClusterIcon(null);
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

async function changeLogoPosition() {
    const logoPosition = HMSMap.Gravity.TOP|HMSMap.Gravity.END;
    await map.getUiSettings().setLogoPosition(logoPosition);
}

async function changeLogoPadding() {
    await map.getUiSettings().setLogoPadding(0, 0, 0, 0);
}

async function clearLogoSettings() {
    const logoPosition = HMSMap.Gravity.BOTTOM|HMSMap.Gravity.START;
    await map.getUiSettings().setLogoPosition(logoPosition);
    await map.getUiSettings().setLogoPadding(50, 50, 50, 50);
}

async function changeStyle() {
    const styleId = "<style_id>";
    const previewId = "<preview_id>";
    await map.setStyleId(styleId);
    await map.previewId(previewId);
}
