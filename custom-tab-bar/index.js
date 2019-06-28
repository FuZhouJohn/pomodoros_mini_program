Component({
  data: {
    selected: 1,
    color: "#7F8389",
    selectedColor: "#F6705A",
    list: [{
      pagePath: "/pages/pomodoro/pomodoro",
      iconPath: "/images/total.png",
      selectedIconPath: "/images/total-active.png",
      text: "专注"
    }, {
      pagePath: "/pages/home/home",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home-active.png",
      text: "数据统计"
    }, {
      pagePath: "/pages/me/me",
      iconPath: "/images/me.png",
      selectedIconPath: "/images/me-active.png",
      text: "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})