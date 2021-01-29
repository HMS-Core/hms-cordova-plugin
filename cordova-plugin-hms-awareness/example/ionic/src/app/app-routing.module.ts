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
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'capture-sample',
    loadChildren: () => import('./capture-sample/capture-sample.module').then( m => m.CaptureSamplePageModule)
  },
  {
    path: 'ambientlight-barrier',
    loadChildren: () => import('./ambientlight-barrier/ambientlight-barrier.module').then( m => m.AmbientlightBarrierPageModule)
  },
  {
    path: 'barrier-combination',
    loadChildren: () => import('./barrier-combination/barrier-combination.module').then( m => m.BarrierCombinationPageModule)
  },
  {
    path: 'barrier-sample',
    loadChildren: () => import('./barrier-sample/barrier-sample.module').then( m => m.BarrierSamplePageModule)
  },
  {
    path: 'beacon-barrier',
    loadChildren: () => import('./beacon-barrier/beacon-barrier.module').then( m => m.BeaconBarrierPageModule)
  },
  {
    path: 'behavior-barrier',
    loadChildren: () => import('./behavior-barrier/behavior-barrier.module').then( m => m.BehaviorBarrierPageModule)
  },
  {
    path: 'bluetooth-barrier',
    loadChildren: () => import('./bluetooth-barrier/bluetooth-barrier.module').then( m => m.BluetoothBarrierPageModule)
  },
  {
    path: 'headset-barrier',
    loadChildren: () => import('./headset-barrier/headset-barrier.module').then( m => m.HeadsetBarrierPageModule)
  },
  {
    path: 'location-barrier',
    loadChildren: () => import('./location-barrier/location-barrier.module').then( m => m.LocationBarrierPageModule)
  },
  {
    path: 'screen-barrier',
    loadChildren: () => import('./screen-barrier/screen-barrier.module').then( m => m.ScreenBarrierPageModule)
  },
  {
    path: 'time-barrier',
    loadChildren: () => import('./time-barrier/time-barrier.module').then( m => m.TimeBarrierPageModule)
  },
  {
    path: 'wifi-barrier',
    loadChildren: () => import('./wifi-barrier/wifi-barrier.module').then( m => m.WifiBarrierPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
