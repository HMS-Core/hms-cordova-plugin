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

package com.huawei.hms.cordova.scan.utils;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Rect;
import android.net.Uri;
import android.util.Base64;
import android.util.Log;
import android.util.SparseArray;

import com.google.gson.Gson;
import com.huawei.hms.cordova.scan.helpers.GenerateBarcodeProps;
import com.huawei.hms.cordova.scan.helpers.JSONMapper;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public final class JSONUtils {
    private static final String TAG = JSONUtils.class.getName();

    public static final Mapper<JSONObject, GenerateBarcodeProps> FROM_JSON_OBJECT_TO_GENERATE_BARCODE_OPTIONS
        = mapperWrapper(json -> new GenerateBarcodeProps().setBarcodeHeight(json.optInt("barcodeHeight", 700))
        .setBarcodeWidth(json.optInt("barcodeWidth", 700))
        .setGenerateBackground(json.optInt("bitmapBackgroundColor", Color.WHITE))
        .setGenerateColor(json.optInt("bitmapColor", Color.BLACK))
        .setGenerateMargin(json.optInt("bitmapMargin", 1))
        .setGenerateType(json.getInt("barcodeFormat"))
        .setInputContent(json.getString("inputContent")));

    private static final Gson GSON = new Gson();

    private JSONUtils() {
    }

    public static JSONObject hmsScansToJSON(final HmsScan obj) throws JSONException {
        final JSONObject defaultScanResult = new JSONObject();
        defaultScanResult.putOpt("originalValue", obj.getOriginalValue());
        defaultScanResult.putOpt("zoomValue", obj.getZoomValue());
        defaultScanResult.putOpt("showResult", obj.getShowResult());
        defaultScanResult.putOpt("scanTypeForm", obj.getScanTypeForm());
        defaultScanResult.putOpt("scanType", obj.getScanType());
        defaultScanResult.putOpt("showResult", obj.getShowResult());
        defaultScanResult.putOpt("borderRect", borderToJSON(obj.getBorderRect()));
        defaultScanResult.putOpt("cornerPoints", Arrays.asList(obj.getCornerPoints()));

        final int typeForm = obj.getScanTypeForm();
        if (typeForm == HmsScan.SMS_FORM) {
            defaultScanResult.putOpt("smsContent", smsContentInfoToJSON(obj.getSmsContent()));
        } else if (typeForm == HmsScan.TEL_PHONE_NUMBER_FORM) {
            defaultScanResult.putOpt("telPhoneNumber", telPhoneNumberInfoToJSON(obj.getTelPhoneNumber()));
        } else if (typeForm == HmsScan.BOOK_MARK_FORM) {
            defaultScanResult.putOpt("bookMarkInfo", bookMarkInfoTOJSON(obj.getBookMarkInfo()));
        } else if (typeForm == HmsScan.CONTACT_DETAIL_FORM) {
            defaultScanResult.putOpt("contactDetailInfo", contactDetail(obj.getContactDetail()));
        } else if (typeForm == HmsScan.EMAIL_CONTENT_FORM) {
            defaultScanResult.putOpt("emailContent", emailInfoToJSON(obj.getEmailContent()));
        } else if (typeForm == HmsScan.EVENT_INFO_FORM) {
            defaultScanResult.putOpt("eventInfo", eventInfoToJSON(obj.getEventInfo()));
        } else if (typeForm == HmsScan.DRIVER_INFO_FORM) {
            defaultScanResult.putOpt("driverInfo", driverInfoToJSON(obj.getDriverInfo()));
        } else if (typeForm == HmsScan.VEHICLEINFO_FORM) {
            defaultScanResult.putOpt("vehicleInfo", vehicleInfoToJSON(obj.getVehicleInfo()));
        } else if (typeForm == HmsScan.WIFI_CONNECT_INFO_FORM) {
            defaultScanResult.putOpt("wiFiConnectionInfo", wifiConnectionInfoToJSON(obj.getWiFiConnectionInfo()));
        } else if (typeForm == HmsScan.LOCATION_COORDINATE_FORM) {
            defaultScanResult.putOpt("locationCoordinate", locationCoordinateInfoToJSON(obj.getLocationCoordinate()));
        } else if (typeForm == HmsScan.URL_FORM) {
            defaultScanResult.putOpt("linkUrl", getLinkUrl(obj.getLinkUrl()));
        } else {
            Log.i(TAG, "hmsScansToJSON -> else statement");
        }
        return defaultScanResult;
    }

    public static JSONObject borderToJSON(final Rect rect) {
        final JSONObject border = new JSONObject();
        try {
            border.putOpt("bottom", rect.bottom);
            border.putOpt("top", rect.top);
            border.putOpt("left", rect.left);
            border.putOpt("right", rect.right);
            border.putOpt("exactCenterX", rect.exactCenterX());
            border.putOpt("centerY", rect.centerY());
            border.putOpt("centerX", rect.centerX());
            border.putOpt("describeContents", rect.describeContents());
            border.putOpt("height", rect.height());
            border.putOpt("width", rect.width());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return border;
    }

    private static JSONObject telPhoneNumberInfoToJSON(final HmsScan.TelPhoneNumber telPhoneNumber) {
        final JSONObject telPhoneNumberResult = new JSONObject();
        try {
            telPhoneNumberResult.putOpt("telPhoneNumber", telPhoneNumber.getTelPhoneNumber());
            telPhoneNumberResult.putOpt("useType", telPhoneNumber.getUseType());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return telPhoneNumberResult;
    }

    private static JSONObject smsContentInfoToJSON(final HmsScan.SmsContent smsContent) {
        final JSONObject smsContentInfoResult = new JSONObject();
        try {
            smsContentInfoResult.putOpt("destPhoneNumber", smsContent.getDestPhoneNumber());
            smsContentInfoResult.putOpt("msgContent", smsContent.getMsgContent());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return smsContentInfoResult;
    }

    private static JSONObject locationCoordinateInfoToJSON(final HmsScan.LocationCoordinate locationCoordinate) {
        final JSONObject locationCoordinateInfoResult = new JSONObject();
        try {
            locationCoordinateInfoResult.putOpt("latitude", locationCoordinate.getLatitude());
            locationCoordinateInfoResult.putOpt("longitude", locationCoordinate.getLongitude());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return locationCoordinateInfoResult;
    }

    private static JSONObject wifiConnectionInfoToJSON(final HmsScan.WiFiConnectionInfo wiFiConnectionInfo) {
        final JSONObject wifiConnectionInfoResult = new JSONObject();
        try {
            wifiConnectionInfoResult.putOpt("cipherMode", wiFiConnectionInfo.getCipherMode());
            wifiConnectionInfoResult.putOpt("password", wiFiConnectionInfo.getPassword());
            wifiConnectionInfoResult.putOpt("ssidNumber", wiFiConnectionInfo.getSsidNumber());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return wifiConnectionInfoResult;
    }

    private static JSONObject vehicleInfoToJSON(final HmsScan.VehicleInfo vehicleInfo) {
        final JSONObject vehicleInfoResult = new JSONObject();
        try {
            vehicleInfoResult.putOpt("countryCode", vehicleInfo.getCountryCode());
            vehicleInfoResult.putOpt("modelYear", vehicleInfo.getModelYear());
            vehicleInfoResult.putOpt("plantCode", vehicleInfo.getPlantCode());
            vehicleInfoResult.putOpt("sequentialNumber", vehicleInfo.getSequentialNumber());
            vehicleInfoResult.putOpt("vehicleAttributes", vehicleInfo.getVehicleAttributes());
            vehicleInfoResult.putOpt("vehicleDescriptorSection", vehicleInfo.getVehicleDescriptorSection());
            vehicleInfoResult.putOpt("vehicleIdentifierSection", vehicleInfo.getVehicleIdentifierSection());
            vehicleInfoResult.putOpt("vin", vehicleInfo.getVin());
            vehicleInfoResult.putOpt("worldManufacturerID", vehicleInfo.getWorldManufacturerID());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return vehicleInfoResult;
    }

    private static JSONObject eventInfoToJSON(final HmsScan.EventInfo eventInfo) {
        final JSONObject eventInfoResult = new JSONObject();
        try {
            eventInfoResult.putOpt("abstractInfo", eventInfo.getAbstractInfo());
            eventInfoResult.putOpt("condition", eventInfo.getCondition());
            eventInfoResult.putOpt("placeInfo", eventInfo.getPlaceInfo());
            eventInfoResult.putOpt("sponsor", eventInfo.getSponsor());
            eventInfoResult.putOpt("theme", eventInfo.getTheme());
            eventInfoResult.putOpt("beginTime", eventTimeInfoToJson(eventInfo.getBeginTime()));
            eventInfoResult.putOpt("closeTime", eventTimeInfoToJson(eventInfo.getCloseTime()));
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return eventInfoResult;
    }

    private static JSONObject eventTimeInfoToJson(final HmsScan.EventTime beginTime) {
        final JSONObject eventInfoResult = new JSONObject();
        try {
            eventInfoResult.putOpt("originalValue", beginTime.getOriginalValue());
            eventInfoResult.putOpt("isUTCTime", beginTime.isUTCTime());
            eventInfoResult.putOpt("day", beginTime.getDay());
            eventInfoResult.putOpt("hours", beginTime.getHours());
            eventInfoResult.putOpt("minutes", beginTime.getMinutes());
            eventInfoResult.putOpt("month", beginTime.getMonth());
            eventInfoResult.putOpt("seconds", beginTime.getSeconds());
            eventInfoResult.putOpt("year", beginTime.getYear());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return eventInfoResult;
    }

    private static JSONObject emailInfoToJSON(final HmsScan.EmailContent emailContent) {
        final JSONObject emailInfoResult = new JSONObject();
        try {
            emailInfoResult.putOpt("addressInfo", emailContent.getAddressInfo());
            emailInfoResult.putOpt("addressType", emailContent.getAddressType());
            emailInfoResult.putOpt("bodyInfo", emailContent.getBodyInfo());
            emailInfoResult.putOpt("subjectInfo", emailContent.getSubjectInfo());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return emailInfoResult;
    }

    private static JSONObject driverInfoToJSON(final HmsScan.DriverInfo driverInfo) {
        final JSONObject driverInfoResult = new JSONObject();
        try {
            driverInfoResult.putOpt("avenue", driverInfo.getAvenue());
            driverInfoResult.putOpt("certificateNumber", driverInfo.getCertificateNumber());
            driverInfoResult.putOpt("certificateType", driverInfo.getCertificateType());
            driverInfoResult.putOpt("city", driverInfo.getCity());
            driverInfoResult.putOpt("countryOfIssue", driverInfo.getCountryOfIssue());
            driverInfoResult.putOpt("dateOfBirth", driverInfo.getDateOfBirth());
            driverInfoResult.putOpt("dateOfExpire", driverInfo.getDateOfExpire());
            driverInfoResult.putOpt("dateOfIssue", driverInfo.getDateOfIssue());
            driverInfoResult.putOpt("eyeColor", driverInfo.getEyeColor());
            driverInfoResult.putOpt("familyName", driverInfo.getFamilyName());
            driverInfoResult.putOpt("givenName", driverInfo.getGivenName());
            driverInfoResult.putOpt("hairColor", driverInfo.getHairColor());
            driverInfoResult.putOpt("height", driverInfo.getHeight());
            driverInfoResult.putOpt("middleName", driverInfo.getMiddleName());
            driverInfoResult.putOpt("sex", driverInfo.getSex());
            driverInfoResult.putOpt("weightRange", driverInfo.getWeightRange());
            driverInfoResult.putOpt("province", driverInfo.getProvince());
            driverInfoResult.putOpt("zipCode", driverInfo.getZipCode());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return driverInfoResult;
    }

    private static JSONObject getLinkUrl(final HmsScan.LinkUrl linkUrl) throws JSONException {
        final JSONObject linkURL = new JSONObject();
        linkURL.putOpt("theme", linkUrl.getTheme());
        linkURL.putOpt("linkValue", linkUrl.getLinkValue());
        return linkURL;
    }

    public static JSONObject bookMarkInfoTOJSON(final HmsScan.BookMarkInfo bookMarkInfo) {
        final JSONObject bookMarkInfoResult = new JSONObject();
        try {
            bookMarkInfoResult.putOpt("bookPlaceInfo", bookMarkInfo.getBookPlaceInfo());
            bookMarkInfoResult.putOpt("bookNum", bookMarkInfo.getBookNum());
            bookMarkInfoResult.putOpt("bookType", bookMarkInfo.getBookType());
            bookMarkInfoResult.putOpt("bookUri", bookMarkInfo.getBookUri());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return bookMarkInfoResult;
    }

    public static JSONObject contactDetail(final HmsScan.ContactDetail contactDetail) {
        final JSONObject contactDetailResult = new JSONObject();
        try {
            contactDetailResult.putOpt("title", contactDetail.getTitle());
            contactDetailResult.putOpt("company", contactDetail.getCompany());
            contactDetailResult.putOpt("note", contactDetail.getNote());
            final JSONArray jsArray = new JSONArray();
            for (int i = 0; i < contactDetail.getContactLinks().length; i++) {
                jsArray.put(contactDetail.getContactLinks()[i]);
            }
            contactDetailResult.putOpt("contactLinks", jsArray);
            contactDetailResult.putOpt("peopleName", peopleName(contactDetail.getPeopleName()));
            contactDetailResult.putOpt("addressesInfo",
                listToJSONArray(contactDetail.getAddressesInfos(), JSONUtils::addressesInfoToJSON));
            contactDetailResult.putOpt("emailContents",
                listToJSONArray(contactDetail.getEmailContents(), JSONUtils::emailInfoToJSON));
            contactDetailResult.putOpt("telPhoneNumber",
                listToJSONArray(contactDetail.getTelPhoneNumbers(), JSONUtils::telPhoneNumberInfoToJSON));
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return contactDetailResult;
    }

    private static JSONObject addressesInfoToJSON(final HmsScan.AddressInfo addressInfo) {
        final JSONObject addressInfoResult = new JSONObject();
        try {
            addressInfoResult.putOpt("addressDetails", Arrays.asList(addressInfo.getAddressDetails()));
            addressInfoResult.putOpt("addressType", addressInfo.getAddressType());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return addressInfoResult;
    }

    private static JSONObject peopleName(final HmsScan.PeopleName peopleName) {
        final JSONObject peopleNameResult = new JSONObject();
        try {
            peopleNameResult.putOpt("familyName", peopleName.getFamilyName());
            peopleNameResult.putOpt("fullName", peopleName.getFullName());
            peopleNameResult.putOpt("givenName", peopleName.getGivenName());
            peopleNameResult.putOpt("middleName", peopleName.getMiddleName());
            peopleNameResult.putOpt("namePrefix", peopleName.getNamePrefix());
            peopleNameResult.putOpt("nameSuffix", peopleName.getNameSuffix());
            peopleNameResult.putOpt("spelling", peopleName.getSpelling());
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return peopleNameResult;
    }

    public static <T> JSONArray listToJSONArray(final List<T> list, final Mapper<T, JSONObject> mapper)
        throws JSONException {
        final JSONArray array = new JSONArray();
        for (final T item : list) {
            array.put(mapper.map(item));
        }
        return array;
    }

    public static JSONObject fromSparseArrayHmsScanToJSON(final SparseArray<HmsScan> array) {
        final JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                final int key = array.keyAt(i);
                final HmsScan hmsScan = array.get(key);
                json.putOpt(String.valueOf(key), hmsScansToJSON(hmsScan));
            }
        } catch (final JSONException e) {
            Log.e(TAG, "error: " + e.toString());
        }
        return json;
    }

    public static int[] getScanTypes(final JSONArray jsonArray, final CallbackContext callbackContext)
        throws JSONException {
        if (jsonArray.length() < 1) {
            callbackContext.error("The length must be at least 1.");
        }
        final int[] scanTypes = new int[jsonArray.length()];
        for (int i = 1; i < jsonArray.length(); i++) {
            scanTypes[i - 1] = jsonArray.getInt(i);
        }
        return scanTypes;
    }

    public static <T, R> Mapper<T, R> mapperWrapper(final JSONMapper<T, R> jm) {
        return arg -> {
            if (arg == null) {
                return null;
            }
            try {
                return jm.map(arg);
            } catch (final JSONException e) {
                Log.e(TAG, "wrapper :: JSONException, " + e.toString());
                return null;
            }
        };
    }

    public static MLFrame getFrame(final Context context, final JSONObject jsonObject)
        throws JSONException, IOException {
        final String filePath = jsonObject.getString("filePath");
        final Uri uri = Uri.parse(filePath);
        return MLFrame.fromFilePath(context, uri);
    }

    public static String bitmapToBase64(final Bitmap bitmap) {
        final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
        final byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }

    public static <T> String toJSON(final T obj) {
        return GSON.toJson(obj);
    }
}
