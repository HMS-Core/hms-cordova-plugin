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
export declare function signIn(scopes: string[]): Promise<AuthHuaweiId>;
export declare const ActivityRecordController: {
    addActivityRecord: (addActivityRecordReq: AddActivityRecordReq) => Promise<void>;
    beginActivityRecord: (activityRecordData: BeginActivityRecordReq) => Promise<void>;
    endActivityRecord: (activityRecordId: string) => Promise<ActivityRecord[]>;
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
};
export declare const DataController: {
    initDataController: (jsonArray: DataOption[]) => Promise<void>;
    read: (readReq: ReadReq) => Promise<ReadReply>;
    insert: (insertReq: InsertReq) => Promise<void>;
    update: (jsonObject: UpdateReq) => Promise<void>;
    deleteData: (jsonObject: DeleteReq) => Promise<void>;
    readTodaySummation: (dataTypeStr: string) => Promise<SampleSet>;
    readDailySummation: (jsonObject: Options) => Promise<SampleSet>;
    clearAll: () => Promise<void>;
};
export declare const SettingsController: {
    addDataType: (jsonObject: AddDataTypeReq) => Promise<void>;
    disableHiHealth: () => Promise<void>;
    readDataType: (dataTypeName: string) => Promise<void>;
    checkHealthAppAuthorization: () => Promise<void>;
    getHealthAppAuthorization: () => Promise<void>;
};
export declare function enableLogger(): Promise<void>;
export declare function disableLogger(): Promise<void>;
export declare function on(event: string, callback: () => void): void;
export declare const HuaweiHiHealth: {
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
    ALL_SCOPES: string[];
    MAX_SCOPES: string[];
};
export declare const DataType: {
    DT_UNUSED_DATA_TYPE: string;
    DT_CONTINUOUS_STEPS_DELTA: string;
    DT_CONTINUOUS_STEPS_TOTAL: string;
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
    DT_CONTINUOUS_WORKOUT_DURATION: string;
    DT_CONTINUOUS_EXERCISE_INTENSITY: string;
    DT_STATISTICS_SLEEP: string;
    DT_CONTINUOUS_SLEEP: string;
    DT_INSTANTANEOUS_STRESS: string;
    DT_INSTANTANEOUS_STRESS_STATISTICS: string;
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
    CROSS_COUNTRY_RACE: string;
    ROLLER_SKATING: string;
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
};
export declare const DataGenerateType: {
    DATA_TYPE_INIT: number;
    DATA_TYPE_RAW: number;
    DATA_TYPE_DERIVED: number;
    DATA_TYPE_CLEAN: number;
    DATA_TYPE_CONVERTED: number;
    DATA_TYPE_MERGED: number;
    DATA_TYPE_POLYMERIZED: number;
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
    FIELD_STEP_LENGTH: string;
    FIELD_LATITUDE: string;
    FIELD_LONGITUDE: string;
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
    FIELD_MEAL: string;
    FIELD_FOOD: string;
    FIELD_NUTRIENTS: string;
    FIELD_NUTRIENTS_FACTS: string;
    FIELD_AVG: string;
    FIELD_MAX: string;
    FIELD_MIN: string;
    FIELD_MIN_LATITUDE: string;
    FIELD_MIN_LONGITUDE: string;
    FIELD_MAX_LATITUDE: string;
    FIELD_MAX_LONGITUDE: string;
    FIELD_APPEARANCE: string;
    FIELD_INTENSITY: string;
    FALL_ASLEEP_TIME: string;
    WAKE_UP_TIME: string;
    SLEEP_SCORE: string;
    SLEEP_LATENCY: string;
    GO_BED_TIME: string;
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
};
export interface AddActivityRecordReq {
    dataCollector: DataCollector;
    activityRecord: ActivityRecord;
    sampleSet: SampleSet[];
}
export interface BeginActivityRecordReq {
    startTime: number;
    timeUnit: string;
    timeZone: string;
    id: string;
    name: string;
    description: string;
    activityType: string;
}
export interface GetActivityRecordReq {
    startTime: number;
    endTime: number;
    timeUnit: string;
    dataType: string;
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
    activitySummary: ActivitySummary;
}
export interface ActivitySummary {
    paceSummary: PaceSummary;
    dataSummary: SampleSet[];
}
export interface SampleSet {
    startTime: number;
    endTime: number;
    fieldName: string;
    fieldValue: string;
    timeUnit: string;
    dataCollector: DataCollector;
}
export interface DataCollector {
    dataType: string;
    name: string;
    dataGenerateType: number;
}
export interface PaceSummary {
    avgPace: number;
    bestPace: number;
    britishPaceMap: object;
    britishPartTimeMap: object;
    partTimeMap: object;
    paceMap: object;
    sportHealthPaceMap: object;
}
interface StartRecordReq {
    dataType: string;
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
interface ScopeLangItem {
    label: string;
}
interface ReadReply {
    label: string;
}
export interface DataOption {
    dataType: string;
    hiHealthOption: number;
}
export interface ReadReq {
    dataCollector: DataCollector;
    options: Options;
}
export interface DataCollector {
    dataType: string;
    name: string;
    dataGenerateType: number;
}
export interface Options {
    startTime: number;
    endTime: number;
    timeUnit: string;
}
export interface InsertReq {
    dataCollector: DataCollector;
    sampleSet: SampleSet[];
}
export interface UpdateReq {
    dataCollector: DataCollector;
    sampleSet: SampleSet[];
    options: Options;
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
