// declare global variable "D"
window.D = {
    // singletons
    common: null, //公共方法
    bannerAd:null,
    share(){
        let num=Math.floor(Math.random()*(this.shareInfo.length-1))
        if(this.getDay()=='201914'||this.getDay()=='201915'){
            num=this.shareInfo.length-1
        }
        wx.shareAppMessage(this.shareInfo[num])
    },
    getDay(){
        let year=(new Date()).getFullYear()
        let month=(new Date()).getMonth()
        let day=(new Date()).getDate()
        let dateNum=String(year)+String(month)+String(day)
        return dateNum
    },
    bannerAdShow() {
        let _this=this
        if(_this.bannerAd){
            _this.bannerAd.destroy()
        }
        return new Promise((resolve, reject) => {
            wx.getSystemInfo({
                success: function (res) {
                    _this.bannerAd = wx.createBannerAd({
                        adUnitId: 'adunit-d161af9b50b88a33',
                        style: {
                            left: 0,
                            top: 0,
                            width: res.windowWidth
                        }
                    })
                    _this.bannerAd.onResize((e) => {
                        _this.bannerAd.style.top = res.screenHeight - _this.bannerAd.style.realHeight
                    });
                    _this.bannerAd.show()
                    _this.bannerAd.onError(err => {
                        console.log('广告加载失败')
                    })
                }
                })
            resolve('ok')
         })
    },
    bannerDestory(){
        if(this.bannerAd){
            this.bannerAd.destroy()
        }
    },
    videoLife() {
         D.bannerDestory()
         let _this=this 
         wx.showLoading({
            title: '加载中',
         })
         return new Promise((resolve, reject) => {
             let videoAd = wx.createRewardedVideoAd({
                adUnitId: 'adunit-1f01ed104fbf61ea'
             })
             videoAd.load()
             .then(() => {
                 videoAd.show();
                 wx.hideLoading();
                 videoAd.onClose(res => {
                     
                 })
             })
             .catch(err => {
                 wx.hideLoading();
                 reject('error')
             })
             videoAd.onError(function () {
                 wx.hideLoading();
                 reject('error')
             })
         })
    },
    shareInfo:[
        {
            title: '好玩到无法自拔,能超过我的分算我输！！！',
            imageUrl:'http://webfdh.com/way-hero/main.jpg'
        },{
            title: '真搞不懂你们,这游戏就那么好玩吗...盘它！！！',
            imageUrl:'http://webfdh.com/way-hero/banzhuan.jpg'
        },
        {
            title: '好看的皮囊千篇一律,有趣的游戏万里挑一',
            imageUrl:'http://webfdh.com/way-hero/main.jpg'
        },
        {
            title: '我就是无聊死,也不会玩这个游戏',
            imageUrl:'http://webfdh.com/way-hero/banzhuan.jpg'
        },
        {
            title: '猪事顺利,快来领取你的新年金砖！！',
            imageUrl:'http://webfdh.com/way-hero/happyNewYear.jpg'
        }
    ]
};
