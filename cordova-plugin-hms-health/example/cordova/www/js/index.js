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

document.addEventListener('deviceready', onDeviceReady, false);

const packageName = 'com.cordova.health_with_permissions';

async function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  function initEventHandler() {
    if (window.hmsEvents != null)
      return;
    window.hmsEvents = {};
    window.runHMSEvent = (eventName, data) => {
      if (window.hmsEvents.hasOwnProperty(eventName))
        window.hmsEvents[eventName](data);
    };
    window.subscribeHMSEvent = (eventName, handler) => {
      window.hmsEvents[eventName] = handler;
    };
  }
  initEventHandler();


  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  document.getElementById('deviceready').classList.add('ready');

  let signInButton = document.getElementById('signIn');
  signInButton.onclick = function () {
    signIn()
  };

  let createDeviceInfoButton = document.getElementById('createDeviceInfo');
  createDeviceInfoButton.onclick = function () {
    createDeviceInfo()
  };

  let createAppButton = document.getElementById('createApp');
  createAppButton.onclick = function () {
    createApp()
  };

  let getDetailsUrlButton = document.getElementById('getDetailsUrl');
  getDetailsUrlButton.onclick = function () {
    getDetailsUrl()
  };

  let getDomainNameButton = document.getElementById('getDomainName');
  getDomainNameButton.onclick = function () {
    getDomainName()
  };

  let getPackageNameButton = document.getElementById('getPackageName');
  getPackageNameButton.onclick = function () {
    getPackageName()
  };

  let getVersionButton = document.getElementById('getVersion');
  getVersionButton.onclick = function () {
    getVersion()
  };


  let addActivityRecordButton = document.getElementById('addActivityRecord');
  addActivityRecordButton.onclick = function () {
    addActivityRecord()
  };
  let beginActivityRecordButton = document.getElementById('beginActivityRecord');
  beginActivityRecordButton.onclick = function () {
    beginActivityRecord()
  };

  let beginBackgroundActivityRecordButton = document.getElementById('beginBackgroundActivityRecord');
  beginBackgroundActivityRecordButton.onclick = function () {
    beginBackgroundActivityRecord()
  };

  let endActivityRecordButton = document.getElementById('endActivityRecord');
  endActivityRecordButton.onclick = function () {
    endActivityRecord()
  };
  let endBackgroundActivityRecordButton = document.getElementById('endBackgroundActivityRecord');
  endBackgroundActivityRecordButton.onclick = function () {
    endBackgroundActivityRecord()
  };

  let getActivityRecordButton = document.getElementById('getActivityRecord');
  getActivityRecordButton.onclick = function () {
    getActivityRecord()
  };

  let deleteActivityRecordButton = document.getElementById('deleteActivityRecord');
  deleteActivityRecordButton.onclick = function () {
    deleteActivityRecord()
  };

  let startRecordButton = document.getElementById('startRecord');
  startRecordButton.onclick = function () {
    startAutoRecorder()
  };
  let stopRecordButton = document.getElementById('stopRecord');
  stopRecordButton.onclick = function () {
    stopAutoRecorder()
  };
  let getPermissionsButton = document.getElementById('getPermissions');
  getPermissionsButton.onclick = function () {
    getPermissions()
  };
  let revokeButton = document.getElementById('revoke');
  revokeButton.onclick = function () {
    revoke()
  };
  let revokeAllButton = document.getElementById('revokeAll');
  revokeAllButton.onclick = function () {
    revokeAll()
  };

  let cancelAuthorizationButton = document.getElementById('cancelAuthorization');
  cancelAuthorizationButton.onclick = function () {
    cancelAuthorization()
  };

  let cancelAuthorizationAllButton = document.getElementById('cancelAuthorizationAll');
  cancelAuthorizationAllButton.onclick = function () {
    cancelAuthorizationAll()
  };



  let initDataControllerButton = document.getElementById('initDataController');
  initDataControllerButton.onclick = function () {
    initDataController()
  };
  let readButton = document.getElementById('read');
  readButton.onclick = function () {
    read()
  };
  let insertButton = document.getElementById('insert');
  insertButton.onclick = function () {
    insert()
  };
  let updateButton = document.getElementById('update');
  updateButton.onclick = function () {
    update()
  };
  let deleteButton = document.getElementById('delete');
  deleteButton.onclick = function () {
    deleteData()
  };
  let readDailySummationButton = document.getElementById('readDailySummation');
  readDailySummationButton.onclick = function () {
    readDailySummation()
  };
  let readTodaySummationButton = document.getElementById('readTodaySummation');
  readTodaySummationButton.onclick = function () {
    readTodaySummation()
  };
  let clearAllButton = document.getElementById('clearAll');
  clearAllButton.onclick = function () {
    clearAll()
  };

  let readLatestDataButton = document.getElementById('readLatestData');
  readLatestDataButton.onclick = function () {
    readLatestData()
  };


  let addDataTypeButton = document.getElementById('addDataType');
  addDataTypeButton.onclick = function () {
    addDataType()
  };
  let readDataTypeButton = document.getElementById('readDataType');
  readDataTypeButton.onclick = function () {
    readDataType()
  };
  let disableHiHealthButton = document.getElementById('disableHiHealth');
  disableHiHealthButton.onclick = function () {
    disableHiHealth()
  };
  let getHealthAppAuthorizationButton = document.getElementById('getHealthAppAuthorization');
  getHealthAppAuthorizationButton.onclick = function () {
    getHealthAppAuthorization()
  };

  let checkHealthAppAuthorizationButton = document.getElementById('checkHealthAppAuthorization');
  checkHealthAppAuthorizationButton.onclick = function () {
    checkHealthAppAuthorization()
  };

  let requestAuthButton = document.getElementById('requestAuth');
  requestAuthButton.onclick = function () {
    requestAuth()
  };

  let addHealthRecordButton = document.getElementById('addHealthRecord');
  addHealthRecordButton.onclick = function () {
    addHealthRecord()
  };

  let deleteHealthRecordButton = document.getElementById('deleteHealthRecord');
  deleteHealthRecordButton.onclick = function () {
    deleteHealthRecord()
  };

  let getHealthRecordButton = document.getElementById('getHealthRecord');
  getHealthRecordButton.onclick = function () {
    getHealthRecord()
  };

  let updateHealthRecordButton = document.getElementById('updateHealthRecord');
  updateHealthRecordButton.onclick = function () {
    updateHealthRecord()
  };

}


