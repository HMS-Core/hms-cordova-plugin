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
package com.huawei.hms.cordova.awareness;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.webkit.WebView;

import com.huawei.hms.cordova.awareness.backend.utils.JSONUtils;
import com.huawei.hms.cordova.awareness.basef.handler.Promise;
import com.huawei.hms.kit.awareness.barrier.BarrierStatus;

import org.apache.cordova.PluginResult;

import java.util.Locale;

import static com.huawei.hms.cordova.awareness.backend.utils.JSONUtils.barrierStatusTOJSON;

public class BarrierReceiver extends BroadcastReceiver {
    private Promise promise = null;
    private WebView webView = null;
    public BarrierReceiver(final Promise promise){
        this.promise = promise;
    }
    public BarrierReceiver() {
        
    }
    public BarrierReceiver(final WebView webView){
        this.webView = webView;
    }

    private void sendPromisePluginResult(BarrierStatus barrierStatus) {
        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, barrierStatusTOJSON(barrierStatus));
        pluginResult.setKeepCallback(true);
        promise.sendPluginResult(pluginResult);
    }

    private void sendBackgroundEventResult(BarrierStatus status) {
        String jsFunction = "if(window.hasOwnProperty('%s')) window['%s'](%s); else console.error('Listener not registered.');";
        String currentEvent = String.format(Locale.ENGLISH,jsFunction, status.getBarrierLabel(), status.getBarrierLabel(), barrierStatusTOJSON(status));
        webView.evaluateJavascript(currentEvent, value -> {});
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        BarrierStatus barrierStatus = BarrierStatus.extract(intent);
        Log.d("AWARENESS_BARRIER", barrierStatus.getBarrierLabel());
        if(promise != null) sendPromisePluginResult(barrierStatus);
        else sendBackgroundEventResult(barrierStatus);
    }
}
