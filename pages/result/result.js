var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    result: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number: 20,
      result: 20
    })
  },

  back: function (e) {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var prevPage = pages[pages.length - 2];
    wx.navigateBack({});
  }
})