function signIn() {
  HMSHealth.signIn(HMSHealth.HuaweiHiHealth.MAX_SCOPES).then(user => {
    console.log("SignIn Success");
    console.log(JSON.stringify(user));
    alert("SignIn Success: " + user.displayName)
  }).catch(error => {
    console.log(error);
    alert("SignIn Error: " + error)
  })
}

// Device Info

function createDeviceInfo() {
  let request = {
    deviceManufacturer: "Huawei",
    modelName: "PSmart Pro",
    uuid: "test",
    deviceType: 1,
    isBleDevice: true,
    platformType: 1,
  }

  HMSHealth.DeviceInfo.createDeviceInfo(request).then(url => {
    console.log("createDeviceInfo Success");
    console.log(JSON.stringify(url));
    alert("createDeviceInfo Success : " + JSON.stringify(url))
  }).catch(error => {
    console.log(error);
    alert("createDeviceInfo error : " + error)
  })

}

// App Info

function createApp() {
  let request = {
    detailsUrl: "detailsUrl",
    domainName: "domainName",
    packageName: "packageName",
    version: "version"
  }

  HMSHealth.AppInfo.createApp(request).then(url => {
    console.log("createApp Success");
    console.log(JSON.stringify(url));
    alert("createApp Success : " + JSON.stringify(url))
  }).catch(error => {
    console.log(error);
    alert("createApp error : " + error)
  })

}

function getDetailsUrl() {
  HMSHealth.AppInfo.getDetailsUrl().then(url => {
    console.log("getDetailsUrl Success");
    console.log(JSON.stringify(url));
    alert("Detail Url Success : " + url)
  }).catch(error => {
    console.log(error);
    alert("Detail Url error : " + error)
  })
}

