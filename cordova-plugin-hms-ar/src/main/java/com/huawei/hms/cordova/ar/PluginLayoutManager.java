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

package com.huawei.hms.cordova.ar;

import android.content.Context;
import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

public class PluginLayoutManager {

    private View view;
    private FrameLayout parent;
    private InitialProps props;
    private int currentScrollY = 0;
    private int currentScrollX = 0;

    public PluginLayoutManager(View view, Context ctx, InitialProps props) {
        this.parent = new FrameLayout(ctx);
        this.view = view;
        this.props = props;
        this.props.x = props.x - props.marginLeft + props.marginRight;
        this.props.y = props.y - props.marginTop + props.marginBottom;
        //Parent view layout params
        ViewGroup.MarginLayoutParams parentLayoutParams = new ViewGroup.MarginLayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        parentLayoutParams.setMargins(props.marginLeft, props.marginTop, props.marginRight, props.marginBottom);
        this.parent.setLayoutParams(parentLayoutParams);
        this.parent.setBackgroundColor(Color.TRANSPARENT);
        // GLSurfaceView params
        ViewGroup.MarginLayoutParams mapLayoutParams = new ViewGroup.MarginLayoutParams(props.width, props.height);
        this.view.setLayoutParams(mapLayoutParams);
        initializeLayout();
    }

    private void initializeLayout() {
        this.parent.addView(this.view);
        this.view.setX(this.props.x);
        this.view.setY(this.props.y);
        this.props.x = (int) this.view.getX();
        this.props.y = (int) this.view.getY();
        currentScrollX = 0;
        currentScrollY = 0;
    }

    public FrameLayout getParent() {
        return parent;
    }

    private void scrollX(int amount) {
        this.view.setX(this.props.x + amount);
        currentScrollX = amount;
    }

    private void scrollY(int amount) {
        this.view.setY(this.props.y + amount);
        currentScrollY = amount;
    }

    public void scrollXAndY(int scrollX, int scrollY) {
        scrollX(scrollX);
        scrollY(scrollY);
    }

    public void updateXAndY(int x, int y) {
        this.view.setX(PxToPixelConverter.pxToPixel(x) - this.props.marginLeft + this.props.marginRight);
        this.view.setY(PxToPixelConverter.pxToPixel(y) - this.props.marginTop + this.props.marginBottom);
        this.props.x = (int) this.view.getX();
        this.props.y = (int) this.view.getY();
        if (currentScrollY != 0) this.props.y -= currentScrollY;
        if (currentScrollX != 0) this.props.x -= currentScrollX;
    }

    public static class InitialProps {
        int x;
        int y;
        int width;
        int height;
        // parent layout stuff.
        int marginLeft;
        int marginTop;
        int marginBottom;
        int marginRight;

        public InitialProps(int x, int y, int width, int height, int marginLeft, int marginTop, int marginBottom, int marginRight) {
            this.x = PxToPixelConverter.pxToPixel(x);
            this.y = PxToPixelConverter.pxToPixel(y);
            this.width = PxToPixelConverter.pxToPixel(width);
            this.height = PxToPixelConverter.pxToPixel(height);
            this.marginLeft = PxToPixelConverter.pxToPixel(marginLeft);
            this.marginTop = PxToPixelConverter.pxToPixel(marginTop);
            this.marginBottom = PxToPixelConverter.pxToPixel(marginBottom);
            this.marginRight = PxToPixelConverter.pxToPixel(marginRight);
        }
    }
}
