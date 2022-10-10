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

package com.huawei.hms.cordova.health.utils;

import android.content.Context;
import android.util.Log;

import com.huawei.hms.cordova.health.constants.Constants;
import com.huawei.hms.hihealth.data.ActivityRecord;
import com.huawei.hms.hihealth.data.ActivitySummary;
import com.huawei.hms.hihealth.data.AppInfo;
import com.huawei.hms.hihealth.data.DataCollector;
import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.DeviceInfo;
import com.huawei.hms.hihealth.data.Field;
import com.huawei.hms.hihealth.data.Group;
import com.huawei.hms.hihealth.data.HealthRecord;
import com.huawei.hms.hihealth.data.MapValue;
import com.huawei.hms.hihealth.data.PaceSummary;
import com.huawei.hms.hihealth.data.SamplePoint;
import com.huawei.hms.hihealth.data.SampleSet;
import com.huawei.hms.hihealth.data.ScopeLangItem;
import com.huawei.hms.hihealth.data.Value;
import com.huawei.hms.hihealth.result.ReadReply;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

public enum Utils {
    INSTANCE;

    public static TimeUnit toTimeUnit(final String timeUnitStr) {
        final Constants.TimeUnitTypes variable = Constants.TimeUnitTypes.fromString(timeUnitStr);
        return variable != null ? variable.getTimeUnitType() : TimeUnit.MILLISECONDS;
    }

    public static SamplePoint valueSetterSample(Field field, Object fieldValue, SamplePoint samplePointForSet) {
        if (field != null) {
            Integer format = field.getFormat();
            switch (format) {
                case Field.FORMAT_INT32:
                    samplePointForSet.getFieldValue(field).setIntValue(((Number) fieldValue).intValue());
                    break;
                case Field.FORMAT_FLOAT:
                    samplePointForSet.getFieldValue(field)
                            .setFloatValue(((Number) fieldValue).floatValue());
                    break;
                case Field.FORMAT_STRING:
                    samplePointForSet.getFieldValue(field).setStringValue((String) fieldValue);
                    break;
                case Field.FORMAT_MAP:
                    Map<String, Double> doubleMap = (Map<String, Double>) fieldValue;
                    Map<String, Float> floatMap = new HashMap<>();
                    for (Map.Entry<String, Double> entry : doubleMap.entrySet()) {
                        floatMap.put(entry.getKey(), entry.getValue().floatValue());
                    }
                    samplePointForSet.getFieldValue(field).setStringValue(String.valueOf(floatMap));
                    break;
                case Field.FORMAT_LONG:
                    samplePointForSet.getFieldValue(field).setDoubleValue(((Number) fieldValue).longValue());
                    break;
                default:
                    break;
            }
        }
        return samplePointForSet;
    }

    public static SamplePoint.Builder valueSetter(Field field, Object fieldValue, SamplePoint.Builder builder) {
        if (field != null) {
            switch (field.getFormat()) {
                case Field.FORMAT_INT32:
                    builder.setFieldValue(field, ((Number) fieldValue).intValue());
                    break;
                case Field.FORMAT_FLOAT:
                    builder.setFieldValue(field, ((Number) fieldValue).floatValue());
                    break;
                case Field.FORMAT_STRING:
                    builder.setFieldValue(field, (String) fieldValue);
                    break;
                case Field.FORMAT_MAP:
                    Map<String, Double> doubleMap = (Map<String, Double>) fieldValue;
                    Map<String, Float> floatMap = new HashMap<>();
                    for (Map.Entry<String, Double> entry : doubleMap.entrySet()) {
                        floatMap.put(entry.getKey(), entry.getValue().floatValue());
                    }
                    builder.setFieldValue(field, String.valueOf(floatMap));
                    break;
                case Field.FORMAT_LONG:
                    builder.setFieldValue(field, ((Number) fieldValue).longValue());
                    break;

                default:
                    break;
            }
        }
        return builder;
    }