function getDomainName() {
  HMSHealth.AppInfo.getDomainName().then(url => {
    console.log("getDomainName Success");
    console.log(JSON.stringify(url));
    alert("getDomainName Success : " + url)
  }).catch(error => {
    console.log(error);
    alert("getDomainName error : " + error)
  })

}

function getPackageName() {
  HMSHealth.AppInfo.getPackageName().then(url => {
    console.log("getPackageName Success");
    console.log(JSON.stringify(url));
    alert("Detail PackageName Success : " + url)
  }).catch(error => {
    console.log(error);
    alert("Detail PackageName error : " + error)
  })
}

function getVersion() {
  HMSHealth.AppInfo.getVersion().then(url => {
    console.log("getVersion Success");
    console.log(JSON.stringify(url));
    alert("Detail Version Success : " + url)
  }).catch(error => {
    console.log(error);
    alert("Detail Version error : " + error)
  })
}

// Auto Recorder

function startAutoRecorder() {
  HMSHealth.on("samplepoint", (e) => {
    console.log(JSON.stringify(e));
    alert(JSON.stringify(e))
  });

  HMSHealth.AutoRecorderController.startRecord({
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_TOTAL
  }).then(() => {
    console.log("Start Record Success!");
    alert("Start Record Success!");
  }).catch(error => {
    console.log(error);
    alert("Start Record error: " + error);
  })
}

function stopAutoRecorder() {
  HMSHealth.AutoRecorderController.stopRecord({
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_TOTAL
  }).then(() => {
    console.log("Stop Record Success!");
    alert("Stop Record Success!");
  }).catch(error => {
    console.log(error);
    alert("Stop Record error: " + error);
  })
}

// Activity Recorder
function addActivityRecord() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000))

  const dataCollector1 = {
    dataType: HMSHealth.DataType.DT_CONTINUOUS_DISTANCE_TOTAL,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "cordova1",
  };

  const dataCollector2 = {
    dataType: HMSHealth.DataType.POLYMERIZE_CONTINUOUS_SPEED_STATISTICS,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "cordova2",
  };

  const dataCollector3 = {
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_TOTAL,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "cordova3",
  };

  const dataCollector4 = {
    dataType: HMSHealth.DataType.DT_INSTANTANEOUS_STEPS_RATE,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "cordova4",
  };

  const samplePoint1 = {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    fields: [
      {
        fieldName: HMSHealth.Field.FIELD_DISTANCE,
        fieldValue: 400.0,
      },
    ],
  };

  const samplePoint2 = {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    fields: [
      {
        fieldName: HMSHealth.Field.FIELD_AVG,
        fieldValue: 60.0,
      },
      {
        fieldName: HMSHealth.Field.FIELD_MIN,
        fieldValue: 40.0,
      },
      {
        fieldName: HMSHealth.Field.FIELD_MAX,
        fieldValue: 80.0,
      },
    ],
  };

  const samplePoint3 = {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    fields: [
      {
        fieldName: HMSHealth.Field.FIELD_STEPS,
        fieldValue: 1024,
      },
    ],
  };

  const activitySummary = {
    dataSummary: [{
      dataCollector: dataCollector1,
      samplePoints: [samplePoint1],
    }, {
      dataCollector: dataCollector2,
      samplePoints: [samplePoint2],
    }, {
      dataCollector: dataCollector3,
      samplePoints: [samplePoint3],
    }],
    paceSummary: {
      avgPace: 247.27626,
      bestPace: 212,
      britishPaceMap: {
        "50001893": 365.0,
      },
      britishPartTimeMap: {
        "1.0": 263.0
      },
      partTimeMap: {
        "1.0": 456.0
      },
      paceMap: {
        "1.0": 263
      },
      sportHealthPaceMap: {
        "102802480": 535.0
      },
    }
  };

  // Build an ActivityRecord object
  const activityRecord = {
    id: "MyBackgroundActivityRecordId",
    name: "AddActivityRecord",
    description: "This is ActivityRecord begin test!",
    activityType: HMSHealth.HiHealthActivities.RUNNING,
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    timeZone: "+0800",
    activitySummary: activitySummary,
  }

  // You can use sampleSets to add more sampling points to the sampling dataset.
  // Build the (DT_CONTINUOUS_STEPS_DELTA) sampling data object and add it to the sampling dataSet
  const sampleSetObject = [{
    dataCollector: dataCollector4,
    samplePoints: [
      {
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
        fields: [
          {
            fieldName: HMSHealth.Field.FIELD_STEP_RATE,
            fieldValue: 10,
          },
        ]
      },
    ]
  }];

  let activityRecordData = {
      activityRecord: activityRecord,
      sampleSet: sampleSetObject
  }

  HMSHealth.ActivityRecordController.addActivityRecord(activityRecordData).then(() => {
    console.log("Add Activity Record Success!");
    alert("Add Activity Record Success!");
  }).catch(error => {
    console.log(error);
    alert("Add Activity Record error: " + error);
  });
}



