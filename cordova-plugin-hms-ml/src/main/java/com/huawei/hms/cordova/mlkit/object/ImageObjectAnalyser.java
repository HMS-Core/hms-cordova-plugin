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

package com.huawei.hms.cordova.mlkit.object;

import android.content.Context;
import android.util.Log;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.MLAnalyzerFactory;
import com.huawei.hms.mlsdk.common.MLFrame;
import com.huawei.hms.mlsdk.objects.MLObject;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzer;
import com.huawei.hms.mlsdk.objects.MLObjectAnalyzerSetting;

import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class ImageObjectAnalyser {
    private String TAG = ImageObjectAnalyser.class.getName();

    public void objectAnalyser(Context context, JSONObject params, CallbackContext callbackContext) {
        MLFrame frame = HMSMLUtils.getFrame(context, params, callbackContext);
        if (frame == null) {
            callbackContext.error("Illegal argument. filePath field is mandatory and it must not be null.");
            return;
        }
        boolean allowClassification;
        boolean allowMultiResult;
        MLObjectAnalyzerSetting setting;
        JSONObject mlObjectAnalyserSetting=params.optJSONObject("mlObjectAnalyserSetting");
        if (mlObjectAnalyserSetting!=null){
            allowClassification=mlObjectAnalyserSetting.optBoolean("allowClassification",true);
            allowMultiResult=mlObjectAnalyserSetting.optBoolean("allowMultiResult",true);
        }else{
            allowClassification=true;
            allowMultiResult=true;
        }
        if(allowClassification&&allowMultiResult){
            setting = new MLObjectAnalyzerSetting.Factory()
                    .allowClassification()
                    .allowMultiResults()
                    .setAnalyzerType(MLObjectAnalyzerSetting.TYPE_PICTURE)
                    .create();
        }else if(allowMultiResult){
            setting = new MLObjectAnalyzerSetting.Factory()
                    .allowMultiResults()
                    .setAnalyzerType(MLObjectAnalyzerSetting.TYPE_PICTURE)
                    .create();
        }else if(allowClassification){
            setting = new MLObjectAnalyzerSetting.Factory()
                    .allowMultiResults()
                    .setAnalyzerType(MLObjectAnalyzerSetting.TYPE_PICTURE)
                    .create();
        }
        else{
            setting = new MLObjectAnalyzerSetting.Factory()
                    .allowClassification()
                    .allowMultiResults()
                    .setAnalyzerType(MLObjectAnalyzerSetting.TYPE_PICTURE)
                    .create();
        }

        Log.i(TAG, "objectAnalyser: "+setting.getAnalyzerType()+" allowMulti: "+allowMultiResult+ " allowClassification: "+allowClassification);
        MLObjectAnalyzer analyzer = MLAnalyzerFactory.getInstance().getLocalObjectAnalyzer(setting);
        Task<List<MLObject>> task = analyzer.asyncAnalyseFrame(frame);
        task.addOnSuccessListener(object -> {
            String result = HMSMLUtils.toJSON(object);
            try {
                callbackContext.success(new JSONArray(result));
            } catch (JSONException e) {
                callbackContext.error(e.getMessage());
                Log.e(TAG, "error:" + e.getMessage());
            }
        }).addOnFailureListener(e -> callbackContext.error(e.getMessage()));
    }


}
