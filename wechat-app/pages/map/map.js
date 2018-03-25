// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 10,
    // polyline: [
    //   {
    //     points: [
    //       {
    //         longitude: 116.3325,
    //         latitude: 40.6,
    //       },
    //       {
    //         longitude: 116.0,
    //         latitude: 39.7,
    //       },
    //       {
    //         longitude: 116.6525,
    //         latitude: 39.7,
    //       },
    //       {
    //         longitude: 116.3325,
    //         latitude: 40.6,
    //       }
    //     ],
    //     color: '#00ff00',
    //     width: 10
    //   }
    // ]
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
        });
        break;
      case 2:
        let page = this;
        wx.getLocation({
          success: function (res) {
            let longitude = res.longitude;
            let latitude = res.latitude;
            let url = `https://free-api.heweather.com/s6/weather/now?location=${longitude},${latitude}&key=fa66a4c393974639bcb6f2c06bf504b8`;
            wx.request({
              url: url,
              success: function (res) {
                let cond = res.data.HeWeather6[0].now.cond_txt;
                let temp = res.data.HeWeather6[0].now.tmp;
                let content = `天气:${cond}，温度:${temp}°C`;
                page.setData({
                  longitude: longitude,
                  latitude: latitude,
                  markers: [
                    {
                      longitude: longitude,
                      latitude: latitude,
                      iconPath: '/resources/img/pin.png',
                      width: 20,
                      height: 30,
                      label: {
                        content: content,
                        bgColor:'#ffcccc',
                        borderColor: '#ffffff',
                        borderRadius: 3,
                        borderWidth: 3
                      }
                    }
                  ]
                });
              }
            });
          },
        });
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
          longitude: res.longitude,
          latitude: res.latitude,
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
            },
            {
              id: 2,
              position: {
                left: 20,
                top: res.windowHeight - 155
              },
              iconPath: '/resources/img/weather.png',
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