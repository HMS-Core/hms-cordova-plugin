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

package com.huawei.hms.cordova.ads.utils;

import android.util.Log;

import com.huawei.hms.cordova.ads.helpers.JSONMapper;
import com.huawei.hms.cordova.ads.helpers.Mapper;

import org.json.JSONException;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

public class JavaUtils {
    private static final String TAG = JavaUtils.class.getSimpleName();

    public static <T, R> List<R> mapj(List<T> list, JSONMapper<T, R> mapper) {
        return map(list, (in) -> {
            try {
                return mapper.map(in);
            } catch (JSONException e) {
                Log.e(TAG, format("map(JSONMapper) :: JSONException() %s", e.getMessage()));
                return null;
            }
        });
    }

    public static <T, R> List<R> map(List<T> list, Mapper<T, R> mapper) {
        List<R> newList = new ArrayList<>(list.size());
        for (T item : list) {
            newList.add(mapper.map(item));
        }
        return newList;
    }

    public static <T, V> Map<String, V> mapOfConstants(Class<T> clazz) {
        return mapOfConstants(clazz, null);
    }

    public static <T, V> Map<String, V> mapOfConstants(Class<T> clazz, String filter) {
        Map<String, V> list = new HashMap<>();

        Field[] declaredFields = clazz.getFields();
        for (Field field: declaredFields) {
            if (filter != null && !field.getName().contains(filter)) {
                continue;
            }

            if (Modifier.isStatic(field.getModifiers()) && Modifier.isFinal(field.getModifiers())) {
                try {
                    list.put(field.getName(), (V) field.get(null));
                } catch (IllegalAccessException e) {
                    Log.e(TAG, "getConstantValueOf() :: error : " + e.getMessage());
                }
            }
        }

        return list;
    }

    public static <T> List<String> listOfConstants(Class<T> clazz) {
        List<String> list = new ArrayList<>();

        Field[] declaredFields = clazz.getFields();
        for (Field field: declaredFields) {
            if (Modifier.isStatic(field.getModifiers()) && Modifier.isFinal(field.getModifiers())) {
                list.add(field.getName());
            }
        }

        return list;
    }

    public static <T, R> R getConstantValueOf(Class<T> clazz, String memberName, R def) {
        Log.d(TAG, format("getConstantValueOf() :: memberName=%s, def=%s", memberName, def.toString()));

        try {
            Field field = clazz.getField(memberName);
            return (R) field.get(null);
        } catch (NoSuchFieldException | IllegalAccessException | ClassCastException e) {
            Log.e(TAG, "getConstantValueOf() :: error " + e.getMessage());
            return def;
        }
    }

    public static boolean isNullOrEmpty(String item) {
        return null == item || item.isEmpty();
    }

    public static String format(String format, Object... args) {
        return String.format(Locale.ROOT, format, args);
    }
}
