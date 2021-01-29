/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
   import { Component } from '@angular/core';
   import { Platform } from '@ionic/angular'
   import { HmsSite } from '@ionic-native/hms-site/ngx'
   
   @Component({
     selector: 'app-home',
     templateUrl: 'home.page.html',
     styleUrls: ['home.page.scss'],
   })
   export class HomePage {
   
     constructor(private hmssite: HmsSite, private platform: Platform) {
       let config = {
         apiKey: "<API_KEY>"
       };
       hmssite.initializeService(
         config
       );
       platform.ready().then(() => {
         console.log("Platform is ready.");
       });
     }
     public async onTextSearch() {
       let textSearchReq = {
         query: "Paris",
         location: {
           lat: 48.893478,
           lng: 2.334595,
         },
         radius: 1000,
         poiType: this.hmssite.LocationType.ADDRESS,
         countryCode: "FR",
         language: "fr",
         pageIndex: 1,
         pageSize: 5
       };
       try {
         alert(JSON.stringify(await this.hmssite.textSearch(
           textSearchReq
         )))
       }
       catch (ex) {
         alert(JSON.stringify(ex))
       }
     }
   
     public async onDetailSearch() {
       let detailSearchReq = {
         siteId: "16DA89C6962A36CB1752A343ED48B78A",
         language: "fr"
       };
       try {
         alert(JSON.stringify(await this.hmssite.detailSearch(
           detailSearchReq
         )))
       }
       catch (ex) {
         alert(JSON.stringify(ex))
       }
     }
   
     public async onQuerySuggestion() {
       let querySuggestionReq = {
         query: "Paris",
         location: {
           lat: 48.893478,
           lng: 2.334595,
         },
         poiType: [this.hmssite.LocationType.ADDRESS, this.hmssite.LocationType.GEOCODE],
         radius: 1000,
         countryCode: "FR",
         language: "fr",
       };
       try {
         alert(JSON.stringify(await this.hmssite.querySuggestion(
           querySuggestionReq
         )))
       }
       catch (ex) {
         alert(JSON.stringify(ex))
       }
     }
   
     public async onNearbySearch() {
       let nearbySearchReq = {
         query: "Paris",
         location: {
           lat: 48.893478,
           lng: 2.334595,
         },
         radius: 1000,
         poiType: this.hmssite.LocationType.ADDRESS,
         countryCode: "FR",
         language: "fr",
         pageIndex: 1,
         pageSize: 5
       };
       try {
         alert(JSON.stringify(await this.hmssite.nearbySearch(
           nearbySearchReq
         )))
       }
       catch (ex) {
         alert(JSON.stringify(ex))
       }
     }
   
     public async onWidgetSearch() {
       var widgetSearchReq = {
         query: "Paris",
         location: {
           lat: 48.893478,
           lng: 2.334595,
         },
         coordinateBounds: {
           northeast: {
             lat: 48.858166833205594,
             lng: 2.3527817476503596,
           },
           southwest: {
             lat: 48.85562316679441,
             lng: 2.34891565234964,
           },
         },
         radius: 1000,
         poiTypes: [this.hmssite.LocationType.ADDRESS, this.hmssite.LocationType.GEOCODE],
         hwPoiTypes: [this.hmssite.HwLocationType.ADDRESS],
         countryCode: "FR",
         language: "fr",
         hint: "Search Place"
       };
       try {
         let result = await this.hmssite.widgetSearch(widgetSearchReq);
         alert(JSON.stringify(result))
       } catch (ex) {
         alert(JSON.stringify(ex))
       }
   
     }
   
   }
   