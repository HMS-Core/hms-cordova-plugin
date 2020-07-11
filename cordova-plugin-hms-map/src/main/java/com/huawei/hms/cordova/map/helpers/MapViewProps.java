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

package com.huawei.hms.cordova.map.helpers;

import org.json.JSONException;
import org.json.JSONObject;

public class MapViewProps {
    private int width;
    private int height;
    private int paddingLeft;
    private int paddingTop;
    private int borderLeft;
    private int borderTop;
    private Position position;

    public int width() {
        return width;
    }

    public MapViewProps width(int width) {
        this.width = Position.pxToPixel(width);
        return this;
    }

    public int height() {
        return height;
    }

    public MapViewProps height(int height) {
        this.height = Position.pxToPixel(height);
        return this;
    }

    public int paddingLeft() {
        return paddingLeft;
    }

    public MapViewProps paddingLeft(int paddingLeft) {
        this.paddingLeft = Position.pxToPixel(paddingLeft);
        return this;
    }

    public int paddingTop() {
        return paddingTop;
    }

    public MapViewProps paddingTop(int paddingTop) {
        this.paddingTop = Position.pxToPixel(paddingTop);
        return this;
    }

    public int borderLeft() {
        return borderLeft;
    }

    public MapViewProps borderLeft(int borderLeft) {
        this.borderLeft = Position.pxToPixel(borderLeft);
        return this;
    }

    public int borderTop() {
        return borderTop;
    }

    public MapViewProps borderTop(int borderTop) {
        this.borderTop = Position.pxToPixel(borderTop);
        return this;
    }

    public Position position() {
        return this.position;
    }

    public MapViewProps position(JSONObject json) throws JSONException {
        Position pos = Position.fromJSONObject(json);
        pos.x += paddingLeft + borderLeft;
        pos.y += paddingTop + borderTop;
        this.position = pos;
        return this;
    }

    @Override
    public String toString() {
        return "MapViewProps{" +
                "width=" + width +
                ", height=" + height +
                ", paddingLeft=" + paddingLeft +
                ", paddingTop=" + paddingTop +
                ", borderLeft=" + borderLeft +
                ", borderTop=" + borderTop +
                ", position=" + position +
                '}';
    }
}
