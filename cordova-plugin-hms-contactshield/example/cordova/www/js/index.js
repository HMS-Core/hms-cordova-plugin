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

var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById('btn_has_bluetooth_permission').addEventListener('click', hasBluetoothPermission);
        document.getElementById('btn_request_bluetooth_permission').addEventListener('click', requestBluetoothPermission);
        document.getElementById('btn_clear_data').addEventListener('click', clearData);
        document.getElementById('btn_get_contact_detail').addEventListener('click', getContactDetail);
        document.getElementById('btn_get_contact_sketch').addEventListener('click', getContactSketch);
        document.getElementById('btn_get_contact_window').addEventListener('click', getContactWindow);
        document.getElementById('btn_get_periodic_key').addEventListener('click', getPeriodicKey);
        document.getElementById('btn_handle_callback').addEventListener('click', handleCallback);
        document.getElementById('btn_is_contact_shield_running').addEventListener('click', isContactShieldRunning);
        document.getElementById('btn_put_shared_key_files_depricated').addEventListener('click', putSharedKeyFilesOld);
        document.getElementById('btn_put_shared_key_files').addEventListener('click', putSharedKeyFiles);
        document.getElementById('btn_start_contact_shield_depricated').addEventListener('click', startContactShieldOld);
        document.getElementById('btn_start_contact_shield_no_persistent').addEventListener('click', startContactShieldNoPersistent);
        document.getElementById('btn_start_contact_shield').addEventListener('click', startContactShield);
        document.getElementById('btn_stop_contact_shield').addEventListener('click', stopContactShield);
        document.getElementById('btn_enable_logger').addEventListener('click', enableLogger);
        document.getElementById('btn_disable_logger').addEventListener('click', disableLogger);
        document.getElementById('btn_unregister_receiver').addEventListener('click', unregisterReceiver);

        HMSContactShield.registerReceiver()
    }
};

async function hasBluetoothPermission() {
    try {
        const permission = HMSContactShield.Permission.BLUETOOTH;
        const res = await HMSContactShield.hasPermission(permission);
        alert(JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function requestBluetoothPermission() {
    try {
        const permission = HMSContactShield.Permission.BLUETOOTH;
        await HMSContactShield.requestPermission(permission);
        alert("requestPermission-> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function clearData() {
    try {
        await HMSContactShield.clearData();
        alert("clearData-> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function getContactDetail() {
    try {
        const token = "TOKEN_TEST";
        const res = await HMSContactShield.getContactDetail(token);
        alert("getContactDetail -> success, " + JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function getContactSketch() {
    try {
        const token = "TOKEN_TEST";
        const res = await HMSContactShield.getContactSketch(token);
        alert("getContactSketch -> success, " + JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function getContactWindow() {
    try {
        const token = HMSContactShield.ContactShieldEngine.TOKEN_A;
        const res = await HMSContactShield.getContactWindow(token);
        alert("getContactWindow -> success, " + JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function getPeriodicKey() {
    try {
        const res = await HMSContactShield.getPeriodicKey();
        alert("getPeriodicKey -> success, " + JSON.stringify(res));
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

function handleCallback() {
    HMSContactShield.handleCallback("onHasContact", (data) => {
        alert("Event -> onHasContact, " + data)
    })

    HMSContactShield.handleCallback("onNoContact", (data) => {
        alert("Event -> onNoContact, " + data)
    })
}

async function isContactShieldRunning() {
    try {
        const res = await HMSContactShield.isContactShieldRunning();
        alert("isContactShieldRunning -> success, " + res);
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function startContactShield() {
    try {
        const incubationPeriod = 14;
        await HMSContactShield.startContactShield(incubationPeriod);
        alert("startContactShield -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function startContactShieldOld() {
    try {
        const incubationPeriod = 14;
        const res = await HMSContactShield.startContactShieldOld(incubationPeriod);
        alert("startContactShieldOld -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function startContactShieldNoPersistent() {
    try {
        const incubationPeriod = 14;
        await HMSContactShield.startContactShieldNoPersistent(incubationPeriod);
        alert("startContactShieldNoPersistent -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}


async function stopContactShield() {
    try {
        res = await HMSContactShield.stopContactShield();
        alert("stopContactShield -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function putSharedKeyFilesOld() {
    try {

        fileChooser.open(async function(uri) {
            const args = {
                token: "TOKEN_TEST",
                diagnosisConfiguration: {},
                fileList: [uri]
            };
            const res = await HMSContactShield.putSharedKeyFilesOld(args);
            alert("putSharedKeyFilesOld -> success, " + res);
        });
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function putSharedKeyFiles() {

    try {
        fileChooser.open(async function(uri) {
            const args = {
                token: "TOKEN_TEST",
                diagnosisConfiguration: {},
                fileList: [uri]
            };
            const res = await HMSContactShield.putSharedKeyFiles(args);
            alert("putSharedKeyFiles -> success, " + res);
        });
    } catch (ex) {
        alert(JSON.stringify(ex));
    }

}

async function enableLogger() {
    try {
        await HMSContactShield.enableLogger();
        alert("enableLogger -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function disableLogger() {
    try {
        await HMSContactShield.disableLogger();
        alert("disableLogger -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

async function unregisterReceiver() {
    try {
        await HMSContactShield.unregisterReceiver();
        alert("unregisterReceiver -> success");
    } catch (ex) {
        alert(JSON.stringify(ex));
    }
}

app.initialize();
