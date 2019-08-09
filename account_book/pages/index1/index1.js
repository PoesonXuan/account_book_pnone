// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  //点击发送 https://easy-mock.com/mock/5d395f2d3d57c257338a2b37/example/test/mywechat
  send: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    /*wx.request({
      url: 'http://192.168.0.100:9091/queryUser.do', //仅为示例，并非真实的接口地址 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "POST",
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    })*/
  }
})