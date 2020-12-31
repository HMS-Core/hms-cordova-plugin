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


package com.huawei.hms.cordova.awareness.backend.utils;

import android.location.Location;
import android.os.Build;
import android.util.Log;

import com.google.gson.Gson;
import com.huawei.hms.cordova.awareness.backend.helpers.Constants;
import com.huawei.hms.cordova.awareness.backend.helpers.Exceptions;
import com.huawei.hms.cordova.awareness.backend.interfaces.JSONMapper;
import com.huawei.hms.cordova.awareness.basef.handler.Promise;
import com.huawei.hms.kit.awareness.barrier.BarrierQueryResponse;
import com.huawei.hms.kit.awareness.barrier.BarrierStatus;
import com.huawei.hms.kit.awareness.barrier.BarrierStatusMap;
import com.huawei.hms.kit.awareness.capture.AmbientLightResponse;
import com.huawei.hms.kit.awareness.capture.ApplicationStatusResponse;
import com.huawei.hms.kit.awareness.capture.BeaconStatusResponse;
import com.huawei.hms.kit.awareness.capture.BehaviorResponse;
import com.huawei.hms.kit.awareness.capture.BluetoothStatusResponse;
import com.huawei.hms.kit.awareness.capture.CapabilityResponse;
import com.huawei.hms.kit.awareness.capture.DarkModeStatusResponse;
import com.huawei.hms.kit.awareness.capture.HeadsetStatusResponse;
import com.huawei.hms.kit.awareness.capture.LocationResponse;
import com.huawei.hms.kit.awareness.capture.ScreenStatusResponse;
import com.huawei.hms.kit.awareness.capture.TimeCategoriesResponse;
import com.huawei.hms.kit.awareness.capture.WeatherStatusResponse;
import com.huawei.hms.kit.awareness.capture.WifiStatusResponse;
import com.huawei.hms.kit.awareness.status.AmbientLightStatus;
import com.huawei.hms.kit.awareness.status.ApplicationStatus;
import com.huawei.hms.kit.awareness.status.BeaconStatus;
import com.huawei.hms.kit.awareness.status.BehaviorStatus;
import com.huawei.hms.kit.awareness.status.BluetoothStatus;
import com.huawei.hms.kit.awareness.status.CapabilityStatus;
import com.huawei.hms.kit.awareness.status.DarkModeStatus;
import com.huawei.hms.kit.awareness.status.DetectedBehavior;
import com.huawei.hms.kit.awareness.status.HeadsetStatus;
import com.huawei.hms.kit.awareness.status.ScreenStatus;
import com.huawei.hms.kit.awareness.status.TimeCategories;
import com.huawei.hms.kit.awareness.status.WeatherStatus;
import com.huawei.hms.kit.awareness.status.WifiStatus;
import com.huawei.hms.kit.awareness.status.weather.Aqi;
import com.huawei.hms.kit.awareness.status.weather.City;
import com.huawei.hms.kit.awareness.status.weather.DailyLiveInfo;
import com.huawei.hms.kit.awareness.status.weather.DailySituation;
import com.huawei.hms.kit.awareness.status.weather.DailyWeather;
import com.huawei.hms.kit.awareness.status.weather.HourlyWeather;
import com.huawei.hms.kit.awareness.status.weather.LiveInfo;
import com.huawei.hms.kit.awareness.status.weather.Situation;
import com.huawei.hms.kit.awareness.status.weather.WeatherSituation;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class JSONUtils {
    private static final String TAG = JSONUtils.class.getName();
    private static Gson gson = new Gson();

    public static <T> String toJSON(T obj) {
        return gson.toJson(obj);
    }

    public static <T> T toObject(final JSONObject jsonObject, final Class<T> clazz) {
        return gson.fromJson(jsonObject.toString(), clazz);
    }

    public static <T> JSONArray listToJSONArray(final List<T> list, final Mapper<T, JSONObject> mapper) {
        JSONArray array = new JSONArray();
        for (T item : list) {
            array.put(mapper.map(item));
        }
        return array;
    }

    public static final Mapper<LocationResponse, JSONObject> FROM_LOCATION_TO_JSON_OBJECT =
            mapperWrapper((final LocationResponse locationResponse) -> {
                JSONObject map = new JSONObject();
                Location location = locationResponse.getLocation();
                map.put("latitude", location.getLatitude());
                map.put("longitude", location.getLongitude());
                map.put("altitude", location.getAltitude());
                map.put("speed", location.getSpeed());
                map.put("bearing", location.getBearing());
                map.put("accuracy", location.getAccuracy());

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    map.put("verticalAccuracyMeters", location.getVerticalAccuracyMeters());
                    map.put("bearingAccuracyDegrees", location.getBearingAccuracyDegrees());
                    map.put("speedAccuracyMetersPerSecond", location.getSpeedAccuracyMetersPerSecond());
                } else {
                    map.put("verticalAccuracyMeters", 0.0);
                    map.put("bearingAccuracyDegrees", 0.0);
                    map.put("speedAccuracyMetersPerSecond", 0.0);
                }
                map.put("elapsedRealtimeNanos", location.getElapsedRealtimeNanos());
                if (Build.VERSION.SDK_INT >= 29){
                    map.put("elapsedRealtimeUncertaintyNanos", location.getElapsedRealtimeUncertaintyNanos());
                }
                map.put("provider", location.getProvider());
                map.put("time", location.getTime());
                map.put("fromMockProvider", location.isFromMockProvider());

                return map;
            }, new JSONObject());

    public static final Mapper<Object, JSONObject> FROM_STATUS_RESPONSE_TO_JSON_OBJECT =
            mapperWrapper((final Object statusResponse) -> {
                try {
                    JSONObject map = new JSONObject();
                    if (statusResponse instanceof HeadsetStatusResponse) {
                        HeadsetStatus headsetStatus = ((HeadsetStatusResponse) statusResponse).getHeadsetStatus();
                        map.put("headsetStatus", headsetStatus.getStatus());
                    } else if (statusResponse instanceof AmbientLightResponse) {
                        AmbientLightStatus ambientLightStatus = ((AmbientLightResponse) statusResponse).getAmbientLightStatus();
                        map.put("lightIntensity", ambientLightStatus.getLightIntensity());
                    } else if (statusResponse instanceof CapabilityResponse) {
                        CapabilityStatus capabilityStatus = ((CapabilityResponse) statusResponse).getCapabilityStatus();
                        JSONObject deviceSupportCapabilitiesJSON = new JSONObject();
                        for (int capabilitiesCode : capabilityStatus.getCapabilities()) {
                            deviceSupportCapabilitiesJSON.put(String.valueOf(capabilitiesCode), Constants.CAPABILITIES_DESCRIPTION_MAP.get(capabilitiesCode));
                        }
                        map.put("deviceSupportCapabilities", deviceSupportCapabilitiesJSON);
                    } else if (statusResponse instanceof BluetoothStatusResponse) {
                        BluetoothStatus bluetoothStatus = ((BluetoothStatusResponse) statusResponse).getBluetoothStatus();
                        map.put("bluetoothStatus", bluetoothStatus.getStatus());
                    } else if (statusResponse instanceof WifiStatusResponse) {
                        WifiStatus wifiStatus = ((WifiStatusResponse) statusResponse).getWifiStatus();
                        map.put("status", wifiStatus.getStatus());
                        map.put("bssid", wifiStatus.getBssid());
                        map.put("ssid", wifiStatus.getSsid());
                    } else if (statusResponse instanceof ScreenStatusResponse) {
                        ScreenStatus screenStatus = ((ScreenStatusResponse) statusResponse).getScreenStatus();
                        map.put("screenStatus", screenStatus.getStatus());
                    } else if (statusResponse instanceof DarkModeStatusResponse) {
                        DarkModeStatus darkModeStatus = ((DarkModeStatusResponse) statusResponse).getDarkModeStatus();
                        map.put("isDarkModeOn", darkModeStatus.isDarkModeOn());
                    } else if (statusResponse instanceof ApplicationStatusResponse) {
                        ApplicationStatus applicationStatus = ((ApplicationStatusResponse) statusResponse).getApplicationStatus();
                        map.put("applicationStatus", applicationStatus.getStatus());
                    } else if (statusResponse instanceof TimeCategoriesResponse) {
                        TimeCategories timeCategories = ((TimeCategoriesResponse) statusResponse).getTimeCategories();
                        JSONObject timeCategoriesJSON = new JSONObject();
                        for (int timeCode : timeCategories.getTimeCategories()) {
                            timeCategoriesJSON.put(String.valueOf(timeCode), Constants.TIME_DESCRIPTION_MAP.get(timeCode));
                        }
                        map.put("timeCategories", timeCategoriesJSON);
                    } else if (statusResponse instanceof BeaconStatusResponse) {
                        BeaconStatus beaconStatus = ((BeaconStatusResponse) statusResponse).getBeaconStatus();
                        List<BeaconStatus.BeaconData> beaconDataList = beaconStatus.getBeaconData();
                        if (beaconDataList != null && beaconDataList.size() > 0) {
                            map.put("beaconData", JSONUtils.listToJSONArray(beaconDataList, JSONUtils::fromBeaconDataListTOJSON));
                            return map;
                        } else {
                            return null;
                        }
                    } else {
                        Log.d(TAG, "invalid status response: ");
                        return null;
                    }
                    return map;
                } catch (JSONException e) {
                    Log.e(TAG, "error ->: " + e.toString());
                }
                return null;
            }, new JSONObject());

    public static final Mapper<BehaviorResponse, JSONObject> FROM_BEHAVIOUR_STATUS_TO_JSON_OBJECT =
            mapperWrapper((final BehaviorResponse behaviorResponse) -> {
                BehaviorStatus behaviorStatus = behaviorResponse.getBehaviorStatus();
                JSONObject map = new JSONObject();
                map.put("elapsedRealtimeMillis", behaviorStatus.getElapsedRealtimeMillis());
                map.put("time", behaviorStatus.getTime());
                map.put("mostLikelyBehavior", getMostLikelyBehavior(behaviorStatus.getMostLikelyBehavior()));
                map.put("probableBehavior", listToJSONArray(behaviorStatus.getProbableBehavior(), JSONUtils::getMostLikelyBehavior));
                return map;
            }, new JSONObject());

    public static final Mapper<WeatherStatusResponse, JSONObject> FROM_WEATHER_STATUS_TO_JSON_OBJECT =
            mapperWrapper((final WeatherStatusResponse weatherStatusResponse) -> {
                WeatherStatus weatherStatus = weatherStatusResponse.getWeatherStatus();
                JSONObject map = new JSONObject();
                map.put("dailyWeather", listToJSONArray(weatherStatus.getDailyWeather(), JSONUtils::getDailyWeather));
                map.put("hourlyWeather", listToJSONArray(weatherStatus.getHourlyWeather(), JSONUtils::getHourlyWeather));
                map.put("liveInfo", listToJSONArray(weatherStatus.getLiveInfo(), JSONUtils::getLiveInfo));
                map.put("aqi", getAqi(weatherStatus.getAqi()));
                map.put("weatherSituation", getWeatherSituation(weatherStatus.getWeatherSituation()));
                Log.i(TAG, "result: " + map);
                return map;
            }, new JSONObject());


    private static JSONObject getMostLikelyBehavior(final DetectedBehavior detectedBehavior) {
        final JSONObject mostLikelyBehaviorResult = new JSONObject();
        try {
            mostLikelyBehaviorResult.putOpt("confidence", detectedBehavior.getConfidence());
            mostLikelyBehaviorResult.putOpt("type", detectedBehavior.getType());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return mostLikelyBehaviorResult;
    }


    private static JSONObject getWeatherSituation(final WeatherSituation weatherSituation) throws JSONException {
        JSONObject weatherSituationJSON = new JSONObject();
        weatherSituationJSON.putOpt("city", getCity(weatherSituation.getCity()));
        weatherSituationJSON.putOpt("situation", getSituation(weatherSituation.getSituation()));
        return weatherSituationJSON;
    }

    private static JSONObject getCity(final City city) throws JSONException {
        JSONObject cityJSON = new JSONObject();
        cityJSON.putOpt("cityCode", city.getCityCode());
        cityJSON.putOpt("name", city.getName());
        cityJSON.putOpt("provinceName", city.getProvinceName());
        cityJSON.putOpt("timeZone", city.getTimeZone());
        return cityJSON;
    }

    private static JSONObject getSituation(final Situation situation) throws JSONException {
        JSONObject situationJSON = new JSONObject();
        situationJSON.putOpt("cnWeatherId", situation.getCnWeatherId());
        situationJSON.putOpt("humidity", situation.getHumidity());
        situationJSON.putOpt("pressure", situation.getPressure());
        situationJSON.putOpt("realFeelC", situation.getRealFeelC());
        situationJSON.putOpt("realFeelF", situation.getRealFeelF());
        situationJSON.putOpt("temperatureC", situation.getTemperatureC());
        situationJSON.putOpt("temperatureF", situation.getTemperatureF());
        situationJSON.putOpt("updateTime", situation.getUpdateTime());
        situationJSON.putOpt("uvIndex", situation.getUvIndex());
        situationJSON.putOpt("weatherId", situation.getWeatherId());
        situationJSON.putOpt("windDir", situation.getWindDir());
        situationJSON.putOpt("windSpeed", situation.getWindSpeed());
        situationJSON.putOpt("windLevel", situation.getWindLevel());
        return situationJSON;
    }

    private static JSONObject getAqi(final Aqi aqi) throws JSONException {
        JSONObject aqiJSON = new JSONObject();
        if (aqi != null) {
            aqiJSON.putOpt("aqiValue", aqi.getAqiValue());
            aqiJSON.putOpt("Co", aqi.getCo());
            aqiJSON.putOpt("No2", aqi.getNo2());
            aqiJSON.putOpt("O3", aqi.getO3());
            aqiJSON.putOpt("Pm10", aqi.getPm10());
            aqiJSON.putOpt("Pm25", aqi.getPm25());
            aqiJSON.putOpt("So2", aqi.getSo2());
        }
        return aqiJSON;
    }

    private static JSONObject getLiveInfo(final LiveInfo liveInfo) {
        JSONObject liveInfoJSON = new JSONObject();
        try {
            if (liveInfo != null) {
                liveInfoJSON.putOpt("code", liveInfo.getCode());
                liveInfoJSON.putOpt("levelList", listToJSONArray(liveInfo.getLevelList(), JSONUtils::getLevelList));
            }
        } catch (JSONException e) {
            Log.e(TAG, "getLiveInfo: error -> " + e.toString());
        }

        return liveInfoJSON;
    }

    private static JSONObject getLevelList(final DailyLiveInfo dailyLiveInfo) {
        JSONObject levelListJSON = new JSONObject();
        try {
            levelListJSON.putOpt("dateTimeStamp", dailyLiveInfo.getDateTimeStamp());
            levelListJSON.putOpt("level", dailyLiveInfo.getLevel());
        } catch (JSONException e) {
            Log.e(TAG, "getLevelList: ", e);
        }

        return levelListJSON;
    }

    private static JSONObject getHourlyWeather(final HourlyWeather hourlyWeather) {
        JSONObject hourlyWeatherJSON = new JSONObject();
        try {
            hourlyWeatherJSON.putOpt("cnWeatherId", hourlyWeather.getCnWeatherId());
            hourlyWeatherJSON.putOpt("dateTimeStamp", hourlyWeather.getDateTimeStamp());
            hourlyWeatherJSON.putOpt("rainProbability", hourlyWeather.getRainprobability());
            hourlyWeatherJSON.putOpt("tempC", hourlyWeather.getTempC());
            hourlyWeatherJSON.putOpt("tempF", hourlyWeather.getTempF());
            hourlyWeatherJSON.putOpt("weatherId", hourlyWeather.getWeatherId());
            return hourlyWeatherJSON;
        } catch (JSONException e) {
            Log.e(TAG, "getHourlyWeather: ", e);
        }
        return null;
    }

    private static JSONObject getDailyWeather(final DailyWeather dailyWeather) {
        JSONObject dailyWeatherJSON = new JSONObject();
        try {
            dailyWeatherJSON.putOpt("aqiValue", dailyWeather.getAqiValue());
            dailyWeatherJSON.putOpt("dateTimeStamp", dailyWeather.getDateTimeStamp());
            dailyWeatherJSON.putOpt("maxTempC", dailyWeather.getMaxTempC());
            dailyWeatherJSON.putOpt("maxTempF", dailyWeather.getMaxTempF());
            dailyWeatherJSON.putOpt("minTempC", dailyWeather.getMinTempC());
            dailyWeatherJSON.putOpt("minTempF", dailyWeather.getMinTempF());
            dailyWeatherJSON.putOpt("moonPhase", dailyWeather.getMoonphase());
            dailyWeatherJSON.putOpt("moonRise", dailyWeather.getMoonRise());
            dailyWeatherJSON.putOpt("moonSet", dailyWeather.getMoonSet());
            dailyWeatherJSON.putOpt("sunRise", dailyWeather.getSunRise());
            dailyWeatherJSON.putOpt("sunSet", dailyWeather.getSunSet());
            dailyWeatherJSON.putOpt("situationDay", getSituationDay(dailyWeather.getSituationDay()));
            dailyWeatherJSON.putOpt("situationNight", getSituationNight(dailyWeather.getSituationNight()));
            return dailyWeatherJSON;
        } catch (JSONException e) {
            Log.e(TAG, "getDailyWeather: ", e);
        }
        return null;
    }

    private static JSONObject getSituationNight(final DailySituation situationNight) throws JSONException {
        JSONObject situationNightJSON = new JSONObject();
        situationNightJSON.putOpt("cnWeatherId", situationNight.getCnWeatherId());
        situationNightJSON.putOpt("weatherId", situationNight.getWeatherId());
        situationNightJSON.putOpt("windDir", situationNight.getWindDir());
        situationNightJSON.putOpt("windLevel", situationNight.getWindLevel());
        situationNightJSON.putOpt("windSpeed", situationNight.getWindSpeed());
        return situationNightJSON;
    }

    private static JSONObject getSituationDay(final DailySituation dailySituation) throws JSONException {
        JSONObject situationDayJSON = new JSONObject();
        situationDayJSON.putOpt("cnWeatherId", dailySituation.getCnWeatherId());
        situationDayJSON.putOpt("weatherId", dailySituation.getWeatherId());
        situationDayJSON.putOpt("windDir", dailySituation.getWindDir());
        situationDayJSON.putOpt("windLevel", dailySituation.getWindLevel());
        situationDayJSON.putOpt("windSpeed", dailySituation.getWindSpeed());
        return situationDayJSON;
    }

    private static JSONObject fromBeaconDataListTOJSON(final BeaconStatus.BeaconData beaconData) {
        JSONObject fromBeaconDataListJSON = new JSONObject();
        try {
            fromBeaconDataListJSON.putOpt("beaconId", beaconData.getBeaconId());
            fromBeaconDataListJSON.putOpt("content", Arrays.toString(beaconData.getContent()));
            fromBeaconDataListJSON.putOpt("namespace", beaconData.getNamespace());
            fromBeaconDataListJSON.putOpt("type", beaconData.getType());
        } catch (JSONException e) {
            Log.e(TAG, "fromBeaconDataListTOJSON: error ->", e);
        }
        return fromBeaconDataListJSON;
    }

    public static JSONObject barrierStatusTOJSON(final BarrierStatus barrierStatus) {
        JSONObject barrierStatusJSON = new JSONObject();
        try {
            barrierStatusJSON.putOpt("barrierLabel", barrierStatus.getBarrierLabel());
            barrierStatusJSON.putOpt("presentStatus", barrierStatus.getPresentStatus());
            barrierStatusJSON.putOpt("lastStatus", barrierStatus.getLastStatus());
            barrierStatusJSON.putOpt("lastBarrierUpdateTime", barrierStatus.getLastBarrierUpdateTime());
        } catch (JSONException e) {
            Log.e(TAG, "barrierStatusTOJSON: error ->", e);
        }
        return barrierStatusJSON;
    }

    public static int[] getBehaviorTypes(final JSONArray args) throws JSONException {
        int[] behaviorTypes = new int[args.length()];
        for (int i = 0; i < args.length(); i++) {
            behaviorTypes[i] = args.getInt(i);
        }
        return behaviorTypes;
    }

    public static String[] getBarrierLabels(final JSONArray jsonArray, final Promise promise)
            throws JSONException {
        if (jsonArray.length() < 1) {
            promise.error(Exceptions.toErrorJSON(Exceptions.ERR_NULL_ARRAY));
        }
        final String[] barrierLabels = new String[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++) {
            barrierLabels[i] = jsonArray.getString(i);
        }
        return barrierLabels;
    }

    public static JSONObject barrierStatusMapToJSONObject(final BarrierQueryResponse barrierQueryResponse) {
        final BarrierStatusMap obj = barrierQueryResponse.getBarrierStatusMap();
        final JSONObject map = new JSONObject();
        try {
            final Set<String> barrierLabels = obj.getBarrierLabels();
            final JSONArray labelArray = new JSONArray();

            for (final String barrierLabel : barrierLabels) {
                final JSONObject labelObj = new JSONObject();
                final BarrierStatus barrierStatus = obj.getBarrierStatus(barrierLabel);
                final JSONObject barrierStatusObject = barrierStatusConvertToJSONObject(barrierStatus);
                labelObj.put("barrierLabel", barrierLabel);
                labelObj.put("barrierStatus", barrierStatusObject);
                labelArray.put(labelObj);
            }

            map.put("barriers", labelArray);
        } catch (final JSONException e) {
            Log.e("TAG", "error: " + e.toString());
        }
        return map;
    }

    private static JSONObject barrierStatusConvertToJSONObject(final BarrierStatus obj) {
        final JSONObject map = new JSONObject();
        try {
            map.put("barrierLabel", obj.getBarrierLabel());
            map.put("lastBarrierUpdateTime", obj.getLastBarrierUpdateTime());
            map.put("lastStatus", obj.getLastStatus());
            map.put("presentStatus", obj.getPresentStatus());
        } catch (final JSONException e) {
            Log.e("TAG", "error: " + e.toString());
        }
        return map;
    }

    public static BeaconStatus.Filter fromJSONToBeaconStatusFilter(final JSONObject params) throws JSONException {
        final String namespace = params.getString("namespace");
        final String type = params.optString("type");
        final JSONArray jsArray = params.optJSONArray("content");
        byte[] content = null;
        if (jsArray != null) {
            content = jsArray.toString().getBytes(StandardCharsets.UTF_8);
        }

        BeaconStatus.Filter filter;
        if (!type.isEmpty() && content != null) {
            filter = BeaconStatus.Filter.match(namespace, type, content);
        } else if (content == null && !type.isEmpty()) {
            filter = BeaconStatus.Filter.match(namespace, type);
        } else {
            filter = BeaconStatus.Filter.match(namespace);
        }
        return filter;
    }

    public static List<String> convertJSONArrayToList(JSONArray jsonArray) throws JSONException {
        List<String> list = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            list.add(jsonArray.getString(i));
        }
        return list;
    }

    public static <T, R> Mapper<T, R> mapperWrapper(JSONMapper<T, R> jm, R def) {
        return arg -> {
            if (arg == null) {
                return null;
            }

            try {
                return jm.map(arg);
            } catch (JSONException | NullPointerException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.getMessage());
                return def;
            }
        };
    }
}
