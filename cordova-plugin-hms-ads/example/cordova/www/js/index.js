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
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    HMSAds.init();
}

const $ = (id) => document.getElementById(id);

$("getSdkVersion").onclick = async() => {
    const res = await HMSAds.getSDKVersion();
    alert("getSdkVersion :: " + res);
};
$("getAdvertisingIdInfo").onclick = async() => {
    const res = await HMSAds.getAdvertisingIdInfo();
    alert("getAdvertisingIdInfo :: " + JSON.stringify(res));
};

$("setRequestOptions").onclick = async() => {
    var reqOpt = {
        adContentClassification: HMSConstants.AdContentClassification.AD_CONTENT_CLASSIFICATION_W,
        appLang: "En",
        appCountry: "TR",
        tagForChildProtection: HMSConstants.ChildProtection.TAG_FOR_CHILD_PROTECTION_FALSE,
        tagForUnderAgeOfPromise: HMSConstants.UnderAgeOfPromise.PROMISE_TRUE,
        nonPersonalizedAd: HMSConstants.NonPersonalizedAd.ALLOW_ALL,
    };

    HMSAds.setRequestOptions(reqOpt)
        .then((result) => alert("setRequestOptions :: " + JSON.stringify(result)))
        .catch((error) => console.log("setRequestOptions :: Error!", error));
};

$("getRequestOptions").onclick = async() => {
    HMSAds.getRequestOptions()
        .then((result) => alert("getRequestOptions :: " + JSON.stringify(result)))
        .catch((error) => console.log("getRequestOptions :: Error!", error));
};

$("startClient").onclick = async() => {
    HMSAds.referrerClientStartConnection(true)
        .then((result) => alert("referrerClientStartConnection :: " + HMSConstants.InstallReferrerResponses[result]))
        .catch((error) => alert("referrerClientStartConnection :: Error!" + error));
};
$("getReferrerDetails").onclick = () => {


    HMSAds.getInstallReferrer()
        .then((result) => alert("getInstallReferrer :: " + JSON.stringify(result)))
        .catch((error) => alert("getInstallReferrer :: Error!" + error));

    HMSAds.referrerClientEndConnection()
        .then((result) => console.log("referrerClientEndConnection :: ", JSON.stringify(result)))
        .catch((error) => console.log("referrerClientEndConnection :: Error!", error));

};


var interstitialAd;
//Interstitial

$("create_interstitial").onclick = async() => {
    interstitialAd = new HMSAds.HMSInterstitialAd();
    await interstitialAd.create(true);
    await interstitialAd.setAdId("testb4znbuh3n2");
    await interstitialAd.setAdListener();
    interstitialAd.on(
        HMSConstants.InterstitialAdEvents.INTERSTITIAL_AD_LOADED,
        async() => {
            await interstitialAd
                .isLoaded()
                .then((result) => console.log("isLoaded :: ", result))
                .catch((error) => console.log("isLoaded :: Error!", error));
            await interstitialAd.show();
        }
    );
    await interstitialAd.loadAd();
};

var bannerAd;

$("create_banner").onclick = async() => {
    if (bannerAd) await bannerAd.destroy();
    bannerAd = new HMSAds.HMSBannerAd();

    const banner = $("bannerAd");
    const size = $("bannerAdSize").value;
    if (size === HMSConstants.BannerAdSize.BANNER_SIZE_320_50) {
        banner.style.height = "50px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_300_250) {
        banner.style.height = "250px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_320_100) {
        banner.style.height = "100px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_360_144) {
        banner.style.height = "144px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_360_57) {
        banner.style.height = "57px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_468_60) {
        banner.style.height = "60px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_160_600) {
        banner.style.height = "600px";
    } else if (size === HMSConstants.BannerAdSize.BANNER_SIZE_728_90) {
        banner.style.height = "90px";
    } else {
        banner.style.height = "200px";
    }

    await bannerAd.create("bannerAd");
    await bannerAd.setAdId("testw6vs28auh3");
    await bannerAd.setBannerAdSize($("bannerAdSize").value);
    await bannerAd.setBackgroundColor($("bannerAdBgColor").value);
    await bannerAd.setBannerRefresh(50);
    await bannerAd.setAdListener();

    this.bannerAd.on(HMSConstants.BannerAdEvents.BANNER_AD_FAILED, async(result) => {
        alert('BANNER_AD_FAILED :: ' + result.message);
    });

    bannerAd.on(HMSConstants.BannerAdEvents.BANNER_AD_LOADED, async() => {
        console.log("bannerAd Loaded");
    });
    bannerAd.loadAd();
};

