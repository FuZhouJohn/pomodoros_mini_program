// pages/me/me.js
Page({
  data: {
    current: 0,
    activeTab: 'left',
    data: []
  },
  clickTab: function(e) {
    this.changeActive(e.currentTarget.dataset.index)
  },
  changeActive: function(index) {
    if (index === 0) {
      this.setData({
        activeTab: 'left',
        current: index
      })
    } else {
      this.setData({
        activeTab: 'right',
        current: index
      })
    }
  },
  changePane: function(e) {
    if (e.detail.source === 'touch') {
      this.changeActive(e.detail.current)
    }
  },
  onLoad: function(options) {

  },
  onReady: function() {

  },
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})