function beginActivityRecord() {
  let startDate = new Date();
  startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 1000))

  let activityRecord = {
    startTime: startDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    timeZone: "+0800",
    id: 'MyBackgroundActivityRecordId',
    name: 'ActivityRecordRun',
    description: 'This is a test for ActivityRecord',
    activityType: HMSHealth.HiHealthActivities.RUNNING,
  }
  HMSHealth.ActivityRecordController.beginActivityRecord(activityRecord).then(() => {
    console.log("Begin Activity Record Success!");
    alert("Begin Activity Record Success!");
  }).catch(error => {
    console.log(error);
    alert("Begin Activity Record error: " + error);
  });
}

function beginBackgroundActivityRecord() {
  let startDate = new Date();
  startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 1000))

  let activityRecord = {
    startTime: startDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    timeZone: "+0800",
    id: 'MyBackgroundActivityRecordId',
    name: 'ActivityRecordRun',
    description: 'This is a test for ActivityRecord',
    activityType: HMSHealth.HiHealthActivities.RUNNING,
  }
  HMSHealth.ActivityRecordController.beginBackgroundActivityRecord(activityRecord).then(() => {
    console.log("Begin Activity Record Success!");
    alert("beginBackgroundActivityRecord Success!");
  }).catch(error => {
    console.log(error);
    alert("beginBackgroundActivityRecord error: " + error);
  });
}

function endActivityRecord() {
  let request = {
    activityRecordId: "MyBackgroundActivityRecordId",
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
  }

  HMSHealth.ActivityRecordController.endActivityRecord(request).then((res) => {
    console.log("End Activity Record Success!");
    alert("End Activity Record Success!" + JSON.stringify(res));

  }).catch(error => {
    console.log(error);
    alert("End Activity Record error" + error);
  });
}

function endBackgroundActivityRecord() {
  let request = {
    activityRecordId: 'MyBackgroundActivityRecordId',
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
  }

  HMSHealth.ActivityRecordController.endBackgroundActivityRecord(request).then((res) => {
    console.log("endBackgroundActivityRecord Record Success!");
    alert("endBackgroundActivityRecord Record Success!" + JSON.stringify(res));

  }).catch(error => {
    console.log(error);
    alert("endBackgroundActivityRecord Record error" + error);
  });
}

function deleteActivityRecord() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 60 * 1000))

  let activityRecord = {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    activityRecordIds: [{
      activityRecord: "MyBackgroundActivityRecordId"
    }
    ],
    dataTypes: [{
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
    },
    {
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
    }
    ],
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    isDeleteSubData: true
  }

  HMSHealth.ActivityRecordController.deleteActivityRecord(activityRecord).then((ar) => {
    console.log(" deleteActivityRecord  Success!");
    console.log(JSON.stringify(ar));
    alert("deleteActivityRecord Success!");
  }).catch(error => {
    console.log(error);
    alert(error);
    alert("deleteActivityRecord error: " + error);
  });
}

function getActivityRecord() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 60 * 1000))

  let activityRecord = {
    startTime: startDate.getTime(),
    endTime: endDate.getTime(),
    timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA
  }

  HMSHealth.ActivityRecordController.getActivityRecord(activityRecord).then((ar) => {
    console.log("Get Activity Record Success!");
    console.log(JSON.stringify(ar));
    alert("Get Activity Record Success!" + JSON.stringify(ar));
  }).catch(error => {
    console.log(error);
    alert("Get Activity Record error" + error);
  });
}

