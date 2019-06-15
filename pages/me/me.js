// pages/me/me.js
Page({
  data: {
    current: 0,
    activeTab: 'left',
    data: [{
      date: '本周四',
      list: [{
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        },
        {
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        },
        {
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        },
        {
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        }
      ]
    }, {
      date: '本周三',
      list: [{
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        },
        {
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        },
        {
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        },
        {
          time: '14:00',
          content: '完成了所以我们提出了将关照生活、关恍恍惚惚哈'
        }
      ]
    }]
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