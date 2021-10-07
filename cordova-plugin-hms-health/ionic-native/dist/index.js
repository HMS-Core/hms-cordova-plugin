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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMSHealthOriginal = /** @class */ (function (_super) {
    __extends(HMSHealthOriginal, _super);
    function HMSHealthOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMSHealthOriginal.prototype.signIn = function (scopes) { return cordova(this, "signIn", { "otherPromise": true }, arguments); };
    HMSHealthOriginal.prototype.enableLogger = function () { return cordova(this, "enableLogger", { "otherPromise": true }, arguments); };
    HMSHealthOriginal.prototype.disableLogger = function () { return cordova(this, "disableLogger", { "otherPromise": true }, arguments); };
    HMSHealthOriginal.prototype.on = function (event, callback) { return cordova(this, "on", { "otherPromise": true }, arguments); };
    HMSHealthOriginal.pluginName = "HMSHealth";
    HMSHealthOriginal.plugin = "cordova-plugin-hms-health";
    HMSHealthOriginal.pluginRef = "HMSHealth";
    HMSHealthOriginal.repo = "https://github.com/HMS-Core/hms-cordova-plugin";
    HMSHealthOriginal.platforms = ["Android"];
    return HMSHealthOriginal;
}(IonicNativePlugin));
var HMSHealth = new HMSHealthOriginal();
export { HMSHealth };
export var ActivityRecordController = {
    addActivityRecord: function addActivityRecord(addActivityRecordReq) {
        return HMSHealthOriginal.getPlugin().ActivityRecordController.addActivityRecord(addActivityRecordReq);
    },
    beginActivityRecord: function beginActivityRecord(activityRecordData) {
        return HMSHealthOriginal.getPlugin().ActivityRecordController.beginActivityRecord(activityRecordData);
    },
    endActivityRecord: function endActivityRecord(activityRecordId) {
        return HMSHealthOriginal.getPlugin().ActivityRecordController.endActivityRecord(activityRecordId);
    },
    getActivityRecord: function getActivityRecord(activityRecordJSON) {
        return HMSHealthOriginal.getPlugin().ActivityRecordController.getActivityRecord(activityRecordJSON);
    }
};
export var AutoRecorderController = {
    startRecord: function startRecord(startRecordReq) {
        return HMSHealthOriginal.getPlugin().AutoRecorderController.startRecord(startRecordReq);
    },
    stopRecord: function stopRecord(stopRecordReq) {
        return HMSHealthOriginal.getPlugin().AutoRecorderController.stopRecord(stopRecordReq);
    }
};
export var ConsentsController = {
    getPermissions: function getPermissions(getPermissionsReq) {
        return HMSHealthOriginal.getPlugin().ConsentsController.getPermissions(getPermissionsReq);
    },
    revokeAll: function revokeAll(appId) {
        return HMSHealthOriginal.getPlugin().ConsentsController.revokeAll(appId);
    },
    revoke: function revoke(revokeReq) {
        return HMSHealthOriginal.getPlugin().ConsentsController.revoke(revokeReq);
    }
};
export var DataController = {
    initDataController: function initDataController(jsonArray) {
        return HMSHealthOriginal.getPlugin().DataController.initDataController(jsonArray);
    },
    read: function read(readReq) {
        return HMSHealthOriginal.getPlugin().DataController.read(readReq);
    },
    insert: function insert(insertReq) {
        return HMSHealthOriginal.getPlugin().DataController.insert(insertReq);
    },
    update: function update(jsonObject) {
        return HMSHealthOriginal.getPlugin().DataController.update(jsonObject);
    },
    deleteData: function deleteData(jsonObject) {
        return HMSHealthOriginal.getPlugin().DataController.deleteData(jsonObject);
    },
    readTodaySummation: function readTodaySummation(dataTypeStr) {
        return HMSHealthOriginal.getPlugin().DataController.readTodaySummation(dataTypeStr);
    },
    readDailySummation: function readDailySummation(jsonObject) {
        return HMSHealthOriginal.getPlugin().DataController.readDailySummation(jsonObject);
    },
    clearAll: function clearAll() {
        return HMSHealthOriginal.getPlugin().DataController.clearAll();
    }
};
export var SettingsController = {
    addDataType: function addDataType(jsonObject) {
        return HMSHealthOriginal.getPlugin().SettingsController.addDataType(jsonObject);
    },
    disableHiHealth: function disableHiHealth() {
        return HMSHealthOriginal.getPlugin().SettingsController.disableHiHealth();
    },
    readDataType: function readDataType(dataTypeName) {
        return HMSHealthOriginal.getPlugin().SettingsController.readDataType(dataTypeName);
    },
    checkHealthAppAuthorization: function checkHealthAppAuthorization() {
        return HMSHealthOriginal.getPlugin().SettingsController.checkHealthAppAuthorization();
    },
    getHealthAppAuthorization: function getHealthAppAuthorization() {
        return HMSHealthOriginal.getPlugin().SettingsController.getHealthAppAuthorization();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htcy1oZWFsdGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLDhCQUF1QyxNQUFNLG9CQUFvQixDQUFDOztJQWExQyw2QkFBaUI7Ozs7SUFFOUMsMEJBQU0sYUFBQyxNQUFnQjtJQUl2QixnQ0FBWTtJQUlaLGlDQUFhO0lBSWIsc0JBQUUsYUFBQyxLQUFhLEVBQUUsUUFBMEI7Ozs7OztvQkEzQzlDO0VBNkIrQixpQkFBaUI7U0FBbkMsU0FBUztBQW1CdEIsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUc7SUFDdkMsaUJBQWlCLEVBQUUsU0FBUyxpQkFBaUIsQ0FBQyxvQkFBeUM7UUFDcEYsT0FBTyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0YsbUJBQW1CLEVBQUUsU0FBUyxtQkFBbUIsQ0FBQyxrQkFBeUM7UUFDeEYsT0FBTyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBQ0YsaUJBQWlCLEVBQUUsU0FBUyxpQkFBaUIsQ0FBQyxnQkFBdUI7UUFDbEUsT0FBTyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBQ0YsaUJBQWlCLEVBQUUsU0FBUyxpQkFBaUIsQ0FBQyxrQkFBdUM7UUFDbEYsT0FBTyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RixDQUFDO0NBQ0YsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJ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QixhQUFhLEVBQUUsZUFBZTtDQUM5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAyMDIwLTIwMjEuIEh1YXdlaSBUZWNobm9sb2dpZXMgQ28uLCBMdGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcblxyXG4gICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxyXG4gICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcblxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICAgIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICAgIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBITVNIZWFsdGhcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdITVNIZWFsdGgnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhtcy1oZWFsdGgnLFxyXG4gIHBsdWdpblJlZjogJ0hNU0hlYWx0aCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ITVMtQ29yZS9obXMtY29yZG92YS1wbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSE1TSGVhbHRoIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2lnbkluKHNjb3Blczogc3RyaW5nW10pOiBQcm9taXNlPEF1dGhIdWF3ZWlJZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGVuYWJsZUxvZ2dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBkaXNhYmxlTG9nZ2VyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzOiBhbnkpPT52b2lkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aXZpdHlSZWNvcmRDb250cm9sbGVyID0ge1xyXG5cdGFkZEFjdGl2aXR5UmVjb3JkOiBmdW5jdGlvbiBhZGRBY3Rpdml0eVJlY29yZChhZGRBY3Rpdml0eVJlY29yZFJlcTpBZGRBY3Rpdml0eVJlY29yZFJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuQWN0aXZpdHlSZWNvcmRDb250cm9sbGVyLmFkZEFjdGl2aXR5UmVjb3JkKGFkZEFjdGl2aXR5UmVjb3JkUmVxKTtcclxuICB9LFxyXG5cdGJlZ2luQWN0aXZpdHlSZWNvcmQ6IGZ1bmN0aW9uIGJlZ2luQWN0aXZpdHlSZWNvcmQoYWN0aXZpdHlSZWNvcmREYXRhOkJlZ2luQWN0aXZpdHlSZWNvcmRSZXEpOiBQcm9taXNlPHZvaWQ+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkFjdGl2aXR5UmVjb3JkQ29udHJvbGxlci5iZWdpbkFjdGl2aXR5UmVjb3JkKGFjdGl2aXR5UmVjb3JkRGF0YSk7XHJcbiAgfSxcclxuXHRlbmRBY3Rpdml0eVJlY29yZDogZnVuY3Rpb24gZW5kQWN0aXZpdHlSZWNvcmQoYWN0aXZpdHlSZWNvcmRJZDpzdHJpbmcpOiBQcm9taXNlPEFjdGl2aXR5UmVjb3JkW10+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkFjdGl2aXR5UmVjb3JkQ29udHJvbGxlci5lbmRBY3Rpdml0eVJlY29yZChhY3Rpdml0eVJlY29yZElkKTtcclxuICB9LFxyXG5cdGdldEFjdGl2aXR5UmVjb3JkOiBmdW5jdGlvbiBnZXRBY3Rpdml0eVJlY29yZChhY3Rpdml0eVJlY29yZEpTT046R2V0QWN0aXZpdHlSZWNvcmRSZXEpOiBQcm9taXNlPEFjdGl2aXR5UmVjb3JkW10+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkFjdGl2aXR5UmVjb3JkQ29udHJvbGxlci5nZXRBY3Rpdml0eVJlY29yZChhY3Rpdml0eVJlY29yZEpTT04pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dG9SZWNvcmRlckNvbnRyb2xsZXIgPSB7XHJcblx0c3RhcnRSZWNvcmQ6IGZ1bmN0aW9uIHN0YXJ0UmVjb3JkKHN0YXJ0UmVjb3JkUmVxOlN0YXJ0UmVjb3JkUmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5BdXRvUmVjb3JkZXJDb250cm9sbGVyLnN0YXJ0UmVjb3JkKHN0YXJ0UmVjb3JkUmVxKTtcclxuICB9LFxyXG5cdHN0b3BSZWNvcmQ6IGZ1bmN0aW9uIHN0b3BSZWNvcmQoc3RvcFJlY29yZFJlcTpTdG9wUmVjb3JkUmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5BdXRvUmVjb3JkZXJDb250cm9sbGVyLnN0b3BSZWNvcmQoc3RvcFJlY29yZFJlcSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29uc2VudHNDb250cm9sbGVyID0ge1xyXG5cdGdldFBlcm1pc3Npb25zOiBmdW5jdGlvbiBnZXRQZXJtaXNzaW9ucyhnZXRQZXJtaXNzaW9uc1JlcTpHZXRQZXJtaXNzaW9uc1JlcSk6IFByb21pc2U8U2NvcGVMYW5nSXRlbT4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuQ29uc2VudHNDb250cm9sbGVyLmdldFBlcm1pc3Npb25zKGdldFBlcm1pc3Npb25zUmVxKTtcclxuICB9LFxyXG5cdHJldm9rZUFsbDogZnVuY3Rpb24gcmV2b2tlQWxsKGFwcElkOnN0cmluZyk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuQ29uc2VudHNDb250cm9sbGVyLnJldm9rZUFsbChhcHBJZCk7XHJcbiAgfSxcclxuXHRyZXZva2U6IGZ1bmN0aW9uIHJldm9rZShyZXZva2VSZXE6UmV2b2tlUmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5Db25zZW50c0NvbnRyb2xsZXIucmV2b2tlKHJldm9rZVJlcSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udHJvbGxlciA9IHtcclxuXHRpbml0RGF0YUNvbnRyb2xsZXI6IGZ1bmN0aW9uIGluaXREYXRhQ29udHJvbGxlcihqc29uQXJyYXk6RGF0YU9wdGlvbltdKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5pbml0RGF0YUNvbnRyb2xsZXIoanNvbkFycmF5KTtcclxuICB9LFxyXG5cdHJlYWQ6IGZ1bmN0aW9uIHJlYWQocmVhZFJlcTpSZWFkUmVxKTogUHJvbWlzZTxSZWFkUmVwbHk+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkRhdGFDb250cm9sbGVyLnJlYWQocmVhZFJlcSk7XHJcbiAgfSxcclxuXHRpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChpbnNlcnRSZXE6SW5zZXJ0UmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5pbnNlcnQoaW5zZXJ0UmVxKTtcclxuICB9LFxyXG5cdHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGpzb25PYmplY3Q6VXBkYXRlUmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci51cGRhdGUoanNvbk9iamVjdCk7XHJcbiAgfSxcclxuXHRkZWxldGVEYXRhOiBmdW5jdGlvbiBkZWxldGVEYXRhKGpzb25PYmplY3Q6RGVsZXRlUmVxKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5kZWxldGVEYXRhKGpzb25PYmplY3QpO1xyXG4gIH0sXHJcblx0cmVhZFRvZGF5U3VtbWF0aW9uOiBmdW5jdGlvbiByZWFkVG9kYXlTdW1tYXRpb24oZGF0YVR5cGVTdHI6c3RyaW5nKTogUHJvbWlzZTxTYW1wbGVTZXQ+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLkRhdGFDb250cm9sbGVyLnJlYWRUb2RheVN1bW1hdGlvbihkYXRhVHlwZVN0cik7XHJcbiAgfSxcclxuXHRyZWFkRGFpbHlTdW1tYXRpb246IGZ1bmN0aW9uIHJlYWREYWlseVN1bW1hdGlvbihqc29uT2JqZWN0OlJlYWREYWlseVN1bW1hdGlvblJlcSk6IFByb21pc2U8U2FtcGxlU2V0PiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5yZWFkRGFpbHlTdW1tYXRpb24oanNvbk9iamVjdCk7XHJcbiAgfSxcclxuXHRjbGVhckFsbDogZnVuY3Rpb24gY2xlYXJBbGwoKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5EYXRhQ29udHJvbGxlci5jbGVhckFsbCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzQ29udHJvbGxlciA9IHtcclxuXHRhZGREYXRhVHlwZTogZnVuY3Rpb24gYWRkRGF0YVR5cGUoanNvbk9iamVjdDpBZGREYXRhVHlwZVJlcSk6IFByb21pc2U8dm9pZD4geyBcclxuICAgIHJldHVybiBITVNIZWFsdGguZ2V0UGx1Z2luKCkuU2V0dGluZ3NDb250cm9sbGVyLmFkZERhdGFUeXBlKGpzb25PYmplY3QpO1xyXG4gIH0sXHJcblx0ZGlzYWJsZUhpSGVhbHRoOiBmdW5jdGlvbiBkaXNhYmxlSGlIZWFsdGgoKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5TZXR0aW5nc0NvbnRyb2xsZXIuZGlzYWJsZUhpSGVhbHRoKCk7XHJcbiAgfSxcclxuXHRyZWFkRGF0YVR5cGU6IGZ1bmN0aW9uIHJlYWREYXRhVHlwZShkYXRhVHlwZU5hbWU6c3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5TZXR0aW5nc0NvbnRyb2xsZXIucmVhZERhdGFUeXBlKGRhdGFUeXBlTmFtZSk7XHJcbiAgfSxcclxuXHRjaGVja0hlYWx0aEFwcEF1dGhvcml6YXRpb246IGZ1bmN0aW9uIGNoZWNrSGVhbHRoQXBwQXV0aG9yaXphdGlvbigpOiBQcm9taXNlPHZvaWQ+IHsgXHJcbiAgICByZXR1cm4gSE1TSGVhbHRoLmdldFBsdWdpbigpLlNldHRpbmdzQ29udHJvbGxlci5jaGVja0hlYWx0aEFwcEF1dGhvcml6YXRpb24oKTtcclxuICB9LFxyXG5cdGdldEhlYWx0aEFwcEF1dGhvcml6YXRpb246IGZ1bmN0aW9uIGdldEhlYWx0aEFwcEF1dGhvcml6YXRpb24oKTogUHJvbWlzZTx2b2lkPiB7IFxyXG4gICAgcmV0dXJuIEhNU0hlYWx0aC5nZXRQbHVnaW4oKS5TZXR0aW5nc0NvbnRyb2xsZXIuZ2V0SGVhbHRoQXBwQXV0aG9yaXphdGlvbigpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIElOVEVSRkFDRVNcclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBIdWF3ZWlIaUhlYWx0aCA9IHtcclxuXHRIRUFMVEhLSVRfSEVJR0hUV0VJR0hUX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVpZ2h0d2VpZ2h0LnJlYWRcIixcclxuXHRIRUFMVEhLSVRfSEVJR0hUV0VJR0hUX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlaWdodHdlaWdodC53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9IRUlHSFRXRUlHSFRfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWlnaHR3ZWlnaHQuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9TVEVQX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX1NURVBfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9TVEVQX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX0xPQ0FUSU9OX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbG9jYXRpb24ucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9MT0NBVElPTl9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9sb2NhdGlvbi53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9MT0NBVElPTl9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2xvY2F0aW9uLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfSEVBUlRSQVRFX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVhcnRyYXRlLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfSEVBUlRSQVRFX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlYXJ0cmF0ZS53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9IRUFSVFJBVEVfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9oZWFydHJhdGUuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9CTE9PREdMVUNPU0VfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZGdsdWNvc2UucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9CTE9PREdMVUNPU0VfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RnbHVjb3NlLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0JMT09ER0xVQ09TRV9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kZ2x1Y29zZS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX0RJU1RBTkNFX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvZGlzdGFuY2UucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9ESVNUQU5DRV9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9kaXN0YW5jZS53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9ESVNUQU5DRV9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Rpc3RhbmNlLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfU1BFRURfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zcGVlZC5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX1NQRUVEX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NwZWVkLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX1NQRUVEX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3BlZWQuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9DQUxPUklFU19SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2NhbG9yaWVzLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQ0FMT1JJRVNfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvY2Fsb3JpZXMud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfQ0FMT1JJRVNfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9jYWxvcmllcy5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX1BVTE1PTkFSWV9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3B1bG1vbmFyeS5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX1BVTE1PTkFSWV9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9wdWxtb25hcnkud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfUFVMTU9OQVJZX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcHVsbW9uYXJ5LmJvdGhcIixcclxuXHRIRUFMVEhLSVRfU1RSRU5HVEhfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlbmd0aC5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX1NUUkVOR1RIX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVuZ3RoLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX1NUUkVOR1RIX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZW5ndGguYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9BQ1RJVklUWV9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5LnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQUNUSVZJVFlfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfQUNUSVZJVFlfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX0JPRFlGQVRfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5ZmF0LnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQk9EWUZBVF9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5ZmF0LndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0JPRFlGQVRfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5ZmF0LmJvdGhcIixcclxuXHRIRUFMVEhLSVRfU0xFRVBfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zbGVlcC5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX1NMRUVQX1dSSVRFOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NsZWVwLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX1NMRUVQX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc2xlZXAuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9OVVRSSVRJT05fUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9udXRyaXRpb24ucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9OVVRSSVRJT05fV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbnV0cml0aW9uLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX05VVFJJVElPTl9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L251dHJpdGlvbi5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX0JMT09EUFJFU1NVUkVfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZHByZXNzdXJlLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfQkxPT0RQUkVTU1VSRV9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZHByZXNzdXJlLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0JMT09EUFJFU1NVUkVfQk9USDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZHByZXNzdXJlLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfT1hZR0VOU1RBVFVSQVRJT05fUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9veHlnZW5zYXR1cmF0aW9uLnJlYWRcIixcclxuXHRIRUFMVEhLSVRfT1hZR0VOU1RBVFVSQVRJT05fV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvb3h5Z2Vuc2F0dXJhdGlvbi53cml0ZVwiLFxyXG5cdEhFQUxUSEtJVF9PWFlHRU5TVEFUVVJBVElPTl9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L294eWdlbnNhdHVyYXRpb24uYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9CT0RZVEVNUEVSQVRVUkVfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5dGVtcGVyYXR1cmUucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9CT0RZVEVNUEVSQVRVUkVfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keXRlbXBlcmF0dXJlLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX0JPRFlURU1QRVJBVFVSRV9CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHl0ZW1wZXJhdHVyZS5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX1JFUFJPRFVDVElWRV9SRUFEOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3JlcHJvZHVjdGl2ZS5yZWFkXCIsXHJcblx0SEVBTFRIS0lUX1JFUFJPRFVDVElWRV9XUklURTogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9yZXByb2R1Y3RpdmUud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfUkVQUk9EVUNUSVZFX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcmVwcm9kdWN0aXZlLmJvdGhcIixcclxuXHRIRUFMVEhLSVRfQUNUSVZJVFlfUkVDT1JEX1JFQUQ6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHlyZWNvcmQucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9BQ1RJVklUWV9SRUNPUkRfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHlyZWNvcmQud3JpdGVcIixcclxuXHRIRUFMVEhLSVRfQUNUSVZJVFlfUkVDT1JEX0JPVEg6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHlyZWNvcmQuYm90aFwiLFxyXG5cdEhFQUxUSEtJVF9TVFJFU1NfUkVBRDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3MucmVhZFwiLFxyXG5cdEhFQUxUSEtJVF9TVFJFU1NfV1JJVEU6IFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RyZXNzLndyaXRlXCIsXHJcblx0SEVBTFRIS0lUX1NUUkVTU19CT1RIOiBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVzcy5ib3RoXCIsXHJcblx0SEVBTFRIS0lUX1NDT1BFX1BSRUZJWDogXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdFwiLFxyXG5cdEFMTF9TQ09QRVM6IFtcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlaWdodHdlaWdodC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbG9jYXRpb24uYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlYXJ0cmF0ZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RnbHVjb3NlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9kaXN0YW5jZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3BlZWQuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2NhbG9yaWVzLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9wdWxtb25hcnkuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVuZ3RoLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keWZhdC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc2xlZXAuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L251dHJpdGlvbi5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RwcmVzc3VyZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvb3h5Z2Vuc2F0dXJhdGlvbi5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keXRlbXBlcmF0dXJlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9yZXByb2R1Y3RpdmUuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eXJlY29yZC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3MucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVzcy53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVzcy5ib3RoXCJdLFxyXG5cdE1BWF9TQ09QRVM6IFtcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlaWdodHdlaWdodC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVpZ2h0d2VpZ2h0LndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVpZ2h0d2VpZ2h0LmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdGVwLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdGVwLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvc3RlcC5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbG9jYXRpb24ucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2xvY2F0aW9uLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvbG9jYXRpb24uYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2hlYXJ0cmF0ZS5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVhcnRyYXRlLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvaGVhcnRyYXRlLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ibG9vZGdsdWNvc2UucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kZ2x1Y29zZS53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kZ2x1Y29zZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvZGlzdGFuY2UucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Rpc3RhbmNlLndyaXRlXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvZGlzdGFuY2UuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NwZWVkLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zcGVlZC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NwZWVkLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9jYWxvcmllcy5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvY2Fsb3JpZXMud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9jYWxvcmllcy5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcHVsbW9uYXJ5LnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9wdWxtb25hcnkud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9wdWxtb25hcnkuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVuZ3RoLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlbmd0aC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVuZ3RoLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eS5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keWZhdC5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYm9keWZhdC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHlmYXQuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NsZWVwLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zbGVlcC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3NsZWVwLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9udXRyaXRpb24ucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L251dHJpdGlvbi53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L251dHJpdGlvbi5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RwcmVzc3VyZS5yZWFkXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYmxvb2RwcmVzc3VyZS53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2Jsb29kcHJlc3N1cmUuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L294eWdlbnNhdHVyYXRpb24ucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L294eWdlbnNhdHVyYXRpb24ud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9veHlnZW5zYXR1cmF0aW9uLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9ib2R5dGVtcGVyYXR1cmUucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHl0ZW1wZXJhdHVyZS53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2JvZHl0ZW1wZXJhdHVyZS5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvcmVwcm9kdWN0aXZlLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9yZXByb2R1Y3RpdmUud3JpdGVcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9yZXByb2R1Y3RpdmUuYm90aFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLnJlYWRcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9hY3Rpdml0eXJlY29yZC53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L2FjdGl2aXR5cmVjb3JkLmJvdGhcIiwgXCJodHRwczovL3d3dy5odWF3ZWkuY29tL2hlYWx0aGtpdC9zdHJlc3MucmVhZFwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVzcy53cml0ZVwiLCBcImh0dHBzOi8vd3d3Lmh1YXdlaS5jb20vaGVhbHRoa2l0L3N0cmVzcy5ib3RoXCIsIFwiaHR0cHM6Ly93d3cuaHVhd2VpLmNvbS9oZWFsdGhraXQvYWN0aXZpdHkuYm90aFwiXVx0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhVHlwZSA9IHtcclxuXHREVF9VTlVTRURfREFUQV9UWVBFOiBcIkRUX1VOVVNFRF9EQVRBX1RZUEVcIixcclxuXHREVF9DT05USU5VT1VTX1NURVBTX0RFTFRBOiBcIkRUX0NPTlRJTlVPVVNfU1RFUFNfREVMVEFcIixcclxuXHREVF9DT05USU5VT1VTX1NURVBTX1RPVEFMOiBcIkRUX0NPTlRJTlVPVVNfU1RFUFNfVE9UQUxcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX1NURVBTX1JBVEU6IFwiRFRfSU5TVEFOVEFORU9VU19TVEVQU19SQVRFXCIsXHJcblx0RFRfQ09OVElOVU9VU19TVEVQU19SQVRFX1NUQVRJU1RJQzogXCJEVF9DT05USU5VT1VTX1NURVBTX1JBVEVfU1RBVElTVElDXCIsXHJcblx0RFRfQ09OVElOVU9VU19BQ1RJVklUWV9TRUdNRU5UOiBcIkRUX0NPTlRJTlVPVVNfQUNUSVZJVFlfU0VHTUVOVFwiLFxyXG5cdERUX0NPTlRJTlVPVVNfQ0FMT1JJRVNfQ09OU1VNRUQ6IFwiRFRfQ09OVElOVU9VU19DQUxPUklFU19DT05TVU1FRFwiLFxyXG5cdERUX0NPTlRJTlVPVVNfQ0FMT1JJRVNfQlVSTlQ6IFwiRFRfQ09OVElOVU9VU19DQUxPUklFU19CVVJOVFwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfQ0FMT1JJRVNfQk1SOiBcIkRUX0lOU1RBTlRBTkVPVVNfQ0FMT1JJRVNfQk1SXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19QT1dFUl9TQU1QTEU6IFwiRFRfSU5TVEFOVEFORU9VU19QT1dFUl9TQU1QTEVcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0FDVElWSVRZX1NBTVBMRTogXCJEVF9JTlNUQU5UQU5FT1VTX0FDVElWSVRZX1NBTVBMRVwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfQUNUSVZJVFlfU0FNUExFUzogXCJEVF9JTlNUQU5UQU5FT1VTX0FDVElWSVRZX1NBTVBMRVNcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0hFQVJUX1JBVEU6IFwiRFRfSU5TVEFOVEFORU9VU19IRUFSVF9SQVRFXCIsXHJcblx0RFRfSU5TVEFOVEFORU9VU19MT0NBVElPTl9TQU1QTEU6IFwiRFRfSU5TVEFOVEFORU9VU19MT0NBVElPTl9TQU1QTEVcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0xPQ0FUSU9OX1RSQUNFOiBcIkRUX0lOU1RBTlRBTkVPVVNfTE9DQVRJT05fVFJBQ0VcIixcclxuXHREVF9DT05USU5VT1VTX0RJU1RBTkNFX0RFTFRBOiBcIkRUX0NPTlRJTlVPVVNfRElTVEFOQ0VfREVMVEFcIixcclxuXHREVF9DT05USU5VT1VTX0RJU1RBTkNFX1RPVEFMOiBcIkRUX0NPTlRJTlVPVVNfRElTVEFOQ0VfVE9UQUxcIixcclxuXHREVF9DT05USU5VT1VTX0NBTE9SSUVTX0JVUk5UX1RPVEFMOiBcIkRUX0NPTlRJTlVPVVNfQ0FMT1JJRVNfQlVSTlRfVE9UQUxcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX1NQRUVEOiBcIkRUX0lOU1RBTlRBTkVPVVNfU1BFRURcIixcclxuXHREVF9DT05USU5VT1VTX0JJS0lOR19XSEVFTF9ST1RBVElPTl9UT1RBTDogXCJEVF9DT05USU5VT1VTX0JJS0lOR19XSEVFTF9ST1RBVElPTl9UT1RBTFwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfQklLSU5HX1dIRUVMX1JPVEFUSU9OOiBcIkRUX0lOU1RBTlRBTkVPVVNfQklLSU5HX1dIRUVMX1JPVEFUSU9OXCIsXHJcblx0RFRfQ09OVElOVU9VU19CSUtJTkdfUEVEQUxJTkdfVE9UQUw6IFwiRFRfQ09OVElOVU9VU19CSUtJTkdfUEVEQUxJTkdfVE9UQUxcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0JJS0lOR19QRURBTElOR19SQVRFOiBcIkRUX0lOU1RBTlRBTkVPVVNfQklLSU5HX1BFREFMSU5HX1JBVEVcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX0hFSUdIVDogXCJEVF9JTlNUQU5UQU5FT1VTX0hFSUdIVFwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfQk9EWV9XRUlHSFQ6IFwiRFRfSU5TVEFOVEFORU9VU19CT0RZX1dFSUdIVFwiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfQk9EWV9GQVRfUkFURTogXCJEVF9JTlNUQU5UQU5FT1VTX0JPRFlfRkFUX1JBVEVcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX05VVFJJVElPTl9GQUNUUzogXCJEVF9JTlNUQU5UQU5FT1VTX05VVFJJVElPTl9GQUNUU1wiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfSFlEUkFURTogXCJEVF9JTlNUQU5UQU5FT1VTX0hZRFJBVEVcIixcclxuXHREVF9DT05USU5VT1VTX1dPUktPVVRfRFVSQVRJT046IFwiRFRfQ09OVElOVU9VU19XT1JLT1VUX0RVUkFUSU9OXCIsXHJcblx0RFRfQ09OVElOVU9VU19FWEVSQ0lTRV9JTlRFTlNJVFk6IFwiRFRfQ09OVElOVU9VU19FWEVSQ0lTRV9JTlRFTlNJVFlcIixcclxuXHREVF9TVEFUSVNUSUNTX1NMRUVQOiBcIkRUX1NUQVRJU1RJQ1NfU0xFRVBcIixcclxuXHREVF9DT05USU5VT1VTX1NMRUVQOiBcIkRUX0NPTlRJTlVPVVNfU0xFRVBcIixcclxuXHREVF9JTlNUQU5UQU5FT1VTX1NUUkVTUzogXCJEVF9JTlNUQU5UQU5FT1VTX1NUUkVTU1wiLFxyXG5cdERUX0lOU1RBTlRBTkVPVVNfU1RSRVNTX1NUQVRJU1RJQ1M6IFwiRFRfSU5TVEFOVEFORU9VU19TVFJFU1NfU1RBVElTVElDU1wiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19XT1JLT1VUX0RVUkFUSU9OOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19XT1JLT1VUX0RVUkFUSU9OXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX0FDVElWSVRZX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX0FDVElWSVRZX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfQ0FMT1JJRVNfQk1SX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX0NBTE9SSUVTX0JNUl9TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9TVEVQX0NPVU5UX0RFTFRBOiBcIlBPTFlNRVJJWkVfU1RFUF9DT1VOVF9ERUxUQVwiLFxyXG5cdFBPTFlNRVJJWkVfRElTVEFOQ0VfREVMVEE6IFwiUE9MWU1FUklaRV9ESVNUQU5DRV9ERUxUQVwiLFxyXG5cdFBPTFlNRVJJWkVfQ0FMT1JJRVNfQ09OU1VNRUQ6IFwiUE9MWU1FUklaRV9DQUxPUklFU19DT05TVU1FRFwiLFxyXG5cdFBPTFlNRVJJWkVfQ0FMT1JJRVNfRVhQRU5ERUQ6IFwiUE9MWU1FUklaRV9DQUxPUklFU19FWFBFTkRFRFwiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19FWEVSQ0lTRV9JTlRFTlNJVFlfU1RBVElTVElDUzogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfRVhFUkNJU0VfSU5URU5TSVRZX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfSEVBUlRfUkFURV9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19IRUFSVF9SQVRFX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfTE9DQVRJT05fQk9VTkRBUllfUkFOR0U6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX0xPQ0FUSU9OX0JPVU5EQVJZX1JBTkdFXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX1BPV0VSX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX1BPV0VSX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0NPTlRJTlVPVVNfU1BFRURfU1RBVElTVElDUzogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfU1BFRURfU1RBVElTVElDU1wiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19CT0RZX0ZBVF9SQVRFX1NUQVRJU1RJQ1M6IFwiUE9MWU1FUklaRV9DT05USU5VT1VTX0JPRFlfRkFUX1JBVEVfU1RBVElTVElDU1wiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19CT0RZX1dFSUdIVF9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19CT0RZX1dFSUdIVF9TVEFUSVNUSUNTXCIsXHJcblx0UE9MWU1FUklaRV9DT05USU5VT1VTX0hFSUdIVF9TVEFUSVNUSUNTOiBcIlBPTFlNRVJJWkVfQ09OVElOVU9VU19IRUlHSFRfU1RBVElTVElDU1wiLFxyXG5cdFBPTFlNRVJJWkVfQ09OVElOVU9VU19OVVRSSVRJT05fRkFDVFNfU1RBVElTVElDUzogXCJQT0xZTUVSSVpFX0NPTlRJTlVPVVNfTlVUUklUSU9OX0ZBQ1RTX1NUQVRJU1RJQ1NcIixcclxuXHRQT0xZTUVSSVpFX0hZRFJBVElPTjogXCJQT0xZTUVSSVpFX0hZRFJBVElPTlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIaUhlYWx0aEFjdGl2aXRpZXMgPSB7XHJcblx0TUlNRV9UWVBFX1BSRUZJWDogXCJ2bmQuaHVhd2VpLmhpaGVhbHRoLmFjdGl2aXR5L1wiLFxyXG5cdEVYVFJBX0FDVElPTl9TVEFUVVM6IFwiYWN0aW9uU3RhdHVzXCIsXHJcblx0U1RBVFVTX0FDVElPTl9TVEFSVDogXCJTdGFydGVkQWN0aW9uU3RhdHVzXCIsXHJcblx0U1RBVFVTX0FDVElPTl9FTkQ6IFwiRW5kZWRBY3Rpb25TdGF0dXNcIixcclxuXHRBRVJPQklDUzogXCJhZXJvYmljc1wiLFxyXG5cdEFSQ0hFUlk6IFwiYXJjaGVyeVwiLFxyXG5cdEJBRE1JTlRPTjogXCJiYWRtaW50b25cIixcclxuXHRCQVNFQkFMTDogXCJiYXNlYmFsbFwiLFxyXG5cdEJBU0tFVEJBTEw6IFwiYmFza2V0YmFsbFwiLFxyXG5cdEJJQVRITE9OOiBcImJpYXRobG9uXCIsXHJcblx0Qk9YSU5HOiBcImJveGluZ1wiLFxyXG5cdENBTElTVEhFTklDUzogXCJjYWxpc3RoZW5pY3NcIixcclxuXHRDSVJDVUlUX1RSQUlOSU5HOiBcImNpcmN1aXRfdHJhaW5pbmdcIixcclxuXHRDUklDS0VUOiBcImNyaWNrZXRcIixcclxuXHRDUk9TU0ZJVDogXCJjcm9zc2ZpdFwiLFxyXG5cdENVUkxJTkc6IFwiY3VybGluZ1wiLFxyXG5cdENZQ0xJTkc6IFwiY3ljbGluZ1wiLFxyXG5cdENZQ0xJTkdfSU5ET09SOiBcImN5Y2xpbmdfaW5kb29yXCIsXHJcblx0REFOQ0lORzogXCJkYW5jaW5nXCIsXHJcblx0RElWSU5HOiBcImRpdmluZ1wiLFxyXG5cdEVMRVZBVE9SOiBcImVsZXZhdG9yXCIsXHJcblx0RUxMSVBUSUNBTDogXCJlbGxpcHRpY2FsXCIsXHJcblx0RVJHT01FVEVSOiBcImVyZ29tZXRlclwiLFxyXG5cdEVTQ0FMQVRPUjogXCJlc2NhbGF0b3JcIixcclxuXHRGRU5DSU5HOiBcImZlbmNpbmdcIixcclxuXHRGT09UQkFMTF9BTUVSSUNBTjogXCJmb290YmFsbC5hbWVyaWNhblwiLFxyXG5cdEZPT1RCQUxMX0FVU1RSQUxJQU46IFwiZm9vdGJhbGwuYXVzdHJhbGlhblwiLFxyXG5cdEZPT1RCQUxMX1NPQ0NFUjogXCJmb290YmFsbC5zb2NjZXJcIixcclxuXHRGTFlJTkdfRElTQzogXCJmbHlpbmdfZGlzY1wiLFxyXG5cdEdBUkRFTklORzogXCJnYXJkZW5pbmdcIixcclxuXHRHT0xGOiBcImdvbGZcIixcclxuXHRHWU1OQVNUSUNTOiBcImd5bW5hc3RpY3NcIixcclxuXHRIQU5EQkFMTDogXCJoYW5kYmFsbFwiLFxyXG5cdEhJSVQ6IFwiaW50ZXJ2YWxfdHJhaW5pbmcuaGlnaF9pbnRlbnNpdHlcIixcclxuXHRISUtJTkc6IFwiaGlraW5nXCIsXHJcblx0SE9DS0VZOiBcImhvY2tleVwiLFxyXG5cdEhPUlNFX1JJRElORzogXCJob3JzZV9yaWRpbmdcIixcclxuXHRIT1VTRVdPUks6IFwiaG91c2V3b3JrXCIsXHJcblx0SUNFX1NLQVRJTkc6IFwiaWNlX3NrYXRpbmdcIixcclxuXHRJTl9WRUhJQ0xFOiBcImluX3ZlaGljbGVcIixcclxuXHRJTlRFUlZBTF9UUkFJTklORzogXCJpbnRlcnZhbF90cmFpbmluZ1wiLFxyXG5cdEpVTVBJTkdfUk9QRTogXCJqdW1waW5nX3JvcGVcIixcclxuXHRLQVlBS0lORzogXCJrYXlha2luZ1wiLFxyXG5cdEtFVFRMRUJFTExfVFJBSU5JTkc6IFwia2V0dGxlYmVsbF90cmFpbmluZ1wiLFxyXG5cdEtJQ0tCT1hJTkc6IFwia2lja2JveGluZ1wiLFxyXG5cdEtJVEVTVVJGSU5HOiBcImtpdGVzdXJmaW5nXCIsXHJcblx0TUFSVElBTF9BUlRTOiBcIm1hcnRpYWxfYXJ0c1wiLFxyXG5cdE1FRElUQVRJT046IFwibWVkaXRhdGlvblwiLFxyXG5cdE1JWEVEX01BUlRJQUxfQVJUUzogXCJtYXJ0aWFsX2FydHMubWl4ZWRcIixcclxuXHRPTl9GT09UOiBcIm9uX2Zvb3RcIixcclxuXHRPVEhFUjogXCJvdGhlclwiLFxyXG5cdFA5MFg6IFwicDkweFwiLFxyXG5cdFBBUkFHTElESU5HOiBcInBhcmFnbGlkaW5nXCIsXHJcblx0UElMQVRFUzogXCJwaWxhdGVzXCIsXHJcblx0UE9MTzogXCJwb2xvXCIsXHJcblx0UkFDUVVFVEJBTEw6IFwicmFjcXVldGJhbGxcIixcclxuXHRST0NLX0NMSU1CSU5HOiBcInJvY2tfY2xpbWJpbmdcIixcclxuXHRST1dJTkc6IFwicm93aW5nXCIsXHJcblx0Uk9XSU5HX01BQ0hJTkU6IFwicm93aW5nLm1hY2hpbmVcIixcclxuXHRSVUdCWTogXCJydWdieVwiLFxyXG5cdFJVTk5JTkc6IFwicnVubmluZ1wiLFxyXG5cdFJVTk5JTkdfTUFDSElORTogXCJydW5uaW5nLm1hY2hpbmVcIixcclxuXHRTQUlMSU5HOiBcInNhaWxpbmdcIixcclxuXHRTQ1VCQV9ESVZJTkc6IFwic2N1YmFfZGl2aW5nXCIsXHJcblx0U0NPT1RFUl9SSURJTkc6IFwic2Nvb3Rlcl9yaWRpbmdcIixcclxuXHRTS0FURUJPQVJESU5HOiBcInNrYXRlYm9hcmRpbmdcIixcclxuXHRTS0FUSU5HOiBcInNrYXRpbmdcIixcclxuXHRTS0lJTkc6IFwic2tpaW5nXCIsXHJcblx0U0xFRERJTkc6IFwic2xlZGRpbmdcIixcclxuXHRTTEVFUDogXCJzbGVlcFwiLFxyXG5cdFNMRUVQX0xJR0hUOiBcInNsZWVwLmxpZ2h0XCIsXHJcblx0U0xFRVBfREVFUDogXCJzbGVlcC5kZWVwXCIsXHJcblx0U0xFRVBfUkVNOiBcInNsZWVwLnJlbVwiLFxyXG5cdFNMRUVQX0FXQUtFOiBcInNsZWVwLmF3YWtlXCIsXHJcblx0U05PV0JPQVJESU5HOiBcInNub3dib2FyZGluZ1wiLFxyXG5cdFNOT1dNT0JJTEU6IFwic25vd21vYmlsZVwiLFxyXG5cdFNOT1dTSE9FSU5HOiBcInNub3dzaG9laW5nXCIsXHJcblx0U09GVEJBTEw6IFwic29mdGJhbGxcIixcclxuXHRTUVVBU0g6IFwic3F1YXNoXCIsXHJcblx0U1RBSVJfQ0xJTUJJTkc6IFwic3RhaXJfY2xpbWJpbmdcIixcclxuXHRTVEFJUl9DTElNQklOR19NQUNISU5FOiBcInN0YWlyX2NsaW1iaW5nLm1hY2hpbmVcIixcclxuXHRTVEFORFVQX1BBRERMRUJPQVJESU5HOiBcInN0YW5kdXBfcGFkZGxlYm9hcmRpbmdcIixcclxuXHRTVElMTDogXCJzdGlsbFwiLFxyXG5cdFNUUkVOR1RIX1RSQUlOSU5HOiBcInN0cmVuZ3RoX3RyYWluaW5nXCIsXHJcblx0U1VSRklORzogXCJzdXJmaW5nXCIsXHJcblx0U1dJTU1JTkc6IFwic3dpbW1pbmdcIixcclxuXHRTV0lNTUlOR19QT09MOiBcInN3aW1taW5nLnBvb2xcIixcclxuXHRTV0lNTUlOR19PUEVOX1dBVEVSOiBcInN3aW1taW5nLm9wZW5fd2F0ZXJcIixcclxuXHRUQUJMRV9URU5OSVM6IFwidGFibGVfdGVubmlzXCIsXHJcblx0VEVBTV9TUE9SVFM6IFwidGVhbV9zcG9ydHNcIixcclxuXHRURU5OSVM6IFwidGVubmlzXCIsXHJcblx0VElMVElORzogXCJ0aWx0aW5nXCIsXHJcblx0VU5LTk9XTjogXCJ1bmtub3duXCIsXHJcblx0Vk9MTEVZQkFMTDogXCJ2b2xsZXliYWxsXCIsXHJcblx0V0FLRUJPQVJESU5HOiBcIndha2Vib2FyZGluZ1wiLFxyXG5cdFdBTEtJTkc6IFwid2Fsa2luZ1wiLFxyXG5cdFdBVEVSX1BPTE86IFwid2F0ZXJfcG9sb1wiLFxyXG5cdFdFSUdIVExJRlRJTkc6IFwid2VpZ2h0bGlmdGluZ1wiLFxyXG5cdFdIRUVMQ0hBSVI6IFwid2hlZWxjaGFpclwiLFxyXG5cdFdJTkRTVVJGSU5HOiBcIndpbmRzdXJmaW5nXCIsXHJcblx0WU9HQTogXCJ5b2dhXCIsXHJcblx0WlVNQkE6IFwienVtYmFcIixcclxuXHREQVJUUzogXCJkYXJ0c1wiLFxyXG5cdEJJTExJQVJEUzogXCJiaWxsaWFyZHNcIixcclxuXHRTSFVUVExFQ09DSzogXCJzaHV0dGxlY29ja1wiLFxyXG5cdEJPV0xJTkc6IFwiYm93bGluZ1wiLFxyXG5cdEdST1VQX0NBTElTVEhFTklDUzogXCJncm91cF9jYWxpc3RoZW5pY3NcIixcclxuXHRUVUdfT0ZfV0FSOiBcInR1Z19vZl93YXJcIixcclxuXHRCRUFDSF9TT0NDRVI6IFwiYmVhY2hfc29jY2VyXCIsXHJcblx0QkVBQ0hfVk9MTEVZQkFMTDogXCJiZWFjaF92b2xsZXliYWxsXCIsXHJcblx0R0FURUJBTEw6IFwiZ2F0ZWJhbGxcIixcclxuXHRTRVBBS1RBS1JBVzogXCJzZXBha3Rha3Jhd1wiLFxyXG5cdERPREdFX0JBTEw6IFwiZG9kZ2VfYmFsbFwiLFxyXG5cdFRSRUFETUlMTDogXCJ0cmVhZG1pbGxcIixcclxuXHRTUElOTklORzogXCJzcGlubmluZ1wiLFxyXG5cdFNUUk9MTF9NQUNISU5FOiBcInN0cm9sbF9tYWNoaW5lXCIsXHJcblx0Q1JPU1NfRklUOiBcImNyb3NzX2ZpdFwiLFxyXG5cdEZVTkNUSU9OQUxfVFJBSU5JTkc6IFwiZnVuY3Rpb25hbF90cmFpbmluZ1wiLFxyXG5cdFBIWVNJQ0FMX1RSQUlOSU5HOiBcInBoeXNpY2FsX3RyYWluaW5nXCIsXHJcblx0QkVMTFlfREFOQ0U6IFwiYmVsbHlfZGFuY2VcIixcclxuXHRKQVpaOiBcImphenpcIixcclxuXHRMQVRJTjogXCJsYXRpblwiLFxyXG5cdEJBTExFVDogXCJiYWxsZXRcIixcclxuXHRDT1JFX1RSQUlOSU5HOiBcImNvcmVfdHJhaW5pbmdcIixcclxuXHRIT1JJWk9OVEFMX0JBUjogXCJob3Jpem9udGFsX2JhclwiLFxyXG5cdFBBUkFMTEVMX0JBUlM6IFwicGFyYWxsZWxfYmFyc1wiLFxyXG5cdEhJUF9IT1A6IFwiaGlwX2hvcFwiLFxyXG5cdFNRVUFSRV9EQU5DRTogXCJzcXVhcmVfZGFuY2VcIixcclxuXHRIVV9MQV9IT09QOiBcImh1X2xhX2hvb3BcIixcclxuXHRCTVg6IFwiYm14XCIsXHJcblx0T1JJRU5URUVSSU5HOiBcIm9yaWVudGVlcmluZ1wiLFxyXG5cdElORE9PUl9XQUxLOiBcImluZG9vcl93YWxrXCIsXHJcblx0SU5ET09SX1JVTk5JTkc6IFwiaW5kb29yX3J1bm5pbmdcIixcclxuXHRNT1VOVElOX0NMSU1CSU5HOiBcIm1vdW50aW5fY2xpbWJpbmdcIixcclxuXHRDUk9TU19DT1VOVFJZX1JBQ0U6IFwiY3Jvc3NfY291bnRyeV9yYWNlXCIsXHJcblx0Uk9MTEVSX1NLQVRJTkc6IFwicm9sbGVyX3NrYXR0aW5nXCIsXHJcblx0SFVOVElORzogXCJodW50aW5nXCIsXHJcblx0RkxZX0FfS0lURTogXCJmbHlfYV9raXRlXCIsXHJcblx0U1dJTkc6IFwic3dpbmdcIixcclxuXHRPQlNUQUNMRV9SQUNFOiBcIm9ic3RhY2xlX3JhY2VcIixcclxuXHRCVU5HRUVfSlVNUElORzogXCJidW5nZWVfanVtcGluZ1wiLFxyXG5cdFBBUktPVVI6IFwicGFya291clwiLFxyXG5cdFBBUkFDSFVURTogXCJwYXJhY2h1dGVcIixcclxuXHRSQUNJTkdfQ0FSOiBcInJhY2luZ19jYXJcIixcclxuXHRUUklBVEhMT05TOiBcInRyaWF0aGxvbnNcIixcclxuXHRJQ0VfSE9DS0VZOiBcImljZV9ob2NrZXlcIixcclxuXHRDUk9TU0NPVU5UUllfU0tJSU5HOiBcImNyb3NzY291bnRyeV9za2lpbmdcIixcclxuXHRTTEVEOiBcInNsZWRcIixcclxuXHRGSVNISU5HOiBcImZpc2hpbmdcIixcclxuXHREUklGVElORzogXCJkcmlmdGluZ1wiLFxyXG5cdERSQUdPTl9CT0FUOiBcImRyYWdvbl9ib2F0XCIsXHJcblx0TU9UT1JCT0FUOiBcIm1vdG9yYm9hdFwiLFxyXG5cdFNVUDogXCJzdXBcIixcclxuXHRGUkVFX1NQQVJSSU5HOiBcImZyZWVfc3BhcnJpbmdcIixcclxuXHRLQVJBVEU6IFwia2FyYXRlXCIsXHJcblx0Qk9EWV9DT01CQVQ6IFwiYm9keV9jb21iYXRcIixcclxuXHRLRU5ETzogXCJrZW5kb1wiLFxyXG5cdFRBSV9DSEk6IFwidGFpX2NoaVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhR2VuZXJhdGVUeXBlID0ge1xyXG5cdERBVEFfVFlQRV9JTklUOiAxLFxyXG5cdERBVEFfVFlQRV9SQVc6IDAsXHJcblx0REFUQV9UWVBFX0RFUklWRUQ6IDEsXHJcblx0REFUQV9UWVBFX0NMRUFOOiAyLFxyXG5cdERBVEFfVFlQRV9DT05WRVJURUQ6IDMsXHJcblx0REFUQV9UWVBFX01FUkdFRDogNCxcclxuXHREQVRBX1RZUEVfUE9MWU1FUklaRUQ6IDVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVVbml0ID0ge1xyXG5cdEhPVVJTOiBcIkhPVVJTXCIsXHJcblx0REFZUzogXCJEQVlTXCIsXHJcblx0TUlDUk9TRUNPTkRTOiBcIk1JQ1JPU0VDT05EU1wiLFxyXG5cdE1JTExJU0VDT05EUzogXCJNSUxMSVNFQ09ORFNcIixcclxuXHRNSU5VVEVTOiBcIk1JTlVURVNcIixcclxuXHROQU5PU0VDT05EUzogXCJOQU5PU0VDT05EU1wiLFxyXG5cdFNFQ09ORFM6IFwiU0VDT05EU1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9IHtcclxuXHRGT1JNQVRfSU5UMzI6IDEsXHJcblx0Rk9STUFUX0ZMT0FUOiAyLFxyXG5cdEZPUk1BVF9TVFJJTkc6IDMsXHJcblx0Rk9STUFUX01BUDogNCxcclxuXHRGT1JNQVRfTE9ORzogNSxcclxuXHRGT1JNQVRfRE9VQkxFOiAyLFxyXG5cdE1FQUxfVU5LTk9XTjogMCxcclxuXHRNRUFMX0JSRUFLRkFTVDogMSxcclxuXHRNRUFMX0xVTkNIOiAyLFxyXG5cdE1FQUxfRElOTkVSOiAzLFxyXG5cdE1FQUxfU05BQ0s6IDQsXHJcblx0VFlQRV9PRl9SRVNJU1RBTkNFX1VOS05PV046IDAsXHJcblx0VFlQRV9PRl9SRVNJU1RBTkNFX0JBUkJFTEw6IDEsXHJcblx0VFlQRV9PRl9SRVNJU1RBTkNFX0NBQkxFOiAyLFxyXG5cdFRZUEVfT0ZfUkVTSVNUQU5DRV9EVU1CQkVMTDogMyxcclxuXHRUWVBFX09GX1JFU0lTVEFOQ0VfS0VUVExFQkVMTDogNCxcclxuXHRUWVBFX09GX1JFU0lTVEFOQ0VfTUFDSElORTogNSxcclxuXHRUWVBFX09GX1JFU0lTVEFOQ0VfQk9EWTogNixcclxuXHROVVRSSUVOVFNfRkFDVFNfQ0FMT1JJRVM6IFwiTlVUUklFTlRTX0ZBQ1RTX0NBTE9SSUVTXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX1RPVEFMX0ZBVDogXCJOVVRSSUVOVFNfRkFDVFNfVE9UQUxfRkFUXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX1NBVFVSQVRFRF9GQVQ6IFwiTlVUUklFTlRTX0ZBQ1RTX1NBVFVSQVRFRF9GQVRcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfVU5TQVRVUkFURURfRkFUOiBcIk5VVFJJRU5UU19GQUNUU19VTlNBVFVSQVRFRF9GQVRcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfUE9MWVVOU0FUVVJBVEVEX0ZBVDogXCJOVVRSSUVOVFNfRkFDVFNfUE9MWVVOU0FUVVJBVEVEX0ZBVFwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19NT05PVU5TQVRVUkFURURfRkFUOiBcIk5VVFJJRU5UU19GQUNUU19NT05PVU5TQVRVUkFURURfRkFUXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX1RSQU5TX0ZBVDogXCJOVVRSSUVOVFNfRkFDVFNfVFJBTlNfRkFUXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX0NIT0xFU1RFUk9MOiBcIk5VVFJJRU5UU19GQUNUU19DSE9MRVNURVJPTFwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19TT0RJVU06IFwiTlVUUklFTlRTX0ZBQ1RTX1NPRElVTVwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19QT1RBU1NJVU06IFwiTlVUUklFTlRTX0ZBQ1RTX1BPVEFTU0lVTVwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19UT1RBTF9DQVJCUzogXCJOVVRSSUVOVFNfRkFDVFNfVE9UQUxfQ0FSQlNcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfRElFVEFSWV9GSUJFUjogXCJOVVRSSUVOVFNfRkFDVFNfRElFVEFSWV9GSUJFUlwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19TVUdBUjogXCJOVVRSSUVOVFNfRkFDVFNfU1VHQVJcIixcclxuXHROVVRSSUVOVFNfRkFDVFNfUFJPVEVJTjogXCJOVVRSSUVOVFNfRkFDVFNfUFJPVEVJTlwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19WSVRBTUlOX0E6IFwiTlVUUklFTlRTX0ZBQ1RTX1ZJVEFNSU5fQVwiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19WSVRBTUlOX0M6IFwiTlVUUklFTlRTX0ZBQ1RTX1ZJVEFNSU5fQ1wiLFxyXG5cdE5VVFJJRU5UU19GQUNUU19DQUxDSVVNOiBcIk5VVFJJRU5UU19GQUNUU19DQUxDSVVNXCIsXHJcblx0TlVUUklFTlRTX0ZBQ1RTX0lST046IFwiTlVUUklFTlRTX0ZBQ1RTX0lST05cIixcclxuXHRGSUVMRF9QUkVDSVNJT046IFwiRklFTERfUFJFQ0lTSU9OXCIsXHJcblx0RklFTERfQUxUSVRVREU6IFwiRklFTERfQUxUSVRVREVcIixcclxuXHRGSUVMRF9UWVBFX09GX0FDVElWSVRZOiBcIkZJRUxEX1RZUEVfT0ZfQUNUSVZJVFlcIixcclxuXHRGSUVMRF9QT1NTSUJJTElUWV9PRl9BQ1RJVklUWTogXCJGSUVMRF9QT1NTSUJJTElUWV9PRl9BQ1RJVklUWVwiLFxyXG5cdEZJRUxEX0JQTTogXCJGSUVMRF9CUE1cIixcclxuXHRGSUVMRF9QT1NTSUJJTElUWTogXCJGSUVMRF9QT1NTSUJJTElUWVwiLFxyXG5cdEZJRUxEX1NQQU46IFwiRklFTERfU1BBTlwiLFxyXG5cdEZJRUxEX0RJU1RBTkNFOiBcIkZJRUxEX0RJU1RBTkNFXCIsXHJcblx0RklFTERfRElTVEFOQ0VfREVMVEE6IFwiRklFTERfRElTVEFOQ0VfREVMVEFcIixcclxuXHRGSUVMRF9IRUlHSFQ6IFwiRklFTERfSEVJR0hUXCIsXHJcblx0RklFTERfU1RFUFNfREVMVEE6IFwiRklFTERfU1RFUFNfREVMVEFcIixcclxuXHRGSUVMRF9TVEVQUzogXCJGSUVMRF9TVEVQU1wiLFxyXG5cdEZJRUxEX1NURVBfTEVOR1RIOiBcIkZJRUxEX1NURVBfTEVOR1RIXCIsXHJcblx0RklFTERfTEFUSVRVREU6IFwiRklFTERfTEFUSVRVREVcIixcclxuXHRGSUVMRF9MT05HSVRVREU6IFwiRklFTERfTE9OR0lUVURFXCIsXHJcblx0RklFTERfQk9EWV9XRUlHSFQ6IFwiRklFTERfQk9EWV9XRUlHSFRcIixcclxuXHRGSUVMRF9CTUk6IFwiRklFTERfQk1JXCIsXHJcblx0RklFTERfQk9EWV9GQVQ6IFwiRklFTERfQk9EWV9GQVRcIixcclxuXHRGSUVMRF9CT0RZX0ZBVF9SQVRFOiBcIkZJRUxEX0JPRFlfRkFUX1JBVEVcIixcclxuXHRGSUVMRF9NVVNDTEVfTUFTUzogXCJGSUVMRF9NVVNDTEVfTUFTU1wiLFxyXG5cdEZJRUxEX0JBU0FMX01FVEFCT0xJU006IFwiRklFTERfQkFTQUxfTUVUQUJPTElTTVwiLFxyXG5cdEZJRUxEX01PSVNUVVJFOiBcIkZJRUxEX01PSVNUVVJFXCIsXHJcblx0RklFTERfTU9JU1RVUkVfUkFURTogXCJGSUVMRF9NT0lTVFVSRV9SQVRFXCIsXHJcblx0RklFTERfVklTQ0VSQUxfRkFUX0xFVkVMOiBcIkZJRUxEX1ZJU0NFUkFMX0ZBVF9MRVZFTFwiLFxyXG5cdEZJRUxEX0JPTkVfU0FMVDogXCJGSUVMRF9CT05FX1NBTFRcIixcclxuXHRGSUVMRF9QUk9URUlOX1JBVEU6IFwiRklFTERfUFJPVEVJTl9SQVRFXCIsXHJcblx0RklFTERfQk9EWV9BR0U6IFwiRklFTERfQk9EWV9BR0VcIixcclxuXHRGSUVMRF9CT0RZX1NDT1JFOiBcIkZJRUxEX0JPRFlfU0NPUkVcIixcclxuXHRGSUVMRF9TS0VMRVRBTF9NVVNDTEVMX01BU1M6IFwiRklFTERfU0tFTEVUQUxfTVVTQ0xFTF9NQVNTXCIsXHJcblx0RklFTERfSU1QRURBTkNFOiBcIkZJRUxEX0lNUEVEQU5DRVwiLFxyXG5cdEZJRUxEX0NJUkNVTUZFUkVOQ0U6IFwiRklFTERfQ0lSQ1VNRkVSRU5DRVwiLFxyXG5cdEZJRUxEX1NQRUVEOiBcIkZJRUxEX1NQRUVEXCIsXHJcblx0RklFTERfUlBNOiBcIkZJRUxEX1JQTVwiLFxyXG5cdEZJRUxEX1NURVBfUkFURTogXCJGSUVMRF9TVEVQX1JBVEVcIixcclxuXHRGSUVMRF9ST1RBVElPTjogXCJGSUVMRF9ST1RBVElPTlwiLFxyXG5cdEZJRUxEX0NBTE9SSUVTOiBcIkZJRUxEX0NBTE9SSUVTXCIsXHJcblx0RklFTERfQ0FMT1JJRVNfVE9UQUw6IFwiRklFTERfQ0FMT1JJRVNfVE9UQUxcIixcclxuXHRGSUVMRF9QT1dFUjogXCJGSUVMRF9QT1dFUlwiLFxyXG5cdEZJRUxEX0hZRFJBVEU6IFwiRklFTERfSFlEUkFURVwiLFxyXG5cdEZJRUxEX01FQUw6IFwiRklFTERfTUVBTFwiLFxyXG5cdEZJRUxEX0ZPT0Q6IFwiRklFTERfRk9PRFwiLFxyXG5cdEZJRUxEX05VVFJJRU5UUzogXCJGSUVMRF9OVVRSSUVOVFNcIixcclxuXHRGSUVMRF9OVVRSSUVOVFNfRkFDVFM6IFwiRklFTERfTlVUUklFTlRTX0ZBQ1RTXCIsXHJcblx0RklFTERfQVZHOiBcIkZJRUxEX0FWR1wiLFxyXG5cdEZJRUxEX01BWDogXCJGSUVMRF9NQVhcIixcclxuXHRGSUVMRF9NSU46IFwiRklFTERfTUlOXCIsXHJcblx0RklFTERfTUlOX0xBVElUVURFOiBcIkZJRUxEX01JTl9MQVRJVFVERVwiLFxyXG5cdEZJRUxEX01JTl9MT05HSVRVREU6IFwiRklFTERfTUlOX0xPTkdJVFVERVwiLFxyXG5cdEZJRUxEX01BWF9MQVRJVFVERTogXCJGSUVMRF9NQVhfTEFUSVRVREVcIixcclxuXHRGSUVMRF9NQVhfTE9OR0lUVURFOiBcIkZJRUxEX01BWF9MT05HSVRVREVcIixcclxuXHRGSUVMRF9BUFBFQVJBTkNFOiBcIkZJRUxEX0FQUEVBUkFOQ0VcIixcclxuXHRGSUVMRF9JTlRFTlNJVFk6IFwiRklFTERfSU5URU5TSVRZXCIsXHJcblx0RkFMTF9BU0xFRVBfVElNRTogXCJGQUxMX0FTTEVFUF9USU1FXCIsXHJcblx0V0FLRV9VUF9USU1FOiBcIldBS0VfVVBfVElNRVwiLFxyXG5cdFNMRUVQX1NDT1JFOiBcIlNMRUVQX1NDT1JFXCIsXHJcblx0U0xFRVBfTEFURU5DWTogXCJTTEVFUF9MQVRFTkNZXCIsXHJcblx0R09fQkVEX1RJTUU6IFwiR09fQkVEX1RJTUVcIixcclxuXHRTTEVFUF9FRkZJQ0lFTkNZOiBcIlNMRUVQX0VGRklDSUVOQ1lcIixcclxuXHRMSUdIVF9TTEVFUF9USU1FOiBcIkxJR0hUX1NMRUVQX1RJTUVcIixcclxuXHRERUVQX1NMRUVQX1RJTUU6IFwiREVFUF9TTEVFUF9USU1FXCIsXHJcblx0RFJFQU1fVElNRTogXCJEUkVBTV9USU1FXCIsXHJcblx0QVdBS0VfVElNRTogXCJBV0FLRV9USU1FXCIsXHJcblx0QUxMX1NMRUVQX1RJTUU6IFwiQUxMX1NMRUVQX1RJTUVcIixcclxuXHRXQUtFX1VQX0NOVDogXCJXQUtFX1VQX0NOVFwiLFxyXG5cdERFRVBfU0xFRVBfUEFSVDogXCJERUVQX1NMRUVQX1BBUlRcIixcclxuXHRTTEVFUF9TVEFURTogXCJTTEVFUF9TVEFURVwiLFxyXG5cdFNDT1JFOiBcIlNDT1JFXCIsXHJcblx0R1JBREU6IFwiR1JBREVcIixcclxuXHRNRUFTVVJFX1RZUEU6IFwiTUVBU1VSRV9UWVBFXCIsXHJcblx0U1RSRVNTX0FWRzogXCJTVFJFU1NfQVZHXCIsXHJcblx0U1RSRVNTX01BWDogXCJTVFJFU1NfTUFYXCIsXHJcblx0U1RSRVNTX01JTjogXCJTVFJFU1NfTUlOXCIsXHJcblx0U1RSRVNTX0xBU1Q6IFwiU1RSRVNTX0xBU1RcIixcclxuXHRNRUFTVVJFX0NPVU5UOiBcIk1FQVNVUkVfQ09VTlRcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRBY3Rpdml0eVJlY29yZFJlcSB7XHJcbiAgZGF0YUNvbGxlY3RvcjogRGF0YUNvbGxlY3RvcjtcclxuICBhY3Rpdml0eVJlY29yZDogQWN0aXZpdHlSZWNvcmQ7XHJcbiAgc2FtcGxlU2V0OiBTYW1wbGVTZXRbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJlZ2luQWN0aXZpdHlSZWNvcmRSZXEge1xyXG4gIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIHRpbWVVbml0OiBzdHJpbmc7XHJcbiAgdGltZVpvbmU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFjdGl2aXR5VHlwZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0QWN0aXZpdHlSZWNvcmRSZXEge1xyXG4gIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIGVuZFRpbWU6IG51bWJlcjtcclxuICB0aW1lVW5pdDogc3RyaW5nO1xyXG4gIGRhdGFUeXBlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eVJlY29yZCB7XHJcbiAgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgZW5kVGltZTogbnVtYmVyO1xyXG4gIHRpbWVVbml0OiBzdHJpbmc7XHJcbiAgdGltZVpvbmU6IHN0cmluZztcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFjdGl2aXR5VHlwZTogc3RyaW5nO1xyXG4gIGFjdGl2aXR5U3VtbWFyeTogQWN0aXZpdHlTdW1tYXJ5O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlTdW1tYXJ5IHtcclxuICBwYWNlU3VtbWFyeTogUGFjZVN1bW1hcnk7XHJcbiAgZGF0YVN1bW1hcnk6IFNhbXBsZVNldFtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2FtcGxlU2V0IHtcclxuICBzdGFydFRpbWU6IG51bWJlcjtcclxuICBlbmRUaW1lOiBudW1iZXI7XHJcbiAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgZmllbGRWYWx1ZTogc3RyaW5nO1xyXG4gIHRpbWVVbml0OiBzdHJpbmc7XHJcbiAgZGF0YUNvbGxlY3RvcjogRGF0YUNvbGxlY3RvcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFDb2xsZWN0b3Ige1xyXG4gIGRhdGFUeXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGFHZW5lcmF0ZVR5cGU6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFBhY2VTdW1tYXJ5IHtcclxuICBhdmdQYWNlOiBudW1iZXI7XHJcbiAgYmVzdFBhY2U6IG51bWJlcjtcclxuICBicml0aXNoUGFjZU1hcDogb2JqZWN0O1xyXG4gIGJyaXRpc2hQYXJ0VGltZU1hcDogb2JqZWN0O1xyXG4gIHBhcnRUaW1lTWFwOiBvYmplY3Q7XHJcbiAgcGFjZU1hcDogb2JqZWN0O1xyXG4gIHNwb3J0SGVhbHRoUGFjZU1hcDogb2JqZWN0O1xyXG59XHJcbmludGVyZmFjZSBTdGFydFJlY29yZFJlcSB7XHJcbiAgZGF0YVR5cGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU3RvcFJlY29yZFJlcSB7XHJcbiAgZGF0YVR5cGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgR2V0UGVybWlzc2lvbnNSZXEge1xyXG4gIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgYXBwSWQ6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgUmV2b2tlUmVxIHtcclxuICBhcHBJZDogc3RyaW5nO1xyXG4gIHNjb3Blczogc3RyaW5nW107XHJcbn1cclxuaW50ZXJmYWNlIFNjb3BlTGFuZ0l0ZW0ge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIFJlYWRSZXBseSB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFPcHRpb24ge1xyXG4gIGRhdGFUeXBlOiBzdHJpbmc7XHJcbiAgaGlIZWFsdGhPcHRpb246IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlYWRSZXEge1xyXG4gIGRhdGFDb2xsZWN0b3I6IERhdGFDb2xsZWN0b3I7XHJcbiAgb3B0aW9uczogT3B0aW9ucztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFDb2xsZWN0b3Ige1xyXG4gIGRhdGFUeXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRhdGFHZW5lcmF0ZVR5cGU6IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xyXG4gIHN0YXJ0VGltZTogbnVtYmVyO1xyXG4gIGVuZFRpbWU6IG51bWJlcjtcclxuICB0aW1lVW5pdDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5zZXJ0UmVxIHtcclxuICBkYXRhQ29sbGVjdG9yOiBEYXRhQ29sbGVjdG9yO1xyXG4gIHNhbXBsZVNldDogU2FtcGxlU2V0W107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVSZXEge1xyXG4gIGRhdGFDb2xsZWN0b3I6IERhdGFDb2xsZWN0b3I7XHJcbiAgc2FtcGxlU2V0OiBTYW1wbGVTZXRbXTtcclxuICBvcHRpb25zOiBPcHRpb25zO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlUmVxIHtcclxuICBkYXRhQ29sbGVjdG9yOiBEYXRhQ29sbGVjdG9yO1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBBZGREYXRhVHlwZVJlcSB7XHJcbiAgZGF0YVR5cGVOYW1lOiBzdHJpbmc7XHJcbiAgZmllbGRWYWx1ZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aEh1YXdlaUlkIHtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGlkVG9rZW4/OiBzdHJpbmc7XHJcbiAgdW5pb25JZDogc3RyaW5nO1xyXG4gIGF2YXRhclVyaVN0cmluZzogc3RyaW5nO1xyXG4gIGV4cHJlc3Npb25UaW1lU2VjczogbnVtYmVyO1xyXG4gIG9wZW5JZDogc3RyaW5nO1xyXG4gIHVpZD86IHN0cmluZztcclxuICBjb3VudHJ5Q29kZT86IHN0cmluZztcclxuICBzZXJ2aWNlQ291bnRyeUNvZGU/OiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgZ2VuZGVyOiBHZW5kZXI7XHJcbiAgZGVzY3JpYmVDb250ZW50c0luQXV0aEh1YXdlaUlkOiBudW1iZXI7XHJcbiAgYXV0aG9yaXplZFNjb3Blczogc3RyaW5nW107XHJcbiAgZXh0ZW5zaW9uU2NvcGVzOiBzdHJpbmdbXTtcclxuICBhdXRob3JpemF0aW9uQ29kZT86IHN0cmluZztcclxuICBodWF3ZWlBY2NvdW50PzogQWNjb3VudDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJlYWREYWlseVN1bW1hdGlvblJlcSB7XHJcbiAgc3RhcnREYXRlOiBudW1iZXIsXHJcbiAgZW5kRGF0ZTogbnVtYmVyLFxyXG4gIGRhdGFUeXBlOiBzdHJpbmdcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGRlY2xhcmUgZW51bSBHZW5kZXIge1xyXG4gIFVOS05PV04gPSAtMSxcclxuICBNQUxFID0gMCxcclxuICBGRU1BTEUgPSAxLFxyXG4gIENPTkZJREVOVElBTCA9IDJcclxufVxyXG4iXX0=