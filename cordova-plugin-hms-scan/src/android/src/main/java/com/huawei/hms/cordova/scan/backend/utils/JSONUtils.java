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

package com.huawei.hms.cordova.scan.backend.utils;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.Point;
import android.graphics.Rect;
import android.net.Uri;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.ml.scan.HmsBuildBitmapOption;
import com.huawei.hms.ml.scan.HmsScan;
import com.huawei.hms.mlsdk.common.MLFrame;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.huawei.hms.cordova.scan.backend.utils.CordovaUtils.mapperWrapper;

public final class JSONUtils {
    private static final String TAG = JSONUtils.class.getName();

    public static JSONObject hmsScansToJSON(final HmsScan hmsScan, final CordovaInterface cordova,
                                            final boolean enableReturnBitmap) throws JSONException {
        JSONObject scanResult = hmsScansToJSON(hmsScan);
        if (enableReturnBitmap) {
            scanResult.putOpt("originalBitmap", bitmapToURI(hmsScan.getOriginalBitmap(), cordova));
        }
        return scanResult;
    }

    public static JSONObject hmsScansToJSON(final HmsScan hmsScan) throws JSONException {
        final JSONObject defaultScanResult = new JSONObject();
        defaultScanResult.putOpt("originalValue", hmsScan.getOriginalValue());
        defaultScanResult.putOpt("zoomValue", hmsScan.getZoomValue());
        defaultScanResult.putOpt("showResult", hmsScan.getShowResult());
        defaultScanResult.putOpt("scanTypeForm", hmsScan.getScanTypeForm());
        defaultScanResult.putOpt("scanType", hmsScan.getScanType());
        defaultScanResult.putOpt("showResult", hmsScan.getShowResult());
        defaultScanResult.putOpt("borderRect", borderToJSON(hmsScan.getBorderRect()));
        defaultScanResult.putOpt("cornerPoints", getPoint(hmsScan.getCornerPoints()));

        final int typeForm = hmsScan.getScanTypeForm();
        defaultScanResult.putOpt("typeForm", typeForm);
        if (typeForm == HmsScan.SMS_FORM) {
            defaultScanResult.putOpt("smsContent", smsContentInfoToJSON(hmsScan.getSmsContent()));
        } else if (typeForm == HmsScan.TEL_PHONE_NUMBER_FORM) {
            defaultScanResult.putOpt("telPhoneNumber", telPhoneNumberInfoToJSON(hmsScan.getTelPhoneNumber()));
        } else if (typeForm == HmsScan.BOOK_MARK_FORM) {
            defaultScanResult.putOpt("bookMarkInfo", bookMarkInfoTOJSON(hmsScan.getBookMarkInfo()));
        } else if (typeForm == HmsScan.CONTACT_DETAIL_FORM) {
            defaultScanResult.putOpt("contactDetailInfo", contactDetail(hmsScan.getContactDetail()));
        } else if (typeForm == HmsScan.EMAIL_CONTENT_FORM) {
            defaultScanResult.putOpt("emailContent", emailInfoToJSON(hmsScan.getEmailContent()));
        } else if (typeForm == HmsScan.EVENT_INFO_FORM) {
            defaultScanResult.putOpt("eventInfo", eventInfoToJSON(hmsScan.getEventInfo()));
        } else if (typeForm == HmsScan.DRIVER_INFO_FORM) {
            defaultScanResult.putOpt("driverInfo", driverInfoToJSON(hmsScan.getDriverInfo()));
        } else if (typeForm == HmsScan.VEHICLEINFO_FORM) {
            defaultScanResult.putOpt("vehicleInfo", vehicleInfoToJSON(hmsScan.getVehicleInfo()));
        } else if (typeForm == HmsScan.WIFI_CONNECT_INFO_FORM) {
            defaultScanResult.putOpt("wiFiConnectionInfo", wifiConnectionInfoToJSON(hmsScan.getWiFiConnectionInfo()));
        } else if (typeForm == HmsScan.LOCATION_COORDINATE_FORM) {
            defaultScanResult.putOpt("locationCoordinate", locationCoordinateInfoToJSON(hmsScan.getLocationCoordinate()));
        } else if (typeForm == HmsScan.URL_FORM) {
            defaultScanResult.putOpt("linkUrl", getLinkUrl(hmsScan.getLinkUrl()));
        } else {
            Log.i(TAG, "hmsScansToJSON -> else statement");
        }
        return defaultScanResult;
    }

    private static JSONArray getPoint(Point[] cornerPoints) {
        JSONArray points = new JSONArray();
        for (int i = 0; i < cornerPoints.length; i++) {
            Point cornerPoint = cornerPoints[i];
            try {
                JSONObject jsonObject = new JSONObject();
                jsonObject.putOpt("x", cornerPoint.x);
                jsonObject.putOpt("y", cornerPoint.y);
                points.put(i, jsonObject);
            } catch (JSONException e) {
                Log.e(TAG, "getPoint: error -> " + e.toString());
            }
        }
        return points;
    }

