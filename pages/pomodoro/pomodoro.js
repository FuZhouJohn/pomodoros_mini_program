const {
  http
} = require('../../lib/http.js')
Component({
  timer: null,
  data: {
    time: '25:00',
    status: 'initial', // initial、start、pause、end
    second: 1500,
    pageShow: false
  },
  methods:{
    onLoad() { },
    onShow() {
      this.data.pageShow = true
      this.getTabBar().init();
      this.converTime()
    },
    onHide() {
      this.data.pageShow = false
    },
    setTimer() {
      return setTimeout(() => {
        this.data.second = this.data.second - 1
        this.converTime()
        if (this.data.second <= 0) {
          clearTimeout(this.timer)
          wx.vibrateLong()
          this.setData({
            status: 'end'
          })
          this.getTabBar().showTabbar()
        } else {
          this.timer = this.setTimer()
        }
      }, 1000)
    },
    startTimer() {
      this.setData({
        status: 'start'
      })
      this.getTabBar().hideTabbar()
      this.timer = this.setTimer()
      http.post('/tomatoes')
        .then(res => {
          let pomodoro = res.data.resource
          this.data['pomodoro-id'] = pomodoro.id
        })
    },
    pauseTimer() {
      this.setData({
        status: 'pause'
      })
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    againTimer() {
      this.data.second = 1500
      this.converTime()
      this.startTimer()
    },
    converTime() {
      let second = this.data.second
      let m = Math.floor(second / 60)
      let s = Math.floor(second % 60)
      if (s < 10) {
        s = '0' + s
      }
      if (m < 10) {
        m = '0' + m
      }
      if (this.data.pageShow) {
        this.setData({
          time: `${m}:${s}`
        })
      } else {
        this.data.time = `${m}:${s}`
      }

    },
    giveUpPomodoro() {
      this.pauseTimer()
      http.put(`/tomatoes/${this.data['pomodoro-id']}`, {
        description: '',
        aborted: true
      }).then(res => {
        let data = {
          status: 'initial',
          second: 1500
        }
        this.setData(data)
        this.converTime()
        this.getTabBar().showTabbar()
      })
    }
  }
  
})