    public static void valueHealthRecordSetter(Field field, Object fieldValue, HealthRecord.Builder hr) {
        if (field != null) {
            switch (field.getFormat()) {
                case Field.FORMAT_INT32:
                    hr.setFieldValue(field, ((Number) fieldValue).intValue());
                    break;
                case Field.FORMAT_FLOAT:
                    hr.setFieldValue(field, ((Number) fieldValue).floatValue());
                    break;
                case Field.FORMAT_STRING:
                    hr.setFieldValue(field, (String) fieldValue);
                    break;
                case Field.FORMAT_MAP:
                    Map<String, Double> doubleMap = (Map<String, Double>) fieldValue;
                    Map<String, Float> floatMap = new HashMap<>();
                    for (Map.Entry<String, Double> entry : doubleMap.entrySet()) {
                        floatMap.put(entry.getKey(), entry.getValue().floatValue());
                    }
                    hr.setFieldValue(field, String.valueOf(floatMap));
                    break;
                case Field.FORMAT_LONG:
                    hr.setFieldValue(field, ((Number) fieldValue).longValue());
                    break;

                default:
                    break;
            }
        }

    }

    public static JSONObject getJSONFromReadReply(final ReadReply readReply, final TimeUnit timeUnit,
            final DataType dataType) {
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

    public static DataType toHealthDataType(final String dataTypeStr) {
        final Constants.HealthDataTypesConstant variable = Constants.HealthDataTypesConstant.fromString(dataTypeStr);
        return variable != null ? variable.getDataType() : null;
    }

    public static Field toFieldType(final String fieldTypeStr) {
        final Constants.FieldConstants variable = Constants.FieldConstants.fromString(fieldTypeStr);
        return variable != null ? variable.getFieldType() : null;
    }

    public static Field toHealthFieldType(final String fieldTypeStr) {
        final Constants.HealthFieldsConstants variable = Constants.HealthFieldsConstants.fromString(fieldTypeStr);
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
            JSONObject metaData = null;
            for (final JSONObject sampleSetObj : list) {
                final SamplePoint samplePoint = Utils.toSamplePoint(sampleSetObj, packageName);
                if (sampleSetObj.has("metaData")) {
                    metaData = sampleSetObj.getJSONObject("metaData");
                    String key = metaData.getString("metaDataKey");
                    String value = metaData.getString("metaDataValue");
                    samplePoint.addMetadata(key, value);
                }
                sampleSet.addSample(samplePoint);
            }
        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return sampleSet;
    }

    public static DeviceInfo deviceInfoFromJson(JSONObject jsonObject) throws JSONException {

        final JSONObject appInfoJson = jsonObject.getJSONObject("deviceInfo");
        String deviceManufacturer = null;
        String modelName = null;
        String uuid = null;
        Integer deviceType = null;
        Integer platformType;
        Boolean isBleDevice;
        com.huawei.hms.hihealth.data.DeviceInfo deviceInfo = null;

        try {
            deviceManufacturer = appInfoJson.getString("deviceManufacturer");
            modelName = appInfoJson.getString("modelName");
            uuid = appInfoJson.getString("uuid");
            deviceType = appInfoJson.getInt("deviceType");
        } catch (JSONException e) {
            Log.i("TAG", "Null value");
        }
        boolean check = check(appInfoJson);

        if (check) {
            if (!appInfoJson.has("isBleDevice") && !appInfoJson.has("platformType")) {
                if (deviceType != null) {
                    deviceInfo = new com.huawei.hms.hihealth.data.DeviceInfo(deviceManufacturer, modelName, uuid,
                            deviceType);
                }

            }
            if (appInfoJson.has("platformType") && !appInfoJson.has("isBleDevice")) {
                platformType = appInfoJson.getInt("platformType");
                if (platformType != null && deviceType != null) {
                    deviceInfo = new com.huawei.hms.hihealth.data.DeviceInfo(deviceManufacturer, modelName, uuid,
                            deviceType, platformType);
                }
            }
            if (appInfoJson.has("platformType") && appInfoJson.has("isBleDevice")) {
                platformType = appInfoJson.getInt("platformType");
                isBleDevice = appInfoJson.getBoolean("isBleDevice");

                if (platformType != null && isBleDevice != null && deviceType != null) {

                    deviceInfo = new com.huawei.hms.hihealth.data.DeviceInfo(deviceManufacturer, modelName, uuid,
                            deviceType, platformType, isBleDevice);
                }
            }

        } else {
            Log.i("TAG", "You can't set null value");
        }

        return deviceInfo;
    }

    public static boolean check(JSONObject jsonObject) {

        if (jsonObject.isNull("deviceManufacturer")) {
            return false;
        }
        if (jsonObject.isNull("modelName")) {
            return false;
        }
        if (jsonObject.isNull("uuid")) {
            return false;
        }
        if (jsonObject.isNull("deviceType")) {
            return false;
        }
        return true;
    }

    public static JSONObject hrToJson(HealthRecord record, TimeUnit timeUnit) {

        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("dataCollector", Utils.getJSONFromDataCollector(record.getDataCollector()));
            jsonObject.put("startTime", record.getStartTime(timeUnit));
            jsonObject.put("endTime", record.getEndTime(timeUnit));
            jsonObject.put("fieldValues", Utils.fieldValuesToJson(record.getFieldValues()));
            jsonObject.put("healthRecordId", record.getHealthRecordId());
            jsonObject.put("metaData", record.getMetadata());

            final JSONArray subDataDetails = new JSONArray();
            for (SampleSet set : record.getSubDataDetails()) {
                subDataDetails.put(Utils.getJSONFromSampleSet(set, timeUnit));
            }
            jsonObject.put("subDataDetails", subDataDetails);

            final JSONArray dataSummary = new JSONArray();
            for (final SamplePoint samplePoint : record.getSubDataSummary()) {
                dataSummary.put(Utils.getJSONFromSamplePoint(samplePoint, timeUnit));
            }
            jsonObject.put("subDataSummary", dataSummary);
        } catch (JSONException e) {

            Log.i("error", e.getMessage());
        }

        return jsonObject;
    }

