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

import android.content.res.Resources;

import org.json.JSONException;
import org.json.JSONObject;

public class Position {
    public int x;
    public int y;

    public static final float SYSTEM_DENSITY = Resources.getSystem().getDisplayMetrics().density;

    public static Position create(int x, int y) {
        return new Position(x, y);
    }

    public static Position fromJSONObject(final JSONObject props) throws JSONException {
        int x = Math.round(props.getInt("x") * SYSTEM_DENSITY);
        int y = Math.round(props.getInt("y") * SYSTEM_DENSITY);

        return new Position(x, y);
    }

    public static int pxToPixel(int px) {
        return Math.round(px * SYSTEM_DENSITY);
    }

    private Position(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "{" + "\"x\":" + x + ", " + "\"y\":" + y + "}";
    }
}
