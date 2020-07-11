/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.mlkit.utils;

import android.graphics.Bitmap;
import android.graphics.Point;
import android.graphics.Rect;
import android.util.Log;
import android.util.SparseArray;

import com.huawei.hms.cordova.mlkit.tts.TtsAnalyse;
import com.huawei.hms.mlsdk.card.bcr.MLBankCard;
import com.huawei.hms.mlsdk.classification.MLImageClassification;
import com.huawei.hms.mlsdk.common.MLPosition;
import com.huawei.hms.mlsdk.document.MLDocument;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceKeyPoint;
import com.huawei.hms.mlsdk.face.MLFaceShape;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;
import com.huawei.hms.mlsdk.objects.MLObject;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProduct;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProductImage;
import com.huawei.hms.mlsdk.text.MLText;
import com.huawei.hms.mlsdk.text.TextLanguage;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.List;


public class TextUtils {
    private static final String TAG = TextUtils.class.getSimpleName();

    //MLDocument
    public static JSONObject fromMLDocumentToJSON(MLDocument document) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", document.getStringValue());
            result.putOpt("blocks", HMSMLUtils.listToJSONArray(document.getBlocks(), TextUtils::fromMLDocumentBlockToJSON));

        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromMLDocumentBlockToJSON(MLDocument.Block block) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", block.getStringValue());
            result.putOpt("possibility", block.getPossibility());
            result.putOpt("border", borderToJSON(block.getBorder()));
            JSONObject interval = new JSONObject();
            interval.putOpt("intervalType", block.getInterval().getIntervalType());
            interval.putOpt("isTextFollowed", block.getInterval().isTextFollowed());
            result.putOpt("interval", interval);
            result.putOpt("sections", HMSMLUtils.listToJSONArray(block.getSections(), TextUtils::fromMLDocumentSectionsToJSON));
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(block.getLanguageList(), TextUtils::fromTextLanguageToJSON));


        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromMLDocumentSectionsToJSON(MLDocument.Section section) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", section.getStringValue());
            result.putOpt("border", borderToJSON(section.getBorder()));
            JSONObject interval = new JSONObject();
            interval.putOpt("intervalType", section.getInterval().getIntervalType());
            interval.putOpt("isTextFollowed", section.getInterval().isTextFollowed());
            result.putOpt("interval", interval);
            result.putOpt("possibility", section.getPossibility());
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(section.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("lineList", HMSMLUtils.listToJSONArray(section.getLineList(), TextUtils::fromLineListLanguageToJSON));
            result.putOpt("wordList", HMSMLUtils.listToJSONArray(section.getWordList(), TextUtils::fromWordListToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromLineListLanguageToJSON(MLDocument.Line line) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", line.getStringValue());
            result.putOpt("border", borderToJSON(line.getBorder()));
            result.putOpt("possibility", line.getPossibility());
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(line.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("wordList", HMSMLUtils.listToJSONArray(line.getWordList(), TextUtils::fromWordListToJSON));
            result.putOpt("points", HMSMLUtils.listToJSONArray(line.getPoints(), TextUtils::fromPointToJSON));
            JSONObject interval = new JSONObject();
            interval.putOpt("intervalType", line.getInterval().getIntervalType());
            interval.putOpt("isTextFollowed", line.getInterval().isTextFollowed());
            result.putOpt("interval", interval);
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromPointToJSON(Point point) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("x", point.x);
            result.putOpt("y", point.y);
            result.putOpt("describeContents", point.describeContents());
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromWordListToJSON(MLDocument.Word word) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", word.getStringValue());
            result.putOpt("border", borderToJSON(word.getBorder()));
            result.putOpt("characterList", HMSMLUtils.listToJSONArray(word.getCharacterList(), TextUtils::fromCharacterListToJSON));
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(word.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("possibility", word.getPossibility());
            JSONObject interval = new JSONObject();
            interval.putOpt("intervalType", word.getInterval().getIntervalType());
            interval.putOpt("isTextFollowed", word.getInterval().isTextFollowed());
            result.putOpt("interval", interval);
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromCharacterListToJSON(MLDocument.Character character) {
        JSONObject result = new JSONObject();
        try {
            JSONObject interval = new JSONObject();
            if (character.getInterval() != null) {
                interval.putOpt("intervalType", character.getInterval().getIntervalType());
                interval.putOpt("isTextFollowed", character.getInterval().isTextFollowed());
                result.putOpt("interval", interval);
            }
            result.putOpt("stringValue", character.getStringValue());
            result.putOpt("possibility", character.getPossibility());
            result.putOpt("border", borderToJSON(character.getBorder()));
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(character.getLanguageList(), TextUtils::fromTextLanguageToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    //MlText
    public static JSONObject fromMLTextToJSON(MLText text) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", text.getStringValue());
            result.putOpt("blocks", HMSMLUtils.listToJSONArray(text.getBlocks(), TextUtils::fromMLTextBlockToJSON));

        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromMLTextBlockToJSON(MLText.Block block) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("contents", HMSMLUtils.listToJSONArray(block.getContents(), TextUtils::fromBlockContentsToJSON));
            result.putOpt("stringValue", block.getStringValue());
            result.putOpt("possibility", block.getPossibility());
            result.putOpt("language", block.getLanguage());
            result.putOpt("border", borderToJSON(block.getBorder()));
            result.putOpt("vertexes", HMSMLUtils.listToJSONArray(Arrays.asList(block.getVertexes()), TextUtils::fromPointToJSON));
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(block.getLanguageList(), TextUtils::fromTextLanguageToJSON));

        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromBlockContentsToJSON(MLText.TextLine line) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", line.getStringValue());
            result.putOpt("rotatingDegree", line.getRotatingDegree());
            result.putOpt("isVertical", line.isVertical());
            result.putOpt("language", line.getLanguage());
            result.putOpt("border", borderToJSON(line.getBorder()));
            result.putOpt("possibility", line.getPossibility());
            result.putOpt("contents", HMSMLUtils.listToJSONArray(line.getContents(), TextUtils::fromLineContentsToJSON));
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(line.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("vertexes", HMSMLUtils.listToJSONArray(Arrays.asList(line.getVertexes()), TextUtils::fromPointToJSON));

        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromLineContentsToJSON(MLText.Word word) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", word.getStringValue());
            result.putOpt("border", borderToJSON(word.getBorder()));
            result.putOpt("language", word.getLanguage());
            result.putOpt("languageList", HMSMLUtils.listToJSONArray(word.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("possibility", word.getPossibility());
            result.putOpt("vertexes", HMSMLUtils.listToJSONArray(Arrays.asList(word.getVertexes()), TextUtils::fromPointToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }


    public static JSONObject fromTextLanguageToJSON(TextLanguage lang) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("language", lang.getLanguage());
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }


    public static JSONObject fromSparseArrayMLTextBlockToJSON(SparseArray<MLText.Block> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLText.Block textBlock = array.get(key);
                json.putOpt(String.valueOf(key), fromMLTextBlockToJSON(textBlock));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayImageClassificationJSON(SparseArray<MLImageClassification> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLImageClassification classification = array.get(key);
                json.putOpt(String.valueOf(key), fromImageClassificationToJSON(classification));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayStillFaceAnalyseToJSON(SparseArray<MLFace> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLFace mlFace = array.get(key);
                json.putOpt(String.valueOf(key), mlFacetoJSON(mlFace));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayImageSegmentationToJSON(SparseArray<MLImageSegmentation> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLImageSegmentation mlImageSegmentation = array.get(key);
                json.putOpt(String.valueOf(key), getImageSegmentationResult(mlImageSegmentation));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject bankCardResultToJSON(MLBankCard bankCard) throws JSONException {
        JSONObject bankCardResult = new JSONObject();
        bankCardResult.putOpt("expire", bankCard.getExpire());
        bankCardResult.putOpt("number", bankCard.getNumber());
        bankCardResult.putOpt("retCode", bankCard.getRetCode());
        bankCardResult.putOpt("tipsCode", bankCard.getTipsCode());
        if (bankCard.getOriginalBitmap() != null)
            bankCardResult.putOpt("originalBitmap", HMSMLUtils.bitmapToBase64(bankCard.getOriginalBitmap()));
        if (bankCard.getNumberBitmap() != null)
            bankCardResult.putOpt("numberBitmap", HMSMLUtils.bitmapToBase64(bankCard.getNumberBitmap()));
        return bankCardResult;
    }

    public static JSONObject getImageSegmentationResult(MLImageSegmentation imageSegmentationResult) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        Bitmap bitmapFore = imageSegmentationResult.getForeground();
        Bitmap bitmapGrayScale = imageSegmentationResult.getGrayscale();
        Bitmap bitmapOriginal = imageSegmentationResult.getOriginal();
        jsonObject.putOpt("bitmapForeground", HMSMLUtils.bitmapToBase64(bitmapFore));
        jsonObject.putOpt("bitmapGrayscale", HMSMLUtils.bitmapToBase64(bitmapGrayScale));
        jsonObject.putOpt("masks", imageSegmentationResult.getMasks());
        jsonObject.putOpt("bitmapOriginal", HMSMLUtils.bitmapToBase64(bitmapOriginal));
        return jsonObject;
    }

    public static JSONObject mlFacetoJSON(MLFace mFace) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        DecimalFormat decimalFormat = new DecimalFormat("0.000");
        jsonObject.putOpt("leftEyeOpenProbability", decimalFormat.format(mFace.getFeatures().getLeftEyeOpenProbability()));
        jsonObject.putOpt("rightEyeOpenProbability", decimalFormat.format(mFace.getFeatures().getRightEyeOpenProbability()));
        jsonObject.putOpt("moustacheProbability", decimalFormat.format(mFace.getFeatures().getMoustacheProbability()));
        jsonObject.putOpt("glassProbability", decimalFormat.format(mFace.getFeatures().getSunGlassProbability()));
        jsonObject.putOpt("hatProbability", decimalFormat.format(mFace.getFeatures().getHatProbability()));
        jsonObject.putOpt("age", mFace.getFeatures().getAge());
        jsonObject.putOpt("gender", ((mFace.getFeatures().getSexProbability() > 0.5f) ? "Female" : "Male"));
        jsonObject.putOpt("rotationAngleY", decimalFormat.format(mFace.getRotationAngleY()));
        jsonObject.putOpt("rotationAngleZ", decimalFormat.format(mFace.getRotationAngleZ()));
        jsonObject.putOpt("rotationAngleX", decimalFormat.format(mFace.getRotationAngleX()));
        return jsonObject;
    }

    public static JSONObject fromImageClassificationToJSON(MLImageClassification classification) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("classificationIdentity", classification.getClassificationIdentity());
            result.putOpt("possibility", classification.getPossibility());
            result.putOpt("name", classification.getName());

        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject borderToJSON(Rect rect) {
        JSONObject border = new JSONObject();
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
        } catch (JSONException e) {
            Log.e(TAG, "error:" + e.getMessage());
        }
        return border;
    }

    public static JSONObject productInfoToJSON(MLVisionSearchProduct visionSearchProduct) {
        JSONObject positionInfo = new JSONObject();
        try {
            positionInfo.putOpt("possibility", visionSearchProduct.getPossibility());
            positionInfo.putOpt("productId", visionSearchProduct.getProductId());
            positionInfo.putOpt("imageList", HMSMLUtils.listToJSONArray(visionSearchProduct.getImageList(), TextUtils::productImageToJSON));
        } catch (Exception e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return positionInfo;
    }

    private static JSONObject productImageToJSON(MLVisionSearchProductImage visionSearchProductImage) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("imageId", visionSearchProductImage.getImageId());
        jsonObject.putOpt("possibility", visionSearchProductImage.getPossibility());
        jsonObject.putOpt("productId", visionSearchProductImage.getProductId());
        return jsonObject;
    }

    public static JSONObject faceAllPointToJSON(MLPosition mlPosition) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("X", mlPosition.getX());
        jsonObject.putOpt("Y", mlPosition.getY());
        jsonObject.putOpt("Z", mlPosition.getZ());
        return jsonObject;
    }

    public static JSONObject faceKeyPointsToJSON(MLFaceKeyPoint mlFaceKeyPoint) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("type", mlFaceKeyPoint.getType());
        JSONObject points = new JSONObject();
        points.putOpt("X", mlFaceKeyPoint.getPoint().getX());
        points.putOpt("Y", mlFaceKeyPoint.getPoint().getY());
        points.putOpt("Z", mlFaceKeyPoint.getPoint().getZ());
        jsonObject.putOpt("point", points);
        JSONObject coordinatePoint = new JSONObject();
        coordinatePoint.putOpt("x", mlFaceKeyPoint.getCoordinatePoint().x);
        coordinatePoint.putOpt("y", mlFaceKeyPoint.getCoordinatePoint().y);
        coordinatePoint.putOpt("describeContents", mlFaceKeyPoint.getCoordinatePoint().describeContents());
        points.putOpt("coordinatePoint", coordinatePoint);
        return jsonObject;
    }

    public static JSONObject faceShapeListToJSON(MLFaceShape faceShape) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("points", HMSMLUtils.listToJSONArray(faceShape.getPoints(), TextUtils::faceAllPointToJSON));
        jsonObject.putOpt("faceShapeType", faceShape.getFaceShapeType());
        return jsonObject;
    }
}
