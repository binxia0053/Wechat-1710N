// pages/ip/ip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loc: '地理位置',
    ip: ''
  },

  getIp: function (event) {
    this.setData({
      ip: event.detail.value
    });
  },

  query: function () {
    let ip = this.data.ip;
    let url = `http://127.0.0.1:3000/?ip=${ip}`;
    let page = this;
    wx.request({
      url: url,
      success: function (res) {
        let message = '请求失败';
        if (res.data.status === 'ok') {
          message = res.data.loc;
        }
        page.setData({
          loc: message
        });
      }
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