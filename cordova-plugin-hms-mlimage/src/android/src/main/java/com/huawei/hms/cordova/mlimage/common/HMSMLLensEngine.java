/*
 * Copyright 2023. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.mlimage.common;

import android.content.Context;
import android.hardware.Camera;
import android.util.Base64;
import android.util.Log;
import android.view.ViewGroup;

import com.huawei.hms.cordova.mlimage.basef.CordovaBaseModule;
import com.huawei.hms.cordova.mlimage.basef.CordovaMethod;
import com.huawei.hms.cordova.mlimage.basef.HMSLog;
import com.huawei.hms.cordova.mlimage.basef.handler.CorPack;
import com.huawei.hms.cordova.mlimage.basef.handler.Promise;
import com.huawei.hms.cordova.mlimage.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlimage.camera.LensEnginePreview;
import com.huawei.hms.cordova.mlimage.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlimage.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlimage.helpers.PluginLayout;
import com.huawei.hms.cordova.mlimage.helpers.PluginLayout.InitialProps;
import com.huawei.hms.cordova.mlimage.helpers.PxToPixelConverter;
import com.huawei.hms.cordova.mlimage.transactors.ClassificationAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.Face3DAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.FaceAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.GestureAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.HandAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.ImageSegmentationTransactor;
import com.huawei.hms.cordova.mlimage.transactors.ObjectAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.SceneAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.SkeletonAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.transactors.TextAnalyzerTransactor;
import com.huawei.hms.cordova.mlimage.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.classification.MLImageClassificationAnalyzer;
import com.huawei.hms.mlsdk.common.LensEngine;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
import com.huawei.hms.mlsdk.common.MLCompositeAnalyzer;
import com.huawei.hms.mlsdk.common.MLResultTrailer;
import com.huawei.hms.mlsdk.face.MLFace;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzer;
import com.huawei.hms.mlsdk.face.MLFaceAnalyzerSetting;
import com.huawei.hms.mlsdk.face.MLMaxSizeFaceTransactor;
import com.huawei.hms.mlsdk.face.face3d.ML3DFaceAnalyzer;
import com.huawei.hms.mlsdk.face.face3d.ML3DFaceAnalyzerSetting;
import com.huawei.hms.mlsdk.gesture.MLGestureAnalyzer;
import com.huawei.hms.mlsdk.gesture.MLGestureAnalyzerFactory;
import com.huawei.hms.mlsdk.gesture.MLGestureAnalyzerSetting;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzer;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzerFactory;
import com.huawei.hms.mlsdk.handkeypoint.MLHandKeypointAnalyzerSetting;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationAnalyzer;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationScene;
import com.huawei.hms.mlsdk.imgseg.MLImageSegmentationSetting;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzer;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzerSetting;
import com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzer;
import com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzerFactory;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzer;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerFactory;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerSetting;
import com.huawei.hms.mlsdk.text.MLTextAnalyzer;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSMLLensEngine extends CordovaBaseModule {
    public static final String TAG = HMSMLLensEngine.class.getSimpleName();

    private final Context context;

    private final PluginLayout pluginLayout = new PluginLayout();

    public boolean isStart = false;

    private LensEngine lensEngine;

    private LensEnginePreview lensEnginePreview;

    private GraphicOverlay graphicOverlay;

    private MLCompositeAnalyzer compositeAnalyzer;

    private InitialProps props;

    private int currentScrollY = 0;

    private int currentScrollX = 0;

    private Promise promise;

    private CorPack corPack;

    public HMSMLLensEngine(CordovaInterface cordova) {
        this.context = cordova.getContext();
    }

    public static <T extends MLAnalyzer> void lensEngineStarter(LensEngine mLensEngine, final CordovaWebView webView,
        final LensEnginePreview lensEnginePreview, final GraphicOverlay graphicOverlay, final String TAG) {

        ((ViewGroup) (webView.getView().getParent())).addView(lensEnginePreview);
        ((ViewGroup) (webView.getView().getParent())).addView(graphicOverlay);
        if (mLensEngine != null) {
            try {
                lensEnginePreview.start(mLensEngine, graphicOverlay);
            } catch (IOException e) {
                Log.e(TAG, "Failed to start lens engine.", e);
                mLensEngine.release();

            }
        }
    }

    public static <T> LensEngine lensEngineManager(final JSONObject mLensEngineSetting, final MLAnalyzer<T> analyzer,
        final CordovaWebView webView) {
        LensEngine mLensEngine;
        int displayDimensionI = 640;
        int displayDimensionI1 = 480;
        int lensType = LensEngine.BACK_LENS;
        boolean enableFocus = true;
        float fps = 25.0f;
        String flashMode = "auto";
        if (mLensEngineSetting != null) {
            lensType = mLensEngineSetting.optInt("lensType", LensEngine.BACK_LENS);
            displayDimensionI = mLensEngineSetting.optInt("displayDimensionI", 640);
            displayDimensionI1 = mLensEngineSetting.optInt("displayDimensionI1", 480);
            fps = (float) mLensEngineSetting.optDouble("fps", 25.0f);
            enableFocus = mLensEngineSetting.optBoolean("enableFocus", true);
            flashMode = mLensEngineSetting.optString("flashMode", "auto");
        }
        mLensEngine = new LensEngine.Creator(webView.getContext(), analyzer).setLensType(lensType)
            .applyDisplayDimension(displayDimensionI, displayDimensionI1)
            .applyFps(fps)
            .enableAutomaticFocus(enableFocus)
            .setFlashMode(flashMode)
            .setFocusMode(Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO)
            .create();
        return mLensEngine;
    }

    public static void closeAnalyser(final CordovaWebView webView, final Promise promise,
        final LensEnginePreview lensEnginePreview, final GraphicOverlay graphicOverlay) {
        ((ViewGroup) (webView.getView().getParent())).removeView(lensEnginePreview);
        ((ViewGroup) (webView.getView().getParent())).removeView(graphicOverlay);
        promise.success("Live Analyser Closed");
    }

    public static LensEnginePreview setLensEnginePreview(final Context context,
        final ViewGroup.MarginLayoutParams layoutParams) {
        LensEnginePreview lensEnginePreview = new LensEnginePreview(context, null);
        lensEnginePreview.setLayoutParams(layoutParams);
        return lensEnginePreview;
    }

    public static GraphicOverlay setGraphicOverlay(final Context context,
        final ViewGroup.MarginLayoutParams layoutParams) {
        GraphicOverlay graphicOverlay = new GraphicOverlay(context, null);
        graphicOverlay.setLayoutParams(layoutParams);
        return graphicOverlay;
    }

    @HMSLog
    @CordovaMethod
    public void liveEngineAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            this.promise = promise;
            this.corPack = corPack;

            JSONObject params = args.optJSONObject(0);
            JSONObject userProps = args.optJSONObject(1);

            ViewGroup.MarginLayoutParams layoutParams = pluginLayout.layoutParams(
                CordovaHelpers.initialPropsFrom(userProps));

            this.props = CordovaHelpers.initialPropsFrom(userProps);
            MLAnalyzer<?> mlAnalyzer = null;
            JSONObject lensEngineReq = params.optJSONObject("lensEngineReq");
            lensEnginePreview = setLensEnginePreview(context, layoutParams);
            graphicOverlay = setGraphicOverlay(context, layoutParams);

            JSONObject mLensEngineSetting = lensEngineReq.optJSONObject("lensEngineSetting");
            JSONObject analyzerSetting = lensEngineReq.optJSONObject("analyzerSetting");
            JSONObject graphicSetting = lensEngineReq.optJSONObject("graphicSetting");
            String analyzerName = lensEngineReq.optString("analyzerName");
            mlAnalyzer = createAnalyzer(analyzerName, analyzerSetting, graphicSetting, promise, corPack, params);

            lensEngine = lensEngineManager(mLensEngineSetting, mlAnalyzer, corPack.getCordovaWebView());
            lensEngineStarter(lensEngine, corPack.getCordovaWebView(), lensEnginePreview, graphicOverlay, TAG);

            this.isStart = true;
        });

    }

    @HMSLog
    @CordovaMethod
    public void liveCompositeAnalyser(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            this.corPack = corPack;
            this.promise = promise;

            JSONObject params = args.optJSONObject(0);
            JSONObject userProps = args.optJSONObject(1);

            ViewGroup.MarginLayoutParams layoutParams = pluginLayout.layoutParams(
                CordovaHelpers.initialPropsFrom(userProps));

            lensEnginePreview = setLensEnginePreview(context, layoutParams);
            graphicOverlay = setGraphicOverlay(context, layoutParams);
            JSONObject lensEngineReq = params.optJSONObject("lensEngineReq");
            JSONObject mLensEngineSetting = lensEngineReq.optJSONObject("lensEngineSetting");
            JSONObject analyzerSetting = lensEngineReq.optJSONObject("analyzerSetting");
            JSONObject graphicSetting = lensEngineReq.optJSONObject("graphicSetting");
            JSONArray array = lensEngineReq.optJSONArray("analyzerNames");
            MLCompositeAnalyzer.Creator creator = new MLCompositeAnalyzer.Creator();
            for (int i = 0; i < array.length(); i++) {
                creator.add(
                    createAnalyzer(array.optString(i), analyzerSetting, graphicSetting, promise, corPack, params));
            }
            compositeAnalyzer = creator.create();
            lensEngine = lensEngineManager(mLensEngineSetting, compositeAnalyzer, corPack.getCordovaWebView());
            lensEngineStarter(lensEngine, corPack.getCordovaWebView(), lensEnginePreview, graphicOverlay, TAG);

            this.isStart = true;
        });
    }

    @HMSLog
    @CordovaMethod
    public void photograph(final CorPack corPack, JSONArray args, final Promise promise) {
        if (lensEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            return;
        }
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            lensEngine.photograph((new LensEngine.ShutterListener() {
                @Override
                public void clickShutter() {
                    Log.i(TAG, "clickShutter");
                }
            }), new LensEngine.PhotographListener() {
                @Override
                public void takenPhotograph(byte[] bytes) {
                    JSONObject jsonObject = new JSONObject();
                    try {
                        jsonObject.putOpt("bitmap", Base64.encodeToString(bytes, Base64.DEFAULT));
                        promise.success(jsonObject);
                    } catch (JSONException e) {
                        promise.error(e.getMessage());
                    }
                }
            });
        });

    }

    @HMSLog
    @CordovaMethod
    public void forceUpdateXAndY(final CorPack corPack, JSONArray args, final Promise promise) {
        if (lensEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            return;
        }

        int x = args.optInt(1);
        int y = args.optInt(2);

        this.lensEnginePreview.setX(PxToPixelConverter.pxToPixel(x) - this.props.marginLeft + this.props.marginRight);
        this.lensEnginePreview.setY(PxToPixelConverter.pxToPixel(y) - this.props.marginTop + this.props.marginBottom);
        this.props.x = (int) this.lensEnginePreview.getX();
        this.props.y = (int) this.lensEnginePreview.getY();
        if (currentScrollY != 0) {
            this.props.y -= currentScrollY;
        }
        if (currentScrollX != 0) {
            this.props.x -= currentScrollX;
        }
        promise.success();
    }

    @HMSLog
    @CordovaMethod
    public void destroy(final CorPack corPack, JSONArray args, final Promise promise) {
        if (lensEngine == null) {
            promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            return;
        }
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            lensEngine.close();
            closeAnalyser(corPack.getCordovaWebView(), promise, lensEnginePreview, graphicOverlay);
            lensEngine.release();
            lensEngine = null;
            isStart = false;
            promise.success("Closed");
        });
    }

    @HMSLog
    @CordovaMethod
    public void doZoom(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            JSONObject params = args.optJSONObject(0);
            float scale = 2f;
            scale = (float) params.optDouble("scale", 2f);
            if (lensEngine == null) {
                promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            } else {
                promise.success(lensEngine.doZoom(scale));
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void getDisplayDimension(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            if (lensEngine == null) {
                promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            } else {
                try {
                    promise.success(TextUtils.mlSize(lensEngine.getDisplayDimension()));
                } catch (JSONException e) {
                    promise.error(e.getMessage());
                }
            }
        });
    }

    @HMSLog
    @CordovaMethod
    public void getLensType(final CorPack corPack, JSONArray args, final Promise promise) {
        corPack.getCordova().getActivity().runOnUiThread(() -> {
            if (lensEngine == null) {
                promise.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            } else {
                promise.success(lensEngine.getLensType());
            }
        });
    }

    private MLAnalyzer<?> createAnalyzer(String analyzerName, JSONObject analyzerSetting, JSONObject graphicSetting,
        Promise promise, CorPack corPack, JSONObject params) {
        switch (analyzerName) {
            case "FACE": {
                MLFaceAnalyzer mlFaceAnalyzer;
                if (analyzerSetting != null) {
                    MLFaceAnalyzerSetting setting;
                    setting = TextUtils.toObject(analyzerSetting, MLFaceAnalyzerSetting.class);
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer(setting);
                } else {
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer();
                }
                mlFaceAnalyzer.setTransactor(
                    new FaceAnalyzerTransactor(graphicOverlay, graphicSetting, context, corPack, promise));
                return mlFaceAnalyzer;
            }
            case "FACE3D": {
                ML3DFaceAnalyzer mlFaceAnalyzer;
                ML3DFaceAnalyzerSetting setting3d;
                if (analyzerSetting != null) {
                    setting3d = TextUtils.toObject(analyzerSetting, ML3DFaceAnalyzerSetting.class);
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().get3DFaceAnalyzer(setting3d);
                } else {
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().get3DFaceAnalyzer();
                }
                mlFaceAnalyzer.setTransactor(
                    new Face3DAnalyzerTransactor(graphicOverlay, graphicSetting, context, corPack, promise));
                return mlFaceAnalyzer;
            }
            case "FACEMAX": {
                MLFaceAnalyzer mlFaceAnalyzer;
                int maxFrameLostcount = params.optInt("maxFrameLostcount", 0);
                if (analyzerSetting != null) {
                    MLFaceAnalyzerSetting setting;
                    setting = TextUtils.toObject(analyzerSetting, MLFaceAnalyzerSetting.class);
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer(setting);
                } else {
                    mlFaceAnalyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer();
                }
                MLMaxSizeFaceTransactor transactor;
                if (maxFrameLostcount == 0) {
                    transactor = new MLMaxSizeFaceTransactor.Creator(mlFaceAnalyzer,
                        new MLResultTrailer<MLFace>()).create();
                } else {
                    transactor = new MLMaxSizeFaceTransactor.Creator(mlFaceAnalyzer,
                        new MLResultTrailer<MLFace>()).setMaxFrameLostCount(maxFrameLostcount).create();
                }
                mlFaceAnalyzer.setTransactor(transactor);
                return mlFaceAnalyzer;
            }
            case "HAND": {
                MLHandKeypointAnalyzer mlHandKeypointAnalyzer;
                MLHandKeypointAnalyzerSetting setting;
                if (analyzerSetting != null) {
                    setting = TextUtils.toObject(analyzerSetting, MLHandKeypointAnalyzerSetting.class);
                } else {
                    setting = new MLHandKeypointAnalyzerSetting.Factory().setMaxHandResults(10)
                        .setSceneType(MLHandKeypointAnalyzerSetting.TYPE_ALL)
                        .create();
                }
                mlHandKeypointAnalyzer = MLHandKeypointAnalyzerFactory.getInstance().getHandKeypointAnalyzer(setting);
                mlHandKeypointAnalyzer.setTransactor(
                    new HandAnalyzerTransactor(graphicSetting, graphicOverlay, corPack, promise));
                return mlHandKeypointAnalyzer;
            }
            case "GESTURE": {
                MLGestureAnalyzer mlGestureAnalyzer;
                MLGestureAnalyzerSetting setting;
                if (analyzerSetting != null) {
                    setting = TextUtils.toObject(analyzerSetting, MLGestureAnalyzerSetting.class);
                } else {
                    setting = new MLGestureAnalyzerSetting.Factory().create();
                }
                mlGestureAnalyzer = MLGestureAnalyzerFactory.getInstance().getGestureAnalyzer(setting);
                mlGestureAnalyzer.setTransactor(
                    new GestureAnalyzerTransactor(graphicSetting, graphicOverlay, corPack, promise));
                return mlGestureAnalyzer;
            }
            case "SKELETON": {
                MLSkeletonAnalyzer mlSkeletonAnalyzer;
                MLSkeletonAnalyzerSetting skeletonAnalyzerSetting;
                if (analyzerSetting != null) {
                    skeletonAnalyzerSetting = TextUtils.toObject(analyzerSetting, MLSkeletonAnalyzerSetting.class);
                } else {
                    skeletonAnalyzerSetting = new MLSkeletonAnalyzerSetting.Factory().setAnalyzerType(
                        MLSkeletonAnalyzerSetting.TYPE_YOGA).create();
                }
                mlSkeletonAnalyzer = MLSkeletonAnalyzerFactory.getInstance()
                    .getSkeletonAnalyzer(skeletonAnalyzerSetting);
                mlSkeletonAnalyzer.setTransactor(
                    new SkeletonAnalyzerTransactor(graphicOverlay, graphicSetting, corPack, promise));
                return mlSkeletonAnalyzer;
            }
            case "OBJECT": {
                MLObjectAnalyzerSetting mlObjectAnalyzerSetting;
                MLObjectAnalyzer mlObjectAnalyzer;
                if (analyzerSetting != null) {
                    mlObjectAnalyzerSetting = TextUtils.toObject(analyzerSetting, MLObjectAnalyzerSetting.class);
                } else {
                    mlObjectAnalyzerSetting = new MLObjectAnalyzerSetting.Factory().setAnalyzerType(
                        MLObjectAnalyzerSetting.TYPE_VIDEO).allowMultiResults().allowClassification().create();
                }

                mlObjectAnalyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer(mlObjectAnalyzerSetting);
                mlObjectAnalyzer.setTransactor(
                    new ObjectAnalyzerTransactor(graphicOverlay, graphicSetting, promise, corPack));
                return mlObjectAnalyzer;
            }
            case "SCENE":
                MLSceneDetectionAnalyzer analyzer = MLSceneDetectionAnalyzerFactory.getInstance()
                    .getSceneDetectionAnalyzer();
                analyzer.setTransactor(new SceneAnalyzerTransactor(graphicOverlay, graphicSetting, promise, corPack));
                return analyzer;
            case "SEGMENTATION": {
                MLImageSegmentationSetting setting;
                MLImageSegmentationAnalyzer mlImageSegmentationAnalyzer;

                if (analyzerSetting != null) {
                    setting = TextUtils.toObject(analyzerSetting, MLImageSegmentationSetting.class);
                } else {
                    setting = new MLImageSegmentationSetting.Factory().setExact(false)
                        .setScene(MLImageSegmentationScene.FOREGROUND_ONLY)
                        .setAnalyzerType(MLImageSegmentationSetting.BODY_SEG)
                        .create();
                }
                mlImageSegmentationAnalyzer = MLAnalyzerFactory.getInstance().getImageSegmentationAnalyzer(setting);
                mlImageSegmentationAnalyzer.setTransactor(
                    new ImageSegmentationTransactor(graphicOverlay, lensEnginePreview, corPack, promise));
                return mlImageSegmentationAnalyzer;
            }
            case "TEXT": {
                MLTextAnalyzer textAnalyzer = new MLTextAnalyzer.Factory(context).create();
                textAnalyzer.setTransactor(new TextAnalyzerTransactor(promise, corPack));
                return textAnalyzer;
            }
            case "CLASSIFICATION": {
                MLImageClassificationAnalyzer mlImageClassificationAnalyzer = MLAnalyzerFactory.getInstance()
                    .getLocalImageClassificationAnalyzer();
                mlImageClassificationAnalyzer.setTransactor(new ClassificationAnalyzerTransactor(promise, corPack));
                return mlImageClassificationAnalyzer;
            }
            default:
                return null;
        }
    }

    private void scrollX(int amount) {
        this.lensEnginePreview.setX(this.props.x + amount);
        currentScrollX = amount;
    }

    private void scrollY(int amount) {
        this.lensEnginePreview.setY(this.props.y + amount);
        currentScrollY = amount;
    }

    public void scrollXAndY(int scrollX, int scrollY) {
        scrollX(scrollX);
        scrollY(scrollY);
    }

}
