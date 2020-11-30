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
package com.huawei.hms.cordova.map.maps;

import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.huawei.hms.cordova.map.utils.PxToPixelConverter;

import java.util.Locale;

final public class MapCapsuleLayout {

    private static final String TAG = MapCapsuleLayout.class.getSimpleName();
    private View view;
    private FrameLayout parent;
    private int x;
    private int y;
    private int marginTop;
    private int marginBottom;
    private int currentScrollY = 0;
    private int currentScrollX = 0;

    MapCapsuleLayout(View view, Context ctx, InitialProps props) {
        this.parent = new FrameLayout(ctx);
        this.view = view;
        this.marginBottom = props.marginBottom;
        this.marginTop = props.marginTop;
        this.x = props.x;
        this.y = props.y - marginTop;
        ViewGroup.MarginLayoutParams parentLayoutParams = new ViewGroup.MarginLayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        parentLayoutParams.setMargins(0, marginTop, 0, marginBottom);
        this.parent.setLayoutParams(parentLayoutParams);
        this.parent.setBackgroundColor(Color.TRANSPARENT);
        ViewGroup.MarginLayoutParams mapLayoutParams = new ViewGroup.MarginLayoutParams(props.width, props.height);
        this.view.setLayoutParams(mapLayoutParams);
        initializeLayout();
    }

    void initializeLayout() {
        this.parent.addView(this.view);
        this.view.setX(x);
        this.view.setY(y);
        this.x = (int) this.view.getX();
        this.y = (int) this.view.getY();
        currentScrollX = 0;
        currentScrollY = 0;
        Log.d(TAG, String.format(Locale.ENGLISH,"Beginning-> x:%d, y:%d", (int) this.view.getX(), (int) this.view.getY()));
    }

    public void scrollX(int amount) {
        this.view.setX(this.x + amount);
        currentScrollX = amount;
    }

    public void scrollY(int amount) {
        this.view.setY(this.y + amount);
        currentScrollY = amount;
        Log.d(TAG, "After scroll -> y:" + this.y + " scrollY: " + amount + " viewY" + this.view.getY());
    }

    public void scrollXAndY(int scrollX, int scrollY) {
        this.scrollX(scrollX);
        this.scrollY(scrollY);
    }

    public ViewGroup getParent() {
        return parent;
    }

    public void updateXAndY(int x, int y) {
        this.view.setX(PxToPixelConverter.pxToPixel(x));
        this.view.setY(PxToPixelConverter.pxToPixel(y) - marginTop);
        this.x = (int) this.view.getX();
        this.y = (int) this.view.getY();
        if (currentScrollY != 0) this.y -= currentScrollY;
        if (currentScrollX != 0) this.x -= currentScrollX;
        Log.d(TAG, String.format(Locale.ENGLISH,"X: %d, Y: %d, amountX:%d, amountY:%d ViewY:%d", this.x, this.y, x, y, (int) this.view.getY()));
    }
}

class InitialProps {
    protected int x;
    protected int y;
    protected int marginTop;
    protected int marginBottom;
    protected int width;
    protected int height;

    InitialProps(int x, int y, int width, int height) {
        this.x = PxToPixelConverter.pxToPixel(x);
        this.y = PxToPixelConverter.pxToPixel(y);
        this.width = PxToPixelConverter.pxToPixel(width);
        this.height = PxToPixelConverter.pxToPixel(height);
    }

    public void setMarginTop(int marginTop) {
        this.marginTop = PxToPixelConverter.pxToPixel(marginTop);
    }

    public void setMarginBottom(int marginBottom) {
        this.marginBottom = PxToPixelConverter.pxToPixel(marginBottom);
    }
}
