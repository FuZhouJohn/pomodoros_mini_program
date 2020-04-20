const {
  addPomodoro,
  updatePomodoro
} = require('../../api/pomodoro.js')
Component({
  timer: null,
  pomodoroId: null,
  data: {
    time: '25:00',
    status: 'initial', // initial、start、pause、end
    second: 150000
  },
  methods: {
    onLoad() {},
    onShow() {
      this.converTime(this.data.second)
    },
    onHide() {},
    setTimer() {
      return setTimeout(() => {
        this.data.second = this.data.second - 1
        this.converTime(this.data.second)
        if (this.data.second <= 0) {
          updatePomodoro(this.pomodoroId, {
            description: '',
            aborted: false
          })
          clearTimeout(this.timer)
          wx.vibrateLong()
          this.setData({
            status: 'end'
          })
        } else {
          this.timer = this.setTimer()
        }
      }, 10)
    },
    startTimer() {
      if (this.data.status === 'initial' || this.data.status === 'end') {
        addPomodoro()
          .then(res => {
            let pomodoro = res.data.resource
            this.pomodoroId = pomodoro.id
          })
      }
      this.setData({
        status: 'start'
      })
      this.timer = this.setTimer()
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
      this.data.second = 150000
      this.converTime(this.data.second)
      this.startTimer()
    },
    converTime(second) {
      let _second = second / 100
      let m = Math.floor(_second / 60)
      let s = Math.floor(_second % 60)
      if (s < 10) {
        s = '0' + s
      }
      if (m < 10) {
        m = '0' + m
      }
      if (this.data.time !== `${m}:${s}`) {
        this.setData({
          time: `${m}:${s}`
        })
      }

    },
    giveUpPomodoro() {
      this.pauseTimer()
      updatePomodoro(this.pomodoroId, {
        description: '',
        aborted: true
      }).then(res => {
        let data = {
          status: 'initial',
          second: 150000
        }
        this.setData(data)
        this.converTime(this.data.second)
      })
    }
  }

})