    private static String getRealPathFromUri(Context context, Uri contentUri) {
        Cursor cursor = null;
        try {
            String[] proj = {MediaStore.Images.Media.DATA};
            cursor = context.getContentResolver().query(contentUri, proj, null, null, null);
            if (cursor != null) {
                int columnIndex = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
                cursor.moveToFirst();
                return cursor.getString(columnIndex);
            }
        } finally {
            if (cursor != null) {
                cursor.close();
            }
        }
        return null;
    }

    private static String bitmapToURI(Bitmap originalBitmap, CordovaInterface cordovaInterface) {
        String uuidString = UUID.randomUUID().toString().replace("-", "");
        String uri = MediaStore.Images.Media.insertImage(cordovaInterface.getContext()
                .getContentResolver(), originalBitmap, uuidString, "Original image bitmap");
        return getRealPathFromUri(cordovaInterface.getContext(), Uri.parse(uri));
    }

    private static JSONObject borderToJSON(final Rect rect) throws JSONException {
        return new JSONObject()
                .put("bottom", rect.bottom)
                .put("top", rect.top)
                .put("left", rect.left)
                .put("right", rect.right)
                .put("exactCenterX", rect.exactCenterX())
                .put("centerY", rect.centerY())
                .put("centerX", rect.centerX())
                .put("describeContents", rect.describeContents())
                .put("height", rect.height())
                .put("width", rect.width());
    }

    private static JSONObject telPhoneNumberInfoToJSON(final HmsScan.TelPhoneNumber telPhoneNumber) throws JSONException {
        return new JSONObject()
                .put("telPhoneNumber", telPhoneNumber.getTelPhoneNumber())
                .put("useType", telPhoneNumber.getUseType());
    }

    private static JSONObject smsContentInfoToJSON(final HmsScan.SmsContent smsContent) throws JSONException {
        return new JSONObject()
                .put("destPhoneNumber", smsContent.getDestPhoneNumber())
                .put("msgContent", smsContent.getMsgContent());
    }

    private static JSONObject locationCoordinateInfoToJSON(final HmsScan.LocationCoordinate locationCoordinate)
            throws JSONException {
        return new JSONObject()
                .put("latitude", locationCoordinate.getLatitude())
                .put("longitude", locationCoordinate.getLongitude());
    }

    private static JSONObject wifiConnectionInfoToJSON(final HmsScan.WiFiConnectionInfo wiFiConnectionInfo)
            throws JSONException {
        return new JSONObject()
                .put("cipherMode", wiFiConnectionInfo.getCipherMode())
                .put("password", wiFiConnectionInfo.getPassword())
                .put("ssidNumber", wiFiConnectionInfo.getSsidNumber());
    }

    private static JSONObject vehicleInfoToJSON(final HmsScan.VehicleInfo vehicleInfo) throws JSONException {
        return new JSONObject()
                .put("countryCode", vehicleInfo.getCountryCode())
                .put("modelYear", vehicleInfo.getModelYear())
                .put("plantCode", vehicleInfo.getPlantCode())
                .put("sequentialNumber", vehicleInfo.getSequentialNumber())
                .put("vehicleAttributes", vehicleInfo.getVehicleAttributes())
                .put("vehicleDescriptorSection", vehicleInfo.getVehicleDescriptorSection())
                .put("vehicleIdentifierSection", vehicleInfo.getVehicleIdentifierSection())
                .put("vin", vehicleInfo.getVin())
                .put("worldManufacturerID", vehicleInfo.getWorldManufacturerID());
    }

    private static JSONObject eventInfoToJSON(final HmsScan.EventInfo eventInfo) throws JSONException {
        return new JSONObject()
                .put("abstractInfo", eventInfo.getAbstractInfo())
                .put("condition", eventInfo.getCondition())
                .put("placeInfo", eventInfo.getPlaceInfo())
                .put("sponsor", eventInfo.getSponsor())
                .put("theme", eventInfo.getTheme())
                .put("beginTime", eventTimeInfoToJson(eventInfo.getBeginTime()))
                .put("closeTime", eventTimeInfoToJson(eventInfo.getCloseTime()));
    }

    private static JSONObject eventTimeInfoToJson(final HmsScan.EventTime beginTime) throws JSONException {
        return new JSONObject()
                .put("originalValue", beginTime.getOriginalValue())
                .put("isUTCTime", beginTime.isUTCTime())
                .put("day", beginTime.getDay())
                .put("hours", beginTime.getHours())
                .put("minutes", beginTime.getMinutes())
                .put("month", beginTime.getMonth())
                .put("seconds", beginTime.getSeconds())
                .put("year", beginTime.getYear());
    }

    private static JSONObject emailInfoToJSON(final HmsScan.EmailContent emailContent) throws JSONException {
        return new JSONObject()
                .put("addressInfo", emailContent.getAddressInfo())
                .put("addressType", emailContent.getAddressType())
                .put("bodyInfo", emailContent.getBodyInfo())
                .put("subjectInfo", emailContent.getSubjectInfo());
    }

