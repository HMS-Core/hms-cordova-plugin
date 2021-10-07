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
import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSHealth = /** @class */ (function (_super) {
    __extends(HMSHealth, _super);
    function HMSHealth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHealth.prototype.signIn = function (scopes) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSHealth.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSHealth.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSHealth.prototype.on = function (event, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSHealth.pluginName = "HMSHealth";
    HMSHealth.plugin = "cordova-plugin-hms-health";
    HMSHealth.pluginRef = "HMSHealth";
    HMSHealth.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSHealth.platforms = ["Android"];
    HMSHealth = __decorate([
        Injectable()
    ], HMSHealth);
    return HMSHealth;
}(IonicNativePlugin));
export { HMSHealth };
var ɵ0 = function addActivityRecord(addActivityRecordReq) {
    return HMSHealth.getPlugin().ActivityRecordController.addActivityRecord(addActivityRecordReq);
}, ɵ1 = function beginActivityRecord(activityRecordData) {
    return HMSHealth.getPlugin().ActivityRecordController.beginActivityRecord(activityRecordData);
}, ɵ2 = function endActivityRecord(activityRecordId) {
    return HMSHealth.getPlugin().ActivityRecordController.endActivityRecord(activityRecordId);
}, ɵ3 = function getActivityRecord(activityRecordJSON) {
    return HMSHealth.getPlugin().ActivityRecordController.getActivityRecord(activityRecordJSON);
};
export var ActivityRecordController = {
    addActivityRecord: ɵ0,
    beginActivityRecord: ɵ1,
    endActivityRecord: ɵ2,
    getActivityRecord: ɵ3
};
var ɵ4 = function startRecord(startRecordReq) {
    return HMSHealth.getPlugin().AutoRecorderController.startRecord(startRecordReq);
}, ɵ5 = function stopRecord(stopRecordReq) {
    return HMSHealth.getPlugin().AutoRecorderController.stopRecord(stopRecordReq);
};
export var AutoRecorderController = {
    startRecord: ɵ4,
    stopRecord: ɵ5
};
var ɵ6 = function getPermissions(getPermissionsReq) {
    return HMSHealth.getPlugin().ConsentsController.getPermissions(getPermissionsReq);
}, ɵ7 = function revokeAll(appId) {
    return HMSHealth.getPlugin().ConsentsController.revokeAll(appId);
}, ɵ8 = function revoke(revokeReq) {
    return HMSHealth.getPlugin().ConsentsController.revoke(revokeReq);
};
export var ConsentsController = {
    getPermissions: ɵ6,
    revokeAll: ɵ7,
    revoke: ɵ8
};
var ɵ9 = function initDataController(jsonArray) {
    return HMSHealth.getPlugin().DataController.initDataController(jsonArray);
}, ɵ10 = function read(readReq) {
    return HMSHealth.getPlugin().DataController.read(readReq);
}, ɵ11 = function insert(insertReq) {
    return HMSHealth.getPlugin().DataController.insert(insertReq);
}, ɵ12 = function update(jsonObject) {
    return HMSHealth.getPlugin().DataController.update(jsonObject);
}, ɵ13 = function deleteData(jsonObject) {
    return HMSHealth.getPlugin().DataController.deleteData(jsonObject);
}, ɵ14 = function readTodaySummation(dataTypeStr) {
    return HMSHealth.getPlugin().DataController.readTodaySummation(dataTypeStr);
}, ɵ15 = function readDailySummation(jsonObject) {
    return HMSHealth.getPlugin().DataController.readDailySummation(jsonObject);
}, ɵ16 = function clearAll() {
    return HMSHealth.getPlugin().DataController.clearAll();
};
export var DataController = {
    initDataController: ɵ9,
    read: ɵ10,
    insert: ɵ11,
    update: ɵ12,
    deleteData: ɵ13,
    readTodaySummation: ɵ14,
    readDailySummation: ɵ15,
    clearAll: ɵ16
};
var ɵ17 = function addDataType(jsonObject) {
    return HMSHealth.getPlugin().SettingsController.addDataType(jsonObject);
}, ɵ18 = function disableHiHealth() {
    return HMSHealth.getPlugin().SettingsController.disableHiHealth();
}, ɵ19 = function readDataType(dataTypeName) {
    return HMSHealth.getPlugin().SettingsController.readDataType(dataTypeName);
}, ɵ20 = function checkHealthAppAuthorization() {
    return HMSHealth.getPlugin().SettingsController.checkHealthAppAuthorization();
}, ɵ21 = function getHealthAppAuthorization() {
    return HMSHealth.getPlugin().SettingsController.getHealthAppAuthorization();
};
export var SettingsController = {
    addDataType: ɵ17,
    disableHiHealth: ɵ18,
    readDataType: ɵ19,
    checkHealthAppAuthorization: ɵ20,
    getHealthAppAuthorization: ɵ21
};
// /////////////////////////////////////////////////////////
// INTERFACES
// /////////////////////////////////////////////////////////
export var HuaweiHiHealth = {
    HEALTHKIT_HEIGHTWEIGHT_READ: "https://www.huawei.com/healthkit/heightweight.read",
    HEALTHKIT_HEIGHTWEIGHT_WRITE: "https://www.huawei.com/healthkit/heightweight.write",
    HEALTHKIT_HEIGHTWEIGHT_BOTH: "https://www.huawei.com/healthkit/heightweight.both",
    HEALTHKIT_STEP_READ: "https://www.huawei.com/healthkit/step.read",
    HEALTHKIT_STEP_WRITE: "https://www.huawei.com/healthkit/step.write",
    HEALTHKIT_STEP_BOTH: "https://www.huawei.com/healthkit/step.both",
    HEALTHKIT_LOCATION_READ: "https://www.huawei.com/healthkit/location.read",
    HEALTHKIT_LOCATION_WRITE: "https://www.huawei.com/healthkit/location.write",
    HEALTHKIT_LOCATION_BOTH: "https://www.huawei.com/healthkit/location.both",
    HEALTHKIT_HEARTRATE_READ: "https://www.huawei.com/healthkit/heartrate.read",
    HEALTHKIT_HEARTRATE_WRITE: "https://www.huawei.com/healthkit/heartrate.write",
    HEALTHKIT_HEARTRATE_BOTH: "https://www.huawei.com/healthkit/heartrate.both",
    HEALTHKIT_BLOODGLUCOSE_READ: "https://www.huawei.com/healthkit/bloodglucose.read",
    HEALTHKIT_BLOODGLUCOSE_WRITE: "https://www.huawei.com/healthkit/bloodglucose.write",
    HEALTHKIT_BLOODGLUCOSE_BOTH: "https://www.huawei.com/healthkit/bloodglucose.both",
    HEALTHKIT_DISTANCE_READ: "https://www.huawei.com/healthkit/distance.read",
    HEALTHKIT_DISTANCE_WRITE: "https://www.huawei.com/healthkit/distance.write",
    HEALTHKIT_DISTANCE_BOTH: "https://www.huawei.com/healthkit/distance.both",
    HEALTHKIT_SPEED_READ: "https://www.huawei.com/healthkit/speed.read",
    HEALTHKIT_SPEED_WRITE: "https://www.huawei.com/healthkit/speed.write",
    HEALTHKIT_SPEED_BOTH: "https://www.huawei.com/healthkit/speed.both",
    HEALTHKIT_CALORIES_READ: "https://www.huawei.com/healthkit/calories.read",
    HEALTHKIT_CALORIES_WRITE: "https://www.huawei.com/healthkit/calories.write",
    HEALTHKIT_CALORIES_BOTH: "https://www.huawei.com/healthkit/calories.both",
    HEALTHKIT_PULMONARY_READ: "https://www.huawei.com/healthkit/pulmonary.read",
    HEALTHKIT_PULMONARY_WRITE: "https://www.huawei.com/healthkit/pulmonary.write",
    HEALTHKIT_PULMONARY_BOTH: "https://www.huawei.com/healthkit/pulmonary.both",
    HEALTHKIT_STRENGTH_READ: "https://www.huawei.com/healthkit/strength.read",
    HEALTHKIT_STRENGTH_WRITE: "https://www.huawei.com/healthkit/strength.write",
    HEALTHKIT_STRENGTH_BOTH: "https://www.huawei.com/healthkit/strength.both",
    HEALTHKIT_ACTIVITY_READ: "https://www.huawei.com/healthkit/activity.read",
    HEALTHKIT_ACTIVITY_WRITE: "https://www.huawei.com/healthkit/activity.write",
    HEALTHKIT_ACTIVITY_BOTH: "https://www.huawei.com/healthkit/activity.both",
    HEALTHKIT_BODYFAT_READ: "https://www.huawei.com/healthkit/bodyfat.read",
    HEALTHKIT_BODYFAT_WRITE: "https://www.huawei.com/healthkit/bodyfat.write",
    HEALTHKIT_BODYFAT_BOTH: "https://www.huawei.com/healthkit/bodyfat.both",
    HEALTHKIT_SLEEP_READ: "https://www.huawei.com/healthkit/sleep.read",
    HEALTHKIT_SLEEP_WRITE: "https://www.huawei.com/healthkit/sleep.write",
    HEALTHKIT_SLEEP_BOTH: "https://www.huawei.com/healthkit/sleep.both",
    HEALTHKIT_NUTRITION_READ: "https://www.huawei.com/healthkit/nutrition.read",
    HEALTHKIT_NUTRITION_WRITE: "https://www.huawei.com/healthkit/nutrition.write",
    HEALTHKIT_NUTRITION_BOTH: "https://www.huawei.com/healthkit/nutrition.both",
    HEALTHKIT_BLOODPRESSURE_READ: "https://www.huawei.com/healthkit/bloodpressure.read",
    HEALTHKIT_BLOODPRESSURE_WRITE: "https://www.huawei.com/healthkit/bloodpressure.write",
    HEALTHKIT_BLOODPRESSURE_BOTH: "https://www.huawei.com/healthkit/bloodpressure.both",
    HEALTHKIT_OXYGENSTATURATION_READ: "https://www.huawei.com/healthkit/oxygensaturation.read",
    HEALTHKIT_OXYGENSTATURATION_WRITE: "https://www.huawei.com/healthkit/oxygensaturation.write",
    HEALTHKIT_OXYGENSTATURATION_BOTH: "https://www.huawei.com/healthkit/oxygensaturation.both",
    HEALTHKIT_BODYTEMPERATURE_READ: "https://www.huawei.com/healthkit/bodytemperature.read",
    HEALTHKIT_BODYTEMPERATURE_WRITE: "https://www.huawei.com/healthkit/bodytemperature.write",
    HEALTHKIT_BODYTEMPERATURE_BOTH: "https://www.huawei.com/healthkit/bodytemperature.both",
    HEALTHKIT_REPRODUCTIVE_READ: "https://www.huawei.com/healthkit/reproductive.read",
    HEALTHKIT_REPRODUCTIVE_WRITE: "https://www.huawei.com/healthkit/reproductive.write",
    HEALTHKIT_REPRODUCTIVE_BOTH: "https://www.huawei.com/healthkit/reproductive.both",
    HEALTHKIT_ACTIVITY_RECORD_READ: "https://www.huawei.com/healthkit/activityrecord.read",
    HEALTHKIT_ACTIVITY_RECORD_WRITE: "https://www.huawei.com/healthkit/activityrecord.write",
    HEALTHKIT_ACTIVITY_RECORD_BOTH: "https://www.huawei.com/healthkit/activityrecord.both",
    HEALTHKIT_STRESS_READ: "https://www.huawei.com/healthkit/stress.read",
    HEALTHKIT_STRESS_WRITE: "https://www.huawei.com/healthkit/stress.write",
    HEALTHKIT_STRESS_BOTH: "https://www.huawei.com/healthkit/stress.both",
    HEALTHKIT_SCOPE_PREFIX: "https://www.huawei.com/healthkit",
    ALL_SCOPES: ["https://www.huawei.com/healthkit/heightweight.both", "https://www.huawei.com/healthkit/step.both", "https://www.huawei.com/healthkit/location.both", "https://www.huawei.com/healthkit/heartrate.both", "https://www.huawei.com/healthkit/bloodglucose.both", "https://www.huawei.com/healthkit/distance.both", "https://www.huawei.com/healthkit/speed.both", "https://www.huawei.com/healthkit/calories.both", "https://www.huawei.com/healthkit/pulmonary.both", "https://www.huawei.com/healthkit/strength.both", "https://www.huawei.com/healthkit/activity.both", "https://www.huawei.com/healthkit/bodyfat.both", "https://www.huawei.com/healthkit/sleep.both", "https://www.huawei.com/healthkit/nutrition.both", "https://www.huawei.com/healthkit/bloodpressure.both", "https://www.huawei.com/healthkit/oxygensaturation.both", "https://www.huawei.com/healthkit/bodytemperature.both", "https://www.huawei.com/healthkit/reproductive.both", "https://www.huawei.com/healthkit/activityrecord.read", "https://www.huawei.com/healthkit/activityrecord.write", "https://www.huawei.com/healthkit/activityrecord.both", "https://www.huawei.com/healthkit/stress.read", "https://www.huawei.com/healthkit/stress.write", "https://www.huawei.com/healthkit/stress.both"],
    MAX_SCOPES: ["https://www.huawei.com/healthkit/heightweight.read", "https://www.huawei.com/healthkit/heightweight.write", "https://www.huawei.com/healthkit/heightweight.both", "https://www.huawei.com/healthkit/step.read", "https://www.huawei.com/healthkit/step.write", "https://www.huawei.com/healthkit/step.both", "https://www.huawei.com/healthkit/location.read", "https://www.huawei.com/healthkit/location.write", "https://www.huawei.com/healthkit/location.both", "https://www.huawei.com/healthkit/heartrate.read", "https://www.huawei.com/healthkit/heartrate.write", "https://www.huawei.com/healthkit/heartrate.both", "https://www.huawei.com/healthkit/bloodglucose.read", "https://www.huawei.com/healthkit/bloodglucose.write", "https://www.huawei.com/healthkit/bloodglucose.both", "https://www.huawei.com/healthkit/distance.read", "https://www.huawei.com/healthkit/distance.write", "https://www.huawei.com/healthkit/distance.both", "https://www.huawei.com/healthkit/speed.read", "https://www.huawei.com/healthkit/speed.write", "https://www.huawei.com/healthkit/speed.both", "https://www.huawei.com/healthkit/calories.read", "https://www.huawei.com/healthkit/calories.write", "https://www.huawei.com/healthkit/calories.both", "https://www.huawei.com/healthkit/pulmonary.read", "https://www.huawei.com/healthkit/pulmonary.write", "https://www.huawei.com/healthkit/pulmonary.both", "https://www.huawei.com/healthkit/strength.read", "https://www.huawei.com/healthkit/strength.write", "https://www.huawei.com/healthkit/strength.both", "https://www.huawei.com/healthkit/activity.read", "https://www.huawei.com/healthkit/activity.write", "https://www.huawei.com/healthkit/activity.both", "https://www.huawei.com/healthkit/bodyfat.read", "https://www.huawei.com/healthkit/bodyfat.write", "https://www.huawei.com/healthkit/bodyfat.both", "https://www.huawei.com/healthkit/sleep.read", "https://www.huawei.com/healthkit/sleep.write", "https://www.huawei.com/healthkit/sleep.both", "https://www.huawei.com/healthkit/nutrition.read", "https://www.huawei.com/healthkit/nutrition.write", "https://www.huawei.com/healthkit/nutrition.both", "https://www.huawei.com/healthkit/bloodpressure.read", "https://www.huawei.com/healthkit/bloodpressure.write", "https://www.huawei.com/healthkit/bloodpressure.both", "https://www.huawei.com/healthkit/oxygensaturation.read", "https://www.huawei.com/healthkit/oxygensaturation.write", "https://www.huawei.com/healthkit/oxygensaturation.both", "https://www.huawei.com/healthkit/bodytemperature.read", "https://www.huawei.com/healthkit/bodytemperature.write", "https://www.huawei.com/healthkit/bodytemperature.both", "https://www.huawei.com/healthkit/reproductive.read", "https://www.huawei.com/healthkit/reproductive.write", "https://www.huawei.com/healthkit/reproductive.both", "https://www.huawei.com/healthkit/activityrecord.read", "https://www.huawei.com/healthkit/activityrecord.write", "https://www.huawei.com/healthkit/activityrecord.both", "https://www.huawei.com/healthkit/stress.read", "https://www.huawei.com/healthkit/stress.write", "https://www.huawei.com/healthkit/stress.both", "https://www.huawei.com/healthkit/activity.both"]
};
export var DataType = {
    DT_UNUSED_DATA_TYPE: "DT_UNUSED_DATA_TYPE",
    DT_CONTINUOUS_STEPS_DELTA: "DT_CONTINUOUS_STEPS_DELTA",
    DT_CONTINUOUS_STEPS_TOTAL: "DT_CONTINUOUS_STEPS_TOTAL",
    DT_INSTANTANEOUS_STEPS_RATE: "DT_INSTANTANEOUS_STEPS_RATE",
    DT_CONTINUOUS_STEPS_RATE_STATISTIC: "DT_CONTINUOUS_STEPS_RATE_STATISTIC",
    DT_CONTINUOUS_ACTIVITY_SEGMENT: "DT_CONTINUOUS_ACTIVITY_SEGMENT",
    DT_CONTINUOUS_CALORIES_CONSUMED: "DT_CONTINUOUS_CALORIES_CONSUMED",
    DT_CONTINUOUS_CALORIES_BURNT: "DT_CONTINUOUS_CALORIES_BURNT",
    DT_INSTANTANEOUS_CALORIES_BMR: "DT_INSTANTANEOUS_CALORIES_BMR",
    DT_INSTANTANEOUS_POWER_SAMPLE: "DT_INSTANTANEOUS_POWER_SAMPLE",
    DT_INSTANTANEOUS_ACTIVITY_SAMPLE: "DT_INSTANTANEOUS_ACTIVITY_SAMPLE",
    DT_INSTANTANEOUS_ACTIVITY_SAMPLES: "DT_INSTANTANEOUS_ACTIVITY_SAMPLES",
    DT_INSTANTANEOUS_HEART_RATE: "DT_INSTANTANEOUS_HEART_RATE",
    DT_INSTANTANEOUS_LOCATION_SAMPLE: "DT_INSTANTANEOUS_LOCATION_SAMPLE",
    DT_INSTANTANEOUS_LOCATION_TRACE: "DT_INSTANTANEOUS_LOCATION_TRACE",
    DT_CONTINUOUS_DISTANCE_DELTA: "DT_CONTINUOUS_DISTANCE_DELTA",
    DT_CONTINUOUS_DISTANCE_TOTAL: "DT_CONTINUOUS_DISTANCE_TOTAL",
    DT_CONTINUOUS_CALORIES_BURNT_TOTAL: "DT_CONTINUOUS_CALORIES_BURNT_TOTAL",
    DT_INSTANTANEOUS_SPEED: "DT_INSTANTANEOUS_SPEED",
    DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL: "DT_CONTINUOUS_BIKING_WHEEL_ROTATION_TOTAL",
    DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION: "DT_INSTANTANEOUS_BIKING_WHEEL_ROTATION",
    DT_CONTINUOUS_BIKING_PEDALING_TOTAL: "DT_CONTINUOUS_BIKING_PEDALING_TOTAL",
    DT_INSTANTANEOUS_BIKING_PEDALING_RATE: "DT_INSTANTANEOUS_BIKING_PEDALING_RATE",
    DT_INSTANTANEOUS_HEIGHT: "DT_INSTANTANEOUS_HEIGHT",
    DT_INSTANTANEOUS_BODY_WEIGHT: "DT_INSTANTANEOUS_BODY_WEIGHT",
    DT_INSTANTANEOUS_BODY_FAT_RATE: "DT_INSTANTANEOUS_BODY_FAT_RATE",
    DT_INSTANTANEOUS_NUTRITION_FACTS: "DT_INSTANTANEOUS_NUTRITION_FACTS",
    DT_INSTANTANEOUS_HYDRATE: "DT_INSTANTANEOUS_HYDRATE",
    DT_CONTINUOUS_WORKOUT_DURATION: "DT_CONTINUOUS_WORKOUT_DURATION",
    DT_CONTINUOUS_EXERCISE_INTENSITY: "DT_CONTINUOUS_EXERCISE_INTENSITY",
    DT_STATISTICS_SLEEP: "DT_STATISTICS_SLEEP",
    DT_CONTINUOUS_SLEEP: "DT_CONTINUOUS_SLEEP",
    DT_INSTANTANEOUS_STRESS: "DT_INSTANTANEOUS_STRESS",
    DT_INSTANTANEOUS_STRESS_STATISTICS: "DT_INSTANTANEOUS_STRESS_STATISTICS",
    POLYMERIZE_CONTINUOUS_WORKOUT_DURATION: "POLYMERIZE_CONTINUOUS_WORKOUT_DURATION",
    POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS: "POLYMERIZE_CONTINUOUS_ACTIVITY_STATISTICS",
    POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS: "POLYMERIZE_CONTINUOUS_CALORIES_BMR_STATISTICS",
    POLYMERIZE_STEP_COUNT_DELTA: "POLYMERIZE_STEP_COUNT_DELTA",
    POLYMERIZE_DISTANCE_DELTA: "POLYMERIZE_DISTANCE_DELTA",
    POLYMERIZE_CALORIES_CONSUMED: "POLYMERIZE_CALORIES_CONSUMED",
    POLYMERIZE_CALORIES_EXPENDED: "POLYMERIZE_CALORIES_EXPENDED",
    POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS: "POLYMERIZE_CONTINUOUS_EXERCISE_INTENSITY_STATISTICS",
    POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS: "POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS",
    POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE: "POLYMERIZE_CONTINUOUS_LOCATION_BOUNDARY_RANGE",
    POLYMERIZE_CONTINUOUS_POWER_STATISTICS: "POLYMERIZE_CONTINUOUS_POWER_STATISTICS",
    POLYMERIZE_CONTINUOUS_SPEED_STATISTICS: "POLYMERIZE_CONTINUOUS_SPEED_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_FAT_RATE_STATISTICS",
    POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS: "POLYMERIZE_CONTINUOUS_BODY_WEIGHT_STATISTICS",
    POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS: "POLYMERIZE_CONTINUOUS_HEIGHT_STATISTICS",
    POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS: "POLYMERIZE_CONTINUOUS_NUTRITION_FACTS_STATISTICS",
    POLYMERIZE_HYDRATION: "POLYMERIZE_HYDRATION"
};
export var HiHealthActivities = {
    MIME_TYPE_PREFIX: "vnd.huawei.hihealth.activity/",
    EXTRA_ACTION_STATUS: "actionStatus",
    STATUS_ACTION_START: "StartedActionStatus",
    STATUS_ACTION_END: "EndedActionStatus",
    AEROBICS: "aerobics",
    ARCHERY: "archery",
    BADMINTON: "badminton",
    BASEBALL: "baseball",
    BASKETBALL: "basketball",
    BIATHLON: "biathlon",
    BOXING: "boxing",
    CALISTHENICS: "calisthenics",
    CIRCUIT_TRAINING: "circuit_training",
    CRICKET: "cricket",
    CROSSFIT: "crossfit",
    CURLING: "curling",
    CYCLING: "cycling",
    CYCLING_INDOOR: "cycling_indoor",
    DANCING: "dancing",
    DIVING: "diving",
    ELEVATOR: "elevator",
    ELLIPTICAL: "elliptical",
    ERGOMETER: "ergometer",
    ESCALATOR: "escalator",
    FENCING: "fencing",
    FOOTBALL_AMERICAN: "football.american",
    FOOTBALL_AUSTRALIAN: "football.australian",
    FOOTBALL_SOCCER: "football.soccer",
    FLYING_DISC: "flying_disc",
    GARDENING: "gardening",
    GOLF: "golf",
    GYMNASTICS: "gymnastics",
    HANDBALL: "handball",
    HIIT: "interval_training.high_intensity",
    HIKING: "hiking",
    HOCKEY: "hockey",
    HORSE_RIDING: "horse_riding",
    HOUSEWORK: "housework",
    ICE_SKATING: "ice_skating",
    IN_VEHICLE: "in_vehicle",
    INTERVAL_TRAINING: "interval_training",
    JUMPING_ROPE: "jumping_rope",
    KAYAKING: "kayaking",
    KETTLEBELL_TRAINING: "kettlebell_training",
    KICKBOXING: "kickboxing",
    KITESURFING: "kitesurfing",
    MARTIAL_ARTS: "martial_arts",
    MEDITATION: "meditation",
    MIXED_MARTIAL_ARTS: "martial_arts.mixed",
    ON_FOOT: "on_foot",
    OTHER: "other",
    P90X: "p90x",
    PARAGLIDING: "paragliding",
    PILATES: "pilates",
    POLO: "polo",
    RACQUETBALL: "racquetball",
    ROCK_CLIMBING: "rock_climbing",
    ROWING: "rowing",
    ROWING_MACHINE: "rowing.machine",
    RUGBY: "rugby",
    RUNNING: "running",
    RUNNING_MACHINE: "running.machine",
    SAILING: "sailing",
    SCUBA_DIVING: "scuba_diving",
    SCOOTER_RIDING: "scooter_riding",
    SKATEBOARDING: "skateboarding",
    SKATING: "skating",
    SKIING: "skiing",
    SLEDDING: "sledding",
    SLEEP: "sleep",
    SLEEP_LIGHT: "sleep.light",
    SLEEP_DEEP: "sleep.deep",
    SLEEP_REM: "sleep.rem",
    SLEEP_AWAKE: "sleep.awake",
    SNOWBOARDING: "snowboarding",
    SNOWMOBILE: "snowmobile",
    SNOWSHOEING: "snowshoeing",
    SOFTBALL: "softball",
    SQUASH: "squash",
    STAIR_CLIMBING: "stair_climbing",
    STAIR_CLIMBING_MACHINE: "stair_climbing.machine",
    STANDUP_PADDLEBOARDING: "standup_paddleboarding",
    STILL: "still",
    STRENGTH_TRAINING: "strength_training",
    SURFING: "surfing",
    SWIMMING: "swimming",
    SWIMMING_POOL: "swimming.pool",
    SWIMMING_OPEN_WATER: "swimming.open_water",
    TABLE_TENNIS: "table_tennis",
    TEAM_SPORTS: "team_sports",
    TENNIS: "tennis",
    TILTING: "tilting",
    UNKNOWN: "unknown",
    VOLLEYBALL: "volleyball",
    WAKEBOARDING: "wakeboarding",
    WALKING: "walking",
    WATER_POLO: "water_polo",
    WEIGHTLIFTING: "weightlifting",
    WHEELCHAIR: "wheelchair",
    WINDSURFING: "windsurfing",
    YOGA: "yoga",
    ZUMBA: "zumba",
    DARTS: "darts",
    BILLIARDS: "billiards",
    SHUTTLECOCK: "shuttlecock",
    BOWLING: "bowling",
    GROUP_CALISTHENICS: "group_calisthenics",
    TUG_OF_WAR: "tug_of_war",
    BEACH_SOCCER: "beach_soccer",
    BEACH_VOLLEYBALL: "beach_volleyball",
    GATEBALL: "gateball",
    SEPAKTAKRAW: "sepaktakraw",
    DODGE_BALL: "dodge_ball",
    TREADMILL: "treadmill",
    SPINNING: "spinning",
    STROLL_MACHINE: "stroll_machine",
    CROSS_FIT: "cross_fit",
    FUNCTIONAL_TRAINING: "functional_training",
    PHYSICAL_TRAINING: "physical_training",
    BELLY_DANCE: "belly_dance",
    JAZZ: "jazz",
    LATIN: "latin",
    BALLET: "ballet",
    CORE_TRAINING: "core_training",
    HORIZONTAL_BAR: "horizontal_bar",
    PARALLEL_BARS: "parallel_bars",
    HIP_HOP: "hip_hop",
    SQUARE_DANCE: "square_dance",
    HU_LA_HOOP: "hu_la_hoop",
    BMX: "bmx",
    ORIENTEERING: "orienteering",
    INDOOR_WALK: "indoor_walk",
    INDOOR_RUNNING: "indoor_running",
    MOUNTIN_CLIMBING: "mountin_climbing",
    CROSS_COUNTRY_RACE: "cross_country_race",
    ROLLER_SKATING: "roller_skatting",
    HUNTING: "hunting",
    FLY_A_KITE: "fly_a_kite",
    SWING: "swing",
    OBSTACLE_RACE: "obstacle_race",
    BUNGEE_JUMPING: "bungee_jumping",
    PARKOUR: "parkour",
    PARACHUTE: "parachute",
    RACING_CAR: "racing_car",
    TRIATHLONS: "triathlons",
    ICE_HOCKEY: "ice_hockey",
    CROSSCOUNTRY_SKIING: "crosscountry_skiing",
    SLED: "sled",
    FISHING: "fishing",
    DRIFTING: "drifting",
    DRAGON_BOAT: "dragon_boat",
    MOTORBOAT: "motorboat",
    SUP: "sup",
    FREE_SPARRING: "free_sparring",
    KARATE: "karate",
    BODY_COMBAT: "body_combat",
    KENDO: "kendo",
    TAI_CHI: "tai_chi"
};
export var DataGenerateType = {
    DATA_TYPE_INIT: 1,
    DATA_TYPE_RAW: 0,
    DATA_TYPE_DERIVED: 1,
    DATA_TYPE_CLEAN: 2,
    DATA_TYPE_CONVERTED: 3,
    DATA_TYPE_MERGED: 4,
    DATA_TYPE_POLYMERIZED: 5
};
export var TimeUnit = {
    HOURS: "HOURS",
    DAYS: "DAYS",
    MICROSECONDS: "MICROSECONDS",
    MILLISECONDS: "MILLISECONDS",
    MINUTES: "MINUTES",
    NANOSECONDS: "NANOSECONDS",
    SECONDS: "SECONDS"
};
export var Field = {
    FORMAT_INT32: 1,
    FORMAT_FLOAT: 2,
    FORMAT_STRING: 3,
    FORMAT_MAP: 4,
    FORMAT_LONG: 5,
    FORMAT_DOUBLE: 2,
    MEAL_UNKNOWN: 0,
    MEAL_BREAKFAST: 1,
    MEAL_LUNCH: 2,
    MEAL_DINNER: 3,
    MEAL_SNACK: 4,
    TYPE_OF_RESISTANCE_UNKNOWN: 0,
    TYPE_OF_RESISTANCE_BARBELL: 1,
    TYPE_OF_RESISTANCE_CABLE: 2,
    TYPE_OF_RESISTANCE_DUMBBELL: 3,
    TYPE_OF_RESISTANCE_KETTLEBELL: 4,
    TYPE_OF_RESISTANCE_MACHINE: 5,
    TYPE_OF_RESISTANCE_BODY: 6,
    NUTRIENTS_FACTS_CALORIES: "NUTRIENTS_FACTS_CALORIES",
    NUTRIENTS_FACTS_TOTAL_FAT: "NUTRIENTS_FACTS_TOTAL_FAT",
    NUTRIENTS_FACTS_SATURATED_FAT: "NUTRIENTS_FACTS_SATURATED_FAT",
    NUTRIENTS_FACTS_UNSATURATED_FAT: "NUTRIENTS_FACTS_UNSATURATED_FAT",
    NUTRIENTS_FACTS_POLYUNSATURATED_FAT: "NUTRIENTS_FACTS_POLYUNSATURATED_FAT",
    NUTRIENTS_FACTS_MONOUNSATURATED_FAT: "NUTRIENTS_FACTS_MONOUNSATURATED_FAT",
    NUTRIENTS_FACTS_TRANS_FAT: "NUTRIENTS_FACTS_TRANS_FAT",
    NUTRIENTS_FACTS_CHOLESTEROL: "NUTRIENTS_FACTS_CHOLESTEROL",
    NUTRIENTS_FACTS_SODIUM: "NUTRIENTS_FACTS_SODIUM",
    NUTRIENTS_FACTS_POTASSIUM: "NUTRIENTS_FACTS_POTASSIUM",
    NUTRIENTS_FACTS_TOTAL_CARBS: "NUTRIENTS_FACTS_TOTAL_CARBS",
    NUTRIENTS_FACTS_DIETARY_FIBER: "NUTRIENTS_FACTS_DIETARY_FIBER",
    NUTRIENTS_FACTS_SUGAR: "NUTRIENTS_FACTS_SUGAR",
    NUTRIENTS_FACTS_PROTEIN: "NUTRIENTS_FACTS_PROTEIN",
    NUTRIENTS_FACTS_VITAMIN_A: "NUTRIENTS_FACTS_VITAMIN_A",
    NUTRIENTS_FACTS_VITAMIN_C: "NUTRIENTS_FACTS_VITAMIN_C",
    NUTRIENTS_FACTS_CALCIUM: "NUTRIENTS_FACTS_CALCIUM",
    NUTRIENTS_FACTS_IRON: "NUTRIENTS_FACTS_IRON",
    FIELD_PRECISION: "FIELD_PRECISION",
    FIELD_ALTITUDE: "FIELD_ALTITUDE",
    FIELD_TYPE_OF_ACTIVITY: "FIELD_TYPE_OF_ACTIVITY",
    FIELD_POSSIBILITY_OF_ACTIVITY: "FIELD_POSSIBILITY_OF_ACTIVITY",
    FIELD_BPM: "FIELD_BPM",
    FIELD_POSSIBILITY: "FIELD_POSSIBILITY",
    FIELD_SPAN: "FIELD_SPAN",
    FIELD_DISTANCE: "FIELD_DISTANCE",
    FIELD_DISTANCE_DELTA: "FIELD_DISTANCE_DELTA",
    FIELD_HEIGHT: "FIELD_HEIGHT",
    FIELD_STEPS_DELTA: "FIELD_STEPS_DELTA",
    FIELD_STEPS: "FIELD_STEPS",
    FIELD_STEP_LENGTH: "FIELD_STEP_LENGTH",
    FIELD_LATITUDE: "FIELD_LATITUDE",
    FIELD_LONGITUDE: "FIELD_LONGITUDE",
    FIELD_BODY_WEIGHT: "FIELD_BODY_WEIGHT",
    FIELD_BMI: "FIELD_BMI",
    FIELD_BODY_FAT: "FIELD_BODY_FAT",
    FIELD_BODY_FAT_RATE: "FIELD_BODY_FAT_RATE",
    FIELD_MUSCLE_MASS: "FIELD_MUSCLE_MASS",
    FIELD_BASAL_METABOLISM: "FIELD_BASAL_METABOLISM",
    FIELD_MOISTURE: "FIELD_MOISTURE",
    FIELD_MOISTURE_RATE: "FIELD_MOISTURE_RATE",
    FIELD_VISCERAL_FAT_LEVEL: "FIELD_VISCERAL_FAT_LEVEL",
    FIELD_BONE_SALT: "FIELD_BONE_SALT",
    FIELD_PROTEIN_RATE: "FIELD_PROTEIN_RATE",
    FIELD_BODY_AGE: "FIELD_BODY_AGE",
    FIELD_BODY_SCORE: "FIELD_BODY_SCORE",
    FIELD_SKELETAL_MUSCLEL_MASS: "FIELD_SKELETAL_MUSCLEL_MASS",
    FIELD_IMPEDANCE: "FIELD_IMPEDANCE",
    FIELD_CIRCUMFERENCE: "FIELD_CIRCUMFERENCE",
    FIELD_SPEED: "FIELD_SPEED",
    FIELD_RPM: "FIELD_RPM",
    FIELD_STEP_RATE: "FIELD_STEP_RATE",
    FIELD_ROTATION: "FIELD_ROTATION",
    FIELD_CALORIES: "FIELD_CALORIES",
    FIELD_CALORIES_TOTAL: "FIELD_CALORIES_TOTAL",
    FIELD_POWER: "FIELD_POWER",
    FIELD_HYDRATE: "FIELD_HYDRATE",
    FIELD_MEAL: "FIELD_MEAL",
    FIELD_FOOD: "FIELD_FOOD",
    FIELD_NUTRIENTS: "FIELD_NUTRIENTS",
    FIELD_NUTRIENTS_FACTS: "FIELD_NUTRIENTS_FACTS",
    FIELD_AVG: "FIELD_AVG",
    FIELD_MAX: "FIELD_MAX",
    FIELD_MIN: "FIELD_MIN",
    FIELD_MIN_LATITUDE: "FIELD_MIN_LATITUDE",
    FIELD_MIN_LONGITUDE: "FIELD_MIN_LONGITUDE",
    FIELD_MAX_LATITUDE: "FIELD_MAX_LATITUDE",
    FIELD_MAX_LONGITUDE: "FIELD_MAX_LONGITUDE",
    FIELD_APPEARANCE: "FIELD_APPEARANCE",
    FIELD_INTENSITY: "FIELD_INTENSITY",
    FALL_ASLEEP_TIME: "FALL_ASLEEP_TIME",
    WAKE_UP_TIME: "WAKE_UP_TIME",
    SLEEP_SCORE: "SLEEP_SCORE",
    SLEEP_LATENCY: "SLEEP_LATENCY",
    GO_BED_TIME: "GO_BED_TIME",
    SLEEP_EFFICIENCY: "SLEEP_EFFICIENCY",
    LIGHT_SLEEP_TIME: "LIGHT_SLEEP_TIME",
    DEEP_SLEEP_TIME: "DEEP_SLEEP_TIME",
    DREAM_TIME: "DREAM_TIME",
    AWAKE_TIME: "AWAKE_TIME",
    ALL_SLEEP_TIME: "ALL_SLEEP_TIME",
    WAKE_UP_CNT: "WAKE_UP_CNT",
    DEEP_SLEEP_PART: "DEEP_SLEEP_PART",
    SLEEP_STATE: "SLEEP_STATE",
    SCORE: "SCORE",
    GRADE: "GRADE",
    MEASURE_TYPE: "MEASURE_TYPE",
    STRESS_AVG: "STRESS_AVG",
    STRESS_MAX: "STRESS_MAX",
    STRESS_MIN: "STRESS_MIN",
    STRESS_LAST: "STRESS_LAST",
    MEASURE_COUNT: "MEASURE_COUNT",
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ20, ɵ21 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1oZWFsdGgvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7RUFjRTtBQUNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBdUMsTUFBTSxvQkFBb0IsQ0FBQzs7SUFhMUMsNkJBQWlCOzs7O0lBRTlDLDBCQUFNLGFBQUMsTUFBZ0I7SUFJdkIsZ0NBQVk7SUFJWixpQ0FBYTtJQUliLHNCQUFFLGFBQUMsS0FBYSxFQUFFLFFBQTBCOzs7Ozs7SUFkakMsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQTdCdEI7RUE2QitCLGlCQUFpQjtTQUFuQyxTQUFTO1NBb0JGLFNBQVMsaUJBQWlCLENBQUMsb0JBQXlDO0lBQ3BGLE9BQU8sU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDaEcsQ0FBQyxPQUNtQixTQUFTLG1CQUFtQixDQUFDLGtCQUF5QztJQUN4RixPQUFPLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hHLENBQUMsT0FDaUIsU0FBUyxpQkFBaUIsQ0FBQyxnQkFBdUI7SUFDbEUsT0FBTyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM1RixDQUFDLE9BQ2lCLFNBQVMsaUJBQWlCLENBQUMsa0JBQXVDO0lBQ2xGLE9BQU8sU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDOUYsQ0FBQztBQVpILE1BQU0s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QkFBZ0I7SUFDaEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxXQUFXLEVBQUUsYUFBYTtJQUMxQixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2QsWUFBWSxFQUFFLGNBQWM7SUFDNUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsYUFBYSxFQUFFLGVBQWU7Q0FDOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBDb3B5cmlnaHQgMjAyMC0yMDIxLiBIdWF3ZWkgVGVjaG5vbG9naWVzIENvLiwgTHRkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIilcclxuICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG5cclxuICAgICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gICAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gICAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAgICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAgICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsICBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSE1TSGVhbHRoXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSE1TSGVhbHRoJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1obXMtaGVhbHRoJyxcclxuICBwbHVnaW5SZWY6ICdITVNIZWFsdGgnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vSE1TLUNvcmUvaG1zLWNvcmRvdmEtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhNU0hlYWx0aCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNpZ25JbihzY29wZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxBdXRoSHVhd2VpSWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBlbmFibGVMb2dnZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgZGlzYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKHJlczogYW55KT0+dm9pZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGl2aXR5UmVjb3JkQ29udHJvbGxlciA9IHtcclxuXHRhZGRBY3Rpdml0eVJlY29yZDogZnVuY3Rpb24gYWRkQWN0aXZpdHlSZWNvcmQoYWRkQWN0aXZpdHlSZWNvcmRSZXE6QWRkQWN0aXZpdHlSZWNvcmRSZXEpOiBQcm9taXNlPHZvaWQ+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkFjdGl2aXR5UmVjb3JkQ29udHJvbGxlci5hZGRBY3Rpdml0eVJlY29yZChhZGRBY3Rpdml0eVJlY29yZFJlcSk7XHJcbiAgfSxcclxuXHRiZWdpbkFjdGl2aXR5UmVjb3JkOiBmdW5jdGlvbiBiZWdpbkFjdGl2aXR5UmVjb3JkKGFjdGl2aXR5UmVjb3JkRGF0YTpCZWdpbkFjdGl2aXR5UmVjb3JkUmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5BY3Rpdml0eVJlY29yZENvbnRyb2xsZXIuYmVnaW5BY3Rpdml0eVJlY29yZChhY3Rpdml0eVJlY29yZERhdGEpO1xyXG4gIH0sXHJcblx0ZW5kQWN0aXZpdHlSZWNvcmQ6IGZ1bmN0aW9uIGVuZEFjdGl2aXR5UmVjb3JkKGFjdGl2aXR5UmVjb3JkSWQ6c3RyaW5nKTogUHJvbWlzZTxBY3Rpdml0eVJlY29yZFtdPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5BY3Rpdml0eVJlY29yZENvbnRyb2xsZXIuZW5kQWN0aXZpdHlSZWNvcmQoYWN0aXZpdHlSZWNvcmRJZCk7XHJcbiAgfSxcclxuXHRnZXRBY3Rpdml0eVJlY29yZDogZnVuY3Rpb24gZ2V0QWN0aXZpdHlSZWNvcmQoYWN0aXZpdHlSZWNvcmRKU09OOkdldEFjdGl2aXR5UmVjb3JkUmVxKTogUHJvbWlzZTxBY3Rpdml0eVJlY29yZFtdPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5BY3Rpdml0eVJlY29yZENvbnRyb2xsZXIuZ2V0QWN0aXZpdHlSZWNvcmQoYWN0aXZpdHlSZWNvcmRKU09OKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRvUmVjb3JkZXJDb250cm9sbGVyID0ge1xyXG5cdHN0YXJ0UmVjb3JkOiBmdW5jdGlvbiBzdGFydFJlY29yZChzdGFydFJlY29yZFJlcTpTdGFydFJlY29yZFJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuQXV0b1JlY29yZGVyQ29udHJvbGxlci5zdGFydFJlY29yZChzdGFydFJlY29yZFJlcSk7XHJcbiAgfSxcclxuXHRzdG9wUmVjb3JkOiBmdW5jdGlvbiBzdG9wUmVjb3JkKHN0b3BSZWNvcmRSZXE6U3RvcFJlY29yZFJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuQXV0b1JlY29yZGVyQ29udHJvbGxlci5zdG9wUmVjb3JkKHN0b3BSZWNvcmRSZXEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnNlbnRzQ29udHJvbGxlciA9IHtcclxuXHRnZXRQZXJtaXNzaW9uczogZnVuY3Rpb24gZ2V0UGVybWlzc2lvbnMoZ2V0UGVybWlzc2lvbnNSZXE6R2V0UGVybWlzc2lvbnNSZXEpOiBQcm9taXNlPFNjb3BlTGFuZ0l0ZW0+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkNvbnNlbnRzQ29udHJvbGxlci5nZXRQZXJtaXNzaW9ucyhnZXRQZXJtaXNzaW9uc1JlcSk7XHJcbiAgfSxcclxuXHRyZXZva2VBbGw6IGZ1bmN0aW9uIHJldm9rZUFsbChhcHBJZDpzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkNvbnNlbnRzQ29udHJvbGxlci5yZXZva2VBbGwoYXBwSWQpO1xyXG4gIH0sXHJcblx0cmV2b2tlOiBmdW5jdGlvbiByZXZva2UocmV2b2tlUmVxOlJldm9rZVJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuQ29uc2VudHNDb250cm9sbGVyLnJldm9rZShyZXZva2VSZXEpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRyb2xsZXIgPSB7XHJcblx0aW5pdERhdGFDb250cm9sbGVyOiBmdW5jdGlvbiBpbml0RGF0YUNvbnRyb2xsZXIoanNvbkFycmF5OkRhdGFPcHRpb25bXSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuRGF0YUNvbnRyb2xsZXIuaW5pdERhdGFDb250cm9sbGVyKGpzb25BcnJheSk7XHJcbiAgfSxcclxuXHRyZWFkOiBmdW5jdGlvbiByZWFkKHJlYWRSZXE6UmVhZFJlcSk6IFByb21pc2U8UmVhZFJlcGx5PiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5yZWFkKHJlYWRSZXEpO1xyXG4gIH0sXHJcblx0aW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoaW5zZXJ0UmVxOkluc2VydFJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuRGF0YUNvbnRyb2xsZXIuaW5zZXJ0KGluc2VydFJlcSk7XHJcbiAgfSxcclxuXHR1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShqc29uT2JqZWN0OlVwZGF0ZVJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuRGF0YUNvbnRyb2xsZXIudXBkYXRlKGpzb25PYmplY3QpO1xyXG4gIH0sXHJcblx0ZGVsZXRlRGF0YTogZnVuY3Rpb24gZGVsZXRlRGF0YShqc29uT2JqZWN0OkRlbGV0ZVJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuRGF0YUNvbnRyb2xsZXIuZGVsZXRlRGF0YShqc29uT2JqZWN0KTtcclxuICB9LFxyXG5cdHJlYWRUb2RheVN1bW1hdGlvbjogZnVuY3Rpb24gcmVhZFRvZGF5U3VtbWF0aW9uKGRhdGFUeXBlU3RyOnN0cmluZyk6IFByb21pc2U8U2FtcGxlU2V0PiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5yZWFkVG9kYXlTdW1tYXRpb24oZGF0YVR5cGVTdHIpO1xyXG4gIH0sXHJcblx0cmVhZERhaWx5U3VtbWF0aW9uOiBmdW5jdGlvbiByZWFkRGFpbHlTdW1tYXRpb24oanNvbk9iamVjdDpSZWFkRGFpbHlTdW1tYXRpb25SZXEpOiBQcm9taXNlPFNhbXBsZVNldD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuRGF0YUNvbnRyb2xsZXIucmVhZERhaWx5U3VtbWF0aW9uKGpzb25PYmplY3QpO1xyXG4gIH0sXHJcblx0Y2xlYXJBbGw6IGZ1bmN0aW9uIGNsZWFyQWxsKCk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuRGF0YUNvbnRyb2xsZXIuY2xlYXJBbGwoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZXR0aW5nc0NvbnRyb2xsZXIgPSB7XHJcblx0YWRkRGF0YVR5cGU6IGZ1bmN0aW9uIGFkZERhdGFUeXBlKGpzb25PYmplY3Q6QWRkRGF0YVR5cGVSZXEpOiBQcm9taXNlPHZvaWQ+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLlNldHRpbmdzQ29udHJvbGxlci5hZGREYXRhVHlwZShqc29uT2JqZWN0KTtcclxuICB9LFxyXG5cdGRpc2FibGVIaUhlYWx0aDogZnVuY3Rpb24gZGlzYWJsZUhpSGVhbHRoKCk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuU2V0dGluZ3NDb250cm9sbGVyLmRpc2FibGVIaUhlYWx0aCgpO1xyXG4gIH0sXHJcblx0cmVhZERhdGFUeXBlOiBmdW5jdGlvbiByZWFkRGF0YVR5cGUoZGF0YVR5cGVOYW1lOnN0cmluZyk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuU2V0dGluZ3NDb250cm9sbGVyLnJlYWREYXRhVHlwZShkYXRhVHlwZU5hbWUpO1xyXG4gIH0sXHJcblx0Y2hlY2tIZWFsdGhBcHBBdXRob3JpemF0aW9uOiBmdW5jdGlvbiBjaGVja0hlYWx0aEFwcEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5TZXR0aW5nc0NvbnRyb2xsZXIuY2hlY2tIZWFsdGhBcHBBdXRob3JpemF0aW9uKCk7XHJcbiAgfSxcclxuXHRnZXRIZWFsdGhBcHBBdXRob3JpemF0aW9uOiBmdW5jdGlvbiBnZXRIZWFsdGhBcHBBdXRob3JpemF0aW9uKCk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuU2V0dGluZ3NDb250cm9sbGVyLmdldEhlYWx0aEFwcEF1dGhvcml6YXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBJTlRFUkZBQ0VTXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY29uc3QgSHVhd2VpSGlIZWFsdGggPSB7XHJcblx0SEVBTFRIS0lUX0hFSUdIVFdFSUdIVF9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlaWdodHdlaWdodC5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX0hFSUdIVFdFSUdIVF9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWlnaHR3ZWlnaHQud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfSEVJR0hUV0VJR0hUX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVpZ2h0d2VpZ2h0LmJvdGhcIixcclxuXHRIRUFMVEhLSVRfU1RFUF9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0ZXAucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9TVEVQX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0ZXAud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfU1RFUF9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0ZXAuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9MT0NBVElPTl9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2xvY2F0aW9uLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfTE9DQVRJT05fV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbG9jYXRpb24ud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfTE9DQVRJT05fQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9sb2NhdGlvbi5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX0hFQVJUUkFURV9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlYXJ0cmF0ZS5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX0hFQVJUUkFURV9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWFydHJhdGUud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfSEVBUlRSQVRFX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVhcnRyYXRlLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfQkxPT0RHTFVDT1NFX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RnbHVjb3NlLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQkxPT0RHTFVDT1NFX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kZ2x1Y29zZS53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9CTE9PREdMVUNPU0VfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZGdsdWNvc2UuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9ESVNUQU5DRV9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Rpc3RhbmNlLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfRElTVEFOQ0VfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvZGlzdGFuY2Uud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfRElTVEFOQ0VfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9kaXN0YW5jZS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX1NQRUVEX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3BlZWQucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9TUEVFRF9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zcGVlZC53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9TUEVFRF9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NwZWVkLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfQ0FMT1JJRVNfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9jYWxvcmllcy5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX0NBTE9SSUVTX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2NhbG9yaWVzLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0NBTE9SSUVTX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvY2Fsb3JpZXMuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9QVUxNT05BUllfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9wdWxtb25hcnkucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9QVUxNT05BUllfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcHVsbW9uYXJ5LndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX1BVTE1PTkFSWV9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3B1bG1vbmFyeS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX1NUUkVOR1RIX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZW5ndGgucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9TVFJFTkdUSF9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlbmd0aC53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9TVFJFTkdUSF9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVuZ3RoLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfQUNUSVZJVFlfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eS5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX0FDVElWSVRZX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5LndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0FDVElWSVRZX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9CT0RZRkFUX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keWZhdC5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX0JPRFlGQVRfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keWZhdC53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9CT0RZRkFUX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keWZhdC5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX1NMRUVQX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc2xlZXAucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9TTEVFUF9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zbGVlcC53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9TTEVFUF9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NsZWVwLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfTlVUUklUSU9OX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbnV0cml0aW9uLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfTlVUUklUSU9OX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L251dHJpdGlvbi53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9OVVRSSVRJT05fQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9udXRyaXRpb24uYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9CTE9PRFBSRVNTVVJFX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RwcmVzc3VyZS5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX0JMT09EUFJFU1NVUkVfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RwcmVzc3VyZS53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9CTE9PRFBSRVNTVVJFX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RwcmVzc3VyZS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX09YWUdFTlNUQVRVUkFUSU9OX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvb3h5Z2Vuc2F0dXJhdGlvbi5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX09YWUdFTlNUQVRVUkFUSU9OX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L294eWdlbnNhdHVyYXRpb24ud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfT1hZR0VOU1RBVFVSQVRJT05fQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9veHlnZW5zYXR1cmF0aW9uLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfQk9EWVRFTVBFUkFUVVJFX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keXRlbXBlcmF0dXJlLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQk9EWVRFTVBFUkFUVVJFX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHl0ZW1wZXJhdHVyZS53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9CT0RZVEVNUEVSQVRVUkVfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5dGVtcGVyYXR1cmUuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9SRVBST0RVQ1RJVkVfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9yZXByb2R1Y3RpdmUucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9SRVBST0RVQ1RJVkVfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcmVwcm9kdWN0aXZlLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX1JFUFJPRFVDVElWRV9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3JlcHJvZHVjdGl2ZS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX0FDVElWSVRZX1JFQ09SRF9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQUNUSVZJVFlfUkVDT1JEX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0FDVElWSVRZX1JFQ09SRF9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfU1RSRVNTX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZXNzLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfU1RSRVNTX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVzcy53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9TVFJFU1NfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3MuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9TQ09QRV9QUkVGSVg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXRcIixcclxuXHRBTExfU0NPUEVTOiBbXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWlnaHR3ZWlnaHQuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0ZXAuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2xvY2F0aW9uLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWFydHJhdGUuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kZ2x1Y29zZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvZGlzdGFuY2UuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NwZWVkLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9jYWxvcmllcy5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcHVsbW9uYXJ5LmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlbmd0aC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHlmYXQuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NsZWVwLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9udXRyaXRpb24uYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kcHJlc3N1cmUuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L294eWdlbnNhdHVyYXRpb24uYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHl0ZW1wZXJhdHVyZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcmVwcm9kdWN0aXZlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eXJlY29yZC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHlyZWNvcmQud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eXJlY29yZC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZXNzLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3Mud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3MuYm90aFwiXSxcclxuXHRNQVhfU0NPUEVTOiBbXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWlnaHR3ZWlnaHQucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlaWdodHdlaWdodC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlaWdodHdlaWdodC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0ZXAuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2xvY2F0aW9uLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9sb2NhdGlvbi53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2xvY2F0aW9uLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWFydHJhdGUucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlYXJ0cmF0ZS53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlYXJ0cmF0ZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RnbHVjb3NlLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZGdsdWNvc2Uud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZGdsdWNvc2UuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Rpc3RhbmNlLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9kaXN0YW5jZS53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Rpc3RhbmNlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zcGVlZC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3BlZWQud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zcGVlZC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvY2Fsb3JpZXMucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2NhbG9yaWVzLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvY2Fsb3JpZXMuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3B1bG1vbmFyeS5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcHVsbW9uYXJ5LndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcHVsbW9uYXJ5LmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlbmd0aC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZW5ndGgud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlbmd0aC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5LndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHlmYXQucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHlmYXQud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5ZmF0LmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zbGVlcC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc2xlZXAud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zbGVlcC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbnV0cml0aW9uLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9udXRyaXRpb24ud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9udXRyaXRpb24uYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kcHJlc3N1cmUucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kcHJlc3N1cmUud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZHByZXNzdXJlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9veHlnZW5zYXR1cmF0aW9uLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9veHlnZW5zYXR1cmF0aW9uLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvb3h5Z2Vuc2F0dXJhdGlvbi5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keXRlbXBlcmF0dXJlLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5dGVtcGVyYXR1cmUud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5dGVtcGVyYXR1cmUuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3JlcHJvZHVjdGl2ZS5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcmVwcm9kdWN0aXZlLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcmVwcm9kdWN0aXZlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eXJlY29yZC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHlyZWNvcmQud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eXJlY29yZC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZXNzLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3Mud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3MuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5LmJvdGhcIl1cdFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVR5cGUgPSB7XHJcblx0RFRfVU5VU0VEX0RBVEFfVFlQRTogXCJEVF9VTlVTRURfREFUQV9UWVBFXCIsXHJcblx0RFRfQ09OVElOVU9VU19TVEVQU19ERUxUQTogXCJEVF9DT05USU5VT1VTX1NURVBTX0RFTFRBXCIsXHJcblx0RFRfQ09OVElOVU9VU19TVEVQU19UT1RBTDogXCJEVF9DT05USU5VT1VTX1NURVBTX1RPVEFMXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19TVEVQU19SQVRFOiBcIkRUX0lOU1RBTlRBTkVPVVNfU1RFUFNfUkFURVwiLFxyXG5cdERUX0NPTlRJTlVPVVNfU1RFUFNfUkFURV9TVEFUSVNUSUM6IFwiRFRfQ09OVElOVU9VU19TVEVQU19SQVRFX1NUQVRJU1RJQ1wiLFxyXG5cdERUX0NPTlRJTlVPVVNfQUNUSVZJVFlfU0VHTUVOVDogXCJEVF9DT05USU5VT1VTX0FDVElWSVRZX1NFR01FTlRcIixcclxuXHREVF9DT05USU5VT1VTX0NBTE9SSUVTX0NPTlNVTUVEOiBcIkRUX0NPTlRJTlVPVVNfQ0FMT1JJRVNfQ09OU1VNRURcIixcclxuXHREVF9DT05USU5VT1VTX0NBTE9SSUVTX0JVUk5UOiBcIkRUX0NPTlRJTlVPVVNfQ0FMT1JJRVNfQlVSTlRcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0NBTE9SSUVTX0JNUjogXCJEVF9JTlNUQU5UQU5FT1VTX0NBTE9SSUVTX0JNUlwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfUE9XRVJfU0FNUExFOiBcIkRUX0lOU1RBTlRBTkVPVVNfUE9XRVJfU0FNUExFXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19BQ1RJVklUWV9TQU1QTEU6IFwiRFRfSU5TVEFOVEFORU9VU19BQ1RJVklUWV9TQU1QTEVcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0FDVElWSVRZX1NBTVBMRVM6IFwiRFRfSU5TVEFOVEFORU9VU19BQ1RJVklUWV9TQU1QTEVTXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19IRUFSVF9SQVRFOiBcIkRUX0lOU1RBTlRBTkVPVVNfSEVBUlRfUkFURVwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfTE9DQVRJT05fU0FNUExFOiBcIkRUX0lOU1RBTlRBTkVPVVNfTE9DQVRJT05fU0FNUExFXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19MT0NBVElPTl9UUkFDRTogXCJEVF9JTlNUQU5UQU5FT1VTX0xPQ0FUSU9OX1RSQUNFXCIsXHJcblx0RFRfQ09OVElOVU9VU19ESVNUQU5DRV9ERUxUQTogXCJEVF9DT05USU5VT1VTX0RJU1RBTkNFX0RFTFRBXCIsXHJcblx0RFRfQ09OVElOVU9VU19ESVNUQU5DRV9UT1RBTDogXCJEVF9DT05USU5VT1VTX0RJU1RBTkNFX1RPVEFMXCIsXHJcblx0RFRfQ09OVElOVU9VU19DQUxPUklFU19CVVJOVF9UT1RBTDogXCJEVF9DT05USU5VT1VTX0NBTE9SSUVTX0JVUk5UX1RPVEFMXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19TUEVFRDogXCJEVF9JTlNUQU5UQU5FT1VTX1NQRUVEXCIsXHJcblx0RFRfQ09OVElOVU9VU19CSUtJTkdfV0hFRUxfUk9UQVRJT05fVE9UQUw6IFwiRFRfQ09OVElOVU9VU19CSUtJTkdfV0hFRUxfUk9UQVRJT05fVE9UQUxcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0JJS0lOR19XSEVFTF9ST1RBVElPTjogXCJEVF9JTlNUQU5UQU5FT1VTX0JJS0lOR19XSEVFTF9ST1RBVElPTlwiLFxyXG5cdERUX0NPTlRJTlVPVVNfQklLSU5HX1BFREFMSU5HX1RPVEFMOiBcIkRUX0NPTlRJTlVPVVNfQklLSU5HX1BFREFMSU5HX1RPVEFMXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19CSUtJTkdfUEVEQUxJTkdfUkFURTogXCJEVF9JTlNUQU5UQU5FT1VTX0JJS0lOR19QRURBTElOR19SQVRFXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19IRUlHSFQ6IFwiRFRfSU5TVEFOVEFORU9VU19IRUlHSFRcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0JPRFlfV0VJR0hUOiBcIkRUX0lOU1RBTlRBTkVPVVNfQk9EWV9XRUlHSFRcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0JPRFlfRkFUX1JBVEU6IFwiRFRfSU5TVEFOVEFORU9VU19CT0RZX0ZBVF9SQVRFXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19OVVRSSVRJT05fRkFDVFM6IFwiRFRfSU5TVEFOVEFORU9VU19OVVRSSVRJT05fRkFDVFNcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0hZRFJBVEU6IFwiRFRfSU5TVEFOVEFORU9VU19IWURSQVRFXCIsXHJcblx0RFRfQ09OVElOVU9VU19XT1JLT1VUX0RVUkFUSU9OOiBcIkRUX0NPTlRJTlVPVVNfV09SS09VVF9EVVJBVElPTlwiLFxyXG5cdERUX0NPTlRJTlVPVVNfRVhFUkNJU0VfSU5URU5TSVRZOiBcIkRUX0NPTlRJTlVPVVNfRVhFUkNJU0VfSU5URU5TSVRZXCIsXHJcblx0RFRfU1RBVElTVElDU19TTEVFUDogXCJEVF9TVEFUSVNUSUNTX1NMRUVQXCIsXHJcblx0RFRfQ09OVElOVU9VU19TTEVFUDogXCJEVF9DT05USU5VT1VTX1NMRUVQXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19TVFJFU1M6IFwiRFRfSU5TVEFOVEFORU9VU19TVFJFU1NcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX1NUUkVTU19TVEFUSVNUSUNTOiBcIkRUX0lOU1RBTlRBTkVPVVNfU1RSRVNTX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfV09SS09VVF9EVVJBVElPTjogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfV09SS09VVF9EVVJBVElPTlwiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19BQ1RJVklUWV9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19BQ1RJVklUWV9TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX0NBTE9SSUVTX0JNUl9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19DQUxPUklFU19CTVJfU1RBVElTVElDU1wiLFxyXG5cdFBPTFlNRVJJWkVfU1RFUF9DT1VOVF9ERUxUQTogXCJQT0xZTUVSSVpFX1NURVBfQ09VTlRfREVMVEFcIixcclxuXHRQT0xZTUVSSVpFX0RJU1RBTkNFX0RFTFRBOiBcIlBPTFlNRVJJWkVfRElTVEFOQ0VfREVMVEFcIixcclxuXHRQT0xZTUVSSVpFX0NBTE9SSUVTX0NPTlNVTUVEOiBcIlBPTFlNRVJJWkVfQ0FMT1JJRVNfQ09OU1VNRURcIixcclxuXHRQT0xZTUVSSVpFX0NBTE9SSUVTX0VYUEVOREVEOiBcIlBPTFlNRVJJWkVfQ0FMT1JJRVNfRVhQRU5ERURcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfRVhFUkNJU0VfSU5URU5TSVRZX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX0VYRVJDSVNFX0lOVEVOU0lUWV9TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX0hFQVJUX1JBVEVfU1RBVElTVElDUzogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfSEVBUlRfUkFURV9TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX0xPQ0FUSU9OX0JPVU5EQVJZX1JBTkdFOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19MT0NBVElPTl9CT1VOREFSWV9SQU5HRVwiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19QT1dFUl9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19QT1dFUl9TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX1NQRUVEX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX1NQRUVEX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfQk9EWV9GQVRfUkFURV9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19CT0RZX0ZBVF9SQVRFX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfQk9EWV9XRUlHSFRfU1RBVElTVElDUzogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfQk9EWV9XRUlHSFRfU1RBVElTVElDU1wiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19IRUlHSFRfU1RBVElTVElDUzogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfSEVJR0hUX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfTlVUUklUSU9OX0ZBQ1RTX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX05VVFJJVElPTl9GQUNUU19TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9IWURSQVRJT046IFwiUE9MWU1FUklaRV9IWURSQVRJT05cIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGlIZWFsdGhBY3Rpdml0aWVzID0ge1xyXG5cdE1JTUVfVFlQRV9QUkVGSVg6IFwidm5kLmh1YXdlaS5oaWhlYWx0aC5hY3Rpdml0eS9cIixcclxuXHRFWFRSQV9BQ1RJT05fU1RBVFVTOiBcImFjdGlvblN0YXR1c1wiLFxyXG5cdFNUQVRVU19BQ1RJT05fU1RBUlQ6IFwiU3RhcnRlZEFjdGlvblN0YXR1c1wiLFxyXG5cdFNUQVRVU19BQ1RJT05fRU5EOiBcIkVuZGVkQWN0aW9uU3RhdHVzXCIsXHJcblx0QUVST0JJQ1M6IFwiYWVyb2JpY3NcIixcclxuXHRBUkNIRVJZOiBcImFyY2hlcnlcIixcclxuXHRCQURNSU5UT046IFwiYmFkbWludG9uXCIsXHJcblx0QkFTRUJBTEw6IFwiYmFzZWJhbGxcIixcclxuXHRCQVNLRVRCQUxMOiBcImJhc2tldGJhbGxcIixcclxuXHRCSUFUSExPTjogXCJiaWF0aGxvblwiLFxyXG5cdEJPWElORzogXCJib3hpbmdcIixcclxuXHRDQUxJU1RIRU5JQ1M6IFwiY2FsaXN0aGVuaWNzXCIsXHJcblx0Q0lSQ1VJVF9UUkFJTklORzogXCJjaXJjdWl0X3RyYWluaW5nXCIsXHJcblx0Q1JJQ0tFVDogXCJjcmlja2V0XCIsXHJcblx0Q1JPU1NGSVQ6IFwiY3Jvc3NmaXRcIixcclxuXHRDVVJMSU5HOiBcImN1cmxpbmdcIixcclxuXHRDWUNMSU5HOiBcImN5Y2xpbmdcIixcclxuXHRDWUNMSU5HX0lORE9PUjogXCJjeWNsaW5nX2luZG9vclwiLFxyXG5cdERBTkNJTkc6IFwiZGFuY2luZ1wiLFxyXG5cdERJVklORzogXCJkaXZpbmdcIixcclxuXHRFTEVWQVRPUjogXCJlbGV2YXRvclwiLFxyXG5cdEVMTElQVElDQUw6IFwiZWxsaXB0aWNhbFwiLFxyXG5cdEVSR09NRVRFUjogXCJlcmdvbWV0ZXJcIixcclxuXHRFU0NBTEFUT1I6IFwiZXNjYWxhdG9yXCIsXHJcblx0RkVOQ0lORzogXCJmZW5jaW5nXCIsXHJcblx0Rk9PVEJBTExfQU1FUklDQU46IFwiZm9vdGJhbGwuYW1lcmljYW5cIixcclxuXHRGT09UQkFMTF9BVVNUUkFMSUFOOiBcImZvb3RiYWxsLmF1c3RyYWxpYW5cIixcclxuXHRGT09UQkFMTF9TT0NDRVI6IFwiZm9vdGJhbGwuc29jY2VyXCIsXHJcblx0RkxZSU5HX0RJU0M6IFwiZmx5aW5nX2Rpc2NcIixcclxuXHRHQVJERU5JTkc6IFwiZ2FyZGVuaW5nXCIsXHJcblx0R09MRjogXCJnb2xmXCIsXHJcblx0R1lNTkFTVElDUzogXCJneW1uYXN0aWNzXCIsXHJcblx0SEFOREJBTEw6IFwiaGFuZGJhbGxcIixcclxuXHRISUlUOiBcImludGVydmFsX3RyYWluaW5nLmhpZ2hfaW50ZW5zaXR5XCIsXHJcblx0SElLSU5HOiBcImhpa2luZ1wiLFxyXG5cdEhPQ0tFWTogXCJob2NrZXlcIixcclxuXHRIT1JTRV9SSURJTkc6IFwiaG9yc2VfcmlkaW5nXCIsXHJcblx0SE9VU0VXT1JLOiBcImhvdXNld29ya1wiLFxyXG5cdElDRV9TS0FUSU5HOiBcImljZV9za2F0aW5nXCIsXHJcblx0SU5fVkVISUNMRTogXCJpbl92ZWhpY2xlXCIsXHJcblx0SU5URVJWQUxfVFJBSU5JTkc6IFwiaW50ZXJ2YWxfdHJhaW5pbmdcIixcclxuXHRKVU1QSU5HX1JPUEU6IFwianVtcGluZ19yb3BlXCIsXHJcblx0S0FZQUtJTkc6IFwia2F5YWtpbmdcIixcclxuXHRLRVRUTEVCRUxMX1RSQUlOSU5HOiBcImtldHRsZWJlbGxfdHJhaW5pbmdcIixcclxuXHRLSUNLQk9YSU5HOiBcImtpY2tib3hpbmdcIixcclxuXHRLSVRFU1VSRklORzogXCJraXRlc3VyZmluZ1wiLFxyXG5cdE1BUlRJQUxfQVJUUzogXCJtYXJ0aWFsX2FydHNcIixcclxuXHRNRURJVEFUSU9OOiBcIm1lZGl0YXRpb25cIixcclxuXHRNSVhFRF9NQVJUSUFMX0FSVFM6IFwibWFydGlhbF9hcnRzLm1peGVkXCIsXHJcblx0T05fRk9PVDogXCJvbl9mb290XCIsXHJcblx0T1RIRVI6IFwib3RoZXJcIixcclxuXHRQOTBYOiBcInA5MHhcIixcclxuXHRQQVJBR0xJRElORzogXCJwYXJhZ2xpZGluZ1wiLFxyXG5cdFBJTEFURVM6IFwicGlsYXRlc1wiLFxyXG5cdFBPTE86IFwicG9sb1wiLFxyXG5cdFJBQ1FVRVRCQUxMOiBcInJhY3F1ZXRiYWxsXCIsXHJcblx0Uk9DS19DTElNQklORzogXCJyb2NrX2NsaW1iaW5nXCIsXHJcblx0Uk9XSU5HOiBcInJvd2luZ1wiLFxyXG5cdFJPV0lOR19NQUNISU5FOiBcInJvd2luZy5tYWNoaW5lXCIsXHJcblx0UlVHQlk6IFwicnVnYnlcIixcclxuXHRSVU5OSU5HOiBcInJ1bm5pbmdcIixcclxuXHRSVU5OSU5HX01BQ0hJTkU6IFwicnVubmluZy5tYWNoaW5lXCIsXHJcblx0U0FJTElORzogXCJzYWlsaW5nXCIsXHJcblx0U0NVQkFfRElWSU5HOiBcInNjdWJhX2RpdmluZ1wiLFxyXG5cdFNDT09URVJfUklESU5HOiBcInNjb290ZXJfcmlkaW5nXCIsXHJcblx0U0tBVEVCT0FSRElORzogXCJza2F0ZWJvYXJkaW5nXCIsXHJcblx0U0tBVElORzogXCJza2F0aW5nXCIsXHJcblx0U0tJSU5HOiBcInNraWluZ1wiLFxyXG5cdFNMRURESU5HOiBcInNsZWRkaW5nXCIsXHJcblx0U0xFRVA6IFwic2xlZXBcIixcclxuXHRTTEVFUF9MSUdIVDogXCJzbGVlcC5saWdodFwiLFxyXG5cdFNMRUVQX0RFRVA6IFwic2xlZXAuZGVlcFwiLFxyXG5cdFNMRUVQX1JFTTogXCJzbGVlcC5yZW1cIixcclxuXHRTTEVFUF9BV0FLRTogXCJzbGVlcC5hd2FrZVwiLFxyXG5cdFNOT1dCT0FSRElORzogXCJzbm93Ym9hcmRpbmdcIixcclxuXHRTTk9XTU9CSUxFOiBcInNub3dtb2JpbGVcIixcclxuXHRTTk9XU0hPRUlORzogXCJzbm93c2hvZWluZ1wiLFxyXG5cdFNPRlRCQUxMOiBcInNvZnRiYWxsXCIsXHJcblx0U1FVQVNIOiBcInNxdWFzaFwiLFxyXG5cdFNUQUlSX0NMSU1CSU5HOiBcInN0YWlyX2NsaW1iaW5nXCIsXHJcblx0U1RBSVJfQ0xJTUJJTkdfTUFDSElORTogXCJzdGFpcl9jbGltYmluZy5tYWNoaW5lXCIsXHJcblx0U1RBTkRVUF9QQURETEVCT0FSRElORzogXCJzdGFuZHVwX3BhZGRsZWJvYXJkaW5nXCIsXHJcblx0U1RJTEw6IFwic3RpbGxcIixcclxuXHRTVFJFTkdUSF9UUkFJTklORzogXCJzdHJlbmd0aF90cmFpbmluZ1wiLFxyXG5cdFNVUkZJTkc6IFwic3VyZmluZ1wiLFxyXG5cdFNXSU1NSU5HOiBcInN3aW1taW5nXCIsXHJcblx0U1dJTU1JTkdfUE9PTDogXCJzd2ltbWluZy5wb29sXCIsXHJcblx0U1dJTU1JTkdfT1BFTl9XQVRFUjogXCJzd2ltbWluZy5vcGVuX3dhdGVyXCIsXHJcblx0VEFCTEVfVEVOTklTOiBcInRhYmxlX3Rlbm5pc1wiLFxyXG5cdFRFQU1fU1BPUlRTOiBcInRlYW1fc3BvcnRzXCIsXHJcblx0VEVOTklTOiBcInRlbm5pc1wiLFxyXG5cdFRJTFRJTkc6IFwidGlsdGluZ1wiLFxyXG5cdFVOS05PV046IFwidW5rbm93blwiLFxyXG5cdFZPTExFWUJBTEw6IFwidm9sbGV5YmFsbFwiLFxyXG5cdFdBS0VCT0FSRElORzogXCJ3YWtlYm9hcmRpbmdcIixcclxuXHRXQUxLSU5HOiBcIndhbGtpbmdcIixcclxuXHRXQVRFUl9QT0xPOiBcIndhdGVyX3BvbG9cIixcclxuXHRXRUlHSFRMSUZUSU5HOiBcIndlaWdodGxpZnRpbmdcIixcclxuXHRXSEVFTENIQUlSOiBcIndoZWVsY2hhaXJcIixcclxuXHRXSU5EU1VSRklORzogXCJ3aW5kc3VyZmluZ1wiLFxyXG5cdFlPR0E6IFwieW9nYVwiLFxyXG5cdFpVTUJBOiBcInp1bWJhXCIsXHJcblx0REFSVFM6IFwiZGFydHNcIixcclxuXHRCSUxMSUFSRFM6IFwiYmlsbGlhcmRzXCIsXHJcblx0U0hVVFRMRUNPQ0s6IFwic2h1dHRsZWNvY2tcIixcclxuXHRCT1dMSU5HOiBcImJvd2xpbmdcIixcclxuXHRHUk9VUF9DQUxJU1RIRU5JQ1M6IFwiZ3JvdXBfY2FsaXN0aGVuaWNzXCIsXHJcblx0VFVHX09GX1dBUjogXCJ0dWdfb2Zfd2FyXCIsXHJcblx0QkVBQ0hfU09DQ0VSOiBcImJlYWNoX3NvY2NlclwiLFxyXG5cdEJFQUNIX1ZPTExFWUJBTEw6IFwiYmVhY2hfdm9sbGV5YmFsbFwiLFxyXG5cdEdBVEVCQUxMOiBcImdhdGViYWxsXCIsXHJcblx0U0VQQUtUQUtSQVc6IFwic2VwYWt0YWtyYXdcIixcclxuXHRET0RHRV9CQUxMOiBcImRvZGdlX2JhbGxcIixcclxuXHRUUkVBRE1JTEw6IFwidHJlYWRtaWxsXCIsXHJcblx0U1BJTk5JTkc6IFwic3Bpbm5pbmdcIixcclxuXHRTVFJPTExfTUFDSElORTogXCJzdHJvbGxfbWFjaGluZVwiLFxyXG5cdENST1NTX0ZJVDogXCJjcm9zc19maXRcIixcclxuXHRGVU5DVElPTkFMX1RSQUlOSU5HOiBcImZ1bmN0aW9uYWxfdHJhaW5pbmdcIixcclxuXHRQSFlTSUNBTF9UUkFJTklORzogXCJwaHlzaWNhbF90cmFpbmluZ1wiLFxyXG5cdEJFTExZX0RBTkNFOiBcImJlbGx5X2RhbmNlXCIsXHJcblx0SkFaWjogXCJqYXp6XCIsXHJcblx0TEFUSU46IFwibGF0aW5cIixcclxuXHRCQUxMRVQ6IFwiYmFsbGV0XCIsXHJcblx0Q09SRV9UUkFJTklORzogXCJjb3JlX3RyYWluaW5nXCIsXHJcblx0SE9SSVpPTlRBTF9CQVI6IFwiaG9yaXpvbnRhbF9iYXJcIixcclxuXHRQQVJBTExFTF9CQVJTOiBcInBhcmFsbGVsX2JhcnNcIixcclxuXHRISVBfSE9QOiBcImhpcF9ob3BcIixcclxuXHRTUVVBUkVfREFOQ0U6IFwic3F1YXJlX2RhbmNlXCIsXHJcblx0SFVfTEFfSE9PUDogXCJodV9sYV9ob29wXCIsXHJcblx0Qk1YOiBcImJteFwiLFxyXG5cdE9SSUVOVEVFUklORzogXCJvcmllbnRlZXJpbmdcIixcclxuXHRJTkRPT1JfV0FMSzogXCJpbmRvb3Jfd2Fsa1wiLFxyXG5cdElORE9PUl9SVU5OSU5HOiBcImluZG9vcl9ydW5uaW5nXCIsXHJcblx0TU9VTlRJTl9DTElNQklORzogXCJtb3VudGluX2NsaW1iaW5nXCIsXHJcblx0Q1JPU1NfQ09VTlRSWV9SQUNFOiBcImNyb3NzX2NvdW50cnlfcmFjZVwiLFxyXG5cdFJPTExFUl9TS0FUSU5HOiBcInJvbGxlcl9za2F0dGluZ1wiLFxyXG5cdEhVTlRJTkc6IFwiaHVudGluZ1wiLFxyXG5cdEZMWV9BX0tJVEU6IFwiZmx5X2Ffa2l0ZVwiLFxyXG5cdFNXSU5HOiBcInN3aW5nXCIsXHJcblx0T0JTVEFDTEVfUkFDRTogXCJvYnN0YWNsZV9yYWNlXCIsXHJcblx0QlVOR0VFX0pVTVBJTkc6IFwiYnVuZ2VlX2p1bXBpbmdcIixcclxuXHRQQVJLT1VSOiBcInBhcmtvdXJcIixcclxuXHRQQVJBQ0hVVEU6IFwicGFyYWNodXRlXCIsXHJcblx0UkFDSU5HX0NBUjogXCJyYWNpbmdfY2FyXCIsXHJcblx0VFJJQVRITE9OUzogXCJ0cmlhdGhsb25zXCIsXHJcblx0SUNFX0hPQ0tFWTogXCJpY2VfaG9ja2V5XCIsXHJcblx0Q1JPU1NDT1VOVFJZX1NLSUlORzogXCJjcm9zc2NvdW50cnlfc2tpaW5nXCIsXHJcblx0U0xFRDogXCJzbGVkXCIsXHJcblx0RklTSElORzogXCJmaXNoaW5nXCIsXHJcblx0RFJJRlRJTkc6IFwiZHJpZnRpbmdcIixcclxuXHREUkFHT05fQk9BVDogXCJkcmFnb25fYm9hdFwiLFxyXG5cdE1PVE9SQk9BVDogXCJtb3RvcmJvYXRcIixcclxuXHRTVVA6IFwic3VwXCIsXHJcblx0RlJFRV9TUEFSUklORzogXCJmcmVlX3NwYXJyaW5nXCIsXHJcblx0S0FSQVRFOiBcImthcmF0ZVwiLFxyXG5cdEJPRFlfQ09NQkFUOiBcImJvZHlfY29tYmF0XCIsXHJcblx0S0VORE86IFwia2VuZG9cIixcclxuXHRUQUlfQ0hJOiBcInRhaV9jaGlcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUdlbmVyYXRlVHlwZSA9IHtcclxuXHREQVRBX1RZUEVfSU5JVDogMSxcclxuXHREQVRBX1RZUEVfUkFXOiAwLFxyXG5cdERBVEFfVFlQRV9ERVJJVkVEOiAxLFxyXG5cdERBVEFfVFlQRV9DTEVBTjogMixcclxuXHREQVRBX1RZUEVfQ09OVkVSVEVEOiAzLFxyXG5cdERBVEFfVFlQRV9NRVJHRUQ6IDQsXHJcblx0REFUQV9UWVBFX1BPTFlNRVJJWkVEOiA1XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lVW5pdCA9IHtcclxuXHRIT1VSUzogXCJIT1VSU1wiLFxyXG5cdERBWVM6IFwiREFZU1wiLFxyXG5cdE1JQ1JPU0VDT05EUzogXCJNSUNST1NFQ09ORFNcIixcclxuXHRNSUxMSVNFQ09ORFM6IFwiTUlMTElTRUNPTkRTXCIsXHJcblx0TUlOVVRFUzogXCJNSU5VVEVTXCIsXHJcblx0TkFOT1NFQ09ORFM6IFwiTkFOT1NFQ09ORFNcIixcclxuXHRTRUNPTkRTOiBcIlNFQ09ORFNcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmllbGQgPSB7XHJcblx0Rk9STUFUX0lOVDMyOiAxLFxyXG5cdEZPUk1BVF9GTE9BVDogMixcclxuXHRGT1JNQVRfU1RSSU5HOiAzLFxyXG5cdEZPUk1BVF9NQVA6IDQsXHJcblx0Rk9STUFUX0xPTkc6IDUsXHJcblx0Rk9STUFUX0RPVUJMRTogMixcclxuXHRNRUFMX1VOS05PV046IDAsXHJcblx0TUVBTF9CUkVBS0ZBU1Q6IDEsXHJcblx0TUVBTF9MVU5DSDogMixcclxuXHRNRUFMX0RJTk5FUjogMyxcclxuXHRNRUFMX1NOQUNLOiA0LFxyXG5cdFRZUEVfT0ZfUkVTSVNUQU5DRV9VTktOT1dOOiAwLFxyXG5cdFRZUEVfT0ZfUkVTSVNUQU5DRV9CQVJCRUxMOiAxLFxyXG5cdFRZUEVfT0ZfUkVTSVNUQU5DRV9DQUJMRTogMixcclxuXHRUWVBFX09GX1JFU0lTVEFOQ0VfRFVNQkJFTEw6IDMsXHJcblx0VFlQRV9PRl9SRVNJU1RBTkNFX0tFVFRMRUJFTEw6IDQsXHJcblx0VFlQRV9PRl9SRVNJU1RBTkNFX01BQ0hJTkU6IDUsXHJcblx0VFlQRV9PRl9SRVNJU1RBTkNFX0JPRFk6IDYsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX0NBTE9SSUVTOiBcIk5VVFJJRU5UU19GQUNUU19DQUxPUklFU1wiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19UT1RBTF9GQVQ6IFwiTlVUUklFTlRTX0ZBQ1RTX1RPVEFMX0ZBVFwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19TQVRVUkFURURfRkFUOiBcIk5VVFJJRU5UU19GQUNUU19TQVRVUkFURURfRkFUXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX1VOU0FUVVJBVEVEX0ZBVDogXCJOVVRSSUVOVFNfRkFDVFNfVU5TQVRVUkFURURfRkFUXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX1BPTFlVTlNBVFVSQVRFRF9GQVQ6IFwiTlVUUklFTlRTX0ZBQ1RTX1BPTFlVTlNBVFVSQVRFRF9GQVRcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfTU9OT1VOU0FUVVJBVEVEX0ZBVDogXCJOVVRSSUVOVFNfRkFDVFNfTU9OT1VOU0FUVVJBVEVEX0ZBVFwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19UUkFOU19GQVQ6IFwiTlVUUklFTlRTX0ZBQ1RTX1RSQU5TX0ZBVFwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19DSE9MRVNURVJPTDogXCJOVVRSSUVOVFNfRkFDVFNfQ0hPTEVTVEVST0xcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfU09ESVVNOiBcIk5VVFJJRU5UU19GQUNUU19TT0RJVU1cIixcclxuXHROVVRSSUVOVFNfRkFDVFNfUE9UQVNTSVVNOiBcIk5VVFJJRU5UU19GQUNUU19QT1RBU1NJVU1cIixcclxuXHROVVRSSUVOVFNfRkFDVFNfVE9UQUxfQ0FSQlM6IFwiTlVUUklFTlRTX0ZBQ1RTX1RPVEFMX0NBUkJTXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX0RJRVRBUllfRklCRVI6IFwiTlVUUklFTlRTX0ZBQ1RTX0RJRVRBUllfRklCRVJcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfU1VHQVI6IFwiTlVUUklFTlRTX0ZBQ1RTX1NVR0FSXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX1BST1RFSU46IFwiTlVUUklFTlRTX0ZBQ1RTX1BST1RFSU5cIixcclxuXHROVVRSSUVOVFNfRkFDVFNfVklUQU1JTl9BOiBcIk5VVFJJRU5UU19GQUNUU19WSVRBTUlOX0FcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfVklUQU1JTl9DOiBcIk5VVFJJRU5UU19GQUNUU19WSVRBTUlOX0NcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfQ0FMQ0lVTTogXCJOVVRSSUVOVFNfRkFDVFNfQ0FMQ0lVTVwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19JUk9OOiBcIk5VVFJJRU5UU19GQUNUU19JUk9OXCIsXHJcblx0RklFTERfUFJFQ0lTSU9OOiBcIkZJRUxEX1BSRUNJU0lPTlwiLFxyXG5cdEZJRUxEX0FMVElUVURFOiBcIkZJRUxEX0FMVElUVURFXCIsXHJcblx0RklFTERfVFlQRV9PRl9BQ1RJVklUWTogXCJGSUVMRF9UWVBFX09GX0FDVElWSVRZXCIsXHJcblx0RklFTERfUE9TU0lCSUxJVFlfT0ZfQUNUSVZJVFk6IFwiRklFTERfUE9TU0lCSUxJVFlfT0ZfQUNUSVZJVFlcIixcclxuXHRGSUVMRF9CUE06IFwiRklFTERfQlBNXCIsXHJcblx0RklFTERfUE9TU0lCSUxJVFk6IFwiRklFTERfUE9TU0lCSUxJVFlcIixcclxuXHRGSUVMRF9TUEFOOiBcIkZJRUxEX1NQQU5cIixcclxuXHRGSUVMRF9ESVNUQU5DRTogXCJGSUVMRF9ESVNUQU5DRVwiLFxyXG5cdEZJRUxEX0RJU1RBTkNFX0RFTFRBOiBcIkZJRUxEX0RJU1RBTkNFX0RFTFRBXCIsXHJcblx0RklFTERfSEVJR0hUOiBcIkZJRUxEX0hFSUdIVFwiLFxyXG5cdEZJRUxEX1NURVBTX0RFTFRBOiBcIkZJRUxEX1NURVBTX0RFTFRBXCIsXHJcblx0RklFTERfU1RFUFM6IFwiRklFTERfU1RFUFNcIixcclxuXHRGSUVMRF9TVEVQX0xFTkdUSDogXCJGSUVMRF9TVEVQX0xFTkdUSFwiLFxyXG5cdEZJRUxEX0xBVElUVURFOiBcIkZJRUxEX0xBVElUVURFXCIsXHJcblx0RklFTERfTE9OR0lUVURFOiBcIkZJRUxEX0xPTkdJVFVERVwiLFxyXG5cdEZJRUxEX0JPRFlfV0VJR0hUOiBcIkZJRUxEX0JPRFlfV0VJR0hUXCIsXHJcblx0RklFTERfQk1JOiBcIkZJRUxEX0JNSVwiLFxyXG5cdEZJRUxEX0JPRFlfRkFUOiBcIkZJRUxEX0JPRFlfRkFUXCIsXHJcblx0RklFTERfQk9EWV9GQVRfUkFURTogXCJGSUVMRF9CT0RZX0ZBVF9SQVRFXCIsXHJcblx0RklFTERfTVVTQ0xFX01BU1M6IFwiRklFTERfTVVTQ0xFX01BU1NcIixcclxuXHRGSUVMRF9CQVNBTF9NRVRBQk9MSVNNOiBcIkZJRUxEX0JBU0FMX01FVEFCT0xJU01cIixcclxuXHRGSUVMRF9NT0lTVFVSRTogXCJGSUVMRF9NT0lTVFVSRVwiLFxyXG5cdEZJRUxEX01PSVNUVVJFX1JBVEU6IFwiRklFTERfTU9JU1RVUkVfUkFURVwiLFxyXG5cdEZJRUxEX1ZJU0NFUkFMX0ZBVF9MRVZFTDogXCJGSUVMRF9WSVNDRVJBTF9GQVRfTEVWRUxcIixcclxuXHRGSUVMRF9CT05FX1NBTFQ6IFwiRklFTERfQk9ORV9TQUxUXCIsXHJcblx0RklFTERfUFJPVEVJTl9SQVRFOiBcIkZJRUxEX1BST1RFSU5fUkFURVwiLFxyXG5cdEZJRUxEX0JPRFlfQUdFOiBcIkZJRUxEX0JPRFlfQUdFXCIsXHJcblx0RklFTERfQk9EWV9TQ09SRTogXCJGSUVMRF9CT0RZX1NDT1JFXCIsXHJcblx0RklFTERfU0tFTEVUQUxfTVVTQ0xFTF9NQVNTOiBcIkZJRUxEX1NLRUxFVEFMX01VU0NMRUxfTUFTU1wiLFxyXG5cdEZJRUxEX0lNUEVEQU5DRTogXCJGSUVMRF9JTVBFREFOQ0VcIixcclxuXHRGSUVMRF9DSVJDVU1GRVJFTkNFOiBcIkZJRUxEX0NJUkNVTUZFUkVOQ0VcIixcclxuXHRGSUVMRF9TUEVFRDogXCJGSUVMRF9TUEVFRFwiLFxyXG5cdEZJRUxEX1JQTTogXCJGSUVMRF9SUE1cIixcclxuXHRGSUVMRF9TVEVQX1JBVEU6IFwiRklFTERfU1RFUF9SQVRFXCIsXHJcblx0RklFTERfUk9UQVRJT046IFwiRklFTERfUk9UQVRJT05cIixcclxuXHRGSUVMRF9DQUxPUklFUzogXCJGSUVMRF9DQUxPUklFU1wiLFxyXG5cdEZJRUxEX0NBTE9SSUVTX1RPVEFMOiBcIkZJRUxEX0NBTE9SSUVTX1RPVEFMXCIsXHJcblx0RklFTERfUE9XRVI6IFwiRklFTERfUE9XRVJcIixcclxuXHRGSUVMRF9IWURSQVRFOiBcIkZJRUxEX0hZRFJBVEVcIixcclxuXHRGSUVMRF9NRUFMOiBcIkZJRUxEX01FQUxcIixcclxuXHRGSUVMRF9GT09EOiBcIkZJRUxEX0ZPT0RcIixcclxuXHRGSUVMRF9OVVRSSUVOVFM6IFwiRklFTERfTlVUUklFTlRTXCIsXHJcblx0RklFTERfTlVUUklFTlRTX0ZBQ1RTOiBcIkZJRUxEX05VVFJJRU5UU19GQUNUU1wiLFxyXG5cdEZJRUxEX0FWRzogXCJGSUVMRF9BVkdcIixcclxuXHRGSUVMRF9NQVg6IFwiRklFTERfTUFYXCIsXHJcblx0RklFTERfTUlOOiBcIkZJRUxEX01JTlwiLFxyXG5cdEZJRUxEX01JTl9MQVRJVFVERTogXCJGSUVMRF9NSU5fTEFUSVRVREVcIixcclxuXHRGSUVMRF9NSU5fTE9OR0lUVURFOiBcIkZJRUxEX01JTl9MT05HSVRVREVcIixcclxuXHRGSUVMRF9NQVhfTEFUSVRVREU6IFwiRklFTERfTUFYX0xBVElUVURFXCIsXHJcblx0RklFTERfTUFYX0xPTkdJVFVERTogXCJGSUVMRF9NQVhfTE9OR0lUVURFXCIsXHJcblx0RklFTERfQVBQRUFSQU5DRTogXCJGSUVMRF9BUFBFQVJBTkNFXCIsXHJcblx0RklFTERfSU5URU5TSVRZOiBcIkZJRUxEX0lOVEVOU0lUWVwiLFxyXG5cdEZBTExfQVNMRUVQX1RJTUU6IFwiRkFMTF9BU0xFRVBfVElNRVwiLFxyXG5cdFdBS0VfVVBfVElNRTogXCJXQUtFX1VQX1RJTUVcIixcclxuXHRTTEVFUF9TQ09SRTogXCJTTEVFUF9TQ09SRVwiLFxyXG5cdFNMRUVQX0xBVEVOQ1k6IFwiU0xFRVBfTEFURU5DWVwiLFxyXG5cdEdPX0JFRF9USU1FOiBcIkdPX0JFRF9USU1FXCIsXHJcblx0U0xFRVBfRUZGSUNJRU5DWTogXCJTTEVFUF9FRkZJQ0lFTkNZXCIsXHJcblx0TElHSFRfU0xFRVBfVElNRTogXCJMSUdIVF9TTEVFUF9USU1FXCIsXHJcblx0REVFUF9TTEVFUF9USU1FOiBcIkRFRVBfU0xFRVBfVElNRVwiLFxyXG5cdERSRUFNX1RJTUU6IFwiRFJFQU1fVElNRVwiLFxyXG5cdEFXQUtFX1RJTUU6IFwiQVdBS0VfVElNRVwiLFxyXG5cdEFMTF9TTEVFUF9USU1FOiBcIkFMTF9TTEVFUF9USU1FXCIsXHJcblx0V0FLRV9VUF9DTlQ6IFwiV0FLRV9VUF9DTlRcIixcclxuXHRERUVQX1NMRUVQX1BBUlQ6IFwiREVFUF9TTEVFUF9QQVJUXCIsXHJcblx0U0xFRVBfU1RBVEU6IFwiU0xFRVBfU1RBVEVcIixcclxuXHRTQ09SRTogXCJTQ09SRVwiLFxyXG5cdEdSQURFOiBcIkdSQURFXCIsXHJcblx0TUVBU1VSRV9UWVBFOiBcIk1FQVNVUkVfVFlQRVwiLFxyXG5cdFNUUkVTU19BVkc6IFwiU1RSRVNTX0FWR1wiLFxyXG5cdFNUUkVTU19NQVg6IFwiU1RSRVNTX01BWFwiLFxyXG5cdFNUUkVTU19NSU46IFwiU1RSRVNTX01JTlwiLFxyXG5cdFNUUkVTU19MQVNUOiBcIlNUUkVTU19MQVNUXCIsXHJcblx0TUVBU1VSRV9DT1VOVDogXCJNRUFTVVJFX0NPVU5UXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkQWN0aXZpdHlSZWNvcmRSZXEge1xyXG4gIGRhdGFDb2xsZWN0b3I6IERhdGFDb2xsZWN0b3I7XHJcbiAgYWN0aXZpdHlSZWNvcmQ6IEFjdGl2aXR5UmVjb3JkO1xyXG4gIHNhbXBsZVNldDogU2FtcGxlU2V0W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCZWdpbkFjdGl2aXR5UmVjb3JkUmVxIHtcclxuICBzdGFydFRpbWU6IG51bWJlcjtcclxuICB0aW1lVW5pdDogc3RyaW5nO1xyXG4gIHRpbWVab25lOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBhY3Rpdml0eVR5cGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdldEFjdGl2aXR5UmVjb3JkUmVxIHtcclxuICBzdGFydFRpbWU6IG51bWJlcjtcclxuICBlbmRUaW1lOiBudW1iZXI7XHJcbiAgdGltZVVuaXQ6IHN0cmluZztcclxuICBkYXRhVHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlSZWNvcmQge1xyXG4gIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIGVuZFRpbWU6IG51bWJlcjtcclxuICB0aW1lVW5pdDogc3RyaW5nO1xyXG4gIHRpbWVab25lOiBzdHJpbmc7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBhY3Rpdml0eVR5cGU6IHN0cmluZztcclxuICBhY3Rpdml0eVN1bW1hcnk6IEFjdGl2aXR5U3VtbWFyeTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5U3VtbWFyeSB7XHJcbiAgcGFjZVN1bW1hcnk6IFBhY2VTdW1tYXJ5O1xyXG4gIGRhdGFTdW1tYXJ5OiBTYW1wbGVTZXRbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNhbXBsZVNldCB7XHJcbiAgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgZW5kVGltZTogbnVtYmVyO1xyXG4gIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gIGZpZWxkVmFsdWU6IHN0cmluZztcclxuICB0aW1lVW5pdDogc3RyaW5nO1xyXG4gIGRhdGFDb2xsZWN0b3I6IERhdGFDb2xsZWN0b3I7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhQ29sbGVjdG9yIHtcclxuICBkYXRhVHlwZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkYXRhR2VuZXJhdGVUeXBlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQYWNlU3VtbWFyeSB7XHJcbiAgYXZnUGFjZTogbnVtYmVyO1xyXG4gIGJlc3RQYWNlOiBudW1iZXI7XHJcbiAgYnJpdGlzaFBhY2VNYXA6IG9iamVjdDtcclxuICBicml0aXNoUGFydFRpbWVNYXA6IG9iamVjdDtcclxuICBwYXJ0VGltZU1hcDogb2JqZWN0O1xyXG4gIHBhY2VNYXA6IG9iamVjdDtcclxuICBzcG9ydEhlYWx0aFBhY2VNYXA6IG9iamVjdDtcclxufVxyXG5pbnRlcmZhY2UgU3RhcnRSZWNvcmRSZXEge1xyXG4gIGRhdGFUeXBlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIFN0b3BSZWNvcmRSZXEge1xyXG4gIGRhdGFUeXBlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIEdldFBlcm1pc3Npb25zUmVxIHtcclxuICBsYW5ndWFnZTogc3RyaW5nO1xyXG4gIGFwcElkOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIFJldm9rZVJlcSB7XHJcbiAgYXBwSWQ6IHN0cmluZztcclxuICBzY29wZXM6IHN0cmluZ1tdO1xyXG59XHJcbmludGVyZmFjZSBTY29wZUxhbmdJdGVtIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBSZWFkUmVwbHkge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhT3B0aW9uIHtcclxuICBkYXRhVHlwZTogc3RyaW5nO1xyXG4gIGhpSGVhbHRoT3B0aW9uOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZWFkUmVxIHtcclxuICBkYXRhQ29sbGVjdG9yOiBEYXRhQ29sbGVjdG9yO1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhQ29sbGVjdG9yIHtcclxuICBkYXRhVHlwZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkYXRhR2VuZXJhdGVUeXBlOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcclxuICBzdGFydFRpbWU6IG51bWJlcjtcclxuICBlbmRUaW1lOiBudW1iZXI7XHJcbiAgdGltZVVuaXQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEluc2VydFJlcSB7XHJcbiAgZGF0YUNvbGxlY3RvcjogRGF0YUNvbGxlY3RvcjtcclxuICBzYW1wbGVTZXQ6IFNhbXBsZVNldFtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUmVxIHtcclxuICBkYXRhQ29sbGVjdG9yOiBEYXRhQ29sbGVjdG9yO1xyXG4gIHNhbXBsZVNldDogU2FtcGxlU2V0W107XHJcbiAgb3B0aW9uczogT3B0aW9ucztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZVJlcSB7XHJcbiAgZGF0YUNvbGxlY3RvcjogRGF0YUNvbGxlY3RvcjtcclxuICBvcHRpb25zOiBPcHRpb25zO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkRGF0YVR5cGVSZXEge1xyXG4gIGRhdGFUeXBlTmFtZTogc3RyaW5nO1xyXG4gIGZpZWxkVmFsdWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhIdWF3ZWlJZCB7XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBpZFRva2VuPzogc3RyaW5nO1xyXG4gIHVuaW9uSWQ6IHN0cmluZztcclxuICBhdmF0YXJVcmlTdHJpbmc6IHN0cmluZztcclxuICBleHByZXNzaW9uVGltZVNlY3M6IG51bWJlcjtcclxuICBvcGVuSWQ6IHN0cmluZztcclxuICB1aWQ/OiBzdHJpbmc7XHJcbiAgY291bnRyeUNvZGU/OiBzdHJpbmc7XHJcbiAgc2VydmljZUNvdW50cnlDb2RlPzogc3RyaW5nO1xyXG4gIHN0YXR1czogbnVtYmVyO1xyXG4gIGdlbmRlcjogR2VuZGVyO1xyXG4gIGRlc2NyaWJlQ29udGVudHNJbkF1dGhIdWF3ZWlJZDogbnVtYmVyO1xyXG4gIGF1dGhvcml6ZWRTY29wZXM6IHN0cmluZ1tdO1xyXG4gIGV4dGVuc2lvblNjb3Blczogc3RyaW5nW107XHJcbiAgYXV0aG9yaXphdGlvbkNvZGU/OiBzdHJpbmc7XHJcbiAgaHVhd2VpQWNjb3VudD86IEFjY291bnQ7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZWFkRGFpbHlTdW1tYXRpb25SZXEge1xyXG4gIHN0YXJ0RGF0ZTogbnVtYmVyLFxyXG4gIGVuZERhdGU6IG51bWJlcixcclxuICBkYXRhVHlwZTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBkZWNsYXJlIGVudW0gR2VuZGVyIHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgTUFMRSA9IDAsXHJcbiAgRkVNQUxFID0gMSxcclxuICBDT05GSURFTlRJQUwgPSAyXHJcbn1cclxuIl19