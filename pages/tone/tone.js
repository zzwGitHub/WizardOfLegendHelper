// pages/tone/tone.js
var Play = require('../../utils/play.js');
var toneRangeArr = new Array();
var testTone = 0;
var testToneName = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answerMsg: '触摸此处显示答案',
    toneStyleMap: {
      's': 'select-btn select-off',
      's1': 'select-btn select-on',
      's2': 'select-btn select-off'
    }
  },
  /**
   * 测试
   */
  doTest: function () {
    if (toneRangeArr.length == 0) {
      wx.showToast({
        title: '请至少选择一个音组',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var playRangeNum = Math.floor(Math.random() * (toneRangeArr.length));
    //console.log(toneRangeArr[playRangeNum]);
    testTone = toneRangeArr[playRangeNum].fileName;//全局存储考题
    Play.play(testTone);
    testToneName = toneRangeArr[playRangeNum].toneName;    
  },
  doAgain: function () {
    if (testTone == 0) {
      wx.showToast({
        title: '请点击下一题开始测试',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    Play.play(testTone);
  },
  selectRange: function (e) {
    var num = e.currentTarget.dataset.degree;
    var styleMap = this.data.toneStyleMap;
    var currStyle = styleMap[num];
    if (currStyle.indexOf("on") == -1) {
      //表示没有on，那就是 off
      styleMap[num] = 'select-btn select-on';
    } else {
      //是on
      styleMap[num] = 'select-btn select-off';
    }
    this.setData({
      toneStyleMap: styleMap
    });
    this.setPlayRange();
    //console.log(playRange.length);
  },
  setPlayRange: function (e) {
    var sTone = [
      { fileName: '28', toneName: '小字组C' },
      { fileName: '30', toneName: '小字组D' },
      { fileName: '32', toneName: '小字组E' },
      { fileName: '33', toneName: '小字组F' },
      { fileName: '35', toneName: '小字组G' },
      { fileName: '37', toneName: '小字组A' },
      { fileName: '39', toneName: '小字组B' }
    ];
    var s1Tone = [
      { fileName: '40', toneName: '小字1组C' },
      { fileName: '42', toneName: '小字1组D' },
      { fileName: '44', toneName: '小字1组E' },
      { fileName: '45', toneName: '小字1组F' },
      { fileName: '47', toneName: '小字1组G' },
      { fileName: '49', toneName: '小字1组A' },
      { fileName: '51', toneName: '小字1组B' }
    ];
    var s2Tone = [
      { fileName: '52', toneName: '小字2组C' },
      { fileName: '54', toneName: '小字2组D' },
      { fileName: '56', toneName: '小字2组E' },
      { fileName: '57', toneName: '小字2组F' },
      { fileName: '59', toneName: '小字2组G' },
      { fileName: '61', toneName: '小字2组A' },
      { fileName: '63', toneName: '小字2组B' }
    ];

    var styleMap = this.data.toneStyleMap;
    var wantToPlay = new Array();
    for (var key in styleMap) {
      if (styleMap[key].indexOf("on") != -1) {//on的都找出来！
        if (key == 's'){
          wantToPlay = wantToPlay.concat(sTone);
        }
        if (key == 's1') {
          wantToPlay = wantToPlay.concat(s1Tone);
        }
        if (key == 's2') {
          wantToPlay = wantToPlay.concat(s2Tone);
        }
      }
    }
    toneRangeArr = wantToPlay;//放到全局数组里
    //console.log(toneRangeArr.length);
  },
  playBtn : function(e){
    var selectGroup = new Array(); 
    var num = e.currentTarget.dataset.degree;
    var playTone = num * 1;

    var styleMap = this.data.toneStyleMap;
    for (var key in styleMap) {
      if (styleMap[key].indexOf("on") != -1) {//on的都找出来！
        selectGroup = selectGroup.concat('s');
      }
    }
    if (selectGroup.length != 1){
      Play.play(playTone);
      return;
    }

    for (var key in styleMap) {
      if (styleMap[key].indexOf("on") != -1) {//on的都找出来！
        if (key == 's') {
          playTone = num * 1 - 12;
        }
        if (key == 's1') {
          playTone = num * 1;
        }
        if (key == 's2') {
          playTone = num * 1 + 12;
        }
      }
    }
    Play.play(playTone);
  },
  answerTouch : function(){
    if (testTone == 0) {
      wx.showToast({
        title: '请点击下一题开始测试',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    this.setData({
      answerMsg: testToneName
    });
  },
  answerLeave: function () {
    if (testTone == 0) {
      return;
    }
    this.setData({
      answerMsg: "触摸此处显示答案"
    });
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
    this.setPlayRange();
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