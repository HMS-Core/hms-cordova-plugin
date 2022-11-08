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

import { Component } from "@angular/core";
import {
  HMSHealth,
  DataType,
  DataGenerateType,
  Field,
  HiHealthActivities,
  TimeUnit,
  ActivityRecordController,
  AutoRecorderController,
  ConsentsController,
  DataController,
  SettingsController,
} from "@hmscore/ionic-native-hms-health/ngx";
import {
  AppInfo,
  DeviceInfo,
} from "plugins/cordova-plugin-hms-health/ionic-native";

const HuaweiHiHealth = {
  HEALTHKIT_HEIGHTWEIGHT_READ:
    "https://www.huawei.com/healthkit/heightweight.read",
  HEALTHKIT_HEIGHTWEIGHT_WRITE:
    "https://www.huawei.com/healthkit/heightweight.write",
  HEALTHKIT_HEIGHTWEIGHT_BOTH:
    "https://www.huawei.com/healthkit/heightweight.both",
  HEALTHKIT_STEP_READ: "https://www.huawei.com/healthkit/step.read",
  HEALTHKIT_STEP_WRITE: "https://www.huawei.com/healthkit/step.write",
  HEALTHKIT_STEP_BOTH: "https://www.huawei.com/healthkit/step.both",
  HEALTHKIT_LOCATION_READ: "https://www.huawei.com/healthkit/location.read",
  HEALTHKIT_LOCATION_WRITE: "https://www.huawei.com/healthkit/location.write",
  HEALTHKIT_LOCATION_BOTH: "https://www.huawei.com/healthkit/location.both",
  HEALTHKIT_HEARTRATE_READ: "https://www.huawei.com/healthkit/heartrate.read",
  HEALTHKIT_HEARTRATE_WRITE: "https://www.huawei.com/healthkit/heartrate.write",
  HEALTHKIT_HEARTRATE_BOTH: "https://www.huawei.com/healthkit/heartrate.both",
  HEALTHKIT_BLOODGLUCOSE_READ:
    "https://www.huawei.com/healthkit/bloodglucose.read",
  HEALTHKIT_BLOODGLUCOSE_WRITE:
    "https://www.huawei.com/healthkit/bloodglucose.write",
  HEALTHKIT_BLOODGLUCOSE_BOTH:
    "https://www.huawei.com/healthkit/bloodglucose.both",
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
  HEALTHKIT_BLOODPRESSURE_READ:
    "https://www.huawei.com/healthkit/bloodpressure.read",
  HEALTHKIT_BLOODPRESSURE_WRITE:
    "https://www.huawei.com/healthkit/bloodpressure.write",
  HEALTHKIT_BLOODPRESSURE_BOTH:
    "https://www.huawei.com/healthkit/bloodpressure.both",
  HEALTHKIT_OXYGENSTATURATION_READ:
    "https://www.huawei.com/healthkit/oxygensaturation.read",
  HEALTHKIT_OXYGENSTATURATION_WRITE:
    "https://www.huawei.com/healthkit/oxygensaturation.write",
  HEALTHKIT_OXYGENSTATURATION_BOTH:
    "https://www.huawei.com/healthkit/oxygensaturation.both",
  HEALTHKIT_BODYTEMPERATURE_READ:
    "https://www.huawei.com/healthkit/bodytemperature.read",
  HEALTHKIT_BODYTEMPERATURE_WRITE:
    "https://www.huawei.com/healthkit/bodytemperature.write",
  HEALTHKIT_BODYTEMPERATURE_BOTH:
    "https://www.huawei.com/healthkit/bodytemperature.both",
  HEALTHKIT_REPRODUCTIVE_READ:
    "https://www.huawei.com/healthkit/reproductive.read",
  HEALTHKIT_REPRODUCTIVE_WRITE:
    "https://www.huawei.com/healthkit/reproductive.write",
  HEALTHKIT_REPRODUCTIVE_BOTH:
    "https://www.huawei.com/healthkit/reproductive.both",
  HEALTHKIT_ACTIVITY_RECORD_READ:
    "https://www.huawei.com/healthkit/activityrecord.read",
  HEALTHKIT_ACTIVITY_RECORD_WRITE:
    "https://www.huawei.com/healthkit/activityrecord.write",
  HEALTHKIT_ACTIVITY_RECORD_BOTH:
    "https://www.huawei.com/healthkit/activityrecord.both",
  HEALTHKIT_STRESS_READ: "https://www.huawei.com/healthkit/stress.read",
  HEALTHKIT_STRESS_WRITE: "https://www.huawei.com/healthkit/stress.write",
  HEALTHKIT_STRESS_BOTH: "https://www.huawei.com/healthkit/stress.both",
  HEALTHKIT_SCOPE_PREFIX: "https://www.huawei.com/healthkit",
  ALL_SCOPES: [
    "https://www.huawei.com/healthkit/heightweight.both",
    "https://www.huawei.com/healthkit/step.both",
    "https://www.huawei.com/healthkit/location.both",
    "https://www.huawei.com/healthkit/heartrate.both",
    "https://www.huawei.com/healthkit/bloodglucose.both",
    "https://www.huawei.com/healthkit/distance.both",
    "https://www.huawei.com/healthkit/speed.both",
    "https://www.huawei.com/healthkit/calories.both",
    "https://www.huawei.com/healthkit/pulmonary.both",
    "https://www.huawei.com/healthkit/strength.both",
    "https://www.huawei.com/healthkit/activity.both",
    "https://www.huawei.com/healthkit/bodyfat.both",
    "https://www.huawei.com/healthkit/sleep.both",
    "https://www.huawei.com/healthkit/nutrition.both",
    "https://www.huawei.com/healthkit/bloodpressure.both",
    "https://www.huawei.com/healthkit/oxygensaturation.both",
    "https://www.huawei.com/healthkit/bodytemperature.both",
    "https://www.huawei.com/healthkit/reproductive.both",
    "https://www.huawei.com/healthkit/activityrecord.read",
    "https://www.huawei.com/healthkit/activityrecord.write",
    "https://www.huawei.com/healthkit/activityrecord.both",
    "https://www.huawei.com/healthkit/stress.read",
    "https://www.huawei.com/healthkit/stress.write",
    "https://www.huawei.com/healthkit/stress.both",
  ],

  MAX_SCOPES: [
    "https://www.huawei.com/healthkit/heightweight.read",
    "https://www.huawei.com/healthkit/heightweight.write",
    "https://www.huawei.com/healthkit/heightweight.both",
    "https://www.huawei.com/healthkit/step.read",
    "https://www.huawei.com/healthkit/step.write",
    "https://www.huawei.com/healthkit/step.both",
    "https://www.huawei.com/healthkit/location.read",
    "https://www.huawei.com/healthkit/location.write",
    "https://www.huawei.com/healthkit/location.both",
    "https://www.huawei.com/healthkit/heartrate.read",
    "https://www.huawei.com/healthkit/heartrate.write",
    "https://www.huawei.com/healthkit/heartrate.both",
    "https://www.huawei.com/healthkit/bloodglucose.read",
    "https://www.huawei.com/healthkit/bloodglucose.write",
    "https://www.huawei.com/healthkit/bloodglucose.both",
    "https://www.huawei.com/healthkit/distance.read",
    "https://www.huawei.com/healthkit/distance.write",
    "https://www.huawei.com/healthkit/distance.both",
    "https://www.huawei.com/healthkit/speed.read",
    "https://www.huawei.com/healthkit/speed.write",
    "https://www.huawei.com/healthkit/speed.both",
    "https://www.huawei.com/healthkit/calories.read",
    "https://www.huawei.com/healthkit/calories.write",
    "https://www.huawei.com/healthkit/calories.both",
    "https://www.huawei.com/healthkit/pulmonary.read",
    "https://www.huawei.com/healthkit/pulmonary.write",
    "https://www.huawei.com/healthkit/pulmonary.both",
    "https://www.huawei.com/healthkit/strength.read",
    "https://www.huawei.com/healthkit/strength.write",
    "https://www.huawei.com/healthkit/strength.both",
    "https://www.huawei.com/healthkit/activity.read",
    "https://www.huawei.com/healthkit/activity.write",
    "https://www.huawei.com/healthkit/activity.both",
    "https://www.huawei.com/healthkit/bodyfat.read",
    "https://www.huawei.com/healthkit/bodyfat.write",
    "https://www.huawei.com/healthkit/bodyfat.both",
    "https://www.huawei.com/healthkit/sleep.read",
    "https://www.huawei.com/healthkit/sleep.write",
    "https://www.huawei.com/healthkit/sleep.both",
    "https://www.huawei.com/healthkit/nutrition.read",
    "https://www.huawei.com/healthkit/nutrition.write",
    "https://www.huawei.com/healthkit/nutrition.both",
    "https://www.huawei.com/healthkit/bloodpressure.read",
    "https://www.huawei.com/healthkit/bloodpressure.write",
    "https://www.huawei.com/healthkit/bloodpressure.both",
    "https://www.huawei.com/healthkit/oxygensaturation.read",
    "https://www.huawei.com/healthkit/oxygensaturation.write",
    "https://www.huawei.com/healthkit/oxygensaturation.both",
    "https://www.huawei.com/healthkit/bodytemperature.read",
    "https://www.huawei.com/healthkit/bodytemperature.write",
    "https://www.huawei.com/healthkit/bodytemperature.both",
    "https://www.huawei.com/healthkit/reproductive.read",
    "https://www.huawei.com/healthkit/reproductive.write",
    "https://www.huawei.com/healthkit/reproductive.both",
    "https://www.huawei.com/healthkit/activityrecord.read",
    "https://www.huawei.com/healthkit/activityrecord.write",
    "https://www.huawei.com/healthkit/activityrecord.both",
    "https://www.huawei.com/healthkit/stress.read",
    "https://www.huawei.com/healthkit/stress.write",
  ],
};

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  packageName = "com.cordova.health_with_permissions";
  constructor(private hmsHealth: HMSHealth) {}

  signIn() {
    this.hmsHealth
      .signIn(HuaweiHiHealth.ALL_SCOPES)
      .then((user) => {
        console.log("SignIn Success");
        console.log(user);
        console.log(JSON.stringify(user));
        alert("SignIn Success: " + user.displayName);
      })
      .catch((error) => {
        console.log(error);
        console.log(JSON.stringify(error));
      });
  }

  startAutoRecorder() {
    this.hmsHealth.on("samplepoint", (e) => {
      console.log(e);
      alert(JSON.stringify(e));
    });

    AutoRecorderController.startRecord({
      dataType: DataType.DT_CONTINUOUS_STEPS_TOTAL,
    })
      .then(() => {
        console.log("Start Record Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  stopAutoRecorder() {
    AutoRecorderController.stopRecord({
      dataType: DataType.DT_CONTINUOUS_STEPS_TOTAL,
    })
      .then(() => {
        console.log("Stop Record Success!");
        alert("Stop Record Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addActivityRecord() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - 3 * 60 * 60 * 1000);

    let activityRecordData = {
      dataCollector: {
        dataType: DataType.DT_CONTINUOUS_STEPS_TOTAL,
        name: "DT_CONTINUOUS_STEPS_TOTAL",
        dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
      },
      activityRecord: {
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        timeUnit: TimeUnit.MILLISECONDS,
        timeZone: "+0800",
        id: "MyBackgroundActivityRecordId",
        name: "ActivityRecordRun",
        description: "This is a test for ActivityRecord",
        activityType: HiHealthActivities.RUNNING,
        appDetailsUrl: "aa",
        appDomainName: "string",
        appVersion: "string",
        appInfo: {
          detailsUrl: "string",
          domainName: "string",
          packageName: "string",
          version: "string",
        },

        activitySummary: {
          paceSummary: {
            avgPace: 247.27626,
            bestPace: 212,
            britishPaceMap: {
              "50001893": 365.0,
            },
            britishPartTimeMap: {
              "1.0": 263.0,
            },
            partTimeMap: {
              "1.0": 456.0,
            },
            paceMap: {
              "1.0": 263,
            },
            sportHealthPaceMap: {
              "102802480": 535.0,
            },
          },
          dataSummary: [
            {
              startTime: startDate.getTime(),
              endTime: endDate.getTime(),
              fieldName: Field.FIELD_STEPS,
              fieldValue: "352",
              timeUnit: TimeUnit.MILLISECONDS,
              dataCollector: {
                dataType: DataType.DT_CONTINUOUS_STEPS_TOTAL,
                name: "DT_CONTINUOUS_STEPS_TOTAL",
                dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
              },
            },
          ],
        },
      },
    };
    ActivityRecordController.addActivityRecord(activityRecordData)
      .then(() => {
        console.log("Add Activity Record Success!");
        alert("Add Activity Record Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  beginActivityRecord() {
    let startDate = new Date();
    startDate.setTime(startDate.getTime() - 2 * 60 * 60 * 1000);

    let activityRecord = {
      startTime: startDate.getTime(),
      timeUnit: TimeUnit.MILLISECONDS,
      timeZone: "+0800",
      id: "ActivityRecordRun",
      name: "BeginActivityRecord",
      description: "This is a test for ActivityRecord",
      activityType: HiHealthActivities.RUNNING,
    };
    ActivityRecordController.beginActivityRecord(activityRecord)
      .then(() => {
        console.log("Begin Activity Record Success!");
        alert("Begin Activity Record Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  endActivityRecord() {
    let request = {
      activityRecordId: "MyBackgroundActivityRecordId",
      timeUnit: TimeUnit.MILLISECONDS,
    };

    ActivityRecordController.endActivityRecord(request)
      .then(() => {
        console.log("End Activity Record Success!");
        alert("End Activity Record Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getActivityRecord() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - 3 * 60 * 60 * 1000);

    let activityRecord = {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: TimeUnit.MILLISECONDS,
      dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
    };

    ActivityRecordController.getActivityRecord(activityRecord)
      .then((ar) => {
        console.log("Get Activity Record Success!");
        console.log(ar);
        console.log(JSON.stringify(ar));
        alert("Get Activity Record Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  createDeviceInfo() {
    let createDeviceInfoReq = {
      deviceManufacturer: "Huawei",
      modelName: "PSmart Pro",
      uuid: "test",
      deviceType: 1,
      isBleDevice: true,
      platformType: 1,
    };

    DeviceInfo.createDeviceInfo(createDeviceInfoReq)
      .then(() => {
        console.log("createDeviceInfo Success!");
        alert("createDeviceInfo Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  initDataController() {
    let dataTypes = [
      {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        hiHealthOption: 0,
      },
      {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        hiHealthOption: 1,
      },
    ];
    DataController.initDataController(dataTypes)
      .then(() => {
        console.log("initDataController Success!");
        alert("initDataController Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readLatestData() {
    let dataTypes = [
      {
        dataType: DataType.DT_INSTANTANEOUS_HEIGHT,
      },
      {
        dataType: DataType.DT_INSTANTANEOUS_BODY_WEIGHT,
      },
    ];
    DataController.readLatestData(dataTypes)
      .then((data) => {
        console.log("readLatestData Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("readLatestData Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  read() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - 3 * 60 * 60 * 1000);

    let readData = {
      dataCollector: {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        name: "DT_CONTINUOUS_STEPS_DELTA",
        dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
      },
      options: {
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        timeUnit: TimeUnit.MILLISECONDS,
      },
    };

    DataController.read(readData)
      .then((data) => {
        console.log("read data Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("read data Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  insert() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - 3 * 60 * 60 * 1000);

    let insertData = {
      dataCollector: {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        name: "DT_CONTINUOUS_STEPS_DELTA",
        dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
      },
      sampleSet: [
        {
          startTime: startDate.getTime(),
          endTime: endDate.getTime(),
          fieldName: Field.FIELD_STEPS_DELTA,
          fieldValue: "200",
          timeUnit: TimeUnit.MILLISECONDS,
          dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
          },
        },
      ],
    };

    DataController.insert(insertData)
      .then(() => {
        console.log("insert data Success!");
        alert("insert data Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  update() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - 3 * 60 * 60 * 1000);

    let updateData = {
      dataCollector: {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        name: "DT_CONTINUOUS_STEPS_DELTA",
        dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
      },
      sampleSet: [
        {
          startTime: startDate.getTime(),
          endTime: endDate.getTime(),
          fieldName: Field.FIELD_STEPS_DELTA,
          fieldValue: "200",
          timeUnit: TimeUnit.MILLISECONDS,
          dataCollector: {
            dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
            name: "DT_CONTINUOUS_STEPS_DELTA",
            dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
          },
        },
      ],
      options: {
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        timeUnit: TimeUnit.MILLISECONDS,
      },
    };
    DataController.update(updateData)
      .then(() => {
        console.log("update data Success!");
        alert("update data Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteData() {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setTime(startDate.getTime() - 3 * 60 * 60 * 1000);

    let deleteData = {
      dataCollector: {
        dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
        name: "DT_CONTINUOUS_STEPS_DELTA",
        dataGenerateType: DataGenerateType.DATA_TYPE_RAW,
      },
      options: {
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        timeUnit: TimeUnit.MILLISECONDS,
      },
    };
    DataController.deleteData(deleteData)
      .then(() => {
        console.log("delete data Success!");
        alert("delete data Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readTodaySummation() {
    DataController.readTodaySummation(DataType.DT_CONTINUOUS_STEPS_DELTA)
      .then((data) => {
        console.log("readTodaySummation data Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("readTodaySummation data Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readDailySummation() {
    let options = {
      startDate: 20210223,
      endDate: 20210225,
      dataType: DataType.DT_CONTINUOUS_STEPS_DELTA,
    };
    DataController.readDailySummation(options)
      .then((data) => {
        console.log("readDailySummation data Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("readDailySummation data Success!");
      })
      .catch((error) => {
        console.log(error);
        alert("readDailySummation data error!");
      });
  }

  clearAll() {
    DataController.clearAll()
      .then((data) => {
        console.log("clearAll data Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("clearAll data Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createApp() {
    let createApp = {
      detailsUrl: "detailsUrl",
      domainName: "domainName",
      packageName: "packageName",
      version: "version",
    };

    AppInfo.createApp(createApp)
      .then(() => {
        console.log("createApp Success!");
        alert("createApp Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDetailsUrl() {
    AppInfo.getDetailsUrl()
      .then(() => {
        console.log("getDetailsUrl Success!");
        alert("getDetailsUrl Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getDomainName() {
    AppInfo.getDomainName()
      .then(() => {
        console.log("getDomainName Success!");
        alert("getDomainName Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPackageName() {
    AppInfo.getPackageName()
      .then(() => {
        console.log("getPackageName Success!");
        alert("getPackageName Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getVersion() {
    AppInfo.getVersion()
      .then(() => {
        console.log("getVersion Success!");
        alert("getVersion Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getPermissions() {
    let options = {
      language: "en-us",
      appId: "107024979",
    };
    ConsentsController.getPermissions(options)
      .then((data) => {
        console.log("getPermissions Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("getPermissions Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  revokeAll() {
    ConsentsController.revokeAll("107024979")
      .then((data) => {
        console.log("revokeAll Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("revokeAll Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  revoke() {
    let options = {
      appId: "107024979",
      scopes: [
        HuaweiHiHealth.HEALTHKIT_STEP_READ,
        HuaweiHiHealth.HEALTHKIT_STEP_WRITE,
      ],
    };
    ConsentsController.revoke(options)
      .then((data) => {
        console.log("revoke Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("revoke Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cancelAuthorization() {
    let options = {
      appId: "107024979",
      scopes: [
        HuaweiHiHealth.HEALTHKIT_STEP_READ,
        HuaweiHiHealth.HEALTHKIT_STEP_WRITE,
      ],
    };
    ConsentsController.cancelAuthorization(options)
      .then((data) => {
        console.log("cancelAuthorization Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("cancelAuthorization Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  cancelAuthorizationAll() {
    let cancelAuthAllReq = {
      deleteData: false,
    };
    ConsentsController.cancelAuthorizationAll(cancelAuthAllReq)
      .then((data) => {
        console.log("cancelAuthorizationAll Success!");
        console.log(data);
        console.log(JSON.stringify(data));
        alert("cancelAuthorizationAll Success!");
      })
      .catch((error) => {
        console.log("cancelAuthorizationAll error" + error);
      });
  }

  addNewDataType() {
    const options = {
      dataTypeName: this.packageName + ".newExtendedDataType",
      fieldValue: Field.FIELD_STEPS_DELTA,
    };

    SettingsController.addDataType(options)
      .then((data) => {
        console.log("addNewDataType Success!");
        alert("addNewDataType Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  disableHiHealth() {
    SettingsController.disableHiHealth()
      .then(() => {
        console.log("disableHiHealth Success!");
        alert("disableHiHealth Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  readDataType() {
    let dataTypeName = this.packageName + ".newExtendedDataType";

    SettingsController.readDataType(dataTypeName)
      .then((data) => {
        console.log("readDataType Success!");
        alert("readDataType Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  checkHealthAppAuthorization() {
    SettingsController.checkHealthAppAuthorization()
      .then((data) => {
        console.log("checkHealthAppAuthorization Success!");
        alert("checkHealthAppAuthorization Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getHealthAppAuthorization() {
    SettingsController.getHealthAppAuthorization()
      .then((data) => {
        console.log("getHealthAppAuthorization Success!");
        alert("getHealthAppAuthorization Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
