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
import { asyncExec } from './utils';

export function signIn(scopes:string[]): Promise<AuthHuaweiId> {
	return asyncExec('HMSHealth', 'AuthController', ['signIn', scopes]);
}

export const ActivityRecordController = {
	addActivityRecord: function addActivityRecord(addActivityRecordReq:AddActivityRecordReq): Promise<void> {
		return asyncExec('HMSHealth', 'ActivityRecordController', ['addActivityRecord', addActivityRecordReq]);
	},
	beginActivityRecord: function beginActivityRecord(activityRecordData:BeginActivityRecordReq): Promise<void> {
		return asyncExec('HMSHealth', 'ActivityRecordController', ['beginActivityRecord', activityRecordData]);
	},
	endActivityRecord: function endActivityRecord(activityRecordId:string): Promise<ActivityRecord[]> {
		return asyncExec('HMSHealth', 'ActivityRecordController', ['endActivityRecord', activityRecordId]);
	},
	getActivityRecord: function getActivityRecord(activityRecordJSON:GetActivityRecordReq): Promise<ActivityRecord[]> {
		return asyncExec('HMSHealth', 'ActivityRecordController', ['getActivityRecord', activityRecordJSON]);
	}
}

export const AutoRecorderController = {
	startRecord: function startRecord(startRecordReq:StartRecordReq): Promise<void> {
		return asyncExec('HMSHealth', 'AutoRecorderController', ['startRecord', startRecordReq]);
	},
	stopRecord: function stopRecord(stopRecordReq:StopRecordReq): Promise<void> {
		return asyncExec('HMSHealth', 'AutoRecorderController', ['stopRecord', stopRecordReq]);
	}
}

export const ConsentsController = {
	getPermissions: function getPermissions(getPermissionsReq:GetPermissionsReq): Promise<ScopeLangItem> {
		return asyncExec('HMSHealth', 'ConsentsController', ['getPermissions', getPermissionsReq]);
	},
	revokeAll: function revokeAll(appId:string): Promise<void> {
		return asyncExec('HMSHealth', 'ConsentsController', ['revokeAll', appId]);
	},
	revoke: function revoke(revokeReq:RevokeReq): Promise<void> {
		return asyncExec('HMSHealth', 'ConsentsController', ['revoke', revokeReq]);
	}
}
export const DataController = {
	initDataController: function initDataController(jsonArray:DataOption[]): Promise<void> {
		return asyncExec('HMSHealth', 'DataController', ['initDataController', jsonArray]);
	},
	read: function read(readReq:ReadReq): Promise<ReadReply> {
		return asyncExec('HMSHealth', 'DataController', ['read', readReq]);
	},
	insert: function insert(insertReq:InsertReq): Promise<void> {
		return asyncExec('HMSHealth', 'DataController', ['insert', insertReq]);
	},
	update: function update(jsonObject:UpdateReq): Promise<void> {
		return asyncExec('HMSHealth', 'DataController', ['update', jsonObject]);
	},
	deleteData: function deleteData(jsonObject:DeleteReq): Promise<void> {
		return asyncExec('HMSHealth', 'DataController', ['deleteData', jsonObject]);
	},
	readTodaySummation: function readTodaySummation(dataTypeStr:string): Promise<SampleSet> {
		return asyncExec('HMSHealth', 'DataController', ['readTodaySummation', dataTypeStr]);
	},
	readDailySummation: function readDailySummation(jsonObject:Options): Promise<SampleSet> {
		return asyncExec('HMSHealth', 'DataController', ['readDailySummation', jsonObject]);
	},
	clearAll: function clearAll(): Promise<void> {
		return asyncExec('HMSHealth', 'DataController', ['clearAll']);
	}
}

