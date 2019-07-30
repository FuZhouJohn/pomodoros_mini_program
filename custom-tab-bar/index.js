Component({
  data: {
    active: 0,
    color: "#7F8389",
    selectedColor: "#F6705A",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/images/home.png",
      selectedIconPath: "/images/home-active.png",
      text: "数据统计"
    }, {
      pagePath: "/pages/pomodoro/pomodoro",
      iconPath: "/images/total.png",
      selectedIconPath: "/images/total-active.png",
      text: "专注"
    }, {
      pagePath: "/pages/me/me",
      iconPath: "/images/me.png",
      selectedIconPath: "/images/me-active.png",
      text: "我的"
    }],
    show: true
  },
  attached() {},
  methods: {
    onChange(event) {
      this.setData({
        active: event.detail
      });
      wx.switchTab({
        url: this.data.list[event.detail].pagePath
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.pagePath === `/${page.route}`)
      });
    },
    hideTabbar() {
      this.setData({
        show: false
      })
    },
    showTabbar() {
      this.setData({
        show: true
      })
    }
  }
})