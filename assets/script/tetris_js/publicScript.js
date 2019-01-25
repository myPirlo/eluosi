// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        titleContent:cc.Node,
        scoreList:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    toMainScence(){
        cc.director.loadScene('tetris')
    },
    backSence(){
        cc.director.loadScene('snakeBanner')
    },
    endShare(){
        wx.shareAppMessage({
            title: '我就是无聊死,也不会玩这个游戏！！！',
            imageUrl:'http://webfdh.com/way-hero/1.jpg'
        })
    },
    showScoreList(){
        this.titleContent.active=false
        this.scoreList.active=true
    },
    hideScoreList(){
        this.titleContent.active=true
        this.scoreList.active=false
    },
    toOther(){
        wx.navigateToMiniProgram({
            appId: 'wx7feef145b72f629b',
        })
    }

    // update (dt) {},
});
