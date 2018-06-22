// pages/legend/legend.js
Page({



  /**
   * 页面的初始数据
   */
  data: {
    searchTest: '',
    result_array: [{
      t_name: 'Wizard of Legend',
      t_content: '《Wizard of Legend》是由洛杉矶工作室Contingent99制作的一款2D硬核动作冒险游戏。游戏拥有快节奏的战斗风格，连招酷炫，技能华丽。玩家扮演一位传说法师，可以学习100多种法术，设计不同的组合，针对各种敌人和BOSS。游戏体验非常的新鲜和独特，并且支持合作模式，推荐给喜欢横版多种游戏的玩家。'
    }]
  },

  searchTestInput: function(e) {
    this.setData({
      searchTest: e.detail.value
    })
  },
  //事件处理函数
  searchMagic: function() {
    var sea = this.data.searchTest;
    var result = []; 
    var _this = this;
    if (sea.length > 0) {
      
      wx.request({
        url:'http://58a550645aa4d78e64a41ce7aa6beec1.xianlaigame.com:23333/WOLH/items/', 
        method:'GET',
        data: {
          item_name: sea
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data.results)
          for (var i=0; i < res.data.results.length; i++){
            result.push({
              t_name: res.data.results[i].item_name,
              t_content: res.data.results[i].item_descript

            })
          }
          
          if (result.length == 0) {
            result.push({
              t_name: "没有这个道具呢",
              t_content: ""
            });
          }

          _this.setData({
            result_array: result
          })
          
        } 
      })

      
    }
    else{
      result.push({
        t_name: "你说,你不输入东西,我怎么给你查",
        t_content: ""
      })
    }
	
	
    //console.log(result)
    this.setData({
      result_array: result
    })

    //this.setData({ searchTest: sea })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
