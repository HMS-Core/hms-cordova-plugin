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

package com.huawei.hms.cordova.mlbody.common;

import android.content.Context;
import android.hardware.Camera;
import android.util.Base64;
import android.util.Log;
import android.view.ViewGroup;

import com.huawei.hms.cordova.mlbody.camera.GraphicOverlay;
import com.huawei.hms.cordova.mlbody.camera.LensEnginePreview;
import com.huawei.hms.cordova.mlbody.helpers.CordovaErrors;
import com.huawei.hms.cordova.mlbody.helpers.CordovaHelpers;
import com.huawei.hms.cordova.mlbody.helpers.PluginLayout.InitialProps;
import com.huawei.hms.cordova.mlbody.helpers.PxToPixelConverter;
import com.huawei.hms.cordova.mlbody.interfaces.HMSProvider;
import com.huawei.hms.cordova.mlbody.logger.HMSLogger;
import com.huawei.hms.cordova.mlbody.transactors.Face3DAnalyzerTransactor;
import com.huawei.hms.cordova.mlbody.transactors.FaceAnalyzerTransactor;
import com.huawei.hms.cordova.mlbody.transactors.GestureAnalyzerTransactor;
import com.huawei.hms.cordova.mlbody.transactors.HandAnalyzerTransactor;
import com.huawei.hms.cordova.mlbody.transactors.SkeletonAnalyzerTransactor;
import com.huawei.hms.cordova.mlbody.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.LensEngine;
import com.huawei.hms.mlsdk.common.MLAnalyzer;
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
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzer;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerFactory;
import com.huawei.hms.mlsdk.skeleton.MLSkeletonAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class HMSMLLensEngine extends HMSProvider {
    public static final String TAG = HMSMLLensEngine.class.getSimpleName();

    private LensEngine lensEngine;

    private LensEnginePreview lensEnginePreview;

    private GraphicOverlay graphicOverlay;

    private InitialProps props;

    private int currentScrollY = 0;

    private int currentScrollX = 0;

    private CallbackContext callbackContext;

    public HMSMLLensEngine(Context ctx) {
        super(ctx);
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

    public static void closeAnalyser(final CordovaWebView webView, final CallbackContext callbackContext,
        final LensEnginePreview lensEnginePreview, final GraphicOverlay graphicOverlay) {
        ((ViewGroup) (webView.getView().getParent())).removeView(lensEnginePreview);
        ((ViewGroup) (webView.getView().getParent())).removeView(graphicOverlay);
        callbackContext.success("Live Analyser Closed");
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

    public void createLensEngine(final JSONObject params, final CallbackContext callbackContext,
        final CordovaWebView webView, ViewGroup.MarginLayoutParams layoutParams, JSONObject uProps)
        throws JSONException {
        this.callbackContext = callbackContext;
        this.props = CordovaHelpers.initialPropsFrom(uProps);
        MLAnalyzer<?> mlAnalyzer = null;
        JSONObject lensEngineReq = params.getJSONObject("lensEngineReq");
        lensEnginePreview = setLensEnginePreview(getContext(), layoutParams);
        graphicOverlay = setGraphicOverlay(getContext(), layoutParams);

        JSONObject mLensEngineSetting = lensEngineReq.optJSONObject("lensEngineSetting");
        JSONObject analyzerSetting = lensEngineReq.optJSONObject("analyzerSetting");
        JSONObject graphicSetting = lensEngineReq.optJSONObject("graphicSetting");
        String analyzerName = lensEngineReq.optString("analyzerName");
        mlAnalyzer = createAnalyzer(analyzerName, analyzerSetting, graphicSetting, params);

        lensEngine = lensEngineManager(mLensEngineSetting, mlAnalyzer, webView);
        lensEngineStarter(lensEngine, webView, lensEnginePreview, graphicOverlay, TAG);

    }

    public void closeLensEngine(final CallbackContext callbackContext, final CordovaWebView webView) {
        if (lensEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("lensEngineClose", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            lensEngine.close();
            closeAnalyser(webView, callbackContext, lensEnginePreview, graphicOverlay);
            lensEngine.release();
            lensEngine = null;
            callbackContext.success("Closed");
            HMSLogger.getInstance(getContext()).sendSingleEvent("lensEngineClose");
        }
    }

    public void doZoomLensEngine(final JSONObject params, final CallbackContext callbackContext) throws JSONException {
        float scale = 2f;
        scale = (float) params.optDouble("scale", 2f);
        if (lensEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("liveZoomAnalyse", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            lensEngine.doZoom(scale);
            HMSLogger.getInstance(getContext()).sendSingleEvent("liveZoomAnalyse");
        }
    }

    public void getDisplayDimension(final CallbackContext callbackContext) throws JSONException {
        if (lensEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("liveDisplayDimension", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            callbackContext.success(TextUtils.mlSize(lensEngine.getDisplayDimension()));
            HMSLogger.getInstance(getContext()).sendSingleEvent("liveDisplayDimension");
        }
    }

    public void getLensType(final CallbackContext callbackContext) {
        if (lensEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("liveGetLensType", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            callbackContext.success(lensEngine.getLensType());
            HMSLogger.getInstance(getContext()).sendSingleEvent("liveGetLensType");
        }
    }

    public void photograph(final CallbackContext callbackContext) {
        if (lensEngine == null) {
            callbackContext.error(CordovaErrors.toErrorJSON(CordovaErrors.ANALYSIS_FAILURE));
            HMSLogger.getInstance(getContext())
                .sendSingleEvent("lensEnginePhotograph", String.valueOf(CordovaErrors.ANALYSIS_FAILURE));
        } else {
            lensEngine.photograph((new LensEngine.ShutterListener() {
                @Override
                public void clickShutter() {
                    HMSLogger.getInstance(getContext()).sendSingleEvent("clickShutter");
                }
            }), new LensEngine.PhotographListener() {
                @Override
                public void takenPhotograph(byte[] bytes) {
                    JSONObject jsonObject = new JSONObject();
                    try {
                        jsonObject.putOpt("bitmap", Base64.encodeToString(bytes, Base64.DEFAULT));
                        callbackContext.success(jsonObject);
                        HMSLogger.getInstance(getContext()).sendSingleEvent("livePhotographyAnalyse");
                    } catch (JSONException e) {
                        callbackContext.error(e.getMessage());
                        HMSLogger.getInstance(getContext()).sendSingleEvent("livePhotographyAnalyse", "-1");
                    }
                }
            });

        }
    }

    private MLAnalyzer<?> createAnalyzer(String analyzerName, JSONObject analyzerSetting, JSONObject graphicSetting,
        JSONObject params) {
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
                    new FaceAnalyzerTransactor(graphicOverlay, graphicSetting, getContext(), getCordovaPlugin()));
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
                    new Face3DAnalyzerTransactor(graphicOverlay, graphicSetting, getContext(), getCordovaPlugin()));
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
                    new HandAnalyzerTransactor(graphicSetting, graphicOverlay, getContext(), getCordovaPlugin()));
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
                    new GestureAnalyzerTransactor(graphicSetting, graphicOverlay, getContext(), getCordovaPlugin()));
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
                    new SkeletonAnalyzerTransactor(graphicOverlay, graphicSetting, getContext(), getCordovaPlugin()));
                return mlSkeletonAnalyzer;
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

    public void updateXAndY(int x, int y) {
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
    }
}
