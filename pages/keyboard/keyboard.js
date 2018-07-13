// pages/keyboard/keyboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    hidden: true,
    winWidth : ""
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
        //
        windowWidth = res.windowWidth;
        windowHeight = res.windowHeight;
        _this.setData({
          winWidth: windowWidth - 10
        })
      }
    })


    // wx.createSelectorQuery().select('#myCanvasId').boundingClientRect(function (rect) {
    //   //console.log()
    //   rect.width = windowWidth;
    // }).exec()

//这比例完全是为了看着顺眼，不是真实的。
    var whiteKeyWidth = 33;
    var whiteKeyHeight = 6.26 * whiteKeyWidth;
    var BlackKeyWidth = whiteKeyWidth/2;
    var BlackKeyHeight = whiteKeyHeight * 0.56;

    var keyboardLeft = 10;
    var keyboardUp = 10;

    const ctx = wx.createCanvasContext('myCanvas')
    //
    ctx.setStrokeStyle('black')
    
    for(var i=0; i<10; i++){
      ctx.strokeRect(keyboardLeft + i * whiteKeyWidth, keyboardUp, whiteKeyWidth, whiteKeyHeight)
    }

    ctx.setFillStyle('black')
    for (var i = 0; i < 10; i++) {

      if (i == 0 || i == 3 || i == 7 || i == 10 ){
        continue;
      }
      ctx.fillRect(keyboardLeft + i * whiteKeyWidth - (BlackKeyWidth/2)
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