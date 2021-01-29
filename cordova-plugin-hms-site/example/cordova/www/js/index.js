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

var app = (function () {
  var init = function () {
    document.addEventListener("deviceready", onDeviceReady, false);
  };

  var onDeviceReady = function () {
    document.getElementById("btnTextSearch").addEventListener("click", onTextSearch);
    document.getElementById("btnDetailSearch").addEventListener("click", onDetailSearch);
    document.getElementById("btnQuerySuggestion").addEventListener("click", onQuerySuggestion);
    document.getElementById("btnNearbySearch").addEventListener("click", onNearbySearch);
    document.getElementById("btnWidgetSearch").addEventListener("click", widgetSearch);

    //Initialize service
    var config = {
      apiKey: "<API_KEY>"
    };
    HMSSite.initializeService(
      config
    );
  };

  init();
})();


async function onTextSearch() {
  var textSearchReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    radius: 1000,
    poiType: HMSSite.LocationType.ADDRESS,
    hwPoiType: HMSSite.HwLocationType.ADDRESS,
    countryCode: "FR",
    language: "fr",
    pageIndex: 1,
    pageSize: 5
  };
  try {
    console.log(JSON.stringify(textSearchReq));
    alert(JSON.stringify(await HMSSite.textSearch(
      textSearchReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }

}

async function widgetSearch() {
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
    poiTypes: [HMSSite.LocationType.ADDRESS, HMSSite.LocationType.GEOCODE],
    countryCode: "FR",
    language: "fr",
    hint: "Search Place"
  };
  try {
    let result = await HMSSite.widgetSearch(widgetSearchReq);
    alert(JSON.stringify(result))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}

async function onDetailSearch() {
  var detailSearchReq = {
    siteId: "16DA89C6962A36CB1752A343ED48B78A",
    language: "fr"
  };
  try {
    alert(JSON.stringify(await HMSSite.detailSearch(
      detailSearchReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }
}

async function onQuerySuggestion() {
  var querySuggestionReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    poiTypes: [HMSSite.LocationType.ADDRESS, HMSSite.LocationType.GEOCODE],
    radius: 1000,
    countryCode: "FR",
    language: "fr",
  };
  try {
    alert(JSON.stringify(await HMSSite.querySuggestion(
      querySuggestionReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }

}

async function onNearbySearch() {
  var nearbySearchReq = {
    query: "Paris",
    location: {
      lat: 48.893478,
      lng: 2.334595,
    },
    radius: 1000,
    poiType: HMSSite.LocationType.ADDRESS,
    hwPoiType: HMSSite.HwLocationType.ADDRESS,
    countryCode: "FR",
    language: "fr",
    pageIndex: 1,
    pageSize: 5
  };
  try {
    alert(JSON.stringify(await HMSSite.nearbySearch(
      nearbySearchReq
    )))
  } catch (ex) {
    alert(JSON.stringify(ex))
  }

}