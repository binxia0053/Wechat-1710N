// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 117,
    latitude: 40,
    scale: 10,
    markers: [
      {
        longitude: 116.3325,
        latitude: 40,
        iconPath: '/resources/img/pin.png',
        width: 20,
        height: 30
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 116.3325,
            latitude: 40.6,
          },
          {
            longitude: 116.0,
            latitude: 39.7,
          },
          {
            longitude: 116.6525,
            latitude: 39.7,
          },
          {
            longitude: 116.3325,
            latitude: 40.6,
          }
        ],
        color: '#00ff00',
        width: 10
      }
    ],
    controls: [
      {
        id: 1,
        position: {
          left: 20,
          top: 20
        },
        iconPath: '/resources/img/position.png',
        clickable: true
      }
    ]
  },

  controlTap: function (event) {
    let page = this;
    switch (event.controlId) {
      case 1:
        wx.getLocation({
          success: function (res) {
            page.setData({
              longitude: res.longitude,
              latitude: res.latitude
            });
          },
        })
        break;
      default:
        // ...
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this;
    wx.getLocation({
      success: function (res) {
        page.setData({
          markers: [
            {
              longitude: res.longitude,
              latitude: res.latitude,
              iconPath: '/resources/img/pin.png',
              width: 20,
              height: 30
            }
          ]
        });
      },
    });

    wx.getSystemInfo({
      success: function (res) {
        // page.data.controls[0].position.top = res.windowHeight - 205;
        page.setData({
          controls: [
            {
              id: 1,
              position: {
                left: 20,
                top: res.windowHeight - 105
              },
              iconPath: '/resources/img/position.png',
              clickable: true
            }
          ]
        });
      },
    });
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