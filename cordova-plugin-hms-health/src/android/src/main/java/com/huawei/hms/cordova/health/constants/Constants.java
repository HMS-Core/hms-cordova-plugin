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

package com.huawei.hms.cordova.health.constants;

import com.huawei.hms.hihealth.data.DataType;
import com.huawei.hms.hihealth.data.Field;

import java.util.concurrent.TimeUnit;

import static com.huawei.hms.hihealth.data.Field.newFloatField;
import static com.huawei.hms.hihealth.data.Field.newIntField;
import static com.huawei.hms.hihealth.data.Field.newMapField;
import static com.huawei.hms.hihealth.data.Field.newStringField;

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

        public TimeUnit getTimeUnitType() {
            return type;
        }

        public static TimeUnitTypes fromString(String text) {
            for (TimeUnitTypes variable : TimeUnitTypes.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }
    }

    enum DataTypeConstants {
        /* Data Types */
        DT_UNUSED_DATA_TYPE("DT_UNUSED_DATA_TYPE", DataType.DT_UNUSED_DATA_TYPE),
        DT_CONTINUOUS_STEPS_DELTA("DT_CONTINUOUS_STEPS_DELTA", DataType.DT_CONTINUOUS_STEPS_DELTA),
        DT_CONTINUOUS_STEPS_TOTAL("DT_CONTINUOUS_STEPS_TOTAL", DataType.DT_CONTINUOUS_STEPS_TOTAL),
        DT_INSTANTANEOUS_STEPS_RATE("DT_INSTANTANEOUS_STEPS_RATE", DataType.DT_INSTANTANEOUS_STEPS_RATE),
        DT_CONTINUOUS_ACTIVITY_SEGMENT("DT_CONTINUOUS_ACTIVITY_SEGMENT", DataType.DT_CONTINUOUS_ACTIVITY_SEGMENT),
        DT_CONTINUOUS_CALORIES_CONSUMED("DT_CONTINUOUS_CALORIES_CONSUMED", DataType.DT_CONTINUOUS_CALORIES_CONSUMED),
        DT_CONTINUOUS_CALORIES_BURNT("DT_CONTINUOUS_CALORIES_BURNT", DataType.DT_CONTINUOUS_CALORIES_BURNT),
        DT_INSTANTANEOUS_CALORIES_BMR("DT_INSTANTANEOUS_CALORIES_BMR", DataType.DT_INSTANTANEOUS_CALORIES_BMR),
        DT_INSTANTANEOUS_POWER_SAMPLE("DT_INSTANTANEOUS_POWER_SAMPLE", DataType.DT_INSTANTANEOUS_POWER_SAMPLE),
        DT_INSTANTANEOUS_ACTIVITY_SAMPLE("DT_INSTANTANEOUS_ACTIVITY_SAMPLE", DataType.DT_INSTANTANEOUS_ACTIVITY_SAMPLE),
        DT_INSTANTANEOUS_ACTIVITY_SAMPLES("DT_INSTANTANEOUS_ACTIVITY_SAMPLES", DataType.DT_INSTANTANEOUS_ACTIVITY_SAMPLES),
        DT_INSTANTANEOUS_HEART_RATE("DT_INSTANTANEOUS_HEART_RATE", DataType.DT_INSTANTANEOUS_HEART_RATE),
        DT_INSTANTANEOUS_LOCATION_SAMPLE("DT_INSTANTANEOUS_LOCATION_SAMPLE", DataType.DT_INSTANTANEOUS_LOCATION_SAMPLE),
        DT_INSTANTANEOUS_LOCATION_TRACE("DT_INSTANTANEOUS_LOCATION_TRACE", DataType.DT_INSTANTANEOUS_LOCATION_TRACE),
        DT_CONTINUOUS_DISTANCE_DELTA("DT_CONTINUOUS_DISTANCE_DELTA", DataType.DT_CONTINUOUS_DISTANCE_DELTA),
        DT_CONTINUOUS_DISTANCE_TOTAL("DT_CONTINUOUS_DISTANCE_TOTAL", DataType.DT_CONTINUOUS_DISTANCE_TOTAL),
        DT_INSTANTANEOUS_SPEED("DT_INSTANTANEOUS_SPEED", DataType.DT_INSTANTANEOUS_SPEED),
        DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL("DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL", DataType.DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL),
        DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION("DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION", DataType.DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION),
        DT_CONTINUOUS_BIKING_PEDALING_TOTAL("DT_CONTINUOUS_BIKING_PEDALING_TOTAL", DataType.DT_CONTINUOUS_BIKING_PEDALING_TOTAL),
        DT_INSTANTANEOUS_BIKING_PEDALING_RATE("DT_INSTANTANEOUS_BIKING_PEDALING_RATE", DataType.DT_INSTANTANEOUS_BIKING_PEDALING_RATE),
        DT_INSTANTANEOUS_HEIGHT("DT_INSTANTANEOUS_HEIGHT", DataType.DT_INSTANTANEOUS_HEIGHT),
        DT_INSTANTANEOUS_BODY_WEIGHT("DT_INSTANTANEOUS_BODY_WEIGHT", DataType.DT_INSTANTANEOUS_BODY_WEIGHT),
        DT_INSTANTANEOUS_BODY_FAT_RATE("DT_INSTANTANEOUS_BODY_FAT_RATE", DataType.DT_INSTANTANEOUS_BODY_FAT_RATE),
        DT_INSTANTANEOUS_NUTRITION_FACTS("DT_INSTANTANEOUS_NUTRITION_FACTS", DataType.DT_INSTANTANEOUS_NUTRITION_FACTS),
        DT_INSTANTANEOUS_HYDRATE("DT_INSTANTANEOUS_HYDRATE", DataType.DT_INSTANTANEOUS_HYDRATE),
        DT_CONTINUOUS_WORKOUT_DURATION("DT_CONTINUOUS_WORKOUT_DURATION", DataType.DT_CONTINUOUS_WORKOUT_DURATION),
        DT_CONTINUOUS_EXERCISE_INTENSITY("DT_CONTINUOUS_EXERCISE_INTENSITY", DataType.DT_CONTINUOUS_EXERCISE_INTENSITY),
        POLYMERIZE_CONTINUOUS_WORKOUT_DURATION("POLYMERIZE_CONTINUOUS_WORKOUT_DURATION", DataType.POLYMERIZE_CONTINUOUS_WORKOUT_DURATION),
        POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS("POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS),
        POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS("POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS),
        POLYMERIZE_STEP_COUNT_DELTA("POLYMERIZE_STEP_COUNT_DELTA", DataType.POLYMERIZE_STEP_COUNT_DELTA),
        POLYMERIZE_DISTANCE_DELTA("POLYMERIZE_DISTANCE_DELTA", DataType.POLYMERIZE_DISTANCE_DELTA),
        POLYMERIZE_CALORIES_CONSUMED("POLYMERIZE_CALORIES_CONSUMED", DataType.POLYMERIZE_CALORIES_CONSUMED),
        POLYMERIZE_CALORIES_EXPENDED("POLYMERIZE_CALORIES_EXPENDED", DataType.POLYMERIZE_CALORIES_EXPENDED),
        POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS("POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS),
        POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS("POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS),
        POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE("POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE", DataType.POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE),
        POLYMERIZE_CONTINUOUS_POWER_STATISTICS("POLYMERIZE_CONTINUOUS_POWER_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_POWER_STATISTICS),
        POLYMERIZE_CONTINUOUS_SPEED_STATISTICS("POLYMERIZE_CONTINUOUS_SPEED_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_SPEED_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS),
        POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS("POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS),
        POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS("POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS),
        POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS("POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS", DataType.POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS),
        POLYMERIZE_HYDRATION("POLYMERIZE_HYDRATION", DataType.POLYMERIZE_HYDRATION);

        private final String value;
        private final DataType dataType;

        DataTypeConstants(String value, DataType dataType) {
            this.value = value;
            this.dataType = dataType;
        }

        public DataType getDataType() {
            return dataType;
        }

        public static DataTypeConstants fromString(String text) {
            for (DataTypeConstants variable : DataTypeConstants.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }
    }

    enum FieldConstants {
        /* Field Types */
        FIELD_PRECISION("FIELD_PRECISION", newFloatField("precision")),
        FIELD_ALTITUDE("FIELD_ALTITUDE", newFloatField("altitude")),
        FIELD_TYPE_OF_ACTIVITY("FIELD_TYPE_OF_ACTIVITY", newIntField("type_of_activity")),
        FIELD_POSSIBILITY_OF_ACTIVITY("FIELD_POSSIBILITY_OF_ACTIVITY", newFloatField("possibility_of_activity")),
        FIELD_BPM("FIELD_BPM", newFloatField("bpm")),
        FIELD_POSSIBILITY("FIELD_POSSIBILITY", newFloatField("possibility")),
        FIELD_SPAN("FIELD_SPAN", newIntField("span")),
        FIELD_DISTANCE("FIELD_DISTANCE", newFloatField("distance")),
        FIELD_DISTANCE_DELTA("FIELD_DISTANCE_DELTA", newFloatField("distance_delta")),
        FIELD_HEIGHT("FIELD_HEIGHT", newFloatField("height")),
        FIELD_STEPS_DELTA("FIELD_STEPS_DELTA", newIntField("steps_delta")),
        FIELD_STEPS("FIELD_STEPS", newIntField("steps")),
        FIELD_STEP_LENGTH("FIELD_STEP_LENGTH", newFloatField("step_length")),
        FIELD_LATITUDE("FIELD_LATITUDE", newFloatField("latitude")),
        FIELD_LONGITUDE("FIELD_LONGITUDE", newFloatField("longitude")),
        FIELD_BODY_WEIGHT("FIELD_BODY_WEIGHT", newFloatField("body_weight")),
        FIELD_CIRCUMFERENCE("FIELD_CIRCUMFERENCE", newFloatField("circumference")),
        FIELD_BODY_FAT_RATE("FIELD_BODY_FAT_RATE", newFloatField("body_fat_rate")),
        FIELD_SPEED("FIELD_SPEED", newFloatField("speed")),
        FIELD_RPM("FIELD_RPM", newFloatField("rpm")),
        FIELD_STEP_RATE("FIELD_STEP_RATE", newFloatField("step_rate")),
        FIELD_ROTATION("FIELD_ROTATION", newIntField("rotation")),
        FIELD_CALORIES("FIELD_CALORIES", newFloatField("calories")),
        FIELD_POWER("FIELD_POWER", newFloatField("power")),
        FIELD_HYDRATE("FIELD_HYDRATE", newFloatField("hydrate")),
        FIELD_MEAL("FIELD_MEAL", newIntField("meal")),
        FIELD_FOOD("FIELD_FOOD", newStringField("food")),
        FIELD_NUTRIENTS("FIELD_NUTRIENTS", newMapField("nutrients")),
        FIELD_NUTRIENTS_FACTS("FIELD_NUTRIENTS_FACTS", newMapField("nutrients_facts")),
        FIELD_FRAGMENTS("FIELD_FRAGMENTS", newIntField("fragments")),
        FIELD_AVG("FIELD_AVG", newFloatField("avg")),
        FIELD_MAX("FIELD_MAX", newFloatField("max")),
        FIELD_MIN("FIELD_MIN", newFloatField("min")),
        FIELD_MIN_LATITUDE("FIELD_MIN_LATITUDE", newFloatField("min_latitude")),
        FIELD_MIN_LONGITUDE("FIELD_MIN_LONGITUDE", newFloatField("min_longitude")),
        FIELD_MAX_LATITUDE("FIELD_MAX_LATITUDE", newFloatField("max_latitude")),
        FIELD_MAX_LONGITUDE("FIELD_MAX_LONGITUDE", newFloatField("max_longitude")),
        FIELD_APPEARANCE("FIELD_APPEARANCE", newIntField("appearance")),
        FIELD_INTENSITY("FIELD_INTENSITY", newFloatField("intensity"));

        private final String value;
        private final Field fieldType;

        FieldConstants(String value, Field fieldType) {
            this.value = value;
            this.fieldType = fieldType;
        }

        public Field getFieldType() {
            return fieldType;
        }

        public static FieldConstants fromString(String text) {
            for (FieldConstants variable : FieldConstants.values()) {
                if (variable.value.equalsIgnoreCase(text)) {
                    return variable;
                }
            }
            return null;
        }
    }

}
