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

package com.huawei.hms.cordova.scan.backend.draw;

import android.graphics.ImageFormat;
import android.hardware.Camera;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.SurfaceHolder;

import java.io.IOException;
import java.util.List;

public final class CameraOperation {
    private static final int WIDTH = 1920;
    private static final int HEIGHT = 1080;
    private static final double DEFAULT_ZOOM = 1.0;
    private final FrameCallback frameCallback = new FrameCallback();
    private boolean isPreview = false;
    private Camera camera = null;
    private Camera.Parameters parameters = null;

    /**
     * Open up the camera.
     */
    public synchronized void open(final SurfaceHolder holder) throws IOException {
        camera = Camera.open();
        parameters = camera.getParameters();
        parameters.setPictureSize(WIDTH, HEIGHT);
        parameters.setFocusMode(Camera.Parameters.FOCUS_MODE_CONTINUOUS_PICTURE);
        parameters.setPictureFormat(ImageFormat.NV21);
        camera.setPreviewDisplay(holder);
        camera.setDisplayOrientation(90);
        camera.setParameters(parameters);
    }

    public synchronized void close() {
        if (camera != null) {
            camera.release();
            camera = null;
        }
    }

    public synchronized void startPreview() {
        if (camera != null && !isPreview) {
            camera.startPreview();
            isPreview = true;
        }
    }

    public synchronized void stopPreview() {
        if (camera != null && isPreview) {
            camera.stopPreview();
            frameCallback.setProperties(null);
            isPreview = false;
        }
    }

    public synchronized void callbackFrame(final Handler handler, final double zoomValue) {
        if (camera != null && isPreview) {
            frameCallback.setProperties(handler);
            if (camera.getParameters().isZoomSupported() && zoomValue != DEFAULT_ZOOM) {
                //Auto zoom.
                parameters.setZoom(convertZoomInt(zoomValue));
                camera.setParameters(parameters);
            }
            camera.setOneShotPreviewCallback(frameCallback);
        }
    }

    public synchronized int convertZoomInt(final double zoomValue) {
        final List<Integer> allZoomRatios = parameters.getZoomRatios();
        final double maxZoom = Math.round(allZoomRatios.get(allZoomRatios.size() - 1) / 100f);
        if (zoomValue >= maxZoom) {
            return allZoomRatios.size() - 1;
        }
        for (int i = 1; i < allZoomRatios.size(); i++) {
            if (allZoomRatios.get(i) >= (zoomValue * 100) && allZoomRatios.get(i - 1) <= (zoomValue * 100)) {
                return i;
            }
        }
        return -1;
    }

    static class FrameCallback implements Camera.PreviewCallback {
        private Handler handler;

        public synchronized void setProperties(final Handler handler) {
            this.handler = handler;
        }

        @Override
        public void onPreviewFrame(final byte[] data, final Camera camera) {
            if (handler != null) {
                final Message message = handler.obtainMessage(0, camera.getParameters().getPreviewSize().width,
                        camera.getParameters().getPreviewSize().height, data);
                message.sendToTarget();
                handler = null;
            }
        }
    }
}