// Data Collector
function initDataController() {
  let dataTypes = [{
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
    hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
  },
  {
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
    hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
  }
  ];

  HMSHealth.DataController.initDataController(dataTypes).then(() => {
    console.log("initDataController Success!");
    alert("initDataController Success!");
  }).catch(error => {
    console.log(error);
    alert("initDataController error: " + error);
  });
}

function read() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

  let readData = {
    dataCollector: {
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      name: "DT_CONTINUOUS_STEPS_DELTA",
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW
    },
    options: {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    }
  }

  HMSHealth.DataController.read(readData).then((data) => {
    console.log("read data Success!");
    console.log(JSON.stringify(data));
    alert("read data Success!");
  }).catch(error => {
    console.log(error);
    alert("read data error: " + error);
  });
}

function insert() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

  let insertData = {
    dataCollector: {
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      name: "DT_CONTINUOUS_STEPS_DELTA",
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW
    },
    sampleSet: [{
      metaData: {
        metaDataKey: "metaData",
        metaDataValue: "metaData"
      },
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      fieldName: HMSHealth.Field.FIELD_STEPS_DELTA,
      fieldValue: "200",
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      dataCollector: {
        dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
        name: "DT_CONTINUOUS_STEPS_DELTA",
        dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW
      },
    }]
  }

  HMSHealth.DataController.insert(insertData).then(() => {
    console.log("insert data Success!");
    alert("insert data Success!");
  }).catch(error => {
    console.log(error);
    alert("insert data error: " + error);
  });
}

function update() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

  let updateData = {
    dataCollector: {
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      name: "DT_CONTINUOUS_STEPS_DELTA",
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW
    },
    sampleSet: [{
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      fieldName: HMSHealth.Field.FIELD_STEPS_DELTA,
      fieldValue: "200",
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      dataCollector: {
        dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
        name: "DT_CONTINUOUS_STEPS_DELTA",
        dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW
      },
    }],
    options: {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    }
  }
  HMSHealth.DataController.update(updateData).then(() => {
    console.log("update data Success!");
    alert("update data Success!");
  }).catch(error => {
    console.log(error);
    alert("update data error: " + error);
  });
}

function deleteData() {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setTime(startDate.getTime() - (3 * 60 * 60 * 1000));

  let deleteData = {
    dataCollector: {
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      name: "DT_CONTINUOUS_STEPS_DELTA",
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW
    },
    options: {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    }
  }
  HMSHealth.DataController.deleteData(deleteData).then(() => {
    console.log("delete data Success!");
    alert("delete data Success!");
  }).catch(error => {
    console.log(error);
    alert("delete data error: " + error);
  });
}

function readTodaySummation() {
  HMSHealth.DataController.readTodaySummation(HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA).then((data) => {
    console.log("readTodaySummation data Success!");
    console.log(JSON.stringify(data));
    alert("readTodaySummation data Success!");
  }).catch(error => {
    console.log(error);
    alert("readTodaySummation data error: " + error);
  });
}

function readDailySummation() {
  let options = {
    startDate: 20201218,
    endDate: 20201221,
    dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA
  }
  HMSHealth.DataController.readDailySummation(options).then((data) => {
    console.log("readDailySummation data Success!");
    console.log(JSON.stringify(data));
    alert("readDailySummation data Success!");
  }).catch(error => {
    console.log(error);
    alert("readDailySummation data error: " + error);
  });
}

function clearAll() {
  HMSHealth.DataController.clearAll().then((data) => {
    console.log("clearAll data Success!");
    console.log(JSON.stringify(data));
    alert("clearAll data Success!");
  }).catch(error => {
    console.log(error);
    alert("clearAll data error: " + error);
  });
}

