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

import com.huawei.hms.nearby.discovery.BleSignal;
import com.huawei.hms.nearby.discovery.ConnectInfo;
import com.huawei.hms.nearby.discovery.ConnectResult;
import com.huawei.hms.nearby.discovery.Distance;
import com.huawei.hms.nearby.discovery.Policy;
import com.huawei.hms.nearby.discovery.ScanEndpointInfo;
import com.huawei.hms.nearby.message.Message;
import com.huawei.hms.nearby.transfer.Data;
import com.huawei.hms.nearby.transfer.TransferStateUpdate;
import com.huawei.hms.nearby.wifishare.WifiSharePolicy;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public class HMSUtils {
    private final static String TAG = HMSUtils.class.getSimpleName();

    public static int[] convertJSONArrayToIntArray(JSONArray jsonArray) throws JSONException {
        int[] numbers = new int[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++) {
            numbers[i] = jsonArray.getInt(i);
        }
        return numbers;
    }

    public static Policy getPolicyByNumber(int policyNumber) {
        if (policyNumber == 1)
            return Policy.POLICY_MESH;
        else if (policyNumber == 2)
            return Policy.POLICY_P2P;
        else if (policyNumber == 3)
            return Policy.POLICY_STAR;
        else
            return null;
    }

    public static WifiSharePolicy getWifiSharePolicyByNumber(int policyNumber) {
        if (policyNumber == 1)
            return WifiSharePolicy.POLICY_SHARE;
        else if (policyNumber == 2)
            return WifiSharePolicy.POLICY_SET;
        else
            return null;
    }

    public static byte[] convertJSONArrayToBytes(JSONArray jsonArray) throws JSONException {
        byte[] bytes = new byte[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++) {
            bytes[i] = (byte) jsonArray.getInt(i);
        }
        return bytes;
    }

    public static List<String> convertJSONArrayToList(JSONArray jsonArray) throws JSONException {
        List<String> list = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            list.add(jsonArray.getString(i));
        }
        return list;
    }


    public static JSONObject convertConnectInfoToJSONObject(String endpointId, ConnectInfo connectInfo) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("authCode", connectInfo.getAuthCode());
            jsonObject.put("endpointName", connectInfo.getEndpointName());
            jsonObject.put("isRemoteConnect", connectInfo.isRemoteConnect());
            jsonObject.put("describeContents", connectInfo.describeContents());
        } catch (JSONException e) {
            Log.e(TAG, "convertConnectInfoToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertConnectResultToJSONObject(String endpointId, ConnectResult connectResult) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("statusCode", connectResult.getStatus().getStatusCode());
            jsonObject.put("statusMessage", connectResult.getStatus().getStatusMessage());
        } catch (JSONException e) {
            Log.e(TAG, "convertConnectResultToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject generateEndpointIdJSONObject(String endpointId) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
        } catch (JSONException e) {
            Log.e(TAG, "convertEndpointIdToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertScanEndpointInfoToJSONObject(String endpointId, ScanEndpointInfo scanEndpointInfo) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("serviceId", scanEndpointInfo.getServiceId());
            jsonObject.put("name", scanEndpointInfo.getName());
        } catch (JSONException e) {
            Log.e(TAG, "convertScanEndpointInfoToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertReceivedDataToJSONObject(String endpointId, Data data) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("dataType", data.getType());
            jsonObject.put("dataId", String.valueOf(data.getId()));

            if (data.getType() == Data.Type.BYTES) {
                jsonObject.put("size", data.asBytes().length);
                jsonObject.put("data", new JSONArray(data.asBytes()));

            } else if (data.getType() == Data.Type.FILE) {
                jsonObject.put("size", data.asFile().getSize());
                jsonObject.put("fileUri", data.asFile().asJavaFile().toURI().toString());

            } else if (data.getType() == Data.Type.STREAM) {
                byte[] bytes = convertStreamToByteArray(data.asStream().asInputStream());
                jsonObject.put("data", new JSONArray(bytes));
            }
        } catch (JSONException | IOException e) {
            Log.e(TAG, "convertReceivedDataToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertTransferStateUpdateToJSONObject(String endpointId, TransferStateUpdate transferStateUpdate) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("dataId", String.valueOf(transferStateUpdate.getDataId()));
            jsonObject.put("status", transferStateUpdate.getStatus());
            jsonObject.put("transferredBytes", transferStateUpdate.getBytesTransferred());
            jsonObject.put("totalBytes", transferStateUpdate.getTotalBytes());
        } catch (JSONException e) {
            Log.e(TAG, "convertTransferStateUpdateToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertMessageToJSONObject(Message message) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("type", message.getType());
            jsonObject.put("namespace", message.getNamespace());
            jsonObject.put("content", new JSONArray(message.getContent()));
        } catch (JSONException e) {
            Log.e(TAG, "convertMessageToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertBleSignalToJSONObject(BleSignal bleSignal) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("rssi", bleSignal.getRssi());
            jsonObject.put("txPower", bleSignal.getTxPower());
        } catch (JSONException e) {
            Log.e(TAG, "convertBleSignalToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertMessageAndBleSignalToJSONObject(Message message, BleSignal bleSignal) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("message", convertMessageToJSONObject(message));
            jsonObject.put("bleSignal", convertBleSignalToJSONObject(bleSignal));
        } catch (JSONException e) {
            Log.e(TAG, "convertMessageAndBleSignalToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertDistanceToJSONObject(Distance distance) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("meters", distance.getMeters());
            jsonObject.put("precision", distance.getPrecision());
        } catch (JSONException e) {
            Log.e(TAG, "convertDistanceToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject convertMessageAndDistanceToJSONObject(Message message, Distance distance) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("message", convertMessageToJSONObject(message));
            jsonObject.put("distance", convertDistanceToJSONObject(distance));
        } catch (JSONException e) {
            Log.e(TAG, "convertMessageAndDistanceToJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject generateBooleanJSONObject(String keyText, boolean b) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put(keyText, b);
        } catch (JSONException e) {
            Log.e(TAG, "generateBooleanJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject generateAuthCodeJSONObject(String endpointId, String authCode) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("authCode", authCode);
        } catch (JSONException e) {
            Log.e(TAG, "generateAuthCodeJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static JSONObject generateStatusCodeJSONObject(String endpointId, int statusCode) {
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("endpointId", endpointId);
            jsonObject.put("statusCode", statusCode);
        } catch (JSONException e) {
            Log.e(TAG, "generateStatusCodeJSONObject: " + e.getMessage());
        }
        return jsonObject;
    }

    public static String convertStreamToString(InputStream inputStream) throws IOException {
        StringBuilder sb = new StringBuilder(Math.max(16, inputStream.available()));
        char[] tmp = new char[4096];

        InputStreamReader reader = new InputStreamReader(inputStream, StandardCharsets.UTF_8);
        int cnt;
        while ((cnt = reader.read(tmp)) > 0) {
            sb.append(tmp, 0, cnt);
        }
        reader.close();
        inputStream.close();

        return sb.toString();
    }

    public static byte[] convertStreamToByteArray(InputStream inputStream) throws IOException {
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
        byte[] data = new byte[4096];

        int nRead;
        while ((nRead = inputStream.read(data, 0, data.length)) != -1) {
            buffer.write(data, 0, nRead);
        }
        inputStream.close();
        return buffer.toByteArray();
    }

    public static boolean hasOptionalParameter(JSONArray jsonArray, int index) {
        String optionalParameter = jsonArray.optString(index);
        return optionalParameter != null && !optionalParameter.equals("null");
    }
}
