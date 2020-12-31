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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.product;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.GridView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.huawei.hms.cordova.mlkit.utils.HMSMLUtils;
import com.huawei.hms.mlplugin.productvisionsearch.MLProductVisionSearchCapture;
import com.huawei.hms.cordova.mlkit.utils.TextUtils;
import com.huawei.hms.mlsdk.productvisionsearch.MLProductVisionSearch;
import com.huawei.hms.mlsdk.productvisionsearch.MLVisionSearchProduct;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class MLProductFragment extends MLProductVisionSearchCapture.AbstractProductFragment<MLRealProductBean> {
    private static String TAG = MLProductFragment.class.getSimpleName();
    private View root;
    private Context context;
    private CallbackContext callbackContext;
    private List<MLRealProductBean> mlProducts = new ArrayList<>();
    private GridView gridView;
    private CordovaInterface cordovaInterface;
    private BottomSheetAdapter adapter;

    public MLProductFragment(Context context, CallbackContext callbackContext, CordovaInterface cordovaInterface) {
        this.context = context;
        this.callbackContext = callbackContext;
        this.cordovaInterface = cordovaInterface;
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,
        @Nullable Bundle savedInstanceState) {
        root = View.inflate(getContext(), TextUtils.rlayout(cordovaInterface, "fragment_product"), null);
        initView();
        return root;
    }

    private void initView() {
        gridView = root.findViewById(TextUtils.rid(cordovaInterface, "gv"));
        gridView.setNumColumns(2);
        adapter = new BottomSheetAdapter(mlProducts, getContext(), cordovaInterface);
        gridView.setAdapter(adapter);

    }

    @Override
    public List<MLRealProductBean> getProductList(List<MLProductVisionSearch> list) throws Exception {
        return mLProductVisionSearchToTestBean(list);
    }

    @Override
    public void onResult(List<MLRealProductBean> productList) {
        if (null == productList) {
            Log.i("ProductFragment", "null:" + mlProducts);
            return;
        }
        mlProducts.clear();
        mlProducts.addAll(productList);
        adapter.notifyDataSetChanged();

        try {
            JSONObject object = new JSONObject();
            object.putOpt("result", HMSMLUtils.listToJSONArray(productList, TextUtils::pluginProductResultToJSON));
            callbackContext.success(object);
        } catch (JSONException e) {
            Log.e(TAG, "" + e.getMessage());
        }

    }

    @Override
    public boolean onError(Exception e) {
        return false;
    }

    private List<MLRealProductBean> mLProductVisionSearchToTestBean(List<MLProductVisionSearch> list) {
        List<MLRealProductBean> productBeans = new ArrayList<>();
        for (MLProductVisionSearch mlProductVisionSearch : list) {
            for (MLVisionSearchProduct product : mlProductVisionSearch.getProductList()) {
                MLRealProductBean productBean = new MLRealProductBean();
                productBean.setImgUrl(product.getImageList().get(0).getImageId());
                productBean.setId(product.getProductId());
                productBean.setOther(product.getProductUrl());
                productBeans.add(productBean);
            }
        }
        return productBeans;
    }
}