function readLatestData() {
  let dataTypes = [{
    dataType: HMSHealth.DataType.DT_INSTANTANEOUS_HEIGHT
  },
  {
    dataType: HMSHealth.DataType.DT_INSTANTANEOUS_BODY_WEIGHT
  }
  ];

  HMSHealth.DataController.readLatestData(dataTypes).then((data) => {
    console.log("readLatestData Success!");
    console.log(JSON.stringify(data));
    alert("readLatestData Success!");
  }).catch(error => {
      console.log(error);
      alert("readLatestData error: " + error);
    });
}

// ConsentsController
function getPermissions() {
  let options = {
    language: "en-us",
    appId: "<app_id>"
  }
  HMSHealth.ConsentsController.getPermissions(options).then((data) => {
    console.log("getPermissions Success!");
    console.log(JSON.stringify(data));
    alert("getPermissions Success!");
  }).catch(error => {
    console.log(error);
    alert("getPermissions error: " + error);
  });
}

function revokeAll() {
  HMSHealth.ConsentsController.revokeAll("<app_id>").then((data) => {
    console.log("revokeAll Success!");
    console.log(JSON.stringify(data));
    alert("revokeAll Success!");
  }).catch(error => {
    console.log(error);
    alert("revokeAll error: " + error);
  });
}

function revoke() {
  let options = {
    appId: "<app_id>",
    scopes: [
      HMSHealth.HuaweiHiHealth.HEALTHKIT_STEP_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_STEP_WRITE
    ]
  }
  HMSHealth.ConsentsController.revoke(options).then((data) => {
    console.log("revoke Success!");
    console.log(JSON.stringify(data));
    alert("revoke Success!");
  }).catch(error => {
    console.log(error);
    alert("revoke error: " + error);
  });
}

function cancelAuthorization() {
  let cancelAuthReq = {
    appId: "<app_id>",
    scopes: [
      HMSHealth.HuaweiHiHealth.HEALTHKIT_STEP_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_STEP_WRITE
    ]
  }
  HMSHealth.ConsentsController.cancelAuthorization(cancelAuthReq).then((data) => {
    console.log("cancelAuthorization Success!");
    console.log(JSON.stringify(data));
    alert("cancelAuthorization Success!");
  }).catch(error => {
    console.log(error);
    alert("cancelAuthorization error: " + error);
  });
}

function cancelAuthorizationAll() {
  let cancelAuthAllReq = {
    deleteData: true

  }
  HMSHealth.ConsentsController.cancelAuthorizationAll(cancelAuthAllReq).then((data) => {
    console.log("cancelAuthorizationAll Success!");
    console.log(JSON.stringify(data));
    alert("cancelAuthorizationAll Success!");
  }).catch(error => {
    console.log(error);
    alert("cancelAuthorizationAll error: " + error);
  });

}

// Settings Controller
function addDataType() {
  const options = {
    dataTypeName: packageName + ".newExtendedDataType",
    fieldValue: HMSHealth.Field.FIELD_STEPS_DELTA
  }

  HMSHealth.SettingsController.addDataType(options).then((data) => {
    console.log("addDataType Success!");
    alert("addDataType Success!");
  }).catch(error => {
    console.log(error);
    alert("addDataType Error:" + error)
  });
}

function disableHiHealth() {
  HMSHealth.SettingsController.disableHiHealth().then(() => {
    console.log("disableHiHealth Success!");
    alert("disableHiHealth Success!");
  }).catch(error => {
    console.log(error);
    alert("disableHiHealth error: " + error);
  });
}

function readDataType() {
  let dataTypeName = packageName + ".newExtendedDataType";

  HMSHealth.SettingsController.readDataType(dataTypeName).then((data) => {
    console.log("readDataType Success!");
    alert("readDataType Success!");
  }).catch(error => {
    console.log(error);
    alert("readDataType error: " + error);
  });
}

function checkHealthAppAuthorization() {
  HMSHealth.SettingsController.checkHealthAppAuthorization().then((data) => {
    console.log("checkHealthAppAuthorization Success!");
    alert("checkHealthAppAuthorization: " + data);
  }).catch(error => {
    console.log(error);
    alert("checkHealthAppAuthorization error : " + error);
  });
}