    public static synchronized JSONObject fieldValuesToJson(Map<String, Value> fieldValue) throws JSONException {
        JSONObject resultMap = new JSONObject();
        for (Map.Entry<String, Value> pair : fieldValue.entrySet()) {
            Value value = pair.getValue();
            switch (value.getFormat()) {
                case Field.FORMAT_INT32:
                    resultMap.put(pair.getKey(), value.asIntValue());
                    break;
                case Field.FORMAT_FLOAT:
                    resultMap.put(pair.getKey(), value.asDoubleValue());
                    break;
                case Field.FORMAT_STRING:
                    resultMap.put(pair.getKey(), value.asStringValue());
                    break;
                case Field.FORMAT_MAP:
                    HashMap<String, MapValue> floatMap = new HashMap<>();
                    for (String key : value.getMap().keySet()) {
                        floatMap.put(key, value.getMapValue(key));
                    }
                    resultMap.put(pair.getKey(), floatMap);
                    break;
                case Field.FORMAT_LONG:
                    resultMap.put(pair.getKey(), (int) (value).asLongValue());
                    break;
                default:
                    throw new IllegalStateException("Unexpected value: " + value.getFormat());
            }
        }
        return resultMap;
    }

    public static DataCollector toDataCollector(final JSONObject dc, final String packageName) throws JSONException {
        DataCollector.Builder builder = new DataCollector.Builder();

        final String dataTypeParam = dc.getString("dataType");
        final String dataCollectorName = dc.getString("name");
        final int dataGenerateType = dc.getInt("dataGenerateType");
        final String dataStreamName;
        final DataType dataType = Utils.toDataType(dataTypeParam);

        if (dc.has("dataStreamName")) {
            dataStreamName = dc.getString("dataStreamName");
            builder.setDataStreamName(dataStreamName);
        }
        builder.setDataType(dataType)
                .setDataGenerateType(dataGenerateType)
                .setPackageName(packageName)
                .setDataCollectorName(dataCollectorName);
        return builder.build();
    }

    public static DataCollector toDataCollector2(final JSONObject dc, final Context packageName) throws JSONException {
        DataCollector.Builder builder = new DataCollector.Builder();

        final String dataTypeParam = dc.getString("dataType");
        final String dataCollectorName = dc.getString("name");
        final int dataGenerateType = dc.getInt("dataGenerateType");
        final String dataStreamName;
        final DataType dataType = Utils.toDataType(dataTypeParam);

        if (dc.has("dataStreamName")) {
            dataStreamName = dc.getString("dataStreamName");
            builder.setDataStreamName(dataStreamName);
        }
        builder.setDataType(dataType)
                .setDataGenerateType(dataGenerateType)
                .setPackageName(packageName)
                .setDataCollectorName(dataCollectorName);
        return builder.build();
    }