export const SettingsController = {
	addDataType: function addDataType(jsonObject:AddDataTypeReq): Promise<void> {
		return asyncExec('HMSHealth', 'SettingsController', ['addDataType', jsonObject]);
	},
	disableHiHealth: function disableHiHealth(): Promise<void> {
		return asyncExec('HMSHealth', 'SettingsController', ['disableHiHealth']);
	},
	readDataType: function readDataType(dataTypeName:string): Promise<void> {
		return asyncExec('HMSHealth', 'SettingsController', ['readDataType', dataTypeName]);
	},
	checkHealthAppAuthorization: function checkHealthAppAuthorization(): Promise<void> {
		return asyncExec('HMSHealth', 'SettingsController', ['checkHealthAppAuthorization']);
	},
	getHealthAppAuthorization: function getHealthAppAuthorization(): Promise<void> {
		return asyncExec('HMSHealth', 'SettingsController', ['getHealthAppAuthorization']);
	}
}

export function enableLogger(): Promise<void> {
	return asyncExec('HMSHealth', 'HMSLogger', ['enableLogger']);
}
export function disableLogger(): Promise<void> {
	return asyncExec('HMSHealth', 'HMSLogger', ['disableLogger']);
}

// EVENT REGISTERATION FUNCTION FOR SINGLE FILE
export function on(event: string, callback: ()=>void){
	window.subscribeHMSEvent(event, callback);
}

export const HuaweiHiHealth = {
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
}

export const DataType = {
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
}

export const HiHealthActivities = {
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
}

export const DataGenerateType = {
	DATA_TYPE_INIT: 1,
	DATA_TYPE_RAW: 0,
	DATA_TYPE_DERIVED: 1,
	DATA_TYPE_CLEAN: 2,
	DATA_TYPE_CONVERTED: 3,
	DATA_TYPE_MERGED: 4,
	DATA_TYPE_POLYMERIZED: 5
}

export const TimeUnit = {
	HOURS: "HOURS",
	DAYS: "DAYS",
	MICROSECONDS: "MICROSECONDS",
	MILLISECONDS: "MILLISECONDS",
	MINUTES: "MINUTES",
	NANOSECONDS: "NANOSECONDS",
	SECONDS: "SECONDS"
}

export const Field = {
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
}

export interface AddActivityRecordReq {
	dataCollector:  DataCollector;
	activityRecord: ActivityRecord;
	sampleSet:      SampleSet[];
}
export interface BeginActivityRecordReq {
	startTime:    number;
	timeUnit:     string;
	timeZone:     string;
	id:           string;
	name:         string;
	description:  string;
	activityType: string;
}
export interface GetActivityRecordReq {
	startTime: number;
	endTime:   number;
	timeUnit:  string;
	dataType:  string;
}
export interface ActivityRecord {
	startTime:       number;
	endTime:         number;
	timeUnit:        string;
	timeZone:        string;
	id:              string;
	name:            string;
	description:     string;
	activityType:    string;
	activitySummary: ActivitySummary;
}
export interface ActivitySummary {
	paceSummary: PaceSummary;
	dataSummary: SampleSet[];
}
export interface SampleSet {
	startTime:     number;
	endTime:       number;
	fieldName:     string;
	fieldValue:    string;
	timeUnit:      string;
	dataCollector: DataCollector;
}

export interface DataCollector {
	dataType:         string;
	name:             string;
	dataGenerateType: number;
}

export interface PaceSummary {
	avgPace:            number;
	bestPace:           number;
	britishPaceMap:     object;
	britishPartTimeMap: object;
	partTimeMap:        object;
	paceMap:            object;
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
	dataType:       string;
	hiHealthOption: number;
}
export interface ReadReq {
	dataCollector: DataCollector;
	options:       Options;
}
export interface DataCollector {
	dataType:         string;
	name:             string;
	dataGenerateType: number;
}
export interface Options {
	startTime: number;
	endTime:   number;
	timeUnit:  string;
}
export interface InsertReq {
	dataCollector: DataCollector;
	sampleSet:     SampleSet[];
}
export interface UpdateReq {
	dataCollector: DataCollector;
	sampleSet:     SampleSet[];
	options:       Options;
}
export interface DeleteReq {
	dataCollector: DataCollector;
	options:       Options;
}
export interface AddDataTypeReq {
	dataTypeName: string;
	fieldValue:   string;
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
