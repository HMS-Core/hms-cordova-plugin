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

package com.huawei.hms.cordova.health.utils;

import android.util.Log;
import com.huawei.hms.cordova.health.constants.Constants;
import com.huawei.hms.hihealth.data.ActivityRecord;
import com.huawei.hms.hihealth.data.ActivitySummary;
import com.huawei.hms.hihealth.data.DataCollector;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.DeviceInfo;
import com.huawei.hms.hihealth.data.Field;
import com.huawei.hms.hihealth.data.Group;
import com.huawei.hms.hihealth.data.PaceSummary;
import com.huawei.hms.hihealth.data.SamplePoint;
import com.huawei.hms.hihealth.data.SampleSet;
import com.huawei.hms.hihealth.data.ScopeLangItem;
import com.huawei.hms.hihealth.result.ReadReply;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public enum Utils {
    INSTANCE;

    public static TimeUnit toTimeUnit(final String timeUnitStr) {
        final Constants.TimeUnitTypes variable = Constants.TimeUnitTypes.fromString(timeUnitStr);
        return variable != null ? variable.getTimeUnitType() : TimeUnit.MILLISECONDS;
    }

    public static JSONObject getJSONFromReadReply(final ReadReply readReply, final TimeUnit timeUnit, final DataType dataType) {
        final JSONObject jsonObject = new JSONObject();
        try {
            final JSONArray groups = new JSONArray();
            for (final Group group : readReply.getGroups()) {
                groups.put(Utils.getJSONFromGroup(group, timeUnit, dataType));
            }
            jsonObject.put("groups", groups);
            final JSONArray sampleSets = new JSONArray();
            for (final SampleSet sampleSet : readReply.getSampleSets()) {
                sampleSets.put(Utils.getJSONFromSampleSet(sampleSet, timeUnit));
            }
            jsonObject.put("sampleSets", sampleSets);
        } catch (final JSONException e) {
            Log.e("TAG", e.toString());
        }
        return jsonObject;
    }

    public static DataType toDataType(final String dataTypeStr) {
        final Constants.DataTypeConstants variable = Constants.DataTypeConstants.fromString(dataTypeStr);
        return variable != null ? variable.getDataType() : null;
    }

    public static Field toFieldType(final String fieldTypeStr) {
        final Constants.FieldConstants variable = Constants.FieldConstants.fromString(fieldTypeStr);
        return variable != null ? variable.getFieldType() : null;
    }

    public static SampleSet toSampleSet(final JSONArray jsonArray, final DataCollector dataCollector,
                                        final String packageName) {
        final SampleSet sampleSet = SampleSet.create(dataCollector);

        try {
            final ArrayList<JSONObject> list = new ArrayList<>();
            if (jsonArray != null) {
                final int len = jsonArray.length();
                for (int i = 0; i < len; i++) {
                    list.add(jsonArray.getJSONObject(i));
                }
            }
            for (final JSONObject sampleSetObj : list) {
                final SamplePoint samplePoint = Utils.toSamplePoint(sampleSetObj, packageName);
                sampleSet.addSample(samplePoint);
            }
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return sampleSet;
    }

    public static DataCollector toDataCollector(final JSONObject dc, final String packageName) throws JSONException {
        final String dataTypeParam = dc.getString("dataType");
        final String dataCollectorName = dc.getString("name");
        final int dataGenerateType = dc.getInt("dataGenerateType");
        final DataType dataType = Utils.toDataType(dataTypeParam);

        return new DataCollector.Builder()
            .setDataType(dataType)
            .setDataGenerateType(dataGenerateType)
            .setPackageName(packageName)
            .setDataCollectorName(dataCollectorName)
            .build();
    }

    public static JSONObject getJSONFromGroup(final Group group, final TimeUnit timeUnit, final DataType dataType) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("activity", group.getActivity());
            jsonObject.put("activityRecord",
                Utils.getJSONFromActivityRecord(Objects.requireNonNull(group.getActivityRecord()), timeUnit));
            jsonObject.put("activityType", group.getActivityType());
            jsonObject.put("endTime", group.getEndTime(timeUnit));
            jsonObject.put("groupType", group.getGroupType());
            jsonObject.put("groupTypeString", Group.getGroupTypeString(group.getGroupType()));
            jsonObject.put("sampleSet",
                Utils.getJSONFromSampleSet(Objects.requireNonNull(group.getSampleSet(dataType)), timeUnit));
            final JSONArray sampleSetArr = new JSONArray();
            for (final SampleSet sampleSet : group.getSampleSets()) {
                final JSONObject sampleSetData = Utils.getJSONFromSampleSet(sampleSet, timeUnit);
                sampleSetArr.put(sampleSetData);
            }
            jsonObject.put("sampleSets", sampleSetArr);
            jsonObject.put("startTime", group.getStartTime(timeUnit));
            jsonObject.put("hasMoreSample", group.hasMoreSample());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromActivityRecord(final ActivityRecord activityRecord, final TimeUnit timeUnit) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("activityType", activityRecord.getActivityType());
            jsonObject.put("appDetailsUrl", activityRecord.getAppDetailsUrl());
            jsonObject.put("appDomainName", activityRecord.getAppDomainName());
            jsonObject.put("appVersion", activityRecord.getAppVersion());
            jsonObject.put("description", activityRecord.getDesc());
            jsonObject.put("durationTime", activityRecord.getDurationTime(timeUnit));
            jsonObject.put("endTime", activityRecord.getEndTime(timeUnit));
            jsonObject.put("id", activityRecord.getId());
            jsonObject.put("name", activityRecord.getName());
            jsonObject.put("packageName", activityRecord.getPackageName());
            jsonObject.put("startTime", activityRecord.getStartTime(timeUnit));
            if (activityRecord.getActivitySummary() != null) {
                jsonObject.put("activitySummary",
                    Utils.getJSONFromActivitySummary(activityRecord.getActivitySummary(), timeUnit));
            }
            jsonObject.put("timeZone", activityRecord.getTimeZone());
            jsonObject.put("durationTime", activityRecord.hasDurationTime());
            jsonObject.put("isKeepGoing", activityRecord.isKeepGoing());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromActivitySummary(final ActivitySummary activitySummary,
                                                        final TimeUnit timeUnit) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("paceSummary", Utils.getJSONFromPaceSummary(activitySummary.getPaceSummary()));
            final JSONArray dataSummary = new JSONArray();
            for (final SamplePoint samplePoint : activitySummary.getDataSummary()) {
                dataSummary.put(Utils.getJSONFromSamplePoint(samplePoint, timeUnit));
            }
            jsonObject.put("dataSummary", dataSummary);
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromPaceSummary(final PaceSummary paceSummary) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("avgPace", paceSummary.getAvgPace());
            jsonObject.put("bestPace", paceSummary.getBestPace());
            jsonObject.put("britishPaceMap", new JSONObject(paceSummary.getBritishPaceMap()));
            jsonObject.put("britishPartTimeMap", new JSONObject(paceSummary.getBritishPartTimeMap()));
            jsonObject.put("paceMap", new JSONObject(paceSummary.getPaceMap()));
            jsonObject.put("partTimeMap", new JSONObject(paceSummary.getPartTimeMap()));
            jsonObject.put("sportHealthPaceMap", new JSONObject(paceSummary.getSportHealthPaceMap()));
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromSampleSet(final SampleSet sampleSet, final TimeUnit timeUnit) {
        final JSONObject jsonObject = new JSONObject();
        try {
            if (sampleSet.getDataCollector() != null) {
                jsonObject.put("dataCollector",
                    Utils.getJSONFromDataCollector(sampleSet.getDataCollector()));
            }
            jsonObject.put("dataType", sampleSet.getDataType());
            final JSONArray samplePoints = new JSONArray();
            for (final SamplePoint samplePoint : sampleSet.getSamplePoints()) {
                samplePoints.put(Utils.getJSONFromSamplePoint(samplePoint, timeUnit));
            }
            jsonObject.put("samplePoints", samplePoints);
            jsonObject.put("isEmpty", sampleSet.isEmpty());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromSamplePoint(final SamplePoint samplePoint, final TimeUnit timeUnit) {
        final JSONObject jsonObject = new JSONObject();
        try {
            if (samplePoint.getDataCollector() != null) {
                jsonObject.put("dataCollector",
                    Utils.getJSONFromDataCollector(samplePoint.getDataCollector()));
            }
            jsonObject.put("dataType", Utils.getJSONFromDataType(samplePoint.getDataType()));
            jsonObject.put("dataTypeId", samplePoint.getDataTypeId());
            jsonObject.put("endTime", samplePoint.getEndTime(timeUnit));
            jsonObject.put("fieldValues", samplePoint.getFieldValues());
            jsonObject.put("id", samplePoint.getId());
            jsonObject.put("insertionTime", samplePoint.getInsertionTime(timeUnit));
            jsonObject.put("samplingTime", samplePoint.getSamplingTime(timeUnit));
            jsonObject.put("startTime", samplePoint.getStartTime(timeUnit));
            jsonObject.put("isMerged", samplePoint.isMerged());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromDataCollector(final DataCollector dataCollector) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("dataCollectorName", dataCollector.getDataCollectorName());
            jsonObject.put("dataGenerateType", dataCollector.getDataGenerateType());
            jsonObject.put("dataStreamId", dataCollector.getDataStreamId());
            jsonObject.put("dataStreamName", dataCollector.getDataStreamName());
            jsonObject.put("dataType", Utils.getJSONFromDataType(dataCollector.getDataType()));
            jsonObject.put("deviceId", dataCollector.getDeviceId());
            if (dataCollector.getDeviceInfo() != null) {
                jsonObject.put("deviceInfo",
                    Utils.getJSONFromDeviceInfo(dataCollector.getDeviceInfo()));
            }
            jsonObject.put("packageName", dataCollector.getPackageName());
            jsonObject.put("dataCollectorName", DataCollector.getStandardByType(dataCollector.getDataGenerateType()));
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromDataType(final DataType dataType) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("fields", Utils.mapList(dataType.getFields(), Utils::getJSONFromField));
            jsonObject.put("mimeType", DataType.getMimeType(dataType));
            jsonObject.put("name", dataType.getName());
            jsonObject.put("packageName", dataType.getPackageName());
            jsonObject.put("polymerizesForInput",
                Utils.mapList(DataType.getPolymerizesForInput(dataType), Utils::getJSONFromDataType));
            jsonObject.put("scopeNameBoth", dataType.getScopeNameBoth());
            jsonObject.put("scopeNameRead", dataType.getScopeNameRead());
            jsonObject.put("scopeNameWrite", dataType.getScopeNameWrite());
            jsonObject.put("isFromSelfDefined", dataType.isFromSelfDefined());
            jsonObject.put("isPolymerized", dataType.isPolymerized());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromField(final Field field) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("format", field.getFormat());
            jsonObject.put("name", field.getName());
            jsonObject.put("isOptional", field.isOptional());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromDeviceInfo(final DeviceInfo deviceInfo) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("deviceIdentifier", deviceInfo.getDeviceIdentifier());
            jsonObject.put("deviceType", deviceInfo.getDeviceType());
            jsonObject.put("deviceTypeString", DeviceInfo.getDeviceTypeStringById(deviceInfo.getDeviceType()));
            jsonObject.put("manufacturer", deviceInfo.getManufacturer());
            jsonObject.put("modelName", deviceInfo.getModelName());
            jsonObject.put("platformType", deviceInfo.getPlatformType());
            jsonObject.put("uuid", deviceInfo.getUuid());
            jsonObject.put("isFromBleDevice", deviceInfo.isFromBleDevice());
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromScopeLangItem(final ScopeLangItem scopeLangItem) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("appIconPath", scopeLangItem.getAppIconPath());
            jsonObject.put("appName", scopeLangItem.getAppName());
            jsonObject.put("authTime", scopeLangItem.getAuthTime());
            jsonObject.put("url2Desc", new JSONObject(scopeLangItem.getUrl2Desc()));
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    private static <T, R> JSONArray mapList(final List<T> list, final Mapper<T, R> mapper) {
        final JSONArray jsonArray = new JSONArray();
        for (final T item : list) {
            jsonArray.put(mapper.map(item));
        }
        return jsonArray;
    }

    public static ActivityRecord getActivityRecord(final JSONObject jsonObject, final String packageName) {
        final ActivityRecord.Builder activityRecord = new ActivityRecord.Builder();

        try {
            final JSONObject activityRecordJson = jsonObject.getJSONObject("activityRecord");
            final JSONObject activitySummaryJson = activityRecordJson.getJSONObject("activitySummary");

            // Activity Record
            final String startTime = activityRecordJson.getString("startTime");
            final String endTime = activityRecordJson.getString("endTime");
            final String timeZone = activityRecordJson.getString("timeZone");
            final String timeUnitParam = activityRecordJson.getString("timeUnit");
            final String id = activityRecordJson.getString("id");
            final String name = activityRecordJson.getString("name");
            final String description = activityRecordJson.getString("description");
            final String activityType = activityRecordJson.getString("activityType");
            final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);

            final ActivitySummary activitySummary = Utils.getActivitySummary(activitySummaryJson, packageName);

            activityRecord
                .setName(name)
                .setDesc(description)
                .setId(id)
                .setActivityTypeId(activityType)
                .setStartTime(Long.parseLong(startTime), timeUnit)
                .setEndTime(Long.parseLong(endTime), timeUnit)
                .setActivitySummary(activitySummary)
                .setTimeZone(timeZone);

        } catch (final JSONException e) {
            Log.e("Utils", Objects.requireNonNull(e.getMessage()));
        }
        return activityRecord.build();
    }

    public static ActivitySummary getActivitySummary(final JSONObject jsonObject, final String packageName) {
        final ActivitySummary activitySummary = new ActivitySummary();
        try {
            activitySummary.setPaceSummary(Utils.toPaceSummary(jsonObject.getJSONObject("paceSummary")));
            activitySummary.setDataSummary(Utils.toDataSummary(jsonObject.getJSONArray("dataSummary"), packageName));
        } catch (final JSONException e) {
            Log.e("Utils", Objects.requireNonNull(e.getMessage()));
        }
        return activitySummary;
    }

    public static PaceSummary toPaceSummary(final JSONObject jsonObject) throws JSONException {
        final PaceSummary paceSummary = new PaceSummary();

        paceSummary.setAvgPace(jsonObject.getDouble("avgPace"));
        paceSummary.setBestPace(jsonObject.getDouble("bestPace"));
        paceSummary.setPaceMap(Utils.toMap(jsonObject.getJSONObject("paceMap")));
        paceSummary.setBritishPaceMap(Utils.toMap(jsonObject.getJSONObject("britishPaceMap")));
        paceSummary.setPartTimeMap(Utils.toMap(jsonObject.getJSONObject("partTimeMap")));
        paceSummary.setBritishPartTimeMap(Utils.toMap(jsonObject.getJSONObject("britishPartTimeMap")));
        paceSummary.setSportHealthPaceMap(Utils.toMap(jsonObject.getJSONObject("sportHealthPaceMap")));
        return paceSummary;
    }

    public static List<SamplePoint> toDataSummary(final JSONArray jsonArray, final String packageName) {
        final List<SamplePoint> dataSummary = new ArrayList<>();
        try {
            if (jsonArray != null) {
                final List<JSONObject> listData = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    listData.add(jsonArray.getJSONObject(i));
                }
                for (final JSONObject jsonObject : listData) {
                    final SamplePoint samplePoint = Utils.toSamplePoint(jsonObject, packageName);
                    dataSummary.add(samplePoint);
                }
            }
        } catch (final JSONException e) {
            Log.e("Utils", Objects.requireNonNull(e.getMessage()));
        }
        return dataSummary;
    }

    public static SamplePoint toSamplePoint(final JSONObject jsonObject, final String packageName)
        throws JSONException {
        final DataCollector dataCollector =
            Utils.toDataCollector(jsonObject.getJSONObject("dataCollector"), packageName);
        final SamplePoint.Builder samplePoint = new SamplePoint.Builder(dataCollector);
        final String startTime = jsonObject.getString("startTime");
        final String endTime = jsonObject.getString("endTime");
        final String timeUnitParam = jsonObject.getString("timeUnit");
        final String fieldName = jsonObject.getString("fieldName");
        final String fieldValue = jsonObject.getString("fieldValue");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        final Field field = Utils.toFieldType(fieldName);
        samplePoint
            .setFieldValue(field, Integer.parseInt(fieldValue))
            .setTimeInterval(Long.parseLong(startTime), Long.parseLong(endTime), timeUnit);
        return samplePoint.build();
    }

    public static Map<String, Double> toMap(final JSONObject jsonobj) throws JSONException {
        final Map<String, Double> map = new HashMap<>();
        final Iterator<String> keys = jsonobj.keys();
        while (keys.hasNext()) {
            final String key = keys.next();
            final Double value = jsonobj.getDouble(key);
            map.put(key, value);
        }
        return map;
    }
}
