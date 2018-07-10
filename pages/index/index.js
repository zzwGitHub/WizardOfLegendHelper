Page({
  data: {
    //motto: 'Hello World'
    
  },
  //事件处理函数
  goLegendPage: function() {
    wx.navigateTo({
      url: '../legend/legend'
    })
  },
  
  goPianoPage: function(e) {
    wx.navigateTo({
      url: '../piano/piano'
    })
  }
})