function getHealthAppAuthorization() {
  HMSHealth.SettingsController.getHealthAppAuthorization().then((data) => {
    console.log("getHealthAppAuthorization Success!");
    alert("getHealthAppAuthorization: " + data);
  }).catch(error => {
    console.log(error);
    alert("getHealthAppAuthorization error : " + error);
  });
}

function requestAuth() {
  let request = {
    scopes: [
      HMSHealth.HuaweiHiHealth.HEALTHKIT_STEP_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_STEP_WRITE,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_HEIGHTWEIGHT_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_HEIGHTWEIGHT_WRITE,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_HEARTRATE_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_HEARTRATE_WRITE,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_ACTIVITY_RECORD_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_ACTIVITY_RECORD_WRITE,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_HEARTHEALTH_READ,
      HMSHealth.HuaweiHiHealth.HEALTHKIT_HEARTHEALTH_WRITE
    ],
    enableHealthAuth: true
  };

  HMSHealth.SettingsController.requestAuthorizationIntent(request).then(url => {
    console.log("requestAuthorizationIntent Success");
    console.log(JSON.stringify(url));
    alert("requestAuthorizationIntent Success : " + url)
  }).catch(error => {
    console.log(error);
    alert("requestAuthorizationIntent error : " + error)
  })
}

// HealthRecord Controller
let resultId;
function addHealthRecord() {
  let startDate = new Date();
  startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 1000));
  let endDate = new Date();

  const samplePointField = [
    {
      fieldName: HMSHealth.Field.FIELD_AVG,
      fieldValue: 90,
    },
    {
      fieldName: HMSHealth.Field.FIELD_MAX,
      fieldValue: 100,
    },
    {
      fieldName: HMSHealth.Field.FIELD_MIN,
      fieldValue: 80,
    },
    {
      fieldName: HMSHealth.Field.FIELD_LAST,
      fieldValue: 80,
    },
  ]

  const sampleSetField = [
    {
      fieldName: HMSHealth.Field.FIELD_BPM,
      fieldValue: 42,
    }
  ]

  const samplePointForHealthBuilder = [
    {
      fieldName: HMSHealth.HealthFields.FIELD_THRESHOLD,
      fieldValue: 42,
    },
    {
      fieldName: HMSHealth.HealthFields.FIELD_AVG_HEART_RATE,
      fieldValue: 45,
    },
    {
      fieldName: HMSHealth.HealthFields.FIELD_MAX_HEART_RATE,
      fieldValue: 48,
    },
    {
      fieldName: HMSHealth.HealthFields.FIELD_MIN_HEART_RATE,
      fieldValue: 42,
    },
  ]

  const options = {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      fields: samplePointForHealthBuilder,
      metaData: "Data",
  }

  const sampleSets = [
    {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      fields: sampleSetField
    },
  ];

  const samplePoints = [
    {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      fields: samplePointField
    },
  ];

  const dataCollectorArray = [
    {
      dataType: HMSHealth.DataType.DT_INSTANTANEOUS_HEART_RATE,
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
      name: "such as step count",
    }, 
    {
      dataType: HMSHealth.DataType.POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS,
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
      name: "such as step count",
    }, 
    {
      dataType: HMSHealth.HealthDataTypes.DT_HEALTH_RECORD_BRADYCARDIA,
      dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
      name: "such as step count",
    }
  ]

  let request = {
    options: options,
    dataCollector: dataCollectorArray,
    sampleSets: sampleSets,
    samplePoints: samplePoints
  }

  HMSHealth.HealthRecordController.addHealthRecord(request).then(res => {
    resultId = res;
    alert("addHealthRecord Success: " + res)
  }).catch(error => {
    console.log(error);
    alert("addHealthRecord error: " + error)
  });
}