    public static DataCollector toHealthDataCollector(final JSONObject dc, final String packageName)
            throws JSONException {
        DataCollector.Builder builder = new DataCollector.Builder();

        final String dataTypeParam = dc.getString("dataType");
        final String dataCollectorName = dc.getString("name");
        final int dataGenerateType = dc.getInt("dataGenerateType");
        final String dataStreamName;
        final DataType dataType = Utils.toHealthDataType(dataTypeParam);

        if (dc.has("dataStreamName")) {
            dataStreamName = dc.getString("dataStreamName");
            builder.setDataStreamName(dataStreamName);
        }
        builder.setDataType(dataType)
                .setDataGenerateType(dataGenerateType)
                .setPackageName(packageName)
                .setDataCollectorName(dataCollectorName);
        return builder.build();
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
            jsonObject.put("appInfo", activityRecord.getAppInfo());
            jsonObject.put("description", activityRecord.getDesc());
            jsonObject.put("deviceInfo", activityRecord.getDeviceInfo());
            jsonObject.put("durationTime", activityRecord.getDurationTime(timeUnit));
            jsonObject.put("startTime", activityRecord.getStartTime(timeUnit));
            jsonObject.put("endTime", activityRecord.getEndTime(timeUnit));
            jsonObject.put("id", activityRecord.getId());
            jsonObject.put("name", activityRecord.getName());
            jsonObject.put("packageName", activityRecord.getPackageName());
            if (activityRecord.getActivitySummary() != null) {
                jsonObject.put("activitySummary",
                        Utils.getJSONFromActivitySummary(activityRecord.getActivitySummary(), timeUnit));
            }
            jsonObject.put("timeZone", activityRecord.getTimeZone());
            jsonObject.put("durationTime", activityRecord.hasDurationTime());
            jsonObject.put("activeTime", activityRecord.getActiveTime(timeUnit));
            jsonObject.put("metaData", activityRecord.getMetadata());
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
                jsonObject.put("dataCollector", Utils.getJSONFromDataCollector(sampleSet.getDataCollector()));
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
                jsonObject.put("dataCollector", Utils.getJSONFromDataCollector(samplePoint.getDataCollector()));
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
                jsonObject.put("deviceInfo", Utils.getJSONFromDeviceInfo(dataCollector.getDeviceInfo()));
            }
            jsonObject.put("packageName", dataCollector.getPackageName());
            jsonObject.put("standardByType", DataCollector.getStandardByType(dataCollector.getDataGenerateType()));
            jsonObject.put("isLocalized", dataCollector.isLocalized());
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
            if (deviceInfo != null) {
                jsonObject.put("deviceIdentifier", deviceInfo.getDeviceIdentifier());
                jsonObject.put("deviceType", deviceInfo.getDeviceType());
                jsonObject.put("deviceTypeString", DeviceInfo.getDeviceTypeStringById(deviceInfo.getDeviceType()));
                jsonObject.put("manufacturer", deviceInfo.getManufacturer());
                jsonObject.put("modelName", deviceInfo.getModelName());
                jsonObject.put("platformType", deviceInfo.getPlatformType());
                jsonObject.put("uuid", deviceInfo.getUuid());
                jsonObject.put("isFromBleDevice", deviceInfo.isFromBleDevice());
            }

        } catch (final JSONException e) {
            Log.e("Utils", e.toString());
        }
        return jsonObject;
    }

    public static JSONObject getJSONFromAppInfo(final AppInfo appInfo) {
        final JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("detailsUrl", appInfo.getDetailsUrl());
            jsonObject.put("appId", appInfo.getAppId());
            jsonObject.put("packageName", appInfo.getPackageName());
            jsonObject.put("domainName", appInfo.getDomainName());
            jsonObject.put("version", appInfo.getVersion());

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

            activityRecord.setName(name)
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

        final DataCollector dataCollector = Utils.toDataCollector(jsonObject.getJSONObject("dataCollector"),
                packageName);
        final SamplePoint.Builder samplePoint = new SamplePoint.Builder(dataCollector);
        final String startTime = jsonObject.getString("startTime");
        final String endTime = jsonObject.getString("endTime");
        final String timeUnitParam = jsonObject.getString("timeUnit");
        final String fieldName = jsonObject.getString("fieldName");
        final String fieldValue = jsonObject.getString("fieldValue");
        final TimeUnit timeUnit = Utils.toTimeUnit(timeUnitParam);
        final Field field = Utils.toFieldType(fieldName);
        samplePoint.setFieldValue(field, Integer.parseInt(fieldValue))
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