    private static JSONObject driverInfoToJSON(final HmsScan.DriverInfo driverInfo) throws JSONException {
        return new JSONObject()
                .put("avenue", driverInfo.getAvenue())
                .put("certificateNumber", driverInfo.getCertificateNumber())
                .put("certificateType", driverInfo.getCertificateType())
                .put("city", driverInfo.getCity())
                .put("countryOfIssue", driverInfo.getCountryOfIssue())
                .put("dateOfBirth", driverInfo.getDateOfBirth())
                .put("dateOfExpire", driverInfo.getDateOfExpire())
                .put("dateOfIssue", driverInfo.getDateOfIssue())
                .put("eyeColor", driverInfo.getEyeColor())
                .put("familyName", driverInfo.getFamilyName())
                .put("givenName", driverInfo.getGivenName())
                .put("hairColor", driverInfo.getHairColor())
                .put("height", driverInfo.getHeight())
                .put("middleName", driverInfo.getMiddleName())
                .put("sex", driverInfo.getSex())
                .put("weightRange", driverInfo.getWeightRange())
                .put("province", driverInfo.getProvince())
                .put("zipCode", driverInfo.getZipCode());
    }

    private static JSONObject getLinkUrl(final HmsScan.LinkUrl linkUrl) throws JSONException {
        return new JSONObject()
                .put("theme", linkUrl.getTheme())
                .put("linkValue", linkUrl.getLinkValue());
    }

    public static JSONObject bookMarkInfoTOJSON(final HmsScan.BookMarkInfo bookMarkInfo) throws JSONException {
        return new JSONObject()
                .put("bookPlaceInfo", bookMarkInfo.getBookPlaceInfo())
                .put("bookNum", bookMarkInfo.getBookNum())
                .put("bookType", bookMarkInfo.getBookType())
                .put("bookUri", bookMarkInfo.getBookUri());
    }


    public static JSONObject contactDetail(final HmsScan.ContactDetail contactDetail) throws JSONException {
        final JSONObject contactDetailResult = new JSONObject();
        contactDetailResult.putOpt("title", contactDetail.getTitle());
        contactDetailResult.putOpt("company", contactDetail.getCompany());
        contactDetailResult.putOpt("note", contactDetail.getNote());
        contactDetailResult.putOpt("contactLinks", new JSONArray(contactDetail.getContactLinks()));
        contactDetailResult.putOpt("peopleName", peopleName(contactDetail.getPeopleName()));
        contactDetailResult.putOpt("addressesInfo",
                listToJSONArray(contactDetail.getAddressesInfos(), JSONUtils::addressesInfoToJSON));
        contactDetailResult.putOpt("emailContents",
                listToJSONArray(contactDetail.getEmailContents(), JSONUtils::emailInfoToJSON));
        contactDetailResult.putOpt("telPhoneNumber",
                listToJSONArray(contactDetail.getTelPhoneNumbers(), JSONUtils::telPhoneNumberInfoToJSON));
        return contactDetailResult;
    }

    private static JSONObject addressesInfoToJSON(final HmsScan.AddressInfo addressInfo) throws JSONException {
        return new JSONObject()
                .put("addressDetails", new JSONArray(addressInfo.getAddressDetails()))
                .put("addressType", addressInfo.getAddressType());
    }

    private static JSONObject peopleName(final HmsScan.PeopleName peopleName) throws JSONException {
        return new JSONObject()
                .put("familyName", peopleName.getFamilyName())
                .put("fullName", peopleName.getFullName())
                .put("givenName", peopleName.getGivenName())
                .put("middleName", peopleName.getMiddleName())
                .put("namePrefix", peopleName.getNamePrefix())
                .put("nameSuffix", peopleName.getNameSuffix())
                .put("spelling", peopleName.getSpelling());
    }

    public static <T> JSONArray listToJSONArray(final List<T> list, final Mapper<T, JSONObject> mapper)
            throws JSONException {
        final JSONArray array = new JSONArray();
        for (final T item : list) {
            array.put(mapper.map(item));
        }
        return array;
    }

    public static JSONObject fromSparseArrayHmsScanToJSON(final SparseArray<HmsScan> array) throws JSONException {
        final JSONObject json = new JSONObject();
        for (int i = 0; i < array.size(); i++) {
            final int key = array.keyAt(i);
            final HmsScan hmsScan = array.get(key);
            json.putOpt(String.valueOf(key), hmsScansToJSON(hmsScan));
        }
        return json;
    }

    public static int[] getScanTypes(final JSONArray jsonArray) throws JSONException {
        final int[] scanTypes = new int[jsonArray.length()];
        for (int i = 0; i < jsonArray.length(); i++) {
            scanTypes[i] = jsonArray.getInt(i);
        }
        return scanTypes;
    }

    public static MLFrame getFrame(final Context context, final String filePath) throws IOException {
        final Uri uri = Uri.parse(filePath);
        return MLFrame.fromFilePath(context, uri);
    }

    public static String bitmapToBase64(final Bitmap bitmap) {
        final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
        final byte[] byteArray = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(byteArray, Base64.DEFAULT);
    }

    public static List<String> convertJSONArrayToList(JSONArray jsonArray) throws JSONException {
        List<String> list = new ArrayList<>();
        for (int i = 0; i < jsonArray.length(); i++) {
            list.add(jsonArray.getString(i));
        }
        return list;
    }
}
