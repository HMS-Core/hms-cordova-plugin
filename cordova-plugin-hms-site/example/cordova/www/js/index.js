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
let searchService = null;
const apiKey = '<api_key>';

function onDeviceReady() {
	document.getElementById('text-search').addEventListener('click', textSearch, false);
	document.getElementById('detail-search').addEventListener('click', detailSearch, false);
	document.getElementById('nearby-search').addEventListener('click', nearbySearch, false);
	document.getElementById('query-suggestion').addEventListener('click', querySuggestion, false);
	document.getElementById('query-autocomplete').addEventListener('click', queryAutocomplete, false);

	document.getElementById('goto-activity').addEventListener('click', gotoSearchActivity, false);

	createSearchService();
}

async function createSearchService() {
	searchService = await HMSSite.SearchServiceFactory.create(apiKey);
}
function log(response) {
	const logDiv = document.getElementById('log');
	response = JSON.parse(JSON.stringify(response).replace('NaN', 0));
	console.log(response);
	logDiv.innerHTML = JSON.stringify(JSON.parse(response), undefined, 2);
}
function gotoSearchActivity() {
	const searchFilter = {
		query: 'Paris',
		location: {
			lat: 48.89,
			lng: 2.33
		},
		bounds: {
			northeast: {
				lat: 48.85,
				lng: 2.33
			},
			southwest: {
				lat: 48.85,
				lng: 2.34
			},
		},
		radius: 1000,
		poiType: [HMSSite.LocationType.ADDRESS, HMSSite.LocationType.GEOCODE],
		countryCode: 'FR',
		language: 'fr'
	};
	const hint = 'Search place';
	HMSSite.gotoSearchActivity(apiKey, searchFilter, hint)
		.then(response => log(response))
		.catch(error => log(error));
}
function textSearch() {
	const textSearchReq = {
		query: 'Paris',
		location: {
			lat: 48.89,
			lng: 2.33,
		},
		radius: 1000,
		poiType: HMSSite.LocationType.ADDRESS,
		hwPoiType: HMSSite.HwLocationType.ADDRESS,
		countryCode: "FR",
		language: "fr",
		pageIndex: 1,
		pageSize: 5
	};

	searchService.textSearch(textSearchReq)
		.then(response => log(response))
		.catch(error => log(error));
	alert('loading');
}
function detailSearch() {
	const detailSearchReq = {
		siteId: '16DA89C6962A36CB1752A343ED48B78A',
		language: 'fr'
	};
	searchService.detailSearch(detailSearchReq)
		.then(response => log(response))
		.catch(error => log(error));
	alert('loading');
}
function nearbySearch() {
	const nearbySearchReq = {
		query: "Paris",
		location: {
			lat: 48.893478,
			lng: 2.334595,
		},
		radius: 1000,
		poiType: HMSSite.LocationType.ADDRESS,
		hwPoiType: HMSSite.HwLocationType.ADDRESS,
		language: "fr",
		pageIndex: 1,
		pageSize: 5
	};
	searchService.nearbySearch(nearbySearchReq)
		.then(response => log(response))
		.catch(error => log(error));
	alert('loading');
}
function querySuggestion() {
	const querySuggestionReq = {
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
	searchService.querySuggestion(querySuggestionReq)
		.then(response => log(response))
		.catch(error => log(error));
	alert('loading');
}
function queryAutocomplete() {
	const queryAutocompleteReq = {
		query: 'Paris',
		location: {
			lat: 48.89,
			lng: 2.33
		},
		radius: 1000,
		children: false
	};
	searchService.queryAutocomplete(queryAutocompleteReq)
		.then(response => log(response))
		.catch(error => log(error));
	alert('loading');
}
