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

public class InitialProps {
    private int x;
    private int y;
    private int width;
    private int height;
    private int pageXOffset;
    private int pageYOffset;
    private int marginLeft;
    private int marginRight;
    private int marginTop;
    private int marginBottom;

    public InitialProps(int x, int y, int width, int height, int pageXOffset, int pageYOffset) {
        this.x = PxToPixelConverter.pxToPixel(x);
        this.y = PxToPixelConverter.pxToPixel(y);
        this.width = PxToPixelConverter.pxToPixel(width);
        this.height = PxToPixelConverter.pxToPixel(height);
        this.pageXOffset = PxToPixelConverter.pxToPixel(pageXOffset);
        this.pageYOffset = PxToPixelConverter.pxToPixel(pageYOffset);
    }

    public static class Builder {
        private InitialProps props;

        public Builder(int x, int y, int width, int height, int pageXOffset, int pageYOffset) {
            props = new InitialProps(x, y, width, height, pageXOffset, pageYOffset);
        }

        public Builder marginLeft(int marginLeft) {
            props.marginLeft = PxToPixelConverter.pxToPixel(marginLeft);
            return this;
        }

        public Builder marginRight(int marginRight) {
            props.marginRight = PxToPixelConverter.pxToPixel(marginRight);
            return this;
        }

        public Builder marginTop(int marginTop) {
            props.marginTop = PxToPixelConverter.pxToPixel(marginTop);
            return this;
        }

        public Builder marginBottom(int marginBottom) {
            props.marginBottom = PxToPixelConverter.pxToPixel(marginBottom);
            return this;
        }

        public InitialProps build() {
            return props;
        }
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getPageXOffset() {
        return pageXOffset;
    }

    public int getPageYOffset() {
        return pageYOffset;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public int getMarginLeft() {
        return marginLeft;
    }

    public int getMarginRight() {
        return marginRight;
    }

    public int getMarginTop() {
        return marginTop;
    }

    public int getMarginBottom() {
        return marginBottom;
    }

}
