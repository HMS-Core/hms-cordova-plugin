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

package com.huawei.hms.cordova.mlkit.providers.facebodyproviders.skeleton;

import com.huawei.hms.mlsdk.skeleton.MLJoint;
import com.huawei.hms.mlsdk.skeleton.MLSkeleton;

import java.util.ArrayList;
import java.util.List;

public class MLSkeletonUtils {
    private static final float MIN_JOINT_SCORE = 0.2f;

    public static List<MLSkeleton> getValidSkeletons(List<MLSkeleton> results) {
        if (results == null || results.isEmpty()) {
            return results;
        }
        List<MLSkeleton> mSkeletons = new ArrayList<>();
        for (MLSkeleton skeleton : results) {
            List<MLJoint> mJoints = new ArrayList<>();
            List<MLJoint> joints = skeleton.getJoints();
            for (MLJoint joint : joints) {
                if (!(Math.abs(joint.getPointX() - (float)0) == 0 && Math.abs(joint.getPointY() - (float)0) == 0)
                    && joint.getScore() >= MIN_JOINT_SCORE) {
                    mJoints.add(joint);
                } else {
                    mJoints.add(new MLJoint(0f, 0f, joint.getType(), 0f));
                }
            }
            MLSkeleton mSkeleton = new MLSkeleton(mJoints);
            mSkeletons.add(mSkeleton);
        }
        return mSkeletons;
    }
}
