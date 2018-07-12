// pages/piano/piano.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRes: '点击下一题开始。',
    typeRadioItems : [
      { name: '8个音', value: '0', checked: true },
      { name: '6个音(不含fa和si)', value: '1'}
    ]
  },

  typeRadioChange: function (e) {
    //console.log('radio发生change事件，携带value值为：', e.detail.value);

    var typeRadioItems = this.data.typeRadioItems;
    for (var i = 0, len = typeRadioItems.length; i < len; ++i) {
      typeRadioItems[i].checked = typeRadioItems[i].value == e.detail.value;
    }

    this.setData({
      typeRadioItems: typeRadioItems
    });
  },

  //下一题
  doTest: function () {
    
    var rn = this.makeTestNum();
    console.log(rn);
    this.testDegree = rn;
    // this.setData({
    //   testRes: rn
    // })
    this.palyByNum(rn);
    
  },
 
  //根据模式算出考题随机数
  makeTestNum : function(){
    var rn = Math.floor(Math.random() * 8 + 1);
    //不听 fa 和 si
    while (this.getCurrModel() == 1 && (rn == 4 || rn == 7)) {
      rn = Math.floor(Math.random() * 8 + 1);
    }
    return rn;
  },

  //获取当前模式
  getCurrModel : function(){
    var model = 0;
    var typeRadioItems = this.data.typeRadioItems;
    for (var i = 0, len = typeRadioItems.length; i < len; ++i) {
      if (typeRadioItems[i].checked) {
        model = typeRadioItems[i].value;
      }
    }
    return model;
  },

  palyByNum : function(num){
    var voice = wx.createInnerAudioContext();
    switch (num) {
      case 1:
        voice.src = 'pages/piano/source/40-C.mp3';
        break;
      case 2:
        voice.src = 'pages/piano/source/42-D.mp3';
        break;
      case 3:
        voice.src = 'pages/piano/source/44-E.mp3';
        break;
      case 4:
        voice.src = 'pages/piano/source/45-F.mp3';
        break;
      case 5:
        voice.src = 'pages/piano/source/47-G.mp3';
        break;
      case 6:
        voice.src = 'pages/piano/source/49-A.mp3';
        break;
      case 7:
        voice.src = 'pages/piano/source/51-B.mp3';
        break;
      case 8:
        voice.src = 'pages/piano/source/52-C.mp3';
        break;
    }
    voice.play();
    voice.onEnded((res) => {
      voice.destroy();
    })
  },

  playC4: function () {
    this.palyByNum(1);
    this.checkTest(1);
  },
  playD4: function () {
    this.palyByNum(2);
    this.checkTest(2);
  },
  playE4: function () {
    this.palyByNum(3);
    this.checkTest(3);
  },
  playF4: function () {
    this.palyByNum(4);
    this.checkTest(4);
  },
  playG4: function () {
    this.palyByNum(5);
    this.checkTest(5);
  },
  playA4: function () {
    this.palyByNum(6);
    this.checkTest(6);
  },
  playB4: function () {
    this.palyByNum(7);
    this.checkTest(7);
  },
  playC5: function () {
    this.palyByNum(8);
    this.checkTest(8);
  },
//检测答题是否正确
  checkTest : function(touchNum){
    if (this.testDegree == undefined){
      return;
    }
    if (this.testDegree == touchNum){
      wx.showToast({
        title: '正确',
        icon: 'success',
        duration: 1000
      })
    }else{
      wx.showToast({
        title: '正确答案是 ' + this.testDegree,
        icon: 'none',
        duration: 2000
      })
    }
    this.testDegree = undefined;
  },
//再听一遍
  doAgain : function(){

    if (this.testDegree == undefined) {
      wx.showToast({
        title: '请点击下一题' ,
        icon: 'none',
        duration: 1000
      })
      return;
    }
    this.palyByNum(this.testDegree);
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