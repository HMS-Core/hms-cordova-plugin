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

package com.huawei.hms.cordova.scan.backend.layout;

import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup.MarginLayoutParams;

public class PluginLayoutManager {

    private PluginLayout parent;
    private View child;
    private InitialProps props;
    private int currentScrollX;
    private int currentScrollY;

    public PluginLayoutManager(PluginLayout parent, View child, InitialProps props) {
        this.parent = parent;
        this.child = child;
        this.props = props;
        initializeParentLayout();
        initializeChildLayout();
        attachChildLayoutToParentLayout();
    }

    public void scroll(int scrollX, int scrollY) {

        child.setX(props.getX() + currentScrollX - scrollX);
        child.setY(props.getY() + currentScrollY - scrollY);
    }

    public void setChildPropsForScroll(int scrolledX, int scrolledY) {
        child.setX(PxToPixelConverter.pxToPixel(scrolledX));
        child.setY(PxToPixelConverter.pxToPixel(scrolledY));
    }

    public void forceUpdateXAndY(int scrolledX, int scrolledY, int pageXOffset, int pageYOffset) {
        setChildPropsForScroll(scrolledX, scrolledY);

        props.setX(PxToPixelConverter.pxToPixel(scrolledX));
        props.setY(PxToPixelConverter.pxToPixel(scrolledY));

        currentScrollX = PxToPixelConverter.pxToPixel(pageXOffset);
        currentScrollY = PxToPixelConverter.pxToPixel(pageYOffset);

    }

    private void initializeParentLayout() {
        parent.setBackgroundColor(Color.TRANSPARENT);
    }

    private void initializeChildLayout() {
        MarginLayoutParams marginLayoutParams = new MarginLayoutParams(props.getWidth(), props.getHeight());
        child.setLayoutParams(marginLayoutParams);
        child.setX(props.getX());
        child.setY(props.getY());

        if (props.getY() < 0 || props.getX() < 0) {
            currentScrollX = props.getPageXOffset();
            currentScrollY = props.getPageYOffset();
        } else {
            currentScrollX = parent.getCurrentScrollX();
            currentScrollY = parent.getCurrentScrollY();
        }

    }

    private void attachChildLayoutToParentLayout() {
        parent.addView(child);
    }

    public void removeChildView(View child) {
        parent.removeView(child);
    }

}
