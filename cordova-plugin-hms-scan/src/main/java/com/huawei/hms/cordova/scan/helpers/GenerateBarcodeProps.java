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

package com.huawei.hms.cordova.scan.helpers;

public class GenerateBarcodeProps {
    private String inputContent;
    private int generateType;
    private int generateMargin;
    private int generateColor;
    private int generateBackground;
    private int barcodeWidth;
    private int barcodeHeight;

    public String getInputContent() {
        return inputContent;
    }

    public GenerateBarcodeProps setInputContent(final String inputContent) {
        this.inputContent = inputContent;
        return this;
    }

    public int getGenerateType() {
        return generateType;
    }

    public GenerateBarcodeProps setGenerateType(final int generateType) {
        this.generateType = generateType;
        return this;
    }

    public int getGenerateMargin() {
        return generateMargin;
    }

    public GenerateBarcodeProps setGenerateMargin(final int generateMargin) {
        this.generateMargin = generateMargin;
        return this;
    }

    public int getGenerateColor() {
        return generateColor;
    }

    public GenerateBarcodeProps setGenerateColor(final int generateColor) {
        this.generateColor = generateColor;
        return this;
    }

    public int getGenerateBackground() {
        return generateBackground;
    }

    public GenerateBarcodeProps setGenerateBackground(final int generateBackground) {
        this.generateBackground = generateBackground;
        return this;
    }

    public int getBarcodeWidth() {
        return barcodeWidth;
    }

    public GenerateBarcodeProps setBarcodeWidth(final int barcodeWidth) {
        this.barcodeWidth = barcodeWidth;
        return this;
    }

    public int getBarcodeHeight() {
        return barcodeHeight;
    }

    public GenerateBarcodeProps setBarcodeHeight(final int barcodeHeight) {
        this.barcodeHeight = barcodeHeight;
        return this;
    }
}
