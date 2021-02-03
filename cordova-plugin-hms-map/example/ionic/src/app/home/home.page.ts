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
import {Component} from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {
    AnimationSet,
    CameraUpdateFactory,
    Circle,
    HMSMap,
    HuaweiMap,
    MapEvent,
    Marker,
    TileType
} from '@hmscore/ionic-native-hms-map/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    markerId: string;
    private map: HuaweiMap;
    private components = new Map<string, any>();

    constructor(public navCtrl: NavController, private hmsMap: HMSMap, public alertController: AlertController) {

    }

    scrollStart(event) {
        console.log('logScrollStart : When Scroll Starts', event);
    }

    async scrolling(event) {
        console.log('logScrolling : When Scrolling', event);
        await this.map.scroll();
    }

    scrollEnd(event) {
        console.log('logScrollEnd : When Scroll Ends', event);
    }

    navigate() {
        this.map.destroyMap();
        this.navCtrl.navigateRoot('/second', {}).then(value => console.log(value));
    }

    async addMarkerInfo() {
        await this.map.setInfoWindowAdapter({file: 'www/assets/marker_info.html', width: 100, height: 100});
    }

    async addMarkerAnim() {
        const marker = this.map.getComponent('Marker102');
        const animationSet = new AnimationSet();
        animationSet.addRotateAnimation({
            fromDegree: 30, toDegree: 170, duration: 1200, repeatCount: 3,
            animationStart: () => {
                console.log('rotate animation started');
            },
            animationEnd: () => {
                console.log('rotate animation end');
            }
        });

        animationSet.addAlphaAnimation({
            fromAlpha: 0.2, toAlpha: 0.8, duration: 1000, repeatCount: 4,
            animationStart: () => {
                console.log('rotate alpha started');
            },
            animationEnd: () => {
                console.log('rotate alpha end');
            }
        });

        await marker.setAnimation(animationSet);
        await marker.startAnimation();
    }

    async initMap() {
        const mapOptions = {
            cameraPosition: {
                target: {lat: 40.7587658, lng: 30.3146964},
                zoom: 2
            }
        };

        this.hmsMap.requestPermission();
        this.map = await this.hmsMap.getMap('map', mapOptions, {marginTop: 50});
        this.addListener();
        this.map.setMyLocationEnabled(true);
        this.map.getUiSettings().setMyLocationButtonEnabled(true);
        this.map.getProjection().getVisibleRegion().then(vr => console.log(JSON.stringify(vr)));
        this.map.getProjection().toScreenLocation({lat: 12, lng: 43}).then(point => console.log(JSON.stringify(point)));
        this.map.getProjection().fromScreenLocation({x: 300, y: 600}).then(latLng => console.log(JSON.stringify(latLng)));
    }

    async destroyMap() {
        await this.map.destroyMap();
    }

    addDiv() {
        const div = document.createElement('div');
        div.innerHTML = 'This demo DIV block was inserted into the page using JavaScript. This demonstrates how MapView reacts to dynamic page changes.';
        div.style.height = '100px';
        document.getElementById('log').insertAdjacentElement('afterbegin', div);

        let block;
        block = document.createElement('div');
        block.innerHTML = 'This demo DIV block was inserted into the page using JavaScript. This demonstrates how MapView reacts to dynamic page changes.';
        block.style.height = '100px';
        const containerBlock = document.getElementById('wrapper');
        containerBlock.appendChild(block);
    }

    async removeComponent() {
        const input = this.markerId;
        console.log('Input->', input);
        await this.map.removeComponent(input);
    }

    async showMap() {
        this.map = await this.hmsMap.showMap('map');
    }

    async hideMap() {
        await this.map.hideMap();
    }

    async addMarker() {
        const markerOptions = {position: {lat: 36, lng: 23}};
        const marker: Marker = await this.map.addMarker(markerOptions);
        console.log('Marker\'s Id->', marker.getId());
        marker.getAlpha().then(value => console.log('Marker\'s alpha is ', value));
        this.components[marker.getId()] = marker;
    }

    async addCircle() {
        const circleOptions = {
            center: {lat: 40.7587658, lng: 30.3146964},
            radius: 10000,
            fillColor: -65281,
            clickable: true
        };

        const circle: Circle = await this.map.addCircle(circleOptions);
        circle.getCenter().then(value => console.log('center is ', value.lat, '   ', value.lng));
        this.components[circle.getId()] = circle;
    }

    async addPolyline() {
        const polylineOptions = {
            points: [{lat: 54.5, lng: -0.1}, {lat: 42.7, lng: -72.0}],
            color: -65536,
            width: 5.0,
            clickable: true
        };
        const polyline = await this.map.addPolyline(polylineOptions);
        this.components[polyline.getId()] = polyline;
    }

    async addPolygon() {
        const polygonOptions = {
            points: [{lat: 25, lng: 35}, {lat: 30, lng: 35}, {lat: 27, lng: 45}]
            , fillColor: -65536
            , clickable: true
        };
        const polygon = await this.map.addPolygon(polygonOptions);
        this.components[polygon.getId()] = polygon;
    }

    async addGroundOverlay() {
        const groundOverlayOptions = {
            position: {latLng: {lat: 38, lng: 27}, width: 30, height: 30},
            image: {hue: 210},
            transparency: 0,
            visible: true,
            zIndex: 4,
            bearing: 4,
        };
        const groundOverlay = await this.map.addGroundOverlay(groundOverlayOptions);
        await groundOverlay.setPositionFromBounds({
            northeast: {lat: 45, lng: 11},
            southwest: {lat: 35, lng: 17}
        });
        this.components[groundOverlay.getId()] = groundOverlay;
    }

    async addTileOverlay() {
        const tileOverlayOptions = {
            tileProvider: {type: TileType.URL_TILE, data: {URL: 'https://a.tile.openstreetmap.org/${z}/${x}/${y}.png'}}
        };
        const tileOverlay = await this.map.addTileOverlay(tileOverlayOptions);
        this.components[tileOverlay.getId()] = tileOverlay;
    }

    async animateCamera() {
        const position = {target: {lat: 38, lng: 26}, zoom: 6, bearing: 30, tilt: 0};
        await this.map.animateCamera(CameraUpdateFactory.newCameraPosition(position), {
            onFinish: () => {
                console.log('Javascript onFinish called');
            },
            onCancel: () => {
                console.log('Javascript onCancel called');
            }
        }, 1000);
    }

    addListener() {
        const log = document.getElementById('log');
        this.map.on(MapEvent.ON_MAP_CLICK, (latLng) => {
            log.innerHTML = '<br>' + 'Map_Click:' + latLng.lat + '<-->' + latLng.lng + log.innerHTML;
        });
        this.map.on(MapEvent.ON_MAP_LONG_CLICK, (latLng) => {
            log.innerHTML = '<br>' + 'Map_Long_Click:' + latLng.lat + '<-->' + latLng.lng + log.innerHTML;
        });
        this.map.on(MapEvent.ON_MARKER_CLICK, (marker) => {
            if (marker.isInfoWindowShown()) {
                marker.showInfoWindow();
            }
            log.innerHTML = '<br>' + 'Marker_Click:' + marker.id + log.innerHTML;
        });
        this.map.on(MapEvent.ON_CIRCLE_CLICK, (circle) => {
            log.innerHTML = '<br>' + 'Circle_Click:' + circle.id + log.innerHTML;
        });
        this.map.on(MapEvent.ON_POLYGON_CLICK, (polygon) => {
            log.innerHTML = '<br>' + 'Polygon_Click:' + polygon.id + log.innerHTML;
        });
        this.map.on(MapEvent.ON_MY_LOCATION_CLICK, (location) => {
            log.innerHTML = '<br>' + 'MyLocation_Click:' + location.latitude + '<-->' + location.longitude + log.innerHTML;
        });

    }

    async newLatLng() {
        const latLng = {lat: 64, lng: 55};
        await this.map.animateCamera(CameraUpdateFactory.newLatLng(latLng), {
            onFinish: () => {
                console.log('Javascript onFinish called');
            },
            onCancel: () => {
                console.log('Javascript onCancel called');
            }
        }, 1000);
    }

    async newLatLngZoom() {
        const latLng = {lat: 15, lng: 11};
        const zoom = 10;
        await this.map.animateCamera(CameraUpdateFactory.newLatLngZoom(latLng, zoom), {
            onFinish: () => {
                console.log('Javascript onFinish called');
            },
            onCancel: () => {
                console.log('Javascript onCancel called');
            }
        }, 1000);
    }

    async zoomBy() {
        const amount = 15;
        await this.map.animateCamera(CameraUpdateFactory.zoomBy(amount), {
            onFinish: () => {
                console.log('Javascript onFinish called');
            },
            onCancel: () => {
                console.log('Javascript onCancel called');
            }
        }, 1000);
    }

    async enableMapPointers() {
        const isMapPointersEnabled = await this.map.isMapPointersEnabled();
        if(!isMapPointersEnabled){
            await this.map.setMapPointersEnabled(true);
            console.log("setMapPointersEnabled true");
        }
    }

    async disableMapPointers() {
        const isMapPointersEnabled = await this.map.isMapPointersEnabled();
        if(isMapPointersEnabled){
            await this.map.setMapPointersEnabled(false);
            console.log("setMapPointersEnabled false");
        }
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'Overlay Button clicked.',
            buttons: ['OK']
        });
        await alert.present();
    }
}
