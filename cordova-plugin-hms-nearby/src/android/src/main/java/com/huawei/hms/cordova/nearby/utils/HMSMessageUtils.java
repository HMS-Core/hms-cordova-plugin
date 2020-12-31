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

package com.huawei.hms.cordova.nearby.utils;

import android.util.Log;

import com.huawei.hms.cordova.nearby.basef.handler.CordovaEventRunner;
import com.huawei.hms.nearby.message.GetCallback;
import com.huawei.hms.nearby.message.GetOption;
import com.huawei.hms.nearby.message.Message;
import com.huawei.hms.nearby.message.MessagePicker;
import com.huawei.hms.nearby.message.Policy;
import com.huawei.hms.nearby.message.PutCallback;
import com.huawei.hms.nearby.message.PutOption;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.UUID;

public class HMSMessageUtils {
    private static final String TAG = HMSMessageUtils.class.getSimpleName();

    public static Message buildMessage(JSONObject json) throws JSONException {
        JSONArray jsonArray = json.getJSONArray("content");
        byte[] content = HMSUtils.convertJSONArrayToBytes(jsonArray);

        if (json.has("type") && json.has("namespace")) {
            String type = json.getString("type");
            String namespace = json.getString("namespace");
            return new Message(content, type, namespace);
        } else if (json.has("type"))
            return new Message(content, json.getString("type"));

        return new Message(content);
    }

    public static MessagePicker buildMessagePicker(JSONObject json) throws JSONException {
        MessagePicker.Builder builder = new MessagePicker.Builder();

        if (json.optBoolean("includeAllTypes", false))
            builder.includeAllTypes();

        if (json.has("eddystoneUids")) {
            JSONArray ids = json.getJSONArray("eddystoneUids");
            for (int i = 0; i < ids.length() ; i++) {
                JSONObject id = ids.getJSONObject(i);
                String hexNamespace = id.getString("hexNamespace");
                String hexInstance = id.getString("hexInstance");
                builder.includeEddystoneUids(hexNamespace, hexInstance);
            }
        }

        if (json.has("iBeaconIds")) {
            JSONArray ids = json.getJSONArray("iBeaconIds");
            for (int i = 0; i < ids.length() ; i++) {
                JSONObject id = ids.getJSONObject(i);
                UUID iBeaconUuid = UUID.fromString(id.getString("iBeaconUuid"));
                Short major = (short) id.getInt("major");
                Short minor = (short) id.getInt("minor");
                builder.includeIBeaconIds(iBeaconUuid, major, minor);
            }
        }

        if (json.has("namespaceTypes")) {
            JSONArray ids = json.getJSONArray("namespaceTypes");
            for (int i = 0; i < ids.length() ; i++) {
                JSONObject id = ids.getJSONObject(i);
                String namespace = id.getString("namespace");
                String type = id.getString("type");
                builder.includeNamespaceType(namespace, type);
            }
        }

        return builder.build();
    }

    public static Policy buildPolicy(JSONObject json) {
        return new Policy.Builder()
                .setDistanceType(json.optInt("distanceType", Policy.POLICY_DISTANCE_TYPE_DEFAULT))
                .setFindingMode(json.optInt("findingMode", Policy.POLICY_FINDING_MODE_DEFAULT))
                .setTtlSeconds(json.optInt("ttlSeconds", Policy.POLICY_TTL_SECONDS_DEFAULT))
                .build();
    }

    public static PutOption buildPutOption(JSONObject json, final CordovaEventRunner eventRunner, Message message) throws JSONException {
        JSONObject jsonObject = HMSUtils.convertMessageToJSONObject(message);
        jsonObject.put("status", "PutOption onTimeout");

        PutOption.Builder builder = new PutOption.Builder();
        builder.setCallback(new PutCallback() {
            @Override
            public void onTimeout() {
                Log.i(TAG, "PutOption onTimeout");
                eventRunner.sendEvent(HMSEvents.EVENT_PUT_ON_TIMEOUT, jsonObject);
            }
        });

        if (json.has("policy"))
            builder.setPolicy(buildPolicy(json.getJSONObject("policy")));
        else
            builder.setPolicy(new Policy.Builder().build());

        return builder.build();
    }

    public static GetOption buildGetOption(JSONObject json, final CordovaEventRunner eventRunner) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("status", "GetOption onTimeout");

        GetOption.Builder builder = new GetOption.Builder();
        builder.setCallback(new GetCallback() {
            @Override
            public void onTimeout() {
                Log.i(TAG, "GetOption onTimeout");
                eventRunner.sendEvent(HMSEvents.EVENT_GET_ON_TIMEOUT, jsonObject);
            }
        });

        if (json.has("picker"))
            builder.setPicker(buildMessagePicker(json.getJSONObject("picker")));
        else
            builder.setPicker(new MessagePicker.Builder().build());

        if (json.has("policy"))
            builder.setPolicy(buildPolicy(json.getJSONObject("policy")));
        else
            builder.setPolicy(new Policy.Builder().build());

        return builder.build();
    }
}
