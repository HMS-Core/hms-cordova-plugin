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
import { MLBounds,faceReq,MLFace,MLconfig,MLStillCompositerName,MLAnalyzerName,lensEngineReq,MLFrame,LANGUAGE,MLLensEngineSetting,MLFlashMode,doZoomReq,compositeAnalyserReq,MLLensType,MLconfigComposite,appSettingReq,MLFaceConfigs,livenessDetectionReq,MLLivenessConfig,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';
import { asyncExec } from './util'
import * as MLKit from './Interfaces';
export{MLBounds,faceReq,MLFace,MLconfig,lensEngineReq,MLAnalyzerName,MLStillCompositerName,MLFrame,MLconfigComposite,MLLensEngineSetting,MLLensType,compositeAnalyserReq,doZoomReq,MLFlashMode,appSettingReq,MLFaceConfigs,livenessDetectionReq,MLLivenessConfig,LANGUAGE,MLTtsConstants,Colors,MLFaceSetting,MLSkeletonConfig,RectStyle,DownloadStrategyCustom,FEATURE,MlObjectAnalyserConfig,ImgSuperResolutionConfig,MLBcrResultConfig,HandkeyPointConfig,MLGcrCaptureUIConfig,MLRemoteLandmarkSetting,MLBcrCaptureConfig,MLImageSegmentationScene,MLTextConfig,MLRemoteTextSetting,MLLocalTextSetting,MLImageClassificationConfig,MLImageSegmentationSetting} from './Interfaces';


//ML
function getInitialProps(divId: string) {
  const element: HTMLElement | null = document.getElementById(divId);
    if(element === null) return {};
  const clientRect = element.getBoundingClientRect() ;
  const computedStyle = window.getComputedStyle(element, null);
  let props: any = {};
  props['x'] = clientRect.x;
  props['y'] = clientRect.y;
  props['width'] = parseInt(computedStyle.getPropertyValue('width'));
  props['height'] = parseInt(computedStyle.getPropertyValue('height'));
  return props;

}
export abstract class MLLive {
  protected scene: string;
  protected divId: string;
  private mutationObserver: MutationObserver ;
  constructor(scene: string, divId: string) {
      this.scene = scene;
      this.divId = divId;
  }
  protected execHelper(func: string, args: any) {
      return asyncExec('HMSMLPlugin', func, args);
  }
  on(call: (value: any) => void): Promise<void> {
      window.subscribeHMSEvent(`${this.scene}_${this.divId}`, call);
      return this.execHelper('setCallback', [this.scene, this.divId, call.toString()]);
  }
  startMLLive(config: MLKit.MLconfig, bounds?: MLBounds): Promise<void> {
      const initialProps = getInitialProps(this.divId);
      if (bounds) {
        if (bounds.marginLeft) initialProps['marginLeft'] = bounds.marginLeft;
        if (bounds.marginTop) initialProps['marginTop'] = bounds.marginTop;
        if (bounds.marginBottom) initialProps['marginBottom'] = bounds.marginBottom;
        if (bounds.marginRight) initialProps['marginRight'] = bounds.marginRight;

      }

      this.mutationObserver = new MutationObserver(() => {
        const sceneRect = document.getElementById(this.divId)!.getBoundingClientRect()
        this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
    });
    const mutationObserverConfig = { attributes: true, childList: true, subtree: true };
    this.mutationObserver.observe(document.body, mutationObserverConfig);

    return this.execHelper(this.scene, [config, initialProps]);
}
setConfig(config: MLconfig): Promise<void> {
    return this.execHelper('setConfig', [this.scene, config]);
}
scroll(): Promise<void> {
    const sceneRect = document.getElementById(this.divId)!.getBoundingClientRect();
    return this.forceUpdateXAndY(sceneRect.x, sceneRect.y);
}
private forceUpdateXAndY(x: number, y: number) {
    return this.execHelper('forceUpdateXAndY', [this.scene, x, y])
}
}
export class liveEngineAnalyser extends MLLive {
  constructor(divId: string) { super("ACTION_LIVE_ANALYSE", divId); }
}
export async function doZoom(doZoomReq: MLKit.doZoomReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_LIVE_DOZOOM', [doZoomReq]);
}
export async function photograph(): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_LIVE_PHOTOGRAPHY_ANALYSE', []);
}
export async function destroy(): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_LIVE_DESTROY', []);
}
export async function getDisplayDimension(): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_LIVE_DISPLAYDIMENSION', []);
}
export async function getLensType(): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_LIVE_GETLENSTYPE', []);
}
export async function hasPermissions(permissionListReq: MLKit.CheckPermissionReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_CHECK_PERMISSION', [permissionListReq]);
}
export async function requestPermissions(permissionListReq: MLKit.RequestPermissionReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_REQUEST_PERMISSION', [permissionListReq]);
}
export async function serviceInitializer(params: MLKit.configReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'HMSMLKIT_INITILALIZER', [params]);
}
export async function customModelAnalyser(customModelReq: MLKit.downloadModelReq | MLKit.ownCustomModelReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_CUSTOMMODEL_ANALYSER', [customModelReq]);
}
export async function mlFrame(mlFrameReq: MLKit.mlFrameReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_MLFRAME', [mlFrameReq]);
}
export async function appSetting(appSettingReq: MLKit.appSettingReq): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_APP_SETTING', [appSettingReq]);
}
export async function setStatistic(any:any): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_MLANALYSER_SETSTATISTIC', [any]);
}
export async function getStatistic(any:any): Promise<any> {
  return asyncExec('HMSMLPlugin', 'ACTION_MLANALYSER_GETSTATISTIC', [any]);
}
export function enableLogger(): Promise<void> {
  return asyncExec('HMSMLPlugin', 'enableLogger', []);
}
export function disableLogger(): Promise<void> {
  return asyncExec('HMSMLPlugin', 'disableLogger', []);
}









  
