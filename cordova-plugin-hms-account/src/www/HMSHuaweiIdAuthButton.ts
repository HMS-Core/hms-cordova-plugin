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

export enum Theme {
  THEME_NO_TITLE = 0,
  THEME_FULL_TITLE = 1
}

export enum ColorPolicy {
  COLOR_POLICY_BLUE = 0,
  COLOR_POLICY_RED = 1,
  COLOR_POLICY_WHITE = 2,
  COLOR_POLICY_WHITE_WITH_BORDER = 3,
  COLOR_POLICY_BLACK = 4,
  COLOR_POLICY_GRAY = 5
}

export enum CornerRadius {
  CORNER_RADIUS_LARGE = -1,
  CORNER_RADIUS_MEDIUM = -2,
  CORNER_RADIUS_SMALL = -3,
}

export function getHuaweiIdAuthButton(edittedButton: string, theme: Theme, colorPolicy: ColorPolicy, cornerRadius: CornerRadius): void {

  const btn: HTMLElement = document.getElementById(edittedButton) as HTMLElement;

  if (btn.firstChild && btn.lastChild) {
    btn.removeChild(btn.firstChild);
    btn.removeChild(btn.lastChild);
  }

  btn.style.color = "white";
  btn.style.height = "auto";
  btn.style.display = "inline-block";

  const span: HTMLSpanElement = document.createElement("span");
  span.style.backgroundSize = "auto 100%";
  span.style.backgroundImage = "url('./img/hw_logo_btn_red.png')";
  span.style.display = "inline-block";
  span.style.backgroundRepeat = "no-repeat";
  span.style.width = "24px";
  span.style.height = "24px";
  span.style.margin = "6px";
  span.style.marginLeft = "16px";
  span.style.marginRight = "8px;"

  const text: HTMLDivElement = document.createElement("div");
  text.style.display = "inline-block";
  text.style.fontSize = "16px";
  text.style.paddingTop = "8px";
  text.style.verticalAlign = "top";
  text.style.marginRight = "16px";
  text.style.textTransform = "capitalize";
  text.innerText = "Log in With Huawei";

  btn.appendChild(span);
  btn.appendChild(text);
  btn.style.color = "white";

  let btn_color: string;

  switch (colorPolicy) {
    case 0:
      btn_color = "blue";
      btn.style.backgroundColor = "#007DFF";
      break;
    case 1:
      btn_color = "red";
      btn.style.backgroundColor = "#EF484B";
      break;
    case 2:
      btn_color = "white";
      btn.style.backgroundColor = "#fff";
      break;
    case 3:
      btn_color = "whiteWithBorder";
      btn.style.backgroundColor = "#fff";
      btn.style.border = " 2px solid #e7e7e7";
      break;
    case 4:
      btn_color = "black";
      btn.style.backgroundColor = "#000";
      break;
    case 5:
      btn_color = "gray";
      btn.style.backgroundColor = "#f2f2f2";
      break;
    default:
      btn_color = "gray";
      btn.style.backgroundColor = "#f2f2f2";
  }

  if (btn_color == "black" || btn_color == "red" || btn_color == "blue") {
    span.style.backgroundImage = "url('./img/hw_logo_btn_white.png')";
    text.style.color = "#fff";
  }
  else {
    span.style.backgroundImage = "url('./img/hw_logo_btn_red.png')";
    text.style.color = "#000";
  }

  switch (cornerRadius) {
    case -1:
      btn.style.borderRadius = "500px";
      break;
    case -2:
      btn.style.borderStyle = "2px solid"
      btn.style.borderRadius = " 8px";
      break;
    case -3:
      btn.style.borderStyle = "2px solid"
      btn.style.borderRadius = "3px";
      break;
  }

  switch (theme) {
    case 0:
      btn.style.width = "48px";
      btn.style.height = "48px";
      text.style.display = "none";
      text.style.marginRight = "8px";
      span.style.width = "30px";
      span.style.height = "30px";
      span.style.margin = "8px 9px 9px 9px";
      break;
    case 1:
      text.innerHTML = "Log in With Huawei";
      break;
  }

  btn.addEventListener('click', function (event) {
    switch (btn_color) {
      case "blue":
        btn.style.backgroundColor = "#0070e5";
        break;
      case "red":
        btn.style.backgroundColor = "#d64043";
        break;
      case "white":
        btn.style.backgroundColor = "#f2f2f2";
        break;
      case "whiteWithBorder":
        btn.style.backgroundColor = "#f2f2f2";
        break;
      case "black":
        btn.style.backgroundColor = "#333333";
        break;
      case "gray":
        btn.style.backgroundColor = "#e5e5e5";
        break;
    }
  });

}


