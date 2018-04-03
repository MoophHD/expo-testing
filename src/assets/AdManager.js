import { AdMobInterstitial, AdMobRewarded } from 'expo';

class _AdManager {
  constructor(  ) {
    this._isAdFree = false;
  }
  
  setAdFree(isAdFree) {
    this._isAdFree = isAdFree;
  }
  
  async init(unitid) {
    let _unitid = unitid || 'ca-app-pub-3940256099942544/1033173712' //test unit;
        
    AdMobInterstitial.setAdUnitID(_unitid);
    AdMobRewarded.setAdUnitID(_unitid);
    
    await AdMobInterstitial.requestAd();
    await AdMobRewarded.requestAd();
  }
  
  async showInterstitial() {
    if (this._isAdFree) return;
    
    await AdMobInterstitial.showAd();
    await AdMobInterstitial.requestAd();
  }
  
  async showRewarder() {
    if (this._isAdFree) return;
    
    await AdMobInterstitial.showAd();
    await AdMobInterstitial.requestAd();
  }
}

let AdManager = new _AdManager();

export default AdManager;