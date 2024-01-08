/*
    Copyright 2020-2023. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.health.constants;

import static com.huawei.hms.hihealth.data.Field.newDoubleField;
import static com.huawei.hms.hihealth.data.Field.newIntField;
import static com.huawei.hms.hihealth.data.Field.newLongField;
import static com.huawei.hms.hihealth.data.Field.newMapField;
import static com.huawei.hms.hihealth.data.Field.newStringField;

import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.Field;
import com.huawei.hms.hihealth.data.HealthDataTypes;

import java.util.concurrent.TimeUnit;

public interface Constants {

    enum TimeUnitTypes {
        /* Time units */
        NANOSECONDS("NANOSECONDS", TimeUnit.NANOSECONDS),
        MICROSECONDS("MICROSECONDS", TimeUnit.MICROSECONDS),
        MILLISECONDS("MILLISECONDS", TimeUnit.MILLISECONDS),
        SECONDS("SECONDS", TimeUnit.SECONDS),
        MINUTES("MINUTES", TimeUnit.MINUTES),
        HOURS("HOURS", TimeUnit.HOURS),
        DAYS("DAYS", TimeUnit.DAYS);

        private final String value;

        private final TimeUnit type;

        TimeUnitTypes(String value, TimeUnit type) {
            this.value = value;
            this.type = type;
        }

        public static TimeUnitTypes fromString(String text) {
            for (TimeUnitTypes variable : TimeUnitTypes.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }

        public TimeUnit getTimeUnitType() {
            return type;
        }
    }

    enum DataTypeConstants {
        /* Data Types */
        DT_ACTIVITY_FEATURE_GOLF("DT_ACTIVITY_FEATURE_GOLF", DataType.DT_ACTIVITY_FEATURE_GOLF),
        DT_UNUSED_DATA_TYPE("DT_UNUSED_DATA_TYPE", DataType.DT_UNUSED_DATA_TYPE),
        DT_CONTINUOUS_STEPS_DELTA("DT_CONTINUOUS_STEPS_DELTA", DataType.DT_CONTINUOUS_STEPS_DELTA),
        DT_CONTINUOUS_STEPS_TOTAL("DT_CONTINUOUS_STEPS_TOTAL", DataType.DT_CONTINUOUS_STEPS_TOTAL),
        DT_INSTANTANEOUS_STEPS_RATE("DT_INSTANTANEOUS_STEPS_RATE", DataType.DT_INSTANTANEOUS_STEPS_RATE),
        DT_CONTINUOUS_STEPS_RATE_STATISTIC("DT_CONTINUOUS_STEPS_RATE_STATISTIC",
            DataType.DT_CONTINUOUS_STEPS_RATE_STATISTIC),
        @Deprecated DT_CONTINUOUS_ACTIVITY_SEGMENT("DT_CONTINUOUS_ACTIVITY_SEGMENT",
            DataType.DT_CONTINUOUS_ACTIVITY_SEGMENT),
        DT_CONTINUOUS_CALORIES_CONSUMED("DT_CONTINUOUS_CALORIES_CONSUMED", DataType.DT_CONTINUOUS_CALORIES_CONSUMED),
        DT_CONTINUOUS_CALORIES_BURNT("DT_CONTINUOUS_CALORIES_BURNT", DataType.DT_CONTINUOUS_CALORIES_BURNT),
        DT_INSTANTANEOUS_CALORIES_BMR("DT_INSTANTANEOUS_CALORIES_BMR", DataType.DT_INSTANTANEOUS_CALORIES_BMR),
        DT_INSTANTANEOUS_POWER_SAMPLE("DT_INSTANTANEOUS_POWER_SAMPLE", DataType.DT_INSTANTANEOUS_POWER_SAMPLE),
        DT_INSTANTANEOUS_ACTIVITY_SAMPLE("DT_INSTANTANEOUS_ACTIVITY_SAMPLE", DataType.DT_INSTANTANEOUS_ACTIVITY_SAMPLE),
        DT_INSTANTANEOUS_ACTIVITY_SAMPLES("DT_INSTANTANEOUS_ACTIVITY_SAMPLES",
            DataType.DT_INSTANTANEOUS_ACTIVITY_SAMPLES),
        DT_INSTANTANEOUS_HEART_RATE("DT_INSTANTANEOUS_HEART_RATE", DataType.DT_INSTANTANEOUS_HEART_RATE),
        DT_INSTANTANEOUS_LOCATION_SAMPLE("DT_INSTANTANEOUS_LOCATION_SAMPLE", DataType.DT_INSTANTANEOUS_LOCATION_SAMPLE),
        DT_INSTANTANEOUS_LOCATION_TRACE("DT_INSTANTANEOUS_LOCATION_TRACE", DataType.DT_INSTANTANEOUS_LOCATION_TRACE),
        DT_CONTINUOUS_DISTANCE_DELTA("DT_CONTINUOUS_DISTANCE_DELTA", DataType.DT_CONTINUOUS_DISTANCE_DELTA),
        DT_CONTINUOUS_DISTANCE_TOTAL("DT_CONTINUOUS_DISTANCE_TOTAL", DataType.DT_CONTINUOUS_DISTANCE_TOTAL),
        DT_INSTANTANEOUS_SPEED("DT_INSTANTANEOUS_SPEED", DataType.DT_INSTANTANEOUS_SPEED),
        @Deprecated DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL("DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL",
            DataType.DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL),
        @Deprecated DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION("DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION",
            DataType.DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION),
        DT_CONTINUOUS_BIKING_PEDALING_TOTAL("DT_CONTINUOUS_BIKING_PEDALING_TOTAL",
            DataType.DT_CONTINUOUS_BIKING_PEDALING_TOTAL),
        DT_INSTANTANEOUS_BIKING_PEDALING_RATE("DT_INSTANTANEOUS_BIKING_PEDALING_RATE",
            DataType.DT_INSTANTANEOUS_BIKING_PEDALING_RATE),
        DT_INSTANTANEOUS_HEIGHT("DT_INSTANTANEOUS_HEIGHT", DataType.DT_INSTANTANEOUS_HEIGHT),
        DT_INSTANTANEOUS_BODY_WEIGHT("DT_INSTANTANEOUS_BODY_WEIGHT", DataType.DT_INSTANTANEOUS_BODY_WEIGHT),
        DT_INSTANTANEOUS_BODY_FAT_RATE("DT_INSTANTANEOUS_BODY_FAT_RATE", DataType.DT_INSTANTANEOUS_BODY_FAT_RATE),
        DT_INSTANTANEOUS_NUTRITION_FACTS("DT_INSTANTANEOUS_NUTRITION_FACTS", DataType.DT_INSTANTANEOUS_NUTRITION_FACTS),
        DT_INSTANTANEOUS_HYDRATE("DT_INSTANTANEOUS_HYDRATE", DataType.DT_INSTANTANEOUS_HYDRATE),
        DT_CONTINUOUS_HYDRATE_TOTAL("DT_CONTINUOUS_HYDRATE_TOTAL", DataType.DT_CONTINUOUS_HYDRATE_TOTAL),
        DT_CONTINUOUS_WORKOUT_DURATION("DT_CONTINUOUS_WORKOUT_DURATION", DataType.DT_CONTINUOUS_WORKOUT_DURATION),
        @Deprecated DT_CONTINUOUS_EXERCISE_INTENSITY("DT_CONTINUOUS_EXERCISE_INTENSITY",
            DataType.DT_CONTINUOUS_EXERCISE_INTENSITY),
        DT_STATISTICS_SLEEP("DT_STATISTICS_SLEEP", DataType.DT_STATISTICS_SLEEP),
        DT_CONTINUOUS_SLEEP("DT_CONTINUOUS_SLEEP", DataType.DT_CONTINUOUS_SLEEP),
        DT_INSTANTANEOUS_STRESS("DT_INSTANTANEOUS_STRESS", DataType.DT_INSTANTANEOUS_STRESS),
        DT_INSTANTANEOUS_STRESS_STATISTICS("DT_INSTANTANEOUS_STRESS", DataType.DT_INSTANTANEOUS_STRESS_STATISTICS),
        DT_CONTINUOUS_EXERCISE_INTENSITY_V2("DT_CONTINUOUS_EXERCISE_INTENSITY_V2",
            DataType.DT_CONTINUOUS_EXERCISE_INTENSITY_V2),
        DT_STATISTICS_EXERCISE_INTENSITY_V2("DT_STATISTICS_EXERCISE_INTENSITY_V2",
            DataType.DT_STATISTICS_EXERCISE_INTENSITY_V2),
        DT_INSTANTANEOUS_RESTING_HEART_RATE("DT_INSTANTANEOUS_RESTING_HEART_RATE",
            DataType.DT_INSTANTANEOUS_RESTING_HEART_RATE),
        DT_RESTING_HEART_RATE_STATISTICS("DT_RESTING_HEART_RATE_STATISTICS", DataType.DT_RESTING_HEART_RATE_STATISTICS),
        DT_CONTINUOUS_JUMP("DT_CONTINUOUS_JUMP", DataType.DT_CONTINUOUS_JUMP),
        DT_CONTINUOUS_JUMP_STATISTICS("DT_CONTINUOUS_JUMP_STATISTICS", DataType.DT_CONTINUOUS_JUMP_STATISTICS),
        DT_INSTANTANEOUS_EXERCISE_HEART_RATE("DT_INSTANTANEOUS_EXERCISE_HEART_RATE",
            DataType.DT_INSTANTANEOUS_EXERCISE_HEART_RATE),
        DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS("DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS",
            DataType.DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS),
        DT_INSTANTANEOUS_ALTITUDE("DT_INSTANTANEOUS_ALTITUDE", DataType.DT_INSTANTANEOUS_ALTITUDE),
        DT_INSTANTANEOUS_SKIP_SPEED("DT_INSTANTANEOUS_SKIP_SPEED", DataType.DT_INSTANTANEOUS_SKIP_SPEED),
        DT_CONTINUOUS_SKIP_SPEED_STATISTICS("DT_CONTINUOUS_SKIP_SPEED_STATISTICS",
            DataType.DT_CONTINUOUS_SKIP_SPEED_STATISTICS),
        DT_CONTINUOUS_ALTITUDE_STATISTICS("DT_CONTINUOUS_ALTITUDE_STATISTICS",
            DataType.DT_CONTINUOUS_ALTITUDE_STATISTICS),
        DT_CONTINUOUS_RUN_POSTURE("DT_CONTINUOUS_RUN_POSTURE", DataType.DT_CONTINUOUS_RUN_POSTURE),
        DT_CONTINUOUS_RUN_POSTURE_STATISTICS("DT_CONTINUOUS_RUN_POSTURE_STATISTICS",
            DataType.DT_CONTINUOUS_RUN_POSTURE_STATISTICS),
        DT_ACTIVITY_FEATURE_JUMPING_ROPE("DT_ACTIVITY_FEATURE_JUMPING_ROPE", DataType.DT_ACTIVITY_FEATURE_JUMPING_ROPE),
        DT_ACTIVITY_FEATURE_BASKETBALL("DT_ACTIVITY_FEATURE_BASKETBALL", DataType.DT_ACTIVITY_FEATURE_BASKETBALL),
        DT_RESISTANCE("DT_RESISTANCE", DataType.DT_RESISTANCE),
        DT_RESISTANCE_STATISTICS("DT_RESISTANCE_STATISTICS", DataType.DT_RESISTANCE_STATISTICS),
        DT_ACTIVITY_FEATURE_ROWING("DT_ACTIVITY_FEATURE_ROWING", DataType.DT_ACTIVITY_FEATURE_ROWING),
        DT_INSTANTANEOUS_STROKE_RATE("DT_INSTANTANEOUS_STROKE_RATE", DataType.DT_INSTANTANEOUS_STROKE_RATE),
        DT_INSTANTANEOUS_PEDALING_RATE("DT_INSTANTANEOUS_PEDALING_RATE", DataType.DT_INSTANTANEOUS_PEDALING_RATE),
        DT_CONTINUOUS_STROKE_RATE_STATISTICS("DT_CONTINUOUS_STROKE_RATE_STATISTICS",
            DataType.DT_CONTINUOUS_STROKE_RATE_STATISTICS),
        DT_CONTINUOUS_PEDALING_RATE_STATISTICS("DT_CONTINUOUS_PEDALING_RATE_STATISTICS",
            DataType.DT_CONTINUOUS_PEDALING_RATE_STATISTICS),
        DT_INSTANTANEOUS_SWIMMING_STROKE_RATE("DT_INSTANTANEOUS_SWIMMING_STROKE_RATE",
            DataType.DT_INSTANTANEOUS_SWIMMING_STROKE_RATE),
        DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS("DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS",
            DataType.DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS),
        DT_INSTANTANEOUS_SWIMMING_SWOLF("DT_INSTANTANEOUS_SWIMMING_SWOLF", DataType.DT_INSTANTANEOUS_SWIMMING_SWOLF),
        DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS("DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS",
            DataType.DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS),
        DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER("DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER",
            DataType.DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER),
        DT_ACTIVITY_FEATURE_SWIMMING_POOL("DT_ACTIVITY_FEATURE_SWIMMING_POOL",
            DataType.DT_ACTIVITY_FEATURE_SWIMMING_POOL),
        DT_ACTIVITY_FEATURE_SKIING("DT_ACTIVITY_FEATURE_SKIING", DataType.DT_ACTIVITY_FEATURE_SKIING),
        DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN("DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN",
            DataType.DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN),
        DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST("DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST",
            DataType.DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST),
        DT_VO2MAX("DT_VO2MAX", DataType.DT_VO2MAX),
        DT_VO2MAX_STATISTICS("DT_VO2MAX_STATISTICS", DataType.DT_VO2MAX_STATISTICS),
        DT_DIVING_DEPTH("DT_DIVING_DEPTH", DataType.DT_DIVING_DEPTH),
        DT_DIVING_DEPTH_STATISTICS("DT_DIVING_DEPTH_STATISTICS", DataType.DT_DIVING_DEPTH_STATISTICS),
        DT_WATER_TEMPERATURE("DT_WATER_TEMPERATURE", DataType.DT_WATER_TEMPERATURE),
        DT_WATER_TEMPERATURE_STATISTICS("DT_WATER_TEMPERATURE_STATISTICS", DataType.DT_WATER_TEMPERATURE_STATISTICS),
        POLYMERIZE_CONTINUOUS_WORKOUT_DURATION("POLYMERIZE_CONTINUOUS_WORKOUT_DURATION",
            DataType.POLYMERIZE_CONTINUOUS_WORKOUT_DURATION),
        POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS("POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS),
        POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS("POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS),
        POLYMERIZE_STEP_COUNT_DELTA("POLYMERIZE_STEP_COUNT_DELTA", DataType.POLYMERIZE_STEP_COUNT_DELTA),
        POLYMERIZE_DISTANCE_DELTA("POLYMERIZE_DISTANCE_DELTA", DataType.POLYMERIZE_DISTANCE_DELTA),
        POLYMERIZE_CALORIES_CONSUMED("POLYMERIZE_CALORIES_CONSUMED", DataType.POLYMERIZE_CALORIES_CONSUMED),
        POLYMERIZE_CALORIES_EXPENDED("POLYMERIZE_CALORIES_EXPENDED", DataType.POLYMERIZE_CALORIES_EXPENDED),
        @Deprecated POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS(
            "POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS),
        POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS("POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS),
        POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE("POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE",
            DataType.POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE),
        POLYMERIZE_CONTINUOUS_POWER_STATISTICS("POLYMERIZE_CONTINUOUS_POWER_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_POWER_STATISTICS),
        POLYMERIZE_CONTINUOUS_SPEED_STATISTICS("POLYMERIZE_CONTINUOUS_SPEED_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_SPEED_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS),
        POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS("POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS),
        POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS("POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS",
            DataType.POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS),
        POLYMERIZE_HYDRATION("POLYMERIZE_HYDRATION", DataType.POLYMERIZE_HYDRATION);

        private final String value;

        private final DataType dataType;

        DataTypeConstants(String value, DataType dataType) {
            this.value = value;
            this.dataType = dataType;
        }

        public static DataTypeConstants fromString(String text) {
            for (DataTypeConstants variable : DataTypeConstants.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }

        public DataType getDataType() {
            return dataType;
        }
    }

    enum HealthFieldsConstants {
        FIELD_SYSTOLIC_PRESSURE("FIELD_SYSTOLIC_PRESSURE", newDoubleField("systolic_pressure")),
        FIELD_SYSTOLIC_PRESSURE_AVG("FIELD_SYSTOLIC_PRESSURE_AVG", newDoubleField("systolic_pressure_avg")),
        FIELD_SYSTOLIC_PRESSURE_MAX("FIELD_SYSTOLIC_PRESSURE_MAX", newDoubleField("FIELD_SYSTOLIC_PRESSURE_MAX")),
        FIELD_SYSTOLIC_PRESSURE_MIN("FIELD_SYSTOLIC_PRESSURE_MIN", newDoubleField("systolic_pressure_min")),
        FIELD_SYSTOLIC_PRESSURE_LAST("FIELD_SYSTOLIC_PRESSURE_LAST", newDoubleField("systolic_pressure_min")),
        FIELD_DIASTOLIC_PRESSURE("FIELD_DIASTOLIC_PRESSURE", newDoubleField("diastolic_pressure")),
        FIELD_DIASTOLIC_PRESSURE_AVG("FIELD_DIASTOLIC_PRESSURE_AVG", newDoubleField("diastolic_pressure_avg")),
        FIELD_DIASTOLIC_PRESSURE_MAX("FIELD_DIASTOLIC_PRESSURE_MAX", newDoubleField("diastolic_pressure_max")),
        FIELD_DIASTOLIC_PRESSURE_MIN("FIELD_DIASTOLIC_PRESSURE_MIN", newDoubleField("diastolic_pressure_min")),
        FIELD_DIASTOLIC_PRESSURE_LAST("FIELD_DIASTOLIC_PRESSURE_LAST", newDoubleField("diastolic_pressure_last")),
        FIELD_SATURATION("FIELD_SATURATION", newDoubleField("saturation")),
        FIELD_SATURATION_AVG("FIELD_SATURATION_AVG", newDoubleField("saturation_avg")),
        FIELD_SATURATION_MAX("FIELD_SATURATION_MAX", newDoubleField("saturation_max")),
        FIELD_SATURATION_MIN("FIELD_SATURATION_MIN", newDoubleField("saturation_min")),
        FIELD_SATURATION_LAST("FIELD_SATURATION_LAST", newDoubleField("saturation_last")),
        FIELD_OXYGEN_SUPPLY_FLOW_RATE("FIELD_OXYGEN_SUPPLY_FLOW_RATE", newDoubleField("oxygen_supply_flow_rate")),
        FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG("FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG",
            newDoubleField("oxygen_supply_flow_rate_avg")),
        FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN("FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN",
            newDoubleField("oxygen_supply_flow_rate_min")),
        FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX("FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX",
            newDoubleField("oxygen_supply_flow_rate_max")),
        FIELD_OXYGEN_THERAPY("FIELD_OXYGEN_THERAPY", newIntField("oxygen_therapy")),
        FIELD_SPO2_MEASUREMENT_MECHANISM("FIELD_SPO2_MEASUREMENT_MECHANISM", newIntField("spo2_measurement_mechanism")),
        FIELD_SPO2_MEASUREMENT_APPROACH("FIELD_SPO2_MEASUREMENT_APPROACH", newIntField("spo2_measurement_approach")),
        FIELD_TEMPERATURE("FIELD_TEMPERATURE", newDoubleField("temperature")),
        FIELD_MEASURE_BODY_PART_OF_TEMPERATURE("FIELD_MEASURE_BODY_PART_OF_TEMPERATURE",
            newDoubleField("measure_body_part_of_temperature")),
        FIELD_TEXTURE("FIELD_TEXTURE", newIntField("texture")),
        FIELD_AMOUNT("FIELD_AMOUNT", newIntField("amount")),
        FIELD_POSITION("FIELD_POSITION", newIntField("position")),
        FIELD_DILATION_STATUS("FIELD_DILATION_STATUS", newIntField("dilation_status")),
        FIELD_FIRMNESS_LEVEL("FIELD_FIRMNESS_LEVEL", newIntField("firmness_level")),
        FIELD_VOLUME("FIELD_VOLUME", newIntField("volume")),
        FIELD_DETECTION_RESULT("FIELD_DETECTION_RESULT", newIntField("detection_result")),
        FIELD_URIC_ACID("FIELD_URIC_ACID", newIntField("uric_acid")),
        FIELD_NITRITE("FIELD_NITRITE", newIntField("nitrite")),
        FIELD_UROBILINOGEN("FIELD_UROBILINOGEN", newIntField("urobilinogen")),
        FIELD_BILIRUBIN("FIELD_BILIRUBIN", newIntField("bilirubin")),
        FIELD_GLUCOSE("FIELD_GLUCOSE", newIntField("glucose")),
        FIELD_THRESHOLD("FIELD_THRESHOLD", newDoubleField("threshold")),
        FIELD_AVG_HEART_RATE("FIELD_AVG_HEART_RATE", newDoubleField("avg_heart_rate")),
        FIELD_MAX_HEART_RATE("FIELD_MAX_HEART_RATE", newDoubleField("max_heart_rate")),
        FIELD_MIN_HEART_RATE("FIELD_MIN_HEART_RATE", newDoubleField("min_heart_rate")),
        FIELD_RECORD_DAY("FIELD_RECORD_DAY", newDoubleField("recordDay")),
        FIELD_STATUS("FIELD_STATUS", newDoubleField("status")),
        FIELD_SUB_STATUS("FIELD_SUB_STATUS", newDoubleField("subStatus")),
        FIELD_TIME_ZONE("FIELD_TIME_ZONE", newDoubleField("timeZone")),
        FIELD_DYSMENORRHOEA_LEVEL("FIELD_DYSMENORRHOEA_LEVEL", newIntField("level")),
        FIELD_PHYSICAL_SYMPTOMS("FIELD_PHYSICAL_SYMPTOMS", newStringField("physicalSymptoms")),
        FIELD_MOOD("FIELD_MOOD", newIntField("mood")),
        FIELD_SKIN_STATUS("FIELD_SKIN_STATUS", newIntField("skinStatus")),
        FIELD_APPETITE("FIELD_APPETITE", newDoubleField("appetite")),
        FIELD_CONTRACEPTIVE_MEASURES("FIELD_CONTRACEPTIVE_MEASURES", newDoubleField("contraceptiveMeasures")),
        FIELD_SPHYGMUS("FIELD_SPHYGMUS", newDoubleField("sphygmus")),
        FIELD_SPHYGMUS_AVG("FIELD_SPHYGMUS_AVG", newDoubleField("sphygmus_avg")),
        FIELD_SPHYGMUS_MIN("FIELD_SPHYGMUS_MIN", newDoubleField("sphygmus_min")),
        FIELD_SPHYGMUS_MAX("FIELD_SPHYGMUS_MAX", newDoubleField("sphygmus_max")),
        FIELD_SPHYGMUS_LAST("FIELD_SPHYGMUS_LAST", newDoubleField("sphygmus_last")),
        FIELD_BODY_POSTURE("FIELD_BODY_POSTURE", newIntField("body_posture")),
        FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE("FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE",
            newIntField("measure_body_part_of_blood_pressure")),
        FIELD_MEASUREMENT_ANOMALY_FLAG("FIELD_MEASUREMENT_ANOMALY_FLAG", newIntField("measurement_anomaly_flag")),
        FIELD_BEFORE_MEASURE_ACTIVITY("FIELD_BEFORE_MEASURE_ACTIVITY", newIntField("before_measure_activity")),
        FIELD_LEVEL("FIELD_LEVEL", newDoubleField("level")),
        FIELD_MEASURE_TIME("FIELD_MEASURE_TIME", newDoubleField("measure_time")),
        FIELD_CORRELATION_WITH_MEALTIME("FIELD_CORRELATION_WITH_MEALTIME", newIntField("correlation_with_mealtime")),
        FIELD_CORRELATION_WITH_SLEEP_STATE("FIELD_CORRELATION_WITH_SLEEP_STATE",
            newIntField("correlation_with_sleep_state")),
        FIELD_SAMPLE_SOURCE("FIELD_SAMPLE_SOURCE", newIntField("sample_source")),
        FIELD_MEASUREMENT_REMINDER("FIELD_MEASUREMENT_REMINDER", newIntField("measurement_reminder")),
        FIELD_REMARKS("FIELD_REMARKS", newStringField("remarks")),
        SYS_MODE("SYS_MODE", newIntField("sysMode")),
        SYS_SESSION_DATE("SYS_SESSION_DATE", newLongField("sysSessionDate")),
        EVENT_AHI("EVENT_AHI", newDoubleField("eventAhi")),
        SYS_DURATION("SYS_DURATION", newIntField("sysDuration")),
        LUMIS_TIDVOL_MEDIAN("LUMIS_TIDVOL_MEDIAN", newDoubleField("lumisTidvolMedian")),
        LUMIS_TIDVOL("LUMIS_TIDVOL", newDoubleField("lumisTidvol95")),
        LUMIS_TIDVOL_MAX("LUMIS_TIDVOL_MAX", newDoubleField("lumisTidvolMax")),
        CLINICAL_RESPRATE_MEDIAN("CLINICAL_RESPRATE_MEDIAN", newDoubleField("clinicalRespRateMedian")),
        CLINICAL_RESP_RATE("CLINICAL_RESP_RATE", newDoubleField("clinicalRespRate95")),
        CLINICAL_RESP_RATE_MAX("CLINICAL_RESP_RATE_MAX", newDoubleField("clinicalRespRateMax")),
        LUMIS_IERATIO_MEDIAN("LUMIS_IERATIO_MEDIAN", newDoubleField("lumisIeratioMedian")),
        LUMIS_IERATIO_QUANTILE("LUMIS_IERATIO_QUANTILE", newDoubleField("lumisIeratioQuantile95")),
        LUMIS_IERATIO_MAX("LUMIS_IERATIO_MAX", newDoubleField("lumisIeratioMax")),
        MASK_OFF("MASK_OFF", newIntField("maskOff")),
        HYPOVENTILATION_INDEX("HYPOVENTILATION_INDEX", newDoubleField("hypoventilationIndex")),
        OBSTRUCTIVE_APNEA_INDEX("OBSTRUCTIVE_APNEA_INDEX", newDoubleField("obstructiveApneaIndex")),
        PRESSURE_BELOW("PRESSURE_BELOW", newDoubleField("pressureBelow95")),
        HYPOVENTILATION_EVENT_TIMES("HYPOVENTILATION_EVENT_TIMES", newIntField("hypoventilationEventTimes")),
        SNORING_EVENT_TIMES("SNORING_EVENT_TIMES", newIntField("snoringEventTimes")),
        CENTER_APNEA_EVENT_TIMES("CENTER_APNEA_EVENT_TIMES", newIntField("obstructiveApneaEventTimes")),
        OBSTRUCTIVE_APNEA_EVENT_TIMES("OBSTRUCTIVE_APNEA_EVENT_TIMES", newIntField("centerApneaEventTimes")),
        AIR_FLOW_LIMIT_EVENT_TIMES("AIR_FLOW_LIMIT_EVENT_TIMES", newIntField("airflowLimitEventTimes")),
        MASSIVE_LEAK_EVENT_TIMES("MASSIVE_LEAK_EVENT_TIMES", newIntField("massiveLeakEventTimes")),
        UNKNOW_EVENT_TIMES("UNKNOW_EVENT_TIMES", newIntField("unknowEventTimes")),
        ALL_EVENT_TIMES("ALL_EVENT_TIMES", newIntField("allEventTimes"));

        private final String value;

        private final Field fieldType;

        HealthFieldsConstants(String value, Field fieldType) {
            this.value = value;
            this.fieldType = fieldType;
        }

        public static HealthFieldsConstants fromString(String text) {
            for (HealthFieldsConstants variable : HealthFieldsConstants.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }

        public Field getFieldType() {
            return fieldType;
        }
    }

    enum HealthDataTypesConstant {
        DT_INSTANTANEOUS_BLOOD_PRESSURE("DT_INSTANTANEOUS_BLOOD_PRESSURE",
            HealthDataTypes.DT_INSTANTANEOUS_BLOOD_PRESSURE),
        DT_INSTANTANEOUS_BLOOD_GLUCOSE("DT_INSTANTANEOUS_BLOOD_GLUCOSE",
            HealthDataTypes.DT_INSTANTANEOUS_BLOOD_GLUCOSE),
        DT_INSTANTANEOUS_SPO2("DT_INSTANTANEOUS_SPO2", HealthDataTypes.DT_INSTANTANEOUS_SPO2),
        DT_INSTANTANEOUS_BODY_TEMPERATURE("DT_INSTANTANEOUS_BODY_TEMPERATURE",
            HealthDataTypes.DT_INSTANTANEOUS_BODY_TEMPERATURE),
        DT_INSTANTANEOUS_SKIN_TEMPERATURE("DT_INSTANTANEOUS_SKIN_TEMPERATURE",
            HealthDataTypes.DT_INSTANTANEOUS_SKIN_TEMPERATURE),
        DT_INSTANTANEOUS_BODY_TEMPERATURE_REST("DT_INSTANTANEOUS_BODY_TEMPERATURE_REST",
            HealthDataTypes.DT_INSTANTANEOUS_BODY_TEMPERATURE_REST),
        DT_INSTANTANEOUS_CERVICAL_MUCUS("DT_INSTANTANEOUS_CERVICAL_MUCUS",
            HealthDataTypes.DT_INSTANTANEOUS_CERVICAL_MUCUS),
        DT_INSTANTANEOUS_CERVICAL_STATUS("DT_INSTANTANEOUS_CERVICAL_STATUS",
            HealthDataTypes.DT_INSTANTANEOUS_CERVICAL_STATUS),
        DT_CONTINUOUS_MENSTRUAL_FLOW("DT_CONTINUOUS_MENSTRUAL_FLOW", HealthDataTypes.DT_CONTINUOUS_MENSTRUAL_FLOW),
        DT_INSTANTANEOUS_OVULATION_DETECTION("DT_INSTANTANEOUS_OVULATION_DETECTION",
            HealthDataTypes.DT_INSTANTANEOUS_OVULATION_DETECTION),
        DT_INSTANTANEOUS_VAGINAL_SPECKLE("DT_INSTANTANEOUS_VAGINAL_SPECKLE",
            HealthDataTypes.DT_INSTANTANEOUS_VAGINAL_SPECKLE),
        DT_INSTANTANEOUS_URIC_ACID("DT_INSTANTANEOUS_URIC_ACID", HealthDataTypes.DT_INSTANTANEOUS_URIC_ACID),
        DT_INSTANTANEOUS_URINE_ROUTINE_NITRITE("DT_INSTANTANEOUS_URINE_ROUTINE_NITRITE",
            HealthDataTypes.DT_INSTANTANEOUS_URINE_ROUTINE_NITRITE),
        DT_INSTANTANEOUS_URINE_ROUTINE_UROBILINOGEN("DT_INSTANTANEOUS_URINE_ROUTINE_UROBILINOGEN",
            HealthDataTypes.DT_INSTANTANEOUS_URINE_ROUTINE_UROBILINOGEN),
        DT_INSTANTANEOUS_URINE_ROUTINE_BILIRUBIN("DT_INSTANTANEOUS_URINE_ROUTINE_BILIRUBIN",
            HealthDataTypes.DT_INSTANTANEOUS_URINE_ROUTINE_BILIRUBIN),
        DT_INSTANTANEOUS_URINE_ROUTINE_GLUCOSE("DT_INSTANTANEOUS_URINE_ROUTINE_GLUCOSE",
            HealthDataTypes.DT_INSTANTANEOUS_URINE_ROUTINE_GLUCOSE),
        DT_HEALTH_RECORD_TACHYCARDIA("DT_HEALTH_RECORD_TACHYCARDIA", HealthDataTypes.DT_HEALTH_RECORD_TACHYCARDIA),
        DT_HEALTH_RECORD_BRADYCARDIA("DT_HEALTH_RECORD_BRADYCARDIA", HealthDataTypes.DT_HEALTH_RECORD_BRADYCARDIA),
        DT_HEALTH_RECORD_SLEEP("DT_HEALTH_RECORD_SLEEP", HealthDataTypes.DT_HEALTH_RECORD_SLEEP),
        DT_HEALTH_RECORD_MENSTRUAL_CYCLE("DT_HEALTH_RECORD_MENSTRUAL_CYCLE",
            HealthDataTypes.DT_HEALTH_RECORD_MENSTRUAL_CYCLE),
        POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_BLOOD_GLUCOSE_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_BLOOD_GLUCOSE_STATISTICS",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_BODY_BLOOD_GLUCOSE_STATISTICS),
        POLYMERIZE_CONTINUOUS_SPO2_STATISTICS("POLYMERIZE_CONTINUOUS_SPO2_STATISTICS",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_SPO2_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_STATISTICS",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_STATISTICS),
        POLYMERIZE_CONTINUOUS_SKIN_TEMPERATURE_STATISTICS("POLYMERIZE_CONTINUOUS_SKIN_TEMPERATURE_STATISTICS",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_SKIN_TEMPERATURE_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_REST_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_REST_STATISTICS",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_REST_STATISTICS),
        POLYMERIZE_INSTANTANEOUS_CERVICAL_MUCUS("POLYMERIZE_INSTANTANEOUS_CERVICAL_MUCUS",
            HealthDataTypes.POLYMERIZE_INSTANTANEOUS_CERVICAL_MUCUS),
        POLYMERIZE_INSTANTANEOUS_CERVICAL_STATUS("POLYMERIZE_INSTANTANEOUS_CERVICAL_STATUS",
            HealthDataTypes.POLYMERIZE_INSTANTANEOUS_CERVICAL_STATUS),
        POLYMERIZE_CONTINUOUS_MENSTRUAL_FLOW("POLYMERIZE_CONTINUOUS_MENSTRUAL_FLOW",
            HealthDataTypes.POLYMERIZE_CONTINUOUS_MENSTRUAL_FLOW),
        POLYMERIZE_INSTANTANEOUS_OVULATION_DETECTION("POLYMERIZE_INSTANTANEOUS_OVULATION_DETECTION",
            HealthDataTypes.POLYMERIZE_INSTANTANEOUS_OVULATION_DETECTION),
        POLYMERIZE_INSTANTANEOUS_VAGINAL_SPECKLE("POLYMERIZE_INSTANTANEOUS_VAGINAL_SPECKLE",
            HealthDataTypes.POLYMERIZE_INSTANTANEOUS_VAGINAL_SPECKLE),
        DT_DYSMENORRHOEA("DT_DYSMENORRHOEA", HealthDataTypes.DT_DYSMENORRHOEA),
        DT_PHYSICAL_SYMPTOMS("DT_PHYSICAL_SYMPTOMS", HealthDataTypes.DT_PHYSICAL_SYMPTOMS),
        DT_MOOD("DT_MOOD", HealthDataTypes.DT_MOOD),
        DT_SKIN_STATUS("DT_SKIN_STATUS", HealthDataTypes.DT_SKIN_STATUS),
        DT_APPETITE("DT_APPETITE", HealthDataTypes.DT_APPETITE),
        DT_SEXUAL_ACTIVITY("DT_SEXUAL_ACTIVITY", HealthDataTypes.DT_SEXUAL_ACTIVITY),
        DT_HEALTH_RECORD_VENTILATOR("DT_HEALTH_RECORD_VENTILATOR", HealthDataTypes.DT_HEALTH_RECORD_VENTILATOR),
        DT_SLEEP_RESPIRATORY_DETAIL("DT_SLEEP_RESPIRATORY_DETAIL", HealthDataTypes.DT_SLEEP_RESPIRATORY_DETAIL),
        DT_SLEEP_RESPIRATORY_EVENT("DT_SLEEP_RESPIRATORY_EVENT", HealthDataTypes.DT_SLEEP_RESPIRATORY_EVENT),
        DT_CGM_BLOOD_GLUCOSE("DT_CGM_BLOOD_GLUCOSE", HealthDataTypes.DT_CGM_BLOOD_GLUCOSE),
        POLYMERIZE_CGM_BLOOD_GLUCOSE_STATISTICS("POLYMERIZE_CGM_BLOOD_GLUCOSE_STATISTICS",
            HealthDataTypes.POLYMERIZE_CGM_BLOOD_GLUCOSE_STATISTICS);

        private final String value;

        private final DataType dataType;

        HealthDataTypesConstant(String value, DataType dataType) {
            this.value = value;
            this.dataType = dataType;
        }

        public static HealthDataTypesConstant fromString(String text) {
            for (HealthDataTypesConstant variable : HealthDataTypesConstant.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }

        public DataType getDataType() {
            return dataType;
        }

    }

    enum FieldConstants {
        /* Field Types */
        FIELD_PRECISION("FIELD_PRECISION", newDoubleField("precision")),
        FIELD_ALTITUDE("FIELD_ALTITUDE", newDoubleField("altitude")),
        FIELD_TYPE_OF_ACTIVITY("FIELD_TYPE_OF_ACTIVITY", newIntField("type_of_activity")),
        FIELD_POSSIBILITY_OF_ACTIVITY("FIELD_POSSIBILITY_OF_ACTIVITY", newDoubleField("possibility_of_activity")),
        FIELD_BPM("FIELD_BPM", newDoubleField("bpm")),
        FIELD_POSSIBILITY("FIELD_POSSIBILITY", newDoubleField("possibility")),
        FIELD_SPAN("FIELD_SPAN", newIntField("span")),
        FIELD_DISTANCE("FIELD_DISTANCE", newDoubleField("distance")),
        FIELD_DISTANCE_DELTA("FIELD_DISTANCE_DELTA", newDoubleField("distance_delta")),
        FIELD_HEIGHT("FIELD_HEIGHT", newDoubleField("height")),
        FIELD_STEPS_DELTA("FIELD_STEPS_DELTA", newIntField("steps_delta")),
        FIELD_STEPS("FIELD_STEPS", newIntField("steps")),
        FIELD_SPHYGMUS(" FIELD_SPHYGMUS", newIntField("Pulse")),
        FIELD_DURATION("FIELD_DURATION", newIntField("duration")),
        FIELD_STEP_LENGTH("FIELD_STEP_LENGTH", newDoubleField("step_length")),
        FIELD_LATITUDE("FIELD_LATITUDE", newDoubleField("latitude")),
        FIELD_LONGITUDE("FIELD_LONGITUDE", newDoubleField("longitude")),
        FIELD_COORDINATE("FIELD_COORDINATE", newDoubleField("coordinate")),
        FIELD_BODY_WEIGHT("FIELD_BODY_WEIGHT", newDoubleField("body_weight")),
        FIELD_BMI("FIELD_BMI", newDoubleField("bmi")),
        FIELD_BODY_FAT("FIELD_BODY_FAT", newDoubleField("body_fat")),
        FIELD_MUSCLE_MASS("FIELD_MUSCLE_MASS", newDoubleField("muscle_mass")),
        FIELD_BASAL_METABOLISM("FIELD_BASAL_METABOLISM", newDoubleField("basal_metabolism")),
        FIELD_MOISTURE("FIELD_MOISTURE", newDoubleField("moisture")),
        FIELD_MOISTURE_RATE("FIELD_MOISTURE_RATE", newDoubleField("moisture_rate")),
        FIELD_VISCERAL_FAT_LEVEL("FIELD_VISCERAL_FAT_LEVEL", newDoubleField("visceral_fat_level")),
        FIELD_BONE_SALT("FIELD_BONE_SALT", newDoubleField("bone_salt")),
        FIELD_PROTEIN_RATE("FIELD_PROTEIN_RATE", newDoubleField("protein_rate")),
        FIELD_BODY_AGE("FIELD_BODY_AGE", newDoubleField("body_age")),
        FIELD_BODY_SCORE("FIELD_BODY_SCORE", newDoubleField("body_score")),
        FIELD_SKELETAL_MUSCLEL_MASS("FIELD_SKELETAL_MUSCLEL_MASS", newDoubleField("skeletal_musclel_mass")),
        FIELD_IMPEDANCE("FIELD_IMPEDANCE", newDoubleField("impedance")),
        FIELD_CIRCUMFERENCE("FIELD_CIRCUMFERENCE", newDoubleField("circumference")),
        FIELD_BODY_FAT_RATE("FIELD_BODY_FAT_RATE", newDoubleField("body_fat_rate")),
        FIELD_SPEED("FIELD_SPEED", newDoubleField("speed")),
        FIELD_RPM("FIELD_RPM", newDoubleField("rpm")),
        SPM("SPM", newDoubleField("spm")),
        FIELD_STEP_RATE("FIELD_STEP_RATE", newDoubleField("step_rate")),
        FIELD_ROTATION("FIELD_ROTATION", newIntField("rotation")),
        FIELD_CALORIES("FIELD_CALORIES", newDoubleField("calories")),
        FIELD_CALORIES_TOTAL("FIELD_CALORIES_TOTAL", newDoubleField("calories_total")),
        FIELD_POWER("FIELD_POWER", newDoubleField("power")),
        FIELD_HYDRATE("FIELD_HYDRATE", newDoubleField("hydrate")),
        FIELD_HYDRATE_TOTAL("FIELD_HYDRATE_TOTAL", newDoubleField("totalHydrate")),
        FIELD_MEAL("FIELD_MEAL", newIntField("meal")),
        FIELD_FOOD("FIELD_FOOD", newStringField("food")),
        FIELD_NUTRIENTS("FIELD_NUTRIENTS", newMapField("nutrients")),
        FIELD_NUTRIENTS_FACTS("FIELD_NUTRIENTS_FACTS", newMapField("nutrients_facts")),
        FIELD_FRAGMENTS("FIELD_FRAGMENTS", newIntField("fragments")),
        FIELD_AVG("FIELD_AVG", newDoubleField("avg")),
        FIELD_VO2MAX("FIELD_VO2MAX", newDoubleField("vo2max")),
        FIELD_DEPTH("FIELD_DEPTH", newDoubleField("depth")),
        FIELD_TEMPERATURE("FIELD_TEMPERATURE", newDoubleField("temperature")),
        FIELD_MAX("FIELD_MAX", newDoubleField("max")),
        FIELD_LAST("FIELD_LAST", newDoubleField("last")),
        FIELD_AVG_BODY_FAT_RATE("FIELD_AVG_BODY_FAT_RATE", newDoubleField("avg_body_fat_rate")),
        FIELD_MAX_BODY_FAT_RATE("FIELD_MAX_BODY_FAT_RATE", newDoubleField("max_body_fat_rate")),
        FIELD_MIN_BODY_FAT_RATE("FIELD_MIN_BODY_FAT_RATE", newDoubleField("min_body_fat_rate")),
        FIELD_AVG_SKELETAL_MUSCLEL_MASS("FIELD_AVG_SKELETAL_MUSCLEL_MASS", newDoubleField("avg_skeletal_musclel_mass")),
        FIELD_MAX_SKELETAL_MUSCLEL_MASS("FIELD_MAX_SKELETAL_MUSCLEL_MASS", newDoubleField("max_skeletal_musclel_mass")),
        FIELD_MIN_SKELETAL_MUSCLEL_MASS("FIELD_MIN_SKELETAL_MUSCLEL_MASS", newDoubleField("min_skeletal_musclel_mass")),
        FIELD_JUMP_HEIGHT("FIELD_JUMP_HEIGHT", newDoubleField("jump_height")),
        FIELD_PASSAGE_DURATION("FIELD_PASSAGE_DURATION", newIntField("passage_duration")),
        FIELD_JUMP_TIMES("FIELD_JUMP_TIMES", newIntField("jump_times")),
        FIELD_MIN_JUMP_HEIGHT("FIELD_MIN_JUMP_HEIGHT", newDoubleField("min_jump_height")),
        FIELD_AVG_JUMP_HEIGHT("FIELD_AVG_JUMP_HEIGHT", newDoubleField("avg_jump_height")),
        FIELD_MAX_JUMP_HEIGHT("FIELD_MAX_JUMP_HEIGHT", newDoubleField("max_jump_height")),
        FIELD_MIN_PASSAGE_DURATION("FIELD_MIN_PASSAGE_DURATION", newIntField("min_passage_duration")),
        FIELD_AVG_PASSAGE_DURATION("FIELD_AVG_PASSAGE_DURATION", newIntField("avg_passage_duration")),
        FIELD_MAX_PASSAGE_DURATION("FIELD_MAX_PASSAGE_DURATION", newIntField("max_passage_duration")),
        FIELD_MIN("FIELD_MIN", newDoubleField("min")),
        SKIP_SPEED("SKIP_SPEED", newDoubleField("skip_speed")),
        GROUND_CONTACT_TIME("GROUND_CONTACT_TIME", newDoubleField("ground_contact_time")),
        GROUND_IMPACT_ACCELERATION("GROUND_IMPACT_ACCELERATION", newDoubleField("ground_impact_acceleration")),
        SWING_ANGLE("SWING_ANGLE", newDoubleField("swing_angle")),
        EVERSION_EXCURSION("EVERSION_EXCURSION", newDoubleField("eversion_excursion")),
        HANG_TIME("HANG_TIME", newDoubleField("hang_time")),
        GROUND_HANG_TIME_RATE("GROUND_HANG_TIME_RATE", newDoubleField("ground_hang_time_rate")),
        FORE_FOOT_STRIKE_PATTERN("FORE_FOOT_STRIKE_PATTERN", newDoubleField("fore_foot_strike_pattern")),
        HIND_FOOT_STRIKE_PATTERN("HIND_FOOT_STRIKE_PATTERN", newDoubleField("hind_foot_strike_pattern")),
        WHOLE_FOOT_STRIKE_PATTERN("WHOLE_FOOT_STRIKE_PATTERN", newDoubleField("whole_foot_strike_pattern")),
        IMPACT_PEAK("IMPACT_PEAK", newDoubleField("impact_peak")),
        VERTICAL_OSCILLATION("VERTICAL_OSCILLATION", newDoubleField("vertical_oscillation")),
        VERTICAL_RATIO("VERTICAL_RATIO", newDoubleField("vertical_ratio")),
        GC_TIME_BALANCE("GC_TIME_BALANCE", newDoubleField("gc_time_balance")),
        AVG_GROUND_CONTACT_TIME("AVG_GROUND_CONTACT_TIME", newDoubleField("avg_ground_contact_time")),
        AVG_GROUND_IMPACT_ACCELERATION("AVG_GROUND_IMPACT_ACCELERATION",
            newDoubleField("avg_ground_impact_acceleration")),
        AVG_SWING_ANGLE("AVG_SWING_ANGLE", newDoubleField("avg_swing_angle")),
        AVG_EVERSION_EXCURSION("AVG_EVERSION_EXCURSION", newDoubleField("avg_eversion_excursion")),
        AVG_HANG_TIME("AVG_HANG_TIME", newDoubleField("avg_hang_time")),
        AVG_GROUND_HANG_TIME_RATE("AVG_GROUND_HANG_TIME_RATE", newDoubleField("avg_ground_hang_time_rate")),
        AVG_IMPACT_PEAK("AVG_IMPACT_PEAK", newDoubleField("avg_impact_peak")),
        AVG_VERTICAL_IMPACT_RATE("AVG_VERTICAL_IMPACT_RATE", newDoubleField("avg_vertical_impact_rate")),
        AVG_GC_TIME_BALANCE("AVG_GC_TIME_BALANCE", newDoubleField("avg_gc_time_balance")),
        AVG_VERTICAL_OSCILLATION("AVG_VERTICAL_OSCILLATION", newDoubleField("avg_vertical_oscillation")),
        AVG_VERTICAL_RATIO("AVG_VERTICAL_RATIO", newDoubleField("avg_vertical_ratio")),
        SWOLF("SWOLF", newDoubleField("swolf")),
        RESISTANCE_LEVEL("RESISTANCE_LEVEL", newDoubleField("resistanceLevel")),
        RESISTANCE_LEVEL_ONE_LOWER_LIMIT("RESISTANCE_LEVEL_ONE_LOWER_LIMIT",
            newDoubleField("resistanceLevelOneLowerLimit")),
        RESISTANCE_LEVEL_TWO_LOWER_LIMIT("RESISTANCE_LEVEL_TWO_LOWER_LIMIT",
            newDoubleField("resistanceLevelTwoLowerLimit")),
        RESISTANCE_LEVEL_THREE_LOWER_LIMIT("RESISTANCE_LEVEL_THREE_LOWER_LIMIT",
            newDoubleField("resistanceLevelThreeLowerLimit")),
        RESISTANCE_LEVEL_FOUR_LOWER_LIMIT("RESISTANCE_LEVEL_FOUR_LOWER_LIMIT",
            newDoubleField("resistanceLevelFourLowerLimit")),
        RESISTANCE_LEVEL_FIVE_LOWER_LIMIT("RESISTANCE_LEVEL_FIVE_LOWER_LIMIT",
            newDoubleField("resistanceLevelFiveLowerLimit")),
        RESISTANCE_LEVEL_FIVE_UPPER_LIMIT("RESISTANCE_LEVEL_FIVE_UPPER_LIMIT",
            newDoubleField("resistanceLevelFiveUpperLimit")),
        RESISTANCE_LEVEL_ONE_TIME("RESISTANCE_LEVEL_ONE_TIME", newDoubleField("resistanceLevelOneTime")),
        RESISTANCE_LEVEL_TWO_TIME("RESISTANCE_LEVEL_TWO_TIME", newDoubleField("resistanceLevelTwoTime")),
        RESISTANCE_LEVEL_THREE_TIME("RESISTANCE_LEVEL_THREE_TIME", newDoubleField("resistanceLevelThreeTime")),
        RESISTANCE_LEVEL_FOUR_TIME("RESISTANCE_LEVEL_FOUR_TIME", newDoubleField("resistanceLevelFourTime")),
        RESISTANCE_LEVEL_FIVE_TIME("RESISTANCE_LEVEL_FIVE_TIME", newDoubleField("resistanceLevelFiveTime")),
        MAX_RES("MAX_RES", newDoubleField("maxRes")),
        MIN_RES("MIN_RES", newDoubleField("minRes")),
        SLEEP_STATE("SLEEP_STATE", newIntField("sleep_state")),
        FIELD_ASCENT_TOTAL("FIELD_ASCENT_TOTAL", newDoubleField("ascent_total")),
        FIELD_DESCENT_TOTAL("FIELD_DESCENT_TOTAL", newDoubleField("descent_total")),
        EXERCISE_TYPE("EXERCISE_TYPE", newIntField("exercise_type")),
        INTENSITY_MAP("INTENSITY_MAP", newMapField("intensity_map")),
        FALL_ASLEEP_TIME("FALL_ASLEEP_TIME", newDoubleField("fall_asleep_time")),
        WAKE_UP_TIME("WAKE_UP_TIME", newDoubleField("wakeup_time")),
        ALL_SLEEP_TIME("ALL_SLEEP_TIME", newDoubleField("all_sleep_time")),
        LIGHT_SLEEP_TIME("LIGHT_SLEEP_TIME", newDoubleField("light_sleep_time")),
        DEEP_SLEEP_TIME("DEEP_SLEEP_TIME", newDoubleField("deep_sleep_time")),
        DREAM_TIME("DREAM_TIME", newDoubleField("dream_time")),
        AWAKE_TIME("AWAKE_TIME", newDoubleField("awake_time")),
        DEEP_SLEEP_PART("DEEP_SLEEP_PART", newDoubleField("deep_sleep_part")),
        WAKE_UP_CNT("WAKE_UP_CNT", newDoubleField("wakeup_count")),
        SCORE("SCORE", newIntField("score")),
        GRADE("GRADE", newIntField("grade")),
        MEASURE_TYPE("MEASURE_TYPE", newIntField("measureType")),
        STRESS_AVG("STRESS_AVG", newIntField("avg")),
        STRESS_MAX("STRESS_MAX", newIntField("max")),
        STRESS_MIN("STRESS_MIN", newIntField("min")),
        STRESS_LAST("STRESS_LAST", newIntField("last")),
        MEASURE_COUNT("MEASURE_COUNT", newIntField("measure_count")),
        FIELD_LEVEL("FIELD_LEVEL", newDoubleField("level")),

        SLEEP_SCORE("SLEEP_SCORE", newIntField("sleep_score")),
        SLEEP_LATENCY("SLEEP_LATENCY", newIntField("sleep_latency")),
        GO_BED_TIME("GO_BED_TIME", newIntField("go_bedTime")),
        GO_BED_TIME_NEW("GO_BED_TIME_NEW", newIntField("go_bed_timego_bed_time")),
        PREPARE_SLEEP_TIME("PREPARE_SLEEP_TIME", newIntField("prepare_sleep_time")),

        FIELD_MIN_LATITUDE("FIELD_MIN_LATITUDE", newDoubleField("min_latitude")),
        FIELD_MIN_LONGITUDE("FIELD_MIN_LONGITUDE", newDoubleField("min_longitude")),
        FIELD_MAX_LATITUDE("FIELD_MAX_LATITUDE", newDoubleField("max_latitude")),
        FIELD_MAX_LONGITUDE("FIELD_MAX_LONGITUDE", newDoubleField("max_longitude")),
        FIELD_APPEARANCE("FIELD_APPEARANCE", newIntField("appearance")),
        FIELD_INTENSITY("FIELD_INTENSITY", newDoubleField("intensity")),
        SWIMMING_STROKE("SWIMMING_STROKE", newIntField("swimming_stroke")),
        POOL_LENGTH("POOL_LENGTH", newIntField("pool_length")),
        TRIP_TIMES("TRIP_TIMES", newIntField("trip_times")),
        MAX_SLOPE_PERCENT("MAX_SLOPE_PERCENT", newDoubleField("max_slope_percent")),
        SLEEP_TYPE("SLEEP_TYPE", newIntField("sleep_type")),
        OFF_BED_TIME("OFF_BED_TIME", newDoubleField("off_bed_time")),
        MAX_SLOPE_DEGREE("MAX_SLOPE_DEGREE", newDoubleField("max_slope_degree")),
        SKIING_TOTAL_TIME("SKIING_TOTAL_TIME", newDoubleField("total_time")),
        SKIING_TOTAL_DISTANCE("SKIING_TOTAL_DISTANCE", newDoubleField("total_distance")),
        GOLF_SWING_COUNT("GOLF_SWING_COUNT", newIntField("golf_swing_count")),
        GOLF_SWING_SPEED("GOLF_SWING_SPEED", newIntField("golf_swing_speed")),
        GOLF_MAX_SWING_SPEED("GOLF_MAX_SWING_SPEED", newIntField("golf_max_swing_speed")),
        GOLF_SWING_TEMPO("GOLF_SWING_TEMPO", newDoubleField("golf_swing_tempo")),
        GOLF_DOWN_SWING_TIME("GOLF_DOWN_SWING_TIME", newIntField("golf_down_swing_time")),
        GOLF_BACK_SWING_TIME("GOLF_BACK_SWING_TIME", newIntField("golf_back_swing_time")),
        BREATH_TIME("BREATH_TIME", newIntField("breathTime")),
        BREATH_HOLDING_TIME("BREATH_HOLDING_TIME", newIntField("breathHoldingTime")),
        BREATH_HOLDING_TRAIN_RHYTHM("BREATH_HOLDING_TRAIN_RHYTHM", newIntField("breathHoldingTrainRhythm")),
        DIAPHRAGM_TIME("DIAPHRAGM_TIME", newIntField("diaphragmTime")),

        SLEEP_RESPIRATORY_TYPE("SLEEP_RESPIRATORY_TYPE", newIntField("type")),
        SLEEP_RESPIRATORY_VALUE("SLEEP_RESPIRATORY_VALUE", newDoubleField("value")),
        EVENT_NAME("EVENT_NAME", newIntField("eventName"));

        private final String value;

        private final Field fieldType;

        FieldConstants(String value, Field fieldType) {
            this.value = value;
            this.fieldType = fieldType;
        }

        public static FieldConstants fromString(String text) {
            for (FieldConstants variable : FieldConstants.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }

        public Field getFieldType() {
            return fieldType;
        }
    }
}
