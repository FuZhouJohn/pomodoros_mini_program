const {
  http
} = require('../../lib/http.js')
Page({
  timer: null,
  data: {
    second: 1500,
    time: '25:00',
    status: 'initial', // initial、start、pause、end
    description: '',
    visible: false,
    placeholder:'',
    aborted:false
  },
  onLoad: () => {},
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    this.converTime()
  },
  setTimer: function() {
    return setInterval(() => {
      this.data.second = this.data.second - 1
      this.converTime()
      if (this.data.second <= 0) {
        clearInterval(this.timer)
        wx.vibrateLong()
        this.setData({
          status: 'end',
          visible:true,
          placeholder:'完成了什么呢？',
          aborted:false
        })
      }
    }, 1000)
  },
  startTimer: function() {
    this.setData({
      status: 'start'
    })
    this.timer = this.setTimer()
    http.post('/tomatoes')
      .then(res => {
        let pomodoro = res.data.resource
        this.setData({
          'pomodoro-id': pomodoro.id
        })
      })
  },
  pauseTimer: function() {
    this.setData({
      status: 'pause'
    })
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  againTimer: function() {
    this.data.second = 1500
    this.converTime()
    this.startTimer()
  },
  converTime: function() {
    let second = this.data.second
    let m = Math.floor(second / 60)
    let s = Math.floor(second % 60)
    if (s < 10) {
      s = '0' + s
    }
    if (m < 10) {
      m = '0' + m
    }
    this.setData({
      time: `${m}:${s}`
    })
  },
  confirmInput:function(e){
    this.setData({
      description: e.detail.detail.value
    })
  },
  updatePomodoro:function(){
    http.put(`/tomatoes/${this.data['pomodoro-id']}`,{
      description: this.data.description,
      aborted: this.data.aborted
    }).then(res=>{
      let data = {
        description: '',
        visible: false,
      }
      if (this.data.aborted){
        data['status'] = "initial"
        data['second'] = 1500
      }
      this.setData(data,function(){
        if (this.data.aborted) {
          this.converTime()
        }
      })
      
    })
  },
  openConfirm:function(){
    this.pauseTimer()
    this.setData({
      visible:true,
      aborted:true,
      placeholder:'为啥要放弃呢？'
    })
  },
  cancel:function(){
    console.log(1)
    this.startTimer()
    this.setData({
      visible: false,
      description:''
    })
  }
})