function deleteHealthRecord() {
  let startDate = new Date();
  startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 1000));
  let endDate = new Date();

  let request = {
    options: {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    },
    isDeleteSubData: true,
    dataType: HMSHealth.HealthDataTypes.DT_HEALTH_RECORD_BRADYCARDIA,
    dataTypes: [
    {
      dataType: HMSHealth.DataType.DT_CONTINUOUS_STEPS_DELTA,
      hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
    },
    {
      dataType: HMSHealth.DataType.DT_INSTANTANEOUS_HEART_RATE,
      hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
    }
    ],
    activityRecordIds: [
    {
      activityRecord: resultId
    },
    {
      activityRecord: "healthRecordId1"
    }
    ],
  }

  HMSHealth.HealthRecordController.deleteHealthRecord(request).then(res => {
    alert("deleteHealthRecord Success : " + res)
    console.log(JSON.stringify(res));
  }).catch(error => {
    console.log(error);
    alert("deleteHealthRecord error : " + error)
  });

}

function getHealthRecord() {
  let startDate = new Date();
  startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 60 * 1000));
  let endDate = new Date();

  let request = {
    options: {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
    },

    dataType: HMSHealth.HealthDataTypes.DT_HEALTH_RECORD_BRADYCARDIA,
    dataTypes: [
    {
      dataType: HMSHealth.DataType.DT_INSTANTANEOUS_HEART_RATE,
      hiHealthOption: HMSHealth.HiHealthOptions.ACCESS_READ
    },
    ],
  }

  HMSHealth.HealthRecordController.getHealthRecord(request)
    .then(res => {
      alert("getHealthRecord Success : " + JSON.stringify(res));
      console.log(JSON.stringify(res));
    }).catch(error => {
      console.log(error);
      alert("getHealthRecord error: " + error);
    });
}

function updateHealthRecord() {
  let startDate = new Date();
  startDate.setTime(startDate.getTime() - (2 * 60 * 60 * 1000));
  let endDate = new Date();

  const samplePointField = [
    {
      fieldName: HMSHealth.Field.FIELD_AVG,
      fieldValue: 91,
    },
    {
      fieldName: HMSHealth.Field.FIELD_MAX,
      fieldValue: 101,
    },
    {
      fieldName: HMSHealth.Field.FIELD_MIN,
      fieldValue: 81,
    },
    {
      fieldName: HMSHealth.Field.FIELD_LAST,
      fieldValue: 81,
    },
  ]

  const sampleSetField = [
    {
      fieldName: HMSHealth.Field.FIELD_BPM,
      fieldValue: 42,
    }
  ]

  const samplePointForHealthBuilder = [
    {
      fieldName: HMSHealth.HealthFields.FIELD_THRESHOLD,
      fieldValue: 42,
    },
    {
      fieldName: HMSHealth.HealthFields.FIELD_AVG_HEART_RATE,
      fieldValue: 45,
    },
    {
      fieldName: HMSHealth.HealthFields.FIELD_MAX_HEART_RATE,
      fieldValue: 48,
    },
    {
      fieldName: HMSHealth.HealthFields.FIELD_MIN_HEART_RATE,
      fieldValue: 42,
    },
  ]

  const options = {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      fields: samplePointForHealthBuilder,
      metaData: "Data",
  }

  const sampleSets = [
    {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      fields: sampleSetField
    },
  ];

  const samplePoints = [
    {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      timeUnit: HMSHealth.TimeUnit.MILLISECONDS,
      fields: samplePointField
    },
  ];

  const dataCollectorArray = [
  {
    dataType: HMSHealth.DataType.DT_INSTANTANEOUS_HEART_RATE,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "such as step count",
  }, 
  {
    dataType: HMSHealth.DataType.POLYMERIZE_CONTINUOUS_HEART_RATE_STATISTICS,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "such as step count",
  }, 
  {
    dataType: HMSHealth.HealthDataTypes.DT_HEALTH_RECORD_BRADYCARDIA,
    dataGenerateType: HMSHealth.DataGenerateType.DATA_TYPE_RAW,
    name: "such as step count",
  }
  ]

  let request = {
    healthRecordId: resultId,
    options: options,
    dataCollector: dataCollectorArray,
    sampleSets: sampleSets,
    samplePoints: samplePoints
  }

  HMSHealth.HealthRecordController.updateHealthRecord(request)
    .then(res => {
      alert("updateHealthRecord Success : " + res)
      console.log(JSON.stringify(res));
    }).catch(error => {
      console.log(error);
      alert("updateHealthRecord error : " + error);
    });
}