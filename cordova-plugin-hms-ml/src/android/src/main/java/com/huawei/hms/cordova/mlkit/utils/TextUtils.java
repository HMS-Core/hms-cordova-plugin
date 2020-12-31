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

package com.huawei.hms.cordova.mlkit.utils;

import static com.huawei.hms.cordova.mlkit.utils.PlatformUtils.mapperWrapper;

import android.graphics.Bitmap;
import android.graphics.Point;
import android.graphics.Rect;
import android.util.Log;
import android.util.SparseArray;

import com.google.gson.Gson;
import com.huawei.hms.common.size.Size;
import com.huawei.hms.cordova.mlkit.providers.imageproviders.product.MLRealProductBean;
import com.huawei.hms.mlsdk.card.bcr.MLBankCard;
import com.huawei.hms.mlsdk.classification.MLImageClassification;
import com.huawei.hms.mlsdk.common.MLApplicationSetting;
import com.huawei.hms.mlsdk.common.MLCoordinate;
import com.huawei.hms.mlsdk.common.MLFrame.Property;
import com.huawei.hms.mlsdk.common.MLPosition;
import com.huawei.hms.mlsdk.document.MLDocument;
import com.huawei.hms.mlsdk.dsc.MLDocumentSkewCorrectionResult;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceKeyPoint;
import com.huawei.hms.mlsdk.face.MLFaceShape;
import com.huawei.hms.mlsdk.face.face3d.ML3DFace;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoint;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypoints;
import com.huawei.hms.mlsdk.imagesuperresolution.MLImageSuperResolutionResult;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentation;
import com.huawei.hms.mlsdk.landmark.MLRemoteLandmark;
import com.huawei.hms.mlsdk.langdetect.MLDetectedLang;
import com.huawei.hms.mlsdk.livenessdetection.MLLivenessCaptureResult;
import com.huawei.hms.mlsdk.model.download.MLModelDownloadStrategy;
import com.huawei.hms.mlsdk.objects.MLObject;
import com.huawei.hms.mlsdk.productvisionsearch.MLProductVisionSearch;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProduct;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProductImage;
import com.huawei.hms.mlsdk.scd.MLSceneDetection;
import com.huawei.hms.mlsdk.skeleton.MLJoint;
import com.huawei.hms.mlsdk.skeleton.MLSkeleton;
import com.huawei.hms.mlsdk.text.MLText;
import com.huawei.hms.mlsdk.text.TextLanguage;
import com.huawei.hms.mlsdk.textimagesuperresolution.MLTextImageSuperResolution;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TextUtils {
    public static final Mapper<MLBankCard, JSONObject> FROM_BCR_TO_JSON_OBJECT = mapperWrapper(
        (MLBankCard mlBankCard) -> {
            JSONObject map = new JSONObject();
            map.put("expire", mlBankCard.getExpire());
            map.put("number", mlBankCard.getNumber());
            map.put("retCode", mlBankCard.getRetCode());
            map.put("tipsCode", mlBankCard.getTipsCode());
            if (mlBankCard.getOriginalBitmap() != null) {
                map.put("originalBitmap", HMSMLUtils.bitmapToBase64(mlBankCard.getOriginalBitmap()));
            }
            if (mlBankCard.getNumberBitmap() != null) {
                map.put("numberBitmap", HMSMLUtils.bitmapToBase64(mlBankCard.getNumberBitmap()));
            }
            return map;
        }, new JSONObject());
    public static final Mapper<MLTextImageSuperResolution, JSONObject> FROM_TISR_TO_JSON_OBJECT = mapperWrapper(
        (MLTextImageSuperResolution mlTextImageSuperResolution) -> {
            JSONObject map = new JSONObject();
            map.put("superBitmap", HMSMLUtils.bitmapToBase64(mlTextImageSuperResolution.getBitmap()));
            return map;
        }, new JSONObject());
    public static final Mapper<MLImageSegmentation, JSONObject> FROM_IMGSEG_TO_JSON_OBJECT = mapperWrapper(
        (MLImageSegmentation mlImageSegmentation) -> {
            JSONObject map = new JSONObject();
            Bitmap bitmapFore = mlImageSegmentation.getForeground();
            Bitmap bitmapGrayScale = mlImageSegmentation.getGrayscale();
            Bitmap bitmapOriginal = mlImageSegmentation.getOriginal();
            map.putOpt("bitmapForeground", HMSMLUtils.bitmapToBase64(bitmapFore));
            map.putOpt("bitmapGrayscale", HMSMLUtils.bitmapToBase64(bitmapGrayScale));
            map.putOpt("masks", mlImageSegmentation.getMasks());
            map.putOpt("bitmapOriginal", HMSMLUtils.bitmapToBase64(bitmapOriginal));
            return map;
        }, new JSONObject());
    public static final Mapper<MLImageSuperResolutionResult, JSONObject> FROM_ISR_TO_JSON_OBJECT = mapperWrapper(
        (MLImageSuperResolutionResult mlImageSuperResolutionResult) -> {
            JSONObject map = new JSONObject();
            map.put("bitmap", HMSMLUtils.bitmapToBase64(mlImageSuperResolutionResult.getBitmap()));
            return map;
        }, new JSONObject());
    public static final Mapper<List<MLImageClassification>, JSONObject> FROM_MLCLASS_TO_JSON_OBJECT = mapperWrapper(
        (List<MLImageClassification> mlImageClassification) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlImageClassification, TextUtils::classificationResultToJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());

    public static final Mapper<List<MLDetectedLang>, JSONObject> FROM_MLLANG_TO_JSON_OBJECT = mapperWrapper(
        (List<MLDetectedLang> mlDetectedLangs) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlDetectedLangs, TextUtils::langDetectResultTOJSON);
            map.putOpt("result", array);

            return map;
        }, new JSONObject());
    public static final Mapper<List<MLSceneDetection>, JSONObject> FROM_MLSCEN_TO_JSON_OBJECT = mapperWrapper(
        (List<MLSceneDetection> mlSceneDetections) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlSceneDetections, TextUtils::mlSceneListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());
    public static final Mapper<List<MLSkeleton>, JSONObject> FROM_MLSKELETON_TO_JSON_OBJECT = mapperWrapper(
        (List<MLSkeleton> mlSkeletons) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlSkeletons, TextUtils::mlSkeletonsListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());
    public static final Mapper<List<ML3DFace>, JSONObject> FROM_ML3DFACE_TO_JSON_OBJECT = mapperWrapper(
        (List<ML3DFace> mlFace) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlFace, TextUtils::ml3DFacetoJSON);
            map.putOpt("result", array);

            return map;
        }, new JSONObject());
    private static final String TAG = TextUtils.class.getSimpleName();
    public static final Mapper<List<MLObject>, JSONObject> FROM_MLOBJECT_TO_JSON_OBJECT = mapperWrapper(
        (List<MLObject> mlObjects) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlObjects, TextUtils::mlObjectsListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());
    public static final Mapper<MLText, JSONObject> FROM_MLTEXT_TO_JSON_OBJECT = mapperWrapper((MLText mlText) -> {
        JSONObject map = new JSONObject();
        map.put("stringValue", mlText.getStringValue());
        map.put("blocks", HMSMLUtils.listToJSONArray(mlText.getBlocks(), TextUtils::fromMLTextBlockToJSON));
        return map;
    }, new JSONObject());
    public static final Mapper<MLDocument, JSONObject> FROM_MLDOC_TO_JSON_OBJECT = mapperWrapper(
        (MLDocument mlDocument) -> {
            JSONObject map = new JSONObject();
            map.put("stringValue", mlDocument.getStringValue());
            map.put("blocks", HMSMLUtils.listToJSONArray(mlDocument.getBlocks(), TextUtils::fromMLDocumentBlockToJSON));
            return map;
        }, new JSONObject());
    public static final Mapper<List<MLFace>, JSONObject> FROM_MLFACE_TO_JSON_OBJECT = mapperWrapper(
        (List<MLFace> mlFace) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlFace, TextUtils::mlFacetoJSON);
            map.putOpt("result", array);

            return map;
        }, new JSONObject());
    public static final Mapper<List<MLRemoteLandmark>, JSONObject> FROM_MLREMOTELANDMARK_TO_JSON_OBJECT = mapperWrapper(
        (List<MLRemoteLandmark> mlRemoteLandmarks) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlRemoteLandmarks, TextUtils::landmarkResultToJSON);
            map.putOpt("result", array);

            return map;
        }, new JSONObject());
    public static final Mapper<List<MLHandKeypoints>, JSONObject> FROM_MLHAND_TO_JSON_OBJECT = mapperWrapper(
        (List<MLHandKeypoints> mlHandKeypoints) -> {
            JSONObject map = new JSONObject();
            JSONArray array = HMSMLUtils.listToJSONArray(mlHandKeypoints, TextUtils::mlHandKeypointsListTOJSON);
            map.putOpt("result", array);
            return map;
        }, new JSONObject());

    private static Gson gson = new Gson();

    private static JSONObject langDetectResultTOJSON(final MLDetectedLang detectedLang) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("langCode", detectedLang.getLangCode());
        jsonObject.putOpt("probability", detectedLang.getProbability());
        jsonObject.putOpt("hashCode", detectedLang.hashCode());
        return jsonObject;
    }

    //MLDocument
    public static JSONObject fromMLDocumentToJSON(final MLDocument document) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", document.getStringValue());
            result.putOpt("blocks",
                HMSMLUtils.listToJSONArray(document.getBlocks(), TextUtils::fromMLDocumentBlockToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromMLDocumentBlockToJSON(final MLDocument.Block block) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", block.getStringValue());
            result.putOpt("possibility", block.getPossibility());
            result.putOpt("border", borderToJSON(block.getBorder()));
            JSONObject interval = new JSONObject();
            interval.putOpt("intervalType", block.getInterval().getIntervalType());
            interval.putOpt("isTextFollowed", block.getInterval().isTextFollowed());
            result.putOpt("interval", interval);
            result.putOpt("sections",
                HMSMLUtils.listToJSONArray(block.getSections(), TextUtils::fromMLDocumentSectionsToJSON));
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(block.getLanguageList(), TextUtils::fromTextLanguageToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromMLDocumentSectionsToJSON(final MLDocument.Section section) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", section.getStringValue());
            result.putOpt("border", borderToJSON(section.getBorder()));
            JSONObject interval = new JSONObject();
            interval.putOpt("intervalType", section.getInterval().getIntervalType());
            interval.putOpt("isTextFollowed", section.getInterval().isTextFollowed());
            result.putOpt("interval", interval);
            result.putOpt("possibility", section.getPossibility());
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(section.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("lineList",
                HMSMLUtils.listToJSONArray(section.getLineList(), TextUtils::fromLineListLanguageToJSON));
            result.putOpt("wordList", HMSMLUtils.listToJSONArray(section.getWordList(), TextUtils::fromWordListToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromLineListLanguageToJSON(final MLDocument.Line line) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", line.getStringValue());
            result.putOpt("border", borderToJSON(line.getBorder()));
            result.putOpt("possibility", line.getPossibility());
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(line.getLanguageList(), TextUtils::fromTextLanguageToJSON));
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

    public static JSONObject fromPointToJSON(Point point) {
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

    private static JSONObject fromWordListToJSON(final MLDocument.Word word) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", word.getStringValue());
            result.putOpt("border", borderToJSON(word.getBorder()));
            result.putOpt("characterList",
                HMSMLUtils.listToJSONArray(word.getCharacterList(), TextUtils::fromCharacterListToJSON));
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(word.getLanguageList(), TextUtils::fromTextLanguageToJSON));
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

    private static JSONObject fromCharacterListToJSON(final MLDocument.Character character) {
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
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(character.getLanguageList(), TextUtils::fromTextLanguageToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    //MlText
    public static JSONObject fromMLTextToJSON(final MLText text) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", text.getStringValue());
            result.putOpt("blocks", HMSMLUtils.listToJSONArray(text.getBlocks(), TextUtils::fromMLTextBlockToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromMLTextBlockToJSON(final MLText.Block block) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("contents",
                HMSMLUtils.listToJSONArray(block.getContents(), TextUtils::fromBlockContentsToJSON));
            result.putOpt("stringValue", block.getStringValue());
            result.putOpt("possibility", block.getPossibility());
            result.putOpt("language", block.getLanguage());
            result.putOpt("border", borderToJSON(block.getBorder()));
            result.putOpt("vertexes",
                HMSMLUtils.listToJSONArray(Arrays.asList(block.getVertexes()), TextUtils::fromPointToJSON));
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(block.getLanguageList(), TextUtils::fromTextLanguageToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromBlockContentsToJSON(final MLText.TextLine line) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", line.getStringValue());
            result.putOpt("rotatingDegree", line.getRotatingDegree());
            result.putOpt("isVertical", line.isVertical());
            result.putOpt("language", line.getLanguage());
            result.putOpt("border", borderToJSON(line.getBorder()));
            result.putOpt("possibility", line.getPossibility());
            result.putOpt("contents",
                HMSMLUtils.listToJSONArray(line.getContents(), TextUtils::fromLineContentsToJSON));
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(line.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("vertexes",
                HMSMLUtils.listToJSONArray(Arrays.asList(line.getVertexes()), TextUtils::fromPointToJSON));

        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    private static JSONObject fromLineContentsToJSON(final MLText.Word word) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("stringValue", word.getStringValue());
            result.putOpt("border", borderToJSON(word.getBorder()));
            result.putOpt("language", word.getLanguage());
            result.putOpt("languageList",
                HMSMLUtils.listToJSONArray(word.getLanguageList(), TextUtils::fromTextLanguageToJSON));
            result.putOpt("possibility", word.getPossibility());
            result.putOpt("vertexes",
                HMSMLUtils.listToJSONArray(Arrays.asList(word.getVertexes()), TextUtils::fromPointToJSON));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromTextLanguageToJSON(final TextLanguage lang) {
        JSONObject result = new JSONObject();
        try {
            result.putOpt("language", lang.getLanguage());
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return result;
    }

    public static JSONObject fromSparseArrayMLTextBlockToJSON(final SparseArray<MLText.Block> array) {
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

    public static JSONObject fromSparseArrayImageClassificationJSON(final SparseArray<MLImageClassification> array) {
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

    public static JSONObject fromSparseArrayImageObjectJSON(final SparseArray<MLObject> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLObject object = array.get(key);
                json.putOpt(String.valueOf(key), mlObjectsListTOJSON(object));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayStillFaceAnalyseToJSON(final SparseArray<MLFace> array) {
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

    public static JSONObject fromSparseArrayStillFace3DAnalyseToJSON(final SparseArray<ML3DFace> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                ML3DFace mlFace = array.get(key);
                json.putOpt(String.valueOf(key), ml3DFacetoJSON(mlFace));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayImageSegmentationToJSON(final SparseArray<MLImageSegmentation> array) {
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

    public static JSONObject bankCardResultToJSON(final MLBankCard bankCard) throws JSONException {
        JSONObject bankCardResult = new JSONObject();
        bankCardResult.putOpt("expire", bankCard.getExpire());
        bankCardResult.putOpt("number", bankCard.getNumber());
        bankCardResult.putOpt("retCode", bankCard.getRetCode());
        bankCardResult.putOpt("tipsCode", bankCard.getTipsCode());
        if (bankCard.getOriginalBitmap() != null) {
            bankCardResult.putOpt("originalBitmap", HMSMLUtils.bitmapToBase64(bankCard.getOriginalBitmap()));
        }
        if (bankCard.getNumberBitmap() != null) {
            bankCardResult.putOpt("numberBitmap", HMSMLUtils.bitmapToBase64(bankCard.getNumberBitmap()));
        }
        return bankCardResult;
    }

    public static JSONObject getImageSegmentationResult(final MLImageSegmentation imageSegmentationResult)
        throws JSONException {
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

    public static JSONObject mlLivenessResult(final MLLivenessCaptureResult mlLivenessCaptureResult)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();

        Bitmap bitmapOriginal = mlLivenessCaptureResult.getBitmap();
        jsonObject.putOpt("isLive", mlLivenessCaptureResult.isLive());
        jsonObject.putOpt("pitch", mlLivenessCaptureResult.getPitch());
        jsonObject.putOpt("roll", mlLivenessCaptureResult.getRoll());
        jsonObject.putOpt("yaw", mlLivenessCaptureResult.getYaw());
        jsonObject.putOpt("score", mlLivenessCaptureResult.getScore());
        jsonObject.putOpt("bitmapOriginal", HMSMLUtils.bitmapToBase64(bitmapOriginal));
        return jsonObject;
    }

    public static JSONObject mlFacetoJSON(final MLFace mlFace) throws JSONException {
        JSONObject facesObject = new JSONObject();
        facesObject.putOpt("opennessOfLeftEye", mlFace.opennessOfLeftEye());
        facesObject.putOpt("tracingIdentity", mlFace.getTracingIdentity());
        facesObject.putOpt("possibilityOfSmiling", mlFace.possibilityOfSmiling());
        facesObject.putOpt("opennessOfRightEye", mlFace.opennessOfRightEye());
        facesObject.putOpt("rotationAngleX", mlFace.getRotationAngleX());
        facesObject.putOpt("rotationAngleY", mlFace.getRotationAngleY());
        facesObject.putOpt("rotationAngleZ", mlFace.getRotationAngleZ());
        facesObject.putOpt("height", mlFace.getHeight());
        facesObject.putOpt("width", mlFace.getWidth());
        facesObject.putOpt("border", TextUtils.borderToJSON(mlFace.getBorder()));
        JSONObject featuresFace = new JSONObject();
        featuresFace.putOpt("sunGlassProbability", mlFace.getFeatures().getSunGlassProbability());
        featuresFace.putOpt("sexProbability", mlFace.getFeatures().getSexProbability());
        featuresFace.putOpt("rightEyeOpenProbability", mlFace.getFeatures().getRightEyeOpenProbability());
        featuresFace.putOpt("moustacheProbability", mlFace.getFeatures().getMoustacheProbability());
        featuresFace.putOpt("leftEyeOpenProbability", mlFace.getFeatures().getLeftEyeOpenProbability());
        featuresFace.putOpt("age", mlFace.getFeatures().getAge());
        featuresFace.putOpt("hatProbability", mlFace.getFeatures().getHatProbability());
        facesObject.putOpt("features", featuresFace);
        JSONObject emotions = new JSONObject();
        emotions.putOpt("surpriseProbability", mlFace.getEmotions().getSurpriseProbability());
        emotions.putOpt("smilingProbability", mlFace.getEmotions().getSmilingProbability());
        emotions.putOpt("sadProbability", mlFace.getEmotions().getSadProbability());
        emotions.putOpt("neutralProbability", mlFace.getEmotions().getNeutralProbability());
        emotions.putOpt("fearProbability", mlFace.getEmotions().getFearProbability());
        emotions.putOpt("disgustProbability", mlFace.getEmotions().getDisgustProbability());
        emotions.putOpt("angryProbability", mlFace.getEmotions().getAngryProbability());
        facesObject.putOpt("emotions", emotions);

        facesObject.putOpt("allPoints",
            HMSMLUtils.listToJSONArray(mlFace.getAllPoints(), TextUtils::faceAllPointToJSON));
        facesObject.putOpt("keyPoints",
            HMSMLUtils.listToJSONArray(mlFace.getFaceKeyPoints(), TextUtils::faceKeyPointsToJSON));
        facesObject.putOpt("faceShapeList",
            HMSMLUtils.listToJSONArray(mlFace.getFaceShapeList(), TextUtils::faceShapeListToJSON));
        return facesObject;
    }

    public static JSONObject ml3DFacetoJSON(final ML3DFace mlFace) throws JSONException {
        JSONObject facesObject = new JSONObject();
        facesObject.putOpt("3DfaceEulerX", mlFace.get3DFaceEulerX());
        facesObject.putOpt("3DfaceEulerY", mlFace.get3DFaceEulerY());
        facesObject.putOpt("3DfaceEulerZ", mlFace.get3DFaceEulerZ());
        facesObject.putOpt("3DAllVertexs",
            HMSMLUtils.listToJSONArray(mlFace.get3DAllVertexs(), TextUtils::faceAllPointToJSON));

        return facesObject;
    }

    public static JSONObject fromImageClassificationToJSON(final MLImageClassification classification) {
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

    public static JSONObject borderToJSON(final Rect rect) {
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

    public static JSONObject faceAllPointToJSON(final MLPosition mlPosition) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("X", mlPosition.getX());
        jsonObject.putOpt("Y", mlPosition.getY());
        jsonObject.putOpt("Z", mlPosition.getZ());
        return jsonObject;
    }

    public static JSONObject faceKeyPointsToJSON(final MLFaceKeyPoint mlFaceKeyPoint) throws JSONException {
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

    public static JSONObject faceShapeListToJSON(final MLFaceShape faceShape) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("points", HMSMLUtils.listToJSONArray(faceShape.getPoints(), TextUtils::faceAllPointToJSON));
        jsonObject.putOpt("faceShapeType", faceShape.getFaceShapeType());
        return jsonObject;
    }

    public static JSONObject classificationResultToJSON(final MLImageClassification mlImageClassification)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("identity", mlImageClassification.getClassificationIdentity());
        jsonObject.putOpt("name", mlImageClassification.getName());
        jsonObject.putOpt("possibility", mlImageClassification.getPossibility());
        jsonObject.putOpt("hashCode", mlImageClassification.hashCode());
        return jsonObject;
    }

    public static JSONObject pluginProductResultToJSON(final MLRealProductBean mlRealProductBean) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("imgUrl", mlRealProductBean.getImgUrl());
        jsonObject.putOpt("id", mlRealProductBean.getId());
        jsonObject.putOpt("other", mlRealProductBean.getOther());
        return jsonObject;
    }

    public static JSONObject landmarkResultToJSON(final MLRemoteLandmark landmark) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("landmark", landmark.getLandmark());
        jsonObject.putOpt("landmarkIdentity", landmark.getLandmarkIdentity());
        jsonObject.putOpt("possibility", landmark.getPossibility());
        jsonObject.putOpt("border", borderToJSON(landmark.getBorder()));
        jsonObject.putOpt("positionInfo",
            HMSMLUtils.listToJSONArray(landmark.getPositionInfos(), TextUtils::positionInfoToJSON));
        return jsonObject;
    }

    public static JSONObject positionInfoToJSON(final MLCoordinate coordinate) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("lng", coordinate.getLng());
        jsonObject.putOpt("lat", coordinate.getLat());
        return jsonObject;
    }

    public static JSONObject mlHandKeypointsListTOJSON(final MLHandKeypoints mlHandKeypoints) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("handkeyPoints",
            HMSMLUtils.listToJSONArray(mlHandKeypoints.getHandKeypoints(), TextUtils::handKeypointsListTOJSON));
        jsonObject.putOpt("rect", TextUtils.borderToJSON(mlHandKeypoints.getRect()));
        jsonObject.putOpt("score", mlHandKeypoints.getScore());
        return jsonObject;
    }

    private static JSONObject handKeypointsListTOJSON(final MLHandKeypoint mlHandKeypoint) throws JSONException {
        JSONObject handKeyPointsJSON = new JSONObject();
        handKeyPointsJSON.putOpt("x", mlHandKeypoint.getPointX());
        handKeyPointsJSON.putOpt("y", mlHandKeypoint.getPointY());
        handKeyPointsJSON.putOpt("score", mlHandKeypoint.getScore());
        handKeyPointsJSON.putOpt("type", mlHandKeypoint.getType());
        return handKeyPointsJSON;
    }

    public static JSONObject mlObjectsListTOJSON(final MLObject mlObject) throws JSONException {
        JSONObject mlObjectsListJSON = new JSONObject();
        mlObjectsListJSON.putOpt("border", TextUtils.borderToJSON(mlObject.getBorder()));
        mlObjectsListJSON.putOpt("tracingIdentity", mlObject.getTracingIdentity());
        mlObjectsListJSON.putOpt("typeIdentity", mlObject.getTypeIdentity());
        mlObjectsListJSON.putOpt("typePossibility", mlObject.getTypePossibility());
        return mlObjectsListJSON;
    }

    public static JSONObject mlSkeletonsListTOJSON(final MLSkeleton mlSkeleton) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("joints", HMSMLUtils.listToJSONArray(mlSkeleton.getJoints(), TextUtils::mlSkeletonsTOJSON));
        return jsonObject;
    }

    private static JSONObject mlSkeletonsTOJSON(final MLJoint mlJoint) throws JSONException {
        JSONObject mljointsJSON = new JSONObject();
        mljointsJSON.putOpt("x", mlJoint.getPointX());
        mljointsJSON.putOpt("y", mlJoint.getPointY());
        mljointsJSON.putOpt("score", mlJoint.getScore());
        mljointsJSON.putOpt("type", mlJoint.getType());
        mljointsJSON.putOpt("hashCode", mlJoint.hashCode());
        return mljointsJSON;
    }

    public static JSONObject mlSceneListTOJSON(final MLSceneDetection mlSceneDetection) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("confidence", mlSceneDetection.getConfidence());
        jsonObject.putOpt("result", mlSceneDetection.getResult());

        return jsonObject;
    }

    public static JSONArray mlProductListTOJSON(final List<MLProductVisionSearch> mlProductVisionSearch)
        throws JSONException {
        ArrayList<Map<String, Object>> prdList = new ArrayList<>();
        for (int i = 0; i < mlProductVisionSearch.size(); i++) {
            Map<String, Object> map = new HashMap<>();
            MLProductVisionSearch search = mlProductVisionSearch.get(i);
            map.put("border", borderToJSON(search.getBorder()));
            map.put("type", search.getType());
            map.put("productList", TextUtils.mlProductTOJSON(search.getProductList()));
            prdList.add(map);
        }
        return new JSONArray(prdList);
    }

    public static JSONArray mlProductTOJSON(final List<MLVisionSearchProduct> mlVisionSearchProduct)
        throws JSONException {
        ArrayList<Map<String, Object>> productList = new ArrayList<>();
        for (int i = 0; i < mlVisionSearchProduct.size(); i++) {
            Map<String, Object> map = new HashMap<>();
            MLVisionSearchProduct product = mlVisionSearchProduct.get(i);
            map.put("customContent", product.getCustomContent());
            map.put("imageList", TextUtils.mlProductImageTOJSON(product.getImageList()));
            map.put("possibility", product.getPossibility());
            map.put("productId", product.getProductId());
            map.put("productUrl", product.getProductUrl());
            productList.add(map);
        }

        return new JSONArray(productList);
    }

    public static JSONArray mlProductImageTOJSON(final List<MLVisionSearchProductImage> mlVisionSearchProductImage)
        throws JSONException {
        ArrayList<Map<String, Object>> imageList = new ArrayList<>();
        for (int i = 0; i < mlVisionSearchProductImage.size(); i++) {
            Map<String, Object> map = new HashMap<>();
            MLVisionSearchProductImage image = mlVisionSearchProductImage.get(i);
            map.put("possibility", image.getPossibility());
            map.put("imageId", image.getImageId());
            map.put("productId", image.getProductId());
            imageList.add(map);
        }
        return new JSONArray(imageList);
    }

    public static boolean isNullOrEmpty(final String item) {
        return null == item || item.isEmpty();
    }

    public static <T> String toJSON(T obj) {
        return gson.toJson(obj);
    }

    public static <T> T toObject(final JSONObject jsonObject, final Class<T> clazz) {
        if (jsonObject != null) {
            return gson.fromJson(jsonObject.toString(), clazz);
        } else {
            return null;
        }

    }

    public static JSONObject downloadStrategy(final MLModelDownloadStrategy mlModelDownloadStrategy)
        throws JSONException {
        JSONObject object = new JSONObject();
        object.putOpt("isChargingNeed", mlModelDownloadStrategy.isChargingNeed());
        object.putOpt("isDeviceIdleNeed", mlModelDownloadStrategy.isDeviceIdleNeed());
        object.putOpt("isWifiNeed", mlModelDownloadStrategy.isWifiNeed());
        return object;
    }

    public static JSONObject propertyFunc(final Property property) throws JSONException {
        JSONObject propertyJSON = new JSONObject();
        propertyJSON.putOpt("formatType", property.getFormatType());
        propertyJSON.putOpt("height", property.getHeight());
        propertyJSON.putOpt("itemIdentity", property.getItemIdentity());
        propertyJSON.putOpt("quadrant", property.getQuadrant());
        propertyJSON.putOpt("timestamp", property.getTimestamp());
        propertyJSON.putOpt("width", property.getWidth());
        return propertyJSON;
    }

    public static JSONObject fromSparseArraySceneToJSON(final SparseArray<MLSceneDetection> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLSceneDetection mlSceneDetection = array.get(key);
                json.putOpt(String.valueOf(key), getScanResult(mlSceneDetection));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayISRToJSON(final SparseArray<MLImageSuperResolutionResult> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLImageSuperResolutionResult mlImageSuperResolutionResult = array.get(key);
                json.putOpt(String.valueOf(key), getISRResult(mlImageSuperResolutionResult));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayTISRToJSON(final SparseArray<MLTextImageSuperResolution> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLTextImageSuperResolution mlTextImageSuperResolution = array.get(key);
                json.putOpt(String.valueOf(key), getTISRResult(mlTextImageSuperResolution));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject fromSparseArrayCompositeToJSON(final SparseArray<Object> array) throws JSONException {
        JSONObject json = new JSONObject();
        List<Object> list = new ArrayList<>(array.size());
        try {
            for (int i = 0; i < array.size(); i++) {
                list.add(array.get(i));
            }
            json.putOpt("result", gson.toJson(list));
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }

        return json;
    }

    public static JSONObject fromSparseArrayDocSkewToJSON(final SparseArray<MLDocumentSkewCorrectionResult> array) {
        JSONObject json = new JSONObject();
        try {
            for (int i = 0; i < array.size(); i++) {
                int key = array.keyAt(i);
                MLDocumentSkewCorrectionResult mlDocumentSkewCorrectionAnalyzer = array.get(key);
                json.putOpt(String.valueOf(key), getDocSkewResult(mlDocumentSkewCorrectionAnalyzer));
            }
        } catch (JSONException e) {
            Log.e(TAG, "error: " + e.getMessage());
        }
        return json;
    }

    public static JSONObject mlSize(final Size size) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("height", size.getHeight());
        jsonObject.putOpt("width", size.getWidth());
        return jsonObject;
    }

    public static JSONObject getApplicationSetting(final MLApplicationSetting mlApplicationSetting)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("apiKey", mlApplicationSetting.getApiKey());
        jsonObject.putOpt("certFingerprint", mlApplicationSetting.getCertFingerprint());
        jsonObject.putOpt("appID", mlApplicationSetting.getAppId());
        jsonObject.putOpt("acceptHa", mlApplicationSetting.getAcceptHa());
        jsonObject.putOpt("sdkVersion", mlApplicationSetting.getMLSdkVersion());
        jsonObject.putOpt("packageName", mlApplicationSetting.getPackageName());
        jsonObject.putOpt("region", mlApplicationSetting.getRegion());
        jsonObject.putOpt("extProperties", mlApplicationSetting.getExtProperties());
        jsonObject.putOpt("serviceUrl", mlApplicationSetting.getMLServiceUrls());
        return jsonObject;
    }

    public static JSONObject getDocSkewResult(final MLDocumentSkewCorrectionResult mlDocumentSkewCorrectionResult)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("bitmap", HMSMLUtils.bitmapToBase64(mlDocumentSkewCorrectionResult.getCorrected()));
        jsonObject.putOpt("resultCode", mlDocumentSkewCorrectionResult.getResultCode());

        return jsonObject;
    }

    public static JSONObject getISRResult(final MLImageSuperResolutionResult mlImageSuperResolutionResult)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("result", HMSMLUtils.bitmapToBase64(mlImageSuperResolutionResult.getBitmap()));
        return jsonObject;
    }

    public static JSONObject getTISRResult(final MLTextImageSuperResolution mlTextImageSuperResolution)
        throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("result", HMSMLUtils.bitmapToBase64(mlTextImageSuperResolution.getBitmap()));
        return jsonObject;
    }

    public static JSONObject getScanResult(final MLSceneDetection mLSceneDetection) throws JSONException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.putOpt("result", mLSceneDetection.getResult());
        jsonObject.putOpt("confidence", mLSceneDetection.getConfidence());
        return jsonObject;
    }

    public static int resId(final CordovaInterface cordova, final String type, final String name) {
        if (isNullOrEmpty(type) || isNullOrEmpty(name)) {
            return -1;
        }
        return cordova.getContext().getResources().getIdentifier(name, type, cordova.getContext().getPackageName());
    }

    public static int rid(final CordovaInterface cordova, final String name) {
        return resId(cordova, "id", name);
    }

    public static int rlayout(final CordovaInterface cordova, final String name) {
        return resId(cordova, "layout", name);
    }

    public static int rdraw(final CordovaInterface cordova, final String name) {
        return resId(cordova, "drawable", name);
    }
}
