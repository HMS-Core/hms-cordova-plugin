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

export declare function signIn(scopes: string[]): Promise<AuthHuaweiId>;
export declare const AppInfo: {
    createApp: (AppInfo: CreateAppReq) => Promise<void>;
    getDetailsUrl: () => Promise<string>;
    getDomainName: () => Promise<string>;
    getPackageName: () => Promise<string>;
    getVersion: () => Promise<string>;
};
export declare const DeviceInfo: {
    createDeviceInfo: (createDeviceInfoReq: createDeviceInfo) => Promise<DeviceInfo>;
};
export declare const ActivityRecordController: {
    addActivityRecord: (addActivityRecordReq: AddActivityRecordReq) => Promise<void>;
    deleteActivityRecord: (deleteActivityRecordReq: deleteActivityRecordReq) => Promise<void>;
    beginActivityRecord: (activityRecordData: BeginActivityRecordReq) => Promise<void>;
    beginBackgroundActivityRecord: (activityRecordData: BeginActivityRecordReq) => Promise<void>;
    endActivityRecord: (activityRecordId: endActivityRecord) => Promise<ActivityRecord[]>;
    endBackgroundActivityRecord: (activityRecordId: endActivityRecord) => Promise<ActivityRecord[]>;
    getActivityRecord: (activityRecordJSON: GetActivityRecordReq) => Promise<ActivityRecord[]>;
};
export declare const AutoRecorderController: {
    startRecord: (startRecordReq: StartRecordReq) => Promise<void>;
    stopRecord: (stopRecordReq: StopRecordReq) => Promise<void>;
};
export declare const ConsentsController: {
    getPermissions: (getPermissionsReq: GetPermissionsReq) => Promise<ScopeLangItem>;
    revokeAll: (appId: string) => Promise<void>;
    revoke: (revokeReq: RevokeReq) => Promise<void>;
    cancelAuthorizationAll: (cancelAuthAllReq: CancelAuthAllReq) => Promise<void>;
    cancelAuthorization: (cancelAuthReq: CancelAuthReq) => Promise<void>;
};
export declare const DataController: {
    initDataController: () => Promise<void>;
    read: (readReq: ReadReq) => Promise<ReadReply>;
    insert: (insertReq: InsertReq) => Promise<void>;
    update: (jsonObject: UpdateReq) => Promise<void>;
    deleteData: (jsonObject: DeleteReq) => Promise<void>;
    readTodaySummation: (dataTypeStr: string) => Promise<SampleSet>;
    readTodaySummationWithList: (dataTypeStrs: string[]) => Promise<SampleSet[]>;
    readDailySummation: (jsonObject: ReadDailySummationReq) => Promise<SampleSet>;
    readDailySummationWithList: (jsonObject: ReadDailySummationWithListReq) => Promise<SampleSet[]>;
    clearAll: () => Promise<void>;
    readLatestData: (jsonObject: DataOption[]) => Promise<Map<DataType, SamplePoint>>;
};
export declare const SettingsController: {
    addDataType: (jsonObject: AddDataTypeReq) => Promise<void>;
    disableHiHealth: () => Promise<void>;
    readDataType: (dataTypeName: string) => Promise<void>;
    checkHealthAppAuthorization: () => Promise<void>;
    getHealthAppAuthorization: () => Promise<void>;
    requestAuthorizationIntent: (AuthReq: authReq) => Promise<string>;
};
export declare const HealthRecordController: {
    addHealthRecord: (AddHRReq: addHRReq) => Promise<string>;
    deleteHealthRecord: (DeleteHRReq: deleteHRReq) => Promise<void>;
    getHealthRecord: (HRReq: getHRReq) => Promise<HealthRecordReply>;
    updateHealthRecord: (UpdateHRReq: updateHRReq) => Promise<void>;
};
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
export declare function on(event: string, callback: (res: any) => void): void;
export declare const HiHealthOptions: {
    ACCESS_READ: number;
    ACCESS_WRITE: number;
};
export declare const HuaweiHiHealth: {
    HEALTHKIT_HEARTHEALTH_READ: string;
    HEALTHKIT_HEARTHEALTH_WRITE: string;
    HEALTHKIT_HEIGHTWEIGHT_READ: string;
    HEALTHKIT_HEIGHTWEIGHT_WRITE: string;
    HEALTHKIT_HEIGHTWEIGHT_BOTH: string;
    HEALTHKIT_STEP_READ: string;
    HEALTHKIT_STEP_WRITE: string;
    HEALTHKIT_STEP_BOTH: string;
    HEALTHKIT_LOCATION_READ: string;
    HEALTHKIT_LOCATION_WRITE: string;
    HEALTHKIT_LOCATION_BOTH: string;
    HEALTHKIT_HEARTRATE_READ: string;
    HEALTHKIT_HEARTRATE_WRITE: string;
    HEALTHKIT_HEARTRATE_BOTH: string;
    HEALTHKIT_BLOODGLUCOSE_READ: string;
    HEALTHKIT_BLOODGLUCOSE_WRITE: string;
    HEALTHKIT_BLOODGLUCOSE_BOTH: string;
    HEALTHKIT_DISTANCE_READ: string;
    HEALTHKIT_DISTANCE_WRITE: string;
    HEALTHKIT_DISTANCE_BOTH: string;
    HEALTHKIT_SPEED_READ: string;
    HEALTHKIT_SPEED_WRITE: string;
    HEALTHKIT_SPEED_BOTH: string;
    HEALTHKIT_CALORIES_READ: string;
    HEALTHKIT_CALORIES_WRITE: string;
    HEALTHKIT_CALORIES_BOTH: string;
    HEALTHKIT_PULMONARY_READ: string;
    HEALTHKIT_PULMONARY_WRITE: string;
    HEALTHKIT_PULMONARY_BOTH: string;
    HEALTHKIT_STRENGTH_READ: string;
    HEALTHKIT_STRENGTH_WRITE: string;
    HEALTHKIT_STRENGTH_BOTH: string;
    HEALTHKIT_ACTIVITY_READ: string;
    HEALTHKIT_ACTIVITY_WRITE: string;
    HEALTHKIT_ACTIVITY_BOTH: string;
    HEALTHKIT_BODYFAT_READ: string;
    HEALTHKIT_BODYFAT_WRITE: string;
    HEALTHKIT_BODYFAT_BOTH: string;
    HEALTHKIT_SLEEP_READ: string;
    HEALTHKIT_SLEEP_WRITE: string;
    HEALTHKIT_SLEEP_BOTH: string;
    HEALTHKIT_NUTRITION_READ: string;
    HEALTHKIT_NUTRITION_WRITE: string;
    HEALTHKIT_NUTRITION_BOTH: string;
    HEALTHKIT_BLOODPRESSURE_READ: string;
    HEALTHKIT_BLOODPRESSURE_WRITE: string;
    HEALTHKIT_BLOODPRESSURE_BOTH: string;
    HEALTHKIT_OXYGENSTATURATION_READ: string;
    HEALTHKIT_OXYGENSTATURATION_WRITE: string;
    HEALTHKIT_OXYGENSTATURATION_BOTH: string;
    HEALTHKIT_BODYTEMPERATURE_READ: string;
    HEALTHKIT_BODYTEMPERATURE_WRITE: string;
    HEALTHKIT_BODYTEMPERATURE_BOTH: string;
    HEALTHKIT_REPRODUCTIVE_READ: string;
    HEALTHKIT_REPRODUCTIVE_WRITE: string;
    HEALTHKIT_REPRODUCTIVE_BOTH: string;
    HEALTHKIT_ACTIVITY_RECORD_READ: string;
    HEALTHKIT_ACTIVITY_RECORD_WRITE: string;
    HEALTHKIT_ACTIVITY_RECORD_BOTH: string;
    HEALTHKIT_STRESS_READ: string;
    HEALTHKIT_STRESS_WRITE: string;
    HEALTHKIT_STRESS_BOTH: string;
    HEALTHKIT_SCOPE_PREFIX: string;
    HEALTHKIT_HISTORYDATA_OPEN_WEEK: string;
    HEALTHKIT_HISTORYDATA_OPEN_MONTH: string;
    HEALTHKIT_HISTORYDATA_OPEN_YEAR: string;
    ALL_SCOPES: string[];
    MAX_SCOPES: string[];
};
export declare const HealthDataTypes: {
    DT_INSTANTANEOUS_BLOOD_PRESSURE: string;
    DT_INSTANTANEOUS_BLOOD_GLUCOSE: string;
    DT_INSTANTANEOUS_SPO2: string;
    DT_INSTANTANEOUS_BODY_TEMPERATURE: string;
    DT_INSTANTANEOUS_SKIN_TEMPERATURE: string;
    DT_INSTANTANEOUS_BODY_TEMPERATURE_REST: string;
    DT_INSTANTANEOUS_CERVICAL_MUCUS: string;
    DT_INSTANTANEOUS_CERVICAL_STATUS: string;
    DT_CONTINUOUS_MENSTRUAL_FLOW: string;
    DT_INSTANTANEOUS_OVULATION_DETECTION: string;
    DT_INSTANTANEOUS_VAGINAL_SPECKLE: string;
    DT_INSTANTANEOUS_URIC_ACID: string;
    DT_INSTANTANEOUS_URINE_ROUTINE_NITRITE: string;
    DT_INSTANTANEOUS_URINE_ROUTINE_UROBILINOGEN: string;
    DT_INSTANTANEOUS_URINE_ROUTINE_BILIRUBIN: string;
    DT_INSTANTANEOUS_URINE_ROUTINE_GLUCOSE: string;
    DT_HEALTH_RECORD_TACHYCARDIA: string;
    DT_HEALTH_RECORD_BRADYCARDIA: string;
    DT_HEALTH_RECORD_SLEEP: string;
    DT_HEALTH_RECORD_MENSTRUAL_CYCLE: string;
    POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_BLOOD_GLUCOSE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_SPO2_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_SKIN_TEMPERATURE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_TEMPERATURE_REST_STATISTICS: string;
    POLYMERIZE_INSTANTANEOUS_CERVICAL_MUCUS: string;
    POLYMERIZE_INSTANTANEOUS_CERVICAL_STATUS: string;
    POLYMERIZE_CONTINUOUS_MENSTRUAL_FLOW: string;
    POLYMERIZE_INSTANTANEOUS_OVULATION_DETECTION: string;
    POLYMERIZE_INSTANTANEOUS_VAGINAL_SPECKLE: string;
    DT_DYSMENORRHOEA: string;
    DT_PHYSICAL_SYMPTOMS: string;
    DT_MOOD: string;
    DT_SKIN_STATUS: string;
    DT_APPETITE: string;
    DT_SEXUAL_ACTIVITY: string;
    DT_HEALTH_RECORD_VENTILATOR: string;
    DT_SLEEP_RESPIRATORY_DETAIL: string;
    DT_SLEEP_RESPIRATORY_EVENT: string;
    DT_CGM_BLOOD_GLUCOSE: string;
    POLYMERIZE_CGM_BLOOD_GLUCOSE_STATISTICS: string;
};
export declare const DataType: {
    DT_UNUSED_DATA_TYPE: string;
    DT_CONTINUOUS_STEPS_DELTA: string;
    DT_CONTINUOUS_STEPS_TOTAL: string;
    POLYMERIZE_CONTINUOUS_SPO2_STATISTICS: string;
    DT_INSTANTANEOUS_STEPS_RATE: string;
    DT_CONTINUOUS_STEPS_RATE_STATISTIC: string;
    DT_CONTINUOUS_ACTIVITY_SEGMENT: string;
    DT_CONTINUOUS_CALORIES_CONSUMED: string;
    DT_CONTINUOUS_CALORIES_BURNT: string;
    DT_INSTANTANEOUS_CALORIES_BMR: string;
    DT_INSTANTANEOUS_POWER_SAMPLE: string;
    DT_INSTANTANEOUS_ACTIVITY_SAMPLE: string;
    DT_INSTANTANEOUS_ACTIVITY_SAMPLES: string;
    DT_INSTANTANEOUS_HEART_RATE: string;
    DT_INSTANTANEOUS_LOCATION_SAMPLE: string;
    DT_INSTANTANEOUS_LOCATION_TRACE: string;
    DT_CONTINUOUS_DISTANCE_DELTA: string;
    DT_CONTINUOUS_DISTANCE_TOTAL: string;
    DT_CONTINUOUS_CALORIES_BURNT_TOTAL: string;
    DT_INSTANTANEOUS_SPEED: string;
    DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL: string;
    DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION: string;
    DT_CONTINUOUS_BIKING_PEDALING_TOTAL: string;
    DT_INSTANTANEOUS_BIKING_PEDALING_RATE: string;
    DT_INSTANTANEOUS_HEIGHT: string;
    DT_INSTANTANEOUS_BODY_WEIGHT: string;
    DT_INSTANTANEOUS_BODY_FAT_RATE: string;
    DT_INSTANTANEOUS_NUTRITION_FACTS: string;
    DT_INSTANTANEOUS_HYDRATE: string;
    DT_CONTINUOUS_HYDRATE_TOTAL: string;
    DT_CONTINUOUS_WORKOUT_DURATION: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY: string;
    DT_STATISTICS_SLEEP: string;
    DT_CONTINUOUS_SLEEP: string;
    DT_INSTANTANEOUS_STRESS: string;
    DT_INSTANTANEOUS_STRESS_STATISTICS: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY_V2: string;
    DT_STATISTICS_EXERCISE_INTENSITY_V2: string;
    DT_INSTANTANEOUS_RESTING_HEART_RATE: string;
    DT_RESTING_HEART_RATE_STATISTICS: string;
    DT_CONTINUOUS_JUMP: string;
    DT_CONTINUOUS_JUMP_STATISTICS: string;
    DT_INSTANTANEOUS_EXERCISE_HEART_RATE: string;
    DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS: string;
    DT_INSTANTANEOUS_ALTITUDE: string;
    DT_INSTANTANEOUS_SKIP_SPEED: string;
    DT_CONTINUOUS_SKIP_SPEED_STATISTICS: string;
    DT_CONTINUOUS_ALTITUDE_STATISTICS: string;
    DT_CONTINUOUS_RUN_POSTURE: string;
    DT_CONTINUOUS_RUN_POSTURE_STATISTICS: string;
    DT_ACTIVITY_FEATURE_JUMPING_ROPE: string;
    DT_ACTIVITY_FEATURE_BASKETBALL: string;
    DT_RESISTANCE: string;
    DT_RESISTANCE_STATISTICS: string;
    DT_ACTIVITY_FEATURE_ROWING: string;
    DT_INSTANTANEOUS_STROKE_RATE: string;
    DT_INSTANTANEOUS_PEDALING_RATE: string;
    DT_CONTINUOUS_STROKE_RATE_STATISTICS: string;
    DT_CONTINUOUS_PEDALING_RATE_STATISTICS: string;
    DT_INSTANTANEOUS_SWIMMING_STROKE_RATE: string;
    DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS: string;
    DT_INSTANTANEOUS_SWIMMING_SWOLF: string;
    DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS: string;
    DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER: string;
    DT_ACTIVITY_FEATURE_SWIMMING_POOL: string;
    DT_ACTIVITY_FEATURE_SKIING: string;
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN: string;
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST: string;
    DT_VO2MAX: string;
    DT_VO2MAX_STATISTICS: string;
    DT_DIVING_DEPTH: string;
    DT_DIVING_DEPTH_STATISTICS: string;
    DT_WATER_TEMPERATURE: string;
    DT_WATER_TEMPERATURE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_WORKOUT_DURATION: string;
    POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS: string;
    POLYMERIZE_STEP_COUNT_DELTA: string;
    POLYMERIZE_DISTANCE_DELTA: string;
    POLYMERIZE_CALORIES_CONSUMED: string;
    POLYMERIZE_CALORIES_EXPENDED: string;
    POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE: string;
    POLYMERIZE_CONTINUOUS_POWER_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_SPEED_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS: string;
    POLYMERIZE_HYDRATION: string;
    POLYMERIZE_CONTINUOUS_BODY_BLOOD_PRESSURE_STATISTICS: string;
};
export declare const HealthFields: {
    FIELD_SYSTOLIC_PRESSURE: string;
    FIELD_SYSTOLIC_PRESSURE_AVG: string;
    FIELD_SYSTOLIC_PRESSURE_MIN: string;
    FIELD_SYSTOLIC_PRESSURE_MAX: string;
    FIELD_SYSTOLIC_PRESSURE_LAST: string;
    FIELD_DIASTOLIC_PRESSURE: string;
    FIELD_DIASTOLIC_PRESSURE_AVG: string;
    FIELD_DIASTOLIC_PRESSURE_MIN: string;
    FIELD_DIASTOLIC_PRESSURE_MAX: string;
    FIELD_DIASTOLIC_PRESSURE_LAST: string;
    FIELD_SPHYGMUS: string;
    FIELD_SPHYGMUS_AVG: string;
    FIELD_SPHYGMUS_MIN: string;
    FIELD_SPHYGMUS_MAX: string;
    FIELD_SPHYGMUS_LAST: string;
    FIELD_BODY_POSTURE: string;
    FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE: string;
    FIELD_MEASUREMENT_ANOMALY_FLAG: string;
    FIELD_MEASUREMENT_REMINDER: string;
    FIELD_BEFORE_MEASURE_ACTIVITY: string;
    FIELD_LEVEL: string;
    FIELD_MEASURE_TIME: string;
    FIELD_CORRELATION_WITH_MEALTIME: string;
    FIELD_CORRELATION_WITH_SLEEP_STATE: string;
    FIELD_SAMPLE_SOURCE: string;
    FIELD_SATURATION: string;
    FIELD_SATURATION_AVG: string;
    FIELD_SATURATION_MIN: string;
    FIELD_SATURATION_MAX: string;
    FIELD_SATURATION_LAST: string;
    FIELD_OXYGEN_SUPPLY_FLOW_RATE: string;
    FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG: string;
    FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN: string;
    FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX: string;
    FIELD_OXYGEN_THERAPY: string;
    FIELD_SPO2_MEASUREMENT_MECHANISM: string;
    FIELD_SPO2_MEASUREMENT_APPROACH: string;
    FIELD_TEMPERATURE: string;
    FIELD_MEASURE_BODY_PART_OF_TEMPERATURE: string;
    FIELD_TEXTURE: string;
    FIELD_AMOUNT: string;
    FIELD_POSITION: string;
    FIELD_DILATION_STATUS: string;
    FIELD_FIRMNESS_LEVEL: string;
    FIELD_VOLUME: string;
    FIELD_DETECTION_RESULT: string;
    FIELD_URIC_ACID: string;
    FIELD_NITRITE: string;
    FIELD_UROBILINOGEN: string;
    FIELD_BILIRUBIN: string;
    FIELD_GLUCOSE: string;
    FIELD_THRESHOLD: string;
    FIELD_AVG_HEART_RATE: string;
    FIELD_MAX_HEART_RATE: string;
    FIELD_MIN_HEART_RATE: string;
    FIELD_RECORD_DAY: string;
    FIELD_STATUS: string;
    FIELD_SUB_STATUS: string;
    FIELD_REMARKS: string;
    FIELD_TIME_ZONE: string;
    FIELD_START_FLAG: string;
    FIELD_END_FLAG: string;
    FIELD_DYSMENORRHOEA_LEVEL: string;
    FIELD_PHYSICAL_SYMPTOMS: string;
    FIELD_MOOD: string;
    FIELD_SKIN_STATUS: string;
    FIELD_APPETITE: string;
    FIELD_CONTRACEPTIVE_MEASURES: string;
    SYS_MODE: string;
    SYS_SESSION_DATE: string;
    EVENT_AHI: string;
    SYS_DURATION: string;
    LUMIS_TIDVOL_MEDIAN: string;
    LUMIS_TIDVOL: string;
    LUMIS_TIDVOL_MAX: string;
    CLINICAL_RESPRATE_MEDIAN: string;
    CLINICAL_RESP_RATE: string;
    CLINICAL_RESP_RATE_MAX: string;
    LUMIS_IERATIO_MEDIAN: string;
    LUMIS_IERATIO_QUANTILE: string;
    LUMIS_IERATIO_MAX: string;
    MASK_OFF: string;
    HYPOVENTILATION_INDEX: string;
    OBSTRUCTIVE_APNEA_INDEX: string;
    PRESSURE_BELOW: string;
    HYPOVENTILATION_EVENT_TIMES: string;
    SNORING_EVENT_TIMES: string;
    CENTER_APNEA_EVENT_TIMES: string;
    OBSTRUCTIVE_APNEA_EVENT_TIMES: string;
    AIR_FLOW_LIMIT_EVENT_TIMES: string;
    MASSIVE_LEAK_EVENT_TIMES: string;
    UNKNOW_EVENT_TIMES: string;
    ALL_EVENT_TIMES: string;
};
export declare const HiHealthActivities: {
    MIME_TYPE_PREFIX: string;
    EXTRA_ACTION_STATUS: string;
    STATUS_ACTION_START: string;
    STATUS_ACTION_END: string;
    AEROBICS: string;
    ARCHERY: string;
    BADMINTON: string;
    BASEBALL: string;
    BASKETBALL: string;
    BIATHLON: string;
    BOXING: string;
    CALISTHENICS: string;
    CIRCUIT_TRAINING: string;
    CRICKET: string;
    CROSSFIT: string;
    CURLING: string;
    CYCLING: string;
    CYCLING_INDOOR: string;
    DANCING: string;
    DIVING: string;
    ELEVATOR: string;
    ELLIPTICAL: string;
    ERGOMETER: string;
    ESCALATOR: string;
    FENCING: string;
    FOOTBALL_AMERICAN: string;
    FOOTBALL_AUSTRALIAN: string;
    FOOTBALL_SOCCER: string;
    FLYING_DISC: string;
    GARDENING: string;
    GOLF: string;
    GYMNASTICS: string;
    HANDBALL: string;
    HIIT: string;
    HIKING: string;
    HOCKEY: string;
    HORSE_RIDING: string;
    HOUSEWORK: string;
    ICE_SKATING: string;
    IN_VEHICLE: string;
    INTERVAL_TRAINING: string;
    JUMPING_ROPE: string;
    KAYAKING: string;
    KETTLEBELL_TRAINING: string;
    KICKBOXING: string;
    KITESURFING: string;
    MARTIAL_ARTS: string;
    MEDITATION: string;
    MIXED_MARTIAL_ARTS: string;
    ON_FOOT: string;
    OTHER: string;
    P90X: string;
    PARAGLIDING: string;
    PILATES: string;
    POLO: string;
    RACQUETBALL: string;
    ROCK_CLIMBING: string;
    ROWING: string;
    ROWING_MACHINE: string;
    RUGBY: string;
    RUNNING: string;
    RUNNING_MACHINE: string;
    SAILING: string;
    SCUBA_DIVING: string;
    SCOOTER_RIDING: string;
    SKATEBOARDING: string;
    SKATING: string;
    SKIING: string;
    SLEDDING: string;
    SLEEP: string;
    SLEEP_LIGHT: string;
    SLEEP_DEEP: string;
    SLEEP_REM: string;
    SLEEP_AWAKE: string;
    SNOWBOARDING: string;
    SNOWMOBILE: string;
    SNOWSHOEING: string;
    SOFTBALL: string;
    SQUASH: string;
    STAIR_CLIMBING: string;
    STAIR_CLIMBING_MACHINE: string;
    STANDUP_PADDLEBOARDING: string;
    STILL: string;
    STRENGTH_TRAINING: string;
    SURFING: string;
    SWIMMING: string;
    SWIMMING_POOL: string;
    SWIMMING_OPEN_WATER: string;
    TABLE_TENNIS: string;
    TEAM_SPORTS: string;
    TENNIS: string;
    TILTING: string;
    UNKNOWN: string;
    VOLLEYBALL: string;
    WAKEBOARDING: string;
    WALKING: string;
    WATER_POLO: string;
    WEIGHTLIFTING: string;
    WHEELCHAIR: string;
    WINDSURFING: string;
    YOGA: string;
    ZUMBA: string;
    DARTS: string;
    BILLIARDS: string;
    SHUTTLECOCK: string;
    BOWLING: string;
    GROUP_CALISTHENICS: string;
    TUG_OF_WAR: string;
    BEACH_SOCCER: string;
    BEACH_VOLLEYBALL: string;
    GATEBALL: string;
    SEPAKTAKRAW: string;
    DODGE_BALL: string;
    TREADMILL: string;
    SPINNING: string;
    STROLL_MACHINE: string;
    CROSS_FIT: string;
    FUNCTIONAL_TRAINING: string;
    PHYSICAL_TRAINING: string;
    BELLY_DANCE: string;
    JAZZ: string;
    LATIN: string;
    BALLET: string;
    CORE_TRAINING: string;
    HORIZONTAL_BAR: string;
    PARALLEL_BARS: string;
    HIP_HOP: string;
    SQUARE_DANCE: string;
    HU_LA_HOOP: string;
    BMX: string;
    ORIENTEERING: string;
    INDOOR_WALK: string;
    INDOOR_RUNNING: string;
    MOUNTIN_CLIMBING: string;
    MOUNTAIN_CLIMBING: string;
    CROSS_COUNTRY_RACE: string;
    ROLLER_SKATING: string;
    ROLLER_SKAING: string;
    HUNTING: string;
    FLY_A_KITE: string;
    SWING: string;
    OBSTACLE_RACE: string;
    BUNGEE_JUMPING: string;
    PARKOUR: string;
    PARACHUTE: string;
    RACING_CAR: string;
    TRIATHLONS: string;
    ICE_HOCKEY: string;
    CROSSCOUNTRY_SKIING: string;
    SLED: string;
    FISHING: string;
    DRIFTING: string;
    DRAGON_BOAT: string;
    MOTORBOAT: string;
    SUP: string;
    FREE_SPARRING: string;
    KARATE: string;
    BODY_COMBAT: string;
    KENDO: string;
    TAI_CHI: string;
    FREE_DIVING: string;
    APNEA_TRAINING: string;
    APNEA_TEST: string;
};
export declare const DataGenerateType: {
    DATA_TYPE_INIT: number;
    DATA_TYPE_RAW: number;
    DATA_TYPE_DERIVED: number;
    DATA_TYPE_CLEAN: number;
    DATA_TYPE_CONVERTED: number;
    DATA_TYPE_MERGED: number;
    DATA_TYPE_POLYMERIZED: number;
    EXTRA_DATA_SOURCE: string;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2002: number;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_ESH2010: number;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_AAMI: number;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_A: number;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_A_B: number;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_A: number;
    HEALTH_DATA_QUALITY_BLOOD_PRESSURE_BHS_B_B: number;
    HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972003: number;
    HEALTH_DATA_QUALITY_BLOOD_GLUCOSE_ISO151972013: number;
};
export declare const TimeUnit: {
    HOURS: string;
    DAYS: string;
    MICROSECONDS: string;
    MILLISECONDS: string;
    MINUTES: string;
    NANOSECONDS: string;
    SECONDS: string;
};
export declare const Field: {
    FORMAT_INT32: number;
    FORMAT_FLOAT: number;
    FORMAT_STRING: number;
    FORMAT_MAP: number;
    FORMAT_LONG: number;
    FORMAT_DOUBLE: number;
    MEAL_UNKNOWN: number;
    MEAL_BREAKFAST: number;
    MEAL_LUNCH: number;
    MEAL_DINNER: number;
    MEAL_SNACK: number;
    TYPE_OF_RESISTANCE_UNKNOWN: number;
    TYPE_OF_RESISTANCE_BARBELL: number;
    TYPE_OF_RESISTANCE_CABLE: number;
    TYPE_OF_RESISTANCE_DUMBBELL: number;
    TYPE_OF_RESISTANCE_KETTLEBELL: number;
    TYPE_OF_RESISTANCE_MACHINE: number;
    TYPE_OF_RESISTANCE_BODY: number;
    NUTRIENTS_FACTS_CALORIES: string;
    NUTRIENTS_FACTS_TOTAL_FAT: string;
    NUTRIENTS_FACTS_SATURATED_FAT: string;
    NUTRIENTS_FACTS_UNSATURATED_FAT: string;
    NUTRIENTS_FACTS_POLYUNSATURATED_FAT: string;
    NUTRIENTS_FACTS_MONOUNSATURATED_FAT: string;
    NUTRIENTS_FACTS_TRANS_FAT: string;
    NUTRIENTS_FACTS_CHOLESTEROL: string;
    NUTRIENTS_FACTS_SODIUM: string;
    NUTRIENTS_FACTS_POTASSIUM: string;
    NUTRIENTS_FACTS_TOTAL_CARBS: string;
    NUTRIENTS_FACTS_DIETARY_FIBER: string;
    NUTRIENTS_FACTS_SUGAR: string;
    NUTRIENTS_FACTS_PROTEIN: string;
    NUTRIENTS_FACTS_VITAMIN_A: string;
    NUTRIENTS_FACTS_VITAMIN_C: string;
    NUTRIENTS_FACTS_CALCIUM: string;
    NUTRIENTS_FACTS_IRON: string;
    FIELD_PRECISION: string;
    FIELD_ALTITUDE: string;
    FIELD_TYPE_OF_ACTIVITY: string;
    FIELD_POSSIBILITY_OF_ACTIVITY: string;
    FIELD_BPM: string;
    FIELD_POSSIBILITY: string;
    FIELD_SPAN: string;
    FIELD_DISTANCE: string;
    FIELD_DISTANCE_DELTA: string;
    FIELD_HEIGHT: string;
    FIELD_STEPS_DELTA: string;
    FIELD_STEPS: string;
    FIELD_DURATION: string;
    FIELD_STEP_LENGTH: string;
    FIELD_LATITUDE: string;
    FIELD_LONGITUDE: string;
    FIELD_COORDINATE: string;
    FIELD_BODY_WEIGHT: string;
    FIELD_BMI: string;
    FIELD_BODY_FAT: string;
    FIELD_BODY_FAT_RATE: string;
    FIELD_MUSCLE_MASS: string;
    FIELD_BASAL_METABOLISM: string;
    FIELD_MOISTURE: string;
    FIELD_MOISTURE_RATE: string;
    FIELD_VISCERAL_FAT_LEVEL: string;
    FIELD_BONE_SALT: string;
    FIELD_PROTEIN_RATE: string;
    FIELD_BODY_AGE: string;
    FIELD_BODY_SCORE: string;
    FIELD_SKELETAL_MUSCLEL_MASS: string;
    FIELD_IMPEDANCE: string;
    FIELD_CIRCUMFERENCE: string;
    FIELD_SPEED: string;
    FIELD_RPM: string;
    FIELD_STEP_RATE: string;
    FIELD_ROTATION: string;
    FIELD_CALORIES: string;
    FIELD_CALORIES_TOTAL: string;
    FIELD_POWER: string;
    FIELD_HYDRATE: string;
    FIELD_HYDRATE_TOTAL: string;
    FIELD_MEAL: string;
    FIELD_FOOD: string;
    FIELD_NUTRIENTS: string;
    FIELD_NUTRIENTS_FACTS: string;
    FIELD_FRAGMENTS: string;
    FIELD_AVG: string;
    FIELD_MAX: string;
    FIELD_LAST: string;
    FIELD_AVG_BODY_FAT_RATE: string;
    FIELD_MAX_BODY_FAT_RATE: string;
    FIELD_MIN_BODY_FAT_RATE: string;
    FIELD_AVG_SKELETAL_MUSCLEL_MASS: string;
    FIELD_MAX_SKELETAL_MUSCLEL_MASS: string;
    FIELD_MIN_SKELETAL_MUSCLEL_MASS: string;
    FIELD_JUMP_HEIGHT: string;
    FIELD_PASSAGE_DURATION: string;
    FIELD_JUMP_TIMES: string;
    FIELD_MIN_JUMP_HEIGHT: string;
    FIELD_AVG_JUMP_HEIGHT: string;
    FIELD_MAX_JUMP_HEIGHT: string;
    FIELD_MIN_PASSAGE_DURATION: string;
    FIELD_AVG_PASSAGE_DURATION: string;
    FIELD_MAX_PASSAGE_DURATION: string;
    FIELD_MIN: string;
    FIELD_ASCENT_TOTAL: string;
    FIELD_DESCENT_TOTAL: string;
    FIELD_MIN_LATITUDE: string;
    FIELD_MIN_LONGITUDE: string;
    FIELD_MAX_LATITUDE: string;
    FIELD_MAX_LONGITUDE: string;
    FIELD_APPEARANCE: string;
    FIELD_INTENSITY: string;
    EXERCISE_TYPE: string;
    INTENSITY_MAP: string;
    FALL_ASLEEP_TIME: string;
    WAKE_UP_TIME: string;
    SLEEP_SCORE: string;
    SLEEP_LATENCY: string;
    GO_BED_TIME: string;
    PREPARE_SLEEP_TIME: string;
    OFF_BED_TIME: string;
    GO_BED_TIME_NEW: string;
    SLEEP_EFFICIENCY: string;
    LIGHT_SLEEP_TIME: string;
    DEEP_SLEEP_TIME: string;
    DREAM_TIME: string;
    AWAKE_TIME: string;
    ALL_SLEEP_TIME: string;
    WAKE_UP_CNT: string;
    DEEP_SLEEP_PART: string;
    SLEEP_STATE: string;
    SCORE: string;
    GRADE: string;
    MEASURE_TYPE: string;
    STRESS_AVG: string;
    STRESS_MAX: string;
    STRESS_MIN: string;
    STRESS_LAST: string;
    MEASURE_COUNT: string;
    VDOT: string;
    TRAINING_INDEX: string;
    FATIGUE_INDEX: string;
    PHYSICAL_FITNESS_INDEX: string;
    STATE_INDEX: string;
    ALTITUDE: string;
    SKIP_SPEED: string;
    AVG: string;
    MAX: string;
    MIN: string;
    LAST: string;
    SKIP_NUM: string;
    STUMBLING_ROPE: string;
    MAX_SKIPPING_TIMES: string;
    DOUBLE_SHAKE: string;
    TRIPLE_SHAKE: string;
    LAOVERALL_SCOREST: string;
    BURST_SCORE: string;
    LJUMP_SCOREAST: string;
    RUN_SCORE: string;
    BREAKTHROUGH_SCORE: string;
    SPORT_INTENSITY_SCORE: string;
    DIVING_TIME: string;
    DIVING_COUNT: string;
    MAX_DEPTH: string;
    AVG_DEPTH: string;
    MAX_UNDERWATER_TIME: string;
    NO_FLY_TIME: string;
    WATER_TYPE: string;
    SURFACE_TIME: string;
    START_LAT: string;
    START_LON: string;
    END_LAT: string;
    END_LON: string;
    STARTBREATH_TIME_LAT: string;
    BREATH_HOLDING_TIME: string;
    BREATH_HOLDING_TRAIN_RHYTHM: string;
    DIAPHRAGM_TIME: string;
    ASCENT_RATE: string;
    DESCENT_RATE: string;
    GROUND_CONTACT_TIME: string;
    GROUND_IMPACT_ACCELERATION: string;
    EVERSION_EXCURSION: string;
    SWING_ANGLE: string;
    HANG_TIME: string;
    GROUND_HANG_TIME_RATE: string;
    FORE_FOOT_STRIKE_PATTERN: string;
    HIND_FOOT_STRIKE_PATTERN: string;
    WHOLE_FOOT_STRIKE_PATTERN: string;
    IMPACVERTICAL_OSCILLATIONT_PEAK: string;
    VERTICAL_RATIO: string;
    IMPACT_PEAK: string;
    GC_TIME_BALANCE: string;
    IMPAAVG_VERTICAL_IMPACT_RATECT_PEAK: string;
    AVG_GROUND_CONTACT_TIME: string;
    IMPACTAVG_GROUND_IMPACT_ACCELERATION_PEAK: string;
    IMPAAVG_SWING_ANGLECT_PEAK: string;
    AVG_EVERSION_EXCURSION: string;
    IMPACAVG_HANG_TIMET_PEAK: string;
    AVG_IMPACT_PEAK: string;
    AVG_IAVG_GC_TIME_BALANCEMPACT_PEAK: string;
    AVG_IMAVG_VERTICAL_OSCILLATIONPACT_PEAK: string;
    AVG_IMPACT_PAVG_VERTICAL_RATIOEAK: string;
    AVG_IMPACTAVG_GROUND_HANG_TIME_RATE_PEAK: string;
    RESISTANCE_LEVEL: string;
    AVG_IMPMAX_RESACT_PEAK: string;
    MIN_RES: string;
    RESISTANCE_LEVEL_ONE_LOWER_LIMIT: string;
    RESISTANCE_LEVEL_TWO_LOWER_LIMIT: string;
    RESISTANCE_LEVEL_THREE_LOWER_LIMIT: string;
    RESISTANCE_LEVEL_FOUR_LOWER_LIMIT: string;
    RESISTANCE_LEVEL_FIVE_LOWER_LIMIT: string;
    RESISTANCE_LEVEL_FIVE_UPPER_LIMIT: string;
    RESISTANCE_LEVEL_ONE_TIME: string;
    RESISTANCE_LEVEL_TWO_TIMES: string;
    RESISTANCE_LEVEL_THREE_TIME: string;
    RESISTANCE_LEVEL_FOUR_TIME: string;
    RESISTANCE_LEVEL_FIVE_TIME: string;
    VO2MAX: string;
    DEPTH: string;
    TEMPERATURE: string;
    STROKES_NUM: string;
    SPM: string;
    RPM: string;
    SWOLF: string;
    PULL_TIMES: string;
    SWIMMING_STROKE: string;
    POOL_LENGTH: string;
    TRIP_TIMES: string;
    MAX_SLOPE_PERCENT: string;
    SLEEP_TYPE: string;
    MAX_SLOPE_DEGREE: string;
    SKIING_TOTAL_TIME: string;
    SKIING_TOTAL_DISTANCE: string;
    GOLF_SWING_COUNT: string;
    GOLF_SWING_SPEED: string;
    GOLF_MAX_SWING_SPEED: string;
    GOLF_SWING_TEMPO: string;
    GOLF_DOWN_SWING_TIME: string;
    GOLF_BACK_SWING_TIME: string;
    SLEEP_RESPIRATORY_TYPE: string;
    SLEEP_RESPIRATORY_VALUE: string;
    EVENT_NAME: string;
};
export interface DataType {
    DT_UNUSED_DATA_TYPE: string;
    DT_CONTINUOUS_STEPS_DELTA: string;
    DT_CONTINUOUS_STEPS_TOTAL: string;
    DT_INSTANTANEOUS_STEPS_RATE: string;
    DT_CONTINUOUS_STEPS_RATE_STATISTIC: string;
    DT_CONTINUOUS_ACTIVITY_SEGMENT: string;
    DT_CONTINUOUS_ACTIVITY_FRAGMENT: string;
    DT_CONTINUOUS_CALORIES_CONSUMED: string;
    DT_CONTINUOUS_CALORIES_BURNT: string;
    DT_INSTANTANEOUS_CALORIES_BMR: string;
    DT_INSTANTANEOUS_POWER_SAMPLE: string;
    DT_INSTANTANEOUS_ACTIVITY_SAMPLE: string;
    DT_INSTANTANEOUS_ACTIVITY_SAMPLES: string;
    DT_INSTANTANEOUS_HEART_RATE: string;
    DT_INSTANTANEOUS_EXERCISE_HEART_RATE: string;
    DT_INSTANTANEOUS_LOCATION_SAMPLE: string;
    DT_INSTANTANEOUS_LOCATION_TRACE: string;
    DT_CONTINUOUS_EXERCISE_HEART_RATE_STATISTICS: string;
    DT_CONTINUOUS_DISTANCE_DELTA: string;
    DT_CONTINUOUS_DISTANCE_TOTAL: string;
    DT_CONTINUOUS_CALORIES_BURNT_TOTAL: string;
    DT_INSTANTANEOUS_SPEED: string;
    DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL: string;
    DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION: string;
    DT_INSTANTANEOUS_WHEEL_ROTATION: string;
    DT_CONTINUOUS_BIKING_PEDALING_TOTAL: string;
    DT_INSTANTANEOUS_BIKING_PEDALING_RATE: string;
    DT_INSTANTANEOUS_HEIGHT: string;
    DT_INSTANTANEOUS_BODY_WEIGHT: string;
    DT_INSTANTANEOUS_BODY_FAT_RATE: string;
    DT_INSTANTANEOUS_NUTRITION_FACTS: string;
    DT_INSTANTANEOUS_HYDRATE: string;
    DT_CONTINUOUS_HYDRATE_TOTAL: string;
    DT_CONTINUOUS_WORKOUT_DURATION: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY_V2: string;
    DT_STATISTICS_EXERCISE_INTENSITY_V2: string;
    DT_STATISTICS_SLEEP: string;
    DT_CONTINUOUS_SLEEP: string;
    DT_SLEEP_ON_OFF_BED: string;
    DT_INSTANTANEOUS_STRESS: string;
    DT_INSTANTANEOUS_STRESS_STATISTICS: string;
    DT_INSTANTANEOUS_RUN_VDOT: string;
    DT_INSTANTANEOUS_RUN_TRAINING_INDEX: string;
    DT_INSTANTANEOUS_RUN_FATIGUE_INDEX: string;
    DT_INSTANTANEOUS_RUN_PHYSICAL_FITNESS_INDEX: string;
    DT_INSTANTANEOUS_RUN_STATE_INDEX: string;
    DT_INSTANTANEOUS_RESTING_HEART_RATE: string;
    DT_RESTING_HEART_RATE_STATISTICS: string;
    DT_CONTINUOUS_JUMP: string;
    DT_CONTINUOUS_JUMP_STATISTICS: string;
    DT_INSTANTANEOUS_ALTITUDE: string;
    DT_CONTINUOUS_ALTITUDE_STATISTICS: string;
    DT_INSTANTANEOUS_SKIP_SPEED: string;
    DT_CONTINUOUS_SKIP_SPEED_STATISTICS: string;
    DT_CONTINUOUS_RUN_POSTURE: string;
    DT_CONTINUOUS_RUN_POSTURE_STATISTICS: string;
    DT_ACTIVITY_FEATURE_JUMPING_ROPE: string;
    DT_ACTIVITY_FEATURE_BASKETBALL: string;
    DT_ACTIVITY_FEATURE_FREEDIVING: string;
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TRAIN: string;
    DT_ACTIVITY_FEATURE_BREATH_HOLDING_TEST: string;
    DT_INSTANTANEOUS_FREEDIVING_ASCENT_SPEED: string;
    DT_INSTANTANEOUS_FREEDIVING_DESCENT_SPEED: string;
    DT_CONTINUOUS_FREEDIVING_ASCENT_SPEED_STATISTICS: string;
    DT_CONTINUOUS_FREEDIVING_DESCENT_SPEED_STATISTICS: string;
    DT_ACTIVITY_FEATURE_ROWING: string;
    DT_INSTANTANEOUS_STROKE_RATE: string;
    DT_INSTANTANEOUS_PEDALING_RATE: string;
    DT_CONTINUOUS_STROKE_RATE_STATISTICS: string;
    DT_CONTINUOUS_PEDALING_RATE_STATISTICS: string;
    DT_RESISTANCE: string;
    DT_RESISTANCE_STATISTICS: string;
    DT_VO2MAX: string;
    DT_VO2MAX_STATISTICS: string;
    DT_DIVING_DEPTH: string;
    DT_DIVING_DEPTH_STATISTICS: string;
    DT_WATER_TEMPERATURE: string;
    DT_WATER_TEMPERATURE_STATISTICS: string;
    DT_INSTANTANEOUS_SWIMMING_STROKE_RATE: string;
    DT_CONTINUOUS_SWIMMING_STROKE_RATE_STATISTICS: string;
    DT_INSTANTANEOUS_SWIMMING_SWOLF: string;
    DT_CONTINUOUS_SWIMMING_SWOLF_STATISTICS: string;
    DT_ACTIVITY_FEATURE_SWIMMING_OPEN_WATER: string;
    DT_ACTIVITY_FEATURE_SWIMMING_POOL: string;
    DT_ACTIVITY_FEATURE_SKIING: string;
    DT_ACTIVITY_FEATURE_SNOWBOARDING: string;
    DT_ACTIVITY_FEATURE_GOLF: string;
    POLYMERIZE_CONTINUOUS_WORKOUT_DURATION: string;
    POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS: string;
    POLYMERIZE_STEP_COUNT_DELTA: string;
    POLYMERIZE_DISTANCE_DELTA: string;
    POLYMERIZE_CALORIES_CONSUMED: string;
    POLYMERIZE_CALORIES_EXPENDED: string;
    POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE: string;
    POLYMERIZE_CONTINUOUS_POWER_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_SPEED_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS: string;
    POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS: string;
    POLYMERIZE_HYDRATION: string;
}
export interface updateHRReq {
    healthRecordId: string;
    options: Options;
    dataCollector: DataCollector[];
    sampleSets: SamplePoint[];
    samplePoints: SamplePoint[];
}
export interface addHRReq {
    options: Options;
    dataCollector: DataCollector[];
    sampleSets: SamplePoint[];
    samplePoints: SamplePoint[];
}
export interface Field {
    fieldName: string;
    fieldValue: number;
}
export interface deleteHRReq {
    options?: Options;
    isDeleteSubData?: boolean;
    dataType?: string;
    dataTypes?: DataOption[];
    activityRecordIds: activityRecordIds[];
}
export interface getHRReq {
    options: Options;
    dataType: string;
    dataTypes: DataOption[];
}
export interface HealthRecordReply {
    healthRecords: HealthRecord[];
}
export interface createDeviceInfo {
    deviceManufacturer: string;
    modelName: string;
    uuid: string;
    deviceType: number;
    isBleDevice?: boolean;
    platformType?: number;
}
export interface DeviceInfo {
    deviceIdentifier: string;
    deviceType: number;
    deviceTypeString: string;
    manufacturer: string;
    modelName: string;
    platformType: number;
    uuid: string;
    isFromBleDevice: boolean;
}
export interface CreateAppReq {
    detailsUrl: string;
    domainName: string;
    packageName: string;
    version: string;
}
export interface HealthRecord {
    dataCollector: DataCollector;
    startTime: number;
    endTime: number;
    fieldValue: string;
    fieldValues: Map<string, Value>;
    HealthRecordId: string;
    metaData: string;
    subDataDetails: SampleSet[];
    SubDataSummary: SamplePoint[];
}
export interface Value {
    activityType: string;
    doubleValue: number;
    floatValue: number;
    intValue: number;
    longValue: number;
    stringValue: string;
    getFormat: number;
    getMap: Map<string, MapValue>;
    getMapValue: string;
    isSet: boolean;
}
export interface MapValue {
    asFloatValue: number;
    asIntValue: number;
    asLongValue: number;
    asStringValue: string;
    getFormat: string;
}
export interface AddActivityRecordReq {
    activityRecord: ActivityRecordReq;
    sampleSet?: SampleSet[];
}
export interface deleteActivityRecordReq {
    startTime: number;
    endTime: number;
    dataTypes: DataOption[];
    timeUnit: string;
    isDeleteSubData: boolean;
    activityRecordIds: activityRecordIds[];
}
export interface activityRecordIds {
    activityRecord: string;
}
export interface BeginActivityRecordReq {
    startTime: number;
    timeUnit: string;
    timeZone: string;
    id: string;
    name: string;
    description: string;
    activityType: string;
    deviceInfo?: createDeviceInfo;
}
export interface GetActivityRecordReq {
    startTime: number;
    endTime: number;
    timeUnit: string;
    dataType: string;
}
export interface ActivityRecordReq {
    id: string;
    name: string;
    description: string;
    activityType: string;
    startTime: number;
    endTime: number;
    timeUnit: string;
    timeZone: string;
    activitySummary: ActivitySummary;
}
export interface ActivityRecord {
    startTime: number;
    endTime: number;
    timeUnit: string;
    timeZone: string;
    id: string;
    name: string;
    description: string;
    activityType: string;
    appInfo?: AppInfo;
    activitySummary: ActivitySummary;
}
export interface AppInfo {
    detailsUrl: string;
    domainName: string;
    packageName: string;
    version: string;
}
export interface ActivitySummary {
    paceSummary: PaceSummary;
    dataSummary: DataSummary[];
}
export interface PaceSummary {
    avgPace: number;
    bestPace: number;
    paceMap: object;
    britishPaceMap: object;
    partTimeMap: object;
    britishPartTimeMap: object;
    sportHealthPaceMap: object;
}
export interface DataSummary {
    dataCollector: DataCollector;
    samplePoints: SamplePoint[];
}
export interface SampleSet {
    dataCollector: DataCollector;
    samplePoints: SamplePoint[];
}
export interface SamplePoint {
    startTime: number;
    endTime: number;
    samplingTime?: number;
    fields: Field[];
    timeUnit: string;
}
export interface MetaData {
    metaDataKey: string;
    metaDataValue: string;
}
interface StartRecordReq {
    dataType: string;
}
interface endActivityRecord {
    activityRecordId: string;
    timeUnit: string;
}
interface StopRecordReq {
    dataType: string;
}
interface GetPermissionsReq {
    language: string;
    appId: string;
}
interface RevokeReq {
    appId: string;
    scopes: string[];
}
interface authReq {
    enableHealthAuth: boolean;
    scopes: string[];
}
interface CancelAuthReq {
    appId: string;
    scopes: string[];
}
interface CancelAuthAllReq {
    deleteData: boolean;
}
interface ScopeLangItem {
    label: string;
}
interface ReadReply {
    label: string;
}
export interface DataOption {
    dataType: string;
    hiHealthOption?: number;
}
export interface ReadReq {
    dataCollector: DataCollector;
    options: Options;
}
export interface HealthField {
    healthFieldName: string;
    healthFieldValue: number;
}
export interface DataCollector {
    dataType: string;
    dataGenerateType: number;
    name: string;
    dataStreamName?: string;
    deviceId?: string;
    isLocalized?: boolean;
    dataStreamId?: number;
    deviceInfo?: DeviceInfo;
    packageName?: string;
    standardByType?: string;
}
export interface Options {
    startTime: number;
    endTime: number;
    timeUnit: string;
    metaData?: string;
    fields?: Field[];
}
export interface InsertReq {
    dataCollector: DataCollector;
    sampleSet: SampleSets[];
}
export interface UpdateReq {
    dataCollector: DataCollector;
    sampleSet: SampleSets[];
    options: Options;
}
export interface SampleSets {
    metaData?: MetaData;
    startTime: number;
    endTime: number;
    fieldName: string;
    fieldValue: string;
    timeUnit: string;
    dataCollector: DataCollector;
}
export interface DeleteReq {
    dataCollector: DataCollector;
    options: Options;
}
export interface AddDataTypeReq {
    dataTypeName: string;
    fieldValue: string;
}
export interface AuthHuaweiId {
    accessToken: string;
    displayName: string;
    email?: string;
    familyName: string;
    givenName: string;
    idToken?: string;
    unionId: string;
    avatarUriString: string;
    expressionTimeSecs: number;
    openId: string;
    uid?: string;
    countryCode?: string;
    serviceCountryCode?: string;
    status: number;
    gender: Gender;
    describeContentsInAuthHuaweiId: number;
    authorizedScopes: string[];
    extensionScopes: string[];
    authorizationCode?: string;
    huaweiAccount?: Account;
}
export interface ReadDailySummationReq {
    startDate: number;
    endDate: number;
    dataType: string;
}
export interface ReadDailySummationWithListReq {
    startDate: number;
    endDate: number;
    dataTypes: string[];
}
export interface ReadLatestDataReq {
    dataTypes: DataOption[];
}
export interface Account {
    type: string;
    name: string;
}
export declare enum Gender {
    UNKNOWN = -1,
    MALE = 0,
    FEMALE = 1,
    CONFIDENTIAL = 2
}
export {};
