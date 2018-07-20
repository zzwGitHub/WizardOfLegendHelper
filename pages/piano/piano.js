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
    //console.log('test'+rn);
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

    //console.log('play' + num);

    var voice = wx.createInnerAudioContext();
    var musicPath = 'source/';
    switch (num) {
      case 1:
        voice.src = musicPath + '40.mp3';
        break;
      case 2:
        voice.src = musicPath + '42.mp3';
        break;
      case 3:
        voice.src = musicPath + '44.mp3';
        break;
      case 4:
        voice.src = musicPath + '45.mp3';
        break;
      case 5:
        voice.src = musicPath + '47.mp3';
        break;
      case 6:
        voice.src = musicPath + '49.mp3';
        break;
      case 7:
        voice.src = musicPath + '51.mp3';
        break;
      case 8:
        voice.src = musicPath + '52.mp3';
        break;
    }
    voice.play();
    voice.onEnded((res) => {
      voice.destroy();
    })
  },

  dontPlayIfAnswer : function(){
    
  },

  playBtn: function (e) {
    var num = e.currentTarget.dataset.degree;
    if (this.testDegree != undefined) {
      this.checkTest(num * 1);
    }else{
      this.palyByNum(num * 1);//太有意思了， 字符串 转 数字
    }
  },

//检测答题是否正确
  checkTest : function(touchNum){
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

  
  start: function (e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function (e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end: function (e) {
    this.setData({
      hidden: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var windowWidth = "";
    var windowHeight = "";

    wx.getSystemInfo({
      success: function (res) {
        windowWidth = res.windowWidth;
        windowHeight = res.windowHeight;
        _this.setData({
          winWidth: windowWidth - 10
        })
      }
    })

    //这比例完全是为了看着顺眼，不是真实的。
    var whiteKeyWidth = 33;
    var whiteKeyHeight = 6.26 * whiteKeyWidth;
    var BlackKeyWidth = whiteKeyWidth / 2;
    var BlackKeyHeight = whiteKeyHeight * 0.56;

    var keyboardLeft = 10;
    var keyboardUp = 10;

    _this.setData({
      winHeight: whiteKeyHeight + keyboardUp*2
    })

    const ctx = wx.createCanvasContext('myCanvas')
    //
    ctx.setStrokeStyle('black')

    for (var i = 0; i < 10; i++) {
      ctx.strokeRect(keyboardLeft + i * whiteKeyWidth, keyboardUp, whiteKeyWidth, whiteKeyHeight)
    }

    ctx.setFillStyle('black')
    for (var i = 0; i < 10; i++) {

      if (i == 0 || i == 3 || i == 7 || i == 10) {
        continue;
      }
      ctx.fillRect(keyboardLeft + i * whiteKeyWidth - (BlackKeyWidth / 2)
        , keyboardUp, BlackKeyWidth, BlackKeyHeight)
    }
    ctx.draw()
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