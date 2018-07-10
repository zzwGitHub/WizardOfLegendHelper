// pages/piano/piano.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRes: '点击下一题开始。',
  },

//下一题
  doTest: function () {
    
    var rn = Math.floor(Math.random() * 8 + 1);
    //console.log(rn);
    this.testDegree = rn;
    // this.setData({
    //   testRes: rn
    // })
    this.palyByNum(rn);
    
  },

  palyByNum : function(num){
    this.stopAll();
    switch (num) {
      case 1:
        this.C4.play()
        break;
      case 2:
        this.D4.play()
        break;
      case 3:
        this.E4.play()
        break;
      case 4:
        this.F4.play()
        break;
      case 5:
        this.G4.play()
        break;
      case 6:
        this.A4.play()
        break;
      case 7:
        this.B4.play()
        break;
      case 8:
        this.C5.play()
        break;
    }
  },

  playC4: function () {
    this.stopAll();
    this.C4.play();
    this.checkTest(1);
  },
  playD4: function () {
    this.stopAll();
    this.D4.play();
    this.checkTest(2);
  },
  playE4: function () {
    this.stopAll();
    this.E4.play();
    this.checkTest(3);
  },
  playF4: function () {
    this.stopAll();
    this.F4.play();
    this.checkTest(4);
  },
  playG4: function () {
    this.stopAll();
    this.G4.play();
    this.checkTest(5);
  },
  playA4: function () {
    this.stopAll();
    this.A4.play();
    this.checkTest(6);
  },
  playB4: function () {
    this.stopAll();
    this.B4.play();
    this.checkTest(7);
  },
  playC5: function () {
    this.stopAll();
    this.C5.play();
    this.checkTest(8);
  },

  stopAll : function(){
    this.C4.stop();
    this.D4.stop();
    this.E4.stop();
    this.F4.stop();
    this.G4.stop();
    this.A4.stop();
    this.B4.stop();
    this.C5.stop();
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
    
    this.C4 = wx.createInnerAudioContext()
    this.C4.src = 'http://ziwen.imwork.net:19791/music-source/40-C.mp3'

    this.D4 = wx.createInnerAudioContext()
    this.D4.src = 'http://ziwen.imwork.net:19791/music-source/42-D.mp3'

    this.E4 = wx.createInnerAudioContext()
    this.E4.src = 'http://ziwen.imwork.net:19791/music-source/44-E.mp3'

    this.F4 = wx.createInnerAudioContext()
    this.F4.src = 'http://ziwen.imwork.net:19791/music-source/45-F.mp3'

    this.G4 = wx.createInnerAudioContext()
    this.G4.src = 'http://ziwen.imwork.net:19791/music-source/47-G.mp3'

    this.A4 = wx.createInnerAudioContext()
    this.A4.src = 'http://ziwen.imwork.net:19791/music-source/49-A.mp3'

    this.B4 = wx.createInnerAudioContext() 
    this.B4.src = 'http://ziwen.imwork.net:19791/music-source/51-B.mp3'

    this.C5 = wx.createInnerAudioContext()
    this.C5.src = 'http://ziwen.imwork.net:19791/music-source/52-C.mp3'
    
   
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