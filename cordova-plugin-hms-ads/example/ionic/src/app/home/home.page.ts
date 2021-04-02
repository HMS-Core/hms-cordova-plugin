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
import { Component, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';
import {
  InterstitialAdEvents,
  BannerAdSize,
  BannerAdEvents,
  RewardAdEvents,
  SplashAdEvents,
  Gender, Anchor,
  ChildProtection,
  UnderAgeOfPromise,
  HMSScreenOrientation,
  AdContentClassification,
  NonPersonalizedAd,
  RollAdEvents,
  NativeAdEvents,
  NativeAdTemplate,
  Color,
  HMSAds
} from '@hmscore/ionic-native-hms-ads/ngx';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  bannerAdSize: BannerAdSize;
  bannerAdColor: Color;
  nativeAdSize: NativeAdTemplate;
  bannerAd;
  rollAdInstance;
  nativeAdInstance;

  constructor(private hmsAds: HMSAds) {
    this.bannerAdSize = BannerAdSize.BANNER_SIZE_360_144;
    this.bannerAdColor = Color.TRANSPARENT;
    this.nativeAdSize = NativeAdTemplate.NATIVE_AD_SMALL_TEMPLATE;
    this.hmsAds.init();
  }

  getSDKVersion() {
    this.hmsAds.getSDKVersion().then(result => alert(JSON.stringify(result)));
  }

  getAdvertisingIdInfo() {
    this.hmsAds.getAdvertisingIdInfo().then(result => alert(JSON.stringify(result)));
  }

  setRequestOptions() {
    const reqOpt = {
      adContentClassification: AdContentClassification.AD_CONTENT_CLASSIFICATION_W,
      appLang: 'En',
      appCountry: 'TR',
      tagForChildProtection: ChildProtection.TAG_FOR_CHILD_PROTECTION_FALSE,
      tagForUnderAgeOfPromise: UnderAgeOfPromise.PROMISE_TRUE,
      nonPersonalizedAd: NonPersonalizedAd.ALLOW_ALL,
  };

    this.hmsAds.setRequestOptions(reqOpt)
      .then((result) => alert('setRequestOptions :: ' + JSON.stringify(result)))
      .catch((error) => console.log('setRequestOptions :: Error!', error));
  }

  getRequestOptions() {
    this.hmsAds.getRequestOptions()
    .then((result) => alert('getRequestOptions :: ' + JSON.stringify(result)))
    .catch((error) => console.log('getRequestOptions :: Error!', error));
  }
  startClient() {
    this.hmsAds.referrerClientStartConnection(true)
        .then((result) => alert('referrerClientStartConnection :: ' + JSON.stringify(result)))
        .catch((error) => alert('referrerClientStartConnection :: Error!' + error));
  }

  getReferrerDetails() {
    this.hmsAds.getInstallReferrer()
        .then((result) => alert('getInstallReferrer :: ' + JSON.stringify(result)))
        .catch((error) => alert('getInstallReferrer :: Error!' + error));

    this.hmsAds.referrerClientEndConnection()
        .then((result) => console.log('referrerClientEndConnection :: ', JSON.stringify(result)))
        .catch((error) => console.log('referrerClientEndConnection :: Error!', error));
  }

  async interstitialAd() {
    const interstitialAd = new this.hmsAds.HMSInterstitialAd();
    await interstitialAd.create(true);
    await interstitialAd.setAdId('testb4znbuh3n2');
    await interstitialAd.setAdListener();
    interstitialAd.on(
      InterstitialAdEvents.INTERSTITIAL_AD_LOADED,
      async () => {
        await interstitialAd
          .isLoaded()
          .then((result) => alert('isLoaded -> ' + result))
          .catch((error) => console.log('isLoaded => Error!', error));
        await interstitialAd.show();
      }
    );
    await interstitialAd.loadAd();
  }
  async createBannerAd() {
    if (this.bannerAd) {
      await this.bannerAd.destroy();
    }
    this.bannerAd = new this.hmsAds.HMSBannerAd();

    const banner = document.getElementById('bannerAdElement');
    if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_320_50) {
      banner.style.height = '50px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_300_250) {
      banner.style.height = '250px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_320_100) {
      banner.style.height = '100px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_360_144) {
      banner.style.height = '144px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_360_57) {
      banner.style.height = '57px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_468_60) {
      banner.style.height = '60px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_160_600) {
      banner.style.height = '600px';
    } else if (this.bannerAdSize === BannerAdSize.BANNER_SIZE_728_90) {
      banner.style.height = '90px';
    } else {
      banner.style.height = '200px';
    }

    await this.bannerAd.create('bannerAdElement');
    await this.bannerAd.setAdId('testw6vs28auh3');
    await this.bannerAd.setBannerAdSize(this.bannerAdSize);
    await this.bannerAd.setBackgroundColor(this.bannerAdColor);
    await this.bannerAd.setBannerRefresh(50);
    await this.bannerAd.setAdListener();

    this.bannerAd.on(BannerAdEvents.BANNER_AD_FAILED, async (result) => {
      alert('BANNER_AD_FAILED :: ' + result.message);
    });
    this.bannerAd.on(BannerAdEvents.BANNER_AD_LOADED, async () => {
      console.log('bannerAd Loaded');
    });
    this.bannerAd.loadAd();
  }

  async rewardAd() {
    const rewardAd = new this.hmsAds.HMSRewardAd();
    await rewardAd.create('testx9dtjwj8hp');

    rewardAd.on(RewardAdEvents.REWARDED_LOADED, async () => {
      await rewardAd.show(true); // if false, setRewardAdListener() and listen RewardAdEvents.REWARDED
    });

    rewardAd.on(RewardAdEvents.REWARDED_STATUS, (reward) => {
      console.log('Reward => ', JSON.stringify(reward));
    });
    await rewardAd.loadAd();
  }

  async splashAd() {
    const splashAd = new this.hmsAds.HMSSplashAd();
    await splashAd.create();
    await splashAd.setLogo('public/assets/logo.html');
    await splashAd.setSloganResId('default_slogan');
    splashAd.setAdDisplayListener();
    splashAd.on(SplashAdEvents.SPLASH_AD_LOADED, async () => {
      console.log('splash loaded');
    });

    splashAd.on(SplashAdEvents.SPLASH_AD_DISMISSED, async () => {
      await splashAd.destroyView();
    });

    const adParams = {
      gender: Gender.FEMALE,
      adContentClassification:
        AdContentClassification.AD_CONTENT_CLASSIFICATION_W,
      tagForUnderAgeOfPromise: UnderAgeOfPromise.PROMISE_FALSE,
      tagForChildProtection:
        ChildProtection.TAG_FOR_CHILD_PROTECTION_FALSE,
      nonPersonalizedAd: NonPersonalizedAd.ALLOW_ALL,
      appCountry: 'TR',
      appLang: 'En',
      countryCode: 'TR',
    };

    await splashAd.load({
      adId: 'testd7c5cewoj6',
      orientation: HMSScreenOrientation.SCREEN_ORIENTATION_PORTRAIT,
      adParam: adParams,
      logoAnchor: Anchor.TOP,
    });
  }

  async rollAd() {
    if (this.rollAdInstance) { await this.rollAdInstance.destroy(); }
    this.rollAdInstance = new this.hmsAds.HMSRollAd();

    await this.rollAdInstance.create(
      { adId: 'testy3cglm3pj0', totalDuration: 60, maxCount: 4 },
      'rollAdArea'
    );
    await this.rollAdInstance.setInstreamMediaChangeListener();
    await this.rollAdInstance.setOnInstreamAdClickListener();
    await this.rollAdInstance.setMediaMuteListener();

    this.rollAdInstance.on(RollAdEvents.ROLL_AD_LOADED, async () => {
      console.log('ROLL_AD_LOADED');
      this.rollAdInstance.setInstreamAds();
    });
    this.rollAdInstance.on(RollAdEvents.ROLL_AD_WHY_THIS_AD, async (result) => {
      console.log('Why this ad clicked');
      window.location.href = result;
    });

    this.rollAdInstance.on(
      RollAdEvents.ROLL_AD_MEDIA_COMPLETION,
      async (result) => {
        console.log('ROLL_AD_MEDIA_COMPLETION');
        this.rollAdInstance.destroy();
      }
    );

    await this.rollAdInstance.loadAd({ file: 'public/assets/roll.html' });
    await this.rollAdInstance.setInstreamMediaStateListener();
  }

  async nativeAd() {
    if (this.nativeAdInstance) { await this.nativeAdInstance.destroy(); }

    const nativeElem = document.getElementById('native-ad-element');

    // Pick a better size for given template
    let adId = 'testu7m3hc4gvm';
    if (this.nativeAdSize === NativeAdTemplate.NATIVE_AD_SMALL_TEMPLATE) {
      nativeElem.style.height = '100px';
    } else if (this.nativeAdSize === NativeAdTemplate.NATIVE_AD_FULL_TEMPLATE) {
      nativeElem.style.height = '350px';
    } else if (this.nativeAdSize === NativeAdTemplate.NATIVE_AD_BANNER_TEMPLATE) {
      nativeElem.style.height = '200px';
    } else if (this.nativeAdSize === NativeAdTemplate.NATIVE_AD_VIDEO_TEMPLATE) {
      adId = 'testy63txaom86';
      nativeElem.style.height = '300px';
    }

    const template = this.nativeAdSize as NativeAdTemplate;
    this.nativeAdInstance = new this.hmsAds.HMSNativeAd();
    await this.nativeAdInstance.create({
      div: 'native-ad-element',
      template,
      bg: '#E4E4E4',
    });
    const nativeAdOptions = { requestCustomDislikeThisAd: true };

    this.nativeAdInstance.on(NativeAdEvents.NATIVE_AD_LOADED, async () => {
      console.log('Native Ad Loaded');
      this.nativeAdInstance.show();
    });
    await this.nativeAdInstance.loadAd({ adId, nativeAdOptions });

  }

  async why() {
    await this.nativeAdInstance.gotoWhyThisAdPage(false);
  }

  async dislike() {
    await this.nativeAdInstance.setDislikeAdListener();

    this.nativeAdInstance.on(NativeAdEvents.NATIVE_AD_DISLIKED, async () => {
      console.log('nativeAd :: disliked');
      await this.nativeAdInstance.destroy();
      this.nativeAdInstance = undefined;
    });
    const res = await this.nativeAdInstance.dislikeAd('Do not like this ad!');
    alert('dislikeAd -> success! ' + JSON.stringify(res));
  }

  onBannerAdSizeChange(bannerAdSize) {
    this.bannerAdSize = bannerAdSize;
    console.log(this.bannerAdSize);
  }

  onBannerAdColorChange(bannerAdColor) {
    this.bannerAdColor = bannerAdColor;
    console.log(this.bannerAdColor);
  }

  onNativeAdSizeChange(nativeAdSize) {
    this.nativeAdSize = nativeAdSize;
    console.log(this.nativeAdSize);
  }

  logScrollStart(event) {
    console.log('logScrollStart : When Scroll Starts', event);
  }

  logScrolling(event) {
    console.log('logScrolling : When Scrolling', event);
    if (this.bannerAd){
      this.bannerAd.scroll();
    }
    if (this.rollAdInstance){
      this.rollAdInstance.scroll();
    }
    if (this.nativeAdInstance){
      this.nativeAdInstance.scroll();
    }
  }

  logScrollEnd(event) {
    console.log('logScrollEnd : When Scroll Ends', event);
  }
}
