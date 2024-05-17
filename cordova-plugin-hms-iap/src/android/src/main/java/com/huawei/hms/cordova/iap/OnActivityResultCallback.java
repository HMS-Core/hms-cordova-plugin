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

package com.huawei.hms.cordova.iap;

import android.content.Intent;

/**
 * @since 2020-12-25
 * Interface which contains
 * onActivityResult method.
 */
public interface OnActivityResultCallback {
    /**
     * Activity result handler method.
     *
     * @param requestCode Request code
     * @param resultCode Result code
     * @param data Intent that contains data
     */
    void onActivityResult(final int requestCode, final int resultCode, final Intent data);
}
