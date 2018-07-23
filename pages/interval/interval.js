// pages/interval/interval.js

var Play = require('./play.js');
var degreeMix = 16;
var degreeMax = 75;
var testInterval = 0;//测试音程
var testLowNum = 0; //播放的低音
var playRange = new Array();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testMsg : '点击 下一题 开始',
    intervalList: [
      { name: '小二度', state: '1', style: 'select select-on' },
      { name: '大二度', state: '0', style: 'select select-off'}
    ],
    intervalMap :{
      'i1': 'select select-off',
      'i2': 'select select-off',
      'i3': 'select select-off',
      'i4': 'select select-off',
      'i5': 'select select-off',
      'i6': 'select select-off',
      'i7': 'select select-off',
      'i8': 'select select-off',
      'i9': 'select select-off',
      'i10': 'select select-off',
      'i11': 'select select-off',
      'i12': 'select select-off',
    }
  },

  /**
   * 测试
   * 范围：degreeMix ~ degreeMax
   * 在范围内随机出两个音（小于12度）
   */
  doTest : function(){
    if (playRange.length == 0){
      wx.showToast({
        title: '请至少选择一个音程',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    //获取一个随机的音程
    var distance = testInterval = this.getTestInterval();
    var low = testLowNum = this.getRandomDegree();
    var high = low + distance*1;

    Play.playInterval(low, high);
    //console.log(testInterval);
    var word = this.getWord(testInterval*1);
    this.setData({
      testMsg: word
    });
  },
  doAgain: function () {
    if (testLowNum == 0) {
      wx.showToast({
        title: '请点击下一题开始测试',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    Play.playInterval(testLowNum, testLowNum + testInterval*1);
  },
  /**
   * 获取一个随机的低音（在范围内）
   */
  getRandomDegree : function(){
    var rn = Math.floor(Math.random() * (degreeMax - degreeMix) + degreeMix);
    //console.log('random ' + rn);
    return rn;
  },
  /**
   * 根据用户选定的音程范围，出一个随机测试音程
   */
  getTestInterval : function(){
    var playRangeNum = Math.floor(Math.random() * (playRange.length));
    
    //console.log(playRange[playRangeNum]);
    return playRange[playRangeNum];
  },
  //手动演奏固定的音程
  playBtn : function(e){
    var interval = e.currentTarget.dataset.degree;
    var low = 40;
    var high = 40 + interval * 1;
    Play.playInterval(low, high);
  },
  getWord : function(num){
    switch(num){
      case 1 :
        return "小二度";
        break;
      case 2:
        return "大二度";
        break;
      case 3:
        return "小三度";
        break;
      case 4:
        return "大三度";
        break;
      case 5:
        return "纯四度";
        break;
      case 6:
        return "三全音";
        break;
      case 7:
        return "纯五度";
        break;
      case 8:
        return "小六度";
        break;
      case 9:
        return "大六度";
        break;
      case 10:
        return "小七度";
        break;
      case 11:
        return "大七度";
        break;
      case 12:
        return "纯八度";
        break;
    }
  },
  selectBtn:function(e){
    var num = e.currentTarget.dataset.degree;
    var styleMap = this.data.intervalMap;
    var currStyle = styleMap['i' + num];
    if (currStyle.indexOf("on") == -1 ){ 
      //表示没有on，那就是 off
      styleMap['i' + num] = 'select select-on';
    }else{
      //是on
      styleMap['i' + num] = 'select select-off';
    }
    this.setData({
      intervalMap: styleMap
    });
    this.setPlayRange();
    //console.log(playRange.length);
  },
  setPlayRange:function(){
    var styleMap = this.data.intervalMap;
    var wantToPlay = new Array();
    for (var key in styleMap) {
      if (styleMap[key].indexOf("on") != -1 ){//on的都找出来！
        wantToPlay.push(key.substring(1));
      }
　　}
    playRange = wantToPlay;//放到全局数组里
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})