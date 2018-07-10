// pages/piano/piano.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testRes: '点击begin开始。',
  },

  doTest: function () {
    this.stopAll();
    var rn = Math.floor(Math.random() * 7 + 1);
    console.log(rn);
    this.testDegree = rn;
    this.setData({
      testRes: rn
    })
    switch (rn) {
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
    }
    
  },

  playC4: function () {
    this.stopAll();
    this.C4.play()
  },
  playD4: function () {
    this.stopAll();
    this.D4.play()
  },
  playE4: function () {
    this.stopAll();
    this.E4.play()
  },
  playF4: function () {
    this.stopAll();
    this.F4.play()
  },
  playG4: function () {
    this.stopAll();
    this.G4.play()
  },
  playA4: function () {
    this.stopAll();
    this.A4.play()
  },
  playB4: function () {
    this.stopAll();
    this.B4.play()
  },
  playC5: function () {
    //this.C4.play()
  },

  stopAll : function(){
    this.C4.stop();
    this.D4.stop();
    this.E4.stop();
    this.F4.stop();
    this.G4.stop();
    this.A4.stop();
    this.B4.stop();
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
    this.C4.src = 'http://ziwen.imwork.net:16346/music-source/1C.mp3'

    this.D4 = wx.createInnerAudioContext()
    this.D4.src = 'http://ziwen.imwork.net:16346/music-source/2D.mp3'

    this.E4 = wx.createInnerAudioContext()
    this.E4.src = 'http://ziwen.imwork.net:16346/music-source/3E.mp3'

    this.F4 = wx.createInnerAudioContext()
    this.F4.src = 'http://ziwen.imwork.net:16346/music-source/4F.mp3'

    this.G4 = wx.createInnerAudioContext()
    this.G4.src = 'http://ziwen.imwork.net:16346/music-source/5G.mp3'

    this.A4 = wx.createInnerAudioContext()
    this.A4.src = 'http://ziwen.imwork.net:16346/music-source/6A.mp3'

    this.B4 = wx.createInnerAudioContext() 
    this.B4.src = 'http://ziwen.imwork.net:16346/music-source/7B.mp3'
    
   
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