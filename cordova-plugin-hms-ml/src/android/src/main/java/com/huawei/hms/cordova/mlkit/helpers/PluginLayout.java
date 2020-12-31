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

package com.huawei.hms.cordova.mlkit.helpers;

import android.view.ViewGroup;

public class PluginLayout {

    private InitialProps props;

    public ViewGroup.MarginLayoutParams layoutParams(InitialProps props) {
        this.props = props;
        this.props.x = props.x - props.marginLeft + props.marginRight;
        this.props.y = props.y - props.marginTop + props.marginBottom;
        ViewGroup.MarginLayoutParams parentLayoutParams = new ViewGroup.MarginLayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        parentLayoutParams.setMargins(props.marginLeft, props.marginTop, props.marginRight, props.marginBottom);
        ViewGroup.MarginLayoutParams mapLayoutParams = new ViewGroup.MarginLayoutParams(props.width, props.height);
        mapLayoutParams.setMargins(props.x, props.y, props.width, props.height);

        return mapLayoutParams;
    }

    public static class InitialProps {
        public int x;
        public int y;
        public int width;
        public int height;
        public int marginLeft;
        public int marginTop;
        public int marginBottom;
        public int marginRight;

        public InitialProps(int x, int y, int width, int height, int marginLeft, int marginTop, int marginBottom,
            int marginRight) {
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