$("load_splash").onclick = async() => {
    var splashAd = new HMSAds.HMSSplashAd();
    await splashAd.create();
    await splashAd.setLogo("www/logo.html");
    await splashAd.setSloganResId("default_slogan");
    splashAd.setAdDisplayListener();
    splashAd.on(HMSConstants.SplashAdEvents.SPLASH_AD_LOADED, async() => {
        console.log("splash loaded");
    });

    splashAd.on(HMSConstants.SplashAdEvents.SPLASH_AD_DISMISSED, async() => {
        await splashAd.destroyView();
    });

    var adParams = {
        gender: HMSConstants.Gender.FEMALE,
        adContentClassification: HMSConstants.AdContentClassification.AD_CONTENT_CLASSIFICATION_W,
        tagForUnderAgeOfPromise: HMSConstants.UnderAgeOfPromise.PROMISE_FALSE,
        tagForChildProtection: HMSConstants.ChildProtection.TAG_FOR_CHILD_PROTECTION_FALSE,
        nonPersonalizedAd: HMSConstants.NonPersonalizedAd.ALLOW_ALL,
        appCountry: "TR",
        appLang: "En",
        countryCode: "TR",
    };
    await splashAd.load({
        adId: "testd7c5cewoj6",
        orientation: HMSConstants.HMSScreenOrientation.SCREEN_ORIENTATION_PORTRAIT,
        logoAnchor: HMSConstants.Anchor.TOP,
        adParam: adParams,
    });
};

//reward
$("load_reward").onclick = async() => {
    var rewardAd = new HMSAds.HMSRewardAd();
    await rewardAd.create("testx9dtjwj8hp");

    rewardAd.on(HMSConstants.RewardAdEvents.REWARDED_LOADED, async() => {
        await rewardAd.show(true); // if false, setRewardAdListener() and listen HMSConstants.RewardAdEvents.REWARDED
    });

    rewardAd.on(HMSConstants.RewardAdEvents.REWARDED_STATUS, async(reward) => {
        console.log("Reward :: ", JSON.stringify(reward));
    });
    await rewardAd.loadAd();
};

var rollAd;
$("load_roll").onclick = async() => {
    if (rollAd) await rollAd.destroy();
    rollAd = new HMSAds.HMSRollAd();

    await rollAd.create({ adId: "testy3cglm3pj0", totalDuration: 60, maxCount: 4 },
        "rollAd"
    );
    await rollAd.setInstreamMediaChangeListener();
    await rollAd.setOnInstreamAdClickListener();
    await rollAd.setMediaMuteListener();

    rollAd.on(HMSConstants.RollAdEvents.ROLL_AD_LOADED, async() => {
        console.log("ROLL_AD_LOADED");
        rollAd.setInstreamAds();
    });
    rollAd.on(HMSConstants.RollAdEvents.ROLL_AD_WHY_THIS_AD, async(result) => {
        console.log("Why this ad clicked");
        window.location.href = result;
    });

    rollAd.on(
        HMSConstants.RollAdEvents.ROLL_AD_MEDIA_COMPLETION,
        async(result) => {
            console.log("ROLL_AD_MEDIA_COMPLETION");
            rollAd.destroy();
        }
    );

    await rollAd.loadAd({ file: "www/roll.html" });
    await rollAd.setInstreamMediaStateListener();
};

var nativeAd;

$("native").onclick = async() => {
    if (nativeAd) await nativeAd.destroy();

    const template = $("nativeAdTemplate").value;
    const nativeElem = $("native-ad-element");

    // Pick a better size for given template
    let adId = "testu7m3hc4gvm";
    if (template === HMSConstants.NativeAdTemplate.NATIVE_AD_SMALL_TEMPLATE) {
        nativeElem.style.height = '100px';
    } else if (template === HMSConstants.NativeAdTemplate.NATIVE_AD_FULL_TEMPLATE) {
        nativeElem.style.height = '350px';
    } else if (template === HMSConstants.NativeAdTemplate.NATIVE_AD_BANNER_TEMPLATE) {
        nativeElem.style.height = '200px';
    } else if (template === HMSConstants.NativeAdTemplate.NATIVE_AD_VIDEO_TEMPLATE) {
        adId = "testy63txaom86";
        nativeElem.style.height = '300px';
    }

    nativeAd = new HMSAds.HMSNativeAd();
    await nativeAd.create({
        div: "native-ad-element",
        template,
        bg: "#E4E4E4",
    });
    const nativeAdOptions = { requestCustomDislikeThisAd: true };

    nativeAd.on(HMSConstants.NativeAdEvents.NATIVE_AD_LOADED, async() => {
        console.log("Native Ad Loaded.");
        nativeAd.show();
    });
    await nativeAd.loadAd({ adId, nativeAdOptions });
};

$("why").onclick = async() => {
    await nativeAd.gotoWhyThisAdPage(false);
};

$("dislike").onclick = async() => {
    await nativeAd.setDislikeAdListener();

    nativeAd.on(HMSConstants.NativeAdEvents.NATIVE_AD_DISLIKED, async() => {
        console.log("nativeAd :: disliked");
        await nativeAd.destroy();
        nativeAd = undefined;
    });
    const res = await nativeAd.dislikeAd("Do not like this ad!");
    alert("dislikeAd :: success! " + JSON.stringify(res));
};