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

package com.huawei.hms.cordova.mlkit.providers.imageproviders.product;

import android.content.Context;
import android.net.Uri;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.huawei.hms.cordova.mlkit.utils.TextUtils;

import com.facebook.drawee.view.SimpleDraweeView;

import org.apache.cordova.CordovaInterface;

import java.util.List;

public class BottomSheetAdapter extends BaseAdapter {

    private List<MLRealProductBean> mlProducts;

    private Context context;

    private CordovaInterface cordova;

    public BottomSheetAdapter(List<MLRealProductBean> mlProducts, Context context, CordovaInterface cordova) {
        this.mlProducts = mlProducts;
        this.context = context;
        this.cordova = cordova;
    }

    @Override
    public int getCount() {
        return mlProducts == null ? 0 : mlProducts.size();
    }

    @Override
    public Object getItem(int position) {
        return mlProducts.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            convertView = View.inflate(context, TextUtils.rlayout(cordova, "adapter_item_product"), null);
        }

        Uri imageUri = Uri.parse(mlProducts.get(position).getImgUrl());
        SimpleDraweeView draweeView = (SimpleDraweeView) convertView.findViewById(
            TextUtils.rid(cordova, "my_image_view"));
        draweeView.setImageURI(imageUri);

        ((TextView) convertView.findViewById(TextUtils.rid(cordova, "tv"))).setText(mlProducts.get(position).getId());
        return convertView;
    }
}
