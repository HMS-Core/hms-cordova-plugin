/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

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

package com.huawei.hms.cordova.ar;

import android.opengl.GLSurfaceView;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;

import com.huawei.hiar.ARCameraConfig;
import com.huawei.hiar.ARCameraIntrinsics;
import com.huawei.hiar.ARConfigBase;
import com.huawei.hiar.ARSceneMesh;
import com.huawei.hiar.ARTrackable;
import com.huawei.hiar.common.FaceHealthCheckState;
import com.huawei.hiar.listener.FaceHealthCheckStateEvent;
import com.huawei.hiar.listener.FaceHealthServiceListener;
import com.huawei.hms.plugin.ar.core.ARSetupFacade;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigAugmentedImage;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBase;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigBody;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigFace;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigHand;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigSceneMesh;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigWorld;
import com.huawei.hms.plugin.ar.core.config.ARPluginConfigWorldBody;
import com.huawei.hms.plugin.ar.core.helper.CameraConfigListener;
import com.huawei.hms.plugin.ar.core.helper.CameraIntrinsicsListener;
import com.huawei.hms.plugin.ar.core.helper.MessageTextListener;
import com.huawei.hms.plugin.ar.core.helper.PluginCallbackHelper;
import com.huawei.hms.plugin.ar.core.helper.sceneMesh.SceneMeshDrawFrameListener;
import com.huawei.hms.plugin.ar.core.serializer.CommonSerializer;
import com.huawei.hms.plugin.ar.core.serializer.PluginARTrackableSerializer;
import com.huawei.hms.plugin.ar.core.util.AREngineAvailability;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.EventObject;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class HMSAREngine extends CordovaPlugin {
    public static final String TAG = HMSAREngine.class.getSimpleName();

    private static final String HEALTH = "health";

    private CordovaListenerHelper cordovaListenerHelper;

    private ARSetupFacade arSetupFacade;

    private GLSurfaceView glSurfaceView;

    private View healthView;

    private View parentOfGLSurfaceView;

    private PluginLayoutManager pluginLayoutManager;

    private HMSLogger hmsLogger;

    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        cordovaListenerHelper = new CordovaListenerHelper(webView, cordova);
        this.hmsLogger = HMSLogger.getInstance(webView.getContext());
        webView.getView().getViewTreeObserver().addOnScrollChangedListener(() -> {
            if (glSurfaceView != null && glSurfaceView.getParent() != null && pluginLayoutManager != null) {
                pluginLayoutManager.scrollXAndY(-webView.getView().getScrollX(), -webView.getView().getScrollY());
            }
        });
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        switch (action) {
            case "startARScene":
                startARScene(args, callbackContext);
                return true;
            case "destroy":
                destroy(callbackContext);
                return true;
            case "setConfig":
                setConfig(args, callbackContext);
                return true;
            case "setCallback":
                setCallback(args, callbackContext);
                return true;
            case "hasPermission":
                hasPermission(callbackContext);
                return true;
            case "requestPermission":
                requestPermission(callbackContext);
                return true;
            case "isAREngineServiceAPKReady":
                isAREngineServiceAPKReady(callbackContext);
                return true;
            case "navigateToAppMarket":
                navigateToAppMarket(callbackContext);
                return true;
            case "forceUpdateXAndY":
                forceUpdateXAndY(args, callbackContext);
                return true;
            case "enableLogger":
                enableLogger(callbackContext);
                return true;
            case "disableLogger":
                disableLogger(callbackContext);
                return true;
            default:
                Log.e(TAG, "initializer: invalid action");
                return false;
        }
    }

    private <T> String getReflectionResultAsString(Method method, ARPluginConfigWorld configWorld) {
        try {
            Log.d(TAG, "getReflectionResultAsString: " + method.getName());
            return method.invoke(configWorld).toString();
        } catch (IllegalAccessException | InvocationTargetException e) {
            return "";
        }
    }

    private boolean isPluginConfigWorldFilePathMethodsStartsWith(String startsWith, ARPluginConfigWorld config) {
        Method[] methods = ARPluginConfigWorld.class.getMethods();
        for (Method m : methods) {
            boolean isMethodNeedsCheck = m.getName().equals("getObjPath") || m.getName().equals("getTexturePath");
            if (isMethodNeedsCheck && getReflectionResultAsString(m, config).startsWith(startsWith)) {
                return true;
            }
        }
        return false;
    }

    // Instead of returning a boolean i will throw exception to handle multiple cases at once.
    private void isFilePathPrefixMatchesWithFileStructure(ARPluginConfigBase arConfigBase)
        throws IOException, PathDoesNotMatchWithFileStructureException {
        if (webView.getContext().getAssets() == null) {
            return;
        }
        boolean isCapacitorRuntime = webView.getContext().getAssets().list("public").length > 0;
        if (arConfigBase instanceof ARPluginConfigFace) {
            boolean withCordovaRuntimeFileStructureDoesNotMatch = !isCapacitorRuntime
                && ((ARPluginConfigFace) arConfigBase).getTexturePath().startsWith("public");
            boolean withCapacitorRuntimeFileStructureDoesNotMatch = isCapacitorRuntime
                && ((ARPluginConfigFace) arConfigBase).getTexturePath().startsWith("www");
            if (withCordovaRuntimeFileStructureDoesNotMatch || withCapacitorRuntimeFileStructureDoesNotMatch) {
                throw new PathDoesNotMatchWithFileStructureException();
            }
        } else if (arConfigBase instanceof ARPluginConfigWorld) {
            boolean withCordovaRuntimeFileStructureDoesNotMatch = !isCapacitorRuntime
                && isPluginConfigWorldFilePathMethodsStartsWith("public", (ARPluginConfigWorld) arConfigBase);
            boolean withCapacitorRuntimeFileStructureDoesNotMatch = isCapacitorRuntime
                && isPluginConfigWorldFilePathMethodsStartsWith("www", ((ARPluginConfigWorld) arConfigBase));
            if (withCordovaRuntimeFileStructureDoesNotMatch || withCapacitorRuntimeFileStructureDoesNotMatch) {
                throw new PathDoesNotMatchWithFileStructureException();
            }
        }
    }

    private void startARScene(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        String sceneType = args.getString(0);

        cordova.getActivity().runOnUiThread(() -> {
            ARPluginConfigBase configBase = Converter.configFrom(sceneType, args.optJSONObject(1));
            try {
                isFilePathPrefixMatchesWithFileStructure(configBase);
            } catch (IOException | PathDoesNotMatchWithFileStructureException e) {
                String err = "Given file path couldn't found! Please change the file path.";
                callbackContext.error(err);
                return;
            }

            this.hmsLogger.startMethodExecutionTimer(sceneType + "Scene");

            switch (sceneType) {
                case "ARHand":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startHand((ARPluginConfigHand) configBase);
                    break;
                case "ARFace":
                    if (args.optJSONObject(1) != null && args.optJSONObject(1).has("enableHealthDevice")) {
                        Boolean enableHealthDevice = args.optJSONObject(1).optBoolean("enableHealthDevice");
                        if (enableHealthDevice) {
                            setHealthView(args.optJSONObject(2));
                            arSetupFacade.startFace((ARPluginConfigFace) configBase);
                            arSetupFacade.setEnableItem(ARConfigBase.ENABLE_HEALTH_DEVICE);
                        } else {
                            setGlSurfaceView(args.optJSONObject(2));
                            arSetupFacade.startFace((ARPluginConfigFace) configBase);
                        }
                    } else {
                        setGlSurfaceView(args.optJSONObject(2));
                        arSetupFacade.startFace((ARPluginConfigFace) configBase);
                    }
                    break;
                case "ARWorld":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startWorld((ARPluginConfigWorld) configBase);
                    break;
                case "ARBody":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startBody((ARPluginConfigBody) configBase);
                    break;
                case "ARCloud3DObject":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startCloud3DObject(args.optJSONObject(1).optString("fileName"));
                    break;
                case "ARAugmentedImage":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startAugmentedImage((ARPluginConfigAugmentedImage) configBase);
                    break;
                case "ARWorldBody":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startWorldBody((ARPluginConfigWorldBody) configBase);
                    break;
                case "ARSceneMesh":
                    setGlSurfaceView(args.optJSONObject(2));
                    arSetupFacade.startSceneMesh((ARPluginConfigSceneMesh) configBase);
                    break;
                default:
                    Log.e(TAG, "initializer: invalid scene type");
                    break;
            }
            this.hmsLogger.sendSingleEvent(sceneType + "Scene");
            callbackContext.success();
        });
    }

    private void setGlSurfaceView(JSONObject json) {
        glSurfaceView = new GLSurfaceView(webView.getContext());
        pluginLayoutManager = new PluginLayoutManager(glSurfaceView, cordova.getContext(),
            Converter.initialPropsFrom(json));
        parentOfGLSurfaceView = pluginLayoutManager.getParent();
        getWebViewRootLayout().addView(parentOfGLSurfaceView);
        glSurfaceView.bringToFront();
        arSetupFacade = new ARSetupFacade(webView.getContext(), glSurfaceView);
    }

    private void setHealthView(JSONObject json) {
        healthView = cordova.getActivity().getLayoutInflater().inflate(getTemplate(), null);
        pluginLayoutManager = new PluginLayoutManager(healthView, cordova.getContext(),
            Converter.initialPropsFrom(json));
        parentOfGLSurfaceView = pluginLayoutManager.getParent();
        getWebViewRootLayout().addView(parentOfGLSurfaceView);
        healthView.bringToFront();
        arSetupFacade = new ARSetupFacade(webView.getContext(), healthView);
    }

    private int getTemplate() {
        try {
            return cordova.getContext()
                .getResources()
                .getIdentifier((String) HMSAREngine.class.getDeclaredField("HEALTH").get(null), "layout",
                    cordova.getContext().getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e(TAG, e.getMessage());
            return -1;
        }
    }

    private void forceUpdateXAndY(JSONArray args, final CallbackContext callbackContext) {
        int x = args.optInt(1);
        int y = args.optInt(2);
        if (pluginLayoutManager != null) {
            pluginLayoutManager.updateXAndY(x, y);
        }
        callbackContext.success();
    }

    private void destroy(final CallbackContext callbackContext) throws JSONException {
        cordova.getActivity().runOnUiThread(() -> {
            this.hmsLogger.startMethodExecutionTimer("destroyScene");
            if (arSetupFacade != null) {
                arSetupFacade.stopTrackingSession();
                arSetupFacade = null;
                getWebViewRootLayout().removeView(parentOfGLSurfaceView);
            }
            this.hmsLogger.sendSingleEvent("destroyScene");
            callbackContext.success();
        });
    }

    private void setConfig(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        String sceneType = args.getString(0);
        this.hmsLogger.startMethodExecutionTimer(sceneType + "SetConfig");
        JSONObject pluginConfig = args.getJSONObject(1);
        if (arSetupFacade != null) {
            arSetupFacade.setPluginConfig(Converter.configFrom(sceneType, pluginConfig));
            this.hmsLogger.sendSingleEvent(sceneType + "SetConfig");
            callbackContext.success();
        }
    }

    private void hasPermission(final CallbackContext callbackContext) throws JSONException {
        boolean result = PluginPermissionUtils.hasCameraPermission(this);
        callbackContext.success(new JSONObject().put("result", result));
    }

    private void requestPermission(final CallbackContext callbackContext) {
        boolean reqResult = PluginPermissionUtils.requestCameraPermission(this);
        if (reqResult) {
            callbackContext.success();
        } else {
            callbackContext.error("Camera permission didn't granted.");
        }
    }

    private void isAREngineServiceAPKReady(final CallbackContext callbackContext) throws JSONException {
        boolean result = AREngineAvailability.isArEngineServiceApkReady(webView.getContext());
        callbackContext.success(new JSONObject().put("result", result));
    }

    private void navigateToAppMarket(final CallbackContext callbackContext) {
        AREngineAvailability.navigateToAppMarketPage(cordova.getActivity());
        callbackContext.success();
    }

    private void setCallback(JSONArray args, final CallbackContext callbackContext) throws JSONException {
        String sceneType = args.getString(0);
        String divId = args.getString(1);
        if (arSetupFacade != null) {
            arSetupFacade.setListener(new PluginCallbackHelper() {
                @Override
                public void onDrawFrame(List<ARTrackable> arTrackables) {
                    String eventName = String.format(Locale.ENGLISH, "onDrawFrame_%s_%s", sceneType, divId);
                    cordovaListenerHelper.sendEvent(eventName,
                        Converter.listToJSONArray(PluginARTrackableSerializer.serialize(arTrackables)));
                }
            });
            arSetupFacade.setCameraConfigListener(new CameraConfigListener() {
                @Override
                public void handleCameraConfigData(ARCameraConfig cameraConfig) {

                    String eventName = String.format(Locale.ENGLISH, "handleCameraConfigData_%s_%s", sceneType, divId);
                    Map<String, Object> jsonMap = CommonSerializer.arCameraConfigToMap(cameraConfig);
                    cordovaListenerHelper.sendEvent(eventName, jsonMap);

                }
            });
            arSetupFacade.setCameraIntrinsicsListener(new CameraIntrinsicsListener() {
                @Override
                public void handleCameraIntrinsicsData(ARCameraIntrinsics cameraIntrinsics) {
                    String eventName = String.format(Locale.ENGLISH, "handleCameraIntrinsicsData_%s_%s", sceneType,
                        divId);
                    Map<String, Object> jsonMap = CommonSerializer.arCameraIntrinsicsToMap(cameraIntrinsics);
                    cordovaListenerHelper.sendEvent(eventName, jsonMap);
                }
            });
            arSetupFacade.setFaceHealthListener(new FaceHealthServiceListener() {
                @Override
                public void handleEvent(EventObject eventObject) {
                    try {
                        if (!(eventObject instanceof FaceHealthCheckStateEvent)) {
                            return;
                        }
                        String eventName = String.format(Locale.ENGLISH, "handleEvent_%s_%s", sceneType, divId);
                        final FaceHealthCheckState faceHealthCheckState
                            = ((FaceHealthCheckStateEvent) eventObject).getFaceHealthCheckState();
                        JSONObject json = new JSONObject().put("faceHealthCheckState", faceHealthCheckState.toString());
                        cordovaListenerHelper.sendEvent(eventName, json);
                    } catch (JSONException e) {
                        Log.d(TAG, e.getLocalizedMessage());
                    }
                }

                @Override
                public void handleProcessProgressEvent(final int progress) {
                    try {
                        String eventName = String.format(Locale.ENGLISH, "handleProcessProgressEvent_%s_%s", sceneType,
                            divId);
                        JSONObject json = new JSONObject().put("progress", progress);
                        cordovaListenerHelper.sendEvent(eventName, json);
                    } catch (JSONException e) {
                        Log.d(TAG, e.getLocalizedMessage());
                    }
                }
            });
            arSetupFacade.setFaceHealthResultListener(res -> {
                try {
                    String eventName = String.format(Locale.ENGLISH, "handleResult_%s_%s", sceneType, divId);
                    JSONObject json = new JSONObject().put("handleResult", res);
                    cordovaListenerHelper.sendEvent(eventName, json);
                } catch (JSONException e) {
                    Log.d(TAG, e.getLocalizedMessage());
                }
            });
            arSetupFacade.setSceneMeshListener(new SceneMeshDrawFrameListener() {
                @Override
                public void onDrawFrame(ARSceneMesh arSceneMesh) {
                    String eventName = String.format(Locale.ENGLISH, "onDrawFrame_%s_%s", sceneType, divId);
                    Map<String, Object> jsonMap = CommonSerializer.arSceneMeshToMap(arSceneMesh);
                    cordovaListenerHelper.sendEvent(eventName, jsonMap);
                }
            });
            arSetupFacade.setMessageDataListener(new MessageTextListener() {
                @Override
                public void handleMessageData(String text) {
                    try {
                        String eventName = String.format(Locale.ENGLISH, "handleMessageData_%s_%s", sceneType, divId);
                        JSONObject json = new JSONObject().put("text", text);
                        cordovaListenerHelper.sendEvent(eventName, json);
                    } catch (JSONException e) {
                        Log.d(TAG, e.getLocalizedMessage());
                    }
                }
            });

            callbackContext.success();
        }
    }

    private void enableLogger(final CallbackContext callbackContext) {
        hmsLogger.enableLogger();
        callbackContext.success();
    }

    private void disableLogger(final CallbackContext callbackContext) {
        hmsLogger.disableLogger();
        callbackContext.success();
    }

    private ViewGroup getWebViewRootLayout() {
        return ((ViewGroup) webView.getView().getParent());
    }

}