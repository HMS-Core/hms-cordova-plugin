/*
 * Copyright 2020-2024. Huawei Technologies Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.hms.cordova.ads.vast;

import android.app.Activity;
import android.content.Context;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CheckBox;

import com.huawei.hms.ads.vast.player.base.BaseVideoController;
import com.huawei.hms.ads.vast.player.misc.utils.AudioUtil;

public class CustomeVideoController extends BaseVideoController {

    private CheckBox btnMute;

    private ViewGroup clContent;

    private Button btnDetailView;

    private Button btnScreen;

    private Button btnPlay;

    private static final String VAST_VIDEO_PLAYER_TEMPLATE = "vast_video_player_template";

    public CustomeVideoController(Context context) {
        this(context, null);
    }

    public CustomeVideoController(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public CustomeVideoController(Context context, AttributeSet attributeSet, int defStyleAttr) {
        super(context, attributeSet, defStyleAttr);
        initView(context);
        initMuteState();
    }

    private void initView(Context context) {
        clContent = (ViewGroup) handleResources("cl_content", context);
        btnDetailView = (Button) handleResources("demo_bt_detail", context);
        btnScreen = (Button) handleResources("demo_bt_full_screen", context);
        btnPlay = (Button) handleResources("demo_bt_play", context);
        btnMute = (CheckBox) handleResources("demo_bt_voice", context);

        btnScreen.setOnClickListener(v -> toggleScreen((Activity) context));
        btnDetailView.setOnClickListener(v -> launchAdDetailView((Activity) context));
        btnPlay.setOnClickListener(v -> startOrPause());
        clContent.setOnClickListener(v -> launchAdDetailView((Activity) context));
    }

    private View handleResources(String resourceName, Context context) {
        return findViewById(context.getResources().getIdentifier(resourceName, "id", context.getPackageName()));
    }

    private int getTemplate() {
        try {
            return getContext().getResources().getIdentifier((String) CustomeVideoController.class.getDeclaredField(
                "VAST_VIDEO_PLAYER_TEMPLATE").get(null), "layout", getContext().getPackageName());
        } catch (NoSuchFieldException | IllegalAccessException e) {
            Log.e(TAG, e.getMessage());
            return -1;
        }
    }

    private void initMuteState() {
        btnMute.setChecked(isMute());
        btnMute.setOnCheckedChangeListener((button, checked) -> toggleMuteState(checked));
    }

    @Override
    public int getLayoutId() {
        return getTemplate();
    }

    @Override
    public boolean isMute() {
        if (mIsForceMute) {
            return btnMute.isChecked();
        } else {
            return AudioUtil.isSystemVolumeZero(mActivity);
        }
    }
}
